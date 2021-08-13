const express = require('express')

const router = express.Router()
const { getData } = require('./getData')
const { writeData } = require('./writeData')

router.use(express.urlencoded({ extended: false }))

module.exports = router
/// data functions to get data and update data ////

// get data for the pages //

// update data for the pages //

/// route///

router.get('/bad', (req, res) => {
  const data = getData(cb)
  const viewData = data
  res.render('bad', viewData)
})

router.get('/good', (req,res) => {
  const data = getData(cb)
  const viewData 
})

// router.post('/ok', (req, res) => {
//   res.redirect('/ok')
// })

// router.post('/bad', (req, res) => {
//   res.redirect('/bad')
// })
