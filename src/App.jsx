import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { NavTop } from './components/NavTop'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {

  return (
    <>
      <NavTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
