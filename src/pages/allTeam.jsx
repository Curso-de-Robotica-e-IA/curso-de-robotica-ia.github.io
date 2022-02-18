import { HeaderBase } from "../components/headerBase";
import { TeamMenuInfo } from "../components/teamVerticalMenuInfo";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

export const AllTeam = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <HeaderBase />
      <TeamMenuInfo data={landingPageData.Team} />
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
export default AllTeam;
