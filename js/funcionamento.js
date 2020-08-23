// Recebendo a data e hora do sistema
var agora   = new Date();
var ano     = agora.getFullYear();

/* 
  FUNÇÃO: atualizaAnoRodape()
  ============================================
  Criada para atualizar o ano no copyright do 
  rodapé do site. */

function atualizaAnoRodape() {
  
  // Manipulador do DOM
  var anoRodape = document.querySelector('span.ano');
  
  // Recebe o ano atual do sistema
  anoRodape.innerText = ano;
}

/* 
  FUNÇÃO: converteTemperatura()
  ============================================
  Reconhece o valor passado pelo usuário e faz 
  a conversão em outras temperaturas */

function converteTemperatura() {
  var temperatura = document.getElementById('temperatura');
  var simbolo = document.getElementById('simbolo');
  var res = document.getElementById('convertido');

  // Forçando a conversão em número
  temperatura = Number(temperatura.value);

  // Identifica o símbolo da temperatura digitada pelo usuário
  // e faz a devida conversão de valores.
  if (simbolo[0].selected) {
    
    // CELSIUS SELECIONADO
    
    // Converte a temperatura em: 
    var fahrenheit  = (temperatura * 9/5) + 32;
    var kelvin      = temperatura + 273.15;

    // Escreve a resposta na tela
    res.innerHTML = `<p><strong>${temperatura} °C</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${fahrenheit.toFixed(2)} °F</strong> (Fahrenheit)</p>`;
    res.innerHTML += `<p><strong>${kelvin.toFixed(2)} K</strong> (Kelvin)</p>`;

  } else if (simbolo[1].selected) {
    
    // FAHRENHEIT SELECIONADO
    
    // Converte a temperatura em: 
    var celsius     = (temperatura - 32) * 5/9;
    var kelvin      = (temperatura - 32) * 5/9 + 273.15;

    // Escreve a resposta na tela
    res.innerHTML = `<p><strong>${temperatura} °F</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${celsius.toFixed(2)} °C</strong> (Celsius)</p>`;
    res.innerHTML += `<p><strong>${kelvin.toFixed(2)} K</strong> (Kelvin)</p>`;

  } else if (simbolo[2].selected) {
    
    // KELVIN SELECIONADO
    
    // Converte a temperatura em: 
    var celsius     = temperatura - 273.15;
    var fahrenheit  = (temperatura - 273.15) * 9/5 + 32;

    // Escreve a resposta na tela
    res.innerHTML = `<p><strong>${temperatura} K</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${celsius.toFixed(2)} °C</strong> (Celsius)</p>`;
    res.innerHTML += `<p><strong>${fahrenheit.toFixed(2)} °F</strong> (Fahrenheit)</p>`;
  }
}