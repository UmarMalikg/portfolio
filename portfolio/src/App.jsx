import { About } from "./components/about/About";
import { Contact } from "./components/contacts/Contact";
import { Footer } from "./components/footer/Footer";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
