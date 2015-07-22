// create inventory
var inventory = new Array(); 

//create temp purchase 
var purchase_list = new Array(); 

// total cost of transaction 
var one_total = 0; 

// total sales
var sales = 0; 


// item constructor
function item(name, price, quan) {
	this.name = name; 
	this.price = price; 
	this.quan = quan;
 
}

//search function(linear search)
//returns index, if not found returns -1
var search = function(name) {
	for (var i = 0 ; i < inventory.length; i++) 
	{
		if (inventory[i].name === name)
			return i;
	}
	return -1; 
}

//search function(linear search)
//returns index, if not found returns -1
var search_list = function(name) {
	for (var i = 0 ; i < purchase_list.length; i++) 
	{
		if (purchase_list[i].name === name)
			return i;
	}
	return -1; 
}


//creates an item and inserts it into array
var add_item = function() {
	var name = prompt("What is the item's name?"); 
	var price = prompt("What is the item's price?"); 
	var quan = prompt("Amount of item in stock:"); 
	inventory[inventory.length] = new item(name, price, quan); 
}

//edits an item by using search function
var edit_item = function() {
	var name = prompt("What is the item's name?"); 
	var i = search(name); 
	if (i === -1) 
	{
		alert("Item not found"); 
	}
	else
	{
		var price = prompt("old price: "+inventory[i].price+ "   What is the item's new price?"); 
		var quan = prompt("old amount:"+inventory[i].quan+"   New amount of item in stock:" ); 
		inventory[i].price = price; 
		inventory[i].quan = quan; 
	}
}

//sells an item with a given quantity 
var sell = function() {
	var name = prompt("What is the item's name?"); 
	var i = search(name); 
	if (i === -1) 
	{
		alert("Item not found"); 
	}
	else
	{
		var amount = prompt("Quantity that you're selling?");
		var item_tol = amount*(inventory[i].price);  

		//update the amount of items left in stock
		inventory[i].quan -= amount; 

		// updating scanned items
		var node = document.createElement("LI");
   	 	var textnode = document.createTextNode(inventory[i].name +"@"+inventory[i].price+"*"+amount+"="+item_tol);
    		node.appendChild(textnode);
    		document.getElementById("alist").appendChild(node);

		//updating total cost
		one_total += item_tol; 
		document.getElementById('screen').innerHTML = one_total;	


		// add item to purchase list 
		purchase_list[purchase_list.length] = new item(inventory[i].name, inventory[i].price, amount); 	
	}

}

var erase = function() {
	var name = prompt("What is the item's name?"); 
	var i = search_list(name); 
	var a = search(name); 
	if(i === -1) 
	{
		alert("Item not found"); 
	}
	else
	{
		var item_tol = purchase_list[i].quan*(purchase_list[i].price);  

		//update the amount of items left in stock
		alert(inventory[a].quan); 
		alert( purchase_list[i].quan); 
		inventory[a].quan += purchase_list[i].quan; 

		//updating total cost
		one_total -= item_tol; 
		document.getElementById('screen').innerHTML = one_total;	


	}
}

var print_all = function() {
	for (var i = 0 ; i < inventory.length; i++) 
	{
		alert(inventory[i].name+":  "+ inventory[i].quan +"@" + inventory[i].price);
	}
}

