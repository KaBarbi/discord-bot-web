import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

// import Commands from './pages/Commands'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/commands" element={<Commands />} /> */}
    </Routes>
  )
}

export default App
