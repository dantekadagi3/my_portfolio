// eslint-disable-next-line no-unused-vars
import React from "react";
import Navigation from "../components/Navbar";
import Title from "../components/Title";
import Rotate from "../components/Rotator";


function Home() {
  return (
    <section >
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Title />
    <Rotate />
</div>
    </section>
  );
}

export default Home;