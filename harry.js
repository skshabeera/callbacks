const students=[{name:"shabeera",subject:"chemistry"},{name:"sravya",subject:"mathematics"}]


function enrollstudent(student){
    setTimeout(function(){
       students.push(student); 
    },3000)
}
function getstudents(student){
    setTimeout(function(){
        let str="";
        students.forEach(function(student)){
            str+=student
        }
        
    },1000)
}
