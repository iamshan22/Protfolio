"use client"
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll ">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/*Text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div className="">
                <h2 className="h2 mb-6">Contact <span className="text-accent">Me</span></h2>
                <p className="max-w-[460px]">
                  Feel free to reach out with any questions, ideas, or collaboration opportunities. I’ll get back to you soon.
                </p>
              </div>
              {/* contact info */}
              <div className=" flex flex-col gap-8 mb-6 xl:mb-0">
                {/*phone */}
                <div className=" flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+91 8143445559</span>
                </div>
                {/* email */}
                <div className=" flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>konashankaraditya@gmail.com</span>
                </div>
                {/* location */}
                <div className=" flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>
            {/*form */}
            <div className="flex-1" >
              <form className="flex flex-col gap-6 items-start">
                {/* name */}
                <div className=" flex flex-col xl:flex-row gap-6 w-full">
                  <div className=" w-full">
                    <Label htmlFor="firstname" >
                      FirstName <span className="text-accent">*</span>{""}
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="First Name"
                      required

                    />
                  </div>
                  <div className=" w-full">
                    <Label htmlFor="lastname" >
                      LastName <span className="text-accent">*</span>{""}
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      required

                    />
                  </div>
                </div>
                {/* email */}
                <div className=" w-full">
                  <Label htmlFor="email" >
                    Email <span className="text-accent">*</span>{""}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Youremail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className=" w-full">
                  <Label htmlFor="service" > I'm interested in <span className="text-accent">*</span> </Label>
                  <Select name="service" required>
                    <SelectTrigger id="service"
                      className="w-full !h-12  bg-white/5 border-white/10  px-4">
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/50 border-white/0">
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="message" >Message <span className="text-accent">*</span> </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                  {/*btn */}
                  <button
                    type="submit"
                    className="btn btn-lg btn-accent mt-3"
                  >
                    <div className=" flex items-center gap-3 ">
                      <span className="font-medium">Send Message</span>
                      <HiOutlineArrowLongRight className="text-xl" />
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact