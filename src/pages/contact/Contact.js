import "./Contact.css";
import title from "../../assets/contact.png";
import LogoGithub from "../../assets/github.svg";
import LogoLinkedin from "../../assets/linkedin.svg";

export default function Contact() {
  return (
    <div className="contact-container">
      <img className="title" src={title} />
      <div className="text-container">
        <p>
          C'est avec plaisir que je répondrais ! En espérant collaborer avec
          vous dans un futur proche.
        </p>
        <a href="mailto:axelvigroux@gmail.com">axelvigroux@gmail.com</a>
      </div>
      <div className="contact-icons">
        <div className="square">
          <a href="https://github.com/AxelVigroux" target="_blank">
            <img src={LogoGithub} alt="logo github" />
          </a>
        </div>
        <div className="square">
          <a
            href="https://www.linkedin.com/in/axel-vigroux-32598b201/"
            target="_blank"
          >
            <img src={LogoLinkedin} alt="logo linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
