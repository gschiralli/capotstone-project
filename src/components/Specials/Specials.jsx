import Button from "../Button/Button";
import Card from "../Card/Card";
import "./specials.css";
import greeksalad from "../../assets/greeksalad.jpg";
const Specials = () => {
  const specials = [
    {
      imgsrc: greeksalad,
      title: "Greek Salad",
      price: "12.99",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus.",
    },
    {
      imgsrc: greeksalad,
      title: "Greek Salad 2",
      price: "12.99",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus.",
    },
    {
      imgsrc: greeksalad,
      title: "Greek Salad 3",
      price: "12.99",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusamus.",
    },
  ];
  return (
    <>
      <div className="specials-flex ">
        <h1>This weeks Specials!</h1>
        <Button title={"Online Menu"} />
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <Card key={special.title} {...special} />
        ))}
      </div>
    </>
  );
};

export default Specials;
