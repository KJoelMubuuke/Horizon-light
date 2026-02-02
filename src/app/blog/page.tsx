import React from "react";

export default function BlogPage() {
	const posts = [
		{ id: 1, title: 'Event Spotlight: Festival Night' },
		{ id: 2, title: 'How We Design Stage Lighting' }
	];

	return (
		<main className="site-container" style={{ padding: '48px 16px' }}>
			<h1>Blog</h1>
			<p>Latest news and stories from Genesis Events.</p>
			<ul style={{ marginTop: 20 }}>
				{posts.map(post => (
					<li key={post.id} style={{ marginBottom: 8 }}>{post.title}</li>
				))}
			</ul>
		</main>
	);
}
