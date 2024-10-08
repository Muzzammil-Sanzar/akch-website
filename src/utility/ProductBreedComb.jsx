import React from 'react'
import CommonSizes from '../layouts/CommonSizes'
import CommonPadding from '../layouts/CommonPadding'

export default function ProductBreedComb() {
  return (
    <nav className=" bg-orange-150 py-5" aria-label="Breadcrumb">
      <CommonSizes>
        <CommonPadding>
          <div className='flex text-left w-full'>
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse gap-4">
              <li className="inline-flex items-center gap-2 md:gap-4">
                <a href="#" className="inline-flex items-center hover:text-gray-150">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10.5L12 3.5L20 10.5V20.5H15V16.5C15 15.7044 14.6839 14.9413 14.1213 14.3787C13.5587 13.8161 12.7956 13.5 12 13.5C11.2043 13.5 10.4413 13.8161 9.87868 14.3787C9.31607 14.9413 9 15.7044 9 16.5V20.5H4V10.5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 md:gap-4">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.37305 1.41658L5.45638 5.49992L1.37305 9.58325" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href="#" className="ms-1 text-xs md:text-base hover:text-blue-600 md:ms-2">Category</a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 md:gap-4">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.37305 1.41658L5.45638 5.49992L1.37305 9.58325" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href="#" className="ms-1 text-xs font-medium  hover:text-blue-600 md:ms-2">All Products</a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 md:gap-4">
                  <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.37305 1.41658L5.45638 5.49992L1.37305 9.58325" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <a href="#" className="ms-1 text-xs hover:text-blue-600 md:ms-2">Product Name</a>
                </div>
              </li>
            </ol>
          </div>
        </CommonPadding>
      </CommonSizes>
    </nav>
  )
}
