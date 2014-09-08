
Template.home.events({
	'click #addMessage': function () {
		var message = {
			text: "NEW MESSAGE " + Date.now()
		}
		
		Meteor.call('insertMessage', message, function (error, result) {});
	}
});