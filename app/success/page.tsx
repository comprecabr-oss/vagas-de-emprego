"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sparkles, ArrowRight, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SuccessPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/dashboard")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 animate-fade-in-up">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 mb-4 animate-pulse-glow">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Pagamento Confirmado!</h1>
          <p className="text-xl md:text-2xl font-semibold">Bem-vindo ao seu painel de vagas</p>
        </div>

        <Card className="p-8 md:p-10 border-2 border-primary/20">
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-lg p-6 text-center space-y-2">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-lg font-medium">Seu acesso foi liberado com sucesso!</p>
              <p className="text-sm text-muted-foreground">Você será redirecionado em {countdown} segundos...</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">O que você acabou de desbloquear:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>29 vagas internacionais selecionadas para o seu perfil</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Acesso vitalício e ilimitado a novas vagas diárias</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Modelo de currículo internacional pronto para usar</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Guia completo para receber pagamentos em dólar</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Verifique seu e-mail</p>
                <p className="text-xs text-muted-foreground">
                  Enviamos suas credenciais de acesso e materiais de apoio para o e-mail cadastrado.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <Button size="lg" onClick={() => router.push("/dashboard")} className="text-lg px-8 py-6 w-full md:w-auto">
            Acessar Minhas Vagas Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground">Comece a se candidatar imediatamente</p>
        </div>
      </div>
    </div>
  )
}
