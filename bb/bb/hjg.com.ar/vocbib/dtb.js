/******************** para http://hjg.com.ar/vocbib/   Hernan J Gonzalez   junio 2009 ************/

/** segun mi nomenclatura en ssee */
var bibliaTits = {
'Gn':['Génesis','01_gn',50],
'Ex':['Éxodo','02_ex',40],
'Lv':['Levítico','03_lv',27],
'Nm':['Números','04_nm',36],
'Dt':['Deuteronomio','05_dt',34],
'Jos':['Josué','06_jos',24],
'Jc':['Jueces','07_jc',21],
'Rt':['Rut','08_rt',4],
'1S':['I Samuel','09_1s',31],
'2S':['II Samuel','10_2s',24],
'1R':['I Reyes','11_1r',22],
'2R':['II Reyes','12_2r',25],
'1Cro':['I Crónicas','13_1cro',29],
'2Cro':['II Crónicas','14_2cro',36],
'Esd':['Esdras','15_esd',10],
'Ne':['Nehemías','16_ne',13],
'Tb':['Tobías','17_tb',14],
'Jdt':['Judit','18_jdt',16],
'Est':['Ester','19_est',10],
'1M':['I Macabeos','20_1m',16],
'2M':['II Macabeos','21_2m',15],
'Jb':['Job','22_jb',42],
'Sal':['Salmos','23_sal',150],
'Pr':['Proverbios','24_pr',31],
'Qo':['Eclesiastés','25_qo',12],
'Ct':['Cantar de los Cantares','26_ct',8],
'Sb':['Sabiduría','27_sb',19],
'Si':['Eclesiástico','28_si',51],
'Is':['Isaías','29_is',66],
'Jr':['Jeremías','30_jr',52],
'Lm':['Lamentaciones','31_lm',5],
'Ba':['Baruc','32_ba',6],
'Ez':['Ezequiel','33_ez',48],
'Dn':['Daniel','34_dn',14],
'Os':['Oseas','35_os',14],
'Jl':['Joel','36_jl',4],
'Am':['Amós','37_am',9],
'Ab':['Abdías','38_ab',1],
'Jon':['Jonás','39_jon',4],
'Mi':['Miqueas','40_mi',7],
'Na':['Nahún','41_na',3],
'Ha':['Habacuc','42_ha',3],
'So':['Sofonías','43_so',3],
'Ag':['Ageo','44_ag',2],
'Za':['Zacarías','45_za',14],
'Ml':['Malaquías','46_ml',3],
'Mt':['Mateo','47_mt',28],
'Mc':['Marcos','48_mc',16],
'Lc':['Lucas','49_lc',24],
'Jn':['Juan','50_jn',21],
'Hch':['Hechos','51_hch',28],
'Rm':['Romanos','52_rm',16],
'1Co':['I Corintios','53_1co',16],
'2Co':['II Corintios','54_2co',13],
'Ga':['Gálatas','55_ga',6],
'Ef':['Efesios','56_ef',6],
'Flp':['Filipenses','57_flp',4],
'Col':['Colosenses','58_col',4],
'1Ts':['I Tesalonicenses','59_1ts',5],
'2Ts':['II Tesalonicenses','60_2ts',3],
'1Tm':['I Timoteo','61_1tm',6],
'2Tm':['II Timoteo','62_2tm',4],
'Tt':['Tito','63_tt',3],
'Flm':['Filemón','64_flm',1],
'Hb':['Hebreos','65_hb',13],
'St':['Santiago','66_st',5],
'1P':['I Pedro','67_1p',5],
'2P':['II Pedro','68_2p',3],
'1Jn':['I Juan','69_1jn',5],
'2Jn':['II Juan','70_2jn',1],
'3Jn':['III Juan','71_3jn',1],
'Judas':['Judas','72_judas',1],
'Ap':['Apocalipsis','73_ap',22 ]
};

