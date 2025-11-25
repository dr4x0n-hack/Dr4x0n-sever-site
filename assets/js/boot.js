const logs = [
  "[OK] Loading kernel...",
  "[OK] Starting dr4x0n-services...",
  "[OK] Initializing terminal engine...",
  "[OK] Loading matrix driver...",
  "[OK] Boot complete."
];

let i = 0;
function next() {
  if (i < logs.length) {
    bootText.innerHTML += logs[i] + "\n";
    i++;
    setTimeout(next, 700);
  } else {
    setTimeout(() => window.location = "dashboard.html", 1000);
  }
}
next();
