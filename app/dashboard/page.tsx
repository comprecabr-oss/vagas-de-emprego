"use client"

import { useState } from "react"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  ExternalLink,
  Search,
  Download,
  TrendingUp,
  Globe,
  Sparkles,
} from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Assistente de Suporte ao Cliente",
    company: "TechGlobal Solutions",
    location: "Remoto (Brasil)",
    salary: "US$ 1,800 - 2,500",
    currency: "USD",
    flag: "🇺🇸",
    type: "Tempo Integral",
    posted: "4h",
    category: "Suporte",
    level: "Júnior",
    url: "https://remote.co/job/customer-support",
  },
  {
    id: 2,
    title: "Analista de Dados Júnior",
    company: "DataFlow Inc",
    location: "Remoto (Global)",
    salary: "US$ 2,200 - 3,000",
    currency: "USD",
    flag: "🇨🇦",
    type: "Tempo Integral",
    posted: "6h",
    category: "Tecnologia",
    level: "Júnior",
    url: "https://weworkremotely.com/job/data-analyst",
  },
  {
    id: 3,
    title: "Assistente Administrativo Virtual",
    company: "GlobalAdmin Services",
    location: "Remoto (América Latina)",
    salary: "US$ 1,500 - 2,000",
    currency: "USD",
    flag: "🇺🇸",
    type: "Meio Período",
    posted: "8h",
    category: "Administrativo",
    level: "Iniciante",
    url: "https://remote.co/job/virtual-assistant",
  },
  {
    id: 4,
    title: "Designer Gráfico",
    company: "Creative Studio EU",
    location: "Remoto (Europa/América)",
    salary: "€ 2,000 - 2,800",
    currency: "EUR",
    flag: "🇮🇪",
    type: "Tempo Integral",
    posted: "1d",
    category: "Design",
    level: "Pleno",
    url: "https://weworkremotely.com/job/graphic-designer",
  },
  {
    id: 5,
    title: "Moderador de Conteúdo",
    company: "SocialMedia Corp",
    location: "Remoto (Global)",
    salary: "US$ 1,600 - 2,200",
    currency: "USD",
    flag: "🇬🇧",
    type: "Tempo Integral",
    posted: "1d",
    category: "Suporte",
    level: "Iniciante",
    url: "https://remote.co/job/content-moderator",
  },
  {
    id: 6,
    title: "Desenvolvedor Web Júnior",
    company: "WebDev Solutions",
    location: "Remoto (América)",
    salary: "US$ 2,500 - 3,500",
    currency: "USD",
    flag: "🇺🇸",
    type: "Tempo Integral",
    posted: "2d",
    category: "Tecnologia",
    level: "Júnior",
    url: "https://weworkremotely.com/job/web-developer",
  },
]

const resources = [
  {
    title: "Modelo de Currículo Internacional",
    description: "Template profissional em inglês pronto para usar",
    icon: Download,
    type: "PDF",
  },
  {
    title: "Guia de Recebimento em Dólar",
    description: "Como usar Wise, Payoneer e Remessa Online",
    icon: DollarSign,
    type: "PDF",
  },
  {
    title: "Dicas para Entrevistas Online",
    description: "Prepare-se para entrevistas internacionais",
    icon: Globe,
    type: "PDF",
  },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <AntiFraudBanner />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Suas Vagas Internacionais</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Acesso vitalício a {jobs.length} vagas + novas oportunidades diárias
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{jobs.length}</p>
                  <p className="text-sm text-muted-foreground">Vagas Disponíveis</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3-5</p>
                  <p className="text-sm text-muted-foreground">Novas Vagas/Dia</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8+</p>
                  <p className="text-sm text-muted-foreground">Países</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="jobs" className="space-y-6">
            <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-grid md:grid-cols-2">
              <TabsTrigger value="jobs">Vagas Disponíveis</TabsTrigger>
              <TabsTrigger value="resources">Materiais de Apoio</TabsTrigger>
            </TabsList>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="space-y-6">
              {/* Search and Filter */}
              <Card className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por cargo ou empresa..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("all")}
                    >
                      Todas
                    </Button>
                    <Button
                      variant={selectedCategory === "Tecnologia" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("Tecnologia")}
                    >
                      Tecnologia
                    </Button>
                    <Button
                      variant={selectedCategory === "Suporte" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("Suporte")}
                    >
                      Suporte
                    </Button>
                    <Button
                      variant={selectedCategory === "Design" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("Design")}
                    >
                      Design
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Jobs List */}
              <div className="grid grid-cols-1 gap-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className="bg-primary text-primary-foreground">100% Home Office</Badge>
                            <Badge variant="secondary">{job.type}</Badge>
                            <Badge variant="outline">{job.level}</Badge>
                          </div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <span className="text-xl">{job.flag}</span>
                            {job.company}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{job.salary}/mês</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">{job.location}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">Publicada há {job.posted}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">Categoria: {job.category}</p>
                        <Button asChild>
                          <a href={job.url} target="_blank" rel="noopener noreferrer">
                            Candidatar-se
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">Nenhuma vaga encontrada com os filtros selecionados.</p>
                </Card>
              )}
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const Icon = resource.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="space-y-4">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </div>
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Baixar {resource.type}
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>

              <Card className="p-6 bg-muted/50">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Precisa de ajuda?</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato com nosso suporte em suporte@vagashomeoffice.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Respondemos em até 24 horas úteis para ajudar com qualquer dúvida sobre as vagas ou materiais.
                  </p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
