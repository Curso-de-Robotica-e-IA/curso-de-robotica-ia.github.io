import { HeaderBase } from "../../components/headerBase";
import { useState, useEffect } from "react";
import { BlogPost } from "../../components/blogPost";
import JsonData from "../../data/data.json";

export const Project0 = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <HeaderBase />
      <BlogPost data={landingPageData.Project0} />
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
export default Project0;
