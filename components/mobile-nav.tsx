"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Beaker,
  BoxSelect,
  Clock,
  Dumbbell,
  HardDrive,
  Ruler,
  Thermometer,
  Triangle,
} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">Unitsconverter</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <span className="font-semibold">Converters</span>
            {converters.map((converter) => (
              <MobileLink
                href={converter.href}
                onOpenChange={setOpen}
                key={converter.title}
              >
                {converter.title}
              </MobileLink>
            ))}

            <MobileLink
              href="/blog"
              className="font-bold"
              onOpenChange={setOpen}
            >
              Blog
            </MobileLink>
            <MobileLink
              href="/contact"
              className="font-bold"
              onOpenChange={setOpen}
            >
              Contact
            </MobileLink>
            <MobileLink
              href="/privacy"
              className="font-bold"
              onOpenChange={setOpen}
            >
              Privacy Policy
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
