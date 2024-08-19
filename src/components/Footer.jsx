import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-2">
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We are a team of passionate developers providing high-quality web development services. 
              Our mission is to deliver the best user experience.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/blog" className="text-white">Blog</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="#" className="text-white"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-white"><i className="bi bi-instagram"></i> Instagram</a></li>
              <li><a href="#" className="text-white"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt"></i> 123 Developer St, Coding City</li>
              <li><i className="bi bi-phone"></i> +123 456 7890</li>
              <li><i className="bi bi-envelope"></i> info@developer.com</li>
            </ul>
          </div>
        </div>
        <hr className="bg-white"/>
        <div className="text-center py-3">
          <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
