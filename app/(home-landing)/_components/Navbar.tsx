"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { headerRoutes } from "@/lib/data";
import { BrainCircuit, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const scrollIntoView = (ele: string) => {
    let element = document.getElementById(ele.substring(1));
    if (!element) return;
    element!.scrollIntoView({ behavior: "smooth" });
  };

  const isMobile = useIsMobile();
  useEffect(() => {
    setIsMobileOpen(false);
  }, [isMobile]);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="p-5 sticky top-0 left-0 z-50">
        {!isMobileOpen ? (
          <MenuIcon className="" onClick={() => setIsMobileOpen(true)} />
        ) : (
          <aside className="h-screen w-full box-border p-5 backdrop-blur-md absolute top-0 left-0 z-50 bg-background/90">
            <XIcon onClick={() => setIsMobileOpen(false)} />
            <div className="mt-5 flex flex-col gap-5 h-full text-center items-center pt-60">
              {headerRoutes.map((route) =>
                route?.button ? (
                  <Button
                    key={route.href}
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl px-6 shadow-lg shadow-blue-500/25 transition-all duration-200 w-max"
                  >
                    <Link href={route.href}>{route.title}</Link>
                  </Button>
                ) : (
                  <span
                    className="text-lg font-light hover:text-white cursor-pointer select-none"
                    key={route.href}
                    onClick={() => scrollIntoView(route.href)}
                  >
                    {route.title}
                  </span>
                )
              )}
            </div>
          </aside>
        )}
      </div>
    );
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center max-w-screen-xl mx-auto w-full py-10 sticky top-0 backdrop-blur-sm z-50 border-b border-white/5">
      <Link className="flex items-center justify-center gap-2" href="#">
        <div className="rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-1.5 shadow-lg shadow-blue-500/20">
          <BrainCircuit className="h-5 w-5 stroke-white" />
        </div>
        <div className="flex items-baseline">
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            CrawlMind
          </span>
          <span className="text-xl font-black text-white">AI</span>
        </div>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {headerRoutes.map((route) =>
          route?.button ? (
            <Link href={route.href} key={route.href}>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl px-6 shadow-lg shadow-blue-500/25 transition-all duration-200">
                {route.title}
              </Button>
            </Link>
          ) : (
            <span
              className="text-sm font-medium text-white/70 hover:text-white cursor-pointer select-none transition-colors duration-150"
              key={route.href}
              onClick={() => scrollIntoView(route.href)}
            >
              {route.title}
            </span>
          )
        )}
      </nav>
    </header>
  );
}

export default Navbar;
