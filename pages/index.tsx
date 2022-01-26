import type { NextPage } from "next";

import { Meta } from "../components/Core/Meta";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { OurTeam } from "../components/OurTeam";
import { Services } from "../components/Services";
import { AppConfig } from "../utils/AppConfig";

const Home: NextPage = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Intro />
      <Services />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
