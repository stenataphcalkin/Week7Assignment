# Base Goals

✅ Create a client using React.
✅ Use Express to create your server, using both GET and POST endpoints.
✅ Build a React form for users to create posts.
✅ Create multiple pages using React Router.
✅ Design a database schema, and seed the database with some realistic data.
😕 Use SQL to retrieve posts from the database in your Express server.
😕 Display all posts using .map(). - is under the all reviews component with some outlined code.
😕 Use an interval and useEffect() to poll your database.

😕 = attempted without being able to retrieve the data.

# Stretch Goals

✅ Create dynamic pages using react-router-dom.
🏹 Use react-router-dom to create a dedicated route for the categories
For example, /posts/:categoryName.
🏹 Allow users to delete posts.
🏹 Add ‘like’ functionality on posts.
🏹 Create additional SQL queries to show filtered posts.

# Issues faced:

A lot of ECONNRefused errors, I've reset the password multiple times, Supabase even flagged about mismatching passwords, so I tried again, but it continues to be an error that is causing me a great deal of stress.

My antivirus keeps flagging Supabase's connections, I've allowed them and cannot see why this would be causing issues as I've done supabase work on here before.
Keeps flagging with internal server errors, reminescent of the week 4 attempt to do this project.

## Status 1 Render issue

Spoke to Bertie on Friday, and Manny confirmed that this error code is due to the initial upload being established, and that once code is populated beyong the initial commit, this will resolve once code is established.

This error happened last week with an error 254 too, which caused concern.

Turned off Render failure notifications / emails for my own sanity.

Sat 3pm: Render is still failing to resolve the error code 1. Stating that index.html can't be resolved. Will revisit later.

Through a constant vicious circle between server.js and dbConnection.js insisting pool or process is not defined, despite changing one, then the other throws another error in the other; after 90 minutes of vicious circling combined with pleading to a rubber duck to help, I have given up and will lay the rest of the code out as otherwise intended for the calls etc.

# Resources:

ReactRouterDom
https://www.youtube.com/watch?v=EJVHAgmdzRY
createBrowserRouter, loader and useLoaderData you can create an example that works. https://www.reddit.com/r/reactjs/comments/1f9kp1b/i_need_help_with_dynamic_routing_for_reactjs_apps/
