
import Header from "@/components/Header";
import Image from "next/image";
// import Link from "next/link";
import YoMamma from '../../public/halloween-banner.png'

export default function Home() {

  return (
    <>
    <div className="flex items-center justify-center my-8 text-5xl">

    <button type="button" class="bg-indigo-500 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <Image src={YoMamma}
              alt="Happy Hallows"
              width={1280} 
              height={600} 
              // blurDataURL="data:..." automatically provided
              placeholder="blur" // Optional blur-up while loading
              priority
              />
            </svg>
            Processing...
        </button>

      
    </div>
    <h1 className="flex items-center justify-center my-8 text-5xl ">Happy Halloween and feel free to explore</h1>
    </>
  );
}
