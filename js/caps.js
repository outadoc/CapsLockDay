var date = new Date();

if((date.getDate() == 22 && date.getMonth() == 9-1) || (date.getDate() == 28 && date.getMonth() == 6-1)) {
	$('*').css('text-transform', 'uppercase');
	
	$('input, textarea').change(function() {
		this.val(this.val.toUpperCase());
	});
}