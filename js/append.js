AOS.init();
window.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('loaded');
});
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('#V-Tech-std-inpage .navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
function shareLocation() {
    const mapUrl = "https://goo.gl/maps/your-location-link"; // Replace with your Google Maps share link
    if (navigator.share) {
        navigator.share({
            title: 'Our Location',
            text: 'Check out our location on Google Maps!',
            url: mapUrl
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(mapUrl);
        alert('Location link copied to clipboard!');
    }
}

