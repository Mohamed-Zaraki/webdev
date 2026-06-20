function getRandomColor() {
    const letters = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generate() {
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box) => {
        const newColor = getRandomColor();
        const colorDiv = box.querySelector(".color");
        const colorText = box.querySelector(".color-info span");

        colorDiv.style.backgroundColor = newColor;
        colorText.textContent = newColor;
    });
}

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const colorInfo = button.parentElement;
        const colorText = colorInfo.querySelector("span").textContent;

        navigator.clipboard.writeText(colorText);

        button.classList.remove("far", "fa-copy");
        button.classList.add("fas", "fa-check");

        setTimeout(() => {
            button.classList.remove("fas", "fa-check");
            button.classList.add("far", "fa-copy");
        }, 1000);
    });
});
