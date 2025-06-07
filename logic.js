

let hour=document.getElementById("hourBox"); // gets element by ID
let minute=document.getElementById("minuteBox");
let second=document.getElementById("secondBox");

let date=new Date(); // The new Date() has proper date and time for the region


setInterval(()=>{ 

    let date=new Date();

    let hours=date.getHours(); //Getting specific time element from new Date() function
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
,1000); // 1000 milliseconds =1 second : so the date gets fetched every second 

