import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  // console.log(meals);
  return <MealsGrid meals={meals} />;
}

async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
