import { getTrackData } from '../utils/trackUtils';
import './AudioPlayer.css';

export default function AudioPlayer({ src, description, loop }) {
	// Get track data from the database if not provided as props
	const trackData = getTrackData(src);

	// Use props if provided, otherwise fall back to track data
	const trackDescription = description !== undefined ? description : (trackData ? trackData.description : '');
	const trackLoop = loop !== undefined ? loop : (trackData ? trackData.loop : true);

	// Construct the full path with music/ prefix
	const fullPath = `music/${src}`;

	return (
		<div className="audio-player">
			{trackDescription && <p className="trackDesc">{trackDescription}</p>}
			<audio
				controls
				controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
				disablePictureInPicture
				src={fullPath}
				loop={trackLoop}
				preload="auto"
				crossOrigin="anonymous"
			></audio>
		</div>
	)
}