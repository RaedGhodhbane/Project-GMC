var rm= document.getElementsByClassName("btnRemove");
//console.log(rm);
for (var i=0 ; i < rm.length ; i++) {
    const button= rm[i];
button.addEventListener("click",function(){
    button.parentElement.remove();
})
}

var tt1= document.getElementById("like1");
//console.log(tt1);
tt1.addEventListener("click",function() {
tt1.setAttribute("class","raed1");
//console.log(tt1);
})

var tt2= document.getElementById("like2");
//console.log(tt2);
tt2.addEventListener("click",function() {
tt2.setAttribute("class","raed1");
//console.log(tt2);
})

var tt3= document.getElementById("like3");
//console.log(tt3);
tt3.addEventListener("click",function() {
tt3.setAttribute("class","raed1");
//console.log(tt3);
})

var tt4= document.getElementById("like4");
//console.log(tt4);
tt4.addEventListener("click",function() {
tt4.setAttribute("class","raed1");
//console.log(tt4);
})

var tt5= document.getElementById("like5");
//console.log(tt5);
tt5.addEventListener("click",function() {
tt5.setAttribute("class","raed1");
//console.log(tt5);
})

var tt6= document.getElementById("like6");
//console.log(tt6);
tt6.addEventListener("click",function() {
tt6.setAttribute("class","raed1");
//console.log(tt6);
})

var tt7= document.getElementById("like7");
//console.log(tt7);
tt7.addEventListener("click",function() {
tt7.setAttribute("class","raed1");
//console.log(tt7);
})

var tt8= document.getElementById("like8");
//console.log(tt8);
tt8.addEventListener("click",function() {
tt8.setAttribute("class","raed1");
//console.log(tt8);
})
var total = 0 ;
var price1 = 0 ;
var btnplus=document.getElementsByClassName("plus");
//console.log(btnplus);
for (var i=0; i< btnplus.length ; i++ ) {
    const plus= btnplus[i];
plus.addEventListener("click", function () {
    plus.parentElement.children[2].value++;
    var totalPrice = plus.parentElement.children[6].children[2].children[0];
    //console.log(totalPrice);
    totalPrice.innerHTML= plus.parentElement.children[2].value * plus.parentElement.children[6].children[1].children[0].innerHTML;
    var items=document.getElementById("total");
    total++;
    console.log(items.innerText++);
//items.value++;
//console.log(total);
//var items1 = items.children[0] + plus.parentElement.children[2].value;
    var pricePlus=document.getElementById("price");
    price1 = pricePlus.innerText + totalPrice.innerHTML;
    console.log(pricePlus.innerText);

})
}

var total2= 0 ;
var btnmoins=document.getElementsByClassName("moins");
for (var i=0; i< btnmoins.length ; i++ ) {
    const moins= btnmoins[i];
moins.addEventListener("click", function () {
    if (moins.parentElement.children[2].value > 0) {
    moins.parentElement.children[2].value--;
    }
    var totalPrice2 = moins.parentElement.children[6].children[2].children[0];
    //console.log(totalPrice2);
    totalPrice2.innerHTML= moins.parentElement.children[2].value * moins.parentElement.children[6].children[1].children[0].innerHTML;
    var items2=document.getElementById("total");
    if (total>0) {
        total--;
    console.log(items2.innerText--);
    }

})
}


