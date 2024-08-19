import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="mb-4">About Me</h1>
          <p className="lead text-muted mb-4">
            I am a passionate developer with a love for creating dynamic and responsive web applications. With experience in both front-end and back-end technologies, I aim to build seamless digital experiences.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 text-center">
          {/* <img src="your-image-url.jpg" alt="Name" className="img-fluid rounded-circle mb-4" /> */}
          <h2>Sanjida</h2>
          <p className="text-muted">Full Stack Developer</p>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-8">
          <h3 className="mb-3">My Skills</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body text-center">
                  <i className="bi bi-code-slash display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Front-End Development</h5>
                  <p className="card-text">Expertise in HTML, CSS, JavaScript, React, and Bootstrap to create beautiful and responsive user interfaces.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body text-center">
                  <i className="bi bi-server display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Back-End Development</h5>
                  <p className="card-text">Skilled in server-side technologies like Node.js, Express, and databases like MongoDB and MySQL.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body text-center">
                  <i className="bi bi-cloud-upload display-4 text-primary mb-3"></i>
                  <h5 className="card-title">DevOps</h5>
                  <p className="card-text">Experience in deploying applications and managing cloud infrastructure on platforms like AWS, Heroku, and Vercel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
