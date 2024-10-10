import { connect } from "@/../Utilities/connect.js";
import IndividualReviews from "@/app/components/individualreviews";
import Image from "next/image";


export default async function SinglePage({ params }) {
    const db = await connect();  // Await the database connection
    // console.log(params)
    // Fetch the product details
    const product = (await db.query('SELECT * FROM products WHERE id = $1', [params.id])).rows[0];

    // Fetch all reviews for this product
    const reviews = (await db.query('SELECT * FROM reviews WHERE productId = $1', [params.id])).rows;

    if (!product && !reviews) {
        return <div>Product not found</div>;
    }
 

    return (
        <div className="singlePageDisplay p-7">
            {/* Product Details */}
            <div>
                <br />
                <h1 className="text-3xl">{product.productname}</h1>
                <br />
                <p>{product.description}</p>
                <br />
                <Image
                    src={product.img_url}
                    alt={product.description}
                    height={1026} 
                    width={762}
                    className="size-1/4  rounded-lg shadow-md border-cyan-700 border-4"
                />
            </div>

            {/* Reviews Section */}
            <div className="reviewProductDisplay">
                <h2>Reviews</h2>
                <IndividualReviews postId={params.id}/>
            </div>
        </div>
    );
}
