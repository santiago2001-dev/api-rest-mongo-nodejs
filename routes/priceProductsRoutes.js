const router = require('express').Router();
const {getProductsByPrice} = require('../controllers/priceProductController');

router.get('/',getProductsByPrice);

module.exports = router;