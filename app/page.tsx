import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 p-8 font-sans selection:bg-pink-500 selection:text-white">
      <Header pageName="Home" />

      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-4">
            Mrežni Konektori
          </h1>
          <p className="text-lg text-slate-400">
            Dobrodošli na početnu stranicu. Ispod ćete pronaći brzi vodič za neke od najčešćih fizičkih konektora koji se koriste u žičanom umrežavanju.
          </p>
        </div>

        {/* Ethernet Item 1 */}
        <div className="group flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          {/* Dekorativna linija sa strane */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-rose-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          
          <div className="w-32 h-32 bg-slate-700 flex items-center justify-center shrink-0 overflow-hidden rounded-lg shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" 
              alt="Ethernet Cable" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">RJ45 Connector</h2>
              <span className="bg-pink-900/40 text-pink-300 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-pink-700/50">
                Bakar (Copper)
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Standardni konektor za većinu Ethernet mreža. Ima 8 pinova i najčešće se viđa na krajevima Cat5e i Cat6 kablova koji se koriste za povezivanje računara sa kućnim ruterima.
            </p>
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
      </div>
    </main>
  );
}