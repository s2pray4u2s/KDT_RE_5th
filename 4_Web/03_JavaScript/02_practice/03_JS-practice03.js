const btn = document.querySelector("#btn");
const rgbText = document.querySelector("#rgb-text");

btn.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    rgbText.textContent = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgb);
});