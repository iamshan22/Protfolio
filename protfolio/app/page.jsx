"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
// components
import Blob from "@/components/Blob";
import Avatar1Img from "@/public/assets/avatar.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" flex  items-center  h-screen"
    >
      {/* pattern */}
      <Pattern />
      <div className=" flex flex-col xl:flex-row items-center justify-between w-full ">
        {/*text*/}
        <div className="w-full xl:w-[550px]">
          <h1 className="h1 flex-1 mb-[28px]  ">
            Hi! I'm Shan,
            <br />
            <TypeAnimation
              sequence={["Python Developer", 2000, "Web Developer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent "
              repeat={Infinity}
              cursor={true}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px] flex flex-col items-center xl:items-start text-center xl:text-left ">
            {" "}
            "Bringing ideas to life through Python — crafting seamless
            full-stack solutions that blend creativity with code."{" "}
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className=" flex items-center justify-between  gap-2">
              <span>Let's Talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>
          {/* contact info */}
          <div className=" flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0 ">
            {/* Phone */}
            <div className=" flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone />
              </span>
              <span>+91 8143445559</span>
            </div>
            {/* Email */}
            <div className=" flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail />
              </span>
              <span>Konashankaraditya@gmail.com</span>
            </div>
          </div>
          {/* social links */}
          <Socials
            containerStyles=" flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute
             2xl:top-1/5 2xl:right-9 2xl:-transform 2xl:translate-x-1/2 2xl:translate-y-1/2  "
            iconStyle="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px]  text-[22px]  flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        {/*blob & image*/}
        <div className=" hidden xl:block flex-1 relative z-20 ">
          <Blob containerStyles="w-[560px] h-[560px]" />
          <Image
            src={Avatar1Img}
            alt="noavatar"
            width={440}
            height={600}
            quality={100}
            className=" absolute top-5 left-[50px] "
          />
          <div className="w-full h-[100px] absolute bottom-0 left-0 right-0  bg-gradient-to-t from-primary via-primary/90  to-primary/40 "></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
