"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/testimonial";
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center mt-[80px]"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10">
            1
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
              <p className=" max-w-[540px] mb-12">
                Full Stack Python Developer skilled in Python, Flask/Django, and
                modern front-end tools. Experienced with Google Cloud and
                NenoDB. I write clean, efficient code and enjoy building fast,
                user-friendly web apps. Open to opportunities to learn and grow
                with great teams.
              </p>
              <div className=" flex flex-col items-center gap-16 ">
                <Stats />
                <Testimonial/>
                <div className="">Info</div>
                <div className="">Journey</div>
                <div className="">Skills</div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
