export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            {/* Fan propeller logo with blue gradient */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="propeller-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                {/* Fan propeller blades */}
                <path
                  d="M50 50 L50 10 A40 40 0 0 1 70 20 Z"
                  fill="url(#propeller-gradient)"
                  className="animate-spin origin-center"
                  style={{ animationDuration: "3s" }}
                />
                <path
                  d="M50 50 L90 50 A40 40 0 0 1 80 70 Z"
                  fill="url(#propeller-gradient)"
                  className="animate-spin origin-center"
                  style={{ animationDuration: "3s" }}
                />
                <path
                  d="M50 50 L50 90 A40 40 0 0 1 30 80 Z"
                  fill="url(#propeller-gradient)"
                  className="animate-spin origin-center"
                  style={{ animationDuration: "3s" }}
                />
                <path
                  d="M50 50 L10 50 A40 40 0 0 1 20 30 Z"
                  fill="url(#propeller-gradient)"
                  className="animate-spin origin-center"
                  style={{ animationDuration: "3s" }}
                />
                {/* Center circle */}
                <circle cx="50" cy="50" r="8" fill="#1e40af" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              WorkUp
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
