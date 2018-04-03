import axios from "axios";

export default {
  // Gets all books
 
  // Saves a book to the database
  saveHistory: function(HistoryData) {
    return axios.post("/api/history", HistoryData);
  }
};
