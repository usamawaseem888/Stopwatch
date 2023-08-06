
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")
let chec=document.getElementById("check")

// if(chec.checked){
//     var element = document.body;
//     element.classList.toggle("dark-mode")

// }

let hours,minute,second,milis;
let m;

//----events

start.addEventListener("click",ForStart)
stop.addEventListener("click",ForPause)
reset.addEventListener("click",ForReset)



function ForPause(){
document.getElementById('start').disabled = false;
clearInterval(m)
count=true
}

function ForReset(){
    document.getElementById('start').disabled = false;
    clearInterval(m)
    let labe=document.getElementById("time")
    labe.textContent="00:00:00:00"
    count=true
}
function ForStart(){
    //disabling double click on start button
   document.getElementById('start').disabled = true;
    seTime();
    m=setInterval(star,10)
}



//this function takes input from already existed timer
//useful for pausing and starting timer from same index without using bool pause 
function seTime(){
    labe=document.getElementById("time").innerText
    labe=String(labe)

    hours=Number(labe.slice(0,labe.indexOf(":")))
  
    labe=labe.slice(labe.indexOf(":")+1)
    
    minute=Number(labe.slice(0,labe.indexOf(":")))
    
    labe=labe.slice(labe.indexOf(":")+1)

    second=Number(labe.slice(0,labe.indexOf(":")))
   
    labe=labe.slice(labe.indexOf(":")+1)

    milis=Number(labe.slice(0,labe.indexOf(":")))
    

}
//for output 
function cout(h,m,s,mi){
    h=formatzeroes(h)
    m=formatzeroes(m)
    s=formatzeroes(s)
    mi=formatzeroes(mi)
   const c= document.getElementById("time")
   c.innerHTML=`${h}:${m}:${s}:${mi}`
    
}

//adding zeroes to single unit numbers
function formatzeroes(time){
    time=String(time)
   if(time.length <2){
    time="0"+time
   }
    
    return time
}
 
//major functioning
function star(){

    milis++
    if(milis>99){
        milis=0;
        second++
    }
    if(second>59){
        second=0;
        minute++
    }
    if(minute>59){
        minute=0;
        hours++
    }
    
    cout(hours,minute,second,milis)
    
}
