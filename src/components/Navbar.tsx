import React, { useState, useMemo } from "react";
import { Link } from "gatsby";
import Button from "./common/Button";
import { NavLinks } from "../types/NavbarTypes";
import NavLogo from "../assets/images/nav-logo.svg";
import MobileMenu from "../assets/images/mobile-nav-icon.svg";

interface NavbarPropsType {
  setIsModalTitle: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalShow: (state: boolean) => void;
}
function Navbar({ setIsModalShow, setIsModalTitle }: NavbarPropsType) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const isModalShow = () => {
    setIsModalTitle(true);
    setIsModalShow(true);
  };
  const openModalFromMobile = () => {
    setIsModalTitle(true)
    setIsModalShow(true);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const getNavbarHeight = () => {
          if (window.innerWidth >= 1024) return 88;
          if (window.innerWidth >= 640) return 76;
          return 64;
        };

        const navbarHeight = getNavbarHeight();
        const elementTop = element.offsetTop;

        window.scrollTo({
          top: elementTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 inset-x-0 px-4 sm:px-[120px] bg-bgPrimary z-[999] h-[64px] sm:h-[76px] lg:h-[88px] w-full ">
      <nav className="flex items-center justify-between h-full">
        <div>
          <Link to="/" aria-label="Home">
            <NavLogo className="w-[118px] md:w-[237px] " />
          </Link>
        </div>

        <div className="flex justify-center items-center gap-10">
          <div className="hidden lg:flex flex-1 justify-center items-center text-[24px] leading-normal tracking-normal space-x-9">
            {NavLinks.map((link) => {
              return (
                <button
                  key={link.url}
                  className="font-['Prata'] text-primaryText font-normal text-lg xl:text-xl 2xl:text-2xl tracking-normal hover:opacity-80 transition-opacity"
                  onClick={() => scrollToSection(link.url)}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block flex-shrink-0 ml-6">
            <Button onclick={isModalShow} label={"Book a site Visit"} />
          </div>
        </div>
        <div className="flex-shrink-0 lg:hidden ml-auto">
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <MobileMenu className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-bgPrimary shadow-2xl transform transition-transform duration-300 ease-in-out z-[70] lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          <header className="flex justify-between items-center p-6 border-b border-gray-200">
            <Link to="/" aria-label="Home">
              <NavLogo className="h-8" />
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          <nav className="flex-1 px-6 py-8">
            <ul className="flex flex-col space-y-6">
              {NavLinks.map((link) => {
                return (
                  <li key={link.url}>
                    <button
                      className="font-['Prata'] text-primaryText font-normal text-xl leading-[100%] tracking-[0] hover:opacity-80 transition-opacity"
                      onClick={() => scrollToSection(link.url)}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer className="p-6 border-t border-gray-200">
            <Button onclick={openModalFromMobile} label={"Book a site Visit"} />
          </footer>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
