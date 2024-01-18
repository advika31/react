import Navbar from './navbar';
import About from './pages/about';
import Home from './pages/home';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import SignIn from './pages/signin.js';
import { Route , Routes } from "react-router-dom"


function App(){
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
    
    </>
  )
}

export default App
