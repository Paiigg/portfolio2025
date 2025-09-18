import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiTailwindcss, SiArduino } from "react-icons/si";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Onshape } from "./onshape";
import { ShootingStars } from "./ui/shooting-stars";

const SkillSection = () => {
  return (
    <section
      id="skill"
      className="h-screen  p-4 max-w-screen-lg mx-auto flex flex-col items-center justify-center relative"
    >
      <h2 className=" font-bold text-4xl">Skill</h2>
      <div className=" mt-4">
        <InfiniteMovingCards items={skills} direction="right" speed="fast" />
        <InfiniteMovingCards items={skills} direction="left" speed="fast" />
        <InfiniteMovingCards items={skills} direction="right" speed="fast" />
      </div>
      <ShootingStars />
    </section>
  );
};

const skills = [
  {
    icon: <IoLogoJavascript className="size-5" color="#F7DF1E" />,
    name: "Javascript",
    background: "",
  },
  {
    icon: <BiLogoTypescript className="size-5" color="#3178C6" />,
    name: "Typescript",
    background: "",
  },
  {
    icon: <IoLogoReact className="size-5" color="#61DAFB" />,
    name: "React.js",
    background: "",
  },
  {
    icon: <SiNextdotjs className="size-5" />,
    name: "Next.js",
    background: "",
  },
  {
    icon: <SiTailwindcss className="size-5" color="#61DAFB" />,
    name: "Tailwind",
    background: "",
  },
  {
    icon: <Onshape />,
    name: "Onshape",
    background: "",
  },
  {
    icon: <SiArduino className="size-5" color="#008f97" />,
    name: "Arduino",
    background: "",
  },
];
export default SkillSection;
