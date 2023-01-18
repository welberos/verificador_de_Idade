function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formAno = window.document.getElementById ('txtano')
  var img = window.document.getElementById('imagem')
  var res = window.document.querySelector('div#res')


  if ( formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert ("[ERRO] Verifique os dados e tente novamente!")
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(formAno.value)
      var gênero = ''
      
        
      if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >= 0 && idade <= 2){
          //Bebê
          img.src  = './img/foto-BebêMenino.png'
        } else if ( idade <= 4){
          //criança
          img.src  = "./img/foto-criançaMenino4.png" 
        } else if (idade <= 8){
          //criança
          img.src  = "./img/foto-criançaMenino8.png"
        } else if (idade <= 18){
          //Adolecente
          img.src  = "./img/AdolecenteMenino.png"
        } else if (idade <= 30){
          //Adulto
          img.src  = "./img/adultoH20_30.png"
        } else if (idade <= 50){
          //Adulto
          img.src  = "./img/adultoH30_50.png"
        } else if (idade <= 60){
          //Senhor
          img.src  = "./img/adultoH50_60.png"
        } else{
          //Idoso
          img.src  = "./img/adultoH60_80.png"
        }

      } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >= 0 && idade <= 2){
          //criança
          img.src  = './img/BebêMenina.png'
        } else if (idade <= 4){
          //criança
          img.src  = "./img/criançaMenina4.png"
        } else if (idade <= 8){
          //criança
          img.src  = "./img/criançaMenina8.png"
        } else if (idade <= 18){
          //Adolecente
          img.src  = "./img/AdolecenteMenina.png"
        } else if (idade <= 30){
          //Adulto
          img.src  = "./img/adultoM20_30.png"  
        } else if (idade <= 50){
          //Adulto
          img.src  = "./img/adultoM30_50.png"
        } else if (idade <= 60){
          //Senhor
          img.src  = "./img/adultoM50_60.png"
        } else{
          //Idoso
          img.src  = "./img/adultoM60_80.png"
        }
      }
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      
      res.appendChild(img)
  }
}
