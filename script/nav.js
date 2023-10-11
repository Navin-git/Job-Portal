const menu = document.getElementById("menu");
const sideNav = document.getElementsByClassName("m-nav");
const log = document.getElementsByClassName("log");

let show = false;

menu.addEventListener("click", () => {
  show = !show;
  sideNav[0].style.width = show ? "320px" : "0px";
});

let user = JSON.parse(localStorage?.getItem("user"));

if (user.U_id) {
  for (i in log) {
    i.innerHtml = "<li><button>logout</button></li>";
  }
} else {
  for (i in log) {
    i.innerHtml = `<li>
  <a style="color: black" href="./for-company.html">For Company</a>
</li>
<li>
  <a style="color: black" href="./login.html">Log in</a>
</li>
<li>
  <button class="btn">
    <a style="color: white" href="./sign-up.html">Sign up</a>
  </button>
</li>`;
  }
}
