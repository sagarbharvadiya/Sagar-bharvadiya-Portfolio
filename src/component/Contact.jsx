import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <span>Contact Me</span>
                        {/* <h2>Contact Me</h2> */}
                        {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">

                                        <i className="bx fa-solid fa-share"></i>
                                        <h3>Social Profiles</h3>
                                        <div className="social-links">

                                        <a href="https://github.com/sagarbharvadiya/" rel="noreferrer" target="_blank" className="github"><i class="fa-brands fa-github"></i></a>
                                            <a href="https://www.instagram.com/sagar__yadav__dwarka" rel="noreferrer" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="https://join.skype.com/invite/wndzoaqlmJUE" rel="noreferrer" target="_blank" className="google-plus"><i className="fa-brands fa-skype"></i></a>
                                            <a href="https://www.linkedin.com/in/sagar-bharvadiya-dwarka/" rel="noreferrer" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">

                                        <i className="bx fa-solid fa-envelope"></i>
                                        <h3>Email Me</h3>
                                        <a href="mailto:sagarbharvadiya@gmail.com">
                                            <p>sagarbharvadiya@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box mt-4">
                                        <i className="bx fa-solid fa-phone"></i>

                                        <h3>Call Me</h3>
                                        <p>+91 6352644141</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    {/* <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div> */}
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>
                </div>
            </section >

        </>
    )
}

export default Contact
