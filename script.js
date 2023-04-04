 function verificar(){
    var data = new Date();
    var ano = data.getFullYear(); // pegar 4 digito do ano
    var formAno = document.getElementById("txtano");
    var resultado = document.getElementById("resultado");

    if (formAno.value.length == 0 || formAno.value > ano) {
        alert("Verifique os dados e tente novamente");
    } else{

        var sexo = document.getElementsByName("sexo");
        var idade = ano - Number(formAno.value);
        resultado.innerHTML= ` Sua idade é ${idade}`
        var genero = "";
        var img = document.createElement("img")
        img.setAttribute("id","foto")

        if(sexo[0].checked  ){
            genero= "homem"
            if (idade <= 12 ){
                resultado.innerHTML= `Você é um menino de ${idade} anos `
                img.setAttribute("src","imagens/bebemenino.png")
            }else if( idade > 12 && idade <= 30){
                resultado.innerHTML= `Você é um homem jovem de ${idade} anos`
                img.setAttribute("src","imagens/homemjovem.png")
            }else if( idade > 30 && idade <= 60){
                resultado.innerHTML= `Você é um homem adulto de  ${idade} anos `
                img.setAttribute("src","imagens/homemadulto.png")
            }else if( idade > 60 ){
                resultado.innerHTML= `Você é um idoso de  ${idade} anos `
                img.setAttribute("src","imagens/idoso.png")
        }
            
    }else{
        genero= "Mulher"
            if (idade <= 12 ){
                img.setAttribute("src","imagens/bebemenina.png")
                resultado.innerHTML= `Você é um menina de ${idade} anos `
            }else if( idade > 12 && idade <= 30){
                resultado.innerHTML= `Você é uma  jovem mulher de ${idade} anos`
                img.setAttribute("src","imagens/mulherjovem.png")
            }else if( idade > 30 && idade <= 60){
                resultado.innerHTML= `Você é uma mulher adulta de  ${idade} anos `
                img.setAttribute("src","imagens/mulheradulta.png")
            }else if( idade > 60 ){
                resultado.innerHTML= `Você é uma idosa de  ${idade} anos `
                img.setAttribute("src","imagens/idosa.png")
        }
        }
        //resultado.innerHTML= `${genero} de ${idade} anos`
        resultado.appendChild(img)
    }
 }