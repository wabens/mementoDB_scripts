// Title: group_duplication
// Type: Trigger
// Event: Creating an entry
// Phase: Before saving an entry
// Sets any empty group fields in the pallet library to the group letter of the current saved entry
// Seems dangerous and unecessary looping. Also i've never seen the success message so I doubt it works.
var e = entry();
var g = e.field("group");

var pc = libByName("pallet").entries(); 

for (var ent = 0; ent < pc.length; ent++) {
	if (pc[ent].field("group")=== "") {
		pc[ent].set("group",g);
		message("success");} 	
}

// Title: group_duplication_update
// Type: Trigger
// Event: Updating an entry
// Phase: Before saving the entry
var e = entry();
var g = e.field("group");

var pc = libByName("pallet").entries(); 

for (var ent = 0; ent < pc.length; ent++) {
	if (pc[ent].field("group")=== "") {
		pc[ent].set("group",g);
		message("success");} 
		
}