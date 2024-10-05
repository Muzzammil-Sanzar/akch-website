import React, { useState } from 'react';
import marker from '../assets/marker.svg';
import home from '../assets/home.svg';
import office from '../assets/office.png';

export default function ProfileLocation() {
  const [selectedAddress, setSelectedAddress] = useState('home');
  return (
    <div className="bg-white px-3.5 sm:px-7 py-10 rounded-3xl shadow border space-y-5">
      <h2 className="text-xl font-bold">Address</h2>
      <div className="space-y-4">
        {/* Address: Home */}
        <div
          className={`sm:p-4 flex flex-wrap gap-y-7 items-center justify-center sm:justify-between cursor-pointer `}
          onClick={() => setSelectedAddress('home')}
        >
          <div className="flex flex-wrap gap-y-4 items-center justify-center space-x-4">
            <img
              src={marker} // Placeholder for address image
              alt="My Home"
              className="w-16 h-16"
            />
            <div className='text-center sm:text-start'>
              <h3 className="text-lg font-semibold">My Home</h3>
              <p className="text-gray-250 text-sm">46 Larkrow, Main Street, UK</p>
            </div>
          </div>
          <input
            type="radio"
            checked={selectedAddress === 'home'}
            onChange={() => setSelectedAddress('home')}
            className="form-radio h-5 w-5 text-orange-150"
          />
        </div>

        {/* Address: Office */}
        <div
          className={`sm:p-4 flex flex-wrap gap-y-7 items-center justify-center sm:justify-between cursor-pointer `}
          onClick={() => setSelectedAddress('office')}
        >
          <div className="flex flex-wrap gap-y-4 items-center justify-center space-x-4">
            <img
              src={marker} // Placeholder for address image
              alt="My Office"
              className="w-16 h-16"
            />
            <div className='text-center sm:text-start'>
              <h3 className="text-lg font-semibold">My Office</h3>
              <p className="text-gray-250 text-sm">46 Larkrow, Main Street, UK</p>
            </div>
          </div>
          <input
            type="radio"
            checked={selectedAddress === 'office'}
            onChange={() => setSelectedAddress('office')}
            className="form-radio h-5 w-5 text-orange-150"
          />
        </div>

        {/* Add New Address */}
        <div className="mt-6">
          <h3 className="text-lg sm:text-xl font-bold">Add New Address</h3>
          <div className="mt-5 bg-white px-2.5 sm:px-5 py-3 rounded-xl border  shadow space-y-5">
            <div className="space-y-2.5">
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <input
                id="address"
                type="text"
                // placeholder="Address"
                className="w-full p-2 border rounded-[10px] mb-2"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <label htmlFor="town" className="text-sm font-medium">Town/City</label>
                <input
                  id="town"
                  type="text"
                  // placeholder="Town/City"
                  className="w-full p-2 border border-[#F1F1F1] rounded-[10px]"
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="postcode" className="text-sm font-medium">Postcode/ZIP</label>
                <input
                  id="postcode"
                  type="text"
                  // placeholder="Postcode/ZIP"
                  className="w-full p-2 border rounded-[10px]"
                />
              </div>
            </div>
            <div className="space-y-2.5">
              <p className="text-sm font-medium">Label As</p>
              <div className='flex flex-wrap items-center gap-3.5'>
                <button className='bg-orange-150 px-2.5 pt-[5px] text-white text-sm font-medium rounded-full flex items-center justify-center'>
                  <img src={home} alt='home' />
                  Home
                </button>
                <button className='bg-gray-50 px-2.5 py-1 text-gray-150 text-sm font-medium rounded-full flex items-center justify-center'>
                  <img src={office} alt='home' />
                  Office
                </button>

              </div>
            </div>
            <div className="text-right">
              <button className="mt-4 bg-orange-150 text-white px-4 py-2 font-medium rounded-full hover:bg-orange-150">
                Add New Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
