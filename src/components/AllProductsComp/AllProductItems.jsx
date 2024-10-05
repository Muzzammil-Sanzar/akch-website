import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import favorite from "../../assets/favorite.svg";

export default function AllProductItems() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-[60px]">
        {[...Array(8)].map((card, index) => (
          <div key={index} className='space-y-3 cursor-pointer' >
            <div className='rounded-xl w-full h-[302px] relative overflow-hidden'>
              <Link to={"/product"}>
                <img className='object-cover w-full h-full' src={"https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="card" width={270} height={302} />
              </Link>
              <div className='absolute top-3.5 right-3.5  hover:scale-105 duration-200'>
                <img src={favorite} alt='favorite' />
              </div>
            </div>
            <div>
              <Link to={"/product"}>
                <p className="font-medium capitalize">high ghee tirunelvali halwa</p>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-lg">₹ 300 <span className="text-xs text-gray-250 font-normal">/500 gm</span></p>
                  </div>
                  <div>
                    <div className="flex items-center justify-end text-xs gap-1">
                      <div className="text-orange-150 flex items-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-150">(100+)</p>
                      </div>
                      <p>{""}</p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/cart"}>
                <button className="rounded-full border border-orange-150 text-sm font-semibold py-3 w-full hover:bg-orange-150 hover:text-white">Add to Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
