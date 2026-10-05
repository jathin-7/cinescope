import Navbar from '../components/Navbar.jsx'
import ScrollShimmerLine from '../components/ScrollShimmerLine.jsx'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-cinematic-black text-zinc-100">
      <ScrollShimmerLine />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  )
}

export default MainLayout