function Footer(){
    return(
        <div className="container p-5 footer text-white px-5">
            <div className="title">
                <p>COME SAY HELLO</p>
                <h2 className="mb-4">Slow Mornings Start Here</h2>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p>14 Octagon Street</p>
                    <p>Nairobi,Kenya</p>
                    <p>Open Daily 7am - 8pm</p>
                </div>
                <div className="col-md-6">
                    <form action="#">
                        <p>NOTES FROM LITTLE DELIGHTS</p>
                        <p>Seasonal menus, gatherings, and good things — occasionally.</p>
                        <input type="email" placeholder="Your email address" className="form-control" />
                    </form>
                </div>
            </div>
            <hr className="mt-5"/>
            
            <div className="footer-tags">
                <p>@2026 Little Delights. Made with Care.</p>
                <a href="about">Our Story</a>
                <a href="#">Instagram</a>
            </div>            
        </div>
    )
}
export default Footer