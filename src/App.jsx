import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from '../Components/box-template';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box></Box>
    </div>
  )
}

export default App
