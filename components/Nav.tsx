"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skill",
    path: "/skill",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitaliz font-bold hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};
export default Nav;
