import { useState } from 'react'
import Header from './components/header'
import MainContent from './components/MainContent'
import MyWork from './components/MyWork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <MainContent />
    <MyWork />
    </>
  )
}

export default App
