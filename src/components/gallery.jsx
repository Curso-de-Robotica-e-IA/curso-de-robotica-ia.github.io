import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
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
          </div>
          <iframe width="390" height="833" src="https://www.youtube.com/embed/rjOokDi4yes" title="Cintec - Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="390" height="833" src="https://www.youtube.com/embed/BLKreFrKui8" title="Cintec - Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="390" height="833" src="https://www.youtube.com/embed/UfhivxLXYSw" title="visitaIFRN ao projeto Cin/Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};
            
