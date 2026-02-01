const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const music = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

/* Play music on first interaction */
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

/* Yes Button */
yesBtn.addEventListener("click", () => {
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
});

/* No Button Movement */
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    const padding = 20;
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* Floating Hearts Generator */
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 400);
