if (Messages.find().count() === 0) {
	
	var timestamp = Date.now();
	
	// add dummy messages.
	for (var i = 1; i <= 1000; i++) {

		var message = {
			text: "dummy message " + i,
			created: timestamp
		}

		Messages.insert(message);
		timestamp++; // ensure unique timestamp.
	};
}