import ProductDetail from '@/components/revews/details'
import ReviewsSection from '@/components/revews/reviews'
import Detailcards from '@/components/revews/reviwscards'
import React from 'react'

const Review = () => {
  return (
    <div>
     <div className='px-[100px] '>
     <ProductDetail/>
     <ReviewsSection/>
     <Detailcards/>
     </div>
    </div>
  )
}

export default Review