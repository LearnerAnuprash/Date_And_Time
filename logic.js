/*-------------------------------------------------------------------------------------------------*/
//|                               Time related DOM Manipulation                                   |//
/*-------------------------------------------------------------------------------------------------*/

let hour=document.getElementById("hourBox"); // gets element by ID
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");
let count=1;
let is12HourFormat=false;

//toggle button for 24hour and 12 hour switch

let toggleSwitch=document.getElementById("twelveHourFormat");


function callWhenToggle()
{
        count++;
        is12HourFormat=count%2===0;
        toggleSwitch.innerHTML = is12HourFormat
        ? "Switch to 24 Hour Format"
        : "Switch to 12 Hour Format";
}
    toggleSwitch.addEventListener("click",callWhenToggle);

    function updateTime(){

     let date=new Date();
     let unmodifiedHours=date.getHours();
     let hours=is12HourFormat?unmodifiedHours%12:unmodifiedHours;
     
     
    
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    // Manipulation using DOM

    
    hour.innerHTML=String(hours).padStart(2,'0');  /*  String(hours) :  converts hours to string

                                                       padStart(2,'0'): adds padding of 0 unless
                                                                        the no. of characters become
                                                                        two                */ 
    minute.innerHTML=String(minutes).padStart(2,'0');

    second.innerHTML=String(seconds).padStart(2,'0');

}


 
updateTime(); //Loads time immediately without delay


setInterval(updateTime,1000);// 1000 milliseconds =1 second : so the date gets fetched every second 

/*-------------------------------------------------------------------------------------------------*/
//|                      Toggle button For Dark Mode & Light Mode                                 |//
/*-------------------------------------------------------------------------------------------------*/
