import { Card } from "@/components/ui/card"
import { DollarSign, TrendingUp, Globe } from "lucide-react"

const reasons = [
  {
    icon: DollarSign,
    title: "Custo Competitivo",
    description: "Empresas reduzem custos contratando profissionais no Brasil, mantendo alta qualidade.",
  },
  {
    icon: TrendingUp,
    title: "Alta Produtividade",
    description: "Brasileiros têm reputação de comprometimento, flexibilidade e entrega de resultados.",
  },
  {
    icon: Globe,
    title: "Fusos Compatíveis",
    description: "Ideal para empresas da América do Norte e Europa, facilitando comunicação em tempo real.",
  },
]

export function WhyHireBrazilians() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Por que empresas estrangeiras contratam brasileiros?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Essas oportunidades são legítimas e aumentaram muito desde 2022. Milhares de brasileiros já trabalham de
            casa, em dólar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
