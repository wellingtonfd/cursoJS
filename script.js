/*let listaMista = [ 50, "mundo", true, {teste:  "Testando"} ];

console.log(listaMista);
*/

//CONDIÇÕES

/*let x = 3.1;
if ( x == 3){
console.log("Verdadeiro")
}else
console.log("Falso");
*/

/*let disponível = true;
let quantidade = 1;

if ( disponível == true && quantidade >0){
console.log("Produto disponível para venda, existem " + quantidade + " unidades disponíveis !");
}else
console.log("Produto indisponível para a venda!");
*/


/*let nome = "wellington";
if ( nome =="Wellington"){
    console.log("Acesso permitido!");
}else
console.log("Acesso negado!");
*/

/*let cidade = "s";
if ( cidade == "São Paulo"){
    console.log("Olá Paulista !");
}else if(cidade == "Rio de Janeiro"){
    console.log("Olá Carioca!")
}else
console.log("Você não digitou uma cidade");
*/

//ESCOPO GLOBAL

/*let num = 2;

if( num == 2){
let texto = "Olá!";

num = 10;
}
console.log(texto);
*/

let varGlobal = 1;

function funcaGlobal(){
    let varFuncao = varGlobal +1;

    function funcaoLocal(){
    let varfuncLoccal = varFuncao  + varGlobal;
    console.log(varfuncLocal)
    }
}

//O VAR POR PADRÃO É GLOBAL



/* SWITCH
let ver = 3;

switch(ver) {
    case 1:
        console.log("Casa");
        break;
    
    case 2:
        console.log("Abacate");
        break;

    case 3:  
        console.log("Abacaxi");
        break;

    default:
        console.log("Desconhecido");
        break;
}
*/

