"use client";

import { useState } from "react";

export default function Forms({ whoIsYourDaddy }) {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [review, setReview] = useState([]);




  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const myData = Object.fromEntries(formData);
    console.log("I am on the client: ", myData);

    // here, we want the server to do something
    whoIsYourDaddy(myData); 
    const reviewData = { username, review };
    
 //redirect('/reviews'); 


    setMessage("");
    event.target.reset();
  }

  function handleChange(event) {
    setUsername(event.target.value);
    setMessage(event.target.value);
    console.log("Your name is: ", username);
    console.log("Your message is: ", message);
    
  }

  return (
    <>
      <h2>Please review our company or your favorite products</h2>
      {/* <p>Our message is: {message}</p> */}
      <form onSubmit={handleSubmit} method="POST">
        <input
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}/>
          <br /><br />
        <input
          name="review"
          placeholder="Write a review"
          onChange={handleChange}/>
          <br /><br />
        <button  type="submit">Submit</button>
      </form>
    </>
  );
}

// CREATE TABLE companyreviews (
//   username VARCHAR(100),
//   review TEXT, 
// );

// INSERT INTO companyreviews (username, message)

