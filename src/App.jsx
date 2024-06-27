import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation,matchPath } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Product from './Components/Product';
// import Cart from './Components/Cart';
import ProductDetails from './Components/ProductDetails';

// Layout component for conditional rendering
const Layout =({children})=>{
  const location = useLocation();
  const noNavAndHeader = ['/login','/create-account'];


return(
  <>
  {!noNavAndHeader.includes(location.pathname) && <Nav/>}
  {!noNavAndHeader.includes(location.pathname) && <Header/>}
  {children}

  </>
)

}


const App = () => {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path ='/login' element={<Login/>}></Route>
          <Route path ='/create-account' element={<Register/>}></Route>
          <Route path ='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Layout>
      </Router>

      </>
  );
};

export default App;
