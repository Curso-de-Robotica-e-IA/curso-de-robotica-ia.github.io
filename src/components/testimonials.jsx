import { Link } from "react-router-dom";

export const Testimonials = (props) => {
  function isMain(element) {
    return element ? element.main : false;
  }

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Depoimento de Residentes</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.filter(isMain).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
          <div className="col-md-12 col-md-offset-5 intro-text">
            <nav className="btn btn-custom btn-lg page-scroll">
              <Link to="/all-testimonials" style={{ color: "#FFF" }}>
                Veja Todos
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
