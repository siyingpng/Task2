// coffeeshopController.js

// Import coffeeshop model
const Coffeeshop = require('./coffeeshopModel');

// Handle index actions
exports.index = async (req, res) => {
    try {
        const coffeeshopList = await Coffeeshop.find();
        res.json({
            status: 'success',
            message: 'Coffeeshop list retrieved successfully',
            data: coffeeshopList
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
};

// Handle create coffeeshop actions
exports.new = async (req, res) => {
    try {
        const coffeeshop = new Coffeeshop({
            shopName: req.body.shopName,
            shopAddress: req.body.shopAddress,
            shopTel: req.body.shopTel,
            shopInstagram: req.body.shopInstagram
        });
        const savedCoffeeshop = await coffeeshop.save();
        res.json({
            message: 'New coffeeshop record created!',
            data: savedCoffeeshop
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
};

// Handle view coffeeshop info
exports.view = async (req, res) => {
    try {
        const coffeeshop = await Coffeeshop.findById(req.params.coffeeshop_id);
        res.json({
            message: 'Coffeeshop details loading..',
            data: coffeeshop
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
};

// Handle update coffeeshop info
exports.update = async (req, res) => {
    try {
        const coffeeshop = await Coffeeshop.findById(req.params.coffeeshop_id);
        coffeeshop.shopName = req.body.shopName;
        coffeeshop.shopAddress = req.body.shopAddress;
        coffeeshop.shopTel = req.body.shopTel;
        coffeeshop.shopInstagram = req.body.shopInstagram;
        const savedCoffeeshop = await coffeeshop.save();
        res.json({
            message: 'Coffeeshop record updated',
            data: savedCoffeeshop
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
};

// Handle delete coffeeshop
exports.delete = async (req, res) => {
    try {
        const deletedCoffeeshop = await Coffeeshop.deleteOne({ _id: req.params.coffeeshop_id });
        res.json({
            status: 'success',
            message: 'Coffeeshop record deleted',
            data: deletedCoffeeshop
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: null
        });
    }
};