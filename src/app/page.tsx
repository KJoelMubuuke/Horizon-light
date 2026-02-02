import React from "react";

const galleryImages = [
  'hero.jpg',
  'hero_section.jpg',
  'introduction.jpg',
  'corporate1.jpg',
  'lighting1.jpg',
  'lighting2.jpg',
  'sound.webp',
  'events2.png'
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.36)), url('/Genesis-events/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '72vh'
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 text-white flex items-center h-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight">Experience the pulse of Uganda's biggest events</h1>
            <p className="mt-4 text-lg text-white/90">Event Production, Nompai | National/US Coverage</p>
            <div className="mt-6">
              <a className="btn-gold" href="/contact">Get a Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6">
          <div className="bg-white rounded-lg overflow-hidden p-4 shadow">
            <img src={`/Genesis-events/${encodeURIComponent('corporate1.jpg')}`} alt="Corporate Events" className="w-full img-thumb-sm img-cover rounded-md shadow-sm" />
            <h3 className="mt-3 text-lg font-semibold">Corporate Events</h3>
            <p className="text-gray-600">Full production and AV services for conferences, meetings and corporate shows.</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden p-4 shadow">
            <img src={`/Genesis-events/${encodeURIComponent('wedding 3.jpg')}`} alt="Weddings & Ceremonies" className="w-full img-thumb-sm img-cover rounded-md shadow-sm" />
            <h3 className="mt-3 text-lg font-semibold">Weddings & Ceremonies</h3>
            <p className="text-gray-600">Beautifully executed ceremonies and receptions with professional staging and sound.</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden p-4 shadow">
            <img src={`/Genesis-events/${encodeURIComponent('festivals.jpg')}`} alt="Festivals & Concerts" className="w-full img-thumb-sm img-cover rounded-md shadow-sm" />
            <h3 className="mt-3 text-lg font-semibold">Festivals & Concerts</h3>
            <p className="text-gray-600">Large-scale event production including lighting, sound and crowd management.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {galleryImages.map((img) => (
                <div key={img} className="rounded overflow-hidden bg-white shadow">
                <img src={`/Genesis-events/${encodeURIComponent(img)}`} alt={img} className="w-full img-thumb-xs img-cover rounded-md shadow-sm hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[var(--color-navy)] text-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <svg className="mx-auto" width="42" height="42" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill="white"/></svg>
            <h4 className="mt-3 font-semibold">Cultivating Edge Tech</h4>
            <p className="mt-2 text-sm">We use modern production tech to give your events an edge.</p>
          </div>
          <div>
            <svg className="mx-auto" width="42" height="42" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill="white"/></svg>
            <h4 className="mt-3 font-semibold">Experienced Team</h4>
            <p className="mt-2 text-sm">Professionals with years of experience in event production.</p>
          </div>
          <div>
            <svg className="mx-auto" width="42" height="42" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8H9L12 2Z" fill="white"/></svg>
            <h4 className="mt-3 font-semibold">Trusted by Top Brands</h4>
            <p className="mt-2 text-sm">We've worked with leading brands across the region.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
