import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './layouts/header'
import Routing from './routes'
import Footer from './layouts/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Routing/>
     <Footer/>
    </div>
  )
}

export default App
