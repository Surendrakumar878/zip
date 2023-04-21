import React, { useState } from "react";
import Card from "../components/Card";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import OurCard from "../components/OurCard";
import AboutSwiper from "../components/AboutSwiper";
import img6 from "../assets/Group 39825.png";
import img7 from "../assets/Mask Group 24.png";
import { BsEnvelopePaper } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
  const [view, setView] = useState(true);
  console.log(view);
  return (
    <div>
      <div
        className="relative "
        style={{
          background: "url(header1.png)",
          backgroundRepeat: "no-repeat",
        }}>
        <div
          className=" pt-20 sm:pt-40 h-[30%] relative"
          style={{
            background: "url(header2.png)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}>
          {/* <img className="absolute top-28 right-1/2" src="lineN.svg" alt="" /> */}
          <img
            className=" hidden sm:block absolute top-10 w-[15%] right-[46%]"
            src="https://checkmatecreatives.com/Images/g.ads-removebg-preview1.png"
            alt=""
          />

          <h2 className="text-center font-bold text-5xl  sm:py-10">
            WE MAKE DIGITAL BEAUTIFUL.
          </h2>
          <p className="text-center font-bold text-[#4E17E2] text-3xl ">
            {" "}
            Choose A Service To Enter The New Beginning
          </p>
        </div>
        <div className="px-0 lg:px-28 py-10">
          <p className="text-center font-bold px-0 lg:px-80 ">
            {" "}
            Every Story We Tell, Every Brand We Build, And Every Interaction We
            Create Must Not Only Look Beautiful But Has To Feel And Function
            Beautifully, Too. Crafted To Perfection.
          </p>
          <img
            className="absolute top-[30rem] sm:top-[28rem] left-[43%] sm:left-[73%] w-40"
            src="head3.png"
            alt="as"
          />
          <img
            className="absolute  top-[30rem] sm:top-[23rem] W-24 h-56 right-[40%] sm:right-[73%]   "
            src="https://checkmatecreatives.com/Images/fb1.png"
            alt="as"
          />
        </div>
        <div className=" flex justify-center pt-40  ">
          <img src="Group 39769.svg" alt="Group" />
        </div>
        <p className="text-center pb-4"> Scroll Down</p>
      </div>

      <div className=" flex flex-col p-20 justify-center sm:flex sm:flex-row lg:gap-10 my-10 mx-0 lg:mx-20">
        <div className="w-full m-auto  lg:w-1/2">
          {" "}
          <img
            className="w-auto m-auto "
            // src="Group 40468.svg"
            src="png who 1.png"
            alt="fgd"></img>{" "}
        </div>
        <div className="w-full text-center sm:w-1/2 ">
          {" "}
          <h2 className="font-extrabold text-5xl my-10 ">Who We Are</h2>
          <p>
            {" "}
            Checkmate Creatives is a one-stop destination where imagination and
            ideas are brought to life, any and every content-related need is
            addressed. We pitch in vigorously with novel ideas to lend a hand
            when you run out of creativity. We are backed by 5+ years of intense
            work experience, yet our appetite to deliver excellence stimulates
            more than ever. A team of Creative Minds designing Website, graphics
            and digital marketing plans for the World. At Checkmate Creatives,
            we make sure that alongside growth of the company, our employees and
            client grow by providing a great work-life Culture in the Industry.
            Our team works hand in hand with the client and make sure that the
            product that they are working on not only becomes success but also
            leaves an impression on the user being easy to use and keeping in
            mind the interest of its users.
          </p>{" "}
        </div>
      </div>

      <div className=" text-center  lg:flex gap-10 lg:mx-20 bg-[#28236E] p-20 ">
        <div className="w-full lg:w-1/2 font-bold text-4xl mb-4 text-white">
          {" "}
          <h2 className="  text-center lg:text-start">
            {" "}
            A Brand - First Creative Agency
          </h2>
        </div>
        <div className="w-full  lg:w-1/2 text-white">
          It means that all our solutions begin with brand research and all of
          our work is catered to enhance and work with the brand at hand. It
          means we are always exploring the new, always innovating, with a focus
          on creative storytelling.{" "}
        </div>
      </div>
      <h2 className="font-bold text-5xl text-center my-20">
        Story Behind our Beauty
      </h2>
      <div className="flex flex-col justify-center  text-white  m-auto bg-gradient-to-r from-purple-500 to-pink-500 sm:px-60 pb-60">
        <div className="flex gap-10 md:flex md:gap-10  my-10 sm:mx-80 pb-40 text-center">
          <div className="w-1/2" onClick={() => setView(true)}>
            {" "}
            Logo Story
          </div>
          <div className="w-1/2" onClick={() => setView(false)}>
            Logo Formation
          </div>
        </div>
        <div
          className="sm:px-60 text-center p-3  overflow-y-auto  h-60 scrollbar-hide"
          style={
            {
              // overflow:"auto"
            }
          }>
          {view ? (
            <p className="text-xl">
              The formation of the logo was crafted using various mathematical
              formulas where inspiration was taken from the chess board having
              64 square arranged in 8x8 grid in a flat square shape. The 64
              checkered squares where then crafted into 3 dimensional cubical
              box format which later on its was crafted into spherical formation
              of the 64 checkered boxes. All this was done to achieve a Round
              shaped 64 checkered boxes perfectly into the same formation as we
              see this in flat chess board. Flat cubical was divided into 8
              parts a multiplication of 64 to get perfect formation of C in
              cubical flat shape. The formation of the logo was crafted using
              various mathematical formulas where inspiration was taken from the
              chess board having 64 square arranged in 8x8 grid in a flat square
              shape. The 64 checkered squares where then crafted into 3
              dimensional cubical box format which later on its was crafted into
              spherical formation of the 64 checkered boxes. All this was done
              to achieve a Round shaped 64 checkered boxes perfectly into the
              same formation as we see this in flat chess board. Flat cubical
              was divided into 8 parts a multiplication of 64 to get perfect
              formation of C in cubical flat shape.
            </p>
          ) : (
            <p>
              The 64 checkered squares where then crafted into 3 dimensional
              cubical box format which later on its was crafted into spherical
              formation of the 64 checkered boxes. All this was done to achieve
              a Round shaped 64 checkered boxes perfectly into the same
              formation as we see this in flat chess board. Flat cubical was
              divided into 8 parts a multiplication of 64 to get perfect
              formation of C in cubical flat shape. The formation of the logo
              was crafted using various mathematical formulas where inspiration
              was taken from the chess board having 64 square arranged in 8x8
              grid in a flat square shape. The 64 checkered squares where then
              crafted into 3 dimensional cubical box format which later on its
              was crafted into spherical formation of the 64 checkered boxes.
              All this was done to achieve a Round shaped 64 checkered boxes
              perfectly into the same formation as we see this in flat chess
              board. Flat cubical was divided into 8 parts a multiplication of
              64 to get perfect formation of C in cubical flat shape.
            </p>
          )}
        </div>
      </div>

      <AboutSwiper />

      <div className=" bg-aboutbg  bg-contain bg-no-repeat m-auto flex justify-center items-center my-10 w-10/12 h-96">
        <img className=" w-40 m-auto" src="Grouplogo.png" alt="" />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center mt-10 mb-10">
          Our Process
        </h1>
      </div>

      <div className=" relative my-10  flex flex-col gap-8  sm:flex sm:flex-row sm:gap-8 lg:px-60 sm:my-20">
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="1.jpg"
            head="Envision"
            des="This role is played by our out of the box thinkers who bring in endless propositions."
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="2.jpg"
            head="Establish"
            des="To conclude a plan, we intensely understand the brand, the culture, the market, and beyond. The idea which fits the best survives."
          />
        </div>
        <img
          className=" hidden sm:block top-44 absolute right-80"
          src="l22.png"
          alt=""
        />
      </div>
      <div className=" relative sm:justify-end lg:justify-end  flex flex-col gap-8  sm:flex sm:flex-row sm:gap-8 lg:px-60  sm:my-20">
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="3.jpg"
            head="Execute"
            des="It's the plan implementation stage where the best of the bests is carried out to drive results. Echo"
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <OurCard
            logo="4.jpg"
            head="Execute"
            des="from step 1. Why? It is paramount to cautiously monitor the upshots and make periodic alterations to continue seeing the desired results."
          />
          <img
            className="hidden sm:block -top-20 absolute left-72"
            src="lineuu.png"
            alt=""
          />
        </div>
      </div>

      {/* <div className="bg-jaali w-full h-full" >
        <h1 className="font-bold text-lg text-center my-10">IF IT IS</h1>
        <h1 className="font-extrabold sm:text-8xl text-[#4E17E2] text-center sm:px-20">
          {" "}
          "Content Related" Branding Related Marketing Related
        </h1>
        <h1 className="font-bold text-lg text-center my-10">It's</h1>
      </div> */}

      {/* <div className="gap-8 flex flex-col justify-center sm:flex sm:flex-row sm:gap-8 m-auto sm:w-full  sm:justify-center sm:my-10 ">
        <div className="m-auto lg:m-0 ">
          <Card3
            heading="50+"
            title="Clients Around the Globe"
            bgc="#F4F5F7"
            cor="black"
          />
        </div>
        <div className="m-auto lg:m-0">
          <Card3
            heading="500+"
            title="Successful Projects Delivered"
            bgc="#F4F5F7"
            cor="black"
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <Card3
            heading="12+"
            title="Experienced Digital Experts"
            bgc="#F4F5F7"
            cor="black"
          />
        </div>
      </div> */}

      <div className="min-h-screen bg-jaali bg-contain flex flex-col gap-4 items-center justify-center" >
        <div>IF IT IS</div>
        <div className="flex flex-col md:text-7xl text-2xl sm:text-4xl font-black text-ons  gap-4 items-center justify-center" >
          <div  >"Content Related"</div>
          <div>Branding Related</div>
          <div>Marketing Related</div>
        </div>
        <div>it's</div>

        <div className="gap-8 flex flex-col justify-center sm:flex sm:flex-row sm:gap-8 m-auto sm:w-full  sm:justify-center sm:my-10 ">
          <div className="m-auto lg:m-0 ">
            <Card3
              heading="50+"
              title="Clients Around the Globe"
              bgc="#F4F5F7"
              cor="black"
            />
          </div>
          <div className="m-auto lg:m-0">
            <Card3
              heading="500+"
              title="Successful Projects Delivered"
              bgc="#F4F5F7"
              cor="black"
            />
          </div>
          <div className="m-auto lg:m-0 ">
            <Card3
              heading="12+"
              title="Experienced Digital Experts"
              bgc="#F4F5F7"
              cor="black"
            />
          </div>
        </div>

      </div>


      <div className=" flex justify-center mt-10 ">
        {" "}
        <img src="Group 40370.png" alt="" />{" "}
      </div>
      <img
        className="w-[20%] m-auto"
        src="https://checkmatecreatives.com/Images/check1.png"
        alt=""
      />
      <img className="m-auto  sm:block hidden " src="retutyk.png" alt="" />
      <div className="flex flex-col sm:flex-row gap-8 m-auto w-full justify-center my-10">
        <div className="m-auto lg:m-0 ">
          {" "}
          <Card4
            bgc="#03A71E"
            head="Our Vission"
            des="We paint the bright future for the businesses working on digital landscapes and firmly believe in providing productive long-term business relationships."
          />
        </div>
        <div className="m-auto lg:m-0 ">
          <Card4
            bgc="#DD00CD"
            head="Our Mission"
            des="Handover contemporary and futuristic web and digital marketing solutions to the businesses ranging from startups to enterprises with affordability and satisfaction."
          />
        </div>
      </div>

      <div>
        <h1 className="font-extrabold text-4xl text-black text-center  mt-10 mb-10">
          {" "}
          Our Values
        </h1>
      </div>

      <div className="  flex flex-col gap-6 sm:hidden">
        <Card5
          logo="5.jpg"
          head="Creativity"
          des="Our ethos is signified by creativity. It is our propellant to growth. Through our creative endeavour, we seek to establish a place that caters to all your creative needs when it comes to branding, marketing, promotion, or designing."
        />
        <Card5
          logo="6.jpg"
          head="Abundance"
          des="We are driven by the need to create more and expand. We believe in converting the challenges presented to us by our clients into opportunities that pave the way to growth."
        />
        <Card5
          logo="7.jpg"
          head="Equality"
          des="The culture of any organization is defined by how its employees are treated, and we believe that employee empowerment is organization empowerment.The culture of any organization is defined by how its employees are treated, and we believe that employee empowerment is organization empowerment."
        />
        <Card5
          logo="8.png"
          head="Loyalty"
          des="Being fiercely loyal to our clients and commitments helps us make decisions and take actions in their best interests."
        />
        <Card5
          logo="9.png"
          head="Responsibility"
          des="Our commitment to fulfilling our responsibilities takes us a step closer to excellence. We embrace the responsibilities bestowed upon us and take utmost accountability of our actions."
        />
      </div>
      <img
        className="hidden sm:block w-full m-auto "
        src="https://checkmatecreatives.com/Images/our-valuepng.png"
        alt=""
      />

      {/* <div className="text-center flex flex-col m-auto justify-center sm:flex-row  sm:flex sm:justify-between sm:pl-20 bg-[#00BBFF] sm:py-20 sm:mb-10  sm:text-white">
        <div className=" p-10 sm:pr-60  sm:w-1/2 py-20">
          {" "}
          <h1 className=" font-bold text-4xl pr-10 text-white mb-10 ">
            Let's Help Your Brand Grow
          </h1>
          <p>
            You could be a start-up pining for brand recognition or a big player
            looking for a soaring online presence know that you are at the right
            place at the right time. Let's connect tellus about your needs -
            content development, design, or digital marketing, and we'll be
            delighted to showcase our experience to you.
          </p>{" "}
        </div>
        <div className=" sm:w-1/2 ">
          {" "}
          <img src="rocket_23.png" alt="" className="w-80  py-20" />{" "}
        </div>
      </div> */}


      <div className=" bg-[#00BBFF] min-h-96 p-5" >
        <div className="w-11/12 m-auto grid md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-11" >
          <div className="flex flex-col gap-2 text-white md:w-9/12" >
            <div className="flex flex-col text-3xl font-black" >
              <span>Let's Help Your </span>
              <span>Brand Grow</span>
            </div>
            <span className="text-sm " >You could be a start-up pining for brand recognition or a big player looking for a soaring online presence know that you are at the right place at the right time. Let's connect tell us about your needs - content development, design, or digital marketing, and we'll be delighted to showcase our experience to you.</span>
          </div>
          <div className="relative flex justify-center items-center " >
            <img src="Group 40381.png" className="absolute -top-4" alt="" />
            <img src="rocket_23.png" alt="" className="w-80  " />
          </div>
        </div>
      </div>

      <div className="relative min-h-[90vh] -mt-8 mb-10 grid md:grid-cols-3 gap-3 grid-cols-1 md:justify-items-start justify-items-center text-center md:text-start w-10/12  m-auto">
        <div className="w-full bg-ons h-24 absolute  bottom-0 right-0">
          <img
            className="absolute  bottom-0 right-0 h-24 object-contain "
            src={img6}
            alt=""
          />
        </div>

        <img src={img7}
          className="absolute left-full opacity-40 md:opacity-100 -translate-x-full h-96 bottom-4 z-0"
          alt="" />

        <div className="absolute  top-full sm:left-0 md:-translate-y-20 -translate-y-24">
          <div className="flex gap-1 p-4 flex-col md:flex-row pt-4">
            <span className="bg-btn text-white rounded-md px-3 py-2  flex gap-2 items-center">
              <BsEnvelopePaper className="text-white text-2xl" />
              Book A Free Appointment
            </span>
            <span className="bg-white  font-semibold text-btn rounded-md px-3 py-1  flex gap-2 items-center">
              <FiPhoneCall className="text-btn text-2xl" />
              call A +91 8200493681
            </span>
          </div>
        </div>

        <div className='col-span-2 w-10/12 flex flex-col items-center justify-center md:items-start ' >
          <h2 className=" text-3xl font-thin ">Choose Us</h2>

          <hr className='border border-btn w-1/12 my-7' />

          <div className="z-10">
            <h2 className="text-3xl font-black py-6 md:w-6/12 w-full ">
              We Make Your Business Bright
            </h2>

            <p className='md:mb-14 sm:mb-28 mb-24 text-sm md:text-md'>
              we listen, we think, we create, We start by understanding of
              your business and its aspirations; we apply our knowledge and
              expertise with a conceptulization to visualize different
              branding phenomenon and implement it with the great output of
              marketing collateral, website, Online Campaigns to boost your
              products or services as a brand in real world. In simple terms
              we'll become your very own team of creative geniuses, on-line
              strategists and friendly geeks. Call for a jargon free chat or
              if you're too busy use this form.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
