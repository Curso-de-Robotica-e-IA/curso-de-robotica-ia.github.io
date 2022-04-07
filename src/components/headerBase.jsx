import { Link } from "react-router-dom";

export const HeaderBase = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header-base">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <nav className="navbar-brand-to-home">
            <Link to="/" style={{ color: "transparent" }}>
              CIn/Softex
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};
