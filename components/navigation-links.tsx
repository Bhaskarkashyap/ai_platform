"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link";


type NavLink = {
  name: string;
 aeroIcon?: boolean; 
};

export default function NavbarLinks() {

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { name: "Product", aeroIcon: true },
    { name: "Docs" },
    { name: "Enterprise" },
    { name: "Pricing" },
    { name: "Blog" },
  ];

  return (
    <ul className="ml-10 md:flex gap-x-6 text-sm font-medium hidden ">
      {navLinks.map((link) => (
        <li
          key={link.name}
          onMouseEnter={() => link.aeroIcon && setHoveredLink(link.name)}
          onMouseLeave={() => link.aeroIcon && setHoveredLink(null)}
          className="flex items-center gap-x-2 cursor-pointer"
        >
          <Link href="" className="flex items-center gap-x-2">
            <span>{link.name}</span>
            {link.aeroIcon && (
              hoveredLink === link.name ? (
                <ChevronUp size="16px" />
              ) : (
                <ChevronDown size="16px" />
              )
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
