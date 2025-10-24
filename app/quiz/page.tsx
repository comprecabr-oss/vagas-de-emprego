"use client"

import type React from "react"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { CandidateComments } from "@/components/candidate-comments"

type Answer = {
  question: string
  answer: string
}

const questions = [
  {
    id: 1,
    question: "Você tem interesse em atuar remotamente para empresas de fora do Brasil?",
    options: [
      { value: "asap", label: "Sim, quero iniciar o quanto antes" },
      { value: "preparing", label: "Sim, mas ainda estou me preparando" },
      { value: "curious", label: "Tenho curiosidade sobre o processo" },
    ],
  },
  {
    id: 2,
    question: "Qual área profissional mais se aproxima da sua experiência atual?",
    options: [
      { value: "support", label: "Atendimento ao cliente / Suporte" },
      { value: "admin", label: "Administrativo / Financeiro" },
      { value: "marketing", label: "Marketing / Comunicação" },
      { value: "sales", label: "Vendas / Comercial" },
      { value: "tech", label: "Tecnologia / Design" },
      { value: "other", label: "Outra área" },
    ],
  },
  {
    id: 3,
    question: "Qual é a sua disponibilidade diária para o trabalho remoto?",
    options: [
      { value: "part-time", label: "Meio período (até 4h por dia)" },
      { value: "full-time", label: "Integral (6 a 8h por dia)" },
      { value: "flexible", label: "Horários flexíveis" },
    ],
  },
  {
    id: 4,
    question: "Você possui os recursos necessários para trabalhar de forma remota?",
    options: [
      { value: "full", label: "Computador e internet estável" },
      { value: "mobile", label: "Apenas celular com internet" },
      { value: "organizing", label: "Ainda estou me organizando" },
    ],
  },
  {
    id: 5,
    question: "Como você classificaria seu nível de inglês ou outro idioma?",
    options: [
      { value: "intermediate", label: "Intermediário ou avançado" },
      { value: "basic", label: "Básico (consigo entender o essencial)" },
      { value: "none", label: "Ainda não falo outro idioma" },
    ],
  },
  {
    id: 6,
    question: "O que mais te atrai em uma oportunidade internacional?",
    options: [
      { value: "currency", label: "Remuneração em moeda estrangeira" },
      { value: "experience", label: "Experiência profissional internacional" },
      { value: "growth", label: "Possibilidade de crescimento remoto" },
      { value: "stability", label: "Estabilidade e novos desafios" },
    ],
  },
  {
    id: 7,
    question: "Prefere visualizar vagas com pagamento em qual moeda?",
    options: [
      { value: "usd", label: "💵 Dólar (EUA / Canadá)" },
      { value: "eur", label: "💶 Euro (Europa)" },
    ],
  },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [cvFile, setCvFile] = useState<File | null>(null)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0])
    }
  }

  const handleNext = () => {
    if (!selectedOption) return

    const newAnswers = [
      ...answers,
      {
        question: question.question,
        answer: selectedOption,
      },
    ]
    setAnswers(newAnswers)

    if (currentQuestion === 1) {
      localStorage.setItem("professionalArea", selectedOption)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption("")
    } else {
      localStorage.setItem("quizAnswers", JSON.stringify(newAnswers))
      router.push("/matching")
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[currentQuestion - 1]?.answer || "")
      setAnswers(answers.slice(0, -1))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-16 pt-20">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Progress Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="font-medium">{Math.round(progress)}% completo</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-6 md:p-12 animate-fade-in-up">
            <div className="space-y-8">
              {/* Question Header */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-bold text-balance leading-tight">{question.question}</h2>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedOption(option.value)}
                    className={`w-full p-4 md:p-6 rounded-lg border-2 transition-all text-left hover:border-primary hover:bg-primary/5 ${
                      selectedOption === option.value
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-sm md:text-base">{option.label}</p>
                      </div>
                      {selectedOption === option.value && (
                        <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {currentQuestion === questions.length - 1 && (
                <div className="pt-6 border-t space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cv-upload" className="text-base font-medium">
                      Enviar Currículo (Opcional)
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Adicione seu currículo para melhorar ainda mais a precisão das vagas selecionadas
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="cv-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {cvFile && (
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="truncate">{cvFile.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            {currentQuestion > 0 && (
              <Button
                variant="outline"
                size="lg"
                onClick={handleBack}
                className="w-full md:w-auto md:min-w-[160px] bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Voltar
              </Button>
            )}

            <Button
              size="lg"
              onClick={handleNext}
              disabled={!selectedOption}
              className="w-full md:w-auto md:min-w-[200px]"
            >
              {currentQuestion === questions.length - 1 ? "Vagas Disponíveis" : "Próxima"}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-muted-foreground px-4">
            Suas respostas nos ajudam a selecionar as melhores vagas para o seu perfil
          </p>
        </div>

        <div className="mt-16 pb-16">
          <CandidateComments />
        </div>
      </div>
    </div>
  )
}
