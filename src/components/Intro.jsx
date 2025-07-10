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
						hi im Kri and i make music for games<br />
						woohoo yippee!!!<br /><br />
					</p>
				</div>
				<div>
					<h3 style={{ fontSize: '25px' }}>The greatest hits</h3>
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