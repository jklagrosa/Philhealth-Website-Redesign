import React from "react";
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <>
      <div
        className="bg-[url('/assets/hero.jpg')] 2xl:container bg-cover bg-center h-80"
        id={styles._hero_bg_}
      >
        Et aliqua ex et excepteur et aliqua. Enim quis minim consequat quis in
        labore minim consequat quis. Minim tempor adipisicing id duis sint
        eiusmod tempor Lorem esse culpa velit. Ullamco dolor culpa magna
        exercitation consequat enim in ad exercitation ex aute laboris aliqua.
        Pariatur et irure aliquip enim duis veniam.
      </div>
    </>
  );
}

export default Hero;
