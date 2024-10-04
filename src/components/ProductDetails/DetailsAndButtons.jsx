import React, { useState } from 'react'
import Buttons from './Buttons';
import Details from './Details';
import CommonSizes from '../../layouts/CommonSizes';
import CommonPadding from '../../layouts/CommonPadding';
import RelatedItemsCarousel from '../relatedItems/RelatedItemsCarousel';
import RelatedItems from '../relatedItems/RelatedItems';
import Review from './Review';

export default function DetailsAndButtons() {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div className='space-y-10'>
      <Buttons activeButton={activeButton} setActiveButton={setActiveButton} />
      <CommonSizes>
        <CommonPadding>
          <div className='space-y-24'>
            {
              activeButton === 1 && (
                <Details />
              )
            }
            {
              activeButton === 2 && (
                <Review />
              )
            }
            <RelatedItems />
          </div>
        </CommonPadding>
      </CommonSizes>
    </div>
  )
}
