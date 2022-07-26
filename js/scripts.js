const btn = document.getElementById("button");
const colors = ["red", "grey", "tomato", "lightgreen", "blue"];

btn.addEventListener("click", (e) => {
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
  document.getElementById(
    "color"
  ).textContent = `Background Color: ${colors[random]}`;
});
