function calculateKey(){//skrevet af mig
    var p = document.getElementById("Primtal1").value;
    var q = document.getElementById("Primtal2").value;
    var e = document.getElementById("e").value;
    //Kalder funktion for at se, om p og q er primtal
    if(isPrime(p) && isPrime(q)){
        //n og Eulers totientfunktion af n beregnes
        var EulN = (p-1)*(q-1)
        var n = p*q;
        console.log(EulN);
        if(e < EulN && e > 0){//tjekker, at e større end nul og mindre end EulN
            if(GCommonDivisor(EulN,e) == 1){//hvis e og EulN er indbyrdes primiske
                var d = modInverse(e, EulN);//udregner privatnøgle d ved modInvers funktionskald
                //laver streng med krypteringsnøgler for at indsætte den i output1 - linjen i HTML
                var output = "Offentlig Nøgle: e = " + e + ", n = " + n + ", Private Nøgler: d = " + d;
                document.getElementById("Output1").innerHTML = output;
            }else{
                alert(e + " og " + EulN + " er ikke indbyrdes primiske");
            }
        }else if(e > EulN){
            alert(e + " er større end &phi;(" + EulN + ")");
        }else{
            alert(e + " er mindre end 0");
        }
    }else if(!isPrime(p)){
        alert(p + " er ikke et primtal");
    }else{
        alert(q + " er ikke et primtal");
    }
}
function isPrime(a){//skrevet af mig
    //funktion tjekker, om a er primtal
    var numPrime = true;
    //Tjekker for i, mens i < kvadratrod a 
    for(var i = 2; i*i < a; i++){
        //Hvis i modulo a går op
        if(a % i == 0){
            //nummeret ikke er et primtal
            numPrime = false;
            //løkke stopper
            break;
        }
    }
    //Efter for-løkken retuneres boolean om a er primtal 
    return numPrime;
}
function GCommonDivisor(num1, num2){//Denne funktion er ændret med inspiration fra https://www.freecodecamp.org/news/how-to-use-the-euclidean-algorithm-to-find-the-greatest-common-divisor-gcd/
    //bruger princippet fra euklids algoritme
    var R; //variabel til rest
    while ((num1 % num2) > 0){
        R = num1 % num2;
        num1 = num2;
        num2 = R;
    }
    return num2;
}

//Disse to funktioner er fra https://www.geeksforgeeks.org/multiplicative-inverse-under-modulo-m/
//Ændret og kommentar er mine
let x, y;//globale variable
function gcdExtended(a, b){
    //basis tilfælde
    console.log(a+ "" + b);
    if (a == 0)
    {
        x = 0;
        y = 1;
        return b;
    } 
    // laver rekusion, så vi får b  
    let gcd = gcdExtended(b % a, a);
    let x1 = x;
    let y1 = y;
 
    //opdaterer x og y efter rekusion
    x = y1 - Math.floor(b / a) * x1;
    y = x1;
    //retunerer største fælles divisor
    return gcd;
}
 
function modInverse(a, m)
{
    //kalder udvidet sfd funktion
    let g = gcdExtended(a, m);
    if (g != 1){//hvis sdf(a,m) ikke er 1
        return "Der er ikke nogle invers";
    }
    else{
        //finder d
        let d = (x % m + m) % m;
        return d;
    }
}