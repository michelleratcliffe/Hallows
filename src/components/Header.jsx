import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-fuchsia-950 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="flex items-center">
                    <Image 
                        src="/logo1.svg"  
                        alt="Logo"
                        width={120}
                        height={90}
                    />
                </div>

                {/* Navi */}
                <nav>
                    <ul className="flex space-x-4">

                        <li>
                            <Link href="/products" className="hover:text-gray-300">Products</Link>
                        </li>
                        <li>
                            <Link href="/reviews" className="hover:text-gray-300">Write a review</Link>
                        </li>
                        <li>
                            <Link href="/reviewspage" className="hover:text-gray-300">All Reviews</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
