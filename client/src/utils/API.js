

  import axios from "axios";

export default {
  // Get Resume
  getResume: function() {
    return axios.get("/api/resume");
  },
  // Gets the skills 
  getSkills: function() {

    return axios.get("/api/skillSet");
  }
};
