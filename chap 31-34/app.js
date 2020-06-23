//chap31-34
//ex 1
var current = new Date();
document.write("</br> "+current);
//ex2
var month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
var current2 = new Date();
var month2 = month[current2.getMonth()];
document.write("</br> "+month2);    
//ex3
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var current3 = new Date();
var today = days[current3.getDay()];
var short_day = today.slice(0,3);
document.write("</br> Today is "+short_day);
//ex4
var days4 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var current4 = new Date();
var today4 = days4[current4.getDay()];
if (today4 === 'Sunday' || today4 === 'Saturday'){
    document.write("</br> Today is Funday");
}
//ex5
var current5 = new Date();   
var current5_2 = current5.getDate(1-31)
document.write("</br> " + current5_2);
if(current5_2 < 16){
    document.write("</br> first fifteen days of the month")
}
else {document.write("</br>Last days of the month")};
//ex6
var midmin = new Date("jan 1, 1970");
var midmin2 = midmin.getTime();
var nowtime = new Date();
var nowtime2 = nowtime.getTime();
var actual = nowtime2-midmin;
var actual2 = Math.floor(actual);
var actualMinute = actual/ (1000*60);
var actual3 = Math.floor(actualMinute);
document.write("</br>current Date:"+nowtime);
document.write("</br>Elapsed milliseconds since january 1 1970: "+actual2);
document.write("</br>Elapsed minutes since january 1 1970: "+actual3);
//ex7
var noon = new Date();   
var noon2 = noon.getHours(0-23);
if(noon2 < 12){
    document.write("</br> It's AM")
}
else {document.write("</br> It's PM")};
//ex8
var laterDate = new Date("Dec 31, 2020")
document.write("</br> later date: "+laterDate);
//ex9
var fst_ramadan = new Date("jun 18, 2015");
var fst_ramadanMili = fst_ramadan.getTime();
var nowDate = new Date();
var nowDatemili = nowDate.getTime();
var diff = nowDatemili-fst_ramadanMili;
var dayspassed = Math.floor(diff/(1000*60*60*24));
document.write("</br>" +dayspassed);
//ex10 
var start2015 = new Date("jan 1, 2015");
var start2015mili = start2015.getTime();
var refDate = new Date();
var refDatemili = refDate.getTime();
var elapse = refDatemili-start2015mili;
var secelaps = Math.floor(elapse/(1000*60));
document.write("</br> On refrence date: "+refDate )
document.write("</br>" +secelaps+"seconds had passed since begining of 2015");
//ex11
var datetimenow = new Date();
var pasthour = new Date();
pasthour.setHours(pasthour.getHours() - 1);
document.write("</br>current date: "+datetimenow);
document.write("</br>1 hour ago it was: "+pasthour);
//ex12
var datenow = new Date();
var pastyear = new Date();
 pastyear.setFullYear(pastyear.getFullYear() - 100);
 alert("current date: "+datenow);
 alert("100 years back: "+pastyear);
 //ex13
 var date_ob = new Date(prompt("Enter your date of birth","jun 18, 2015"));
var date_obmili = date_ob.getTime();
var thisDate = new Date();
var thisDatemili = thisDate.getTime();
var diffs = thisDatemili-date_obmili;
var final = Math.floor(diffs/(1000*60*60*24*30*12));
document.write("</br>" +final);
//ex14
var cName = prompt("enter costumer name");
var cMonth = prompt("enter current month");
var units = prompt("enter Units");
var cpu = prompt("what are the charges of per unit");
var netAmount = units*cpu;
var lps = prompt("enter Late Payment Surcharge");
var grossAmount = netAmount + lps;
document.write("</br>K-electric Bill");
document.write("</br>Customer Name: "+cName);
document.write("</br>Month: "+cMonth);
document.write("</br>Number of Units: "+units);
document.write("</br>Charges per Units: "+cpu);
document.write("</br></br>Net Amount payable (with in Due Date): "+netAmount);
document.write("</br>Late Payment Surcharge: "+lps);
document.write("</br>Gross Amount payable (after Due Date): "+grossAmount);