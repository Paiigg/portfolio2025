"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { website, cad } from "@/lib/data";
import CardProject from "./card-project";

export default function ProjectSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="project"
      className="mx-auto max-w-screen-lg h-screen flex items-center p-4 flex-col  justify-center gap-10"
    >
      <h2 className=" font-bold text-4xl">Project</h2>
      <Tabs defaultValue="website" className="w-full">
        <TabsList className=" p-0 bg-background justify-start border-b rounded-none">
          <TabsTrigger
            value="website"
            className="rounded-none bg-background h-full data-[state=active]:shadow-none border border-transparent border-b-border data-[state=active]:border-border data-[state=active]:border-b-background -mb-[2px] rounded-t"
          >
            Website
          </TabsTrigger>
          <TabsTrigger
            value="cad"
            className="rounded-none bg-background h-full data-[state=active]:shadow-none border border-transparent border-b-border data-[state=active]:border-border data-[state=active]:border-b-background -mb-[2px] rounded-t"
          >
            CAD
          </TabsTrigger>
        </TabsList>
        <TabsContent value="website">
          <Carousel
            setApi={setApi}
            className="mx-auto w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {website.map(({ id, title, des, img, iconLists, link }) => (
                <CarouselItem key={id} className=" md:basis-1/3">
                  <CardProject
                    id={id}
                    title={title}
                    des={des}
                    img={img}
                    current={current}
                    iconLists={iconLists}
                    link={link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="absolute md:hidden mt-4 text-center text-sm text-muted-foreground mr-auto ">
              {current} / {count}
            </div>
          </Carousel>
        </TabsContent>
        <TabsContent value="cad">
          <Carousel
            setApi={setApi}
            className="mx-auto w-full"
            opts={{ loop: true }}
          >
            <CarouselContent>
              {cad.map(({ id, title, des, img, iconLists, link }) => (
                <CarouselItem key={id} className=" md:basis-1/3">
                  <CardProject
                    id={id}
                    title={title}
                    des={des}
                    img={img}
                    current={current}
                    iconLists={iconLists}
                    link={link}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="absolute md:hidden mt-4 text-center text-sm text-muted-foreground mr-auto ">
              {current} / {count}
            </div>
          </Carousel>
        </TabsContent>
      </Tabs>

      {/* <Carousel
        setApi={setApi}
        className="mx-auto w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <CarouselItem key={id} className=" md:basis-1/3">
              <Card
                className={cn(
                  "bg-secondary  transition-all duration-500 pb-6",
                  {
                    "opacity-30": id - 1 !== current - 1,
                  }
                )}
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

                  <div className="-mt-4 px-6">
                    <h2 className="font-semibold text-primary">{title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{des}</p>
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
                            <Image
                              src={icon}
                              alt="icon5"
                              className="p-2"
                              fill
                            />
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="absolute md:hidden mt-4 text-center text-sm text-muted-foreground mr-auto ">
          {current} / {count}
        </div>
      </Carousel> */}
    </section>
  );
}
