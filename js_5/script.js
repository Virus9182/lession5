let h1=document.querySelector('h1');
let p1=document.querySelector('p');
let text1=document.querySelector('.text1');
let text2=document.querySelector('.text2');
let num=document.querySelector('num');
let a=document.querySelector('a');
let div=document.querySelector('div');
let img1=document.querySelector('.img1');
let img2=document.querySelector('.img2');
let button1=document.querySelector('#start1');
let button2=document.querySelector('#start2');
let button3=document.querySelector('#start3');
let button4=document.querySelector('#start4');
let button5=document.querySelector('#start5');
let button6=document.querySelector('#cancel');
let input1=document.querySelector('#i1');
let input2=document.querySelector('#i2');
let input3=document.querySelector('#i3');
let input3=document.querySelector('#i4');
let input3=document.querySelector('#i5');


button1.addEventListener('click', function() {
text1.innerHTML = 'привет';
});
button2.addEventListener('click', function() {
text1.innerHTML = 'пока';
});


button3.addEventListener('click', function(){
    let num3=num.innerHTML;
    console.log(num3);
    num3++;
    num.innerHTML=num3;
})


button5.addEventListener('click', function() {
text2.innerHTML ='<i>hello</i>';
});


button5.addEventListener('click', function() {
p1.innerHTML = a.href;
});


button5.addEventListener('click', function() {
p1.innerHTML = img1.src ; 
});


button5.addEventListener('click', function() {
    img1.width = '300' ;
});


button5.addEventListener('click', function() {
img1.width = img1.width * 2 ;
});


button5.addEventListener('click', function() {
img1.src = '2.jpg' ;    
});
button5.addEventListener('click', function() {
img1.src = '1.jpg' ;
});


button5.addEventListener('click', function() {
input2.value = Number(input1.value) * Number(input1.value) ;
});


button.addEventListener('click', function() {
text.innerHTML = (Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value)) / 5; 
});