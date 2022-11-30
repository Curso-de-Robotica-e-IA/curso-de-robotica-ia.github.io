import { Link } from "react-router-dom";
import { Image } from "./image";
export const Selection = (props) => {
    return (
      <header id="header">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 selection">
                  <h1>
                    Processo Seletivo 2023
                  </h1>
                  <div>
                    {" "}
                    <img src="img/selecao-2023.jpg" className="img-responsive" alt="" />{" "}
                  </div>
                  <p>{props.data ? props.data.image : "Loading"}</p>
                  <a
                    href="bit.ly/turma2residenciarobotica_ia"
                    className="btn btn-custom btn-lg"
                  >
                    Formulário de Inscrição
                  </a>{" "}
                </div>
              </div>
          </div>
        </div>
      </header>
    );
  };