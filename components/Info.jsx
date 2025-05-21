import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" w-[280px] flex items-center gap-4">
          <HiOutlineUser className="text-accent mt-1 text-2xl" />
          <div className="">
            <p className="text-lg">Date of Birth</p>
            <p>25 june 2000</p>
          </div>
        </div>
        <div className=" w-[280px] flex items-center gap-4">
          <HiOutlineMail className="text-accent mt-1 text-2xl" />
          <div className="">
            <p className="text-lg">Email Address</p>
            <p>konashankaraditya@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" w-[280px] flex items-center gap-4">
          <HiOutlinePhone className="text-accent mt-1 text-2xl" />
          <div className="">
            <p className="text-lg">Phone</p>
            <p>+91 8143445559</p>
          </div>
        </div>
        <div className=" w-[280px] flex items-center gap-4">
          <HiOutlineLocationMarker className="text-accent mt-1 text-2xl" />
          <div className="">
            <p className="text-lg">Location</p>
            <p>Bhimavaram, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
