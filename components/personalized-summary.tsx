"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Briefcase } from "lucide-react"

type QuizAnswer = {
  question: string
  answer: string
}

const getAnswerLabel = (answer: string): string => {
  const labels: Record<string, string> = {
    // Question 2
    support: "Atendimento ao Cliente",
    admin: "Administrativo",
    marketing: "Marketing Digital",
    sales: "Vendas",
    tech: "Tecnologia",
    other: "Outra área",
    // Question 3
    "part-time": "Meio período",
    "full-time": "Tempo integral",
    flexible: "Horário flexível",
    // Question 5
    intermediate: "Inglês intermediário",
    basic: "Inglês básico",
    none: "Sem inglês",
  }
  return labels[answer] || answer
}

export function PersonalizedSummary() {
  const [userName, setUserName] = useState<string>("")
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([])

  useEffect(() => {
    console.log("[v0] PersonalizedSummary mounted")

    const name = localStorage.getItem("userName") || ""
    console.log("[v0] userName from localStorage:", name)
    setUserName(name)

    const answersJson = localStorage.getItem("quizAnswers")
    console.log("[v0] quizAnswers from localStorage:", answersJson)

    if (answersJson) {
      try {
        const answers = JSON.parse(answersJson)
        console.log("[v0] Parsed quiz answers:", answers)
        setQuizAnswers(answers)
      } catch (e) {
        console.error("[v0] Error parsing quiz answers:", e)
      }
    }
  }, [])

  console.log("[v0] Rendering PersonalizedSummary - userName:", userName, "quizAnswers length:", quizAnswers.length)

  if (quizAnswers.length === 0 || !userName) {
    console.log("[v0] PersonalizedSummary returning null - missing data")
    return null
  }

  const professionalArea = quizAnswers[1]?.answer
  const availability = quizAnswers[2]?.answer
  const language = quizAnswers[4]?.answer

  console.log("[v0] Rendering card with data:", { professionalArea, availability, language })

  return (
    <Card className="p-4 md:p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
          {userName.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base md:text-lg font-bold text-gray-900">Olá, {userName}!</h3>
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
          </div>

          <p className="text-sm text-gray-600 mb-3">Vagas selecionadas com base no seu perfil:</p>

          <div className="flex items-center gap-2 flex-wrap">
            {professionalArea && (
              <div className="flex items-center gap-1.5 bg-white border border-blue-200 rounded-full px-3 py-1.5">
                <Briefcase className="h-3.5 w-3.5 text-blue-600" />
                <span className="text-xs font-medium text-gray-700">{getAnswerLabel(professionalArea)}</span>
              </div>
            )}
            {availability && (
              <div className="flex items-center gap-1.5 bg-white border border-blue-200 rounded-full px-3 py-1.5">
                <span className="text-xs font-medium text-gray-700">{getAnswerLabel(availability)}</span>
              </div>
            )}
            {language && (
              <div className="flex items-center gap-1.5 bg-white border border-blue-200 rounded-full px-3 py-1.5">
                <span className="text-xs font-medium text-gray-700">{getAnswerLabel(language)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
