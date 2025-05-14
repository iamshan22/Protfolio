"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center  "
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <div className=" absolute top-[80px] -left-[10px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>
            <Image src="/assets/avatar.png"
              width={400}
              height={496}
              alt=""
              className="z-20  top-9 relative"
            />
            <div className="w-full h-[60px] absolute left-0  top-[430px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>
            <Socials containerStyles="flex gap-4  z-40 w-max transform translate-x-[90px] translate-y-[90px]" 
            iconStyle="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex item-center justify-center rounded-full cursor-pointer"/>
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div className="">
              <div className=" flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me </p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Shan</span>
              </h2>
              <p className=" max-w-[530px] mb-12">
                Full Stack Python Developer skilled in Python, Flask/Django,
                modern front-end tools. Experienced with Google Cloud and
                NenoDB. I write clean, efficient code and enjoy building fast,
                user-friendly web apps. Open to opportunities to learn and grow
                with great teams.
              </p>
              <div className=" flex flex-col items-center gap-16 ">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
                <div>kkaja</div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
