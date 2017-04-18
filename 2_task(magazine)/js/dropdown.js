
addListenerForElements();

function addListenerForElements() {
  let arrayOfClass = document.getElementsByClassName("dropbtn");
  for (let i = 0; i < arrayOfClass.length; i++) {
    arrayOfClass[i].addEventListener("click", function() {
        document.getElementById(arrayOfClass[i].getAttribute("data-dropdown-menu")).classList.toggle("show");
    } );
  }
}

window.onclick = function(event) {
  let obj = event.target;
  let dropdowns = document.getElementsByClassName("drop");
  if (!obj.hasAttribute("data-dropdown-menu")) {
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  } else {
    for (let i = 0; i < dropdowns.length; i++) {
      let ulId = document.getElementById(obj.getAttribute("data-dropdown-menu"));
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        if (openDropdown.getAttribute("id") === ulId.getAttribute("id")) continue;
        openDropdown.classList.remove("show");
      }
    }
  }
};
