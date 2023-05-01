import { useLocation, Link } from "react-router-dom";

function Header() {
    window.gLocation = useLocation();
    return (
        <>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><Link className={"nav-link py-3 px-0 px-lg-3 rounded " + (window.gLocation.pathname === "/portfolio" ? "active" : "")} to="portfolio">Portfolio</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className={"nav-link py-3 px-0 px-lg-3 rounded " + (window.gLocation.pathname === "/about" ? "active" : "")} to="about">About</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className={"nav-link py-3 px-0 px-lg-3 rounded " + (window.gLocation.pathname === "/contact" ? "active" : "")} to="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <br />
        </>
    );
}

export default Header;