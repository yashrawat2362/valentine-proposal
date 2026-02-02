const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        music.volume = 0.6; // nice soft romantic volume
        music.play().then(() => {
            musicStarted = true;
        }).catch(() => {
            console.log("Autoplay blocked, waiting for user gesture");
        });
    }
}

// Mobile + Desktop safe
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);


/* YES button */
yesBtn.addEventListener("click", () => {
    launchConfetti();

    setTimeout(() => {
        document.body.innerHTML = `
            <div style="
                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                background:linear-gradient(135deg,#ff4d6d,#ff758f);
                color:white;
                font-family:Arial;
                text-align:center;
                padding:20px;
            ">
                <h1>YAYYYY 💘🎉</h1>
                <p>You just made me the happiest person alive 🥹❤️</p>
            </div>
        `;
    }, 1800); // wait for confetti 🎉
});

/* NO button movement */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    const padding = 20;

    // escape mode
    noBtn.style.position = "fixed";

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* Floating hearts generator */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);

/* Confetti */
function launchConfetti() {
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            ["#ff4d6d", "#ff758f", "#ffd700", "#2ecc71", "#ffffff"][
                Math.floor(Math.random() * 5)
            ];
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}
// Visitor Counter (Global)
fetch("https://api.countapi.xyz/hit/yashrawat2362.github.io/valentine-proposal")
    .then(res => res.json())
    .then(data => {
        document.getElementById("visitCount").innerText = data.value;
    })
    .catch(() => {
        document.getElementById("visitCount").innerText = "—";
    });

