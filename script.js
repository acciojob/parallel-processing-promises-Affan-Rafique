//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

// Declare the array of image URLs
const imageUrls = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/id/238/200/300",
  "https://picsum.photos/id/239/200/300"
];

// Function to load one image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url; // ✅ correct property
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image: ${url}`);
  });
}

// Function to load all images in parallel
function downloadImages(urls) {
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const outputDiv = document.getElementById("output");

  // Reset UI
  loadingDiv.textContent = "Loading images...";
  errorDiv.textContent = "";
  outputDiv.innerHTML = "";

  Promise.all(urls.map(downloadImage))
    .then(images => {
      loadingDiv.textContent = "";
      images.forEach(img => outputDiv.appendChild(img));
    })
    .catch(error => {
      loadingDiv.textContent = "";
      errorDiv.textContent = error;
    });
}

// ✅ Trigger download when button is clicked
btn.addEventListener("click", () => downloadImages(imageUrls));
