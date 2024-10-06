// import { pg } from "pg"
// import { connect } from "@/../Utilities/connect.js" 

// export default async function PostsPage() {

//   const db = await connect()

//   const posts = (await db.query(`SELECT * FROM posts`)).rows

//   console.log(posts);

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }