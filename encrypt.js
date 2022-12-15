//Denne script krypterer min kode (Skrevet af Niklas)
//streng til at have ciffrene i til at få bogstaver til tal
const char = " abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789";
function encryptRSA(){
    //får intput fra inputfelter
    var e = document.getElementById("eEncrypt").value;
    var n = document.getElementById("nEncrypt").value;
    var textPure = document.getElementById("textBefore").value;
    var encryptArr = [];//tom liste til krypteret tekst
    for(var k = 0; k < textPure.length; k++){//for hvert ciffer i teksten
        encryptArr[k] = char.indexOf(textPure[k]);//tildeler cifferets værdi i tabel til liste
        encryptArr[k] = Number(((BigInt(encryptArr[k]) ** BigInt(e)) % BigInt(n)));//laver krypteringsprotokol vha. BigInt udfra nuværende ciffer, hvor den bagefter laves til typen number
    }
    //outputter listen 
    document.getElementById("Output2").innerHTML = "Krypteret liste: " + encryptArr;
}