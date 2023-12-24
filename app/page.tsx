import Image from "next/image";
import Cover from "../public/cover.svg";
import Services from "@/components/services";
import Getaquote from "@/components/getaquote";
import About from "@/components/aboutus";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <section className="flex flex-col sm:flex-row justify-between w-full">
        <div className="flex flex-col justify-center items-start sm:w-1/2 w-full">
          <h1 className="sm:text-7xl text-5xl font-bold ">
            Turning Clicks Into Conversions, <br></br>
            Dreams Into <span className="text-gray-400">Reality.</span>
          </h1>
          <p className="text-2xl font-semibold"></p>
        </div>
        <div className="flex justify-center mt-12 sm:mt-0 items-center sm:w-1/2 w-full  rounded-md rotate-6">
          <div className="w-2/3 bg-primary rounded-md">
            <Image
              src={Cover}
              className="transform -scale-x-100"
              alt="Float Doodle"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <Services />
      <Getaquote />
      <About />
    </main>
  );
}
