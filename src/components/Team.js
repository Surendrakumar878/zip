import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsLinkedin,
    BsYoutube,
    BsSpotify
} from 'react-icons/bs';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { EffectCube } from "swiper";
import { EffectCoverflow } from "swiper";
import { EffectFlip } from "swiper";
import { EffectCards } from "swiper";
import { EffectCreative } from "swiper";
import img from '../assets/NoPath - Copy (6).png'
import adob from '../assets/image_adobe_express-Recovered.png'
import img1 from '../assets/WhatsApp Image 2023-04-02 at 11.41.20 PM.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Team = () => {
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

    return (
        <>

            {/* First */}
           


            <div className="grid md:grid-cols-2  grid-cols-1  items-center bg-white2" >
                <div className="flex w-8/12 m-auto py-4" >
                    <div className="flex flex-col gap-3 text-6xl font-black justify-center text-center items-center md:justify-start md:text-start md:items-start" >
                        <span>OUR</span>
                        <span>
                            CRAZY
                        </span>
                        <span>
                            MINDS
                        </span>
                        <hr className="border w-5/12  border-ons" />
                        <div className="text-xl font-bold text-ons" >
                            Meet Our
                            Professional Team
                        </div>
                        <p className="text-xs font-semibold" >Futuristic Agency That Offers Growth-Centric Digital Marketing Solutions To Businesses Around The Globe. With More Than A Decade Of Experience And A Solid Client Base Across The World, We Are Known For Formulating Proven And Tailor-Made</p>
                    </div>



                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>

            {/*  */}

            <div className="bg-white2" >
                <div className="bg-white2 min-h-screen grid md:grid-cols-3 grid-cols-1 justify-items-center items-center w-9/12 m-auto gap-3 " >
                    <div className="relative" >
                        <img src={adob} alt="" />
                        <img className="absolute h-24 w-24 rounded-full object-cover top-1/2 left-1/2 -translate-y-1/2" src={img} alt="" />
                    </div>

                    <div className="md:col-span-2 flex flex-col  gap-5 w-10/12 order-first md:order-none justify-center text-center items-center md:justify-start md:text-start md:items-start py-3" >
                        <span className="text-2xl font-black" >
                            Raksha Maskara
                        </span>
                        <span className="text-xl font-semibold text-ons" >
                            Founder, CEO
                        </span>
                        <span className="text-sm" >
                            It's About Time We Introduce You To The Mastermind Behind Making Checkmate Creatives What It Is. She Most Likely Have Split Personalities – Geeky In Front Of The Workstation, Party Animal Otherwise. In The End, It All Comes Down To Living Life Passionately, Isn't It?
                        </span>
                        <div className="flex flex-col gap-3" >
                            <span className="text-xs text-ons" >follow me</span>
                            <div className="flex gap-2 text-sm text-btn" >
                                <BsFacebook />
                                <BsInstagram />
                                <BsTwitter />
                                <BsLinkedin />
                                <BsYoutube />
                                <BsSpotify />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Profile */}

            <div className="flex flex-col justify-center items-center mt-10" >
                <span className="text-4xl font-bold" >LETS MEET</span>
                <span className="text-4xl font-bold text-ons" > OUR TEAM</span>
            </div>

            <div className="flex flex-nowrap gap-3 text-sm mt-10 w-11/12 m-auto overflow-auto my-10 justify-between">
                <button
                    className={`${toggleState === 1
                        ? "active-tabs border-btn bg-btn text-white"
                        : "tabs bg-white2"
                        }  border   uppercase rounded   w-64  flex-shrink-0 flex-nowrap  flex  justify-center items-center  duration-300 font-semibold`}
                    onClick={() => toggleTab(1)}
                >

                    All
                </button>
                <button
                    className={`${toggleState === 2
                        ? "active-tabs border-btn bg-btn text-white"
                        : "tabs bg-white2"
                        } w-64 border   uppercase  duration-300  p-2  flex-shrink-0 flex-nowrap  flex  justify-center items-center font-semibold`}
                    onClick={() => toggleTab(2)}
                >
                    Marketing Team
                </button>

                <button
                    className={`${toggleState === 3
                        ? "active-tabs border-btn bg-btn text-white"
                        : "tabs bg-white2"
                        } w-64 border   uppercase  duration-300  p-2  flex-shrink-0 flex-nowrap  flex  justify-center items-center font-semibold`}
                    onClick={() => toggleTab(3)}
                >
                    Designing Team
                </button>
                <button
                    className={`${toggleState === 4
                        ? "active-tabs border-btn bg-btn text-white"
                        : "tabs bg-white2"
                        } w-64 border   uppercase  duration-300  p-2  flex-shrink-0 flex-nowrap  flex  justify-center items-center font-semibold`}
                    onClick={() => toggleTab(4)}
                >
                    SEO Team
                </button>
                <button
                    className={`${toggleState === 5
                        ? "active-tabs border-btn bg-btn text-white"
                        : "tabs bg-white2"
                        }w-64 border   uppercase  duration-300  p-2  flex-shrink-0 flex-nowrap  flex  justify-center items-center font-semibold`}
                    onClick={() => toggleTab(5)}
                >
                    Content Writing Team
                </button>
            </div>


            <div className="w-11/12 m-auto" >
                <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                        effect="flip"
                        spaceBetween={20}
                        slidesPerView={perView}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="bg-white1 "
                    >

                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>

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
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="bg-white1 "
                    >

                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>

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
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="bg-white1 "
                    >

                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className={`${toggleState === 4 ? "block" : "hidden"}`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                        effect="flip"
                        spaceBetween={20}
                        slidesPerView={perView}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="bg-white1 "
                    >

                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className={`${toggleState === 5 ? "block" : "hidden"}`}>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, EffectCube]}
                        effect="flip"
                        spaceBetween={20}
                        slidesPerView={perView}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="bg-white1 "
                    >

                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className="flex flex-col justify-start items-center gap-2  max-w-sm text-sm" >
                                <img src={img} alt="" />
                                <div className="flex flex-col  gap-2 p-2" >
                                    <span className="font-bold text-xl" >Roshan Rana</span>
                                    <span className="font-semibold" >Manger</span>
                                    <span className="font-semibold" >11+ year of exprience</span>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel. Officiis placeat animi voluptas autem vitae, labore nisi quisquam saepe, adipisci, dicta at laborum. Magni voluptates excepturi facilis culpa porro!</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

            {/* Percentag Section */}
            <div className='w-11/12 flex flex-col justify-center items-center gap-3 mt-10' >

                <div className='text-4xl font-black ' >WE PROMISE</div>
                <hr className='border-w-4/12 border-black' />
                <span className='text-xl'>to create intelligent experiences that redefine the relationship between your brand and customers.</span>

            </div>
            <div className='w-11/12 m-auto bg-gradient-to-r grid md:grid-cols-4 grid-cols-2 from-[#FD0960] items-center justify-items-center to-[#2CA2EC]  my-10 p-10' >

                <div className='flex flex-col items-center justify-center gap-3' >
                    <div className='h-24 border-2 rounded-full w-24 p-5 flex justify-center items-center text-white font-semibold text-xl' >
                        <span>100%</span>
                    </div>
                    <span className='text-xl font-semibold text-white' >DEDICATION</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-3' >
                    <div className='h-24 border-2 rounded-full w-24 p-5 flex justify-center items-center text-white font-semibold text-xl' >
                        <span>100%</span>
                    </div>
                    <span className='text-xl font-semibold text-white' >ACCURACY</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-3' >
                    <div className='h-24 border-2 rounded-full w-24 p-5 flex justify-center items-center text-white font-semibold text-xl' >
                        <span>100%</span>
                    </div>
                    <span className='text-xl font-semibold text-white' >GROWTH</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-3' >
                    <div className='h-24 border-2 rounded-full w-24 p-5 flex justify-center items-center text-white font-semibold text-xl' >
                        <span>100%</span>
                    </div>
                    <span className='text-xl font-semibold text-white' >SATISFATION</span>
                </div>
            </div>
        </>
    )
}

export default Team
