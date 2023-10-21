const router = require('express').Router();
const {getAllProducts} = require('../controllers/productsController');

router.get('/',getAllProducts);


module.exports = router;