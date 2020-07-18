

// function animalCalculator(depth){
// var animal= 0;
// if(depth<=10){
//     animal = depth*50;
// }else if( depth<=20){
//     var firstPart= 10*50;
//     var remaining = depth -10;
//     var secondPart= remaining*100;
//     animal = firstPart +secondPart;
// }else{
//     var firstPart= 10*50;
//     var secondPart = 10*100;
//     var remaining = depth-20;
//     var thardPart= remaining*300;
// animal = firstPart+secondPart+thardPart;

// }
// return animal;
// }
// var count = animalCalculator(12);
// console.log(count);



function cowCalculator(rood){
var  cow = 0;
if(rood<=10){
    cow = rood * 30;
}else if(rood<=20){
    var firstPart= 10* 30;
    var remainning = rood -10;
    var secondPart = remainning * 50;
    cow = firstPart+secondPart;
}else{
    var firstPart = 10*30;
    var secondPart = 10*50;
    var remainning = rood -20;
    var thridPart = remainning* 80;
    cow = firstPart+secondPart+thridPart;
}
 return cow;
}
 var  animal = cowCalculator(22);

 console.log(animal);