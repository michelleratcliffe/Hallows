import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-fuchsia-950 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image 
                        src="/logo.png"  // Replace with your actual logo path
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <span className="ml-2 text-xl font-bold">MyBrand</span>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300">About</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-gray-300">Products</Link>
                        </li>
                        <li>
                            <Link href="/reviews" className="hover:text-gray-300">Reviews</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
