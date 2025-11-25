let files = ["index.txt", "config.sys", "readme.md"];

function render(){
  fileList.innerHTML="";
  files.forEach(f=>{
    fileList.innerHTML += `<li>${f}</li>`;
  });
}
render();

function createFile(){
  let f = fileName.value;
  if(f){
    files.push(f);
    render();
  }
}
