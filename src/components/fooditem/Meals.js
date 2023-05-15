import React from "react";
import classes from "./Meals.module.css";
import Itemform from "./ItemForm";
import butternaan from "../../Assets/buttr naan.jpg";
import chanamasala from "../../Assets/chana masal.jpg";
import dalfry from "../../Assets/dal fry.jpg";
import lemonrice from "../../Assets/lemon rice.jpg";
import mixveg from "../../Assets/mix veg.jpg";
import mushroom from "../../Assets/mushroom-curry-.jpg";
import palakpaner from "../../Assets/palak panner.jpg";
import paneerbuttur from "../../Assets/paneer-butter.jpg";

const imgsrc = [
  butternaan,
  chanamasala,
  dalfry,
  lemonrice,
  mixveg,
  mushroom,
  palakpaner,
  paneerbuttur,
];
const fakeMeals = [
  {
    id: "1m",
    name: "buttur naan",
    description: "Garlic coated",
    price: 60,
  },
  {
    id: "2m",
    name: "chana masala",
    description: "finest cabuli chana",
    price: 100,
  },
  {
    id: "3m",
    name: "dal fry",
    description: "mast dhania dale hai",
    price: 80,
  },
  {
    id: "4m",
    name: "lemon rice",
    description: "sab khatta khatta hai",
    price: 140,
  },
  {
    id: "5m",
    name: "mix veg",
    description: "bahut sabji hai ishme",
    price: 120,
  },
  {
    id: "6m",
    name: "mushroom curry",
    description: "mast maza ayega khane me",
    price: 120,
  },
  {
    id: "7m",
    name: "palak peneer",
    description: "sab hara hara hai",
    price: 150,
  },
  {
    id: "8m",
    name: "paneer masala",
    description: "mouth watering",
    price: 160,
  },
];

const Meal = (props) => {
  return (
    <React.Fragment>
      <main className={classes["meal-container"]}>
        {fakeMeals.map((meal, i) => {
          return (
            <div key={meal.id} className={classes["meal-item"]}>
              <img src={imgsrc[i]} alt={meal.name} />
              <div>
                <h1>{meal.name}</h1>
                <p>{meal.description}</p>
                <p>₹{meal.price}</p>
              </div>
              <Itemform id={meal.id} name={meal.name} price={meal.price} />
            </div>
          );
        })}
      </main>
    </React.Fragment>
  );
};
export default Meal;
