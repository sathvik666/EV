import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Compareall from './pages/Compareall';
import Prebook from './pages/Prebook';
import Rentals from './pages/Rentals';
function App() {
    return (
        <div className='app'>
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/product1" element={<Product1/>}></Route>
                <Route path="/product2" element={<Product2/>}></Route>
                <Route path="/product3" element={<Product3/>}></Route>
                <Route path="/compareall" element={<Compareall/>}></Route>
                <Route path="/prebook" element={<Prebook/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/rentals" element={<Rentals/>}></Route>

            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
}
export default App;