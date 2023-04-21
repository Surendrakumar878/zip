import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { FaHouzz } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="bg-[#28236E] min-h-screen flex  flex-col bg-blueback bg-contain items-center justify-center">
      <div className="container mx-auto px-8 sm:px-16 ">
        <img
          className="w-[60%] sm:w-[25%] py-0 px-10 sm:p-0 sm:py-10 "
          src="Layer_x0020_1@2x.png"
          alt=""
          loading="lazy"
        />
        <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:align-center md:flex flex-align-center ">
          <div className="w-full p-10 sm:p-0 lg:w-1/6">
            <h2 className="text-lg font-bold mb-2 text-white">Quick Links</h2>
            <ul class="list-none text-white flex-col gap-6 md:gap-4 flex ">
              <Link to="/hj">
                {" "}
                <li className=" hover:text-black">Home       </li>
              </Link>
              <Link>
                {" "}
                <li className=" hover:text-black">About Us</li>
              </Link>
              <Link>
                <li className=" hover:text-black">Services</li>
              </Link>
              <Link to="#">
                <li className=" hover:text-black">Portfolio</li>
              </Link>
              <Link>
                <li className=" hover:text-black">Gallery</li>
              </Link>
              <Link>
                <li className=" hover:text-black"> Blog</li>
              </Link>
              <Link>
                <li className=" hover:text-black"> Us Contact</li>
              </Link>
              <Link>
                <li className=" hover:text-black"> Book An Appointment</li>
              </Link>


            </ul>
          </div>
          <div className="w-full flex justify-around gap-8 p-10 sm:p-0 lg:w-1/2">
            <div className="">
              <h2 className="text-lg font-bold mb-2 text-white">Services</h2>
              <ul class="list-none text-white flex-col md:gap-8 gap-4 flex ">
                <Link to="/hj">
                  {" "}
                  <li className=" hover:text-black">Content Marketing</li>
                </Link>
                <Link>
                  {" "}
                  <li className=" hover:text-black">Graphic Designing</li>
                </Link>
                <Link>
                  <li className=" hover:text-black">Local SEO</li>
                </Link>
                <Link to="#">
                  <li className=" hover:text-black">PPC</li>
                </Link>
              </ul>
            </div>
            <div className="w-full  sm:p-0 lg:w-1/2">

              <ul class="list-none text-white flex-col md:gap-8 gap-4 flex ">
                <Link to="/hj">
                  {" "}
                  <li className=" hover:text-black">
                    SEO
                  </li>
                </Link>
                <Link>
                  {" "}
                  <li className=" hover:text-black">Social Media</li>
                </Link>
                <Link>
                  <li className=" hover:text-black">Marketing</li>
                </Link>
                <Link to="#">
                  <li className=" hover:text-black">UI/UX</li>
                </Link>
                <Link>
                  <li className=" hover:text-black">Website Designing</li>
                </Link>
                <Link>
                  <li className=" hover:text-black"> Website</li>
                </Link>
                <Link>
                  <li className=" hover:text-black"> Development</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="w-full  lg:w-1/3  flex-direction:column  p-10 sm:p-0  ">
            <h2 className="text-lg font-bold mb-2 text-white">Get in touch</h2>
            <ul class="list-none  mb-4">

              <li className="flex gap-4 font-medium text-white mb-4">
                <span className="elementor-screen-only"><TiLocation /></span> <span>904 Shyamvrund Apartments Opposite Dhananjay Tower Shyamal Cross Road Ahmedabad – 380015, Gujarat, INDIA.</span>
              </li>
              <li className="flex gap-4 font-medium text-white mb-4">
                <span className="elementor-screen-only"><BsTelephoneFill /></span> +91 9537895111 / +91 8200493681
              </li>
              <li className=" flex gap-4 font-medium text-white mb-4">
                <span className="elementor-screen-only"><MdEmail /></span>info@checkmatecreatives.com
              </li>
              <div className="flex gap-4 text-white">
                <span className="elementor-grid-item">
                  <BsFacebook />
                </span>

                <span className="elementor-screen-only"><BsPinterest /></span>


                <span className="elementor-screen-only"><FaHouzz /></span>


                <span className="elementor-screen-only"><BsInstagram /></span>


                <span className="elementor-screen-only"><BsLinkedin /></span>

              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className=" text-white text-base text-center pb-8">
          © 2022 Checkmate
        </p>
      </div>
    </footer>
  );
}

export default Footer;
