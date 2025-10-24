import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vagas Home Office que Pagam em Dólar | Trabalhe de Casa",
  description:
    "Receba 29 vagas selecionadas + acesso ilimitado às novas oportunidades diárias. 100% Home Office, pagamento em dólar, sem exigência de inglês fluente.",
  keywords: "home office, trabalho remoto, vagas em dólar, trabalhar de casa, emprego internacional",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
