import { connect } from "@/../Utilities/connect.js";

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
        <div className="singlePageDisplay">
            {/* Product Details */}
            <div>
                <h1>{product.productname}</h1>
                <p>{product.description}</p>
                <img src={product.img_url} alt={product.description} width="300" />
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
            {/* Form section */}
            
        </div>
    );
}
