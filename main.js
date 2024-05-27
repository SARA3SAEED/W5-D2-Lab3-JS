
let btn1 = document.getElementsByClassName('button')[0];
console.log(btn1);

let light1 = document.getElementsByClassName('bulb')[0];
console.log(light1);

btn1.addEventListener('click', function(){
    light1.style.backgroundColor = 'red';
});

/*----------------------------------------------------------------*/


let light2 = document.getElementsByClassName('bulb')[1];
console.log(light2);

let btn2 = document.getElementsByClassName('button')[1];
console.log(btn2);

btn2.addEventListener('click', function(){
    light2.style.backgroundColor = 'yellow';
});


/*----------------------------------------------------------------*/

let light3 = document.getElementsByClassName('bulb')[2];
console.log(light3);

let btn3 = document.getElementsByClassName('button')[2];
console.log(btn3);


btn3.addEventListener('click', function(){
    light3.style.backgroundColor = 'green';
});