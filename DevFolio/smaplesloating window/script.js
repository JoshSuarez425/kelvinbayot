const openBtn = document.getElementById("openPopup");
const popup = document.getElementById("popupContainer");
const closeBtn = document.getElementById("closePopup");
const closeButton = document.getElementById("closeBtn");

openBtn.onclick = function(){
    popup.classList.add("active");
}

closeBtn.onclick = function(){
    popup.classList.remove("active");
}

closeButton.onclick = function(){
    popup.classList.remove("active");
}