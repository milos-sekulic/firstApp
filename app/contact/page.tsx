import Header from '../components/Header';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-800 text-white p-8">
      <Header pageName="Contact" />

      <div className="max-w-4xl">
        <p className="mb-8 text-lg">
          Need to get in touch? While you're here, learn a little bit about network switches!
        </p>

        {/* Switch Item */}
        <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
          <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80" alt="Network Switch" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Network Switches</h2>
            <p>Unlike routers that connect different networks, switches connect devices within the *same* network (like an office building). They use MAC addresses to forward data exactly to the correct device.</p>
          </div>
        </div>

        {/* Fake Contact Form Area */}
        <div className="bg-gray-700 p-6 rounded-lg mt-10 border-t-4 border-blue-400">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>Email: admin@antigravity-networks.com</p>
          <p>test 3 </p>
        </div>
      </div>
    </main>
  );
}