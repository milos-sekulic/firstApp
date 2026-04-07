import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 p-8 font-sans selection:bg-pink-500 selection:text-white">
      <Header pageName="Home" />

      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-4">
            Miš
          </h1>
          <p className="text-lg text-slate-400">
            Dobrodošli na početnu stranicu. Ispod ćete pronaći brzi vodič za neke od najčešćih fizičkih konektora koji se koriste u žičanom umrežavanju.
          </p>
        </div>

        {/* Ethernet Item 1 - Neon/Glassmorphism Redesign */}
        <div className="relative group w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-black to-slate-900 p-[2px] transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.4)]">

          {/* Animacija okvira (Gradient Border) */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Glavni kontejner */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 h-full w-full bg-slate-950/90 backdrop-blur-2xl rounded-2xl p-6 md:p-8 overflow-hidden z-10">

            {/* Dekorativni pozadinski sjaj */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-600 rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Sekcija za sliku */}
            <div className="relative w-48 h-48 shrink-0 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-cyan-500 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-full h-full p-1 bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-white/10 z-10 overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80"
                  alt="Ethernet Cable"
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Tech overlay linija preko slike */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 -translate-y-full group-hover:translate-y-[200px] transition-transform duration-[1.5s] ease-in-out"></div>
              </div>
            </div>

            {/* Tekstualna sekcija */}
            <div className="flex-1 relative z-10 text-center md:text-left">

              {/* Bedž */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-5 rounded-full bg-white/5 border border-white/10 shadow-inner">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </div>
                <span className="text-pink-300 text-[11px] font-mono font-bold tracking-[0.2em] uppercase">
                  Bakar (Copper)
                </span>
              </div>

              {/* Naslov */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 tracking-tight group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                RJ45 Connector
              </h2>

              {/* Opis */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light border-l-2 border-slate-700 pl-4 group-hover:border-pink-500/50 transition-colors duration-300">
                Standardni konektor za većinu Ethernet mreža. Ima 8 pinova i najčešće se viđa na krajevima Cat5e i Cat6 kablova koji se koriste za povezivanje računara sa kućnim ruterima.
              </p>

              {/* Dekorativni detalji (Faux Terminal) */}
              <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-mono text-slate-600 group-hover:text-cyan-500/70 transition-colors justify-center md:justify-start">
                <span>SYS.STATUS: <span className="text-emerald-500">ONLINE</span></span>
                <span className="hidden md:inline">|</span>
                <span>PORT: 8-PIN</span>
                <span className="hidden md:inline">|</span>
                <span>TYPE: CAT5E/CAT6</span>
              </div>

            </div>
          </div>
        </div>

        {/* Ethernet Item 2 */}
        <div className="group flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-fuchsia-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          {/* Dekorativna linija sa strane */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-fuchsia-400 to-pink-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

          <div className="w-32 h-32 bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden rounded-lg shadow-inner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgj139qCAfm_UeLp0PYb_IFxFzwf8y8Y3Bg&s"
              alt="Fiber Optic Cables"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors">LC Fiber Connector</h2>
              <span className="bg-fuchsia-900/40 text-fuchsia-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-fuchsia-700/50">
                Optika (Fiber)
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Minijaturni optički konektor koji se često koristi u brzim mrežama i data centrima. Koristi mehanizam sa jezičkom za zadržavanje (slično RJ45) i cijenjen je zbog svojih malih dimenzija.
            </p>
          </div>
        </div>

        {/* Ethernet Item 3 */}
        <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
          <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" alt="SFP Transceiver" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">SFP Transceiver</h2>
            <p>A compact, hot-pluggable network interface module used for data communications. It easily connects network switches and enterprise routers to fiber optic or copper networking cables.</p>
          </div>
        </div>


        {/* Ethernet Item 3 - NOVI DIV */}
        <div className="group flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          {/* Dekorativna linija sa strane */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

          <div className="w-32 h-32 bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden rounded-lg shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&q=80"
              alt="BNC Connector"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">BNC Coaxial Connector</h2>
              <span className="bg-purple-900/40 text-purple-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-purple-700/50">
                Koaksijalni
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Često se koristi za prenos radio-frekvencijskih signala, video nadzor i u starijim mrežnim topologijama. Prepoznatljiv je po svom mehanizmu za zaključavanje okretanjem (bajonet), koji osigurava čvrstu vezu i sprječava slučajno isključivanje.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
