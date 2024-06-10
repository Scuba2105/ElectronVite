import { useState } from 'react'
import '../Styles/App.css'
import { MoonIcon } from '../Assets/SVG/svg.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <div className='main-icon size-100 flex-c'>
        <MoonIcon size="40px" color="white" />
      </div>
      <div className='main-header size-100'></div>
      <div className='main-menu size-100'></div>
      <div className='main-area size-100'></div>
    </div>
  )
}

export default App
