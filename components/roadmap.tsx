"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
export default function Roadmap() {
  return (
    <div className="mt-20 w-full py-5 sm:py-10  rounded-md ">
      <h1 className="text-5xl font-bold" id="services">
        Roadmap
      </h1>
      <Carousel className="w-full mt-20">
        <CarouselContent>
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  src={`/roadmap/${index + 1}.jpg`}
                  width={1000}
                  height={500}
                  alt="roadmap"
                  className="rounded-md border-2 shadow-md"
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
