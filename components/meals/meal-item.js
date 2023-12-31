import Image from "next/image";
import React from "react";
import Link from "next/link";

import classes from "./meal-item.module.css";

function MealItem({ image, title, creator, summary, slug }) {
  return (
    <article className={classes.meal}>
      <header>
        <Image src={image} alt={title} fill />
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator} </p>
        </div>
        <div className={classes.content}>
          <p className={classes.summary}>{summary}</p>
          <div className={classes.actions}>
            <Link href={`/meals/${slug}`}>View Details</Link>
          </div>
        </div>
      </header>
    </article>
  );
}

export default MealItem;
