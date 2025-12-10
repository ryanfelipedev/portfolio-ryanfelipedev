import React from "react";
// import { motion } from "framer-motion";
import Header from "./components/Headers";
import Home from "./components/sections/Home";
import Sobre from "./components/sections/Sobre";
import Projetos from "./components/sections/Projetos";
import Contato from "./components/sections/Contato";

const App = () => {
  return (
    <>

      
      

      {/*  CONTEÚDO */}
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />

    </>
  );
};

export default App;
