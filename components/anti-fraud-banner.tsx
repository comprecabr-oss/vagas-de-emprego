"use client"

import { AlertTriangle, Home } from "lucide-react"
import { useState } from "react"

export function AntiFraudBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="sticky top-0 z-50 bg-warning text-warning-foreground border-b border-warning-foreground/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-medium">
              <span className="font-bold">Atenção:</span> Nenhuma vaga exige presença física. Todas as oportunidades são
              100% Home Office <Home className="inline h-4 w-4 mx-1" />e as entrevistas acontecem somente online.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-warning-foreground hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Fechar aviso"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
