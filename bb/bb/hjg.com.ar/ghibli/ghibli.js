function img(tit,url)
{
	OpenWindow=window.open("", "newwin", "height=480, width=680,scrollbars=yes,toolbar=no,resizable=yes,menubar=no");
	OpenWindow.document.write('<html><head></head><body style="background-color:#fff;text-align:center;margin:10px auto;font-family: Verdana">');
	OpenWindow.document.write("<center><b>" + tit +"</b><br /><br />");
	OpenWindow.document.write("<img style='border:2px solid #000' src='" + url + "'>");
	OpenWindow.document.write('<br /><br /><small><a href="#" onclick="window.close()">cerrar</a></small>');
	OpenWindow.document.write("</body></html>");
	OpenWindow.document.close();
	self.name="main";
	return false;
}


function OpenComments (i,t) {
    window.open('http://www.hjg.com.ar/scripts/commentg.cgi?' +
                    'i=' + i + '&t=' + t,
                    'comments',
                    'width=550,height=540,scrollbars=yes,status=yes');
}

/******************  para galerias *************************/

/* http://www.evolt.org/article/document_body_doctype_switching_and_more/17/30655/ */
function getWidth() {
//var scrollWidth=20 // a ojo
if (window.innerWidth)	return window.innerWidth;
else if (document.documentElement && document.documentElement.clientWidth)
	return document.documentElement.clientWidth
else if (document.body)	return document.body.clientWidth
else       return 0;
}
function getHeight() {
if (window.innerHeight)	return window.innerHeight
else if (document.documentElement && document.documentElement.clientHeight)
	return document.documentElement.clientHeight
else if (document.body)	return document.body.clientHeight
else       return 0;
}
function getScrollY() {
if (window.pageYOffset)	  return  window.pageYOffset;
else if (document.documentElement && document.documentElement.scrollTop)
	return document.documentElement.scrollTop;
else if (document.body) return  pos = document.body.scrollTop;
else return 0;
}
function getScrollX() {
if (window.pageXOffset)	  return  window.pageXOffset;
else if (document.documentElement && document.documentElement.scrollLeft)
	return document.documentElement.scrollLeft;
else if (document.body) return  pos = document.body.scrollLeft;
else return 0;
}


function esconder(id) {
	var d = document.all? document.all[id] : document.getElementById(id); 
	d.style.display = 'none';
}
function mostrar(id) {
	var d = document.all? document.all[id] : document.getElementById(id); 
	d.style.display = 'block';
}

function blanketSize(id) {
	var d = document.all? document.all[id] : document.getElementById(id); 
	d.style.position='absolute';
	//alert("scroll: " + getScrollY()   + " " +  getScrollX()  + " size: " + getHeight()   + " " +  getWidth()); 
	d.style.top=getScrollY() + 'px';
	d.style.left=getScrollX() +'px';
	d.style.height =getHeight() + 'px';
	d.style.width = (getWidth()-26) + 'px'; /* algo mas chico para no pisar scrollbar*/
}

function placePopupAtCenter(id,w,h,url) {
	var margenUp = Math.max((getHeight()-h)/2 ,5) +getScrollY() ;
	var margenLeft = Math.max((getWidth()-w)/2 ,5)+getScrollX() - 26; /* 20 de scroll, 6 de borde */
	var d = document.all? document.all[id] : document.getElementById(id); 
	d.style.position='absolute';
	d.style.top=margenUp + 'px';
	d.style.left= margenLeft + 'px';
	d.innerHTML = '<a href="javascript:restaurarx()"><img style="border:6px double #333" alt="cargando... loading... " height="' + h + '" width="' + w + '" src="' + url + '" /></a>';
}

/* esta es la funcion 'publica'  */
function mipopup(blanketid,popupid,w,h,url) {
	blanketSize(blanketid);
	mostrar(blanketid);
	placePopupAtCenter(popupid,w,h,url);
	mostrar(popupid);
}

/******************  fin para galerias *************************/
