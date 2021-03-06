import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";

export const Skills = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Habilidades e Tecnologias</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}>
                    {d.usingAwesomeClass ? (
                      d.icon === "fa fa-brain" ? (
                        <FontAwesomeIcon icon={faBrain} />
                      ) : (
                        <FontAwesomeIcon icon={faRobot} />
                      )
                    ) : (
                      ""
                    )}
                  </i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
