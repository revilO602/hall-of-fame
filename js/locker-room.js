// locker-room.js
document.addEventListener("DOMContentLoaded", function() {
    const locker1 = document.querySelector('.locker1');
    const cardLocker1 = document.getElementById('cards-locker1');
    const helmet = document.querySelector('.helmet');
    const room = document.querySelector('.locker-room');
    const cardHelmet = document.getElementById('card-helmet');

    // Select all elements with the 'darken' class
    const darkenElements = document.querySelectorAll('.darken');

    // Function to darken elements
    function darkenAllElements() {
        darkenElements.forEach(function(element) {
            // Add a darkening effect (for example, reduce opacity or change background color)
            element.classList.add("darkened");
        })
    }

    function lightAllElements() {
        darkenElements.forEach(function(element) {
            // Add a darkening effect (for example, reduce opacity or change background color)
            element.classList.remove("darkened");
        })
    }

    function showCard() {
        darkenAllElements();
        cardLocker1.style.display = 'flex';
    }

    function hideCard() {
        lightAllElements();
        cardLocker1.style.display = 'none';
    }

    locker1.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showCard();
    });

    locker1.addEventListener('click', function(event) {
        event.preventDefault();
        showCard();
    });

    // Close the card when clicking outside the card area
    room.addEventListener('click', function (event) {
        if (cardLocker1.style.display === 'flex') {
            if (!cardLocker1.contains(event.target)) {
                hideCard();
            }
        }
    });

    function showCardHelmet() {
        if (!helmet.classList.contains("darkened"))
        cardHelmet.style.display = 'block';
    }

    function hideCardHelmet() {
        cardHelmet.style.display = 'none';
    }

    helmet.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showCardHelmet();
        darkenAllElements();
    });

    helmet.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showCardHelmet();
        darkenAllElements();
    });

    // Close the card when clicking outside the card area
    room.addEventListener('click', function (event) {
        if (cardHelmet.style.display === 'block') {
            if (!cardHelmet.contains(event.target)) {
                hideCardHelmet();
                lightAllElements();
            }
        }
    });

    // Prevent the card from closing when the card area is clicked
    cardHelmet.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const videoForward = document.getElementById('animation-right');  // Forward video
    const left = document.querySelector('.left');  // Left button
    const right = document.querySelector('.right');  // Right button
    const videoReverse = document.getElementById('animation-left');   // Reverse video
    const swipeElement = document.querySelector('#locker-room');      // Element to detect swipe on

    let touchstartX = 0;
    let touchendX = 0;

    // Detect swipe gestures
    function handleGesture(event) {
        event.preventDefault();
        if (touchendX < touchstartX - 50) { // Swipe left threshold
            showAndPlayVideo(videoForward);
        } else if (touchendX > touchstartX + 50) { // Swipe right threshold
            showAndPlayVideo(videoReverse);
        }
    }

    // Show and play the appropriate video (forward or reverse)
    function showAndPlayVideo(video) {
        hideAllVideos();  // Hide any currently playing video
        video.style.display = 'block';
        video.play();

        // Hide the video when it ends
        video.onended = function() {
            video.style.display = 'none';
        };
    }

    // Hide both videos
    function hideAllVideos() {
        videoForward.style.display = 'none';
        videoReverse.style.display = 'none';
    }

    // Add touch event listeners to detect swipe only on the specific element
    swipeElement.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    });

    swipeElement.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture(event);
    });

    swipeElement.addEventListener('touchmove', function(event) {
        event.preventDefault();
    });

    right.addEventListener('click', function() {
        showAndPlayVideo(videoForward);  // Play forward video when right button is clicked
    });

    left.addEventListener('click', function() {
        showAndPlayVideo(videoReverse);  // Play reverse video when left button is clicked
    });
});

