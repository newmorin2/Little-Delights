function Contact() {
    return (
        <div id="contact" className="container py-3">
            <div className="contact-section contact-image">

                <div className="contact-overlay"></div>

                <div className="contact-content">
                    <p>DROP US A NOTE</p>

                    <h2>We’d love to hear from you</h2>

                    <form action="#" className="mt-4">

                        <label htmlFor="name">YOUR NAME</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="How should we address you?"
                            className="form-control"
                        />

                        <label htmlFor="email" className="mt-3">
                            EMAIL ADDRESS
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="form-control"
                        />

                        <label htmlFor="message" className="mt-3">
                            WHAT'S ON YOUR MIND
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                        ></textarea>

                        <button className="btn mt-3">
                            SEND YOUR NOTE
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;