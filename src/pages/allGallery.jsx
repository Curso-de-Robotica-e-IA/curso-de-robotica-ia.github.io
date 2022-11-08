import { HeaderBase } from "../components/headerBase";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { Image } from "../components/image";

export const GalleryBody = (props) => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="text-center">
        <h2>Galeria</h2>
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
                    : "loading"}
                </div>
            </div>
        </div>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/rjOokDi4yes" title="Cintec - Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/BLKreFrKui8" title="Cintec - Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/UfhivxLXYSw" title="visitaIFRN ao projeto Cin/Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/HUYz2q64ccg" title="ESMAPE 2022 - Auditoria das urnas eletrônicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/95i3HsjC2mA" title="ESMAPE 2022 - Auditoria das urnas eletrônicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="380" height="833" src="https://www.youtube.com/embed/5WuWPYapu9s" title="Formatura da primeira turma da ResidêncIA em Robótica do CIn - UFPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="570" height="400" src="https://www.youtube.com/embed/QEt43pkAzVo" title="Dia das crianças CIn/Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="570" height="400" src="https://www.youtube.com/embed/37ylskxBBUA" title="Dia das crianças CIn/Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="570" height="400" src="https://www.youtube.com/embed/oLhBFcmoqW8" title="Apresentação do Projeto Pelo Professor Alexandre à Softex - Parte 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="570" height="400" src="https://www.youtube.com/embed/j0dN981M17M" title="Apresentação do Projeto Pelo Professor Alexandre à Softex - Parte 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="570" height="400" src="https://www.youtube.com/embed/M0pAhhV3TuY" title="Reportagem CINTEC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export const AllGallery = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <HeaderBase />
      <GalleryBody data={landingPageData.Gallery} />
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AllGallery;
