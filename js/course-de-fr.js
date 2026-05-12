// German → French Native Lesson Plan
// Deutsch als Unterrichtssprache, Französisch als Zielsprache
// vocab: { fr: "französisches Wort", de: "deutsche Übersetzung", ipa: "Aussprache für Deutschsprachige" }

var COURSE_DE_FR = [
  {
    day: 1,
    title: "Begrüßungen & Höflichkeit",
    titleNative: "Bonjour & Politesse",
    focus: "Die ersten Wörter, die du in Frankreich sagen wirst. Wichtig: In Frankreich MUSS man immer zuerst 'Bonjour' sagen — bevor man etwas fragt oder bestellt. Wer das weglässt, gilt als unhöflich.",
    vocab: [
      { fr: "Bonjour", de: "Guten Tag / Hallo", ipa: "bon-ZHUR" },
      { fr: "Bonsoir", de: "Guten Abend", ipa: "bon-SUAR" },
      { fr: "Bonne nuit", de: "Gute Nacht", ipa: "bon NÜI" },
      { fr: "Salut", de: "Hallo / Tschüss (informell)", ipa: "sa-LÜ" },
      { fr: "Au revoir", de: "Auf Wiedersehen", ipa: "o-reh-VUAR" },
      { fr: "S'il vous plaît", de: "Bitte (formell)", ipa: "sil vu PLE" },
      { fr: "Merci", de: "Danke", ipa: "mer-SI" },
      { fr: "De rien", de: "Bitte / Nichts zu danken", ipa: "deh RIEN" },
      { fr: "Excusez-moi", de: "Entschuldigung", ipa: "ek-skü-ZE-mua" },
      { fr: "Pardon", de: "Verzeihung / Entschuldigung", ipa: "par-DON" }
    ],
    phrases: [
      { fr: "Bonjour, comment allez-vous ?", de: "Guten Tag, wie geht es Ihnen?", ipa: "bon-ZHUR, ko-mon-ta-LE-vu" },
      { fr: "Très bien, merci. Et vous ?", de: "Sehr gut, danke. Und Ihnen?", ipa: "tre BIEN, mer-SI. e VU" },
      { fr: "Enchanté(e).", de: "Freut mich.", ipa: "on-chon-TE" },
      { fr: "À bientôt !", de: "Bis bald!", ipa: "a-bien-TO" },
      { fr: "Bonne journée !", de: "Schönen Tag noch!", ipa: "bon zhur-NE" }
    ],
    grammar: "Das 'r' im Französischen klingt ähnlich wie das deutsche 'r' — beide werden im Rachen gebildet. Gut für dich! Der größte Unterschied: Im Französischen werden viele Endkonsonanten NICHT ausgesprochen. 'Bonjour' endet nicht auf ein hörbares 'r', 'Salut' endet nicht auf 't'. Merke dir: Schweige am Wortende, bis du ein Muster erkennst.",
    practice: [
      "Übe laut: 'Bonjour, comment allez-vous ? — Très bien, merci. Et vous ?'",
      "Stell dir vor, du betrittst ein Café in Paris. Sag 'Bonjour !' bevor du irgendetwas anderes sagst.",
      "Übe die Abschiedssequenz: 'Au revoir ! À bientôt ! Bonne journée !'"
    ]
  },
  {
    day: 2,
    title: "Ja, Nein & Grundreaktionen",
    titleNative: "Oui, Non & Réactions",
    focus: "Reagieren, bestätigen und Unverständnis ausdrücken. Mit diesen Wörtern kommst du aus den meisten Situationen heraus — auch wenn dein Französisch noch lückenhaft ist.",
    vocab: [
      { fr: "Oui", de: "Ja", ipa: "WI" },
      { fr: "Non", de: "Nein", ipa: "NON" },
      { fr: "Peut-être", de: "Vielleicht", ipa: "pö-TE-treh" },
      { fr: "D'accord", de: "Einverstanden / OK", ipa: "da-KOR" },
      { fr: "Bien sûr", de: "Natürlich / Selbstverständlich", ipa: "bien SÜR" },
      { fr: "Je comprends", de: "Ich verstehe", ipa: "zheh kom-PRON" },
      { fr: "Je ne comprends pas", de: "Ich verstehe nicht", ipa: "zheh neh kom-PRON PA" },
      { fr: "Parlez-vous allemand ?", de: "Sprechen Sie Deutsch?", ipa: "par-LE-vu a-le-MON" },
      { fr: "Un peu", de: "Ein bisschen", ipa: "en PÖ" },
      { fr: "Pas du tout", de: "Überhaupt nicht / Gar nicht", ipa: "pa dü TU" }
    ],
    phrases: [
      { fr: "Oui, bien sûr !", de: "Ja, natürlich!", ipa: "wi, bien SÜR" },
      { fr: "Non, merci.", de: "Nein, danke.", ipa: "non, mer-SI" },
      { fr: "Je ne comprends pas, désolé.", de: "Ich verstehe nicht, tut mir leid.", ipa: "zheh neh kom-PRON pa, de-zo-LE" },
      { fr: "Pouvez-vous répéter ?", de: "Können Sie das wiederholen?", ipa: "pu-VE-vu re-pe-TE" },
      { fr: "Plus lentement, s'il vous plaît.", de: "Bitte langsamer.", ipa: "plü lon-te-MON, sil vu PLE" }
    ],
    grammar: "Die Verneinung im Französischen umklammert das Verb: 'ne...pas'. 'Je comprends' → 'Je NE comprends PAS'. In der gesprochenen Sprache fällt das 'ne' oft weg: 'Je comprends pas' — du wirst das ständig hören. Für 'Vielleicht' sagt man 'peut-être' (sprich: pö-TE-treh) — das 'ö' kennst du als Deutschsprachiger bereits!",
    practice: [
      "Übe deine Sicherheitsphrase: 'Je ne comprends pas. Pouvez-vous répéter ?'",
      "Trainiere Verneinungen: 'Non, merci. Je ne comprends pas. Pas du tout.'",
      "Lerne auswendig: 'Plus lentement, s'il vous plaît' — das wirst du täglich brauchen."
    ]
  },
  {
    day: 3,
    title: "Sich vorstellen",
    titleNative: "Se présenter",
    focus: "Sich auf Französisch vorzustellen schafft sofort Verbindung. Franzosen schätzen es, wenn man es auf Französisch versucht — auch wenn man Fehler macht.",
    vocab: [
      { fr: "Je m'appelle", de: "Ich heiße / Mein Name ist", ipa: "zheh ma-PEL" },
      { fr: "Je suis", de: "Ich bin", ipa: "zheh SWI" },
      { fr: "allemand(e)", de: "deutsch / Deutscher / Deutsche", ipa: "a-le-MON / a-le-MOND" },
      { fr: "de Berlin", de: "aus Berlin", ipa: "deh ber-LIN" },
      { fr: "Et vous ?", de: "Und Sie?", ipa: "e VU" },
      { fr: "Comment vous appelez-vous ?", de: "Wie heißen Sie?", ipa: "ko-MON vu za-ple-VU" },
      { fr: "Je suis en vacances.", de: "Ich bin im Urlaub.", ipa: "zheh swi-zon va-KONS" },
      { fr: "D'où venez-vous ?", de: "Woher kommen Sie?", ipa: "du ve-NE-vu" },
      { fr: "Je viens d'Allemagne.", de: "Ich komme aus Deutschland.", ipa: "zheh VIEN da-le-MAN-yeh" },
      { fr: "Enchanté(e) de vous rencontrer.", de: "Freut mich, Sie kennenzulernen.", ipa: "on-chon-TE deh vu ron-kon-TRE" }
    ],
    phrases: [
      { fr: "Bonjour, je m'appelle Klaus.", de: "Guten Tag, ich heiße Klaus.", ipa: "bon-ZHUR, zheh ma-PEL klaouss" },
      { fr: "Je viens d'Allemagne, de Munich.", de: "Ich komme aus Deutschland, aus München.", ipa: "zheh VIEN da-le-MAN-yeh, deh mü-NIK" },
      { fr: "Je suis ici en vacances pour une semaine.", de: "Ich bin hier für eine Woche im Urlaub.", ipa: "zheh swi-zi-SI on va-KONS pur ün seh-MEN" },
      { fr: "Je parle un peu français.", de: "Ich spreche ein bisschen Französisch.", ipa: "zheh PARL en pö fron-SE" },
      { fr: "Enchanté(e) !", de: "Freut mich!", ipa: "on-chon-TE" }
    ],
    grammar: "Im Französischen werden Nationalitätsbezeichnungen KLEIN geschrieben, wenn sie als Adjektiv stehen: 'je suis allemand' (ich bin Deutsch). Das Verb 'être' (sein) im Präsens: je SUIS, vous ÊTES. Das 'e' am Ende vieler Wörter (wie in 'allemande') macht das Adjektiv weiblich — und wird leicht gesprochen. Das 'je suis' klingt für deutsche Ohren wie 'zheh swi'.",
    practice: [
      "Schreibe deine vollständige Vorstellung auf Französisch: Name, Herkunft, Grund des Besuchs.",
      "Übe laut bis du sie ohne Stocken sprechen kannst.",
      "Trainiere beide Rollen: fragen und antworten — 'Comment vous appelez-vous ?' / 'Je m'appelle...'"
    ]
  },
  {
    day: 4,
    title: "Zahlen von 1 bis 20",
    titleNative: "Les chiffres 1–20",
    focus: "Zahlen sind unverzichtbar für Preise, Adressen und Uhrzeiten. Das französische System ist bis 12 logisch — ab 17 wird es eigenwillig.",
    vocab: [
      { fr: "un, deux, trois", de: "eins, zwei, drei", ipa: "EN, DÖ, TRUA" },
      { fr: "quatre, cinq, six", de: "vier, fünf, sechs", ipa: "KA-treh, SENK, SIS" },
      { fr: "sept, huit, neuf", de: "sieben, acht, neun", ipa: "SET, WIT, NÖF" },
      { fr: "dix, onze, douze", de: "zehn, elf, zwölf", ipa: "DIS, ONZ, DUZ" },
      { fr: "treize, quatorze, quinze", de: "dreizehn, vierzehn, fünfzehn", ipa: "TREZ, ka-TORZ, KENZ" },
      { fr: "seize", de: "sechzehn", ipa: "SEZ" },
      { fr: "dix-sept", de: "siebzehn", ipa: "di-SET" },
      { fr: "dix-huit", de: "achtzehn", ipa: "di-WIT" },
      { fr: "dix-neuf", de: "neunzehn", ipa: "di-NÖF" },
      { fr: "vingt", de: "zwanzig", ipa: "VEN" }
    ],
    phrases: [
      { fr: "Ça coûte combien ?", de: "Was kostet das?", ipa: "sa kut kom-BIEN" },
      { fr: "C'est cinq euros.", de: "Das kostet fünf Euro.", ipa: "se senk ö-RO" },
      { fr: "J'ai dix-huit ans.", de: "Ich bin achtzehn Jahre alt.", ipa: "zhe di-WIT ON" },
      { fr: "Chambre numéro douze.", de: "Zimmer Nummer zwölf.", ipa: "CHOM-breh nü-me-RO DUZ" },
      { fr: "Donnez-moi trois, s'il vous plaît.", de: "Geben Sie mir drei, bitte.", ipa: "do-ne-MUA trua, sil vu PLE" }
    ],
    grammar: "Ab 17 setzt das Französische zusammen: 'dix-sept' (10+7), 'dix-huit' (10+8), 'dix-neuf' (10+9). Das 'huit' (acht) verliert sein 't' am Ende normalerweise — außer vor Vokalen. Wichtige Aussprache-Falle: 'cinq' sprich SENK, 'six' sprich SIS (das x ist stumm), 'neuf' sprich NÖF — das 'eu' kennst du als 'ö' aus dem Deutschen!",
    practice: [
      "Zähle von 1 bis 20 laut durch, bis es flüssig klingt.",
      "Sag dein Alter auf Französisch: 'J'ai ___ ans.'",
      "Nenne die Preise von 5 Dingen in deiner Umgebung auf Französisch."
    ]
  },
  {
    day: 5,
    title: "Zahlen von 20 bis 1000",
    titleNative: "Les chiffres 20–1000",
    focus: "Das französische Zahlensystem hat ab 70 einige Besonderheiten, die für Deutschsprachige ungewohnt sind — aber eine eigene Logik haben.",
    vocab: [
      { fr: "vingt, trente, quarante", de: "zwanzig, dreißig, vierzig", ipa: "VEN, TRONT, ka-RONT" },
      { fr: "cinquante, soixante", de: "fünfzig, sechzig", ipa: "sen-KONT, sua-SONT" },
      { fr: "soixante-dix", de: "siebzig (= sechzig+zehn)", ipa: "sua-sont-DIS" },
      { fr: "quatre-vingts", de: "achtzig (= vier×zwanzig)", ipa: "ka-treh-VEN" },
      { fr: "quatre-vingt-dix", de: "neunzig (= vier×zwanzig+zehn)", ipa: "ka-treh-ven-DIS" },
      { fr: "cent", de: "hundert", ipa: "SON" },
      { fr: "deux cents", de: "zweihundert", ipa: "dö SON" },
      { fr: "mille", de: "tausend", ipa: "MIL" },
      { fr: "vingt et un", de: "einundzwanzig", ipa: "ven-te-EN" },
      { fr: "trente-cinq", de: "fünfunddreißig", ipa: "tront-SENK" }
    ],
    phrases: [
      { fr: "Ça fait vingt-deux euros.", de: "Das macht zweiundzwanzig Euro.", ipa: "sa fe ven-DÖ ö-RO" },
      { fr: "Je voudrais cent grammes.", de: "Ich hätte gerne hundert Gramm.", ipa: "zheh vu-DRE son GRAM" },
      { fr: "C'est trop cher.", de: "Das ist zu teuer.", ipa: "se tro CHER" },
      { fr: "Combien ça coûte ?", de: "Wie viel kostet das?", ipa: "kom-BIEN sa KUT" },
      { fr: "Avez-vous quelque chose de moins cher ?", de: "Haben Sie etwas Günstigeres?", ipa: "a-ve-vu KEL-keh SHOZ deh muen CHER" }
    ],
    grammar: "Die französische Zahlen-Eigenheit: 70 = 'soixante-dix' (60+10), 80 = 'quatre-vingts' (4×20), 90 = 'quatre-vingt-dix' (4×20+10). Das klingt merkwürdig, hat aber historische Wurzeln im keltischen Zählsystem. Belgien und die Schweiz verwenden übrigens 'septante' (70) und 'nonante' (90) — logischer, aber seltener.",
    practice: [
      "Übe Preise: 15€, 37€, 89€, 124€, 999€ — laut auf Französisch.",
      "Zähle von 60 bis 100 in Zehnerschritten: soixante, soixante-dix...",
      "Lerne auswendig: 'C'est trop cher' und 'Avez-vous quelque chose de moins cher?'"
    ]
  },
  {
    day: 6,
    title: "Wochentage, Monate & Uhrzeit",
    titleNative: "Jours, mois & heure",
    focus: "Termine verstehen, Öffnungszeiten lesen und Pläne kommunizieren. In Frankreich sind Sonntage ruhig und viele Läden geschlossen — diese Lektion hilft dir, Überraschungen zu vermeiden.",
    vocab: [
      { fr: "lundi, mardi, mercredi", de: "Montag, Dienstag, Mittwoch", ipa: "len-DI, mar-DI, mer-KREH-di" },
      { fr: "jeudi, vendredi", de: "Donnerstag, Freitag", ipa: "zhö-DI, von-dreh-DI" },
      { fr: "samedi, dimanche", de: "Samstag, Sonntag", ipa: "sam-DI, di-MONCH" },
      { fr: "janvier, février, mars", de: "Januar, Februar, März", ipa: "zhon-VIE, fev-RIE, MARS" },
      { fr: "avril, mai, juin", de: "April, Mai, Juni", ipa: "a-VRIL, ME, ZHUEN" },
      { fr: "juillet, août, septembre", de: "Juli, August, September", ipa: "zhwi-IE, UT, sep-TOM-breh" },
      { fr: "octobre, novembre, décembre", de: "Oktober, November, Dezember", ipa: "ok-TO-breh, no-VOM-breh, de-SOM-breh" },
      { fr: "Quelle heure est-il ?", de: "Wie viel Uhr ist es?", ipa: "kel ör e-TIL" },
      { fr: "Il est trois heures.", de: "Es ist drei Uhr.", ipa: "il e trua ÖR" },
      { fr: "aujourd'hui, demain, hier", de: "heute, morgen, gestern", ipa: "o-zhur-DWI, deh-MEN, IER" }
    ],
    phrases: [
      { fr: "Quel jour sommes-nous ?", de: "Welcher Tag ist heute?", ipa: "kel ZHUR so-meh-NU" },
      { fr: "Aujourd'hui c'est lundi, le premier mars.", de: "Heute ist Montag, der erste März.", ipa: "o-zhur-DWI se len-DI, leh preh-MIE MARS" },
      { fr: "Le musée ouvre à dix heures.", de: "Das Museum öffnet um zehn Uhr.", ipa: "leh mü-ZE UV-reh a di ÖR" },
      { fr: "À quelle heure ferme le magasin ?", de: "Um wie viel Uhr schließt das Geschäft?", ipa: "a kel ÖR FERM leh ma-ga-ZEN" },
      { fr: "À demain !", de: "Bis morgen!", ipa: "a deh-MEN" }
    ],
    grammar: "Im Französischen steht für 'Uhrzeit' das Muster: 'Il est + Zahl + heure(s)'. Für 'halb' sagt man 'et demie': 'Il est trois heures et demie' (Es ist halb vier — aber NACH drei Uhr, also 3:30 Uhr). Für 'Viertel nach': 'et quart'. Für 'Viertel vor': 'moins le quart'. Wochentage und Monate werden KLEIN geschrieben — anders als im Deutschen.",
    practice: [
      "Sag heute, morgen und gestern auf Französisch mit Wochentag und Monat.",
      "Übe Uhrzeiten: 8:00, 12:30, 15:45, 20:00 Uhr.",
      "Lerne auswendig: 'À quelle heure ouvre/ferme...?' — unverzichtbar für Museen und Restaurants."
    ]
  },
  {
    day: 7,
    title: "Wochenrückblick + Mini-Gespräch",
    titleNative: "Révision semaine 1 + mini-conversation",
    focus: "Festigen, was du diese Woche gelernt hast. Ziel: dich vorstellen, grüßen, Zahlen verstehen und die Tage nennen — komplett auf Französisch.",
    vocab: [
      { fr: "la langue", de: "die Sprache", ipa: "la LONG" },
      { fr: "apprendre", de: "lernen", ipa: "a-PRON-dreh" },
      { fr: "parler", de: "sprechen", ipa: "par-LE" },
      { fr: "comprendre", de: "verstehen", ipa: "kom-PRON-dreh" },
      { fr: "répéter", de: "wiederholen", ipa: "re-pe-TE" },
      { fr: "lentement", de: "langsam", ipa: "lont-MON" },
      { fr: "vite", de: "schnell", ipa: "VIT" },
      { fr: "Au secours !", de: "Hilfe!", ipa: "o seh-KUR" },
      { fr: "Comment ?", de: "Wie bitte?", ipa: "ko-MON" },
      { fr: "J'apprends le français.", de: "Ich lerne Französisch.", ipa: "zha-PRON leh fron-SE" }
    ],
    phrases: [
      { fr: "Bonjour ! Je m'appelle Anna, je viens d'Allemagne.", de: "Guten Tag! Ich heiße Anna, ich komme aus Deutschland.", ipa: "bon-ZHUR! zheh ma-PEL a-NA, zheh VIEN da-le-MAN-yeh" },
      { fr: "Je suis en vacances et j'apprends un peu de français.", de: "Ich bin im Urlaub und lerne ein bisschen Französisch.", ipa: "zheh swi-zon va-KONS e zha-PRON en pö deh fron-SE" },
      { fr: "Parlez lentement, s'il vous plaît — je ne comprends pas tout.", de: "Sprechen Sie bitte langsam — ich verstehe nicht alles.", ipa: "par-LE lon-te-MON, sil vu PLE — zheh neh kom-PRON PA tu" },
      { fr: "Comment vous appelez-vous ? D'où venez-vous ?", de: "Wie heißen Sie? Woher kommen Sie?", ipa: "ko-MON vu za-ple-VU? du ve-NE-vu" },
      { fr: "Enchanté(e), vraiment !", de: "Wirklich sehr erfreut!", ipa: "on-chon-TE, vrai-MON" }
    ],
    grammar: "Rückblick Woche 1: Im Französischen stehen ALLE Nomen mit einem Artikel — 'le' (männlich), 'la' (weiblich), 'les' (Plural). Es gibt kein Neutrum! Das ist für Deutschsprachige eine Vereinfachung (von drei auf zwei Geschlechter), aber die Zuweisung folgt anderen Regeln. Merke dir die Artikel immer mit dem Wort: 'le musée', 'la gare', 'le restaurant'.",
    practice: [
      "Sprich deine Woche-1-Vorstellung komplett durch, ohne Hilfe.",
      "Übe beide Rollen des Mini-Gesprächs oben.",
      "Selbstcheck: Kannst du grüßen, dich vorstellen, eine Zahl nennen und den Tag sagen? Dann bist du bereit für Woche 2!"
    ]
  },
  {
    day: 8,
    title: "Im Café",
    titleNative: "Au café",
    focus: "Das französische Café ist eine Institution. Man bestellt oft beim Kellner am Tisch — nicht an der Theke wie in Deutschland. Und 'un café' bedeutet immer Espresso, kein Filterkaffee.",
    vocab: [
      { fr: "un café", de: "ein Espresso", ipa: "en ka-FE" },
      { fr: "un café crème", de: "ein Espresso mit Milchschaum", ipa: "en ka-fe KREM" },
      { fr: "un café au lait", de: "ein Kaffee mit heißer Milch", ipa: "en ka-fe o LE" },
      { fr: "un thé", de: "ein Tee", ipa: "en TE" },
      { fr: "une eau", de: "ein Wasser", ipa: "ün O" },
      { fr: "un jus d'orange", de: "ein Orangensaft", ipa: "en zhü do-RONZH" },
      { fr: "un croissant", de: "ein Croissant", ipa: "en krua-SON" },
      { fr: "l'addition", de: "die Rechnung", ipa: "la-di-SION" },
      { fr: "la terrasse", de: "die Terrasse", ipa: "la te-RASS" },
      { fr: "le menu", de: "die Karte / das Menü", ipa: "leh meh-NÜ" }
    ],
    phrases: [
      { fr: "Je voudrais un café, s'il vous plaît.", de: "Ich hätte gerne einen Espresso, bitte.", ipa: "zheh vu-DRE en ka-FE, sil vu PLE" },
      { fr: "Un thé au lait, s'il vous plaît.", de: "Einen Tee mit Milch, bitte.", ipa: "en te o LE, sil vu PLE" },
      { fr: "L'addition, s'il vous plaît !", de: "Die Rechnung, bitte!", ipa: "la-di-SION, sil vu PLE" },
      { fr: "Sur place ou à emporter ?", de: "Hier essen oder zum Mitnehmen?", ipa: "sür PLASS u a-on-por-TE" },
      { fr: "Avez-vous le wifi ?", de: "Haben Sie WLAN?", ipa: "a-ve-vu leh wi-FI" }
    ],
    grammar: "'Je voudrais...' (ich hätte gerne) ist die höfliche Art zu bestellen — viel besser als 'Je veux' (ich will). Das 'ou' im Französischen entspricht einem deutschen 'u' — 'bonjour', 'vous', 'toujours'. Das Nasalvokalproblem: 'un' in 'un café' klingt wie ein nasales 'EN' — sprich das 'n' nicht vollständig aus, sondern lass die Luft durch die Nase.",
    practice: [
      "Lerne die vollständige Bestellung auswendig: 'Bonjour ! Je voudrais un café et un croissant, s'il vous plaît.'",
      "Übe, wie du die Rechnung verlangst: 'L'addition, s'il vous plaît !'",
      "Trainiere die Antwort auf 'Sur place ou à emporter?' je nach Situation."
    ]
  },
  {
    day: 9,
    title: "Brot, Gebäck & Kuchen",
    titleNative: "Boulangerie & pâtisserie",
    focus: "Frankreich hat über 200 Brotsorten. Die Boulangerie (Bäckerei) und Pâtisserie (Konditorei) sind kulturelle Institutionen — hier kauft man täglich ein.",
    vocab: [
      { fr: "le pain", de: "das Brot", ipa: "leh PEN" },
      { fr: "la baguette", de: "das Baguette (Stangenweißbrot)", ipa: "la ba-GET" },
      { fr: "le croissant", de: "das Croissant", ipa: "leh krua-SON" },
      { fr: "le pain au chocolat", de: "das Schokoladencroissant", ipa: "leh pen o cho-ko-LA" },
      { fr: "la brioche", de: "die Brioche (süßes Hefegebäck)", ipa: "la bri-OCH" },
      { fr: "le beurre", de: "die Butter", ipa: "leh BÖR" },
      { fr: "la confiture", de: "die Marmelade / Konfitüre", ipa: "la kon-fi-TÜR" },
      { fr: "le gâteau", de: "der Kuchen / die Torte", ipa: "leh ga-TO" },
      { fr: "la tarte", de: "der Obstkuchen / die Tarte", ipa: "la TART" },
      { fr: "frais / fraîche", de: "frisch", ipa: "FRE / FRECH" }
    ],
    phrases: [
      { fr: "Une baguette, s'il vous plaît.", de: "Ein Baguette, bitte.", ipa: "ün ba-GET, sil vu PLE" },
      { fr: "Deux croissants, s'il vous plaît.", de: "Zwei Croissants, bitte.", ipa: "dö krua-SON, sil vu PLE" },
      { fr: "Un morceau de cette tarte, s'il vous plaît.", de: "Ein Stück von dieser Tarte, bitte.", ipa: "en mor-SO deh SET TART, sil vu PLE" },
      { fr: "C'est frais ?", de: "Ist das frisch?", ipa: "se FRE" },
      { fr: "Avec du beurre, s'il vous plaît.", de: "Mit Butter, bitte.", ipa: "a-VEK dü BÖR, sil vu PLE" }
    ],
    grammar: "Das Teilungsartikel-System: 'du' (männlich), 'de la' (weiblich), 'des' (Plural) bedeuten 'etwas von...' — 'du pain' (Brot = etwas Brot), 'de la confiture' (Marmelade). Das deutsche 'ü' entspricht exakt dem französischen 'u' in 'confiture', 'beurre', 'une' — das ist dein Vorteil als Deutschsprachiger! Die Boulangerie öffnet früh, oft schon um 6:30 Uhr.",
    practice: [
      "Bestelle drei verschiedene Artikel in einer imaginären Boulangerie.",
      "Lerne die Artikel auswendig: LE pain, LA baguette, LE croissant, LA tarte.",
      "Übe zeigen und fragen: 'Un morceau de... là-bas, s'il vous plaît' — der universelle Touristensatz."
    ]
  },
  {
    day: 10,
    title: "Im Restaurant",
    titleNative: "Au restaurant",
    focus: "Ein vollständiges Abendessen auf Französisch — vom Betreten bis zur Bezahlung. In Frankreich gehört der Tisch dir für den Abend, der Service ist oft langsamer als in Deutschland — genieße es.",
    vocab: [
      { fr: "réserver une table", de: "einen Tisch reservieren", ipa: "re-zer-VE ün TABL" },
      { fr: "l'entrée", de: "die Vorspeise", ipa: "lon-TRE" },
      { fr: "le plat principal", de: "das Hauptgericht", ipa: "leh pla pren-si-PAL" },
      { fr: "le dessert", de: "das Dessert / die Nachspeise", ipa: "leh de-ZER" },
      { fr: "le plat du jour", de: "das Tagesgericht", ipa: "leh pla dü ZHUR" },
      { fr: "Qu'est-ce que vous recommandez ?", de: "Was empfehlen Sie?", ipa: "kes-keh vu re-ko-man-DE" },
      { fr: "la carte", de: "die Karte / das Menü", ipa: "la KART" },
      { fr: "bien cuit", de: "gut durchgebraten / durch", ipa: "bien KWI" },
      { fr: "à point", de: "medium / rosa", ipa: "a PUEN" },
      { fr: "Santé !", de: "Prost!", ipa: "son-TE" }
    ],
    phrases: [
      { fr: "Une table pour deux personnes, s'il vous plaît.", de: "Einen Tisch für zwei Personen, bitte.", ipa: "ün TABL pur dö per-SON, sil vu PLE" },
      { fr: "Je voudrais le plat du jour.", de: "Ich hätte gerne das Tagesgericht.", ipa: "zheh vu-DRE leh pla dü ZHUR" },
      { fr: "Qu'est-ce que vous recommandez ce soir ?", de: "Was empfehlen Sie heute Abend?", ipa: "kes-keh vu re-ko-man-DE seh SUAR" },
      { fr: "C'était excellent !", de: "Das war ausgezeichnet!", ipa: "se-te ek-se-LON" },
      { fr: "On règle séparément ou ensemble ?", de: "Zahlen wir getrennt oder zusammen?", ipa: "on REG-leh se-pa-RE-MON u on-SOM-bleh" }
    ],
    grammar: "Trinkgeld (pourboire) ist in Frankreich nicht verpflichtend — der Service ist im Preis inbegriffen. 5-10% für guten Service sind nett, aber keine Pflicht. Wichtig: 'Garçon' für den Kellner ist veraltet und gilt als unhöflich. Sag stattdessen 'Excusez-moi, monsieur' oder 'Excusez-moi, madame' um die Aufmerksamkeit zu erregen.",
    practice: [
      "Übe die Ankunft im Restaurant: Tisch bitten, Karte verlangen, Frage zum Tagesgericht.",
      "Lerne auswendig: 'C'était excellent !' — Franzosen freuen sich aufrichtig über Komplimente.",
      "Trainiere eine vollständige Bestellung: Vorspeise, Hauptgericht und Dessert in einem Satz."
    ]
  },
  {
    day: 11,
    title: "Häufige Lebensmittel",
    titleNative: "Les aliments courants",
    focus: "Eine Speisekarte lesen, einkaufen gehen, Zutaten verstehen. Diese Wörter ermöglichen es dir, dich auf jedem Markt und in jedem Restaurant zu orientieren.",
    vocab: [
      { fr: "la viande", de: "das Fleisch", ipa: "la VIOND" },
      { fr: "le poisson", de: "der Fisch", ipa: "leh pua-SON" },
      { fr: "les légumes", de: "das Gemüse", ipa: "le le-GÜM" },
      { fr: "les fruits", de: "das Obst / die Früchte", ipa: "le FRWI" },
      { fr: "le fromage", de: "der Käse", ipa: "leh fro-MAZH" },
      { fr: "l'œuf / les œufs", de: "das Ei / die Eier", ipa: "LÖF / le ZÖ" },
      { fr: "le poulet", de: "das Hähnchen", ipa: "leh pu-LE" },
      { fr: "le porc", de: "das Schweinefleisch", ipa: "leh POR" },
      { fr: "la pomme de terre", de: "die Kartoffel", ipa: "la pom deh TER" },
      { fr: "sucré / salé / épicé", de: "süß / salzig / scharf", ipa: "sü-KRE / sa-LE / e-pi-SE" }
    ],
    phrases: [
      { fr: "Je n'aime pas la viande.", de: "Ich mag kein Fleisch.", ipa: "zheh nem pa la VIOND" },
      { fr: "Qu'est-ce qu'il y a dans ce plat ?", de: "Was ist in diesem Gericht?", ipa: "kes-kil-YA don seh PLA" },
      { fr: "Est-ce que ça contient du gluten ?", de: "Enthält das Gluten?", ipa: "es-keh sa kon-TIEN dü glü-TEN" },
      { fr: "J'adore le fromage !", de: "Ich liebe Käse!", ipa: "zha-DOR leh fro-MAZH" },
      { fr: "Avez-vous des plats végétariens ?", de: "Haben Sie vegetarische Gerichte?", ipa: "a-ve-vu de pla ve-zhe-ta-RIEN" }
    ],
    grammar: "Der Unterschied zwischen 'aimer' und 'adorer': 'J'aime le fromage' (ich mag Käse) vs. 'J'adore le fromage' (ich liebe Käse). Mit dem Teilungsartikel 'du/de la/des' drückt man 'etwas davon' aus: 'Je mange du pain' (ich esse Brot). Die Verneinung macht daraus 'de': 'Je ne mange pas DE pain' (ich esse kein Brot).",
    practice: [
      "Beschreibe drei Gerichte, die du magst, und drei, die du nicht magst.",
      "Übe die Zutaten-Frage: 'Qu'est-ce qu'il y a dans ce plat ?'",
      "Lerne auswendig: 'Avez-vous des plats végétariens?' — auch wenn du kein Vegetarier bist."
    ]
  },
  {
    day: 12,
    title: "Ernährung & Allergien",
    titleNative: "Régimes & allergies",
    focus: "Ernährungseinschränkungen klar kommunizieren — das kann eine Sicherheitsfrage sein. Diese Sätze, klar ausgesprochen, vermeiden unangenehme oder gefährliche Situationen.",
    vocab: [
      { fr: "végétarien(ne)", de: "vegetarisch / Vegetarier(in)", ipa: "ve-zhe-ta-RIEN / ve-zhe-ta-RYEN" },
      { fr: "vegan(e)", de: "vegan", ipa: "ve-GON" },
      { fr: "une allergie", de: "eine Allergie", ipa: "ün a-ler-ZHI" },
      { fr: "sans lactose", de: "laktosefrei", ipa: "son lak-TOZ" },
      { fr: "sans gluten", de: "glutenfrei", ipa: "son glü-TEN" },
      { fr: "la noix / les noix", de: "die Nuss / die Nüsse", ipa: "la NUA / le NUA" },
      { fr: "le lait", de: "die Milch", ipa: "leh LE" },
      { fr: "l'œuf", de: "das Ei", ipa: "LÖF" },
      { fr: "J'évite", de: "Ich vermeide", ipa: "zhe-VIT" },
      { fr: "Ce n'est pas possible pour moi.", de: "Das ist nicht möglich für mich.", ipa: "seh ne pa po-SI-bleh pur MUA" }
    ],
    phrases: [
      { fr: "Je suis végétarien(ne).", de: "Ich bin Vegetarier(in).", ipa: "zheh swi ve-zhe-ta-RIEN / ve-zhe-ta-RYEN" },
      { fr: "J'ai une allergie aux noix.", de: "Ich habe eine Nussallergie.", ipa: "zhe ün a-ler-ZHI o NUA" },
      { fr: "Est-ce que ce plat contient du gluten ?", de: "Enthält dieses Gericht Gluten?", ipa: "es-keh seh pla kon-TIEN dü glü-TEN" },
      { fr: "Je ne mange pas de porc.", de: "Ich esse kein Schweinefleisch.", ipa: "zheh neh MONZH pa deh POR" },
      { fr: "Pouvez-vous le faire sans fromage ?", de: "Können Sie es ohne Käse machen?", ipa: "pu-ve-vu leh FER son fro-MAZH" }
    ],
    grammar: "'Sans' (ohne) + Nomen ohne Artikel ist eine sehr nützliche Konstruktion: 'sans gluten', 'sans lactose', 'sans viande'. Das entspricht dem deutschen 'ohne + Akkusativ'. Bei schwerwiegenden Allergien empfiehlt es sich, auch eine schriftliche Karte auf Französisch mitzubringen — mündliche Kommunikation allein kann riskant sein.",
    practice: [
      "Schreibe deine eigenen Ernährungseinschränkungen (echte oder fiktive) auf Französisch.",
      "Übe nachzufragen: 'Est-ce que ce plat contient ___?' mit verschiedenen Zutaten.",
      "Lerne auswendig: 'Je suis allergique aux noix / au gluten / aux produits laitiers.'"
    ]
  },
  {
    day: 13,
    title: "Die Rechnung bezahlen",
    titleNative: "Payer l'addition",
    focus: "Bezahlgewohnheiten in Frankreich können Deutsche überraschen. Das Trinkgeld ist optional, die Karte wird nicht immer akzeptiert, und der Kellner bringt die Rechnung erst, wenn man danach fragt.",
    vocab: [
      { fr: "l'addition", de: "die Rechnung", ipa: "la-di-SION" },
      { fr: "payer en liquide", de: "bar bezahlen", ipa: "pe-IE on li-KID" },
      { fr: "payer par carte", de: "mit Karte zahlen", ipa: "pe-IE par KART" },
      { fr: "le pourboire", de: "das Trinkgeld", ipa: "leh pur-BUAR" },
      { fr: "Gardez la monnaie.", de: "Behalten Sie das Wechselgeld.", ipa: "gar-DE la mo-NE" },
      { fr: "Ce n'est pas correct.", de: "Das stimmt nicht.", ipa: "seh ne pa ko-REKT" },
      { fr: "payer séparément", de: "getrennt zahlen", ipa: "pe-IE se-pa-RE-MON" },
      { fr: "payer ensemble", de: "zusammen zahlen", ipa: "pe-IE on-SOM-bleh" },
      { fr: "la monnaie", de: "das Wechselgeld / die Münzen", ipa: "la mo-NE" },
      { fr: "le reçu", de: "der Beleg / die Quittung", ipa: "leh reh-SÜ" }
    ],
    phrases: [
      { fr: "L'addition, s'il vous plaît.", de: "Die Rechnung, bitte.", ipa: "la-di-SION, sil vu PLE" },
      { fr: "Je peux payer par carte ?", de: "Kann ich mit Karte zahlen?", ipa: "zheh pö pe-IE par KART" },
      { fr: "Gardez la monnaie, merci.", de: "Behalten Sie das Wechselgeld, danke.", ipa: "gar-DE la mo-NE, mer-SI" },
      { fr: "On paie séparément, s'il vous plaît.", de: "Wir zahlen getrennt, bitte.", ipa: "on PE se-pa-RE-MON, sil vu PLE" },
      { fr: "C'était délicieux, merci !", de: "Es war köstlich, danke!", ipa: "se-te de-li-SIÖ, mer-SI" }
    ],
    grammar: "Wichtig: Der Kellner bringt die Rechnung in Frankreich NICHT automatisch — du musst 'L'addition, s'il vous plaît' sagen oder das Zeichen machen (Stift auf imaginäres Papier). Das ist kulturell bedingt und keine Unhöflichkeit. 'Délicieux' (köstlich) ist eine der am häufigsten genutzten Ausdrücke am Tisch — benutze es großzügig.",
    practice: [
      "Übe: 'Je peux payer par carte?' und bereite eine Antwort vor, falls es nein heißt.",
      "Trainiere die Trinkgeld-Situation: Betrag nennen und 'Gardez la monnaie' sagen.",
      "Lerne auswendig: 'C'était délicieux!' — eine echte Freude für jeden französischen Koch."
    ]
  },
  {
    day: 14,
    title: "Wochenrückblick — Ein Café-Tag",
    titleNative: "Révision semaine 2 — une journée café",
    focus: "Festige Woche 2 durch eine imaginäre Reise: Frühstück in der Boulangerie, Mittagessen im Bistro, Kaffee am Nachmittag. Alles auf Französisch.",
    vocab: [
      { fr: "j'ai faim", de: "ich habe Hunger", ipa: "zhe FEN" },
      { fr: "j'ai soif", de: "ich habe Durst", ipa: "zhe SUAF" },
      { fr: "délicieux / délicieuse", de: "köstlich / lecker", ipa: "de-li-SIÖ / de-li-SYÖZ" },
      { fr: "je suis rassasié(e)", de: "ich bin satt", ipa: "zheh swi ra-sa-ZIE" },
      { fr: "un peu plus", de: "ein bisschen mehr", ipa: "en pö PLÜ" },
      { fr: "sans", de: "ohne", ipa: "SON" },
      { fr: "avec", de: "mit", ipa: "a-VEK" },
      { fr: "à emporter", de: "zum Mitnehmen", ipa: "a-on-por-TE" },
      { fr: "Bon appétit !", de: "Guten Appetit!", ipa: "bon a-pe-TI" },
      { fr: "De même !", de: "Gleichfalls!", ipa: "deh MEM" }
    ],
    phrases: [
      { fr: "Un café à emporter, s'il vous plaît.", de: "Einen Kaffee zum Mitnehmen, bitte.", ipa: "en ka-FE a-on-por-TE, sil vu PLE" },
      { fr: "Bon appétit !", de: "Guten Appetit!", ipa: "bon a-pe-TI" },
      { fr: "Merci, de même !", de: "Danke, gleichfalls!", ipa: "mer-SI, deh MEM" },
      { fr: "Je suis déjà rassasié(e), merci.", de: "Ich bin schon satt, danke.", ipa: "zheh swi de-ZHA ra-sa-ZIE, mer-SI" },
      { fr: "La même chose, encore une fois.", de: "Dasselbe nochmal.", ipa: "la MEM CHOZ, on-kor ün FUA" }
    ],
    grammar: "Rückblick Woche 2: Die wichtigsten Bestellmuster — 'Je voudrais...' (ich hätte gerne), 'Avez-vous...?' (haben Sie?), 'Sans...' (ohne), 'Avec...' (mit). Vergiss nicht: 'Bon appétit' ruft nach der Antwort 'Merci, de même' oder 'Merci, bonne dégustation' — nicht nur 'Danke'.",
    practice: [
      "Spiele eine vollständige Café-Tag-Szene: Frühstück, Mittagessen, Nachmittagskaffee.",
      "Übe beide Rollen: Kellner und Gast.",
      "Selbstcheck: Kannst du bestellen, Wünsche äußern, bezahlen und dich bedanken? Weiter zu Woche 3!"
    ]
  },
  {
    day: 15,
    title: "Im Hotel",
    titleNative: "À l'hôtel",
    focus: "Die erste echte Sprachherausforderung auf Reisen: der Check-in. Diese Sätze decken Anmeldung, praktische Fragen und Grundbedürfnisse ab.",
    vocab: [
      { fr: "la réservation", de: "die Reservierung", ipa: "la re-zer-va-SION" },
      { fr: "une chambre simple", de: "ein Einzelzimmer", ipa: "ün CHOM-breh SEM-pleh" },
      { fr: "une chambre double", de: "ein Doppelzimmer", ipa: "ün CHOM-breh DU-bleh" },
      { fr: "s'enregistrer", de: "einchecken / sich anmelden", ipa: "son-re-zhis-TRE" },
      { fr: "la clé / la carte-clé", de: "der Schlüssel / die Schlüsselkarte", ipa: "la KLE / la kart-KLE" },
      { fr: "l'ascenseur", de: "der Aufzug / der Fahrstuhl", ipa: "la-son-SÖR" },
      { fr: "le petit-déjeuner", de: "das Frühstück", ipa: "leh peh-ti-de-zhö-NE" },
      { fr: "À quelle heure est le petit-déjeuner ?", de: "Um wie viel Uhr ist das Frühstück?", ipa: "a kel ÖR e leh peh-ti-de-zhö-NE" },
      { fr: "le mot de passe wifi", de: "das WLAN-Passwort", ipa: "leh mo deh PASS wi-FI" },
      { fr: "le rez-de-chaussée", de: "das Erdgeschoss", ipa: "leh re-deh-cho-SE" }
    ],
    phrases: [
      { fr: "J'ai une réservation au nom de Müller.", de: "Ich habe eine Reservierung auf den Namen Müller.", ipa: "zhe ün re-zer-va-SION o nom deh MÜ-ler" },
      { fr: "Pour combien de nuits ?", de: "Für wie viele Nächte?", ipa: "pur kom-BIEN deh NWI" },
      { fr: "À quelle heure dois-je libérer la chambre ?", de: "Um wie viel Uhr muss ich das Zimmer freigeben?", ipa: "a kel ÖR DUA-zheh li-be-RE la CHOM-breh" },
      { fr: "Quel est le mot de passe wifi ?", de: "Was ist das WLAN-Passwort?", ipa: "kel e leh mo deh PASS wi-FI" },
      { fr: "À quelle heure sert-on le petit-déjeuner ?", de: "Ab wie viel Uhr gibt es Frühstück?", ipa: "a kel ÖR ser-TON leh peh-ti-de-zhö-NE" }
    ],
    grammar: "'Pouvez-vous me...?' (Können Sie mir...?) ist eine der nützlichsten Strukturen im Französischen. 'Me' = 'mir/mich'. 'Pouvez-vous me donner la clé?' (Können Sie mir den Schlüssel geben?). Das Frühstück (petit-déjeuner = kleines Mittagessen) ist in französischen Hotels oft nicht inbegriffen — frag danach!",
    practice: [
      "Übe den kompletten Check-in: Name, Zimmertyp, Nächteanzahl.",
      "Lerne die zwei wichtigsten Fragen: Frühstückszeit und WLAN-Passwort.",
      "Trainiere beide Rollen: Rezeptionist und Gast."
    ]
  },
  {
    day: 16,
    title: "Zimmer & Probleme",
    titleNative: "La chambre & les problèmes",
    focus: "Wenn etwas im Zimmer nicht funktioniert, musst du es klar beschreiben können. Diese Sätze decken die häufigsten Probleme ab.",
    vocab: [
      { fr: "la serviette", de: "das Handtuch", ipa: "la ser-VIET" },
      { fr: "le chauffage", de: "die Heizung", ipa: "leh cho-FAZH" },
      { fr: "la climatisation", de: "die Klimaanlage", ipa: "la kli-ma-ti-za-SION" },
      { fr: "la lumière", de: "das Licht / die Beleuchtung", ipa: "la lü-MIER" },
      { fr: "ne fonctionne pas", de: "funktioniert nicht", ipa: "neh fonk-SION pa" },
      { fr: "C'est trop bruyant.", de: "Es ist zu laut.", ipa: "se tro brwi-ION" },
      { fr: "C'est trop froid / chaud.", de: "Es ist zu kalt / heiß.", ipa: "se tro FRUA / CHO" },
      { fr: "une chambre plus calme", de: "ein ruhigeres Zimmer", ipa: "ün CHOM-breh plü KALM" },
      { fr: "Pouvez-vous envoyer quelqu'un ?", de: "Können Sie jemanden schicken?", ipa: "pu-ve-vu on-vua-IE kel-KEN" },
      { fr: "les bagages", de: "das Gepäck", ipa: "le ba-GAZH" }
    ],
    phrases: [
      { fr: "Le chauffage ne fonctionne pas.", de: "Die Heizung funktioniert nicht.", ipa: "leh cho-FAZH neh fonk-SION PA" },
      { fr: "Puis-je avoir d'autres serviettes ?", de: "Kann ich mehr Handtücher haben?", ipa: "pwi-zheh a-VUAR do-treh ser-VIET" },
      { fr: "La chambre est trop bruyante. En avez-vous une plus calme ?", de: "Das Zimmer ist zu laut. Haben Sie ein ruhigeres?", ipa: "la CHOM-breh e tro brwi-ION-t. on a-ve-VU ün plü KALM" },
      { fr: "Pouvez-vous garder mes bagages ?", de: "Können Sie mein Gepäck aufbewahren?", ipa: "pu-ve-vu gar-DE me ba-GAZH" },
      { fr: "Il y a un problème avec la lumière.", de: "Es gibt ein Problem mit dem Licht.", ipa: "il-ya en pro-BLEM a-VEK la lü-MIER" }
    ],
    grammar: "'Il y a' = 'es gibt' (wörtlich: 'es hat dort'). 'Il y a un problème' (es gibt ein Problem). Das ist eine der meistgenutzten Strukturen im Französischen — merke sie dir gut. 'Puis-je...?' (darf ich / kann ich?) ist die höflichste Art zu fragen — höflicher als 'Je peux...?'.",
    practice: [
      "Beschreibe drei verschiedene Zimmerprobleme auf Französisch.",
      "Übe: 'Il y a un problème avec le/la...' mit verschiedenen Substantiven.",
      "Trainiere die höfliche Bitte: 'Puis-je avoir...?' mit verschiedenen Dingen."
    ]
  },
  {
    day: 17,
    title: "Nach dem Weg fragen",
    titleNative: "Demander son chemin",
    focus: "Sich in einer französischen Stadt zurechtfinden. Diese Wegbeschreibungen decken die meisten realen Situationen ab — vom Métro bis zur Kathedrale.",
    vocab: [
      { fr: "Où est... ?", de: "Wo ist...?", ipa: "u E" },
      { fr: "tout droit", de: "geradeaus", ipa: "tu DRUA" },
      { fr: "à gauche", de: "links", ipa: "a GOCH" },
      { fr: "à droite", de: "rechts", ipa: "a DRUAT" },
      { fr: "au feu rouge", de: "an der Ampel", ipa: "o fö RUZH" },
      { fr: "le carrefour", de: "die Kreuzung", ipa: "leh kar-FUR" },
      { fr: "la prochaine rue", de: "die nächste Straße", ipa: "la pro-CHEN RÜ" },
      { fr: "Ce n'est pas loin.", de: "Es ist nicht weit.", ipa: "seh ne pa LUEN" },
      { fr: "à pied", de: "zu Fuß", ipa: "a PIE" },
      { fr: "C'est à combien de minutes ?", de: "Wie viele Minuten sind es?", ipa: "se ta kom-BIEN deh mi-NÜT" }
    ],
    phrases: [
      { fr: "Excusez-moi, bonjour, où est la gare ?", de: "Entschuldigung, guten Tag, wo ist der Bahnhof?", ipa: "ek-skü-ZE-mua, bon-ZHUR, u e la GAR" },
      { fr: "Allez tout droit, puis tournez à gauche.", de: "Gehen Sie geradeaus, dann links abbiegen.", ipa: "a-LE tu DRUA, pwi tur-NE a GOCH" },
      { fr: "C'est loin d'ici ?", de: "Ist es weit von hier?", ipa: "se LUEN di-SI" },
      { fr: "Environ dix minutes à pied.", de: "Ungefähr zehn Minuten zu Fuß.", ipa: "on-vi-RON di mi-NÜT a PIE" },
      { fr: "Pouvez-vous me montrer sur la carte ?", de: "Können Sie mir das auf der Karte zeigen?", ipa: "pu-ve-vu meh mon-TRE sür la KART" }
    ],
    grammar: "Der Imperativ (Befehlsform) für höfliche Anweisungen: 'Allez' (gehen Sie), 'Prenez' (nehmen Sie), 'Tournez' (drehen/biegen Sie). Immer mit dem formellen 'vous'. Im Unterschied zum Deutschen: Im Französischen steht das Subjekt meistens mit beim Imperativ der formellen Anrede nicht — 'Allez tout droit' (gehen Sie geradeaus) ohne 'vous'.",
    practice: [
      "Übe, den Weg zu drei verschiedenen Orten zu erfragen: Hotel, Museum, Bahnhof.",
      "Trainiere Wegbeschreibungen mit den vier Grundrichtungen.",
      "Lerne auswendig: 'Pouvez-vous me montrer sur la carte?' — unverzichtbar, wenn du Wegbeschreibungen nicht verstehst."
    ]
  },
  {
    day: 18,
    title: "Verkehrsmittel",
    titleNative: "Les transports",
    focus: "Der öffentliche Nahverkehr in Frankreich ist gut ausgebaut. Das Vokabular dieser Lektion hilft dir, das Netz selbstständig zu nutzen.",
    vocab: [
      { fr: "le métro", de: "die U-Bahn", ipa: "leh me-TRO" },
      { fr: "le RER", de: "der Regionalzug / S-Bahn Paris", ipa: "leh re-e-ER" },
      { fr: "le tramway", de: "die Straßenbahn", ipa: "leh tram-WE" },
      { fr: "le bus", de: "der Bus", ipa: "leh BÜS" },
      { fr: "le ticket / le carnet", de: "das Ticket / das Ticketheft (10er)", ipa: "leh ti-KE / leh kar-NE" },
      { fr: "le distributeur", de: "der Fahrkartenautomat", ipa: "leh dis-tri-bü-TÖR" },
      { fr: "la ligne", de: "die Linie", ipa: "la LIN-yeh" },
      { fr: "le terminus", de: "die Endstation", ipa: "leh ter-mi-NÜS" },
      { fr: "changer de ligne", de: "umsteigen / die Linie wechseln", ipa: "chon-ZHE deh LIN-yeh" },
      { fr: "la sortie", de: "der Ausgang", ipa: "la sor-TI" }
    ],
    phrases: [
      { fr: "Où est la station de métro la plus proche ?", de: "Wo ist die nächste U-Bahn-Station?", ipa: "u e la sta-SION deh me-TRO la plü PROCH" },
      { fr: "Quelle ligne va au Louvre ?", de: "Welche Linie fährt zum Louvre?", ipa: "kel LIN-yeh va o LU-vreh" },
      { fr: "Est-ce que je dois changer ?", de: "Muss ich umsteigen?", ipa: "es-keh zheh DUA chon-ZHE" },
      { fr: "Un carnet, s'il vous plaît.", de: "Ein 10er-Ticketheft, bitte.", ipa: "en kar-NE, sil vu PLE" },
      { fr: "Où est la sortie ?", de: "Wo ist der Ausgang?", ipa: "u e la sor-TI" }
    ],
    grammar: "Im Pariser Métro heißt die Richtungsangabe nach der Endstation: 'Direction Château de Vincennes' (Richtung...). Du hörst immer die Endstation, nicht die nächste Station. Im Gegensatz zum Deutschen muss man in Paris sein Ticket bei der Einfahrt durch den Dreharm stecken — merke es auf, bevor du es wegwirfst!",
    practice: [
      "Übe, ein Ticket zu kaufen: Ziel, Ticketart, Bezahlung.",
      "Lerne: 'Est-ce que je dois changer?' — du wirst es in fast jeder Stadt brauchen.",
      "Trainiere, nach der richtigen Linie zu fragen: 'Quelle ligne va à...?'"
    ]
  },
  {
    day: 19,
    title: "Zug & Bahnhof",
    titleNative: "Le train & la gare",
    focus: "Das französische Schienennetz (SNCF) verbindet alle Großstädte. Der TGV (Train à Grande Vitesse) ist Frankreichs Hochgeschwindigkeitszug — und ein Erlebnis.",
    vocab: [
      { fr: "la gare", de: "der Bahnhof", ipa: "la GAR" },
      { fr: "le train", de: "der Zug", ipa: "leh TREN" },
      { fr: "le TGV", de: "der Hochgeschwindigkeitszug", ipa: "leh te-zhe-VE" },
      { fr: "le quai", de: "der Bahnsteig", ipa: "leh KE" },
      { fr: "le départ", de: "die Abfahrt", ipa: "leh de-PAR" },
      { fr: "l'arrivée", de: "die Ankunft", ipa: "la-ri-VE" },
      { fr: "en retard", de: "verspätet", ipa: "on reh-TAR" },
      { fr: "la réservation de place", de: "die Sitzplatzreservierung", ipa: "la re-zer-va-SION deh PLASS" },
      { fr: "aller simple", de: "einfache Fahrt", ipa: "a-LE SEM-pleh" },
      { fr: "aller-retour", de: "Hin- und Rückfahrt", ipa: "a-LE-reh-TUR" }
    ],
    phrases: [
      { fr: "Un train pour Lyon, s'il vous plaît.", de: "Einen Zug nach Lyon, bitte.", ipa: "en TREN pur li-ON, sil vu PLE" },
      { fr: "Aller simple ou aller-retour ?", de: "Einfach oder hin und zurück?", ipa: "a-LE SEM-pleh u a-LE-reh-TUR" },
      { fr: "De quel quai part le train ?", de: "Von welchem Gleis fährt der Zug ab?", ipa: "deh kel KE par leh TREN" },
      { fr: "Le train a dix minutes de retard.", de: "Der Zug hat zehn Minuten Verspätung.", ipa: "leh TREN a di mi-NÜT deh reh-TAR" },
      { fr: "Cette place est libre ?", de: "Ist dieser Platz frei?", ipa: "SET PLASS e LI-breh" }
    ],
    grammar: "In Frankreich ist bei TGV-Fahrten eine Sitzplatzreservierung PFLICHT — anders als in Deutschland. Der Kauf eines Tickets ohne Reservierung für den TGV ist nicht möglich. 'En retard' (verspätet) — das 'd' am Ende ist stumm. Merke dir die stummen Endkonsonanten: -d, -t, -s, -x am Wortende werden meist nicht ausgesprochen.",
    practice: [
      "Übe einen Fahrkartenkauf: Ziel, Typ (einfach/Rückfahrt), Klasse.",
      "Lerne: 'De quel quai part le train pour...?'",
      "Trainiere das Verstehen von Durchsagen mit den Schlüsselinfos: Ziel, Abfahrtzeit, Gleis."
    ]
  },
  {
    day: 20,
    title: "Genaue Uhrzeit & Fahrpläne",
    titleNative: "L'heure exacte & les horaires",
    focus: "Uhrzeiten präzise kommunizieren und Fahrpläne lesen. Anders als in Deutschland sind Öffnungszeiten in Frankreich weniger streng — aber die Züge fahren pünktlich ab.",
    vocab: [
      { fr: "et quart", de: "Viertel nach", ipa: "e KAR" },
      { fr: "et demie", de: "halb (nach der vollen Stunde)", ipa: "e deh-MI" },
      { fr: "moins le quart", de: "Viertel vor", ipa: "muen leh KAR" },
      { fr: "pile", de: "genau / pünktlich (Uhrzeit)", ipa: "PIL" },
      { fr: "environ", de: "ungefähr", ipa: "on-vi-RON" },
      { fr: "à l'heure", de: "pünktlich", ipa: "a LÖR" },
      { fr: "en retard", de: "zu spät / verspätet", ipa: "on reh-TAR" },
      { fr: "tôt", de: "früh", ipa: "TO" },
      { fr: "ouvert", de: "geöffnet", ipa: "u-VER" },
      { fr: "fermé", de: "geschlossen", ipa: "fer-ME" }
    ],
    phrases: [
      { fr: "Il est trois heures et quart.", de: "Es ist Viertel nach drei.", ipa: "il e trua ÖR e KAR" },
      { fr: "Il est trois heures et demie.", de: "Es ist halb vier.", ipa: "il e trua ÖR e deh-MI" },
      { fr: "Le magasin ouvre à neuf heures pile.", de: "Das Geschäft öffnet genau um neun Uhr.", ipa: "leh ma-ga-ZEN UV-reh a nöf ÖR PIL" },
      { fr: "Je suis malheureusement en retard.", de: "Ich bin leider verspätet.", ipa: "zheh swi mal-ör-ÖZ-MON on reh-TAR" },
      { fr: "Jusqu'à quelle heure c'est ouvert ?", de: "Bis wie viel Uhr ist es geöffnet?", ipa: "zhüs-ka kel ÖR se u-VER" }
    ],
    grammar: "Im Französischen ist 'et demie' (halb) einfacher als im Deutschen: Es bedeutet einfach +30 Minuten. '3 heures et demie' = 3:30 Uhr — klar und logisch, ohne das deutsche Verwirrungs-System. Die formelle Uhrzeit (24-Stunden) in Fahrplänen: 'quinze heures trente' (15:30 Uhr). Die Mittagspause (12h-14h) ist in Frankreich noch sehr verbreitet — viele Geschäfte schließen dann.",
    practice: [
      "Übe diese Uhrzeiten: 9:00, 9:15, 9:30, 9:45 Uhr auf Französisch.",
      "Frage die Öffnungszeiten von drei imaginären Orten mit 'Jusqu'à quelle heure...?' und 'À partir de quelle heure...?'",
      "Merke dir die Mittagspause: Viele Läden in Frankreich öffnen nicht vor 14 Uhr nach der Pause!"
    ]
  },
  {
    day: 21,
    title: "Wochenrückblick — Ein Reisetag",
    titleNative: "Révision semaine 3 — une journée de voyage",
    focus: "Festige Woche 3 mit einem simulierten Reisetag: Hotel, Transport, Sehenswürdigkeiten, Wegbeschreibungen und Uhrzeiten.",
    vocab: [
      { fr: "Je cherche", de: "Ich suche", ipa: "zheh CHERCH" },
      { fr: "Il y a", de: "Es gibt", ipa: "il-YA" },
      { fr: "près d'ici", de: "in der Nähe / hier in der Nähe", ipa: "pre di-SI" },
      { fr: "loin", de: "weit", ipa: "LUEN" },
      { fr: "directement", de: "direkt / ohne Umstieg", ipa: "di-rekt-MON" },
      { fr: "le centre-ville", de: "das Stadtzentrum", ipa: "leh SON-treh-VIL" },
      { fr: "le site touristique", de: "die Touristenattraktion", ipa: "leh SIT tu-ris-TIK" },
      { fr: "le plan de la ville", de: "der Stadtplan", ipa: "leh PLON deh la VIL" },
      { fr: "Pouvez-vous m'aider ?", de: "Können Sie mir helfen?", ipa: "pu-ve-vu me-DE" },
      { fr: "Je suis perdu(e).", de: "Ich bin verloren / habe mich verlaufen.", ipa: "zheh swi per-DÜ" }
    ],
    phrases: [
      { fr: "Je cherche le centre-ville.", de: "Ich suche das Stadtzentrum.", ipa: "zheh CHERCH leh SON-treh-VIL" },
      { fr: "Y a-t-il un métro près d'ici ?", de: "Gibt es eine U-Bahn in der Nähe?", ipa: "i-a-TIL en me-TRO pre di-SI" },
      { fr: "Quand part le prochain train pour Bordeaux ?", de: "Wann fährt der nächste Zug nach Bordeaux?", ipa: "kon par leh pro-CHEN TREN pur bor-DO" },
      { fr: "Pouvez-vous m'aider ? Je suis perdu(e).", de: "Können Sie mir helfen? Ich habe mich verlaufen.", ipa: "pu-ve-vu me-DE? zheh swi per-DÜ" },
      { fr: "Merci beaucoup pour votre aide !", de: "Vielen Dank für Ihre Hilfe!", ipa: "mer-SI bo-KU pur vo-treh ED" }
    ],
    grammar: "Rückblick Woche 3: Die Grundfragen des Reisens — 'Où est...?' (Wo ist), 'Quelle ligne...?' (welche Linie), 'À quelle heure...?' (um wie viel Uhr), 'Est-ce que je dois...?' (muss ich). 'Merci beaucoup' ist stärker als 'Merci' — benutze es, wenn jemand dir wirklich geholfen hat.",
    practice: [
      "Simuliere eine Ankunft in einer unbekannten Stadt: Hotel, Orientierung, Transport, Sehenswürdigkeit.",
      "Übe Hilfe fragen mit Höflichkeit.",
      "Selbstcheck: Kannst du alleine einchecken, eine Zugverbindung finden und ein Restaurant finden? Dann weiter zu Woche 4!"
    ]
  },
  {
    day: 22,
    title: "Einkaufen",
    titleNative: "Faire des courses",
    focus: "Boutiquen, Märkte, Supermärkte. Frankreich hat wunderbare Wochenmärkte — der samstägliche Marktbesuch ist ein Ritual, das du erleben solltest.",
    vocab: [
      { fr: "le magasin / la boutique", de: "das Geschäft / die Boutique", ipa: "leh ma-ga-ZEN / la bu-TIK" },
      { fr: "le supermarché", de: "der Supermarkt", ipa: "leh sü-per-mar-CHE" },
      { fr: "le marché", de: "der Markt / Wochenmarkt", ipa: "leh mar-CHE" },
      { fr: "Je cherche...", de: "Ich suche...", ipa: "zheh CHERCH" },
      { fr: "Puis-je essayer ça ?", de: "Kann ich das anprobieren?", ipa: "pwi-zheh e-se-IE SA" },
      { fr: "Avez-vous ça en taille M ?", de: "Haben Sie das in Größe M?", ipa: "a-ve-vu SA on TAI em" },
      { fr: "trop cher / bon marché", de: "zu teuer / günstig", ipa: "tro CHER / bon mar-CHE" },
      { fr: "Je le prends.", de: "Ich nehme das.", ipa: "zheh leh PRON" },
      { fr: "le reçu", de: "der Kassenbon / die Quittung", ipa: "leh reh-SÜ" },
      { fr: "les horaires d'ouverture", de: "die Öffnungszeiten", ipa: "le o-RER du-ver-TÜR" }
    ],
    phrases: [
      { fr: "Je regarde, merci.", de: "Ich schaue mich nur um, danke.", ipa: "zheh reh-GARD, mer-SI" },
      { fr: "Avez-vous ça dans une autre couleur ?", de: "Haben Sie das in einer anderen Farbe?", ipa: "a-ve-vu SA don-zün O-treh ku-LÖR" },
      { fr: "C'est malheureusement trop cher pour moi.", de: "Das ist leider zu teuer für mich.", ipa: "se mal-ör-ÖZ-MON tro CHER pur MUA" },
      { fr: "Quand êtes-vous ouvert ?", de: "Wann haben Sie geöffnet?", ipa: "kon et-VU u-VER" },
      { fr: "Puis-je avoir un reçu ?", de: "Kann ich einen Kassenbon haben?", ipa: "pwi-zheh a-VUAR en reh-SÜ" }
    ],
    grammar: "In Frankreich sind Sonntage oft noch ruhig — viele kleinere Geschäfte schließen, aber die großen Supermärkte und Touristenzentren haben zunehmend geöffnet. 'Je regarde' (ich schaue) ist die perfekte Phrase, um ohne Druck in ein Geschäft zu gehen — kein Aufwand, kein Druck.",
    practice: [
      "Übe 'Je regarde, merci' bis es natürlich herauskommt.",
      "Simuliere einen vollständigen Einkauf: suchen, anprobieren, kaufen oder ablehnen.",
      "Merke dir typische Öffnungszeiten: wochentags bis 19-20h, samstags bis 18h, sonntags meist zu."
    ]
  },
  {
    day: 23,
    title: "Größen, Farben & Umkleidekabinen",
    titleNative: "Tailles, couleurs & cabines d'essayage",
    focus: "Präzises Einkaufs-Vokabular. Mit diesen Wörtern findest du genau das, was du suchst, ohne Missverständnisse.",
    vocab: [
      { fr: "rouge, bleu, vert", de: "rot, blau, grün", ipa: "RUZH, BLEU, VER" },
      { fr: "jaune, blanc, noir", de: "gelb, weiß, schwarz", ipa: "ZHON, BLON, NUAR" },
      { fr: "gris, marron, beige", de: "grau, braun, beige", ipa: "GRI, ma-RON, BEZH" },
      { fr: "grand / petit", de: "groß / klein", ipa: "GRON / peh-TI" },
      { fr: "trop grand / trop petit", de: "zu groß / zu klein", ipa: "tro GRON / tro peh-TI" },
      { fr: "la taille", de: "die Größe", ipa: "la TAI" },
      { fr: "la cabine d'essayage", de: "die Umkleidekabine", ipa: "la ka-BIN de-se-IAZH" },
      { fr: "ça me va", de: "es passt mir / es steht mir", ipa: "sa meh VA" },
      { fr: "ça me va bien", de: "es steht mir gut", ipa: "sa meh va BIEN" },
      { fr: "un autre modèle", de: "ein anderes Modell", ipa: "en O-treh mo-DEL" }
    ],
    phrases: [
      { fr: "Où est la cabine d'essayage ?", de: "Wo ist die Umkleidekabine?", ipa: "u e la ka-BIN de-se-IAZH" },
      { fr: "Avez-vous ça en noir ?", de: "Haben Sie das in Schwarz?", ipa: "a-ve-vu SA on NUAR" },
      { fr: "C'est un peu trop grand.", de: "Das ist ein bisschen zu groß.", ipa: "se en pö tro GRON" },
      { fr: "Ça me va parfaitement, je le prends.", de: "Es passt perfekt, ich nehme es.", ipa: "sa meh va par-FET-MON, zheh leh PRON" },
      { fr: "Avez-vous quelque chose de similaire en bleu ?", de: "Haben Sie etwas Ähnliches in Blau?", ipa: "a-ve-vu KEL-keh CHOZ deh si-mi-LER on BLEU" }
    ],
    grammar: "Farbadjektive im Französischen folgen normalerweise dem Nomen: 'une robe rouge' (ein rotes Kleid), 'un pantalon noir' (eine schwarze Hose). Das ist umgekehrt zum Deutschen! Ausnahmen: 'beau', 'grand', 'petit', 'bon' stehen VOR dem Nomen. Größensystem: Frankreich nutzt europäische Größen — ähnlich wie Deutschland, aber nicht identisch. Frag immer nach.",
    practice: [
      "Beschreibe fünf Kleidungsstücke mit Farbe und Größe auf Französisch.",
      "Übe die vollständige Einkaufs-Szene: reingehen, suchen, anprobieren, entscheiden.",
      "Lerne 'Ça me va parfaitement, je le prends' und 'C'est malheureusement trop grand' auswendig."
    ]
  },
  {
    day: 24,
    title: "Smalltalk",
    titleNative: "La conversation légère",
    focus: "Franzosen schätzen Konversation und Esprit. Smalltalk läuft anders als in Deutschland — Themen wie Politik, Philosophie und Essen sind willkommen; Gehalts- und Privatfragen weniger.",
    vocab: [
      { fr: "Vous êtes en vacances ?", de: "Sind Sie im Urlaub?", ipa: "vu ze-ton va-KONS" },
      { fr: "D'où venez-vous ?", de: "Woher kommen Sie?", ipa: "du ve-NE-vu" },
      { fr: "Depuis combien de temps êtes-vous ici ?", de: "Wie lange sind Sie schon hier?", ipa: "deh-PWI kom-BIEN deh TON et-vu-ZI-SI" },
      { fr: "J'aime beaucoup ici.", de: "Es gefällt mir hier sehr gut.", ipa: "zhem bo-KU I-SI" },
      { fr: "Le temps est beau aujourd'hui.", de: "Das Wetter ist schön heute.", ipa: "leh TON e BO o-zhur-DWI" },
      { fr: "Quels sites recommandez-vous ?", de: "Welche Sehenswürdigkeiten empfehlen Sie?", ipa: "kel SIT re-ko-man-DE-vu" },
      { fr: "Je trouve la France fascinante.", de: "Ich finde Frankreich faszinierend.", ipa: "zheh TRUV la FRONS fa-si-NONT" },
      { fr: "Le vin français est vraiment excellent !", de: "Der französische Wein ist wirklich ausgezeichnet!", ipa: "leh VEN fron-SE e vre-MON ek-se-LON" },
      { fr: "Avez-vous des recommandations de restaurants ?", de: "Haben Sie Restaurantempfehlungen?", ipa: "a-ve-vu de re-ko-mon-da-SION deh res-to-RON" },
      { fr: "Ce fut un plaisir de faire votre connaissance.", de: "Es war eine Freude, Sie kennenzulernen.", ipa: "seh fü en ple-ZIR deh FER vo-treh ko-ne-SONS" }
    ],
    phrases: [
      { fr: "Je suis ici depuis seulement deux jours.", de: "Ich bin erst seit zwei Tagen hier.", ipa: "zheh swi-ZI-SI deh-PWI söl-MON dö ZHUR" },
      { fr: "Je viens d'Allemagne, de Cologne.", de: "Ich komme aus Deutschland, aus Köln.", ipa: "zheh VIEN da-le-MAN-yeh, deh ko-LON-yeh" },
      { fr: "Je trouve la cuisine française fantastique.", de: "Ich finde die französische Küche fantastisch.", ipa: "zheh TRUV la kwi-ZIN fron-SEZ fon-TAS-TIK" },
      { fr: "Comment dit-on ça en français ?", de: "Wie sagt man das auf Französisch?", ipa: "ko-MON di-TON SA on fron-SE" },
      { fr: "Vous parlez très bien français !", de: "Sie sprechen sehr gut Französisch!", ipa: "vu par-LE tre BIEN fron-SE" }
    ],
    grammar: "Franzosen sind direkt, aber formell. Das 'vous' (Sie) bleibt länger als das deutsche 'Sie' — warte, bis der Franzose 'on se tutoie?' (wir können 'du' sagen?) fragt. 'Comment dit-on ça en français?' ist die beste Lernerfrage — sie zeigt deinen Willen zu lernen und Franzosen helfen fast immer gerne.",
    practice: [
      "Bereite deine Reisepräsentation vor: Land, Stadt, Dauer, erster Eindruck — alles auf Französisch.",
      "Übe Komplimente geben und empfangen.",
      "Lerne 'Comment dit-on ça en français?' auswendig — dein bester Freund beim Sprachenlernen."
    ]
  },
  {
    day: 25,
    title: "Notfälle & Gesundheit",
    titleNative: "Urgences & santé",
    focus: "Man hofft, sie nie zu brauchen. Aber diese Sätze können entscheidend sein. Lerne sie wie ein Sicherheitsnetz — besonders die Notrufnummer.",
    vocab: [
      { fr: "Au secours !", de: "Hilfe!", ipa: "o sek-KUR" },
      { fr: "Appelez un médecin !", de: "Rufen Sie einen Arzt!", ipa: "a-pe-LE en me-de-SEN" },
      { fr: "la pharmacie", de: "die Apotheke", ipa: "la far-ma-SI" },
      { fr: "l'hôpital", de: "das Krankenhaus", ipa: "lo-pi-TAL" },
      { fr: "le numéro d'urgence", de: "die Notrufnummer", ipa: "leh nü-me-RO dür-ZHONS" },
      { fr: "J'ai mal à la tête.", de: "Ich habe Kopfschmerzen.", ipa: "zhe ma-LA-LA TET" },
      { fr: "Je ne me sens pas bien.", de: "Ich fühle mich nicht gut.", ipa: "zheh neh meh SON pa BIEN" },
      { fr: "J'ai perdu mon passeport.", de: "Ich habe meinen Reisepass verloren.", ipa: "zhe per-DÜ mon pas-POR" },
      { fr: "Appelez la police !", de: "Rufen Sie die Polizei!", ipa: "a-pe-LE la po-LIS" },
      { fr: "On m'a volé mon sac.", de: "Man hat meine Tasche gestohlen.", ipa: "on ma vo-LE mon SAK" }
    ],
    phrases: [
      { fr: "Au secours ! J'ai besoin d'un médecin !", de: "Hilfe! Ich brauche einen Arzt!", ipa: "o sek-KUR! zhe beh-ZUEN den me-de-SEN" },
      { fr: "Où est la pharmacie la plus proche ?", de: "Wo ist die nächste Apotheke?", ipa: "u e la far-ma-SI la plü PROCH" },
      { fr: "J'ai mal au ventre.", de: "Ich habe Bauchschmerzen.", ipa: "zhe ma-LO VONT" },
      { fr: "Appelez le 15, s'il vous plaît.", de: "Rufen Sie bitte den Notruf 15 an.", ipa: "a-pe-LE leh KONZ, sil vu PLE" },
      { fr: "Je suis allergique à la pénicilline.", de: "Ich bin allergisch gegen Penicillin.", ipa: "zheh swi a-ler-ZHIK a la pe-ni-si-LIN" }
    ],
    grammar: "MERKE: In Frankreich (und der EU) gibt es mehrere Notrufnummern: **15** (SAMU — medizinischer Notfall), **17** (Police), **18** (Pompiers — Feuerwehr) und **112** (allgemeiner EU-Notruf). In der Apotheke (pharmacie — erkennbar am grünen Kreuz) können Apotheker bei leichten Beschwerden helfen und Medikamente ohne Rezept ausgeben.",
    practice: [
      "Lerne die Notrufnummern auswendig: 15 (Notarzt), 17 (Polizei), 18 (Feuerwehr), 112 (EU).",
      "Übe, Schmerzen zu beschreiben: Kopf, Bauch, Rücken, Zähne.",
      "Wiederhole den Diebstahl-Satz: 'On m'a volé mon sac / mon passeport / mon portefeuille.'"
    ]
  },
  {
    day: 26,
    title: "Komplimente & Reaktionen",
    titleNative: "Compliments & réactions",
    focus: "Begeisterung ausdrücken und Komplimente auf natürliche Art machen. Franzosen schätzen Aufrichtigkeit — ein echter Kommentar zum Essen oder zur Stadt ist immer willkommen.",
    vocab: [
      { fr: "Magnifique !", de: "Wunderschön / Großartig!", ipa: "man-yi-FIK" },
      { fr: "Excellent !", de: "Ausgezeichnet!", ipa: "ek-se-LON" },
      { fr: "Super !", de: "Toll / Super!", ipa: "sü-PER" },
      { fr: "Très beau / belle !", de: "Sehr schön!", ipa: "tre BO / BEL" },
      { fr: "J'adore ça.", de: "Ich liebe das.", ipa: "zha-DOR SA" },
      { fr: "C'est impressionnant.", de: "Das ist beeindruckend.", ipa: "se ten-pre-sio-NON" },
      { fr: "Merci beaucoup, c'est très gentil.", de: "Vielen Dank, das ist sehr nett.", ipa: "mer-SI bo-KU, se tre zhon-TI" },
      { fr: "Ça me touche beaucoup.", de: "Das berührt mich sehr.", ipa: "sa meh TUCH bo-KU" },
      { fr: "Je suis ravi(e) !", de: "Ich bin begeistert / entzückt!", ipa: "zheh swi ra-VI" },
      { fr: "Ce fut un vrai plaisir.", de: "Das war ein echtes Vergnügen.", ipa: "seh fü en VRE ple-ZIR" }
    ],
    phrases: [
      { fr: "Ce repas était vraiment excellent !", de: "Dieses Essen war wirklich ausgezeichnet!", ipa: "seh reh-PA e-te vre-MON ek-se-LON" },
      { fr: "Votre français est vraiment bon !", de: "Ihr Französisch ist wirklich gut!", ipa: "vo-treh fron-SE e vre-MON BON" },
      { fr: "Merci beaucoup, c'est très gentil de votre part.", de: "Vielen Dank, das ist sehr nett von Ihnen.", ipa: "mer-SI bo-KU, se tre zhon-TI deh vo-treh PAR" },
      { fr: "Cette ville est magnifique.", de: "Diese Stadt ist wunderschön.", ipa: "SET VIL e man-yi-FIK" },
      { fr: "Ce fut une soirée inoubliable.", de: "Das war ein unvergesslicher Abend.", ipa: "seh fü ün sua-RE in-u-bli-AB-leh" }
    ],
    grammar: "Das Passé composé (Vergangenheit): 'ce fut' ist die literarische Form von 'c'était' (das war). Im Alltag sagt man meistens 'c'était' + Adjektiv. 'C'était excellent/magnifique/délicieux' — drei Adjektive, die du nach jedem guten Essen einsetzen kannst. Die Franzosen sagen 'super' fast genauso häufig wie die Deutschen!",
    practice: [
      "Übe, ein aufrichtiges Kompliment über drei verschiedene Dinge zu machen.",
      "Trainiere, ein Kompliment höflich anzunehmen: 'Merci beaucoup, c'est très gentil.'",
      "Lerne deine zwei Lieblingsausdrücke für Begeisterung — und benutze sie wirklich."
    ]
  },
  {
    day: 27,
    title: "Vergangenheit & Zukunft",
    titleNative: "Passé & futur simples",
    focus: "Über Vergangenes und Geplantes sprechen. Zwei Strukturen reichen für 80% der Reisegespräche: das Passé composé für die Vergangenheit und 'aller + Infinitiv' für die Zukunft.",
    vocab: [
      { fr: "J'ai visité", de: "Ich habe besucht", ipa: "zhe vi-zi-TE" },
      { fr: "J'ai mangé", de: "Ich habe gegessen", ipa: "zhe mon-ZHE" },
      { fr: "J'ai vu", de: "Ich habe gesehen", ipa: "zhe VÜ" },
      { fr: "J'étais", de: "Ich war", ipa: "zhe-TE" },
      { fr: "Hier", de: "Gestern", ipa: "IER" },
      { fr: "Je vais visiter", de: "Ich werde besuchen / ich gehe besuchen", ipa: "zheh ve vi-zi-TE" },
      { fr: "Demain je vais", de: "Morgen werde ich", ipa: "deh-MEN zheh ve" },
      { fr: "la semaine prochaine", de: "nächste Woche", ipa: "la seh-MEN pro-CHEN" },
      { fr: "déjà", de: "schon / bereits", ipa: "de-ZHA" },
      { fr: "pas encore", de: "noch nicht", ipa: "pa-zon-KOR" }
    ],
    phrases: [
      { fr: "Hier, j'ai visité le Louvre.", de: "Gestern habe ich den Louvre besucht.", ipa: "IER, zhe vi-zi-TE leh LU-vreh" },
      { fr: "Je ne suis pas encore allé(e) à Versailles.", de: "Ich bin noch nicht in Versailles gewesen.", ipa: "zheh neh swi pa-zon-KOR a-LE a ver-SAI" },
      { fr: "Demain je vais aller à Lyon.", de: "Morgen werde ich nach Lyon fahren.", ipa: "deh-MEN zheh ve a-LE a li-ON" },
      { fr: "Avez-vous déjà vu Notre-Dame ?", de: "Haben Sie Notre-Dame schon gesehen?", ipa: "a-ve-vu de-ZHA VÜ no-treh-DAM" },
      { fr: "C'était le meilleur moment du voyage !", de: "Das war der beste Moment der Reise!", ipa: "se-te leh me-IÖR mo-MON dü vua-IAZH" }
    ],
    grammar: "Das Passé composé funktioniert wie das deutsche Perfekt: 'avoir' oder 'être' + Partizip. 'J'ai visité' (ich habe besucht) — 'avoir' + visité. 'Je suis allé(e)' (ich bin gegangen) — 'être' + allé. Bewegungsverben wie 'aller', 'venir', 'partir' nehmen 'être'. Die Futur-Abkürzung: 'aller' + Infinitiv = 'Je VAIS visiter' (ich werde besuchen).",
    practice: [
      "Erzähle deinen gestrigen Tag in 5 Sätzen auf Französisch: 'J'ai... / J'étais...'",
      "Beschreibe deine Pläne für morgen in 3 Sätzen: 'Demain je vais...'",
      "Übe: 'déjà' (schon) und 'pas encore' (noch nicht) mit verschiedenen Sehenswürdigkeiten."
    ]
  },
  {
    day: 28,
    title: "Eleganter Abschied",
    titleNative: "Prendre congé élégamment",
    focus: "Ein guter Abschied hinterlässt bleibenden Eindruck. Im Französischen gibt es viele Nuancen — von formell bis herzlich.",
    vocab: [
      { fr: "Au revoir", de: "Auf Wiedersehen (formell)", ipa: "o-reh-VUAR" },
      { fr: "Salut", de: "Tschüss (informell)", ipa: "sa-LÜ" },
      { fr: "À bientôt !", de: "Bis bald!", ipa: "a-bien-TO" },
      { fr: "À demain !", de: "Bis morgen!", ipa: "a deh-MEN" },
      { fr: "À la semaine prochaine !", de: "Bis nächste Woche!", ipa: "a la seh-MEN pro-CHEN" },
      { fr: "Bonne soirée !", de: "Guten Abend noch!", ipa: "bon sua-RE" },
      { fr: "Bon week-end !", de: "Schönes Wochenende!", ipa: "bon wi-KEND" },
      { fr: "Bon voyage !", de: "Gute Reise!", ipa: "bon vua-IAZH" },
      { fr: "Bonne continuation !", de: "Alles Gute / Mach's gut!", ipa: "bon kon-ti-nua-SION" },
      { fr: "Ce fut un plaisir.", de: "Es war ein Vergnügen.", ipa: "seh fü en ple-ZIR" }
    ],
    phrases: [
      { fr: "Ce fut un vrai plaisir de vous rencontrer.", de: "Es war ein echtes Vergnügen, Sie kennenzulernen.", ipa: "seh fü en VRE ple-ZIR deh vu ron-kon-TRE" },
      { fr: "J'espère qu'on se reverra bientôt.", de: "Ich hoffe, wir sehen uns bald wieder.", ipa: "zhes-PER kon seh reh-ve-RA bien-TO" },
      { fr: "Merci pour tout !", de: "Danke für alles!", ipa: "mer-SI pur TU" },
      { fr: "Au revoir et bon voyage !", de: "Auf Wiedersehen und gute Reise!", ipa: "o-reh-VUAR e bon vua-IAZH" },
      { fr: "Prenez soin de vous !", de: "Pass auf dich auf! / Mach's gut!", ipa: "preh-NE SUEN deh VU" }
    ],
    grammar: "Die 'Bon/Bonne + Nomen'-Formel ist sehr produktiv: 'Bon voyage', 'Bonne soirée', 'Bon week-end', 'Bonne chance', 'Bon appétit'... Du kannst fast jedes Nomen anhängen, um Gute Wünsche zu formulieren. 'Prenez soin de vous' (Pass auf dich auf) ist herzlich und wird bei längeren Abschieden verwendet.",
    practice: [
      "Übe Abschiedsformeln für drei verschiedene Kontexte: Restaurant, Hotel, neue Bekanntschaft.",
      "Lerne drei Abschiedsformeln je nach Tageszeit: Abend, Wochenende, Reise.",
      "Trainiere, ein vollständiges Gespräch abzuschließen: letztes Kompliment + passender Abschied."
    ]
  },
  {
    day: 29,
    title: "Alles zusammen",
    titleNative: "Tout assembler",
    focus: "Heute simulierst du einen kompletten Tag in Paris oder Lyon: Hôtel, Transport, Besichtigung, Restaurant, Shopping, Gespräch mit Einheimischen. Alles, was du gelernt hast — in Aktion.",
    vocab: [
      { fr: "le voyage", de: "die Reise", ipa: "leh vua-IAZH" },
      { fr: "le séjour", de: "der Aufenthalt", ipa: "leh se-ZHUR" },
      { fr: "l'expérience", de: "das Erlebnis / die Erfahrung", ipa: "lek-spe-RIONS" },
      { fr: "inoubliable", de: "unvergesslich", ipa: "in-u-bli-AB-leh" },
      { fr: "recommander", de: "empfehlen", ipa: "reh-ko-mon-DE" },
      { fr: "revenir", de: "zurückkommen / wiederkommen", ipa: "reh-veh-NIR" },
      { fr: "la prochaine fois", de: "das nächste Mal", ipa: "la pro-CHEN FUAS" },
      { fr: "J'ai hâte.", de: "Ich freue mich darauf.", ipa: "zhe AT" },
      { fr: "La France me plaît.", de: "Frankreich gefällt mir.", ipa: "la FRONS meh PLE" },
      { fr: "Je reviendrai.", de: "Ich werde wiederkommen.", ipa: "zheh reh-vien-DRE" }
    ],
    phrases: [
      { fr: "Ce séjour était inoubliable.", de: "Dieser Aufenthalt war unvergesslich.", ipa: "seh se-ZHUR e-te in-u-bli-AB-leh" },
      { fr: "La France me plaît vraiment beaucoup.", de: "Frankreich gefällt mir wirklich sehr.", ipa: "la FRONS meh PLE vre-MON bo-KU" },
      { fr: "Je reviendrai certainement.", de: "Ich werde sicher wiederkommen.", ipa: "zheh reh-vien-DRE ser-TEN-MON" },
      { fr: "Pourriez-vous me donner une dernière recommandation ?", de: "Könnten Sie mir noch eine letzte Empfehlung geben?", ipa: "pu-rie-vu meh do-NE ün der-NYER reh-ko-mon-da-SION" },
      { fr: "J'ai hâte d'y retourner !", de: "Ich freue mich darauf, dorthin zurückzukehren!", ipa: "zhe AT di reh-tur-NE" }
    ],
    grammar: "Gesamtrückblick: Die drei Säulen des Reise-Französisch — 1) Höflichkeit ('bonjour', 'merci', 's'il vous plaît', 'excusez-moi'); 2) Die Grundfragen ('Où est...?', 'Combien...?', 'Avez-vous...?', 'Pouvez-vous...?'); 3) Die Notbremse ('Je ne comprends pas', 'Plus lentement', 'Comment dit-on...?'). Diese 15 Elemente decken 70% aller Situationen ab.",
    practice: [
      "Spiele den vollständigen imaginären Tag laut durch: Aufstehen → Frühstück → Museum → Mittagessen → Shopping → Abendessen → Abschied.",
      "Stoppe die Uhr: Kannst du 10 Situationen in unter 5 Minuten durchspielen?",
      "Notiere die 5 Wörter oder Phrasen, die du persönlich am meisten brauchen wirst — und lerne sie auswendig."
    ]
  },
  {
    day: 30,
    title: "Frankreich in der Praxis — letzte Tipps",
    titleNative: "La France en pratique — astuces finales",
    focus: "Das kulturelle Wissen, das den Unterschied macht zwischen einem unbedarften Touristen und einem eleganten Gast. Was die Reiseführer oft weglassen.",
    vocab: [
      { fr: "la politesse", de: "die Höflichkeit", ipa: "la po-li-TES" },
      { fr: "l'apéritif", de: "der Aperitif (Drinks vor dem Essen)", ipa: "la-pe-ri-TIF" },
      { fr: "la brasserie", de: "die Brasserie (großes Bistro)", ipa: "la bra-se-RI" },
      { fr: "le marché", de: "der (Wochen-)Markt", ipa: "leh mar-CHE" },
      { fr: "le pourboire", de: "das Trinkgeld", ipa: "leh pur-BUAR" },
      { fr: "la grève", de: "der Streik", ipa: "la GREV" },
      { fr: "la bise", de: "die Wangenkuss-Begrüßung", ipa: "la BIZ" },
      { fr: "Santé !", de: "Prost! (beim Anstoßen)", ipa: "son-TE" },
      { fr: "Bienvenue !", de: "Willkommen!", ipa: "bien-veh-NÜ" },
      { fr: "Bonne chance !", de: "Viel Erfolg / Viel Glück!", ipa: "bon CHONS" }
    ],
    phrases: [
      { fr: "Avez-vous de l'eau du robinet, s'il vous plaît ?", de: "Haben Sie Leitungswasser, bitte?", ipa: "a-ve-vu deh lo dü ro-bi-NE, sil vu PLE" },
      { fr: "Où se trouve le marché le plus proche ?", de: "Wo ist der nächste Wochenmarkt?", ipa: "u seh TRUV leh mar-CHE leh plü PROCH" },
      { fr: "À votre santé ! Santé !", de: "Auf Ihr Wohl! Prost!", ipa: "a vo-treh son-TE! son-TE" },
      { fr: "Y a-t-il une grève aujourd'hui ?", de: "Gibt es heute einen Streik?", ipa: "i-a-TIL ün GREV o-zhur-DWI" },
      { fr: "Ce fut un séjour merveilleux. Je reviendrai !", de: "Das war ein wundervoller Aufenthalt. Ich komme wieder!", ipa: "seh fü en se-ZHUR mer-VE-IÖ. zheh reh-vien-DRE" }
    ],
    grammar: "Letzte Praxistipps: 1) Leitungswasser ('eau du robinet') ist kostenlos im Restaurant — du MUSST nicht die teure Mineralwasserflasche nehmen. 2) Trinkgeld ist optional — 5-10% für guten Service. 3) 'La bise' (Wangenkuss-Begrüßung) variiert je nach Region: 1, 2 oder sogar 4 Mal! Folge dem Einheimischen. 4) Streiks (grèves) können Transport lahmlegen — prüfe die Nachrichten. 5) Das 'Bonjour-Regel': immer zuerst grüßen.",
    practice: [
      "Nenne die 5 wichtigsten Phrasen, die du aus diesen 30 Tagen mitnimmst.",
      "Schreibe eine imaginäre Postkarte aus Frankreich — komplett auf Französisch.",
      "Herzlichen Glückwunsch: Du kannst bestellen, dich fortbewegen, vorstellen, Probleme lösen und echte Gespräche führen. Bonne chance sur ta route!"
    ]
  }
];
