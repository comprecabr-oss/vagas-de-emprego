"use client"

import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Sparkles, CheckCircle2, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"
import { getJobPostingDate } from "@/lib/date-utils"

const steps = [
  "Analisando suas respostas...",
  "Identificando suas habilidades principais...",
  "Buscando empresas compatíveis...",
  "Selecionando as melhores oportunidades...",
  "Preparando suas vagas personalizadas...",
]

export default function MatchingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
          }, 1000)
          return prev
        }
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-16 md:py-24 pt-20">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 md:p-16 text-center space-y-8">
            {!isComplete ? (
              <>
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mx-auto animate-pulse">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">Analisando Seu Perfil</h1>
                  <p className="text-lg text-muted-foreground">
                    Estamos encontrando as melhores oportunidades para você...
                  </p>
                </div>

                <div className="space-y-4 pt-8">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-lg transition-all ${
                        index <= currentStep ? "bg-primary/10" : "bg-muted/30"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : index === currentStep ? (
                        <Loader2 className="h-5 w-5 text-primary animate-spin flex-shrink-0" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                      )}
                      <p className={`text-sm ${index <= currentStep ? "font-medium" : "text-muted-foreground"}`}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-500/10 mx-auto">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">Análise Concluída!</h1>
                  <div className="bg-primary/5 rounded-lg p-6 space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <Briefcase className="h-8 w-8 text-primary" />
                      <p className="text-5xl font-bold text-primary">{"41"}</p>
                    </div>
                    <p className="text-lg font-medium">Vagas disponíveis para o seu perfil</p>
                    <p className="text-sm text-muted-foreground">{getJobPostingDate()}</p>
                  </div>
                  <p className="text-muted-foreground">
                    Encontramos oportunidades perfeitas baseadas nas suas respostas
                  </p>
                </div>

                <Button size="lg" className="w-full text-lg py-6" onClick={() => router.push("/jobs")}>
                  Ver Minhas Vagas
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
