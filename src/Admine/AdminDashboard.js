import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import { removeToken, getToken } from "../services/LocalStorage";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAdminProfileQuery } from "../services/profile";

const AdminDashboard = () => {
  const profileRef = useRef();
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();
  const [drower, setDrower] = useState(false);
  const handleDrower = () => {
    setDrower(!drower);
  };

  const logOut = () => {
    console.log("logout");
    removeToken("token");
    navigate("/admin/Login");
  };

  useEffect(() => {
    let handler = (e) => {
      if (!profileRef.current.contains(e.target)) {
        setProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const token = getToken("token");
  const { data } = useAdminProfileQuery(token);
  console.log(data, "data");
  useEffect(() => {
    if (!token) {
      navigate("/admin/Login");
    }
  }, [token]);

  return (
    <>
      <div className="lg:flex antialiased min-h-screen relative bg-gradient-to-br  to-[#000000]   from-[#130F40] text-white overflow-hidden ">
        {/*Drawer/ Side Drawer */}
        <SideBar drower={drower} handleDrower={handleDrower} />

        <div className="relative z-0 lg:flex-grow ">
          {/* Header */}
          <header
            className=" hover:bg-black/50 duration-300 hover:shadow-2xl gap-4 h-[10vh] flex items-center justify-between px-3  w-[calc(100vw_-_256px)];
                    "
          >
            <button
              onClick={(e) => setDrower(!drower)}
              className="text-4xl bg-black/30 rounded hover:bg-black/70 hover:scale-125 duration-300 text-white p-2 ml-4 lg:hidden flex-shrink-0"
            >
              <RxHamburgerMenu />
            </button>

            <div className="text-xl font-semibold">Dashboard</div>

            {/* Search */}
            <div>
              <input
                type="search"
                placeholder="Search..."
                className="border rounded-xl bg-black"
              />
            </div>

            {/* Left */}
            <div className="flex items-center gap-2">
              <span className="text-xl">
                <MdEmail />
              </span>
              <span className="text-xl">
                <AiFillBell />
              </span>

              <div ref={profileRef} className="relative">
                <span onClick={() => setProfile(!profile)}>
                  <img
                    className="w-6 h-6 rounded-full object-cover
                                "
                    src={`http://localhost:7001/${data?.pimage}`}
                    alt=""
                  />
                </span>
                <div
                  className={` ${
                    profile ? "block" : "hidden"
                  } absolute right-2 w-48 p-3 rounded-md bg-black/70 z-[10] text-white top-10`}
                >
                  <ul className="flex flex-col w-full justify-center items-center  text-sm  gap-2">
                    <Link to="/admin/dashboard/profile">
                      <li className="hover:text-xl  w-full duration-300">
                        Profile
                      </li>
                    </Link>
                    <div onClick={logOut} className="cursor-pointer">
                      <li className="hover:text-xl  w-full duration-300">
                        LogOut
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          {/* MainBody */}
          <div className=" h-[90vh] overflow-auto p-3">
            {/* All content Goes Here */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
