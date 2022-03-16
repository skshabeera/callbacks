let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppletings : ["chocolate", "peanuts"],
 };
let is_shop_open =true;


let order=(time,work)=>{
    return new Promise ((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time,);
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })
}
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
    .then(()=>{
    return order(0000,()=>console.log("production is started"))
    })
    .then(()=>{
        return order(2000, ()=>console.log(" the fruilt was chopped"))
    })
    .then(()=>{
        return order(1000,()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
        })
    })
    .then(()=>{
        return order(1000,()=>console.log("start thre machine"))

    })
    .then(()=>{
       return order(2000, ()=>{
           console.log(`ice cream  was this place ${stocks.holder[0]}  `)
       }) 
    })
    .then(()=>{
        return order(3000,()=>{
            console.log(`${stocks.toppings[0]} was selcted`)
        })
    })
    .then(()=>{
        return order(1000,()=>console.log(" ice cream was served"))


    })
    .catch(()=>{
        console.log('customer left')

    })
    .finally(()=>{
       console.log("day ended,shoping is closed") 
    })
        
    


