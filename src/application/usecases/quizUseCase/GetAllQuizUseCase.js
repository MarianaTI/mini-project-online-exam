import IQuizRepo from "@/domain/repositories/IQuizRepo";

class GetAllQuizUseCase {
  constructor(quizRepo) {
    if (!(quizRepo instanceof IQuizRepo))
      throw new Error("QuizRepo must be instance of IQuizRepo");
    this.quizRepo = quizRepo;
  }

  async run() {
    const getQuiz = await this.quizRepo.getAll();
    return getQuiz;
  }
}

export default GetAllQuizUseCase;