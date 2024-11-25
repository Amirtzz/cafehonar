import React, { useState, useEffect } from "react";
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
  const App: React.FC = () => {
    const [changeMode, setChangeMode] = useState(0);
    const [mode, setMode] = useState<"increase" | "decrease">("increase");
    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "i") {
          setMode("increase");
        } else if (event.key === "d") {
          setMode("decrease");
        }
      };
      window.addEventListener("keydown", handleKeyPress);
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }, []);
    const handleClick = () => {
      if (mode === "increase") {
        setChangeMode((prevchangemode) => prevchangemode + 1);
      }
      if (mode === "decrease") {
        setChangeMode((prevchangemode) => prevchangemode - 1);
      }
      console.log(changeMode);
    };
    return (
      <div className="App">
        <main>
          <FoodItem
            foodname="املت"
            price="80000 تومان"
            image={omletImage}
            count={34}
            mode=""
          />
          <FoodItem
            foodname="چیزبرگر"
            price="200000 تومان"
            image={cheeseBurgerImage}
            count={18}
            mode=""
          />
          <FoodItem
            foodname="چیپس و پنیر"
            price="160000 تومان"
            image={chipsoPanirImage}
            count={23}
            mode=""
          />
          <FoodItem
            foodname="فیله سوخاری"
            price="210000 تومان"
            image={fileSokhariImage}
            count={17}
            mode=""
          />
          <FoodItem
            foodname="فرنچ فرایز"
            price="110000 تومان"
            image={frenchFriesImage}
            count={13}
            mode=""
          />
          <FoodItem
            foodname="هات داگ"
            price="150000 تومان"
            image={hotdogImage}
            count={17}
            mode=""
          />
          <FoodItem
            foodname="همبرگر"
            price="180000 تومان"
            image={humburgerImage}
            count={31}
            mode=""
          />
          <FoodItem
            foodname="پنینی مرغ با سس پستو"
            price="200000 تومان"
            image={paniniMorghBaSosPastuImage}
            count={7}
            mode=""
          />
          <FoodItem
            foodname="پاستا آلفردو"
            price="180000 تومان"
            image={pastaAlferedoImage}
            count={22}
            mode=""
          />
          <FoodItem
            foodname="پاستا چیکن پستو"
            price="180000 تومان"
            image={pastaChickenPastuImage}
            count={21}
            mode=""
          />
          <FoodItem
            foodname="رویال هات داگ تنوری"
            price="170000 تومان"
            image={royalHotdogTanuriImage}
            count={18}
            mode=""
          />
          <FoodItem
            foodname="رویال مرغ سوخاری"
            price="220000 تومان"
            image={royalMorghSokhariImage}
            count={15}
            mode=""
          />
          <FoodItem
            foodname="سالاد سزار"
            price="200000 تومان"
            image={saladeSezarImage}
            count={25}
            mode=""
          />
          <FoodItem
            foodname="سیب زمینی با سس قارچ"
            price="150000 تومان"
            image={sibzaminiBaSoseGharchImage}
            count={31}
            mode=""
          />
          <FoodItem
            foodname="سیب زمینی با سوسیس و سس پنیر"
            price="180000 تومان"
            image={sibzaminiBaSosisoSosePanirImage}
            count={27}
            mode=""
          />
          <FoodItem
            foodname="استیک مرغ"
            price="200000 تومان"
            image={steakeMorghImage}
            count={34}
            mode=""
          />
          <FoodItem
            foodname="تست مخصوص"
            price="175000 تومان"
            image={tosteMakhsusImage}
            count={23}
            mode=""
          />
        </main>
      </div>
    );
  };
}
export default App;
