import { BrowserRouter, Route, Routes } from "react-router-dom";

// estilos
import "./body.css";
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
// import Carrito from "./Header/Carrito/Carrito";




function Body() {
    return (
        <>
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
                {/* <Route path="/carrito" element={<Carrito/>}/> */}

            </Routes>

        
               

            
            <Footer />  
        
        </BrowserRouter>
        {/* <ItemDetail id={2}/> */}
        </>

    );
}

export default Body;


 {/* <Route path="/detalle:id" element=<ItemDetail id={2} /> /> */}