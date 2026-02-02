import React from "react";

const projects = [
	{ id: 'p1', title: 'Corporate Conference Production' },
	{ id: 'p2', title: 'Outdoor Music Festival' }
];

export default function PortfolioPage() {
	const images = [
		'wedding 3.jpg',
		'wedding 2.jpeg',
		'festival and concert.jpg',
		'events2.png',
		'corporate1.jpg',
		'hero.jpg'
	];

	return (
		<main className="site-container" style={{ padding: '48px 16px' }}>
			<h1>Portfolio</h1>
			<p>Case studies and example projects showcasing our work.</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
				{images.map((img, i) => (
					<div key={i} className="relative rounded-lg overflow-hidden bg-white shadow">
						<img src={`/Genesis-events/${encodeURIComponent(img)}`} alt={img} className="w-full h-32 md:h-40 object-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
						<div className="absolute left-0 right-0 bottom-0 p-3 portfolio-overlay-gradient text-white">
							<h4 className="font-semibold">Project {i + 1}</h4>
							<p className="text-sm">Brief project summary</p>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
