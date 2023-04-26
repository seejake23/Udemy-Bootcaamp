//Create your function below this line. 

function bmiCalc (weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    return bmi
}

console.log("Your BMI is " + Math.round(bmiCalc(65, 1.8)));



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function.*/