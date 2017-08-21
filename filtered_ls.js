const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], (err, results) => {
  if(err) {
    console.log(err)
  }
  results.forEach(result => {
    if(path.extname(result) === '.' + process.argv[3]) {
      console.log(result)
    }
  })
})
