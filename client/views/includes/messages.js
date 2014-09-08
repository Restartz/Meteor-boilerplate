var LIMIT = 20;

Meteor.call('getCount', function (error, result) {
	Session.set('count', result)
});


Template.messages.messages = function () {
	return Messages.find({}, {sort: {created: -1}});
};

Template.messages.events({
	'click #moreResults': function (e) {
		LIMIT += 20;
		Meteor.subscribe('messages', LIMIT);

		// disable the more results button if there are no more.
		if (LIMIT >= Session.get('count')) {
			$(e.target).hide();
		}
	}
});