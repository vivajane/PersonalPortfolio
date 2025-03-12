import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './pages/Projects';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <div>
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path='/experience' element={<Experience/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

   </div>
  )
}

export default App
