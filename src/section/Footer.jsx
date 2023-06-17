import React from 'react'

function Footer() {
  return (
    <footer>
            <div className="footer-links">
                <div className="footer-address">
                    <img src='https://siamcomputing.com/wp-content/uploads/2021/09/footer-logo-siam.webp'/>
                    <a href="">hello@siamcomputing.com</a>
                    <p>No 30, 1st Main Road,<br/>
                    Shastri Nagar,<br/>
                    Adyar, Chennai,<br/>
                    Tamil Nadu 600020</p>
                </div>
                <div className="footer-service">
                    <h6>Services</h6>
                    <ul>
                        <li><a href=""><span>Product strategy and consulting</span></a></li>
                        <li><a href=""><span>MVP Development</span></a></li>
                        <li><a href=""><span>Dedicated Product Team</span></a></li>
                    </ul>
                </div>
                <div className="footer-service">
                <h6>About</h6>
                    <ul>
                        <li><a href=""><span>Our Journey</span></a></li>
                        <li><a href=""><span>Life at siam</span></a></li>
                        <li><a href=""><span>Careers</span></a></li>
                    </ul>
                </div>
                <div className="footer-service">
                <h6>Resources</h6>
                    <ul>
                        <li><a href=""><span>Blogs</span></a></li>
                        <li><a href=""><span>Case Studies</span></a></li>
                        <li><a href=""><span> App Development Guide</span></a></li>
                        <li><a href=""><span> Product dev guide</span></a></li>
                    </ul>
                </div>

            </div>
            <div className="social-media">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-google"></i>
            </div>
            <div className="copy-right">&#9400; Copyright 2023 siamcomputing. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer