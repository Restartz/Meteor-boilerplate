Messages = new Meteor.Collection('Messages');

Meteor.methods({
	insertMessage: function (message) {

		// add a timestamp.
		message.created = Date.now();

		Messages.insert(message);
	},
	getCount: function () {
		return Messages.find().count();
	}
});