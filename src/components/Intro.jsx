import AudioPlayer from './AudioPlayer';
import { getGreatestHits } from '../utils/trackUtils';

export default function Intro() {
	const greatestHits = getGreatestHits();

	return (
		<>
			<h2>who / why is this?</h2>
			<div className="intro">
				<div>
					<p>
						<span style={{ fontSize: '22px', color: 'var(--color3)', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>hey i'm kri,</span><br /><br />
						I've been a long-time musician and a some-time hobbyist game dev.<br /><br />
						Combining these two interests has been the most fun in the world!<br />
						I made this page to showcase stuff I'm proud of, even if I haven't really finished a project of my own yet.<br />
						<small style={{ fontSize: '14px', color: 'var(--color5)', fontStyle: 'italic' }}>
							(i hope to expand this place with more dev-related stuff in the future)
						</small><br /><br />
						Feel free to contact me for anything!
					</p>
				</div>
				<div>
					<h3 style={{ fontSize: '22px' }}>The Greatest* Hits**</h3>
					{greatestHits.map((track, index) => {
						const filename = track.path.split('/').pop().replace(/\.[^/.]+$/, '');
						return (
							<AudioPlayer
								key={index}
								src={track.path}
								description={filename}
							/>
						);
					})}
				</div>
			</div>
			<br />
		</>
	);
}