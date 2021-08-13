const fs = require('fs')
const path = require('path')
const { getData } = require('./getData')

module.exports = {
  writeData
}

function writeData (input) {
  getData(data => {
    const newData = data + input
    try {
      const filepath = path.join(__dirname, 'data.json')
      const stringData = JSON.stringify(newData, null, 2)
      fs.writeFile(filepath, stringData, 'utf8', (err) => {
        if (err) {
          console.error(err.message)
        }
      })
    } catch (stringifyErr) {
      console.error('stringify error', stringifyErr.message)
    }
  })
}
