let dataUser = {
    name : "",
    dokter : "",
    result : "",
}

/////////////////////// BLOOD PRESSURE ///////////////////////
function calculateBloodpressure(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bp").value;
    dataUser.name = name;
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

    if (parseInt(diastolik) < 1 || parseInt(sistolik) < 1) {
        alert("tolong masukan bilangan positif");
        return
    }

    //MODUL FUNGSI
    let hasil = bloodPressure(parseInt(diastolik), parseInt(sistolik));

    //UPDATE GAMBAR DOKTER
    if (hasil.status === "Tekanan darah Tinggi" || hasil.status === "Tekanan darah Rendah") {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/cemas.gif";

    } else {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/smile.gif"
    }
    

    //SETTING OUTPUT
    if (hasil.status === "normal") {
        dataUser.result = `${name} kamu memiliki Tekanan darah ${hasil.status}, Jaga terus ya kesehatan mu`
    } else {
        dataUser.result = `${name} kamu memiliki ${hasil.status}, hati - hati kamu dapat mengidap ${hasil.risk}`
    }
    
    
    //UPFATE RESULT
    dokter.src = dataUser.dokter;
    resultTxt.innerText = dataUser.result;
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
    dataUser.name = name;
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

    if (parseInt(kolesterol) < 1) {
        alert("tolong masukan bilangan positif");
        return
    }

    //MODUL FUNGSI
    let hasil = cholesterol(parseInt(kolesterol), bp);

    //UPDATE GAMBAR DOKTER
    if (hasil === "kadar kolestrol kamu terlalu tinggi" || hasil === "kadar kolestrol kamu tidak normal") {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/cemas.gif";
    } else {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/smile.gif";
    }

    //SETTING OUTPUT
    if (hasil === "kadar kolestrol kamu normal") {
        dataUser.result = `${name}  ${hasil}, Jaga terus ya kesehatan mu`
    } else {
        dataUser.result = `${name}  ${hasil}, Ayo perbaiki kesehatan mu`
    }

    //UPFATE RESULT
    resultTxt.innerText = dataUser.result;
    dokter.src = dataUser.dokter;
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


/////////////////////// BLOOD SUGAR ///////////////////////
function bloodSugar(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bs").value;
    dataUser.name = name;
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

    if (parseInt(age) < 1 || parseInt(blood_sugar) < 1 ) {
        alert("Tolong masukan bilangan positif");
        return
    }
    
    console.log(parseInt(age) + " " + parseInt(blood_sugar));
    //MODUL FUNGSI
    let hasil = calculateBloodSugar(parseInt(age), parseInt(blood_sugar));

    //UPDATE GAMBAR DOKTER
    if (hasil.status === "Terlalu Tinggi" || hasil.status === "Terlalu Rendah") {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/cemas.gif";
    } else {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/smile.gif";
    }

    //SETTING OUTPUT
    if (hasil.status === "normal") {
        dataUser.result = `HI! ${name}, tekanan darah kamu ${hasil.status}, jaga terus ya kesehatanmu!`
    } else {
        dataUser.result = `HI! ${name}, tekanan darah kamu ${hasil.status}, hati - hati kamu dapat mengidap ${hasil.risk}. Jaga pola makan kamu ya!`
    }

    //UPDATE RESULT
    resultTxt.innerText = dataUser.result;
    dokter.src = dataUser.dokter;
}
// FUNGSICALCULATBLOODSUGAR
const calculateBloodSugar = (ageParams, bloodPressureParams) => {
    // https://www.anlene.com/id/ms/memahami-kadar-gula-darah-normal-tubuh-kita.html
    let result = {
        status: "",
        risk: ""
    }
    if (ageParams < 6) {
        if (bloodPressureParams > 200) {
            result.status = "terlalu tinggi";
        } else if (bloodPressureParams >= 100) {
            result.status = "normal";
        } else {
            result.status = "terlalu rendah";
        }
    } else if (ageParams <= 12 && ageParams >= 6) {
        if (bloodPressureParams > 150) {
            result.status = "terlalu tinggi";
        } else if (bloodPressureParams >= 70) {
            result.status = "normal";
        } else {
            result.status = "terlalu rendah";
        }
    } else {
        if (bloodPressureParams > 130) {
            result.status = "terlalu tinggi";
        } else if (bloodPressureParams >= 70) {
            result.status = "normal";
        } else {
            result.status = "terlalu rendah";
        }
    }
    if (result.status === "terlalu rendah") {
        result.risk = "Lemas, Gelisah, Kulit terlihat pucat"
    } else if (result.status === "terlalu tinggi") {
        result.risk = "Nafsu makan meningkat, Mudah lelah, Gelisah"
    }
    return result
}

/////////////////////// BMI ///////////////////////

function calculateBmi(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bmi").value;
    dataUser.name = name;
    let weight = document.getElementById("fweight").value;
    let height = document.getElementById("fheight").value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-bmi");
    let dokter = document.getElementById("dokter-bmi")

    //VALIDASI KOSONG TIDAK ?
    if (!weight || !height || !name) {
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    if (parseInt(weight) < 1 || parseInt(height) < 1 ) {
        alert("Tolong masukan bilangan positif");
        return
    }

    //MODUL FUNGSI
    let hasil = testBmi(parseInt(weight), parseInt(height));
    // console.log(weight +'_'+ height);
    //UPDATE GAMBAR DOKTER
    if (hasil.BMI > 18.5 && hasil.BMI <= 24.9) {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/smile.gif";
    } else {
        dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/cemas.gif";
    }

    //SETTING OUTPUT
    let output;
    if (hasil.BMI <= 18.5) {
        dataUser.result = `Kamu memiliki score BMI ${hasil.BMI}, Kamu harus banyak makan`
    } else if (hasil.BMI > 18.5 && hasil.BMI <= 24.9) {
        dataUser.result = `Kamu memiliki score BMI ${hasil.BMI}, Jaga terus ya kesehatan mu`
    } else {
        dataUser.result = `Kamu memiliki score BMI ${hasil.BMI}, Kamu harus jaga pola makan `
    }

    //UPFATE RESULT
    resultTxt.innerText = dataUser.result;
    dokter.src = dataUser.dokter;
}

//FUNGSI CHOLESTEROL
function testBmi(weight, height) {
    let mass = weight / (height / 100 * height / 100);
    // console.log(mass);
    let result = {
        BMI: 0,
        Status: []
    }
    if (mass <= 18.5) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Underweight');
    } else if (mass > 18.5 && mass <= 24.9) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Normal Weight');
    } else if (mass > 25 && mass <= 29.9) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Overweight');
    } else if (mass > 30 && mass <= 34.9) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Obesity Class 1');
    } else if (mass > 35 && mass <= 39.9) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Obesity Class 2');
    } else if (mass >= 40) {
        result.BMI = mass.toFixed(2);
        result.Status.push('Obesity Class 3');
    }
    result.BMI = Number(result.BMI)
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

    if (parseInt(weight) < 1 || parseInt(height) < 1 || parseInt(age) < 1 || parseInt(intensity) < 1) {
        alert("Tolong masukan bilangan positif");
        return
    }

    //MODUL FUNGSI
    dataUser.result = akg(name, gender, parseInt(weight), parseInt(height), parseInt(age), parseInt(intensity));
    dataUser.dokter = "https://nurrakhman.github.io/CHECKYOURSELF/assets/image/smile.gif";
    
    // //UPFATE RESULT
    resultTxt.innerText = dataUser.result;
    dokter.src = dataUser.dokter;
}

