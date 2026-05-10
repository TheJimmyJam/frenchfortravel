// French → Italian Native Lesson Plan
// Français comme langue d'instruction, italien comme objectif
// vocab: { it: "mot italien", fr: "traduction française", ipa: "phonétique pour francophones" }
// Phonétique : tch=/tʃ/ (comme "c" devant e/i), dj=/dʒ/ (comme "g" devant e/i), ly=/ʎ/ (gli), gn=/ɲ/ (comme en français), ts=/ts/, les doubles consonnes se prononcent plus longues

var COURSE_FR_IT = [
  {
    day: 1,
    title: "Salutations et politesse",
    titleNative: "Saluti e cortesia",
    focus: "L'italien et le français sont des langues sœurs — vous allez reconnaître de nombreux mots dès le début ! Mais la prononciation est très différente : les voyelles italiennes sont pures et ouvertes, et les consonnes doubles se prononcent vraiment double.",
    vocab: [
      { it: "Buongiorno", fr: "Bonjour", ipa: "bwon-DJOR-no" },
      { it: "Buonasera", fr: "Bonsoir", ipa: "bwo-na-SE-ra" },
      { it: "Buonanotte", fr: "Bonne nuit", ipa: "bwo-na-NOT-te" },
      { it: "Ciao", fr: "Salut / Ciao (informel)", ipa: "TCHAO" },
      { it: "Arrivederci", fr: "Au revoir", ipa: "ar-ri-ve-DER-tchi" },
      { it: "Per favore", fr: "S'il vous plaît", ipa: "per-fa-VO-re" },
      { it: "Grazie", fr: "Merci", ipa: "GRA-tsye" },
      { it: "Prego", fr: "De rien / Je vous en prie", ipa: "PRE-go" },
      { it: "Mi scusi", fr: "Excusez-moi (formel)", ipa: "mi-SKU-zi" },
      { it: "Scusa", fr: "Excuse-moi (informel)", ipa: "SKU-za" }
    ],
    phrases: [
      { it: "Buongiorno, come sta?", fr: "Bonjour, comment allez-vous ?", ipa: "bwon-DJOR-no, KO-me-STA" },
      { it: "Sto bene, grazie.", fr: "Je vais bien, merci.", ipa: "sto-BE-ne, GRA-tsye" },
      { it: "E lei?", fr: "Et vous ?", ipa: "e-LEI" },
      { it: "Piacere.", fr: "Enchanté(e).", ipa: "pya-TCHE-re" },
      { it: "A presto!", fr: "À bientôt !", ipa: "a-PRES-to" },
      { it: "A dopo!", fr: "À tout à l'heure !", ipa: "a-DO-po" }
    ],
    grammar: "L'italien a deux formes de politesse : 'tu' (informel, comme en français) et 'Lei' (formel — attention, c'est le même mot que 'elle', mais avec une majuscule !). Avec les inconnus, utilisez toujours 'Lei'. La grande différence avec le français : en italien, toutes les voyelles se prononcent clairement et séparément. Pas de son nasal comme en français — 'buono' se prononce bou-O-no, pas 'bwôno'.",
    practice: [
      "Répétez cinq fois à voix haute : 'Buongiorno ! Come sta ? Sto bene, grazie.'",
      "Imaginez entrer dans un café à Rome. Saluez le barista avec 'Buongiorno !' avant de commander.",
      "Pratiquez la séquence complète des adieux : 'Arrivederci ! A presto !'"
    ]
  },
  {
    day: 2,
    title: "Les chiffres",
    titleNative: "I numeri",
    focus: "Bonne nouvelle : les chiffres italiens sont très réguliers — beaucoup plus simples que les 'quatre-vingts' et 'soixante-dix' français ! Vous allez apprécier cette logique.",
    vocab: [
      { it: "uno / una", fr: "un / une", ipa: "U-no / U-na" },
      { it: "due", fr: "deux", ipa: "DU-e" },
      { it: "tre", fr: "trois", ipa: "TRE" },
      { it: "quattro", fr: "quatre", ipa: "KWAT-tro" },
      { it: "cinque", fr: "cinq", ipa: "TCHIN-kwe" },
      { it: "sei", fr: "six", ipa: "SEI" },
      { it: "sette", fr: "sept", ipa: "SET-te" },
      { it: "otto", fr: "huit", ipa: "OT-to" },
      { it: "nove", fr: "neuf", ipa: "NO-ve" },
      { it: "dieci", fr: "dix", ipa: "DYE-tchi" },
      { it: "venti", fr: "vingt", ipa: "VEN-ti" },
      { it: "cento", fr: "cent", ipa: "TCHEN-to" }
    ],
    phrases: [
      { it: "Quanto costa?", fr: "Combien ça coûte ?", ipa: "KWAN-to-KOS-ta" },
      { it: "Sono cinque euro.", fr: "C'est cinq euros.", ipa: "SO-no-TCHIN-kwe-EU-ro" },
      { it: "Ho trent'anni.", fr: "J'ai trente ans.", ipa: "o-tren-TAN-ni" },
      { it: "Sono le tre.", fr: "Il est trois heures.", ipa: "SO-no-le-TRE" },
      { it: "Me ne dia due, per favore.", fr: "Donnez-m'en deux, s'il vous plaît.", ipa: "me-ne-DI-a-DU-e, per-fa-VO-re" }
    ],
    grammar: "En italien, 70 = 'settanta', 80 = 'ottanta', 90 = 'novanta' — bien plus simple que le français ! De 11 à 16, les formes sont irrégulières : undici, dodici, tredici, quattordici, quindici, sedici. De 17 en avant : diciassette (10+7), diciotto, diciannove. De 20 à 99, on forme les nombres comme en français mais sans tiret : venti + uno = ventuno, trenta + due = trentadue.",
    practice: [
      "Comptez de 1 à 10 en italien à voix haute jusqu'à ce que ça vienne naturellement.",
      "Dites votre âge en italien : 'Ho ___ anni.'",
      "Essayez de dire le prix de 3 objets autour de vous en imaginant être dans un marché à Florence."
    ]
  },
  {
    day: 3,
    title: "Au café",
    titleNative: "Al caffè",
    focus: "L'Italie est le pays du café — le pays où l'espresso a été inventé ! La culture du café est très différente : on se tient au comptoir, on boit en 30 secondes, et c'est souvent moins d'un euro.",
    vocab: [
      { it: "un caffè", fr: "un espresso", ipa: "un-kaf-FE" },
      { it: "un caffellatte", fr: "un café au lait / un latte", ipa: "un-kaf-fel-LAT-te" },
      { it: "un cappuccino", fr: "un cappuccino", ipa: "un-kap-pu-TCHI-no" },
      { it: "un tè", fr: "un thé", ipa: "un-TE" },
      { it: "un succo d'arancia", fr: "un jus d'orange", ipa: "un-SUK-ko-da-RAN-tcha" },
      { it: "un'acqua", fr: "une eau", ipa: "u-NAK-kwa" },
      { it: "un cornetto", fr: "un croissant", ipa: "un-kor-NET-to" },
      { it: "il conto", fr: "l'addition", ipa: "il-KON-to" },
      { it: "la terrazza", fr: "la terrasse", ipa: "la-ter-RAT-tsa" },
      { it: "il cameriere", fr: "le serveur", ipa: "il-ka-me-RYE-re" }
    ],
    phrases: [
      { it: "Vorrei un caffè, per favore.", fr: "Je voudrais un expresso, s'il vous plaît.", ipa: "vor-REI-un-kaf-FE, per-fa-VO-re" },
      { it: "Un cappuccino, per favore.", fr: "Un cappuccino, s'il vous plaît.", ipa: "un-kap-pu-TCHI-no, per-fa-VO-re" },
      { it: "Il conto, per favore.", fr: "L'addition, s'il vous plaît.", ipa: "il-KON-to, per-fa-VO-re" },
      { it: "Da asporto.", fr: "Pour emporter.", ipa: "da-as-POR-to" },
      { it: "Un tavolo per due, per favore.", fr: "Une table pour deux, s'il vous plaît.", ipa: "un-TA-vo-lo-per-DU-e, per-fa-VO-re" },
      { it: "Che dolci avete?", fr: "Qu'est-ce que vous avez comme pâtisseries ?", ipa: "ke-DOL-tchi-a-VE-te" }
    ],
    grammar: "Pour commander en italien, utilisez 'vorrei' (je voudrais — conditionnel de 'volere') ou simplement 'un caffè, per favore'. Sachez que le cappuccino se boit UNIQUEMENT le matin en Italie — commander un cappuccino après le repas vous trahira immédiatement comme touriste ! L'espresso, lui, se boit à toute heure.",
    practice: [
      "Entraînez-vous à commander : 'Buongiorno ! Vorrei un cappuccino e un cornetto, per favore.'",
      "Mémorisez comment demander l'addition : 'Il conto, per favore !'",
      "Imaginez-vous debout au comptoir d'un bar à Rome. Que commanderiez-vous ? Dites votre commande complète en italien."
    ]
  },
  {
    day: 4,
    title: "La nourriture",
    titleNative: "Il cibo",
    focus: "La gastronomie italienne est mondialement reconnue. Connaître ce vocabulaire vous permettra de vous régaler dans les marchés, les trattorias et les supermarchés — et d'apprécier la culture de l'intérieur.",
    vocab: [
      { it: "il pane", fr: "le pain", ipa: "il-PA-ne" },
      { it: "il formaggio", fr: "le fromage", ipa: "il-for-MAD-djo" },
      { it: "il burro", fr: "le beurre", ipa: "il-BUR-ro" },
      { it: "la carne", fr: "la viande", ipa: "la-KAR-ne" },
      { it: "il pesce", fr: "le poisson", ipa: "il-PE-she" },
      { it: "la verdura", fr: "les légumes", ipa: "la-ver-DU-ra" },
      { it: "la frutta", fr: "les fruits", ipa: "la-FRUT-ta" },
      { it: "il dolce", fr: "le dessert", ipa: "il-DOL-tche" },
      { it: "delizioso", fr: "délicieux", ipa: "de-li-TSYO-zo" },
      { it: "piccante", fr: "épicé / piquant", ipa: "pik-KAN-te" }
    ],
    phrases: [
      { it: "È delizioso!", fr: "C'est délicieux !", ipa: "e-de-li-TSYO-zo" },
      { it: "Sono vegetariano/a.", fr: "Je suis végétarien(ne).", ipa: "SO-no-ve-dje-ta-RYA-no" },
      { it: "Non mi piace il pesce.", fr: "Je n'aime pas le poisson.", ipa: "non-mi-PYA-tche-il-PE-she" },
      { it: "Cosa consiglia?", fr: "Qu'est-ce que vous recommandez ?", ipa: "KO-za-kon-SI-lya" },
      { it: "Senza glutine, per favore.", fr: "Sans gluten, s'il vous plaît.", ipa: "SEN-tsa-glu-TI-ne, per-fa-VO-re" }
    ],
    grammar: "En italien, les articles partitifs (du, de la, des) s'expriment avec 'del/della/dei/delle' — très similaire au français ! 'Voglio del pane' (je veux du pain), 'voglio della carne' (je veux de la viande). Mais dans la conversation courante, surtout au restaurant, on les omet souvent : 'Voglio pane' est tout à fait acceptable.",
    practice: [
      "Décrivez trois aliments que vous aimez avec 'Mi piace...' et trois que vous n'aimez pas avec 'Non mi piace...'",
      "Mémorisez : 'È delizioso !' — vous l'utiliserez souvent en Italie.",
      "Comment diriez-vous que vous êtes allergique à quelque chose ? Entraînez-vous avec 'Sono allergico/a a...'"
    ]
  },
  {
    day: 5,
    title: "Présentations et famille",
    titleNative: "Presentazioni e famiglia",
    focus: "Se présenter et parler de sa famille — un incontournable de toute conversation. Les Italiens sont très chaleureux et la famille occupe une place centrale dans leur culture.",
    vocab: [
      { it: "mi chiamo", fr: "je m'appelle", ipa: "mi-KYA-mo" },
      { it: "ho ... anni", fr: "j'ai ... ans", ipa: "o-AN-ni" },
      { it: "vengo da", fr: "je viens de / je suis de", ipa: "VEN-go-da" },
      { it: "la famiglia", fr: "la famille", ipa: "la-fa-MI-lya" },
      { it: "il padre / la madre", fr: "le père / la mère", ipa: "il-PA-dre / la-MA-dre" },
      { it: "il fratello / la sorella", fr: "le frère / la sœur", ipa: "il-fra-TEL-lo / la-so-REL-la" },
      { it: "il marito / la moglie", fr: "le mari / la femme", ipa: "il-ma-RI-to / la-MO-lye" },
      { it: "i figli", fr: "les enfants / les fils", ipa: "i-FI-lyi" },
      { it: "i nonni", fr: "les grands-parents", ipa: "i-NON-ni" },
      { it: "single / celibe / nubile", fr: "célibataire", ipa: "SIN-gle / TCHE-li-be / NU-bi-le" }
    ],
    phrases: [
      { it: "Mi chiamo Sophie. E lei?", fr: "Je m'appelle Sophie. Et vous ?", ipa: "mi-KYA-mo-SO-fye. e-LEI" },
      { it: "Vengo dalla Francia.", fr: "Je viens de France.", ipa: "VEN-go-dal-la-FRAN-tcha" },
      { it: "Ho due fratelli e una sorella.", fr: "J'ai deux frères et une sœur.", ipa: "o-DU-e-fra-TEL-li-e-U-na-so-REL-la" },
      { it: "Sono sposato/a.", fr: "Je suis marié(e).", ipa: "SO-no-spo-ZA-to" },
      { it: "Ha dei figli?", fr: "Vous avez des enfants ?", ipa: "a-dei-FI-lyi" }
    ],
    grammar: "En italien, les nationalités s'accordent en genre : 'sono francese' (homme ou femme — 'francese' ne change pas). Mais pour certaines : 'sono italiano' (homme), 'sono italiana' (femme). Contrairement au français, les nationalités ne prennent pas de majuscule : 'sono francese', pas 'Francese'. Le verbe 'essere' (être) est irrégulier : sono, sei, è, siamo, siete, sono.",
    practice: [
      "Écrivez votre présentation complète en italien : nom, âge, origine, situation familiale.",
      "Enregistrez-vous en train de vous présenter et écoutez votre prononciation.",
      "Pratiquez : '—Come si chiama ? —Mi chiamo... Vengo da...'"
    ]
  },
  {
    day: 6,
    title: "Couleurs et description",
    titleNative: "Colori e descrizione",
    focus: "Les couleurs et les adjectifs descriptifs vous permettent de parler des gens, des objets et des lieux. Bonne nouvelle : le système d'accord des adjectifs est très similaire au français !",
    vocab: [
      { it: "rosso/a", fr: "rouge", ipa: "ROS-so" },
      { it: "blu / azzurro/a", fr: "bleu(e)", ipa: "BLU / a-DZUR-ro" },
      { it: "verde", fr: "vert(e)", ipa: "VER-de" },
      { it: "giallo/a", fr: "jaune", ipa: "DJAL-lo" },
      { it: "bianco/a", fr: "blanc(he)", ipa: "BYAN-ko" },
      { it: "nero/a", fr: "noir(e)", ipa: "NE-ro" },
      { it: "grande", fr: "grand(e)", ipa: "GRAN-de" },
      { it: "piccolo/a", fr: "petit(e)", ipa: "PIK-ko-lo" },
      { it: "bello/a", fr: "beau / belle", ipa: "BEL-lo" },
      { it: "vecchio/a", fr: "vieux / vieille", ipa: "VEK-kyo" }
    ],
    phrases: [
      { it: "Cerco un vestito rosso.", fr: "Je cherche une robe rouge.", ipa: "TCHER-ko-un-ves-TI-to-ROS-so" },
      { it: "È troppo grande per me.", fr: "C'est trop grand pour moi.", ipa: "e-TROP-po-GRAN-de-per-ME" },
      { it: "Ce l'avete in blu?", fr: "Vous l'avez en bleu ?", ipa: "tche-la-VE-te-in-BLU" },
      { it: "È molto carino!", fr: "C'est très joli !", ipa: "e-MOL-to-ka-RI-no" },
      { it: "È alto e bruno.", fr: "Il est grand et brun.", ipa: "e-AL-to-e-BRU-no" }
    ],
    grammar: "En italien, les adjectifs s'accordent en genre et en nombre, exactement comme en français. Mais la règle est plus systématique : -o pour le masculin singulier, -a pour le féminin singulier, -i pour le masculin pluriel, -e pour le féminin pluriel. Exemple : 'un gatto nero / una robe nera / i gatti neri / le robe nere'. Les adjectifs en -e ne changent pas au singulier : 'grande, verde, triste'.",
    practice: [
      "Décrivez vos vêtements d'aujourd'hui en utilisant des couleurs en italien.",
      "Décrivez un membre de votre famille : 'Mia madre è alta e ha gli occhi azzurri.'",
      "Entraînez-vous avec les couleurs en regardant les objets autour de vous et en les nommant en italien."
    ]
  },
  {
    day: 7,
    title: "Au marché",
    titleNative: "Al mercato",
    focus: "Les marchés italiens ('mercati') sont une institution. Les vendeurs sont expressifs et chaleureux — c'est l'endroit idéal pour pratiquer l'italien avec les locaux.",
    vocab: [
      { it: "le mele", fr: "les pommes", ipa: "le-ME-le" },
      { it: "i pomodori", fr: "les tomates", ipa: "i-po-mo-DO-ri" },
      { it: "le fragole", fr: "les fraises", ipa: "le-FRA-go-le" },
      { it: "l'aglio", fr: "l'ail", ipa: "LA-lyo" },
      { it: "le cipolle", fr: "les oignons", ipa: "le-tchi-POL-le" },
      { it: "un chilo di", fr: "un kilo de", ipa: "un-KI-lo-di" },
      { it: "mezzo chilo di", fr: "une livre / un demi-kilo de", ipa: "MED-dzo-KI-lo-di" },
      { it: "quanto costa?", fr: "c'est combien ?", ipa: "KWAN-to-KOS-ta" },
      { it: "troppo caro/a", fr: "trop cher / chère", ipa: "TROP-po-KA-ro" },
      { it: "fresco/a", fr: "frais / fraîche", ipa: "FRES-ko" }
    ],
    phrases: [
      { it: "Vorrei un chilo di pomodori.", fr: "Je voudrais un kilo de tomates.", ipa: "vor-REI-un-KI-lo-di-po-mo-DO-ri" },
      { it: "Sono freschi?", fr: "Ils sont frais ?", ipa: "SO-no-FRES-ki" },
      { it: "È un po' troppo caro.", fr: "C'est un peu trop cher.", ipa: "e-un-po-TROP-po-KA-ro" },
      { it: "Lo prendo.", fr: "Je le prends.", ipa: "lo-PREN-do" },
      { it: "Mi dia mezzo chilo di fragole.", fr: "Donnez-moi un demi-kilo de fraises.", ipa: "mi-DI-a-MED-dzo-KI-lo-di-FRA-go-le" }
    ],
    grammar: "Pour exprimer une quantité en italien : 'un chilo di pomodori', 'un litro di latte' — identique au français 'un kilo de tomates', 'un litre de lait'. 'Vorrei' (je voudrais) est le conditionnel de 'volere' — plus poli que 'voglio' (je veux). Utilisez 'vorrei' dans les commerces et restaurants.",
    practice: [
      "Imaginez-vous au marché. Écrivez votre liste de courses en italien et entraînez-vous à la dicter.",
      "Pratiquez le dialogue : '—Quanto costano le fragole ? —Tre euro al chilo. —Lo prendo.'",
      "Apprenez trois fruits ou légumes supplémentaires et utilisez-les dans des phrases."
    ]
  },
  {
    day: 8,
    title: "Transport et directions",
    titleNative: "Trasporti e indicazioni",
    focus: "Se déplacer en Italie requiert de connaître les transports et de savoir demander son chemin. Les Italiens sont très expressifs pour donner des directions — avec les mains autant qu'avec les mots !",
    vocab: [
      { it: "la metropolitana", fr: "le métro", ipa: "la-me-tro-po-li-TA-na" },
      { it: "l'autobus", fr: "le bus", ipa: "lau-to-BUS" },
      { it: "il treno", fr: "le train", ipa: "il-TRE-no" },
      { it: "la stazione", fr: "la gare / la station", ipa: "la-sta-TSYO-ne" },
      { it: "la fermata", fr: "l'arrêt (de bus/métro)", ipa: "la-fer-MA-ta" },
      { it: "a destra", fr: "à droite", ipa: "a-DES-tra" },
      { it: "a sinistra", fr: "à gauche", ipa: "a-si-NIS-tra" },
      { it: "sempre dritto", fr: "tout droit", ipa: "SEM-pre-DRIT-to" },
      { it: "vicino a", fr: "près de", ipa: "vi-TCHI-no-a" },
      { it: "lontano da", fr: "loin de", ipa: "lon-TA-no-da" }
    ],
    phrases: [
      { it: "Dov'è la stazione della metro?", fr: "Où est la station de métro ?", ipa: "do-VE-la-sta-TSYO-ne-del-la-ME-tro" },
      { it: "A quanti minuti è?", fr: "C'est à combien de minutes ?", ipa: "a-KWAN-ti-mi-NU-ti-e" },
      { it: "Giri a sinistra al semaforo.", fr: "Tournez à gauche au feu rouge.", ipa: "DJI-ri-a-si-NIS-tra-al-se-MA-fo-ro" },
      { it: "Un biglietto, per favore.", fr: "Un ticket, s'il vous plaît.", ipa: "un-bi-LYET-to, per-fa-VO-re" },
      { it: "Questo autobus va al centro?", fr: "Ce bus va au centre-ville ?", ipa: "KWES-to-au-to-BUS-va-al-TCHEN-tro" }
    ],
    grammar: "En italien, les prépositions se contractent avec les articles : 'a + il = al', 'a + la = alla', 'a + i = ai', 'a + le = alle'. Exemples : 'vado al mercato' (je vais au marché), 'vado alla stazione' (je vais à la gare). Également : 'di + il = del', 'di + la = della'. Ces contractions sont obligatoires — identique au français 'à + le = au'.",
    practice: [
      "Entraînez-vous à donner des directions imaginaires depuis votre domicile jusqu'à un endroit proche.",
      "Mémorisez les quatre directions : destra, sinistra, dritto, indietro.",
      "Comment diriez-vous 'L'hôtel est près de la gare' ? Construisez la phrase en italien."
    ]
  },
  {
    day: 9,
    title: "Au restaurant",
    titleNative: "Al ristorante",
    focus: "Manger dans un restaurant italien, c'est une expérience culturelle. Les repas sont longs, les portions généreuses, et les Italiens prennent leur temps — la 'dolce vita' à table !",
    vocab: [
      { it: "un tavolo", fr: "une table", ipa: "un-TA-vo-lo" },
      { it: "il menù / la carta", fr: "le menu / la carte", ipa: "il-me-NU / la-KAR-ta" },
      { it: "l'antipasto", fr: "l'entrée / l'antipasto", ipa: "lan-ti-PAS-to" },
      { it: "il primo piatto", fr: "le premier plat (pâtes/risotto)", ipa: "il-PRI-mo-PYAT-to" },
      { it: "il secondo piatto", fr: "le plat principal (viande/poisson)", ipa: "il-se-KON-do-PYAT-to" },
      { it: "il dolce", fr: "le dessert", ipa: "il-DOL-tche" },
      { it: "al sangue / ben cotto", fr: "saignant / bien cuit", ipa: "al-SAN-gwe / ben-KOT-to" },
      { it: "il conto", fr: "l'addition", ipa: "il-KON-to" },
      { it: "la mancia", fr: "le pourboire", ipa: "la-MAN-tcha" },
      { it: "una prenotazione", fr: "une réservation", ipa: "u-na-pre-no-ta-TSYO-ne" }
    ],
    phrases: [
      { it: "Ho una prenotazione a nome di Dupont.", fr: "J'ai une réservation au nom de Dupont.", ipa: "o-u-na-pre-no-ta-TSYO-ne-a-NO-me-di-du-PON" },
      { it: "Siamo in quattro.", fr: "Nous sommes quatre.", ipa: "SYA-mo-in-KWAT-tro" },
      { it: "La bistecca al sangue, per favore.", fr: "Le steak saignant, s'il vous plaît.", ipa: "la-bi-STEK-ka-al-SAN-gwe, per-fa-VO-re" },
      { it: "Il servizio è incluso?", fr: "Le service est compris ?", ipa: "il-ser-VI-tsyo-e-in-KLU-zo" },
      { it: "Era eccellente!", fr: "C'était excellent !", ipa: "E-ra-et-tchel-LEN-te" }
    ],
    grammar: "Le repas italien suit un ordre strict : antipasto (entrée), primo (pâtes ou risotto), secondo (viande ou poisson), contorno (légume d'accompagnement), dolce (dessert), caffè. On ne mange pas les pâtes en même temps que la viande ! 'Il menù del giorno' est le menu du jour à prix fixe. Le service n'est pas toujours inclus — vérifiez 'il coperto' (couvert) sur l'addition.",
    practice: [
      "Entraînez-vous à réserver une table : 'Buonasera, vorrei prenotare un tavolo per due persone stasera.'",
      "Mémorisez la séquence du repas italien : antipasto → primo → secondo → dolce → caffè.",
      "Comment commanderiez-vous votre steak préféré en italien ? Entraînez-vous avec la phrase complète."
    ]
  },
  {
    day: 10,
    title: "La météo et les saisons",
    titleNative: "Il tempo e le stagioni",
    focus: "La météo est un sujet de conversation universel. En Italie, le temps varie énormément selon les régions — du soleil méditerranéen au froid alpin. C'est un excellent sujet pour parler avec les locaux.",
    vocab: [
      { it: "fa bel tempo", fr: "il fait beau", ipa: "fa-bel-TEM-po" },
      { it: "fa caldo", fr: "il fait chaud", ipa: "fa-KAL-do" },
      { it: "fa freddo", fr: "il fait froid", ipa: "fa-FRED-do" },
      { it: "piove", fr: "il pleut", ipa: "PYO-ve" },
      { it: "nevica", fr: "il neige", ipa: "NE-vi-ka" },
      { it: "il sole", fr: "le soleil", ipa: "il-SO-le" },
      { it: "la nuvola", fr: "le nuage", ipa: "la-NU-vo-la" },
      { it: "la primavera", fr: "le printemps", ipa: "la-pri-ma-VE-ra" },
      { it: "l'estate", fr: "l'été", ipa: "les-TA-te" },
      { it: "l'inverno", fr: "l'hiver", ipa: "lin-VER-no" }
    ],
    phrases: [
      { it: "Che tempo fa oggi?", fr: "Quel temps fait-il aujourd'hui ?", ipa: "ke-TEM-po-fa-OD-dji" },
      { it: "Fa bel tempo oggi!", fr: "Il fait très beau aujourd'hui !", ipa: "fa-bel-TEM-po-OD-dji" },
      { it: "Spero che non piova.", fr: "J'espère qu'il ne pleuvra pas.", ipa: "SPE-ro-ke-non-PYO-va" },
      { it: "Qual è la temperatura?", fr: "Quelle est la température ?", ipa: "kwal-e-la-tem-pe-ra-TU-ra" },
      { it: "Adoro l'estate in Italia.", fr: "J'adore l'été en Italie.", ipa: "a-DO-ro-les-TA-te-in-i-TA-lya" }
    ],
    grammar: "En italien, la météo utilise le verbe 'fare' impersonnel : 'fa caldo/freddo/bel tempo' — exactement comme le 'il fait' français ! Pour les phénomènes : 'piove' (il pleut), 'nevica' (il neige). La différence majeure avec le français : en italien il n'y a pas de sujet impersonnel 'il' — on dit directement 'fa caldo', pas 'il fa caldo'.",
    practice: [
      "Décrivez le temps qu'il fait aujourd'hui là où vous êtes, en italien.",
      "Quelle est votre saison préférée ? Dites pourquoi en italien : 'Adoro... perché...'",
      "Entraînez-vous au petit dialogue météo : '—Che tempo fa? —Fa bel tempo, ma un po' freddo.'"
    ]
  },
  {
    day: 11,
    title: "À l'hôtel",
    titleNative: "In albergo",
    focus: "Que vous séjourniez dans un agriturismo toscan ou un hôtel romain, vous devez savoir communiquer avec le personnel. L'hospitalité italienne est légendaire — profitez-en !",
    vocab: [
      { it: "la camera", fr: "la chambre", ipa: "la-KA-me-ra" },
      { it: "la chiave / la tessera", fr: "la clé / la carte", ipa: "la-KYA-ve / la-TES-se-ra" },
      { it: "la colazione", fr: "le petit-déjeuner", ipa: "la-ko-la-TSYO-ne" },
      { it: "la reception", fr: "la réception", ipa: "la-re-TSEP-shon" },
      { it: "l'ascensore", fr: "l'ascenseur", ipa: "la-shen-SO-re" },
      { it: "il wifi", fr: "le wifi", ipa: "il-WI-fi" },
      { it: "prenotare", fr: "réserver", ipa: "pre-no-TA-re" },
      { it: "disponibile", fr: "disponible", ipa: "dis-po-NI-bi-le" },
      { it: "il check-out", fr: "le check-out / le départ", ipa: "il-CHEK-aut" },
      { it: "vista sul mare", fr: "vue sur la mer", ipa: "VIS-ta-sul-MA-re" }
    ],
    phrases: [
      { it: "Ho una prenotazione.", fr: "J'ai une réservation.", ipa: "o-u-na-pre-no-ta-TSYO-ne" },
      { it: "A che ora è la colazione?", fr: "À quelle heure est le petit-déjeuner ?", ipa: "a-ke-O-ra-e-la-ko-la-TSYO-ne" },
      { it: "C'è un problema con la camera.", fr: "Il y a un problème avec la chambre.", ipa: "tche-un-pro-BLE-ma-kon-la-KA-me-ra" },
      { it: "Vorrei una camera con vista.", fr: "Je voudrais une chambre avec vue.", ipa: "vor-REI-u-na-KA-me-ra-kon-VIS-ta" },
      { it: "A che ora devo lasciare la camera?", fr: "À quelle heure dois-je libérer la chambre ?", ipa: "a-ke-O-ra-DE-vo-la-SHA-re-la-KA-me-ra" }
    ],
    grammar: "'C'è' (il y a, singulier) et 'ci sono' (il y a, pluriel) : 'C'è un problema' (il y a un problème), 'Ci sono delle camere disponibili' (il y a des chambres disponibles). Négation : 'Non c'è...' / 'Non ci sono...'. C'est l'équivalent parfait du 'il y a' français — la structure est identique !",
    practice: [
      "Entraînez-vous au check-in complet : vous présenter, confirmer la réservation, demander des informations.",
      "Imaginez un problème dans votre chambre (pas de serviettes, wifi en panne) et comment le signaler.",
      "Mémorisez : 'C'è un problema con...' — c'est votre phrase de secours pour tout problème."
    ]
  },
  {
    day: 12,
    title: "Vêtements et shopping",
    titleNative: "Abbigliamento e shopping",
    focus: "L'Italie est l'une des capitales mondiales de la mode — Milan, Gucci, Prada, Armani. Savoir faire des achats en italien vous permettra de vivre l'expérience shopping à fond.",
    vocab: [
      { it: "un pantalone", fr: "un pantalon", ipa: "un-pan-ta-LO-ne" },
      { it: "una camicia", fr: "une chemise", ipa: "u-na-ka-MI-tcha" },
      { it: "un vestito / un abito", fr: "une robe / un costume", ipa: "un-ves-TI-to / un-A-bi-to" },
      { it: "un cappotto", fr: "un manteau", ipa: "un-kap-POT-to" },
      { it: "le scarpe", fr: "les chaussures", ipa: "le-SKAR-pe" },
      { it: "la taglia", fr: "la taille", ipa: "la-TA-lya" },
      { it: "provare", fr: "essayer (un vêtement)", ipa: "pro-VA-re" },
      { it: "mi sta bene", fr: "ça me va bien", ipa: "mi-sta-BE-ne" },
      { it: "in saldo", fr: "en solde", ipa: "in-SAL-do" },
      { it: "la cassa", fr: "la caisse", ipa: "la-KAS-sa" }
    ],
    phrases: [
      { it: "Cerco una camicia bianca.", fr: "Je cherche une chemise blanche.", ipa: "TCHER-ko-u-na-ka-MI-tcha-BYAN-ka" },
      { it: "Porto la taglia M.", fr: "Je fais du M.", ipa: "POR-to-la-TA-lya-EM-me" },
      { it: "Posso provarlo?", fr: "Je peux l'essayer ?", ipa: "POS-so-pro-VAR-lo" },
      { it: "È troppo stretto.", fr: "C'est trop serré.", ipa: "e-TROP-po-STRET-to" },
      { it: "Accettate la carta?", fr: "Vous acceptez la carte ?", ipa: "at-tchet-TA-te-la-KAR-ta" }
    ],
    grammar: "Les cabines d'essayage s'appellent 'i camerini'. Le verbe 'provare' (essayer) est régulier : provo, provi, prova, proviamo, provate, provano. Pour demander une autre couleur : 'Ce l'avete in...?' Les tailles italiennes sont différentes des françaises — vérifiez votre taille équivalente avant de partir !",
    practice: [
      "Entraînez-vous au dialogue complet : entrer, chercher, demander la taille, essayer, payer.",
      "Comment diriez-vous que quelque chose est trop grand ? Trop petit ? Entraînez-vous aux deux.",
      "Mémorisez les couleurs du jour 6 et combinez-les : 'Cerco un cappotto nero.'"
    ]
  },
  {
    day: 13,
    title: "Santé et corps",
    titleNative: "Salute e corpo",
    focus: "Espérez ne jamais en avoir besoin, mais en cas de problème de santé en Italie, pouvoir s'exprimer clairement est essentiel. Le système de santé italien est public et accessible.",
    vocab: [
      { it: "la testa", fr: "la tête", ipa: "la-TES-ta" },
      { it: "la pancia / lo stomaco", fr: "le ventre / l'estomac", ipa: "la-PAN-tcha / lo-STO-ma-ko" },
      { it: "la schiena", fr: "le dos", ipa: "la-SKYE-na" },
      { it: "la gola", fr: "la gorge", ipa: "la-GO-la" },
      { it: "la febbre", fr: "la fièvre", ipa: "la-FEB-bre" },
      { it: "mi fa male il/la", fr: "j'ai mal au/à la", ipa: "mi-fa-MA-le" },
      { it: "il medico", fr: "le médecin", ipa: "il-ME-di-ko" },
      { it: "la farmacia", fr: "la pharmacie", ipa: "la-far-ma-TCHI-a" },
      { it: "una ricetta", fr: "une ordonnance", ipa: "u-na-ri-TCHET-ta" },
      { it: "il pronto soccorso", fr: "les urgences", ipa: "il-PRON-to-sof-KOR-so" }
    ],
    phrases: [
      { it: "Mi fa male la testa.", fr: "J'ai mal à la tête.", ipa: "mi-fa-MA-le-la-TES-ta" },
      { it: "Ho la febbre.", fr: "J'ai de la fièvre.", ipa: "o-la-FEB-bre" },
      { it: "Mi sento molto male.", fr: "Je me sens très mal.", ipa: "mi-SEN-to-MOL-to-MA-le" },
      { it: "Dov'è la farmacia più vicina?", fr: "Où est la pharmacie la plus proche ?", ipa: "do-VE-la-far-ma-TCHI-a-pyu-vi-TCHI-na" },
      { it: "Chiami il 118!", fr: "Appelez le 118 (urgences) !", ipa: "KYA-mi-il-tchen-to-di-TCIOT-to" }
    ],
    grammar: "Pour exprimer la douleur en italien : 'mi fa male + partie du corps' (singulier) ou 'mi fanno male + parties du corps' (pluriel). 'Mi fa male la testa' (j'ai mal à la tête), 'mi fanno male i piedi' (j'ai mal aux pieds). Le 118 est le numéro des urgences médicales en Italie (équivalent du 15 en France).",
    practice: [
      "Mémorisez : '—Cosa c'è? —Mi fa male la testa e ho la febbre.'",
      "Identifiez les parties du corps en italien en les montrant du doigt et en les disant à voix haute.",
      "Comment demanderiez-vous un analgésique à la pharmacie ? Entraînez-vous."
    ]
  },
  {
    day: 14,
    title: "Le travail et les professions",
    titleNative: "Il lavoro e le professioni",
    focus: "Parler de son travail est inévitable dans toute conversation. C'est souvent l'une des premières questions qu'on pose en Italie, après les salutations.",
    vocab: [
      { it: "cosa fa di lavoro?", fr: "qu'est-ce que vous faites dans la vie ?", ipa: "KO-za-fa-di-la-VO-ro" },
      { it: "lavoro nel/nella", fr: "je travaille dans le/la", ipa: "la-VO-ro-nel-NEL-la" },
      { it: "medico/a", fr: "médecin", ipa: "ME-di-ko" },
      { it: "ingegnere", fr: "ingénieur(e)", ipa: "in-dje-NJE-re" },
      { it: "insegnante", fr: "enseignant(e)", ipa: "in-se-NJAN-te" },
      { it: "avvocato/a", fr: "avocat(e)", ipa: "av-vo-KA-to" },
      { it: "informatico/a", fr: "informaticien(ne)", ipa: "in-for-MA-ti-ko" },
      { it: "cuoco/a", fr: "cuisinier / cuisinière", ipa: "KWO-ko" },
      { it: "in proprio", fr: "à son compte / indépendant", ipa: "in-PRO-pryo" },
      { it: "l'ufficio", fr: "le bureau", ipa: "luf-FI-tcho" }
    ],
    phrases: [
      { it: "Cosa fa nella vita?", fr: "Qu'est-ce que vous faites dans la vie ?", ipa: "KO-za-fa-nel-la-VI-ta" },
      { it: "Sono insegnante a Parigi.", fr: "Je suis enseignant(e) à Paris.", ipa: "SO-no-in-se-NJAN-te-a-pa-RI-dji" },
      { it: "Lavoro in proprio.", fr: "Je travaille à mon compte.", ipa: "la-VO-ro-in-PRO-pryo" },
      { it: "Mi piace molto il mio lavoro.", fr: "J'aime beaucoup mon travail.", ipa: "mi-PYA-tche-MOL-to-il-MI-o-la-VO-ro" },
      { it: "Sto cercando lavoro.", fr: "Je cherche un emploi.", ipa: "sto-tcher-KAN-do-la-VO-ro" }
    ],
    grammar: "En italien, les professions n'ont pas d'article après 'essere' : 'Sono medico' (pas 'Sono un medico'). Mais avec un adjectif : 'È un buon medico'. Beaucoup de professions ont une forme féminine en -a : medico → medica, avvocato → avvocata, insegnante reste invariable. Contrairement au français, les professions en -e ne changent pas au féminin.",
    practice: [
      "Dites votre profession en italien : 'Sono...' Si vous êtes étudiant(e) : 'Sono studente/studentessa.'",
      "Entraînez-vous : '—Cosa fa di lavoro ? —Sono..., lavoro nel/nella...'",
      "Apprenez 5 professions pertinentes pour votre entourage et entraînez-vous avec."
    ]
  },
  {
    day: 15,
    title: "Loisirs et temps libre",
    titleNative: "Hobby e tempo libero",
    focus: "Les loisirs sont un sujet de conversation naturel et personnel. Parler de ce qu'on aime faire crée des liens authentiques avec les Italiens — qui ont souvent une passion intense pour leurs hobbies.",
    vocab: [
      { it: "leggere", fr: "lire", ipa: "LED-dje-re" },
      { it: "ascoltare musica", fr: "écouter de la musique", ipa: "as-kol-TA-re-MU-zi-ka" },
      { it: "fare sport", fr: "faire du sport", ipa: "FA-re-SPOR" },
      { it: "viaggiare", fr: "voyager", ipa: "vjad-DJA-re" },
      { it: "cucinare", fr: "cuisiner", ipa: "ku-tchi-NA-re" },
      { it: "dipingere", fr: "peindre", ipa: "di-PIN-dje-re" },
      { it: "giocare a carte", fr: "jouer aux cartes", ipa: "djo-KA-re-a-KAR-te" },
      { it: "guardare film", fr: "regarder des films", ipa: "gwar-DA-re-FILM" },
      { it: "passeggiare", fr: "se promener", ipa: "pas-sed-DJA-re" },
      { it: "il fine settimana", fr: "le week-end", ipa: "il-FI-ne-set-ti-MA-na" }
    ],
    phrases: [
      { it: "Cosa le piace fare nel fine settimana?", fr: "Qu'est-ce que vous aimez faire le week-end ?", ipa: "KO-za-le-PYA-tche-FA-re-nel-FI-ne-set-ti-MA-na" },
      { it: "Adoro leggere romanzi.", fr: "J'adore lire des romans.", ipa: "a-DO-ro-LED-dje-re-ro-MAN-tsi" },
      { it: "Vado in bici la domenica.", fr: "Je fais du vélo le dimanche.", ipa: "VA-do-in-BI-tchi-la-do-ME-ni-ka" },
      { it: "Potremmo andare al cinema?", fr: "On pourrait aller au cinéma ?", ipa: "po-TREM-mo-an-DA-re-al-TCHI-ne-ma" },
      { it: "Non ho tempo in questi giorni.", fr: "Je n'ai pas le temps ces jours-ci.", ipa: "non-o-TEM-po-in-KWES-ti-DJOR-ni" }
    ],
    grammar: "Pour parler d'activités habituelles, utilisez le présent : 'Leggo tutti i giorni' (je lis tous les jours). Avec 'fare' pour les sports : 'Faccio yoga', 'Faccio nuoto'. Avec 'giocare' pour les sports d'équipe : 'Gioco a calcio'. 'Faccio' est la première personne singulière irrégulière de 'fare' — à mémoriser !",
    practice: [
      "Listez vos trois activités favorites du week-end en italien.",
      "Invitez quelqu'un à une activité : 'Potremmo...?' et entraînez-vous à accepter et à refuser.",
      "Décrivez votre semaine typique : 'Il lunedì io..., il venerdì io...'"
    ]
  },
  {
    day: 16,
    title: "La ville",
    titleNative: "La città",
    focus: "Vous orienter dans une ville italienne vous donne de l'indépendance. Les villes italiennes ont souvent un 'centro storico' magnifique — apprenez à vous y repérer !",
    vocab: [
      { it: "il municipio / il comune", fr: "la mairie", ipa: "il-mu-NI-tcho / il-KO-mu-ne" },
      { it: "la chiesa", fr: "l'église", ipa: "la-KYE-za" },
      { it: "il museo", fr: "le musée", ipa: "il-mu-ZE-o" },
      { it: "la biblioteca", fr: "la bibliothèque", ipa: "la-bi-blyo-TE-ka" },
      { it: "il parco", fr: "le parc", ipa: "il-PAR-ko" },
      { it: "l'ufficio postale", fr: "la poste", ipa: "luf-FI-tcho-pos-TA-le" },
      { it: "la questura", fr: "le commissariat / la police", ipa: "la-kwes-TU-ra" },
      { it: "il centro storico", fr: "le vieux centre / le centre historique", ipa: "il-TCHEN-tro-STO-ri-ko" },
      { it: "la periferia", fr: "la banlieue / la périphérie", ipa: "la-pe-ri-fe-RI-a" },
      { it: "la piazza", fr: "la place", ipa: "la-PYAT-tsa" }
    ],
    phrases: [
      { it: "Dov'è il Colosseo?", fr: "Où se trouve le Colisée ?", ipa: "do-VE-il-ko-los-SE-o" },
      { it: "È lontano da qui?", fr: "C'est loin d'ici ?", ipa: "e-lon-TA-no-da-KWI" },
      { it: "Cerco l'ufficio postale.", fr: "Je cherche la poste.", ipa: "TCHER-ko-luf-FI-tcho-pos-TA-le" },
      { it: "Il mercato è in piazza principale.", fr: "Le marché est sur la place principale.", ipa: "il-mer-KA-to-e-in-PYAT-tsa-prin-tchi-PA-le" },
      { it: "La città è davvero bella!", fr: "La ville est vraiment belle !", ipa: "la-tchit-TA-e-dav-VE-ro-BEL-la" }
    ],
    grammar: "'Trovarsi' est une façon élégante de dire 'se trouver / être situé' : 'Il museo si trova in piazza del Duomo'. On peut aussi simplement dire 'Dov'è...?' (Où est...?). Pour indiquer la position : 'È accanto a...' (c'est à côté de...), 'È di fronte a...' (c'est en face de...) — très similaire au français.",
    practice: [
      "Décrivez la ville où vous habitez en utilisant 5 mots du vocabulaire d'aujourd'hui.",
      "Entraînez-vous à indiquer un chemin depuis votre domicile imaginaire jusqu'à un lieu important.",
      "Comment demanderiez-vous où sont les toilettes dans un musée ? Construisez la phrase."
    ]
  },
  {
    day: 17,
    title: "À la maison",
    titleNative: "In casa",
    focus: "Le vocabulaire de la maison est fondamental pour décrire où vous habitez, comprendre les annonces immobilières et communiquer avec des hôtes italiens.",
    vocab: [
      { it: "il salotto / il soggiorno", fr: "le salon", ipa: "il-sa-LOT-to / il-sod-DJOR-no" },
      { it: "la cucina", fr: "la cuisine", ipa: "la-ku-TCHI-na" },
      { it: "la camera da letto", fr: "la chambre", ipa: "la-KA-me-ra-da-LET-to" },
      { it: "il bagno", fr: "la salle de bains", ipa: "il-BA-nyo" },
      { it: "il giardino", fr: "le jardin", ipa: "il-djgar-DI-no" },
      { it: "il balcone", fr: "le balcon", ipa: "il-bal-KO-ne" },
      { it: "i mobili", fr: "les meubles", ipa: "i-MO-bi-li" },
      { it: "l'affitto", fr: "le loyer", ipa: "laf-FIT-to" },
      { it: "i vicini", fr: "les voisins", ipa: "i-vi-TCHI-ni" },
      { it: "traslocare", fr: "déménager", ipa: "tra-slo-KA-re" }
    ],
    phrases: [
      { it: "Abito in un appartamento.", fr: "J'habite dans un appartement.", ipa: "A-bi-to-in-un-ap-par-ta-MEN-to" },
      { it: "Il mio appartamento ha due camere.", fr: "Mon appartement a deux chambres.", ipa: "il-MI-o-ap-par-ta-MEN-to-a-DU-e-KA-me-re" },
      { it: "L'affitto è caro a Milano.", fr: "Le loyer est cher à Milan.", ipa: "laf-FIT-to-e-KA-ro-a-mi-LA-no" },
      { it: "Fai come a casa tua!", fr: "Fais comme chez toi !", ipa: "fai-KO-me-a-KA-za-TU-a" },
      { it: "Il bagno è al primo piano.", fr: "La salle de bains est au premier étage.", ipa: "il-BA-nyo-e-al-PRI-mo-PYA-no" }
    ],
    grammar: "Le système d'étages en Italie : 'il piano terra' est le rez-de-chaussée (comme en France), 'il primo piano' est le premier étage (aussi comme en France — différent de l'anglais). Les consonnes doubles sont très importantes en italien : 'affitto' n'est pas pareil à 'afito' — la double 'f' se prononce plus longue et change le sens !",
    practice: [
      "Décrivez votre logement actuel avec 5 mots du vocabulaire d'aujourd'hui.",
      "Comment diriez-vous que votre appartement a un salon, une cuisine, deux chambres et une salle de bains ?",
      "Mémorisez 'Fai come a casa tua !' — une expression très chaleureuse d'accueil."
    ]
  },
  {
    day: 18,
    title: "Technologie et communication",
    titleNative: "Tecnologia e comunicazione",
    focus: "Dans le monde moderne, la technologie fait partie de toute conversation. Les Italiens sont très connectés et utilisent beaucoup les réseaux sociaux et la messagerie.",
    vocab: [
      { it: "il cellulare", fr: "le portable / le téléphone", ipa: "il-tchel-lu-LA-re" },
      { it: "il caricatore", fr: "le chargeur", ipa: "il-ka-ri-ka-TO-re" },
      { it: "la rete / il segnale", fr: "le réseau / le signal", ipa: "la-RE-te / il-se-NYA-le" },
      { it: "un'applicazione", fr: "une application", ipa: "u-nap-pli-ka-TSYO-ne" },
      { it: "inviare un messaggio", fr: "envoyer un message", ipa: "in-vya-RE-un-mes-SAD-djo" },
      { it: "la password", fr: "le mot de passe", ipa: "la-PAS-word" },
      { it: "la connessione", fr: "la connexion", ipa: "la-kon-nes-SYO-ne" },
      { it: "scaricare", fr: "télécharger", ipa: "ska-ri-KA-re" },
      { it: "i social network", fr: "les réseaux sociaux", ipa: "i-SO-shal-NET-work" },
      { it: "ricaricare la batteria", fr: "recharger la batterie", ipa: "ri-ka-ri-KA-re-la-bat-te-RI-a" }
    ],
    phrases: [
      { it: "C'è il wifi qui?", fr: "Il y a le wifi ici ?", ipa: "tche-il-WI-fi-KWI" },
      { it: "Il mio telefono è scarico.", fr: "Mon téléphone est déchargé.", ipa: "il-MI-o-te-LE-fo-no-e-SKA-ri-ko" },
      { it: "Puoi mandarmi il link?", fr: "Tu peux m'envoyer le lien ?", ipa: "PWOI-man-DAR-mi-il-LINK" },
      { it: "Non ho segnale qui.", fr: "Je n'ai pas de réseau ici.", ipa: "non-o-se-NYA-le-KWI" },
      { it: "Qual è il tuo numero?", fr: "C'est quoi ton numéro ?", ipa: "kwal-e-il-TU-o-NU-me-ro" }
    ],
    grammar: "En italien moderne, les anglicismes technologiques sont très répandus : 'il selfie', 'il tweet', 'lo streaming'. L'Accademia della Crusca (l'équivalent de l'Académie française) tente de trouver des équivalents italiens, mais dans la pratique, l'anglais domine dans le domaine tech. La 'password' est universellement utilisée.",
    practice: [
      "Comment demanderiez-vous le mot de passe wifi à quelqu'un ? Entraînez-vous.",
      "Décrivez votre routine avec le téléphone le matin en italien.",
      "Apprenez à donner votre numéro de téléphone en italien, deux chiffres par deux chiffres."
    ]
  },
  {
    day: 19,
    title: "Voyages et tourisme",
    titleNative: "Viaggi e turismo",
    focus: "L'Italie est l'une des destinations touristiques les plus populaires au monde. Connaître ce vocabulaire vous permettra de profiter pleinement de votre séjour et de communiquer avec les locaux.",
    vocab: [
      { it: "l'aeroporto", fr: "l'aéroport", ipa: "la-e-ro-POR-to" },
      { it: "il passaporto", fr: "le passeport", ipa: "il-pas-sa-POR-to" },
      { it: "la valigia", fr: "la valise", ipa: "la-va-LI-dja" },
      { it: "l'ufficio del turismo", fr: "l'office de tourisme", ipa: "luf-FI-tcho-del-tu-RIS-mo" },
      { it: "una guida turistica", fr: "un guide touristique", ipa: "u-na-GWI-da-tu-RIS-ti-ka" },
      { it: "un biglietto", fr: "un billet / un ticket", ipa: "un-bi-LYET-to" },
      { it: "un'escursione", fr: "une excursion", ipa: "u-nes-kur-SYO-ne" },
      { it: "il patrimonio", fr: "le patrimoine", ipa: "il-pa-tri-MO-nyo" },
      { it: "perdersi", fr: "se perdre", ipa: "PER-der-si" },
      { it: "un souvenir / un ricordo", fr: "un souvenir", ipa: "un-ri-KOR-do" }
    ],
    phrases: [
      { it: "Sono in vacanza.", fr: "Je suis en vacances.", ipa: "SO-no-in-va-KAN-tsa" },
      { it: "Dove posso comprare i biglietti?", fr: "Où puis-je acheter des billets ?", ipa: "DO-ve-POS-so-kom-PRA-re-i-bi-LYET-ti" },
      { it: "Mi sono perso/a. Può aiutarmi?", fr: "Je suis perdu(e). Vous pouvez m'aider ?", ipa: "mi-SO-no-PER-so. pwo-a-yu-TAR-mi" },
      { it: "Da non perdere!", fr: "À ne pas manquer !", ipa: "da-non-PER-de-re" },
      { it: "Possiamo visitare...?", fr: "On peut visiter... ?", ipa: "pos-SYA-mo-vi-zi-TA-re" }
    ],
    grammar: "'Potere' (pouvoir) + infinitif : 'Possiamo visitare...?' (On peut visiter ?), 'Posso...?' (Je peux...?). 'Potere' est irrégulier : posso, puoi, può, possiamo, potete, possono. Notez que 'può' (il/elle peut) prend un accent — sans accent, 'puo' n'existe pas. C'est un verbe fondamental à maîtriser.",
    practice: [
      "Planifiez une journée touristique à Rome en italien : que visiter, comment y aller, que manger.",
      "Entraînez-vous à être perdu(e) : '—Scusi ! Mi sono perso/a. Dov'è...?'",
      "Quels sont les trois endroits que vous voulez le plus visiter en Italie ? Dites-le en italien."
    ]
  },
  {
    day: 20,
    title: "Émotions et sentiments",
    titleNative: "Emozioni e sentimenti",
    focus: "Exprimer ses émotions va bien au-delà de 'bien' ou 'mal'. Les Italiens sont réputés pour leur expressivité — apprendre ce vocabulaire vous permettra des conversations plus profondes.",
    vocab: [
      { it: "felice / contento/a", fr: "heureux / heureuse / content(e)", ipa: "fe-LI-tche / kon-TEN-to" },
      { it: "triste", fr: "triste", ipa: "TRIS-te" },
      { it: "stanco/a", fr: "fatigué(e)", ipa: "STAN-ko" },
      { it: "stressato/a", fr: "stressé(e)", ipa: "stres-SA-to" },
      { it: "sorpreso/a", fr: "surpris(e)", ipa: "sor-PRE-zo" },
      { it: "irritato/a / arrabbiato/a", fr: "énervé(e) / en colère", ipa: "ir-ri-TA-to / ar-rab-BYA-to" },
      { it: "innamorato/a", fr: "amoureux / amoureuse", ipa: "in-na-mo-RA-to" },
      { it: "preoccupato/a", fr: "inquiet / inquiète", ipa: "pre-ok-ku-PA-to" },
      { it: "orgoglioso/a", fr: "fier / fière", ipa: "or-go-LYO-zo" },
      { it: "mi è indifferente", fr: "ça m'est égal", ipa: "mi-e-in-dif-fe-REN-te" }
    ],
    phrases: [
      { it: "Mi sento molto felice oggi.", fr: "Je me sens très heureux/heureuse aujourd'hui.", ipa: "mi-SEN-to-MOL-to-fe-LI-tche-OD-dji" },
      { it: "Sono un po' stressato/a per il lavoro.", fr: "Je suis un peu stressé(e) par le travail.", ipa: "SO-no-un-po-stres-SA-to-per-il-la-VO-ro" },
      { it: "Sono così stanco/a!", fr: "Je suis tellement fatigué(e) !", ipa: "SO-no-ko-ZI-STAN-ko" },
      { it: "Questo mi rende felice.", fr: "Ça me rend heureux.", ipa: "KWES-to-mi-REN-de-fe-LI-tche" },
      { it: "Sono orgoglioso/a di te!", fr: "Je suis fier/fière de toi !", ipa: "SO-no-or-go-LYO-zo-di-TE" }
    ],
    grammar: "'Sentirsi' et 'essere' s'utilisent pour les émotions : 'Mi sento triste' ou 'Sono triste'. La différence est subtile — 'sentirsi' exprime un état momentané, 'essere' peut être plus permanent. 'Arrabbiato' (en colère) est très courant en italien — plus fort que 'irritato'. Les Italiens n'ont pas peur d'exprimer leurs émotions !",
    practice: [
      "Comment vous sentez-vous maintenant ? Décrivez votre état avec au moins deux émotions en italien.",
      "Entraînez-vous à exprimer des émotions liées à des situations : 'Quando viaggio, mi sento...'",
      "Regardez une série italienne et identifiez les émotions exprimées en italien."
    ]
  },
  {
    day: 21,
    title: "La nature",
    titleNative: "La natura",
    focus: "L'Italie offre des paysages extraordinairement variés : les Dolomites, la côte amalfitaine, la Toscane, la Sicile... Ce vocabulaire enrichira vos descriptions et vos conversations.",
    vocab: [
      { it: "la montagna", fr: "la montagne", ipa: "la-mon-TA-nya" },
      { it: "il mare", fr: "la mer", ipa: "il-MA-re" },
      { it: "il bosco / la foresta", fr: "le bois / la forêt", ipa: "il-BOS-ko / la-fo-RES-ta" },
      { it: "il fiume", fr: "le fleuve / la rivière", ipa: "il-FYU-me" },
      { it: "il lago", fr: "le lac", ipa: "il-LA-go" },
      { it: "la spiaggia", fr: "la plage", ipa: "la-SPYAD-dja" },
      { it: "la campagna", fr: "la campagne", ipa: "la-kam-PA-nya" },
      { it: "un paesaggio", fr: "un paysage", ipa: "un-pa-e-ZAD-djo" },
      { it: "il tramonto", fr: "le coucher de soleil", ipa: "il-tra-MON-to" },
      { it: "un'escursione a piedi", fr: "une randonnée", ipa: "u-nes-kur-SYO-ne-a-PYE-di" }
    ],
    phrases: [
      { it: "Adoro passeggiare nel bosco.", fr: "J'adore me promener en forêt.", ipa: "a-DO-ro-pas-sed-DJA-re-nel-BOS-ko" },
      { it: "La vista sulla montagna è magnifica!", fr: "La vue sur la montagne est magnifique !", ipa: "la-VIS-ta-sul-la-mon-TA-nya-e-ma-NYI-fi-ka" },
      { it: "Andiamo in spiaggia questo fine settimana?", fr: "On va à la plage ce week-end ?", ipa: "an-DYA-mo-in-SPYAD-dja-KWES-to-FI-ne-set-ti-MA-na" },
      { it: "Il tramonto era straordinario.", fr: "Le coucher de soleil était extraordinaire.", ipa: "il-tra-MON-to-E-ra-stra-or-di-NA-ryo" },
      { it: "Preferisco il mare alla montagna.", fr: "Je préfère la mer à la montagne.", ipa: "pre-fe-RIS-ko-il-MA-re-al-la-mon-TA-nya" }
    ],
    grammar: "'Preferire' (préférer) est un verbe en -ire irrégulier du groupe 'isc' : preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono. La construction est 'preferire A a B' : 'Preferisco il mare alla montagna' — identique au 'préférer A à B' français ! Ces verbes en -isco sont très courants : capire, finire, costruire.",
    practice: [
      "Vous préférez la mer ou la montagne ? La ville ou la campagne ? Dites-le en italien.",
      "Décrivez le plus beau paysage que vous ayez jamais vu, en italien.",
      "Planifiez une activité nature en italien : '—Potremmo fare un'escursione questo fine settimana !'"
    ]
  },
  {
    day: 22,
    title: "À la banque et l'argent",
    titleNative: "In banca e i soldi",
    focus: "Gérer l'argent en Italie requiert un vocabulaire spécifique. L'Italie utilise l'euro, comme la France — un avantage non négligeable !",
    vocab: [
      { it: "una banconota", fr: "un billet (de banque)", ipa: "u-na-ban-ko-NO-ta" },
      { it: "una moneta", fr: "une pièce de monnaie", ipa: "u-na-mo-NE-ta" },
      { it: "un conto bancario", fr: "un compte bancaire", ipa: "un-KON-to-ban-KA-ryo" },
      { it: "un bonifico", fr: "un virement", ipa: "un-bo-NI-fi-ko" },
      { it: "il bancomat", fr: "le distributeur / le DAB", ipa: "il-ban-ko-MAT" },
      { it: "il tasso di cambio", fr: "le taux de change", ipa: "il-TAS-so-di-KAM-byo" },
      { it: "cambiare valuta", fr: "changer de l'argent", ipa: "kam-BYA-re-va-LU-ta" },
      { it: "in contanti", fr: "en espèces", ipa: "in-kon-TAN-ti" },
      { it: "con carta", fr: "par carte", ipa: "kon-KAR-ta" },
      { it: "la ricevuta", fr: "le reçu / le ticket de caisse", ipa: "la-ri-tche-VU-ta" }
    ],
    phrases: [
      { it: "Dov'è il bancomat più vicino?", fr: "Où est le distributeur le plus proche ?", ipa: "do-VE-il-ban-ko-MAT-pyu-vi-TCHI-no" },
      { it: "Vorrei cambiare degli euro.", fr: "Je voudrais changer des euros.", ipa: "vor-REI-kam-BYA-re-de-LYI-EU-ro" },
      { it: "Accettate assegni?", fr: "Vous acceptez les chèques ?", ipa: "at-tchet-TA-te-as-SE-nyi" },
      { it: "Posso pagare con carta?", fr: "Je peux payer par carte ?", ipa: "POS-so-pa-GA-re-kon-KAR-ta" },
      { it: "Mi dia una ricevuta, per favore.", fr: "Donnez-moi un reçu, s'il vous plaît.", ipa: "mi-DI-a-u-na-ri-tche-VU-ta, per-fa-VO-re" }
    ],
    grammar: "Grands nombres en italien : 'mille' (mille), 'diecimila' (dix mille), 'centomila' (cent mille), 'un milione' (un million). Pour les prix : '12,50 €' se dit 'dodici euro e cinquanta' ou 'dodici virgola cinquanta'. Comme en France, l'Italie utilise la virgule comme séparateur décimal et le point pour les milliers.",
    practice: [
      "Entraînez-vous à dire des prix en italien : 5€, 12,50€, 99€, 200€.",
      "Comment diriez-vous que vous avez besoin de retirer de l'argent ? Entraînez-vous.",
      "Simulez une situation à la banque : '—Buongiorno, vorrei...' et complétez avec une opération."
    ]
  },
  {
    day: 23,
    title: "À la pharmacie",
    titleNative: "In farmacia",
    focus: "La pharmacie italienne (reconnaissable à sa croix verte — exactement comme en France !) est le premier recours pour les problèmes de santé mineurs. Les pharmaciens italiens sont très compétents.",
    vocab: [
      { it: "un farmaco / una medicina", fr: "un médicament", ipa: "un-FAR-ma-ko / u-na-me-di-TCHI-na" },
      { it: "una compressa", fr: "un comprimé", ipa: "u-na-kom-PRES-sa" },
      { it: "uno sciroppo", fr: "un sirop", ipa: "u-no-SHI-rop-po" },
      { it: "una crema", fr: "une crème", ipa: "u-na-KRE-ma" },
      { it: "un cerotto", fr: "un pansement / un sparadrap", ipa: "un-tche-ROT-to" },
      { it: "il dolore", fr: "la douleur", ipa: "il-do-LO-re" },
      { it: "allergico/a a", fr: "allergique à", ipa: "al-LER-dji-ko-a" },
      { it: "con ricetta", fr: "sur ordonnance", ipa: "kon-ri-TCHET-ta" },
      { it: "senza ricetta", fr: "sans ordonnance", ipa: "SEN-tsa-ri-TCHET-ta" },
      { it: "la posologia / il dosaggio", fr: "la posologie / le dosage", ipa: "la-po-zo-lo-DJI-a / il-do-ZAD-djo" }
    ],
    phrases: [
      { it: "Ho bisogno di qualcosa per la tosse.", fr: "J'ai besoin de quelque chose contre la toux.", ipa: "o-bi-ZO-nyo-di-kwal-KO-za-per-la-TOS-se" },
      { it: "Sono allergico/a alla penicillina.", fr: "Je suis allergique à la pénicilline.", ipa: "SO-no-al-LER-dji-ko-al-la-pe-ni-tchil-LI-na" },
      { it: "Qual è il dosaggio?", fr: "Quelle est la posologie ?", ipa: "kwal-e-il-do-ZAD-djo" },
      { it: "È disponibile senza ricetta?", fr: "Est-ce disponible sans ordonnance ?", ipa: "e-dis-po-NI-bi-le-SEN-tsa-ri-TCHET-ta" },
      { it: "Quanto fa?", fr: "Combien ça fait ?", ipa: "KWAN-to-FA" }
    ],
    grammar: "'Avere bisogno di' (avoir besoin de) : 'Ho bisogno di...' + nom ou infinitif. 'Ho bisogno di un farmaco' (j'ai besoin d'un médicament), 'Ho bisogno di dormire' (j'ai besoin de dormir). Identique au français 'avoir besoin de' — la structure est parfaitement parallèle. Le 118 est le numéro des urgences en Italie.",
    practice: [
      "Entraînez-vous à décrire trois symptômes en italien : 'Mi fa male...', 'Ho la febbre...', etc.",
      "Comment demanderiez-vous un analgésique sans ordonnance ? Entraînez-vous au dialogue complet.",
      "Apprenez à dire vos allergies en italien — une information vitale à l'étranger."
    ]
  },
  {
    day: 24,
    title: "Culture et art",
    titleNative: "Cultura e arte",
    focus: "L'Italie est le berceau de la Renaissance et l'un des pays les plus riches en patrimoine artistique au monde. Pouvoir parler d'art en italien vous ouvrira des conversations passionnantes.",
    vocab: [
      { it: "un quadro / un dipinto", fr: "un tableau", ipa: "un-KWA-dro / un-di-PIN-to" },
      { it: "una scultura", fr: "une sculpture", ipa: "u-na-skul-TU-ra" },
      { it: "un capolavoro", fr: "un chef-d'œuvre", ipa: "un-ka-po-la-VO-ro" },
      { it: "il Rinascimento", fr: "la Renaissance", ipa: "il-ri-na-shi-MEN-to" },
      { it: "una mostra", fr: "une exposition", ipa: "u-na-MOS-tra" },
      { it: "il cinema", fr: "le cinéma", ipa: "il-TCHI-ne-ma" },
      { it: "un romanzo", fr: "un roman", ipa: "un-ro-MAN-tso" },
      { it: "la letteratura", fr: "la littérature", ipa: "la-let-te-ra-TU-ra" },
      { it: "un artista", fr: "un(e) artiste", ipa: "un-ar-TIS-ta" },
      { it: "mi ha commosso", fr: "ça m'a touché(e)", ipa: "mi-a-kom-MOS-so" }
    ],
    phrases: [
      { it: "Vorrei visitare gli Uffizi.", fr: "Je voudrais visiter les Offices.", ipa: "vor-REI-vi-zi-TA-re-lyu-FI-tsi" },
      { it: "Questo dipinto è assolutamente magnifico.", fr: "Ce tableau est absolument magnifique.", ipa: "KWES-to-di-PIN-to-e-as-so-lu-ta-MEN-te-ma-NYI-fi-ko" },
      { it: "Sono un fan del cinema italiano.", fr: "Je suis fan du cinéma italien.", ipa: "SO-no-un-fan-del-TCHI-ne-ma-i-ta-LYA-no" },
      { it: "Mi ha molto commosso.", fr: "Ça m'a profondément touché.", ipa: "mi-a-MOL-to-kom-MOS-so" },
      { it: "Conosci questo artista?", fr: "Tu connais cet artiste ?", ipa: "ko-NO-shi-KWES-to-ar-TIS-ta" }
    ],
    grammar: "'Conoscere' (connaître une personne ou un lieu) vs 'sapere' (savoir un fait) — exactement comme en français ! 'Conosci Michelangelo ?' (Tu connais Michel-Ange ?) vs 'Sai dipingere ?' (Tu sais peindre ?). La préposition 'a' devant un complément d'objet humain est optionnelle en italien — différence avec l'espagnol où elle est obligatoire.",
    practice: [
      "Décrivez une œuvre d'art, un film ou un livre qui vous a marqué, en italien.",
      "Entraînez-vous : '—Conosci...? —Sì, lo/la conosco. / No, non lo/la conosco.'",
      "Renseignez-vous sur un artiste italien (Michel-Ange, Léonard de Vinci, Fellini) et préparez 3 phrases sur son œuvre."
    ]
  },
  {
    day: 25,
    title: "Sport et exercice",
    titleNative: "Sport e attività fisica",
    focus: "Le sport est un sujet de conversation universel. En Italie, le calcio (football) est une véritable religion — mais le cyclisme, la natation et le ski y sont aussi très populaires.",
    vocab: [
      { it: "il calcio", fr: "le football", ipa: "il-KAL-tcho" },
      { it: "il ciclismo", fr: "le cyclisme", ipa: "il-tchi-KLIS-mo" },
      { it: "il nuoto", fr: "la natation", ipa: "il-NWO-to" },
      { it: "il tennis", fr: "le tennis", ipa: "il-TEN-nis" },
      { it: "la palestra", fr: "la salle de sport", ipa: "la-pa-LES-tra" },
      { it: "allenarsi", fr: "s'entraîner", ipa: "al-le-NAR-si" },
      { it: "vincere", fr: "gagner / vaincre", ipa: "VIN-tche-re" },
      { it: "perdere", fr: "perdre", ipa: "PER-de-re" },
      { it: "una partita", fr: "un match", ipa: "u-na-par-TI-ta" },
      { it: "la squadra", fr: "l'équipe", ipa: "la-SKWAD-ra" }
    ],
    phrases: [
      { it: "Fai sport?", fr: "Tu fais du sport ?", ipa: "fai-SPOR" },
      { it: "Vado in palestra tre volte a settimana.", fr: "Je vais à la salle trois fois par semaine.", ipa: "VA-do-in-pa-LES-tra-TRE-VOL-te-a-set-ti-MA-na" },
      { it: "Hai visto la partita ieri?", fr: "Tu as regardé le match hier ?", ipa: "ai-VIS-to-la-par-TI-ta-YE-ri" },
      { it: "La mia squadra ha vinto!", fr: "Mon équipe a gagné !", ipa: "la-MI-a-SKWAD-ra-a-VIN-to" },
      { it: "Il Giro d'Italia è spettacolare.", fr: "Le Tour d'Italie est spectaculaire.", ipa: "il-DJI-ro-di-ta-LYA-e-spet-ta-ko-LA-re" }
    ],
    grammar: "Pour parler de sport en italien : 'fare + sport' pour les sports individuels : 'Faccio nuoto', 'Faccio yoga'. Pour les sports d'équipe : 'giocare a + sport' : 'Gioco a calcio', 'Gioco a tennis'. Identique à la distinction française 'faire du sport' / 'jouer à'. 'Faccio' (première personne de 'fare') est irrégulier — à mémoriser !",
    practice: [
      "Quels sports pratiquez-vous ? Dites-le en italien : 'Faccio...' ou 'Gioco a...'",
      "Entraînez-vous à parler d'un match récent ou de votre équipe favorite.",
      "Comment inviteriez-vous quelqu'un à faire du sport ensemble ? Créez la proposition en italien."
    ]
  },
  {
    day: 26,
    title: "La musique",
    titleNative: "La musica",
    focus: "L'Italie est le pays de l'opéra, de Verdi, de Puccini — mais aussi du pop, du rock et du hip-hop contemporain. Connaître le vocabulaire musical vous permettra de vous connecter culturellement.",
    vocab: [
      { it: "una canzone", fr: "une chanson", ipa: "u-na-kan-TSO-ne" },
      { it: "un cantante", fr: "un(e) chanteur/chanteuse", ipa: "un-kan-TAN-te" },
      { it: "suonare uno strumento", fr: "jouer d'un instrument", ipa: "swo-NA-re-u-no-stru-MEN-to" },
      { it: "la chitarra", fr: "la guitare", ipa: "la-ki-TAR-ra" },
      { it: "il pianoforte", fr: "le piano", ipa: "il-pya-no-FOR-te" },
      { it: "un concerto", fr: "un concert", ipa: "un-kon-TCHER-to" },
      { it: "una playlist", fr: "une playlist", ipa: "u-na-PLAY-list" },
      { it: "il ritmo", fr: "le rythme", ipa: "il-RIT-mo" },
      { it: "il testo", fr: "les paroles", ipa: "il-TES-to" },
      { it: "avere orecchio musicale", fr: "avoir l'oreille musicale", ipa: "a-VE-re-o-REK-kyo-mu-zi-KA-le" }
    ],
    phrases: [
      { it: "Che musica ascolti?", fr: "Quel genre de musique écoutes-tu ?", ipa: "ke-MU-zi-ka-as-KOL-ti" },
      { it: "Adoro l'opera italiana.", fr: "J'adore l'opéra italien.", ipa: "a-DO-ro-LO-pe-ra-i-ta-LYA-na" },
      { it: "Suoni uno strumento?", fr: "Tu joues d'un instrument ?", ipa: "SWO-ni-u-no-stru-MEN-to" },
      { it: "Andiamo a un concerto stasera?", fr: "On va à un concert ce soir ?", ipa: "an-DYA-mo-a-un-kon-TCHER-to-sta-SE-ra" },
      { it: "Questa canzone è davvero bella.", fr: "Cette chanson est vraiment belle.", ipa: "KWES-ta-kan-TSO-ne-e-dav-VE-ro-BEL-la" }
    ],
    grammar: "Pour parler d'instruments en italien : 'suonare + article + instrument' : 'Suono la chitarra', 'Suono il pianoforte'. En italien, on dit simplement 'suono la chitarra' sans préposition — différent du français 'je joue de la guitare' et du fait qu'en italien le verbe 'suonare' (jouer d'un instrument) se construit directement avec l'article défini.",
    practice: [
      "Quelle musique écoutez-vous ? Dites votre genre et artiste préféré en italien.",
      "Jouez-vous d'un instrument ? Entraînez-vous : 'Suono...' ou 'Non so suonare nessuno strumento.'",
      "Écoutez une chanson italienne (Vasco Rossi, Laura Pausini, Zucchero) et essayez d'identifier des mots que vous connaissez."
    ]
  },
  {
    day: 27,
    title: "Le passé : passato prossimo",
    titleNative: "Il passato prossimo",
    focus: "Le passato prossimo est le temps du passé le plus utilisé en conversation italienne. Il ressemble beaucoup au passé composé français — vous allez vous sentir en terrain familier !",
    vocab: [
      { it: "ho mangiato", fr: "j'ai mangé", ipa: "o-man-DJA-to" },
      { it: "ho bevuto", fr: "j'ai bu", ipa: "o-be-VU-to" },
      { it: "ho visto", fr: "j'ai vu", ipa: "o-VIS-to" },
      { it: "sono andato/a", fr: "je suis allé(e)", ipa: "SO-no-an-DA-to" },
      { it: "ho fatto", fr: "j'ai fait", ipa: "o-FAT-to" },
      { it: "ho detto", fr: "j'ai dit", ipa: "o-DET-to" },
      { it: "ieri", fr: "hier", ipa: "YE-ri" },
      { it: "la settimana scorsa", fr: "la semaine dernière", ipa: "la-set-ti-MA-na-SKOR-sa" },
      { it: "tre giorni fa", fr: "il y a trois jours", ipa: "tre-DJOR-ni-fa" },
      { it: "già", fr: "déjà", ipa: "DJA" }
    ],
    phrases: [
      { it: "Ieri ho mangiato una pizza deliziosa.", fr: "Hier, j'ai mangé une délicieuse pizza.", ipa: "YE-ri-o-man-DJA-to-u-na-PIT-tsa-de-li-TSYO-za" },
      { it: "La settimana scorsa sono andato/a a Roma.", fr: "La semaine dernière, je suis allé(e) à Rome.", ipa: "la-set-ti-MA-na-SKOR-sa-SO-no-an-DA-to-a-RO-ma" },
      { it: "Hai già visitato il Colosseo?", fr: "Tu as déjà visité le Colisée ?", ipa: "ai-DJA-vi-zi-TA-to-il-ko-los-SE-o" },
      { it: "Ho visto un film bellissimo ieri sera.", fr: "J'ai vu un excellent film hier soir.", ipa: "o-VIS-to-un-FILM-bel-LIS-si-mo-YE-ri-SE-ra" },
      { it: "Cosa hai fatto questo fine settimana?", fr: "Qu'est-ce que tu as fait ce week-end ?", ipa: "KO-za-ai-FAT-to-KWES-to-FI-ne-set-ti-MA-na" }
    ],
    grammar: "Le passato prossimo se forme avec 'avere' ou 'essere' + participe passé — exactement comme le passé composé français ! La majorité utilise 'avere' : 'ho mangiato', 'ho visto'. Les verbes de mouvement et réfléchis utilisent 'essere' : 'sono andato/a', 'mi sono alzato/a'. Avec 'essere', le participe s'accorde avec le sujet — comme en français !",
    practice: [
      "Décrivez ce que vous avez fait hier avec 5 verbes au passato prossimo.",
      "Entraînez-vous : '—Cosa hai fatto ieri ? —Ieri...' (avec au moins 3 activités).",
      "Les 5 participes irréguliers les plus importants : avere → avuto, essere → stato, fare → fatto, vedere → visto, venire → venuto."
    ]
  },
  {
    day: 28,
    title: "Expressions idiomatiques",
    titleNative: "Modi di dire",
    focus: "Les expressions idiomatiques sont celles qui vous feront vraiment ressembler à un natif. Les Italiens les utilisent constamment dans la conversation quotidienne.",
    vocab: [
      { it: "non c'è male", fr: "pas mal du tout / ça va bien", ipa: "non-tche-MA-le" },
      { it: "costare un occhio della testa", fr: "coûter les yeux de la tête", ipa: "kos-TA-re-un-OK-kyo-del-la-TES-ta" },
      { it: "avere la testa fra le nuvole", fr: "être dans les nuages", ipa: "a-VE-re-la-TES-ta-fra-le-NU-vo-le" },
      { it: "fare una figura", fr: "faire bonne/mauvaise impression", ipa: "FA-re-u-na-fi-GU-ra" },
      { it: "prendere in giro", fr: "se moquer de / faire marcher", ipa: "PREN-de-re-in-DJI-ro" },
      { it: "avere il cuore in gola", fr: "avoir le cœur qui bat fort / avoir peur", ipa: "a-VE-re-il-KWO-re-in-GO-la" },
      { it: "in bocca al lupo", fr: "bonne chance ! (litt. dans la gueule du loup)", ipa: "in-BOK-ka-al-LU-po" },
      { it: "così è la vita", fr: "c'est la vie", ipa: "ko-ZI-e-la-VI-ta" },
      { it: "in un batter d'occhio", fr: "en un clin d'œil", ipa: "in-un-BAT-ter-DOK-kyo" },
      { it: "avere la luna storta", fr: "être de mauvaise humeur (litt. avoir la lune de travers)", ipa: "a-VE-re-la-LU-na-STOR-ta" }
    ],
    phrases: [
      { it: "Mi stai prendendo in giro!", fr: "Tu te moques de moi !", ipa: "mi-STAI-pren-DEN-do-in-DJI-ro" },
      { it: "Quel ristorante costa un occhio della testa.", fr: "Ce restaurant coûte les yeux de la tête.", ipa: "kwel-ris-to-RAN-te-KOS-ta-un-OK-kyo-del-la-TES-ta" },
      { it: "Ho sempre la testa fra le nuvole.", fr: "Je suis toujours dans les nuages.", ipa: "o-SEM-pre-la-TES-ta-fra-le-NU-vo-le" },
      { it: "In bocca al lupo!", fr: "Bonne chance !", ipa: "in-BOK-ka-al-LU-po" },
      { it: "Così è la vita!", fr: "C'est la vie !", ipa: "ko-ZI-e-la-VI-ta" }
    ],
    grammar: "'In bocca al lupo' (bonne chance !) est une expression typiquement italienne — la réponse correcte est 'Crepi !' (que le loup crève). Ne dites jamais 'Grazie' en réponse — ce serait de mauvais augure ! 'Fare una figura' peut être positive ('fare una bella figura' = faire bonne impression) ou négative ('fare una brutta figura' = faire mauvaise impression).",
    practice: [
      "Choisissez 3 expressions d'aujourd'hui et utilisez-les dans des phrases originales sur votre vie.",
      "Lesquelles ont un équivalent direct en français ? Lesquelles sont totalement différentes ?",
      "Entraînez-vous à utiliser 'In bocca al lupo !' dans le bon contexte — et n'oubliez pas la réponse !"
    ]
  },
  {
    day: 29,
    title: "Conversation avancée",
    titleNative: "Conversazione avanzata",
    focus: "Aujourd'hui nous pratiquons des structures plus sophistiquées pour des conversations plus fluides. Ces expressions vous feront passer du niveau débutant à l'intermédiaire réel.",
    vocab: [
      { it: "a mio avviso", fr: "à mon avis", ipa: "a-MI-o-av-VI-zo" },
      { it: "in realtà", fr: "en réalité / en fait", ipa: "in-re-al-TA" },
      { it: "inoltre", fr: "de plus / en outre", ipa: "in-OL-tre" },
      { it: "tuttavia / eppure", fr: "cependant / pourtant", ipa: "tut-ta-VI-a / ep-PU-re" },
      { it: "cioè / ovvero", fr: "c'est-à-dire", ipa: "TSYO-e / ov-VE-ro" },
      { it: "per quanto mi riguarda", fr: "en ce qui me concerne", ipa: "per-KWAN-to-mi-ri-GWAR-da" },
      { it: "si dice che", fr: "on dit que / il paraît que", ipa: "si-DI-tche-ke" },
      { it: "dipende", fr: "ça dépend", ipa: "di-PEN-de" },
      { it: "in ogni caso", fr: "en tout cas / de toute façon", ipa: "in-O-nyi-KA-zo" },
      { it: "senza dubbio", fr: "sans aucun doute", ipa: "SEN-tsa-DUB-byo" }
    ],
    phrases: [
      { it: "A mio avviso, è una buona idea.", fr: "À mon avis, c'est une bonne idée.", ipa: "a-MI-o-av-VI-zo, e-u-na-BWO-na-i-DE-a" },
      { it: "In realtà, non sono d'accordo.", fr: "En réalité, je ne suis pas d'accord.", ipa: "in-re-al-TA, non-SO-no-dak-KOR-do" },
      { it: "Dipende dalla situazione.", fr: "Ça dépend de la situation.", ipa: "di-PEN-de-dal-la-si-twa-TSYO-ne" },
      { it: "Si dice che domani pioverà.", fr: "Il paraît qu'il pleuvra demain.", ipa: "si-DI-tche-ke-do-MA-ni-pyo-ve-RA" },
      { it: "In ogni caso, grazie di tutto!", fr: "En tout cas, merci pour tout !", ipa: "in-O-nyi-KA-zo, GRA-tsye-di-TUT-to" }
    ],
    grammar: "Les connecteurs du discours ('in realtà', 'tuttavia', 'inoltre') sont ce qui distingue un locuteur intermédiaire d'un avancé. 'Tuttavia' et 'eppure' sont deux façons de dire 'cependant / pourtant' — 'tuttavia' est plus formel et écrit, 'eppure' est plus expressif et oral. Utilisez-les pour enchaîner vos idées.",
    practice: [
      "Écrivez un paragraphe de 5 phrases sur n'importe quel sujet en utilisant au moins 4 connecteurs du jour.",
      "Entraînez-vous à exprimer un désaccord poli : 'A mio avviso... Tuttavia... In realtà...'",
      "Enregistrez-vous pendant une minute en italien sur votre sujet favori. Combien de connecteurs avez-vous utilisés ?"
    ]
  },
  {
    day: 30,
    title: "Révision finale et célébration",
    titleNative: "Ripasso finale e celebrazione",
    focus: "Vous avez atteint le jour 30 ! C'est votre révision finale — mais aussi une célébration. Aujourd'hui, on consolide tout ce que vous avez appris et on trace la voie vers la fluidité.",
    vocab: [
      { it: "congratulazioni!", fr: "félicitations !", ipa: "kon-gra-tu-la-TSYO-ni" },
      { it: "sono orgoglioso/a di me", fr: "je suis fier/fière de moi", ipa: "SO-no-or-go-LYO-zo-di-ME" },
      { it: "ho fatto progressi", fr: "j'ai progressé", ipa: "o-FAT-to-pro-GRES-si" },
      { it: "continuare", fr: "continuer", ipa: "kon-ti-nwa-RE" },
      { it: "migliorarsi", fr: "s'améliorer", ipa: "mi-lyo-RAR-si" },
      { it: "la fluidità", fr: "la fluidité", ipa: "la-flwi-di-TA" },
      { it: "praticare", fr: "pratiquer", ipa: "pra-ti-KA-re" },
      { it: "uno scambio linguistico", fr: "un échange linguistique", ipa: "u-no-SKAM-byo-lin-GWIS-ti-ko" },
      { it: "ogni giorno", fr: "chaque jour", ipa: "O-nyi-DJOR-no" },
      { it: "il percorso", fr: "le chemin / le parcours", ipa: "il-per-KOR-so" }
    ],
    phrases: [
      { it: "Parlo già un po' di italiano!", fr: "Je parle déjà un peu italien !", ipa: "PAR-lo-DJA-un-po-di-i-ta-LYA-no" },
      { it: "Ho imparato moltissime cose.", fr: "J'ai appris énormément de choses.", ipa: "o-im-pa-RA-to-mol-TIS-si-me-KO-ze" },
      { it: "Continuerò a praticare.", fr: "Je vais continuer à pratiquer.", ipa: "kon-ti-nwe-RO-a-pra-ti-KA-re" },
      { it: "Grazie per tutto questo percorso!", fr: "Merci pour tout ce chemin parcouru !", ipa: "GRA-tsye-per-TUT-to-KWES-to-per-KOR-so" },
      { it: "Alla prossima avventura!", fr: "À la prochaine aventure !", ipa: "al-la-PROS-si-ma-av-ven-TU-ra" }
    ],
    grammar: "Récapitulatif des structures clés maîtrisées : (1) Présent pour les habitudes et les faits, (2) Passato prossimo pour le passé conversationnel, (3) Futur proche ('stare per + infinitif' ou futur simple) pour les projets, (4) Conditionnel ('vorrei') pour la politesse, (5) Verbes irréguliers essentiels (essere, avere, fare, andare). L'italien et le français sont des langues sœurs — votre avantage comme francophone est immense !",
    practice: [
      "Écrivez une courte lettre en italien décrivant votre parcours d'apprentissage sur ces 30 jours.",
      "Cherchez un échange linguistique (tandem) avec un italophone qui veut apprendre le français.",
      "Fixez-vous un objectif concret pour le mois prochain : combien d'heures pratiquerez-vous ? Quelles ressources utiliserez-vous ?"
    ]
  }
];

