function cekCuaca(weatherData){
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
    return cocok
}
module.exports = { cekCuaca };