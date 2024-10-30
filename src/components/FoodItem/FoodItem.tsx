function FoodItem(attrs: {
  foodname: string;
  image: any;
  price: string;
  count: number;
}) {
  let foodAvailabilityClass = "available";
  let CountSpan = <span>{attrs.count}</span>;
  if (attrs.count == -1) {
    foodAvailabilityClass = "unavailable";
    CountSpan = <span>&infin;</span>;
  }
  return (
    <section className="section-menu">
      <article className={"menu-item " + foodAvailabilityClass}>
        <img src={attrs.image} />
        <h3>{attrs.foodname}</h3>
        <br />
        <br />
        <br />
        {CountSpan}
        <div dir="rtl" className="price">
          <strong>{attrs.price}</strong>
        </div>
      </article>
    </section>
  );
}

export default FoodItem;
