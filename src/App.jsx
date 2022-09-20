import { useState } from 'react'
import { Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App