"use client"

import type React from "react"
import { useState } from "react"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Lock, CheckCircle2, Shield, Zap, Infinity, Loader2, AlertCircle, Sparkles, Copy, Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showPixCode, setShowPixCode] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
  })

  const pixCode =
    "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986540519.905802BR5925VAGAS HOME OFFICE DOLAR6009SAO PAULO62070503***63041D3E"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleGeneratePix = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    setTimeout(() => {
      setIsProcessing(false)
      setShowPixCode(true)
    }, 2000)
  }

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode)
    setPixCopied(true)
    setTimeout(() => setPixCopied(false), 2000)
  }

  const handleConfirmPayment = () => {
    setIsProcessing(true)
    setTimeout(() => {
      localStorage.setItem("premium_access", "true")
      router.push("/vagas-completas")
    }, 2000)
  }

  const isFormValid = formData.name && formData.email && formData.cpf

  return (
    <div className="min-h-screen bg-background">
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Finalize seu Acesso</h1>
            <p className="text-lg text-muted-foreground">Pagamento via PIX • Acesso imediato</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 md:p-8">
                {!showPixCode ? (
                  <form onSubmit={handleGeneratePix} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Informações Pessoais
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="João Silva"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="joao@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF</Label>
                        <Input
                          id="cpf"
                          name="cpf"
                          placeholder="000.000.000-00"
                          value={formData.cpf}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                      <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Pagamento 100% Seguro via PIX</p>
                        <p className="text-xs text-muted-foreground">
                          Após gerar o código PIX, você terá 15 minutos para realizar o pagamento.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6"
                      disabled={!isFormValid || isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Gerando Código PIX...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Gerar Código PIX - R$ 19,90
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <Sparkles className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Código PIX Gerado!</h2>
                      <p className="text-muted-foreground">Escaneie o QR Code ou copie o código abaixo para pagar</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <p className="text-sm text-center text-muted-foreground px-4">
                          QR Code PIX
                          <br />
                          <span className="text-xs">(Simulação)</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Código PIX Copia e Cola</Label>
                      <div className="flex gap-2">
                        <Input value={pixCode} readOnly className="font-mono text-xs" />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={handleCopyPix}
                          className="flex-shrink-0 bg-transparent"
                        >
                          {pixCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      {pixCopied && (
                        <p className="text-xs text-green-600 flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          Código copiado!
                        </p>
                      )}
                    </div>

                    <Separator />

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 space-y-2">
                      <p className="text-sm font-medium text-amber-600 dark:text-amber-500">Aguardando pagamento...</p>
                      <p className="text-xs text-muted-foreground">
                        Após realizar o pagamento, clique no botão abaixo para confirmar e liberar seu acesso.
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="w-full text-lg py-6"
                      onClick={handleConfirmPayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Confirmando Pagamento...
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="mr-2 h-5 w-5" />
                          Já Paguei - Liberar Acesso
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      O acesso será liberado automaticamente após a confirmação do pagamento
                    </p>
                  </div>
                )}
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 sticky top-4">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold">Resumo do Pedido</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-medium">Acesso Vitalício às Vagas</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          Pagamento Único
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Sem Mensalidades
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Vagas selecionadas para seu perfil</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Infinity className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Acesso ilimitado a novas vagas diárias</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Zap className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Liberação imediata após pagamento</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Modelo de currículo internacional</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Guia de recebimento em dólar</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>R$ 19,90</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Desconto</span>
                        <span className="text-primary">R$ 0,00</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">R$ 19,90</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-center">Garantia de 7 dias</p>
                    <p className="text-xs text-center text-muted-foreground">
                      Se não encontrar vagas compatíveis, devolvemos seu dinheiro
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm">Por que confiar?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">Vagas de portais verificados</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">Pagamento seguro via PIX</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">Sem promessas falsas de contratação</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
