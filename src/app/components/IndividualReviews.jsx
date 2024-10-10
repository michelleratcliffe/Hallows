
import { redirect } from 'next/navigation';
import { connect } from "@/../Utilities/connect"
import ReviewForm from './ReviewForm';
import { revalidatePath } from 'next/cache';

export default async function IndividualReviews({postId}) {
        const db = await connect(); 
        // console.log(postId)
        // Fetch all reviews 
        const reviewsQuery = await db.query('SELECT * FROM reviews WHERE productId = $1', [parseInt(postId)]);
        const reviewProduct = reviewsQuery.rows;
        // console.log(reviewProduct)
    
        if (!reviewProduct) {
            return { error: 'Reviews not found' };
        }
       
        
    // Handle Form Submit
    const handleSubmit = async (reviewData) => {
    'use server'

    console.log('Server action: ', reviewData)

        try {
            const response = await fetch('https://hallows-69.vercel.app/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });
            
            const result = await response.json();
            console.log('The result is:', result)
   
        
        } catch (error) {
            console.error('Error submitting review:', error);
            return ('Error submitting review');
        }
        revalidatePath('/')
        redirect('/reviewspage'); 
    };


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
        <div className="p-6">
            <ReviewForm postId={postId} serverAction={handleSubmit}/>
            {/* Reviews Section */}
            <div className="reviewProductDisplay">
                <h2>Reviews</h2>
                {reviewProduct.length === 0 ? (
                    <p>No reviews for this product yet.</p>
                ) : (
                    <div className="reviews-list">
                        {reviewProduct.map(review => (
                            <div key={review.review_id} className="review-item">
                                <h3>{review.username}</h3>
                                <p>{review.review}</p>
                                {/* <p>Likes: {review.likes}</p> */}
                                <p>Posted on: {new Date(review.time).toLocaleString()}</p>
                                {/* <button onClick={() => handleLike(review.id)}>Like</button>
                                <button onClick={() => handleDelete(review.id)}>Delete</button> */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
