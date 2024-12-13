<h1>Instructions</h1>

<h2>User Stories</h2>
<p>🐿️ As a user, I want to view all posts with options to sort them in ascending or descending order so that I can easily find content based on my preferences.</p>
<p>🐿️ As a developer, I want to design a SQL schema that includes a posts table and a comments table, ensuring that comments are correctly associated with the corresponding post ID.</p>
<p>🐿️ As a user, I want to be able to delete posts using a delete button on each post’s page so that I can manage or remove my content from the database.</p>
<p>🐿️ As a user, I want to add comments on individual posts using a user-friendly form.</p>
<p>🐿️ As a user, I want to comment on posts directly on their dedicated pages so that my interactions are contextually tied to the content I view.</p>
<p>🐿️ As a user, I want to be automatically redirected to the posts page after creating a new post so I can immediately see my content in the context of all posts.</p>

<h2>Requirements</h2>
<p>🎯 Display all posts on the page, with an option to sort them in ascending or descending order.</p>
<p>🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.</p>
<p>🎯 Please submit your database schema, as is mentioned in the submission instructions.</p>
<p>🎯 Create a delete button on posts that allows users to delete the post from the database.</p>
<p>🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.</p>
<p>🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).</p>
<p>🎯 Add a redirect when a user creates a post to redirect them to the posts page.</p>

<!-- How to Deploy
Next.js was developed by Vercel, which is where we’re going to deploy our app, so some of the difficulties faced when deploying are reduced.

Ensure that any data displayed using .map() has a key.
Push everything to GitHub.
Click ‘Add New…’ and then select ‘Project’.
In the ‘Environment Variables’ drop-down menu, add anything from your .env.local file here.
Wait a minute or so, and your website is deployed!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics. -->

<h2>Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.</h2>

<h3>Stretch User Stories</h3>
<p>🐿️ As a user, I want to categorise my posts during creation so that I can organise my posts and browse other posts by category.</p>
<p>🐿️ As a user, I want to edit my posts on a dedicated route so that I can easily modify my posts.</p>
<p>🐿️ As a user, I want to edit my comments on a dedicated route so that I can revise my feedback.</p>

<h3>Stretch Requirements</h3>
<p>🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.</p>
<p>🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.</p>
<p>🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.</p>

<!--<h4>Reflections</h4>-->



<p>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).</p>


<p>This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.</p>

## Learn More

<p>To learn more about Next.js, take a look at the following resources:</p>

<p>- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.</p>
<p>- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.</p>

<p>You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!</p>

<p>## Deploy on Vercel</p>

<p>The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.</p>

<p>Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.</p>
