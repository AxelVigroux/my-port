import "./About.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-left"></div>
      <div className="about-right">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="blue">
          <h3>Axel Vigroux</h3>
        </div>

        <div className="about-text">
          <h2>Presentation</h2>
          <p>
            Hej ! Bienvenue sur mon portfolio, je m'appelle Axel et je vis à
            Toulouse. Après avoir travaillé pendant quelques années en tant que
            préparateur en pharmacie, j'ai décidé de faire une reconversion
            professionnelle pour devenir développeur web.
            <br />
            <br />
            Mon sens du relationnel m'a permis de m'adapter facilement aux
            différents lieux et équipes de travail. Après deux formations de
            développeur en remote, de la sueur, des bugs puis de la
            satisfaction.
            <br />
            <br />
            J'ai acquis des compétences dans les technologies suivantes :
            JavaScript, React, Node, Express.
            <br />
            <br />
            J'ai vécu un an et demi sur l'île de la Réunion, où j'ai fait
            beaucoup de randonnées, passé mon permis côtier et obtenu mon niveau
            1 en plongée. En dehors du travail, je fais du skate et j'aime
            beaucoup cuisiner.
          </p>
        </div>
      </div>
    </div>
  );
}
