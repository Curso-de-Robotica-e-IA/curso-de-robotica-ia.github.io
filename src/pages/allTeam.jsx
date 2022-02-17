import { HeaderBase} from "../components/headerBase";
import { TeamMenuInfo} from "../components/teamVerticalMenuInfo"
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";

export const AllTeam = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
  
    return (
        <div>
            <HeaderBase/>
            <TeamMenuInfo data={landingPageData.Team}/>
        </div>
    );
};
export default AllTeam;