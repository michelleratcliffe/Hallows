'use client';

import { useState } from 'react';

export default function ReviewPage() {
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState('company');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [reviewText, setReviewText] = useState('');

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
                setCategory('company');
            } else {
                setMessage(result.message || 'Error submitting review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage('Error submitting review');
        }
    };

    // Love me love me say that you love me
    const handleLike = (id) => {
        setReviews(reviews.map(review => 
            review.id === id ? { ...review, likes: review.likes + 1 } : review
        ));
    };

    // Do you really wanna Delete me
    const handleDelete = (id) => {
        setReviews(reviews.filter(review => review.id !== id));
    };

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
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
        </div>
    );
}
