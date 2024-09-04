import Pdf from "../../data/CBEB_2024_Moacir.pdf";

export const Publications = (props) => {
  return (
    <div id="publications" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conheça nossas Publicações</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="text">
                      <h3>{d.title}</h3>
                      <p>{d.abstract}</p>
                    </div>
                    <div className="btn btn-custom btn-lg page-scroll">
                      <a
                        href={Pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#FFF" }}
                      >
                        Disponível aqui
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
