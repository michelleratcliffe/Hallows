
import Image from "next/image";
import YoMamma from '../../public/halloween-banner.png'

export default function Home() {

  return (
    <>
    <div className="flex items-center justify-center my-8 text-5xl">

    <Image src={YoMamma}
              alt="Happy Hallows"
              width={1280} 
              height={600} 
              placeholder="blur" // Optional blur-up while loading
              priority
              />

      
    </div>
    <h1 className="flex items-center justify-center my-8 text-5xl ">Happy Halloween and feel free to explore</h1>
    </>
  );
}
