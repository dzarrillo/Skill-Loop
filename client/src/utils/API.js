import axios from "axios";

export default {
  // Gets all skills
  getSkills: function() {
    return axios.get("/api/SkillSet");
  },
  // Gets the skills with the given id
  getSkills: function(id) {
    return axios.get("/api/SkillSet/" + id);
  },
  // Deletes the skills with the given id
  deleteSkills: function(id) {
    return axios.delete("/api/SkillSet/" + id);
  },
  // Saves a skills to the database
  saveSkills: function(bookData) {
    return axios.post("/api/SkillSet", bookData);
  }
};