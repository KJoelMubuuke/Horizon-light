"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	const overHero = pathname === "/";

	return (
		<header className={`sticky top-0 z-40 ${overHero ? 'text-white' : 'text-[var(--color-navy)]'} `}>
			<div className="max-w-screen-xl mx-auto px-6 flex items-center h-20">
				<div className="font-bold text-lg">GENESIS EVENTS</div>
				<nav aria-label="Main navigation" className="ml-auto flex items-center gap-6">
					<Link href="/" className={`${overHero ? 'text-white' : 'text-[var(--color-navy)]'} hover:opacity-90`}>Home</Link>
					<Link href="/about" className={`${overHero ? 'text-white' : 'text-[var(--color-navy)]'} hover:opacity-90`}>About Us</Link>
					<Link href="/services" className={`${overHero ? 'text-white' : 'text-[var(--color-navy)]'} hover:opacity-90`}>Services</Link>
					<Link href="/portfolio" className={`${overHero ? 'text-white' : 'text-[var(--color-navy)]'} hover:opacity-90`}>Portfolio</Link>
					<Link href="/contact" className={`${overHero ? 'text-white' : 'text-[var(--color-navy)]'} hover:opacity-90`}>Contact</Link>
					<Link href="/contact" className="btn-gold">Get a Free Quote</Link>
				</nav>
			</div>
		</header>
	);
}
