//SUBSTITUIR TEXTO

let texto = "Estão chegando as provas"
console.log(texto.replace("provas","avaliações"))

//FIXAR O VALOR

let num = 223.45555
console.log(num.toFixed(2))

//CAIXA ALERTA
alert("Olá meu amigo")

//CAIXA DE CONFIRMAÇÃO

let teste =confirm("Você é um aluno??")
console.log("Teste")


//CAIXA DE PROMPT

let texto1 = prompt("Digite seu nome")
document.write("<br>")
//console.log("O nome dele é:", texto1)
document.write("O nome dele é: ", texto1)



//IF


if(20 >= 20){
    document.write("20 é maior")
    document.write("<br> <br>")
}

//IF E ELSE

if(25 > 15){
    document.write("Número maior")
    document.write("<br> <br>")
}else{
    document.write("Número menor")
    document.write("<br> <br>")
}



//IF E ELSE DECLARANDO VÁRIAVEL

let numero = 10
if(numero > 10){
    document.write("O número é maior")
}else{
    document.write("O número é menor")
    document.write("<br> <br>")



//IF E ELSE ENCADEADO


    // let idade = 18

    let idade = prompt("Digite sua idade: ")

    if(idade <=12){
        document.write("É uma criança")
    }else if(idade <= 17){
        document.write("É um adolescente")
    }else if(idade <=30){
        document.write("É um jovem adulto")
    }else{
        document.write("Um adulto experiente vulgo maduro")
    }
}



 let idade = prompt ("Digite sua idade: ")
 
 if (idade <= 10){
    document.write("Você pode entrar")
 }else if(idade >=18){
    document.write("Entrada permitida")
 }else{
    document.write("Não está liberado")

 } 
