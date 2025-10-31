const { kesuburan, hitungsubur } = require("./lahan");
const { cekCuaca } = require("./cuaca");

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

kesuburan(lahan)
let totalsubur = hitungsubur(lahan)

console.log("=== Hasil pengecekan lahan ===");

let cocok = cekCuaca(weatherData)
let totalDitanam = cocok ? totalsubur : 0;

console.log(`Total petak subur: ${totalsubur}`);
console.log(`Total petak yang ditanami: ${totalDitanam}`);
