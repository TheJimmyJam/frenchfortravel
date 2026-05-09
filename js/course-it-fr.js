// Italian → French Native Lesson Plan
// Italiano come lingua di istruzione, francese come obiettivo
// vocab: { fr: "parola francese", it: "traduzione italiana", ipa: "fonetica per italofoni" }
// Fonetica: zh=/ʒ/ (come "gi" in giorno), sh=/ʃ/ (come "sc" in scena), ü=/y/ (non esiste in italiano), R=r gutturale, ã/õ/ẽ=vocali nasali

const COURSE_IT_FR = [
  {
    day: 1,
    title: "Saluti e cortesia",
    titleNative: "Bonjour & Politesse",
    focus: "Le prime parole che dirai in qualsiasi situazione francese. In Francia, salutare prima di parlare è una regola non scritta ma fondamentale — chi non lo fa viene percepito come scortese.",
    vocab: [
      { fr: "Bonjour", it: "Buongiorno / Salve", ipa: "bon-ZHUR" },
      { fr: "Bonsoir", it: "Buonasera", ipa: "bon-SUAR" },
      { fr: "Bonne nuit", it: "Buonanotte", ipa: "bon-NWEE" },
      { fr: "Salut", it: "Ciao (informale)", ipa: "sa-LÜ" },
      { fr: "Au revoir", it: "Arrivederci", ipa: "o-reh-VUAR" },
      { fr: "S'il vous plaît", it: "Per favore (formale)", ipa: "sil-vu-PLE" },
      { fr: "Merci", it: "Grazie", ipa: "mer-SI" },
      { fr: "De rien", it: "Prego / Di niente", ipa: "deh-RYEN" },
      { fr: "Excusez-moi", it: "Mi scusi", ipa: "ek-skü-ZE-mua" },
      { fr: "Pardon", it: "Scusi / Permesso", ipa: "par-DON" }
    ],
    phrases: [
      { fr: "Bonjour, comment allez-vous ?", it: "Buongiorno, come sta?", ipa: "bon-ZHUR, ko-mã-ta-LE-vu" },
      { fr: "Je vais bien, merci.", it: "Sto bene, grazie.", ipa: "zheh-ve-BYEN, mer-SI" },
      { fr: "Et vous ?", it: "E lei?", ipa: "e-VU" },
      { fr: "Enchanté(e).", it: "Piacere.", ipa: "ã-shã-TE" },
      { fr: "À bientôt !", it: "A presto!", ipa: "a-byẽ-TO" },
      { fr: "À tout à l'heure !", it: "A dopo!", ipa: "a-tu-ta-LEUR" }
    ],
    grammar: "Il francese ha due forme di 'tu': 'tu' (informale, come in italiano) e 'vous' (formale, come il 'lei' italiano). Con sconosciuti, usa sempre 'vous'. La 'r' francese è gutturale — non si arrotola come in italiano ma si pronuncia in fondo alla gola, come se si facesse un piccolo gargarismo. La 'u' francese (come in 'Salut') si pronuncia 'ü', arrotondando le labbra come per dire 'u' ma pronunciando 'i': non esiste in italiano ma ci si abitua in fretta!",
    practice: [
      "Ripeti cinque volte ad alta voce: 'Bonjour ! Comment allez-vous ? Je vais bien, merci.'",
      "Immagina di entrare in un negozio a Parigi. Saluta il commesso con 'Bonjour !' prima di chiedere qualsiasi cosa.",
      "Pratica la sequenza completa di commiato: 'Au revoir ! À bientôt !'"
    ]
  },
  {
    day: 2,
    title: "I numeri",
    titleNative: "Les Chiffres",
    focus: "I numeri sono essenziali per prezzi, orari e indirizzi. Il sistema francese ha alcune particolarità che devi conoscere — specialmente i numeri oltre il 60, che ti stupiranno!",
    vocab: [
      { fr: "un / une", it: "uno / una", ipa: "ẽ / ÜN" },
      { fr: "deux", it: "due", ipa: "DEU" },
      { fr: "trois", it: "tre", ipa: "TRUA" },
      { fr: "quatre", it: "quattro", ipa: "KA-treh" },
      { fr: "cinq", it: "cinque", ipa: "SẼNK" },
      { fr: "six", it: "sei", ipa: "SIS" },
      { fr: "sept", it: "sette", ipa: "SET" },
      { fr: "huit", it: "otto", ipa: "WEET" },
      { fr: "neuf", it: "nove", ipa: "NEUF" },
      { fr: "dix", it: "dieci", ipa: "DIS" },
      { fr: "vingt", it: "venti", ipa: "VẼ" },
      { fr: "cent", it: "cento", ipa: "SÃ" }
    ],
    phrases: [
      { fr: "Ça coûte combien ?", it: "Quanto costa?", ipa: "sa-kut-kõ-BYẼN" },
      { fr: "C'est cinq euros.", it: "Sono cinque euro.", ipa: "se-sẽnk-eu-RO" },
      { fr: "J'ai trente ans.", it: "Ho trent'anni.", ipa: "zhe-trãt-Ã" },
      { fr: "Il est trois heures.", it: "Sono le tre.", ipa: "il-e-trua-EUR" },
      { fr: "Donnez-moi deux, s'il vous plaît.", it: "Me ne dia due, per favore.", ipa: "do-ne-mua-DEU, sil-vu-PLE" }
    ],
    grammar: "Attenzione alle stranezze francesi! 70 = 'soixante-dix' (letteralmente 60+10), 80 = 'quatre-vingts' (4×20), 90 = 'quatre-vingt-dix' (4×20+10). Da 11 a 16 le forme sono irregolari: onze, douze, treize, quatorze, quinze, seize. Da 17 in poi si torna alla logica: dix-sept (10+7), dix-huit, dix-neuf. È un sistema antico e un po' bizzarro, ma ci si fa l'abitudine!",
    practice: [
      "Conta da 1 a 10 in francese ad alta voce finché non viene naturale.",
      "Di' la tua età in francese: 'J'ai ___ ans.'",
      "Prova a dire il prezzo di 3 oggetti nella tua stanza in francese, immaginando di essere in un mercato."
    ]
  },
  {
    day: 3,
    title: "Al caffè",
    titleNative: "Au Café",
    focus: "Il caffè è il cuore della vita sociale francese. Ordinare correttamente — e con cortesia — è un'abilità fondamentale. Attenzione: in Francia il 'café' è sempre un espresso!",
    vocab: [
      { fr: "un café", it: "un caffè (espresso)", ipa: "ẽ-ka-FE" },
      { fr: "un café au lait", it: "un caffellatte", ipa: "ẽ-ka-fe-o-LE" },
      { fr: "un thé", it: "un tè", ipa: "ẽ-TE" },
      { fr: "un jus d'orange", it: "un succo d'arancia", ipa: "ẽ-zhü-do-RÃZH" },
      { fr: "une eau", it: "un'acqua", ipa: "ün-O" },
      { fr: "un croissant", it: "un cornetto / croissant", ipa: "ẽ-krua-SÃ" },
      { fr: "l'addition", it: "il conto", ipa: "la-di-SYÕ" },
      { fr: "la terrasse", it: "la terrazza", ipa: "la-te-RAS" },
      { fr: "le garçon", it: "il cameriere", ipa: "leh-gar-SÕ" },
      { fr: "le menu", it: "il menù", ipa: "leh-meh-NÜ" }
    ],
    phrases: [
      { fr: "Je voudrais un café, s'il vous plaît.", it: "Vorrei un caffè, per favore.", ipa: "zheh-vu-DRE-ẽ-ka-FE, sil-vu-PLE" },
      { fr: "Un thé au lait, s'il vous plaît.", it: "Un tè con latte, per favore.", ipa: "ẽ-te-o-LE, sil-vu-PLE" },
      { fr: "L'addition, s'il vous plaît.", it: "Il conto, per favore.", ipa: "la-di-SYÕ, sil-vu-PLE" },
      { fr: "C'est pour emporter.", it: "È da asporto.", ipa: "se-pur-ã-por-TE" },
      { fr: "Une table pour deux, s'il vous plaît.", it: "Un tavolo per due, per favore.", ipa: "ün-ta-bleh-pur-DEU, sil-vu-PLE" },
      { fr: "Vous avez quoi comme gâteaux ?", it: "Che dolci avete?", ipa: "vu-za-ve-kua-kõm-ga-TO" }
    ],
    grammar: "Per ordinare in francese: 'Je voudrais...' (vorrei) è più educato di 'Je veux...' (voglio). Gli articoli: 'un' per il maschile, 'une' per il femminile — simile all'italiano! Il 'café allongé' è l'equivalente del caffè americano. Ricorda: in Francia si dice sempre 'Bonjour' prima di ordinare qualsiasi cosa.",
    practice: [
      "Esercitati con l'ordine completo: 'Bonjour ! Je voudrais un café et un croissant, s'il vous plaît.'",
      "Memorizza come chiedere il conto: 'L'addition, s'il vous plaît !'",
      "Immagina di sederti in un caffè parigino. Cosa ordineresti? Di' il tuo ordine completo in francese."
    ]
  },
  {
    day: 4,
    title: "Il cibo",
    titleNative: "La Nourriture",
    focus: "La Francia è famosa per la sua gastronomia. Conoscere il vocabolario del cibo ti aiuterà nei mercati, nei ristoranti e nei supermercati — e ti permetterà di apprezzare meglio la cultura.",
    vocab: [
      { fr: "le pain", it: "il pane", ipa: "leh-PẼ" },
      { fr: "le fromage", it: "il formaggio", ipa: "leh-fro-MAZH" },
      { fr: "le beurre", it: "il burro", ipa: "leh-BEUR" },
      { fr: "la viande", it: "la carne", ipa: "la-VYÃD" },
      { fr: "le poisson", it: "il pesce", ipa: "leh-pua-SÕ" },
      { fr: "les légumes", it: "la verdura", ipa: "le-le-GÜM" },
      { fr: "les fruits", it: "la frutta", ipa: "le-FRWEE" },
      { fr: "le dessert", it: "il dolce / il dessert", ipa: "leh-de-SER" },
      { fr: "délicieux", it: "delizioso", ipa: "de-li-SYEU" },
      { fr: "sucré / salé", it: "dolce / salato", ipa: "sü-KRE / sa-LE" }
    ],
    phrases: [
      { fr: "C'est délicieux !", it: "È delizioso!", ipa: "se-de-li-SYEU" },
      { fr: "Je suis végétarien(ne).", it: "Sono vegetariano/a.", ipa: "zheh-swi-ve-zhe-ta-RYẼN" },
      { fr: "Je n'aime pas le poisson.", it: "Non mi piace il pesce.", ipa: "zheh-nem-pa-leh-pua-SÕ" },
      { fr: "Qu'est-ce que vous recommandez ?", it: "Cosa consiglia?", ipa: "ke-skeh-vu-re-ko-mã-DE" },
      { fr: "Sans gluten, s'il vous plaît.", it: "Senza glutine, per favore.", ipa: "sã-glü-TẼN, sil-vu-PLE" }
    ],
    grammar: "In francese esistono gli articoli partitivi che in italiano non ci sono nella stessa forma: 'du' (del, maschile), 'de la' (della, femminile), 'des' (dei/delle, plurale). Esempio: 'Je veux du pain' (voglio del pane), 'Je veux de la viande' (voglio della carne). Simili al 'del/della' italiano, ma obbligatori!",
    practice: [
      "Descrivi tre cibi che ami usando 'J'aime...' e tre che non ami con 'Je n'aime pas...'",
      "Memorizza: 'C'est délicieux !' — la userai molto spesso.",
      "Come diresti di essere allergico a qualcosa? Studia 'Je suis allergique à...' e allenati con un alimento."
    ]
  },
  {
    day: 5,
    title: "Presentazioni e famiglia",
    titleNative: "Se Présenter & La Famille",
    focus: "Presentarsi e parlare della propria famiglia è fondamentale per le prime conversazioni. I francesi sono più formali rispetto agli italiani — rispetta sempre il 'vous' con gli sconosciuti.",
    vocab: [
      { fr: "je m'appelle", it: "mi chiamo", ipa: "zheh-ma-PEL" },
      { fr: "j'ai ... ans", it: "ho ... anni", ipa: "zhe-Ã" },
      { fr: "je viens de", it: "vengo da / sono di", ipa: "zheh-VYẼN-deh" },
      { fr: "la famille", it: "la famiglia", ipa: "la-fa-MI-yeh" },
      { fr: "le père / la mère", it: "il padre / la madre", ipa: "leh-PER / la-MER" },
      { fr: "le frère / la sœur", it: "il fratello / la sorella", ipa: "leh-FRER / la-SEUR" },
      { fr: "le mari / la femme", it: "il marito / la moglie", ipa: "leh-ma-RI / la-FAM" },
      { fr: "les enfants", it: "i figli / i bambini", ipa: "le-zã-FÃ" },
      { fr: "les grands-parents", it: "i nonni", ipa: "le-grã-pa-RÃ" },
      { fr: "célibataire", it: "single / celibe / nubile", ipa: "se-li-ba-TER" }
    ],
    phrases: [
      { fr: "Je m'appelle Marco. Et vous ?", it: "Mi chiamo Marco. E lei?", ipa: "zheh-ma-pel-mar-KO. e-VU" },
      { fr: "Je viens d'Italie.", it: "Vengo dall'Italia.", ipa: "zheh-vyẽn-di-ta-LI" },
      { fr: "J'ai deux frères et une sœur.", it: "Ho due fratelli e una sorella.", ipa: "zhe-DEU-frer-e-ün-SEUR" },
      { fr: "Je suis marié(e).", it: "Sono sposato/a.", ipa: "zheh-swi-ma-RIE" },
      { fr: "Vous avez des enfants ?", it: "Ha dei figli?", ipa: "vu-za-ve-de-zã-FÃ" }
    ],
    grammar: "In francese, gli aggettivi di nazionalità non si scrivono con la maiuscola se sono aggettivi: 'je suis italien' (sono italiano). Ma con la maiuscola se sono sostantivi: 'un Italien' (un italiano). La 'r' gutturale è la vera sfida per gli italofoni — non si arrotola mai, viene prodotta in fondo alla gola.",
    practice: [
      "Scrivi la tua presentazione completa in francese: nome, età, provenienza, stato civile e famiglia.",
      "Registrati mentre ti presenti e ascoltati per migliorare la pronuncia.",
      "Esercitati a chiedere e rispondere: '—Vous avez des frères et sœurs ? —Oui, j'ai...'"
    ]
  },
  {
    day: 6,
    title: "Colori e descrizione",
    titleNative: "Les Couleurs & La Description",
    focus: "I colori e gli aggettivi descrittivi ti permettono di parlare di persone, oggetti e luoghi. Sono essenziali per fare acquisti e descrivere ciò che cerchi.",
    vocab: [
      { fr: "rouge", it: "rosso", ipa: "RUZH" },
      { fr: "bleu / bleue", it: "blu / azzurro", ipa: "BLEU" },
      { fr: "vert / verte", it: "verde", ipa: "VER / VERT" },
      { fr: "jaune", it: "giallo", ipa: "ZHON" },
      { fr: "blanc / blanche", it: "bianco", ipa: "BLÃ / BLÃSH" },
      { fr: "noir / noire", it: "nero", ipa: "NUAR" },
      { fr: "grand / grande", it: "grande", ipa: "GRÃ / GRÃD" },
      { fr: "petit / petite", it: "piccolo/a", ipa: "peh-TI / peh-TIT" },
      { fr: "beau / belle", it: "bello/a", ipa: "BO / BEL" },
      { fr: "vieux / vieille", it: "vecchio/a", ipa: "VYEU / VYEY" }
    ],
    phrases: [
      { fr: "Je cherche une robe rouge.", it: "Cerco un vestito rosso.", ipa: "zheh-shersh-ün-rob-RUZH" },
      { fr: "C'est trop grand pour moi.", it: "È troppo grande per me.", ipa: "se-tro-GRÃ-pur-MUA" },
      { fr: "Vous avez ça en bleu ?", it: "Ce l'avete in blu?", ipa: "vu-za-ve-sa-ã-BLEU" },
      { fr: "C'est très joli !", it: "È molto carino!", ipa: "se-tre-zho-LI" },
      { fr: "Il est grand et brun.", it: "È alto e bruno.", ipa: "il-e-GRÃ-e-BRẼ" }
    ],
    grammar: "In francese, gli aggettivi si accordano in genere e numero con il sostantivo, come in italiano. 'Un chat noir' (un gatto nero) → 'Une robe noire' (un vestito nero). Molti aggettivi aggiungono -e per il femminile: grand → grande, petit → petite. Gli aggettivi già terminanti in -e non cambiano: rouge, jaune, belle. Attenzione: 'beau' diventa 'belle' al femminile!",
    practice: [
      "Descrivi i vestiti che indossi oggi usando i colori in francese.",
      "Descrivi un membro della tua famiglia: 'Ma mère est grande et belle.'",
      "Esercitati con i colori guardando gli oggetti intorno a te e nominandoli in francese."
    ]
  },
  {
    day: 7,
    title: "Al mercato",
    titleNative: "Au Marché",
    focus: "I mercati francesi ('marchés') sono un'istituzione culturale. Imparare ad acquistare frutta, verdura e formaggi come un locale ti connette alla vita quotidiana francese.",
    vocab: [
      { fr: "les pommes", it: "le mele", ipa: "le-POM" },
      { fr: "les tomates", it: "i pomodori", ipa: "le-to-MAT" },
      { fr: "les fraises", it: "le fragole", ipa: "le-FREZ" },
      { fr: "l'ail", it: "l'aglio", ipa: "LA-yeh" },
      { fr: "les oignons", it: "le cipolle", ipa: "le-zo-NYÕ" },
      { fr: "un kilo de", it: "un chilo di", ipa: "ẽ-ki-lo-DEH" },
      { fr: "une livre de", it: "mezzo chilo di", ipa: "ün-LI-vreh-deh" },
      { fr: "c'est combien ?", it: "quanto costa?", ipa: "se-kõ-BYẼN" },
      { fr: "trop cher", it: "troppo caro", ipa: "tro-SHER" },
      { fr: "frais / fraîche", it: "fresco/a", ipa: "FRE / FRESH" }
    ],
    phrases: [
      { fr: "Je voudrais un kilo de tomates.", it: "Vorrei un chilo di pomodori.", ipa: "zheh-vu-DRE-ẽ-ki-lo-deh-to-MAT" },
      { fr: "Ils sont frais, vos fruits ?", it: "Sono freschi, i suoi frutti?", ipa: "il-sõ-FRE, vo-FRWEE" },
      { fr: "C'est un peu trop cher.", it: "È un po' troppo caro.", ipa: "se-ẽ-peu-tro-SHER" },
      { fr: "Je prends ça.", it: "Lo prendo.", ipa: "zheh-PRÃ-sa" },
      { fr: "Donnez-moi une livre de fraises.", it: "Mi dia mezzo chilo di fragole.", ipa: "do-ne-MUA-ün-li-vreh-deh-FREZ" }
    ],
    grammar: "Per esprimere una quantità in francese si usa 'de/d'' senza articolo: 'un kilo de pommes' (non 'un kilo des pommes'). Questo schema è costante: 'beaucoup de monde' (molta gente), 'trop de sel' (troppo sale). Simile all'italiano 'un chilo di mele' — la struttura è quasi identica!",
    practice: [
      "Immagina di essere al mercato. Scrivi la tua lista della spesa in francese e allenati a dirla.",
      "Esercitati nel dialogo: 'C'est combien les fraises ?' — 'Trois euros le kilo.' — 'Je prends ça.'",
      "Impara tre frutti o verdure in più rispetto a quelli di oggi e usali in frasi."
    ]
  },
  {
    day: 8,
    title: "Trasporti e indicazioni",
    titleNative: "Transport & Directions",
    focus: "Muoversi in una città francese richiede di capire le indicazioni, i trasporti pubblici e come chiedere la strada. La metropolitana di Parigi è una delle più efficienti del mondo.",
    vocab: [
      { fr: "le métro", it: "la metropolitana", ipa: "leh-me-TRO" },
      { fr: "le bus", it: "l'autobus", ipa: "leh-BUS" },
      { fr: "le train", it: "il treno", ipa: "leh-TRẼ" },
      { fr: "la gare", it: "la stazione (ferroviaria)", ipa: "la-GAR" },
      { fr: "l'arrêt de bus", it: "la fermata dell'autobus", ipa: "la-RE-deh-BUS" },
      { fr: "à droite", it: "a destra", ipa: "a-DRUAT" },
      { fr: "à gauche", it: "a sinistra", ipa: "a-GOSH" },
      { fr: "tout droit", it: "dritto / sempre dritto", ipa: "tu-DRUA" },
      { fr: "près de", it: "vicino a", ipa: "pre-DEH" },
      { fr: "loin de", it: "lontano da", ipa: "luẽ-DEH" }
    ],
    phrases: [
      { fr: "Où est la station de métro ?", it: "Dov'è la stazione della metro?", ipa: "u-e-la-sta-SYÕ-deh-me-TRO" },
      { fr: "C'est à combien de minutes ?", it: "A quanti minuti è?", ipa: "se-ta-kõ-BYẼN-deh-mi-NUT" },
      { fr: "Tournez à gauche au feu rouge.", it: "Giri a sinistra al semaforo.", ipa: "tur-NE-a-GOSH-o-feu-RUZH" },
      { fr: "Un ticket, s'il vous plaît.", it: "Un biglietto, per favore.", ipa: "ẽ-ti-KE, sil-vu-PLE" },
      { fr: "Est-ce que ce bus va à la Tour Eiffel ?", it: "Questo autobus va alla Torre Eiffel?", ipa: "es-keh-seh-BUS-va-a-la-tur-e-FEL" }
    ],
    grammar: "La preposizione 'à' si contrae con gli articoli: 'à + le = au' (al) e 'à + les = aux' (ai/alle). Ma 'à la' e 'à l'' non cambiano. Esempi: 'Je vais au marché' (vado al mercato), 'Je vais à la gare' (vado alla stazione). È simile al fenomeno italiano 'a + il = al', 'a + i = ai'!",
    practice: [
      "Esercitati a dare indicazioni immaginando di essere nel centro di Parigi verso la Torre Eiffel.",
      "Memorizza le quattro direzioni di base: droite, gauche, tout droit, derrière.",
      "Come diresti 'L'albergo è vicino alla metro'? Costruisci la frase in francese."
    ]
  },
  {
    day: 9,
    title: "Al ristorante",
    titleNative: "Au Restaurant",
    focus: "Mangiare in un ristorante francese è un'esperienza culturale a sé stante. Il servizio è formale, il menu ha una struttura precisa e ci sono delle etichette che dovresti conoscere.",
    vocab: [
      { fr: "une table", it: "un tavolo", ipa: "ün-TA-bleh" },
      { fr: "la carte", it: "la carta / il menu", ipa: "la-KART" },
      { fr: "l'entrée", it: "il primo piatto / l'antipasto", ipa: "lã-TRE" },
      { fr: "le plat principal", it: "il secondo / piatto principale", ipa: "leh-pla-prẽ-si-PAL" },
      { fr: "le dessert", it: "il dessert / il dolce", ipa: "leh-de-SER" },
      { fr: "la carafe d'eau", it: "la caraffa d'acqua (gratuita)", ipa: "la-ka-raf-DO" },
      { fr: "saignant / bien cuit", it: "al sangue / ben cotto", ipa: "se-NYÃ / byẽ-KWEE" },
      { fr: "l'addition", it: "il conto", ipa: "la-di-SYÕ" },
      { fr: "le pourboire", it: "la mancia", ipa: "leh-pur-BUAR" },
      { fr: "une réservation", it: "una prenotazione", ipa: "ün-re-zer-va-SYÕ" }
    ],
    phrases: [
      { fr: "J'ai une réservation au nom de Rossi.", it: "Ho una prenotazione a nome di Rossi.", ipa: "zhe-ün-re-zer-va-SYÕ-o-nõ-deh-ro-SI" },
      { fr: "Nous sommes quatre.", it: "Siamo in quattro.", ipa: "nu-som-KA-treh" },
      { fr: "Le steak, saignant s'il vous plaît.", it: "La bistecca al sangue, per favore.", ipa: "leh-STEK-se-NYÃ-sil-vu-PLE" },
      { fr: "Est-ce que le service est compris ?", it: "Il servizio è incluso?", ipa: "es-keh-leh-ser-VIS-e-kõ-PRI" },
      { fr: "C'était excellent !", it: "Era eccellente!", ipa: "se-te-tek-se-LÃ" }
    ],
    grammar: "Il menu francese tradizionale: entrée (primo/antipasto), plat (secondo) e dessert. 'La carte' è il menu generale; 'le menu' spesso indica il menu fisso a prezzo stabilito ('menu à prix fixe'). A differenza dell'Italia, il servizio non è sempre incluso — verifica sempre. In Francia chiedere 'une carafe d'eau' è normale e gratuito!",
    practice: [
      "Esercitati a prenotare un tavolo: 'Bonsoir, je voudrais réserver une table pour deux personnes ce soir.'",
      "Memorizza la sequenza: carta → ordinazione → piatti → dolce → conto.",
      "Come ordineresti la tua bistecca preferita in francese? Allenati con la frase completa."
    ]
  },
  {
    day: 10,
    title: "Il tempo atmosferico e le stagioni",
    titleNative: "La Météo & Les Saisons",
    focus: "Il tempo è uno degli argomenti di conversazione più universali. I francesi lo commentano costantemente — è un ottimo tema per rompere il ghiaccio con i madrelingua.",
    vocab: [
      { fr: "il fait beau", it: "fa bel tempo", ipa: "il-fe-BO" },
      { fr: "il fait chaud", it: "fa caldo", ipa: "il-fe-SHO" },
      { fr: "il fait froid", it: "fa freddo", ipa: "il-fe-FRUA" },
      { fr: "il pleut", it: "piove", ipa: "il-PLEU" },
      { fr: "il neige", it: "nevica", ipa: "il-NEZH" },
      { fr: "le soleil", it: "il sole", ipa: "leh-so-LEY" },
      { fr: "le nuage", it: "la nuvola", ipa: "leh-nü-AZH" },
      { fr: "le printemps", it: "la primavera", ipa: "leh-prẽ-TÃ" },
      { fr: "l'été", it: "l'estate", ipa: "le-TE" },
      { fr: "l'hiver", it: "l'inverno", ipa: "li-VER" }
    ],
    phrases: [
      { fr: "Quel temps fait-il aujourd'hui ?", it: "Che tempo fa oggi?", ipa: "kel-tã-fe-til-o-zhur-DWEE" },
      { fr: "Il fait très beau aujourd'hui !", it: "Fa bel tempo oggi!", ipa: "il-fe-tre-BO-o-zhur-DWEE" },
      { fr: "J'espère qu'il ne pleuvra pas.", it: "Spero che non piova.", ipa: "zhes-per-kil-neh-pleu-VRA-pa" },
      { fr: "Quelle est la température ?", it: "Qual è la temperatura?", ipa: "ke-le-la-tã-pe-ra-TUR" },
      { fr: "J'adore l'été en France.", it: "Adoro l'estate in Francia.", ipa: "zha-dor-le-TE-ã-FRÃS" }
    ],
    grammar: "In francese il meteo usa il verbo 'faire' impersonale con 'il': 'il fait beau/chaud/froid'. Per fenomeni specifici si usano verbi propri: 'il pleut' (piove), 'il neige' (nevica). Nota che 'il' qui non si riferisce a nessuna persona — è un soggetto impersonale, come l'italiano 'fa' in 'fa caldo'.",
    practice: [
      "Descrivi il tempo che fa oggi dove ti trovi, in francese.",
      "Qual è la tua stagione preferita? Di' perché in francese: 'J'adore... parce que...'",
      "Allenati con il piccolo dialogo del meteo: '—Quel temps fait-il ? —Il fait beau !'"
    ]
  },
  {
    day: 11,
    title: "In albergo",
    titleNative: "À l'Hôtel",
    focus: "Che tu stia in un ostello o in un hotel di lusso, devi saper comunicare con il personale per rendere il tuo soggiorno più confortevole e risolvere eventuali problemi.",
    vocab: [
      { fr: "la chambre", it: "la camera", ipa: "la-SHÃBR" },
      { fr: "la clé / le badge", it: "la chiave / la tessera", ipa: "la-KLE / leh-BAZH" },
      { fr: "le petit-déjeuner", it: "la colazione", ipa: "leh-peh-ti-de-zheu-NE" },
      { fr: "la réception", it: "la reception", ipa: "la-re-sep-SYÕ" },
      { fr: "l'ascenseur", it: "l'ascensore", ipa: "la-sã-SEUR" },
      { fr: "le wifi", it: "il wifi", ipa: "leh-wi-FI" },
      { fr: "réserver", it: "prenotare", ipa: "re-zer-VE" },
      { fr: "disponible", it: "disponibile", ipa: "dis-po-NI-bleh" },
      { fr: "le check-out", it: "il check-out / la partenza", ipa: "leh-chek-AUT" },
      { fr: "vue sur la mer", it: "vista sul mare", ipa: "vü-sür-la-MER" }
    ],
    phrases: [
      { fr: "J'ai une réservation.", it: "Ho una prenotazione.", ipa: "zhe-ün-re-zer-va-SYÕ" },
      { fr: "À quelle heure est le petit-déjeuner ?", it: "A che ora è la colazione?", ipa: "a-kel-EUR-e-leh-peh-ti-de-zheu-NE" },
      { fr: "Il y a un problème avec la chambre.", it: "C'è un problema con la camera.", ipa: "il-ia-ẽ-pro-BLEM-a-vek-la-SHÃBR" },
      { fr: "Je voudrais une chambre avec vue.", it: "Vorrei una camera con vista.", ipa: "zheh-vu-DRE-ün-SHÃBR-a-vek-VÜ" },
      { fr: "À quelle heure dois-je libérer la chambre ?", it: "A che ora devo lasciare la camera?", ipa: "a-kel-EUR-dua-zheh-li-be-RE-la-SHÃBR" }
    ],
    grammar: "'Il y a' (c'è / ci sono) è un'espressione molto utile che non cambia mai: 'Il y a un problème' (c'è un problema), 'Il y a des chambres disponibles' (ci sono camere disponibili). La sua negazione è 'Il n'y a pas de...' (non c'è / non ci sono). È l'equivalente perfetto del 'c'è/ci sono' italiano.",
    practice: [
      "Esercitati con il check-in completo: presentarti, confermare la prenotazione, chiedere informazioni.",
      "Immagina un problema nella tua camera (niente asciugamani, wifi che non funziona) e come lo segnaleresti.",
      "Memorizza: 'Il y a un problème...' — è la tua frase di soccorso per qualsiasi inconveniente."
    ]
  },
  {
    day: 12,
    title: "Abbigliamento e shopping",
    titleNative: "Les Vêtements & Le Shopping",
    focus: "La Francia è sinonimo di moda. Sapere fare acquisti, chiedere la taglia e muoversi nei negozi ti darà sicurezza in uno degli ambienti più frequentati dai turisti.",
    vocab: [
      { fr: "un pantalon", it: "un pantalone", ipa: "ẽ-pã-ta-LÕ" },
      { fr: "une chemise", it: "una camicia", ipa: "ün-sheh-MIZ" },
      { fr: "une robe", it: "un vestito / un abito", ipa: "ün-ROB" },
      { fr: "un manteau", it: "un cappotto", ipa: "ẽ-mã-TO" },
      { fr: "les chaussures", it: "le scarpe", ipa: "le-sho-SÜR" },
      { fr: "la taille", it: "la taglia", ipa: "la-TA-yeh" },
      { fr: "essayer", it: "provare (un indumento)", ipa: "e-se-YE" },
      { fr: "ça me va bien", it: "mi sta bene", ipa: "sa-meh-va-BYẼN" },
      { fr: "en solde", it: "in saldo / in offerta", ipa: "ã-SOLD" },
      { fr: "la caisse", it: "la cassa", ipa: "la-KES" }
    ],
    phrases: [
      { fr: "Je cherche une chemise blanche.", it: "Cerco una camicia bianca.", ipa: "zheh-shersh-ün-sheh-MIZ-BLÃSH" },
      { fr: "Je fais du 42.", it: "Porto la 42.", ipa: "zheh-fe-dü-ka-rã-DEU" },
      { fr: "Je peux l'essayer ?", it: "Posso provarlo?", ipa: "zheh-peu-le-se-YE" },
      { fr: "C'est trop serré.", it: "È troppo stretto.", ipa: "se-tro-se-RE" },
      { fr: "Vous acceptez la carte ?", it: "Accettate la carta?", ipa: "vu-zak-sep-TE-la-KART" }
    ],
    grammar: "Il verbo 'essayer' (provare) si coniuga con un cambiamento ortografico: j'essaie, tu essaies, il essaie. I camerini si chiamano 'les cabines d'essayage'. Per chiedere un altro colore o taglia: 'Vous avez ça en... ?' Le taglie francesi non corrispondono a quelle italiane — verifica la tua taglia equivalente!",
    practice: [
      "Esercitati nel dialogo completo: entrare, cercare, chiedere la taglia, provare e pagare.",
      "Come diresti che qualcosa ti va grande? E piccolo? Allenati con entrambe le frasi.",
      "Memorizza i colori del giorno 6 e usali descrivendo abbigliamento: 'Je cherche un manteau noir.'"
    ]
  },
  {
    day: 13,
    title: "Salute e corpo",
    titleNative: "La Santé & Le Corps",
    focus: "Speri di non averne mai bisogno, ma in caso di emergenza medica o una visita in farmacia, devi saper comunicare chiaramente sul tuo stato di salute.",
    vocab: [
      { fr: "la tête", it: "la testa", ipa: "la-TET" },
      { fr: "le ventre", it: "la pancia / lo stomaco", ipa: "leh-VÃ-treh" },
      { fr: "le dos", it: "la schiena", ipa: "leh-DO" },
      { fr: "la gorge", it: "la gola", ipa: "la-GORZH" },
      { fr: "la fièvre", it: "la febbre", ipa: "la-FYEV-reh" },
      { fr: "j'ai mal à", it: "mi fa male il/la", ipa: "zhe-mal-A" },
      { fr: "le médecin", it: "il medico", ipa: "leh-med-SẼ" },
      { fr: "la pharmacie", it: "la farmacia", ipa: "la-far-ma-SI" },
      { fr: "une ordonnance", it: "una ricetta medica", ipa: "ün-or-do-NÃS" },
      { fr: "les urgences", it: "il pronto soccorso / le urgenze", ipa: "le-zür-ZHÃS" }
    ],
    phrases: [
      { fr: "J'ai mal à la tête.", it: "Mi fa male la testa.", ipa: "zhe-mal-a-la-TET" },
      { fr: "J'ai de la fièvre.", it: "Ho la febbre.", ipa: "zhe-deh-la-FYEV-reh" },
      { fr: "Je me sens très mal.", it: "Mi sento molto male.", ipa: "zheh-meh-sã-tre-MAL" },
      { fr: "Où est la pharmacie la plus proche ?", it: "Dov'è la farmacia più vicina?", ipa: "u-e-la-far-ma-SI-la-plü-PROSH" },
      { fr: "Appelez le SAMU !", it: "Chiami il 15 (emergenze mediche)!", ipa: "a-pe-LE-leh-sa-MÜ" }
    ],
    grammar: "Per esprimere dolore in francese: 'J'ai mal à + articolo + parte del corpo'. Attenzione alle contrazioni: 'J'ai mal au dos' (schiena — maschile), 'J'ai mal à la tête' (testa — femminile), 'J'ai mal aux pieds' (piedi — plurale). Il SAMU è il 15 (emergenze mediche in Francia). Il 15 italiano corrisponde al 118.",
    practice: [
      "Memorizza: '—Qu'est-ce qui ne va pas ? —J'ai mal à la tête et de la fièvre.'",
      "Identifica le parti del corpo in francese indicandole mentre le dici ad alta voce.",
      "Come chiederesti un antidolorifico in farmacia? Esercitati con la frase."
    ]
  },
  {
    day: 14,
    title: "Lavoro e professioni",
    titleNative: "Le Travail & Les Professions",
    focus: "Parlare del proprio lavoro e delle professioni è inevitabile nelle conversazioni. In contesti professionali o sociali, questi temi emergono fin dal primo incontro.",
    vocab: [
      { fr: "qu'est-ce que vous faites ?", it: "cosa fa di lavoro?", ipa: "ke-skeh-vu-FET" },
      { fr: "je travaille dans", it: "lavoro nel/nella", ipa: "zheh-tra-VAY-dã" },
      { fr: "médecin", it: "medico", ipa: "med-SẼ" },
      { fr: "ingénieur", it: "ingegnere", ipa: "ẽ-zhe-NYEUR" },
      { fr: "enseignant(e)", it: "insegnante", ipa: "ã-se-NYÃ" },
      { fr: "avocat(e)", it: "avvocato/a", ipa: "a-vo-KA" },
      { fr: "informaticien(ne)", it: "informatico/a", ipa: "ẽ-for-ma-ti-SYẼN" },
      { fr: "chef cuisinier", it: "chef / cuoco", ipa: "shef-kwi-zi-NYE" },
      { fr: "à mon compte", it: "in proprio / freelance", ipa: "a-mõ-KÕT" },
      { fr: "le bureau", it: "l'ufficio", ipa: "leh-bü-RO" }
    ],
    phrases: [
      { fr: "Qu'est-ce que vous faites dans la vie ?", it: "Cosa fa nella vita?", ipa: "ke-skeh-vu-fet-dã-la-VI" },
      { fr: "Je suis enseignant(e) à Milan.", it: "Sono insegnante a Milano.", ipa: "zheh-swi-ã-se-NYÃ-a-mi-LÃ" },
      { fr: "Je travaille à mon compte.", it: "Lavoro in proprio.", ipa: "zheh-tra-VAY-a-mõ-KÕT" },
      { fr: "J'aime beaucoup mon travail.", it: "Mi piace molto il mio lavoro.", ipa: "zhem-bo-ku-mõ-tra-VAY" },
      { fr: "Je cherche un emploi.", it: "Sto cercando lavoro.", ipa: "zheh-shersh-ẽ-ã-PLUA" }
    ],
    grammar: "In francese, le professioni non vogliono l'articolo dopo 'être': 'Je suis médecin' (non 'Je suis un médecin'). Ma se c'è un aggettivo, l'articolo torna: 'C'est un bon médecin'. Molte professioni hanno una forma femminile: infirmier → infirmière, enseignant → enseignante. Simile all'italiano: medico → medica, avvocato → avvocata.",
    practice: [
      "Di' la tua professione in francese: 'Je suis...' Se sei studente: 'Je suis étudiant(e).'",
      "Esercitati a chiedere e rispondere: '—Qu'est-ce que vous faites ? —Je suis..., je travaille dans...'",
      "Impara 5 professioni rilevanti per il tuo ambiente e allenati con esse."
    ]
  },
  {
    day: 15,
    title: "Hobby e tempo libero",
    titleNative: "Les Loisirs",
    focus: "Gli hobby sono un argomento di conversazione naturale e personale. Parlare di ciò che ti piace fare nel tempo libero crea connessioni autentiche con i madrelingua.",
    vocab: [
      { fr: "lire", it: "leggere", ipa: "LIR" },
      { fr: "écouter de la musique", it: "ascoltare musica", ipa: "e-ku-TE-deh-la-mü-ZIK" },
      { fr: "faire du sport", it: "fare sport", ipa: "fer-dü-SPOR" },
      { fr: "voyager", it: "viaggiare", ipa: "vua-ya-ZHE" },
      { fr: "cuisiner", it: "cucinare", ipa: "kwi-zi-NE" },
      { fr: "peindre", it: "dipingere", ipa: "PẼDR" },
      { fr: "jouer aux cartes", it: "giocare a carte", ipa: "zhue-o-KART" },
      { fr: "regarder des films", it: "guardare film", ipa: "reh-gar-DE-de-FILM" },
      { fr: "se balader", it: "passeggiare", ipa: "seh-ba-la-DE" },
      { fr: "le week-end", it: "il fine settimana", ipa: "leh-wi-KEND" }
    ],
    phrases: [
      { fr: "Qu'est-ce que vous aimez faire le week-end ?", it: "Cosa le piace fare nel fine settimana?", ipa: "ke-skeh-vu-ze-ME-fer-leh-wi-KEND" },
      { fr: "J'adore lire des romans.", it: "Adoro leggere romanzi.", ipa: "zha-dor-LIR-de-ro-MÃ" },
      { fr: "Je fais du vélo le dimanche.", it: "Vado in bici la domenica.", ipa: "zheh-fe-dü-ve-lo-leh-di-MÃSH" },
      { fr: "On pourrait aller au cinéma ?", it: "Potremmo andare al cinema?", ipa: "õ-pu-RE-ta-le-o-si-ne-MA" },
      { fr: "Je n'ai pas le temps ces jours-ci.", it: "Non ho tempo in questi giorni.", ipa: "zheh-ne-pa-leh-tã-se-zhur-SI" }
    ],
    grammar: "Per parlare di attività abituali si usa il presente: 'Je lis tous les soirs' (leggo tutte le sere). Con 'faire' per sport e attività: 'Je fais du vélo' (vado in bici), 'Je fais du yoga'. Con 'jouer': sport di squadra — 'Je joue au football'. La distinzione faire/jouer è simile all'italiano fare/giocare.",
    practice: [
      "Elenca i tuoi tre hobby preferiti del fine settimana in francese.",
      "Invita qualcuno a un'attività: 'On pourrait aller...?' e allenati ad accettare e rifiutare.",
      "Descrivi la tua settimana tipica usando il presente abituale: 'Le lundi je..., le vendredi je...'"
    ]
  },
  {
    day: 16,
    title: "La città",
    titleNative: "La Ville",
    focus: "Orientarsi in una città francese e conoscere i luoghi chiave ti dà indipendenza. Ti permetterà anche di fare piani e suggerire attività ai madrelingua.",
    vocab: [
      { fr: "la mairie", it: "il municipio / il comune", ipa: "la-me-RI" },
      { fr: "l'église", it: "la chiesa", ipa: "le-GLIZ" },
      { fr: "le musée", it: "il museo", ipa: "leh-mü-ZE" },
      { fr: "la bibliothèque", it: "la biblioteca", ipa: "la-bi-blyo-TEK" },
      { fr: "le parc", it: "il parco", ipa: "leh-PARK" },
      { fr: "la poste", it: "l'ufficio postale", ipa: "la-POST" },
      { fr: "le commissariat", it: "la questura / il commissariato", ipa: "leh-ko-mi-sa-RYA" },
      { fr: "le centre-ville", it: "il centro città", ipa: "leh-sã-treh-VIL" },
      { fr: "la banlieue", it: "la periferia", ipa: "la-bã-LYEU" },
      { fr: "la place", it: "la piazza", ipa: "la-PLAS" }
    ],
    phrases: [
      { fr: "Où se trouve le musée du Louvre ?", it: "Dov'è il museo del Louvre?", ipa: "u-seh-truv-leh-mü-ZE-dü-LUVR" },
      { fr: "C'est loin d'ici ?", it: "È lontano da qui?", ipa: "se-luẽ-di-SI" },
      { fr: "Je cherche la poste.", it: "Cerco l'ufficio postale.", ipa: "zheh-shersh-la-POST" },
      { fr: "Le marché est sur la place principale.", it: "Il mercato è in piazza principale.", ipa: "leh-mar-SHE-e-sür-la-PLAS-prẽ-si-PAL" },
      { fr: "La ville est vraiment belle !", it: "La città è davvero bella!", ipa: "la-VIL-e-vre-mã-BEL" }
    ],
    grammar: "'Se trouver' è un modo elegante per dire 'trovarsi/essere situato': 'Le musée se trouve rue de Rivoli'. 'Où est' e 'Où se trouve' sono intercambiabili ma 'se trouver' suona più formale. Per indicare la posizione: 'C'est à côté de...' (è accanto a...), 'C'est en face de...' (è di fronte a...).",
    practice: [
      "Descrivi la città in cui vivi usando 5 parole del vocabolario di oggi.",
      "Esercitati a dare indicazioni dalla tua casa immaginaria fino a un luogo importante.",
      "Come chiederesti dove si trova il bagno in un museo? Allenati con la frase."
    ]
  },
  {
    day: 17,
    title: "In casa",
    titleNative: "À la Maison",
    focus: "Il vocabolario della casa è fondamentale per descrivere dove abiti, per capire annunci immobiliari o per comunicare con i tuoi ospiti se soggiorni da qualcuno.",
    vocab: [
      { fr: "le salon", it: "il salotto / il soggiorno", ipa: "leh-sa-LÕ" },
      { fr: "la cuisine", it: "la cucina", ipa: "la-kwi-ZIN" },
      { fr: "la chambre", it: "la camera da letto", ipa: "la-SHÃBR" },
      { fr: "la salle de bains", it: "il bagno", ipa: "la-sal-deh-BẼ" },
      { fr: "le jardin", it: "il giardino", ipa: "leh-zhar-DẼ" },
      { fr: "le balcon", it: "il balcone", ipa: "leh-bal-KÕ" },
      { fr: "les meubles", it: "i mobili", ipa: "le-MEUBLEH" },
      { fr: "le loyer", it: "l'affitto", ipa: "leh-lua-YE" },
      { fr: "les voisins", it: "i vicini", ipa: "le-vua-ZẼ" },
      { fr: "emménager", it: "trasferirsi (in un posto)", ipa: "e-me-na-ZHE" }
    ],
    phrases: [
      { fr: "J'habite dans un appartement.", it: "Abito in un appartamento.", ipa: "zha-BIT-dã-zẽ-na-par-teh-MÃ" },
      { fr: "Mon appartement a deux chambres.", it: "Il mio appartamento ha due camere.", ipa: "mõ-na-par-teh-MÃ-a-DEU-SHÃBR" },
      { fr: "Le loyer est cher à Paris.", it: "L'affitto è caro a Parigi.", ipa: "leh-lua-YE-e-SHER-a-pa-RI" },
      { fr: "Faites comme chez vous !", it: "Fate come a casa vostra!", ipa: "fet-kõm-she-VU" },
      { fr: "La salle de bains est au premier étage.", it: "Il bagno è al primo piano.", ipa: "la-sal-deh-BẼ-e-o-preh-mye-re-TAZH" }
    ],
    grammar: "I piani in Francia si contano diversamente dall'Italia: 'le rez-de-chaussée' è il piano terra (piano 0), 'le premier étage' è il primo piano (che in Italia sarebbe il secondo). 'J'habite' viene dal verbo 'habiter' — nota che la 'h' è sempre muta in francese: si pronuncia 'zha-BIT'. Similmente, 'l'hôtel' si pronuncia 'lo-TEL'.",
    practice: [
      "Descrivi la tua casa attuale usando 5 parole di oggi: '—Où est-ce que tu habites ? —J'habite...'",
      "Come diresti che il tuo appartamento ha soggiorno, cucina, due camere e un bagno? Allenati.",
      "Memorizza 'Faites comme chez vous !' — la userai quando avrai ospiti."
    ]
  },
  {
    day: 18,
    title: "Tecnologia e comunicazione",
    titleNative: "Technologie & Communication",
    focus: "Nel mondo moderno, la tecnologia fa parte di ogni conversazione. Saper parlare di telefoni, internet e social network in francese è essenziale per connettersi con i francofoni.",
    vocab: [
      { fr: "le portable", it: "il cellulare", ipa: "leh-por-ta-BLEH" },
      { fr: "le chargeur", it: "il caricatore", ipa: "leh-shar-ZHEUR" },
      { fr: "le réseau", it: "la rete / il segnale", ipa: "leh-re-ZO" },
      { fr: "une application", it: "un'applicazione / un'app", ipa: "ün-a-pli-ka-SYÕ" },
      { fr: "envoyer un message", it: "inviare un messaggio", ipa: "ã-vua-YE-ẽ-me-SAZH" },
      { fr: "le mot de passe", it: "la password", ipa: "leh-mo-deh-PAS" },
      { fr: "la connexion", it: "la connessione", ipa: "la-ko-nek-SYÕ" },
      { fr: "télécharger", it: "scaricare", ipa: "te-le-shar-ZHE" },
      { fr: "les réseaux sociaux", it: "i social network", ipa: "le-re-zo-so-SYO" },
      { fr: "recharger", it: "ricaricare (la batteria)", ipa: "reh-shar-ZHE" }
    ],
    phrases: [
      { fr: "Est-ce qu'il y a le wifi ici ?", it: "C'è il wifi qui?", ipa: "es-kil-ia-leh-wi-FI-i-SI" },
      { fr: "Mon téléphone est déchargé.", it: "Il mio telefono è scarico.", ipa: "mõ-te-le-FON-e-de-shar-ZHE" },
      { fr: "Tu peux m'envoyer le lien ?", it: "Puoi mandarmi il link?", ipa: "tü-peu-mã-vua-YE-leh-LYẼN" },
      { fr: "Je n'ai pas de réseau ici.", it: "Non ho segnale qui.", ipa: "zheh-ne-pa-deh-re-ZO-i-SI" },
      { fr: "C'est quoi ton numéro ?", it: "Qual è il tuo numero?", ipa: "se-kua-tõ-nü-me-RO" }
    ],
    grammar: "In francese moderno ci sono molti anglicismi tecnologici: 'le smartphone', 'le selfie'. Ma i francesi hanno anche i loro equivalenti: 'le courriel' (email), 'le numérique' (digitale). L'Académie française difende attivamente l'uso del francese puro — ma nella pratica quotidiana si usa tanto l'inglese quanto i termini francesi.",
    practice: [
      "Come chiederesti la password del wifi a qualcuno? Allenati con la domanda.",
      "Descrivi la tua routine con il telefono al mattino in francese.",
      "Impara a dare il tuo numero di telefono in francese dicendo ogni cifra a coppie."
    ]
  },
  {
    day: 19,
    title: "Viaggi e turismo",
    titleNative: "Voyages & Tourisme",
    focus: "Viaggiare è una delle ragioni principali per imparare il francese. Questo vocabolario ti aiuterà in aeroporti, musei, tour e quando esplori destinazioni francofone.",
    vocab: [
      { fr: "l'aéroport", it: "l'aeroporto", ipa: "la-e-ro-POR" },
      { fr: "le passeport", it: "il passaporto", ipa: "leh-pas-POR" },
      { fr: "la valise", it: "la valigia", ipa: "la-va-LIZ" },
      { fr: "l'office de tourisme", it: "l'ufficio del turismo", ipa: "lo-fis-deh-tu-RISM" },
      { fr: "un guide touristique", it: "una guida turistica", ipa: "ẽ-GID-tu-ris-TIK" },
      { fr: "un billet", it: "un biglietto", ipa: "ẽ-bi-YE" },
      { fr: "une excursion", it: "un'escursione", ipa: "ün-ek-skür-SYÕ" },
      { fr: "le patrimoine", it: "il patrimonio (culturale)", ipa: "leh-pa-tri-MUAN" },
      { fr: "se perdre", it: "perdersi", ipa: "seh-PERDR" },
      { fr: "un souvenir", it: "un souvenir / un ricordo", ipa: "ẽ-su-veh-NIR" }
    ],
    phrases: [
      { fr: "Je suis en vacances.", it: "Sono in vacanza.", ipa: "zheh-swi-ã-va-KÃS" },
      { fr: "Où puis-je acheter des billets ?", it: "Dove posso comprare i biglietti?", ipa: "u-pwi-zheh-ash-TE-de-bi-YE" },
      { fr: "Je suis perdu(e). Pouvez-vous m'aider ?", it: "Mi sono perso/a. Può aiutarmi?", ipa: "zheh-swi-per-DÜ. pu-ve-vu-me-DE" },
      { fr: "C'est à ne pas manquer !", it: "Da non perdere!", ipa: "se-ta-neh-pa-mã-KE" },
      { fr: "On peut visiter... ?", it: "Possiamo visitare...?", ipa: "õ-peu-vi-zi-TE" }
    ],
    grammar: "'Pouvoir' (potere) + infinito è la struttura per chiedere il permesso o parlare di possibilità: 'On peut...?' (Possiamo...?), 'Je peux...?' (Posso...?). È uno dei verbi più utili del francese ed è irregolare — vale la pena memorizzarlo per intero: je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.",
    practice: [
      "Pianifica una giornata da turista a Parigi in francese: cosa visitare, come arrivare, cosa mangiare.",
      "Esercitati con la situazione di essere perso/a: '—Excusez-moi, je suis perdu(e). Où est...?'",
      "Quali sono i tre posti che vuoi visitare di più in Francia? Dillo in francese."
    ]
  },
  {
    day: 20,
    title: "Emozioni e sentimenti",
    titleNative: "Émotions & Sentiments",
    focus: "Esprimere come ci si sente va ben oltre 'bene' o 'male'. I francesi sono molto espressivi — imparare questo vocabolario ti permetterà conversazioni più profonde e autentiche.",
    vocab: [
      { fr: "heureux / heureuse", it: "felice / contento/a", ipa: "eu-REU / eu-REUZ" },
      { fr: "triste", it: "triste", ipa: "TRIST" },
      { fr: "fatigué(e)", it: "stanco/a", ipa: "fa-ti-GE" },
      { fr: "stressé(e)", it: "stressato/a", ipa: "stre-SE" },
      { fr: "surpris(e)", it: "sorpreso/a", ipa: "sür-PRI / sür-PRIZ" },
      { fr: "énervé(e)", it: "irritato/a / nervoso/a", ipa: "e-ner-VE" },
      { fr: "amoureux / amoureuse", it: "innamorato/a", ipa: "a-mu-REU / a-mu-REUZ" },
      { fr: "inquiet / inquiète", it: "preoccupato/a", ipa: "ẽ-KYET" },
      { fr: "fier / fière", it: "orgoglioso/a", ipa: "FYER" },
      { fr: "ça m'est égal", it: "mi è indifferente / non mi importa", ipa: "sa-me-te-GAL" }
    ],
    phrases: [
      { fr: "Je me sens très heureux aujourd'hui.", it: "Mi sento molto felice oggi.", ipa: "zheh-meh-sã-tre-eu-REU-o-zhur-DWEE" },
      { fr: "Je suis un peu stressé(e) par le travail.", it: "Sono un po' stressato/a per il lavoro.", ipa: "zheh-swi-ẽ-peu-stre-SE-par-leh-tra-VAY" },
      { fr: "Je suis tellement fatigué(e) !", it: "Sono così stanco/a!", ipa: "zheh-swi-tel-mã-fa-ti-GE" },
      { fr: "Ça me rend heureux.", it: "Questo mi rende felice.", ipa: "sa-meh-rã-eu-REU" },
      { fr: "Je suis fier(ère) de toi !", it: "Sono orgoglioso/a di te!", ipa: "zheh-swi-FYER-deh-tua" }
    ],
    grammar: "'Se sentir' e 'être' si usano per le emozioni: 'Je me sens triste' o 'Je suis triste'. La differenza è sottile: 'se sentir' esprime uno stato momentaneo, 'être' può essere più permanente. L'intensificatore 'tellement' (così tanto / talmente) è molto colloquiale: 'Je suis tellement content !'",
    practice: [
      "Come ti senti adesso? Descrivilo in francese con almeno due emozioni.",
      "Esercitati a esprimere emozioni legate a situazioni: 'Quand je voyage, je me sens...'",
      "Impara a riconoscere queste emozioni quando le ascolti — mettile in contesto di film o serie francesi."
    ]
  },
  {
    day: 21,
    title: "La natura",
    titleNative: "La Nature",
    focus: "La Francia ha paesaggi incredibilmente diversi: le Alpi, la Costa Azzurra, i vigneti della Borgogna, i Pirenei. Il vocabolario della natura arricchirà le tue descrizioni e conversazioni.",
    vocab: [
      { fr: "la montagne", it: "la montagna", ipa: "la-mõ-TAN-yeh" },
      { fr: "la mer", it: "il mare", ipa: "la-MER" },
      { fr: "la forêt", it: "il bosco / la foresta", ipa: "la-fo-RE" },
      { fr: "la rivière", it: "il fiume / il torrente", ipa: "la-ri-VYER" },
      { fr: "le lac", it: "il lago", ipa: "leh-LAK" },
      { fr: "la plage", it: "la spiaggia", ipa: "la-PLAZH" },
      { fr: "la campagne", it: "la campagna", ipa: "la-kã-PAN-yeh" },
      { fr: "un paysage", it: "un paesaggio", ipa: "ẽ-pe-i-ZAZH" },
      { fr: "le coucher de soleil", it: "il tramonto", ipa: "leh-ku-she-deh-so-LEY" },
      { fr: "une randonnée", it: "un'escursione a piedi / un trekking", ipa: "ün-rã-do-NE" }
    ],
    phrases: [
      { fr: "J'adore me promener en forêt.", it: "Adoro passeggiare nel bosco.", ipa: "zha-dor-meh-pro-meh-NE-ã-fo-RE" },
      { fr: "La vue sur la montagne est magnifique !", it: "La vista sulla montagna è magnifica!", ipa: "la-VÜ-sür-la-mõ-TAN-yeh-e-mã-yi-FIK" },
      { fr: "On va à la plage ce week-end ?", it: "Andiamo in spiaggia questo fine settimana?", ipa: "õ-va-a-la-PLAZH-seh-wi-KEND" },
      { fr: "Le coucher de soleil était extraordinaire.", it: "Il tramonto era straordinario.", ipa: "leh-ku-she-deh-so-LEY-e-te-eks-tra-or-di-NER" },
      { fr: "Je préfère la mer à la montagne.", it: "Preferisco il mare alla montagna.", ipa: "zheh-pre-FER-la-MER-a-la-mõ-TAN-yeh" }
    ],
    grammar: "'Préférer' (preferire) ha questa costruzione: 'préférer A à B' (preferire A rispetto a B): 'Je préfère la mer à la montagne'. Il verbo ha un accento che cambia: 'je préfère' ma 'nous préférons'. Molto simile all'italiano 'preferire A a B'!",
    practice: [
      "Preferisci il mare o la montagna? La città o la campagna? Dillo in francese con 'je préfère... à...'",
      "Descrivi il paesaggio più bello che tu abbia mai visto, in francese.",
      "Pianifica un'attività nella natura in francese: '—On pourrait faire une randonnée ce week-end !'"
    ]
  },
  {
    day: 22,
    title: "In banca e i soldi",
    titleNative: "À la Banque & L'Argent",
    focus: "Gestire il denaro in Francia richiede un vocabolario specifico. L'euro ha le sue denominazioni e ci sono termini bancari che devi conoscere per le operazioni quotidiane.",
    vocab: [
      { fr: "un billet", it: "una banconota", ipa: "ẽ-bi-YE" },
      { fr: "une pièce", it: "una moneta", ipa: "ün-PYES" },
      { fr: "un compte bancaire", it: "un conto bancario", ipa: "ẽ-KÕT-bã-KER" },
      { fr: "un virement", it: "un bonifico", ipa: "ẽ-vir-MÃ" },
      { fr: "un distributeur", it: "un bancomat (ATM)", ipa: "ẽ-dis-tri-bü-TEUR" },
      { fr: "le taux de change", it: "il tasso di cambio", ipa: "leh-to-deh-SHÃZH" },
      { fr: "changer de l'argent", it: "cambiare denaro", ipa: "shã-ZHE-deh-lar-ZHÃ" },
      { fr: "en espèces", it: "in contanti", ipa: "ã-es-PES" },
      { fr: "par carte", it: "con carta", ipa: "par-KART" },
      { fr: "le reçu", it: "la ricevuta / lo scontrino", ipa: "leh-reh-SÜ" }
    ],
    phrases: [
      { fr: "Où est le distributeur le plus proche ?", it: "Dov'è il bancomat più vicino?", ipa: "u-e-leh-dis-tri-bü-TEUR-leh-plü-PROSH" },
      { fr: "Je voudrais changer des euros.", it: "Vorrei cambiare degli euro.", ipa: "zheh-vu-DRE-shã-ZHE-de-EU-ro" },
      { fr: "Vous acceptez les chèques ?", it: "Accettate gli assegni?", ipa: "vu-zak-sep-TE-le-SHEK" },
      { fr: "Je peux payer par carte ?", it: "Posso pagare con carta?", ipa: "zheh-peu-pe-YE-par-KART" },
      { fr: "Donnez-moi un reçu, s'il vous plaît.", it: "Mi dia una ricevuta, per favore.", ipa: "do-ne-MUA-ẽ-reh-SÜ, sil-vu-PLE" }
    ],
    grammar: "I grandi numeri in francese: 'mille' (mille), 'dix mille' (diecimila), 'cent mille' (centomila), 'un million' (un milione). Per i prezzi: '12,50 €' si dice 'douze euros cinquante'. Nota: in Francia si usa la virgola come separatore decimale e il punto per le migliaia — esattamente come in Italia!",
    practice: [
      "Allenati a dire prezzi in francese: 5€, 12,50€, 99€, 200€.",
      "Come diresti che devi prelevare dei soldi al bancomat? Allenati con la frase.",
      "Simula una situazione in banca: '—Bonjour, je voudrais...' e completa con un'operazione."
    ]
  },
  {
    day: 23,
    title: "In farmacia",
    titleNative: "À la Pharmacie",
    focus: "La farmacia francese (riconoscibile dalla croce verde luminosa — proprio come in Italia!) è il primo punto di riferimento per i problemi di salute minori. I farmacisti francesi sono molto competenti.",
    vocab: [
      { fr: "un médicament", it: "un farmaco / una medicina", ipa: "ẽ-me-di-ka-MÃ" },
      { fr: "un comprimé", it: "una compressa / una pastiglia", ipa: "ẽ-kõ-pri-ME" },
      { fr: "un sirop", it: "uno sciroppo", ipa: "ẽ-si-RO" },
      { fr: "une crème", it: "una crema", ipa: "ün-KREM" },
      { fr: "un pansement", it: "un cerotto / una benda", ipa: "ẽ-pã-seh-MÃ" },
      { fr: "la douleur", it: "il dolore", ipa: "la-du-LEUR" },
      { fr: "allergique à", it: "allergico/a a", ipa: "a-ler-ZHIK-a" },
      { fr: "sur ordonnance", it: "con ricetta medica", ipa: "sür-or-do-NÃS" },
      { fr: "sans ordonnance", it: "senza ricetta / da banco", ipa: "sã-or-do-NÃS" },
      { fr: "la posologie", it: "il dosaggio / la posologia", ipa: "la-po-zo-lo-ZHI" }
    ],
    phrases: [
      { fr: "J'ai besoin de quelque chose contre la toux.", it: "Ho bisogno di qualcosa per la tosse.", ipa: "zhe-be-ZUẼN-deh-kel-keh-shoz-kõtr-la-TU" },
      { fr: "Je suis allergique à la pénicilline.", it: "Sono allergico/a alla penicillina.", ipa: "zheh-swi-a-ler-ZHIK-a-la-pe-ni-si-LIN" },
      { fr: "Quelle est la posologie ?", it: "Qual è il dosaggio?", ipa: "kel-e-la-po-zo-lo-ZHI" },
      { fr: "Est-ce que c'est disponible sans ordonnance ?", it: "È disponibile senza ricetta?", ipa: "es-keh-se-dis-po-NIB-sã-or-do-NÃS" },
      { fr: "Ça fait combien ?", it: "Quanto fa?", ipa: "sa-fe-kõ-BYẼN" }
    ],
    grammar: "Il verbo 'avoir besoin de' (avere bisogno di) è molto comune: 'J'ai besoin de...' + sostantivo o infinito. 'J'ai besoin d'un médicament' (ho bisogno di un farmaco), 'J'ai besoin de dormir' (ho bisogno di dormire). Simile all'italiano 'ho bisogno di' — la struttura è praticamente identica!",
    practice: [
      "Allenati a descrivere tre sintomi in francese usando 'J'ai mal à...', 'J'ai de la fièvre...', ecc.",
      "Come chiederesti un antidolorifico senza ricetta? Allenati nel dialogo completo.",
      "Impara a dire le tue allergie in francese — è un'informazione vitale in qualsiasi paese."
    ]
  },
  {
    day: 24,
    title: "Cultura e arte",
    titleNative: "Culture & Art",
    focus: "La Francia è una delle capitali culturali del mondo. Poter parlare di arte, musei, film e letteratura in francese ti apre porte a conversazioni molto arricchenti con i madrelingua.",
    vocab: [
      { fr: "un tableau", it: "un quadro / un dipinto", ipa: "ẽ-ta-BLO" },
      { fr: "une sculpture", it: "una scultura", ipa: "ün-skülp-TÜR" },
      { fr: "un chef-d'œuvre", it: "un capolavoro", ipa: "ẽ-she-DEUVR" },
      { fr: "l'impressionnisme", it: "l'impressionismo", ipa: "lẽ-pre-syo-NISM" },
      { fr: "une exposition", it: "una mostra / un'esposizione", ipa: "ün-eks-po-zi-SYÕ" },
      { fr: "le cinéma", it: "il cinema", ipa: "leh-si-ne-MA" },
      { fr: "un roman", it: "un romanzo", ipa: "ẽ-ro-MÃ" },
      { fr: "la littérature", it: "la letteratura", ipa: "la-li-te-ra-TÜR" },
      { fr: "un artiste", it: "un artista", ipa: "ẽ-nar-TIST" },
      { fr: "ça m'a touché(e)", it: "mi ha commosso / mi ha colpito", ipa: "sa-ma-tu-SHE" }
    ],
    phrases: [
      { fr: "Je voudrais visiter le Louvre.", it: "Vorrei visitare il Louvre.", ipa: "zheh-vu-DRE-vi-zi-TE-leh-LUVR" },
      { fr: "Ce tableau est absolument magnifique.", it: "Questo quadro è assolutamente magnifico.", ipa: "seh-ta-BLO-e-ab-so-lü-MÃ-mã-yi-FIK" },
      { fr: "Je suis fan du cinéma français.", it: "Sono un fan del cinema francese.", ipa: "zheh-swi-fan-dü-si-ne-MA-frã-SE" },
      { fr: "Ça m'a beaucoup touché.", it: "Mi ha molto commosso.", ipa: "sa-ma-bo-ku-tu-SHE" },
      { fr: "Tu connais cet artiste ?", it: "Conosci questo artista?", ipa: "tü-ko-NE-set-ar-TIST" }
    ],
    grammar: "'Connaître' (conoscere una persona o un luogo) vs 'savoir' (sapere un fatto): 'Tu connais Monet ?' (Conosci Monet?) vs 'Tu sais peindre ?' (Sai dipingere?). Perfettamente parallelo all'italiano 'conoscere' vs 'sapere' — una delle rare distinzioni che funziona allo stesso modo nelle due lingue!",
    practice: [
      "Descrivi un'opera d'arte, un film o un libro che ti ha colpito, in francese.",
      "Allenati: '—Tu connais...? —Oui, je connais... / Non, je ne connais pas...'",
      "Informati su un artista francese (Monet, Rodin, Godard) e prepara 3 frasi sulla sua opera."
    ]
  },
  {
    day: 25,
    title: "Sport e attività fisica",
    titleNative: "Sport & Exercice",
    focus: "Lo sport è un argomento di conversazione universale e un ottimo punto di connessione con i francesi, specialmente il calcio, il ciclismo e il tennis.",
    vocab: [
      { fr: "le football", it: "il calcio", ipa: "leh-fut-BOL" },
      { fr: "le cyclisme", it: "il ciclismo", ipa: "leh-si-KLISM" },
      { fr: "la natation", it: "il nuoto", ipa: "la-na-ta-SYÕ" },
      { fr: "le tennis", it: "il tennis", ipa: "leh-te-NIS" },
      { fr: "la salle de sport", it: "la palestra", ipa: "la-sal-deh-SPOR" },
      { fr: "s'entraîner", it: "allenarsi", ipa: "sã-tre-NE" },
      { fr: "gagner", it: "vincere", ipa: "gan-YE" },
      { fr: "perdre", it: "perdere", ipa: "PERDR" },
      { fr: "un match", it: "una partita / un match", ipa: "ẽ-MATCH" },
      { fr: "l'équipe", it: "la squadra", ipa: "le-KIP" }
    ],
    phrases: [
      { fr: "Tu fais du sport ?", it: "Fai sport?", ipa: "tü-fe-dü-SPOR" },
      { fr: "Je vais à la salle trois fois par semaine.", it: "Vado in palestra tre volte a settimana.", ipa: "zheh-ve-a-la-SAL-trua-fua-par-seh-MEN" },
      { fr: "Tu as regardé le match hier ?", it: "Hai visto la partita ieri?", ipa: "tü-a-reh-gar-DE-leh-MATCH-i-ER" },
      { fr: "Mon équipe a gagné !", it: "La mia squadra ha vinto!", ipa: "mõ-ne-KIP-a-gan-YE" },
      { fr: "Le Tour de France est incroyable.", it: "Il Tour de France è incredibile.", ipa: "leh-tur-deh-FRÃS-e-ẽ-krua-YA-bleh" }
    ],
    grammar: "Per parlare di sport: 'faire du/de la + sport' per gli sport individuali: 'Je fais du yoga', 'Je fais de la natation'. Per gli sport di squadra: 'jouer au + sport': 'Je joue au football', 'Je joue au tennis'. Identico alla distinzione italiana 'fare sport' / 'giocare a'!",
    practice: [
      "Quali sport pratichi? Dillo in francese: 'Je fais du...' o 'Je joue au...'",
      "Allenati a parlare di una partita recente o della tua squadra preferita in francese.",
      "Come inviteresti qualcuno a fare sport insieme? Crea la proposta in francese."
    ]
  },
  {
    day: 26,
    title: "La musica",
    titleNative: "La Musique",
    focus: "La musica francese è ricca e variegata — dalla chanson tradizionale all'hip-hop moderno. Conoscere il vocabolario musicale ti permetterà di connetterti culturalmente in modo più profondo.",
    vocab: [
      { fr: "une chanson", it: "una canzone", ipa: "ün-shã-SÕ" },
      { fr: "un chanteur / une chanteuse", it: "un cantante / una cantante", ipa: "ẽ-shã-TEUR / ün-shã-TEUZ" },
      { fr: "jouer d'un instrument", it: "suonare uno strumento", ipa: "zhue-dẽ-ẽs-trü-MÃ" },
      { fr: "la guitare", it: "la chitarra", ipa: "la-gi-TAR" },
      { fr: "le piano", it: "il pianoforte", ipa: "leh-pya-NO" },
      { fr: "un concert", it: "un concerto", ipa: "ẽ-kõ-SER" },
      { fr: "une playlist", it: "una playlist", ipa: "ün-PLAY-list" },
      { fr: "le rythme", it: "il ritmo", ipa: "leh-RITM" },
      { fr: "les paroles", it: "il testo (di una canzone)", ipa: "le-pa-ROL" },
      { fr: "avoir l'oreille musicale", it: "avere orecchio musicale", ipa: "a-vuar-lo-REY-mü-zi-KAL" }
    ],
    phrases: [
      { fr: "Qu'est-ce que tu écoutes comme musique ?", it: "Che musica ascolti?", ipa: "ke-skeh-tü-e-KUT-kõm-mü-ZIK" },
      { fr: "J'adore Édith Piaf.", it: "Adoro Édith Piaf.", ipa: "zha-dor-e-DIT-PYAF" },
      { fr: "Tu joues d'un instrument ?", it: "Suoni uno strumento?", ipa: "tü-zhue-dẽ-ẽs-trü-MÃ" },
      { fr: "On va à un concert ce soir ?", it: "Andiamo a un concerto stasera?", ipa: "õ-va-a-ẽ-kõ-SER-seh-SUAR" },
      { fr: "Cette chanson est vraiment belle.", it: "Questa canzone è davvero bella.", ipa: "set-shã-SÕ-e-vre-MÃ-BEL" }
    ],
    grammar: "Per parlare di strumenti: 'jouer de + articolo + strumento': 'Je joue de la guitare', 'Je joue du piano'. Nota che è 'de' e non 'avec' — non si dice 'Je joue avec la guitare'. In italiano si direbbe 'suono la chitarra' senza preposizione, ma in francese la preposizione 'de' è obbligatoria.",
    practice: [
      "Che musica ascolti? Di' il tuo genere e artista preferito in francese.",
      "Suoni uno strumento? Allenati: 'Je joue de...' o 'Je ne sais pas jouer d'un instrument.'",
      "Ascolta una canzone francese (Édith Piaf, Stromae, Zaz) e cerca di identificare parole che già conosci."
    ]
  },
  {
    day: 27,
    title: "Il passato: passé composé",
    titleNative: "Le Passé Composé",
    focus: "Il passé composé è il tempo passato più usato in conversazione. Corrisponde al passato prossimo italiano ('ho mangiato') e a volte anche al passato remoto ('mangiai') secondo il contesto.",
    vocab: [
      { fr: "j'ai mangé", it: "ho mangiato", ipa: "zhe-mã-ZHE" },
      { fr: "j'ai bu", it: "ho bevuto", ipa: "zhe-BÜ" },
      { fr: "j'ai vu", it: "ho visto", ipa: "zhe-VÜ" },
      { fr: "je suis allé(e)", it: "sono andato/a", ipa: "zheh-swi-za-LE" },
      { fr: "j'ai fait", it: "ho fatto", ipa: "zhe-FE" },
      { fr: "j'ai dit", it: "ho detto", ipa: "zhe-DI" },
      { fr: "hier", it: "ieri", ipa: "i-ER" },
      { fr: "la semaine dernière", it: "la settimana scorsa", ipa: "la-seh-MEN-der-NYER" },
      { fr: "il y a trois jours", it: "tre giorni fa", ipa: "il-ia-trua-ZHUR" },
      { fr: "déjà", it: "già", ipa: "de-ZHA" }
    ],
    phrases: [
      { fr: "Hier, j'ai mangé une crêpe délicieuse.", it: "Ieri ho mangiato una crêpe deliziosa.", ipa: "i-ER-zhe-mã-ZHE-ün-KREP-de-li-SYEUZ" },
      { fr: "Je suis allé(e) à Paris la semaine dernière.", it: "Sono andato/a a Parigi la settimana scorsa.", ipa: "zheh-swi-za-LE-a-pa-RI-la-seh-MEN-der-NYER" },
      { fr: "Tu as déjà visité la Tour Eiffel ?", it: "Hai già visitato la Torre Eiffel?", ipa: "tü-a-de-ZHA-vi-zi-TE-la-tur-e-FEL" },
      { fr: "J'ai vu un très beau film hier soir.", it: "Ho visto un film bellissimo ieri sera.", ipa: "zhe-VÜ-ẽ-tre-bo-FILM-i-ER-SUAR" },
      { fr: "Qu'est-ce que tu as fait ce week-end ?", it: "Cosa hai fatto questo fine settimana?", ipa: "ke-skeh-tü-a-fe-seh-wi-KEND" }
    ],
    grammar: "Il passé composé si forma con 'avoir' o 'être' + participio passato. La maggior parte usa 'avoir': 'j'ai mangé', 'j'ai vu'. I verbi di movimento e riflessivi usano 'être': 'je suis allé(e)', 'je me suis levé(e)'. Con 'être', il participio si accorda con il soggetto — esattamente come in italiano! 'Elle est allée' (lei è andata), 'ils sont partis' (loro sono partiti).",
    practice: [
      "Descrivi cosa hai fatto ieri usando 5 verbi al passé composé.",
      "Allenati: '—Qu'est-ce que tu as fait hier ? —J'ai...' (con almeno 3 attività).",
      "I 5 participi irregolari più importanti da memorizzare: avoir → eu, être → été, faire → fait, voir → vu, aller → allé."
    ]
  },
  {
    day: 28,
    title: "Espressioni idiomatiche",
    titleNative: "Expressions Idiomatiques",
    focus: "Le espressioni idiomatiche sono quelle che ti faranno sembrare davvero un madrelingua. I francesi le usano continuamente — impararle ti darà un enorme vantaggio nella fluidità.",
    vocab: [
      { fr: "avoir le cafard", it: "essere giù di morale (lett: avere lo scarafaggio)", ipa: "a-vuar-leh-ka-FAR" },
      { fr: "casser les pieds", it: "dare ai nervi / scocciare (lett: rompere i piedi)", ipa: "ka-SE-le-PYE" },
      { fr: "avoir le coup de foudre", it: "colpo di fulmine (amore a prima vista)", ipa: "a-vuar-leh-ku-deh-FUDR" },
      { fr: "poser un lapin", it: "dare buca / lasciare in asso (lett: mettere un coniglio)", ipa: "po-ZE-ẽ-la-PẼ" },
      { fr: "avoir du pain sur la planche", it: "avere tanto lavoro da fare (lett: avere pane sulla tavola)", ipa: "a-vuar-dü-PẼ-sür-la-PLÃSH" },
      { fr: "c'est la vie", it: "è la vita / così è la vita", ipa: "se-la-VI" },
      { fr: "tomber dans les pommes", it: "svenire (lett: cadere nelle mele)", ipa: "tõ-BE-dã-le-POM" },
      { fr: "coûter les yeux de la tête", it: "costare un occhio della testa", ipa: "ku-TE-le-ZYEU-deh-la-TET" },
      { fr: "avoir d'autres chats à fouetter", it: "avere altro a cui pensare (lett: altri gatti da frustare)", ipa: "a-vuar-dotr-SHA-a-fue-TE" },
      { fr: "en un clin d'œil", it: "in un batter d'occhio", ipa: "ã-ẽ-klẽ-DEUY" }
    ],
    phrases: [
      { fr: "Il m'a posé un lapin hier soir !", it: "Mi ha dato buca ieri sera!", ipa: "il-ma-po-ZE-ẽ-la-PẼ-i-ER-SUAR" },
      { fr: "Ce restaurant coûte les yeux de la tête.", it: "Quel ristorante costa un occhio della testa.", ipa: "seh-res-to-RÃ-kut-le-ZYEU-deh-la-TET" },
      { fr: "J'ai le cafard aujourd'hui.", it: "Sono giù di morale oggi.", ipa: "zhe-leh-ka-FAR-o-zhur-DWEE" },
      { fr: "On a eu le coup de foudre.", it: "Abbiamo avuto il colpo di fulmine.", ipa: "õ-a-eu-leh-ku-deh-FUDR" },
      { fr: "C'est la vie !", it: "È la vita!", ipa: "se-la-VI" }
    ],
    grammar: "Le espressioni idiomatiche raramente sono traducibili letteralmente. Alcune sono quasi identiche all'italiano: 'coûter les yeux de la tête' = 'costare un occhio della testa'. Altre sono completamente diverse: 'avoir le cafard' (essere depressi). Il verbo 'avoir' (avere) è il più usato nelle espressioni idiomatiche francesi.",
    practice: [
      "Scegli 3 espressioni di oggi e usale in frasi originali sulla tua vita.",
      "Quali di queste espressioni hanno un equivalente diretto in italiano? Quali sono completamente diverse?",
      "Allenati a usare 'c'est la vie' nel contesto giusto — è l'espressione francese più famosa al mondo."
    ]
  },
  {
    day: 29,
    title: "Conversazione avanzata",
    titleNative: "Conversation Avancée",
    focus: "Oggi pratichiamo strutture più sofisticate per conversazioni più fluide e naturali. Queste espressioni ti porteranno dal livello base all'intermedio reale.",
    vocab: [
      { fr: "à mon avis", it: "a mio avviso / secondo me", ipa: "a-mõ-na-VI" },
      { fr: "en fait", it: "in realtà / in effetti", ipa: "ã-FE" },
      { fr: "d'ailleurs", it: "tra l'altro / a proposito", ipa: "da-YEUR" },
      { fr: "pourtant", it: "eppure / tuttavia", ipa: "pur-TÃ" },
      { fr: "c'est-à-dire", it: "cioè / ovvero", ipa: "se-ta-DIR" },
      { fr: "quant à moi", it: "per quanto mi riguarda / per parte mia", ipa: "kã-ta-MUA" },
      { fr: "il paraît que", it: "pare che / si dice che", ipa: "il-pa-RE-keh" },
      { fr: "ça dépend", it: "dipende", ipa: "sa-de-PÃ" },
      { fr: "en tout cas", it: "in ogni caso / comunque", ipa: "ã-tu-KA" },
      { fr: "sans doute", it: "senza dubbio", ipa: "sã-DUT" }
    ],
    phrases: [
      { fr: "À mon avis, c'est une bonne idée.", it: "A mio avviso, è una buona idea.", ipa: "a-mõ-na-VI-se-ün-bon-i-DE" },
      { fr: "En fait, je ne suis pas d'accord.", it: "In effetti, non sono d'accordo.", ipa: "ã-FE-zheh-neh-swi-pa-da-KOR" },
      { fr: "Ça dépend de la situation.", it: "Dipende dalla situazione.", ipa: "sa-de-PÃ-deh-la-si-tüa-SYÕ" },
      { fr: "Il paraît qu'il va pleuvoir demain.", it: "Pare che domani piova.", ipa: "il-pa-RE-kil-va-pleu-VUAR-deh-MẼ" },
      { fr: "En tout cas, merci pour tout !", it: "In ogni caso, grazie di tutto!", ipa: "ã-tu-KA, mer-SI-pur-TU" }
    ],
    grammar: "I connettori del discorso (en fait, pourtant, d'ailleurs) sono quelli che distinguono un parlante intermedio da uno avanzato. Usali per collegare le idee e dare fluidità. 'En fait' si pronuncia praticamente 'ãfè' — la 't' finale è muta, ma la nasale persiste. Molti di questi connettori hanno equivalenti quasi perfetti in italiano!",
    practice: [
      "Scrivi un paragrafo di 5 frasi su qualsiasi argomento usando almeno 4 connettori di oggi.",
      "Allenati a esprimere un disaccordo in modo educato: 'À mon avis... Pourtant... En fait...'",
      "Registrati mentre parli per un minuto in francese sul tuo argomento preferito. Quanti connettori hai usato?"
    ]
  },
  {
    day: 30,
    title: "Ripasso finale e celebrazione",
    titleNative: "Révision Finale & Célébration",
    focus: "Sei arrivato/a al giorno 30! Questo è il tuo ripasso finale — ma anche una celebrazione. Oggi consolidiamo tutto quello che hai imparato e tracciamo la strada verso la fluidità continua.",
    vocab: [
      { fr: "félicitations !", it: "congratulazioni!", ipa: "fe-li-si-ta-SYÕ" },
      { fr: "je suis fier(ère) de moi", it: "sono orgoglioso/a di me", ipa: "zheh-swi-FYER-deh-MUA" },
      { fr: "j'ai progressé", it: "ho fatto progressi", ipa: "zhe-pro-gre-SE" },
      { fr: "continuer", it: "continuare", ipa: "kõ-ti-nüE" },
      { fr: "s'améliorer", it: "migliorarsi", ipa: "sa-me-lyo-RE" },
      { fr: "la fluidité", it: "la fluidità", ipa: "la-flwi-di-TE" },
      { fr: "pratiquer", it: "praticare", ipa: "pra-ti-KE" },
      { fr: "un échange linguistique", it: "uno scambio linguistico", ipa: "ẽ-ne-SHÃZH-lẽ-gwis-TIK" },
      { fr: "chaque jour", it: "ogni giorno", ipa: "shak-ZHUR" },
      { fr: "le chemin", it: "il cammino / il percorso", ipa: "leh-sheh-MẼ" }
    ],
    phrases: [
      { fr: "Je parle un peu français maintenant !", it: "Parlo già un po' di francese!", ipa: "zheh-PARL-ẽ-peu-frã-SE-mẽ-teh-NÃ" },
      { fr: "J'ai appris beaucoup de choses.", it: "Ho imparato molte cose.", ipa: "zhe-za-PRI-bo-ku-deh-SHOZ" },
      { fr: "Je vais continuer à pratiquer.", it: "Continuerò a praticare.", ipa: "zheh-ve-kõ-ti-nüE-a-pra-ti-KE" },
      { fr: "Merci pour tout ce chemin parcouru !", it: "Grazie per tutto questo percorso fatto insieme!", ipa: "mer-SI-pur-tu-seh-sheh-MẼ-par-ku-RÜ" },
      { fr: "À la prochaine aventure !", it: "Alla prossima avventura!", ipa: "a-la-pro-SHEN-a-vã-TÜR" }
    ],
    grammar: "Riepilogo delle strutture chiave che padroneggi: (1) Presente per abitudini e fatti, (2) Passé composé per il passato conversazionale, (3) Futur proche (aller + infinito) per i piani, (4) Condizionale (voudrais) per la cortesia, (5) Imperativo per istruzioni. Continua con 15 min di vocabolario + 15 min di conversazione reale ogni giorno. Il italiano e il francese sono lingue sorelle — il tuo vantaggio è enorme!",
    practice: [
      "Scrivi una breve lettera in francese che descrive il tuo percorso di apprendimento in questi 30 giorni.",
      "Cerca uno scambio linguistico (tandem) con un madrelingua francese che vuole imparare l'italiano.",
      "Stabilisci un obiettivo concreto per il prossimo mese: quante ore praticherai? Quali risorse userai?"
    ]
  }
];

const CONVERSATIONS_IT_FR = [];
