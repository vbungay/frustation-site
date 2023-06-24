import { useState } from 'react'
import Header from './components/Header/Header'
import './App.scss'
import SectionOne from './components/sections/sectionOne/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <SectionOne />
      </div>
    </>
  )
}

export default App
