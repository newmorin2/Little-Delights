function About(){
    return(
        <div id="about" className="container py-3">
            <div className="row align-items-center description px-3 py-5">
                <div className="col-md-6">
                    <p className="text-title">OUR STORY</p>
                </div>
                <div className="col-md-6 mb-5">
                    <h2 className="display-5 text-title">A neighborhood café, <br />made with intention
                    </h2>
                </div>
                <div>
                    <img src="images/cafe-image.jpg" alt="photo of the cafe" className="img-fluid about-image" />
                </div>
                <div className="the-story mt-5">
                    <p className="text-title">SINCE 2026</p>
                    <h3 className="text-title">We wanted to create the kind of place we were <br /> always looking for</h3>
                    <div className="container py-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                        <p className="text-muted">Somewhere the coffee is taken seriously, but never itself. Where the baking happens just behind the counter and the room feels as good <br />on a quiet Tuesday as it does on a lively Saturday.</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-muted">Little Delights grew from a simple belief: small daily rituals matter. So we pay attention to the details — warm service, responsible sourcing, and food that tastes exactly like what it is.</p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About