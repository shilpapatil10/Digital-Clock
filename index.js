const hourEl= document.getElementById("hour");
const minuteEl=document.getElementById("minutes");
const secondEl=document.getElementById("seconds");

const ampmEl=document.getElementById("ampm");

function UpdateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= "AM";
    ampm=h>12 ? "PM":"AM";
    h=h>12 ? h-12:h;
  

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
   s=s<10?"0"+s:s;

    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    ampmEl.innerText=ampm;
    setTimeout(()=>{
        UpdateClock();
    }, 1000);
}
UpdateClock();