function cholesterol(kadarKolesrol, bloodPressure){
    if (kadarKolesrol < 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol normal'
    }else if (kadarKolesrol >= 200 && bloodPressure === 'normal') {
        return 'kadar kolestrol terlalu tinggi'
    }else{
        return 'kadar kolestrol tidak normal'
    }
}
console.log(cholesterol(200, 'normal'));