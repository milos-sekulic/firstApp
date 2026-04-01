import Link from 'next/link';

export default function Header({ pageName }: { pageName: string }) {
    return (
        <header className="flex items-center gap-8 mb-10 pb-4 border-b border-gray-600">
            {/* Top Left: Name of the current page */}
            <h1 className="text-3xl font-bold">{pageName}</h1>

            {/* Right of it: Navigation Links */}
            <nav className="flex gap-4 text-lg">
                <Link
                    href="/"
                    className={pageName === 'Home' ? 'underline font-bold text-blue-400' : 'hover:text-gray-300'}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={pageName === 'About' ? 'underline font-bold text-blue-400' : 'hover:text-gray-300'}
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    className={pageName === 'Contact' ? 'underline font-bold text-blue-400' : 'hover:text-gray-300'}
                >
                    Contact
                </Link>
                <Link
                    href="/blog"
                    className={pageName === 'Blog' ? 'underline font-bold text-blue-400' : 'hover:text-gray-300'}
                >
                    Blog
                </Link>
            </nav>
        </header>
    );
}