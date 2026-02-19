## Project Structure Explained

### client

Frontend of the application built using React.

- `src/` -> Contains all React source files
- `components/` -> Reusable UI components
- `pages/` -> Application pages
- `main.jsx` -> Entry point of frontend


### server 

Backend of the application built using Node.js & Express.

- `routes/` -> Contains API route files
- `models/` -> MongoDB schemas using Mongoose
- `config/` -> Database connection setup
- `server.js` -> Entry point of backend / Main backend file
- `controllers` -> Recieves Requests , Validate data  ,Call the  model , Sends the request

### Database 

This project uses **MongoDB (Local)** as the database.

- Database is managed using MongoDB Compass.
- Data is stored in collections.
- Each record is stored as a document in JSON format.
- Mongoose is used to define schemas and interact with MongoDB.

### Collections Used

- `users` → Stores authentication data (name, email, password)
- `customers` → Stores customer details

### Connection String (Local)

```env
MONGODB_URI=mongodb://localhost:27017/authenticationDB