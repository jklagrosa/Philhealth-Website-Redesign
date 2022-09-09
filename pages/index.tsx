import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Cards />
    </>
  );
};

export default Home;
