// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Frontinterface from './component/Frontinterface';
import Cart from './component/Cart';
import Json from './component/Json';
import { Contact } from './component/Contact';
import Jsonsecond from './component/Jsonsecond';
import NAvbarsecond from './component/NAvbarsecond';
import Footer from './component/Footer';
import Product from './component/Product';
import About from './component/About';
import Checkouts from './component/Checkouts';
import Sidebar from './component/Sidebar';
import Productinfo from './component/Productinfo';
import { HashRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <NAvbarsecond />
      <Routes>
        <Route path='/' element={<Navigate to="/Home" />}></Route>
        <Route path='/Home' element={<Frontinterface></Frontinterface>}></Route>
        <Route path='/product' element={<Product ></Product >}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        {/* <Route path='/product' element={<Jsonsecond></Jsonsecond>}></Route> */}
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Cart' element={<Cart></Cart>}></Route>
        <Route path='/Checkouts' element={<Checkouts></Checkouts>}></Route>
        <Route path='/Side' element={<Sidebar></Sidebar>}></Route>
        <Route path='/Info' element={<Productinfo></Productinfo>}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
