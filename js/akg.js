function akg(gender, weight, height, age, intensity) {
    // source: https://www.sehatq.com/artikel/memahami-angka-kecukupan-gizi-dan-cara-memenuhinya
    let result;
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

    return result;
}

console.log(akg(false, 75, 168, 28, 2))
console.log(akg(true, 50, 155, 24, 1))
