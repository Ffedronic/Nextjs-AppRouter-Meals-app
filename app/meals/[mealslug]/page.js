import React from "react";

import classes from "./page.module.css";
import Image from "next/image";
import { getMealDetails } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const mealDetails = await getMealDetails(params.mealslug);
  return {
    title: mealDetails.title,
    description: mealDetails.summary,
  };
}

async function MealsDetailsPage({ params }) {
  const mealDetails = await getMealDetails(params.mealslug);

  if (!mealDetails) {
    notFound();
  }

  const instructions = mealDetails.instructions.replace(/\n/g, "<br/>");

  // console.log(mealDetails);
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={mealDetails.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{mealDetails.title}</h1>
          <p className={classes.creator}>
            by{" "}
            <a href={`mailto:${mealDetails.creator_email}`}>
              {mealDetails.creator}
            </a>
          </p>
          <p className={classes.summary}>{mealDetails.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealsDetailsPage;
