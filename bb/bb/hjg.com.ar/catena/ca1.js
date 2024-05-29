
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

function gotoSelectedSection(el) {
    var sec = el.options[el.selectedIndex].value;
    document.location = "c" + sec + ".html";
}