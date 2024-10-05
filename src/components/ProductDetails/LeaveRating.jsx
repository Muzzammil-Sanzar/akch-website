import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

export default function LeaveRating() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [review, setReview] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ email, phone, review })
  }
  return (
    <div className="space-y-7">
      <h2 className="text-2xl font-semibold">Leave Your Ratings*</h2>
      <p className="text-lg text-gray-250">
        Your email address remains confidential and will not be disclosed. Your information is secure here.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-5 md:space-x-4">
          <div className="flex-1">
            <input
              type="email"
              className='w-full border rounded-lg px-4 py-5 outline-none text-gray-250'
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="tel"
              className='w-full border rounded-lg px-4 py-5 outline-none text-gray-250'
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Enter Your Review"
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className='w-full border rounded-lg px-4 py-5 outline-none text-gray-250'
          />
        </div>
        <div className="flex items-center gap-3 bg-orange-150 rounded-full font-medium px-7 w-fit py-4 text-white">
          <button type='submit'>View all</button>
          <GoArrowUpRight />
        </div>
      </form>
    </div>
  )
}
