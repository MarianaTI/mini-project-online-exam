import axios from "axios";
import IQuizRepo from "@/domain/repositories/IQuizRepo";

class QuizRepo extends IQuizRepo {
  constructor() {
    super();
    this.url = "https://api-quizz-online.onrender.com/api/quiz/consultar";
  }

  async getAll() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch (error) {
      console.error("Error fetching el quiz:", error.message);
      throw error;
    }
  }
}

export default QuizRepo;