function cardViewModel() {
	this.firstName = ko.observable("Bob");
	this.lastName = ko.observable("Smith");
	this.emailAddress = ko.observable("example@gmail.com");
	this.phoneNumber = ko.observable("555-1234");
	this.photo = ko.observable("");
	this.headline = ko.observable("Headline");
	this.currentPosition = ko.observable("Engineer");
}

ko.applyBindings(new cardViewModel());