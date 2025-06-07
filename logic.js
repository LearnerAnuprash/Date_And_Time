/*-------------------------------------------------------------------------------------------------*/
//|                               Time related DOM Manipulation                                   |//
/*-------------------------------------------------------------------------------------------------*/

let hour=document.getElementById("hourBox"); // gets element by ID
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");
let hours;
let date;
let count=1;

//toggle button for 24hour and 12 hour switch

let toggleSwitch=document.getElementById("twelveHourFormat");


function callWhenToggle()
{
        count++;
        count%2==0?(toggleSwitch.innerHTML="Switch to 24 Hour Format",hours=date.getHours()%12):(toggleSwitch.innerHTML="Switch to 12 Hour Format",hours=date.getHours());
}


    date=new Date();
    hours=date.getHours();  //First initialization of time ( Only runs initially)

    function updateTime(){

     date=new Date();
     
    toggleSwitch.addEventListener("click",callWhenToggle);
    
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
