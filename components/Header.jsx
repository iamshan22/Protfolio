import Logo from "./Logo";
import Socials from "./Socials";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0 ">
      <div className="container mx-auto px-[15px]">
        <div className="flex items-center justify-between py-6">
          {/* LOGO */}
          <Logo />
          {/* nav mobile */}
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[30px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks containerStyles="flex flex-col gap-8 max-w-[100px]" />
              <div className="">
                <button className="btn btn-lg btn-tertiary mb-16">
                  <div className="flex items-center justify-between gap-2">
                    <span>Download CV</span>
                    <MdFileDownload className="text-xl" />
                  </div>
                </button>
                <Socials
                  containerStyles="flex gap-4"
                  iconStyle="bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
