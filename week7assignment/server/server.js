import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(express.json());
app.use(cors());

//Set port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

// Root welcome
app.get("/", function (req, res) {
  res.json({ message: "Welcome to Rate Thine Adventurer." });
});

//Initial data fetch test during troubleshooting
// app.get("/khasrae", async (req, res) => {
//   try {
//     const result = await db.query("SELECT * FROM khasrae");
//     res.json(result.rows);
//   } catch (error) {
//     console.error("Error in the GET /khasrae route:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Unable to retrieve Khasrae's data" });
//   }
// });

//! I had attempted to join the databases but for some reason it is causing me an absolute headache, despite doing so previously with this code in the workshops for another set of tables:
// -- SELECT tamers.id AS tamer_id, tamers.name AS tamer_name, digimon.name AS digimon_name
// --   FROM tamers tamers JOIN digimon ON digimon.tamer_id = tamers.id

// --  SELECT "RTAAdventurers"."id" AS "RTAAdventurer_id", "RTAAdventurers"."name" AS "RTAAdventurer_name", "RTAReviewers"."name" AS "RTAReviewers_name" FROM "RTAAdventurers" JOIN "RTAReviewers" ON "RTAReviewers"."RTAAdventurer_id" = "RTAAdventurers"."id";

//!I have since tried this with the following, and it still refuses to link / join the tables permanently
// SELECT
//     r.name,
//     r.heroclass,
//     r.species,
//     r.textfeedback AS review
// FROM
//     rtareviewers AS r
// JOIN
//     rtaadventurers AS a
// ON
//     r.adventurerid = a.id  -- This correctly links reviews to adventurers
// WHERE
//     a.id = 1;

//Adventurer being reviewed
app.get("/rtaadventurers", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT name, class, species FROM rtaadventurers"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error in the GET /rtaadventurers route:", error);
    res.status(500).json({
      success: false,
      message: "Unable to retrieve rtaadventurers' data",
    });
  }
});

//Current Reviewers
app.get("/rtareviewers", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT name, species, heroclass, textfeedback FROM rtareviewers"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error in the GET /rtareviewers route:", error);
    res.status(500).json({
      success: false,
      message: "Unable to retrieve rtareviewers' data",
    });
  }
});

// Add new review
app.post("/rtareviewers", async (req, res) => {
  const { name, species, heroclass, textfeedback } = req.body;
  try {
    const result = await db.query(
      `INSERT INTO "rtareviewers" (name, species, heroclass, textfeedback) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, species, heroclass, textfeedback]
    );
    res.status(201).json({
      success: true,
      message: "Thank you! Your review has been posted.",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error in the POST /rtareviewers route:", error);
    res.status(500).json({
      success: false,
      message:
        "Unfortunately, we are unable to post the review at this time. Please try again later!",
    });
  }
});

app.delete("/rtareviewers/:id", async (req, res) => {
  const reviewPostId = req.params;

  try {
    const result = await db.query(
      `DELETE FROM "rtareviewers" WHERE id = $1 RETURNING *`,
      [reviewPostId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: `Unable to locate review no. ${reviewPostId}. Do you have ReviewVision?`,
      });
    }

    res.status(200).json({
      success: true,
      message: `Review no. ${reviewPostId} deleted via Mimic gnawing.`,
    });
  } catch (error) {
    console.error("Error in the DELETE /RTAReviewers/:id route:", error);
    res.status(500).json({
      success: false,
      message:
        "Unable to delete review due to Goblin intervention. Please try again later.",
    });
  }
});
