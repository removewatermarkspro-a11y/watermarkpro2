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
    ],

    // Remove Watermark Video - French version
    'remove-watermark-video': [
        {
            name: "Jordan Phillips",
            role: "Producteur Vidéo",
            text: "Supprimer les filigranes des séquences stock était impossible avant. Cette IA le fait parfaitement, me faisant économiser énormément sur les frais de licence. Absolument essentiel !",
            avatar: avatarPool[4]
        },
        {
            name: "Hunter Evans",
            role: "YouTubeur",
            text: "Les filigranes TikTok ruinaient mes vidéos de compilation. Cet outil les supprime parfaitement tout en gardant la qualité vidéo intacte. Ma chaîne a considérablement grandi !",
            avatar: avatarPool[5]
        },
        {
            name: "Connor Martinez",
            role: "Étudiant en Cinéma",
            text: "Pour mes projets, j'avais besoin de séquences propres sans filigranes de démo. Cette IA les supprime parfaitement, m'aidant à créer des films d'aspect professionnel avec un budget étudiant.",
            avatar: avatarPool[6]
        },
        {
            name: "Bella Thompson",
            role: "Influenceuse Réseaux Sociaux",
            text: "Republier du contenu TikTok sur Instagram montrait des filigranes disgracieux. Cet outil les supprime parfaitement, rendant ma stratégie cross-plateforme fluide.",
            avatar: avatarPool[10]
        },
        {
            name: "Madison White",
            role: "Gestionnaire de Contenu",
            text: "Notre équipe réutilise du contenu vidéo sur plusieurs plateformes. Supprimer les filigranes spécifiques aux plateformes est crucial, et cette IA le fait parfaitement à chaque fois.",
            avatar: avatarPool[11]
        },
        {
            name: "Stella Anderson",
            role: "Coordinatrice Marketing",
            text: "Les vidéos de campagne ont parfois des logos ou filigranes indésirables. Cet outil les nettoie magnifiquement, offrant des résultats professionnels pour les présentations clients.",
            avatar: avatarPool[12]
        },
        {
            name: "Dylan Cooper",
            role: "Monteur Vidéo",
            text: "Supprimer les horodatages et filigranes des séquences clients fait partie de mon flux de travail quotidien. Cette IA le gère sans effort, économisant des heures de montage manuel.",
            avatar: avatarPool[7]
        },
        {
            name: "Ruby Garcia",
            role: "Stratège Digital",
            text: "Les vidéos propres, sans filigrane, performent mieux sur les réseaux sociaux. Cet outil nous aide à créer du contenu soigné qui génère engagement et conversions.",
            avatar: avatarPool[13]
        },
        {
            name: "Aria Davis",
            role: "Vidéaste",
            text: "Parfois les séquences téléchargées ont des filigranes indésirables. Cette IA les supprime parfaitement, me permettant de livrer des vidéos impeccables aux clients à chaque fois.",
            avatar: avatarPool[14]
        }
    ],

    // Remove Text - French version
    'remove-text': [
        {
            name: "Andrew Hall",
            role: "Restaurateur d'Images",
            text: "Supprimer les anciennes légendes et dates des photos vintage est ma spécialité. Cette IA le fait parfaitement, préservant la qualité d'image originale parfaitement.",
            avatar: avatarPool[0]
        },
        {
            name: "Tyler Young",
            role: "Graphiste",
            text: "Parfois les photos stock ont des superpositions de texte indésirables. Cet outil les supprime proprement, me donnant une toile vierge pour travailler. Incroyablement utile !",
            avatar: avatarPool[1]
        },
        {
            name: "Brandon Wright",
            role: "Gestionnaire Réseaux Sociaux",
            text: "Réutiliser des images avec de l'ancien texte est facile maintenant. L'IA efface le texte parfaitement tout en gardant l'arrière-plan intact. Ma création de contenu est tellement plus rapide !",
            avatar: avatarPool[2]
        },
        {
            name: "Lauren Mitchell",
            role: "Marketeur Digital",
            text: "Supprimer le texte filigrané des images sous licence pour les présentations est fluide. L'IA reconstruit les arrière-plans magnifiquement. Résultats professionnels à chaque fois !",
            avatar: avatarPool[15]
        },
        {
            name: "Rebecca Clark",
            role: "Créatrice de Contenu",
            text: "J'ai souvent besoin de supprimer les légendes et horodatages des captures d'écran. Cet outil le fait parfaitement, rendant mon contenu soigné et professionnel.",
            avatar: avatarPool[16]
        },
        {
            name: "Jasmine Lee",
            role: "Éditrice Photo",
            text: "Nettoyer le texte de mème ou les annotations indésirables est instantané avec cette IA. Les résultats sont impeccables, parfaits pour créer du contenu frais et propre.",
            avatar: avatarPool[17]
        },
        {
            name: "Cameron Brown",
            role: "Archiviste",
            text: "Restaurer des photos historiques signifie souvent supprimer d'anciennes étiquettes et tampons. Cette IA le fait avec précision, aidant à préserver magnifiquement le patrimoine culturel.",
            avatar: avatarPool[3]
        },
        {
            name: "Nina Santos",
            role: "Conceptrice E-learning",
            text: "Supprimer le texte obsolète des images éducatives économise du temps et du budget. Cet outil met à jour les visuels parfaitement pour les nouveaux supports de cours.",
            avatar: avatarPool[18]
        },
        {
            name: "Diana Green",
            role: "Éditrice de Publication",
            text: "Parfois nous devons supprimer le texte de copyright ou les légendes pour les réimpressions. Cette IA le gère parfaitement, maintenant l'intégrité de l'image parfaitement.",
            avatar: avatarPool[19]
        }
    ],

    // Remove Object - French version
    'remove-object': [
        {
            name: "Michael Adams",
            role: "Photographe de Voyage",
            text: "Supprimer les objets indésirables des photos de voyage est sans effort maintenant. Les lignes électriques, les poubelles, tout disparaît parfaitement. Mon portfolio n'a jamais été aussi beau !",
            avatar: avatarPool[6]
        },
        {
            name: "Joshua Clark",
            role: "Agent Immobilier",
            text: "Les photos de propriétés ont souvent des éléments distrayants. Cette IA les supprime parfaitement, faisant paraître les maisons sous leur meilleur jour. Mes annonces se vendent plus vite maintenant !",
            avatar: avatarPool[7]
        },
        {
            name: "Samuel Turner",
            role: "Photographe Sportif",
            text: "Parfois l'équipement ou les spectateurs distraient de l'action. Cet outil les supprime parfaitement tout en gardant les athlètes nets. C'est indispensable !",
            avatar: avatarPool[8]
        },
        {
            name: "Emma Wilson",
            role: "Photographe de Mariage",
            text: "Les panneaux de sortie, câbles et autres distractions ruinaient les prises parfaites. Cette IA les supprime parfaitement, livrant les photos de mariage de rêve que mes clients veulent.",
            avatar: avatarPool[10]
        },
        {
            name: "Amelia Harris",
            role: "Photographe Nature",
            text: "Supprimer les déchets et éléments modernes des photos de nature aide à préserver la beauté sauvage. Cet outil le fait parfaitement, rendant mes photos vraiment immersives.",
            avatar: avatarPool[11]
        },
        {
            name: "Sarah Johnson",
            role: "Blogueuse Culinaire",
            text: "La photographie culinaire nécessite des compositions propres. Cette IA supprime instantanément les ustensiles, miettes ou distractions indésirables. Mes photos de nourriture ont l'air de qualité restaurant !",
            avatar: avatarPool[12]
        },
        {
            name: "David King",
            role: "Photographe Commercial",
            text: "Les shootings clients ont parfois du désordre inévitable. Cet outil le nettoie parfaitement en post-production, livrant les images impeccables dont les entreprises ont besoin.",
            avatar: avatarPool[9]
        },
        {
            name: "Natalie Moore",
            role: "Designer d'Intérieur",
            text: "Supprimer les meubles temporaires ou éléments de mise en scène des photos de design est instantané. L'IA reconstruit magnifiquement les arrière-plans. Parfait pour les présentations avant/après !",
            avatar: avatarPool[13]
        },
        {
            name: "Elena Rodriguez",
            role: "Photographe Lifestyle",
            text: "Parfois des objets aléatoires photobombent les prises lifestyle. Cette IA les efface parfaitement, gardant le focus sur les moments qui comptent. J'adore !",
            avatar: avatarPool[14]
        }
    ],

    // Remove Background - French version
    'remove-background': [
        {
            name: "William Carter",
            role: "Vendeur E-commerce",
            text: "Supprimer les arrière-plans des photos de produits prenait une éternité. Cette IA le fait instantanément avec une détection de bord parfaite. Mes listes de produits ont l'air tellement plus professionnelles maintenant !",
            avatar: avatarPool[2]
        },
        {
            name: "Ethan Garcia",
            role: "Designer Réseaux Sociaux",
            text: "Créer des graphiques pour les réseaux sociaux est tellement plus rapide maintenant. La suppression d'arrière-plan est précise, même avec des cheveux complexes et des détails fins. Changement de jeu total !",
            avatar: avatarPool[3]
        },
        {
            name: "Mason Scott",
            role: "Spécialiste Marketing",
            text: "J'utilise ceci quotidiennement pour créer du matériel promotionnel. L'IA supprime les arrière-plans proprement, facilitant le placement des sujets sur n'importe quel fond. Super efficace !",
            avatar: avatarPool[4]
        },
        {
            name: "Grace Anderson",
            role: "Photographe Portrait",
            text: "Parfait pour créer des portraits professionnels avec des arrière-plans propres. La détection de bord est incroyablement précise, même avec les cheveux volants. Mes clients adorent les résultats !",
            avatar: avatarPool[15]
        },
        {
            name: "Mia Thompson",
            role: "Graphiste",
            text: "Cet outil est essentiel pour mon flux de travail de design. Supprimer les arrière-plans est instantané et précis, me permettant de me concentrer sur la créativité au lieu du masquage fastidieux.",
            avatar: avatarPool[16]
        },
        {
            name: "Lily Evans",
            role: "Propriétaire Boutique en Ligne",
            text: "Mes photos de produits ont maintenant ce look professionnel à fond blanc. L'IA gère même les articles délicats comme les bijoux et la verrerie parfaitement. Les ventes sont en hausse !",
            avatar: avatarPool[17]
        },
        {
            name: "Jacob Wilson",
            role: "Directeur Créatif",
            text: "Nous utilisons ceci pour les présentations clients et le matériel marketing. La qualité de suppression d'arrière-plan est exceptionnelle, économisant à notre équipe d'innombrables heures d'édition manuelle.",
            avatar: avatarPool[5]
        },
        {
            name: "Ava Martinez",
            role: "Blogueuse Mode",
            text: "Créer des collages de tenues pour mon blog est tellement facile maintenant. L'IA supprime les arrière-plans parfaitement, rendant mon contenu soigné et professionnel.",
            avatar: avatarPool[18]
        },
        {
            name: "Charlotte Lewis",
            role: "Designer de Marque",
            text: "Préparer des images pour des projets de branding n'a jamais été aussi facile. Cet outil livre des découpes propres à chaque fois, parfait pour les logos et le matériel marketing.",
            avatar: avatarPool[19]
        }
    ],

    // Replace Background - French version (same as remove-background)
    'replace-background': [
        {
            name: "William Carter",
            role: "Vendeur E-commerce",
            text: "Changer les arrière-plans des photos de produits est instantané maintenant. Je peux créer des visuels cohérents pour toute ma boutique en quelques minutes. Incroyable !",
            avatar: avatarPool[2]
        },
        {
            name: "Ethan Garcia",
            role: "Designer Réseaux Sociaux",
            text: "Remplacer les arrière-plans pour les posts sociaux est tellement facile. L'IA gère même les détails complexes parfaitement. Mon contenu a l'air tellement plus professionnel !",
            avatar: avatarPool[3]
        },
        {
            name: "Mason Scott",
            role: "Photographe Produit",
            text: "Créer des arrière-plans de studio cohérents pour les shootings produits économise des heures. Cette IA le fait parfaitement à chaque fois. Essentiel pour mon workflow !",
            avatar: avatarPool[4]
        },
        {
            name: "Grace Anderson",
            role: "Créatrice de Contenu",
            text: "Changer les arrière-plans pour correspondre à mon esthétique de marque est sans effort. L'IA préserve tous les détails tout en créant des transitions fluides.",
            avatar: avatarPool[15]
        },
        {
            name: "Mia Thompson",
            role: "Designer Marketing",
            text: "Remplacer les arrière-plans pour les campagnes marketing est instantané. Je peux tester différents looks rapidement et choisir le meilleur. Gain de temps énorme !",
            avatar: avatarPool[16]
        },
        {
            name: "Lily Evans",
            role: "Propriétaire Boutique",
            text: "Créer des arrière-plans cohérents pour toutes mes listes de produits a boosté mes ventes. L'IA rend tout si professionnel et soigné !",
            avatar: avatarPool[17]
        },
        {
            name: "Jacob Wilson",
            role: "Directeur Créatif",
            text: "Nous utilisons ceci pour créer des visuels de marque cohérents. Remplacer les arrière-plans est fluide et les résultats sont toujours impeccables.",
            avatar: avatarPool[5]
        },
        {
            name: "Ava Martinez",
            role: "Influenceuse Mode",
            text: "Changer les arrière-plans de mes photos de tenues pour correspondre à mon feed est tellement facile maintenant. Mon Instagram a l'air incroyable !",
            avatar: avatarPool[18]
        },
        {
            name: "Charlotte Lewis",
            role: "Designer de Marque",
            text: "Remplacer les arrière-plans pour les projets clients est instantané. L'IA crée des transitions parfaites, rendant tout professionnel et soigné.",
            avatar: avatarPool[19]
        }
    ],

    // Auto Remove People - French version
    'auto-remove-people': [
        {
            name: "Sophie Martin",
            role: "Photographe Voyage",
            text: "Supprimer les touristes de mes photos de monuments est maintenant instantané. Je peux créer des clichés propres et vides pour mon portfolio en quelques secondes. Incroyable !",
            avatar: avatarPool[2]
        },
        {
            name: "Lucas Bernard",
            role: "Agent Immobilier",
            text: "Nettoyer les photos de propriétés des personnes indésirables est tellement facile. L'IA gère même les foules complexes parfaitement. Mes annonces ont l'air tellement plus professionnelles !",
            avatar: avatarPool[3]
        },
        {
            name: "Emma Dubois",
            role: "Photographe Architecture",
            text: "Créer des images architecturales propres sans personnes économise des heures. Cette IA le fait parfaitement à chaque fois. Essentiel pour mon workflow !",
            avatar: avatarPool[4]
        },
        {
            name: "Thomas Leroy",
            role: "Créateur Contenu",
            text: "Supprimer les inconnus pour correspondre à mon esthétique de marque est sans effort. L'IA préserve tous les détails tout en créant des scènes vides fluides.",
            avatar: avatarPool[15]
        },
        {
            name: "Chloé Moreau",
            role: "Designer Marketing",
            text: "Nettoyer les photos pour les campagnes marketing est instantané. Je peux tester différents looks rapidement et choisir le meilleur. Gain de temps énorme !",
            avatar: avatarPool[16]
        },
        {
            name: "Hugo Petit",
            role: "Photographe Paysage",
            text: "Créer des paysages vides pour toutes mes galeries a boosté mes ventes. L'IA rend tout si propre et soigné !",
            avatar: avatarPool[17]
        },
        {
            name: "Léa Roux",
            role: "Directrice Créative",
            text: "Nous utilisons ceci pour créer des visuels de marque propres. Supprimer les personnes est fluide et les résultats sont toujours impeccables.",
            avatar: avatarPool[5]
        },
        {
            name: "Antoine Garcia",
            role: "Blogueur Voyage",
            text: "Nettoyer mes photos de voyage des foules pour correspondre à mon feed est tellement facile maintenant. Mon blog a l'air incroyable !",
            avatar: avatarPool[18]
        },
        {
            name: "Camille Laurent",
            role: "Designer de Marque",
            text: "Supprimer les personnes pour les projets clients est instantané. L'IA crée des scènes parfaites, rendant tout professionnel et soigné.",
            avatar: avatarPool[19]
        }
    ],

    // Image Upscaler - French version
    'image-upscaler': [
        {
            name: "Marie Dubois",
            role: "Photographe Professionnelle",
            text: "Agrandir mes anciennes photos en 4K est incroyable. Les détails restaurés sont époustouflants. Parfait pour mon portfolio !",
            avatar: avatarPool[2]
        },
        {
            name: "Pierre Lefebvre",
            role: "Designer Graphique",
            text: "Améliorer les images basse résolution pour les clients est maintenant instantané. L'IA préserve la qualité tout en agrandissant. Impressionnant !",
            avatar: avatarPool[3]
        },
        {
            name: "Julie Martin",
            role: "Propriétaire E-commerce",
            text: "Agrandir les photos de produits pour les catalogues économise des heures. Les résultats 4K sont toujours nets et professionnels.",
            avatar: avatarPool[4]
        },
        {
            name: "Alexandre Rousseau",
            role: "Créateur de Contenu",
            text: "Améliorer les visuels pour correspondre à mon esthétique de marque est sans effort. L'IA rend tout cristallin !",
            avatar: avatarPool[15]
        },
        {
            name: "Sophie Bernard",
            role: "Directrice Marketing",
            text: "Agrandir les images pour les campagnes est instantané. Je peux créer des visuels haute résolution rapidement. Gain de temps énorme !",
            avatar: avatarPool[16]
        },
        {
            name: "Lucas Petit",
            role: "Photographe Immobilier",
            text: "Améliorer les photos de propriétés pour les annonces a boosté mes ventes. L'IA rend tout si net et détaillé !",
            avatar: avatarPool[17]
        },
        {
            name: "Emma Moreau",
            role: "Directrice Créative",
            text: "Nous utilisons ceci pour créer des visuels ultra-HD. Agrandir les images est fluide et les résultats sont toujours impeccables.",
            avatar: avatarPool[5]
        },
        {
            name: "Thomas Garcia",
            role: "Blogueur Voyage",
            text: "Améliorer mes photos de voyage pour les impressions est tellement facile maintenant. Mes galeries ont l'air incroyables !",
            avatar: avatarPool[18]
        },
        {
            name: "Chloé Laurent",
            role: "Designer de Marque",
            text: "Agrandir les images pour les projets clients est instantané. L'IA crée une qualité 4K parfaite, rendant tout professionnel.",
            avatar: avatarPool[19]
        }
    ],

    // Free Sora Remover - French version
    'free-sora-remover': [
        {
            name: "Lucas Martin",
            role: "Créateur Vidéo IA",
            avatar: avatarPool[0],
            text: "Ce suppresseur de filigrane Sora change la donne ! Je crée beaucoup de vidéos avec OpenAI Sora et j'ai toujours eu du mal avec le branding. Maintenant je peux retirer les filigranes Sora en quelques secondes et mon contenu est complètement professionnel. L'IA fait un travail incroyable - on ne peut même pas dire que le filigrane était là !"
        },
        {
            name: "Sophie Dubois",
            role: "Responsable Marketing de Contenu",
            avatar: avatarPool[10],
            text: "Enfin un outil qui fonctionne vraiment pour les vidéos Sora AI ! J'avais besoin de retirer le branding OpenAI Sora pour des projets clients et cet outil a parfaitement livré. Super rapide, qualité incroyable, et la suppression de filigrane est impeccable. Je recommande vivement pour tous ceux qui travaillent avec du contenu généré par Sora !"
        },
        {
            name: "Alexandre Petit",
            role: "YouTuber & Créateur de Films",
            avatar: avatarPool[2],
            text: "J'utilise Sora AI pour générer du contenu vidéo pour ma chaîne YouTube, mais les filigranes ont toujours été un problème. Ce suppresseur Sora a tout résolu - résultats propres et professionnels à chaque fois. C'est maintenant une partie essentielle de mon workflow vidéo. Ça vaut chaque centime !"
        },
        {
            name: "Marie Laurent",
            role: "Spécialiste Médias Sociaux",
            avatar: avatarPool[11],
            text: "Meilleur suppresseur de filigrane Sora que j'ai trouvé ! Fonctionne parfaitement sur toutes mes vidéos générées par IA. Le processus automatisé est tellement simple et les résultats sont de qualité broadcast. Plus besoin de passer des heures à essayer de retirer manuellement les filigranes. Cet outil est indispensable pour les créateurs de contenu !"
        },
        {
            name: "Jennifer Park",
            role: "Gestionnaire Réseaux Sociaux",
            avatar: avatarPool[11],
            text: "Sora crée des visuels époustouflants, mais les filigranes ne correspondent pas à notre marque. Cet outil les supprime proprement, rendant le contenu IA prêt pour les réseaux sociaux instantanément !"
        },
        {
            name: "Rachel Kim",
            role: "Stratège de Contenu",
            avatar: avatarPool[12],
            text: "La génération vidéo IA est l'avenir, mais les filigranes limitent l'utilisabilité. Ce suppresseur résout ce problème parfaitement. Maintenant je peux intégrer des vidéos Sora de manière transparente !"
        },
        {
            name: "Trevor Johnson",
            role: "Cinéaste",
            avatar: avatarPool[3],
            text: "Sora est incroyable pour les vidéos de concept, mais je ne peux pas montrer de filigranes aux clients. Cet outil les supprime instantanément tout en préservant la qualité. Absolument essentiel !"
        },
        {
            name: "Nina Rodriguez",
            role: "Designer de Marque",
            avatar: avatarPool[13],
            text: "Utiliser des vidéos générées par IA pour le branding nécessite du contenu propre, sans filigrane. Cet outil gère les filigranes Sora parfaitement. Résultats professionnels en quelques secondes !"
        },
        {
            name: "Samantha Lee",
            role: "Créatrice YouTube",
            avatar: avatarPool[14],
            text: "Intégrer des vidéos Sora dans mon workflow de contenu est facile maintenant. Le suppresseur de filigrane est rapide et précis, gardant mes vidéos polies et professionnelles !"
        }
    ]
}
