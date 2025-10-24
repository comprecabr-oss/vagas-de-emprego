import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Envie seu currículo",
    description: "Faça upload do seu CV e responda algumas perguntas sobre sua experiência.",
  },
  {
    number: "2",
    title: "Análise automática",
    description: "Nosso sistema analisa seu perfil e busca empresas compatíveis.",
  },
  {
    number: "3",
    title: "Receba vagas personalizadas",
    description: "Veja quais empresas internacionais estão buscando profissionais como você.",
  },
  {
    number: "4",
    title: "Candidate-se diretamente",
    description: "Envie sua candidatura para as empresas que mais combinam com seu perfil.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Como funciona</h2>
            <p className="text-lg text-muted-foreground">Processo simples e rápido em 4 etapas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.number}</div>
                <div className="space-y-3 relative z-10">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
