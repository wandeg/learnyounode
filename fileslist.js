var fs = require('fs');
var path = process.argv[2]
var extension = process.argv[3]
fs.readdir(path, function fetch(err, list){
	if (!err){
		var files = list.filter(function m(fname){
			return fname.endsWith('.'+extension)
		})

		files.forEach(function n(fil){
			console.log(fil);
		})
		
	}
	
})

// Alternative

// fs.readdir(path, function(err,files){
// 	if(err) return console.error(err);
// 	files.forEach( function(file) {
// 		if (path.extname(file) === ext){
// 			console.log(file);
// 		}
// 	});
// })