export function calculaPreco(precoUnidade, qtd, unidadeTotal, unidade){
  console.log("comeca:")
  console.log(precoUnidade)
  console.log(qtd)
  console.log(unidadeTotal)
  console.log(unidade)

  if (unidade == ""){
    return 0;
  }
  if (unidadeTotal == unidade){
    return precoUnidade * qtd;
  }
  
  if (unidadeTotal == "Quilogramas"){
    qtd = qtd / 1000;
  } else if (unidadeTotal == "Gramas"){
    qtd = qtd * 1000;
  } else if (unidadeTotal == "Litros"){
    qtd = qtd / 1000;
  } else if (unidadeTotal == "Mililitros"){
    qtd = qtd * 1000;
  }
  return precoUnidade * qtd;
}