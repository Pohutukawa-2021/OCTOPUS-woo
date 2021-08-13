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
  getData(data => {
    const viewData = data
    res.render('good', viewData)
  })
})

router.get('/good', (req, res) => {
  getData(data => {
    const viewData = data
    res.render('good', viewData)
  })
})

router.post('/good', (req, res) => {
  const input = req.body.comments
  writeData(input)
  res.redirect('/bad')
})

router.get('/okay.html', (req, res) => {
  getData(data => {
    const viewData = data
    res.render('okay.html', viewData)
  })
})

// router.post('/ok', (req, res) => {
//   res.redirect('/ok')
// })

// router.post('/bad', (req, res) => {
//   res.redirect('/bad')
// })
