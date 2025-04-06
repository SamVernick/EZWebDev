import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
