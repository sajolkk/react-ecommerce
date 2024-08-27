import { useState } from 'react'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
import HotProduct from './components/Header/HotProduct/HotProduct'

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
    </div>
  )
}

export default App
