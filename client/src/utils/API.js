import axios from "axios";

export default {
  // Gets all books
  getSkills: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getSkills: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteSkills: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveSkills: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
