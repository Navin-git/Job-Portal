const menu = document.getElementById("menu");
const sideNav = document.getElementsByClassName("m-nav");
const log = document.getElementsByClassName("log");
const nav_log = document.getElementsByClassName("nav-log");

let show = false;

menu.addEventListener("click", () => {
  show = !show;
  sideNav[0].style.width = show ? "320px" : "0px";
});

const handleLogout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};

let user = JSON.parse(localStorage?.getItem("user"));

if (user?.C_id) {
  for (let i = 0; i < log.length; i++) {
    console.log(log[i], i);
    log[
      i
    ].innerHTML = `<li><button class="btn" onClick="handleLogout()">logout</button></li>`;
  }
} else if (log) {
  for (i in log) {
    log[i].innerHTML = `<li>
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
} else if (nav_log) {
  for (i in log) {
    log[i].innerHTML = ``;
  }
}
