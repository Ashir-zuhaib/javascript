//chap 26-30
//ex1
var num1 = prompt("Enter positive integer");
var fnum1 = parseFloat(num1)
var rnum1 = Math.round(fnum1);
var floor_num1 = Math.floor(fnum1);
var ceil_num1 = Math.ceil(fnum1);
document.write("Number: "+num1);
document.write("</br>Round of Value: "+rnum1);
document.write("</br>Floor value: "+floor_num1);
document.write("</br>Ceil value: "+ceil_num1);
//ex2
var num2 = prompt("Enter negative float point");
var rnum2 = Math.round(num2);
var floor_num2 = Math.floor(num2);
var ceil_num2 = Math.ceil(num2);
document.write("</br>Number: "+num2);
document.write("</br>Round of Value: "+rnum2);
document.write("</br>Floor value: "+floor_num2);
document.write("</br>Ceil value: "+ceil_num2);
//ex3
var num3 = prompt("enter number")
var abnum3 = Math.abs(num3);
document.write("</br>Number: "+num3);
document.write("</br> Absulote Value of "+num3+" is "+abnum3);
//ex4
var rdice = Math.random();
var dice = (rdice * 6) + 1;
var floor_dice = Math.floor(dice);
var ceil_dice = Math.ceil(dice);
document.write("</br>random dice value: "+floor_dice);
document.write("</br>random dice value: "+ceil_dice);
//ex5
var rcoin = Math.random();
var coin = (rcoin * 2);
var floor_coin = Math.floor(coin);
var ceil_coin = Math.ceil(coin);
document.write("</br>random coin value: "+floor_coin);
document.write("</br>random coin value: "+ceil_coin);
//ex6
var random6 = Math.random();
var random6_2 = (random6 * 100)+1;
document.write("</br>random value between 1 and 100 is: "+random6_2);
//ex7
//ex8
var random7 = Math.random();
var random7_2 = (random7 * 10)+1;
var round_random = Math.round(random7_2);
document.write("</br>random value between 1 and 10 is: "+round_random);
var input = prompt("guess any number");
if (input == round_random){
    alert("Congrotulation")
}
else{ alert("Try again")};

