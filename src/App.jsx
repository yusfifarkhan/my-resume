import Hero from "./components/Hero";
import Files from "./components/Files";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import { items } from "./data/GalleryData.json";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Resume />
      <Gallery data={items} />
      <Files />
      <Footer />
    </>
  );
};

export default App;
