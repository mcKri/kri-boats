import AudioPlayer from './AudioPlayer';

export default function Intro() {
	const greatestHits = [
		{ src: 'music/240919_wrrr.wav', description: '' },
		{ src: "music/221022_the.wav", description: "" },
		{ src: "music/241227_s.wav", description: "" },
		{ src: "music/bang.wav", description: "", loop: false }
	];

	return (
		<>
			<h2>who / why is this?</h2>
			<div className="intro">
				<div>
					<p>
						hi im Kri and i make music for games<br />
						woohoo yippee!!!<br /><br />
					</p>
				</div>
				<div>
					<h3 style={{ fontSize: '25px' }}>The greatest hits</h3>
					{greatestHits.map((track, index) => (
						<div key={index}>
							<audio
								controls
								preload="auto"
								src={track.src}
								loop={track.loop === undefined ? true : track.loop}
								crossOrigin="anonymous"
							></audio>
							<br />
						</div>
					))}
				</div>
			</div>
			<br />
		</>
	);
}