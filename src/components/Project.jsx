import AudioPlayer from './AudioPlayer';

export default function Project({ title, date, description, tracks, link, hasBreak }) {
	const columns = Math.max(1, Math.min(3, Math.ceil(tracks.length / 2)));
	const contentWidth = `${columns * 300 + (columns - 1) * 10}px`;

	return (
		<div
			className="project"
			style={{
				width: contentWidth,
				maxWidth: contentWidth
			}}
		>
			<h3 style={{
				width: '100%',
				boxSizing: 'border-box',
				overflow: 'hidden'
			}}>
				<b>
					{link ? (
						<a href={link} className="url" target="_blank" rel="noopener noreferrer">{title}</a>
					) : (
						title
					)}
				</b>
				<span>{date}</span>
			</h3>

			{description && (
				<p className="projectDesc">
					{description}
				</p>
			)}
			{hasBreak && <br />}

			<div
				className="projectContent"
				style={{
					gridTemplateColumns: `repeat(${columns}, 300px)`,
					width: contentWidth
				}}
			>
				{tracks.map((track, index) => (
					<AudioPlayer
						key={index}
						src={track.src}
						description={track.description}
					/>
				))}
			</div>
		</div>
	);
}