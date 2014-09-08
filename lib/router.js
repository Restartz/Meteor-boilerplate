Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'loading',
 	notFoundTemplate: '404'
});

Router.map(function() {
	this.route('home', { 
		path: '/',
		waitOn: function() {
			return [Meteor.subscribe('messages')];
		} 
	});
	this.route('upload', {
		waitOn: function() {
			return [Meteor.subscribe('images')];
		}
	});
});