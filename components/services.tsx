"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const services = [
  {
    title: "Website Development",
    description:
      "Based on client requirements, We build websites that are fast, secure, and easy to manage.Responsive design for optimal user experience across devices.",
  },
  {
    title: "E-commerce Development",
    description:
      "Building online stores with secure payment gateways.Integration with inventory and order management systems.",
  },
  {
    title: "CMS Devlopment",
    description:
      "Creating websites using popular CMS platforms like WordPress, Drupal, or Joomla.Customizing CMS for specific client needs.",
  },
  {
    title: "Web Design",
    description:
      "UI/UX design for visually appealing and user-friendly websites.Prototyping and wireframing services.",
  },
  {
    title: "Front-End Development:",
    description:
      "Implementing client-side functionalities using HTML, CSS, and JavaScript.Ensuring cross-browser compatibility and responsive design.",
  },
  {
    title: "Back-End Development",
    description:
      "Server-side scripting and database management,Building robust and scalable web applications.",
  },
  {
    title: "Web Application Development",
    description:
      "Creating interactive and dynamic web applications, Using frameworks like React, Angular, or Vue.js, Developing single-page applications (SPAs) and progressive web apps (PWAs).",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, bug fixes, and security patches.Monitoring website performance and addressing issues promptly.",
  },
  {
    title: "Hosting Management",
    description:
      "Assisting clients with domain registration and hosting setup.Providing ongoing support for server maintenance and performance optimization.",
  },
  {
    title: "SEO Optimization",
    description:
      "Implementing on-page and technical SEO best practices.Improving website ranking and visibility on search engines.",
  },
];
export default function Services() {
  return (
    <div className="mt-40 w-full py-5 sm:py-20 text-primary-foreground rounded-md ">
      <h1 className="text-6xl font-bold" id="services">
        Our services
      </h1>
      <p className="text-xl mt-4  text-gray-300">List of all our services.</p>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full mt-8"
      >
        <CarouselContent>
          {services.map((service) => (
            <CarouselItem
              key={service.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-[300px]">
                  <CardHeader className="text-2xl font-bold">
                    {service.title}
                  </CardHeader>

                  <CardContent className="flex aspect-square items-start justify-center p-6">
                    <span className="text-xl">{service.description}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#151419]" />
        <CarouselNext className="bg-[#151419]" />
      </Carousel>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between"></div>
    </div>
  );
}
