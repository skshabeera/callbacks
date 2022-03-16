function show(){
    console.log("shabeera")
}
function hai(callback){
    callback();
}
hai(show);


function show(a){
    console.log("shabeera"+a)
}
function hai(callback){
    var a=10;
    callback(a);
}
hai(show);


function hai(callback){
    var a=10;
    callback(a);
}
hai(function show(a){
    console.log("i am show a function"+a)
});

function hai(callback){
    var a=10;
    callback(a);
}
hai(function(a){
    console.log("i am show a function"+a)
});

function hai(callback){
    var a=10;
    callback(a);
}
hai(a=>console.log("i am good"+a))
// synchronous

function show(){
    console.log("i am shabeera")
}
function greeky(callback){
    callback()
}
greeky(show)
console.log("End")

// asynchronous
setTimeout((function show() {
    console.log("i am shabeera")
      
    
}),5000);
console.log("End")