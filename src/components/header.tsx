"use client";
import type React from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        const element = sectionId === "home" ? document.body : document.getElementById(sectionId);
        if (element) {
          const offsetTop = sectionId === "home" ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (sectionId === "home" ? window.innerHeight : element.offsetHeight);
          
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
    setIsMenuOpen(false);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      const button = document.getElementById("menu-button");
      
      if (menu && button && !menu.contains(e.target as Node) && !button.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="text-white py-4 fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/1">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation - Show on medium screens and above */}
        <nav className="hidden lg:flex items-center space-x-2 bg-[#A0B9F3] p-3 rounded-4xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-200 overflow-y-auto ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "hover:text-white hover:bg-gray-800"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Download Button - Show on medium screens and above */}
          <Button
            size="lg"
            className="hidden md:flex px-6 py-3 lg:px- lg:py-8 rounded-4xl transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              background: "linear-gradient(90deg, #1D4EC2 0%, #4E83FF 100%)",
              color: "#ffffff",
              border: "none",
              boxShadow: "0 4px 12px rgba(29, 78, 194, 0.4)",
            }}
          >
            <div className="flex gap-3 items-center">
              <span className="text-lg">Download App</span>
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-l-2 border-white shadow-none">
                <span className="text-lg">→</span>
              </div>
            </div>
          </Button>

          {/* Mobile Menu Button - Show on medium screens and below */}
          <button
            id="menu-button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bg-blue-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-blue-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-blue-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Show on medium screens and below */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-full left-0 right-0 bg-gradient-to-b from-[#1D4EC2] to-[#4E83FF] shadow-lg transition-all duration-300 ease-in-out w-[250px] ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{ height: isMenuOpen ? 'calc(100vh - 80px)' : '0' }}
      >
        <nav className="container mx-auto px-4 py-6 h-full flex flex-col ">
          <ul className="flex flex-col space-y-6 flex-grow justify-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`block px-6 py-4 rounded-xl transition-all duration-200 text-center text-xl font-semibold ${
                    activeSection === item.id
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Download Button */}
          <div className="mt-8 pb-8 px-4">
            <Button
              size="lg"
              className="w-full py-5 rounded-xl transition-all duration-300 font-semibold text-lg"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                color: "#1D4EC2",
                border: "none",
                boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="flex gap-3 items-center justify-center">
                <span className="text-lg">Download App</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 shadow-none">
                  <span className="text-lg text-white">→</span>
                </div>
              </div>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}