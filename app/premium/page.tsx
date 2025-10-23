"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { AntiFraudBanner } from "@/components/anti-fraud-banner"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, Sparkles } from "lucide-react"

const jobPlatforms = [
  {
    id: 1,
    category: "Suporte / Atendimento",
    title: "Vaga Demonstrativa – Real Work From Anywhere",
    description:
      "Simule sua entrevista para vagas de suporte ao cliente que pagam em dólar. Ideal para iniciantes em trabalho remoto.",
    url: "https://www.realworkfromanywhere.com",
    status: "demo",
  },
  {
    id: 2,
    category: "Suporte / Atendimento",
    title: "Atendente Internacional – We Work Remotely",
    description: "Empresas contratando atendentes remotos no mundo todo, com pagamentos em USD.",
    url: "https://weworkremotely.com",
    status: "premium",
  },
  {
    id: 3,
    category: "Suporte / Atendimento",
    title: "Assistente de Suporte – Jobspresso",
    description: "Ofertas em suporte e administração para quem fala inglês básico a intermediário.",
    url: "https://jobspresso.co",
    status: "premium",
  },
  {
    id: 4,
    category: "Suporte / Atendimento",
    title: "Atendimento ao Cliente – RemoteWoman",
    description: "Empresas internacionais priorizando diversidade em funções de suporte remoto.",
    url: "https://remotewoman.com",
    status: "premium",
  },
  {
    id: 5,
    category: "Marketing / Conteúdo",
    title: "Assistente de Marketing – JustRemote",
    description: "Funções remotas em marketing digital, mídias sociais e e‑mail marketing.",
    url: "https://justremote.co",
    status: "premium",
  },
  {
    id: 6,
    category: "Marketing / Conteúdo",
    title: "Gestor de Campanhas – NoDesk",
    description: "Empregos remotos em marketing, conteúdo e design com empresas globais.",
    url: "https://nodesk.co",
    status: "premium",
  },
  {
    id: 7,
    category: "Marketing / Conteúdo",
    title: "Social Media – Working Nomads",
    description: "Gerencie redes sociais de empresas internacionais de qualquer lugar do mundo.",
    url: "https://www.workingnomads.com",
    status: "premium",
  },
  {
    id: 8,
    category: "Marketing / Conteúdo",
    title: "Produtor de Conteúdo – FlexJobs",
    description: "Vagas verificadas e seguras em marketing e produção de conteúdo remoto.",
    url: "https://www.flexjobs.com",
    status: "premium",
  },
  {
    id: 9,
    category: "Marketing / Conteúdo",
    title: "Gestor de Tráfego – DailyRemote",
    description: "Empresas contratando gestores de tráfego e mídia paga remotamente.",
    url: "https://dailyremote.com",
    status: "premium",
  },
  {
    id: 10,
    category: "Tecnologia / Desenvolvimento",
    title: "Desenvolvedor Júnior – Remote OK",
    description: "Vagas para iniciantes em tecnologia e desenvolvimento remoto global.",
    url: "https://remoteok.com",
    status: "premium",
  },
  {
    id: 11,
    category: "Tecnologia / Desenvolvimento",
    title: "Programador Front‑End – Remotive",
    description: "Empresas que contratam desenvolvedores front‑end para trabalho remoto.",
    url: "https://remotive.com",
    status: "premium",
  },
  {
    id: 12,
    category: "Tecnologia / Desenvolvimento",
    title: "Engenheiro de Software – Remote.com",
    description: "Funções em engenharia e TI com empresas que pagam em dólar.",
    url: "https://remote.com",
    status: "premium",
  },
  {
    id: 13,
    category: "Tecnologia / Desenvolvimento",
    title: "Analista de Dados – EU Remote Jobs",
    description: "Oportunidades europeias para analistas e cientistas de dados.",
    url: "https://euremotejobs.com",
    status: "premium",
  },
  {
    id: 14,
    category: "Tecnologia / Desenvolvimento",
    title: "Desenvolvedor WordPress – Arc.dev",
    description: "Trabalhe com clientes internacionais em projetos WordPress e web apps.",
    url: "https://arc.dev",
    status: "premium",
  },
  {
    id: 15,
    category: "Freelancers / Autônomos",
    title: "Freelancer Global – Upwork",
    description: "Cadastre‑se para oferecer seus serviços e receber em dólar via Payoneer.",
    url: "https://www.upwork.com",
    status: "premium",
  },
  {
    id: 16,
    category: "Freelancers / Autônomos",
    title: "Freelancer Internacional – Fiverr",
    description: "Crie seu perfil e venda serviços criativos globalmente, em USD.",
    url: "https://www.fiverr.com",
    status: "premium",
  },
  {
    id: 17,
    category: "Freelancers / Autônomos",
    title: "Consultor Remoto – Freelancer.com",
    description: "Trabalhos de curto prazo e consultorias pagas em dólar.",
    url: "https://www.freelancer.com",
    status: "premium",
  },
  {
    id: 18,
    category: "Freelancers / Autônomos",
    title: "Projetista Online – PeoplePerHour",
    description: "Ofertas em design, escrita e marketing para freelancers remotos.",
    url: "https://www.peopleperhour.com",
    status: "premium",
  },
  {
    id: 19,
    category: "Freelancers / Autônomos",
    title: "Gestor de Projetos – Hubstaff Talent",
    description: "Empresas procurando profissionais sem taxas intermediárias.",
    url: "https://talent.hubstaff.com",
    status: "premium",
  },
  {
    id: 20,
    category: "Freelancers / Autônomos",
    title: "Trabalhos Remotos – Guru",
    description: "Plataforma global de freelas, aceita brasileiros e paga em dólar.",
    url: "https://www.guru.com",
    status: "premium",
  },
  {
    id: 21,
    category: "Freelancers / Autônomos",
    title: "Designer Gráfico – Designhill",
    description: "Vagas e concursos para designers gráficos de qualquer lugar.",
    url: "https://www.designhill.com",
    status: "premium",
  },
  {
    id: 22,
    category: "Freelancers / Autônomos",
    title: "Copywriter Internacional – Workana",
    description: "Plataforma de freelas focada em redatores e profissionais criativos.",
    url: "https://www.workana.com",
    status: "premium",
  },
  {
    id: 23,
    category: "Freelancers / Autônomos",
    title: "Gestor de Produto – Toptal",
    description: "Rede exclusiva de freelancers premium, aceita brasileiros avançados.",
    url: "https://www.toptal.com",
    status: "premium",
  },
  {
    id: 24,
    category: "Tradução / Ensino / Outros",
    title: "Professor de Inglês – Preply",
    description: "Dê aulas online e receba em dólar, com alunos no mundo inteiro.",
    url: "https://preply.com",
    status: "premium",
  },
  {
    id: 25,
    category: "Tradução / Ensino / Outros",
    title: "Tradutor Freelancer – ProZ",
    description: "Maior comunidade de tradutores do mundo, com pagamentos em USD.",
    url: "https://www.proz.com",
    status: "premium",
  },
  {
    id: 26,
    category: "Tradução / Ensino / Outros",
    title: "Revisor de Textos – TranslatorsCafé",
    description: "Receba por revisar textos e documentos internacionais.",
    url: "https://www.translatorscafe.com",
    status: "premium",
  },
  {
    id: 27,
    category: "Tradução / Ensino / Outros",
    title: "Professor Online – Cambly",
    description: "Ensine inglês por vídeo e ganhe por hora em dólar americano.",
    url: "https://www.cambly.com",
    status: "premium",
  },
  {
    id: 28,
    category: "Tradução / Ensino / Outros",
    title: "Avaliador de Conteúdo – Appen",
    description: "Avalie sites e redes sociais, trabalho flexível e pago em USD.",
    url: "https://appen.com",
    status: "premium",
  },
  {
    id: 29,
    category: "Tradução / Ensino / Outros",
    title: "Tester de Sites – UserTesting",
    description: "Ganhe em dólar testando sites e aplicativos de grandes empresas.",
    url: "https://www.usertesting.com",
    status: "premium",
  },
  {
    id: 30,
    category: "Tradução / Ensino / Outros",
    title: "Pesquisador Online – Toluna Influencers",
    description: "Responda pesquisas pagas em dólar de empresas globais.",
    url: "https://www.toluna.com",
    status: "premium",
  },
  {
    id: 31,
    category: "Tradução / Ensino / Outros",
    title: "Assistente Virtual – Belay",
    description: "Empresas contratando assistentes virtuais remotos e bilíngues.",
    url: "https://www.belaysolutions.com",
    status: "premium",
  },
  {
    id: 32,
    category: "Tradução / Ensino / Outros",
    title: "Moderador de Conteúdo – ModSquad",
    description: "Trabalhe moderando fóruns e redes sociais globalmente.",
    url: "https://modsquad.com",
    status: "premium",
  },
  {
    id: 33,
    category: "Tradução / Ensino / Outros",
    title: "Avaliação de Dados – Telus International",
    description: "Vagas em análise e etiquetagem de dados com pagamento em dólar.",
    url: "https://www.telusinternational.com",
    status: "premium",
  },
  {
    id: 34,
    category: "Tradução / Ensino / Outros",
    title: "Assistente de Recrutamento – VirtualVocations",
    description: "Empregos 100% remotos de várias áreas, aceitando brasileiros.",
    url: "https://www.virtualvocations.com",
    status: "premium",
  },
  {
    id: 35,
    category: "Suporte / Atendimento",
    title: "Agente de Vendas – SkipTheDrive",
    description: "Painel de vagas remotas em suporte e vendas internacionais.",
    url: "https://www.skipthedrive.com",
    status: "premium",
  },
  {
    id: 36,
    category: "Marketing / Conteúdo",
    title: "Analista de SEO – Remote Rocketship",
    description: "Empresas contratando analistas de SEO e marketing digital remoto.",
    url: "https://remoterocketship.com",
    status: "premium",
  },
  {
    id: 37,
    category: "Tecnologia / Desenvolvimento",
    title: "QA Tester – RemoteOK",
    description: "Empresas globais contratando testadores de software.",
    url: "https://remoteok.com",
    status: "premium",
  },
  {
    id: 38,
    category: "Tecnologia / Desenvolvimento",
    title: "Desenvolvedor Back‑End – We Work Remotely",
    description: "Vagas internacionais em back‑end e APIs, totalmente remoto.",
    url: "https://weworkremotely.com",
    status: "premium",
  },
  {
    id: 39,
    category: "Tecnologia / Desenvolvimento",
    title: "UI Designer – Dribbble Jobs",
    description: "Crie interface de apps e sites para empresas dos EUA e Europa.",
    url: "https://dribbble.com/jobs",
    status: "premium",
  },
  {
    id: 40,
    category: "Freelancers / Autônomos",
    title: "Gestor de Comunidade – Contra",
    description: "Rede moderna para freelancers, com pagamentos em dólar via Stripe.",
    url: "https://contra.com",
    status: "premium",
  },
  {
    id: 41,
    category: "Tradução / Ensino / Outros",
    title: "Analista de Dados – Lionbridge",
    description: "Projetos em anotação e análise de dados com pagamento internacional.",
    url: "https://www.lionbridge.com",
    status: "premium",
  },
]

