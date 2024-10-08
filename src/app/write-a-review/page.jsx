
import Forms from "@/components/Forms";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connect } from "@/../Utilities/connect.js";

export default function WriteReview() {
    async function serverRedirect(formData) {
        "use server"; // Marks the function as a server action
    
        // Extract form data
        const username = formData.get('name');  // 'name' should match the input name in the form
        const review = formData.get('reviewText');  // 'reviewText' should match the form field name
    
        
        // Connect to the database
        const db = await connect(); 
        
        // Insert review data into the company database 
        await db.query(
            'INSERT INTO companyreviews (username, review) VALUES ($1, $2)',
            [username, review]
        );
        
        // Revalidate the reviews page (optional)
        revalidatePath('/reviewspage');

        // Redirect to the reviews page
        // redirect('/reviewspage');
    }

    return (
        <Forms whoIsYourDaddy={serverRedirect}/>
    );
}
