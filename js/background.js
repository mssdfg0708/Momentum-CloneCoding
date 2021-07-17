const images = ["1.jpg", "2.jpg", "3.jpg"];
const nowImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.id = "bgImage";
image.src = `img/${nowImage}`;
document.body.appendChild(image);
