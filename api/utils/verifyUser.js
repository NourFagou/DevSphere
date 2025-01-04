import jwt from 'jsonwebtoken';
import { errorHandler } from './errorHandler.js';

export const verifyToken = async (req, res, next) => {
  // Get token from cookies
  const token = req.cookies.access_token;

  // Check if token exists
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(403, 'Unauthorized'));
    }
    // Set user in request object
    req.user = user;
    // Call next middleware
    next();
  });
};
