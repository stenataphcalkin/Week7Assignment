export default function ReviewsContainer() {}

//!TASK Will want to run code similar to this from the oriignal project.

//!!!! UPDATE - Due to Render and Supabase causing with linking data or processing the code to Render, I am calling it quits at this moment as I can't trouble shoot it.
// async function retrieveReviewsDisplayAll() {

//   // Grabbing reviews from server
//   const serverResponse = await fetch ("https://week7assignment-nndr.onrender.com");

// const adventurerReviews = await serverResponse.json();
// const returnedSubmissionForms = document.getElementById("returned-submission-forms");

// //Loop for each review and display for x amount
// adventurerReviews.forEach((adventurerReview) => {
//    const adventurerReviews = document.createElement("div");

//    //Retrieve data for each review
//    adventurerReview.innerhtml = `
//    <b>Fellow adventuring member:</b>; ${adventurerReview.NAME}
//    <p>Species: ${adventurerReview.SPECIES}</p>
//    <p>Class: ${adventurerReview.CLASS}</p>
//    <p>Review: ${adventurerReview.TEXT_FEEDBACK}</p>`

//    //append
// adventurerReviews.appendChild(adventurerReview);
// }
