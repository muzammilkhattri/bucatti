import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import service1 from "../public/service-1.svg";
import Image from "next/image";
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
    title: "Website Maintenance and Support",
    description:
      "Regular updates, bug fixes, and security patches.Monitoring website performance and addressing issues promptly.",
  },
  {
    title: "Web Hosting and Domain Management",
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
    <div className="mt-40 w-full bg-primary p-20 text-primary-foreground rounded-md">
      <h1 className="text-5xl font-bold" id="services">
        Services
      </h1>
      <p className="text-2xl font-semibold text-gray-800">
        Here is a list of all our services.
      </p>
      <div className="flex flex-row flex-wrap justify-between">
        {services.map((service) => (
          <div key={service.title} className="flex flex-row w-[40%]">
            <Card className="mt-10 hover:border-white hover:border-3">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
