const ADMIN_USER = "admin_dr4x0n";
const ADMIN_PASS = "Dr4x0n!X9#2025";

function login() {
  let u = user.value;
  let p = pass.value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem("logged", "yes");
    window.location = "boot.html";
  } else {
    alert("Wrong username or password");
  }
}
