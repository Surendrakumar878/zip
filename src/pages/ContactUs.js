import React from 'react'
import ContactUsForm from '../components/ContactUsForm'
import img from '../assets/Ellipse 753.png'
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { TiGroup } from 'react-icons/ti';
import { BsSpotify, BsArrowUpRight } from 'react-icons/bs';
import { FaPinterestSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1  min-h-screen overflow-hidden p-4' >

                <ContactUsForm className="" />

                <div className='row-start-1 md:col-start-2 relative bg-white2' >
                    {/* <img className='absolute right-0 top-0 border ' src={img} alt="" /> */}
                    <img className='h-screen w-full' src="Group 812 (1).svg" alt="" />
                </div>
            </div>

            {/* Come Closer */}

            <div className=' flex flex-col gap-5 my-20' >
                <div className='bg-white1 w-10/12 m-auto ' >
                    <div className=' flex flex-col gap-6' >
                        <span className='text-xl font-thin' >
                            COME CLOSER
                        </span>
                        <hr className='border border-btn ' />
                        <p className='grid grid-col-3' >We Would Love To Hear From You
                            ,
                        </p>
                        <span>
                            Our Friendly Team Is Always Here To Connect With You
                        </span>
                    </div>
                </div>


                <div className='grid md:grid-cols-4 grid-cols-1 w-10/12 m-auto gap-4' >

                    <div className='flex justify-start items-start flex-col gap-4' >
                        <div className='flex gap-2 items-center bg-white2 w-full' >
                            <div className='p-4 rounded-sm bg-btn flex justify-center items-center text-white' >
                                <HiBuildingOffice2 />
                            </div>
                            <h3 className='font-bold' >Office</h3>
                        </div>
                        <span className='text-xs text-ons flex flex-col font-semibold' >
                            Come say hello at
                            <span>our office HQ</span>
                        </span>
                        <p className='text-sm' >
                            904 Shyamvrund Apartments Opposite Dhananjay Tower Shyamal Cross Road Ahmedabad – 380015, Gujarat, INDIA.
                        </p>

                        <div className='text-btn flex items-center gap-2 text-sm' >
                            <span>Get Direction</span>
                            <BsArrowUpRight />
                        </div>
                    </div>


                    <div className='flex justify-start items-start flex-col gap-4' >
                        <div className='flex gap-2 items-center bg-white2 w-full' >
                            <div className='p-4 rounded-sm bg-btn flex justify-center items-center text-white' >
                                <BsFillTelephoneFill />
                            </div>
                            <h3 className='font-bold' >Phone</h3>
                        </div>
                        <span className='text-xs text-ons flex flex-col font-semibold' >
                            Mon-Fir from
                            <span>9am to 7pm</span>
                        </span>
                        <p className='text-sm flex flex-col font-semibold' >
                            <span>+91 9537895111</span>
                            <span>+91 8200493681</span>
                        </p>
                    </div>

                    <div className='flex justify-start items-start flex-col gap-4' >
                        <div className='flex gap-2 items-center bg-white2 w-full' >
                            <div className='p-4 rounded-sm bg-btn flex justify-center items-center text-white' >
                                <HiMail />
                            </div>
                            <h3 className='font-bold' >Chat To Us</h3>
                        </div>
                        <span className='text-xs text-ons flex flex-col font-semibold' >
                            Our friendly team
                            <span>Is here to help you</span>
                        </span>
                        <p className='text-sm flex flex-col font-semibold' >
                            Info@Checkmatecreatives.Com
                        </p>
                    </div>

                    <div className='flex justify-start items-start flex-col gap-4' >
                        <div className='flex gap-2 items-center bg-white2 w-full' >
                            <div className='p-4 rounded-sm bg-btn flex justify-center items-center text-white' >
                                <TiGroup />
                            </div>
                            <h3 className='font-bold' >Follow Us</h3>
                        </div>
                        <span className='text-xs text-ons flex flex-col font-semibold' >
                            Let's build Our connection
                            <span>even Stronger</span>
                        </span>
                        <div className='flex  gap-2 text-btn text-xl flex-wrap' >

                            <AiFillFacebook />
                            <AiFillTwitterSquare /> <AiFillLinkedin />
                            <AiFillInstagram />
                            <AiFillYoutube />
                            <BsSpotify />
                            <FaPinterestSquare />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactUs
