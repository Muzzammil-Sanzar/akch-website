import React from 'react'
import CommonSizes from '../layouts/CommonSizes'
import CommonPadding from '../layouts/CommonPadding'
import Gallery from '../components/ProductDetails/Gallery'
import Buttons from '../components/ProductDetails/Buttons'
import DetailsAndButtons from '../components/ProductDetails/DetailsAndButtons'
import ProductBreedComb from '../utility/ProductBreedComb'

export default function ProductDetails() {
  return (
    <div className='space-y-[100px]'>
      <ProductBreedComb />
      <CommonSizes>
        <CommonPadding>
          <Gallery />
        </CommonPadding>
      </CommonSizes>
      <DetailsAndButtons />
    </div>
  )
}
