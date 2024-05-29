
/* warning: usar UTF-8 ! */

var secciones= [
['index', 'Introducción',''],
['q1' , '1-4: Traducciones de la Biblia', '¿Cuál ha de leerse? Traducciones populares; las Biblias protestantes y las católicas.'],
['q5' , '5-10: El canon','Los libros auténticos y los apócrifos de la Biblia: diferencias entre protestantes y católicos; los evangelios apócrifos.'],
['q11' , '11-14: ¿Cómo leer la Biblia?','¿De principio a fin o selectivamente? ¿Con anotaciones y comentarios, o podemos actuar con independencia respecto a los biblistas?'],
['q15' , '15-17: El Magisterio de Iglesia','Interpretación personal; libertad científica de interpretación.'],
['q18' , '18-22: ¿Por qué leer la Biblia?','¿Por qué leer la Biblia?: la palabra de Dios o una biblioteca humana; la Biblia inspirada.'],
['q23' , '23-27: ¿La Biblia es verdad literalmente?','  ¿hasta qué punto se han de entender literalmente los relatos de Adán y Eva y otros?; ¿la arqueología confirma la historia bíblica?'],
['q28' , '28-30: La crítica bíblica',' Libros bíblicos difíciles; el Apocalipsis como libro más difícil.'],
['q31' , '31-33: El fundamentalismo',' El fundamentalismo bíblico y cómo afrontarlo.'],
['q34' , '34-37: El nuevo testamento',' ¿Hasta qué punto es el nuevo testamento literalmente verdadero? ¿Las cartas de Pablo fueron escritas por san Pablo, y en caso negativo qué autoridad tienen?'],
['q38' , '38-44: Los evangelios',' ¿Hasta qué punto son los evangelios fiables o históricos? ¿son vidas de Cristo?; en caso negativo, ¿quiénes los escribieron y qué son? ¿qué diferencia espiritual comporta?'],
['q45' , '45-51: Las palabras y los hechos de Jesús','¿Podemos estar seguros de sus palabras exactas y de sus milagros? ¿qué valor tienen sus milagros, en especial la expulsión de los demonios? ¿existe el demonio?'],
['q52' , '52-53: La resurrección de Jesús','¿Salió Jesús del sepulcro corporal o físicamente?'],
['q54' , '54-60: El nacimiento de Jesús','¿Son fiables los relatos de su nacimiento e infancia o se trata simplemente de folklore? ¿hasta qué punto coinciden o no? ¿se aparecieron los ángeles y existen?'],
['q61' , '61-68: María','¿Hasta qué punto es importante bíblicamente?; el nacimiento virginal; la Inmaculada Concepción y la Asunción; ¿María permaneció virgen? ¿quiénes fueron los hermanos y hermanas de Jesús?'],
['q69' , '69-76: El conocimiento de Jesús','¿Sabía Jesús que era Dios? ¿lo sabía todo? ¿sabía que moriría? ¿conocía el futuro?'],
['q77' , '77-78: Fundación de la Iglesia',' ¿La fundó Jesús o sabía cómo se iba a desarrollar?'],
['q79' , '79-85: Los sacramentos','¿Los instituyó Jesús, especialmente la eucaristía y el bautismo? ¿qué significado tenían estos sacramentos para los primeros cristianos?'],
['q86' , '86-88: Los primeros cristianos y los judíos','¿Cómo se relacionaron y cómo se separaron? ¿persiguieron los judíos a los cristianos?'],
['q89' , '89-92: Los ministerios en la Iglesia primitiva','¿Quién «dirigía» la Iglesia?; los doce apóstoles; ¿cuál fue el origen de los obispos? ¿fueron los sucesores de los apóstoles?'],
['q93' , '93-96: Los presbíteros y la eucaristía',' ¿Quiénes celebraban la eucaristía?: ¿cuándo y cómo unos cristianos concretos fueron aceptados como presbíteros?'],
['q97' , '97-100: Pedro y los papas','¿Fue Pedro cabeza de la Iglesia, u obispo de Roma, o el primer papa?'],
['q101' , '101: La iglesia primitiva y la contemporánea' , '¿Hasta qué punto ha cambiado la Iglesia desde los tiempos del nuevo testamento?'],
['ap' , 'Apéndice', 'Notas el fundamentalismo'],
['tabla' , 'Tabla de materias','']
];

function verocultar(href) {
 var c = href.nextSibling;
 if(c.style.display == 'none')  {  c.style.display = 'inline'; href.innerHTML ='[-]'; }
 else                           { c.style.display = 'none';  href.innerHTML ='[+]';   }
 return false;
}



function menu() {
  var pathname = document.location.pathname;
  for(var i = 0; i < secciones.length; i++) {
    var url = secciones[i][0] + '.html';
    var current = new RegExp(url + '$').test(pathname);
    if(current) {
      document.write("<p class='current'>" + secciones[i][1] + "</p>");
    } else {
      document.write("<p><a href='" + url + "' title='"+  secciones[i][2] + "'>" + secciones[i][1] + "</a>&nbsp;");
       //document.write("<a onclick='return verocultar(this);' href='#'>[+]</a><span style='display:none'> " + secciones[i][2] + " <a href='" +  url + "'>&rarr;</a></span></p>");
      if(secciones[i][2])    document.write("<a onclick='return verocultar(this);' href='#'>[+]</a><span style='display:none'> " + secciones[i][2] + "</span></p>");
    }
  }
}

function gotoQ(q) {
 var qnum = parseInt(q);
 var prevUrl = 'index-2.html';
 for(var i = 0; i < secciones.length; i++) {
   var qinic = parseInt(secciones[i][0].substr(1),10);
   if(! isNaN(qinic) && qinic > qnum) {
      window.location = prevUrl + "#q" +q; 
      return false;
   }
   prevUrl = secciones[i][0] + '.html';
 }
 alert("no se encontró");
 return false;
}
