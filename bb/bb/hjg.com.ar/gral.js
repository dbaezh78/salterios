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

/* hjg */
function submitGoogle() {
		var form1 = document.getElementById('googleform');
		//form1.style.display = 'none';
		var subdir = form1.subdir.value;
		form1.q.value = form1.q1.value + " site:hjg.com.ar";
		if(subdir.length >1)		{
			form1.q.value = form1.q.value + " inurl:" + subdir;
		}

		form1.removeChild(form1.subdir);
		form1.removeChild(form1.q1);
		form1.btnG.value = "Search";
		form1.submit();
}
function submitGoogle2(form1) {

		form1.q.value = form1.q1.value + " site:hjg.com.ar";
		var subdir = form1.subdir.value;
		if(subdir.length >1)		{
			form1.q.value = form1.q.value + " inurl:" + subdir;
		}

		form1.removeChild(form1.subdir);
		form1.removeChild(form1.q1);
		form1.btnG.value = "Search";
		return true;
}

function submitGoogle3(form1) {
var urlg = 'http://www.google.com/search?btnG=Search&amp;q=';
var q = "" + form1.q1.value + " site:hjg.com.ar";
var subdir = form1.subdir.value;
if(subdir.length >1)		{
			q += " inurl:" + subdir;
		}
urlg = urlg  + escape(q);
window.location = urlg;
		return false;
}
