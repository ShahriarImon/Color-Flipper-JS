const btn = document.getElementById("button");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const random = () => {
  return Math.floor(Math.random() * 16);
};

btn.addEventListener("click", (e) => {
  let colorString = "";
  for (let i = 0; i < 6; i++) {
    let index = random();
    colorString += colors[index];
  }
  colorString = "#" + colorString;

  console.log(colorString);
  document.body.style.backgroundColor = colorString;
  document.getElementById(
    "color"
  ).textContent = `Background Color: ${colorString}`;
});
