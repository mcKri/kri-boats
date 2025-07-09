import * as React from 'react';

export default function AudioVisualizer() {
	const visualizerLeftRef = React.useRef(null);
	const visualizerRightRef = React.useRef(null);
	const audioMotionLeftRef = React.useRef(null);
	const audioMotionRightRef = React.useRef(null);
	const sharedAudioContextRef = React.useRef(null);
	const connectedAudioElementsRef = React.useRef(new Set());
	const audioElementsRef = React.useRef(new Set());

	React.useEffect(() => {
		const initializeVisualizers = async () => {
			try {
				const { default: AudioMotionAnalyzer } = await import('audiomotion-analyzer');

				sharedAudioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

				const visualizerSettings = {
					audioCtx: sharedAudioContextRef.current,
					mode: 4,
					overlay: true,
					showBgColor: false,
					showScaleX: false,
					showPeaks: false,
				};

				audioMotionLeftRef.current = new AudioMotionAnalyzer(visualizerLeftRef.current, {
					...visualizerSettings,
					channelLayout: 'single-left',
				});

				audioMotionRightRef.current = new AudioMotionAnalyzer(visualizerRightRef.current, {
					...visualizerSettings,
					channelLayout: 'single-right',
				});

				const colorStops = [{ color: '#488cab' }];
				audioMotionLeftRef.current.registerGradient('myGradient', { colorStops });
				audioMotionRightRef.current.registerGradient('myGradient', { colorStops });
				audioMotionLeftRef.current.gradient = 'myGradient';
				audioMotionRightRef.current.gradient = 'myGradient';

				setupAudioManagement();
			} catch (error) {
				console.error('Error initializing audio visualizers:', error);
			}
		};

		const setupAudioManagement = () => {
			const connectAudioToVisualizers = (audioElement) => {
				if (connectedAudioElementsRef.current.has(audioElement)) return;

				const source = sharedAudioContextRef.current.createMediaElementSource(audioElement);
				audioMotionLeftRef.current.connectInput(source);
				audioMotionRightRef.current.connectInput(source);
				connectedAudioElementsRef.current.add(audioElement);
				audioElementsRef.current.add(audioElement);
			};

			const stopAllOtherAudio = function () {
				audioElementsRef.current.forEach(audio => {
					if (audio !== this && !audio.paused) {
						audio.pause();
						audio.currentTime = 0;
					}
				});
			};

			const setOtherVolumes = function () {
				audioElementsRef.current.forEach(audio => {
					if (audio !== this) {
						audio.volume = this.volume;
					}
				});
			};

			const resumeAudioContext = () => {
				if (sharedAudioContextRef.current.state === 'suspended') {
					sharedAudioContextRef.current.resume();
				}
			};

			// Initialize existing audio elements
			const initialAudioElements = document.querySelectorAll('audio');
			initialAudioElements.forEach(audio => {
				connectAudioToVisualizers(audio);
				audio.volume = 0.35;

				audio.addEventListener('play', function () {
					resumeAudioContext();
					stopAllOtherAudio.call(this);
				});

				audio.addEventListener('volumechange', function () {
					setOtherVolumes.call(this);
				});
			});

			document.addEventListener('click', () => {
				resumeAudioContext();
			});

			// Watch for new audio elements (for dynamic content)
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					mutation.addedNodes.forEach((node) => {
						if (node.nodeType === 1) {
							const newAudioElements = node.querySelectorAll ? node.querySelectorAll('audio') : [];
							newAudioElements.forEach(audio => {
								connectAudioToVisualizers(audio);
								audio.volume = 0.35;

								audio.addEventListener('play', function () {
									resumeAudioContext();
									stopAllOtherAudio.call(this);
								});

								audio.addEventListener('volumechange', function () {
									setOtherVolumes.call(this);
								});
							});
						}
					});
				});
			});

			observer.observe(document.body, { childList: true, subtree: true });
		};

		initializeVisualizers();

		return () => {
			if (audioMotionLeftRef.current) {
				audioMotionLeftRef.current.destroy();
			}
			if (audioMotionRightRef.current) {
				audioMotionRightRef.current.destroy();
			}
			if (sharedAudioContextRef.current) {
				sharedAudioContextRef.current.close();
			}
		};
	}, []);

	return (
		<>
			<div id="audio-visualizer-left" ref={visualizerLeftRef}></div>
			<div id="audio-visualizer-right" ref={visualizerRightRef}></div>
		</>
	);
}