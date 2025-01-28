import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white py-4 px-6">
            <nav className="flex justify-between items-center">
                <div className="text-xl font-bold"><Link href="/">GenBridge</Link></div>
                <ul className="flex space-x-4">
                    <li>
                        {/* Use absolute paths for Next.js pages */}
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/programs">Programs</Link>
                    </li>
                    <li>
                        <Link href="/get-involved">Get Involved</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded">
                            Donate
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

