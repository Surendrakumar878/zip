import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import CollapsMenu from "../components/CollapsMenu";
import HomeCarousel from "../components/HomeCarousel";
import {
  BsPersonCircle,
  BsFillCalendar2Fill,
  BsEnvelopePaper,
  BsFillLightbulbFill,
  BsFillChatSquareTextFill,
  BsFillPostcardHeartFill,
  BsHeadset,
  BsFillPieChartFill,
  BsGrid1X2Fill,
} from "react-icons/bs";

import { BsFillEyeFill } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { FcEngineering } from "react-icons/fc";
import { AiFillFormatPainter } from "react-icons/ai";
import { MdKeyboardArrowRight, MdDesignServices } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import img6 from "../assets/Group 39825.png";
import img7 from "../assets/Mask Group 24.png";
import img from "../assets/NoPath - Copy (2).png";
import img1 from "../assets/NoPath - Copy (20).png";
import img2 from "../assets/NoPath - Copy (3).png";
import img3 from "../assets/NoPath - Copy (23).png";
import img4 from "../assets/NoPath - Copy (31).png";
import {
  useGetAllBlogQuery,
  useGetRecentBlogQuery,
  useGetPopulerBlogQuery,
} from "../services/profile";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { EffectCube } from "swiper";
import { EffectCoverflow } from "swiper";
import { EffectFlip } from "swiper";
import { EffectCards } from "swiper";
import { EffectCreative } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PortFolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const [perView, setPerView] = useState(3);

  const { data: Data, isLoading: loading } = useGetRecentBlogQuery();
  const { data: Pata, isLoading: ploading } = useGetPopulerBlogQuery();
  const { data, isLoading } = useGetAllBlogQuery();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 620 && window.innerWidth < 1000) {
      setPerView(2);
    } else if (window.innerWidth > 1000) {
      setPerView(3);
    } else {
      setPerView(1);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log("This is console");
  }, []);
  return (
    <>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1  relative min-h-screen items-center gap-3" >
        <div className="w-8/12 m-auto flex flex-col gap-4 justify-start md:items-start items-center text-center md:text-start" >
          <h2 className="text-5xl font-black " >WE HELP YOU
            TO GROW YOUR
            BUSINESS</h2>
          <hr className="border w-5/12 border-black" />

          <span className=" text-ons text-2xl font-bold" >We Don't Craete Bussiness
            We Craete Brand Stories</span>
          <span className="text-xl font-semibold" >We Make Creativity Work For Your Brand!
            Ours Is A Team Of Creatives That Is Brainstorming
            On Great Ideas. The. Time.</span>
          <button className='font-bold text-xl px-4 py-2 rounded-md bg-btn text-white flex gap-2 text-center justify-start items-center' >
            View Portfolio
            <BsFillEyeFill />
          </button>
        </div>
        <div><img src={img} className="w-full md:absolute md:w-[50vw] md:h-[120vh] border object-cover bg-white2 h-96 top-0 right-0 " alt="" /></div>
      </div>

      {/* Ohter Grid */}
      <div className="bg-btn bg-grid bg-contain">
        <div className="flex flex-col gap-4 w-10/12 m-auto py-10">
          <span className="text-xl text-white/50">Creative Madness</span>
          <hr className="border w-32" />
          <h1 className="text-white">PortFolio</h1>
        </div>

        <div className="grid grid-cols-fill gap-10 md:gap-y-24 gap-y-6 w-10/12 m-auto p-4 py-10 ">
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsFillLightbulbFill />
            <span>Branding</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsFillChatSquareTextFill />
            <span>Content Writing</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsFillPostcardHeartFill />
            <span>Guest Posting</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsHeadset />
            <span>Google ads</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsFillPieChartFill />
            <span>Local seo</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <AiFillFormatPainter />
            <span>User Interface & User Exprience</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <BsGrid1X2Fill />
            <span>Website Development</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <MdDesignServices />
            <span>Web Design</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <FcEngineering />
            <span>Search Engin Optimization</span>
          </div>
          <div className="hover:bg-[#00BBFF] gap-3 flex items-center rounded-xl px-6 py-4 text-white">
            <IoShareSocial />
            <span>Social Media Marketing</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className=" m-auto grid grid-cols-3 grid-rows-2 gap-2 py-10 w-10/12">
        <img className="row-span-2 h-screen w-full " src={img1} alt="" />
        <img className="h-[50vh] w-full" src={img2} alt="" />
        <img className="row-span-2 w-full h-screen" src={img3} alt="" />
        <img className="h-[50vh] w-full" src={img4} alt="" />
      </div>

      {/* Some other Produc You May Like */}
      <div className="flex flex-col gap-3 w-10/12 m-auto">
        <div className="text-center py-5">
          <h1>Some Other Project You May Like</h1>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 text-sm mt-10">
          <button
            className={`${toggleState === 1
              ? "active-tabs border-btn bg-btn text-white"
              : "tabs bg-white2"
              } p-2 px-5 border   uppercase rounded hover:scale-105   duration-300 font-semibold`}
            onClick={() => toggleTab(1)}
          >

            Most Recent
          </button>
          <button
            className={`${toggleState === 2
              ? "active-tabs border-btn bg-btn text-white"
              : "tabs bg-white2"
              } p-2 px-5 border   uppercase hover:scale-105 duration-300 font-semibold`}
            onClick={() => toggleTab(2)}
          >
            Popular
          </button>

          <button
            className={`${toggleState === 3
              ? "active-tabs border-btn bg-btn text-white"
              : "tabs bg-white2"
              } p-2 px-5 border   uppercase hover:scale-105 duration-300 font-semibold`}
            onClick={() => toggleTab(3)}
          >

            Featured
          </button>
        </div>

        {/* Blogs */}
        <div className=" my-20 text-black ">
          <div className=" rounded-2xl h-full">
            <div className={`${toggleState === 1 ? "block" : "hidden"} `}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                effect="flip"
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {Data?.map(
                  (
                    {
                      mainTitle,
                      category,
                      mainTitleImg,
                      readBy,
                      heading,
                      _id,
                      createdAt,
                    },
                    index
                  ) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-3 flex-col max-w-sm  rounded-sm pb-8">
                        <div className="max-w-sm h-56">
                          <img
                            className="w-full h-full"
                            src={`http://localhost:7001/${mainTitleImg}`}
                            alt=""
                          />
                        </div>
                        {/* <div>tag</div> */}
                        <span className={` ${category == "desing" ? "bg-green-500" : "bg-btn"}  ${category == "SEO" ? "bg-ons" : "bg-btn"} px-6  py-2 relative bg-btn md:w-5/12 sm:w-7/12 w-10/12 text-white`}>
                          <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white">
                          </div>
                          <span className="mr-4">{category}</span>
                        </span>
                        <span className="font-bold ">{mainTitle}</span>

                        <div className="flex justify-between w-9/12 text-sm">
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            {new Date(createdAt).toDateString()}
                          </span>
                          <div>|</div>
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            10 min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <Link to={`/blog/${_id}`}>
                          <div className="flex gap-3 items-center">
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                            <MdKeyboardArrowRight className="text-btn" />
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>

            <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                effect="flip"
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {data?.map(
                  (
                    {
                      mainTitle,
                      category,
                      mainTitleImg,
                      readBy,
                      heading,
                      _id,
                      createdAt,
                    },
                    index
                  ) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-3 flex-col max-w-sm  rounded-sm pb-8">
                        <div className="max-w-sm h-56">
                          <img
                            className="w-full h-full"
                            src={`http://localhost:7001/${mainTitleImg}`}
                            alt=""
                          />
                        </div>
                        <span className={` ${category == "desing" ? "bg-green-500" : "bg-btn"}  ${category == "SEO" ? "bg-ons" : "bg-btn"} px-6  py-2 relative bg-btn md:w-5/12 sm:w-7/12 w-10/12 text-white`}>
                            <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white"></div>
                            <span className="mr-4">{category}</span>
                          </span>
                        <span className="font-bold ">{mainTitle}</span>

                        <div className="flex justify-between w-9/12 text-sm">
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            {new Date(createdAt).toDateString()}
                          </span>
                          <div>|</div>
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            10 min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <Link to={`/blog/${_id}`}>
                          <div className="flex gap-3 items-center">
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                            <MdKeyboardArrowRight className="text-btn" />
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>

            <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                effect="flip"
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {Pata?.map(
                  (
                    {
                      mainTitle,
                      category,
                      mainTitleImg,
                      readBy,
                      heading,
                      _id,
                      createdAt,
                    },
                    index
                  ) => (
                    <SwiperSlide key={index}>
                      <div className="flex gap-3 flex-col max-w-sm  rounded-sm pb-8">
                        <div className="max-w-sm h-56">
                          <img
                            className="w-full h-full"
                            src={`http://localhost:7001/${mainTitleImg}`}
                            alt=""
                          />
                        </div>
                        <span className={` ${category == "desing" ? "bg-green-500" : "bg-btn"}  ${category == "SEO" ? "bg-ons" : "bg-btn"} px-6  py-2 relative bg-btn md:w-5/12 sm:w-7/12 w-10/12 text-white`}>
                            <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white"></div>
                            <span className="mr-4">{category}</span>
                          </span>
                        <span className="font-bold ">{mainTitle}</span>

                        <div className="flex justify-between w-9/12 text-sm">
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            {new Date(createdAt).toDateString()}
                          </span>
                          <div>|</div>
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            10 min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <Link to={`/blog/${_id}`}>
                          <div className="flex gap-3 items-center">
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                            <MdKeyboardArrowRight className="text-btn" />
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <HomeCarousel />
      <CollapsMenu />

      <div className="relative min-h-[90vh]  mb-10 grid md:grid-cols-3 gap-3 grid-cols-1 md:justify-items-start justify-items-center text-center md:text-start w-10/12  m-auto">
        <div className="w-full bg-ons h-24 absolute  bottom-0 right-0">
          <img
            className="absolute  bottom-0 right-0 h-24 object-contain "
            src={img6}
            alt=""
          />
        </div>

        <img src={img7}
          className="absolute left-full opacity-40 md:opacity-100 -translate-x-full h-96 bottom-4 z-0"
          alt="" />

        <div className="absolute  top-full sm:left-0 md:-translate-y-20 -translate-y-24">
          <div className="flex gap-1 p-4 flex-col md:flex-row pt-4">
            <span className="bg-btn text-white rounded-md px-3 py-2  flex gap-2 items-center">
              <BsEnvelopePaper className="text-white text-2xl" />
              Book A Free Appointment
            </span>
            <span className="bg-white  font-semibold text-btn rounded-md px-3 py-1  flex gap-2 items-center">
              <FiPhoneCall className="text-btn text-2xl" />
              call A +91 8200493681
            </span>
          </div>
        </div>

        <div className='col-span-2 w-10/12 flex flex-col items-center justify-center md:items-start ' >
          <h2 className=" text-3xl font-thin ">Choose Us</h2>

          <hr className='border border-btn w-1/12 my-7' />

          <div className="z-10">
            <h2 className="text-3xl font-black py-6 md:w-6/12 w-full ">
              We Make Your Business Bright
            </h2>

            <p className='md:mb-14 sm:mb-28 mb-24 text-sm md:text-md'>
              we listen, we think, we create, We start by understanding of
              your business and its aspirations; we apply our knowledge and
              expertise with a conceptulization to visualize different
              branding phenomenon and implement it with the great output of
              marketing collateral, website, Online Campaigns to boost your
              products or services as a brand in real world. In simple terms
              we'll become your very own team of creative geniuses, on-line
              strategists and friendly geeks. Call for a jargon free chat or
              if you're too busy use this form.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortFolio;
