import { connect } from "@/../Utilities/connect.js";
import Image from "next/image";

export default async function SinglePage({ params }) {
    const db = await connect();  // Await the database connection

    // Fetch the product details
    const product = (await db.query('SELECT * FROM products WHERE id = $1', [params.id])).rows[0];

    // Fetch all reviews for this product
    const reviews = (await db.query('SELECT * FROM reviews WHERE productId = $1', [params.id])).rows;

    if (!product) {
        return <div>Product not found</div>;
    }
    if (!reviews) {
        return <div>Review not found</div>;
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
                    className=" object-cover h-48 w-96 rounded-lg shadow-md border-cyan-700 border-4"
                />
            </div>

            {/* Reviews Section */}
            <div className="reviewProductDisplay">
                <h2>Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews for this product yet.</p>
                ) : (
                    <div className="reviews-list">
                        {reviews.map(review => (
                            <div key={review.review_id} className="review-item">
                                <h3>{review.username}</h3>
                                <p>{review.review}</p>
                                <p>Likes: {review.likes}</p>
                                <p>Posted on: {new Date(review.time).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            
        </div>
    );
}
