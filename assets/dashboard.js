function openPage(id){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("shown"));
    document.getElementById(id).classList.add("shown");
}

function runCmd(e) {
    if (e.key === "Enter") {
        let box = document.getElementById("terminalBox");
        let input = document.getElementById("termInput");
        let cmd = input.value;

        box.innerHTML += "<div>> " + cmd + "</div>";

        // Fake results
        if(cmd.startsWith("nmap")) {
            box.innerHTML += "<div>Simulated: scanning...</div>";
            box.innerHTML += "<div>Host is up (simulated)</div>";
        } else if(cmd === "help") {
            box.innerHTML += "<div>Available: nmap, dirsearch, ping, clear</div>";
        } else if(cmd === "clear") {
            box.innerHTML = "";
        } else {
            box.innerHTML += "<div>Unknown command (simulated)</div>";
        }

        box.scrollTop = box.scrollHeight;
        input.value = "";
    }
}
