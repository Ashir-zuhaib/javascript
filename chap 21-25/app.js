//assignment chap 21-25
//ex 1
var firstName = prompt("enter first name");
var lastName = prompt("enter last name");
var fullName = firstName + " " +lastName;
document.write("HELLO  " + fullName);

//ex2
var mobile = prompt("ENTER MOBILE NAME AND MODEL")
document.write("</br>My Favorite phone is: " + mobile);
var str = mobile.length;
document.write("</br>Length of string: "+str);
//ex 3
var string = "Pakistani";
var ind = string.indexOf('n');
document.write("</br>String: "+string) ;
document.write("</br>Index of 'n': "+ind);
//ex 4;
var string1 = "Hello World";
var lstring = string1.lastIndexOf('l');
document.write("</br> String:"+string1);
document.write("</br> last index of 'l':"+lstring);
//ex 5;
var string3 = "pakistani";
var index3 = string3.charAt(3);
document.write("</br> String:"+string3);
document.write("</br> character at index 3: "+index3);
//ex 6
var firstName = prompt("enter first name");
var lastName = prompt("enter last name");
var fullname = firstName.concat(lastName);
document.write("</br>HELLO  " + fullname);
//ex7
var heyder = "Heyderabad";
var replace = heyder.replace("Heyder", "Islam");
document.write("</br> After replacement: "+ replace );
//ex 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceing = message.replace(/and/g, "&");
document.write("</br> After replacement: "+ replaceing);
//ex9
var str9 = '472';
var num9 = parseInt(str9);
typeof str9;
typeof num9;
document.write("</br>" + typeof str9);
document.write("</br>" +typeof num9);
//ex10
var peanut = prompt("please insert in small letter")
var peanut1 = peanut.toUpperCase();
document.write("</br> user input: "+ peanut);
document.write("</br> Upper Case: "+ peanut1);
//ex 11
var title = prompt("please inser letters")
var titles = title.slice(0,1)
var otherlet = title.slice(1)
var title1 = titles.toUpperCase();
var otherlett = otherlet.toLowerCase();
document.write("</br> user input: "+ title);
document.write("</br> Tilte Case: "+ title1 + otherlett);
//ex12
var num = 35.36;
var num_string = num.toString();
var remst = num_string.replace(".","")
document.write("</br>Number: "+num);
document.write("</br>Result: " +remst);
//ex13
var name13 = prompt("enter youe name");
if( name13 === String.charCodeAt(33,44,46,64) ){
    alert("Please enter a valid username");
}
else {alert(name13)};

//ex15
//ex16
//ex17
var input17 = prompt("enter any word");
var last17 = input17.slice(0,-1);
document.write("<br>User input: "+ input17);
document.write("<br>Last character of input: "+ last17);
//ex18
var line = "The quick brown fox jumps over the lazy dog";
var the = line.split('the')
document.write("<br>words: "+ the);
//ex14
var backery =["cake","apple pie","cookie","chips", "patties"];
var item = +prompt("Welcome to ABC Backery. what do you want to order sir/mam?","" );
var avalaible_item = item.toLowerCase();
if (avalaible_item === backery){
    document.write(avalaible_item +" is available in index "+avalaible_item.findIndex(backery) +" of our backery")
}
else if (avalaible_item != backery){
    document.write("</br> we are sorry."+avalaible_item+" not available");
}
else {document.write("please enter in english")};





