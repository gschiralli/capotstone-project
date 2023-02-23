import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Nav from "./../components/Nav/index";

const HomePage = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="cta">
          <Cta />
        </section>
        <section className="specials"></section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
