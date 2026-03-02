/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Instagram, ExternalLink, Calendar as CalendarIcon, MapPin, Ticket } from "lucide-react";

const ARTISTS = [
  { name: "Bitstream Bleed", image: "https://picsum.photos/seed/artist1/400/400" },
  { name: "Jack Martin", image: "https://picsum.photos/seed/artist2/400/400" },
  { name: "Misprint Garden", image: "https://picsum.photos/seed/artist3/400/400" },
  { name: "Bran3world", image: "https://picsum.photos/seed/artist4/400/400" },
  { name: "Half Moon", image: "https://picsum.photos/seed/artist5/400/400" },
  { name: "DOSIS", image: "https://picsum.photos/seed/artist6/400/400" },
];

const EVENTS = [
  {
    title: "Infinity in Your Eyes: Bitstream Bleed & Friends",
    date: "Jan 24, 2026 @ 7pm",
    location: "Skylark Lounge",
    image: "https://picsum.photos/seed/event1/600/800",
    link: "#",
    cta: "GET TICKETS"
  },
  {
    title: "Mile High Mardi Gras: Rootbeer Richie & The Reveille's",
    date: "Jan 24, 2026 @ 7pm",
    location: "Skylark Lounge",
    image: "https://picsum.photos/seed/event2/600/800",
    link: "#",
    cta: "GET TICKETS"
  },
  {
    title: "THE TERRIBLE WISE PRESENTS: Wishing Well | 3rd Group Show",
    date: "April 25, 2026 @ 5pm",
    location: "Rocketspace",
    image: "https://picsum.photos/seed/event3/600/800",
    link: "#",
    cta: "RSVP"
  }
];

