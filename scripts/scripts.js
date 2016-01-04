$(document).ready(function(){
	$('#mainContainer').bootstrapWizard({
		'tabClass':'nav nav-pills'
	});
$('#addItemButton').click(function(){
	var newItemHtml = $('.addItemBox').first().clone();
	$('#itemsList').append(newItemHtml);
});
});

function displayItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value ="'+orderNo+'" class = "btn btn-xs btn-success acceptOrder" style = "float:right" onclick = "acceptOrder(this)">Accept Order</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#pendingOrders').append(panelElement);
}
function displayAcceptedItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value = "'+orderNo+'"class = "btn btn-xs btn-success finishedOrder" style = "float:right;" onclick = "finishedOrder(this)">Finished cooking</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#preparingOrders').append(panelElement);
}
function displayPendingItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value = "'+orderNo+'"class = "btn btn-xs btn-success finishedOrder" style = "float:right;" onclick = "finishedOrder(this)">Edit Order</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#pendingOrders').append(panelElement);
}
function displayReadyItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value = "'+orderNo+'"class = "btn btn-xs btn-success finishedOrder" style = "float:right;" onclick = "serveOrder(this)">Served</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#readyOrders').append(panelElement);
}
function displayServedItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value = "'+orderNo+'"class = "btn btn-xs btn-success finishedOrder" style = "float:right;" onclick = "printBill(this)">Print Bill</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#servedOrders').append(panelElement);
}
function displayPrintedItem(itemsList,tableNo,initialElement,orderNo){
	var panelElement = initialElement.clone();
	panelElement.css('display','inherit').css('font-size','1.2em');
	var heading = panelElement.find('.panel-heading').html('<strong> Table #: '+tableNo+'<button value = "'+orderNo+'"class = "btn btn-xs btn-success finishedOrder" style = "float:right;" onclick = "saveToDB(this)">Remove</button></strong>');
	panelElement.find('.orderDetails').html('');
	panelElement.find('.orderQnty').html('');

	for(var order in itemsList){
			panelElement.find('.orderDetails').css('font-size','.9em').append($('<div/>').html(itemsList[order].item));
			panelElement.find('.orderQnty').css('font-size','.9em').append($('<div/>').html(itemsList[order].quantity));
          }

    $('#printedOrders').append(panelElement);
}
function acceptOrder(element){
	var orderId = $(element).attr('value');
	var orderElement = dataRef.child(orderId);
	orderElement.update({'orderStatus':'received'});


}
function finishedOrder(element){
	var orderId = $(element).attr('value');
	var orderElement = dataRef.child(orderId);
	orderElement.update({
		'orderStatus':'ready'
	});
}
function serveOrder(element){
	var orderId = $(element).attr('value');
	var orderElement = dataRef.child(orderId);
	orderElement.update({
		'orderStatus':'served'
	});
}
function printBill(element){
	var orderId = $(element).attr('value');
	var orderElement = dataRef.child(orderId);
	orderElement.update({
		'orderStatus':'billed'
	});
}
function saveToDB(element){
	var orderId = $(element).attr('value');
	var orderElement = dataRef.child(orderId);
	orderElement.update({
		'orderStatus':'saved'
	});
	
}