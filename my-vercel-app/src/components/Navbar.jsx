import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">DSUMUN III</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  )
}