"use client"

import type React from "react"

import { useState } from "react"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileText, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !name || !email) return

    setIsUploading(true)

    // Simulate upload and analysis
    setTimeout(() => {
      router.push("/matching")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold">Envie Seu Currículo</h1>
            <p className="text-lg text-muted-foreground">
              Vamos analisar seu perfil e encontrar as melhores oportunidades internacionais para você
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">WhatsApp (opcional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Currículo (PDF, DOC ou DOCX)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                  <label htmlFor="cv" className="cursor-pointer">
                    {file ? (
                      <div className="space-y-2">
                        <FileText className="h-12 w-12 text-primary mx-auto" />
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">Clique para alterar</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                        <p className="font-medium">Clique para fazer upload</p>
                        <p className="text-sm text-muted-foreground">ou arraste seu arquivo aqui</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={!file || !name || !email || isUploading}>
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analisando seu perfil...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-5 w-5" />
                    Enviar Currículo
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão seguros e serão usados apenas para encontrar vagas compatíveis
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
