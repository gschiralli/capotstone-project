import chefs1 from "../../assets/chefs1.jpg";

const Hero = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="hero-text">
          <h1
            style={{
              fontSize: "4rem",
              lineHeight: "4rem",
              maxWidth: "none",
              minWidth: "19rem",
            }}
          >
            <span>Little Lemon</span>
            <br />
            Chicago
          </h1>
          <p style={{ color: "black", lineHeight: "2rem", maxWidth: "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            nostrum temporibus exercitationem facere blanditiis, enim impedit
            doloremque repellat nam voluptatum amet, a provident pariatur?
            Dolorem officia, eum vel modi qui autem culpa voluptatibus ratione
            ipsam magnam quo sed dignissimos corporis! Accusamus reprehenderit
            esse est ab!
          </p>
        </div>
        <div
          className="img-container"
          style={{ height: "26rem", width: "115rem" }}
        >
          <img style={{ objectFit: "cover" }} src={chefs1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
