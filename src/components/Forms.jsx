"use client";

import { useState } from "react";

export default function Forms({ iAmYourMama }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const myData = Object.fromEntries(formData);
    console.log("I am on the client: ", myData);

    // here, we want the server to do something
    iAmYourMama(myData);

    setMessage("");
    event.target.reset();
  }

  function handleChange(event) {
    setMessage(event.target.value);
    console.log("Our message is: ", message);
  }

  return (
    <>
      <h2>This is my form</h2>
      <p>Our message is: {message}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          placeholder="Write a message or give your name"
          onChange={handleChange}
        />
        
        <button>Submit</button>
      </form>
    </>
  );
}
