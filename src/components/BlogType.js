import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Images from "../components/Image";
import {
  BsPersonCircle,
  BsFillCalendar2Fill,
  BsFillArrowUpSquareFill,
  BsEnvelopePaper,
  BsFillWalletFill,
  BsFillLightbulbFill,
  BsFilePostFill,
  BsHeadset,
  BsFillPieChartFill,
  BsFillGrid1X2Fill,
  BsUiChecksGrid,
  BsFillPencilFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImFilter } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { DiHtml5Multimedia } from "react-icons/di";
import { MdContentPasteSearch } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  useGetAllBlogQuery,
  useGetRecentBlogQuery,
  useGetPopulerBlogQuery,
} from "../services/profile";
import { CircularProgress } from "@mui/material";
import img from "../assets/Mask Group 15.png";
import img1 from "../assets/Mask Group 9.png";
import img2 from "../assets/Mask Group 22.png";
import img3 from "../assets/Mask Group 23.png";
import img4 from "../assets/Group 40138.png";
import img5 from "../assets/icons8.com-ouch.png";
import img6 from "../assets/Group 39825.png";
import img7 from "../assets/Mask Group 24.png";

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

const BlogType = () => {
  const [toggleState, setToggleState] = useState(1);
  const [perView, setPerView] = useState(3);

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
  const { data, isLoading } = useGetAllBlogQuery();

  const marketingData = data?.filter((e) => e.category === "marketing");
  const seoData = data?.filter((e) => e.category === "SEO");
  const desingData = data?.filter((e) => e.category === "desing");
  console.log(marketingData, "dataByCat");
  console.log(seoData, "seoData");
  const { data: Data, isLoading: loading } = useGetRecentBlogQuery();
  const { data: Pata, isLoading: ploading } = useGetPopulerBlogQuery();
  // const [Recent, setResent] = useState();
  // useEffect(() => {
  //   if (Data && Data[0]) setResent(Data[0]);
  // }, [Data]);

  return (
    <>
      <>
        {isLoading && <CircularProgress />}
        <div className="p-4  bg-white1 text-black ">

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
          <div className=" my-20 text-black">
            <div className=" rounded-2xl h-full">

              <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
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
                        mainTitleImg,
                        readBy,
                        heading,
                        _id,
                        createdAt,
                        category
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
                        mainTitleImg,
                        readBy,
                        heading,
                        _id,
                        createdAt,
                        category
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

              <div className={`${toggleState === 3 ? "block" : "hidden"} `}>
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
                        mainTitleImg,
                        readBy,
                        heading,
                        _id,
                        createdAt,
                        category
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

          {/*  */}
          <div className="grid md:grid-cols-2  gap-4 items-center justify-items-start grid-cols-1">
            <img className="w-full h-full object-cover" src={img} alt="" />

            <div className=" flex flex-col  justify-end gap-4 md:items-start">
              <p className="text-3xl sm:text-3xl lg:text-4xl font-black">
                The Ultimate Guide To Google Business Profile.
              </p>
              <ul className="text-xl">
                <p>
                  As a local business, achieving high visibility on Google has
                  never been more vital for long-term growth.
                </p>
              </ul>
              <div className="flex justify-between w-8/12 text-sm">
                <span className="flex items-center gap-3">
                  <BsFillCalendar2Fill className="text-btn" />
                  27 feb 2022
                </span>
                <div>|</div>
                <span className="flex items-center gap-3">
                  <BsFillCalendar2Fill className="text-btn" />
                  10 min read
                </span>
              </div>

              <div className="flex gap-2 items-center ">
                <BsPersonCircle className="text-btn rounded-full " />
                <span className="text-xs font-semibold">Read By 10k Users</span>
              </div>

              <div className="flex gap-3 items-center">
                <span className="text-sm text-btn">Read Artical</span>
                <MdKeyboardArrowRight className="text-btn" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 grid-cols-1 my-4">
            <div className="grid   gap-4 items-center justify-items-start grid-cols-1">
              <img className="w-full h-full object-cover" src={img1} alt="" />
              <div className=" flex flex-col  justify-end gap-4 md:items-start">
                <p className="text-3xl sm:text-xl lg:text-xl w-7/12 font-bold">
                  The Ultimate Guide To Google Business Profile.
                </p>
                <ul className="text-xl">
                  <p>
                    As a local business, achieving high visibility on Google has
                    never been more vital for long-term growth.
                  </p>
                </ul>
                <div className="flex justify-between w-8/12 text-sm">
                  <span className="flex items-center gap-3">
                    <BsFillCalendar2Fill className="text-btn" />
                    27 feb 2022
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
                    Read By 10k Users
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <span className="text-sm text-btn">Read Artical</span>
                  <MdKeyboardArrowRight className="text-btn" />
                </div>
              </div>
            </div>

            <div className="grid   gap-4 items-center justify-items-start grid-cols-1">
              <img className="w-full h-full object-cover" src={img2} alt="" />
              <div className=" flex flex-col  justify-end gap-4 md:items-start">
                <p className="text-3xl sm:text-xl lg:text-xl w-7/12 font-bold">
                  The Ultimate Guide To Google Business Profile.
                </p>
                <ul className="text-xl">
                  <p>
                    As a local business, achieving high visibility on Google has
                    never been more vital for long-term growth.
                  </p>
                </ul>
                <div className="flex justify-between w-8/12 text-sm">
                  <span className="flex items-center gap-3">
                    <BsFillCalendar2Fill className="text-btn" />
                    27 feb 2022
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
                    Read By 10k Users
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <span className="text-sm text-btn">Read Artical</span>
                  <MdKeyboardArrowRight className="text-btn" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-10">
            <img src={img3} alt="" />
          </div>

          {/* Top 5 Free */}
          <div className="my-14">
            <div className="w-10/12 flex flex-col gap-5">
              <h2 className="font-bold text-3xl">
                Top 5 Free SEO Analysis Tools To Rank Higher in SEPR
              </h2>
              <p>
                As a local business, achieving high visibility on Google has
                never been more vital for long-term growth and success. In fact,
                46% of all Google searches are for local information, and 4 in 5
                consumers use search.....
              </p>
              <div className="flex justify-between md:w-6/12 w-full md:text-sm text-xs flex-col sm:flex-row gap-3 sm:gap-0">
                <span className="flex items-center sm:gap-3">
                  <BsFillCalendar2Fill className="text-btn" />
                  27 feb 2022
                </span>
                <div className="hidden sm:block">|</div>
                <span className="flex items-center sm:gap-3">
                  <BsFillCalendar2Fill className="text-btn" />
                  10 min read
                </span>
                <div className="hidden sm:block">|</div>

                <div className="flex gap-3 items-center ">
                  <BsPersonCircle className="text-btn rounded-full " />
                  <span className=" ">Read By 10k Users</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <span className=" text-btn">Read Artical</span>
                <MdKeyboardArrowRight className="text-btn" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center text-center flex-col gap-4">
            <h2 className="text-3xl font-bold">
              Read From Which Interest Your Field
            </h2>
            <p>
              The best ideas can change who we are. We're an open platform where
              over 100 million readers come to find insightful and dynamic
              thinking.
            </p>
          </div>

          <div className="flex justify-center w-full py-10">
            <hr className="border border-black w-32" />
          </div>

          <div className=" my-20 text-black">
            <div className=" rounded-2xl h-full">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  EffectCube,
                  Autoplay,
                ]}
                effect="flip"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                // spaceBetween={20}
                // slidesPerView={3}
                // navigation
                // scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-ons rounded-xl"
                // grabCursor={true}
                // nextButton='.swiper-next'
                // prevButton='.swiper-prev'
                // resizeReInit={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    // spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide className="">
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5 ">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <DiHtml5Multimedia />
                    </div>
                    <div>Social Media</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFillWalletFill />
                    </div>
                    <div>All</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFillLightbulbFill />
                    </div>
                    <div>Branding</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <MdContentPasteSearch />
                    </div>
                    <div>Content Writing</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFilePostFill />
                    </div>
                    <div>Guest Posting</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsHeadset />
                    </div>
                    <div>Google ads</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFillPieChartFill />
                    </div>
                    <div>Local SEO</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 text-center py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFillGrid1X2Fill />
                    </div>
                    <div>user interface & user exprience</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsUiChecksGrid />
                    </div>
                    <div>WebSite Development</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <BsFillPencilFill />
                      
                    </div>
                    <div>WebSite Designing</div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center p-2 text-xs w-36 text-white gap-3 text-center py-5">
                    <div className="bg-btn h-12 w-12 rounded-xl flex justify-center items-center text-3xl">
                      <FcEngineering />
                    </div>
                    <div>Search Engine Optimzation</div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* A Living Network */}
          <div className="pt-10 grid grid-cols-3 gap-2 ">
            <div className="flex flex-col col-span-2">
              <h2 className="text-3xl font-bold">A Living Network</h2>
              <h3 className="text-2xl font-semibold">of Courious Minds.</h3>
              <br className="border w-5/12" />
              <p>
                We're creating a new model for digital publishing. One that
                supports nuance, complexity, and vital storytelling without
                giving in to the incentives of advertising.
              </p>
            </div>
            <div className="col-span-1 grid justify-items-center md:text-xl">
              <div className="flex gap-5 items-start">
                Filter By
                <span>
                  <ImFilter />
                </span>
                <div className="group relative">
                  <span className="text-xl text-btn  group-hover:text-ons hover:text-3xl duration-300">
                    <BsFillArrowUpSquareFill className="group-hover:rotate-180" />
                  </span>
                  <div
                    className={`hidden group-hover:block -mt-4  absolute right-0 `}
                  >
                    <ul
                      className={`flex  mt-5 group-hover:block border shadow-lg flex-col text-sm p-3 gap-3   bg-white`}
                    >
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        All
                      </li>
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        Date
                      </li>
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        Time
                      </li>
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        Recent
                      </li>
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        Popular
                      </li>
                      <li className="w-full hover:bg-btn cursor-pointer hover:text-xl duration-300 hover:text-white text-black text-center rounded">
                        Featured
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Most Resent  */}
          <div className="py-20">
            <h2 className="text-2xl font-bold pb-10">Most Recent </h2>

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, EffectCube]}
              effect="flip"
              spaceBetween={20}
              slidesPerView={1}
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
                    mainTitleImg,
                    readBy,
                    duration,
                    heading,
                    _id,
                    createdAt,
                    category
                  },
                  index
                ) => (
                  <SwiperSlide key={_id}>
                    <div className="grid md:grid-cols-2  gap-4 items-center justify-items-start grid-cols-1 py-10">
                      <img
                        className="w-full h-96 object-contain"
                        src={`http://localhost:7001/${mainTitleImg}`}
                        alt=""
                      />
                      <div className=" flex flex-col  justify-end gap-4 md:items-start">
                        <span className={` ${category == "desing" ? "bg-green-500" : "bg-btn"}  ${category == "SEO" ? "bg-ons" : "bg-btn"} px-6  py-2 relative bg-btn md:w-5/12 sm:w-7/12 w-10/12 text-white`}>
                          <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white"></div>
                          <span className="mr-4">{category}</span>
                        </span>
                        <p className="text-2xl sm:text-3xl lg:text-5xl">
                          The Ultimate Guide To Google Business Profile.
                        </p>
                        <ul className="text-xl">
                          <p>
                            As a local business, achieving high visibility on
                            Google has never been more vital for long-term
                            growth.
                          </p>
                        </ul>
                        <div className="flex justify-between w-8/12 text-sm">
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            {new Date(createdAt).toDateString()}
                          </span>
                          <div>|</div>
                          <span className="flex items-center gap-3">
                            <BsFillCalendar2Fill className="text-btn" />
                            {duration} min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <div className="flex gap-3 items-center">
                          <Link to={`/blog/${_id}`}>
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                          </Link>
                          <MdKeyboardArrowRight className="text-btn" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          <hr />

          {/* Advertising */}
          <div className=" my-20 text-black">
            <h2 className="text-2xl font-bold pb-10">Advertising </h2>

            <div className=" rounded-2xl h-full">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  EffectCube,
                  Autoplay,
                ]}
                effect="flip"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {marketingData?.map(
                  (
                    {
                      mainTitle,
                      mainTitleImg,
                      readBy,
                      duration,
                      heading,
                      _id,
                      createdAt,
                      category
                    },
                    index
                  ) => (
                    <SwiperSlide key={_id}>
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
                            {duration} min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <div className="flex gap-3 items-center">
                          <Link to={`/blognew/${_id}`}>
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                          </Link>
                          <MdKeyboardArrowRight className="text-btn" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>

          <hr />
          {/* SEO */}

          <div className=" my-20 text-black">
            <h2 className="text-2xl font-bold pb-10">SEO </h2>

            <div className=" rounded-2xl h-full">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  EffectCube,
                  Autoplay,
                ]}
                effect="flip"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {seoData?.map(
                  (
                    {
                      mainTitle,
                      mainTitleImg,
                      readBy,
                      duration,
                      heading,
                      _id,
                      createdAt,
                      category
                    },
                    index
                  ) => (
                    <SwiperSlide key={_id}>
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
                            {duration}min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <div className="flex gap-3 items-center">
                          <Link to={`/blognew/${_id}`}>
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                          </Link>
                          <MdKeyboardArrowRight className="text-btn" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>

          <hr />

          {/* Designing */}

          <div className=" my-20 text-black">
            <h2 className="text-2xl font-bold pb-10">Designing</h2>

            <div className=" rounded-2xl h-full">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  EffectCube,
                  Autoplay,
                ]}
                effect="flip"
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                slidesPerView={perView}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="bg-white1 "
              >
                {desingData?.map(
                  (
                    {
                      mainTitle,
                      mainTitleImg,
                      readBy,
                      heading,
                      duration,
                      _id,
                      createdAt,
                      category
                    },
                    index
                  ) => (
                    <SwiperSlide key={_id}>
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
                            {duration} min read
                          </span>
                        </div>

                        <div className="flex gap-2 items-center ">
                          <BsPersonCircle className="text-btn rounded-full " />
                          <span className="text-xs font-semibold">
                            Read By {readBy}k Users
                          </span>
                        </div>

                        <div className="flex gap-3 items-center">
                          <Link to={`/blognew/${_id}`}>
                            <span className="text-sm text-btn">
                              Read Artical
                            </span>
                          </Link>
                          <MdKeyboardArrowRight className="text-btn" />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>

          {/*  */}
          <div className="bg-[#EAF3FF] relative  md:h-64 h-80 grid items-center ">
            <img
              className="md:h-56 md:w-56 h-24 w-24 absolute  md:top-1/2 md:-translate-y-1/2 md:right-4 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-full"
              src={img5}
              alt=""
            />

            <div className="flex flex-col md:items-start gap-5 p-4 text-center justify-center items-center">
              <h2 className="text-3xl font-bold">
                Create The Space For Your Thinking To Take Off
              </h2>

              <span className="text-xl">Want To Public Your Post With Us</span>

              <button className="bg-btn px-5 py-2 rounded-sm text-white">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative min-h-[90vh]  mb-10 grid md:grid-cols-3 gap-3 grid-cols-1 md:justify-items-start justify-items-center text-center md:text-start sm:w-10/12 w-full m-auto">
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
        </div>
      </>
    </>
  );
};

export default BlogType;
