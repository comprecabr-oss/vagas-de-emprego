"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, DollarSign, Clock, CheckCircle2, Calendar, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const timeSlots = [
  { id: 1, date: "Segunda, 15 Jan", time: "09:00 - 10:00" },
  { id: 2, date: "Segunda, 15 Jan", time: "14:00 - 15:00" },
  { id: 3, date: "Terça, 16 Jan", time: "10:00 - 11:00" },
  { id: 4, date: "Terça, 16 Jan", time: "15:00 - 16:00" },
  { id: 5, date: "Quarta, 17 Jan", time: "09:00 - 10:00" },
  { id: 6, date: "Quarta, 17 Jan", time: "13:00 - 14:00" },
]

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [isScheduled, setIsScheduled] = useState(false)

  // Mock job data - in real app would fetch based on params.id
  const job = {
    id: params.id,
    title: "Assistente de Atendimento ao Cliente",
    company: "TechCorp International",
    location: "Estados Unidos",
    salary: "US$ 1.800 - 2.500",
    type: "Tempo Integral",
    posted: "5 horas atrás",
    match: 95,
    description:
      "Estamos procurando um Assistente de Atendimento ao Cliente dedicado para se juntar à nossa equipe remota. Você será responsável por responder às dúvidas dos clientes, resolver problemas e garantir uma experiência excepcional.",
    requirements: [
      "Excelente comunicação escrita",
      "Experiência prévia em atendimento ao cliente (desejável)",
      "Disponibilidade para trabalhar em horário comercial dos EUA",
      "Computador e internet estável",
      "Inglês básico a intermediário",
    ],
    benefits: [
      "Trabalho 100% remoto",
      "Pagamento em dólar via transferência internacional",
      "Horário flexível",
      "Treinamento completo fornecido",
      "Oportunidades de crescimento",
    ],
  }

  const handleSchedule = () => {
    if (!selectedSlot) return
    localStorage.setItem("hasScheduledInterview", "true")
    setIsScheduled(true)
    setTimeout(() => {
      router.push("/jobs")
    }, 3000)
  }

  if (isScheduled) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <AntiFraudBanner />
        <div className="container mx-auto px-4 py-16 md:py-24 pt-20">
          <div className="max-w-2xl mx-auto">
            <Card className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-500/10 mx-auto">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">Entrevista Agendada!</h1>
                <p className="text-muted-foreground">
                  Você receberá um e-mail de confirmação com o link da videochamada em breve.
                </p>
              </div>
              <Button size="lg" onClick={() => router.push("/jobs")}>
                Voltar para Vagas
              </Button>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-16 pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <Button variant="ghost" onClick={() => router.push("/jobs")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para vagas
          </Button>

          <Card className="p-8 md:p-12 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {job.match}% compatível
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-lg text-muted-foreground">
                    <Building2 className="h-5 w-5" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Localização</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Salário</p>
                    <p className="font-medium text-primary">{job.salary}/mês</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Publicada</p>
                    <p className="font-medium">{job.posted}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t">
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Sobre a Vaga</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Requisitos</h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Benefícios</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Agende sua Entrevista Online</h2>
                </div>
                <p className="text-muted-foreground">
                  Selecione um horário disponível para sua entrevista por videochamada
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedSlot === slot.id
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="font-medium">{slot.date}</p>
                    <p className="text-sm text-muted-foreground">{slot.time}</p>
                  </button>
                ))}
              </div>

              <Button size="lg" className="w-full text-lg py-6" disabled={!selectedSlot} onClick={handleSchedule}>
                Confirmar Agendamento
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
