
import ProductFilterColor from '@/components/filtertsx/colorfilter'
import { FiltersSidebar } from '@/components/filtertsx/colorsbar'
import React from 'react'

const Filters = () => {
  return (
    <div className='flex px-[100px] md:flex-row flex-col'>
<FiltersSidebar/>
<ProductFilterColor/>
    </div>
  )
}

export default Filters
