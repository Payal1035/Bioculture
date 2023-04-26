import React from 'react'

const Cards = () => {
  return (
    <div className='w-[440px] p-4'>
      <div className="max-w-sm rounded-[12px] h-[472px] overflow-hidden shadow-xl ">
  <img className="w-full h-[242px]" src="https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg" alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className='font-[400] text-[16px] text-gray-400'>Substainable Farming - April 2023</div>
    <div className="font-[600] text-[20px] mb-2">Organic Farming: How It Can Help Save the Planet</div>
    <p className="text-gray-500 text-[16px] font-[400]">
    Learn about the benefits of organic farming and how it can help reduce the environmental impact of agriculture.
    </p>
    </div>
    <div className="px-6 ">
    <span className="cursor-pointer inline-block text-green-400 font-semibold text-gray-700 mr-2 ">Read Full Article</span>
  </div>
</div>
    </div>
  )
}

export default Cards
