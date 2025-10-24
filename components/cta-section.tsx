"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import { RegistrationModal } from "./registration-modal"
import { WelcomeModal } from "./welcome-modal"

interface CTASectionProps {
  variant?: "middle" | "final"
}

export function CTASection({ variant = "middle" }: CTASectionProps) {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [userName, setUserName] = useState("")

  const handleRegistrationComplete = (data: { name: string; email: string; password: string }) => {
    setUserName(data.name.split(" ")[0])
    setShowRegistration(false)
    setShowWelcome(true)
  }

  const content = {
    middle: {
      title: "Pronto para descobrir suas oportunidades?",
      description:
        "Responda algumas perguntas rápidas e veja quais empresas internacionais estão buscando profissionais como você.",
      buttonText: "Quero Me Candidatar",
    },
    final: {
      title: "Não perca tempo. Empresas estão contratando agora.",
      description:
        "Milhares de brasileiros já estão trabalhando de casa e recebendo em moeda estrangeira. Você pode ser o próximo.",
      buttonText: "Quero Me Candidatar",
    },
  }

  const { title, description, buttonText } = content[variant]

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-balance">{title}</h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{description}</p>

            <div className="pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-pulse-glow"
                onClick={() => setShowRegistration(true)}
              >
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {variant === "final" && (
              <p className="text-sm text-muted-foreground pt-4">
                Processo 100% online • Sem compromisso • Vagas verificadas
              </p>
            )}
          </div>
        </Card>
      </section>

      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        onComplete={handleRegistrationComplete}
      />

      <WelcomeModal isOpen={showWelcome} onClose={() => setShowWelcome(false)} userName={userName} />
    </>
  )
}
