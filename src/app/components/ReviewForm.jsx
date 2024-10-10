'use client'

import { useState } from 'react';

export default function ReviewForm({serverAction, postId}) {
    const [category, setCategory] = useState('product');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [reviewText, setReviewText] = useState('');

    async function handleSubmit(){
        
        const reviewData = { postId, name, reviewText, category };

        const response = await serverAction(reviewData)
        if (response !== undefined) {
            setMessage(response)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="space-y-4 text-zinc-950">
                <div>
                    <label htmlFor="category">Review Category:</label>
                    <select 
                        id="category" 
                        value={category} 
                        hidden
                        onChange={(e) => setCategory(e.target.value)} 
                        className="border p-2 rounded w-full"
                    >
                        <option value="product">Product</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="name" className=" text-white">Name:</label>
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
                    <label htmlFor="review" className=" text-white">Your Review:</label>
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
   
    )
}