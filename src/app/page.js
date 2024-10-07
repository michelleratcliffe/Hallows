// 39.05
// import Forms from "./components/Forms";

import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  async function myServerAction(formData) {
    "use server";
    console.log("This is the server: ", formData);
    //if statements if server is true then return success = true / false
    // this will be communicating with the server
  }

  return (
    <>
    <h1 className="flex items-center justify-center my-8">Happy Halloween and feel free to explore</h1>
      
    </>
  );
}
