import { HeaderBase } from "../../headerBase";
import { useState, useEffect } from "react";
import { BlogPost } from "../../blogPost";
import JsonData from "../../../data/data_projects.json"

export const Project = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <HeaderBase />
      <BlogPost data={landingPageData.Project} />
      <div id="blogpost">
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
export default Project;