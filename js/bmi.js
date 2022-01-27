function bmi(weight,height) {
  let mass = weight/(height*height); 
  // console.log(mass);
  let result = {
      BMI :  0,
      Status : []
  }
  if(mass <= 18.5){
      result.BMI = mass.toFixed(2);
      result.Status.push('Underweight');
  }else if (mass > 18.5 && mass <= 24.9) {
      result.BMI = mass.toFixed(2);
      result.Status.push('Normal Weight');
  }else if (mass > 25 && mass <= 29.9) {
      result.BMI = mass.toFixed(2);
      result.Status.push('Overweight');
  }else if (mass > 30 && mass <= 34.9) {
      result.BMI = mass.toFixed(2);
      result.Status.push('Obesity Class 1');
  }else if (mass > 35 && mass <= 39.9) {
      result.BMI = mass.toFixed(2);
      result.Status.push('Obesity Class 2');
  }else if(mass >= 40){
      result.BMI = mass.toFixed(2);
      result.Status.push('Obesity Class 3');
  }
  result.BMI = Number(result.BMI)
  return result
}

//Test Case
console.log(bmi(70,1.73));