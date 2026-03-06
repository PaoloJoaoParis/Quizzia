import Timer from "@/components/custom/timer";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { questionsData } from "@/data/dataQuestions";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function QuizPage() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const question = questionsData[currentQuestion];

  function handleNext() {
    // On fige la question courante avant tout changement de state
    const currentQ = questionsData[currentQuestion];
    
    // Forcer les deux en string pour éviter les problèmes de type
    const isCorrect = String(selected) === String(currentQ.correctOptionId);

    console.log("Sélectionné :", selected, "| Correct :", currentQ.correctId, "| Match :", isCorrect);

    const newScore = isCorrect ? score + 1 : score;
    const newAnswers = [...answers, { questionId: currentQ.id, selected, isCorrect }];

    setScore(newScore);
    setAnswers(newAnswers);

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  }

  // --- Écran de résultats ---
  if (showResult) {
    return (
      <main className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-screen px-6 gap-6">

        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">Résultats</h1>
          <p className="text-zinc-500 text-sm">Questionnaire terminé</p>
        </div>

        {/* Score global */}
        <Card className="w-full p-6 text-center rounded-xl border border-zinc-200">
          <p className="text-5xl font-bold mb-1">{score}/{questionsData.length}</p>
          <p className="text-zinc-500 text-sm">bonnes réponses</p>
        </Card>

        {/* Détail par question */}
        <div className="w-full flex flex-col gap-3">
          {answers.map((ans, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm
                ${ans.isCorrect
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-600"
                }`}
            >
              <span>Question {i + 1}</span>
              <span>{ans.isCorrect ? "Correct" : "Incorrect"}</span>
            </div>
          ))}
        </div>

        <Link to="/home" className="w-full">
          <Button className="w-full">
            Retour à l'accueil
          </Button>
        </Link>

      </main>
    );
  }

  // --- Écran de quiz ---
  return (
    <main className="quiz-container max-w-xl mx-auto">

      <div className="flex justify-between items-center p-6">
        <h1 className="text-xl font-semibold">
          Question {currentQuestion + 1} / {questionsData.length}
        </h1>
        <Timer />
      </div>

      <div className="px-6 mb-6">
        <p className="text-lg font-medium">{question.text}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-6">
        {question.options.map((option) => (
          <Button
            key={option.id}
            variant="ghost"
            className="p-0 h-auto w-full"
            onClick={() => setSelected(option.id)}
          >
            <Card
              className={`w-full h-32 flex items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer
                ${selected === option.id
                  ? "shadow-lg scale-[1.02] border-zinc-400 bg-zinc-50"
                  : "border-zinc-200 hover:shadow-lg hover:scale-[1.02] hover:border-zinc-400 hover:bg-zinc-50"
                }`}
            >
              <CardTitle className="text-base text-center px-4">
                {option.text}
              </CardTitle>
            </Card>
          </Button>
        ))}
      </div>

      <div className="p-6">
        <Button
          className="w-full"
          disabled={!selected}
          onClick={handleNext}
        >
          Suivant
        </Button>
      </div>

    </main>
  );
}