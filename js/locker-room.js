// locker-room.js
document.addEventListener("DOMContentLoaded", function() {
    const locker1 = document.querySelector('.locker1');
    const hoverDiv = document.getElementById('hover-locker1');
    const cardLocker1 = document.getElementById('card-locker1');
    const cardLocker1Area = document.getElementById('card-locker1-area');
    function showHover() {
        hoverDiv.style.display = 'block';
    }
    function showCard() {
        cardLocker1.style.display = 'block';
        cardLocker1Area.style.display = 'block';
    }

    function hideCard() {
        cardLocker1.style.display = 'none';
        cardLocker1Area.style.display = 'none';
    }

    function hideHover() {
        hoverDiv.style.display = 'none';
    }

    // Handle hover for desktop (mouse)
    locker1.addEventListener('mouseover', function() {
        showHover();
    });

    locker1.addEventListener('mouseout', function() {
        hideHover();
    });

    locker1.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showHover();
    });

    locker1.addEventListener('touchend', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHover();
        showCard();
    });

    locker1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHover();
        showCard();
    });

    // Close the card when clicking outside the card area
    cardLocker1.addEventListener('click', function (event) {
        if (cardLocker1.style.display === 'block') {
            if (!cardLocker1Area.contains(event.target)) {
                hideCard();
            }
        }
    });

    // Prevent the card from closing when the card area is clicked
    cardLocker1Area.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const helmet = document.querySelector('.helmet');
    const hoverDiv = document.getElementById('hover-helmet');
    const cardHelmet = document.getElementById('card-helmet');
    const cardHelmetArea = document.getElementById('card-helmet-area');

    function showHover() {
        hoverDiv.style.display = 'block';
    }
    function hideHover() {
        hoverDiv.style.display = 'none';
    }

    function showCard() {
        cardHelmet.style.display = 'block';
        cardHelmetArea.style.display = 'block';
    }

    function hideCard() {
        cardHelmet.style.display = 'none';
        cardHelmetArea.style.display = 'none';
    }
    // Handle hover for desktop (mouse)
    helmet.addEventListener('mouseover', function() {
        showHover();
    });

    helmet.addEventListener('mouseout', function() {
        hideHover();
    });

    helmet.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showHover();
    });

    helmet.addEventListener('touchend', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHover();
        showCard();
    });

    helmet.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHover();
        showCard();
    });

    // Close the card when clicking outside the card area
    cardHelmet.addEventListener('click', function (event) {
        if (cardHelmet.style.display === 'block') {
            if (!cardHelmetArea.contains(event.target)) {
                hideCard();
            }
        }
    });

    // Prevent the card from closing when the card area is clicked
    cardHelmetArea.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});