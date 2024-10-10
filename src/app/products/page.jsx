import { connect } from "@/../Utilities/connect.js" 
import Image from "next/image"
import Link from "next/link"

export default async function productsPage({searchParams}) {
    //{ params: {}, searchParams: {} }
    //All page.js files will get the above object passed to them - it doesnt matter if they're empty or not.

    console.log(searchParams);

    const db =  await connect()
    const products = (await db.query(`SELECT * FROM products`)).rows


    //sort by asc or desc
    //if i have time use SLUGS
    const sorted = products.sort((a, b) => {
        if (searchParams.sortBy == 'asc') {
        //if positive it wills wap a and b, if negative it wont do anything

        //LocaleCompare returns
        return a.productname.localeCompare(b.productname)
        }
        // console.log(`what on earth: ${products.id}`)
    })
    


    return (
        <div>
            <div className="flex justify-around text-lg bg-fuchsia-300 text-indigo-950"> 
                <Link href='/products?sortBy=asc'> Sort by asc</Link>
                
                <Link href='/products?sortBy=desc'> Sort by desc</Link>
               
                <Link href='/products'> Remove Sort</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {sorted.map(products => (
                    <Link href={`/products/${products.id}`}>
                        <div key={products.id} className="relative group">
                            <Image
                                src={products.img_url}
                                alt={products.description}
                                height={140}
                                width={100}
                                className="size-full rounded-lg shadow-md border-white-700 border-4"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                <h2 className="text-white text-xl font-bold text-center p-2">
                                    {products.productname}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}
