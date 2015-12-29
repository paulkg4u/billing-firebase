$(document).ready(function(){
	
$('#addItemButton').click(function(){
	var newItemHtml = $('.addItemBox').first().clone();
	$('#itemsList').append(newItemHtml);
});


});
function displayItem(itemsList,tableNo){
	var panelElement = $('.hiddenOrder').first().clone();
	panelElement.css('display','inherit');
	var heading = panelElement.find('.panel-heading').html(tableNo);
	console.log(heading);
	for(var order in itemsList){
			panelElement.find('.orderDetails').html(itemsList[order].item);
			panelElement.find('.orderQnty').html(itemsList[order].quantity);
            console.log(itemsList[order].quantity+" "+itemsList[order].item);
          }

}