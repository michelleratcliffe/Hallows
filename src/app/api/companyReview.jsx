import { connect } from '@/../Utilities/connect.js'; 

export async function POST(req) {
    const body = await req.json(); // get the stuffs
    const { name, review, category } = body;
    const time = new Date().toISOString(); // Current stupid timestamp

    try {
        const db = connect(); 

        // Insert the review into the "reviews" table
        await db.query(
            'INSERT INTO companyreviews (name, review) VALUES ($1, $2)',
            [name, review] 
            // 0 initial likes, need to make sure this doesnt error egain
        );

        return NextResponse.json({ message: 'Review added successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error inserting review:', error);
        return NextResponse.json({ message: 'Error adding review' }, { status: 500 });
    }
}