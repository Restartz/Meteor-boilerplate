Template.upload.images = function(){
  	return Images.find({});
};


Template.upload.events({
	'change #fileinput': function(event) {
    	FS.Utility.eachFile(event, function(file) {

    		// add a title to the file.
			var customFile = new FS.File(file);
      		customFile.metadata = {title: "custom title for " + file.name, category: null};

      		// insert the customized file.
    		Images.insert(customFile);
    	});
  	},
  	'change .desc': function (e) {
  		var newTitle = e.target.value;

  		// update the file with the new title.
  		this.update({$set: {'metadata.title': newTitle}});
  	}
});