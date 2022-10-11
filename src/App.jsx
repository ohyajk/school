import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { NavTop } from './components/NavTop'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <NavTop />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
