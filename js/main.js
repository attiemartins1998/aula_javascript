function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    /*console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar");*/
}

function redirecionar(){
    window.open("https://www.primevideo.com/ref=av_auth_return_redir");
    //window.location.href = "https://www.primevideo.com/ref=av_auth_return_redir";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1 + n2;
}*/
/*function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/
//alert(soma(5,10));
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/
/*var d = new Date();
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());*/
/*var count;
for(count=0; count <=5; count++){
    alert(count);
};
estruturas de repetição for e while */ 
/*var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1; //ou count++
}*/
/*var idade = prompt("Qual a sua idade"); 
o comando prompt vai fazer o navegador criar uma caixa de pergunta ao usuário
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; */
/*var fruta = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);*/
/*var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.push("uva"); .push para por algo a mais na lista e .pop para tirar o ultimo elemento
//lista.pop();
// length mostra a quantidade de elementos
//.reverse() mostra a lista ao contrario e a quantidade 
//.tostrig()- ([0]vai iprimir o primeiro elemento da string) vai mostrar como uma string
//.join(-) sempara os elementos para cada um com o objeto desejado (, / \ | - etc)
//console.log ele imprime no java
/*var nome = "Attie Dias Martins, ";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o maior time do mundo";
alert(nome + idade + " anos. " + "Seja bem vindo!");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão, Brasil"));
.touppercase coloca tudo para maiúsculo e .lowercase minúsculo
.replace troca a palavra oela outr (japao por brasil), mas precisa
ser p´re definida. */