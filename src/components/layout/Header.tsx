"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect shadow-lg py-3" : "bg-white py-4",
      )}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "font-heading font-bold text-accent-brown transition-all duration-300",
              isScrolled ? "text-2xl" : "text-3xl",
            )}
          >
            NDB Nuisibles
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="relative">
                {item.subItems ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-text hover:text-accent-brown transition-colors duration-200">
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-text hover:text-accent-brown hover:bg-neutral-light rounded-md transition-all duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-text hover:text-accent-brown transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${SITE_CONFIG.links.tel}`}
              className="hidden sm:flex items-center space-x-2 btn-urgent"
            >
              <Phone className="w-4 h-4" />
              <span>Urgence 24/7</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-text hover:text-accent-brown transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-neutral-light">
            {NAVIGATION_ITEMS.map((item) => (
              <div key={item.label} className="py-2">
                {item.subItems ? (
                  <>
                    <div className="font-semibold text-text px-4 py-2">
                      {item.label}
                    </div>
                    <div className="pl-4">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-neutral-dark hover:text-accent-brown transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-text hover:text-accent-brown transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <a
                href={`tel:${SITE_CONFIG.links.tel}`}
                className="btn-urgent w-full text-center"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Urgence 24/7
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
