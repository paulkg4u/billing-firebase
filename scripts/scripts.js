$(document).ready(function(){
	
$('#addItemButton').click(function(){
	var newItemHtml = $('.addItemBox').first().clone();
	$('#itemsList').append(newItemHtml);
});
});