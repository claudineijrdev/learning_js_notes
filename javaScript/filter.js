//Filter:
// O método filter serve para filtrar em um Array apenas os resultados que cumpram com determinada condição esperada
//Ex1
console.log("Ex1 --------------")
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

const carroFiltrado = listaCarros.filter(carro => carro.marca === 'Renault') 

console.log(carroFiltrado[0].modelo)

//Ex2
console.log("Ex2 --------------")

const carroFiltrado2 = listaCarros.filter(carro =>
  carro.marca === 'Volkswagen' && 
  carro.modelo === 'Saveiro'
)

console.log(carroFiltrado2[0].marca + " " + carroFiltrado2[0].modelo)