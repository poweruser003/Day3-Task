//1. Use the rest countries API URL https://restcountries.com/v3.1/all and display all  the country 
// flags in the country

// creating an XHR Object to initiate a fetch request using XMLHttpRequest via API
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res)
    
    for( var i=0;i<res.length;i++){
      
        console.log(res[i].flags.alt)
    }
}


// 2.use the same rest countries and print all countries names ,regions, sub-region and population
var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res)
    
    for( var i=0;i<res.length;i++){
       
        console.log(res[i].name.common, res[i].region, res[i].subregion, res[i].population)
    }
}

// 3.How to compare two JSON having same properties without order.
// let obj1 = {age: 10, name: "Aadhya"}
// let obj2 = {name:"Aadhya", age: 10}

let obj1 = {age: 10, name: "Aadhya"}
let obj2 = {name:"Aadhya", age: 10}

console.log(_.isEqual(obj1,obj2))
