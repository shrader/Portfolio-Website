let item = document.getElementsByClassName("item");

let toggle = document.getElementById("toggle");

toggle.onclick.addEventListener("click", function(event){
  event.preventDefault()
  item.style.display = "block"
});
