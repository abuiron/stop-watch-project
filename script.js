//define the variables we use

let hh = 0; // for hour
let mm = 0; // for minute
let ss = 0; // for seconds
let ms = 0; // for micro sec

//declare the input box
let countdown = document.getElementById("countdown");

//hoisting the variable
let myintervel;

//zeropad is used to maintain the zero
const zeropad = (num)=>String(num).padStart(2,'0');


//start button function
function startTimer(){

    //define a setinterval for recall again the function
    myintervel = setInterval(() => {
        
        ms++

        if(ms==100)//100ms = 1s
        {
            ss++
            ms=0;
        }
        if(ss==60)//60s = 1m
        {
            mm++
            ss=0;
        }
        if(mm==60)//60m = 1h
        {
            hh++
            mm=0;
        }

        //writing with the html for sub
        let tim = `${zeropad(hh)}<sub>HH</sub>:${zeropad(mm)}<sub>MM</sub>:${zeropad(ss)}<sub>SS</sub>:${zeropad(ms)}<sub>MS</sub>`
        countdown.innerHTML=tim


    },10);
}

//stop timer function
function stopTimer(){
    //delete the setinterval function then no repeat
    clearInterval(myintervel);
}

//reset the timer function
function resetTimer(){
    
    //stop the timer first then reset the timer
    stopTimer()

     hh=0;
     mm=0;
     ss=0;
     ms=0;

    let tim = `${zeropad(hh)}<sub>HH</sub>:${zeropad(mm)}<sub>MM</sub>:${zeropad(ss)}<sub>SS</sub>:${zeropad(ms)}<sub>MS</sub>`
        countdown.innerHTML=tim
}



