function decryptRSA(){
    //får indput fra indputfelterne
    var d = document.getElementById("dDecrypt").value;
    var n = document.getElementById("nDecrypt").value;
    var textDecrypt = document.getElementById("textAfter").value;
    var decryptArr = [];//liste til decrypteret tekst
    var m = 0;//tæller, hvilken plads i liste, den er
    var finalText = "Teksten dekrypteret giver ciffrene: ";
    for(var l = 0; l < textDecrypt.length; l++){
        //hvis den nuværende værdi af listen er et komma, tilføj tal til liste
        if(textDecrypt[l] == ","){
            decryptArr[m] = Number(decryptArr[m]);
            m++;//viser, at vi tager næste tal
        }else if(typeof Number(textDecrypt[l]) == "number"){
            //hvis nummeret i input er tal, så tilføj til nuværende position i liste
            if(decryptArr[m] == undefined){
                decryptArr[m] = textDecrypt[l];
            }else{
                decryptArr[m] += textDecrypt[l];
            }
        }
        //Når der ikke er flere tal, så tilføj sidste nummer til liste
        if(textDecrypt[l+1] == undefined && typeof Number(textDecrypt[l]) == "number"){
            decryptArr[m] = Number(decryptArr[m]);
        }
    }
    console.log(decryptArr);
    var decryptedText = "";//streng til output af dekrypteret tekst
    for(var o = 0; o < decryptArr.length; o++){//for hvert tal i listen
        //følg protokol for dekryptering af ciffer vha. BigInt, hvor den laver om til Number
        var currentChar = Number((BigInt(decryptArr[o]) ** BigInt(d)) % BigInt(n));
        decryptedText += char[currentChar]; //tilføjer cifferet til tal currentChar til dekrypteret tekst
        finalText += currentChar + ",";//Til finaltekst tilføjes omdannet ciffer
    }
    //opsætter outputteksten og sætter den på 3. outputfelt
    finalText = finalText + " som giver beskeden " + decryptedText;
    document.getElementById("Output3").innerHTML = finalText;
}