// File: Likely components/SocialMedia.jsx
import React from "react";
import data from "@/public/ok.json";
import { iconMap } from "@/lib/socialIcons";

export default function SocialMedia() {
  const socialLinks = data.socialMedia || [];

  return (
    <div className="flex justify-center mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <ul className="flex gap-3 sm:gap-4 flex-wrap justify-center">
        {socialLinks.map((link, index) => {
          const Icon = iconMap[link.name];
          if (!Icon) return null; 
          return (
            <li key={link.name || index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`flex items-center justify-center w-10 h-8 sm:w-12 sm:h-10 rounded-full text-white text-sm sm:text-xl shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-xl ${link.color}`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}