import React from 'react'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item text">
                            <h3>BBBootstrap.com</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
                        </div>
                        <div class="col item social">
                            <a className='facebookicon' href="#"><i class="fa fa-facebook"></i></a>
                            <a className='twittericon' href="#"><i class="fa fa-twitter"></i></a>
                            <a className='youtubeicon' href="#"><i class="fa fa-youtube"></i></a>
                            <a className='instagramicon' href="#"><i class="fa fa-instagram"></i></a>
                            <a className='googleicon' href="#"><i class="fa fa-google"></i></a>
                        </div>
                    </div>
                    <p class="copyright">BBBootstrap.com © 2020</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer