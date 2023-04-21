import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import {
    BsPersonCircle,
    BsFillCalendar2Fill,
    BsFillChatDotsFill,
    BsFillLightbulbFill,
    BsDownload,
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";
import { MdKeyboardArrowRight, MdDelete } from "react-icons/md";
import img from "../assets/Mask Group 15.png";
import img1 from "../assets/Mask Group 9.png";
import img2 from "../assets/Mask Group 22.png";
import Images from "../components/Image";
import { Link } from "react-router-dom";
import { useGetBlogByIdQuery, useGetBlogByCatQuery } from "../services/profile";
import { Routes, Route, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

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
import { CiLight } from "react-icons/ci";

const BlogInnerNew = () => {
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

    const { _id } = useParams();
    const { data, isLoading } = useGetBlogByIdQuery(_id);
    const category = data?.category;
    console.log(data, "68");
    const { data: Data } = useGetBlogByCatQuery(category);

    const [values, setvalues] = useState();

    return (
        <>
            {isLoading && <CircularProgress />}
            <div>
                <div className="grid md:grid-cols-2 items-center w-10/12 m-auto mt-8">
                    <div className="flex flex-col gap-4 items-start">
                        <span className="px-6  py-2 relative bg-btn text-white">
                            <div className=" absolute h-6 w-6 rotate-45 left-full -translate-x-1/2 bg-white"></div>
                            <span className="mr-4">{data?.category}</span>
                        </span>

                        <div className="grid gap-3   rounded-sm pb-8">
                            <h1 className="md:text-4xl text-3xl font-bold">
                                {data?.mainTitle}

                            </h1>

                            <div className="flex justify-between w-9/12 text-sm gap-2">
                                <span className="flex items-center gap-3 flex-shrink-0">
                                    <BsFillCalendar2Fill className="text-btn" />
                                    {new Date(data?.createdAt).toDateString()}
                                </span>
                                <div>|</div>
                                <span className="flex items-center gap-3 flex-shrink-0">
                                    <BsFillCalendar2Fill className="text-btn " />
                                    {data?.duration ? data?.duration : "10"} min read
                                </span>
                            </div>

                            <div className="flex gap-2 items-center ">
                                <BsPersonCircle className="text-btn rounded-full " />
                                <span className="text-xs font-semibold">
                                    Read By {data?.readBy}k Users
                                </span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Link to={`/blog/${data?._id}`}>
                                    <span className="text-sm text-btn">Read Artical</span>
                                </Link>

                                <MdKeyboardArrowRight className="text-btn" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* imgae */}
                <div className="py-10 w-10/12 m-auto">
                    <img
                        className="h-96 object-cover w-full"
                        src={`http://localhost:7001/${data?.mainTitleImg}`}
                        alt=""
                    />
                </div>

                <div className="w-10/12 m-auto flex flex-col gap-6">
                    <div className="grid sm:grid-cols-2 grid-cols-1 font-semibold md:text-xl ">
                        <p className=" text-black/80  font-semibold text-start">
                            If social media is the body for businesses, social media marketing
                            tools are its soul. In today's day & age of growing prominence of
                            businesses' presence on online platforms, effective utilization of
                            social media marketing tools is a must need for heightened traffic
                            and better marketing strategies. One has to bear in mind that the
                            purchasing medium for buyers has undergone radical transformations
                            in the past decade which testifies the vitality of marketing tools
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 text-black/80 md:text-xl font-semibold">
                        <p className=" text-start">
                            Beginning from content ideation, data analytics to Search Engine
                            Optimisation, it turns out to be very tedious and taxing jobs for
                            social media marketers. Here come Social Media marketing tools to
                            one's rescue. These tools are tailored to the needs perfectly by
                            organizing the workflows & ensuring greater sales, visibility for
                            eCommerce businesses to the target audience in peanut-sized
                            minutes.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 text-black/80 md:text-xl font-semibold">
                        <p className=" text-start">{data?.heading}</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-xl font-bold">1. ICONSQUARE</span>
                        <img
                            className="md:w-7/12 w-full"
                            src={`http://localhost:7001/${data?.title1img}`}
                            alt=""
                        />

                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <p>{data?.title1Content}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-xl font-bold">2. SPROUTE SOCIAL</span>
                        <img
                            className="md:w-7/12 w-full"
                            src={`http://localhost:7001/${data?.title2img}`}
                            alt=""
                        />

                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <p>{data?.title2Content}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-xl font-bold">3. HOOTSUITE</span>
                        <img
                            className="md:w-7/12 w-full"
                            src={`http://localhost:7001/${data?.title3img}`}
                            alt=""
                        />

                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <p>{data?.title3Content}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-xl font-bold">4. AGORAPLUSE</span>
                        <img
                            className="md:w-7/12 w-full"
                            src={`http://localhost:7001/${data?.title4img}`}
                            alt=""
                        />

                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <p>{data?.title4Content}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <span className="text-xl font-bold">5. SENDIBLE</span>
                        <img
                            className="md:w-7/12 w-full"
                            src={`http://localhost:7001/${data?.title5img}`}
                            alt=""
                        />

                        <div className="grid md:grid-cols-2 grid-cols-1">
                            <p>{data?.title5Content}</p>
                        </div>

                        <div className="flex gap-5 text-btn text-xl">
                            <BsFacebook />
                            <BsInstagram />
                            <BsTwitter />
                            <BsLinkedin />
                        </div>
                    </div>
                </div>

                <img
                    className="h-96 object-cover w-full"
                    src={`http://localhost:7001/${data?.mainTitleImg}`}
                    alt=""
                />

                <div className="w-10/12 m-auto my-10">
                    <div className="sm:w-10/12 w-full p-3 border shadow-2xl">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center text-sm">
                                <span className="text-btn">
                                    <BsFillLightbulbFill />
                                </span>
                                <span className="font-bold">Key TakeWays</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="text-ons text-xs font-semibold">
                                    Download Summary
                                </span>
                                <span className="text-btn">
                                    <BsDownload />
                                </span>
                            </div>
                        </div>

                        <ul className="flex flex-col gap-3 text-sm list-disc list-btn p-4 py-10">
                            {data?.keyTakeWays?.map((e, index) => {
                                return <li key={index}>{e}</li>;
                            })}
                            <li>
                                Sendible is a tool constructed explicitly for organizations with
                                a numerous clients. On top of most elements that web-based
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Key Takeways */}
                <div className="w-10/12 m-auto grid md:grid-cols-2 grid-cols-1 my-20">
                    <div className="flex gap-2 flex-wrap">
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Social Media Maketing
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Social Media Digital Marketing
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Business
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Online Marketing
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Marketing Tips
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Affiliate Marketing
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Online Business
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            Indian Marketing
                        </span>
                        <span className="text-sm font-semibold p-2 rounded bg-white2">
                            SEO
                        </span>
                    </div>
                </div>

                <hr />

                {/* Chat */}
                <div className="w-10/12 m-auto my-20 flex flex-col gap-5">
                    <div className="flex gap-2 items-center">
                        <span>
                            <BsFillChatDotsFill className="text-btn text-xl" />
                        </span>
                        <span className="font-semibold">Resopnse</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            placeholder="Share your thoughts"
                            type="text"
                            disabled
                            className=" border w-full border-black/30"
                        />
                        <button className="px-4 py-2 rounded bg-btn text-white">
                            submit
                        </button>
                    </div>

                    <div className="bg-white2 p-3">
                        <div className="flex justify-between  items-center">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-12 h-12 rounded-full border "
                                    src="https://us.123rf.com/450wm/ivanzkart/ivanzkart1903/ivanzkart190300223/118491110-ap-letter-logo-design-vector.jpg?ver=6"
                                    alt=""
                                />
                                <div className="flex flex-col gap-1 ">
                                    <span className="font-bold ">Anand Palkar</span>
                                    <span className="text-xs font-semibold text-black/60">
                                        August 01,2022
                                    </span>
                                </div>
                            </div>
                            <MdDelete className="text-2xl text-black/70" />
                        </div>
                        <p className="p-10">
                            Great educational article as always Arthur, loved reliving squash
                            game tactics in your writing and remembering the good old days
                            with Chandler during the blockchain wars. Hope you’re well, only
                            wish I were in a position to act on your strategies and
                            illustrations.
                        </p>
                    </div>

                    <div className="bg-white2 p-3">
                        <div className="flex justify-between  items-center">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-12 h-12 rounded-full border "
                                    src="https://us.123rf.com/450wm/ivanzkart/ivanzkart1903/ivanzkart190300223/118491110-ap-letter-logo-design-vector.jpg?ver=6"
                                    alt=""
                                />
                                <div className="flex flex-col gap-1 ">
                                    <span className="font-bold ">Nikunj Joshi</span>
                                    <span className="text-xs font-semibold text-black/60">
                                        August 11,2022
                                    </span>
                                </div>
                            </div>
                            <MdDelete className="text-2xl text-black/70" />
                        </div>
                        <p className="p-10">
                            Love the analysis though, I'm in this trade big time. If it fails
                            to meet the high target, the time horizon can be increased if you
                            just hold spot and avoid leverage. That's the low risk higher
                            chance of gain play IMO
                        </p>
                    </div>

                    <div className="bg-white2 p-3">
                        <div className="flex justify-between  items-center">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-12 h-12 rounded-full border "
                                    src="https://us.123rf.com/450wm/ivanzkart/ivanzkart1903/ivanzkart190300223/118491110-ap-letter-logo-design-vector.jpg?ver=6"
                                    alt=""
                                />
                                <div className="flex flex-col gap-1 ">
                                    <span className="font-bold ">Vipul Panchal</span>
                                    <span className="text-xs font-semibold text-black/60">
                                        August 11,2022
                                    </span>
                                </div>
                            </div>
                            <MdDelete className="text-2xl text-black/70" />
                        </div>
                        <p className="p-10">
                            Mystery writer Lisa Lilly has a series that incorporates many
                            Chicago restaurants and food joints into the action, so I'm
                            starting the first volume, The Worried Man, for some leisure this
                            summer.
                        </p>
                    </div>
                </div>

                <div className="w-10/12 m-auto my-20">
                    <div className="flex justify-center items-center text-2xl font-semibold py-5 flex-col gap-4">
                        Blog Related To This
                        <hr className=" border border-btn w-24 " />
                    </div>

                    <div className="grid md:grid-cols-2  gap-4 items-center justify-items-start grid-cols-1">
                        <img className="w-full h-full object-cover" src={img} alt="" />

                        <div className=" flex flex-col  justify-end gap-4 md:items-start">
                            <p className="text-3xl sm:text-3xl lg:text-6xl">
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
                                    {data?.duration} min read
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
                                <p className="text-3xl sm:text-3xl lg:text-6xl">
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
                                <p className="text-3xl sm:text-3xl lg:text-6xl">
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
                </div>

                <div className="w-10/12 m-auto my-20">
                    <div className="flex justify-center items-center text-2xl font-semibold py-5 flex-col gap-4">
                        Other Blog You May Like
                        <hr className=" border border-btn w-24 " />
                    </div>

                    <div>
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
                            {Data &&
                                Data?.map(
                                    (
                                        {
                                            mainTitle,
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
                                                <div>tag</div>
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
        </>
    )
}

export default BlogInnerNew
