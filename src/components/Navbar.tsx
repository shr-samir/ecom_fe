import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { X } from "lucide-react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

  const [itemsCount, setItemsCount] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileDropdown = () => setIsProfileOpen(!isProfileOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const cartCounter = () => {
    setItemsCount(itemsCount + 1);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target as Node)
    ) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex justify-between items-center py-5 gap-8 ">
      <Link to="/">
      <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      <ul className="md:flex gap-4 hidden">
        <li>
          <NavLink to="/" className="flex flex-col items-center">
            <p>HOME</p>
            <hr className="w-1/2 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center">
            <p>COLLECTION</p>
            <hr className="w-1/2 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center">
            <p>ABOUT</p>
            <hr className="w-1/2 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center">
            <p>CONTACT</p>
            <hr className="w-1/2 h-[1.5px] bg-gray-700 border-none hidden" />
          </NavLink>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <img
          src={assets.search_icon}
          className="hidden sm:block w-5 cursor-pointer"
          alt="Search Icon"
        />

        <div
          className="group relative"
          onClick={toggleProfileDropdown}
          ref={profileDropdownRef}
        >
          <img
            src={assets.profile_icon}
            className="hidden sm:block w-5 cursor-pointer"
            alt="Profile Icon"
          />
          
          {/* Profile dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 bg-slate-100 text-gray-400 px-5 py-3 mt-1 rounded">
              <div className="flex flex-col w-36 gap-2">
                <a className="hover:text-black cursor-pointer">My Profile</a>
                <Link to="/orders" className="hover:text-black cursor-pointer">
                  Orders
                </Link>
                <button type="button" className="hover:text-black cursor-pointer">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 max-w-5 cursor-pointer"
            alt="Cart Icon"
          />
          <div
            className="absolute w-4 h-4 text-white bg-black rounded-full text-[8px] text-center content-center left-2.5 top-2"
            onClick={cartCounter}
          >
            {itemsCount}
          </div>
        </Link>

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer md:hidden"
          alt="Menu Icon"
          onClick={toggleMenu}
        />
      </div>

      {/* Menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          isMenuOpen ? "w-full" : "hidden"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-4">
            <X onClick={toggleMenu}/>
          </div>
          <ul className="p-4 flex flex-col gap-5">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" onClick={toggleMenu}>
                Collection
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;