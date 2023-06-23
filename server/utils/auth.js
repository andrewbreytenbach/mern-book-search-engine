const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Middleware function for authentication
  authMiddleware: function (context) {
    const { req } = context;
    let token = req.headers.authorization || '';

    if (token.startsWith('Bearer ')) {
      // Remove 'Bearer ' from the token
      token = token.substring(7, token.length);
    }

    if (!token) {
      // If no token is present, throw an error
      throw new Error('You have no token!');
    }

    try {
      // Verify the token and extract the user data
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      context.user = data;
    } catch {
      console.log('Invalid token');
      throw new Error('Invalid token!');
    }
  },

  // Function to sign a JWT token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    
    // Create a new JWT token with the payload, secret, and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
