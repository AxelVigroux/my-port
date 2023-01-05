import "./Work.css";

export default function Work() {
  const Project = ({ id, title, technos, link, picture }) => {
    return (
      <div className="project-container">
        <div className="picture">
          <img src="https://picsum.photos/650/650" alt="work picture" />
        </div>
        <div className="bottom">
          <div className="id">
            <p>0{id}</p>
          </div>
          <div className="info-cta">
            <div className="info">
              <p>
                {title} - {technos}
              </p>
            </div>
            <div className="cta">
              <a href={link} target="_blank">Clique pour découvrir</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const projects = [
    {
      id: 1,
      picture: "",
      title: "Gamble bike",
      technos: "React.js / Node",
      position: "left",
      link: "https://github.com/AxelVigroux/gamble-bike",
    },
    {
      id: 2,
      picture: "",
      title: "Filo Blind Test",
      technos: "React / Node",
      position: "right",
      link: "https://filo-blind-test.netlify.app/",
    },
    {
      id: 3,
      picture: "",
      title: "E-pottery",
      technos: "React / Node",
      position: "left",
      link: "https://github.com/AxelVigroux/E-pottery",
    },
    {
      id: 4,
      picture: "",
      title: "SpotX",
      technos: "React / Node",
      position: "right",
      link: "https://github.com/AxelVigroux/SpotX",
    },
    {
      id: 5,
      picture: "",
      title: "Mealories",
      technos: "Rails",
      position: "left",
      link: "https://github.com/AxelVigroux/mealories",
    },
    {
      id: 6,
      picture: "",
      title: "KittyPics",
      technos: "Rails",
      position: "right",
      link: "https://github.com/AxelVigroux/kitty_pics_thp",
    },
    {
      id: 7,
      picture: "",
      title: "SunnySide Agency",
      technos: "Html / Css / Js",
      position: "left",
      link: "https://github.com/AxelVigroux/Front-end-mentor-sunnyside",
    },
  ];

  return (
    <div className="work-container">
      <div className="left">
        {projects.map((element) =>
          element.position === "left" ? (
            <Project
              id={element.id}
              title={element.title}
              technos={element.technos}
              link={element.link}
            />
          ) : null
        )}
      </div>
      <div className="right">
        <div className="my-work">
          <h1>Mes travaux</h1>
          <h3>still in progress...</h3>
        </div>

        {projects.map((element) =>
          element.position === "right" ? (
            <Project
              id={element.id}
              title={element.title}
              technos={element.technos}
              link={element.link}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
