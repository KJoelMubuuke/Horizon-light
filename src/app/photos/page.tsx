import React from "react";

const images = [
	'hero.jpg', 'introduction.jpg', 'lighting1.jpg', 'sound.webp'
];

export default function PhotosPage() {
	return (
		<main className="max-w-screen-xl mx-auto px-6 py-12">
			<h1 className="text-2xl font-semibold">Photos</h1>
			<p className="text-gray-600 mt-2">Selected event photography from our recent productions.</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
				{images.map(img => (
					<div key={img} className="rounded overflow-hidden bg-white shadow">
						<img src={`/Genesis-events/${encodeURIComponent(img)}`} alt={img} className="w-full img-thumb-sm img-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
					</div>
				))}
			</div>
		</main>
	);
}
