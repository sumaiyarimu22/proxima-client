# Proxima

Proxima is a powerful project management app built using the MERN stack. With Orbit Council, users can create, update, and delete their own projects with ease. The app is highly secure, featuring robust JWT authentication and frontend route protection. In addition, the app boasts a sleek and intuitive user interface, built using Tailwind CSS.

## Features

- Create, update, and delete projects
- Robust JWT authentication and frontend route protection
- Sleek and intuitive user interface built using Tailwind CSS

## Tools Used

Technologies used in Proxima:
- MongoDB: A highly flexible NoSQL database, ideal for managing large and complex data sets.
- Express: A popular and highly flexible backend web application framework for Node.js.
- React: A powerful and popular frontend JavaScript library, ideal for building user interfaces.
- Node.js: A powerful and popular server-side JavaScript runtime environment.
- Tailwind CSS: A highly customizable CSS framework, designed to make building sleek and intuitive user interfaces a breeze.


## Installation

# Clone the client repository
git clone https://github.com/sumaiyarimu22/proxima-client.git

# Clone the server repository
git clone https://github.com/sumaiyarimu22/proxima-server.git

# Install dependencies for both client and server
cd proxima-client
npm install
cd ../proxima-server
npm install

# Create .env file for server
cd ..
touch .env
echo "MONGO_URI=your_MongoDB_connection_string" >> .env
echo "SECRET=your_secret_string_for_JWT_authentication" >> .env

# Create .env file for client
cd proxima-client
touch .env
echo "REACT_APP_BASE_URL=http://localhost:5000" >> .env

# Start the backend server
cd ../proxima-server
npm start

# Start the frontend
cd ../proxima-client
npm start



## Links

- [Live Demo](https://proxima-prooo.netlify.app)
- front-end - https://github.com/sumaiyarimu22/proxima-client.git
- Back-end - https://github.com/sumaiyarimu22/proxima-server.git
