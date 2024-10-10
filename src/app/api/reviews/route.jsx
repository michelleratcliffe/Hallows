import { NextResponse } from 'next/server';
import { connect } from '@/../Utilities/connect.js'; 

export async function POST(req) {
    
    const body = await req.json(); // get the stuffs
    const { postId, name, reviewText, category } = body;
    const time = new Date().toISOString(); // Current stupid timestamp
    console.log('postroute', body)
    try {
        const db = connect(); 

        // Insert the review into the "reviews" table
        await db.query(
            'INSERT INTO reviews (productid, username, review, category, likes, time) VALUES ($1, $2, $3, $4, $5, $6)',
            [postId, name, reviewText, category, 0, time] 
            // 0 initial likes, need to make sure this doesnt error egain
            
        );

        return NextResponse.json({ message: 'Review added successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error inserting review:', error);
        return NextResponse.json({ message: 'Error adding review' }, { status: 500 });
    }
}
