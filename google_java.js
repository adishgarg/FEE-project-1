function myFunc() {
    document.body.style.backgroundImage = "url(22d48e78-a009-49ea-a7fb-3477ec06cd7e.jpeg)";
  }
  function myFunction() {
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(22d48e78-a009-49ea-a7fb-3477ec06cd7e.jpeg)";
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}