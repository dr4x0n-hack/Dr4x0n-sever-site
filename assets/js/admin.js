let users = [
  {user:"admin_dr4x0n"}
];

function renderUsers(){
  userList.innerHTML="";
  users.forEach(u=>{
    userList.innerHTML += `<li>${u.user}</li>`;
  });
}
renderUsers();

function addUser(){
  let u=newUser.value;
  let p=newPass.value;
  if(u&&p){
    users.push({user:u});
    logs.innerHTML += `[+] Added user: ${u}\n`;
    renderUsers();
  }
}
