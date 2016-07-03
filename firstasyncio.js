var fs = require('fs')

fs.readFile(process.argv[2], function countLines(err, lineBuf){
	if (!err){

		console.log(lineBuf.toString().split('\n').length -1);
	}
})