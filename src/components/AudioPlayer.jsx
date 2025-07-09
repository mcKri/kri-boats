export default function AudioPlayer({ src, description, loop = true }) {
	return (
		<div>
			<audio
				controls
				src={src}
				loop={loop}
				preload="auto"
				crossOrigin="anonymous"
			></audio>
			<p className="trackDesc">{description}</p>
		</div>
	)
}