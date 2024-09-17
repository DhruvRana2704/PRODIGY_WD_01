window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const content= document.querySelector('.content');

    if (window.scrollY > 10) {
        navbar.style.backgroundColor = 'black'; // Darker background on scroll
        content.style.backgroundColor = 'yellow'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = 'grey'; // Original background
        content.style.backgroundColor = 'aqua'; // Original background
    }
});
