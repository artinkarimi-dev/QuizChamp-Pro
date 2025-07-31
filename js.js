
let shop = document.getElementById("shop");
let sale = document.getElementById("sale");
let conversion = document.getElementById("conversion");
let btnShop = document.getElementById("btnShop");

let price = document.getElementById("price");
let number = document.getElementById("number");


sale.addEventListener("click" , function(){

shop.className = "btn2";
sale.className = "btn1";
conversion.className = "btn2";

btnShop.innerHTML = "فروش ارز";


let num = 10401943372 ;
let formatted = num.toLocaleString();
price.value = formatted;


number.value = "1";

number.addEventListener("change", function(event) {
 let adad = event.target.value;

 let math = adad * num;
 price.value = math.toLocaleString();

});



});


shop.addEventListener("click" , function(){

shop.className = "btn1";
sale.className = "btn2";
conversion.className = "btn2";
btnShop.innerHTML = "خرید ارز";



let num = 14441241300 ;
let formatted = num.toLocaleString();
price.value = formatted;


number.value = "1";

number.addEventListener("change", function(event) {
 let adad = event.target.value;

 let math = adad * num;
 price.value = math.toLocaleString();

});



});

conversion.addEventListener("click" , function(){

conversion.className = "btn1";
sale.className = "btn2";
shop.className = "btn2";

});

let num = 14441241300 ;
let formatted = num.toLocaleString();
price.value = formatted;


number.value = "1";

number.addEventListener("change", function(event) {
 let adad = event.target.value;

 let math = adad * num;
 price.value = math.toLocaleString();

});
