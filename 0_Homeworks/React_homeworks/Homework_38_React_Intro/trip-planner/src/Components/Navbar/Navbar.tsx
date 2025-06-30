import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  onClickNavLink: (page: string) => void;
}

export default function Navbar({ onClickNavLink }: NavbarProps) {
  const navLinks: string[] = [
    "Home",
    "Europe",
    "Asia",
    "Africa",
    "Oceania",
    "Americas",
  ];

  return (
    <nav className="Navbar">
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <a onClick={() => onClickNavLink(link)} href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
