
function checar(){
	
	
	
	document.body.style.backgroundRepeat = "no-repeat";
	var pergunta1 = document.quiz.pergunta1.value;
	var pergunta2 = document.quiz.pergunta2.value;
	var pergunta3 = document.quiz.pergunta3.value;
	var pontos = 0


if (pergunta1 == "Casulo") {
	pontos = pontos + 1
		
}
if (pergunta2 == "javascrit") {	
	pontos = pontos + 1
		
}	
if (pergunta3 == "opccorreta") {
	pontos = pontos + 1
		
}
if(pontos == 0){
	document.getElementById("fundo1").style.visibility = "hidden";
	document.getElementById("imagen_resposta").style.visibility = "visible";	
	document.getElementById("picture").src = "/img/zood.gif"
	document.getElementById("message").innerHTML = "Num treinou, se laskou ->0<-"
	document.getElementById("foot").style.visibility = "visible";
	document.getElementById("bola1").style.visibility = "hidden";  //deixar o in
	document.body.style.backgroundImage = "url('/img/inf.jpg')";
	
}
if(pontos == 1){
	document.getElementById("fundo1").style.visibility = "hidden";
	document.getElementById("imagen_resposta").style.visibility = "visible";	
	document.getElementById("picture").src = "/img/morreu.gif"
	document.body.style.backgroundImage = "url('/img/zo.webp')";
	document.getElementById("message").innerHTML = "Arriegua má só Acertou Uma  má aff ->1<- "
	document.getElementById("foot").style.visibility = "visible";
	document.getElementById("bola1").style.visibility = "hidden";
}

if(pontos == 2){
	document.getElementById("fundo1").style.visibility = "hidden";
	document.getElementById("imagen_resposta").style.visibility = "visible";	
	document.getElementById("picture").src = "/img/trino.gif"
	document.body.style.backgroundImage = "url('/img/ouro.jpg')";
	document.getElementById("message").innerHTML = "hummm, tá melhorando Casuleiro ->2<-"
	document.getElementById("foot").style.visibility = "visible";
	document.getElementById("bola1").style.visibility = "hidden";
}

if(pontos == 3){	
	document.getElementById("fundo1").style.visibility = "hidden";
	document.getElementById("imagen_resposta").style.visibility = "visible";	
	document.getElementById("picture").src = "/img/cosmos.gif"
	document.getElementById("message").innerHTML = "conseguiu elevar seu cosmo ao máximo ->3<-"
	document.getElementById("foot").style.visibility = "visible";
	document.getElementById("bola1").style.visibility = "hidden";
	document.body.style.backgroundImage = "url('/img/f1.jpg')";

}

	
document.getElementById("btinicio").style.visibility = "visible";
}

function inicio(){
	location.reload()
}	
	

