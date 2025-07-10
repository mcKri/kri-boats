import { useEffect, useRef } from 'react';

function StickyLinks() {
	const linksRef = useRef(null);
	const originalOffsetTop = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (linksRef.current) {
				// Store the original offset position on first run
				if (originalOffsetTop.current === null) {
					// Calculate where the links should be based on the header position
					const header = document.querySelector('.header');
					if (header) {
						originalOffsetTop.current = header.offsetTop + header.offsetHeight - 50; // Approximate links position
					}
				}

				if (originalOffsetTop.current && window.scrollY > originalOffsetTop.current) {
					linksRef.current.classList.add('sticky');
				} else {
					linksRef.current.classList.remove('sticky');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const linkData = [
		{
			icon: 'icons/discord.svg',
			text: 'kri_real',
			url: null
		},
		{
			icon: 'icons/bluesky.svg',
			text: '@kri.boats',
			url: 'https://bsky.app/profile/kri.boats'
		},
		{
			icon: 'icons/twitter.svg',
			text: '@kri_boats',
			url: 'https://twitter.com/kri_boats'
		},
		{
			icon: 'icons/email.svg',
			text: 'kri.boats@gmail.com',
			url: 'mailto:kri.boats@gmail.com'
		}
	];

	return (
		<div
			className="sticky-links"
			ref={linksRef}
			style={{
				position: 'fixed',
				top: '-100px',
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: 9999,
				display: 'inline-flex',
				flexDirection: 'row',
				justifyContent: 'center',
				flexWrap: 'wrap',
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				borderRadius: '10px 10px 0px 0px',
				padding: '5px 5px 0px 5px',
				width: 'auto',
				height: 'auto'
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
		const audio = new Audio('quack.mp3');
		audio.currentTime = 0;
		audio.play();
	};

	const linkData = [
		{
			icon: 'icons/discord.svg',
			text: 'kri_real',
			url: null
		},
		{
			icon: 'icons/bluesky.svg',
			text: '@kri.boats',
			url: 'https://bsky.app/profile/kri.boats'
		},
		{
			icon: 'icons/twitter.svg',
			text: '@kri_boats',
			url: 'https://twitter.com/kri_boats'
		},
		{
			icon: 'icons/email.svg',
			text: 'kri.boats@gmail.com',
			url: 'mailto:kri.boats@gmail.com'
		}
	];

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