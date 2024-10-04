import React from 'react'
import CartNav from '../components/MyCart/CartNav'
import CommonSizes from '../layouts/CommonSizes'
import CommonPadding from '../layouts/CommonPadding'
import Sidebar from '../components/profile/Sidebar'
import { Outlet } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='space-y-20'>
      <CartNav title={"my account"} />
      <CommonSizes>
        <CommonPadding>
          <div className='flex'>
            <Sidebar />
            <div className='lg:ml-9 w-full'>
              <Outlet />
            </div>
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
