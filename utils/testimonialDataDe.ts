// Pool d'avatars partagé
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

// Témoignages allemands par page
export const testimonialDataDe: { [key: string]: Array<{ name: string; role: string; text: string; avatar: string }> } = {
    // Home page - same as watermark-remover
    'home': [
        {
            name: "Thomas Müller",
            role: "Professioneller Fotograf",
            text: "Wasserzeichen von Stockfotos zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[0]
        },
        {
            name: "Anna Schmidt",
            role: "Content Creator",
            text: "TikTok-Wasserzeichen in Sekunden entfernen! Meine Videos sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[1]
        },
        {
            name: "Michael Weber",
            role: "Grafikdesigner",
            text: "Logos und Text von Bildern für Kundenprojekte zu entfernen spart Stunden. Die Ergebnisse sind immer sauber und natürlich.",
            avatar: avatarPool[2]
        },
        {
            name: "Sophie Fischer",
            role: "Social Media Manager",
            text: "Wasserzeichen von heruntergeladenen Bildern zu entfernen ist so schnell. Ich kann meine Beiträge mühelos bereinigen!",
            avatar: avatarPool[3]
        },
        {
            name: "Lukas Becker",
            role: "Video Editor",
            text: "Wasserzeichen aus Videos zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[4]
        },
        {
            name: "Emma Hoffmann",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen zu bereinigen. Wasserzeichen zu entfernen ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[5]
        },
        {
            name: "Felix Wagner",
            role: "Freiberuflicher Designer",
            text: "Wasserzeichen von Fotos für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[6]
        },
        {
            name: "Laura Schulz",
            role: "Reisebloggerin",
            text: "Wasserzeichen von meinen Reisefotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[7]
        },
        {
            name: "Jonas Richter",
            role: "Markendesigner",
            text: "Wasserzeichen von Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[8]
        }
    ],

    // Watermark Remover - Version allemande
    'watermark-remover': [
        {
            name: "Thomas Müller",
            role: "Professioneller Fotograf",
            text: "Wasserzeichen von Stockfotos zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[0]
        },
        {
            name: "Anna Schmidt",
            role: "Content Creator",
            text: "TikTok-Wasserzeichen in Sekunden entfernen! Meine Videos sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[1]
        },
        {
            name: "Michael Weber",
            role: "Grafikdesigner",
            text: "Logos und Text von Bildern für Kundenprojekte zu entfernen spart Stunden. Die Ergebnisse sind immer sauber und natürlich.",
            avatar: avatarPool[2]
        },
        {
            name: "Sophie Fischer",
            role: "Social Media Manager",
            text: "Wasserzeichen von heruntergeladenen Bildern zu entfernen ist so schnell. Ich kann meine Beiträge mühelos bereinigen!",
            avatar: avatarPool[3]
        },
        {
            name: "Lukas Becker",
            role: "Video Editor",
            text: "Wasserzeichen aus Videos zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[4]
        },
        {
            name: "Emma Hoffmann",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen zu bereinigen. Wasserzeichen zu entfernen ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[5]
        },
        {
            name: "Felix Wagner",
            role: "Freiberuflicher Designer",
            text: "Wasserzeichen von Fotos für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[6]
        },
        {
            name: "Laura Schulz",
            role: "Reisebloggerin",
            text: "Wasserzeichen von meinen Reisefotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[7]
        },
        {
            name: "Jonas Richter",
            role: "Markendesigner",
            text: "Wasserzeichen von Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[8]
        }
    ],

    // Remove Watermark from Video - German version
    'remove-watermark-video': [
        {
            name: "Maximilian Koch",
            role: "Video Producer",
            text: "Video-Wasserzeichen zu entfernen war noch nie so einfach. Die KI macht es automatisch und die Qualität bleibt perfekt!",
            avatar: avatarPool[9]
        },
        {
            name: "Julia Zimmermann",
            role: "Content Creatorin",
            text: "TikTok-Logos von meinen Videos zu entfernen ist jetzt mühelos. Meine Inhalte sehen so viel professioneller aus!",
            avatar: avatarPool[10]
        },
        {
            name: "David Schneider",
            role: "Videoeditor",
            text: "Wasserzeichen aus MP4-Dateien zu entfernen spart mir Stunden. Die Ergebnisse sind immer sauber und natürlich.",
            avatar: avatarPool[11]
        },
        {
            name: "Sarah Braun",
            role: "Social Media Managerin",
            text: "Video-Wasserzeichen für Kampagnen zu entfernen ist so schnell. Ich kann meine Videos mühelos bereinigen!",
            avatar: avatarPool[12]
        },
        {
            name: "Tim Krause",
            role: "Filmemacher",
            text: "Logos und Text aus Videos zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[13]
        },
        {
            name: "Nina Lehmann",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Videos für Kampagnen zu bereinigen. Wasserzeichen zu entfernen ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[14]
        },
        {
            name: "Patrick Wolff",
            role: "Freiberuflicher Editor",
            text: "Video-Wasserzeichen für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[15]
        },
        {
            name: "Lisa Hartmann",
            role: "Vloggerin",
            text: "Wasserzeichen von meinen Videos zu entfernen macht sie teilbar. Meine Inhalte sehen jetzt so viel besser aus!",
            avatar: avatarPool[16]
        },
        {
            name: "Marco Neumann",
            role: "Videodesigner",
            text: "Wasserzeichen aus Videos für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[17]
        }
    ],

    // Remove Text - German version
    'remove-text': [
        {
            name: "Sebastian Bauer",
            role: "Grafikdesigner",
            text: "Text aus Bildern zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[0]
        },
        {
            name: "Katharina Meyer",
            role: "Content Creatorin",
            text: "Bildunterschriften in Sekunden zu entfernen! Meine Bilder sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[1]
        },
        {
            name: "Andreas Klein",
            role: "Fotograf",
            text: "Datumsstempel und Text von Fotos für Kundenprojekte zu entfernen spart Stunden. Die Ergebnisse sind immer sauber.",
            avatar: avatarPool[2]
        },
        {
            name: "Maria Schröder",
            role: "Social Media Managerin",
            text: "Text von heruntergeladenen Bildern zu entfernen ist so schnell. Ich kann meine Beiträge mühelos bereinigen!",
            avatar: avatarPool[3]
        },
        {
            name: "Christian Lang",
            role: "Designer",
            text: "Unerwünschte Beschriftungen zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[4]
        },
        {
            name: "Petra Huber",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen zu bereinigen. Text zu entfernen ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[5]
        },
        {
            name: "Stefan Vogt",
            role: "Freiberuflicher Designer",
            text: "Text von Fotos für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[6]
        },
        {
            name: "Jennifer Roth",
            role: "Bloggerin",
            text: "Text von meinen Fotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[7]
        },
        {
            name: "Daniel Krüger",
            role: "Markendesigner",
            text: "Text aus Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[8]
        }
    ],

    // Remove Object - German version
    'remove-object': [
        {
            name: "Oliver Schwarz",
            role: "Fotograf",
            text: "Objekte aus Fotos zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[9]
        },
        {
            name: "Sabine Weiß",
            role: "Content Creatorin",
            text: "Unerwünschte Elemente in Sekunden zu entfernen! Meine Bilder sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[10]
        },
        {
            name: "Martin Schmitt",
            role: "Grafikdesigner",
            text: "Personen und Objekte von Bildern für Kundenprojekte zu entfernen spart Stunden. Die Ergebnisse sind immer sauber.",
            avatar: avatarPool[11]
        },
        {
            name: "Claudia Frank",
            role: "Social Media Managerin",
            text: "Objekte von heruntergeladenen Bildern zu entfernen ist so schnell. Ich kann meine Beiträge mühelos bereinigen!",
            avatar: avatarPool[12]
        },
        {
            name: "Tobias Möller",
            role: "Designer",
            text: "Unerwünschte Elemente zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[13]
        },
        {
            name: "Monika Berger",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen zu bereinigen. Objekte zu entfernen ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[14]
        },
        {
            name: "Ralf Sommer",
            role: "Freiberuflicher Fotograf",
            text: "Objekte von Fotos für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[15]
        },
        {
            name: "Bianca Stein",
            role: "Reisebloggerin",
            text: "Objekte von meinen Reisefotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[16]
        },
        {
            name: "Florian Jung",
            role: "Markendesigner",
            text: "Objekte aus Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[17]
        }
    ],

    // Remove Background - German version
    'remove-background': [
        {
            name: "Benjamin Keller",
            role: "E-Commerce Manager",
            text: "Hintergründe aus Produktfotos zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meinen Shop!",
            avatar: avatarPool[0]
        },
        {
            name: "Vanessa Groß",
            role: "Produktfotografin",
            text: "Transparente Hintergründe in Sekunden zu erstellen! Meine Produktbilder sehen jetzt so professionell aus. Absolut beeindruckend!",
            avatar: avatarPool[1]
        },
        {
            name: "Philipp Herrmann",
            role: "Grafikdesigner",
            text: "Hintergründe von Bildern für Kundenprojekte zu entfernen spart Stunden. Die Ergebnisse sind immer sauber und präzise.",
            avatar: avatarPool[2]
        },
        {
            name: "Simone Dietrich",
            role: "Social Media Managerin",
            text: "Hintergründe von heruntergeladenen Bildern zu entfernen ist so schnell. Ich kann meine Beiträge mühelos bereinigen!",
            avatar: avatarPool[3]
        },
        {
            name: "Jan Pfeiffer",
            role: "Designer",
            text: "Hintergründe zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[4]
        },
        {
            name: "Kerstin Lorenz",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Produktbilder für Kampagnen zu bereinigen. Hintergrundentfernung ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[5]
        },
        {
            name: "Matthias Scholz",
            role: "Freiberuflicher Designer",
            text: "Hintergründe von Fotos für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[6]
        },
        {
            name: "Anja Baumann",
            role: "Produktmanagerin",
            text: "Hintergründe von meinen Produktfotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[7]
        },
        {
            name: "Sven Engel",
            role: "Markendesigner",
            text: "Hintergründe aus Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[8]
        }
    ],

    // Replace Background - German version
    'replace-background': [
        {
            name: "Alexander Vogel",
            role: "Fotograf",
            text: "Hintergründe zu ersetzen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[9]
        },
        {
            name: "Christina Wolff",
            role: "Content Creatorin",
            text: "Neue Hintergründe in Sekunden zu erstellen! Meine Bilder sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[10]
        },
        {
            name: "Robert Hahn",
            role: "Grafikdesigner",
            text: "Hintergründe für Kundenprojekte zu ersetzen spart Stunden. Die Ergebnisse sind immer sauber und natürlich.",
            avatar: avatarPool[11]
        },
        {
            name: "Melanie Schuster",
            role: "Social Media Managerin",
            text: "Hintergründe von Bildern zu ersetzen ist so schnell. Ich kann meine Beiträge mühelos anpassen!",
            avatar: avatarPool[12]
        },
        {
            name: "Jürgen Böhm",
            role: "Designer",
            text: "Hintergründe zu ersetzen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[13]
        },
        {
            name: "Heike Schreiber",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen anzupassen. Hintergrundersetzung ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[14]
        },
        {
            name: "Uwe Köhler",
            role: "Freiberuflicher Fotograf",
            text: "Hintergründe für Kunden zu ersetzen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[15]
        },
        {
            name: "Gisela Mayer",
            role: "Produktfotografin",
            text: "Hintergründe meiner Produktfotos zu ersetzen macht sie vielseitig. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[16]
        },
        {
            name: "Dirk Zimmermann",
            role: "Markendesigner",
            text: "Hintergründe für Kundenprojekte zu ersetzen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[17]
        }
    ],

    // Auto Remove People - German version
    'auto-remove-people': [
        {
            name: "Klaus Werner",
            role: "Reisefotograf",
            text: "Personen aus Fotos zu entfernen ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[0]
        },
        {
            name: "Ingrid Schulze",
            role: "Immobilienmaklerin",
            text: "Touristen in Sekunden zu entfernen! Meine Immobilienfotos sehen jetzt so professionell aus. Absolut beeindruckend!",
            avatar: avatarPool[1]
        },
        {
            name: "Wolfgang Krause",
            role: "Architekturfotograf",
            text: "Personen von Architekturfotos zu entfernen spart Stunden. Die Ergebnisse sind immer sauber und natürlich.",
            avatar: avatarPool[2]
        },
        {
            name: "Renate Hoffmann",
            role: "Reisebloggerin",
            text: "Menschenmengen von Sehenswürdigkeiten zu entfernen ist so schnell. Ich kann meine Fotos mühelos bereinigen!",
            avatar: avatarPool[3]
        },
        {
            name: "Helmut Fischer",
            role: "Fotograf",
            text: "Personen zu entfernen war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[4]
        },
        {
            name: "Ursula Becker",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Standortfotos für Kampagnen zu bereinigen. Personenentfernung ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[5]
        },
        {
            name: "Günther Richter",
            role: "Freiberuflicher Fotograf",
            text: "Personen für Kunden zu entfernen ist jetzt sofort. Die KI erstellt perfekte, saubere Ergebnisse jedes Mal.",
            avatar: avatarPool[6]
        },
        {
            name: "Erika Braun",
            role: "Reisefotografin",
            text: "Personen von meinen Reisefotos zu entfernen macht sie teilbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[7]
        },
        {
            name: "Bernd Lange",
            role: "Architekt",
            text: "Personen aus Bildern für Kundenprojekte zu entfernen ist mühelos. Die KI macht alles professionell und sauber.",
            avatar: avatarPool[8]
        }
    ],

    // Image Upscaler - German version
    'image-upscaler': [
        {
            name: "Frank Schäfer",
            role: "Fotograf",
            text: "Bilder auf 4K zu vergrößern ist jetzt mühelos. Die KI bewahrt die Qualität perfekt. Unverzichtbar für meine Arbeit!",
            avatar: avatarPool[9]
        },
        {
            name: "Gabriele Krüger",
            role: "Grafikdesignerin",
            text: "Bildauflösung in Sekunden zu erhöhen! Meine Bilder sehen jetzt so professionell aus. Absolut beeindruckendes Tool!",
            avatar: avatarPool[10]
        },
        {
            name: "Hans-Peter Koch",
            role: "Druckdesigner",
            text: "Bilder für Druckprojekte zu vergrößern spart Stunden. Die Ergebnisse sind immer scharf und klar.",
            avatar: avatarPool[11]
        },
        {
            name: "Brigitte Neumann",
            role: "Social Media Managerin",
            text: "Niedrig aufgelöste Bilder zu vergrößern ist so schnell. Ich kann meine Beiträge mühelos verbessern!",
            avatar: avatarPool[12]
        },
        {
            name: "Dieter Hartmann",
            role: "Designer",
            text: "Bilder zu vergrößern war noch nie so einfach. Die KI macht es automatisch. Riesiger Zeitsparer!",
            avatar: avatarPool[13]
        },
        {
            name: "Helga Lehmann",
            role: "Marketingdirektorin",
            text: "Wir verwenden dies, um Bilder für Kampagnen zu verbessern. Bildvergrößerung ist nahtlos und die Qualität ist erstklassig.",
            avatar: avatarPool[14]
        },
        {
            name: "Karl Wolff",
            role: "Freiberuflicher Fotograf",
            text: "Bilder für Kunden zu vergrößern ist jetzt sofort. Die KI erstellt perfekte, scharfe Ergebnisse jedes Mal.",
            avatar: avatarPool[15]
        },
        {
            name: "Margot Stein",
            role: "Produktfotografin",
            text: "Meine Produktfotos zu vergrößern macht sie druckbar. Meine Galerie sieht jetzt so viel besser aus!",
            avatar: avatarPool[16]
        },
        {
            name: "Werner Jung",
            role: "Markendesigner",
            text: "Bilder für Kundenprojekte zu vergrößern ist mühelos. Die KI macht alles professionell und scharf.",
            avatar: avatarPool[17]
        }
    ],

    // Free Sora Remover - German version
    'free-sora-remover': [
        {
            name: "Marcus Reynolds",
            role: "KI-Content-Creator",
            avatar: avatarPool[0],
            text: "Sora generiert tolle Videos, aber das Wasserzeichen war ein Problem. Dieses Tool entfernt es perfekt ohne die Videoqualität zu beeinträchtigen. Jetzt kann ich meine KI-Videos professionell nutzen!"
        },
        {
            name: "Derek Chang",
            role: "Digital Marketer",
            avatar: avatarPool[1],
            text: "Das Sora-Wasserzeichen aus KI-generierten Videos für Kundenprojekte zu entfernen ist essentiell. Dieses Tool macht es nahtlos in Sekunden. Revolutionär für Marketingkampagnen!"
        },
        {
            name: "Ryan Foster",
            role: "Videoeditor",
            avatar: avatarPool[2],
            text: "Ich nutze Sora für B-Roll-Material, aber das Wasserzeichen stört. Dieser KI-Entferner bereinigt es einwandfrei. Die Ausgabe sieht komplett professionell aus!"
        },
        {
            name: "Laura Mitchell",
            role: "Kreativdirektorin",
            avatar: avatarPool[10],
            text: "Unsere Agentur nutzt viel KI-generierte Inhalte. Sora-Wasserzeichen schnell zu entfernen ist entscheidend für Kundenpräsentationen. Dieses Tool liefert jedes Mal perfekte Ergebnisse!"
        },
        {
            name: "Jennifer Park",
            role: "Social Media Managerin",
            avatar: avatarPool[11],
            text: "Sora erstellt atemberaubende Visuals, aber Wasserzeichen passen nicht zu unserer Marke. Dieses Tool entfernt sie sauber und macht KI-Inhalte sofort social-media-ready!"
        },
        {
            name: "Rachel Kim",
            role: "Content-Strategin",
            avatar: avatarPool[12],
            text: "KI-Videogenerierung ist die Zukunft, aber Wasserzeichen schränken die Nutzbarkeit ein. Dieser Entferner löst dieses Problem perfekt. Jetzt kann ich Sora-Videos nahtlos integrieren!"
        },
        {
            name: "Trevor Johnson",
            role: "Filmemacher",
            avatar: avatarPool[3],
            text: "Sora ist unglaublich für Konzeptvideos, aber ich kann Kunden keine Wasserzeichen zeigen. Dieses Tool entfernt sie sofort unter Beibehaltung der Qualität. Absolut essentiell!"
        },
        {
            name: "Nina Rodriguez",
            role: "Markendesignerin",
            avatar: avatarPool[13],
            text: "KI-generierte Videos für Branding zu nutzen erfordert saubere, wasserzeichenfreie Inhalte. Dieses Tool behandelt Sora-Wasserzeichen perfekt. Professionelle Ergebnisse in Sekunden!"
        },
        {
            name: "Samantha Lee",
            role: "YouTube-Creatorin",
            avatar: avatarPool[14],
            text: "Sora-Videos in meinen Content-Workflow zu integrieren ist jetzt einfach. Der Wasserzeichen-Entferner ist schnell und präzise, hält meine Videos poliert und professionell!"
        }
    ]
}
