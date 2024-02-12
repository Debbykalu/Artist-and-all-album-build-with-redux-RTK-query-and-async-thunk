import { useGetPostsQuery } from '../store/api.js/blogPostApi';
const BlogList = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts.</p>;
    return (
        <div className="blog-list-card">
          <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-700">{post.body}</p>
            </article>
          ))}
        </div>
      );      
}

export default BlogList;