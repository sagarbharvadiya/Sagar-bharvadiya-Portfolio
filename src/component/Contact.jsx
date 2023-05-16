import React from 'react'
import ContactForm from './ContactForm'
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

                                            <a href="https://github.com/sagarbharvadiya/" rel="noreferrer" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
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
                           <ContactForm/>
                        </div>

                    </div>
                </div>
            </section >

        </>
    )
}

export default Contact
