// Avatar pool for consistent avatar usage across testimonials
const avatarPool = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
    "https://randomuser.me/api/portraits/women/7.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/women/8.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/women/9.jpg",
    "https://randomuser.me/api/portraits/men/9.jpg",
    "https://randomuser.me/api/portraits/women/10.jpg",
    "https://randomuser.me/api/portraits/men/10.jpg"
];

export const testimonialDataNo: Record<string, any[]> = {
    'home': [
        {
            name: "Emma Hansen",
            role: "Grafisk designer",
            avatar: avatarPool[0],
            rating: 5,
            text: "Fantastisk verktøy for å fjerne vannmerker! Bruker det regelmessig for å rense opp bilder for klienter. AI oppdager og fjerner vannmerker perfekt uten å påvirke bakgrunnen."
        },
        {
            name: "Lars Olsen",
            role: "Sosiale medier-manager",
            avatar: avatarPool[1],
            rating: 5,
            text: "AI-vannmerke-fjerneren er imponerende. Den sletter vannmerker øyeblikkelig og rekonstruerer bakgrunnen perfekt. Har brukt den dusinvis av ganger for å fjerne TikTok-vannmerker."
        },
        {
            name: "Sofia Andersen",
            role: "Fotograf",
            avatar: avatarPool[2],
            rating: 5,
            text: "Perfekt for å fjerne uønskede vannmerker fra stockbilder. Verktøyet fungerer raskt og resultatene er alltid rene og profesjonelle."
        },
        {
            name: "Henrik Berg",
            role: "Innholdsskaper",
            avatar: avatarPool[3],
            rating: 5,
            text: "Bruker dette for å rense opp videothumbnails og sosiale medier-innlegg. Vannmerke-fjerneren er utrolig rask og effektiv!"
        },
        {
            name: "Ingrid Johansen",
            role: "Markedsføringsspesialist",
            avatar: avatarPool[4],
            rating: 5,
            text: "En livredd! Måtte fjerne vannmerker fra kampanjebilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Kristian Nilsen",
            role: "Videoredigerer",
            avatar: avatarPool[5],
            rating: 5,
            text: "Utmerket for å fjerne logoer og tekst fra video-klipp. Behandlingen er rask og kvaliteten forblir høy."
        },
        {
            name: "Anna Larsen",
            role: "E-handelssjef",
            avatar: avatarPool[6],
            rating: 5,
            text: "Bruker dette for produktbilder. Fjerner vannmerker fra leverandørbilder perfekt. Sparer meg masse tid!"
        },
        {
            name: "Martin Eriksen",
            role: "Kreativ direktør",
            avatar: avatarPool[7],
            rating: 5,
            text: "Forsøkte et dusin verktøy - dette er det beste. Renser opp bilder uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Emilie Pedersen",
            role: "Blogger",
            avatar: avatarPool[8],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Fjerner vannmerker fra bilder på sekunder. Mine blogginnlegg ser mye mer profesjonelle ut nå!"
        }
    ],
    'remove-watermark-video': [
        {
            name: "Ole Jensen",
            role: "YouTube-skaper",
            avatar: avatarPool[9],
            rating: 5,
            text: "Denne video-vannmerke-fjerneren er en livredd! Brukte den for å fjerne TikTok-vannmerker fra klippene mine. Resultatene er rene og videokvaliteten forblir perfekt."
        },
        {
            name: "Kari Nordby",
            role: "Sosiale medier-manager",
            avatar: avatarPool[10],
            rating: 5,
            text: "Utrolig verktøy for å fjerne vannmerker fra videoer. Behandler MP4, MOV og AVI-filer raskt. Har klient mine er imponert over de rene resultatene!"
        },
        {
            name: "Erik Svendsen",
            role: "Videoredigerer",
            avatar: avatarPool[11],
            rating: 5,
            text: "Beste gratis video-vannmerke-fjerner jeg har prøvd. Fjerner logoer og tekstoverlegg sømløst. Sparer meg timer med manuell redigering!"
        },
        {
            name: "Lise Berg",
            role: "Innholdsmarkedsfører",
            avatar: avatarPool[12],
            rating: 5,
            text: "Perfekt for å fjerne sosiale medier-vannmerker fra videoer. AI håndterer selv komplekse overlegg med høy presisjon. Høyt anbefalt!"
        },
        {
            name: "Thomas Lund",
            role: "Filmskaper",
            avatar: avatarPool[13],
            rating: 5,
            text: "Bruker dette for å rense opp nedlastede videoklipp. Fjerner TikTok-vannmerker perfekt uten å påvirke videokvaliteten. Fantastisk!"
        },
        {
            name: "Nina Dahl",
            role: "Digital markedsfører",
            avatar: avatarPool[14],
            rating: 5,
            text: "Utmerket verktøy for å fjerne vannmerker fra kampanjevideoer. Prosessen er rask, enkel og resultatene er alltid profesjonelle."
        },
        {
            name: "Andreas Moe",
            role: "Vlogger",
            avatar: avatarPool[15],
            rating: 5,
            text: "Dette verktøyet endret arbeidsflyten min! Fjerner videoer-vannmerker raskt og effektivt. Kan ikke jobbe uten det lenger!"
        },
        {
            name: "Silje Haugen",
            role: "E-læringsskaper",
            avatar: avatarPool[16],
            rating: 5,
            text: "Bruker dette for å rense opp læringsvideoer. Fjerner tekst og logoer perfekt samtidig som videokvaliteten opprettholdes. Verdt hver krone!"
        },
        {
            name: "Magnus Kristensen",
            role: "Kreativ direktør",
            avatar: avatarPool[17],
            rating: 5,
            text: "Beste løsningen for å fjerne vannmerker fra videoer. AI er kraftig og nøyaktig. Teamet mitt bruker det daglig!"
        }
    ],
    'remove-text': [
        {
            name: "Helene Strand",
            role: "Innholdsskaper",
            avatar: avatarPool[18],
            rating: 5,
            text: "Utmerket verktøy for å fjerne tekst fra bilder! Bruker det regelmessig for å rense opp skjermbilder og memer. AI oppdager tekst perfekt og sletter den uten å påvirke bakgrunnen."
        },
        {
            name: "Petter Lien",
            role: "Digital markedsfører",
            avatar: avatarPool[19],
            rating: 5,
            text: "AI-tekst-fjerneren er imponerende. Den sletter bildetekster øyeblikkelig og rekonstruerer bakgrunnen perfekt. Har brukt den dusinvis av ganger for å fjerne tekst fra bilder."
        },
        {
            name: "Camilla Rønning",
            role: "Grafisk designer",
            avatar: avatarPool[0],
            rating: 5,
            text: "Perfekt for å fjerne uønskede tekstoverlegg fra bilder. Verktøyet fungerer raskt og resultatene er alltid rene og profesjonelle."
        },
        {
            name: "Jonas Bakken",
            role: "Fotograf",
            avatar: avatarPool[1],
            rating: 5,
            text: "Bruker dette for å fjerne datostempler og vannmerker fra bilder. Tekst-fjerneren er utrolig rask og effektiv!"
        },
        {
            name: "Maria Solberg",
            role: "Sosiale medier-spesialist",
            avatar: avatarPool[2],
            rating: 5,
            text: "En livredd! Måtte fjerne tekst fra produktbilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Daniel Thorsen",
            role: "Redaktør",
            avatar: avatarPool[3],
            rating: 5,
            text: "Utmerket for å fjerne tekst og logoer fra redaksjonelle bilder. Behandlingen er rask og kvaliteten forblir høy."
        },
        {
            name: "Sara Kristoffersen",
            role: "Blogger",
            avatar: avatarPool[4],
            rating: 5,
            text: "Bruker dette for bloggbilder. Fjerner bildetekster fra stockbilder perfekt. Sparer meg masse tid!"
        },
        {
            name: "Fredrik Olsen",
            role: "Kreativ direktør",
            avatar: avatarPool[5],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Fjerner tekst uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Ida Johansen",
            role: "Markedsføringsleder",
            avatar: avatarPool[6],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Fjerner tekst fra bilder på sekunder. Kampanjene mine ser mye mer profesjonelle ut nå!"
        }
    ],
    'remove-object': [
        {
            name: "Bjørn Sæther",
            role: "Eiendomsmegler",
            avatar: avatarPool[7],
            rating: 5,
            text: "Utmerket verktøy for å fjerne objekter fra eiendomsbilder! Bruker det regelmessig for å fjerne biler, søppelbokser og skilt. AI oppdager objekter perfekt og sletter dem uten å påvirke bakgrunnen."
        },
        {
            name: "Karine Moen",
            role: "Produktfotograf",
            avatar: avatarPool[8],
            rating: 5,
            text: "AI-objekt-fjerneren er imponerende. Den sletter uønskede elementer øyeblikkelig og rekonstruerer bakgrunnen perfekt. Har brukt den dusinvis av ganger for produktbilder."
        },
        {
            name: "Marius Hagen",
            role: "Landskapsfotograf",
            avatar: avatarPool[9],
            rating: 5,
            text: "Perfekt for å fjerne turister og uønskede objekter fra landskapsbilder. Verktøyet fungerer raskt og resultatene er alltid rene og naturlige."
        },
        {
            name: "Lena Solheim",
            role: "Bryllupsfotograf",
            avatar: avatarPool[10],
            rating: 5,
            text: "Bruker dette for å fjerne fotobombere fra bryllupsbilder. Objekt-fjerneren er utrolig rask og effektiv!"
        },
        {
            name: "Stein Larsen",
            role: "Arkitekturfotograf",
            avatar: avatarPool[11],
            rating: 5,
            text: "En livredd! Måtte fjerne bygningsmerker og skilt fra arkitekturbilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Hanne Berg",
            role: "E-handelsredaktør",
            avatar: avatarPool[12],
            rating: 5,
            text: "Utmerket for å fjerne støv, ledninger og bakgrunnselementer fra produktbilder. Behandlingen er rask og kvaliteten forblir høy."
        },
        {
            name: "Geir Haugen",
            role: "Turismefotograf",
            avatar: avatarPool[13],
            rating: 5,
            text: "Bruker dette for å rense opp turismebilder. Fjerner personer og objekter perfekt. Sparer meg masse tid!"
        },
        {
            name: "Ingrid Dahl",
            role: "Kreativ direktør",
            avatar: avatarPool[14],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Fjerner objekter uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Rune Kristensen",
            role: "Fotograf",
            avatar: avatarPool[15],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Fjerner uønskede objekter fra bilder på sekunder. Portretter mine ser mye bedre ut nå!"
        }
    ],
    'replace-background': [
        {
            name: "Kristine Moe",
            role: "E-handelssjef",
            avatar: avatarPool[16],
            rating: 5,
            text: "Utmerket verktøy for å erstatte bakgrunner i produktbilder! Bruker det daglig for vårt nettsted. AI bytter bakgrunner perfekt og holder kantene skarpe og naturlige."
        },
        {
            name: "Tobias Larsen",
            role: "Portrettfotograf",
            avatar: avatarPool[17],
            rating: 5,
            text: "AI-bakgrunnserstatter er imponerende. Den bytter scener øyeblikkelig og bevarer fine detaljer som hår. Har brukt den hundrevis av ganger for studioportretter."
        },
        {
            name: "Anne-Lise Berg",
            role: "Kreativ direktør",
            avatar: avatarPool[18],
            rating: 5,
            text: "Perfekt for å erstatte bakgrunner i kampanjebilder. Verktøyet fungerer raskt og resultatene ser alltid profesjonelle og realistiske ut."
        },
        {
            name: "Jon Strand",
            role: "Produktfotograf",
            avatar: avatarPool[19],
            rating: 5,
            text: "Bruker dette for å bytte bakgrunner til hvitt for produktkataloger. Bakgrunns-erstatteren er utrolig rask og effektiv!"
        },
        {
            name: "Marit Solheim",
            role: "Sosiale medier-manager",
            avatar: avatarPool[0],
            rating: 5,
            text: "En livredd! Måtte erstatte bakgrunner i sosiale medier-innlegg og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Espen Haugen",
            role: "Markedsføringsfotograf",
            avatar: avatarPool[1],
            rating: 5,
            text: "Utmerket for å erstatte bakgrunner i markedsføringsbilder. Behandlingen er rask og kvaliteten forblir førsteklasses."
        },
        {
            name: "Linda Dahl",
            role: "Modedesi gner",
            avatar: avatarPool[2],
            rating: 5,
            text: "Bruker dette for produktbilder. Erstatter bakgrunner perfekt med forskjellige scener. Sparer meg masse tid!"
        },
        {
            name: "Henrik Kristensen",
            role: "Studio-fotograf",
            avatar: avatarPool[3],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Erstatter bakgrunner uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Siri Johansen",
            role: "Innholdsskaper",
            avatar: avatarPool[4],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Erstatter bakgrunner på sekunder. Mine portretter ser så mye mer profesjonelle ut nå!"
        }
    ],
    'remove-background': [
        {
            name: "Vegard Hansen",
            role: "E-handelsredaktør",
            avatar: avatarPool[5],
            rating: 5,
            text: "Utmerket verktøy for å fjerne bakgrunner fra produktbilder! Bruker det daglig for vårt nettsted. AI fjerner bakgrunner perfekt og lager rene transparente PNG-er."
        },
        {
            name: "Nora Solheim",
            role: "Grafisk designer",
            avatar: avatarPool[6],
            rating: 5,
            text: "AI-bakgrunnsfjerner er fantastisk. Den fjerner bakgrunner øyeblikkelig og bevarer fine detaljer som hår. Har brukt den hundrevis av ganger for designprosjekter."
        },
        {
            name: "Ola Berg",
            role: "Produktfotograf",
            avatar: avatarPool[7],
            rating: 5,
            text: "Perfekt for å fjerne bakgrunner fra produktbilder. Verktøyet fungerer raskt og resultatene er alltid rene og profesjonelle."
        },
        {
            name: "Kari Moen",
            role: "Markedsføringsleder",
            avatar: avatarPool[8],
            rating: 5,
            text: "Bruker dette for å lage transparente logoer og produktbilder. Bakgrunns-fjerneren er utrolig rask og effektiv!"
        },
        {
            name: "Stig Larsen",
            role: "Sosiale medier-spesialist",
            avatar: avatarPool[9],
            rating: 5,
            text: "En livredd! Måtte fjerne bakgrunner fra sosiale medier-bilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Berit Haugen",
            role: "Portrettfotograf",
            avatar: avatarPool[10],
            rating: 5,
            text: "Utmerket for å fjerne bakgrunner fra studioportretter. Behandlingen er rask og kvaliteten forblir førsteklasses."
        },
        {
            name: "Tore Dahl",
            role: "Webutvikler",
            avatar: avatarPool[11],
            rating: 5,
            text: "Bruker dette for å lage transparente PNG-er for nettsider. Fjerner bakgrunner perfekt. Sparer meg masse tid!"
        },
        {
            name: "Grete Kristensen",
            role: "Kreativ direktør",
            avatar: avatarPool[12],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Fjerner bakgrunner uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Per Johansen",
            role: "Innholdsskaper",
            avatar: avatarPool[13],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Fjerner bakgrunner på sekunder. Mine bilder ser så mye mer profesjonelle ut nå!"
        }
    ],
    'auto-remove-people': [
        {
            name: "Lars Ekström",
            role: "Reisefotograf",
            avatar: avatarPool[14],
            rating: 5,
            text: "Utmerket verktøy for å fjerne turister fra landemerkebilder! Bruker det for alle reisebildene mine. AI oppdager personer perfekt og sletter dem uten å påvirke bakgrunnen."
        },
        {
            name: "Mette Solberg",
            role: "Eiendomsfotograf",
            avatar: avatarPool[15],
            rating: 5,
            text: "AI-person-fjerner er fantastisk. Den fjerner personer øyeblikkelig og rekonstruerer bakgrunnen perfekt. Har brukt den hundrevis av ganger for eiendomsbilder."
        },
        {
            name: "Erik Dahle",
            role: "Arkitekturfotograf",
            avatar: avatarPool[16],
            rating: 5,
            text: "Perfekt for å fjerne fotgjengere fra arkitekturbilder. Verktøyet fungerer raskt og resultatene er alltid rene og naturlige."
        },
        {
            name: "Anita Larsen",
            role: "Reiseblogger",
            avatar: avatarPool[17],
            rating: 5,
            text: "Bruker dette for å fjerne folkemengder fra turistattraksjoner. Person-fjerneren er utrolig rask og effektiv!"
        },
        {
            name: "Tom Hansen",
            role: "Landskapsfotograf",
            avatar: avatarPool[18],
            rating: 5,
            text: "En livredd! Måtte fjerne turister fra landskapsbilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Silje Berg",
            role: "Fotograf",
            avatar: avatarPool[19],
            rating: 5,
            text: "Utmerket for å fjerne fotobombere fra bilder. Behandlingen er rask og kvaliteten forblir førsteklasses."
        },
        {
            name: "Odd Moen",
            role: "Turismeagent",
            avatar: avatarPool[0],
            rating: 5,
            text: "Bruker dette for å rense opp destinasjonsbilder. Fjerner personer perfekt. Sparer meg masse tid!"
        },
        {
            name: "Karin Haugen",
            role: "Kreativ direktør",
            avatar: avatarPool[1],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Fjerner personer uten synlige spor. Verdt hver krone!"
        },
        {
            name: "Jan Dahl",
            role: "Innholdsskaper",
            avatar: avatarPool[2],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Fjerner personer på sekunder. Mine reisebilder ser så mye bedre ut nå!"
        }
    ],
    'image-upscaler': [
        {
            name: "Astrid Holm",
            role: "Profesjonell fotograf",
            avatar: avatarPool[3],
            rating: 5,
            text: "Utmerket verktøy for å oppskalere bilder til HD! Bruker det for alle kundebildene mine. AI øker oppløsning perfekt og legger til skarpe detaljer."
        },
        {
            name: "Kjell Iversen",
            role: "Grafisk designer",
            avatar: avatarPool[4],
            rating: 5,
            text: "AI-bilde-oppskalerer er fantastisk. Den forbedrer kvalitet øyeblikkelig og gjenoppretter detaljer i gamle bilder. Har brukt den hundrevis av ganger for designprosjekter."
        },
        {
            name: "Liv Andersen",
            role: "E-handelsredaktør",
            avatar: avatarPool[5],
            rating: 5,
            text: "Perfekt for å oppskalere produktbilder. Verktøyet fungerer raskt og resultatene er alltid skarpe og HD-kvalitet."
        },
        {
            name: "Arne Berg",
            role: "Trykkleder",
            avatar: avatarPool[6],
            rating: 5,
            text: "Bruker dette for å forberede bilder for trykk. Bilde-oppskaleringen er utrolig rask og effektiv!"
        },
        {
            name: "Brit Solheim",
            role: "Markedsføringsleder",
            avatar: avatarPool[7],
            rating: 5,
            text: "En livredd! Måtte oppskalere gamle markedsføringsbilder og dette verktøyet gjorde det på sekunder. Høyt anbefalt!"
        },
        {
            name: "Gunnar Larsen",
            role: "Arkivleder",
            avatar: avatarPool[8],
            rating: 5,
            text: "Utmerket for å gjenopprette gamle arkivbilder. Behandlingen er rask og kvaliteten forblir førsteklasses."
        },
        {
            name: "Kjersti Moen",
            role: "Fotoredigeringssjef",
            avatar: avatarPool[9],
            rating: 5,
            text: "Bruker dette for å forbedre mobile bilder til desktop-kvalitet. Oppskalerer perfekt. Sparer meg masse tid!"
        },
        {
            name: "Svein Haugen",
            role: "Kreativ direktør",
            avatar: avatarPool[10],
            rating: 5,
            text: "Forsøkte flere verktøy - dette er det beste. Oppskalerer bilder uten artefakter. Verdt hver krone!"
        },
        {
            name: "Randi Dahl",
            role: "Innholdsskaper",
            avatar: avatarPool[11],
            rating: 5,
            text: "Enkel å bruke og utrolig effektiv. Oppskalerer bilder til HD på sekunder. Mine bilder ser så mye mer profesjonelle ut nå!"
        }
    ]
};

