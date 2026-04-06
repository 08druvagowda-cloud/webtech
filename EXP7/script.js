// Student Array

let students = [

{name:"Rahul",course:"CSE",marks:85},
{name:"Anita",course:"ECE",marks:60},
{name:"Arjun",course:"CSE",marks:40},
{name:"Meena",course:"ISE",marks:90},
{name:"Ravi",course:"CSE",marks:75}

];

let output=document.getElementById("output");


// Print all names

function printNames(){

let result="";

students.forEach(s=>{
result+=s.name+"<br>";
});

output.innerHTML=result;

}


// Marks > 80

function marksAbove80(){

let top=students.filter(s=>s.marks>80);

let result="";

top.forEach(s=>{
result+=s.name+" - "+s.marks+"<br>";
});

output.innerHTML=result;

}


// Count students in each course

function countCourse(){

let count={};

students.forEach(s=>{
count[s.course]=(count[s.course]||0)+1;
});

let result="";

for(let c in count){

result+=c+" : "+count[c]+" students<br>";

}

output.innerHTML=result;

}


// Only CSE students

function printCSE(){

let cse=students.filter(s=>s.course==="CSE");

let result="";

cse.forEach(s=>{
result+=s.name+"<br>";
});

output.innerHTML=result;

}


// Convert lowercase to uppercase

function convertUpper(){

let text=document.getElementById("textInput").value;

document.getElementById("textInput").value=text.toUpperCase();

}


// Market Products Array

let cart=[

{id:1,name:"Laptop",category:"Electronics",price:60000},
{id:2,name:"Shoes",category:"Fashion",price:2000},
{id:3,name:"Mobile",category:"Electronics",price:30000},
{id:4,name:"Watch",category:"Fashion",price:1500}

];


// Find product by ID

function findProduct(){

let product=cart.find(p=>p.id===3);

output.innerHTML="Product Found : "+product.name;

}


// Filter electronics products

function electronicsProducts(){

let electronics=cart.filter(p=>p.category==="Electronics");

let result="Electronics Products:<br>";

electronics.forEach(p=>{
result+=p.name+" - "+p.price+"<br>";
});

output.innerHTML=result;

}


// Sort by price

function sortPrice(){

let sorted=[...cart].sort((a,b)=>a.price-b.price);

let result="Sorted By Price:<br>";

sorted.forEach(p=>{
result+=p.name+" - "+p.price+"<br>";
});

output.innerHTML=result;

}


// Reduce example (total price)

function calculateTotal(){

let total=cart.reduce((sum,item)=>sum+item.price,0);

output.innerHTML="Total Cart Price : "+total;

}