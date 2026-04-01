export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
      <main className="mx-auto flex h-screen w-full max-w-6xl items-center justify-center px-6 py-12">
        <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md shadow-2xl shadow-black/30">
          <p className="mb-4 text-sm uppercase tracking-widest text-indigo-300">Parepran</p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            Link Shortener
          </h1>
          <p className="text-lg leading-relaxed text-slate-200">
            Minimal, modern, and privacy-first. No sign up, no analytics, just a clean url shortener for the products QR.
          </p>
        </section>
      </main>
    </div>
  );
}