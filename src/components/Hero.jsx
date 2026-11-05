
function Hero() {
    return (
        <div id="home" className="container py-3">
            <div className="row align-items-center description">
                <div className="col-12 col-md-6 px-4 px-md-5 hero-text">
                    <p className="mb-4 text-title">
                        A CAFE FOR UNHURRIED DAYS
                    </p>
                    <h2 className="display-4 mb-4 text-title">
                        Made <br />
                        Slowly. <br />
                        Enjoyed <br />
                        fully.
                    </h2>
                    <p className="mb-4 text-muted">
                        Thoughtful coffee, honest baking, and a sunlit
                        corner to call your own
                    </p>
                    <div className="hero-actions">
                        <a href="#menu" className="btn btn-hero">
                            Explore Our Menu →
                        </a>
                        <span className="text-muted opening-hours">
                            OPEN DAILY 7AM-8PM
                        </span>
                    </div>
                </div>

                <div className="col-12 col-md-6 hero-image">
                    <img src={`${import.meta.env.BASE_URL}images/coffee-cup.jpg`} alt="coffee-cup" 
                    className="img-fluid" />
                </div>
            </div>

            <div className="hero-strip">
                <ul className="hero-strip-list">
                    <li>SINGLE ORIGIN COFFEE</li>
                    <li>BAKED IN HOUSE</li>
                    <li>SEASONAL INGREDIENTS</li>
                    <li>ALWAYS WELCOMING</li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;