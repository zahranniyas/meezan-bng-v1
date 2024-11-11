// import Header from "./components/Header";
import About from "./components/About";
import Booking from "./components/Booking";
import Bungalows from "./components/Bungalows";
import { Footer } from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";

function App() {
  return (
    <section className="bg-[#faf6ee] scroll-smooth overflow-x-hidden">
      {/* <Header /> */}
      <Hero />
      <Mission />
      <About />
      <Bungalows />
      <Services />
      <Booking />
      <Gallery />
      <Footer />
    </section>
  );
}

export default App;
