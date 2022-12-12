import { HeaderBase } from "../components/headerBase";
import { useState, useEffect } from "react";
import JsonData from "../data/data_projects.json";
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
          <iframe width="380" height="833" src="https://www.youtube.com/embed/rQnlDgjjo54" title="ESMAPE 2022   Auditoria das urnas eletrônicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="380" height="833" src="https://www.youtube.com/embed/uup_UPClbcM" title="ESMAPE 2022   Auditoria das urnas eletrônicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="380" height="833" src="https://www.youtube.com/embed/1QwPEIgUALc" title="visitaIFRN ao projeto Cin Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="380" height="833" src="https://www.youtube.com/embed/LoVZEM6PKx4" title="Cintec   Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="380" height="833" src="https://www.youtube.com/embed/4lnWh0hX9KE" title="Cintec   Espaço Ciência" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="380" height="833" src="https://www.youtube.com/embed/lT7-5BrrmjI" title="Formatura da primeira turma da ResidêncIA em Robótica do CIn   UFPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/VzqL947ChT0" title="Dia das crianças CIn Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/i3ds4mboMOk" title="Dia das crianças CIn Softex" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/6Bu9Zy8S0JA" title="Reportagem CINTEC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/hj5-As9p5lM" title="Apresentação do Projeto Pelo Professor Alexandre à Softex   Parte 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/kaYlwPm9Lm8" title="Apresentação do Projeto Pelo Professor Alexandre à Softex - Parte 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/pPeMrgiMShw" title="Funcionamento de um dos Trabalhos de Graduação da Residência em Robótia e IA do CIn - UFPE (Emilly)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/QFncY5YDjDQ" title="InvcludeVote - Técnologia assistiva através da movimentação da cabeça e olhos. TCC Felipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/KxlbohE1N6I" title="Teleoperação - usando visão computacional para movimentar braço robótico. TCC Pedro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/BREL5BddfP4" title="Manipulação de ventosas - Robô usando visão computacional para movimentar braço robótico. TCC Yves" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="570" height="385" src="https://www.youtube.com/embed/MYloFKE49oY" title="Oculos assistivo - usando arduíno para auxilio de pessoas com deficiência motora. TCC Greenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
