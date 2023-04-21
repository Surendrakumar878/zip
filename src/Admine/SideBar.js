import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { MdCategory } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { AiFillHome } from "react-icons/ai";
import { BsSearch, BsPenFill } from "react-icons/bs";


const SideBar = ({ drower, handleDrower }) => {
  const useHome = useRef();
  const [blog, setBlog] = useState(false);
  const [enquiries, setEnquiries] = useState(false);
  const [category, setCategory] = useState(false);
  const [appointments, setAppointments] = useState(false);
  const [contact, setContact] = useState(false)
  return (
    <>
      {/* Nav Bar / Side Bar */}
      <nav
        className={` ${drower
          ? "translate-x-0 duration-300 "
          : "-translate-x-full duration-300"
          } absolute transform  inset-0 lg:relative min-h-screen z-10 w-10/12 lg:w-64  hover:bg-black/80  hover:shadow-2xl hover:border-r lg:translate-x-0 h-[100vh] flex-shrink-0 flex flex-col `}
      >
        {/*Bar Header */}
        <div className="flex justify-between items-center text-white  h-[10vh]">
          <span className="font-bold text-xl sm:text-xl p-2"> SideBar</span>
          <button className="lg:hidden" onClick={() => handleDrower()}>
            <MdKeyboardArrowLeft className="text-4xl bg-black/30 rounded-full hover:bg-black/70 hover:scale-125 duration-300" />
          </button>
        </div>

        {/* Bar Body Content*/}
        <ul className=" text-white flex flex-col gap-1  h-[90vh] overflow-auto px-2 ">
          <li>
            <div
              className="px-4 cursor-pointer py-2 hover:bg-indigo-800 rounded-md w-full flex justify-between items-center border border-white/20 "
              onClick={() => setBlog(!blog)}
            >
              <div className="flex items-center justify-center gap-3">
                <ImBlog />
                Blog
              </div>

              <span>
                {blog ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            <div
              className={` ${!blog ? "hidden" : "block"
                } py-2 w-10/12 m-auto px-3 bg-white/10 rounded-lg mt-2`}
            >
              <div className="flex flex-col gap-2 text-sm capitalize">
                <Link
                  to="blogform"
                  className="hover:bg-orange-600 rounded py-1 px-2"
                >
                  Blog Form
                </Link>
              </div>
            </div>
          </li>

          {/* Inquiry */}
          <li>
            <div
              className="px-4 cursor-pointer py-2 hover:bg-indigo-800 rounded-md w-full flex justify-between items-center border border-white/20 "
              onClick={() => setEnquiries(!enquiries)}
            >
              <div className="flex items-center justify-center gap-3">
                <BsSearch />
                Enquiries
              </div>

              <span>
                {enquiries ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            <div
              className={` ${!enquiries ? "hidden" : "block"
                } py-2 w-10/12 m-auto px-3 bg-white/10 rounded-lg mt-2`}
            >
              <div className="flex flex-col gap-2 text-sm capitalize">
                <Link
                  to="enquireform"
                  className="hover:bg-orange-600 rounded py-1 px-2"
                >
                  Enquires Data
                </Link>
              </div>
            </div>
          </li>


          {/* Appointment */}
          <li>
            <div
              className="px-4 cursor-pointer py-2 hover:bg-indigo-800 rounded-md w-full flex justify-between items-center border border-white/20 "
              onClick={() => setAppointments(!appointments)}
            >
              <div className="flex items-center justify-center gap-3">
                <BsPenFill />
                Appointments
              </div>

              <span>
                {appointments ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            <div
              className={` ${!appointments ? "hidden" : "block"
                } py-2 w-10/12 m-auto px-3 bg-white/10 rounded-lg mt-2`}
            >
              <div className="flex flex-col gap-2 text-sm capitalize">
                <Link
                  to="appointment"
                  className="hover:bg-orange-600 rounded py-1 px-2"
                >
                  Appointment Data
                </Link>
              </div>
            </div>
          </li>


          {/* Contact */}
          <li>
            <div
              className="px-4 cursor-pointer py-2 hover:bg-indigo-800 rounded-md w-full flex justify-between items-center border border-white/20 "
              onClick={() => setContact(!contact)}
            >
              <div className="flex items-center justify-center gap-3">
                <FcContacts />
                Contact Us
              </div>

              <span>
                {contact ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            <div
              className={` ${!contact ? "hidden" : "block"
                } py-2 w-10/12 m-auto px-3 bg-white/10 rounded-lg mt-2`}
            >
              <div className="flex flex-col gap-2 text-sm capitalize">
                <Link
                  to="acontact"
                  className="hover:bg-orange-600 rounded py-1 px-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </li>

          {/* Category */}
          {/* <li>
            <div
              className="px-4 cursor-pointer py-2 hover:bg-indigo-800 rounded-md w-full flex justify-between items-center border border-white/20 "
              onClick={() => setCategory(!category)}
            >
              <div className="flex items-center justify-center gap-3">
                <MdCategory />
                addCategory
              </div>

              <span>
                {category ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </span>
            </div>
            <div
              className={` ${!category ? "hidden" : "block"
                } py-2 w-10/12 m-auto px-3 bg-white/10 rounded-lg mt-2`}
            >
              <div className="flex flex-col gap-2 text-sm capitalize">
                <Link
                  to="category"
                  className="hover:bg-orange-600 rounded py-1 px-2"
                >
                  category
                </Link>
              </div>
            </div>
          </li> */}
        </ul>

        {/* <div className='flex justify-center items-center py-4' >
                    <Button />
                </div> */}
      </nav>
    </>
  );
};

export default SideBar;
