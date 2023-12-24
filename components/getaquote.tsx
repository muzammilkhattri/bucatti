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
import { useLogSnag } from "@logsnag/next";
import * as React from "react";
import { Button } from "./ui/button";
import { ArrowRight, FilePlus2 } from "lucide-react";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { useState } from "react";

export default function Getaquote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const { setUserId, track, identify } = useLogSnag();
  const resetInputs = () => {
    setName("");
    setEmail("");
    setBudget("");
    setMessage("");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !budget || !message)
      return toast.error("Please fill all the fields");
    let API = "plane_api_c07a513441fa4e449e3c9370d3e5b20b";
    let description = `Name: ${name} \n Email: ${email} \n Budget: ${budget} \n Message: ${message}`;
    //disable https check

    try {
      let res = track({
        channel: "leads",
        event: "New Leads",
        icon: "💰",
        notify: true,
        description: description,
      });
      console.log(res);
      toast.success(
        "Message sent successfully, we will get back to you soon through your email"
      );
      resetInputs();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section
      className="flex sm:flex-row flex-col justify-between w-full mt-20"
      id="quote"
    >
      <Toaster position="bottom-right" />
      <div className="flex flex-col justify-start items-start sm:w-1/2 w-full">
        <h1 className="text-7xl font-bold ">
          Get a quote, <br></br>
          <span className="text-gray-400">It all starts here.</span>
        </h1>
        <p className="text-2xl font-semibold"></p>
      </div>
      <div className="flex items-center sm:w-1/2 w-full mt-10 sm:mt-0 rounded-md">
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-row justify-between w-full">
            <Input
              type="text"
              placeholder="Name"
              className="w-[48%]"
              onChange={(e) => setName(e.currentTarget.value)}
              required
              value={name}
            />
            <Input
              type="text"
              placeholder="Email Address"
              className="w-[48%]"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              value={email}
            />
          </div>
          <Textarea
            cols={8}
            rows={10}
            className="mt-4"
            placeholder="Message"
            onChange={(e) => setMessage(e.currentTarget.value)}
            required
            value={message}
          />
          <Select
            onValueChange={(e) => {
              setBudget(e);
            }}
            value={budget}
            required
          >
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
