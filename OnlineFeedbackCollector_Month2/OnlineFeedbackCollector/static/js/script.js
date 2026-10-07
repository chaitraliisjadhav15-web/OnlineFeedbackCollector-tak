document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comments = document.getElementById("comments").value.trim();
        const rating = document.querySelector(
            'input[name="rating"]:checked'
        );

        if (!name || !email || !comments || !rating) {
            event.preventDefault();
            alert("Please complete all the fields before submitting.");
        }
    });
});
