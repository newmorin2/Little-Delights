function OurStory(){
    return(
        <div className="container ">
            <div className="row align-items-center description py-4">
                <div className="col-md-6 px-4 story-image ">
                    <img src="/images/people-holding-coffee-cups.jpg" alt="people holding coffee cups" className="img-fluid " />
                </div>
                <div className="col-md-6 px-md-5 story-content">
                    <p className="text-title">OUR WAY OF DOING THINGS</p>
                    <h2 className="display-4 mb-4 text-title">Good things <br /> take a little <br /> time</h2>
                    <p className="text-muted">We work with growers, roasters, and millers <br /> who care deeply about their craft. Every cup <br /> and every crumb is made with patience, purpose <br /> and a little joy</p>
                    <a href="#about" className="btn btn-story">READ OUR STORY →</a>
                </div>
            </div>
        </div>
    )
}
export default OurStory