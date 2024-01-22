import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { HelpCircle, Rocket } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="mt-40 w-full">
      <h1 className="text-5xl font-bold" id="about">
        About us.
      </h1>
      <div className="flex flex-col md:flex-row justify-evenly space-x-4 mt-10">
        <Card className="h-[300px]">
          <CardHeader className="text-2xl font-bold items-center flex-row">
            <HelpCircle className="mr-2" /> Who we are
          </CardHeader>

          <CardContent className="flex aspect-square items-start justify-center p-6">
            <span className="text-xl">
              We are a team of young and passionate developers who are dedicated
              to providing the best services to our clients. We believe in the
              power of technology and we are always ready to help you bring your
              ideas to reality.
            </span>
          </CardContent>
        </Card>
        <Card className="h-[300px]">
          <CardHeader className="text-2xl font-bold items-center flex-row">
            <Rocket className="mr-2" /> Our Mission
          </CardHeader>

          <CardContent className="flex aspect-square items-start justify-center p-6">
            <span className="text-xl">
              {" "}
              Our Mission At Webifyr is to empower businesses with cutting-edge
              web solutions that not only meet but exceed their expectations. We
              believe in the transformative power of well-executed web design
              and development to elevate brands, drive engagement, and deliver
              measurable results.
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
