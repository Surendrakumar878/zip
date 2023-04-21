import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsArrowRight, } from 'react-icons/bs';

const Socialmenu = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    return (
        <>
            <div className=' pt-14  ' >
                <div className=' p-5 w-10/12 m-auto ' >
                    
                  

                    {/* First */}
                    <motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout

                        className='border-b-2 bg-white/20 shadow-xl   mt-8 ' >

                        <motion.div
                            layout='position'
                            onClick={() => setOpen(!open)}
                            className='flex justify-between items-center bg-white2 text-2xl px-4' >
                            <div className='flex gap-4 py-3 items-center' >
                                <div className='text-blue-500' >
                                    01.</div>
                                <div className='text-sm' >
                                Why is social media important?
                                </div>
                            </div>
                            {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open ? "block bg-white2" : "hidden"}  p-4 grid `} >

                            <div>

                                <p className='mt-3'>One thing is for sure – SMM is never free of cost. Regardless of whether you're investing your own significant energy in it, adding it to your employee responsibility, recruiting a web-based media representative, or moving to a promoting firm, there is an expense equivalent to the time invested in doing it. The significant component is to get the most extreme ROI out of the time or cash you put into it. ROI doesn't need to mean income. It can likewise mean gathering different targets, like getting new leads, expanding email memberships, or in any event, helping consumer loyalty. The ROI you end up with is the immediate consequence of how centered your social media showcasing system is on a given goal and the brand value you create.</p>


                            </div>
                        </div>
                    </motion.div>


                    {/* second */}
                    <motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout
                        className='border-b-2 bg-white/20 shadow-xl   mt-8 ' >

                        <motion.div
                            layout='position'
                            onClick={() => setOpen1(!open1)}
                            className='flex justify-between items-center text-2xl px-4 bg-white2' >
                            <div className='flex gap-4 py-3 items-center ' >
                                <div className='text-blue-500' >
                                    02.</div>
                                <div className='text-sm' >
                                What is a social media agency?
                                </div>
                            </div>
                            {open1 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open1 ? "block bg-white2" : "hidden"}  p-4 grid `} >

                            <div>

                                <p className='mt-3'>
                                    Top digital marketing agencies (or the good ones at least) develop a comprehensive understanding of your business in order to evaluate all mediums of digital marketing that could generate ROI in one form or another. These mediums, often in the form of different services are then pieced together to develop a holistic strategy that allows a business to best reach customers that are interested in their products or services and then nurture strong relationships with those customers. Businesses see scaleable results often in the form of:
                                    <div className='flex flex-col gap-3' >
                                        <span>
                                            • Increased sales
                                        </span>
                                        <span>
                                            • Stronger brand equity and reputation
                                        </span>
                                        <span>
                                            • Increased brand advocates
                                        </span>
                                        <span>
                                            • Access to more markets
                                        </span>
                                        <span>
                                            • Increased findability and search rankings
                                        </span>
                                        <span>
                                            • More time and resources
                                        </span>
                                    </div>
                                </p>


                            </div>
                        </div>
                    </motion.div>

                    {/* Third */}
                    <motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout
                        className='border-b-2 bg-white/20 shadow-xl  bg-white2 mt-8 ' >

                        <motion.div
                            layout='position' onClick={() => setOpen2(!open2)}
                            className='flex justify-between items-center text-2xl px-4 bg-white2' >
                            <div className='flex gap-4 py-3 items-center' >
                                <div className='text-blue-500' >
                                    03.</div>
                                <div className='text-sm' >
                                Why are social media services good for advertising?
                                </div>
                            </div>
                            {open2 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open2 ? "block bg-white2" : "hidden"}  p-4 grid `} >


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <p className='mt-3'>One thing is for sure – SMM is never free of cost. Regardless of whether you're investing your own significant energy in it, adding it to your employee responsibility, recruiting a web-based media representative, or moving to a promoting firm, there is an expense equivalent to the time invested in doing it. The significant component is to get the most extreme ROI out of the time or cash you put into it. ROI doesn't need to mean income. It can likewise mean gathering different targets, like getting new leads, expanding email memberships, or in any event, helping consumer loyalty. The ROI you end up with is the immediate consequence of how centered your social media showcasing system is on a given goal and the brand value you create.</p>


                            </motion.div>
                        </div>
                    </motion.div>


                    {/* Forth */}
                    <motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout
                        className='border-b-2 bg-white/20 shadow-xl  bg-white2 mt-8 ' >

                        <motion.div
                            layout='position' onClick={() => setOpen3(!open3)}
                            className='flex justify-between items-center text-2xl px-4 bg-white2' >
                            <div className='flex gap-4 py-3 items-center' >
                                <div className='text-blue-500' >
                                    04.</div>
                                <div className='text-sm' >
                                Do I need Social Media?
                                </div>
                            </div>
                            {open3 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open3 ? "block bg-white2" : "hidden"}  p-4 grid `} >


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <p className='mt-3'>One thing is for sure – SMM is never free of cost. Regardless of whether you're investing your own significant energy in it, adding it to your employee responsibility, recruiting a web-based media representative, or moving to a promoting firm, there is an expense equivalent to the time invested in doing it. The significant component is to get the most extreme ROI out of the time or cash you put into it. ROI doesn't need to mean income. It can likewise mean gathering different targets, like getting new leads, expanding email memberships, or in any event, helping consumer loyalty. The ROI you end up with is the immediate consequence of how centered your social media showcasing system is on a given goal and the brand value you create.</p>


                            </motion.div>
                        </div>
                    </motion.div>


