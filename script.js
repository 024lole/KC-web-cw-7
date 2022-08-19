function BMI (weigh,height) {

 let result = weight / (height*height);
return result 
}
 console.log (BMI(80,1.8))


function Status (BMI) {
 if (BMI < 18.5 ) {
    return "لديك نقص بالوزن "
 } else if (BMI >= 18.5 && BMI<25) {
 } else  (BMI>=25) 
    return "لديك زيادة بالوزن"
   }
 console.log(BMI(80,1.8))

function calculate () {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmi = BMI (weight.height)
    let desc = Status(BMI(weight,height))
    let div = document.getElementById("result")
    div.innerHTML = bmi + "==" + desc
}


