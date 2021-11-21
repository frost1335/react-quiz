import axios from "axios";

export default axios.create({
  baseURL: "https://react-quiz-c175e-default-rtdb.firebaseio.com/",
});
