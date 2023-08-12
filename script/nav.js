const menu = document.getElementById("menu");
const sideNav = document.getElementsByClassName("m-nav");

let show = false;

menu.addEventListener("click", () => {
  show = !show;
  sideNav[0].style.width = show ? "320px" : "0px";
});
