import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
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
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
