// Selecionar elementos da DOM
const tempInput = document.querySelector(".temp");
const submitBtn = document.querySelector("button[type=submit]");
const showMessage = document.querySelector(".showResult");
// Evento de clique no botão Submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showMessage.innerText = "";
  //Seleciona os inputs radios 
  document.querySelectorAll("input[type=radio]").forEach((item, i) => { 
   // Verifica se é o Celsius que está Checked no radio button
    if (item.checked && item.value === "Celsius") {
    // Atriu a variavel tofahrenheit o valor conversão de Celsius para fahrenheit
      const tofahrenheit = (tempInput.value * 1.8 + 32)
        .toFixed(2) //limita a dois os números decimais
        .replace(".", ",");// substitui o ponto pela vírgula - padrão brasileiro -
    // Mostra a mensagem
      showMessage.innerText = `A conversão de ${tempInput.value} ˚C são: ${tofahrenheit} ˚F fahrenheit`;

    } else if (item.checked && item.value === "fahrenheit") {
      console.log("fahrenheit");
      const toCelsius = ((tempInput.value - 32) / 1.8)
        .toFixed(2)
        .replace(".", ",");
      showMessage.innerText = `A conversão de ${tempInput.value} ˚F são: ${toCelsius} ˚C Celsius`;
    }
  });
});

// Botar limpar
document.querySelector('button[type=reset]').addEventListener('click',()=>showMessage.innerText='')