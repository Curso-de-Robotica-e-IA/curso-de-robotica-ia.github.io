import { Image } from "../../image";
import { Link } from "react-router-dom";

export const Gallery = (props) => {
  function isMain(element) {
    return element ? element.main : false;
  }
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.filter(isMain).map((d, i) => (
                <div
                key={`${d.title}-${i}`}
                className="col-sm-6 col-md-4 col-lg-4"
                >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
                : "Loading..."}
              <div className="col-md-8 col-md-offset-2 intro-text">
                <nav className="btn btn-custom btn-lg page-scroll">
                  <Link to="/all-gallery" style={{ color: "#FFF" }}>
                    Ver Mais
                  </Link>
                </nav>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
            
