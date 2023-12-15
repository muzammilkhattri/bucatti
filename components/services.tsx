import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  return (
    <div className="mt-20 w-full">
      <h1 className="text-5xl font-bold">Our Services</h1>

      <section className="flex flex-row justify-between w-full mt-20 flex-wrap">
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              We build websites that are fast, secure, and easy to manage.
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </div>
  );
}
