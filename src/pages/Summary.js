import React from 'react'
import img from "../assets/Ellipse 753.png";
import img1 from "../assets/Ellipse 754.png";
import img2 from "../assets/5f75d7a5126bd@2x.png";
import chair from '../assets/chair.png'
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';


const Summary = () => {
    return (
        <>
            <div className="h-96 bg-ons relative mb-36 bg-line bg-contain">
                <img className="absolute top-0 right-0" src={img} alt="" />
                <img className="absolute bottom-0" src={img1} alt="" />
                <img
                    className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2"
                    src={chair}
                    alt=""
                />
                <div className="flex flex-col justify-center items-center  h-full text-white text-center gap-4">
                    <h1 className="font-black text-5xl">Congratulation</h1>
                    <span className='capitalize' >Your Free  Consultancy have been booked</span>
                </div>
            </div>

            <div className='w-10/12 m-auto bg-bgsummary bg-contain' >

                <div className='flex gap-2 items-center' >
                    <span className='w-8 h-8 rounded-full bg-btn text-white flex justify-center items-center' >R</span>
                    <div className='flex flex-col text-xs font-bold' >
                        Raksha
                        <span>Mishara</span>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 py-3 grid-cols-1 text-xs' >
                    <div>
                        <div className='flex gap-6 w-full md:flex-row flex-col ' >
                            <div className='flex flex-col gap-2 flex-1 py-3' >
                                <span>Company: <span className='font-bold' > Checkmate Creative</span></span>
                                <span>Email: <span className='font-bold' > raksha@gmail.com </span></span>
                            </div>
                            <div className='flex flex-col gap-2 flex-1' >
                                <span>Phone No: <span className='font-bold' > +91 9832845940</span></span>
                                <span>Service: <span className='font-bold' > Branding </span></span>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  gap-6 w-full py-5 ' >
                            <div className='flex flex-1 gap-2 font-bold text-xs items-center' >
                                <BsFillCalendarCheckFill className='text-xl text-btn' />
                                <span>Date:</span>
                                <span>01, sepetember, 2023</span>
                            </div>
                            <div className='flex flex-1 gap-2 font-bold text-xs items-center' >
                                <BiTimeFive className='text-xl text-btn' />
                                <span>Time:</span>
                                <span>10:00 AM, Moring , Slot</span>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  gap-6 w-full py-5 text-white justify-start' >
                            <button className='md:flex-1 bg-gray-500 px-4 py-4 rounded' >Reschedule Appointment</button>
                            <button className='md:flex-1 bg-btn px-4 py-4 rounded' >Explore More</button>
                        </div>

                    </div>
                    <div></div>
                </div>

                <div className='flex flex-col text-sm gap-2 justify-center items-center  w-full md:justify-start md:items-start' >
                    <h2  >You are one step closer to </h2>
                    <span> build your dream project</span>
                </div>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 py-10' >
                    <div>
                        <div className='flex flex-col items-start gap-3 justify-start' >
                            <span className='flex justify-center items-center bg-ons w-10 h-10 text-white rounded-md' >01</span>
                            <div className='flex flex-col' >
                                <span className='text-sm font-bold' >We'll Prepar</span>
                                <span className='text-sm font-bold' >a proposal</span>
                            </div>
                            <p className='text-xs text-gray-400 w-10/12' >Required scope, timeline & approx, pricing will be provided with the given information about the project</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-start gap-3 justify-start' >
                            <span className='flex justify-center items-center bg-ons w-10 h-10 text-white rounded-md' >02</span>
                            <div className='flex flex-col' >
                                <span className='text-sm font-bold' >Together We </span>
                                <span className='text-sm font-bold' >discuss it</span>
                            </div>
                            <p className='text-xs text-gray-400 w-10/12' >Discussing all the possible variants & Options</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-start gap-3 justify-start' >
                            <span className='flex justify-center items-center bg-ons w-10 h-10 text-white rounded-md' >03</span>
                            <div className='flex flex-col' >
                                <span className='text-sm font-bold' >Let's Start</span>
                                <span className='text-sm font-bold' >Building</span>
                            </div>
                            <p className='text-xs text-gray-400 w-10/12' >When the contract is signed & all the goals are set, we can start the first sprint</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Summary
