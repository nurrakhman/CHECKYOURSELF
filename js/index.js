
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
        dokter.src = "../cemas.jpg";
    } else {
        dokter.src = "../senang.jpg";
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
        dokter.src = "../cemas.jpg";
    } else {
        dokter.src = "../senang.jpg";
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


/////////////////////// BMI ///////////////////////

function calculateBmi(event) {
    //Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("fnama-bmi").value;
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

    //MODUL FUNGSI
    let hasil = testBmi(parseInt(weight), parseInt(height));
    // console.log(weight +'_'+ height);
    //UPDATE GAMBAR DOKTER
    if (hasil.Status === 'Underweight' || hasil.Status === "Overweight" || hasil.Status === "Obesity class 1" || hasil.Status === "Obesity class 2" || hasil.Status === "Obesity class 3") {
        dokter.src = "../cemas.jpg";
    } else {
        dokter.src = "../senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if (hasil.Status === 'Underweigt') {
        output = `kamu memiliki score BMI ${hasil.BMI}, Kamu harus banyak makan`
    } else if (hasil.Status === 'Normal') {
        output = ` kamu memiliki score BMI ${hasil.BMI}, Jaga terus ya kesehatan mu`
    } else {
        output = ` kamu memiliki score BMI ${hasil.BMI}, Kamu harus jaga pola makan `
    }

    //UPFATE RESULT
    resultTxt.innerText = output;
}

//FUNGSI CHOLESTEROL
function testBmi(weight,height) {
    let mass = weight/(height*height); 
    console.log(mass);
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
//   console.log(bmi(70,1.73));