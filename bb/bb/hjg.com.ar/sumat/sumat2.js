function OpenCorregir(file1,id) {
 window.open('corregirsuma92bd.html?file=' 
	+ file1 
	+ '&id=' 
	+ id, 
	'corregir', 
	'width=750,height=580,scrollbars=yes,status=yes');
}

var cps={'I' : 119,'II-I': 114,'II-II': 189,'III': 90};
var s2st={'a':'I','b':'II-I','c':'II-II','d':'III'};



function gotoSecCuest(f) {
        var sec  = $('#formS').val();
        var sect = s2st[sec];
        var cuest  = $('#formQ').val();
        var nc = cps[sect];
	if(! cuest || cuest<1) cuest=1;
	if(! nc) { alert("seccion invalida [" + sec +"] nc=[" + nc+ "]"); return false;}
	if(cuest > nc) {alert("cuestion invalida. La parte " + sect + " tiene " + nc + " cuestiones"); return false;}
        var url=  window.location +"";
        url =url.replace(/sumat\/.*/,"sumat/");
        url = url  + sec + '/c' + cuest + ".html";
        window.location.assign(url);
        return false;
}

function   clickForCorrect(e) {
 var ee = $(e.target);
if( ee.is('a')) return;
if(! ee.is('.ed') ) {
 // tal vez un padre??
 var p = ee.parents().filter('.ed');
 if(p.length ==0) return;
 else ee = $(p.get(0));
}
 var id=ee.attr("id");
 var file = document.location + "";
 file = file.replace(/.*sumat\//,"").replace(/html.*/,"html");
 //alert("click! " +ee + " id=" + id + " file=" +file);
 OpenCorregir(file,id);
}


/** a ejecutar al cargar la pagina */
$(document).ready(function() {
ajustarTama();
$("#content").bind("dblclick", function(e){ // bind con bubbling: solo nos interesan los clicks en CITE
 clickForCorrect(e);
});
$(window).wresize(ajustarTama); // para resizes
});

/** ajusta altos de tres boxes (main,barrawrapper,ssee) */
function ajustarTama() {
var h = $(window).height();
var w = $(window).width();
var he = $('#encab').outerHeight(true);
var hec = h - he - 12;
if(hec < 100) hec = 480;
//alert("h=" + h + " he=" + he);   
$('#content').height(hec);
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


function submitGoogle()
{
		var form1 = document.getElementById('googleform');
//		form1.style.display = 'none';
		var subdir = form1.subdir.value;
		form1.q.value = form1.q1.value + " site:hjg.com.ar";
		if(subdir.length >1)		{
			form1.q.value = form1.q.value + " inurl:" + subdir;
		}
//		form1.removeChild(form1.subdir);
//		form1.removeChild(form1.q1);
		form1.btnG.value = "Search";
		form1.submit();
} 

function lat(p,q,a) {
    window.open("../suma-lat.html#" + p + "-" + q + "-" + a , 
"sumalat", 
	'width=850,height=580,scrollbars=yes,status=yes');
    return false;
}

/* if the hash corresponds to a element id, add the class 'current' to it */
function markCurrent() {
   var loc = window.location.hash;
   if(loc) {
   	var el=document.getElementById(loc.substring(1));
   	if(el) {el.className += " current";
  	}
   	// give it some time  http://stackoverflow.com/a/4925263/277304  	    	
       setTimeout(function(){    window.scrollBy(0, -30); }, 500); 
   }
}

// only in indexes
// $(document).ready(function() { markCurrent(); }); 


function togglePrologVisib() {
   $('#prologo').toggle(400);
}
