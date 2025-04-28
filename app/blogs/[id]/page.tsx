import React from "react";
import { blogs } from "@/app/blogs/data";
import { Metadata } from "next";
import "../blogs.css";

interface PageProps {
  params: {
    id: string;
  };
}

// Generate metadata for the blog dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params;
  const blog = blogs.find((b) => b.slug === id);

  if (!blog) {
    return {
      title: "Blog Not Found - BizVibez Consultants",
      description: "The blog you are looking for could not be found.",
      robots: "noindex",
    };
  }

  const canonicalUrl = `https://www.bizvibez.com/blogs/${blog.slug}`;
  const defaultImage = "https://www.bizvibez.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFNL.50774920.gif&w=750&q=75";

  return {
    title: blog.title,
    description: blog.description || "",
    openGraph: {
      title: blog.title,
      description: blog.description || "",
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: blog.heroImage || defaultImage,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || "",
      images: [blog.heroImage || defaultImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const BlogPage = ({ params }: PageProps) => {
  const { id } = params;
  const blog = blogs.find((b) => b.slug === id);

  if (!blog) {
    return (
      <div className="text-center text-2xl font-bold text-red-500 min-h-[400px] flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="md:px-[180px] md:py-12 text-justify max-sm:p-6 max-sm:pt-[150px] md:pt-[150px]">
      <img
        src={blog.heroImage}
        alt={blog.title}
        className="w-full md:w-[1024px] h-auto ml-auto mr-auto rounded-xl my-6 object-cover"
      />
      <div className="blogContent">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blog.title}</h1>
        <p className="text-gray-600 text-sm mb-8">Date: {blog.date}</p>
        </div>
        <div
          className="prose lg:prose-xl max-w-none blogContent"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      
    </div>
  );
};

export default BlogPage;