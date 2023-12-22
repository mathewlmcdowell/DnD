import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


export default function Navbar() {


    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Initiative</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}