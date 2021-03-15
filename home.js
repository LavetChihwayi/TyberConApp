var home=document.getElementById("#home");
home.style.background="#eee";




function editSummary(){
	var summary1=document.getElementById("summary");
	summary1.style.display="none";
	var summary2=document.getElementById("summary-hidden-edit");
	summary2.style.display="block";
	
	var edit1=document.getElementById("edit");
	edit1.style.display="none";
	var edit2=document.getElementById("edit-hidden")
	edit2.style.display="block";
}
function editSummaryBack(){
	var summary1=document.getElementById("summary-hidden-edit");
	summary1.style.display="none";
	var summary2=document.getElementById("summary")
	summary2.style.display="block";
	
	
	var edit1=document.getElementById("edit-hidden");
	edit1.style.display="none";
	var edit2=document.getElementById("edit")
	edit2.style.display="block";
}


function invoiceDropDown(){
	document.getElementById("invoice-drop-down").classList.toggle('show');

}
function invoiceDrop(){
	//document.getElementById("invoices").classList.toggle('show2');
}
function invoiceDrop2(){
	//document.getElementById("invoices").classList.remove('show2');
	document.getElementById("invoice-drop-down").classList.remove('show');
}
function paymentsHidden(){
	var payment=document.getElementById("body-side-inner-hidden");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#receipt-payments");
	display(payment,payment2,payment3);
	
}
function openNewReceipt(){
	var payment=document.getElementById("body-side-inner-hidden-new-receipt");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
	
}
function openNewPayment(){
	var payment=document.getElementById("body-side-inner-hidden-new-payment");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
	
}
function openNewDelivaryNote(){
	var payment=document.getElementById("body-side-inner-hidden-new-delivary-note");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openNewCustomer(){
	var payment=document.getElementById("body-side-inner-hidden-new-customer");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openNewSupplier(){
	var payment=document.getElementById("body-side-inner-hidden-new-supplier");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function backToColor(){
	var home1=document.getElementById("#home");
	var home2=document.getElementById("#receipt-payments");
	var home3=document.getElementById("#delivary-notes");
	var home4=document.getElementById("#sales-quotes");
	var home5=document.getElementById("#debit-notes");
	var home6=document.getElementById("#accounts");
	var home7=document.getElementById("#customers");
	var home8=document.getElementById("#suppliers");
	var home9=document.getElementById("#credit-notes");
	var home10=document.getElementById("#sales-orders");
	var home11=document.getElementById("#cash-accounts");
	var home12=document.getElementById("#purchases-orders");
	var home13=document.getElementById("#goods-receipts");
	var home14=document.getElementById("#inventory-items");
	var home15=document.getElementById("#inventory-transfers");
	var home16=document.getElementById("#production-orders");
	home1.style.background="none";
	home2.style.background="none";
	home3.style.background="none";
	home4.style.background="none";
	home5.style.background="none";
	home6.style.background="none";
	home7.style.background="none";
	home8.style.background="none";
	home9.style.background="none";
	home10.style.background="none";
	home11.style.background="none";
	home12.style.background="none";
	home13.style.background="none";
	home14.style.background="none";
	home15.style.background="none";
	home16.style.background="none";


	
}
function backToSummery(){
	var payment=document.getElementById("body-side-inner-hidden");
	var home=document.getElementById("#home");
	backToColor();
	home.style.background="#eee";
	var delivary=document.getElementById("body-side-inner-hidden-delivary");
	var salesQuotes=document.getElementById("body-side-inner-hidden-sales-quotes");
	var sQuotes=document.getElementById("body-side-inner-hidden-s-quotes");
	var debitNotes=document.getElementById("body-side-inner-hidden-debit-notes");
	var customers=document.getElementById("body-side-inner-hidden-customers");
	var customer=document.getElementById("body-side-inner-hidden-customer");
	var suppliers=document.getElementById("body-side-inner-hidden-suppliers");
	var supplier=document.getElementById("body-side-inner-hidden-supplier");
	var creditNotes=document.getElementById("body-side-inner-hidden-credit-notes");
	var salesOrders=document.getElementById("body-side-inner-hidden-sales-orders");
	var newReceipt=document.getElementById("body-side-inner-hidden-new-receipt");
	var newDelivaryNote=document.getElementById("body-side-inner-hidden-new-delivary-note");
	var newCustomer=document.getElementById("body-side-inner-hidden-new-customer");
	var newSupplier=document.getElementById("body-side-inner-hidden-new-supplier");
	var dNote=document.getElementById("body-side-inner-hidden-d-note");
	var dbtNote=document.getElementById("body-side-inner-hidden-dbt-notes");
	var receipt=document.getElementById("body-side-inner-hidden-receipt");
	var bankAccounts=document.getElementById("body-side-inner-hidden-bank-accounts");
	var bankAccount=document.getElementById("body-side-inner-hidden-bank-account");
	var cashAccounts=document.getElementById("body-side-inner-hidden-cash-accounts");
	var cashAccount=document.getElementById("body-side-inner-hidden-cash-account");
	var purchasesOrders=document.getElementById("body-side-inner-hidden-purchases-orders");
	var purchasesOrder=document.getElementById("body-side-inner-hidden-purchases-order");
	var goodsReceipts=document.getElementById("body-side-inner-hidden-goods-receipts");
	var goodsReceipt=document.getElementById("body-side-inner-hidden-goods-receipt");
	var inventoryItems=document.getElementById("body-side-inner-hidden-inventory-items");
	var inventoryItem=document.getElementById("body-side-inner-hidden-inventory-item");
	var inventoryTansfers=document.getElementById("body-side-inner-hidden-inventory-transfers");
	var inventoryTansfer=document.getElementById("body-side-inner-hidden-inventory-transfer");
	////var purchasesOrders=document.getElementById("body-side-inner-hidden-purchases-orders");
	var productionOrders=document.getElementById("body-side-inner-hidden-production-orders");
	var purchasesOrders=document.getElementById("body-side-inner-hidden-purchases-invoices");
	var salesOrders=document.getElementById("body-side-inner-hidden-sales-invoices");
	var productionOrder=document.getElementById("body-side-inner-hidden-production-order");
	
	
	
	var payment2=document.getElementById("body-side-inner");
	payment2.style.display="block";
	payment.style.display="none";
	delivary.style.display="none";
	salesQuotes.style.display="none";
	sQuotes.style.display="none";
	
	debitNotes.style.display="none";
	customers.style.display="none";
	customer.style.display="none";
	suppliers.style.display="none";
	supplier.style.display="none";
	creditNotes.style.display="none";
	salesOrders.style.display="none";
	newReceipt.style.display="none";
	newDelivaryNote.style.display="none";
	newCustomer.style.display="none";
	newSupplier.style.display="none";
	
	dNote.style.display="none";
	dbtNote.style.display="none";
	receipt.style.display="none";
	bankAccounts.style.display="none";
	bankAccount.style.display="none";
	cashAccounts.style.display="none";
	cashAccount.style.display="none";
	purchasesOrders.style.display="none";
	purchasesOrder.style.display="none";
	goodsReceipts.style.display="none";
	goodsReceipt.style.display="none";
	inventoryItems.style.display="none";
	inventoryItem.style.display="none";
	inventoryTansfers.style.display="none";
	inventoryTansfer.style.display="none";
	productionOrders.style.display="none";
	productionOrder.style.display="none";
	//purchasesOrders.style.display="none";
	
	window.scrollTo(0,0);
	
	
	
	
}
function previous(){
	var previousPage=document.getElementById("body-side-inner-hidden");
	var openPage=document.getElementById("body-side-inner-hidden-new-receipt");
	var openPage2=document.getElementById("body-side-inner-hidden-new-payment");
	var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	openPage.style.display="none";
	openPage2.style.display="none";
	openPage3.style.display="none";
	
}
function previousDelivaryNote(){
	
	var previousPage=document.getElementById("body-side-inner-hidden-delivary");
	var openPage=document.getElementById("body-side-inner-hidden-new-delivary-note");
	var openPage2=document.getElementById("body-side-inner-hidden-d-note");
	//var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	openPage.style.display="none";
	 openPage2.style.display="none";
	//openPage3.style.display="none";
	
}
function previousSalesQuotes(){
	
	var previousPage=document.getElementById("body-side-inner-hidden-delivary");
	var openPage=document.getElementById("body-side-inner-hidden-sales-quotes");
	var openPage2=document.getElementById("body-side-inner-hidden-s-quotes");
	//var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	openPage.style.display="none";
	 openPage2.style.display="none";
	//openPage3.style.display="none";
	
}
function previousCustomers(){
	
	var previousPage=document.getElementById("body-side-inner-hidden-customers");
	var openPage=document.getElementById("body-side-inner-hidden-customer");
	var openPage2=document.getElementById("body-side-inner-hidden-new-customer");
	//var openPage2=document.getElementById("body-side-inner-hidden-s-quotes");
	//var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	openPage.style.display="none";
	 openPage2.style.display="none";
	//openPage3.style.display="none";
	
}
function previousSuppliers(){
	
	var previousPage=document.getElementById("body-side-inner-hidden-suppliers");
	var openPage=document.getElementById("body-side-inner-hidden-supplier");
	var openPage2=document.getElementById("body-side-inner-hidden-new-supplier");
	//var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	openPage.style.display="none";
	openPage2.style.display="none";
	//openPage3.style.display="none";
	
}
//function openSalesQuates(){
//	backToSummery();
//	var payment=document.getElementById("body-side-inner-hidden-sales-quotes");
//	var payment2=document.getElementById("body-side-inner");
//	payment2.style.display="none";
//	payment.style.display="block";
//
//}
//Function that display the hidden//
//function display(payment,payment2){
//	backToSummery();
//	payment2.style.display="none";
//	payment.style.display="block";
//	
//}
function previousDebitNote(){
	
	var previousPage=document.getElementById("body-side-inner-hidden-debit-notes");
	//var openPage=document.getElementById("body-side-inner-hidden-debit-notes");
	var openPage2=document.getElementById("body-side-inner-hidden-dbt-notes");
	//var openPage3=document.getElementById("body-side-inner-hidden-receipt");
	
	previousPage.style.display="block";
	//openPage.style.display="none";
	openPage2.style.display="none";
	//openPage3.style.display="none";
	
}
function openSalesQuates(){
	var payment=document.getElementById("body-side-inner-hidden-sales-quotes");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#sales-quotes");
	display(payment,payment2,payment3);

}
//Function that display the hidden//
function display(payment,payment2,payment3){
	backToSummery();
	payment2.style.display="none";
	payment.style.display="block";
	backToColor();
	payment3.style.background="#fff";
}
//End Of Function//
function openDelivaryNotes(){
	var payment=document.getElementById("body-side-inner-hidden-delivary");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#delivary-notes");
	display(payment,payment2,payment3);

}
function openDebitNotes(){
	var payment=document.getElementById("body-side-inner-hidden-debit-notes");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#debit-notes");
	display(payment,payment2,payment3);
}
function openCustomers(){
	var payment=document.getElementById("body-side-inner-hidden-customers");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#customers");
	display(payment,payment2,payment3);
}
//Suppliers function//
function openSuppliers(){
	var payment=document.getElementById("body-side-inner-hidden-suppliers");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#suppliers");
	
	display(payment,payment2,payment3);
}
function openCreditNotes(){
	var payment=document.getElementById("body-side-inner-hidden-credit-notes");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#credit-notes");
	display(payment,payment2,payment3);

}
function openSalesOrders(){
	var payment=document.getElementById("body-side-inner-hidden-sales-orders");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#sales-orders");
	display(payment,payment2,payment3);
}
function openPurchasesInvoice(){
	var payment=document.getElementById("body-side-inner-hidden-purchases-invoice");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#purchases-invoices");
	display(payment,payment2,payment3);
}
function openSalesInvoice(){
	var payment=document.getElementById("body-side-inner-hidden-sales-invoice");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#sales-invoices");
	display(payment,payment2,payment3);
}
function openBankAccounts(){
	var payment=document.getElementById("body-side-inner-hidden-bank-accounts");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#accounts");
	display(payment,payment2,payment3);
}
function openCashAccounts(){
	var payment=document.getElementById("body-side-inner-hidden-cash-accounts");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#cash-accounts");
	display(payment,payment2,payment3);
}
function openPurchasesOrders(){
	var payment=document.getElementById("body-side-inner-hidden-purchases-orders");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#purchases-orders");
	display(payment,payment2,payment3);
}
function openGoodsReceipts(){
	var payment=document.getElementById("body-side-inner-hidden-goods-receipts");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#goods-receipts");
	display(payment,payment2,payment3);
}
function openInventoryItems(){
	var payment=document.getElementById("body-side-inner-hidden-inventory-items");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#inventory-items");
	display(payment,payment2,payment3);
	
}
function openInventoryTransfers(){
	var payment=document.getElementById("body-side-inner-hidden-inventory-transfers");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#inventory-transfers");
	display(payment,payment2,payment3);
}
function openProductionOrders(){
	var payment=document.getElementById("body-side-inner-hidden-production-orders");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#production-orders");
	display(payment,payment2,payment3);
}
function openPurchasesInvoice(){
	var payment=document.getElementById("body-side-inner-hidden-purchases-invoices");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#purchases-invoices");
	display(payment,payment2,payment3);
}
function openSalesInvoice(){
	var payment=document.getElementById("body-side-inner-hidden-sales-invoices");
	var payment2=document.getElementById("body-side-inner");
	var payment3=document.getElementById("#sales-invoices");
	display(payment,payment2,payment3);
}
function openView(){
	var payment=document.getElementById("body-side-inner-hidden-receipt");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewDelivaryNote(){
	var payment=document.getElementById("body-side-inner-hidden-d-note");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewSalesQuotes(){
	var payment=document.getElementById("body-side-inner-hidden-s-quotes");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewDebitNote(){
	var payment=document.getElementById("body-side-inner-hidden-dbt-notes");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewCustomer(){
	var payment=document.getElementById("body-side-inner-hidden-customer");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewSupplier(){
	var payment=document.getElementById("body-side-inner-hidden-supplier");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewBankAccount(){
	var payment=document.getElementById("body-side-inner-hidden-bank-account");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewCashAccount(){
	var payment=document.getElementById("body-side-inner-hidden-cash-account");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewPurchasesOrder(){
	var payment=document.getElementById("body-side-inner-hidden-purchases-order");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewGoodsReceipt(){
	var payment=document.getElementById("body-side-inner-hidden-goods-receipt");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewInventoryItem(){
	var payment=document.getElementById("body-side-inner-hidden-inventory-item");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewInventoryTransfer(){
	var payment=document.getElementById("body-side-inner-hidden-inventory-transfer");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
function openViewProductionOrder(){
	var payment=document.getElementById("body-side-inner-hidden-production-order");
	var payment2=document.getElementById("body-side-inner");
	display(payment,payment2);
}
//paid from//

//Received in
function openPaidFromReceivedIn(){
	var type=document.getElementById("type");
	var paidFrom=document.getElementById("paid-from");
	var paidFrom2=document.getElementById("paid-from-payment");
	var receivedIn=document.getElementById("received-in");
	var receivedIn2=document.getElementById("received-in-payment");
	if(receivedIn.style.display=="block" | receivedIn2.style.display=="block"){
		paidFrom.style.display="block";
		paidFrom2.style.display="block";
		receivedIn2.style.display="none";
		receivedIn.style.display="none";
	}else{
		paidFrom.style.display="none";
		paidFrom2.style.display="none";
		receivedIn.style.display="block";
		receivedIn2.style.display="block";
	}
	
	
}
function openEvent(){
	var autoRef=document.getElementById("auto-reference");
	var autoRef2=document.getElementById("auto-reference2");
	if(autoRef.value==""|autoRef.value==""){
		autoRef.value="Auto";
		autoRef2.value="Auto";
		//autoRef.style=('events');
		autoRef.style.pointerEvents="none";
		autoRef2.style.pointerEvents="none";
	}
	else{
		if(autoRef.value!="Auto"|autoRef2.value!="Auto"){
			autoRef.value="Auto";
			autoRef2.value="Auto";
			autoRef.style.pointerEvents="none";
			autoRef2.style.pointerEvents="none";
		}
		else{
			autoRef.value="";
			autoRef2.value="";
			//autoRef.remove('events');
			autoRef.style.pointerEvents="auto";
			autoRef2.style.pointerEvents="auto";
			autoRef.value="";
			autoRef2.value="";
			
		}
		
	
	}
	
}

