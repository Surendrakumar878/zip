import React from "react";
import img from "../assets/Ellipse 753.png";
import img1 from "../assets/Ellipse 754.png";
import img2 from "../assets/Mask Group 8.png";
import img3 from "../assets/Group 39919.png";
import BlogType from "../components/BlogType";
import { useGetAllBlogQuery, useGetRecentBlogQuery } from "../services/profile";
import { CircularProgress } from "@mui/material";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogQuery();
  const { data: Data } = useGetRecentBlogQuery();
  console.log(data, "first");
  console.log(Data, "first");
  return (
    <>
      {isLoading && <CircularProgress />}
      <div className="bg-ons flex justify-center items-center relative">
        <img className="absolute left-0" src={img1} alt="" />
        <img className="absolute right-0" src={img} alt="" />
        <img className="absolute h-full w-6/12 z-0" src={img3} alt="" />
        <div className="flex items-center z-1">
          <h2 className="font-bold text-4xl text-white">"BLOGS"</h2>
          <span>
            <img src={img2} alt="" />
          </span>
        </div>
      </div>

      <div className="w-11/12 m-auto pt-10 p-2">
        <div className=" flex-col gap-5 grid grid-col-3">
          <h2 className="text-3xl font-bold grid md:grid-cols-3 grid-cols-1">
            Read What Our Team Has Published On The Internet
          </h2>
          <p className="grid md:grid-cols-2 grid-cols-1">
            The best ideas can change who we are, We're platform where over 100
            million readers come to find insightful and dynamic thinking.
          </p>
        </div>
      </div>

      <div className="w-11/12 m-auto bg-white">
        <BlogType />
      </div>
    </>
  );
};

export default Blog;
