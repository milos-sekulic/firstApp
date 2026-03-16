import Header from '../components/Header';

export default function About() {
    return (
        <main className="min-h-screen bg-gray-800 text-white p-8">
            <Header pageName="About" />

            <div className="max-w-4xl">
                <p className="mb-8 text-lg">
                    This is the About page. Here is a brief overview of the core hardware that directs traffic across modern computer networks.
                </p>

                {/* Router Item */}
                <div className="flex items-center gap-6 mb-8 bg-gray-700 p-6 rounded-lg">
                    <div className="w-32 h-32 bg-gray-600 flex items-center justify-center shrink-0 overflow-hidden rounded-md">
                        <img src="https://media.wired.com/photos/67b789076813fc3f11f2ff37/master/w_1600%2Cc_limit/Asus-RT-BE58U-Wi-Fi-Router-(front)-Reviewer-Photo-SOURCE-Simon-Hill.jpg" alt="Network Router" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Core Routers</h2>
                        <p>Test2 da vidim da li se update radi uzivo nakon komandi:
                            git add .
                            git commit -m "novi tekst"
                            git push
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}