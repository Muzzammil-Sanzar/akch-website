import CommonPadding from "../layouts/CommonPadding";
import CommonSizes from "../layouts/CommonSizes";
import logo from '../assets/logo.svg'
import Categories from "../utility/Categories";
import Products from "../utility/Products";
import { IoSearchOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";


export default function Navbar() {
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
              <div className="flex items-center gap-1">
                <img src={logo} alt="logo" />
                <h2 className="text-xl akch text-orange-150">AKCH</h2>
              </div>
              <div className='lg:flex items-center gap-4 xl1:gap-[30px] hidden'>
                <p>Home</p>
                <Categories />
                <Products />
                <p>About Us</p>
                <p>Contact Us</p>
              </div>
              <div className=" flex items-center gap-6 xl:gap-10 xl1:gap-20">
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
                  <button className="font-semibold">Sign Up</button>
                  <button className="font-semibold text-sm text-white bg-orange-150 rounded-full py-2 px-9">Login</button>
                </div>
              </div>
            </div>
          </CommonPadding>
        </div>
      </CommonSizes>
    </div>
  )
}
