function logika(papanCatur) {
    let barisK = -1;
    let kolomK = -1;
    let barisR = -1;
    let kolomR = -1;
    let barisBidakLain = -1;
    let kolomBidakLain = -1;

    // Cari posisi bidak
    for (let i = 0; i < papanCatur.length; i++) {
        for (let j = 0; j < papanCatur[i].length; j++) {
            if (papanCatur[i][j] === "K") {
            barisK = i;
            kolomK = j;
            }
            else if (papanCatur[i][j] === "R") {
            barisR = i;
            kolomR = j;
        } 
            else if (papanCatur[i][j] !== ".") {
            barisBidakLain = i;
            kolomBidakLain = j;
        }
    }
  }
    // cek raja & benteng sudah ada atau belum
    if (barisK === -1 || kolomK === -1) {
        return "Raja belum ditempatkan";
    }
    if (barisR === -1 || kolomR === -1) {
        return "Benteng belum ditempatkan";
    }

    console.log(`posisi Raja: ${barisK}, ${kolomK}`);
    console.log(`posisi Benteng: ${barisR}, ${kolomR}`);

    // Logika Skak
    if (barisK === barisR || kolomK === kolomR) {
        if (
        (barisBidakLain === barisK &&
        ((kolomBidakLain > kolomK && kolomBidakLain < kolomR) ||
        (kolomBidakLain > kolomR && kolomBidakLain < kolomK))) || // mengecek apa ada bida lain di tengah2 raja & benteng
        (kolomBidakLain === kolomK &&
        ((barisBidakLain > barisK && barisBidakLain < barisR) ||
        (barisBidakLain > barisR && barisBidakLain < barisK)))){
        return `Aman, bidak lain menghalangi di: (${barisBidakLain}, ${kolomBidakLain})`;
    } 
    else {
      return "SKAK!";
    }
    } 
    else {
        return "Aman";
    }
}

module.exports = { logika };