const lahan = [
    ["subur", "subur", "kering", "subur", "subur"],
    ["subur", "tandus", "kering", "kering", "kering"],
    ["subur", "subur", "kering", "subur", "kering"],
    ["subur", "tandus", "kering", "kering", "kering"],
    ["kering", "subur", "subur", "subur", "kering"],
]

const weatherData = {
    temprature : 23,
    humidity : 56,
    windspeed : 10
}

for(let i=0;i<lahan.length;i++){
    let subur = 0
    let petak = lahan[i].length
    for(let j=0;j<petak;j++){
        if(lahan[i][j] == "subur"){
            subur++
        }
    }
    if(subur < petak/2){
        for(let k=0;k<petak;k++){
            lahan[i][k] = "kering"
        }
    }
}
let suburasli = 0

for (let i = 0; i < lahan.length; i++) {
  for (let j = 0; j < lahan[i].length; j++) {
    if (lahan[i][j] === "subur") {
      suburasli++;
    }
  }
}

console.log("=== Hasil pengecekan lahan ===");

let cocok = true

if (weatherData["temprature"] < 20 || weatherData["temprature"] > 30) {
    console.log("Suhu tidak cocok untuk bercocok tanam");
    cocok = false
} 
if (weatherData["humidity"] < 50) {
    console.log("Kelembapan tidak cocok untuk bercocok tanam");
    cocok = false
}
if (weatherData["windspeed"] > 15) {
    console.log("Kecepatan angin terlalu tinggi untuk bercocok tanam");
    cocok = false

} 
if(cocok){
    console.log("Cuaca cocok untuk bercocok tanam!");
}
let totalDitanam = cocok ? suburasli : 0;
console.log(`Total petak subur: ${suburasli}`);
console.log(`Total petak yang ditanami: ${totalDitanam}`);