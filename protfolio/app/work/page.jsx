"use client"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// tabs
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
    image: "/assets/work/thumb1.png",
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
    image: "/assets/work/thumb2.png",
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
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Next.js", "Tailwind CSS", "Socket.IO", "Node.js", "MongoDB"],
  },

  {
    id: 6,
    category: "UIUX Design",
    title: "Shopify E-commerce App",
    description:
      "A Shopify e-commerce app design focusing on user experience and interface design, built with React and Tailwind CSS.",
    image: "/assets/work/thumb2.png",
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Next.js", "Tailwind CSS", "Socket.IO", "Node.js", "MongoDB"],

  },

  {
    id: 7,
    category: "Branding",
    title: "Brewhaus brand identity",
    description:
      "A complete branding package for a fictional coffee shop, including logo design, color palette, and typography.",
    image: "/assets/work/thumb3.png",
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Figma", "Illustrator", "Photoshop"], // or keep empty if no tools needed
  },
  {
    id: 8,
    category: "Branding",
    title: " LunaSkin Luxury Skincare",
    description:
      "Elegant branding for a luxury skincare line, including logo design, packaging, and marketing materials.",
    image: "/assets/work/thumb4.png",
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Figma", "Canva", "Photoshop"], // or keep empty if no tools needed
  },
  {
    id: 9,
    category: "Branding",
    title: "NovaTech Brand Kit",
    description:
      " Full branding kit for a tech Startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "https://chatsync.example.com",
    github: "https://github.com/yourusername/chatsync",
    tech: ["Figma", "Illustrator", "Notion"], // or keep empty if no tools needed
  }



];

const categories = ["Frontend", "Full Stack", "UIUX Design", "Branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">My Latest <span className="text-accent">Work</span></h2>
        <Tabs
          defaultValue="Frontend"
          className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0" >
            {categories.map((category) => {
              return (
                <TabsTrigger key={category} value={category} className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer" >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div>
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category} >
                  <Swiper>
                    {projects.filter((project) => project.category === category).map((project) => {
                      return (
                        <SwiperSlide key={project.id} className="h-full">
                          <div className=" flex flex-col xl:flex-row gap-8 xl:gap-12">
                            <div className=" w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                              <h3 className="h3">{project.title}</h3>
                              <div className=" xl:mb-4 max-w-[300px] min-h-[130px]">
                                <p className="mb-4">Technologies Used</p>
                                <ul className="flex flex-wrap gap-4">
                                  {project.tech.map((item, index) => {
                                    return (
                                      <li key={index}
                                        className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                      >
                                        {item}
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                              <div className="">
                                <Link href={project.link}>
                                  <button className=" btn btn-sm btn-accent flex gap-2">
                                    <MdArrowOutward className=" text-2xl" />
                                    <span>Live Project</span>
                                  </button>
                                </Link>
                                 <Link href={project.github}>
                                  <button className=" btn btn-sm btn-white flex gap-2">
                                    <FaGithub className=" text-2xl" />
                                    <span>Github Repo</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className=" w-full h-[200px] md:h-[300px] xl:h-[350px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.image}
                                fill
                                className=" object-cover"
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work