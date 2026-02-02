import React from "react";

export default function ContactPage() {
	return (
		<main className="site-container" style={{ padding: '48px 16px' }}>
			<h1>Contact</h1>
			<p>Get in touch for quotes, availability and event consultations.</p>

			{/* Large Kampala image above the contact layout (reduced height) */}
			<div style={{ height: 320, borderRadius: 8, overflow: 'hidden', marginTop: 20, marginBottom: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.12)' }}>
				<img src="/Genesis-events/kampala.jpg" alt="Kampala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
			</div>

			<div className="contact-layout" style={{ marginTop: 0 }}>
				<div className="contact-info">

					<div style={{ marginTop: 12 }}>
						<h4>Contact Us</h4>
						<p>Office: Kampala, Uganda<br/>Email: hello@geenievents.com<br/>Phone: +256 700 000 000</p>
					</div>
				</div>

				<div className="contact-form">
			
					<form>
						<div style={{ marginBottom: 12 }}>
							<label>Name</label>
							<br />
							<input type="text" name="name" style={{ width: '100%', padding: 8 }} />
						</div>
						<div style={{ marginBottom: 12 }}>
							<label>Email</label>
							<br />
							<input type="email" name="email" style={{ width: '100%', padding: 8 }} />
						</div>
						<div style={{ marginBottom: 12 }}>
							<label>Contact</label>
							<br />
							<input type="text" name="contact" style={{ width: '100%', padding: 8 }} />
						</div>
						<div style={{ marginBottom: 12 }}>
							<label>Event</label>
							<br />
							<input type="text" name="event" style={{ width: '100%', padding: 8 }} />
						</div>
						<div style={{ marginBottom: 12 }}>
							<label>Date</label>
							<br />
							<input type="date" name="date" style={{ width: '100%', padding: 8 }} />
						</div>
						<div style={{ marginBottom: 12 }}>
							<label>Message</label>
							<br />
							<textarea name="message" rows={6} style={{ width: '100%', padding: 8 }} />
						</div>
						<button type="submit" className="btn-gold">Send Message</button>
					</form>
				</div>
			</div>
		</main>
	);
}
