let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(function(){
let d=new Date();
let h=d.getHours();
let m=d.getMinutes();
let s=d.getSeconds();
hr.innerHTML=h+"Hr:";
min.innerHTML=m+"Min:";
sec.innerHTML=s+"Sec";
  
},1000)
