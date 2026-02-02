import React from "react";
import ServiceCard from '../../components/services/ServiceCard';

const servicesData = [
	{
		id: 'audio',
		title: 'Sound & Audio',
		description: 'Professional audio systems, mixing and live sound engineering for events of all sizes.',
		image: 'sound system.jpeg'
	},
	{
		id: 'visual',
		title: 'Visuals & Projection',
		description: 'LED walls, projection mapping and creative visual design to enhance the audience experience.',
		image: 'lighting3.jpg'
	},
	{
		id: 'lighting',
		title: 'Lighting & Effects',
		description: 'Dynamic lighting design, moving heads, washes and special effects to set the mood.',
		image: 'lighting1.jpg'
	},
	{
		id: 'staging',
		title: 'Staging & Rigging',
		description: 'Modular stages, trussing and safe rigging solutions for indoor and outdoor events.',
		image: 'staging 2.jpg'
	},
	{
		id: 'events',
		title: 'Event Management',
		description: 'Full event planning, on-site coordination and logistics to ensure smooth delivery.',
		image: 'events2.png'
	}
];

export default function ServicesPage() {
	return (
		<main className="site-container" style={{ padding: '64px 16px' }}>
			<h1>Services</h1>
			<p>We offer end-to-end production services to make your event successful.</p>

			<section style={{ marginTop: 32 }}>
				{servicesData.map((s, idx) => {
					const reversed = idx % 2 === 1; // alternate rows
					return (
						<div
							key={s.id}
							style={{
								display: 'flex',
								gap: 24,
								alignItems: 'center',
								marginBottom: 48,
								flexWrap: 'wrap',
								flexDirection: reversed ? 'row-reverse' : 'row'
							}}
						>
							<div style={{ flex: '1 1 420px', minWidth: 280 }}>
								<ServiceCard image={s.image} imageOnly />
							</div>

							<div style={{ flex: '1 1 360px', minWidth: 240, textAlign: reversed ? 'right' : 'left' }}>
								<h3 style={{ marginTop: 0 }}>{s.title}</h3>
								<p style={{ lineHeight: 1.6 }}>{s.description}</p>
								<div style={{ marginTop: 12 }}>
									<a className="btn-gold" href="/contact">Request a Quote</a>
								</div>
							</div>
						</div>
					);
				})}
			</section>

			<div style={{ height: 80 }} />
		</main>
	);
}
