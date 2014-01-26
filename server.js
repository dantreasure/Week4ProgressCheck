var fake_names = ['Frank', 'Alice', 'Bob', 'Sarah', 'Morgan', 'Melissa', 'Tanner', 'Becca', 'Logan'];
function randName() {
     return fake_names[Math.round(Math.random()*(fake_names.length-1))];
}
function randTime() {
     return Math.round((Math.random()*5000)+100);
}
function tick() {
	var name = randName();	
    window.new_party_joined(name);
    setTimeout(tick, randTime());
}
tick();
setInterval(window.assign_to_table, 10000);
