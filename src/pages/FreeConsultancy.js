import React from "react";
import img from "../assets/Ellipse 753.png";
import img1 from "../assets/Ellipse 754.png";
import img2 from "../assets/5f75d7a5126bd@2x.png";
import Appointment from "../components/Appointment";

const FreeConsultancy = () => {
  return (
    <>
      <div className="h-96 bg-ons relative">
        <img className="absolute top-0 right-0" src={img} alt="" />
        <img className="absolute bottom-0" src={img1} alt="" />
        <img
          className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
          src={img2}
          alt=""
        />
        <div className="flex flex-col justify-center items-center h-full text-white text-center gap-4">
          <h1 className="font-black text-5xl">Book An Appointment</h1>
          <span>Seat Back & Releaxed We Got You Covered</span>
        </div>
      </div>
      <div className="py-40 w-10/12 m-auto">
        <Appointment />
      </div>
    </>
  );
};

export default FreeConsultancy;
