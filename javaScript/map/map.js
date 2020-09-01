//Map: Permite percorrer um vetor e obter um novo array cujos itens são o 
//resultado de uma função de callback que recebe como parâmetro cada item original. 
// Ex1:
var numeros = [1,2,3,4,5] // vetor original

var quadrados = numeros.map(function(item){
  return Math.pow(item,2); //retorna o item original elevado ao quadrado
});

console.log("Ex2 " + numeros + " " + quadrados);


// Ex2
var vencedores = [
{
  nome: "Equipe Super",
  pais: "Brasil"
},
{
  nome: "Time Maximo",
  pais: "EUA"
},
{
  nome: "Mega Grupo",
  pais: "Canada"
}

];

var podioPorPais = vencedores.map(function(item,indice){
  // return item.pais;
  return `<tr>
            <td>${indice + 1}</td>
            <td>${item.nome}</td>
            <td>${item.pais}</td>
            </tr>`;
})

// console.log("Ex2 " + podioPorPais);
document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");