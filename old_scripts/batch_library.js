// Title: set_pallet_batch
// Type: Trigger
// Event: Creating an entry
// Phase: After saving an entry
var s = entry().field("species");

var palEntries = libByName("Pallet").entries(); 
var pal = entry().field("pallet");

pal_intid = [];

for (var i = 0; i < pal.length; i++) {
	pal_intid.push(pal[i].field("internal_id"));	
}

for (var ent = 0; ent < palEntries.length; ent++) {
	if (pal_intid.indexOf(palEntries[ent].field("internal_id")) != -1) {
		palEntries[ent].set("species",s);
    }}
    
// Title: set_pallet_batch
// Type: Trigger
// Event: Updating an entry
// Phase: Before saving the entry
var s = entry().field("species");

var palEntries = libByName("Pallet").entries(); 
var pal = entry().field("pallet");

pal_intid = [];

for (var i = 0; i < pal.length; i++) {
	pal_intid.push(pal[i].field("internal_id"));	
}

for (var ent = 0; ent < palEntries.length; ent++) {
	if (pal_intid.indexOf(palEntries[ent].field("internal_id")) != -1) {
		palEntries[ent].set("species",s);
	}}