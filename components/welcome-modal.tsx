"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Globe, DollarSign, Clock, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

interface WelcomeModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userName: string
}

export function WelcomeModal({ open, onOpenChange, userName }: WelcomeModalProps) {
  const router = useRouter()

  const handleContinue = () => {
    onOpenChange(false)
    router.push("/quiz")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <div className="mx-auto h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <DialogTitle className="text-2xl text-center">Bem-vindo(a), {userName}!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Você está a poucos passos de descobrir vagas que pagam em dólar, euro e libra através do home office.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="bg-muted/50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-lg">O que você vai encontrar:</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Empresas Internacionais Verificadas</p>
                  <p className="text-sm text-muted-foreground">
                    Acesso a vagas de empresas dos EUA, Europa e outros países
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Pagamento em Moeda Estrangeira</p>
                  <p className="text-sm text-muted-foreground">Vagas que pagam em dólar, euro e libra</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Vagas Atualizadas Diariamente</p>
                  <p className="text-sm text-muted-foreground">Novas oportunidades adicionadas todos os dias</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">100% Home Office</p>
                  <p className="text-sm text-muted-foreground">Trabalhe de qualquer lugar do Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-center">
              <span className="font-semibold text-primary">Próximo passo:</span> Responda algumas perguntas rápidas para
              encontrarmos as melhores vagas para o seu perfil.
            </p>
          </div>

          <Button onClick={handleContinue} size="lg" className="w-full h-12 text-base">
            Começar agora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
