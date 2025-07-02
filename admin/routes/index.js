var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET photos page. */
 router.get('/photos', async function(req, res, next) {
 const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json'
 const config = {
 proxy: {
 host: 'localhost',
 port: 4444
 }
 }
 const response = await axios.get(URL) 
 res.render('fotos', { title: 'Fotos', fotos: response.data });
 })


 module.exports = router;