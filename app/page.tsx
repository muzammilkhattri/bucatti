import Image from "next/image";
import FloatDoodle from "../public/FloatDoodle.svg";
import Services from "@/components/services";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <section className="flex flex-row justify-between w-full">
        <div className="flex flex-col justify-center items-start w-1/2">
          <h1 className="text-7xl font-bold">
            Think. Design. <br></br>Develop. Launch.{" "}
            <span className="text-gray-400">Repeat.</span>
          </h1>
          <p className="text-2xl font-semibold"></p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <Image
            src={FloatDoodle}
            alt="Web developer"
            width={500}
            height={500}
          />
        </div>
      </section>
      <Services />
    </main>
  );
}
