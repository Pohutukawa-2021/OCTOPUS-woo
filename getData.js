const fs = require('fs')
const path = require('path')

module.exports = {
  getData
}

function getData (cb) {
  const filepath = path.join(__dirname, 'data.json')
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error('file not found: ', err.message)
      return
    }
    try {
      const tips = JSON.parse(data)
      cb(tips)
    } catch (parseErr) {
      console.error('file not parsing correctly', parseErr.message)
    }
  })
}
