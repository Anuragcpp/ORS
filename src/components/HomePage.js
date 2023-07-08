
import React from 'react';
import './HomePage.css';
import {Outlet,  Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="Header">
        <h1>Welcome to our Online Recruitment Solution </h1>
        <h2>Efficiency at Your Fingertips</h2>
        <div className="CTAButtons">
          <button className="CTAButton">Get Started</button>
          <button className="SignUpButton"><Link to='/Login' className='signup' >Sign Up / Register  </Link> </button>
        </div>
        
      </header>

      <section className="FeatureSection">
        <div className="Feature">
          <img src="https://th.bing.com/th/id/OIP.2iihsE4GRS7ldZkU1Tr8pAHaFS?w=225&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Streamline Icon" className="FeatureImage" />
          <h3>Streamline Your Hiring Process</h3>
          <p>
            Our online recruitment solution offers a streamlined and efficient hiring process. Say goodbye to the hassle of manual paperwork and countless emails.
            With our platform, you can easily manage job postings, track applicants, and schedule interviews, all in one place.
          </p>
        </div>

        <div className="Feature">
          <img src="https://th.bing.com/th/id/OIP.IfULXdSDsDWbl0WVMx4BBwHaE8?w=207&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Diverse Icon" className="FeatureImage" />
          <h3>Access to a Diverse Talent Pool</h3>
          <p>
            Finding the right talent is crucial for your organization's success. Our online recruitment solution provides access to a diverse talent pool, ensuring
            you can find candidates with the skills and experience you need. Our platform utilizes advanced algorithms and targeted job distribution to reach a wide
            range of qualified candidates.
          </p>
        </div>

        <div className="Feature">
          <img src="https://www.nea.org/sites/default/files/styles/1920wide/public/2021-03/collaboration.jpeg?itok=T-tjQfvz" alt="Collaborative Icon" className="FeatureImage" />
          <h3>Collaborative Hiring Tools</h3>
          <p>
            Hiring is a team effort, and our online recruitment solution facilitates collaboration among hiring managers and HR professionals. Our platform offers
            intuitive features that allow for seamless communication, feedback sharing, and evaluation of candidates. With our collaborative tools, you can make
            informed decisions and ensure everyone is on the same page throughout the hiring process.
          </p>
        </div>

        <div className="Feature">
          <img src="https://th.bing.com/th/id/OIP.w-lgGj8H5cIkJrC-B-g9_gHaEt?w=265&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Analytics Icon" className="FeatureImage" />
          <h3>Powerful Analytics and Insights</h3>
          <p>
            Make data-driven decisions with our online recruitment solution. Our platform provides powerful analytics and insights, giving you a comprehensive view
            of your recruitment metrics. Track the effectiveness of your job postings, monitor the progress of applicants, and identify areas for improvement.
            With actionable data, you can optimize your hiring strategy and achieve better results.
          </p>
        </div>
      </section>

      <footer className="Footer">
      <div className="SearchCandidateButtonContainer">
          <button className="SearchCandidateButton"><Link to='/CandidateSearch' className='searchCan' >  Search Candidate </Link> </button>
        </div>
        <div className="FooterContent">
          <div className="ContactInfo">
            <p>Contact us: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="SocialIcons">
            <a href="www.facebook.com"><img src="https://th.bing.com/th/id/OIP.F3xR8ls8kYW4hwfduKGa_wHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Facebook Icon" /></a>
            <a href="www.twitter.com"><img src="https://th.bing.com/th/id/OIP.CXsfQqT65bWFpInejslajAHaGG?w=213&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Twitter Icon" /></a>
            <a href="www.linkedin.com"><img src="https://th.bing.com/th/id/OIP.1R2nLh9Gdbpa75yVbtTFYgHaHY?w=181&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="LinkedIn Icon" /></a>
          </div>
        </div>
        <div className="FooterLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </footer>
      <Outlet />
    </div>
  );
}

export default HomePage;


