"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, TrendingUp } from "lucide-react"
import { RegistrationModal } from "./registration-modal"
import { WelcomeModal } from "./welcome-modal"

export function HeroSection() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [userName, setUserName] = useState("")

  const handleRegistrationComplete = (data: { name: string; email: string; password: string }) => {
    setUserName(data.name.split(" ")[0]) // Get first name
    setShowRegistration(false)
    setShowWelcome(true)
  }

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Empresas Internacionais Estão Contratando Brasileiros Agora
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Envie seu currículo e descubra quais empresas que pagam em{" "}
              <span className="font-bold text-primary">dólar, euro e libra</span> Agende agora mesmo uma entrevista 100% Online mesmo sem falar inglês.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-pulse-glow"
              onClick={() => setShowRegistration(true)}
            >
              <Upload className="mr-2 h-5 w-5" />
              Quero Me Candidatar
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Vagas Atualizadas Diariamente</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>100% Home Office</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>Empresas Verificadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl">✓</span>
              <span>Todas vagas são limitadas</span>
            </div>
          </div>
        </div>
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
