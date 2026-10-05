function ContactPage() {
  return (
    <div className="px-4 pb-24 pt-14 md:px-8 md:pt-16">
      <section className="mx-auto max-w-3xl rounded-3xl border border-cinematic-gold/25 bg-charcoal/55 p-7 shadow-softGlow backdrop-blur-xl md:p-10">
        <h1 className="font-display text-4xl text-cinematic-gold md:text-5xl">Contact</h1>
        <p className="mt-4 text-zinc-300">
          Have feedback or a collaboration idea? Share a quick message.
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-cinematic-gold/30 bg-black/30 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-cinematic-hover"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-xl border border-cinematic-gold/30 bg-black/30 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-cinematic-hover"
          />
          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full rounded-xl border border-cinematic-gold/30 bg-black/30 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-cinematic-hover"
          />
          <button
            type="button"
            className="rounded-full border border-cinematic-gold bg-cinematic-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cinematic-black transition-transform duration-300 hover:-translate-y-1 hover:bg-cinematic-hover"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
