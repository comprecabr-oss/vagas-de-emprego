"use client"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"

type Reply = {
  initials: string
  name: string
  time: string
  text: string
  likes: number
}

type Comment = {
  initials: string
  name: string
  time: string
  text: string
  likes: number
  replies?: Reply[]
}

const comments: Comment[] = [
  {
    initials: "R",
    name: "Renato Silva",
    time: "3h",
    text: "Conheci por aqui e usei a entrevista demo. Ontem criei conta no We Work Remotely e no RemoteOK. Já recebi duas respostas pra suporte em home office, pagos em USD.",
    likes: 42,
  },
  {
    initials: "M",
    name: "Marina Costa",
    time: "4h",
    text: "Faço meio período porque estudo à tarde. Mesmo assim, consegui trabalho remoto de atendimento com turno flexível. O passo a passo daqui ajudou a organizar tudo.",
    likes: 31,
  },
  {
    initials: "D",
    name: "Diego Ferreira",
    time: "5h",
    text: "É muito difícil começar? Precisa falar inglês avançado?",
    likes: 9,
    replies: [
      {
        initials: "L",
        name: "Lucas Oliveira",
        time: "4h",
        text: "Dá pra iniciar com inglês básico/intermediário em suporte e moderação. O material explica como configurar perfil e filtrar vagas por nível de idioma.",
        likes: 18,
      },
    ],
  },
  {
    initials: "F",
    name: "Fernanda Santos",
    time: "6h",
    text: "Entrei ontem no Jobspresso e JustRemote pelo Plano Pro. Já marquei duas aplicações em social media. O guia de e-mail daqui ajuda bastante.",
    likes: 24,
  },
  {
    initials: "C",
    name: "Carlos Mendes",
    time: "2h",
    text: "Como funciona o pagamento em dólar? É via PayPal ou Payoneer?",
    likes: 12,
    replies: [
      {
        initials: "A",
        name: "Ana Paula Santos",
        time: "1h",
        text: "Depende da empresa/plataforma. Muitas usam Payoneer, PayPal ou Stripe. No conteúdo Pro tem o passo a passo para configurar e evitar taxas altas.",
        likes: 27,
      },
    ],
  },
  {
    initials: "P",
    name: "Patrícia Lopes",
    time: "7h",
    text: "Uso só nos fins de semana. Fiz perfil no Upwork e fechei projetos curtos de tradução. A curadoria daqui poupou meu tempo.",
    likes: 39,
  },
  {
    initials: "A",
    name: "André Almeida",
    time: "8h",
    text: "O filtro por categoria (Suporte, Marketing, Tech, Tradução) deixa tudo objetivo. Comecei com UserTesting e ModSquad.",
    likes: 33,
  },
  {
    initials: "J",
    name: "João Pedro",
    time: "9h",
    text: "Minha taxa de entrevista subiu após usar o roteiro de carta de apresentação daqui. Faço 3–5 candidaturas por dia.",
    likes: 54,
  },
  {
    initials: "J",
    name: "Juliana Rocha",
    time: "10h",
    text: "Finais de semana focados: criei perfis no Preply e Cambly. O guia ensina a ajustar fuso e disponibilidade.",
    likes: 28,
  },
  {
    initials: "M",
    name: "Marcos Vieira",
    time: "11h",
    text: "Comecei do zero: perfis organizados, portfólio simples e tarefas rápidas. Em duas semanas, já tive retorno em USD.",
    likes: 41,
  },
  {
    initials: "R",
    name: "Ricardo Nunes",
    time: "12h",
    text: "Curti o passo a passo de filtros (remoto, worldwide, fuso, júnior). Evita vaga antiga e anúncio duplicado.",
    likes: 17,
  },
  {
    initials: "T",
    name: "Thiago Barbosa",
    time: "13h",
    text: "Trabalho 8h–17h e aplico à noite. Com os templates de e-mail e LinkedIn sugeridos aqui, aumentou a taxa de entrevista.",
    likes: 34,
  },
  {
    initials: "C",
    name: "Camila Torres",
    time: "14h",
    text: "O tutorial de portfólio simples foi decisivo pra eu fechar primeiro freela em conteúdo. Sem complicação.",
    likes: 26,
  },
  {
    initials: "R",
    name: "Rafael Lima",
    time: "15h",
    text: "Eu estava perdido entre centenas de sites. O hub daqui entrega só os confiáveis. Foquei em RemoteWoman e EU Remote Jobs pra horário europeu.",
    likes: 40,
  },
  {
    initials: "E",
    name: "Eduardo Matos",
    time: "16h",
    text: "Gosto do checklist diário: revisar alertas, enviar 3 candidaturas, atualizar carta. A consistência traz resposta.",
    likes: 22,
  },
  {
    initials: "G",
    name: "Gustavo Pereira",
    time: "17h",
    text: "Faço meio período e priorizo tarefas pagas por hora. O guia de negociação ajudou a ajustar taxas e escopo.",
    likes: 30,
  },
  {
    initials: "B",
    name: "Bruno Costa",
    time: "18h",
    text: "O roteiro de entrevista do módulo Pro é direto. Usei hoje numa call pra suporte técnico e fiquei mais seguro.",
    likes: 37,
  },
  {
    initials: "D",
    name: "Daniela Martins",
    time: "19h",
    text: "Sou iniciante e consegui respostas rápidas com o modelo de apresentação para júnior. Orienta certinho como destacar habilidades transferíveis.",
    likes: 46,
  },
  {
    initials: "A",
    name: "Alexandre Santos",
    time: "20h",
    text: "O que mais gostei foi a seção por categoria e os exemplos de descrição de perfil. Deixou tudo pronto pra aplicar.",
    likes: 32,
  },
  {
    initials: "V",
    name: "Vanessa Alves",
    time: "21h",
    text: "Para tech, segui a lista RemoteOK + Remotive + We Work Remotely. A dica de palavras-chave aumentou a visibilidade do meu perfil.",
    likes: 16,
    replies: [
      {
        initials: "R",
        name: "Rodrigo Mendonça",
        time: "20h",
        text: "Vanessa, ativa também os alertas por e-mail e separa 3 faixas salariais. O módulo mostra como otimizar a busca sem perder tempo.",
        likes: 14,
      },
    ],
  },
]

