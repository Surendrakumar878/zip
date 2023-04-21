import React from 'react'
import { useSwiper } from 'swiper/react'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const SwiperNavButton = () => {
    const swiper = useSwiper()
    return (
        <>
            <div className='flex gap-5 items-center w-full justify-end pb-4' >
                <button
                    className='h-6 w-6 bg-btn rounded-md text-white text-xl flex justify-center items-center'
                    onClick={() => swiper.slidePrev()}
                ><BsArrowLeftShort /></button>

                <button
                    className='h-6 w-6 bg-btn rounded-md text-white text-xl flex justify-center items-center'
                    onClick={() => swiper.slideNext()}
                ><BsArrowRightShort /></button>
            </div>
        </>
    )
}

export default SwiperNavButton
