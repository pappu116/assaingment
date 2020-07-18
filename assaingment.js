// feetToMiles

function feetToMiles(feet){
    return feet / 5280 ;
}

var feet =feetToMiles(5280);

console.log(feet);

//woodCalculator

//chear---code//
function woodCalculator(chear){
   return chear * wood;
}
var wood = 1;
var chear =woodCalculator(15);

console.log(chear, 'qb Feet');

//tabel--code

function woodCalculator(tabel){
    return tabel * wood;
 }
 var wood = 2;
 var tabel =woodCalculator(5);
 
 console.log(tabel, 'qb Feet');

 //bed--code

 function woodCalculator(bed){
    return bed * wood;
 }
 var wood = 5;
 var bed =woodCalculator(5);
 
 console.log(bed, 'qb Feet');

//brickCalculator
function brickCalculator(flor) {
    if (flor<=10){
         var total=flor*brick*15;
           console.log("It will take ",total," bricks to make",flor, "floor");
       }else if(flor<=20){

        var total=flor*brick*12;
           console.log("It will take ",total," bricks to make",flor, "floor");

       }else if(flor>=21){
        var total=flor*brick*10;
           console.log("It will take ",total," bricks to make",flor, "floor");
       }else{
           console.log("this is not match my system")
       }
    }


var brick =1000;
var flor=brickCalculator(5);

//tinyFriend
                // ata onek try korsi mathay dhoke nai vai ata aktu solved koira diyen amake plz
    // var arr = [14, 58, 20, 77, 66, 82, 42, 67, 2, 4]
    // var min = Math.min.apply(Math, arr)
    // console.log(min)

//     var marks= [1, 2, 3, 4, 55, 65, 75, 74, 96,-200, -500];
// var  min =[0];

// for(var i =0; i<marks.length; i++){
//     var element = marks[i];
//     if(element<min){
//         min =element;
//     }
// }
// console.log("Low valu is: ", min);
function tinyFriend(name){
    var min=name[0];
  for(var i =0; i<name.length; i++){
      var quntingName = name[i];
      if(quntingName.length<min.length){
          min =quntingName;
      }
  }
  return min;
  }
  var name= ['karim', 'salin', 'kil', 'kili', 'kus', 'kulsum',];
  
  var result=tinyFriend(name);
  console.log(result);
