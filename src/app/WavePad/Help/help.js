function HelpHeader(appname, version, pagetitle, previous, next) 
{
document.write(
"<div align=center>" +
"<a name=top></a>" +
"<table border=0 cellpadding=0 cellspacing=0 width=100% height=100% class=tablemax>" +
"<tr><td valign=top height=50>" +
"   <table cellSpacing=0 cellPadding=0 width=100% bgcolor=#f4f4f4 style=\"border-bottom: #a4a4a4 1px solid; padding-left: 10px; padding-right: 10px; padding-top: 8px; padding-bottom: 0px;\">" +
"   <tr><td valign=top align=left><h1>" + pagetitle + "</h1>" +
"      <div style=\"font-size: 8pt; padding-top: 2px; padding-bottom: 10px;\"><a href=\"index.html\">Contents</a> | ");
if (previous != "") document.write("<a href=\"" + previous + "\">Previous</a>");
else document.write("<font color=#cccccc>Previous</font>");
if (next != "") document.write(" | <a href=\"" + next + "\">Next</a>");
else document.write(" | <font color=#cccccc>Next</font>");
document.write(
"</div></td>" +
"       <td valign=top align=right><h1>" + appname + "</h1>" +
"      <div style=\"font-size: 9pt; padding-top: 2px; padding-bottom: 10px;\">Help v " + version + "</div></td></tr>" +
"   </table>" +
"</td></tr>" +
"<tr><td align=left valign=top>" +
"   <table class=\"tablemax2\" border=0 cellpadding=0 cellspacing=0 height=90% bgcolor=#ffffff align=\"center\">" +
"   <tr><td valign=top style=\"padding: 10px; padding-left: 30px; padding-right: 30px;\"><br/>");
}
function HelpFooter(title, previous, next, urlname, urladd) {
document.write(
"   </td></tr></table><table border=0 cellpadding=0 cellspacing=0 width=100%  height=10% bgcolor=#ffffff class=footer>" +
"   <tr><td valign=bottom>" +
"      <table cellSpacing=0 cellPadding=0 width=100% bgcolor=#f4f4f4 style=\"border-top: #a4a4a4 1px solid; padding-left: 10px; padding-right: 10px; padding-top: 8px; padding-bottom: 0px;\">" +
"      <tr><td valign=top align=left><b>" + title + "</b>" +
"         <div style=\"font-size: 8pt; padding-top: 2px; padding-bottom: 10px;\"><a href=\"index.html\">Contents</a> | ");
if (previous != "") document.write("<a href=\"" + previous + "\">Previous</a> | ");
if (next != "") document.write("<a href=\"" + next + "\">Next</a>");
document.write(
"</div></td>" +
"          <td valign=top align=right>&copy; NCH Software<br><a href=\"" + urladd + "\">" + urlname + "</a></td></tr>" +
"      </table>" +
"   </td></tr>" +
"   </table>" +
"</td></tr>" +
"</table>" +
"</div>");
}
