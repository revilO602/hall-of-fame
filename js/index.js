document.addEventListener("DOMContentLoaded", function() {
    const clickableSpans = document.querySelectorAll('.clickable-title'); // Select all elements with class 'clickable-title'

    clickableSpans.forEach(function(clickableSpan) {
        function highlightSpan() {
            clickableSpan.classList.add('highlight');
        }

        clickableSpan.addEventListener('mouseover', function() {
            highlightSpan();
        });

        clickableSpan.addEventListener('mouseout', function() {
            clickableSpan.classList.remove('highlight');
        });

        clickableSpan.addEventListener('touchstart', function(event) {
            event.preventDefault(); // Prevent default touch behavior
            highlightSpan();
        });

        clickableSpan.addEventListener('touchend', function() {
            window.location.href = clickableSpan.href; // Navigate to the link
            clickableSpan.classList.remove('highlight');
        });

        clickableSpan.addEventListener('click', function(event) {
            window.location.href = clickableSpan.href; // Navigate to the link
        });
    });
});
