'use client';

import { useState } from 'react';

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState('product');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [reviewText, setReviewText] = useState('');
    
    async function fetchProductAndReviews(params) {
        const db = await connect(); 
    
        // Fetch the product details
        const productQuery = await db.query('SELECT * FROM products WHERE id = $1', [params.id]);
        const product = productQuery.rows[0];
    
        // Fetch all reviews 
        const reviewsQuery = await db.query('SELECT * FROM reviews WHERE productId = $1', [params.id]);
        const reviewsAll = reviewsQuery.rows;
       
        if (!product) {
            return { error: 'Product not found' };
        }
    
        if (!reviewsAll) {
            return { error: 'Reviews not found' };
        }
    
        return { product, reviewsAll }; 
    }
    
   //redirect('/reviews'); 
    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = { name, reviewText, category };

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Review submitted successfully!');
                setName('');
                setReviewText('');
                setCategory('product');
                
            } else {
                setMessage(result.message || 'Error submitting review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage('Error submitting review');
        }
        
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
            <form onSubmit={handleSubmit} className="space-y-4 text-zinc-950">
                <div>
                    <label htmlFor="category">Review Category:</label>
                    <select 
                        id="category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="border p-2 rounded w-full"
                    >
                        <option value="company">Company</option>
                        <option value="product">Product</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="review">Your Review:</label>
                    <textarea 
                        id="review" 
                        value={reviewText} 
                        onChange={(e) => setReviewText(e.target.value)} 
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit Review
                </button>

                {/* I am a teapot error 418 */}
                {message && <p>{message}</p>}
            </form>
   
            {/* Reviews Section */}
            {/* <div className="reviewProductDisplay">
                <h2>Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews for this product yet.</p>
                ) : (
                    <div className="reviews-list">
                        {reviewsAll.map(review => (
                            <div key={review.review_id} className="review-item">
                                <h3>{review.username}</h3>
                                <p>{review.review}</p>
                                <p>Likes: {review.likes}</p>
                                <p>Posted on: {new Date(review.time).toLocaleString()}</p>
                                <button onClick={() => handleLike(review.id)}>Like</button>
                                <button onClick={() => handleDelete(review.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
        </div>
    );
}
