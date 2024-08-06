"use client";

import Image from "next/image";
import React, { useState } from "react";
import { imagesPNG } from "../../utils/images";
import { navLinks } from "./types";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold">
            <a href="#">MyApp</a>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <Image
                  src={imagesPNG.close}
                  alt="close"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={imagesPNG.burger}
                  alt="burger"
                  width={25}
                  height={30}
                />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-gray-200 hover:bg-blue-600">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
