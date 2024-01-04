"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function ShareMeal(FormData) {
  const meal = {
    creator: FormData.get("name"),
    creator_email: FormData.get("title"),
    title: FormData.get("title"),
    summary: FormData.get("summary"),
    instructions: FormData.get("instructions"),
    image: FormData.get("image"),
  };

 await saveMeal(meal);

 redirect("/meals")
 
}
