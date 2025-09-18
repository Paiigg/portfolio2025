"use client";

import { useState } from "react";
import { IoClose, IoMenu, IoCloudDownloadOutline } from "react-icons/io5";
import { clsx } from "clsx";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const Navlinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)} variant="menu" size="menu">
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </Button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <div className="flex flex-col items-center text-sm p-4 mt-4 gap-2 rounded-sm md:gap-0 md:flex-row  md:p-0 md:mt-0 ">
          <Button variant="link" onClick={() => setOpen(false)} asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" onClick={() => setOpen(false)} asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link" onClick={() => setOpen(false)} asChild>
            <Link href="#skill">Skill</Link>
          </Button>
          <Button variant="link" onClick={() => setOpen(false)} asChild>
            <Link href="#project">Project</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <FileDown /> Download CV
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navlinks;
