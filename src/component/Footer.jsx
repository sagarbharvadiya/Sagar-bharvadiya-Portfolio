import React from 'react';
const Footer = () => {


    return (
        <footer id="footer">
            <div className="container">
                <h3>Sagar Bharvadiya</h3>
                {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
                <div className="social-links">
                    <a href="https://www.facebook.com/sagar.ahirbharvadiya" rel="noreferrer" target="_blank" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/sagar__yadav__dwarka" rel="noreferrer" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://join.skype.com/invite/wndzoaqlmJUE" rel="noreferrer" target="_blank" className="google-plus"><i className="fa-brands fa-skype"></i></a>
                    <a href="https://www.linkedin.com/in/sagar-bharvadiya-dwarka/" rel="noreferrer" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright
                    <strong><span>sagar</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by  <span>Sagar Bharvadiya</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
