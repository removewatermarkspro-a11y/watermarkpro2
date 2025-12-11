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

// French testimonials for homepage
export const testimonialsByPageFr: Record<string, Testimonial[]> = {
    'home': [
        {
            name: "James Cooper",
            role: "Monteur Vidéo",
            text: "J'utilise beaucoup de clips TikTok pour mes montages, donc trouver un bon suppresseur de filigrane TikTok était important. Cet outil supprime le logo TikTok proprement et bien plus rapidement que les autres applications que j'ai essayées. Définitivement recommandé.",
            avatar: avatarPool[0]
        },
        {
            name: "Marcus Williams",
            role: "Cinéaste",
            text: "J'avais besoin de supprimer le filigrane d'une vidéo pour d'anciennes séquences, et les résultats étaient incroyables. La vidéo avait l'air intacte et le processus était super rapide. Parfait pour les créateurs de contenu.",
            avatar: avatarPool[1]
        },
        {
            name: "Daniel Chen",
            role: "Gestionnaire Réseaux Sociaux",
            text: "En tant que personne qui édite des vidéos quotidiennement, avoir un outil de suppresseur de filigrane vidéo fiable est un must. Celui-ci a supprimé le logo proprement et maintenu une qualité élevée, ce qui est généralement difficile à trouver.",
            avatar: avatarPool[2]
        },
        {
            name: "Rachel Green",
            role: "Photographe",
            text: "C'est la première fois qu'un effaceur de filigrane ne laisse pas d'étranges taches ou de zones floues. Je l'ai testé sur des images avec des arrière-plans compliqués et la suppression du filigrane était impeccable.",
            avatar: avatarPool[10]
        },
        {
            name: "Sophie Turner",
            role: "Créatrice de Contenu",
            text: "J'ai été vraiment surprise par la qualité de ce suppresseur de filigrane. J'avais besoin de supprimer le filigrane d'une photo pour un projet client, et les résultats semblaient complètement naturels.",
            avatar: avatarPool[11]
        },
        {
            name: "Jessica Liu",
            role: "Marketeur Digital",
            text: "L'IA derrière cet outil est impressionnante. Le suppresseur de filigrane IA détecte le filigrane instantanément et reconstruit l'arrière-plan parfaitement. Je l'ai utilisé pour supprimer le filigrane d'une image des dizaines de fois.",
            avatar: avatarPool[12]
        },
        {
            name: "Robert Taylor",
            role: "Monteur Freelance",
            text: "J'ai vu cet outil mentionné en ligne et j'ai décidé de l'essayer. Le suppresseur de filigrane a fait un excellent travail sur les photos et les vidéos. Il a tout géré facilement.",
            avatar: avatarPool[3]
        },
        {
            name: "Priya Sharma",
            role: "Créatrice YouTube",
            text: "Je ne m'attendais pas à grand-chose, mais cet outil peut vraiment supprimer le filigrane d'une vidéo mieux que certains logiciels payants. L'interface est simple et les résultats semblent professionnels.",
            avatar: avatarPool[13]
        },
        {
            name: "Isabella Martinez",
            role: "Graphiste",
            text: "Je télécharge beaucoup d'images en ligne et j'oublie parfois de sauvegarder les originales. Le suppresseur de filigrane d'image m'a aidé à restaurer plusieurs photos importantes avec une précision presque parfaite.",
            avatar: avatarPool[14]
        }
    ]
}
