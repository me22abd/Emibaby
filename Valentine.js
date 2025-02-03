// Get elements
const clickMeBtn = document.getElementById("clickMeBtn");
const loveMessage = document.getElementById("loveMessage");
const questionContainer = document.getElementById("questionContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const backBtn = document.getElementById("backBtn");
const popupYes = document.getElementById("popupYes");
const popupNo = document.getElementById("popupNo");
const backBtnYes = document.getElementById("backBtnYes");
const backBtnNo = document.getElementById("backBtnNo");
const balloonContainer = document.getElementById("balloon-container");
const loveSong = document.getElementById("loveSong"); // Moved outside to be used globally

// Get elements for comment section
const commentSection = document.getElementById("commentSection");
const submitCommentBtn = document.getElementById("submitCommentBtn");
const commentText = document.getElementById("commentText");
const responseMessage = document.getElementById("responseMessage");

// Show Valentine Question only after clicking "Click Me"
clickMeBtn.addEventListener("click", function() {
    loveMessage.classList.add("hidden");
    questionContainer.classList.remove("hidden");
});

// Back Button - Return to Love Message (from Question screen)
backBtn.addEventListener("click", function() {
    questionContainer.classList.add("hidden");
    loveMessage.classList.remove("hidden");
});

// Show celebration for "Yes"
yesBtn.addEventListener("click", function() {
    questionContainer.classList.add("hidden");
    popupYes.classList.remove("hidden");

    // Play the love song when 'Yes' is clicked
    loveSong.play();

    // Launch confetti and balloons
    launchConfetti();
    generateBalloons();

    // Show the comment section after clicking "Yes"
    commentSection.classList.remove("hidden");
});

// Show rejection message for "No"
noBtn.addEventListener("click", function() {
    questionContainer.classList.add("hidden");
    popupNo.classList.remove("hidden");
});

// Back Button inside "Yes" popup - Return to Valentine question
backBtnYes.addEventListener("click", function() {
    popupYes.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    // Hide the comment section when going back to question screen
    commentSection.classList.add("hidden");
});

// Back Button inside "No" popup - Return to Valentine question
backBtnNo.addEventListener("click", function() {
    popupNo.classList.add("hidden");
    questionContainer.classList.remove("hidden");

    // Hide the comment section when going back to question screen
    commentSection.classList.add("hidden");
});

// Handle comment submission
submitCommentBtn.addEventListener("click", function() {
    const userComment = commentText.value.trim();

    if (userComment !== "") {
        // Display the response message after submission
        responseMessage.classList.remove("hidden");
        commentText.value = ""; // Clear the text field
    } else {
        alert("Please write something before submitting.");
    }
});

// Confetti effect for "Yes"
function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// Generate floating balloons
function generateBalloons() {
    for (let i = 10; i > 0; i--) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        balloonContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 4000);


    }
}