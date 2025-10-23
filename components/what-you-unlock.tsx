import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Unlock, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  "29 vagas verificadas e compatíveis com seu perfil",
  "Atualizações diárias com novas vagas reais",
  "Links diretos para se candidatar",
  "Modelo de currículo internacional incluso",
  "Guia para receber pagamentos em dólar (Wise, Remessa Online, Payoneer)",
  "Acesso vitalício e ilimitado",
]

export function WhatYouUnlock() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-2">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <Unlock className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Ative seu acesso completo e ilimitado</h2>
                <p className="text-lg text-muted-foreground">
                  Tudo que você precisa para começar a trabalhar remotamente em dólar
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <p className="text-center text-sm text-muted-foreground">
                  Para manter o painel exclusivo a candidatos reais, pedimos uma verificação simbólica de interesse de
                  apenas
                </p>
                <p className="text-center text-4xl font-bold text-primary">R$ 19,90</p>
                <p className="text-center text-sm text-muted-foreground">
                  Isso garante seu acesso imediato, vitalício e ilimitado.
                </p>
              </div>

              <div className="text-center space-y-4">
                <Link href="/quiz">
                  <Button size="lg" className="text-lg px-8 py-6 w-full md:w-auto">
                    <Unlock className="mr-2 h-5 w-5" />
                    Desbloquear Acesso Ilimitado Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground">
                  Vagas novas todos os dias • Acesso em segundos • 100% seguro
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
