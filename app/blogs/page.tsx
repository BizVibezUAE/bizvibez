"use client";
import Link from "next/link";
import { blogs } from "./data";
import { useState, useEffect } from "react";
import { Rings } from "react-loader-spinner"; // Import the DNA loader spinner
import "./blogs.css"

const BlogList = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(false);

  const reversedBlogs = [...blogs].reverse();

  const loadMoreOnScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
      !loading &&
      visibleBlogs < reversedBlogs.length
    ) {
      setLoading(true);
      setTimeout(() => {
        setVisibleBlogs((prev) => prev + 6);
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", loadMoreOnScroll);

    return () => {
      window.removeEventListener("scroll", loadMoreOnScroll);
    };
  }, [loading, visibleBlogs]);

  return (
    <>
      <div className="md:px-[60px] pt-[50px] pb-6 max-sm:px-1 flex justify-center flex-col border ">
        <h1 className="text-center font-bold text-[2rem] py-6">Blogs</h1>
        <div className="flex justify-center flex-grow-0 gap-6 flex-wrap">
          {reversedBlogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg md:w-[300px] max-sm:w-[330px] shadow-lg hover:shadow-xl transition-all mb-4 border-2 border-neutral-600 p-1 hover:border-[#8d0169] hover:scale-105 duration-300"
            >
              <Link href={`/blogs/${blog.slug}`} className="flex flex-col items-center justify-center" >
                <img
                  src={blog.heroImage}
                  className="rounded-md h-[200px] w-[300px] object-cover "
                  alt={blog.title}
                />
                <div className="p-3">
                <h2 className="font-semibold text-[1.1rem] leading-tight py-1 pb-2 blogContentH">
  {blog.title.split(" ").slice(0, 10).join(" ")+"..."}
</h2>
                  <p className="text-[.85rem]">{blog.description.slice(0 , 120)+"..."}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {loading && (
          <div className="flex justify-center mt-6">
            <Rings
              visible={true}
              height="80"
              width="80"
              color="#8d0169"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
