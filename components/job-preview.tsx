import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lock, Clock, Briefcase } from "lucide-react"

const jobs = [
  {
    title: "Suporte Técnico",
    company: "Empresa dos EUA",
    currency: "💵",
    salary: "US$ •••/mês",
    posted: "2h",
    flag: "🇺🇸",
  },
  {
    title: "Assistente de Atendimento",
    company: "Empresa da Irlanda",
    currency: "💶",
    salary: "€ •••/mês",
    posted: "3h",
    flag: "🇮🇪",
  },
  {
    title: "Analista de Dados",
    company: "Empresa do Canadá",
    currency: "💵",
    salary: "CAD$ •••/mês",
    posted: "5h",
    flag: "🇨🇦",
  },
]

export function JobPreview() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Vagas disponíveis (prévia bloqueada)</h2>
          <p className="text-lg text-muted-foreground">
            Essas são apenas 3 das 29 vagas selecionadas para o seu perfil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Card key={index} className="p-6 relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        Home Office
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <span className="text-xl">{job.flag}</span>
                      {job.company}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-2xl">{job.currency}</span>
                    <span className="font-bold blur-sm select-none">{job.salary}</span>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Publicada há {job.posted}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground flex items-center gap-2">
                    <Lock className="h-3 w-3" />
                    Acesso restrito aos candidatos aprovados na triagem
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-lg font-medium">🔁 Novas oportunidades são adicionadas todos os dias</p>
          <p className="text-muted-foreground">Faça a triagem agora para desbloquear todas as vagas</p>
        </div>
      </div>
    </section>
  )
}
