//reduce() 
/**
 * A função reduce do JavaScript serve para iterar sobre 
 * um array e utilizar o valor de cada item para criar um 
 * objeto final com base em alguma regra. Como o próprio 
 * nome da função sugere, ela “reduz” os itens de um vetor 
 * a um valor único. Por exemplo, podemos utilizá-la para 
 * obter a soma ou produto dos itens de um vetor numérico.
 */
const listaCarros = [
  {id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18.000},
  {id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12.000},
  {id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14.000},
  {id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20.000},
  {id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12.000},
  {id: 6, modelo: 'Onix', marca: 'Chevrolet', preco: 25.000},
  {id: 7, modelo: 'Palio', marca: 'Fiat', preco: 13.000},
  {id: 8, modelo: 'Prisma', marca: 'Chevrolet', preco: 15.000},
  {id: 9, modelo: 'Logan', marca: 'Renault', preco: 15.000}
]
//Ex Reduce
console.log("Ex Reduce ----------")
const sum = listaCarros.reduce((previous,current) => previous + current.preco, 0)
console.log(sum)

console.log("Ex Reduce 2 ----------")
var numeros = [1,2,3,4,5,6];
var total = numeros.reduce(function(total,numero){
  return total + numero;
},0);
console.log("T1 =" + total);
var totalPrisma = numeros.reduce((previous,current)=> previous + current);
console.log("T2 =" + totalPrisma);
//O método includes verifica se um Array possuí determinado
// elemento e retorna um booleano.
//Ex Includes
console.log("Ex Includes ----------")

const items = [10,20,30]

console.log(
  items.includes(10),
  items.includes(50),
  items.includes(20)
)