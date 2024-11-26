function(instance, properties) {
  const canvas = instance.canvas;
  const preview = document.createElement("div");
  
  const img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "100%";
  img.src = "//eaf33978d23f9396ed3e6d8cfb0583a6.cdn.bubble.io/f1705502291137x992056245362571400/2024-01-17_16-35.png";

  preview.appendChild(img);
  canvas.innerHTML = ""; 
  canvas.appendChild(preview);
}