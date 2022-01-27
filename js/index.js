
/////////////////////// BLOOD PRESSURE ///////////////////////
function calculateBloodpressure(event){
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
    if(!diastolik || !sistolik || !name){
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //VALIDASI NILAI
    if(parseInt(diastolik) > parseInt(sistolik)){
        alert("angka sistolik harus lebih besar dari diastolik");
        return
    }

    //MODUL FUNGSI
    let hasil = bloodPressure(parseInt(diastolik),parseInt(sistolik));
    
    //UPDATE GAMBAR DOKTER
    if(hasil.status === "Tekanan darah Tinggi" || hasil.status === "Tekanan darah Rendah"){
        dokter.src="../cemas.jpg";
    }else{
        dokter.src="../senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if(hasil.status === "normal"){
        output = `${name} kamu memiliki ${hasil.status}, Jaga terus ya kesehatan mu`
    }else{
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
        risk:[]
    }
    if(MAP > 100){
        output.status = "Tekanan darah Tinggi";
        output.risk = "Serangan Jantung, Gagal Ginjal, Gagal Jantung";
    }else if(MAP < 60){
        output.status = "Tekanan darah Rendah";
        output.risk = "Stroke, Pendarahan Dalam, Sepsis";
    }else {
        output.status = "normal";
    }
    return output;
}

/////////////////////// CHOLESTEROL ///////////////////////
function calculateCholesterol(event){
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
    if(!kolesterol || !bp){
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //MODUL FUNGSI
    let hasil = cholesterol(parseInt(kolesterol), bp);
    
    //UPDATE GAMBAR DOKTER
    if(hasil === "kadar kolestrol kamu terlalu tinggi" || hasil === "kadar kolestrol kamu tidak normal"){
        dokter.src= "../cemas.jpg";
    }else{
        dokter.src= "../senang.jpg";
    }

    //SETTING OUTPUT
    let output;
    if(hasil === "kadar kolestrol kamu normal"){
        output = `${name}  ${hasil}, Jaga terus ya kesehatan mu`
    }else{
        output = `${name}  ${hasil}, Ayo perbaiki kesehatan mu`
    } 

    //UPFATE RESULT
    resultTxt.innerText = output;
}

//FUNGSI CHOLESTEROL
function cholesterol(kadarKolesrol, bloodPressure){
    if (kadarKolesrol < 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol kamu normal'
    }else if (kadarKolesrol >= 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol kamu terlalu tinggi'
    }else{
        return 'kadar kolestrol kamu tidak normal'
    }
}

/////////////////////// AKG ///////////////////////
function calculateAKG(event){
    // Prevent refresh page
    event.preventDefault();
    //DOM Form
    let name = document.getElementById("name-akg").value;
    let gender = document.getElementById("gender-akg").value;
    let weight = document.getElementById("weight-akg").value;
    let height = document.getElementById("height-akg").value;
    let age = document.getElementById("age-akg").value;
    let intensity = document.getElementById("intensity-akg").value;
    //DOM Tampilan
    let resultTxt = document.getElementById("result-akg");
    let dokter = document.getElementById("dokter-akg")

    //VALIDASI KOSONG TIDAK ?
    if(!name || !gender || !weight || !height || !age || !intensity){
        alert("Mohon lengkapi semua data terdahulu");
        return
    }

    //MODUL FUNGSI
    let hasil = akg(gender, weight, height, age, intensity);
    
    //UPDATE GAMBAR DOKTER
    // if(hasil === "kadar kolestrol kamu terlalu tinggi" || hasil === "kadar kolestrol kamu tidak normal"){
    //     dokter.src= "../cemas.jpg";
    // }else{
    //     dokter.src= "../senang.jpg";
    // }

    // //SETTING OUTPUT
    // let output;
    // if(hasil === "kadar kolestrol kamu normal"){
    //     output = `${name}  ${hasil}, Jaga terus ya kesehatan mu`
    // }else{
    //     output = `${name}  ${hasil}, Ayo perbaiki kesehatan mu`
    // } 

    // //UPFATE RESULT
    // resultTxt.innerText = output;
}

//FUNGSI AKG
function akg(gender, weight, height, age, intensity) {
    // source: https://www.sehatq.com/artikel/memahami-angka-kecukupan-gizi-dan-cara-memenuhinya
    let result = {};
    let calorie = 0;
    let intensityIndex = 0;
    
    if (gender === true) { // female
        calorie += 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    } else { // gender === false = male
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

    result = `Kebutuhan protein Anda ${protein} gram, karbohidrat ${karbohidrat} gram, dan lemak ${lemak} gram dalam sehari`

    // result.protein = protein
    // result.karbohidrat = karbohidrat
    // result.lemak = lemak

    return result;
}

console.log(akg(false, 75, 168, 28, 2)) // Kebutuhan protein Anda 49 gram, karbohidrat 197 gram, dan lemak 21 gram dalam sehari
console.log(akg(true, 50, 155, 24, 1)) // Kebutuhan protein Anda 58 gram, karbohidrat 234 gram, dan lemak 26 gram dalam sehari