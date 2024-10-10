document.addEventListener("DOMContentLoaded", function() {
    const clickableSpan = document.querySelector('.clickable-title');

    function highlightSpan() {
        clickableSpan.classList.add('highlight');
    }

    clickableSpan.addEventListener('mouseover', function(event) {
        highlightSpan();
    });

    clickableSpan.addEventListener('mouseout', function(event) {
        clickableSpan.classList.remove('highlight');
    });

    clickableSpan.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        highlightSpan();
    });

    clickableSpan.addEventListener('touchend', function(event) {
        // Allow the default action to happen after highlighting
        setTimeout(() => {
            window.location.href = clickableSpan.href; // Navigate to the link
        }, 300); // Match this with the transition duration in CSS
    });

    clickableSpan.addEventListener('click', function(event) {
        highlightSpan();
        // Allow the default action to happen after highlighting
        setTimeout(() => {
            window.location.href = clickableSpan.href; // Navigate to the link
        }, 300); // Match this with the transition duration in CSS
    });

});