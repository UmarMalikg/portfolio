import { About } from "./components/about/About";
import { Contact } from "./components/contacts/Contact";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import "../src/styles/style.scss";
import { CareerPrep } from "./components/careerPrep/CareerPrep";

function App() {
  return (
    <>
      <div className="app">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <CareerPrep />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
