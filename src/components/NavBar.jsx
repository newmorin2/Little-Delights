function NavBar(){
    return(
        <nav className="navbar navbar-expand-md container sticky-top little-navbar">
            <div className="container px-4 ">
                <a href="#" className="navbar-brand">Little Delights</a>

                {/* Hamburger button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu">
                    <div className="navbar-nav ms-auto">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#menu" className="nav-link">Menu</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar