function corrigirDados(){
document.querySelector(".hide").style.display = "block";
 
   
let emp02 = document.getElementById('Q02').value;
  document.getElementById('campo').innerHTML = ("1º Campo:");
document.getElementById('res').innerHTML = ("Cursos do Amélia: "+emp02);
    let emp03 = document.getElementById('c02').value;
    document.getElementById('campo2').innerHTML = ("2° Campo.");
    if(document.getElementById('check1').checked){
      document.getElementById('res2').innerHTML = ("Sistema Octal (incorreto)");
}if(document.getElementById('check2').checked){
      document.getElementById('res3').innerHTML = ("Sistema Binário (correto)");
}if(document.getElementById('check3').checked){
      document.getElementById('res4').innerHTML = ("Sistema Decimal (correto)");
}if(document.getElementById('check4').checked){
 document.getElementById('res5').innerHTML = ("Sistema Hexadecimal (correto)");
}
   
    let emp04 = document.getElementById('c03').value;
    document.getElementById('campo3').innerHTML = ("3° Campo.");
    if(document.getElementById('iso').checked){
      document.getElementById('ans3').innerHTML = ("Álcool Isopropilíco (incorreto)");
}else if(document.getElementById('con').checked){
      document.getElementById('ans4').innerHTML = ("Limpa contato (correto)");
}else if(document.getElementById('alc').checked){
      document.getElementById('ans5').innerHTML = ("Álcool 70% (incorreto)");
    }else if(document.getElementById('agu').checked){
      document.getElementById('ans6').innerHTML = ("Água (incorreto)");
    }
   
    let emp5 = document.getElementById('c04').value;
    document.getElementById('campo4').innerHTML = ("4° Campo.");
   
    if(document.getElementById('ver').checked){
      document.getElementById('correct').innerHTML = ("Alternaltiva Verdadeira");
    }else if(document.getElementById('fal').checked){
      document.getElementById('false').innerHTML = ("Alternaltiva Falsa");
    }
}