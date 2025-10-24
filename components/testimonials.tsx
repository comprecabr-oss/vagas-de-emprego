import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo, SP",
    text: "Recebi resposta de uma empresa americana em 72 horas! Minha entrevista está marcada para semana que vem.",
    rating: 5,
  },
  {
    name: "João P.",
    location: "Belo Horizonte, MG",
    text: "Fiz minha primeira entrevista internacional ontem. O processo foi muito mais simples do que eu imaginava.",
    rating: 5,
  },
  {
    name: "Ana C.",
    location: "Rio de Janeiro, RJ",
    text: "Consegui 3 entrevistas em menos de uma semana. Empresas reais que pagam em dólar!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Pessoas que já conseguiram</h2>
            <p className="text-lg text-muted-foreground">
              Depoimentos reais de quem está aplicando para vagas internacionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
