import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const [state, handleSubmit] = useForm("mgaaqgen");

    return (
        <div id="contact" className="container py-3">
            <div className="contact-section contact-image">
                <div className="contact-overlay"></div>
                <div className="contact-content">

                    {state.succeeded ? (

                        <div className="success-message">
                            <h2>Thank you!</h2>
                            <p>Your message has been sent successfully.</p>
                            <p>We'll get back to you soon.</p>
                        </div>

                    ) : (

                        <>
                            <p>DROP US A NOTE</p>
                            <h2>We’d love to hear from you</h2>
                            <form onSubmit={handleSubmit} className="mt-4">

                                <label htmlFor="name">YOUR NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="How should we address you?"
                                    className="form-control"
                                    required
                                />
                                <ValidationError
                                    field="name"
                                    errors={state.errors}
                                />
                                <label htmlFor="email" className="mt-3">
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    className="form-control"
                                    required
                                />
                                <ValidationError
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="message" className="mt-3">
                                    WHAT'S ON YOUR MIND
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    required
                                ></textarea>
                                <ValidationError
                                    field="message"
                                    errors={state.errors}
                                />
                                <ValidationError errors={state.errors} />
                                <button
                                    type="submit"
                                    className="btn mt-3"
                                    disabled={state.submitting}
                                >
                                    {state.submitting
                                        ? "SENDING..."
                                        : "SEND YOUR NOTE"}
                                </button>

                            </form>
                        </>

                    )}

                </div>

            </div>
        </div>
    );
}

export default Contact;