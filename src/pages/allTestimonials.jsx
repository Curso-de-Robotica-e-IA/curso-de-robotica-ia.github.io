import { HeaderBase } from "../components/headerBase";
import { useState, useEffect } from "react";
import JsonData from "../data/data_home.json";

export const TestimonialsBody = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
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
        </div>
      </div>
    </div>
  );
};

export const AllTestimonials = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <HeaderBase />
      <TestimonialsBody data={landingPageData.Testimonials} />
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
export default AllTestimonials;
