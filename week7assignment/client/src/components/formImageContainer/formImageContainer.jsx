import React, { useState } from "react";

export default function RTAReviewForm() {
  return <AdventurerReviewForm />;
}

// Main form
const AdventurerReviewForm = () => {
  // Input states
  const [formData, setFormData] = useState({
    adventurerName: "",
    adventurerSpecies: "",
    adventurerClass: "",
    reviewForm: "",
  });

  // feedback submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // update state w/ input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle form sub
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    console.log("Review submitted:", formData);

    // clear form post-sub'
    setFormData({
      adventurerName: "",
      adventurerSpecies: "",
      adventurerClass: "",
      reviewForm: "",
    });
  };

  return (
    <div className="rma-submission-form-area">
      {/* IMAGE CONTAINER */}
      <div className="rma-image-segment">
        <img src="./src/Khasrae-poster.jpg" alt="Khasrae's Poster" />
      </div>

      {/* REVIEW SEGMENT */}
      <h2>Submit thy review</h2>
      <div className="rma-image-form-grid">
        <div className="rma-form-segment">
          {/* FORM FIELDS */}
          <form
            id="rma-form"
            onSubmit={handleSubmit}
            aria-label="Adventurer image and review area"
          >
            {/* NAME */}
            <label htmlFor="adventurerName">Name:</label>
            <input
              id="adventurerName"
              type="text"
              name="adventurerName"
              value={formData.adventurerName}
              onChange={handleChange}
              maxLength={50}
              placeholder="What do others call you? (Keep it polite, please)"
              aria-label="Adventurer Name text box"
            />

            {/* SPECIES */}
            <label htmlFor="adventurerSpecies">Species:</label>
            <input
              id="adventurerSpecies"
              type="text"
              name="adventurerSpecies"
              value={formData.adventurerSpecies}
              onChange={handleChange}
              maxLength={50}
              placeholder="Dread Gazebo, Elf, etc."
              aria-label="Adventurer Species text box"
            />

            {/* CLASS */}
            <label htmlFor="adventurerClass">Class:</label>
            <input
              id="adventurerClass"
              type="text"
              name="adventurerClass"
              value={formData.adventurerClass}
              onChange={handleChange}
              maxLength={50}
              placeholder="Bard, Murder-Hobo etc."
              aria-label="Adventurer Class text box"
            />

            {/* TEXT REVIEW */}
            <label htmlFor="reviewForm">Review:</label>
            <textarea
              id="reviewForm"
              name="reviewForm"
              value={formData.reviewForm}
              onChange={handleChange}
              rows="3"
              maxLength={300}
              placeholder="What were they like on your adventure? What did you like about them, or not? How can they improve?"
              aria-label="Adventurer Review text box"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <br />
            <button
              type="submit"
              className="reviewButton"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
