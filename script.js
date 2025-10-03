//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
function downloadImage(url){
	return new Promise((resolve,reject)=>{
		const img=new Image();
		img.scr=url;
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`Failed to load image: ${url}`);
	});
}
function downloadImages(urls){
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const outputDiv = document.getElementById("output");

 // Reset UI
  loadingDiv.textContent = "Loading images...";
  errorDiv.textContent = "";
  outputDiv.innerHTML = "";

  Promise.all(url.map(downloadImage))
   .then(images=>{
	   loadingDiv.textContent="";
	   images.forEach(img=>outputDiv.appendChild(img));
   })
	.catch(error=>{
		loadingDiv.textContent="";
		errorDiv.textContent=error;
	});
}
downloadImages(imageUrls);