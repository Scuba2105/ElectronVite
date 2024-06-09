import { useState } from 'react'
import '../Styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <div className='main-icon size-100'></div>
      <div className='main-header size-100'></div>
      <div className='main-menu size-100'></div>
      <div className='main-area size-100'></div>
    </div>
  )
}

export default App
