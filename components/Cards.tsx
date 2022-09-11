import React from "react";
import Container from "../layouts/Container";
import CardActivity from "./CardActivity";
import CardItems from "./CardItems";

function Cards() {
  return (
    <>
      <Container>
        <CardItems />
        <CardActivity />
      </Container>
    </>
  );
}

export default Cards;
