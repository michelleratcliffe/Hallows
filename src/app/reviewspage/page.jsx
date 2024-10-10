import { connect } from "@/../Utilities/connect.js";

export default async function ReviewsAllPage() {
    const db = await connect();  // Await the database connection

   
    // Fetch all reviews for this product
    const reviews = (await db.query('SELECT * FROM reviews')).rows;

    if (!reviews) {
        return <div>Review not found</div>;
        
    }
    // console.log(reviews)

    // // Love me love me say that you love me
    // const handleLike = (id) => {
    //     setReviews(reviews.map(review => 
    //         review.id === id ? { ...review, likes: review.likes + 1 } : review
    //     ));
    // };

    // // Do you really wanna Delete me
    // const handleDelete = (id) => {
    //     setReviews(reviews.filter(review => review.id !== id));
    // };
    
    return (
        <div className="singlePageDisplay">
           
            {/* Reviews Section */}
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.review_id} className="review-item">
                        <h3>{review.username}</h3>
                        <p>{review.review}</p>
                        {/* <p>Likes: {review.likes}</p> */}
                        <p>Posted on: {new Date(review.time).toLocaleString()}</p>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
}
