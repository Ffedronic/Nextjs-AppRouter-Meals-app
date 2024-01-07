"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

/**
 * The function checks if a given text is invalid, meaning it is either empty or consists only of
 * whitespace characters.
 * @param text - The parameter "text" is a string that represents the text that needs to be checked for
 * validity.
 * @returns The function isInvalidText returns a boolean value. It returns true if the text is invalid
 * (empty or only contains whitespace), and false otherwise.
 */

function isInvalid(text) {
  return !text || text.trim() === "";
}

export async function ShareMeal(prevState, FormData) {
  const meal = {
    creator: FormData.get("name"),
    creator_email: FormData.get("email"),
    title: FormData.get("title"),
    summary: FormData.get("summary"),
    instructions: FormData.get("instructions"),
    image: FormData.get("image"),
  };

  if (
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalid input" };
  }

  await saveMeal(meal);

  /* The `revalidatePath("/meals");` function is used to trigger a revalidation of the data for the
  "/meals" path. This means that the data for the "/meals" page will be fetched again from the
  server, ensuring that the most up-to-date data is displayed to the user. */
  revalidatePath("/meals");
  
  redirect("/meals");
}
