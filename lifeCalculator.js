/*DEV: CÁSSIA OLIVEIRA DOS SANTOS
  TURMA: INFO19
  PROFESSOR: KLEBERSON JUNIO DO AMARAL SERIQUE*/

//Criação da função que mostrará o valor das teclas (após) digitadas no campo com identificador 'operationResult':
function insert(enteredValue){
	/*Insere e mantém apenas 1 elemento:
	document.getElementById('operationResult').innerHTML = number;
	//o número clicado será inserido no campo acima dos botões;
	*/

	//Insere 1 elemento e mantém os anteriores:
	var input = document.getElementById('operationResult').innerHTML; //armazena o conteúdo do campo;
	document.getElementById('operationResult').innerHTML = input + enteredValue; //Exibe o agrupamento dos valores digitados --> o que já tinha + novo;
}

//Criação da função que será chamada na tecla C da calculadora para limpar o conteúdo digitado:
function clean() {
	//Preenche o campo com 'nada':
	document.getElementById('operationResult').innerHTML = "";
}

//Criação da função que apagará de trás para frente o valor das teclas e será chamada na tecla del:
function back() {
	var input = document.getElementById('operationResult').innerHTML;
	document.getElementById('operationResult').innerHTML = input.substring(0, input.length -1)//analizará o tamanho da var input e tirará o último dígito;
}

//Criação da função que calcula as operações solicitadas na calculadora:
function calculaOperacao() {
	var input = document.getElementById('operationResult').innerHTML; //armazena o conteúdo do campo com id 'operationResult':
	if(input.length > 0) { //Se tiver conteúdo dentro do campo:
		document.getElementById('operationResult').innerHTML = eval(input); //resolve e mostra operação no campo com id 'operationResult';
	} else { //senão...

		/*NÃO DEU CERTO: TENTEI MUDAR O ESTILO DO TEXTO COM JAVASCRIPT:
		var errorMessage = '<strong style="font-size=15px">Nada a calcular</strong>';
		document.getElementById('operationResult').innerHTML = errorMessage;*/

		document.getElementById('operationResult').innerHTML = "Nada a calcular"; //Exibe a mensagem "Nada a calcular".
	}
}	//Fim do Script;