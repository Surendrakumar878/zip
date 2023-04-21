import React from 'react'

const Content = () => {

    return (
        <div className='bg-white2'>

            <div className="md:h-[80vh] h-[50vh] bg-white2  relative mb-36 ">
                <div className='w-2 h-2 rounded-full bg-green-500 absolute top-6 left-9' ></div>
                <div className='w-3 h-3 rounded-full bg-green-500 absolute top-20 left-2/3' ></div>
                <div className='w-4 h-4 rounded-full bg-btn absolute top-1/2 left-1/3' ></div>
                <div className='w-4 h-4 rounded-full bg-btn absolute top-2/3 right-1/3' ></div>
                <img className="absolute top-0 right-0" src="Ellipse 753 (2).svg" alt="" />
                <img className="absolute bottom-0" src="Ellipse 753 (3).svg" alt="" />
                <div className='md:w-6/12 w-10/12 sm:w-7/12 m-auto absolute  top-full -translate-y-1/2 left-1/2 -translate-x-1/2' >
                    <img
                        className=""
                        src="Group 40762.svg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col capitalize text-xm font-semibold md:pt-20 pt-10 items-center  h-full text-white text-center gap-4">
                    <h1 className="font-black text-black text-5xl">Content Marketing</h1>
                    <div className='flex flex-col justify-center items-center md:text-xl text-sm text-ons' >
                        <span className='capitalize' >DELIVER ENGAGING, MULTI-FORMAT CONTENT </span>
                        <span>WITH OUR DIGITAL CONTENT SERVICES</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 justify-center items-center md:mt-72 mt-46 w-11/12  md:w-8/12 m-auto text-center text-sm py-7' >
                <p>Your content talks to your customers even before you talk to them. We help you to maintain a consistent tone across channels and build trust and a strong relationship with your target audience.

                </p>
                <p>Our exceptional Content team specializes in creating selling contents for your websites, social media, and other forums which will help you increase conversions, click-through-rates and generate leads. A powerful story without a right strategy faces its defeat sooner than ever! We can do all the thinking and writing, while you get busy doing what you do the best</p>
                <p> We strategize and develop engaging content for your website, blogs and resources to captivate the audience and help establish your brand story.</p>
            </div>


        </div>
    )
}

export default Content
