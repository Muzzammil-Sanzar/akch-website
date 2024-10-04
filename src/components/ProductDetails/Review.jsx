import React from 'react'
import { FaStar } from 'react-icons/fa6'
import LeaveRating from './LeaveRating'

export default function Review() {
  return (
    <div className="space-y-9">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div>
        {
          [...Array(3)].map((review, index) => (
            <div key={index} className="bg-white border-b p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                  alt="Profile"
                  className="w-[70px] h-[70px] rounded-full mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">Devon Lane</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">5 min ago</span>
              </div>
              <p className="text-gray-250">
                Lorem ipsum dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          ))
        }
      </div>
      <div>
        <button className='px-10 py-4 rounded-full border font-semibold'>
          Load More
        </button>
      </div>
      <LeaveRating />
    </div>
  )
}
