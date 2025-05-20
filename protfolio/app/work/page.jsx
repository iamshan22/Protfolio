"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "LaunchWave Landing Page",
    description:
      "A modern landing page for a fictional product launch, built with React and styled using Tailwind CSS and Framer Motion.",
    image: "/assets/work/thumb2.png",
    link: "https://launchwave.example.com",
    github: "https://github.com/yourusername/launchwave",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "Frontend",
    title: "Nextfolio Portfolio Site",
    description:
      "A personal portfolio website showcasing projects and skills, built using Next.js, Tailwind CSS, and Shadcn UI.",
    image: "/assets/work/thumb1.png",
    link: "https://nextfolio.example.com",
    github: "https://github.com/yourusername/nextfolio",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "Full Stack",
    title: "AuthBoard Dashboard",
    description:
      "A full stack admin dashboard with user authentication and management features using Next.js, Python, and MongoDB.",
    image: "/assets/work/thumb3.png",
    link: "https://authboard.example.com",
    github: "https://github.com/yourusername/authboard",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Python", "MongoDB"],
  },
  {
    id: 4,
    category: "Full Stack",
    title: "ChatSync Platform",
    description:
      "A real-time chat application with user authentication and messaging built using Next.js, Socket.IO, and MongoDB.",
    image: "/assets/work/thumb4.png",
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Next.js", "Tailwind CSS", "Socket.IO", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    category: "UIUX Design",
    title: "FlowMobile App Design",
    description:
      "A mobile app design for a fictional task management application, focusing on user experience and interface design.",
    image: "/assets/work/thumb5.png",
    link: "https://example.com/flowmobile",
    github: "https://github.com/yourusername/flowmobile",
    tech: ["Figma", "Sketch"],
  },
  {
    id: 6,
    category: "UIUX Design",
    title: "Shopify E-commerce App",
    description:
      "A Shopify e-commerce app design focusing on user experience and interface design, built with React and Tailwind CSS.",
    image: "/assets/work/thumb2.png",
    link: "https://example.com/shopify-app",
    github: "https://github.com/yourusername/shopify-app",
    tech: ["React", "Tailwind CSS", "Figma"],
  },
  {
    id: 7,
    category: "Branding",
    title: "Brewhaus Brand Identity",
    description:
      "A complete branding package for a fictional coffee shop, including logo design, color palette, and typography.",
    image: "/assets/work/thumb3.png",
    link: "https://example.com/brewhaus",
    github: "https://github.com/yourusername/brewhaus",
    tech: ["Figma", "Illustrator", "Photoshop"],
  },
  {
    id: 8,
    category: "Branding",
    title: "LunaSkin Luxury Skincare",
    description:
      "Elegant branding for a luxury skincare line, including logo design, packaging, and marketing materials.",
    image: "/assets/work/thumb4.png",
    link: "https://example.com/lunaskin",
    github: "https://github.com/yourusername/lunaskin",
    tech: ["Figma", "Canva", "Photoshop"],
  },
  {
    id: 9,
    category: "Branding",
    title: "NovaTech Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book.",
    image: "/assets/work/thumb1.png",
    link: "https://example.com/novatech",
    github: "https://github.com/yourusername/novatech",
    tech: ["Figma", "Illustrator", "Notion"],
  },
];

const categories = ["Frontend", "Full Stack", "UIUX Design", "Branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
      }}
      className="min-h-screen flex  py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center ">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>

        <Tabs defaultValue="Frontend"
          className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList
            className="flex flex-wrap justify-center items-center gap-4 h-full mb-16 xl:mb-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/*contant */}
          <div className="h-[300px]  scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  
                >
                  {projects
                    .filter((project) => project.category === category)
                    .map((project) => (
                      <SwiperSlide key={project.id}>
                        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 ">
                          {/* Text content */}
                          <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                            <h3 className="h3">{project.title}</h3>
                            <div className="xl:mb-4 max-w-[300px] min-h-[130px] ">
                              <p className="mb-4">Technologies Used</p>
                              {project.tech?.length > 0 && (
                                <ul className="flex flex-wrap gap-4">
                                  {project.tech.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-accent flex gap-2">
                                  <MdArrowOutward className="text-xl" />
                                  <span>Live Project</span>
                                </button>
                              </Link>
                              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-sm btn-white flex gap-2">
                                  <FaGithub className="text-xl" />
                                  <span>GitHub Repo</span>
                                </button>
                              </Link>
                            </div>
                          </div>

                          {/* Image */}
                          <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10  order-1 xl:order-none rounded-lg overflow-hidden ">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;