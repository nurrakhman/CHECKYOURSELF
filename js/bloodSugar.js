const  calculateBloogSugar = (ageParams, bloodPressureParams) => {
    // https://www.anlene.com/id/ms/memahami-kadar-gula-darah-normal-tubuh-kita.html
    let status = "";
    if (ageParams < 6) {
        if (bloodPressureParams <= 200 && bloodPressureParams >= 100) {
            status = "Normal";
        }else {
            status = "Tidak Normal";
        }
    } else if (ageParams <= 12 && ageParams >= 6) {
        if (bloodPressureParams <= 70 && bloodPressureParams >= 150) {
            status = "Normal";
        }else {
            status = "Tidak Normal";
        }
    } else {
        if (bloodPressureParams >= 70 && bloodPressureParams <= 130) {
            status = "Normal";
        }else {
            status = "Tidak Normal";
        }
    }
    return status
}

exports.calculateBloogSugar = calculateBloogSugar;