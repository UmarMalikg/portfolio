import { About } from "./components/about/About";
import { Contact } from "./components/contacts/Contact";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import "../src/styles/style.scss";

function App() {
  return (
    <>
      <div className="app">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
