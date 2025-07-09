// src/components/ProjectList.jsx
import Project from './Project.jsx';

export default function ProjectList() {
	const projectsData = [
		{
			title: "???",
			date: null,
			link: null,
			description: "WIP",
			tracks: [
				{ src: "music/roomba/r.wav", description: "a music." }
			]
		},
		{
			title: "Boulder Bash",
			date: "january 2025",
			link: "https://megafinger.itch.io/boulder-bash",
			description: "Made for a two-week game jam, with the theme \"You Are The Weapon\". It's about a boulder rolling down a hill and crushing a bunch of guys.\n\nThis time around I was mostly involved on the programming side, but I was still able to make some tracks!",
			tracks: [
				{ src: "music/boulder/uh.ogg", description: "Menu music" },
				{ src: "music/boulder/thing3.ogg", description: "Gameplay music for the first couple levels" },
				{ src: "music/boulder/thign2.ogg", description: "Music for the extremely difficult finals levels" }
			]
		},
		{
			title: "Sunfall",
			date: "july 2024",
			link: "https://unicornly.itch.io/sunfall",
			description: "Made for a two-week game jam, with the theme \"Shadow Alchemy\". We ended up settling on an idea where you switch between the dark/light world, which allowed me to do some fun stuff with the tracks!",
			tracks: [
				{ src: "music/sunfall/lab_present.ogg", description: "The present/dark version of the Lab, the intro area to the game." },
				{ src: "music/sunfall/lab_past.ogg", description: "(past/light version)" },
				{ src: "music/sunfall/town_past.ogg", description: "The light version of the town music, where most of the quests take place!" },
				{ src: "music/sunfall/thing_2.wav", description: "(unused track)" }
			]
		},
		{
			title: (
				<>
					Car <i style={{ fontSize: '15px' }}>(working title)</i>
				</>
			),
			date: "march 2024 - august 2024",
			link: null,
			description: "A solo project I was working on for a while, which I ended up putting on hold. (But I'd like to finish it someday!)\n\nIt's an extremely unfair and irritating driving game, following John \"Drive\" Car, a man on his way out of the apocalypse.",
			tracks: [
				{ src: "music/car/vrr.wav", description: "One of the tracks that would play on the car radio." }
			]
		},
		{
			title: "Fruit Salad",
			date: "october 2023",
			link: "https://store.steampowered.com/app/1848520/Fruit_Salad/",
			description: "A chill lil' puzzly game some friends asked me to make music for!",
			tracks: [
				{ src: "music/fruit salad/uhh.wav", description: "Menu music." },
				{ src: "music/fruit salad/something.wav", description: "Initial gameplay music." },
				{ src: "music/fruit salad/beeps.wav", description: "Gameplay music after you cross a certain score and start popping off." }
			]
		},
		{
			title: (
				<>
					<b className="R">R</b><b className="G">G</b><b className="B">B</b>{" "}
					<i style={{ fontSize: '15px' }}>(working title)</i>
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
				{ src: "music/rgb/220920_dink.wav", description: "--shop--" },
				{ src: "music/rgb/220924_boss.flac", description: "--boss fight--" },
				{ src: "music/rgb/220824_evil.mp3", description: "Evil vampire man dialogue music" },
				{ src: "music/rgb/220629_beep.flac", description: "--combat music--" }
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
				{ src: "music/justice realms/queen of hearts+.ogg", description: "Boss battle music for the Queen of Hearts." },
				{
					src: "music/justice realms/gog fight+.ogg",
					description: (
						<>
							Boss battle music for when you inevitably fight god.<br />I also made another version
							of this track for the <a className="url"
								href="https://www.youtube.com/watch?v=M55tkpsMo2s&list=PLWCe6Rd6c67XpVwhBJa2zjWWBe219VEsX&index=1">Menu
								Theme!</a>
						</>
					)
				},
				{ src: "music/justice realms/green fight.ogg", description: "Combat music for the Green Zone, which is green. Flutes are mandatory in Green Zones." },
				{ src: "music/justice realms/blue fight.ogg", description: "Combat music for the Blue Zone, a weird place." }
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
				{
					src: "music/cross boss/main theme OMEGAFINISHED.mp3",
					description: "The Main Theme for the game! This was very fun to make because it really made me think about the whole vibe for the project."
				},
				{ src: "music/cross boss/biz.mp3", description: "Breakroom music for quiet dialog sections in between minigames." }
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
				{ src: "music/moonthly banjo kazooie.wav", description: "--bango mango--" }
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
					tracks={project.tracks}
					hasBreak={project.hasBreak}
				/>
			))}
		</div>
	);
}