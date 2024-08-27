import { useState } from 'react'
import Header from './pages/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen'>
      <Header />
    </div>
  )
}

export default App
