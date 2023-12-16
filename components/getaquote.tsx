import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Getaquote() {
  return (
    <section className="flex flex-row justify-between w-full mt-20">
      <div className="flex flex-col justify-center items-start w-1/2">
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
        </form>
      </div>
    </section>
  );
}
