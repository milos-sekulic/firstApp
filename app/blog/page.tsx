import Header from '../components/Header';

export default function Blog() {
    return (
        <main className="min-h-screen bg-gray-800 text-white p-8">
            <Header pageName="Blog" />

            <div className="max-w-4xl">
                <p className="mb-8 text-lg">
                    Dobrodošli na naš blog. Ovdje možete pratiti najnovije vijesti, tutorijale i dešavanja iz svijeta mrežnih tehnologija.
                </p>

                {/* Blog Post 1 */}
                <article className="mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
                    <span className="text-sm text-gray-400 mb-2 block">1. April 2026.</span>
                    <h2 className="text-2xl font-bold mb-3">Kako odabrati pravi ruter za vašu mrežu?</h2>
                    <p className="text-gray-300 mb-4">
                        U ovom tekstu prolazimo kroz osnovne karakteristike na koje trebate obratiti pažnju pri kupovini novog rutera, bilo da je u pitanju kućna ili poslovna mreža.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                        Pročitaj više
                    </button>
                </article>

                {/* Blog Post 2 */}
                <article className="mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-purple-500">
                    <span className="text-sm text-gray-400 mb-2 block">28. Mart 2026.</span>
                    <h2 className="text-2xl font-bold mb-3">Uvod u mrežne svičeve: Layer 2 vs Layer 3</h2>
                    <p className="text-gray-300 mb-4">
                        Koja je tačno razlika između Layer 2 i Layer 3 svičeva i kada vam je potreban koji? Detaljno objašnjavamo koncepte rutiranja na nivou sviča.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                        Pročitaj više
                    </button>
                </article>

                {/* Blog Post 3 */}
                <article className="mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-yellow-500">
                    <span className="text-sm text-gray-400 mb-2 block">15. Mart 2026.</span>
                    <h2 className="text-2xl font-bold mb-3">Osnove Git-a za početnike</h2>
                    <p className="text-gray-300 mb-4">
                        Kratak vodič za praćenje izmjena u kodu. Naučite kako da koristite komande poput git add, git commit i git push za siguran rad na projektima.
                    </p>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                        Pročitaj više
                    </button>
                </article>

                {/* Blog Post 4 */}
                <article className="mb-8 bg-gray-700 p-6 rounded-lg border-l-4 border-yellow-500">
                    <span className="text-sm text-gray-400 mb-2 block">07.04.2026.</span>
                    <h2 className="text-2xl font-bold mb-3">Podesavanje githuba i gita</h2>
                    <p className="text-gray-300 mb-4">
                        U ovom tekstu prolazimo kroz osnovne korake za podesavanje githuba i gita.
                    </p>
                    <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
                        Pročitaj više
                    </button>
                </article>

            </div>
        </main>
    );
}