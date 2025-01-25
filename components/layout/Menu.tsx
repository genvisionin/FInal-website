"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationItem {
  id: string;
  label: string;
}

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string>("");

  const navigationItems: NavigationItem[] = [
    { id: "services", label: "Services" },
    { id: "industry", label: "Industry" },
    { id: "research", label: "Research" },
    { id: "pricing", label: "Pricing" },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="d-none d-lg-flex">
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
          {navigationItems.map(({ id, label }) => (
            <li key={id} className=" ">
              <Link
                href={`/#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={` ${
                  activeSection === id ? "text-primary" : "text-gray-800"
                } after:content-[''] fw-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  activeSection === id ? "after:scale-x-100" : ""
                }`}>
                {label}
              </Link>
            </li>
          ))}
          {/* <li className="nav-item">
            <Link
              className="nav-link fw-bold d-flex align-items-center"
              href="/page-contact-1">
              Contact
            </Link>
                  </li> */}
        </ul>
      </div>
    </>
  );
}
