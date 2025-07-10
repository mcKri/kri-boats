// src/components/ProjectList.jsx
import Project from './Project.jsx';
import { getTrackData } from '../utils/trackUtils.js';

export default function ProjectList() {
	// Helper function to add track metadata from JSON
	const processTrack = (track) => {
		const trackData = getTrackData(track.src);
		return {
			...track,
			description: trackData?.description || track.description || ""
		};
	};

	const projectsData = [
		{
			title: "???",
			date: null,
			link: null,
			description: "WIP",
			tracks: [
				{ src: "roomba/r.wav" }
			]
		},
		{
			title: "Boulder Bash",
			date: "january 2025",
			link: "https://megafinger.itch.io/boulder-bash",
			description: "Made for a two-week game jam, with the theme \"You Are The Weapon\". It's about a boulder rolling down a hill and crushing a bunch of guys.\n\nThis time around I was mostly involved on the programming side, but I was still able to make some tracks!",
			tracks: [
				{ src: "boulder/uh.ogg" },
				{ src: "boulder/thing3.ogg" },
				{ src: "boulder/thign2.ogg" }
			]
		},
		{
			title: "Sunfall",
			date: "july 2024",
			link: "https://unicornly.itch.io/sunfall",
			description: "Made for a two-week game jam, with the theme \"Shadow Alchemy\". We ended up settling on an idea where you switch between the dark/light world, which allowed me to do some fun stuff with the tracks!",
			tracks: [
				{ src: "sunfall/lab_present.ogg" },
				{ src: "sunfall/lab_past.ogg" },
				{ src: "sunfall/town_past.ogg" },
				{ src: "sunfall/thing_2.wav" }
			]
		},
		{
			title: (
				<>
					Car <i style={{ fontSize: '15px', fontWeight: 500 }}>(working title)</i>
				</>
			),
			date: "march 2024 - august 2024",
			link: null,
			description: "A solo project I was working on for a while, which I ended up putting on hold. (But I'd like to finish it someday!)\n\nIt's an extremely unfair and irritating driving game, following John \"Drive\" Car, a man on his way out of the apocalypse.",
			tracks: [
				{ src: "car/vrr.wav" }
			]
		},
		{
			title: "Fruit Salad",
			date: "october 2023",
			link: "https://store.steampowered.com/app/1848520/Fruit_Salad/",
			description: "A chill lil' puzzly game some friends asked me to make music for!",
			tracks: [
				{ src: "fruit salad/uhh.wav" },
				{ src: "fruit salad/something.wav" },
				{ src: "fruit salad/beeps.wav" }
			]
		},
		{
			title: (
				<>
					<b className="R">R</b><b className="G">G</b><b className="B">B</b>{" "}
					<i style={{ fontSize: '15px', fontWeight: 500 }}>(working title)</i>
				</>
			),
			date: "august 2022 - I DON'T KNOW",
			link: null,
			description: (
				<>
					<span className="R">Please </span>
					<span className="G">be </span>
					<span className="B">patient.</span>
				</>
			),
			tracks: [
				{ src: "rgb/220920_dink.wav" },
				{ src: "rgb/220924_boss.flac" },
				{ src: "rgb/220824_evil.mp3" },
				{ src: "rgb/220629_beep.flac" }
			]
		},
		{
			title: (
				<div style={{ fontSize: '30px' }}>
					Justice Realms:<span>july 2022</span><br />Painting of Guidance
				</div>
			),
			date: null,
			link: null,
			description: (
				<>
					One of three games I worked on for a 72-hour game jam.
					Justice Realms is a narrative-driven JRPG with a variety of different areas and encounters, which meant
					a LOT of potential tracks.<br /><br />
					Other musicians on the team handled the area music, while I ended up making the main theme and every
					enemy encounter track.
					(10 tracks! <a className="url"
						href="https://www.youtube.com/playlist?list=PLWCe6Rd6c67XpVwhBJa2zjWWBe219VEsX">full playlist</a>)
				</>
			),
			tracks: [
				{ src: "justice realms/queen of hearts+.ogg" },
				{
					src: "justice realms/gog fight+.ogg",
					description: (
						<>
							Boss battle music for when you inevitably fight god.<br />
							I also made another version of this track for the <a className="url"
								href="https://www.youtube.com/watch?v=M55tkpsMo2s&list=PLWCe6Rd6c67XpVwhBJa2zjWWBe219VEsX&index=1">
								Menu Theme!
							</a>
						</>
					)
				},
				{ src: "justice realms/green fight.ogg" },
				{ src: "justice realms/blue fight.ogg" }
			]
		},
		{
			title: (
				<div>
					Cross Boss<span>february 2022</span>
				</div>
			),
			date: null,
			link: null,
			description: "An unfinished project in collaboration with other hobby devs. The game would be set in an office environment and focuses on completing various minigames to make it through the day, while advancing through the many different departments of the company.",
			tracks: [
				{ src: "cross boss/main theme OMEGAFINISHED.mp3" },
				{ src: "cross boss/biz.mp3" }
			]
		},
		{
			title: (
				<div style={{ fontWeight: 'normal', fontSize: '25px' }}>
					some other stuff
				</div>
			),
			date: null,
			link: null,
			description: null,
			tracks: [
				{ src: "moonthly banjo kazooie.wav" }
			],
			hasBreak: true // Special flag for the <br> before content
		}
	];

	return (
		<div className="projects">
			{projectsData.map((project, index) => (
				<Project
					key={index}
					title={project.title}
					date={project.date}
					link={project.link}
					description={project.description}
					tracks={project.tracks.map(processTrack)}
					hasBreak={project.hasBreak}
				/>
			))}
		</div>
	);
}