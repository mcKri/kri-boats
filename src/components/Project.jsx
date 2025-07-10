import AudioPlayer from './AudioPlayer';

export default function Project({ title, date, description, tracks, link, hasBreak }) {
	return (
		<div className="project" >
			<h3>
				<b>
					{link ? (
						<a href={link} class="url" target="_blank" rel="noopener noreferrer">{title}</a>
					) : (
						title
					)}
				</b>
				<span>{date}</span>
			</h3>

			{description && <p className="projectDesc">{description}</p>}
			{hasBreak && <br />}

			<div className="projectContent">
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