export const TeamMenuInfo = (props) => {
  return (
    <div
      id="team-menu"
      style={{
        margin: "100px 10px",
      }}
    >
      <div className="container">
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-12 col-md-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h3>{d.name}</h3>
                      <h6>{d.job}</h6>
                      <p>{d.bio}</p>
                      <div>
                        <span>
                          {d.contact.split("\n").map((line) => (
                            <p>{line}</p>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
        <div className="text-center">
        <h3>Menção aos nossos colaboradores do Voxar no primeiro ano do projeto.</h3>
        
        </div>
    </div>
  );
};
