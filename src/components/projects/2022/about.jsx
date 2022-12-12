export const About = (props) => {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/portfolio/TRE/07-TRE-Large.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="text-img">
                <h2>O projeto</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
              <a
                  href="/blogpost"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Saiba mais
                </a>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };
  