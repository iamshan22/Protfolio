"use client"
import { motion } from "framer-motion";
//siwpers
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper module styles
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const services = [
  {
    title: "Website Integration Design",
    href: "",
    icon: "/assets/services/design.svg",
  },

  {
    title: "Forntend Development",
    href: "",
    icon: "/assets/services/frontend.svg",
  },

  {
    title: "Backend Development",
    href: "",
    icon: "/assets/services/backend.svg",
  },

  {
    title: "SEO Optimization",
    href: "",
    icon: "/assets/services/seo.svg",
  },

  {
    title: "Video Production",
    href: "",
    icon: "/assets/services/video.svg",
  },

];


const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* headline*/}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0 ">
            Custom <span className="text-accent">Web Solutions</span> to Boost Your Business
          </h2>
          {/* BTN */}
          <button className=" btn btn-lg btn-accent flex gap-2">
            All services <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        {/* slider */}
        <Swiper spaceBetween={50} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className=" h-[320px] "
        >
          {services.map((item, index) => {
            return (
              <SwiperSlide key={index} className="">

                <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                  <div className=" flex items-center justify-between mb-12">
                    <Image
                      src={item.icon}
                      width={48}
                      height={48}
                      alt=""
                    />
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h2 className="text-[22px] font-medium max-w-[240px]">
                    {item.title}
                  </h2>
                </div>

              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </motion.section>
  )
}

export default Services