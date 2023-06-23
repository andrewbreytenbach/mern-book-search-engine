const { User, Book } = require('./models');

const resolvers = {
  Query: {
    me: async () => {
      // Implement the logic to fetch the currently authenticated user
      // Example: Return a mock user
      return {
        _id: 'user_id',
        username: 'example_user',
        email: 'example@example.com',
        bookCount: 3,
        savedBooks: [
          {
            bookId: 'book1_id',
            authors: ['Author 1'],
            description: 'Book 1 description',
            title: 'Book 1',
            image: 'book1_image.jpg',
            link: 'book1_link',
          },
          {
            bookId: 'book2_id',
            authors: ['Author 2'],
            description: 'Book 2 description',
            title: 'Book 2',
            image: 'book2_image.jpg',
            link: 'book2_link',
          },
        ],
      };
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      // Implement the logic for user authentication and token generation
      // Example: Authenticate the user and return a mock token
      const token = 'your_token';
      
      // Retrieve the user based on email (you can use any logic here, like a database query)
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      return {
        token,
        user,
      };
    },
    addUser: async (parent, { username, email, password }) => {
      // Implement the logic to create a new user
      // Example: Create a new user and return a mock token
      const token = 'your_token';

      const user = await User.create({ username, email, password });

      return {
        token,
        user,
      };
    },
    saveBook: async (parent, { bookInput }) => {
      // Implement the logic to save a book to a user's collection
      // Example: Assume the user is authenticated and add the book to their savedBooks
      const currentUser = await User.findOne({ _id: 'user_id' });

      const newBook = await Book.create(bookInput);

      currentUser.savedBooks.push(newBook);
      currentUser.bookCount += 1;
      await currentUser.save();

      return currentUser;
    },
    removeBook: async (parent, { bookId }) => {
      // Implement the logic to remove a book from a user's collection
      // Example: Assume the user is authenticated and remove the book from their savedBooks
      const currentUser = await User.findOne({ _id: 'user_id' });

      currentUser.savedBooks = currentUser.savedBooks.filter(
        (book) => book.bookId !== bookId
      );
      currentUser.bookCount -= 1;
      await currentUser.save();

      return currentUser;
    },
  },
};

module.exports = resolvers;
