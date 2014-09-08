
// gridfs image store
var imageStore = new FS.Store.GridFS("images", {
	// mongoUrl: 'mongodb://127.0.0.1:27017/test/', // optional, defaults to Meteor's local MongoDB
	// mongoOptions: {...},  // optional, see note below
	// transformWrite: myTransformWriteFunction, //optional
	// transformRead: myTransformReadFunction, //optional
	// maxTries: 1, // optional, default 5
	// chunkSize: 1024*1024  // optional, default GridFS chunk size in bytes (can be overridden per file).
                        // Default: 2MB. Reasonable range: 512KB - 4MB
});

// //filesystem image store
// var imageStore = new FS.Store.FileSystem("images", {
// 	path: "~/uploads"
// });

Images = new FS.Collection("images", {
	stores: [imageStore]
});

Images.allow({
	insert: function () {
    	return true; 
 	},
	update: function () {
    	return true; 
 	},
 	download: function() {
      return true;
    }
});