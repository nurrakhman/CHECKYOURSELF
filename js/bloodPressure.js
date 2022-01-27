function bloodPressure(diastolik, sistolik){
    //https://www.healthline.com/health/mean-arterial-pressure#normal-map
    let MAP = diastolik + (0.33333333333 * (sistolik - diastolik));
    let output = {
        MAP,
        status: "",
        risk:[]
    }
    if(MAP > 100){
        output.status = "Tekanan darah Tinggi";
        //spread operator
        output.risk = ["Serang Jantung", "Gagal Ginjal", "Gagal Jantung"];
    }else if(MAP < 60){
        output.status = "Tekanan darah Rendah";
        output.risk = ["Stroke", "Pendarahan Dalam", "Sepsis"]
    }else {
        output.status = "normal";
    }
    return output;
}

console.log(bloodPressure(95,70)); //normal
console.log(bloodPressure(200,100)); //normal
console.log(bloodPressure(55,30)); //normal