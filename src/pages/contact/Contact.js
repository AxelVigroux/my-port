import "./Contact.css";
import LogoGithub from "../../assets/github.svg";
import LogoLinkedin from "../../assets/linkedin.svg";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contactez moi !</h1>
      <h3>Je mord pas, je suis un gars cool</h3>
      <div className="text-container">
        <p>
          Hésitez pas à me contacter, c'est avec plaisir que je répondrais ! En
          éspérant collaboré avec vous dans un futur proche.
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
