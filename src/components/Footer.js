import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                <img src="https://picsum.photos/500/300/?image=17" alt="" />
                    <h3>About<span>Eduonix</span></h3>

                    <p className="footer-links">
                        <a href="/">Home</a>
                        |
                        <a href="/categories">Categories</a>
                        |
                        <a href="/appointment">Appointment</a>
                    </p>

                    <p className="footer-company-name">© 2021 Iqra Steel Works Pvt. Ltd.</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Iqra Steel Works near Noble Hospital, Rehman Pura</span>
                        Ichra, Lahore, Pakistan - 54000</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+92 300-4347016</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:iqrasteelsworks@gmail.com">iqrasteelsworks@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                    <div className="fa footer-icons">
                        <a href="/"><i className="fa fa-facebook"></i></a>
                        <a href="/"><i className="fa fa-twitter"></i></a>
                        <a href="/"><i className="fa fa-instagram"></i></a>
                        <a href="/"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
                </footer>
        </div>
    )
}

export default Footer
