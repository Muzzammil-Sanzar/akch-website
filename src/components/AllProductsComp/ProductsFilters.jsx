import { useState } from "react";
import { IoCheckmark, IoChevronDownOutline, IoSearchOutline } from "react-icons/io5";
import { VscLayersActive } from "react-icons/vsc";

export default function ProductsFilters() {
  // Setting up state to hold the price range value
  const [price, setPrice] = useState(40); // Default value is 40

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div className="w-fit relative">
      <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
      <label htmlFor="sidebar-toggle" className="inline-flex items-center text-sm text-gray-500 rounded-lg p-2.5 bg-orange-150/10 lg:hidden hover:bg-orange-150/40 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" fillRule="evenodd" fill='#EFA937' d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </label>

      <aside id="sidebar-multi-level-sidebar" className="absolute lg:relative top-0 border bg-white shadow overflow-hidden rounded-md z-40 lg:w-72 px-2.5 py-5 transition-transform -translate-x-96 duration-700 ease-in-out peer-checked:translate-x-0 lg:translate-x-0" aria-label="Sidebar">
        <div className="h-full overflow-y-auto space-y-7">
          <div className="flex justify-end">
            <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
            <label
              htmlFor="sidebar-toggle"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg p-2.5 bg-orange-150/15 lg:hidden hover:bg-orange-150/40 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            >
              <span className="sr-only">Toggle sidebar</span>
              {/* Hamburger Menu (3 lines) or Close (X) based on checkbox state */}
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Hamburger icon (3 lines), hidden when checkbox is checked */}

                {/* Cross (X) icon, shown when checkbox is checked */}
                <path
                  className=""
                  fill="#EFA937"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              </svg>
            </label>
          </div>
          <ul className="space-y-5">
            <li className="space-y-5">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Filter By</p>
                <button className="text-sm font-semibold text-gray-250">Reset All</button>
              </div>
              <div className="flex items-center justify-between bg-white p-2 border border-gray-300 rounded-full overflow-hidden max-w-md">
                <input
                  type="text"
                  className="flex-grow p-2 text-gray-250 focus:outline-none max-w-48 rounded-l-full"
                  placeholder="Search Here"
                />
                <button className="bg-orange-150 hover:bg-orange-400 text-white rounded-full px-5 py-2.5 flex items-center gap-1">
                  <IoSearchOutline className="w-4 h-4" />
                </button>
              </div>
            </li>
            <li>
              <div className="py-2.5 border-b-2">
                <h2 className="text-lg font-semibold text-gray-250">Products Category</h2>
              </div>
              <form>
                <div className="text-[#3A4F66] p-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <input name="category" id="products" type="radio" className="w-6 h-6 rounded-full outline-none border-black boder-2" />
                    <label htmlFor="products" className="text-sm">All Products</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input name="category" id="sweets" type="radio" className="w-6 h-6 rounded-full outline-none border-black boder-2" />
                    <label className="text-sm" htmlFor='sweets'>Sweets</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input name="category" id="packing" type="radio" className="w-6 h-6 rounded-full outline-none border-black boder-2" />
                    <label className="text-sm" htmlFor='packing'>Secial Packing</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input name="category" id="tea" type="radio" className="w-6 h-6 rounded-full outline-none border-black boder-2" />
                    <label className="text-sm" htmlFor='tea'>Tea & Coffee</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input name="category" id="halwa" type="radio" className="w-6 h-6 rounded-full outline-none border-black boder-2" />
                    <label className="text-sm" htmlFor='halwa'>Halwa</label>
                  </div>
                </div>
              </form>

            </li>
            <li className="space-y-8">
              <div className="py-2.5 border-b-2">
                <h2 className="text-lg font-semibold text-gray-250">Price</h2>
              </div>
              <div className="space-y-5">
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="range"
                    id="priceRange"
                    min="40"
                    max="500"
                    step="10"
                    value={price}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer range-thumb"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-[#C84A4A]">
                  <span className="text-gray-150 mr-2.5">Range:</span> ${price} - $500
                </p>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
