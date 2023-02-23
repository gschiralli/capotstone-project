import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";
import Nav from "./../components/Nav/Nav";

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
