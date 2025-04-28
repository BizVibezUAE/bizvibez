"use client"
import React from "react";

// VideoCard component for displaying individual embedded videos
const VideoCard = ({ title, src }: any) => {
  return (
    <div className="my-4 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <iframe
          className="w-full h-48"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
};

// Main Videos component
const Videos = () => {
  const videoData = [
    {
      id: 1,
      title: "Got Bigger and more Established",
      src: "https://www.youtube.com/embed/nDdtN6RzAIY?si=Q5ZkxDDYLLa7z9wX",
    },
    {
      id: 2,
      title: "Team Of Quality And Loyalty",
      src: "https://www.youtube.com/embed/QiVtIamBXJ8?si=--mKQ61Kc7-YG5Fj",
    },
    {
      id: 3,
      title: "Supporting Your Business Luggage",
      src: "https://www.youtube.com/embed/VFszp2B7Mb8?si=u8AKURBIQUYWRe3y",
    },
  ];

  return (
    <div className="md:p-16 px-8 py-5 md:px-32">
      <h2 className="md:text-3xl text-xl font-bold text-center mt-10 mb-3">
        Explore Our Featured Videos
      </h2>
      <p className="md:text-lg text-sm text-center max-w-[700px] mx-auto text-[#666] mb-5">
        Watch our featured videos to learn more about our services and how we
        can help you grow your business.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoData.map((video) => (
          <VideoCard key={video.id} title={video.title} src={video.src} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
