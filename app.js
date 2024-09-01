// massive/array -> []
var a=5;
// var massiveName=['string',number,null,boolean];
var too=[2,5,11,255,233,10,55];
console.log(too);
// index -> element/utga-iin ezleh bairshiliin dugaar
// index 0-ees ehelne
// length -> massive dotorh utgiin/elememtiin too
console.log(too[0]); // massive hamgiin ehnii utga
console.log(too.length);
console.log(too[too.length-1]);// massiviin hamgiin suuliin utga
too[0]="text";
console.log(too[0]);
var too=[2,5,11,255,233,10,55];
for(var i=0;i<=too.length-1; i++){
	console.log(too[i]);
}
var number=[3,4,2,7,39];
console.log(number[0]+number[number.length-1]);
var number1=[12,3,4,33,234,12,1,34,5,67];
var niilber=0;
for(var i=0;i<=number1.length-1; i++){
	niilber=niilber+number1[i];
}
console.log(niilber);
var urjver=1;
for(var i=0;i<=number1.length-1; i++){
	urjver=urjver*number1[i];
}
console.log(urjver);
for(var i=0;i<=number.length-1; i++){
	if(number[i]%2==0){
		console.log(number[i]+" ene too tegsh");
	}else{
		console.log(number[i]+" ene too sondgoi");
	}
}
// change color project
var colors=['black','gray','brown','red','blue'];
var body=document.getElementsByTagName('body')[0];
console.log(body);
// function
var i=-1
function changeColor(){
	i++;
	// body.style.backgroundColor="aqua";
	chageColor.innerText=colors[i];
	body.style.backgroundColor=colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
}
var j=colors.length
function changeColors(){
	j--;
	body.style.backgroundColor=colors[j];
	if(j<=0){
		j=colors.length;
	}
}
var up="";
var autoBtn=document.querySelector('.autoBtn');
var stopBtn=document.querySelector('.stopBtn');
var chageColor=document.querySelector('.chageColor');
function auto(){
	i++;
	body.style.backgroundColor=colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
	up=setTimeout(auto,1000);
	autoBtn.disabled=true
}
// scope -> global var,
function stop(){
	clearTimeout(up);
	autoBtn.disabled=false
}
// setTimeout --> yamar neg kod heden secondiin daraa ajilahiig tohiruulna
// clearTimeout-->setTimeout-iig zogsoono
function hello(){
	console.log('hello');
}
setTimeout(hello,3000);