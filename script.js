document.addEventListener("DOMContentLoaded", function () {
    // Simulate the delay with setTimeout
    setTimeout(function () {
        // Hide the loader
        document.querySelector('.loader-container').style.display = 'none';

        // Show the main content
        document.querySelector('.main-content').style.display = 'block';

        // Navigate to the home page
        window.location.href = 'index.html'; // Adjust the path as needed
    }, 2000); // Adjust the time as needed
});
