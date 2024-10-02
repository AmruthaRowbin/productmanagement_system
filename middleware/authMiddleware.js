const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // Check if token is provided in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password'); // Exclude password

      next(); // Pass the request to the next middleware/controller
    } catch (error) {
      console.error('Authorization error:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token provided
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};
