///////////--- Code for real time Clock ---///////////// 
function time(){

    const d = new Date();   //current date function

    /////////-----Current Hours-----////////
    const hrs = document.getElementById("hrsDom");
    const currHour = d.getHours();
    let currHrsFrmt = currHour%12;

    if(currHrsFrmt<=9){
        currHrsFrmt = "0"+currHrsFrmt;
    }

    if(currHrsFrmt === "00"){
        currHrsFrmt = "12";
    }

    hrs.innerText = currHrsFrmt;

    ////////////////////////////////////////
    /////////-----Current Mins------////////
    const mins = document.getElementById("minDom");
    let currMins = d.getMinutes();

    if(currMins <= 9){
        currMins = "0"+currMins;    
    }

    mins.innerText = currMins;

    /////////////////////////////////////////
    /////////-----Current seconds-----///////

    const secs = document.getElementById("secDom");
    let currSec = d.getSeconds();

    if(currSec<=9){    
        currSec = "0"+currSec;
    }
    window.setInterval(d.getSeconds(),1000);
    secs.innerText = currSec;

    //////////////////////////////////////////
    ////////---AM / PM---/////////////////////

    const aMpM = document.getElementById("partAM");
    if(currHour >= 12){
        partAM.innerText = "PM";
    }
}

setInterval(time,1000);


function setTime(){

    const newTime = new Date();
    const currHour = newTime.getHours();

    let wakeTime = document.getElementById("morning").value;

    let lnchTime = document.getElementById("lunchTime").value;

    let napEvngTime = document.getElementById("napTime").value;

    let slpTime = document.getElementById("sleepTime").value;

    if (wakeTime==currHour){
        let mrngmsg = document.getElementsByClassName("gdMrng");
        mrngmsg[0].innerText="Good Morning";

        let brkfstmsg = document.getElementById("brkFast");
        brkfstmsg.innerText = "Lets have some breakfast";    
        
        let image = document.getElementsByClassName("picGirl1");
        image[0].src = "./Component 30 – 1.svg";
    }

    let wakeUpTime = document.getElementById("wakeUpTime");
    wakeUpTime.innerText = morning.options[morning.selectedIndex].text;

    if (lnchTime==currHour){
        let mrngmsg = document.getElementsByClassName("gdMrng");
        mrngmsg[0].innerText="GOOD AFTERNOON!! TAKE SOME SLEEP";

        let brkfstmsg = document.getElementById("brkFast");
        brkfstmsg.innerText = "LETS HAVE SOME LUNCH!";

        let image = document.getElementsByClassName("picGirl1");
        image[0].src = "./lunchPic.png";        
    }

    let lunchDayTime = document.getElementById("lunchDayTime");
    lunchDayTime.innerText = lunchTime.options[lunchTime.selectedIndex].text;

    if (napEvngTime==currHour){
        let mrngmsg = document.getElementsByClassName("gdMrng");
        mrngmsg[0].innerText="GOOD EVENING";

        let brkfstmsg = document.getElementById("brkFast");
        brkfstmsg.innerText = "GET SOME TEA!";

        let image = document.getElementsByClassName("picGirl1");
        image[0].src = "./napPic.png";        
    }

    let napEveTime = document.getElementById("napEveTime");
    napEveTime.innerText = napTime.options[napTime.selectedIndex].text;

    if (slpTime==currHour){
        let mrngmsg = document.getElementsByClassName("gdMrng");
        mrngmsg[0].innerText="Good NIGHT!! TIME TO SLEEP";

        let brkfstmsg = document.getElementById("brkFast");
        brkfstmsg.innerText = "Lets have Dinner";

        let image = document.getElementsByClassName("picGirl1");
        image[0].src = "./sleepTime.jpg";        
    }

    let sleepNgtTime = document.getElementById("bedTime");
    sleepNgtTime.innerText = sleepTime.options[sleepTime.selectedIndex].text;

}


