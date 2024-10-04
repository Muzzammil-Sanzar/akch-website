import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import RelatedItemsCarousel from './RelatedItemsCarousel'

export default function RelatedItems() {
  return (
    <div className='space-y-9'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl md:text-4xl font-semibold'>Related Items</h1>
        <div className="flex items-center gap-3 bg-orange-150 rounded-full font-medium px-3.5 md:px-7 py-2 md:py-4 text-white">
          <button>View all</button>
          <GoArrowUpRight />
        </div>
      </div>
      <div>
        <RelatedItemsCarousel />
      </div>
    </div>
  )
}
