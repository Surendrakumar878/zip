import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { IoIosArrowUp } from 'react-icons/io';
import HomePopup from '../components/HomePopup';


const MainPage = () => {
    const [visible, setVisible] = useState(false) //For to Scroll To Top
    const [sticky, setSticky] = useState(false);


    // Toggle To Top

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);


    // on render, set listener Check To header to become Sticky or fixed
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 1 ? true : false;
        setSticky(stickyClass);
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <div className='flex justify-between flex-col min-h-screen ' >
                <Header sticky={sticky} />
                <Outlet />
                <Footer />
            </div>

            {/* This will Move This in Top */}
            <div
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 bg-black text-white text-5xl font-black z-50 ">
                <span><IoIosArrowUp /></span>
            </div>



        </>
    )
}

export default MainPage
