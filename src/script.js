document.addEventListener('DOMContentLoaded', function() {
    // Example function to display an alert when the page loads
    console.log("Welcome to my resume page!");

    // Function to change text content on a button click
    const aboutSection = document.querySelector('.about');
    const button = document.createElement('button');
    button.textContent = 'Click me for a surprise';
    aboutSection.appendChild(button);

    button.addEventListener('click', function() {
        alert('Thanks for visiting my resume page!');
    });
});
