let term = document.getElementById("termOutput");
let input = document.getElementById("termInput");

function print(x){
  term.innerHTML += x + "<br>";
  term.scrollTop = term.scrollHeight;
}

input.addEventListener("keydown", e=>{
  if(e.key === "Enter"){
    let cmd = input.value.trim();
    print("> " + cmd);

    if(cmd === "help"){
      print("Commands: help, nmap, dirsearch, hydra, clear");
    }
    else if(cmd === "nmap"){
      print(fake_nmap());
    }
    else if(cmd === "dirsearch"){
      print(fake_dirsearch());
    }
    else if(cmd === "hydra"){
      print(fake_hydra());
    }
    else if(cmd === "clear"){
      term.innerHTML="";
    }
    else{
      print("Unknown command: " + cmd);
    }

    input.value="";
  }
});
