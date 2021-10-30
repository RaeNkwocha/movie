import React from "react";
import Footer from "../movie component/Footer";
import Header from "../movie component/Header";
import Mobile from "../movie component/Mobile";
import Moviesection from "../movie component/Moviesection";
import Nav from "../movie component/Nav";

const Home = () => {
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <header>
        <Header></Header>
      </header>
      <section>
        <Moviesection></Moviesection>
      </section>
      <section>
        <Mobile></Mobile>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Home;
