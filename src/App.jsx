import { useState } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import HotProduct from './components/Header/HotProduct/HotProduct'
import FeatureProduct from './components/Product/FeatureProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      <Header />
      <div className='mt-8 px-4 md:flex md:justify-between w-full block'>
        <div className='md:w-9/12 w-full block mr-8 mb-8'>
          <div className='h-[430px]'>
            <Slider />
          </div>
        </div>
        <div className='md:w-3/12 w-full block mb-8'>
          <HotProduct />
        </div>
      </div>
      <div className='w-full block px-4'>
        <div className='mb-8'>
          <h1 className='font-bold text-xl text-center'>Featured Products</h1>
          <p className='text-center'>Upgrade your life effortlessly with our Featured Products</p>
        </div>
        <div className='flex flex-wrap'>
          <FeatureProduct />
          <FeatureProduct />
          <FeatureProduct />
          <FeatureProduct />
          <FeatureProduct />
          <FeatureProduct />
          <FeatureProduct />
        </div>
      </div>
    </div>
  )
}

export default App
