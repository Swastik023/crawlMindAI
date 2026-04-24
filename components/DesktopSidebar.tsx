"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/data";
import UserAvailableCreditsBadge from "./UserAvailableCreditsBadge";

function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden relative md:flex flex-col min-w-[280px] max-w-[280px] h-screen w-full bg-background dark:bg-secondary/10 border-r border-border">
      {/* Logo + Tagline */}
      <div className="flex flex-col items-center gap-1 border-b border-border px-4 py-5">
        <Logo />
        <p className="text-[11px] text-muted-foreground tracking-wider font-medium mt-1">
          Visual Data Extraction with AI
        </p>
      </div>

      {/* Credits Badge */}
      <div className="p-2 pt-3">
        <UserAvailableCreditsBadge />
      </div>

      {/* Navigation */}
      <div className="flex flex-col p-2 flex-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                pathname === route.href ? "sidebarActiveitem" : "sidebarItem",
            })}
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        ))}
      </div>

      {/* Author Signature Footer */}
      <div className="border-t border-border px-4 py-3 text-center">
        <p className="text-[11px] text-muted-foreground/60 tracking-wide">
          Developed by{" "}
          <span className="text-muted-foreground font-medium">
            Swastik Agnihotri
          </span>
        </p>
      </div>
    </div>
  );
}

export default DesktopSidebar;
