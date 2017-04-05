function myFunction(elem) {
  document.getElementById(elem.getAttribute("data-name")).classList.toggle("show");
}

window.onclick = function(event) {
  var obj = event.target;
  let dropdowns = document.getElementsByClassName("drop");
  if (!obj.hasAttribute("data-name")) {
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  } else {
    for (let i = 0; i < dropdowns.length; i++) {
      let ulId = document.getElementById(obj.getAttribute("data-name"));
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        if (openDropdown.getAttribute("id") === ulId.getAttribute("id")) continue;
        openDropdown.classList.remove('show');
      }
    }
  }
};
