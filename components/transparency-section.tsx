import { Card } from "@/components/ui/card"
import { Shield, FileCheck, MessageCircle, Video } from "lucide-react"

const points = [
  {
    icon: Shield,
    text: "Nenhuma promessa de contratação. Você paga por acesso legítimo e atualizado.",
  },
  {
    icon: FileCheck,
    text: "As vagas vêm de portais oficiais como Remote, WeWorkRemotely, Jobspresso e Crossover.",
  },
  {
    icon: MessageCircle,
    text: "Suporte ativo por e-mail após o acesso.",
  },
  {
    icon: Video,
    text: "Todas as entrevistas são online e seguras.",
  },
]

export function TransparencySection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/10 mb-4">
            <Shield className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Transparência e segurança</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso compromisso é fornecer acesso real a oportunidades legítimas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-sm leading-relaxed pt-2">{point.text}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
