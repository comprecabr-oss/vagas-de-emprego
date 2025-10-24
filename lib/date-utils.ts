export function getJobPostingDate(): string {
  try {
    const now = new Date()
    const posted = new Date(now.getTime() - 5 * 60 * 60 * 1000) // 5 hours ago

    const diffMs = now.getTime() - posted.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    if (diffHours < 1) {
      return "Postadas há menos de 1 hora"
    } else if (diffHours === 1) {
      return "Postadas há 1 hora"
    } else if (diffHours < 24) {
      return `Postadas há ${diffHours} horas`
    } else if (diffHours < 48) {
      return "Postadas ontem"
    } else {
      const diffDays = Math.floor(diffHours / 24)
      return `Postadas há ${diffDays} dias`
    }
  } catch (error) {
    // Fallback to November if there's any error
    return "Postadas em novembro"
  }
}

export function getJobPostedTimeAgo(): string {
  try {
    const now = new Date()
    const posted = new Date(now.getTime() - 5 * 60 * 60 * 1000) // 5 hours ago

    const diffMs = now.getTime() - posted.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))

    if (diffHours < 1) {
      return "menos de 1 hora atrás"
    } else if (diffHours === 1) {
      return "1 hora atrás"
    } else if (diffHours < 24) {
      return `${diffHours} horas atrás`
    } else if (diffHours < 48) {
      return "1 dia atrás"
    } else {
      const diffDays = Math.floor(diffHours / 24)
      return `${diffDays} dias atrás`
    }
  } catch (error) {
    // Fallback to November if there's any error
    return "em novembro"
  }
}
