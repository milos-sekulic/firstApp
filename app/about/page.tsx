import Header from '../components/Header';

export default function About() {
    return (
        <main className="min-h-screen bg-gray-800 text-white p-8">
            <Header pageName="About" />

            <div className="max-w-4xl">
                <p className="mb-8 text-lg">
                    sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssThis is the About page. Here is a brief overview of the core hardware that directs traffic across modern computer networks.
                </p>

                {/* Router Item - Zadržan original */}
                <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
                    <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
                        <img src="https://media.wired.com/photos/67b789076813fc3f11f2ff37/master/w_1600%2Cc_limit/Asus-RT-BE58U-Wi-Fi-Router-(front)-Reviewer-Photo-SOURCE-Simon-Hill.jpg" alt="Network Router" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Core Routers</h2>
                        <p>Test2 da vidim da li se update radi uzivo nakon komandi:
                            git add .
                            git commit -m &quot;novi tekst&quot;
                            git push
                        </p>
                    </div>
                </div>

                {/* Switch Item - Potpuno novi dodati element */}
                <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
                        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600" alt="Network Cables" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Network Switches</h2>
                        <p>Ovo je novi dio koda koji je dodat. Možeš nastaviti da testiraš Git komande i pratiš promjene:
                            <code> git status </code> i <code> git diff </code> će ti pokazati ovaj novi blok prije nego što uradiš commit.
                        </p>
                    </div>
                </div>

                {/* Firewall Item - Treći element */}
                <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-red-500">
                    <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
                        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600" alt="Server Rack Firewall" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Hardware Firewalls</h2>
                        <p>Jos jedan dodatak za testiranje.. Nakon sto uradis push ovog koda, iskoristi komandu:
                            <code> git log </code> kako bi pregledao istoriju svojih commit-ova i potvrdio da su sve prethodne promjene uspješno sačuvane.
                        </p>
                    </div>
                </div>

                {/* Switch Item - Potpuno novi dodati element */}
                <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
                        <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600" alt="Network Cables" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">tastatura</h2>
                        <p>Ovo je novi dio koda koji je dodat. Možeš nastaviti da testiraš Git komande i pratiš promjene:
                            <code> git status </code> i <code> git diff </code> će ti pokazati ovaj novi blok prije nego što uradiš commit.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}