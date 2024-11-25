import { useState } from "react";

function FoodItem(attrs: {
  foodname: string;
  image: any;
  price: string;
  count: number;
  mode: string;
}) {
  const [changeMode, setchangeMode] = useState(attrs.count);
  const [mode, setMode] = useState<"increase" | "decrease">("increase");
  let foodAvailabilityClass = "available";
  let CountSpan = <span>{attrs.count}</span>;
  if (attrs.count == -1) {
    foodAvailabilityClass = "unavailable";
    CountSpan = <span>&infin;</span>;
  }

  const handleClick = () => {
    if (mode === "increase") {
      setchangeMode((prevchangemode) => prevchangemode + 1);
    }
    if (mode === "decrease") {
      setchangeMode((prevchangemode) => prevchangemode - 1);
    }
    console.log(changeMode);
  };
  return (
    <section className="section-menu">
      <article
        onClick={handleClick}
        className={"menu-item " + foodAvailabilityClass}
      >
        <img src={attrs.image} />
        <h3>{attrs.foodname}</h3>
        <br />
        <br />
        <br />
        <span>{changeMode}</span>
        <div dir="rtl" className="price">
          <strong>{attrs.price}</strong>
        </div>
      </article>
    </section>
  );
}

export default FoodItem;
