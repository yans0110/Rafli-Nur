
const q=new URLSearchParams(location.search);
const guest=q.get('to');
if(guest){document.getElementById('guest').innerText=guest;}
function openInvitation(){document.getElementById('cover').style.display='none';}
const target=new Date('2026-08-02T00:00:00');
setInterval(()=>{
let d=target-new Date();
let days=Math.floor(d/86400000);
document.getElementById('countdown').innerText=days+' Hari Menuju Pernikahan';
},1000);
