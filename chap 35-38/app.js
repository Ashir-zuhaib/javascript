//chap 35-38
//ex1
function currentTime() {
    var now = new Date();
    document.write(now);
}
currentTime();
//ex2
function greet() {
    var firstName = prompt("enter first name");
    var lastName = prompt("enter last name");
    var fullName = firstName + " " +lastName;
    document.write("</br>HELLO  " + fullName);
}
greet();
//ex3
function addition() {
    var fnum = prompt("enter first number");
    var scndnum = prompt("enter second num");
    var add = fnum + scndnum;
    document.write("</br>= "+add);
}
addition();
//ex4
function calculator() {
    var fstNum = prompt("enter first number for calculation")
    var secndN = prompt("enter second number for calculation")
    var opt = +prompt("enter operator"+ "+,-,*,/")
    document.write("</br>CALCULATOR")
    if (opt === "+"){
        calcadd = fstNum + secndN;
        document.write("</br>"+fstNum +"+"+secndN+"="+calcadd);
    }
    else if (opt === "-"){
        calcsub =  secndN-fstNum;
        document.write("</br>"+secndN +"-"+fstNum+"="+calcsub);
    }
    else if (opt === "*"){
        calcmult = fstNum * secndN;
        document.write("</br>"+fstNum +"*"+secndN+"="+calcmult);
    }
    else if (opt === "/"){
        calcdiv =  secndN/fstNum;
        document.write("</br>"+secndN +"/"+fstNum+"="+calcdiv);
    }
    else{document.write("</br>enter specidied operators")};
}
calculator();
