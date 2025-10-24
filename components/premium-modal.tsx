"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, TrendingUp } from "lucide-react"

interface PremiumModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const benefits = [
  "Vagas verificadas compatíveis com seu perfil",
  "Novas oportunidades adicionadas diariamente",
  "Candidaturas ilimitadas",
  "Modelo de currículo internacional",
  "Guia completo de pagamentos internacionais",
  "Suporte prioritário por e-mail",
]

export function PremiumModal({ open, onOpenChange }: PremiumModalProps) {
  const handleUpgrade = () => {
    // Salva que o usuário iniciou o checkout
    localStorage.setItem("checkout_started", "true")

    const CHECKOUT_URL = "https://pay.lirapaybr.com/wFqlmeWl"

    // Tenta abrir em nova aba primeiro (mais confiável)
    const newWindow = window.open(CHECKOUT_URL, "_blank")

    // Se o popup foi bloqueado, redireciona na mesma aba
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = CHECKOUT_URL
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium w-fit mx-auto">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            Acesso Premium
          </div>
          <DialogTitle className="text-2xl sm:text-3xl text-center leading-tight">
            Desbloqueie Todas as Oportunidades
          </DialogTitle>
          <DialogDescription className="text-center text-sm sm:text-base leading-relaxed">
            Você já se candidatou para sua primeira vaga! Para continuar se candidatando e acessar todas as vagas
            selecionadas para você, ative o acesso premium.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 py-4 sm:py-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Acesso Completo</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary">R$ 19,90</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
              </div>
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 h-fit text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                Melhor valor
              </Badge>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <p className="font-semibold text-sm sm:text-base">O que está incluído:</p>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-3 sm:p-4 space-y-1.5 sm:space-y-2">
            <p className="text-xs sm:text-sm font-medium">Por que cobramos?</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              A taxa simbólica única existe para manter o padrão de qualidade das vagas e garantir que cada oportunidade
              publicada seja verificada e atualizada. Além disso, o valor contribui para manter toda a estrutura do site
              em funcionamento, permitindo que você tenha acesso a vagas reais, seguras e compatíveis com o seu perfil
              profissional.
            </p>
          </div>

          <Button size="lg" className="w-full text-base sm:text-lg py-5 sm:py-6" onClick={handleUpgrade}>
            <Sparkles className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Ativar Acesso Premium Agora
          </Button>

          <p className="text-[10px] sm:text-xs text-center text-muted-foreground leading-relaxed">
            Pagamento seguro • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
