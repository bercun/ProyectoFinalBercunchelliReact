import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {

    
    return (
        
        <nav className="navbar navbar-expand-sm  navbar-dark">
            
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="/img/icono_obrador.png" alt="icono sin fondo"/>El Obrador</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " >
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/">Categorias</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"> 1</i> <span className="badge bg-danger rounded-pill " ></span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;