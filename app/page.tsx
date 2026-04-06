import Header from './components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <Header pageName="Home" />

      <div className="max-w-4xl">
        <p className="mb-8 text-lg">
          Welcome to the homepage. Below you will find a quick guide to some of the most common physical connectors used in wired networking.
        </p>

        {/* Ethernet Item 1 */}
        <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
          <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" alt="Ethernet Cable" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">RJ45 Connector</h2>
            <p>The standard connector for most Ethernet networks. It features 8 pins and is commonly seen on the ends of Cat5e and Cat6 cables used to connect computers to home routers.</p>
          </div>
        </div>

        {/* Ethernet Item 2 */}
        <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
          <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgj139qCAfm_UeLp0PYb_IFxFzwf8y8Y3Bg&s" alt="Fiber Optic Cables" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">LC Fiber Connector</h2>
            <p>Testiranje nakon deploya </p>
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