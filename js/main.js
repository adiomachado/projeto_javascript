
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("file:///c:/Users/Adio-Philco/Projetos/projeto_bootstrap/index.html");
    //window.location.href = "https://web.digitalinnovation.one"; // abre na mesma janeja
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigado por passar o mouse</b>";
    elemento.innerHTML = "<b> Obrigado por passar o mouse</b>";
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "<b> Passe o mouse aqui</b>";
    //alert("trocar texto")
    elemento.innerHTML = "<b> Passe o mouse aqui</b>";
}

function load(){
    alert("página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("qual sua idade?");
console.log(validaIdade(idade))

alert(soma(10,8))
alert(setReplace("vai Japão", "Japão", "Brasil!"))
*/
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
//alert(d.getMinutes());
//alert(d);
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qua sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
dicionarios
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome + " cor: " + frutas[1].cor);

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); // insere um elemento na lista
//lista.pop(); // retira o ultimo elemento da lista
//var tamanho = (lista.length);
//console.log(lista.reverse()); //muda a ordem dos elementos
//console.log(lista);
//console.log(lista.toString()); //--move a lista para uma string
//console.log(lista.join(" | ")); //insere o caracter entre parenteses na lista

//var nome = "Adioaldo Machado";
//var idade = 54;
//var idade2 = -10;
//var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem " + idade);
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil")); //substitui japao por brasil
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Canadá"));
