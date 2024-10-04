import React from 'react'

export default function MyProfile() {
  return (
    <div>
      <div className="space-y-10 ">
        <div className="bg-orange-250 p-8 rounded-xl border ">
          <div className='flex justify-between'>
            <div className='flex items-center gap-8'>
              <img
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" // Placeholder for profile picture
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-semibold">Hi! Thaveeduraja</h1>
                <p className="text-gray-500">Tirunelveli, South India, Kerala</p>
              </div>
            </div>
            <div>
              <button className=" bg-orange-150 text-white px-5 py-2.5 rounded-full hover:bg-orange-200">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="px-12 py-6 rounded-xl border space-y-4">
          <input
            type="text"
            value="Thaveeduraja"
            className="w-full px-5 py-6 border rounded-xl text-sm font-medium focus:border-orange-150 outline-none"
          />
          <input
            type="email"
            value="yourmail@gmail.com"
            className="w-full px-5 py-6 border rounded-xl text-sm font-medium focus:border-orange-150 outline-none"
          />
          <input
            type="tel"
            value="+44 3845 6592 9654"
            className="w-full px-5 py-6 border rounded-xl text-sm font-medium focus:border-orange-150 outline-none"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value="1/11/2000"
              className="w-full px-5 py-6 border rounded-xl text-sm font-medium focus:border-orange-150 outline-none"
            />
            <input
              type="text"
              value="Male"
              className="w-full px-5 py-6 border rounded-xl text-sm font-medium focus:border-orange-150 outline-none"
            />
          </div>
          <div className='text-right'>
            <button className='bg-orange-150 px-11 py-3 rounded-full text-white font-semibold'>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}
