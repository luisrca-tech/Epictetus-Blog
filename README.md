Blog Project using Sanity
This project is a blog built with Sanity as the content platform. It includes static and dynamic pagination, GROQ queries, search queries to filter blog posts, static pages for individual posts, filtering by category and author, and client-side query revalidation using the "publish" button within Sanity Studio.

Table of Contents
Installation
Features
How to Use
Sanity Studio Guide
Technologies Used
License
Installation
Clone the repository:

bash
Copiar código
git clone https://github.com/yourusername/blog-project.git
Install dependencies:

bash
Copiar código
cd blog-project
npm install
Set up environment variables:

Create a .env.local file and add the following:
makefile
Copiar código
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
Run the development server:

bash
Copiar código
npm run dev
Visit http://localhost:3000 to view the blog.

Features
Static and Dynamic Pagination: Efficient pagination for displaying blog posts.
GROQ Queries: Custom queries to fetch data from Sanity.
Search and Filter: Filter blog posts by category, author, and keywords.
Static Blog Post Pages: Individual pages for blog posts using Sanity’s slug-based routing.
Client-Side Query Revalidation: Posts are revalidated in real-time when published in the Sanity Studio.
How to Use
Blog Pagination
Static pagination is used for generating paginated pages at build time.
Dynamic pagination is supported for runtime updates, ensuring newly published posts are included.
Search and Filter Posts
Users can filter posts based on categories or authors.
The search functionality allows users to find posts by title or content using GROQ queries.
Client-Side Revalidation
Once a post is published or updated in Sanity Studio, the blog automatically revalidates the data, displaying the latest content without needing a full rebuild.
Sanity Studio Guide
Follow these steps to use the Sanity Studio to manage your blog content.

Access the Sanity Studio:
To open the Sanity Studio, simply add /studio to your blog's URL. For example:

bash
Copiar código
http://localhost:3000/studio
Log in:
Sign in using your Sanity account credentials.

Creating a Post:

In the left sidebar, navigate to the "Posts" section.
Click on the "New Post" button to create a new blog post.
Fill in the post details: title, body, author, category, and other metadata.
Publishing a Post:

Once you're done editing, click the "Publish" button to make the post live.
The blog will automatically revalidate and display the new post without needing to refresh the page.
Filtering Posts by Category and Author:

You can manage categories and authors in the "Categories" and "Authors" sections of the Studio.
Assign categories and authors to posts to enable filtering on the blog frontend.
Revalidating Blog Content:

After editing or updating any post, click "Publish" in the Sanity Studio to trigger the client-side revalidation.
The changes will be reflected on the blog in real-time.
Technologies Used
Sanity: Headless CMS used for managing content.
Next.js: React framework used for server-side rendering and static generation.
GROQ: Sanity's query language for fetching data.
Tailwind CSS: Utility-first CSS framework for styling.
License
This project is licensed under the MIT License.
