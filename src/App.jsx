
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import ContactUs from './pages/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Card/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
          <Footer/>
      </Router>
        
    </>
  )
}

export default App
