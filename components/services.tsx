import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "One Page Website",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Web Development",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Web Development",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Web Development",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Web Development",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
  {
    title: "Web Development",
    description: "We build websites that are fast, secure, and easy to manage.",
  },
];
export default function Services() {
  return (
    <div className="mt-40 w-full bg-primary p-20 text-primary-foreground rounded-md">
      <h1 className="text-5xl font-bold">Services</h1>
      <p className="text-2xl font-semibold text-gray-800">
        Here is a list of all our services.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>One Page Website</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We build websites that are fast, secure, and easy to manage.
          </CardDescription>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <section className="flex flex-row justify-between w-full mt-10 flex-wrap ">
        {services.map((service) => (
          <Card key={service.title} className="w-[30%] mt-5">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
