import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from '../Components/box-template';
import NavBar from '../Components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Box></Box> */}
      {/* <NavBar></NavBar> */}
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
