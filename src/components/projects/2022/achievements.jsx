export const Achievements = (props) => {
  return (
    <div id="achievements" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Destaques</h2>
            <p>
              Aqui estão alguns dos nossos residentes que se destacaram no
              projeto.
            </p>
          </div>
          <div id="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-3 col-sm-6 team"
                  >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
