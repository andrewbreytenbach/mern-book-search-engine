const { User, Book } = require('../models');

const userResolvers = {
  me: async (parent, args, context) => {
    // Add your authentication logic here
    // Example: Check if the user is authenticated using context

    // Retrieve the currently logged-in user
    const currentUser = await User.findOne({ /* Your query to find the user */ });

    return currentUser;
  },
  login: async (parent, { email, password }) => {
    // Implement your login logic here
    // Example: Authenticate the user and generate a token

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Compare password and generate token
    // ...

    return {
      token: 'your_token',
      user,
    };
  },
  addUser: async (parent, { username, email, password }) => {
    // Implement your logic to create a new user
    // Example: Create a new user with the provided data

    const user = await User.create({ username, email, password });

    return {
      token: 'your_token',
      user,
    };
  },
  saveBook: async (parent, { bookInput }, context) => {
    // Add your authentication logic here
    // Example: Check if the user is authenticated using context

    const currentUser = await User.findOne({ /* Your query to find the user */ });

    // Create a new book using the bookInput and save it to the database
    const newBook = await Book.create(bookInput);

    // Update the current user's savedBooks array
    currentUser.savedBooks.push(newBook);
    currentUser.bookCount += 1;
    await currentUser.save();

    return currentUser;
  },
  removeBook: async (parent, { bookId }, context) => {
    // Add your authentication logic here
    
    // Example: Check if the user is authenticated using context

    const currentUser = await User.findOne({ /* Your query to find the user */ });

    // Remove the book from the currentUser's savedBooks array based on bookId
    currentUser.savedBooks = currentUser.savedBooks.filter(
      (book) => book.bookId !== bookId
    );
    currentUser.bookCount -= 1;
    await currentUser.save();

    return currentUser;
  },
};

module.exports = userResolvers;
