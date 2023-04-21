import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { BsFillCalendarCheckFill } from "react-icons/bs";
// import logo from '../assets/logo.png'
import { motion } from "framer-motion";
import { useGetAllBlogQuery } from "../services/profile";

const Header = ({ sticky }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [about, setAbout] = useState(false);
  const { data } = useGetAllBlogQuery();
  console.log(search);

  const serachResult = data?.filter((co) =>
    co.category.toLowerCase().includes(search)
  );

  return (
    <>
      <div>
        {/* <Header /> */}
        <header
          className={` ${sticky
            ? "sticky md:h-14  transition-all md:px-20 md:opacity-80 md:bg-white1 z-30 "
            : null
            }  flex justify-between items-center px-4 md:px-3 lg:px-12 h-[12vh] w-full 
            bg-white1 duration-700 shadow-lg `}
        >
          {/* Logo */}
          <NavLink to="/">
            <img
              className="h-12 text-white bg-white "
              src="logo.svg"
              alt="Logo"
            />
          </NavLink>

          {/* List */}
          <nav className="z-30 order-first md:-order-none">
            <button onClick={() => setOpen(!open)} className="md:hidden">
              <GiHamburgerMenu className="h-8 w-8 text-black" />
            </button>

            <ul
              className={`${sticky ? "md:bg-whtie z-30" : ""} ${open ? "translate-x-0" : "-translate-x-full"
                } fixed left-0
                right-0 min-h-screen bg-white1 md:top-0 top-[70px] space-y-4 p-4  md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0 transition duration-200 transfrom items-center text-black `}
            >


              {/* For Large Screen */}

              {/* Home */}
              <NavLink to="/">
                <motion.li
                  initial={{ y: "-5vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="hover:text-xl  "
                  onClick={() => setOpen(!open)}
                >
                  Home
                </motion.li>
              </NavLink>

              {/* About Large */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-xl  group hidden md:block"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="about">About Us</NavLink>

                <div className="group-hover:block hidden hover:block md:absolute md:w-56 text-center text-white cursor-pointer w-full right-0 rounded-md">
                  <div className="md:-mt-1  p-3 ">
                    <ul className="md:mt-1  p-1 rounded bg-[#4E17E2] flex flex-col justify-center items-center gap-3 w-full text-sm">
                      <Link to="/team" className="w-full hover:bg-btn p-1 rounded-sm " >
                        <li className=" ">
                          Our Team
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </motion.li>

              {/* About Us For Small Screen */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-xl md:hidden cursor-pointer"
                onClick={() => setAbout(!about)}
              >
                <Link to="#">About Us</Link>
                <div
                  className={` ${about ? "block" : "hidden"}  w-full right-0 `}
                >
                  <div className="md:-mt-1  p-3 ">
                    <ul className="md:mt-10 bg-[#4E17E2] p-1 rounded-md px-2 text-white hover:bg-btn">
                      <Link to="/about"
                        onClick={() => setOpen(!open)}

                      >
                        <li className="  rounded-md w-full ">
                          About
                        </li>
                      </Link>
                      <li className="  rounded-md w-full ">
                        Our Team
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>

              {/* Services */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-xl  group hidden md:block"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="services">Services</NavLink>

                <div className="group-hover:block hidden hover:block md:absolute md:w-56 text-center text-white cursor-pointer w-full right-0 rounded-md">
                  <div className="md:-mt-1  p-3 ">
                    <ul className="md:mt-1  p-1 rounded bg-[#4E17E2] flex flex-col justify-center items-center gap-3 w-full text-sm">
                      <Link to="content" >
                        <li className="hover:bg-btn p-1 rounded-sm w-full ">
                          Content Writing
                        </li>
                      </Link>
                      <Link to="ppc">
                        <li className="hover:bg-btn p-1 rounded-sm w-full ">
                          PPC
                        </li>
                      </Link>

                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Guest Posting
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Google Ads
                      </li>
                      <Link to="seo">
                        <li className="hover:bg-btn p-1 rounded-sm w-full ">
                          SEO
                        </li>
                      </Link>
                      <Link to="UiandUx">
                        <li className="hover:bg-btn p-1 rounded-sm w-full ">
                          UI & UX
                        </li>
                      </Link>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Website designing
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Social Media And Marketing
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>

              {/* Services For Large Screen */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-xl md:hidden cursor-pointer"
                onClick={() => setServices(!services)}
              >
                <Link to="#">Services</Link>
                <div
                  className={` ${services ? "block" : "hidden"
                    }  w-full right-0 `}
                >
                  <div className="md:-mt-1  p-3 ">
                    <ul className="md:mt-10 bg-btn/60 p-1 flex flex-col gap-2 rounded-md px-2 text-white ">
                      <Link to="/services"
                        onClick={() => setOpen(!open)}
                      >
                        <li className="hover:bg-btn p-1 rounded-sm w-full ">
                          Service
                        </li>
                      </Link>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Content Writing
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Guest Posting
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Google Ads
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        SEO
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        UI & UX
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Website designing
                      </li>
                      <li className="hover:bg-btn p-1 rounded-sm w-full ">
                        Social Media And Marketing
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.li>

              {/* PortFolio  */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hover:text-xl  "
              >
                <NavLink to="port" onClick={() => setOpen(!open)}>
                  <button>Portfolio</button>
                </NavLink>
              </motion.li>

              {/* Contact Us */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="hover:text-xl  group "
              >
                <NavLink to="blog" onClick={() => setOpen(!open)}>
                  <button>Blog</button>
                </NavLink>
              </motion.li>

              {/* Contact Us */}
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="hover:text-xl  group "
              >
                <NavLink to="contact" onClick={() => setOpen(!open)}>
                  <button>Contact Us</button>
                </NavLink>
              </motion.li>
            </ul>
          </nav>

          {/* Search */}
          <div className="flex gap-3 items-center ">
            <form className="" action="">
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <CiSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />

                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  name="search"
                  placeholder="Search..."
                  aria-label="Search"
                  className="  px-3 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 pr-3 pl-10 w-32"
                />
                {search &&
                  serachResult?.map(({ category, _id }) => {
                    return (
                      <div
                        className="absolute left-0 p-5 flex flex-col justify-center items-center gap-3 z-[1000] bg-white/70 border hover:bg-btn hover:text-white top-full "
                        key={_id}
                      >
                        <Link to={`/blog/${_id}`}>{category}</Link>
                      </div>
                    );
                  })}
              </div>
            </form>

            <NavLink to="consultancy">
              <button className="px-4 py-2 rounded bg-btn uppercase text-white hidden md:block text-xs  active:bg-purpl hover:bg-ons">
                Free Consultancy
              </button>
            </NavLink>

            <NavLink
              to="consultancy"
              onClick={() => setOpen(false)}
            >
              <BsFillCalendarCheckFill className="  text-btn md:hidden " />
            </NavLink>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
