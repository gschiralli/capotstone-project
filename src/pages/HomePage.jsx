import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import Nav from "./../components/Nav/Nav";
import Specials from "./../components/Specials/Specials";

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
        <section className="specials container">
          <Specials />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
