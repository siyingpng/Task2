// api-routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import coffeeshop controller
var coffeeshopController = require('./coffeeshopController');

// Coffeeshop routes
router.route('/coffeeshop')
    .get(coffeeshopController.index)
    .post(coffeeshopController.new);
router.route('/coffeeshop/:coffeeshop_id')
    .get(coffeeshopController.view)
    .patch(coffeeshopController.update)
    .delete(coffeeshopController.delete);
    
// Export API routes
module.exports = router;