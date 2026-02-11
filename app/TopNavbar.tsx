"use client";
import React, { useEffect, useState } from "react";

function TopNavbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 text-blue-900 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-row gap-4 justify-center items-center py-2">
          <li><a href="/">Home1</a></li>
          <li><a href="/homepage-second">Home2</a></li>
          <li><a href="/homepage-second">Home3</a></li>
        </ul>
        <hr className="border" />
      </div>
    </>
  );
}

export default TopNavbar;
