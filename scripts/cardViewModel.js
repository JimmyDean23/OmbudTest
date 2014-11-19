function cardViewModel() {
	this.firstName = ko.observable("Bob");	
}

ko.applyBindings(new cardViewModel());