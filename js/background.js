const images = ["1.jpg", "2.jpg", "3.jpg"];
const nowImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.src = `img/${nowImage}`;
image.style.width = '800px';
image.style.height = '500px';
document.body.appendChild(image);
