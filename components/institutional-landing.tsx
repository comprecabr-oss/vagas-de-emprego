"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Globe,
  Clock,
  TrendingUp,
  Laptop,
  Wifi,
  User,
  MessageSquare,
  DollarSign,
  ArrowRight,
} from "lucide-react"
import { RegistrationModal } from "./registration-modal"
import { WelcomeModal } from "./welcome-modal"

export function InstitutionalLanding() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [userName, setUserName] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)

  const handleGetStarted = () => {
    setShowRegistration(true)
  }

  const handleRegistrationComplete = (data: { name: string; email: string; password: string }) => {
    setUserName(data.name)
    setShowRegistration(false)
    setShowWelcome(true)
  }

  const slides = [
    {
      icon: TrendingUp,
      title: "Crescimento Real",
      description: "Várias empresas oferecem plano de carreira estruturado",
    },
    {
      icon: Globe,
      title: "Ambiente Global",
      description: "Vagas abertas em diferentes países e continentes",
    },
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Trabalhe de onde quiser, com horários ajustáveis",
    },
    {
      icon: Laptop,
      title: "Tecnologia Avançada",
      description: "Empresas modernas e digitais em busca de talentos remotos",
    },
  ]

  const reviews = [
    {
      name: "Mariana Silva",
      role: "Assistente Virtual",
      text: "Consegui minha primeira vaga em 2 semanas. Hoje trabalho para uma empresa canadense e ganho em dólar.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      role: "Suporte Técnico",
      text: "Estava desempregado há 6 meses. Hoje trabalho de casa e tenho mais tempo com minha família.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Assistente Administrativo",
      text: "O processo foi simples e transparente. Recebi meu primeiro pagamento em 30 dias.",
      rating: 5,
    },
    {
      name: "Roberto Alves",
      role: "Moderador de Conteúdo",
      text: "Trabalho 4 horas por dia e ganho mais do que ganhava em 8 horas no Brasil.",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Atendimento ao Cliente",
      text: "Fiz a triagem e em 10 dias já estava trabalhando. Mudou completamente minha vida financeira.",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => {
      clearInterval(interval)
      clearInterval(reviewInterval)
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="propeller-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 50 L50 10 A40 40 0 0 1 70 20 Z"
                      fill="url(#propeller-gradient)"
                      className="animate-spin origin-center"
                      style={{ animationDuration: "3s" }}
                    />
                    <path
                      d="M50 50 L90 50 A40 40 0 0 1 80 70 Z"
                      fill="url(#propeller-gradient)"
                      className="animate-spin origin-center"
                      style={{ animationDuration: "3s" }}
                    />
                    <path
                      d="M50 50 L50 90 A40 40 0 0 1 30 80 Z"
                      fill="url(#propeller-gradient)"
                      className="animate-spin origin-center"
                      style={{ animationDuration: "3s" }}
                    />
                    <path
                      d="M50 50 L10 50 A40 40 0 0 1 20 30 Z"
                      fill="url(#propeller-gradient)"
                      className="animate-spin origin-center"
                      style={{ animationDuration: "3s" }}
                    />
                    <circle cx="50" cy="50" r="8" fill="#1e40af" />
                  </svg>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  WorkUp
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-20">
          {/* Video Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20 text-center">
              <div className="mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  <span className="text-red-400">Vagas quentes</span> para você se cadastrar hoje e começar a ganhar em
                  dólar
                </h2>
              </div>

              {/* Video Player */}
              <div className="max-w-4xl mx-auto mb-12">
                <Card className="overflow-hidden shadow-2xl border-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                    <iframe
                      className="w-full h-full"
                      src="https://streamable.com/e/u4sw70"
                      title="Vídeo explicativo sobre vagas estrangeiras"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </Card>
              </div>

              <div className="mb-12">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="text-xl px-12 py-6 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 font-bold"
                >
                  VER VAGAS PARA MIM
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>

              {/* Hero Text */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-blue-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ganhe dinheiro trabalhando fixo, freelancer ou fazendo renda extra para empresas estrangeiras
                  </h1>
                  <div className="flex flex-wrap gap-4 justify-center items-center text-white/90 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Laptop className="w-5 h-5" />
                      <span>Home Office</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      <span>Pagamento em Dólar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      <span>Empresas Estrangeiras</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prerequisites Section */}
          <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Pré-requisitos para trabalhar em empresas estrangeiras
                  </h2>
                  <div className="space-y-4">
                    {[
                      { icon: User, text: "Ser maior de 18 anos" },
                      { icon: MessageSquare, text: "Ter português fluente" },
                      { icon: Wifi, text: "Ter Wi-Fi estável" },
                      { icon: Laptop, text: "Ter computador funcional" },
                      { icon: CheckCircle2, text: "Saber utilizar o computador" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          {item.icon && <item.icon className="w-6 h-6" />}
                        </div>
                        <span className="text-lg">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-full min-h-[500px]">
                  <div className="h-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/home-office-setup-with-laptop-showing-job-approval.jpg"
                      alt="Home office com aprovação de vaga no Canadá"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Rest of sections... */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <Button size="lg" onClick={handleGetStarted} className="text-xl px-12 py-6">
                COMEÇAR AGORA
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </section>
        </div>
      </div>

      <RegistrationModal
        open={showRegistration}
        onOpenChange={setShowRegistration}
        onComplete={handleRegistrationComplete}
      />

      <WelcomeModal open={showWelcome} onOpenChange={setShowWelcome} userName={userName} />
    </>
  )
}
