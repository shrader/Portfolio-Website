const items = document.getElementsByClassName("item");
const toggle = document.getElementById("toggle");
let menuHidden = true
let heightOutput = window.innerHeight;
let widthOutput = window.innerWidth;

function handleWindowSizeChange() {
  widthOutput = window.innerWidth;
  heightOutput = window.innerHeight;
  
  if (widthOutput >= 770) {
    showMenuItems();
  }
  if (widthOutput < 770) {
    hideMenuItems();
  }
}

window.onresize = handleWindowSizeChange;

  
toggle.addEventListener("click", function(event){ 
  if (menuHidden) {
    showMenuItems();
  } else {
    hideMenuItems();
  }
});
  
document.body.addEventListener("click", function(event){
  if (!event.target.classList.contains("nav") && widthOutput < 770) {
    hideMenuItems();
  }
})


function showMenuItems() {
  for (let item of items) {
    item.style.display = "block";
    menuHidden = false;
  }
}

function hideMenuItems() {
  for (let item of items) {
    item.style.display = "none";
    menuHidden = true;
  }
}
