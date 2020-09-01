var hoje = Date.now(); //retorna a Data e Hora do momento que a função é chamada

var nascimento = new Date('1989-03-01 00:00:00');

var independencia = new Date ('September 7, 1822 00:00:00');

var umDia = 100*60*60*24;
var diasDesdeIndependencia = (hoje - independencia) / umDia;

var umAno = 1000*60*60*24*365;
var anosDesdeIndependencia = (hoje - independencia) / umAno;

/*
Caso o seu código dependa muito da criação e manipulação 
de data/hora considere utilizar a biblioteca "moment", 
que é como grandes aplicações lidam com os problemas 
decorrentes desse cenário.
*/

const data = new Date();
data.getDate(); //retorna o dia do mês atual (23)
data.getFullYear(); //retorna o ano atual (2020)
data.getDay();//retorna o dia da semana e não do mês (0 - Domingo)
data.getMonth();//retona o mês atual (a contagem começa em 0 (janeiro))
data.getYear(); // retorna a soma dos anos desde 1900 (2020 - 1900 = 120 anos)

data.setDate(data.getDate() + 3); //adiciona x(3) dias na data armazenada na variável

const data1 = new Date(2020,0,1)
const data2 = new Date(2020,0,2)

data1.getTime() === data2.getTime() // compara as duas datas
//Calcular a diferença entre duas datas em dias
const diferencaEmDias = (data2 - data1) / umDia;//um dia = (1000*60*60*24)

//Calcular a diferença entre duas datas em horas
const umaHora = 1000*60*60;
const diferencaEmHoras = (data2 - data1) / umaHora;

// Converter data escrita com uma máscara (2020/08/23),
// podemos obter a quantidade de milissegundos dessa 
// representação para atribuir esse número ao construtor 
// de Date, criando assim um objeto válido.
var milissegundos = Date.parse("2020/08/28");
var data = new Date(milissegundos);
