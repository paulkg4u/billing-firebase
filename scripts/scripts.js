$(document).ready(function(){
	$('#mainContainer').bootstrapWizard({
		'tabClass':'nav nav-pills'
	});
$('#addItemButton').click(function(){
	var newItemHtml = $('.addItemBox').first().clone();
	$('#itemsList').append(newItemHtml);
});
});
function displayItem(itemsList,tableNo,initialElement){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'</strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
            console.log(itemsList[order].quantity+" "+itemsList[order].item);
          }

    $('#pendingOrders').append(panelElement);
}