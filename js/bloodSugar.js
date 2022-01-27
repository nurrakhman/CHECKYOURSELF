const  calculateBloogSugar = (ageParams, bloodPressureParams) => {
    // https://www.anlene.com/id/ms/memahami-kadar-gula-darah-normal-tubuh-kita.html
    let result = {
        status : "",
        risk : []
    }
    if (ageParams < 6) {
        if (bloodPressureParams <= 200 && bloodPressureParams >= 100) {
            result.status = "Normal";
        }else if(bloodPressureParams < 100){
            result.status = "Terlalu Rendah";
        }else if(bloodPressureParams > 200){
            result.status = "Terlalu Tinggi";
        }
    } else if (ageParams <= 12 && ageParams >= 6) {
        if (bloodPressureParams <= 70 && bloodPressureParams >= 150) {
            result.status = "Normal";
        }else if(bloodPressureParams < 70){
            result.status = "Terlalu Rendah";
        }else if(bloodPressureParams > 150){
            result.status = "Terlalu Tinggi";
        }
    } else {
        if (bloodPressureParams >= 70 && bloodPressureParams <= 130) {
            result.status = "Normal";
        }else if(bloodPressureParams < 70){
            result.status = "Terlalu Rendah";
        }else if(bloodPressureParams > 130){
            result.status = "Terlalu Tinggi";
        }
    }
    if (result.status === "Terlalu Rendah") {
        result.risk = ["Lemas", "Gelisah", "Kulit terlihat pucat"]
    }else if(result.status === "Terlalu Tinggi") {
        result.risk = ["Nafsu makan meningkat", "Mudah lelah", "Gelisah"]
    }else{
        result.risk = ["Anda masih aman"]
    }
    return result
}

exports.calculateBloogSugar = calculateBloogSugar;