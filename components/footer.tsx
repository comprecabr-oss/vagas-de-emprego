import { Home, Shield, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Vagas Home Office</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conectando brasileiros a oportunidades internacionais de trabalho remoto.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Segurança
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vagas de portais verificados</li>
                <li>• Sem promessas falsas</li>
                <li>• Pagamento único e seguro</li>
                <li>• Acesso vitalício</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Suporte
              </h3>
              <p className="text-sm text-muted-foreground">Dúvidas? Entre em contato:</p>
              <a href="mailto:suporte@vagashomeoffice.com" className="text-sm text-primary hover:underline">
                suporte@vagashomeoffice.com
              </a>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Vagas Home Office. Todos os direitos reservados.</p>
            <p className="mt-2">100% Home Office • Pagamento em Dólar • Acesso Vitalício</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
