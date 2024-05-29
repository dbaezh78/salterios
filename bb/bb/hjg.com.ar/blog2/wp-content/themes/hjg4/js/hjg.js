// áéí
function OpenRecomendar (arch,i,t) {
    window.open('recomendar2d41d.cgi?' +
                    'i=' + arch + '%23' + i + '&t=' + t,
                    'recomendar',
                    'width=650,height=480,scrollbars=yes,status=yes');
}

function OpenComments (i,t) {
    window.open('https://hjg.com.ar/scripts/comment2.cgi?' +
                    'i=' + i + '&t=' + t,
                    'comments',
                    'width=550,height=540,scrollbars=yes,status=yes');
}


function toggledisp(id,href)
{
var c = document.getElementById(id);
if(c.style.display == 'none') { c.style.display = 'block'; href.innerHTML ='[ocultar]';}
else{ c.style.display = 'none';  href.innerHTML ='[ver más...]';}
return false;
}

function irHash(name)
{
	location.hash = '#' + name;
}

function ocultar2(href)
{
var c = href.nextSibling;
if(c.style.display == 'none') 
 { c.style.display = 'block'; href.innerHTML ='[-]'; }
else 
 { c.style.display = 'none';  href.innerHTML ='[ver]'; }
return false;
}

// if  http:/...../#blabla, looks for element 'blabla' and adds 'current' to 
function markCurrent() {
   var loc = window.location.hash;
   if(loc) {
   	var el=document.getElementById(loc.substring(1));
   	if(el) {el.className += " current";}
  }
}

// $(document).ready(function() { markCurrent(); });