var CONVERSATIONS_FR_IT = [
  { title:"Au bar",
    scene:"Tu entres dans un café à Rome et tu commandes.",
    lines:[
      {who:"them", it:"Buongiorno! Cosa prende?", en:"Bonjour ! Vous prenez quoi ?"},
      {who:"you",  it:"Buongiorno. Un cappuccino e un cornetto, per favore.", en:"Bonjour. Un cappuccino et un croissant, s'il vous plaît."},
      {who:"them", it:"Al banco o al tavolo?", en:"Au comptoir ou à table ?"},
      {who:"you",  it:"Al banco, grazie — è più veloce.", en:"Au comptoir, merci — c'est plus rapide."},
      {who:"them", it:"Certo. Sono due euro e cinquanta.", en:"Bien sûr. Ça fait deux euros cinquante."},
      {who:"you",  it:"Ecco a lei. Grazie mille.", en:"Voilà. Merci beaucoup."},
      {who:"them", it:"Prego! Buona giornata!", en:"De rien ! Bonne journée !"}
    ]},
  { title:"À l'hôtel",
    scene:"Tu arrives à ton hôtel à Florence avec une réservation.",
    lines:[
      {who:"you",  it:"Buona sera, ho una prenotazione a nome Martin.", en:"Bonsoir, j'ai une réservation au nom de Martin."},
      {who:"them", it:"Benvenuto, signor Martin. Due notti, camera doppia?", en:"Bienvenue, monsieur Martin. Deux nuits, chambre double ?"},
      {who:"you",  it:"Sì, esatto. A che ora è la colazione?", en:"Oui, exactement. À quelle heure est le petit-déjeuner ?"},
      {who:"them", it:"Dalle sette alle dieci, al piano terra.", en:"De sept à dix heures, au rez-de-chaussée."},
      {who:"you",  it:"Benissimo. E la password del wifi?", en:"Parfait. Et le mot de passe du wifi ?"},
      {who:"them", it:"È 'Firenze2024'. Ecco la chiave, camera 205.", en:"C'est 'Firenze2024'. Voici la clé, chambre 205."},
      {who:"you",  it:"Grazie mille. Buona serata.", en:"Merci beaucoup. Bonne soirée."}
    ]},
  { title:"Demander son chemin",
    scene:"Tu es perdu dans le centre de Rome et tu cherches le Colisée.",
    lines:[
      {who:"you",  it:"Scusi, cerco il Colosseo. Sa dov'è?", en:"Pardon, je cherche le Colisée. Vous savez où c'est ?"},
      {who:"them", it:"Certo! Vada dritto per questa via, poi giri a destra.", en:"Bien sûr ! Allez tout droit dans cette rue, puis tournez à droite."},
      {who:"you",  it:"Dritto e poi a destra, capito.", en:"Tout droit et ensuite à droite, compris."},
      {who:"them", it:"Sì, vedrà il Colosseo davanti a lei. Sono circa dieci minuti a piedi.", en:"Oui, vous verrez le Colisée devant vous. C'est environ dix minutes à pied."},
      {who:"you",  it:"Perfetto. Grazie mille, molto gentile.", en:"Parfait. Merci beaucoup, très aimable."},
      {who:"them", it:"Prego! Buona visita!", en:"De rien ! Bonne visite !"}
    ]},
  { title:"Au restaurant",
    scene:"Tu dînes dans une trattoria romaine.",
    lines:[
      {who:"you",  it:"Buona sera, avete un tavolo per due?", en:"Bonsoir, vous avez une table pour deux ?"},
      {who:"them", it:"Buona sera! Sì, accomodatevi. Ecco il menu.", en:"Bonsoir ! Oui, installez-vous. Voici le menu."},
      {who:"you",  it:"Cosa consiglia questa sera?", en:"Qu'est-ce que vous conseillez ce soir ?"},
      {who:"them", it:"La cacio e pepe è il nostro piatto forte. E la bistecca alla fiorentina.", en:"La cacio e pepe est notre spécialité. Et le bifteck à la florentine."},
      {who:"you",  it:"Prendo la cacio e pepe. E una bottiglia d'acqua naturale.", en:"Je prends la cacio e pepe. Et une bouteille d'eau plate."},
      {who:"them", it:"Ottima scelta! Subito.", en:"Excellent choix ! Tout de suite."},
      {who:"you",  it:"Ci porta il conto, per favore?", en:"Vous nous apportez l'addition, s'il vous plaît ?"},
      {who:"them", it:"Eccolo. Pagamento in contanti o con carta?", en:"La voici. Paiement en espèces ou par carte ?"},
      {who:"you",  it:"Con carta, grazie. Era squisito.", en:"Par carte, merci. C'était exquis."}
    ]},
  { title:"Faire du shopping",
    scene:"Tu cherches un cadeau dans une boutique à Milan.",
    lines:[
      {who:"them", it:"Salve! Posso aiutarla?", en:"Bonjour ! Je peux vous aider ?"},
      {who:"you",  it:"Sì, cerco qualcosa tipico italiano da portare in Francia come regalo.", en:"Oui, je cherche quelque chose de typique italien à ramener en France comme cadeau."},
      {who:"them", it:"Abbiamo ceramiche, prodotti artigianali e sete di Como.", en:"Nous avons de la céramique, des produits artisanaux et des soies de Côme."},
      {who:"you",  it:"Quanto costa quella sciarpa di seta?", en:"Combien coûte ce foulard en soie ?"},
      {who:"them", it:"Quella è settantacinque euro. È fatta a mano.", en:"Celui-là est à soixante-quinze euros. Il est fait main."},
      {who:"you",  it:"La prendo. Può farne un pacchetto regalo?", en:"Je la prends. Vous pouvez en faire un paquet cadeau ?"},
      {who:"them", it:"Certamente. Carta di credito?", en:"Bien sûr. Carte de crédit ?"},
      {who:"you",  it:"Sì, grazie. È stato un piacere.", en:"Oui, merci. Ce fut un plaisir."}
    ]},
  { title:"En pharmacie",
    scene:"Tu as un rhume et tu vas à la pharmacie.",
    lines:[
      {who:"you",  it:"Buongiorno, ho il raffreddore e un po' di febbre.", en:"Bonjour, j'ai un rhume et un peu de fièvre."},
      {who:"them", it:"Mi dispiace. Da quando?", en:"Je suis désolé. Depuis quand ?"},
      {who:"you",  it:"Da ieri sera. Ho anche mal di testa.", en:"Depuis hier soir. J'ai aussi mal à la tête."},
      {who:"them", it:"Le consiglio questo sciroppo per il raffreddore e della tachipirina per la febbre.", en:"Je vous conseille ce sirop contre le rhume et du paracétamol pour la fièvre."},
      {who:"you",  it:"Quante volte al giorno?", en:"Combien de fois par jour ?"},
      {who:"them", it:"Lo sciroppo tre volte al giorno, la tachipirina ogni sei ore se necessario.", en:"Le sirop trois fois par jour, le paracétamol toutes les six heures si nécessaire."},
      {who:"you",  it:"Grazie, quanto le devo?", en:"Merci, combien je vous dois ?"},
      {who:"them", it:"Otto euro in tutto. Guarisca presto!", en:"Huit euros en tout. Bon rétablissement !"}
    ]},
  { title:"Conversation avec un local",
    scene:"Tu bavardes avec un Italien dans un train.",
    lines:[
      {who:"them", it:"Scusi, è la prima volta in Italia?", en:"Excusez-moi, c'est la première fois en Italie ?"},
      {who:"you",  it:"Sì, è la mia prima volta. Sono francese, di Lione.", en:"Oui, c'est ma première fois. Je suis français, de Lyon."},
      {who:"them", it:"Ah, Lione! Bellissima città. E parla già bene l'italiano!", en:"Ah, Lyon ! Très belle ville. Et vous parlez déjà bien l'italien !"},
      {who:"you",  it:"Grazie, lo studio da sei mesi. Le due lingue si assomigliano molto.", en:"Merci, je l'étudie depuis six mois. Les deux langues se ressemblent beaucoup."},
      {who:"them", it:"È vero! Italiano e francese sono cugini. Cosa viene a fare in Italia?", en:"C'est vrai ! L'italien et le français sont cousins. Que venez-vous faire en Italie ?"},
      {who:"you",  it:"Turismo. Voglio vedere Roma, Firenze e Venezia.", en:"Du tourisme. Je veux voir Rome, Florence et Venise."},
      {who:"them", it:"Ottimo programma! Le consiglio anche la Toscana.", en:"Excellent programme ! Je vous conseille aussi la Toscane."}
    ]}
];
