$(document).ready(function(){
	
$('#addItemButton').click(function(){
	var newItemHtml = $('.addItemBox').first().clone();
	console.log(newItemHtml);
	$('#itemsList').append(newItemHtml);
});
});