import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

import CommandsPage from './pages/commands'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/commands" element={<CommandsPage />} />
    </Routes>
  )
}

export default App
