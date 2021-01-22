nivel1=1;
nivel2=20;
nivel3=400;
nivel4=8000;

function conversion() {
    entrada = parseInt(document.getElementById("entrada").value);
    //numeroentero = entrada.toString();
    resultado = conversionAlgoritmo(entrada);

    elementos = resultado.split("/");
    //console.log(elementos);
    codigo1 = elementos[0]; 
    codigo2 = elementos[1];
    codigo3 = elementos[2];
    console.log("El nuemero "+entrada+" lo conforman los numeros "+codigo1+" "+codigo2+" "+codigo3+" en maya")
}

function conversionAlgoritmo(numero){
    digito1=0;
    digito2=0;
    digito3=0;
    digito4=0;
    parseInt(numero);
    if((Math.trunc(numero/nivel3))>=1){
        digito3 = Math.trunc(numero/nivel3);
        numero = numero - (digito3*nivel3);
        if((Math.trunc(numero/nivel2))>=1){
            digito2 = Math.trunc(numero/nivel2);
            numero = numero - (digito2*nivel2);
            digito1 = numero;
        }
        else
        {
            digito1 = numero;
        }
    }
    else
    {
        if((Math.trunc(numero/nivel2))>=1){
            digito2 = Math.trunc(numero/nivel2);
            numero = numero - (digito2*nivel2);
            digito1 = numero;
        }
        else
        {
            digito1 = numero;
            //console.log(digito1);
        }
    }
    //console.log(digito1+"  "+digito2+"  "+digito3);
    codigo = digito1+"/"+digito2+"/"+ digito3;
    return codigo;
}
