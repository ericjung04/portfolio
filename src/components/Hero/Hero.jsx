import "./Hero.css";
import profilePic from "../../assets/eric-jung.png";
import linkedin from "../../assets/linkedin-logo.png";
import github from "../../assets/github-logo.png";
import Button from 'react-bootstrap/Button';
import resume from '../../assets/eric_jung_resume.pdf'

function Hero() {


  return (
    <section id="hero" className="hero">

      <div className="hero-left">
        <img src={profilePic} alt="Eric Jung profile" />
      </div>

    <div className="hero-right">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-title">Eric Jung</h1>
        <p className="hero-subtitle">Computer Science student at Virginia Tech</p>

        <div className="hero-buttons">
            <Button variant="primary"
             onClick={() => (window.open(resume))}>My Resume!
             </Button>
            <Button variant="primary"
             onClick={() => document.getElementById("contact").scrollIntoView({behavior : "smooth"})}>Contact Information
             </Button>
        </div>

        <div className="hero-socials">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="icon linkedin-icon"
            onClick={() =>
              (window.location.href = "https://www.linkedin.com/in/ericjung04/")
            }
          />
          <img
            src={github}
            alt="GitHub"
            className="icon github-icon"
            onClick={() =>
              (window.location.href = "https://github.com/ericjung04")
            }
          />
        </div>
    </div>
    </section>
  );
}

export default Hero;