/** traduce titulos libros de formato vocbib a ssee */
var bibliaTitAlt = {
'1Cor':'1Co',
'1Par':'1Cro',
'1Jn':'1Jn',
'1Mac':'1M',
'1Pe':'1P',
'1Re':'1R',
'1Sa':'1S',
'1Sam':'1S',
'1Tim':'1Tm',
'1Tes':'1Ts',
'2Cor':'2Co',
'2Par':'2Cro',
'2Jn':'2Jn',
'2Mac':'2M',
'2Pe':'2P',
'2Re':'2R',
'2Sa':'2S',
'2Sam':'2S',
'2Tim':'2Tm',
'2Tes':'2Ts',
'3Jn':'3Jn',
'Abd':'Ab',
'Ag':'Ag',
'Am':'Am',
'Ap':'Ap',
'Bar':'Ba',
'Col':'Col',
'Cant':'Ct',
'Dt':'Dt',
'Dan':'Dn',
'Ef':'Ef',
'Ex':'Ex',
'Esd':'Esd',
'Est':'Est',
'Ez':'Ez',
'Flm':'Flm',
'Flp':'Flp',
'Gal':'Ga',
'Gen':'Gn',
'Hab':'Ha',
'Heb':'Hb',
'Act':'Hch',
'Is':'Is',
'Job':'Jb',
'Jue':'Jc',
'Jdt':'Jdt',
'Jl':'Jl',
'Jn':'Jn',
'Jon':'Jon',
'Jos':'Jos',
'Jer':'Jr',
'Jds':'Judas',
'Lc':'Lc',
'Lam':'Lm',
'Lev' :'Lv',
'Lv' :'Lv',
'Mc':'Mc',
'Miq':'Mi',
'Mal':'Ml',
'Mt':'Mt',
'Nah':'Na',
'Neh':'Ne',
'Num':'Nm',
'Os':'Os',
'Prov':'Pr',
'Ecl':'Qo',
'Rom':'Rm',
'Rm':'Rm',
'Rut':'Rt',
'Sal':'Sal',
'Salmos':'Sal',
'Salmo':'Sal',
'Sab':'Sb',
'Eclo':'Si',
'Sof':'So',
'Sant':'St',
'Tob':'Tb',
'Tit':'Tt',
'Zac':'Za'
};

/* flag: sseebig=1 => panel de biblia se muestra mas alto; cambiarla solo via setSseeSize() */
var sseebig=0;

/** a ejecutar al cargar la pagina */
$(document).ready(function() {
ajustarTama();
$("#main").bind("click", function(e){ // bind con bubbling: solo nos interesan los clicks en CITE
if( $(e.target).is('cite') )
  gotoRefBib(e.target);
});
$(window).wresize(ajustarTama); // para resizes
});

/************ siguen puras funciones **********************/

function setSseeSize(big) {
   if(big==sseebig) return; // no change, nothing to do
   sseebig = big;
   ajustarTama();
}

function cleanSseeBox() {
   setSseeSize(0);
   $('#msg').html(' * ');
   $('#ssee').attr('src','../sseeblank.html');
}

/** inteligencia para (una vez parseada la cita y obetnida la url) mostrar ventana o texto biblico. ESTO NO SE USA! */
function showRefBibPopup(librofull,url,msg,txtori) {
   $('#refurl').attr('href',url);
   $('#refurl').html(librofull);
   $('#msg').html(msg);
   $('#refdialog').modal();
}

/** muestra los datos de la ref biblica en iframe, y la linea de mensaje - si url es vacia muestra pagina de error */
function showRefBib(librofull,url,msg,txtori) {
   //console.log("librofull,url,msg,txtori:" +librofull + ", "+  url+ ", "+ msg+ ", "+ txtori);
   setSseeSize(1);
   if(!url) url = '../ssee_error.html';
   $('#ssee').attr('src',url);
   var loc = document.location.href;
   txtori = txtori.replace(/&nbsp;/g," "); // usamos el nbsp
   var urlfix = 'https://hjg.com.ar/scripts/vocbibcorr.cgi?loc=' + escape(loc) + '&cite=' + escape(txtori);
   $('#msg').html(
   " [<a href='javascript:cleanSseeBox()'>X</a>]  &nbsp;  &nbsp; "
     + "Texto bíblico: <b><a href='" + url + "'>" + librofull +"</a></b> &nbsp; " +  msg
     + " &nbsp; <a href='" + urlfix +"' target='sseefix'>Informar errores</a>"
     );
}

/** ajusta altos de tres boxes (main,barrawrapper,ssee) */
function ajustarTama() {
var h = $(window).height();
var w = $(window).width();
h = h - 40; // para barrita de mensajes y por las dudas
var altoMain = sseebig ? Math.round( h*2/3-30) : Math.round( h-60);
var altoSsee = h - altoMain;
if(altoMain < 50) {
 altoMain = 420; altoSsee = 200;
}
if(altoSsee < 30) {
  altoSsee = 80;
}
/* $("#msg").html("tamanios: " + w + " x " + h);*/
$( '#main' ).css( { height: altoMain} );
$( '#barrawrapper' ).css( { height: altoMain} );
$( '#ssee' ).css( { height: altoSsee} );
}

/* es necesario esto ?? 
===============================================================================
WResize is the jQuery plugin for fixing the IE window resize bug
...............................................................................
           Copyright 2007 / Andrea Ercolino
-------------------------------------------------------------------------------
LICENSE: http://www.opensource.org/licenses/mit-license.php
WEBSITE: http://noteslog.com/
===============================================================================
*/

