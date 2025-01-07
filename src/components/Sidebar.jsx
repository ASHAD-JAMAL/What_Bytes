"use client";
import { TfiMedallAlt } from "react-icons/tfi";
import { FiBarChart2 } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const location = usePathname();
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive design
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view if less than 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle close sidebar by clicking outside
  const closeSidebar = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <div>
      {/* Overlay when sidebar is open on mobile */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white border-r-2 transition-all duration-300 z-20 ${
          isOpen ? "w-[250px]" : "w-0"
        } sm:w-[250px] sm:static sm:border-0 sm:z-0`}
      >
        {/* Close Button for mobile */}
        {isOpen && isMobile && (
          <div className="sm:hidden p-4 text-black">
            <IoClose
              size={30}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
        )}

        {/* Sidebar Content */}
        <div
          className={`md:pt-36 space-y-10 pr-5 ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div
            className={`flex text-end gap-3 items-end cursor-pointer px-4  ${
              location === "/"
                ? "text-blue-500 bg-blue-gray-50 rounded-r-full py-4"
                : "text-black"
            }`}
            onClick={() => navigate.push("/")}
          >
            <FiBarChart2 className={`mb-1`} size={28} />
            <h1 className={`text-lg font-semibold`}>Dashboard</h1>
          </div>

          <div
            className={`flex items-end gap-3 cursor-pointer px-4 ${
              location === "/skilltest"
                ? "text-blue-500 bg-blue-gray-50 rounded-r-full py-4"
                : "text-black"
            }`}
            onClick={() => navigate.push("/skilltest")}
          >
            <TfiMedallAlt className={`mb-1`} size={28} />
            <h1 className={`text-lg font-semibold`}>Skill Test</h1>
          </div>

          <div
            className={`flex items-end gap-3 cursor-pointer px-4 ${
              location === "/internship"
                ? "text-blue-500 bg-blue-gray-50 rounded-r-full py-4"
                : "text-black"
            }`}
            onClick={() => navigate.push("/internship")}
          >
            <BiFileBlank className={`mb-1`} size={28} />
            <h1 className={`text-lg font-semibold`}>Internship</h1>
          </div>
        </div>
      </div>

      {/* Hamburger Button for mobile */}
      {!isOpen && isMobile && (
        <div className="sm:hidden opacity-0 p-4 fixed top-1 left-6 z-20">
          <HiMenu
            size={30}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
