import { connect } from "@/../Utilities/connect.js" 
import Image from "next/image"
import Link from "next/link"

export default async function Page({searchParams}) {
    //{ params: {}, searchParams: {} }
    //All page.js files will get the above object passed to them - it doesnt matter if they're empty or not.

    // console.log(searchParams);

    const db =  connect()
    const books = (await db.query(`SELECT * FROM books`)).rows;

    //sort by asc or desc
    //if we have time use SLUGS
    const sorted = books.sort((a, b) => {
        if (searchParams.sortBy == 'asc') {
        //if positive it wills wap a and b, if negative it wont do anything

        //LocaleCompare returns
        return a.title.localeCompare(b.title)
        }
        
    })
    
    
// /books?sortBy=asc

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            <div>
            <Link href='/books?sortBy=asc'> Sort by asc</Link>
            <br />
            <Link href='/books?sortBy=desc'> Sort by desc</Link>
            <br />
            <Link href='/books'> Remove Sort</Link>
            </div>
        {sorted.map(book => (
            <div key={book.id} className="relative group">
                <Image
                    src={book.img_url}
                    alt={book.title}
                    height={250}
                    width={100}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <h2 className="text-white text-xl font-bold text-center p-2">
                        {book.title}
                    </h2>
                </div>
            </div>
        ))}
    </div>
    )
}