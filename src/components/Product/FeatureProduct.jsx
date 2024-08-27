import React from 'react'

function FeatureProduct() {
    return (
        <>
            <div className='w-full sm:w-1/2 md:w-4/12 lg:w-3/12 px-2 mb-8'>
                <div className='bg-white py-5 rounded-md shadow-lg h-full relative'>
                    <div className='px-4'>
                        <img src="https://admin.sopmatech.com/assets/uploads/product_thumbnail/1002-67501705164870.jpg" alt="" />
                    </div>
                    <div className='border-t-2 my-5'></div>
                    <div className='px-4 mb-8'>
                        <h1 className='w-full'>
                            <a href="" className="block w-full hover:text-red-500 hover:underline">
                                Wireless Bluetooth Headset Transparent Headphones LED Power Digital Display
                            </a>
                        </h1>
                    </div>
                    <div className='px-4 absolute bottom-0 left-0 w-full'>
                        <div className='block w-full pb-4'>
                            <span className='text-red-500 font-bold'>49,990৳</span>
                            <del className='text-gray-700 ml-4'>
                                <small className='font-bold'>59,999৳</small>
                            </del>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct