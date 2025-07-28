// File: app/page.tsx

interface Post {
  id: number;
  title: string;
  body: string;
}

// Server-side data fetching
async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    cache: 'force-cache' // default: enables static generation (SSG)
  });

  return res.json();
}

export default async function SSG() {
  const posts = await getPosts();

  return (
    <div>
      <h1>📄 Blog Posts (SSG)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
