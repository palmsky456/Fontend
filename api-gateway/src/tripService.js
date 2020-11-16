const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:9000'
const api = apiAdapter(BASE_URL)

router.get('/trips', (req, res) => {
  let queryParam = {};

  if(req.query.keyword){
    queryParam = {params:{
      q:req.query.keyword
    }}
  }

  api.get(req.path,queryParam).then(resp => {
    return res.send(resp.data)
  })
})


module.exports = router