function CommentItem({ comment, isReply = false }: { comment: Comment | Reply; isReply?: boolean }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(comment.likes)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
      setIsLiked(false)
    } else {
      setLikeCount(likeCount + 1)
      setIsLiked(true)
    }
  }

  return (
    <div className={`flex gap-3 ${isReply ? "ml-12 relative" : ""}`}>
      {isReply && <div className="absolute left-4 top-0 bottom-0 w-px bg-border -ml-8" />}

      <div
        className={`${
          isReply ? "w-8 h-8 text-xs" : "w-10 h-10 text-sm"
        } rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold flex-shrink-0`}
      >
        {comment.initials}
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold ${isReply ? "text-sm" : "text-base"}`}>{comment.name}</span>
          <span className="text-xs text-muted-foreground">{comment.time}</span>
        </div>
        <p className={`text-foreground ${isReply ? "text-sm" : "text-base"} leading-relaxed`}>{comment.text}</p>

        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors group"
        >
          <Heart
            className={`${isReply ? "w-3.5 h-3.5" : "w-4 h-4"} transition-all ${
              isLiked ? "fill-red-500 text-red-500" : "group-hover:fill-red-500"
            }`}
          />
          <span className={`${isReply ? "text-xs" : "text-sm"} font-medium`}>{likeCount}</span>
        </button>
      </div>
    </div>
  )
}

export function CandidateComments() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold">Comentários dos Candidatos</h3>
        </div>

        <div className="space-y-6">
          {comments.map((comment, index) => (
            <div key={index} className="space-y-4">
              <CommentItem comment={comment} />
              {comment.replies?.map((reply, replyIndex) => (
                <CommentItem key={replyIndex} comment={reply} isReply />
              ))}
              {index < comments.length - 1 && <div className="border-t border-gray-200" />}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Aviso:</strong> Os resultados variam conforme perfil, idioma e dedicação. Este site não garante
            emprego; entregamos curadoria de plataformas confiáveis, passo a passo e materiais de candidatura.
          </p>
        </div>
      </div>
    </div>
  )
}
