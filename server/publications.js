Meteor.publish('messages', function(limit) {
	return Messages.find({}, {sort: {created: -1}, limit: limit || 20});
});

Meteor.publish('images', function() {
	return Images.find({});
});