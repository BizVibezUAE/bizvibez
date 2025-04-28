import BlogCard from "./Card";
import React from "react";
import { blogPosts } from "@/data";

const Bloglist = () => {
  return (
    <div
    className="flex flex-col items-center justify-center pb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:px-32">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
            description={post.description}
            link={post.link}
          />
        ))}
      </div>
      <button className="text-white bg-primary py-4 mt-5 px-8 text-lg rounded">
        Visit Our Blog
      </button>
    </div>
  );
};

export default Bloglist;