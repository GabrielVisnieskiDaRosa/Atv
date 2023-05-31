import { useState } from 'react'
import Principal from './Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Principal/>
      </div>
    </>
  )
}

export default App
