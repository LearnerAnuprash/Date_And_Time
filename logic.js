/*-------------------------------------------------------------------------------------------------*/
//|                               Time related DOM Manipulation                                   |//
/*-------------------------------------------------------------------------------------------------*/

let hour=document.getElementById("hourBox"); // gets element by ID
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");
let count=1;
let is12HourFormat=false;

let quote=document.getElementById("quotePhrase");

//toggle button for 24hour and 12 hour switch

let toggleSwitch=document.getElementById("twelveHourFormat");


function callWhenToggle()
{
        count++;
        is12HourFormat=count%2===0;
        toggleSwitch.innerHTML = is12HourFormat
        ? "24 Hour Format"
        : "12 Hour Format";
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

let theme=document.getElementById("toggleTheme");
let countTheme=0;

function funcTheme()
{
    if(countTheme%2===0)
    {
        theme.innerHTML="Light Mode";
        //Styles for Dark theme here:
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1744462071047-34c6b661d3a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        quote.style.color="rgba(255, 255, 255, 0.9)";

    }

    else{
        theme.innerHTML="Dark Mode";
        //Styles for Light theme here:
        document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        
        if(window.innerWidth<=320)
        {
        quote.style.color="rgba(255, 255, 255, 0.9)";
        }

        else{
            quote.style.color="rgba(54, 22, 1,0.9)";
        }
    }

    countTheme++;

}

theme.addEventListener("click",funcTheme);

function updateTwelveHourFormatForMobile()
{
    const twelve=document.querySelector(".toggleButton");
    const mobileTheme=document.getElementById("toggleTheme");

    if(window.innerWidth<=320)
    {
        twelve.textContent="12 Hour Format";
        mobileTheme.textContent="Dark Mode";
    }

    else if(window.innerWidth>320&&window.innerWidth<=1024)
    {
        twelve.textContent="12 Hour Format";
        mobileTheme.textContent="Dark Mode";
    }

    else{
        twelve.textContent="Switch to 12 Hour Format";
        mobileTheme.textContent="Switch to Dark Mode";
    }
}

window.addEventListener('load', updateTwelveHourFormatForMobile);
window.addEventListener('resize', updateTwelveHourFormatForMobile);


