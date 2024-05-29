function nota(url) {
	popup = window.open(url,'notas','status=no,toolbar=yes,scrollbars=yes,resizable=yes,width=600,height=70,top=0,left=0');
	if (popup.focus) popup.focus();
	return false;
}				