//FUNGSI AKG
function akg(name, gender, weight, height, age, intensity) {
    // source: https://www.sehatq.com/artikel/memahami-angka-kecukupan-gizi-dan-cara-memenuhinya
    let result = {};
    let calorie = 0;
    let intensityIndex = 0;

    if (gender === 'perempuan') { // female
        calorie += (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } else { // male
        calorie += (10 * weight) + (6.25 * height) - (5 * age) + 5;
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


function changeView(event, screen) {
    // Prevent refresh page
    event.preventDefault();
    console.log("trigger " + screen)
    let bp = document.getElementById("bp");
    let cole = document.getElementById("cole");
    let bs = document.getElementById("bs");
    let bmi = document.getElementById("bmi");
    let akg = document.getElementById("akg");
    let dokter ="https://nurrakhman.github.io/CHECKYOURSELF/assets/image/tanya.gif";
    let result ="Silahkan masukan data...";

    //Hide ALL
    bp.style.display = "none";
    cole.style.display = "none";
    bs.style.display = "none";
    bmi.style.display = "none";
    akg.style.display = "none";


    switch (screen) {
        case "bp":
            bp.style.display = "flex";
            bp.scrollIntoView({behavior: "smooth"});
            document.getElementById("dokter-bp").src = dokter;
            document.getElementById("result-bp").innerText = result;
            document.getElementById("fnama-bp").value = dataUser.name;
            document.getElementById("fdiastolik").value = "";
            document.getElementById("fsistolik").value = "";
            break;
        case "cole":
            cole.style.display = "flex";
            cole.scrollIntoView({behavior: "smooth"});
            document.getElementById("dokter-cole").src = dokter;
            document.getElementById("result-cole").innerText = result;
            document.getElementById("fnama-cole").value = dataUser.name;
            document.getElementById("fkolesterol").value = "";
            document.getElementById("fbloop").value = "";
            break;
        case "bs":
            bs.style.display = "flex";
            bs.scrollIntoView({behavior: "smooth"});
            document.getElementById("dokter-bs").src = dokter;
            document.getElementById("result-bs").innerText = result;
            document.getElementById("fnama-bs").value = dataUser.name;
            document.getElementById("age-bs").value = "";
            document.getElementById("blood-sugar-bs").value = "";
            break;
        case "bmi":
            bmi.style.display = "flex";
            bmi.scrollIntoView({behavior: "smooth"});
            document.getElementById("dokter-bmi").src = dokter;
            document.getElementById("result-bmi").innerText = result;
            document.getElementById("fnama-bmi").value = dataUser.name;
            document.getElementById("fweight").value = "";
            document.getElementById("fheight").value = "";
            break;
        case "akg":
            akg.style.display = "flex";
            akg.scrollIntoView({behavior: "smooth"});
            document.getElementById("dokter-akg").src = dokter;
            document.getElementById("result-akg").innerText = result;
            document.getElementById("fnama-akg").value = dataUser.name;
            document.getElementById("fweight-akg").value = "";
            document.getElementById("fheight-akg").value = "";
            document.getElementById("fage-akg").value = "";
            break;
        default:
            break;
    }
}

function clearData(event,screen){
    dataUser.name = ""
    changeView(event,screen)
}