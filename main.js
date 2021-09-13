let innerText = document.querySelector(".wrapper__love-text");
let wrapper = document.querySelector(".wrapper");

const textBackground = "LOVE";

const textBlotter = (name) => {
  return new Blotter.Text(name, {
    family: "Monument",
    size: 120,
    fill: "purple",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 100,
    paddingBottom: 100,
  });
};

const text = textBlotter(textBackground);

let materialFiles = new Blotter.FliesMaterial();
materialFiles.uniforms.uPointCellWidth.value = 0.012;
materialFiles.uniforms.uPointRadius.value = 0.85;
materialFiles.uniforms.uDodge.value = 0;
materialFiles.uniforms.uDodgePosition.value = 0.5;
materialFiles.uniforms.uDodgeSpread.value = 0.5;
materialFiles.uniforms.uSpeed.value = 2;

const blotter = (material, text) => {
  return new Blotter(material, {
    texts: text,
  });
};

let scopeOne = blotter(materialFiles, text).forText(text);
scopeOne.appendTo(innerText);

// render heart
// let heartImage = document.querySelector(".heart");

const numberHeart = 200;
for (var i = 0; i <= numberHeart; i++) {
  let heart = document.createElement("DIV");
  heart.setAttribute("class", `heart`);
  heart.setAttribute("style", `--i:${i}s; --x:${i * 2}%`);
  heart.innerHTML = `<img src="./love.png" alt="">`;
  wrapper.appendChild(heart);
}

const accept = document.querySelector(".button__accept");
const refuse = document.querySelector(".button__refuse");

const close = document.querySelector(".close");
accept.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("popup-active");
  document.querySelector("audio").play();
});
close.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("popup-active");
});

refuse.addEventListener("mouseenter", (e) => {
  const randomIndex = Math.random() * 600;
  const target = e.target;
  target.style.position = "absolute";
  target.style.top = randomIndex + "%";
  target.style.left = randomIndex + "%";
});
refuse.addEventListener("click", (e) => {
  const randomIndex = Math.random() * 600;
  const target = e.target;
  target.style.position = "absolute";
  target.style.top = randomIndex + "%";
  target.style.left = randomIndex + "%";
});
