import JsonData from "../../data/data_projects.json";
import SmoothScroll from "smooth-scroll";
import "../../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Navigation } from "../../components/projects/2022/navigation";
import { Header } from "../../components/projects/2022/header";
import { About } from "../../components/projects/2022/about";
import { Gallery } from "../../components/projects/2022/gallery";
import { Testimonials } from "../../components/projects/2022/testimonials";
import { Team } from "../../components/projects/2022/team";
import { Achievements } from "../../components/projects/2022/achievements";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export const Project2022 = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Achievements data={landingPageData.Achievements} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default Project2022;
