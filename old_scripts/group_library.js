// Title: group_duplication
// Type: Trigger
// Event: Creating an entry
// Phase: Before saving an entry
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