import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);
  return (
    <>
      <h1 className="text-5xl">All posts</h1>
      <section className="grid grid-cols-4 gap-5 mt-10">
        {posts.length > 0
          ? posts.map((post) => <Card key={post?.id} post={post} />)
          : "No posts found"}
      </section>
    </>
  );
}

export default Home;
