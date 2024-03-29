import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMealDetails(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  //create a slug with slugify
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  /* This code block is responsible for saving an image file associated with a meal. */
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed");
    }
  });
  meal.image = `/images/${fileName}`;

  return db
    .prepare(
      "INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)"
    )
    .run(meal);
}
