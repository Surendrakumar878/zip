import React from 'react'

const PPC = () => {

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
                        src="illustration.svg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col capitalize text-xm font-semibold md:pt-20 pt-10 items-center  h-full text-white text-center gap-4">
                    <h1 className="font-black text-black text-5xl">PPC</h1>
                    <div className='flex flex-col justify-center items-center md:text-xl text-sm text-ons' >
                        <span className='capitalize' >"There is a way to do it better ,lets find it together" </span>
                        <span>"get on the top of google search result page"</span>
                        <span>"Beat your competition with google ads"</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-5 justify-center items-center md:mt-72 mt-46 w-11/12  md:w-8/12 m-auto text-center text-sm py-7' >
                <h2 className='text-2xl font-black' >ENGAGE CONSUMERS THROUGH GOOGLE’S HOST OF SEM OPPORTUNITIES</h2>
                <p>The spread of opportunities presented through search engine marketing offers an impactful way to capture and convert the attention of online users to drive revenue. By serving up content at optimal times in a buyer’s journey, brands can capitalise on this powerful marketing channel. With some of the industry’s most experienced Google Ads specialists, the Impress!ve™ team could become an integral part of your search campaigns.</p>
                <p> Our advanced knowledge and access to consumer insights enables us to build integrated campaigns that are driven by your customers – not just by keywords. Through the execution of personal, adaptive ads, we have the tools in place to maximise your campaign and accelerate business growth – placing you at the forefront of your industry and adding unparalleled value to your customers.</p>
            </div>


        </div>
    )
}

export default PPC
