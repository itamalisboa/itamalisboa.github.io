function validacao(){
  let formulario = document.forms["formcadastro"];
  let nome = formulario.nome.value;
  let cpf = formulario.cpf.value;
  let endereco = formulario.endereco.value;
  let cidade = formulario.cidade.value;
  let contato = formulario.contato.value;
  let perfil = formulario.perfil.value;
  let data_nascimento = formulario.data_nascimento.value;


  let erro = false //não tem erro

  if(nome.indexOf(" ") == -1){
    alert("Preencha o nome completo!");
    erro = true; //Quando identificar Erro;
  }else if(cpf.length != 11){
    alert("Informe o CPF corretamente!")
    erro = true;
  }else if(endereco.length < 10){
    alert("Preencha o endereço completo!");
    erro = true;
  }else if(cidade.length < 4){
    alert("Preencha o nome da cidade completo!");
    erro = true;
  }else if(data_nascimento.length < 8){
    alert("Preencha a data de nascimento completa!");
    erro = true;
  }else if(contato.length < 6){
    alert("Preencha o número de contato completo!");
    erro = true;
  }else if(perfil.length < 20){
    alert("Digite pelo menos 20 caracters no Perfil!");
    erro = true;
  }

  if(erro){ //Se houver algum erro retorna false
    return false
  }else{
    return true
  }

}