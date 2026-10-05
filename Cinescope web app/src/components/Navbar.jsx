import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/discover', label: 'Discover' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-cinematic-gold/20 bg-cinematic-black/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink to="/" className="font-display text-2xl tracking-[0.12em] text-cinematic-gold">
          CineScope
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-cinematic-gold text-cinematic-black shadow-goldGlow'
                    : 'text-zinc-300 hover:bg-cinematic-gold/10 hover:text-cinematic-hover'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-cinematic-gold/40 px-3 py-2 text-xs uppercase tracking-[0.18em] text-cinematic-gold md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <Motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-2 border-t border-cinematic-gold/20 px-4 py-4 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm ${
                  isActive
                    ? 'bg-cinematic-gold text-cinematic-black'
                    : 'bg-white/5 text-zinc-200 hover:bg-cinematic-gold/10 hover:text-cinematic-hover'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </Motion.nav>
      )}
    </header>
  )
}

export default Navbar
