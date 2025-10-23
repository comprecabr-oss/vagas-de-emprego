"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const currencies = [
  { flag: "🇺🇸", name: "Dólar", code: "USD", symbol: "💵", rate: 5.42 },
  { flag: "🇪🇺", name: "Euro", code: "EUR", symbol: "💶", rate: 5.78 },
  { flag: "🇬🇧", name: "Libra", code: "GBP", symbol: "💷", rate: 6.62 },
]

export function CurrencyCards() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currencies.map((currency, index) => (
            <Card
              key={currency.code}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: mounted ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{currency.flag}</span>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">
                        {currency.name} ({currency.code})
                      </p>
                      <p className="text-2xl font-bold">
                        {currency.symbol} 1 = R$ {currency.rate.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Valores atualizados • Ganhe em moeda forte trabalhando de casa
        </p>
      </div>
    </section>
  )
}
