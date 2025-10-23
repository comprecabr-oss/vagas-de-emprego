"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { RegistrationModal } from "./registration-modal"
import { WelcomeModal } from "./welcome-modal"

export function ShopeeStyleLanding() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [showRegistration, setShowRegistration] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  const handleContinue = () => {
    if (email) {
      // Store email and show registration
      localStorage.setItem("userEmail", email)
      setShowRegistration(true)
    }
  }

  const handleRegistrationComplete = () => {
    setShowRegistration(false)
    setShowWelcome(true)
  }

  const handleWelcomeComplete = () => {
    setShowWelcome(false)
    router.push("/quiz")
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 animate-fade-in-up">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">Vagas Home Office</h1>
            <p className="text-center text-gray-600 mb-8">
              Para continuar, informe seu e-mail para verificarmos as vagas disponíveis para você
            </p>

            {/* Email Input */}
            <div className="space-y-2 mb-6">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base border-2 focus:border-emerald-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && email) {
                    handleContinue()
                  }
                }}
              />
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleContinue}
              disabled={!email}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">41</div>
                  <div className="text-xs text-gray-600">Plataformas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">100%</div>
                  <div className="text-xs text-gray-600">Home Office</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">USD</div>
                  <div className="text-xs text-gray-600">Pagamento</div>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Seus dados estão seguros</span>
            </div>
          </div>

          {/* Footer Text */}
          <p className="text-center text-white text-sm mt-6 opacity-90">
            Empresas internacionais contratando brasileiros
          </p>
        </div>
      </div>

      {/* Modals */}
      <RegistrationModal
        isOpen={showRegistration}
        onClose={() => setShowRegistration(false)}
        onComplete={handleRegistrationComplete}
        prefilledEmail={email}
      />
      <WelcomeModal isOpen={showWelcome} onClose={handleWelcomeComplete} />
    </>
  )
}
