const nav_log = document.getElementsByClassName("nav-log");

const handleLogout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};

let user = JSON.parse(localStorage?.getItem("user"));

console.log(nav_log, user?.C_id);

if (user?.C_id) {
  for (let i = 0; i < nav_log.length; i++) {
    console.log(nav_log[i], i);
    nav_log[
      i
    ].innerHTML = `<li><button class="btn" onClick="handleLogout()">logout</button></li>`;
  }
} else if (nav_log) {
  for (i in log) {
    log[i].innerHTML = ``;
  }
}
