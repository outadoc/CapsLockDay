var date = new Date();

//if october 22th or june 28th
if((date.getDate() == 22 && date.getMonth() == 10-1) || (date.getDate() == 28 && date.getMonth() == 6-1)) {
	$('*').css('text-transform', 'uppercase');
	
	$('input, textarea').change(function() {
		this.val(this.val.toUpperCase());
	});
}