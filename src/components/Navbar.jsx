import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";
import logo from '../assets/logo.svg'
import Categories from "../utility/Categories";
import Products from "../utility/Products";
import { IoSearchOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from "react-router-dom";
import LoginModal from "./login/LoginModal";
import SignUP from "./login/SignUp";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUP, setIsSignUp] = useState(false);
  return (
    <div className=" ">
      <div className="bg-orange-150 text-white text-xs py-3  ">
        <CommonSizes>
          <CommonPadding>
            <div className="flex items-center justify-end gap-1 divide-x divide-white">
              <p className="wf"><span className="text-gray-150">Need help?</span> contact@example.com </p>
              <p className="ps-1">+008564201320</p>
            </div>
          </CommonPadding>
        </CommonSizes>
      </div>
      <CommonSizes>
        <div className="border-b border-orange-250">
          <CommonPadding>
            <div className="flex items-center justify-between py-6">
              <Link to={'/'}>
                <div className="flex items-center gap-1">
                  <img src={logo} alt="logo" />
                  <h2 className="text-xl akch text-orange-150">AKCH</h2>
                </div>
              </Link>
              <div className='llg:flex items-center gap-4 xl1:gap-[30px] hidden'>
                <Link to={"/"} className="cursor-pointer">
                  <p>Home</p>
                </Link>
                <Categories />
                <Products />
                <p>About Us</p>
                <p>Contact Us</p>
              </div>
              <div className=" hidden lg:flex items-center gap-6 xl:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="bg-orange-250 p-3 rounded-full">
                    <IoSearchOutline className="w-5 h-5" />
                  </div>
                  <div className="bg-orange-250 p-3 rounded-full">
                    <GoBell className="w-5 h-5" />
                  </div>
                  <div className="bg-orange-250 p-3 rounded-full">
                    <HiOutlineShoppingBag className="w-5 h-5" />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={e => setIsSignUp(true)} className="font-semibold">Sign Up</button>
                  <button onClick={e => setIsOpen(true)} className="font-semibold text-sm text-white bg-orange-150 rounded-full py-2 px-9">Login</button>
                </div>
              </div>
              <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-orange-150">
                  {menuOpen ? <AiOutlineClose className="w-6 h-6" /> : <AiOutlineMenu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </CommonPadding>
        </div>
      </CommonSizes>
      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen z-40 bg-white transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="h-full px-5 py-16 overflow-y-auto">
          <ul className="space-y-6 font-semibold text-gray-800">
            <li className="cursor-pointer"><Link to={"/"}><p>Home</p></Link></li>
            <li><Categories /></li>
            <li><Products /></li>
            <li><p>About Us</p></li>
            <li><p>Contact Us</p></li>
            <li className="flex gap-4">
              <button className="font-semibold">Sign Up</button>
              <button className="font-semibold text-sm text-white bg-orange-150 rounded-full py-2 px-9">Login</button>
            </li>
          </ul>
        </div>
      </aside>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} setSignUp={setIsSignUp} />
      <SignUP isOpen={isSignUP} setIsOpen={setIsSignUp} setLogin={setIsOpen} />
    </div>
  )
}