( function( $ ) {
$.fn.wresize = function( f ) {
version = '1.1';
wresize = {fired: false, width: 0};
function resizeOnce()  {
if ( $.browser.msie ) {
if ( ! wresize.fired ) {
 wresize.fired = true; }
else  {
 var version = parseInt( $.browser.version, 10 );
 wresize.fired = false;
 if ( version < 7 )  {  return false; }
 else if ( version == 7 )  {  //a vertical resize is fired once, an horizontal resize twice
 var width = $( window ).width();
 if ( width != wresize.width ) {
 wresize.width = width;
 return false;
 }}}}
return true; }
function handleWResize( e ) {
if ( resizeOnce() ) {
return f.apply(this, [e]);
} }
this.each( function()  {
if ( this == window ) {
$( this ).resize( handleWResize );
}
else {
$( this ).resize( f );
} } );
return this;
};
} ) ( jQuery );

/** dada una cita (elemento CITE) lo parsea, trata de deducir sus componentes (libro, cap,vers) y llama a showRefBib() para mostrar resultado */
function gotoRefBib(cite) {
 var $target = $(cite);
 var txt = $target.html();
 var librocapvers=parseLibroCapVers(txt);
 var libro = librocapvers[0];
 var capvers=parseCapVers(librocapvers[1]);
 var cap = capvers[0];
 var vers = capvers[1];
 //alert(txt + " -> " + libro + "/" +cap + "/" + vers);
 var msgs = '';
 var url='';
 var librofull='';
 if(! libro || (cap==0)) { // no incluye libro o cap, lo busco en alguna cita anterior
  var cites = $('cite');
  var index = cites.index($target);
  while(index>0 && ! libro) {
   index--;
   var $p1 = $(cites[index]);
   //alert(txt + ": probando con " + $p1.html());
   var librocapversx=parseLibroCapVers($p1.html());
   libro = librocapversx[0];
   if(cap==0) cap = parseCapVers(librocapversx[1])[0];
  }
  if(libro) {
     msgs += ("'" + txt + "', sin libro, adivinamos " + libro + " (¿acertamos?)\n");
  }
 }
 if(! libro) {
  msgs += ("Error: libro de la Biblia no reconocido.  [" + txt + "]\n");
 }
 else {
  var librodata = bibliaTits[bibliaTitAlt[libro]];
  if(! librodata)
     msgs+=("Error: libro '" + libro + "' no parece ser de la Biblia. [" + txt + "]\n");
  else {
   if(cap > librodata[2]) {
     msgs+=("Error: capítulo " + cap + " fuera de rango (??) usamos el 1.");
     cap=1;vers=1;
   }
   var capf = "000" + cap;
   url = '../../ssee/' + librodata[1] + '/c' + capf.slice(-3) + ".html#v" + vers;
   librofull = librodata[0] + " " + cap +"," + vers;
  }
 }
 showRefBib(librofull,url,msgs,txt);
}

/** Dado string (contenido del cite, sin limpiar) parsea el libro y capvers y los devuelve como array
No interpreta libro, solo parsea el string.
Devuelve array [lib,capvers] (ambos string)
Si no tiene libro, [null,capvers]
Asume que libro y resto vienen separados por un solo espacio.
*/
function parseLibroCapVers(rawtxt) {
 txt = rawtxt.replace(/&nbsp;/g," "); // usamos el nbsp
 txt = txt.replace(/[^a-zA-Z0-9. ,-]/g," "); // por las dudas
 if(txt.search(/^[A-Z]/) >=0 || txt.search(/^[123][A-Z]/) >=0) { // viene el libro
 return txt.split(" ",2);
 }
 else return [null,txt];
}

/** 12,3 => (12,3)
 12 => (12,1)
 '' => (1,1)
 2,7-3,4 => (2,7)
  v. 12 => (0,12)  (0 significa sin capitulo, usar el anterior)
*/
function parseCapVers(capversString) {
if(! capversString) return [1,1];
var aux1 = capversString.replace(/^ /,"").replace(/ $/,"");
aux1 = aux1.replace(/[^0-9]/g,",").replace(/,,+/g,",");
var aux = aux1.split(",",2);
var cap = secureParseInt(aux[0]);
//if(cap==0) cap=1;
var vers = secureParseInt(aux[1]);
if(vers==0) vers=1;
//alert(capversString + " -> " + cap + " :" + vers + " - " + aux1);
return [cap,vers];
}

/* parsea como entero la primer parte del string; si no puede parsear, devuelve 0 */
function secureParseInt(s) {
if(!s) return 0;
var sx = s.replace(/^\s+/,"");
sx = sx.replace(/[^0-9].*$/,"");
n = parseInt(sx);
if(n==null || isNaN(n)) return 0;
return n;
}



