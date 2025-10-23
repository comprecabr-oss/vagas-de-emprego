import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o processo?",
    answer:
      "Você responde algumas perguntas sobre seu perfil profissional, enviamos seu currículo para análise e mostramos as vagas que mais combinam com você. Todo o processo é 100% online.",
  },
  {
    question: "Preciso falar inglês fluente?",
    answer:
      "Não necessariamente. Existem vagas para todos os níveis de inglês, incluindo posições que não exigem fluência. Analisamos seu perfil e mostramos as oportunidades adequadas.",
  },
  {
    question: "As vagas são reais?",
    answer:
      "Sim. Trabalhamos com portais verificados como Remote, WeWorkRemotely, Jobspresso e Crossover. Todas as vagas são de empresas reais que estão contratando ativamente.",
  },
  {
    question: "Quanto tempo leva para conseguir uma entrevista?",
    answer:
      "Depende do seu perfil e das vagas disponíveis. Alguns candidatos conseguem entrevistas em 72 horas, outros podem levar algumas semanas. Quanto mais completo seu currículo, maiores as chances.",
  },
  {
    question: "Preciso pagar algo para me candidatar?",
    answer:
      "Não. O processo inicial de análise e candidatura é gratuito. Você só precisa enviar seu currículo e responder algumas perguntas.",
  },
  {
    question: "Vocês garantem que serei contratado?",
    answer:
      "Não. Conectamos você com oportunidades reais, mas a contratação depende do seu perfil, experiência e do processo seletivo de cada empresa.",
  },
]

export function FAQ() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Perguntas frequentes</h2>
          <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre o acesso às vagas</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
