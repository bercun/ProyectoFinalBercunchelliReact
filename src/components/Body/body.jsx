import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";


// Pages
import Home from "../pages/Home";
import Footer from "./Footer/Footer";
import NavBar from "./Header/NavBar/NavBar";
import About from "../pages/About";
import Login from "../pages/Login";
// Productos
import ItemContainer from "./Main/ItemContainer/ItemContainer";
import ItemContainerDetail from "./Main/ItemContainer/ItemContainerDetail";
import ItemContainerByCa from "./Main/ItemContainer/ItemContainerByCa";

import Cart from "./Header/Carrito/Cart";
import { CarritoContext } from "../context/CarritoContext";
import FinCompra from "./Header/Carrito/FinCompra";
import Factura from "./Header/Carrito/Factura";

 const carritoCrear = JSON.parse(localStorage.getItem("carrito")) || [];


function Body() {


const [carrito, setCarrito] = useState(carritoCrear);



    return (
        <>
        <CarritoContext.Provider value={{carrito, setCarrito}}>
            <BrowserRouter>
            
                <NavBar />
                
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/productos" element={<ItemContainer/>} />
                    <Route path="/login" element={<Login/>} />
                    {/* navegacion */}
                    <Route path="/detail/:id" element={<ItemContainerDetail/>} />
                    <Route path="/categoria/:categoria" element={<ItemContainerByCa/>} />
                    <Route path="/categoria/" element={<ItemContainerByCa/>} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                    <Route path="/cart" element={<Cart/> }/>
                    <Route path="/finCompra" element= {<FinCompra/>} />
                    <Route path="/factura/:id" element= {<Factura/>} />

                </Routes>

            
                

                
                <Footer />  
            
            </BrowserRouter>
        </CarritoContext.Provider>
        
        </>

    );
}

export default Body;
