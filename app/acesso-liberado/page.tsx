"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, Sparkles } from "lucide-react"

export default function AcessoLiberadoPage() {
  const router = useRouter()
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    // Simula verificação de pagamento
    const timer = setTimeout(() => {
      // Marca que o usuário tem acesso premium
      localStorage.setItem("premium_access", "true")
      setIsVerifying(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleAccessJobs = () => {
    router.push("/vagas-completas")
  }

  return (
    <div className="min-h-screen bg-background">
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {isVerifying ? (
            <Card className="p-8 md:p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold">Verificando Pagamento...</h1>
                <p className="text-muted-foreground">Aguarde enquanto confirmamos sua compra</p>
              </div>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mx-auto">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Pagamento Confirmado!</h1>
                <p className="text-lg text-muted-foreground">Seu acesso premium foi liberado com sucesso</p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 space-y-3">
                <p className="font-semibold">O que você ganhou:</p>
                <div className="space-y-2 text-sm text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Acesso a 41 plataformas internacionais de vagas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Candidaturas ilimitadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Modelo de currículo internacional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Guia completo de pagamentos internacionais</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full text-lg py-6" onClick={handleAccessJobs}>
                <Sparkles className="mr-2 h-5 w-5" />
                Acessar Minhas Vagas Agora
              </Button>

              <p className="text-xs text-muted-foreground">Você receberá um e-mail com os detalhes do seu acesso</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
