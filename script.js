$('document').ready(function(){
	$("#total-calculate").click(function(){
		var subtotal = $('#sub-total').val();
		var total = subtotal * 1.2;
		$('#total-amount').html("$" + total);
		$('#sub-total').val('');
	});
});
var waitlist = [];
var waiting = {};

window.new_party_joined = function(person) {
	waitlist.unshift(person);
	if(person in waiting){
		return;
	} else{
		waiting[person] = person;
		$('.list-group').append("<li class='list-group-item' id ='" + person + "''>" + person + "</li>");
	}
}

window.assign_to_table = function() {
	var name = waitlist.pop();
	console.log("assign to table called", name);
	$('#' + name).remove()
}