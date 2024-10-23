// locker-room.js
document.addEventListener("DOMContentLoaded", function() {
    const locker1 = document.querySelector('.locker1');
    const hoverDiv = document.getElementById('hover-locker1');
    const cardLocker1 = document.getElementById('card-locker1');
    const cardLocker1Area = document.getElementById('card-locker1-area');
    const helmet = document.querySelector('.helmet');
    const helmetHoverDiv = document.getElementById('hover-helmet');
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

    // Add click event listener to each 'clickable-base' element
    // clickableElements.forEach(function(clickable) {
    //     clickable.addEventListener('click', function() {
    //         darkenAllElements(); // Darken all elements with 'darken' class when clicked
    //     });
    // });

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

    function showHoverHelmet() {
        if (!helmet.classList.contains("darkened"))
        helmetHoverDiv.style.display = 'block';
    }
    function hideHoverHelmet() {
        helmetHoverDiv.style.display = 'none';
    }

    function showCardHelmet() {
        cardHelmet.style.display = 'block';
    }

    function hideCardHelmet() {
        cardHelmet.style.display = 'none';
    }
    // Handle hover for desktop (mouse)
    helmet.addEventListener('mouseover', function() {
        showHoverHelmet();
    });

    helmet.addEventListener('mouseout', function() {
        hideHoverHelmet();
    });

    helmet.addEventListener('touchstart', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        showHoverHelmet();
    });

    helmet.addEventListener('touchend', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHoverHelmet();
        showCardHelmet();
        darkenAllElements();
    });

    helmet.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default touch behavior
        hideHoverHelmet();
        showCardHelmet();
        darkenAllElements();
    });

    // Close the card when clicking outside the card area
    document.addEventListener('click', function (event) {
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
    function handleGesture() {
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
        handleGesture();
    });

    right.addEventListener('click', function() {
        showAndPlayVideo(videoForward);  // Play forward video when right button is clicked
    });

    left.addEventListener('click', function() {
        showAndPlayVideo(videoReverse);  // Play reverse video when left button is clicked
    });
});

