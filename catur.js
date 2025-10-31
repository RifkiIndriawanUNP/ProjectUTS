let papanCatur = [
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".","R",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".","H",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".","K",".",".",".",".","."]
]

// console.log(papanCatur.length);
let barisK = -1
let kolomK = -1
let barisR = -1
let kolomR = -1
let barisbidakLain = -1
let kolombidakLain = -1

for(let i = 0; i<papanCatur.length; i++){
    for(let j = 0; j<papanCatur[i].length; j++){
        if(papanCatur[i][j]=="K"){
            barisK = i
            kolomK = j
        }
        else if(papanCatur[i][j]=="R"){
            barisR = i
            kolomR = j
        }
        else if(papanCatur[i][j] !== "."){
            barisbidakLain = i
            kolombidakLain = j
            console.log("!!Ada bidak lain!!");    
        }
    }
}

console.log("=== Kondisi Permainan Catur ===");
console.log(`posisi Raja: ${barisK}, ${kolomK}`);
console.log(`posisi Benteng: ${barisR}, ${kolomR}`);

if(barisK >= 0 && barisR >= 0 && kolomK >= 0 && kolomR >= 0){
    if(barisK === barisR || kolomK === kolomR){
        if(barisbidakLain === barisK && ( // operator < dan > untuk mengetahui si bidak lainnya di tengah2 meraka atau tidak
            (kolombidakLain > kolomK && kolombidakLain < kolomR) || 
            (kolombidakLain > kolomR && kolombidakLain < kolomK)) || 
            (kolombidakLain === kolomK && (
            (barisbidakLain > barisK && barisbidakLain < barisR) || 
            (barisbidakLain > barisR && barisbidakLain < barisK)))){
                console.log(`Aman, Bidak lain mnenghalangi di: ${barisbidakLain}, ${kolombidakLain}`);            
            }
        else{
            console.log("SKAK!");
        }      
    }
    else{
        console.log("Aman");
    }
}
else if(barisK == -1 && kolomK == -1){
    console.log("Raja belum ditempatkan");
}
else if(barisR == -1 && kolomR == -1){
    console.log("Benteng belum ditempatkan");
}


