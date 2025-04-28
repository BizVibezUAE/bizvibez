import { blogs } from "./data";
import Link from "next/link";
import "./blogs.css"

const HomeBlogs = () => {
  // Slice the blogs array to get the latest 3 blogs
  const latestBlogs = blogs.slice(-3).reverse();

  return (
    <div className="py-10">
      <div className="text-center py-10 text-[2rem] font-bold">Our Blogs</div>
      <div className="flex justify-center flex-grow-0 gap-8 flex-wrap">
        {latestBlogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-lg md:w-[300px] max-sm:w-[300px] shadow-md hover:shadow-xl transition-all mb-4"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <img
                src={blog.heroImage}
                className="rounded-t-lg h-[200px] w-[300px] object-cover"
                alt={blog.title}
              />
              <div className="p-3 pt-3 ">
                <h3 className="font-semibold text-[1.1rem] pb-2 .blogContent">
                  {blog.title}
                </h3>
                <p className="text-[.76rem]">{blog.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
        <Link className="flex items-center justify-center " href={`/blogs`} >
          <button className="bg-[#8D0169] text-white p-3 rounded-md hover:shadow-xl transition-all duration-300">View More</button>
        </Link>
    </div>
  );
};

export default HomeBlogs;
