import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[var(--color-deep-navy)] text-white py-8">
			<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row gap-8">
				<div className="flex-1">
					<div className="font-bold text-lg">Geeni Events</div>
					<p className="text-gray-300 mt-2">Events • Production • Coverage</p>
				</div>
				<div className="flex-1">
					<h4 className="font-semibold">Services</h4>
					<ul className="mt-2 space-y-1 text-gray-300">
						<li><Link href="/services">Audio Visual</Link></li>
						<li><Link href="/services">Lighting & Staging</Link></li>
						<li><Link href="/services">Event Management</Link></li>
					</ul>
				</div>
				<div className="flex-1">
					<h4 className="font-semibold">Contact</h4>
					<p className="text-gray-300 mt-2">hello@geenievents.com<br/>+256 700 000 000</p>
				</div>
			</div>
		</footer>
	);
}
