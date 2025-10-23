"use client"

import type React from "react"

import { useState } from "react"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Upload,
  FileText,
  Calendar,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function SimulationPage() {
  const router = useRouter()
  const [step, setStep] = useState<"job" | "cv" | "interview" | "processing" | "approved">("job")
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0])
    }
  }

  const handleSubmitCv = () => {
    if (cvFile) {
      setStep("interview")
    }
  }

  const handleScheduleInterview = () => {
    if (selectedDate && selectedTime) {
      setStep("processing")
      // Simulate processing
      setTimeout(() => {
        setStep("approved")
      }, 3000)
    }
  }

  const handleUnlock = () => {
    router.push("/checkout")
  }

  return (
    <div className="min-h-screen bg-background">
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Job Details Step */}
          {step === "job" && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Vaga Compatível Encontrada!</h1>
                <p className="text-lg text-muted-foreground">
                  Com base no seu perfil, encontramos esta oportunidade perfeita para você
                </p>
              </div>

              <Card className="p-8 md:p-10 border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-primary text-primary-foreground">100% Home Office</Badge>
                        <Badge variant="secondary">Contratação Internacional</Badge>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">Assistente de Suporte ao Cliente</h2>
                      <p className="text-lg text-muted-foreground flex items-center gap-2">
                        <span className="text-2xl">🇺🇸</span>
                        TechGlobal Solutions
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Salário</p>
                        <p className="font-bold">US$ 1,800 - 2,500/mês</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Localização</p>
                        <p className="font-bold">Remoto (Brasil)</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Publicada</p>
                        <p className="font-bold">Há 4 horas</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Descrição da Vaga</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Atendimento a clientes via chat e e-mail (inglês básico aceito)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Resolução de dúvidas sobre produtos e serviços</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Horário flexível (4-6 horas por dia)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Treinamento completo fornecido pela empresa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="text-center space-y-4">
                <Button size="lg" onClick={() => setStep("cv")} className="text-lg px-8 py-6">
                  Candidatar-se Agora
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground">Esta é uma simulação do processo de candidatura real</p>
              </div>
            </div>
          )}

          {/* CV Upload Step */}
          {step === "cv" && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 mb-4">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Envie seu Currículo</h1>
                <p className="text-lg text-muted-foreground">Faça upload do seu CV para completar a candidatura</p>
              </div>

              <Card className="p-8 md:p-10">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="cv-upload" className="text-base">
                      Currículo (PDF, DOC ou DOCX)
                    </Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleCvUpload}
                        className="hidden"
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        {cvFile ? (
                          <div className="space-y-2">
                            <p className="font-medium text-primary">{cvFile.name}</p>
                            <p className="text-sm text-muted-foreground">Clique para alterar o arquivo</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <p className="font-medium">Clique para fazer upload</p>
                            <p className="text-sm text-muted-foreground">ou arraste e solte seu arquivo aqui</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Dica:</strong> Não tem um currículo internacional? Após desbloquear o acesso, você
                      receberá um modelo pronto para usar!
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-between gap-4">
                <Button variant="outline" size="lg" onClick={() => setStep("job")}>
                  Voltar
                </Button>
                <Button size="lg" onClick={handleSubmitCv} disabled={!cvFile}>
                  Continuar
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Interview Scheduling Step */}
          {step === "interview" && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Agende sua Entrevista</h1>
                <p className="text-lg text-muted-foreground">Escolha o melhor horário para sua entrevista online</p>
              </div>

              <Card className="p-8 md:p-10">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <Label htmlFor="date" className="text-base">
                      Data da Entrevista
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="text-base"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="time" className="text-base">
                      Horário (Horário de Brasília)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["09:00", "11:00", "14:00", "16:00", "18:00", "20:00"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-lg border-2 transition-all font-medium ${
                            selectedTime === time
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium">Detalhes da Entrevista:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Duração: 30-45 minutos</li>
                      <li>• Formato: Videochamada (Google Meet)</li>
                      <li>• Idioma: Português com algumas perguntas em inglês básico</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-between gap-4">
                <Button variant="outline" size="lg" onClick={() => setStep("cv")}>
                  Voltar
                </Button>
                <Button size="lg" onClick={handleScheduleInterview} disabled={!selectedDate || !selectedTime}>
                  Confirmar Agendamento
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Processing Step */}
          {step === "processing" && (
            <div className="space-y-8 animate-fade-in-up">
              <Card className="p-12 md:p-16 text-center">
                <div className="space-y-6">
                  <Loader2 className="h-16 w-16 text-primary animate-spin mx-auto" />
                  <h2 className="text-2xl md:text-3xl font-bold">Analisando sua candidatura...</h2>
                  <p className="text-lg text-muted-foreground">
                    Estamos processando suas informações e verificando compatibilidade
                  </p>
                </div>
              </Card>
            </div>
          )}

          {/* Approved Step */}
          {step === "approved" && (
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-4 animate-pulse-glow">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-primary">Parabéns!</h1>
                <p className="text-xl md:text-2xl font-semibold">Você foi pré-aprovado!</p>
              </div>

              <Card className="p-8 md:p-10 border-2 border-primary/20">
                <div className="space-y-6">
                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <p className="text-lg font-medium mb-2">Seu perfil está compatível com:</p>
                    <p className="text-3xl md:text-4xl font-bold text-primary">29 vagas disponíveis</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">O que acontece agora?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Você receberá acesso às 29 vagas selecionadas para o seu perfil</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Novas vagas serão adicionadas diariamente ao seu painel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Você poderá se candidatar diretamente através dos links oficiais</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Receberá materiais de apoio (currículo internacional e guia de pagamentos)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <p className="text-center font-medium">
                      Para garantir acesso exclusivo a candidatos sérios, solicitamos uma taxa única de:
                    </p>
                    <p className="text-center text-4xl font-bold text-primary">R$ 19,90</p>
                    <p className="text-center text-sm text-muted-foreground">
                      Pagamento único • Acesso vitalício • Sem mensalidades
                    </p>
                  </div>
                </div>
              </Card>

              <div className="text-center space-y-4">
                <Button size="lg" onClick={handleUnlock} className="text-lg px-8 py-6 w-full md:w-auto">
                  Desbloquear Minhas 29 Vagas Agora
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-muted-foreground">Acesso liberado imediatamente após o pagamento</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
