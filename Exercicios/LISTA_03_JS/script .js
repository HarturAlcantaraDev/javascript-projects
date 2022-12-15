const entrada = require("prompt-sync")({sigint:true});



var valor1,valor2,valor3,valorFinal1_1;


valor1 = parseFloat(entrada("Digite o primeiro valor: "));
valor2 = parseFloat(entrada("Digite o segundo valor: "));
valor3 = parseFloat(entrada("Digite o terceiro valor: "));




if(valor1 > valor2 || valor1 > valor3){

    console.log(valor1);

}else if(valor2 > valor1 || valor2 > valor3){

    console.log(valor2);

}else if(valor3 > valor1 || valor3 > valor2){

    console.log(valor3);

}
