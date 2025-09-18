import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type CardProps = {
  id: number;
  img: string;
  title: string;
  des: string;
  iconLists: string[];
  link: string;
  current: number;
};

const CardProject = ({
  id,
  img,
  current,
  title,
  des,
  iconLists,
  link,
}: CardProps) => {
  return (
    <Card
      className={cn("bg-secondary  transition-all duration-500 pb-6 ", {
        "opacity-30": id - 1 !== current - 1,
      })}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video object-cover">
          <Image
            src={img}
            className="rounded-t-xl w-full"
            alt=""
            width={600}
            height={500}
          />
        </div>

        <div className=" px-6 flex flex-col justify-between">
          <h2 className="font-semibold text-primary text-lg">{title}</h2>
          <p className="mt-1 text-xs text-muted-foreground h-20">{des}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-background lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <Image src={icon} alt="icon5" className="p-2" fill />
                </div>
              ))}
            </div>
            <Button asChild size="sm" className="font-semibold">
              <Link href={link} target="_blank">
                Preview
                <FiArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProject;
