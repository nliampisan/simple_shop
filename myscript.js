// create inventory
var inventory = new Array(); 

//create temp purchase 
var purchase_list = new Array(); 

//create favorite list 
var fav_list = new Array(); 
for (var x = 0 ; x <= 10;  x++) 
	fav_list[x] = null; 


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
		/*alert(inventory[a].quan); 
		alert( purchase_list[i].quan); */
		inventory[a].quan = parseInt(inventory[a].quan)+parseInt(purchase_list[i].quan); 

		//updating total cost
		one_total -= item_tol; 
		document.getElementById('screen').innerHTML = one_total;	

		
		

		// updating scanned items
		var node = document.createElement("LI");
   	 	var textnode = document.createTextNode("--"+purchase_list[i].name +"@"+purchase_list[i].price+"*"+purchase_list[i].quan+"="+"-"+item_tol);
    		node.appendChild(textnode);
    		document.getElementById("alist").appendChild(node);


		//remove item from list 
		purchase_list[i].name = null; 
	}

}

var checkout = function() {
	// do change calculation 
	var money = prompt("Money given:");

	if (money < one_total) 
	{
		alert("insufficient money"); 
	}
	else
	{ 
	var change = money-one_total; 
	alert("Change: " + change); 


	//add total to sales and reset one_total
	sales += parseFloat(one_total); 
	one_total = 0; 
	// updating one_total back to zero 
	document.getElementById('screen').innerHTML = one_total;

	// delete everything in list 
	document.getElementById("alist").innerHTML = "";


	// problem with reseting array 
	// reset user array 
	purchase_list = new Array(); 	
	}
	
}


var checksales = function() {
	alert("Total sales: " + sales); 

}

var addfav = function() {
	var name = prompt("What is the item's name?"); 
	var i = search(name); 
	if (i === -1) 
	{
		alert("Item not found"); 
	}
	else
	{ 
		var index = prompt("Which favorite button number? 1-10"); 
		if (index<= 10 && index >=1) 
		{

			//updating button 
			document.getElementById(index).innerHTML = name;	
			// add item to purchase list 
			fav_list[index] = inventory[i].name ; 

		}
		else
		{
			alert("invalid index"); 
		}
	}
	
}

var sellfav = function (a) {
		if (fav_list[a] !== null) 
		{			
			var amount = prompt("Quantity that you're selling?");
			var i = search(fav_list[a]); 
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
		else
		{
			alert("has not been added to favorites"); 
		}

}


var print_all = function() {
	for (var i = 0 ; i < inventory.length; i++) 
	{
		alert(inventory[i].name+":  "+ inventory[i].quan +"@" + inventory[i].price);
	}
}

