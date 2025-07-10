import { useEffect, useRef } from 'react';

// Shared link data
const linkData = [
	{
		icon: '/icons/discord.svg',
		text: 'kri_real',
		url: null
	},
	{
		icon: '/icons/bluesky.svg',
		text: '@kri.boats',
		url: 'https://bsky.app/profile/kri.boats'
	},
	{
		icon: '/icons/twitter.svg',
		text: '@kri_boats',
		url: 'https://twitter.com/kri_boats'
	},
	{
		icon: '/icons/email.svg',
		text: 'kri.boats@gmail.com',
		url: 'mailto:kri.boats@gmail.com'
	}
];

function StickyLinks() {
	const linksRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (linksRef.current) {
				const scrollY = window.scrollY;

				// Calculate the position of the original links section
				const originalLinks = document.querySelector('.header .links');
				let threshold = 400; // fallback value

				if (originalLinks) {
					const rect = originalLinks.getBoundingClientRect();
					const linksTop = rect.top + scrollY;
					// Show sticky links when original links are closer to going off screen
					threshold = linksTop - 20;
				}

				if (scrollY > threshold) {
					linksRef.current.style.top = '0px';
					// Hide original links when sticky links are visible
					if (originalLinks) {
						originalLinks.style.opacity = '0';
						originalLinks.style.pointerEvents = 'none';
					}
				} else {
					linksRef.current.style.top = '-120px';
					// Show original links when sticky links are hidden
					if (originalLinks) {
						originalLinks.style.opacity = '1';
						originalLinks.style.pointerEvents = 'auto';
					}
				}
			}
		};

		// Initial calculation and scroll listener
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return (
		<div
			className="sticky-links"
			ref={linksRef}
			style={{
				position: 'fixed',
				top: '-120px',
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 9999,
				display: 'inline-flex',
				flexDirection: 'row',
				justifyContent: 'center',
				flexWrap: 'wrap',
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				borderRadius: '0px 0px 10px 10px',
				padding: '5px'
			}}
		>
			{linkData.map((link, index) => (
				<div key={index} className="link">
					<img className="icon" src={link.icon} alt="" />
					{link.url ? (
						<a className="url" href={link.url} target="_blank" rel="noopener noreferrer">
							{link.text}
						</a>
					) : (
						link.text
					)}
				</div>
			))}
		</div>
	);
}

export default function Header() {
	const handleQuackClick = () => {
		const audio = new Audio('/quack.mp3');
		audio.currentTime = 0;
		audio.play();
	};

	return (
		<>
			<StickyLinks />
			<div className="header">
				<h1 onClick={handleQuackClick}>
					Kri
				</h1>
				<h4>music guy</h4>

				<div className="links">
					{linkData.map((link, index) => (
						<div key={index} className="link">
							<img className="icon" src={link.icon} alt="" />
							{link.url ? (
								<a className="url" href={link.url} target="_blank" rel="noopener noreferrer">
									{link.text}
								</a>
							) : (
								link.text
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}