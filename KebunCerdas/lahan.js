function kesuburan(lahan){
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
    return lahan
}
function hitungsubur(lahan){
    let suburasli = 0
    for (let i = 0; i < lahan.length; i++) {
        for (let j = 0; j < lahan[i].length; j++) {
            if (lahan[i][j] === "subur") {
            suburasli++;
            }
        }
    }
    return suburasli
}
module.exports = { kesuburan, hitungsubur };