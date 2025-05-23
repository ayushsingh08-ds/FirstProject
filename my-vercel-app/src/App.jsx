import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
              <Home /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/about" 
          element={
            isAuthenticated ? 
              <About /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/contact" 
          element={
            isAuthenticated ? 
              <Contact /> : 
              <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/login" 
          element={
            <Login setIsAuthenticated={setIsAuthenticated} />
          } 
        />
      </Routes>
    </Router>
  )
}

export default App