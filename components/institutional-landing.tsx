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
  ChevronLeft,
  ChevronRight,
  DollarSign,
  HeadphonesIcon,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import { RegistrationModal } from "./registration-modal"
import { WelcomeModal } from "./welcome-modal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function InstitutionalLanding() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [userName, setUserName] = useState("")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)
  const [videoError, setVideoError] = useState(false)

  const handleGetStarted = () => {
    console.log("[v0] handleGetStarted called")
    console.log("[v0] Setting showRegistration to true")
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
    }, 5000) // Change slide every 5 seconds

    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000) // Change review every 4 seconds

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
                {/* Fan propeller logo with blue gradient */}
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="propeller-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                    </defs>
                    {/* Fan propeller blades */}
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
                    {/* Center circle */}
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
            {/* Animated background elements */}
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
                      src="/home-office-job-approval-canada.jpg"
                      alt="Home office com aprovação de vaga no Canadá"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Carousel Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="relative overflow-hidden shadow-xl border-2 border-blue-100">
                  <div className="p-12 text-center min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                    <div className="mb-6">
                      {slides[currentSlide].icon &&
                        (() => {
                          const IconComponent = slides[currentSlide].icon
                          return (
                            <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                              <IconComponent className="w-10 h-10 text-blue-600" />
                            </div>
                          )
                        })()}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{slides[currentSlide].title}</h3>
                    <p className="text-xl text-gray-600 max-w-2xl">{slides[currentSlide].description}</p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevSlide}
                      className="ml-4 rounded-full bg-white/80 hover:bg-white shadow-lg"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextSlide}
                      className="mr-4 rounded-full bg-white/80 hover:bg-white shadow-lg"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/professional-working-laptop.jpg"
                alt="Profissional trabalhando"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 to-blue-50/95" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                  Como funcionam as vagas estrangeiras
                </h2>
                <div className="space-y-6 text-lg text-gray-700 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <p>
                    Trabalhar para fora nunca foi tão acessível. Hoje, milhares de empresas estrangeiras contratam
                    profissionais brasileiros para atuar de forma 100% remota, em funções simples ou especializadas, com
                    pagamentos em dólar, euro ou libra.
                  </p>
                  <p>
                    As vagas disponíveis passam por uma curadoria diária, onde selecionamos apenas oportunidades
                    recentes, seguras e com baixa concorrência — muitas delas não exigem inglês fluente e aceitam
                    profissionais com diferentes níveis de experiência.
                  </p>
                  <p>
                    Você se cadastra, preenche seu perfil e tem acesso às oportunidades que mais combinam com suas
                    habilidades. Assim que encontrar uma vaga compatível, basta seguir as instruções da empresa
                    contratante para iniciar o processo de aplicação ou entrevista.
                  </p>
                  <p className="font-semibold text-blue-600 text-xl">
                    Trabalhando para o exterior, você pode receber até 5x mais do que em empregos locais, com a
                    liberdade de trabalhar de qualquer lugar do Brasil e fazer parte de um mercado que cresce todos os
                    dias.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Work-from-home Benefits Section */}
          <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Liberdade para viver melhor
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    icon: "🏠",
                    title: "Sem deslocamento",
                    description:
                      "Esqueça o trânsito, o transporte lotado e o tempo perdido. Trabalhe de onde você está.",
                    delay: "0",
                  },
                  {
                    icon: "☕",
                    title: "Seu ritmo, suas regras",
                    description:
                      "Faça um lanche quando quiser, tome um café sem pressa, organize seu dia do seu jeito.",
                    delay: "200",
                  },
                  {
                    icon: "⏰",
                    title: "Mais tempo para você",
                    description:
                      "Aproveite para estudar, cuidar da família, praticar hobbies ou simplesmente descansar mais.",
                    delay: "400",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `fadeInUp 0.8s ease-out ${benefit.delay}ms both`,
                    }}
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-600/0 group-hover:from-blue-400/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="text-xl px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-bold"
                >
                  VISUALIZAR VAGAS
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Por que trabalhar com empresas estrangeiras?
                  </h2>
                  <p className="text-xl text-gray-700">
                    Mais de <span className="font-bold text-blue-600">11 mil pessoas</span> já trabalham remotamente e
                    recebem em dólar, euro ou libra
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                  {[
                    {
                      icon: Clock,
                      title: "Horários Flexíveis",
                      description: "Trabalhe quando quiser",
                      gradient: "from-blue-400 to-blue-600",
                    },
                    {
                      icon: HeadphonesIcon,
                      title: "Suporte Dedicado",
                      description: "Ajuda sempre disponível",
                      gradient: "from-purple-400 to-purple-600",
                    },
                    {
                      icon: TrendingUp,
                      title: "Plano de Carreira",
                      description: "Crescimento garantido",
                      gradient: "from-pink-400 to-pink-600",
                    },
                    {
                      icon: GraduationCap,
                      title: "Cursos Profissionalizantes",
                      description: "Capacitação contínua",
                      gradient: "from-indigo-400 to-indigo-600",
                    },
                    {
                      icon: DollarSign,
                      title: "Ganhos Valorizados",
                      description: "Conversão cambial favorável",
                      gradient: "from-cyan-400 to-cyan-600",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative"
                      style={{
                        animation: `fadeInScale 0.6s ease-out ${index * 100}ms both`,
                      }}
                    >
                      {/* Circular card */}
                      <div className="relative w-40 h-40 md:w-48 md:h-48">
                        {/* Gradient circle background */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white text-center">
                          {item.icon && (
                            <item.icon className="w-12 h-12 md:w-16 md:h-16 mb-2 group-hover:scale-110 transition-transform" />
                          )}
                          <h3 className="font-bold text-sm md:text-base mb-1">{item.title}</h3>
                          <p className="text-xs opacity-90">{item.description}</p>
                        </div>

                        {/* Animated ring on hover */}
                        <div
                          className={`absolute inset-0 rounded-full border-4 border-white/30 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Auto-scrolling Reviews Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                O que dizem nossos profissionais
              </h2>
              <div className="max-w-4xl mx-auto relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviews.map((review, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="p-8 bg-white border-2 border-blue-100 shadow-lg">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                            {review.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-600">{review.role}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">{review.text}</p>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentReview ? "bg-blue-600 w-8" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border-2 border-blue-100">
                    <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                      Como recebo meu salário?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Normalmente via PayPal (criação gratuita em 5 minutos). Algumas empresas também oferecem outras
                      opções como transferência bancária internacional.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border-2 border-blue-100">
                    <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                      Posso escolher minha área?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Sim, durante a triagem você pode indicar suas preferências ou escolher manualmente entre as vagas
                      disponíveis.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border-2 border-blue-100">
                    <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                      Preciso ter currículo?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      É importante cadastrar suas habilidades e experiências para que possamos conectar você às melhores
                      oportunidades.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border-2 border-blue-100">
                    <AccordionTrigger className="text-lg font-semibold hover:text-blue-600">
                      Preciso falar inglês?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      Não. A maioria das vagas não exige inglês fluente. Existem muitas oportunidades para quem fala
                      apenas português.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Agende uma reunião hoje e garanta sua vaga</h2>

                <div className="grid md:grid-cols-3 gap-6 my-12">
                  {[
                    { value: "89%", label: "Taxa de aprovação para entrevistas" },
                    { value: "+13 mil", label: "Brasileiros já contratados" },
                    { value: "100%", label: "Empresas com plano de carreira" },
                  ].map((stat, index) => (
                    <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                      <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                      <div className="text-blue-100">{stat.label}</div>
                    </Card>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="text-xl px-12 py-8 bg-white text-blue-600 hover:bg-blue-50 shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 font-bold"
                >
                  INICIAR TRIAGEM AGORA
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>

                <p className="mt-6 text-blue-100 text-sm">Processo 100% online • Sem custos • Resposta em até 48h</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <RegistrationModal
        open={showRegistration}
        onOpenChange={setShowRegistration}
        onComplete={handleRegistrationComplete}
      />
      <WelcomeModal open={showWelcome} onOpenChange={setShowWelcome} userName={userName} />
    </>
  )
}
