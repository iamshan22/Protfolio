import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";
import { SiPython, SiDjango } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "ReaactJS",
  },
  {
    icon: <RiNextjsFill />,
    name: "NextJS",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML5",
  },
  {
    icon: <RiJavascriptFill />,
    name: "JavaScript",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS3",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiNodejsFill />,
    name: "NodeJS",
  },
  {
    icon: <SiPython />,
    name: "Python",
  },
  {
    icon: <SiDjango />,
    name: "Django",
  },
];

const Skills = () => {
  return (
    <div className="h2 mb-8 ">
      <h2>
        My <span className="text-accent">Skills</span>
      </h2>
      <div className=" flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((skill, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="flex  items-center justify-center w-16 h-16 bg-tertiary/70 group  rounded-full ">
                  <div className="text-3xl text-teal-900  group-hover:text-accent transition-all duration-300 ">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className=" text-lg"> {skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
