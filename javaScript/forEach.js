// forEach(): Percorre um array para executar um método para cada item
// Ex1:
console.log("Ex1 -------------")
cores = ["Verde","Amarelo","Azul","Branco"]

function imprimir(item){
  console.log(item);
}

cores.forEach(imprimir);

//Ex2:
console.log("Ex2 -------------")
numeros = [0,1,2,3,4,5,6,7,8,9,10];

function tabuadaDe2(item,index){
  console.log(item + " x 2 = " + item*2);
}

numeros.forEach(tabuadaDe2);

//Ex3
console.log("Ex3 -------------")
total = 0;

function somar(item){
  total+=item;
}

numeros.forEach(somar);

console.log(total);

//Ex4 
console.log("Ex4 -------------")

nomes=["Alberto","Alex", "Sandro", "Roberta"]

function converterParaMaiusculo(item, indice){
  nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaiusculo);
console.log(nomes);