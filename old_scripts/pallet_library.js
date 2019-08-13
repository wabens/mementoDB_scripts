// Title: data_validation_create
// Type: Trigger
// Event: Creating an entry
// Phase: Before saving an entry
var entries = lib().entries();   
var palGp = entry().field("group");
var palNum = entry().field("pallet_num");
                              
for (var ent = 0; ent < entries.length; ent++) {   
    if (entries[ent].field("group") === palGp && entries[ent].field("pallet_num") === palNum) {
	message("Pallet is not unique.  Please try again.");
	cancel();}
}

// Title: generate_internal_id
// Type: Trigger
// Event: Creating an entry
// Phase: Before saving an entry
// Note: There were two identical copies, both enabled...
var entries = lib().entries();   

function checkNum() {
    var randNum = Math.floor(Math.random() * 90000)+10000;
    for (var ent = 0; ent < entries.length; ent++) {   
    	if (entries[ent].field("internal_id") === randNum) {
		checkNum();
		}}
    entry().set("internal_id",randNum);}

checkNum();

// Title: mark_as_inactive
// Type: Trigger
// Event: Opening a library
// Phase: Before window display

var entries = lib().entries();   

for (var ent = 0; ent < entries.length; ent++) {  
    var palGp = entries[ent].field("group"); 
    if (entries[ent].field("active") === false && palGp.indexOf("i")===-1) {
	var newGp = palGp.concat("i");
	entries[ent].set("group",newGp);}
}