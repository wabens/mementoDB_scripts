// Title: clear_active_pallets_create
// Type: Trigger
// Event: Creating an entry
// Phase: Before saving an entry
var pallet = entry().field("pallet");
var palletEntries = libByName("Pallet").entries(); 

//getting current dateTime
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

for (var ent = 0; ent < palletEntries.length; ent++) {   
     for (var ant = 0; ant < pallet.length; ant++) {
	if(palletEntries[ent].field("internal_id") === pallet[ant].field("internal_id")) {
		palletEntries[ent].set("active",false);
		palletEntries[ent].set("cart_transfer",dateTime);
     }}
}


// Title: clear_active_pallets_update
// Type: Trigger
// Event: Updating an entry
// Phase: Before saving an entry
var pallet = entry().field("pallet");
var palletEntries = libByName("Pallet").entries(); 

//getting current dateTime
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

for (var ent = 0; ent < palletEntries.length; ent++) {   
     for (var ant = 0; ant < pallet.length; ant++) {
	if(palletEntries[ent].field("internal_id") === pallet[ant].field("internal_id")) {
		palletEntries[ent].set("active",false);
		palletEntries[ent].set("cart_transfer",dateTime);
     }}
}


// Title: deactivate_composted_carts
// Type: Trigger
// Event: Updating an entry
// Phase: After saving an entry
var compost = entry().field("compost date");
var entries = lib().entries();  
for (var ent = 0; ent < entries.length; ent++) {   
     if(compost != null){
	entries[ent].set("Active Status",false);}
}


// Title: set_current_date
// Type: Trigger
// Event: Updating an entry
// Phase: Before saving the entry
var entries = lib().entries(); 
var m = moment()
//entryDefault().set("currentd",m.toDate().getTime()); 
for (var ent = 0; ent < entries.length; ent++) {   
    entries[ent].set("currentd",m.toDate().getTime()); }
    

// Title: set_cart_species
// Type: Trigger
// Event: Updating an entry
// Phase: After saving the entry
var palEntries = libByName("Pallet").entries(); 
var pal = entry().field("pallet");

pal_intid = [];

for (var i = 0; i < pal.length; i++) {
	pal_intid.push(pal[i].field("internal_id"));	
}

for (var ent = 0; ent < palEntries.length; ent++) {
	if (pal_intid.indexOf(palEntries[ent].field("internal_id")) != -1) {
		entry().set("species",palEntries[ent].field("species"));
	}}

 