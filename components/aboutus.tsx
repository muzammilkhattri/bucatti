import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <div className="mt-40 w-full">
      <h1 className="text-5xl font-bold" id="about">
        About us.
      </h1>
      <p className="text-2xl font-semibold text-gray-400 mt-6">Who we are.</p>
      <div className="mt-4">
        <p>
          We are a team of young and passionate developers who are dedicated to
          providing the best services to our clients. We believe in the power of
          technology and we are always ready to help you bring your ideas to
          reality.
        </p>
      </div>
      <p className="text-2xl font-semibold text-gray-400 mt-6">Our Mission</p>
      <div className="mt-4">
        <p>
          Our Mission At Webifyr, our mission is to empower businesses with
          cutting-edge web solutions that not only meet but exceed their
          expectations. We believe in the transformative power of well-executed
          web design and development to elevate brands, drive engagement, and
          deliver measurable results.
        </p>
      </div>
    </div>
  );
}
