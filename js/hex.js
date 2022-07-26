const btn = document.getElementById("button");
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const random = () => {
  return Math.floor(Math.random() * 16);
};

btn.addEventListener("click", (e) => {
  //   const random1 = Math.floor(Math.random() * 16);
  //   const random2 = Math.floor(Math.random() * 16);
  //   const random3 = Math.floor(Math.random() * 16);
  //   const random4 = Math.floor(Math.random() * 16);
  //   const random5 = Math.floor(Math.random() * 16);
  //   const random6 = Math.floor(Math.random() * 16);

  let colorString = "";
  for (let i = 0; i < 6; i++) {
    let index = random();
    colorString += colors[index];
  }
  colorString = "#" + colorString;
  //   colorString ='#'+
  //     colors[random1] +
  //     colors[random2] +
  //     colors[random3] +
  //     colors[random4] +
  //     colors[random5] +
  //     colors[random6];
  console.log(colorString);
  document.body.style.backgroundColor = colorString;
  document.getElementById(
    "color"
  ).textContent = `Background Color: ${colorString}`;
});
