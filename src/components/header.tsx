"use client";

import type React from "react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "features", label: "Features", href: "#features" },
    { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
    { id: "faq", label: "FAQs", href: "#faq" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element =
          sectionId === "home"
            ? document.body
            : document.getElementById(sectionId);

        if (element) {
          const offsetTop = sectionId === "home" ? 0 : element.offsetTop;
          const offsetBottom =
            offsetTop +
            (sectionId === "home" ? window.innerHeight : element.offsetHeight);

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-gray-900 text-white py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          size="lg"
          className="px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105 font-semibold"
          style={{
            background: "linear-gradient(90deg, #1D4EC2 0%, #4E83FF 100%)",
            color: "#ffffff",
            border: "none",
            boxShadow: "0 4px 12px rgba(29, 78, 194, 0.4)",
          }}
        >
          <div className="flex gap-3 items-center">
            <span className="text-lg">Download App</span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/30">
              <span className="text-lg">→</span>
            </div>
          </div>
        </Button>
      </div>
    </header>
  );
}
