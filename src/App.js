import React from "react";

import {
  Navbar,
  Hero,
  Marquee,
  Produtos,
  PedidoSection,
} from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Produtos />
        <PedidoSection />
      </main>
    </div>
  );
}

export default App;
