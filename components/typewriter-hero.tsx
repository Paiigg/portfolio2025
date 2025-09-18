"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa6";
import { FileDown } from "lucide-react";

const TypewriterHero = () => {
  return (
    <section
      id="home"
      className="max-w-screen-lg mx-auto flex  justify-center  items-center h-screen "
    >
      <div className="p-4 items-center flex flex-col justify-center text-center gap-4 ">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-green-400 animate-ping"></span>
          <span className=" text-green-400 font-semibold text-xs">
            Ready to Work!
          </span>
        </div>
        <h1 className="md:text-7xl font-bold text-4xl ">
          Hello,👋 I'm{" "}
          <Typewriter
            options={{
              strings: [
                "Faiqul Washfi",
                "Electronics Engineer",
                "Frontend Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className=" text-gray-400 md:w-[60%]">Not Bad.</p>

        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" asChild className="font-semibold">
            <Link href="/">
              <FileDown />
              Download CV
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/Paiigg" target="_blank">
              <FaGithub />
              Github Page
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TypewriterHero;
