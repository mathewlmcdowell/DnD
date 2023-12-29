import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


export default function Footer() {


    return(
        <>
        <div className="outline">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">D&D Initiative</Link>
                </div>
            </nav>
        </div>
        </>
    )
}