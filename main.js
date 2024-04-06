//  for(let i=0; i<11; i++){
//      console.log(i);
//  }

// let y = 10;
// while(y>0){
//     console.log(y);
//     y--;
// }



// let x = 20;
// do{
//     console.log(x);
//     x++;

// }while(x<51)


// for(let m=0; m<101; m= m + 2){
//     console.log(m);
// }

let arr = [];

while(arr.length<10){
    let r = Math.floor(Math.random()*100);
    arr.push(r);

}
console.log(arr);

let sum = 0;
for (let r = 0; r < arr.length; r++){
    sum = sum+ arr[r];

}
console.log(`Сума: ${sum}`);

let sum2 = 0;
for (let r = 0; r < arr.length; r= r + 2){
    sum2 = sum2+ arr[r];

}
console.log(`Сума: ${sum2}`);


reversed = arr.reverse();
console.log('reversed:', reversed);


