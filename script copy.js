
console.log("Hello Word !")
var num = [ 1, 8, 19, 24]

//console.log(num);
//console.log(num.MAX_VALUE);
let a = "Ola";
let b = "Mundo!"

//let ola_mundo = a.concat(b);
//console.log(ola_mundo);

//nova template de string

let ola = "Ola";
let mundo = "Mundo";
let olamundo = `${ola} ${mundo} ${1+1}`;  //!!!
console.log(olamundo)


console.log( "banana" == "Banana")
let num2 =  !( 3 != 3);
console.log(num2);

//vetor/indice

let vet = ["Oi", 1, 'Capaz'];

console.log(vet);
console.log(vet[0]);

vet[0] = 14.003;
console.log(vet);

vet[5] = "Teste";

console.log(vet);

/// null != undefined

// objeto

let Carro = {
    fabricante: "GM",  
    modelo: "Corsa",
    ano: 2015,
    cor: "vermelho",
    portas: 2,
    aVenda: true,
}

console.log(Carro);
//adicionar
//Carro.portas = 0;
//Carro["portas"] = 2;

//console.log(Carro);

//Criar funções

/*let Mundo2 = function(){
    console.log("Olá mundo!");
    console.log("Olá mundo!2");
}

Mundo2();*/

/*return não é uma funcçã mas já tras direto o valor
    pode guardar um valor na variável
    sem return undefine por default
*/
let divdir = function(valor1, valor2){ 
    return valor1 / valor2;
}
/// passando valore para as variáveis
let soma = function(valor1, valor2){
    let ResulSoma = valor1 + valor2;
    console.log(ResulSoma);
}

let subt = function(valor1, valor2){
    let ResulSub = valor1 - valor2;
    console.log(ResulSub);
}

soma(12,15);
subt(2220, 502);
let resultados = divdir(12, 28);
console.log(resultados);


//AVALIAÇÃO
let Numero1 = 10;
let Numero2 = 20;
let Numero3 = "3";
 function valore(Val1, Val2){
    console.log(Val1 + Val2); 
}
valore(9, Numero1);
valore(Numero3, 9)

// trabalho com vetores

let Vetores= [1, 2, 3, 7, 9, 28, 15];
let vetresult = Vetores[0] + Vetores[9];

console.log("==============");
console.log(vetresult > 9);

console.log("==============")

console.log(vetresult - Vetores[3]);





















