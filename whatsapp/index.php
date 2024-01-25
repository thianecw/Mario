<?php
  $iphone  = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
  $android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
  $palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
  $berry   = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
  $ipod    = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");
  //Verifique se é um celular
  if ($iphone || $android || $palmpre || $ipod || $berry == true){
    header('Location: https://wa.link/v1yxlr');
  }
  //Todos os outros
  else {
    
    header('Location: https://wa.link/v1yxlr');
  }
?>

//Explicando o código se cair nas variáveis: Entre $iphone há $berry 
//É um dispositivo móvel. ou seja, Celular ou Tablet.
 
  if ($iphone || $android || $palmpre || $ipod || $berry == true){
    header('Location: https://api.whatsapp.com/send?phone=5521900000000');
  }
  //Caso não identifique as variáveis a cima é porque é desktop.
  else {
    
    header('Location: https://web.whatsapp.com/send?phone=5521900000000');
  }
//OBSERVAÇÃO: não se esqueça de por numero do whatsapp nas duas URL ACIMA
//api.whatsapp
//web.whatsapp