export default function PremiumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    localStorage.setItem("premium_access", "true")
    setMounted(true)
  }, [])

  const categories = ["Todas", ...Array.from(new Set(jobPlatforms.map((job) => job.category)))]

  const filteredJobs = jobPlatforms.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <AntiFraudBanner />

      <div className="container mx-auto px-4 py-8 md:py-12 pt-20">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Acesso Premium Ativo
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">41 Plataformas Estrangeiras de Vagas</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cadastre-se nas plataformas abaixo para acessar milhares de vagas home office que pagam em dólar
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar plataformas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-md border border-input bg-background text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">41</p>
              <p className="text-xs text-muted-foreground">Plataformas</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Home Office</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">USD</p>
              <p className="text-xs text-muted-foreground">Pagamento</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">∞</p>
              <p className="text-xs text-muted-foreground">Vagas Diárias</p>
            </Card>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {job.category}
                    </Badge>
                    {job.status === "demo" ? (
                      <Badge className="bg-green-500/10 text-green-600 text-xs">Demo</Badge>
                    ) : (
                      <Badge className="bg-primary/10 text-primary text-xs">Premium</Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">#{job.id.toString().padStart(2, "0")}</p>
                    <h3 className="font-bold text-lg leading-tight">{job.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[42px]">{job.description}</p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      Ir para a plataforma
                      <ExternalLink className="h-3 w-3" />
                    </a>

                    <Button asChild className="w-full" variant={job.status === "demo" ? "default" : "outline"}>
                      <a href={job.url} target="_blank" rel="noopener noreferrer">
                        {job.status === "demo" ? "Acessar Demo" : "Acessar Plataforma"}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <Card className="p-6 text-center bg-muted/50">
            <p className="text-sm text-muted-foreground">
              Esta página entrega o acesso às plataformas oficiais de vagas. A candidatura é feita diretamente no site
              de cada empresa.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
