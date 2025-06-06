

let hour=document.getElementById("hourBox");
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");


setInterval(()=>{

    let date=new Date();

    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    hour.innerHTML=hours;
    minute.innerHTML=minutes;
    second.innerHTML=seconds;

    

}
,1000);


