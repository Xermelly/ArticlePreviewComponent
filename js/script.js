const shareBtn = document.querySelector(".share-btn");
console.log(shareBtn);

function shareClick(event) {
  const shareContent = document.querySelector(".share-info");
  shareContent.classList.toggle("active");
  event.currentTarget.classList.toggle("active");
}

shareBtn.addEventListener("click", shareClick);
