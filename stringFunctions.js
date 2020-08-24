//Length - retorna o tamanho da string
let texto = "teste de length";
console.log("Lenght: O tamanho da variável Texto é:" + texto.length);

//Substring() - captura um parte de uma string 
console.log("Substring: 'teste [" + texto.substring(6,12)+"]gth'");

//Split - divide a string em um array conforme o charactere escolhido
let exemplo = "João da Silva Oliveira";
console.log("Split 1: " + exemplo.split(" "));
console.log("Split 2: " + exemplo.split(" ",3));
console.log("Split 3 (sem numeros): " + "Os 8000 números 345 precisam ser 1 removidos".split(/\d+/));
console.log("Split 4 (CSV): " + "exemplo ; com ; dados ; no ; formato ; csv".split(/\s*;\s*/));

//Replace - substitui parte da string por valor parametrizado
console.log("Replace 1 - " + "JavaScript, primeiro exemplo de replace".replace("JavaScript","Java"));
console.log("Replace 2 - " + "JavaScript, substituir mais de um string. JavaScript".replace(/JavaScript/g, "Java"));
console.log("Replace 3 - " + "JavaScript, no Case Sensitive. JAVAScript,javascript".replace(/JavaScript/gi, "JS"));
console.log("Replace 4 - " + "Mascarando Numeros como CPF 12345678901".replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"));
console.log("Replace 5 - " + "texto 1 <b> texto 2 </b> texto 3 <b> texto 4 </b>".replace(/<b>/g , "<i>").replace(/<\/b>/g, "</i>"));

var string = "Contrato no valor de R$ 1000. Lucro de R$ 200 para a empresa.";
var resultado = string.replace(/\d+/g, 
  function aplicarIndice(x) {
      x = x*1.05;
      return Math.floor(x);
  });
  console.log("Replace 6 - " + resultado);


  // Trim - remove os espaço antes e depois da String
  let txt= "  com espaços  ";
  console.log("Trim 1 - '" + txt + "'. Após o trim: '" + txt.trim()+"'");

  //Slice - permite “fatiar” uma string ou array e recuperar parte dos seus elementos.
  let nome = "João José da Silva Xavier"
  console.log("Slice 1 - " + nome.slice(4) );
  console.log("Slice 2 - " + nome.slice(4,9) );
  let carros = ["Civic", "Elantra","Focus","Jetta", "Cruze", "Corolla"];
  console.log("Slice 3 - " + carros.slice(2))
  console.log("Slice 4 - " + carros.slice(2,4))

  //Concat - contatena String e Arrays
var a = "Meu nome é ";
var b = "Junior!";
console.log("Concat 1 - " + a.concat(b));
var array1 = ["d","e","v"];
var array2 = [1,2,3];
console.log("Concat 2 (arrays) - " + array1.concat(array2));

var array1 = ["d", "e", "v"];
var object = {a:10};
var array2 = array1.concat(object);
console.log("Concat 3 (arrays + objects) - " +"a:"+array2[3].a);