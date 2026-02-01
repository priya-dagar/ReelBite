const userModel = require('../models/user.model');

async function registerUser(req, res) {
    
    const { fullName, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email: email });

    if (isUserExists) {
        return res.status(400).json({
             message: 'User already exists' 
            });
    }
}