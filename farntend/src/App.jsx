import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes]=useState([])

  return (
    <>
 <h1>full stack </h1>
 <P>jokes:{jokes.length}</P>
    </>
  )
}

export default App
