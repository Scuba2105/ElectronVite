import { useState } from 'react'
import '../Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page-container'>
      <div className='main-icon size-100'>Icon</div>
      <div className='main-header size-100'>Header</div>
      <div className='main-menu size-100'>Menu</div>
      <div className='main-area size-100'>Main Area</div>
    </div>
  )
}

export default App
