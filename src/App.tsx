import React from "react";
import logo from "./logo.svg";
import omletImage from "./Images/Foods/Omlet.jpg";
import cheeseBurgerImage from "./Images/Foods/Cheese Burger.jpg";
import chipsoPanirImage from "./Images/Foods/Chips o Panir.jpg";
import fileSokhariImage from "./Images/Foods/File Sokhari.jpg";
import frenchFriesImage from "./Images/Foods/French Fries.jpg";
import hotdogImage from "./Images/Foods/Hotdog.jpg";
import humburgerImage from "./Images/Foods/Humburger.jpg";
import paniniMorghBaSosPastuImage from "./Images/Foods/Panini Morgh Ba Sos Pastu.jpg";
import pastaAlferedoImage from "./Images/Foods/Pasta Alferedo.jpg";
import pastaChickenPastuImage from "./Images/Foods/Pasta Chicken Pastu.jpg";
import royalHotdogTanuriImage from "./Images/Foods/Royal Hotdog Tanuri.jpg";
import royalMorghSokhariImage from "./Images/Foods/Royal Morgh Sokhari.jpg";
import saladeSezarImage from "./Images/Foods/Salade Sezar.jpg";
import sibzaminiBaSoseGharchImage from "./Images/Foods/Sibzamini Ba Sose Gharch.jpg";
import sibzaminiBaSosisoSosePanirImage from "./Images/Foods/Sibzamini Ba Sosis o Sose Panir.jpg";
import steakeMorghImage from "./Images/Foods/Steake Morgh.jpg";
import tosteMakhsusImage from "./Images/Foods/Toste Makhsus.jpg";
import "./App.css";
import FoodItem from "./components/FoodItem/FoodItem";

function App() {
  return (
    <div className="App">
      <main>
        <FoodItem
          foodname="املت"
          price="80000 تومان"
          image={omletImage}
          count={-1}
        />
        <FoodItem
          foodname="چیزبرگر"
          price="200000 تومان"
          image={cheeseBurgerImage}
          count={18}
        />
        <FoodItem
          foodname="چیپس و پنیر"
          price="160000 تومان"
          image={chipsoPanirImage}
          count={23}
        />
        <FoodItem
          foodname="فیله سوخاری"
          price="210000 تومان"
          image={fileSokhariImage}
          count={17}
        />
        <FoodItem
          foodname="فرنچ فرایز"
          price="110000 تومان"
          image={frenchFriesImage}
          count={13}
        />
        <FoodItem
          foodname="هات داگ"
          price="150000 تومان"
          image={hotdogImage}
          count={17}
        />
        <FoodItem
          foodname="همبرگر"
          price="180000 تومان"
          image={humburgerImage}
          count={31}
        />
        <FoodItem
          foodname="پنینی مرغ با سس پستو"
          price="200000 تومان"
          image={paniniMorghBaSosPastuImage}
          count={7}
        />
        <FoodItem
          foodname="پاستا آلفردو"
          price="180000 تومان"
          image={pastaAlferedoImage}
          count={22}
        />
        <FoodItem
          foodname="پاستا چیکن پستو"
          price="180000 تومان"
          image={pastaChickenPastuImage}
          count={21}
        />
        <FoodItem
          foodname="رویال هات داگ تنوری"
          price="170000 تومان"
          image={royalHotdogTanuriImage}
          count={18}
        />
        <FoodItem
          foodname="رویال مرغ سوخاری"
          price="220000 تومان"
          image={royalMorghSokhariImage}
          count={15}
        />
        <FoodItem
          foodname="سالاد سزار"
          price="200000 تومان"
          image={saladeSezarImage}
          count={25}
        />
        <FoodItem
          foodname="سیب زمینی با سس قارچ"
          price="150000 تومان"
          image={sibzaminiBaSoseGharchImage}
          count={31}
        />
        <FoodItem
          foodname="سیب زمینی با سوسیس و سس پنیر"
          price="180000 تومان"
          image={sibzaminiBaSosisoSosePanirImage}
          count={27}
        />
        <FoodItem
          foodname="استیک مرغ"
          price="200000 تومان"
          image={steakeMorghImage}
          count={34}
        />
        <FoodItem
          foodname="تست مخصوص"
          price="175000 تومان"
          image={tosteMakhsusImage}
          count={23}
        />
      </main>
    </div>
  );
}
export default App;
