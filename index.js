const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");
//var formatarMoeda = require("./util.js");

/*
function gerarFaturaHTML(fatura, calc) {
  let html = "<html>\n";

  html += `<p> Fatura ${fatura.cliente} </p>\n`;
  html += "<ul>\n";

  for (const apre of fatura.apresentacoes) {
    const nome = calc.repo.getPeca(apre).nome;
    const valor = formatarMoeda(calc.calcularTotalApresentacao(apre));
    html += `<li>  ${nome}: ${valor} (${apre.audiencia} assentos) </li>\n`;
  }
  const total = formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes));
  const creditos = calc.calcularTotalCreditos(fatura.apresentacoes);

  html += "</ul>\n";
  html += `<p> Valor total: ${total} </p>\n`;
  html += `<p> Créditos acumulados: ${creditos} </p>\n`;
  html += "</html>";

  return html;
}
*/

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());

const faturaStr = gerarFaturaStr(faturas, calc);
//const faturaHTML = gerarFaturaHTML(faturas,calc);

console.log(faturaStr);
//console.log(faturaHTML);

