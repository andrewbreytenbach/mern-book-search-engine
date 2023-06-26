# MERN Book Search Engine

## About the Project
The MERN Book Search Engine is a full-stack web application that allows users to search for books and save their favorite books to their account. It utilizes the MERN stack (MongoDB, Express.js, React, and Node.js) to provide a seamless and efficient user experience.

## Features
The MERN Book Search Engine offers the following key features:

* User Authentication: Users can sign up and log in to their accounts to access personalized features.
* Book Search: Users can search for books using keywords and view search results with book details, including title, author, description, image, and a link to the Google Books site.
* Book Saving: Logged-in users can save their favorite books to their account for future reference.
* Book Removal: Users can remove saved books from their account if they no longer wish to keep them.
* Responsive Design: The application is designed to be responsive, ensuring optimal viewing on various devices and screen sizes.

## Getting Started
To run the MERN Book Search Engine on your local machine, follow these steps:

1. Clone the repository: git clone https://github.com/andrewbreytenbach/mern-book-search-engine
2. Navigate to the project directory: cd mern-book-search-engine
3. Install the necessary dependencies:
4. Backend: Run npm install in the root directory.
5. Frontend: Change to the client directory (cd client) and run npm install.
6. Set up the environment variables: Create a .env file in the root directory.
7. Define the following environment variables in the .env file:
MONGODB_URI: Connection string for your MongoDB database.
JWT_SECRET: Secret key for JWT token generation.
8. Start the application:
Backend: In the root directory, run npm start or npm run start:dev to start the server.
Frontend: In the client directory, run npm start to start the React development server.
9. Open your web browser and access the application at http://localhost:3000.

## Usage
Once the MERN Book Search Engine is running, you can use the following steps to explore its functionality:

* Home Page: The home page displays a search bar where you can enter keywords to search for books.

![](/search.png)

* Search Results: After entering a search query and clicking the search button, the application will fetch search results from the Google Books API and display them on the page. Each search result will include the book's title, author(s), description, image, and a link to the Google Books site.

![](/searchresults.png)

* User Authentication:

* Sign Up: Click on the "Sign Up" link in the navigation bar to create a new account. Fill in the required information (username, email, password) and submit the form.
* Log In: Click on the "Log In" link in the navigation bar to log in to an existing account. Enter your email and password and submit the form.

* Saving Books: When logged in, each search result will have a "Save" button. Clicking this button will save the book to your account.

* Viewing Saved Books: After saving books, you can access your saved books by clicking on the "Saved Books" link in the navigation bar. This page will display all the books you have saved, including their details and a button to remove a book from your saved list.

* Log Out: To log out of your account, click on the "Log Out" link in the navigation bar.

## Contact
If you have any questions or would like to learn more about this project, feel free to reach out through the following channels:

* GitHub: https://github.com/andrewbreytenbach/mern-book-search-engine
* View the finished application here: https://mern-booksearch-engine-21.herokuapp.com/

## Acknowledgments
The MERN Book Search Engine utilizes the following technologies:

* MongoDB: A NoSQL database for storing user data and saved books.
* Express.js: A web application framework for building the backend server.
* React: A JavaScript library for building the user interface.
* Node.js: A JavaScript runtime environment for executing server-side code.
* GraphQL: A query language and runtime for APIs used for efficient data fetching.
* Apollo Server: An open-source GraphQL server for integrating GraphQL with the backend.
* Axios: A promise-based HTTP client for making API requests.
* bcrypt: A library for hashing user passwords for secure storage.
* JSON Web Tokens (JWT): A method for securely transmitting information between parties as a JSON object.
* HTML5: The markup language for structuring and presenting content on the web.
* CSS3: The style sheet language for designing the application's visual presentation.
* JavaScript: The programming language used for client-side and server-side logic.
* Git: A version control system for tracking changes in the source code.
* GitHub: A web-based hosting service for version control and collaboration.
* Heroku: A cloud platform for deploying and hosting the application.
* [https://github.com/coding-boot-camp/solid-broccoli] Starter Code