{/* five */}
<motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout
                        className='border-b-2 bg-white/20 shadow-xl  bg-white2 mt-8 ' >

                        <motion.div
                            layout='position' onClick={() => setOpen3(!open3)}
                            className='flex justify-between items-center text-2xl px-4 bg-white2' >
                            <div className='flex gap-4 py-3 items-center' >
                                <div className='text-blue-500' >
                                    05.</div>
                                <div className='text-sm' >
                                Is it necessary to have an SMM Manager?
                                </div>
                            </div>
                            {open3 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open3 ? "block bg-white2" : "hidden"}  p-4 grid `} >


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <p className='mt-3'>One thing is for sure – SMM is never free of cost. Regardless of whether you're investing your own significant energy in it, adding it to your employee responsibility, recruiting a web-based media representative, or moving to a promoting firm, there is an expense equivalent to the time invested in doing it. The significant component is to get the most extreme ROI out of the time or cash you put into it. ROI doesn't need to mean income. It can likewise mean gathering different targets, like getting new leads, expanding email memberships, or in any event, helping consumer loyalty. The ROI you end up with is the immediate consequence of how centered your social media showcasing system is on a given goal and the brand value you create.</p>


                            </motion.div>
                        </div>
                    </motion.div>


                    {/* six */}
                    <motion.div
                        transition={{ layout: { duration: 1, type: 'spring' } }}
                        layout
                        className='border-b-2 bg-white/20 shadow-xl  bg-white2 mt-8 ' >

                        <motion.div
                            layout='position' onClick={() => setOpen3(!open3)}
                            className='flex justify-between items-center text-2xl px-4 bg-white2' >
                            <div className='flex gap-4 py-3 items-center' >
                                <div className='text-blue-500' >
                                    06.</div>
                                <div className='text-sm' >
                                How often should I post on social media platforms?
                                </div>
                            </div>
                            {open3 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                        </motion.div>

                        <div className={`${open3 ? "block bg-white2" : "hidden"}  p-4 grid `} >


                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                <p className='mt-3'>One thing is for sure – SMM is never free of cost. Regardless of whether you're investing your own significant energy in it, adding it to your employee responsibility, recruiting a web-based media representative, or moving to a promoting firm, there is an expense equivalent to the time invested in doing it. The significant component is to get the most extreme ROI out of the time or cash you put into it. ROI doesn't need to mean income. It can likewise mean gathering different targets, like getting new leads, expanding email memberships, or in any event, helping consumer loyalty. The ROI you end up with is the immediate consequence of how centered your social media showcasing system is on a given goal and the brand value you create.</p>


                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Socialmenu
