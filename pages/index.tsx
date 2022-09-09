import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
};

export default Home;
