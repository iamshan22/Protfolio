"use client";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper required modules
import { Autoplay } from "swiper/modules";
// styles
import "swiper/css";
import "swiper/css/pagination";
//
import { ImQuotesLeft } from "react-icons/im";

// data
const testimonial = [
  {
    name: "Alice Johnson",
    message:
      "This service is amazing! It has completely exceeded my expectations. Highly recommend to everyone.",
  },
  {
    name: "Michael Brown",
    message:
      "A fantastic experience from start to finish. The team was professional and the results were outstanding.",
  },
  {
    name: "Sophia Williams",
    message:
      "I am so impressed with the quality and attention to detail. Will definitely use this service again!",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[300px] md:max-w-[520px] bg-secondary
       rounded-lg "
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className=" hidden xl:flex text-8xl pt-0 text-accent" />
              <div className="flex flex-col gap-2">
                <p>{person.message}</p>
                <p className="self-end text-accent font-semibold">{person.name}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
