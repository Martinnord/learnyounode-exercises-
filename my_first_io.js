var fs = require('fs')

var results = fs.readFileSync(process.argv[2])
var lines = results.toString().split('\n').length - 1

console.log(lines)
