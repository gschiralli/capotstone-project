import Testimonials from "../Testimonials/Testimonials";
import "./customersSay.css";

const CustomersSay = () => {
  const cols = [
    {
      id: 1,
      content: <Testimonials />,
    },
    {
      id: 2,
      content: <Testimonials />,
    },

    {
      id: 3,
      content: <Testimonials />,
    },
    {
      id: 4,
      content: <Testimonials />,
    },
  ];
  return (
    <div class="testimonials">
      <div class="inner">
        <h1>Testimonials</h1>
        <div class="border"></div>
        <div class="row">
          {cols.map((col) => (
            <div key={col.id} className="col">
              {col.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
