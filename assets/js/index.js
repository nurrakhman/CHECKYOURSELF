/////////////////////// BLOOD PRESSURE ///////////////////////
function calculateBloodpressure(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bp").value;
    let diastolik = document.getElementById("fdiastolik").value;
    let sistolik = document.getElementById("fsistolik").value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-bp");
    let dokter = document.getElementById("dokter-bp")

    //VALIDASI KOSONG TIDAK ?
    if (!diastolik || !sistolik || !name) {
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //VALIDASI NILAI
    if (parseInt(diastolik) > parseInt(sistolik)) {
        alert("angka sistolik harus lebih besar dari diastolik");
        return
    }

    //MODUL FUNGSI
    let hasil = bloodPressure(parseInt(diastolik), parseInt(sistolik));

    //UPDATE GAMBAR DOKTER
    if (hasil.status === "Tekanan darah Tinggi" || hasil.status === "Tekanan darah Rendah") {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/cemas.jpg";
    } else {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if (hasil.status === "normal") {
        output = `${name} kamu memiliki ${hasil.status}, Jaga terus ya kesehatan mu`
    } else {
        output = `${name} kamu memiliki ${hasil.status}, hati - hati kamu dapat mengidap ${hasil.risk}`
    }

    //UPFATE RESULT
    resultTxt.innerText = output;
}
//FUNGSI BLOODPRESSURE
const bloodPressure = (diastolik, sistolik) => {
    //https://www.healthline.com/health/mean-arterial-pressure#normal-map
    let MAP = diastolik + (0.33333333333 * (sistolik - diastolik));
    let output = {
        MAP,
        status: "",
        risk: []
    }
    if (MAP > 100) {
        output.status = "Tekanan darah Tinggi";
        output.risk = "Serangan Jantung, Gagal Ginjal, Gagal Jantung";
    } else if (MAP < 60) {
        output.status = "Tekanan darah Rendah";
        output.risk = "Stroke, Pendarahan Dalam, Sepsis";
    } else {
        output.status = "normal";
    }
    return output;
}

/////////////////////// CHOLESTEROL ///////////////////////
function calculateCholesterol(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-cole").value;
    let kolesterol = document.getElementById("fkolesterol").value;
    let bp = document.getElementById("fbloop").value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-cole");
    let dokter = document.getElementById("dokter-cole")

    //VALIDASI KOSONG TIDAK ?
    if (!kolesterol || !bp) {
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //MODUL FUNGSI
    let hasil = cholesterol(parseInt(kolesterol), bp);

    //UPDATE GAMBAR DOKTER
    if (hasil === "kadar kolestrol kamu terlalu tinggi" || hasil === "kadar kolestrol kamu tidak normal") {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/cemas.jpg";
    } else {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if (hasil === "kadar kolestrol kamu normal") {
        output = `${name}  ${hasil}, Jaga terus ya kesehatan mu`
    } else {
        output = `${name}  ${hasil}, Ayo perbaiki kesehatan mu`
    }

    //UPFATE RESULT
    resultTxt.innerText = output;
}

//FUNGSI CHOLESTEROL
function cholesterol(kadarKolesrol, bloodPressure) {
    if (kadarKolesrol < 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol kamu normal'
    } else if (kadarKolesrol >= 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol kamu terlalu tinggi'
    } else {
        return 'kadar kolestrol kamu tidak normal'
    }
}


/////////////////////// BLOOD PRESSURE ///////////////////////
function bloodSugar(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bs").value;
    let age = document.getElementById("age-bs").value;
    let blood_sugar = document.getElementById("blood-sugar-bs").value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-bs");
    let dokter = document.getElementById("dokter-bs")

    //VALIDASI KOSONG TIDAK ?
    if (!name || !age || !blood_sugar) {
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //MODUL FUNGSI
    let hasil = calculateBloodSugar(name, parseInt(age), parseInt(blood_sugar));
    console.log(hasil);

    //UPDATE GAMBAR DOKTER
    if (hasil.status === "Terlalu Tinggi" || hasil.status === "Terlalu Rendah") {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/cemas.jpg";
    } else {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if (hasil.status === "Normal") {
        output = `${name}, tekanan darah kamu ${hasil.status}, Jaga terus ya kesehatan mu`
    } else {
        output = `${name}, tekanan darah kamu ${hasil.status}, hati - hati kamu dapat mengidap ${hasil.risk}. Jaga pola makan kamu ya!`
    }

    //UPFATE RESULT
    resultTxt.innerText = output;
}
// FUNGSICALCULATBLOODSUGAR
const calculateBloodSugar = (ageParams, bloodPressureParams) => {
    // https://www.anlene.com/id/ms/memahami-kadar-gula-darah-normal-tubuh-kita.html
    let result = {
        status: "",
        risk: ""
    }
    if (ageParams < 6) {
        if (bloodPressureParams <= 200 && bloodPressureParams >= 100) {
            result.status = "Normal";
        } else if (bloodPressureParams < 100) {
            result.status = "Terlalu Rendah";
        } else if (bloodPressureParams > 200) {
            result.status = "Terlalu Tinggi";
        }
    } else if (ageParams <= 12 && ageParams >= 6) {
        if (bloodPressureParams <= 70 && bloodPressureParams >= 150) {
            result.status = "Normal";
        } else if (bloodPressureParams < 70) {
            result.status = "Terlalu Rendah";
        } else if (bloodPressureParams > 150) {
            result.status = "Terlalu Tinggi";
        }
    } else {
        if (bloodPressureParams >= 70 && bloodPressureParams <= 130) {
            result.status = "Normal";
        } else if (bloodPressureParams < 70) {
            result.status = "Terlalu Rendah";
        } else if (bloodPressureParams > 130) {
            result.status = "Terlalu Tinggi";
        }
    }
    if (result.status === "Terlalu Rendah") {
        result.risk = "Lemas, Gelisah, Kulit terlihat pucat"
    } else if (result.status === "Terlalu Tinggi") {
        result.risk = "Nafsu makan meningkat, Mudah lelah, Gelisah"
    } else {
        result.risk = "Anda masih normal, jaga terus ya kesehatanmu"
    }
    return result
}

/////////////////////// AKG ///////////////////////
function calculateAKG(event) {
    // Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-akg").value;
    let gender = document.querySelector('input[name=gender-akg]:checked').value;
    let weight = document.getElementById("fweight-akg").value;
    let height = document.getElementById("fheight-akg").value;
    let age = document.getElementById("fage-akg").value;
    let intensity = document.querySelector('input[name=intensity-akg]:checked').value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-akg");
    let dokter = document.getElementById("dokter-akg")

    // console.log(name, gender, weight, height, age, intensity)

    //VALIDASI KOSONG TIDAK ?
    if (!name || !weight || !height || !age) {
        alert("Mohon lengkapi semua data terdahulu");
        return
    }



    //MODUL FUNGSI
    let hasil = akg(name, gender, parseInt(weight), parseInt(height), parseInt(age), parseInt(intensity));

    //UPDATE GAMBAR DOKTER
    if (name === name) {
        dokter.src = "https://nurrakhman.github.io/CHECKYOURSELF/assets/senang.jpg";
    }

    // //SETTING OUTPUT
    let output = hasil
    // //UPFATE RESULT
    resultTxt.innerText = output;
}

//FUNGSI AKG
function akg(name, gender, weight, height, age, intensity) {
    // source: https://www.sehatq.com/artikel/memahami-angka-kecukupan-gizi-dan-cara-memenuhinya
    let result = {};
    let calorie = 0;
    let intensityIndex = 0;

    if (gender === 'perempuan') { // female
        calorie += 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else { // male
        calorie += 66 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    // workout intensity
    switch (intensity) {
        case 1:
            intensityIndex += 1.2;
            break;
        case 2:
            intensityIndex += 1.375;
            break;
        case 3:
            intensityIndex += 1.55;
            break;
        case 4:
            intensityIndex += 1.725;
            break;
        case 5:
            intensityIndex += 1.9;
            break;
        default:
            break;
    }

    // calorie needed
    const calorieNeeded = Math.floor(calorie * intensityIndex);

    // calculate protein, karbohidrat, lemak
    const protein = Math.floor((0.15 * calorieNeeded) / 4)
    const karbohidrat = Math.floor((0.60 * calorieNeeded) / 4)
    const lemak = Math.floor((0.15 * calorieNeeded) / 9)

    result = `Hai ${name}, kebutuhan kalori kamu perhari adalah ${calorieNeeded} Kkal, dengan kombinasi kandungan nutrisi yang dianjurkan adalah protein ${protein} gr, karbohidrat ${karbohidrat} gr dan lemak ${lemak} gr!`

    return result;
}

// console.log(akg('Joker', 'laki-laki', 75, 168, 28, 3)) // Hai Joker, kebutuhan kalori kamu perhari adalah 1483 Kkal, dengan kombinasi kandungan nutrisi yang dianjurkan adalah protein 55 gram, karbohidrat 222 gram, dan lemak 24 gram!