export default function App() {
  const base = (import.meta as any).env.BASE_URL;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* (1) HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-tw-black pt-20 pb-12 px-4">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ 
            backgroundImage: `url('${base}tw-hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-gothic text-tw-red mb-2 drop-shadow-[0_2px_10px_rgba(163,51,45,0.5)]">
            THE TERRIBLE WISE
          </h1>
          <p className="text-xl md:text-2xl font-serif tracking-[0.3em] text-tw-tan opacity-80 uppercase">
            An Artist Collective
          </p>
          
          <div className="mt-12">
            <div className="w-48 h-px bg-tw-red/50 mx-auto mb-4" />
            <div className="flex justify-center gap-8">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-tw-red transition-colors" />
              <Mail className="w-6 h-6 cursor-pointer hover:text-tw-red transition-colors" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* BUFFER: Black to Red */}
      <div 
        className="torn-edge z-20"
        style={{ backgroundImage: `url('${base}tw-black-red.jpg')` }}
      />

      {/* (2) MISSION */}
      <section className="bg-tw-red py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-tw-tan mb-8">Mission</h2>
            <div className="space-y-6 text-lg md:text-xl text-tw-tan/90 leading-relaxed font-serif italic">
              <p>
                Focused on bringing light to those in the margins through community. 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sectetuer adipiscing elit, uismod.
              </p>
              <p>
                We believe in the transformative power of collective creativity and the radical act of making art accessible to all.
              </p>
            </div>
            <button className="mt-10 px-8 py-3 border-2 border-tw-tan text-tw-tan font-serif tracking-widest hover:bg-tw-tan hover:text-tw-red transition-all duration-300">
              LEARN OUR LORE
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Polaroid Stack */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute top-0 left-0 w-64 h-80 bg-tw-tan p-4 shadow-xl rotate-[-6deg] transform hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-3/4 bg-tw-black/20 overflow-hidden">
                   <img src="https://picsum.photos/seed/mission1/400/500" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute top-10 right-0 w-64 h-80 bg-tw-tan p-4 shadow-xl rotate-[8deg] transform hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-3/4 bg-tw-black/20 overflow-hidden">
                   <img src="https://picsum.photos/seed/mission2/400/500" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="absolute top-20 left-1/4 w-64 h-80 bg-tw-tan p-4 shadow-xl rotate-[-2deg] transform hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-3/4 bg-tw-black/20 overflow-hidden">
                   <img src="https://picsum.photos/seed/mission3/400/500" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUFFER: Red to Tan (tw-red-cream) */}
      <div 
        className="torn-edge z-20"
        style={{ backgroundImage: `url('${base}tw-red-cream.jpg')` }}
      />

      {/* (3) ARTISTS */}
      <section className="bg-tw-tan py-24 px-6 md:px-12 lg:px-24 text-tw-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {ARTISTS.map((artist, i) => (
              <motion.div 
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-tw-black/10 overflow-hidden mb-4 border-4 border-white shadow-md group-hover:shadow-xl transition-all">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-serif font-bold tracking-tighter">{artist.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/3"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-serif">Artists</h2>
              <div className="w-12 h-12 text-tw-red">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
            </div>
            <div className="space-y-6 text-lg font-serif italic opacity-80">
              <p>
                Focused on bringing light to those in the margins through community. 
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna sectetuer adipiscing elit, uismod.
              </p>
              <p>
                Our collective is a tapestry of diverse voices, each contributing a unique thread to the larger narrative of our community.
              </p>
            </div>
            <button className="mt-10 px-8 py-3 bg-tw-red text-tw-tan font-serif tracking-widest hover:bg-tw-black transition-all duration-300">
              SEE OUR FULL ARTIST CATALOG
            </button>
          </motion.div>
        </div>
      </section>

      {/* BUFFER: Tan to Black (tw-cream-black) */}
      <div 
        className="torn-edge z-20"
        style={{ backgroundImage: `url('${base}tw-cream-black.jpg')` }}
      />

      {/* (4) COMMUNITY CALENDAR */}
      <section className="bg-tw-gray py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-tw-tan mb-4">Community Calendar</h2>
          <div className="space-y-2">
            <p className="text-tw-tan/60 font-serif italic">email theterriblewise@gmail.com to add your event!</p>
            <p className="text-tw-tan/60 font-serif italic">Follow us on Instagram to stay updated!</p>
          </div>
          <button className="mt-8 px-8 py-3 bg-tw-red text-tw-tan font-serif tracking-widest hover:bg-tw-tan hover:text-tw-black transition-all">
            SEE FULL CALENDAR
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, i) => (
            <motion.div 
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-tw-tan text-tw-black p-6 flex flex-col"
            >
              <div className="aspect-[3/4] bg-tw-black/10 mb-6 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 leading-tight">{event.title}</h3>
              <div className="mt-auto pt-4 space-y-2 text-sm opacity-70 font-serif">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-tw-black text-tw-tan font-serif text-sm tracking-widest hover:bg-tw-red transition-all flex items-center justify-center gap-2">
                {event.cta === "GET TICKETS" ? <Ticket className="w-4 h-4" /> : <CalendarIcon className="w-4 h-4" />}
                {event.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BUFFER: Black to Red (tw-black-red) */}
      <div 
        className="torn-edge z-20"
        style={{ backgroundImage: `url('${base}tw-black-red.jpg')` }}
      />

      {/* (5) STAY IN THE LOOP */}
      <section className="bg-tw-red py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img 
              src={`${base}jumping-chimera.jpg`} 
              alt="Jumping Chimera" 
              className="w-full max-w-md drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-tw-tan mb-4">STAY IN THE LOOP</h2>
            <p className="text-xl text-tw-tan/90 font-serif italic mb-10">
              Join our newsletter to stay up to date with events and discover local artists!
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="enter your email here" 
                className="w-full bg-transparent border-2 border-tw-tan p-4 text-tw-tan placeholder:text-tw-tan/50 focus:outline-none focus:bg-tw-tan/10 transition-all font-serif"
              />
              <button className="px-10 py-3 bg-tw-tan text-tw-red font-serif font-bold tracking-widest hover:bg-tw-black hover:text-tw-tan transition-all">
                submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* BUFFER: Red to Black */}
      <div 
        className="torn-edge z-20"
        style={{ backgroundImage: `url('${base}tw-red-black.jpg')` }}
      />

      {/* (6) FOOTER */}
      <footer className="bg-tw-black py-20 px-6 md:px-12 lg:px-24 text-tw-tan">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <nav className="flex flex-wrap gap-x-8 gap-y-4 font-serif font-bold tracking-widest text-sm">
              <a href="#" className="hover:text-tw-red transition-colors">LORE</a>
              <a href="#" className="hover:text-tw-red transition-colors">ARTISTS</a>
              <a href="#" className="hover:text-tw-red transition-colors">EVENTS</a>
              <a href="#" className="hover:text-tw-red transition-colors">COW</a>
              <a href="#" className="hover:text-tw-red transition-colors">CONTACT</a>
            </nav>
            <div className="flex gap-8">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-tw-red transition-colors" />
              <Mail className="w-6 h-6 cursor-pointer hover:text-tw-red transition-colors" />
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <div className="w-48 h-48 relative group">
              <img 
                src={`${base}logo.jpg`} 
                alt="TW Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-tw-tan/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] opacity-40">
          <p>© 2026 THE TERRIBLE WISE ARTIST COLLECTIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-tw-tan transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-tw-tan transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
