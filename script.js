$('document').ready(function(){
	//Code goes here
});
var waitlist = [];
var waiting = {};

window.new_party_joined = function(person) {	
	if(person in waiting){
		return;
	} else{
		waiting[person] = person;
		$('.list-group').append("<li class='list-group-item' id ='" + person + "''>" + person + "</li>");
	}
	//Code goes below here
}

window.assign_to_table = function() {
	//Code goes here
}