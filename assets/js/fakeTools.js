function fake_nmap() {
  return `
PORT     STATE   SERVICE
21/tcp   open    ftp
22/tcp   open    ssh (OpenSSH 7.9)
80/tcp   open    http (Apache 2.4.6)
443/tcp  open    https
8080/tcp open    proxy
`;
}

function fake_dirsearch() {
  return `
[200] /login
[301] /panel
[403] /hidden
`;
}

function fake_hydra() {
  return `
Trying: pass123
Trying: admin1
Trying: dr4x0n99
Attack finished.
`;
}
