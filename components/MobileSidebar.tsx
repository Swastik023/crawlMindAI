"use client";
import { routes } from "@/lib/data";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import UserAvailableCreditsBadge from "./UserAvailableCreditsBadge";

function MobileSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="flex container items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] flex flex-col"
            side="left"
          >
            <div className="flex flex-col items-start gap-1 pb-4 border-b border-border">
              <Logo />
              <p className="text-[11px] text-muted-foreground tracking-wider font-medium mt-1 pl-1">
                Visual Data Extraction with AI
              </p>
            </div>
            <UserAvailableCreditsBadge />
            <div className="flex flex-col gap-1 flex-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      pathname === route.href
                        ? "sidebarActiveitem"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon size={18} />
                  {route.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-border pt-3 text-center">
              <p className="text-[11px] text-muted-foreground/60 tracking-wide">
                Developed by{" "}
                <span className="text-muted-foreground font-medium">
                  Swastik Agnihotri
                </span>
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default MobileSidebar;
