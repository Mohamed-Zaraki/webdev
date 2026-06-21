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
const colorBoxes = document.querySelectorAll(".color-box");

function copyColorFromBox(colorBox) {
    const colorText = colorBox.querySelector(".color-info span").textContent;
    const copyButton = colorBox.querySelector(".copy-btn");

    navigator.clipboard.writeText(colorText);

    copyButton.classList.remove("far", "fa-copy");
    copyButton.classList.add("fas", "fa-check");

    setTimeout(() => {
        copyButton.classList.remove("fas", "fa-check");
        copyButton.classList.add("far", "fa-copy");
    }, 1000);
}

colorBoxes.forEach((boxPanel) => {
    boxPanel.addEventListener("click", () => {
        copyColorFromBox(boxPanel);
    });
});

copyButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        copyColorFromBox(button.closest(".color-box"));
    });
});
