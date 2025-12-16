export interface Testimonial {
    name: string
    role: string
    text: string
    avatar: string
}

// Pool of reliable Unsplash photos (20 total)
const avatarPool = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Man 1
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces", // Man 2
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=faces", // Man 3
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces", // Man 4
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces", // Man 5
    "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces", // Man 6
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=faces", // Man 7
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=faces", // Man 8
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces", // Man 9
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=faces", // Man 10
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces", // Woman 1
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=faces", // Woman 2
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces", // Woman 3
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces", // Woman 4
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces", // Woman 5
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces", // Woman 6
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces", // Woman 7
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces", // Woman 8
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=faces", // Woman 9
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces"  // Woman 10
]

export const testimonialsByPage: Record<string, Testimonial[]> = {
    // Homepage - Watermark Remover  
    'home': [
        {
            name: "James Cooper",
            role: "Editor de Vídeo",
            text: "Uso muitos clipes do TikTok para edições, então encontrar um bom removedor de marca d'água do TikTok era importante. Esta ferramenta remove o logotipo do TikTok de forma limpa e muito mais rápida do que outros aplicativos que tentei. Definitivamente recomendado.",
            avatar: avatarPool[0]
        },
        {
            name: "Marcus Williams",
            role: "Cineasta",
            text: "Precisei remover marca d'água de vídeo de algumas filmagens antigas, e os resultados foram incríveis. O vídeo ficou intocado e o processo foi super rápido. Ótimo para criadores de conteúdo.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Chen",
            role: "Gerente de Mídias Sociais",
            text: "Como alguém que edita vídeos diariamente, ter uma ferramenta confiável de remoção de marca d'água de vídeo é essencial. Esta removeu o logotipo de forma limpa e manteve a qualidade alta, o que geralmente é difícil de encontrar.",
            avatar: avatarPool[2]
        },
        {
            name: "Sarah Mitchell",
            role: "Criadora de Conteúdo",
            text: "Finalmente, um removedor de marca d'água gratuito que realmente funciona! Removi marcas d'água de fotos para o meu portfólio e os resultados foram perfeitos. Economizou muito tempo.",
            avatar: avatarPool[10]
        },
        {
            name: "Alex Turner",
            role: "Fotógrafo",
            text: "Precisava remover marca d'água de imagem para alguns trabalhos de clientes. A ferramenta funcionou perfeitamente e os resultados pareciam profissionais. Altamente recomendado!",
            avatar: avatarPool[3]
        },
        {
            name: "Emma Davis",
            role: "Designer Gráfica",
            text: "Usei esta ferramenta para remover marca d'água de foto de imagens de estoque. A IA fez um trabalho incrível reconstruindo o fundo. Muito impressionada!",
            avatar: avatarPool[11]
        },
        {
            name: "Ryan Johnson",
            role: "Blogueiro",
            text: "Como blogueiro, frequentemente preciso de um removedor de marca d'água de imagem. Esta ferramenta é rápida, fácil de usar e os resultados são sempre excelentes.",
            avatar: avatarPool[4]
        },
        {
            name: "Lisa Anderson",
            role: "Profissional de Marketing",
            text: "O melhor removedor de marca d'água que já usei. Removi marcas d'água de fotos para campanhas de marketing e a qualidade foi excepcional.",
            avatar: avatarPool[12]
        },
        {
            name: "Michael Brown",
            role: "Desenvolvedor Web",
            text: "Ferramenta incrível para remover marca d'água de imagem! Uso regularmente para projetos de clientes e nunca me decepcionou. Rápido, eficiente e resultados perfeitos.",
            avatar: avatarPool[5]
        }
    ],

    // Video Watermark Removal
    'remove-watermark-video': [
        {
            name: "James Cooper",
            role: "Editor de Vídeo",
            text: "Uso muitos clipes do TikTok para edições, então encontrar um bom removedor de marca d'água do TikTok era importante. Esta ferramenta remove o logotipo do TikTok de forma limpa e muito mais rápida do que outros aplicativos que tentei.",
            avatar: avatarPool[0]
        },
        {
            name: "Marcus Williams",
            role: "Cineasta",
            text: "Precisei remover marca d'água de vídeo de algumas filmagens antigas, e os resultados foram incríveis. O vídeo ficou intocado e o processo foi super rápido. Ótimo para criadores de conteúdo.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Chen",
            role: "Gerente de Mídias Sociais",
            text: "Como alguém que edita vídeos diariamente, ter uma ferramenta confiável de remoção de marca d'água de vídeo é essencial. Esta removeu o logotipo de forma limpa e manteve a qualidade alta.",
            avatar: avatarPool[2]
        },
        {
            name: "Priya Sharma",
            role: "Criadora do YouTube",
            text: "Não esperava muito, mas esta ferramenta pode realmente remover marca d'água de vídeo melhor do que alguns softwares pagos. A interface é simples e os resultados parecem profissionais.",
            avatar: avatarPool[13]
        },
        {
            name: "Robert Taylor",
            role: "Editor Freelancer",
            text: "Vi esta ferramenta mencionada online e decidi experimentar. O removedor de marca d'água fez um ótimo trabalho em fotos e vídeos. Lidou com tudo facilmente.",
            avatar: avatarPool[3]
        },
        {
            name: "Ana Silva",
            role: "Produtora de Conteúdo",
            text: "Ferramenta incrível para remover marca d'água de vídeo! A IA detecta e remove automaticamente, economizando horas de trabalho manual. Resultados perfeitos toda vez.",
            avatar: avatarPool[14]
        },
        {
            name: "Carlos Santos",
            role: "Influenciador Digital",
            text: "Uso esta ferramenta regularmente para limpar vídeos do TikTok. Remove marca d'água do TikTok perfeitamente sem afetar a qualidade do vídeo. Altamente recomendado!",
            avatar: avatarPool[6]
        },
        {
            name: "Juliana Costa",
            role: "Designer de Vídeo",
            text: "O melhor removedor de marca d'água de vídeo que já usei. Rápido, eficiente e os resultados são sempre impecáveis. Vale cada centavo do plano Pro.",
            avatar: avatarPool[15]
        },
        {
            name: "Pedro Oliveira",
            role: "Criador de Conteúdo",
            text: "Impressionante! A IA analisa cada frame e remove a marca d'água perfeitamente. Uso para todos os meus projetos de vídeo agora.",
            avatar: avatarPool[7]
        }
    ],

    // Remove Text
    'remove-text': [
        {
            name: "Sophie Turner",
            role: "Criadora de Conteúdo",
            text: "Ferramenta incrível para remover texto de imagem! Uso regularmente para limpar capturas de tela e memes. A IA detecta e remove o texto perfeitamente sem afetar o fundo.",
            avatar: avatarPool[11]
        },
        {
            name: "Jessica Liu",
            role: "Profissional de Marketing Digital",
            text: "O removedor de texto com IA é impressionante. Detecta o texto instantaneamente e reconstrói o fundo perfeitamente. Usei para remover texto de imagem dezenas de vezes.",
            avatar: avatarPool[12]
        },
        {
            name: "Lucas Ferreira",
            role: "Designer Gráfico",
            text: "Melhor ferramenta para remover texto de foto que já usei. Rápida, precisa e os resultados são sempre impecáveis. Economiza muito tempo em projetos.",
            avatar: avatarPool[8]
        },
        {
            name: "Maria Santos",
            role: "Fotógrafa",
            text: "Uso esta ferramenta para remover legendas e texto sobreposto de fotos. Funciona perfeitamente e mantém a qualidade da imagem. Altamente recomendado!",
            avatar: avatarPool[16]
        },
        {
            name: "André Silva",
            role: "Editor de Vídeo",
            text: "Preciso remover texto de capturas de tela regularmente. Esta IA faz isso em segundos com resultados profissionais. Vale cada centavo!",
            avatar: avatarPool[9]
        },
        {
            name: "Camila Costa",
            role: "Gerente de Mídias Sociais",
            text: "Ferramenta essencial para remover texto de imagem para mídias sociais. A IA é inteligente e os resultados parecem naturais. Muito impressionada!",
            avatar: avatarPool[17]
        },
        {
            name: "Rafael Oliveira",
            role: "Desenvolvedor Web",
            text: "Uso para limpar imagens de documentação. Remove texto de foto perfeitamente, deixando o fundo intacto. Processo super rápido!",
            avatar: avatarPool[4]
        },
        {
            name: "Beatriz Lima",
            role: "Estudante",
            text: "Ótima para remover anotações e texto de imagens de estudo. A ferramenta gratuita de remoção de texto com IA funciona melhor do que esperava!",
            avatar: avatarPool[18]
        },
        {
            name: "Fernando Souza",
            role: "Blogueiro",
            text: "Impressionante! A IA analisa cada pixel e remove o texto sem deixar rastros. Uso para todos os meus projetos de blog agora.",
            avatar: avatarPool[6]
        }
    ],

    // Remove Object
    'remove-object': [
        {
            name: "Robert Taylor",
            role: "Editor Freelancer",
            text: "Ferramenta incrível para remover objetos indesejados! Uso para limpar fotos de clientes regularmente. A IA reconstrói o fundo perfeitamente.",
            avatar: avatarPool[3]
        },
        {
            name: "Isabella Martinez",
            role: "Designer Gráfica",
            text: "O removedor de objetos com IA é impressionante. Removi vários elementos de fotos e os resultados foram sempre impecáveis. Economiza muito tempo!",
            avatar: avatarPool[14]
        },
        {
            name: "Carlos Mendes",
            role: "Fotógrafo",
            text: "Melhor ferramenta para remover objetos de imagem que já usei. Rápida, precisa e os resultados parecem naturais. Altamente recomendado!",
            avatar: avatarPool[8]
        },
        {
            name: "Ana Paula",
            role: "Agente Imobiliária",
            text: "Uso para remover objetos indesejados de fotos de propriedades. Funciona perfeitamente e torna as fotos muito mais profissionais. Excelente ferramenta!",
            avatar: avatarPool[16]
        },
        {
            name: "João Silva",
            role: "Designer de Produto",
            text: "Preciso remover objetos de fotos de produtos regularmente. Esta IA faz isso em segundos com resultados profissionais. Vale muito a pena!",
            avatar: avatarPool[9]
        },
        {
            name: "Mariana Costa",
            role: "Blogueira de Viagens",
            text: "Ferramenta essencial para remover fotobombas e objetos indesejados de fotos de viagem. A IA é inteligente e os resultados são perfeitos!",
            avatar: avatarPool[17]
        },
        {
            name: "Paulo Santos",
            role: "Editor de Fotos",
            text: "Uso para limpar imagens de clientes. Remove objetos perfeitamente, deixando o fundo intacto. Processo super rápido e eficiente!",
            avatar: avatarPool[4]
        },
        {
            name: "Juliana Lima",
            role: "Gerente de Marketing",
            text: "Ótima para remover elementos indesejados de fotos de marketing. A ferramenta de remoção de objetos com IA funciona melhor do que esperava!",
            avatar: avatarPool[18]
        },
        {
            name: "Ricardo Oliveira",
            role: "Criador de Conteúdo",
            text: "Impressionante! A IA analisa cada pixel e remove o objeto sem deixar rastros. Uso para todos os meus projetos agora.",
            avatar: avatarPool[6]
        }
    ],

    // Replace Background
    'replace-background': [
        {
            name: "Sarah Mitchell",
            role: "Criadora de Conteúdo",
            text: "Ferramenta incrível para substituir fundos! Uso para criar conteúdo de mídias sociais com fundos diferentes. A IA detecta o assunto perfeitamente e os resultados parecem profissionais.",
            avatar: avatarPool[10]
        },
        {
            name: "Alex Turner",
            role: "Fotógrafo",
            text: "O substituidor de fundo com IA é impressionante. Substitui fundos mantendo todos os detalhes finos como cabelo. Economiza horas de trabalho manual!",
            avatar: avatarPool[3]
        },
        {
            name: "Marina Silva",
            role: "Designer de E-commerce",
            text: "Melhor ferramenta para substituir fundos de produtos que já usei. Rápida, precisa e os resultados são sempre impecáveis. Perfeita para fotos de produtos!",
            avatar: avatarPool[16]
        },
        {
            name: "Lucas Costa",
            role: "Profissional de Marketing",
            text: "Uso para criar variações de imagens de marketing com fundos diferentes. Funciona perfeitamente e torna o processo muito mais eficiente. Excelente ferramenta!",
            avatar: avatarPool[8]
        },
        {
            name: "Camila Santos",
            role: "Influenciadora",
            text: "Preciso substituir fundos de fotos regularmente para conteúdo. Esta IA faz isso em segundos com resultados profissionais. Vale muito a pena!",
            avatar: avatarPool[17]
        },
        {
            name: "Rafael Oliveira",
            role: "Designer Gráfico",
            text: "Ferramenta essencial para substituir fundos rapidamente. A IA é inteligente e os resultados se integram naturalmente. Muito impressionado!",
            avatar: avatarPool[4]
        },
        {
            name: "Ana Lima",
            role: "Fotógrafa de Produtos",
            text: "Uso para criar fundos brancos limpos para produtos. Substitui fundos perfeitamente, preservando todos os detalhes. Processo super rápido!",
            avatar: avatarPool[18]
        },
        {
            name: "Pedro Mendes",
            role: "Criador de Conteúdo Digital",
            text: "Ótima para criar variações de conteúdo com fundos diferentes. A ferramenta de substituição de fundo com IA funciona melhor do que esperava!",
            avatar: avatarPool[9]
        },
        {
            name: "Juliana Ferreira",
            role: "Designer de Mídias Sociais",
            text: "Impressionante! A IA detecta o assunto perfeitamente e substitui o fundo sem deixar rastros. Uso para todos os meus projetos agora.",
            avatar: avatarPool[15]
        }
    ],

    // Remove Background
    'remove-background': [
        {
            name: "Emma Wilson",
            role: "Designer de E-commerce",
            text: "Ferramenta perfeita para remover fundos de fotos de produtos. A IA detecta o produto perfeitamente e cria PNGs transparentes limpos. Economiza muito tempo!",
            avatar: avatarPool[10]
        },
        {
            name: "David Chen",
            role: "Fotógrafo",
            text: "O removedor de fundo com IA é impressionante. Remove fundos mantendo todos os detalhes finos como cabelo. Resultados profissionais toda vez!",
            avatar: avatarPool[3]
        },
        {
            name: "Isabela Costa",
            role: "Designer Gráfica",
            text: "Melhor ferramenta para remover fundos que já usei. Rápida, precisa e os PNGs transparentes são perfeitos para meus projetos de design.",
            avatar: avatarPool[14]
        },
        {
            name: "Miguel Santos",
            role: "Vendedor Online",
            text: "Uso para criar fotos de produtos com fundos brancos limpos. Funciona perfeitamente e torna minhas listagens muito mais profissionais. Excelente!",
            avatar: avatarPool[8]
        },
        {
            name: "Sofia Lima",
            role: "Criadora de Conteúdo",
            text: "Preciso remover fundos de fotos regularmente para conteúdo. Esta IA faz isso em segundos com resultados impecáveis. Vale muito a pena!",
            avatar: avatarPool[11]
        },
        {
            name: "Gabriel Oliveira",
            role: "Designer de Marketing",
            text: "Ferramenta essencial para criar visuais limpos. A IA remove fundos perfeitamente, preservando todos os detalhes. Muito impressionado!",
            avatar: avatarPool[4]
        },
        {
            name: "Laura Mendes",
            role: "Fotógrafa de Produtos",
            text: "Uso para criar fundos transparentes para produtos. Remove fundos perfeitamente, até com objetos complexos. Processo super rápido!",
            avatar: avatarPool[16]
        },
        {
            name: "Bruno Silva",
            role: "Designer Freelancer",
            text: "Ótima para criar recortes limpos para projetos de design. A ferramenta de remoção de fundo com IA funciona melhor do que esperava!",
            avatar: avatarPool[9]
        },
        {
            name: "Carolina Ferreira",
            role: "Gerente de Mídias Sociais",
            text: "Impressionante! A IA detecta o assunto perfeitamente e remove o fundo sem deixar rastros. Uso para todos os meus projetos agora.",
            avatar: avatarPool[17]
        }
    ],

    // Auto Remove People
    'auto-remove-people': [
        {
            name: "Kevin Anderson",
            role: "Fotógrafo de Imóveis",
            text: "Perfeito para remover pessoas aleatórias de fotos de propriedades. Costumava passar horas no Photoshop, mas esta IA faz em segundos com precisão incrível. Mudou meu negócio!",
            avatar: avatarPool[4]
        },
        {
            name: "Nathan Brooks",
            role: "Fotógrafo de Viagens",
            text: "Ferramenta essencial para fotografia de viagens! Remove turistas de pontos turísticos automaticamente. Melhores fotos de paisagens sem estranhos. Absolutamente fantástico!",
            avatar: avatarPool[5]
        },
        {
            name: "Amanda Silva",
            role: "Criadora de Conteúdo",
            text: "Uso para limpar fotos de locais para conteúdo. A IA remove pessoas automaticamente mantendo os detalhes do fundo. Resultados profissionais toda vez!",
            avatar: avatarPool[11]
        },
        {
            name: "Carlos Rodrigues",
            role: "Arquiteto",
            text: "Ferramenta perfeita para fotos de projetos arquitetônicos. Remove pessoas indesejadas de fotos de edifícios automaticamente. Economiza muito tempo!",
            avatar: avatarPool[8]
        },
        {
            name: "Patricia Mendes",
            role: "Fotógrafa",
            text: "Impressionante! A IA detecta e remove todas as pessoas automaticamente mantendo a qualidade da imagem. Uso para todas as minhas fotos de paisagens agora.",
            avatar: avatarPool[16]
        },
        {
            name: "Roberto Lima",
            role: "Designer de Interiores",
            text: "Ferramenta incrível para fotos de interiores. Remove pessoas das fotos de espaços automaticamente. Apresentações muito mais profissionais!",
            avatar: avatarPool[9]
        },
        {
            name: "Fernanda Costa",
            role: "Blogueira de Viagens",
            text: "Adoro esta ferramenta! Remove turistas de fotos de pontos turísticos instantaneamente. Minhas fotos de viagens ficam muito melhores agora.",
            avatar: avatarPool[18]
        },
        {
            name: "Thiago Santos",
            role: "Fotógrafo de Eventos",
            text: "Uso para limpar fotos de locais antes de eventos. A IA remove pessoas automaticamente com resultados perfeitos. Muito impressionado!",
            avatar: avatarPool[6]
        },
        {
            name: "Juliana Ferreira",
            role: "Agente Imobiliária",
            text: "Essencial para fotos de imóveis! Remove pessoas aleatórias automaticamente, deixando as propriedades impecáveis. Economiza horas de edição!",
            avatar: avatarPool[17]
        }
    ],

    // Image Upscaler
    'image-upscaler': [
        {
            name: "Marcus Johnson",
            role: "Fotógrafo Profissional",
            text: "Ferramenta incrível para ampliar fotos! A IA adiciona detalhes impressionantes mesmo em baixa resolução. Minhas impressões ficam perfeitas agora. Altamente recomendado!",
            avatar: avatarPool[5]
        },
        {
            name: "Sophie Chen",
            role: "Designer Gráfica",
            text: "Melhor ampliador de imagem que já usei. A IA não apenas amplia, mas melhora a qualidade. Perfeito para criar banners de alta resolução!",
            avatar: avatarPool[12]
        },
        {
            name: "Diego Santos",
            role: "Editor de Fotos",
            text: "Uso para restaurar fotos antigas de clientes. Amplia 4x mantendo detalhes incríveis. Os resultados são profissionais toda vez!",
            avatar: avatarPool[8]
        },
        {
            name: "Elena Rodriguez",
            role: "Artista Digital",
            text: "Perfeito para ampliar arte digital! A IA preserva todos os detalhes e melhora a nitidez. Economiza muito tempo em projetos.",
            avatar: avatarPool[14]
        },
        {
            name: "James Wilson",
            role: "Designer de Marketing",
            text: "Amplio imagens para materiais de marketing regularmente. Esta IA entrega qualidade impressionante. Vale muito a pena!",
            avatar: avatarPool[4]
        },
        {
            name: "Beatriz Lima",
            role: "Fotógrafa de Produtos",
            text: "Ferramenta essencial para fotos de produtos. Amplia imagens com detalhes incríveis para catálogos. Muito impressionada!",
            avatar: avatarPool[16]
        },
        {
            name: "Antonio Costa",
            role: "Designer Web",
            text: "Uso para criar visuais de alta resolução para sites. A IA amplia perfeitamente mantendo a qualidade. Processo super rápido!",
            avatar: avatarPool[9]
        },
        {
            name: "Carla Mendes",
            role: "Criadora de Conteúdo",
            text: "Ótima para ampliar imagens de mídias sociais. A ferramenta de ampliação com IA funciona melhor do que esperava!",
            avatar: avatarPool[11]
        },
        {
            name: "Ricardo Oliveira",
            role: "Fotógrafo",
            text: "Impressionante! A IA amplia fotos adicionando detalhes realistas. Uso para todas as minhas impressões de grande formato agora.",
            avatar: avatarPool[6]
        }
    ]
}
