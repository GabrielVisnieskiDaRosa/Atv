import { useState } from 'react'
import './App.css'
import Funcao from './Funcao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Funcao/>
    </>
  )
}

export default App
