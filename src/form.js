document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const successMessage = document.getElementById("successMessage");

    // Add an event listener to the form's submit event
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the form from submitting normally

        // Show the success message
        successMessage.style.display = "block";

        // Hide the success message after 5 seconds (optional)
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);

        // Optionally, you can clear the form fields
        form.reset();
    });
});