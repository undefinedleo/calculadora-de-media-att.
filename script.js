function Calculo(){ 
    const mediaEscolar =      parseInt(document.getElementById("meedia").value);
    const firstbi = parseInt(document.getElementById("nota1").value);
    const secondbi = parseInt(document.getElementById("nota2").value);
    const thirdbi = parseInt(document.getElementById("nota3").value);
    const fourthbi = parseInt(document.getElementById("nota4").value);
     let som = firstbi + secondbi + thirdbi + fourthbi;
     let media = som/4;
    var mediaFix = media.toFixed(1);
    
     var mensagem = document.getElementById("valorTotal");
     var emoji = document.getElementById("teste");
    
     if (mediaFix >= mediaEscolar) {
      mensagem.innerHTML = "A sua média é " + mediaFix + ". Parabéns! Você foi aprovado. ✔";
       mensagem.style.color = '#36ff26';
    } else {
      mensagem.innerHTML = "A sua média é " + mediaFix + ". Infelizmente, você não foi aprovado. ❌"
      mensagem.style.color = '#F00';
     }
    document.getElementById("meedia").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
  }
  
  function Calculo1(){ 
    const mediaEscolar =      parseInt(document.getElementById("media2").value);
    const firstri = parseInt(document.getElementById("tri1").value);
    const secondtri = parseInt(document.getElementById("tri2").value);
    const thirdtri = parseInt(document.getElementById("tri3").value);
     let som = firstri + secondtri + thirdtri;
     let media = som/3;
    var mediaFix = media.toFixed(1);
     
    var mensagem = document.getElementById("valorTotal");
    
     if (mediaFix >= mediaEscolar) {
      mensagem.innerHTML = "A sua média é " + mediaFix + ". Parabéns! Você foi aprovado. ✔";
      mensagem.style.color = '#36ff26';
    } else {
      mensagem.innerHTML = "A sua média é " + mediaFix + ". Infelizmente, você não foi aprovado. ❌"
      mensagem.style.color = '#F00';
     }
    document.getElementById("media2").value = "";
    document.getElementById("tri1").value = "";
    document.getElementById("tri2").value = "";
    document.getElementById("tri3").value = "";
  }