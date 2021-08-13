const fs = require('fs')
const path = require('path')
const { getData } = require('./getData')
module.exports = {
  writeData
}

function writeData (input) {
  getData(data => {
    const Data = {
      ...data
    }
    Data.comments.push(input)
    try {
      const filepath = path.join(__dirname, 'data.json')
      const stringData = JSON.stringify(Data, null, 2)
      console.log(stringData)
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
