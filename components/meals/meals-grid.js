import React from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

function MealsGrid({ meals }) {
  if (meals.length == 0 || !meals) {
   return (
    <div className={classes.noMeals}>
        <p>No meals added yet !</p>
    </div>
   )
  }

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid;
