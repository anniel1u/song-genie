// DOM elements
const homepage = document.getElementById("homepage");
const startButton = document.getElementById("startButton");
const answerSelection = document.querySelectorAll(".answer");
const question1 = document.getElementById("question1");
const resultButton = document.getElementById("resultButton");
const result = document.getElementById("result");
const resultPage = document.getElementById("resultPage");
const resultImage = document.getElementById("resultImage");
const resultTitle = document.getElementById("resultTitle");
const resultAudio = document.getElementById("resultAudio");

// variables
let scores = {
    sweetBoy: 0,
    tenThirtySix: 0,
    twoShadows: 0,
    likeThat: 0,
    prettyWhenYouCry: 0,
    morningDew: 0
} 

// start
startButton.addEventListener("click", () => {
    slideUp(homepage, 500, () => {
        slideDown(question1, 500);
    });
});

// answer buttons
answerSelection.forEach(button => {
    button.addEventListener("click", (event) => {
        handleAnswerSelection(event.target);
    });
});
// 

// result 
resultButton.addEventListener("click", () => {
    slideUp(result, 500, () => {
        calculateResult();
        slideDown(resultPage, 500);
    })
})

function handleAnswerSelection(selectedButton) {
    const answer = selectedButton.getAttribute("data-answer");
    if (answer) {
        scores[answer]++;
    }

    slideUp(selectedButton.closest(".question"), 500, () => {
        const nextQuestion = selectedButton.closest(".question").nextElementSibling;
        if (nextQuestion) {
            slideDown(nextQuestion, 500);
        }
    })

}

// slide up function
function slideUp(element, duration = 500, callback) {
    const initialHeight = element.offsetHeight;
    element.style.height = initialHeight + "px";
    element.style.transition = `height ${duration}ms ease`;
    setTimeout(() => {
        element.style.height = "0px";
    }, 0);
    setTimeout(() => {
        element.style.display = "none";
        if (callback) callback();
    }, duration);
}

function slideDown(element, duration = 500) {
    element.style.display = "block";
    element.style.height = "0px";
    const fullHeight = element.scrollHeight;
    element.style.overflow = "hidden";
    element.style.transition = `height ${duration}ms ease`;
    setTimeout(() => {
        element.style.height = fullHeight + "px";
    }, 0);
}

function calculateResult() {
    let maxScore = -1;
    let winningSong = "";
    for (const song in scores) {
        if (scores[song] > maxScore) {
            maxScore = scores[song];
            winningSong = song;
        }
    }
    switch (winningSong) {
        case "sweetBoy": 
        resultImage.src = "https://i.ibb.co/1Rb62GG/sweetboy.jpg";
        resultTitle.textContent = "sweet boy by malcolm todd";
        resultAudio.src = "https://open.spotify.com/embed/track/59c2xv2kMzYM6HR9oY6BIa?utm_source=generator";
        break;
        case "tenThirtySix":
        resultImage.src = "https://i.ibb.co/PNjKTh5/10-36.png";
        resultTitle.textContent = "10:36 by beabadoobee";
        resultAudio.src = "https://open.spotify.com/embed/track/0P4OHmZ7t092na79ElH7F5?utm_source=generator";
        break;
        case "twoShadows":
        resultImage.src = "https://i.ibb.co/f0dPsdZ/2shadows.jpg";
        resultTitle.textContent = "II. shadows by childish gambino";
        resultAudio.src = "https://open.spotify.com/embed/track/4B2SZCQNf9uTee0pPO4cD7?utm_source=generator";
        break;
        case "likeThat":
        resultImage.src = "https://i.ibb.co/vcxwJZR/likethat.jpg";
        resultTitle.textContent = "like that by west of eden";
        resultAudio.src = "https://open.spotify.com/embed/track/5UMYMZwyvyelgWzCgbDG1Q?utm_source=generator";
        break;
        case "prettyWhenYouCry":
        resultImage.src = "https://i.ibb.co/JyZ9VbB/Ultraviolence-LDR.png";
        resultTitle.textContent = "pretty when you cry by lana del rey";
        resultAudio.src = "https://open.spotify.com/embed/track/6PnluwP0fjGnpIBsqTdUTq?utm_source=generator";
        break;
        default:
        resultImage.src = "https://i.ibb.co/dLjVHwL/morningdew.jpg";
        resultTitle.textContent = "morning dew by xavier wulf";
        resultAudio.src = "https://open.spotify.com/embed/track/0YkXRZcetpqI3VzjE9Sey6?utm_source=generator";
    }
}