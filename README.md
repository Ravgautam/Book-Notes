# Book Notes Website

## Overview
This is a full-stack Book Notes web application where users can add notes about books they have read. Users can input the book title, write their notes, rate the book, and view their notes. The backend is powered by Node.js and Express, with PostgreSQL as the database.

## Features
- Add book title, notes, and rating.
- Fetch book cover images using a public API.
- Store and retrieve book notes from a PostgreSQL database.
- Display book notes in a list.
- Responsive and user-friendly UI with EJS templating.

## Technologies Used
### Frontend:
- HTML (EJS templates)
- CSS
- JavaScript

### Backend:
- Node.js
- Express.js
- PostgreSQL

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- PostgreSQL
- Git

### Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/book-notes.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd book-notes
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Set up the PostgreSQL database:**
   - Create a PostgreSQL database named `book_notes`.
   - Configure the database credentials 

5. **Start the server:**
   ```sh
   npm start
   ```
6. **Open the app in your browser:**
   ```
   http://localhost:3000
   ```

## File Structure
```
/book-notes
│── views/
│   ├── index.ejs         # Main EJS template for the frontend
│── public/
│   ├── main.css        # CSS for styling the page
│── index.js                # Main Express server file
│── package.json          # Project dependencies and scripts
```

## Usage
1. **Enter the book title and notes.**
2. **Select a rating from the dropdown menu.**
3. **Click the "Add Note" button to save the note.**
4. **Notes will be stored in PostgreSQL and displayed dynamically.**

## API Endpoints
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | /             | Load homepage       |
| GET    | /books        | Fetch all book notes |
| POST   | /books        | Add a new book note  |
| DELETE | /books/:id    | Delete a book note   |

## Contributing
Feel free to submit issues and pull requests for improvements!


