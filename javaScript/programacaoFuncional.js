//<array>.forEach(<function>);
[1,2].forEach(alert); //executará a função alert para cada elemento do array


//Exemplo de função usando a utilitária apply()
//a função multiplicar recebe uma função por parâmetro e retorna uma segunda 
//função que recebe um array por parâmetro e utilizase da função apply()
//para atrubuir o comportamento da função ("funcao") passada por parâmetro para 
//essa função de retorno.
//neste caso específico o resultado da função resultante é a multiplicação dos 
//elementos do array passado por parâmetro 
 function multiplicar(funcao){
     return function(array){
          return funcao.apply(null, array)
     }
}

var multiplicarElementosArray = multiplicar(function(x,y){
     return x * y
})

multiplicarElementosArray([2,2])//Saída: 4

//Exemplo de função usando a utilitária call()
//A estrutura é semelhante ao exemplo anterior
//a diferença é na utlização da funcal call() (em vez de apply()) onde call()
//podereceber quaquer quantidade/tipo de argumentos, enquanto apply() aceita 
//apenas um array como parâmetro
//O retorno do array obtido é a concatenação dos elementos do array com o
//separador parametrizado em join (' ').
function desmanchar(funcao){
     return function(){
          return funcao.call(null, _.toArray(arguments))
     }
}

var juntarElementos = desmanchar(function(array){return array.join(' ')})

juntarElementos(2,2) //Saída: "2 2"
juntarElementos('@','@','@','@','#') //Saída: "@ @ @ @ #"

//Funções como unidades de abstração
//Exemplo (1) de função para tratamento de erros/avisos
function converterIdade(idade){
     if(!_.isString(idade)) throw new Error("Uma string era esperada")
     var a
     console.log("Tentativa de converter uma idade ")
     a = parseInt(idade,10)
     if(_.isNaN(a)){
          console.log(["Não pode converter a idade:", idade].join(' '))
          a = 0
     }
     return a
}

//Exemplo 2
function fail(msg){
     throw new Error(msg)
}
function warn(msg){
     console.log(["AVISO:",msg].join(' '))
}
function note(msg){
     console.log(["NOTA:",msg].join(' '))
}
//a mesma função implementada com funções que abstrem a notificação dos 
//erros/avisos
function converterIdade(idade){
     if(!_.isString(idade)) fail("Uma String era esperada")
     var a
     note("Tentativa de converter uma idade")
     a = parseInt(idade,10)
     if(_.isNaN(a)){
          warn(["Não pode converter a idade:", idade].join(' '))
          a = 0
     }
     return a
}