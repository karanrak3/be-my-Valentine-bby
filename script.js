function yesClicked() {
    document.getElementById("result").innerHTML =
        "YAYYYY 💕 I knew it! Happy Valentine’s Day, my love ❤️";
}

function moveButton() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
