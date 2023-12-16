"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import * as React from "react";
import Script from "next/script";
import { Button } from "./ui/button";
import { ArrowRight, FilePlus2 } from "lucide-react";
import Link from "next/link";

export default function Getaquote() {
  return (
    <section className="flex flex-row justify-between w-full mt-20">
      <div className="flex flex-col justify-start items-start w-1/2">
        <h1 className="text-7xl font-bold ">
          Get a quote, <br></br>
          <span className="text-gray-400">It all starts here.</span>
        </h1>
        <p className="text-2xl font-semibold"></p>
      </div>
      <div className="flex items-center w-1/2 rounded-md">
        <form className="w-full">
          <div className="flex flex-row justify-between w-full">
            <Input type="text" placeholder="Name" className="w-[48%]" />
            <Input
              type="text"
              placeholder="Email Address"
              className="w-[48%]"
            />
          </div>
          <Textarea cols={8} rows={10} className="mt-4" placeholder="Message" />
          <Select>
            <SelectTrigger className="mt-4 bg-[#1b1b1b]">
              <SelectValue placeholder="Budget Range" />
            </SelectTrigger>
            <SelectContent className="bg-[#1b1b1b] text-foreground">
              <SelectGroup>
                <SelectLabel>Budget</SelectLabel>
                <SelectItem value="1k">1k</SelectItem>
                <SelectItem value="1k-5k">1k-5k</SelectItem>
                <SelectItem value="5k-10k">5k-10k</SelectItem>
                <SelectItem value="10k-25k">10k-25k</SelectItem>
                <SelectItem value="25k+">25k+</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="file" className="mt-4 hidden" id="documents" />
          <Button
            className="bg-[#1b1b1b] text-foreground mt-4 w-full h-11 border-[#303030] border"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("documents").click();
            }}
          >
            <FilePlus2 className="mr-2" size="15" />
            Relevant Document
          </Button>

          <div className="flex flex-row mt-4 justify-between">
            <div>
              <p className="text-sm text-[#969697]">Hate contact forms?</p>
              <Link
                href="mailto:hello@webifyr.co"
                className="text-sm hover:underline"
              >
                hello@webifyr.co
              </Link>
            </div>
            <Button type="submit" className="float-right h-11">
              Send message <ArrowRight className="ml-2" size="14" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
