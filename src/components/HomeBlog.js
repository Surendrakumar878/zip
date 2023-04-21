import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Images from "../components/Image";
import { BsPersonCircle, BsFillCalendar2Fill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useGetAllBlogQuery } from "../services/profile";
import { useNavigate, Link } from "react-router-dom";

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
import { CircularProgress } from "@mui/material";
const HomeBlog = () => {
  const [perView, setPerView] = useState(3);

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
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllBlogQuery();
  console.log(data, "first");
  const individualBlog = (_id) => {
    navigate(`/blog/${_id}`);
  };

  return (
    <>
      {isLoading && <CircularProgress />}
      <div className="flex flex-col justify-center items-center gap-8  py-10">
        <h1 className="text-5xl fong-black">"Blogs"</h1>
        <p className="text-2xl font-bold text-black/70">
          Read What Our Team Has Published On The Internet
        </p>
        <p className="text-2xl font-semibold text-black/40">
          Insights, thoughts, industry trends, marketing tips, Design news,
          nerdy stuff, it's all here.
        </p>

        <hr className="w-1/12 border border-btn" />

        <div className=" rounded-2xl ">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, EffectCube, Autoplay]}
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
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className=" w-[90vw]"
          >
            {data?.map(
              (
                {
                  mainTitle,
                  mainTitleImg,
                  readBy,
                  heading,
                  _id,
                  duration,
                  createdAt,
                  category,
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
                      <span className="text-xs font-semibold">{readBy}k</span>
                    </div>

                    <div className="flex gap-3 items-center">
                      {/* <span
                        onClick={() => individualBlog(_id)}
                        className="text-sm text-btn"
                      >
                        Read Artical
                      </span> */}
                      <Link to={`blog/${_id}`}>
                        <span
                          //   onClick={() => individualBlog(_id)}
                          className="text-sm text-btn"
                        >
                          Read Artical
                        </span>
                      </Link>

                      <MdKeyboardArrowRight className="text-btn" />
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}

            {/* <SwiperSlide>
                            roshan
                        </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
