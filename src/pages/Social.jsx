import React, { useState } from "react";
import { BiGrid, BiTimeFive } from "react-icons/bi";
import {
  BsEnvelopePaper,
  BsFillClipboardFill,
  BsFillEyeFill,
  BsMailbox,
  BsPencilFill,
  BsPieChartFill,
} from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { GiRoad, GiSwallow } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { VscPerson } from "react-icons/vsc";
import rectangle from "../assets/Rectangle 22639.png";
import imgcurv from "../assets/Group 40306.png";
import HomeCarousel from "../components/HomeCarousel";
import CollapsMenu from "../components/CollapsMenu";
import { FiPhoneCall } from "react-icons/fi";
import Socialmenu from "../components/Socialmenu";
const Social = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div
        className="relative bg-cover"
        style={{
          background: "url(header1.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-line bg-contain">
          <div className="  bg-header2   w-[80%] m-auto h-[50rem]   bg-no-repeat bg-contain mt-0 pt-20 ">
            {/* <img className="absolute top-28 right-1/2" src="lineN.svg" alt="" /> */}
            {/* <img
            className=" hidden sm:block absolute top-10 w-[15%] right-[46%]"
            src="https://checkmatecreatives.com/Images/g.ads-removebg-preview1.png"
            alt=""
          /> */}

            <h2 className="text-center font-bold text-5xl  sm:py-10">
              Social Media Marketing.
            </h2>
            <p className="text-center font-bold text-[#4E17E2] text-3xl sm:w-1/2 sm:px-4 sm:m-auto  ">
              {" "}
              GET MORE THAN JUST LIKES FROM YOUR SOCIAL MEDIA MARKETING.
            </p>
            <div className=" flex justify-center pt-4 ">
              <img src="Group 39769.svg" alt="Group" />
            </div>
            <div className="flex gap-3 m-auto justify-around w-1/2">
              <img className="w-72" src="pro1.png" alt="pro1.png" />
              <img className="w-72" src="pro2.png" alt="" />
            </div>
          </div>
        </div>
        <div className=" invisible sm:flex gap-3 m-auto justify-around w-1/2 absolute bottom-96 sm:left-72 ">
          <img className="w-72" src="pro3.png" alt="pro1.png" />
          <div className="">
            <img className="w-72  " src="pro4.png" alt="" />
            <img className="w-72" src="pro5.png" alt="" />
          </div>
        </div>

        <div className="px-0 lg:px-40 sm:py-20 mx-10  ">
          <p className="text-center font-bold px-0 lg:px-80 ">
            {" "}
            " Now's The Time To Put Social To Work "
          </p>

          <p className="text-center">
            Let’s give it to you straight. Most “experts” are measuring social
            media marketing strategy the wrong way, or their targeting is
            misaligned with the objective. It’s time to ditch the vanity metrics
            and focus on what really matters your ROI.
          </p>
          <p className="my-20">
            {" "}
            As a premier social media agency, we know how to turn thumbs up into
            tangible conversions for your business. Through compelling ads and
            hard-hitting campaigns, we bite the bullet to create holistic
            strategies that do more than just deliver impressions. Reap the
            benefits of tailored social media advertising that goes above and
            beyond surface-level results, generating long-term success for your
            brand.
          </p>
          {/* <img
            className="absolute top-[30rem] sm:top-[28rem] left-[43%] sm:left-[73%] w-40"
            src="head3.png"
            alt="as"
          />
          <img
            className="absolute  top-[30rem] sm:top-[23rem] W-24 h-56 right-[40%] sm:right-[73%]   "
            src="https://checkmatecreatives.com/Images/fb1.png"
            alt="as"
          /> */}
        </div>

        {/* <p className="text-center pb-4"> Scroll Down</p> */}
      </div>
      <div className="text-center">
        <h2 className="font-extrabold text-5xl my-10 ">
          OUR SOCIAL MEDIA STRATEGIES
        </h2>
        <h2 className="font-extrabold text-5xl my-10 text-violet-600 ">
          GO BEYOND JUST POSTING
        </h2>

        <p className="m-auto w-[90%] ">
          Deliver compelling and engaging social experiences with our social
          media services Our social media team are experts in social trends,
          innovation, and strategies. Our full-service offering includes
          everything from community management to creative production. We’re
          here to help you to raise brand awareness, increase brand relevance,
          and drive growth for your business. We build a vibrant presence across
          social platforms to captivate the right audience
        </p>
      </div>
      <img
        className="w-[50%] m-auto"
        src="communication.png"
        alt=""
        srcset=""
      />

      <div className="grid md:grid-cols-9 grid-cols-5 gap-3 text-sm mt-10 items-center justify-items-center">
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 1
                ? "active-tabs border-btn bg-btn text-white"
                : "tabs  bg-btn"
            } p-4    rounded hover:scale-105  duration-300  `}
            onClick={() => toggleTab(1)}
          >
            <div className="flex flex-col justify-center items-center">
              <FcSearch className="text-white text-xl" />
            </div>
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Discovery
          </span>
        </div>
        <div className="w-full  hidden md:flex justify-between items-center gap-2">
          <span className="h-3 w-3 bg-btn rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-btn" />
          <hr className="border w-1/12 border-green-500" />
          <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"></span>
        </div>

        {/* Second */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 2
                ? "active-tabs border-btn bg-green-500 text-white"
                : "tabs bg-green-500"
            } p-4    rounded hover:scale-105  duration-300  `}
            onClick={() => toggleTab(2)}
          >
            <VscPerson className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Tailor
          </span>
        </div>
        <div className="w-full  justify-between items-center gap-2  hidden md:flex">
          <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-green-500" />
          <hr className="border w-1/12 border-[#DD00CD]" />
          <span className="h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0"></span>
        </div>

        {/* Third */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 3
                ? "active-tabs border-btn bg-[#DD00CD] text-white"
                : "tabs bg-[#DD00CD]"
            } p-4    rounded hover:scale-105  duration-300  `}
            onClick={() => toggleTab(3)}
          >
            <BiGrid className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            OnBoard
          </span>
        </div>

        <div className="w-full  justify-between items-center gap-2  hidden md:flex">
          <span className="h-3 w-3 bg-[#DD00CD] rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-[#DD00CD]" />
          <hr className="border w-1/12 border-[#E21717]" />
          <span className="h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0"></span>
        </div>

        {/* Forth */}
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 4
                ? "active-tabs border-btn bg-[#E21717] text-white"
                : "tabs bg-[#E21717]"
            } p-4    rounded hover:scale-105  duration-300  `}
            onClick={() => toggleTab(4)}
          >
            <GiSwallow className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Implement
          </span>
        </div>

        <div className="w-full  justify-between items-center gap-2 hidden md:flex">
          <span className="h-3 w-3 bg-[#E21717] rounded-full flex-shrink-0"></span>
          <hr className="border w-1/12 border-[#E21717]" />
          <hr className="border w-1/12 border-ons" />
          <span className="h-3 w-3 bg-ons rounded-full flex-shrink-0"></span>
        </div>
        <div className="flex flex-col justify-between items-center">
          <button
            className={`${
              toggleState === 4
                ? "active-tabs border-btn bg-ons text-white"
                : "tabs bg-ons"
            } p-4    rounded hover:scale-105  duration-300  `}
            onClick={() => toggleTab(4)}
          >
            <BsPencilFill className="text-white text-xl" />
          </button>
          <span className=" font-bold md:text-xl  text-xs text-black/70">
            Refine
          </span>
        </div>
      </div>

      <div className=" my-20 text-black">
        <div className=" rounded-2xl h-full">
          <div className={`${toggleState === 1 ? "block" : "hidden"} `}>
            <div className="bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl">
              Through a quick 30 minute call, we go over a series of questions
              with your business to develop a thorough understanding of your
              operations and target market. Then we communicate with you to
              understand your goals involving digital marketing services and
              look to identify any additional value that we can deliver.
            </div>
          </div>

          <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
            <div className="bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl">
              tailor lorem Through a quick 30 minute call, we go over a series
              of questions with your business to develop a thorough
              understanding of your operations and target market. Then we
              communicate with you to understand your goals involving digital
              marketing services and look to identify any additional value that
              we can deliver.
            </div>
          </div>

          <div className={`${toggleState === 3 ? "block" : "hidden"}`}>
            <div className="bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl">
              onboard ipsum Through a quick 30 minute call, we go over a series
              of questions with your business to develop a thorough
              understanding of your operations and target market. Then we
              communicate with you to understand your goals involving digital
              marketing services and look to identify any additional value that
              we can deliver.
            </div>
          </div>
          <div className={`${toggleState === 4 ? "block" : "hidden"}`}>
            <div className="bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl">
              implement ipsum Through a quick 30 minute call, we go over a
              series of questions with your business to develop a thorough
              understanding of your operations and target market. Then we
              communicate with you to understand your goals involving digital
              marketing services and look to identify any additional value that
              we can deliver.
            </div>
          </div>
          <div className={`${toggleState === 5 ? "block" : "hidden"}`}>
            <div className="bg-white2 md:w-10/12 w-full p-4 rounded-md text-2xl">
              refine ipsum Through a quick 30 minute call, we go over a series
              of questions with your business to develop a thorough
              understanding of your operations and target market. Then we
              communicate with you to understand your goals involving digital
              marketing services and look to identify any additional value that
              we can deliver.
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto relative  min-h-[80vh] pb-10">
        {/* <img className='absolute top-0  -z-10' src="bgblue.png" alt="" /> */}
        {/* <img className='absolute w-8/12 top-1/2 -z-10 right-0 h-24' src={rectangle} alt="" /> */}
        {/* <img src='bgblue.png' className="absolute bottom-0 w-full object-contain translate-y-1/2" alt="" /> */}
        <div className="grid justify-items-center  pt-7  bg-[#28236E] text-white  h-96 p-5 sm:p-24 rounded-lg">
          <p className="text-base sm:text-3xl sm:font-bold sm:text-white">
            {" "}
            How We Help In Conceptualising Your Brand’s Message Across Audiences
            Build Awareness By Developing A Distinct Brand Voice
          </p>

          <p>
            A loyal following on social media platforms can be the biggest
            weapon in your brand’s arsenal! Through our unique mix of creativity
            powered by genius, we create, grow and sustain brand awareness on
            social media.
          </p>
        </div>

        <div className="  ">
          <div className="sm:flex sm:gap-5 m-auto  sm:justify-center sm:items-center">
            <div className="flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <MdGroups className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Deep </span>
                <span> Diving</span>
              </div>
              <span className="text-xs font-thin">
                As step one of onboarding, we do a thorough study of your brand,
                services and products to help you further with your
                requirements.
              </span>
            </div>

            <div className="flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsFillClipboardFill className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Monthly </span>
                <span> Review</span>
              </div>
              <span className="text-xs font-thin">
                As step one of onboarding, we do a thorough study of your brand,
                services and products to help you further with your
                requirements.
              </span>
            </div>
            <div className="flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsMailbox className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Easy </span>
                <span> Interaction</span>
              </div>
              <span className="text-xs font-thin">
                Besides believing in formal emails, we also understand that
                there is often a need for quick communication.
              </span>
            </div>
            <div className="flex flex-col gap-2 w-48 hover:bg-[#4E17E2] border p-2 rounded-xl py-5 hover:h-56 -translate-y-1/3 bg-btn text-white">
              <span>
                <BsMailbox className="text-4xl text-[#EFFF00]" />
              </span>
              <div className="flex flex-col text-sm font-semibold">
                <span>Easy </span>
                <span> Interaction</span>
              </div>
              <span className="text-xs font-thin">
                Besides believing in formal emails, we also understand that
                there is often a need for quick communication.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="font-semibold text-3xl text-center ">
          Transform Loyal Audiences Into Successful Leads
        </div>
        <div className="font-semibold text-3xl text-center ">
          {" "}
          Into Successful Leads
        </div>
        <div className=" w-1/2 m-auto text-center ">
          We don’t just promote your brand, we take your consumers through a
          journey. This starts right from creative posts that capture their
          attention, nurturing them through sustained community building to
          finally converting them into leads through compelling calls-to-action.
        </div>
        <div className="bg-[#EAF3FF] pt-44 mt-44 ">
          <h1 className="text-center px-10">
            The Cat’s Out Of The Bag. Here’s Our TOP - SECRET Social Media
            Management Process.
          </h1>
          <p className="px-10">
            The Cat’s Out Of The Bag. Here’s Our TOP - SECRET Social Media
            Management Process.
          </p>

          <div className="sm:grid sm:grid-cols-2 sm:gap-5 sm:p-10">
            <div className="bg-white rounded-lg p-10 hover:bg-blue-800 hover:text-white ">
              {" "}
              <h1 className="sm:text-base">Define Budget And Campaign Goals</h1>{" "}
              <p>
                Starting with your allocated budget, we’ll define the realistic
                touchpoints and scale of the campaign. It’s in this step that we
                may also look into a competitive analysis, giving us valuable
                insights around the best possible route to take. From there,
                we’ll agree on the expected commercial outcomes that this budget
                can deliver.
              </p>{" "}
            </div>
            <div className="bg-white rounded-lg p-10 hover:bg-blue-800 hover:text-white ">
              {" "}
              <h1>Identify Social Media Marketing Activity</h1>{" "}
              <p>
                At this point, Shout will determine the best activity, platforms
                and audience segments required to achieve the commercial
                outcomes defined in step one.
              </p>{" "}
            </div>
            <div className="bg-white rounded-lg p-10 hover:bg-blue-800 hover:text-white ">
              {" "}
              <h1>Execute The Plan</h1>{" "}
              <p>
                This is our time to shine and prove to you why we’re known as
                the best social media advertising agency in Melbourne and wider
                Australia. We’ll allocate the right people and technology
                required and execute the strategy from start to finish.
              </p>{" "}
            </div>
            <div className="bg-white rounded-lg p-10 hover:bg-blue-800 hover:text-white ">
              {" "}
              <h1>Evaluate, Report And Optimise</h1>{" "}
              <p>
                Here’s where we put our entrepreneurial minds to work, treating
                your campaign as if it were our own. The experts at our social
                media agency will determine if the activity and resourcing plan
                were effective and document all learnings for reporting. From
                these learnings, we re-attribute waste, if any, and optimise our
                efforts.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className=" invisible sm:w-1/6 sm:absolute sm:left-[39rem] sm:top-40">
          {" "}
          <img className="w-full" src="socialatm.png" alt="" />{" "}
        </div>
      </div>
      <div className="bg-[#4E17E2] mb-40">
        <div className="flex gap-1 p-4 flex-col md:flex-row pt-4 justify-between">
          <span className=" text-white rounded-md px-3 py-2  flex gap-2 items-center">
            Book A Free Appointment
          </span>
          <span className="w-1/3">
            <img className="" src="linebook.png" alt="" />
          </span>
          <span className="bg-btn  font-semibold text-white rounded-md px-3 py-1  flex gap-2 items-center">
            <BsEnvelopePaper className="text-white text-2xl" />
            Book A Free Appointment
          </span>
        </div>
      </div>
      <div className=" sm:flex sm:gap-5">
        {" "}
        <div className="sm:w-1/2 sm:p-10">
          {" "}
          <h1>Followers Are Good. Returns Are Better.</h1>{" "}
          <p>
            We have an experienced, dedicated team of gurus who are ready and
            able to apply their years of wisdom to your business. We’ll get your
            social media strategy, calendar and tactics humming, which will
            channel your efforts into a healthy revenue stream. Ready to make
            waves? We are.
          </p>{" "}
        </div>
        <div className="sm:w-1/2 sm:p-10 ">
          <div className="bg-[#EAF3FF] sm:flex sm:gap-5 sm:px-10">
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
            <div>
              <img src="profile.png" alt="" /> <h3>Shane</h3>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="bg-[#03A71E] text-white text-center p-16 ">
        {" "}
        <h1>It’s Time To Get Serious About Social Media.</h1>{" "}
      </div>

      <div className="sm:flex">
        <div className="sm:w-1/2 p-5 text-center sm:p-20">
          <h1 className="text-[#4E17E2] text-5xl font-bold font-sans py-5">
            LET’S GET{" "}
          </h1>
          <h1 className="text-[#03A71E] text-5xl font-bold font-sans py-5">
            GROWING
          </h1>

          <p>
            For too long, these platforms have been used by businesses and their
            digital agencies as a place to show off. The problem is, creating
            this hype doesn’t make you hip when the results can’t be seen.
            Nothing is more frustrating than wasting time and effort on
            marketing tactics that don’t stick, and we see this common problem
            with social media ads all the time. There is more to being active on
            these networks, and it takes years of experience to know what those
            secrets are.
          </p>
          <p>
            At Shout, we see social media management as a profit centre, but
            that all comes with a highly strategic social media strategy that’s
            100% tailored to your individual brand. From start to finish, we
            ensure your campaign drives traffic, leads and sales, giving you
            more than just basic ‘likes’.
          </p>
          <p>
            Looking for a one-stop-shop social media agency to kickstart your
            brand awareness?
          </p>
        </div>
        <div className="w-1/2 p-20">
          <img className="w-96" src="kartoon.png" alt="" />
        </div>
      </div>

      <div className="text-center my-10">
        {" "}
        <h1>Social Media Ad Channels</h1>{" "}
      </div>

      <div className=" p-4 sm:flex sm:gap-10 sm:w-[80%] sm:m-auto sm:justify-around py-20">
        <div>
          {" "}
          <img src="Icon awesome-facebook-square.svg" alt="" />{" "}
          <h1>Facebook</h1>{" "}
          <p>
            With billions of monthly sessions and over 80% of Internet users on
            the platform, Facebook is one of the most targeted forms of
            advertising online.
          </p>
        </div>
        <div>
          {" "}
          <img src="instagram-brands(1).svg" alt="" />{" "}
          <h1>Instagram</h1>{" "}
          <p>
            With over 30% of Instagram users using the platform to purchase a
            product online, Instagram platform is helping drive millions of
            product sales for business owners each month
          </p>
        </div>
        <div>
          {" "}
          <img src="Icon awesome-youtube.svg" alt="" /> <h1>Youtube</h1>{" "}
          <p>
            YouTube provides excellent tools and best-in-class options for video
            advertisers, providing tools to support your goals & objectives,
            from driving awareness all the way to direct conversions.
          </p>
        </div>
        <div>
          {" "}
          <img src="Icon awesome-linkedin.svg" alt="" />{" "}
          <h1>LinkedIn</h1>{" "}
          <p>
            LinkedIn is the number one platform for B2B marketing effectiveness
            to build brand awareness, drive traffic and generate leads. Four out
            of five LinkedIn members are responsible for driving business
            decisions for their organisation.
          </p>
        </div>{" "}
      </div>

      <div className="bg-[#EAF3FF] pb-10 px-10  ">
        <h1 className="text-center py-10">Our Services</h1>
        <div className="sm:grid sm:grid-cols-2 sm:gap-5 ">
          <div className="bg-white  p-10">
            {" "}
            <h1>Social Media Strategy</h1>
            <p>
              Tailored social media strategies aimed at reaching your target
              audience and driving remarkable results.
            </p>{" "}
          </div>
          <div className="bg-white  p-10">
            {" "}
            <h1>Social Media Management</h1>
            <p>
              Create meaningful connections with consumers across social
              platforms.
            </p>{" "}
          </div>
          <div className="bg-white  p-10">
            {" "}
            <h1>Social Content Creation</h1>
            <p>
              Connect with your audience through engaging creative that
              resonates and sets you apart from competitors.
            </p>{" "}
          </div>
          <div className="bg-white  p-10">
            {" "}
            <h1>Paid Social Advertising</h1>
            <p>
              Paid social media strategy is more than just reach on Facebook.
            </p>{" "}
          </div>
        </div>
        <div className="bg-white my-10 mb-10 p-10">
          {" "}
          <h1>Social Influencer Strategy & Management</h1>
          <p>
            We determine the optimal social influencers and manage every aspect
            of their engagement.
          </p>
        </div>
      </div>
      <HomeCarousel />
      <div className="sm:flex sm:my-40 sm:gap-10">
        <div className=" sm:w-1/2 sm:flex sm:justify-end">
          {" "}
          <img className="w-96" src="socialimg.png" alt="" />{" "}
        </div>
        <div className="m-auto sm:w-1/2">
          {" "}
          <h2 className="text-center font-bold text-5xl  sm:py-10">
            Why Your Business Needs
          </h2>
          <p className="text-center font-bold text-[#4E17E2] text-3xl  px-4 m-auto  ">
            {" "}
            Social Media Marketing
          </p>
        </div>
      </div>

      <div>
        <div className="w-[80%] p-10 m-auto shadow-slate-300 shadow border my-4">
          {" "}
          <h1>Unfettered brand visibility on social media</h1>{" "}
          <p>
            We provide tailored social media marketing and strategy services to
            keep your brand in front of your target audience without intruding
            upon their space. All our campaigns are purposeful, topical and
            relevant, totally catering to the aims and objectives of your
            branding goals. Custom packages to fit your needs. We provide
            business to business and business to customer social media marketing
            services to small businesses as well as large enterprises.
            Accelerate your social media marketing today.
          </p>{" "}
        </div>
        <div className="w-[80%] p-10 m-auto shadow-slate-300 shadow border my-4">
          {" "}
          <h1>Getting enough reach for your brand</h1>{" "}
          <p>
            Millions of people are their own individual social media and social
            networking platforms. How do you reach the right audience? Not just
            the right audience, but enough people? You can either advertise or
            post highly relevant, targeted content that people would like to
            engage with or share on their own timelines. Our social media
            marketing team can help you stay relevant in people’s timelines.
          </p>{" "}
        </div>
      </div>
<img src="Group 41775@2x.png" alt="" />
      <div className="text-center">
        <h1 className="w-1/2 m-auto text-6xl py-10 text-[#E21717]">
          "The Sooner You Start" The Sooner{" "}
          <span className="text-[#4E17E2]"> You See Results</span>
        </h1>
        <p className="w-1/2 m-auto">
          {" "}
          The sooner you start the sooner you reap the benefits social media is
          all about relationship building and it tends to grow exponentially as
          your followers tell their friends and their friends tell their friends
          and so on.
        </p>
      </div>
      <h1 className="text-center py-10 m-auto">
        Social media advertising FAQs{" "}
      </h1>

      {/* Carousel */}

      {/* Collaps Menu */}
      <Socialmenu />
    </div>
  );
};

export default Social;
