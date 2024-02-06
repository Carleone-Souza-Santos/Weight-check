let Form = document.querySelector("form"); //pegando o formulario
let Result = document.querySelector("h3"); // saida do resultado

Form.addEventListener("submit", (e) => {
  //aplicando um ouvinte no submit
  e.preventDefault(); // (e)evitado de recarregar a pag e perde a simulação do processamento

  const Nome = Form.name.value;              //pegando o nome no formulario
  const Masculino = Form.masculino.checked;  //verificando a opção do radio dentro do formulario
  const Altura = Number(Form.altura.value);  //pegando a altura no formulario

  let Peso; // criado uma variavel para o processamento
  Masculino == true
    ? (Peso = 22 * Math.pow(Altura, 2))
    : (Peso = 21 * Math.pow(Altura, 2));
  //se Masculino aplico a regra na variavel peso se não outro valor

  // saida do resutado.
  Result.innerText = ` Olá ${Nome} tudo bem? 
     Seu peso ideal ${Peso.toFixed(2)} Kg`;
});

// limp tds os campos .... refresh no window
Form.addEventListener('reset',() => {
Result.innerText=""
})
