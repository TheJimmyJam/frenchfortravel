// Italian Course Data
// it = ISO 639-1 code for Italian (Italiano)
// Standard Italian — Roman/Tuscan base

const COURSE_IT = [
  {
    day: 1, title: "Greetings & Essentials", titleNative: "Saluti & Essenziali",
    focus: "The words you'll use every single day in Italy.",
    vocab: [
      { fr: "Ciao",          ipa: "/ˈtʃao/ — CHOW",                en: "Hi / Bye (informal)" },
      { fr: "Buongiorno",    ipa: "/ˌbwɔnˈdʒorno/ — bwon-JOR-noh", en: "Good morning / Good day" },
      { fr: "Buonasera",     ipa: "/ˌbwɔnaˈsɛra/ — bwon-ah-SEH-rah", en: "Good evening" },
      { fr: "Buonanotte",    ipa: "/ˌbwɔnaˈnɔtte/ — bwon-ah-NOT-teh", en: "Good night" },
      { fr: "Arrivederci",   ipa: "/arˌriveˈdertʃi/ — ar-ree-veh-DEHR-chee", en: "Goodbye (formal)" },
      { fr: "Sì",            ipa: "/si/ — see",                     en: "Yes" },
      { fr: "No",            ipa: "/nɔ/ — noh",                     en: "No" },
      { fr: "Grazie",        ipa: "/ˈɡrattsje/ — GRAT-tsyeh",       en: "Thank you" }
    ],
    phrases: [
      { fr: "Buongiorno! Come sta?",      ipa: "bwon-JOR-noh, KOH-meh stah",           en: "Good morning! How are you? (formal)" },
      { fr: "Come stai?",                 ipa: "KOH-meh STY",                           en: "How are you? (informal)" },
      { fr: "Bene, grazie.",              ipa: "BEH-neh, GRAT-tsyeh",                   en: "Fine, thank you." },
      { fr: "E tu?",                      ipa: "eh too",                                en: "And you? (informal)" },
      { fr: "Così così.",                 ipa: "koh-ZEE koh-ZEE",                       en: "So-so." },
      { fr: "A presto!",                  ipa: "ah PREH-stoh",                          en: "See you soon!" },
      { fr: "A domani!",                  ipa: "ah doh-MAH-nee",                        en: "See you tomorrow!" },
      { fr: "Buona giornata!",            ipa: "BWOH-nah jor-NAH-tah",                 en: "Have a good day!" }
    ],
    grammar: "Italian greetings change with time of day. 'Buongiorno' works until about 4–5pm, then switch to 'Buonasera'. 'Ciao' is informal — use it with friends and peers but not with shopkeepers or elders on first meeting. Two kisses on the cheek (starting left) is standard among friends.",
    practice: [
      "Practice the three time-of-day greetings: Buongiorno, Buonasera, Buonanotte.",
      "Say Ciao to a friend, Buongiorno to a shopkeeper — feel the difference.",
      "Learn Grazie and Prego (you're welcome) as a pair."
    ]
  },
  {
    day: 2, title: "Polite Phrases & Reactions", titleNative: "Frasi Gentili & Reazioni",
    focus: "Please, sorry, excuse me — the social currency of Italy.",
    vocab: [
      { fr: "Per favore",     ipa: "/per faˈvore/ — pehr fah-VOH-reh",  en: "Please" },
      { fr: "Prego",          ipa: "/ˈprɛɡo/ — PREH-goh",               en: "You're welcome / Go ahead" },
      { fr: "Scusi",          ipa: "/ˈskuzi/ — SKOO-zee",                en: "Excuse me (formal)" },
      { fr: "Mi dispiace",    ipa: "/mi disˈpjatʃe/ — mee dee-SPYAH-cheh", en: "I'm sorry" },
      { fr: "Non c'è problema", ipa: "/non tʃɛ ˈprɔblema/ — non cheh PROH-bleh-mah", en: "No problem" },
      { fr: "Certo",          ipa: "/ˈtʃɛrto/ — CHEHR-toh",             en: "Of course / Certainly" },
      { fr: "Esatto",         ipa: "/eˈzatto/ — eh-ZAHT-toh",           en: "Exactly / That's right" },
      { fr: "Capito",         ipa: "/kaˈpito/ — kah-PEE-toh",           en: "Understood / Got it" }
    ],
    phrases: [
      { fr: "Un caffè, per favore.",      ipa: "oon kahf-FEH, pehr fah-VOH-reh",       en: "A coffee, please." },
      { fr: "Grazie mille.",              ipa: "GRAT-tsyeh MEEL-leh",                   en: "Thank you very much." },
      { fr: "Prego, si accomodi.",        ipa: "PREH-goh, see ah-KOH-moh-dee",          en: "Please, make yourself comfortable." },
      { fr: "Può ripetere?",              ipa: "pwoh ree-PEH-teh-reh",                  en: "Can you repeat?" },
      { fr: "Parli più lentamente.",      ipa: "PAHR-lee pyoo len-tah-MEN-teh",         en: "Speak more slowly." },
      { fr: "Non capisco.",               ipa: "non kah-PEE-skoh",                      en: "I don't understand." },
      { fr: "Può scrivere?",              ipa: "pwoh skree-VEH-reh",                    en: "Can you write it?" },
      { fr: "Con piacere.",               ipa: "kon pyah-CHEH-reh",                     en: "With pleasure." }
    ],
    grammar: "'Scusi' is formal (strangers, shops, elders). 'Scusa' is informal (friends). 'Prego' does triple duty: you're welcome, please (go ahead), and it's used to get someone's attention ('Prego?' = 'Yes? / Can I help you?'). Italians use it constantly.",
    practice: [
      "Use Per favore at the end of every order today.",
      "Practice Scusi to get someone's attention — use it entering every shop.",
      "Learn Mi dispiace and Non c'è problema as a pair."
    ]
  },
  {
    day: 3, title: "Introductions", titleNative: "Presentarsi",
    focus: "Tell people who you are.",
    vocab: [
      { fr: "Mi chiamo",       ipa: "/mi ˈkjamo/ — mee KYAH-moh",          en: "My name is..." },
      { fr: "Sono di",         ipa: "/ˈsono di/ — SOH-noh dee",             en: "I'm from..." },
      { fr: "americano/a",     ipa: "/ameriˈkano/ — ah-meh-ree-KAH-noh",   en: "American" },
      { fr: "turista",         ipa: "/tuˈrista/ — too-REE-stah",            en: "tourist" },
      { fr: "Piacere",         ipa: "/pjaˈtʃɛre/ — pyah-CHEH-reh",         en: "Nice to meet you" },
      { fr: "Parla inglese?",  ipa: "/ˈparla iŋˈɡleze/ — PAHR-lah een-GLEH-zeh", en: "Do you speak English?" },
      { fr: "Un po'",          ipa: "/un ˈpɔ/ — oon poh",                  en: "A little" },
      { fr: "marito / moglie", ipa: "/maˈrito/ /ˈmoʎʎe/ — mah-REE-toh / MOHL-yeh", en: "husband / wife" }
    ],
    phrases: [
      { fr: "Mi chiamo ___.",             ipa: "mee KYAH-moh ___",                     en: "My name is ___." },
      { fr: "Sono di Dallas.",            ipa: "SOH-noh dee Dallas",                    en: "I'm from Dallas." },
      { fr: "Parlo un po' di italiano.",  ipa: "PAHR-loh oon poh dee ee-tahl-YAH-noh", en: "I speak a little Italian." },
      { fr: "Parla inglese?",             ipa: "PAHR-lah een-GLEH-zeh",                en: "Do you speak English?" },
      { fr: "Sono qui in vacanza.",       ipa: "SOH-noh kwee een vah-KAN-tsah",        en: "I'm here on vacation." },
      { fr: "Quanti anni ha?",            ipa: "KWAN-tee AHN-nee ah",                  en: "How old are you? (formal)" },
      { fr: "È la prima volta in Italia.",ipa: "eh lah PREE-mah VOHL-tah een ee-TAH-lyah", en: "It's my first time in Italy." },
      { fr: "L'Italia è bellissima.",     ipa: "lee-TAH-lyah eh bel-LEES-see-mah",     en: "Italy is beautiful." }
    ],
    grammar: "Italian nouns have gender: 'americano' (m) / 'americana' (f). You'll need to match your adjective to your gender. Don't overthink it — just pick one and go. Italians will love you for trying. 'Piacere' literally means 'pleasure' and is the standard 'nice to meet you.'",
    practice: [
      "Write and say: Mi chiamo [name]. Sono di [city]. Piacere.",
      "Practice Parlo un po' di italiano — it'll get a warm response every time.",
      "Learn È la prima volta in Italia — Italians will immediately adopt you."
    ]
  },
  {
    day: 4, title: "Numbers 1–10", titleNative: "Numeri 1–10",
    focus: "Count to ten. Everything builds on this.",
    vocab: [
      { fr: "uno",    ipa: "/ˈuno/ — OO-noh",       en: "1" },
      { fr: "due",    ipa: "/ˈdue/ — DOO-eh",        en: "2" },
      { fr: "tre",    ipa: "/ˈtre/ — treh",           en: "3" },
      { fr: "quattro",ipa: "/ˈkwattro/ — KWAT-troh", en: "4" },
      { fr: "cinque", ipa: "/ˈtʃiŋkwe/ — CHEEN-kweh",en: "5" },
      { fr: "sei",    ipa: "/ˈsɛi/ — say",            en: "6" },
      { fr: "sette",  ipa: "/ˈsɛtte/ — SET-teh",      en: "7" },
      { fr: "otto",   ipa: "/ˈɔtto/ — OT-toh",        en: "8" },
      { fr: "nove",   ipa: "/ˈnɔve/ — NOH-veh",       en: "9" },
      { fr: "dieci",  ipa: "/ˈdjɛtʃi/ — DYEH-chee",  en: "10" }
    ],
    phrases: [
      { fr: "Due caffè, per favore.",     ipa: "DOO-eh kahf-FEH, pehr fah-VOH-reh",    en: "Two coffees, please." },
      { fr: "Tre biglietti, per favore.", ipa: "treh beel-YET-tee, pehr fah-VOH-reh",  en: "Three tickets, please." },
      { fr: "Per quattro persone.",       ipa: "pehr KWAT-troh pehr-SOH-neh",           en: "For four people." },
      { fr: "Cinque minuti.",             ipa: "CHEEN-kweh mee-NOO-tee",                en: "Five minutes." },
      { fr: "Dieci euro.",                ipa: "DYEH-chee EH-oo-roh",                   en: "Ten euros." },
      { fr: "Quanto costa?",              ipa: "KWAN-toh KOH-stah",                     en: "How much does it cost?" },
      { fr: "Il numero è...?",            ipa: "eel NOO-meh-roh eh",                    en: "The number is...?" },
      { fr: "Può scriverlo?",             ipa: "pwoh skree-VEHR-loh",                   en: "Can you write it down?" }
    ],
    grammar: "Italian numbers are mostly phonetic for English speakers. Note: 'tre' (3) — the final E is pronounced. 'Cinque' (5) — the QU sounds like 'kw'. Double consonants (otto, sette) are noticeably held: 'OT-toh' with a real pause on the T. That's a key feature of Italian pronunciation.",
    practice: [
      "Count to 10 out loud three times, holding double consonants.",
      "Practice ordering: Un/Due/Tre ___, per favore.",
      "Quiz yourself: say the number before checking."
    ]
  },
  {
    day: 5, title: "Numbers 11–100", titleNative: "Numeri 11–100",
    focus: "Prices, addresses, ages.",
    vocab: [
      { fr: "undici",    ipa: "/ˈunditʃi/ — OON-dee-chee",        en: "11" },
      { fr: "dodici",    ipa: "/ˈdɔditʃi/ — DOH-dee-chee",        en: "12" },
      { fr: "venti",     ipa: "/ˈventi/ — VEN-tee",                en: "20" },
      { fr: "ventuno",   ipa: "/venˈtuno/ — ven-TOO-noh",          en: "21" },
      { fr: "trenta",    ipa: "/ˈtrenta/ — TREN-tah",              en: "30" },
      { fr: "quaranta",  ipa: "/kwaˈranta/ — kwah-RAN-tah",        en: "40" },
      { fr: "cinquanta", ipa: "/tʃiŋˈkwanta/ — cheen-KWAN-tah",   en: "50" },
      { fr: "cento",     ipa: "/ˈtʃento/ — CHEN-toh",              en: "100" }
    ],
    phrases: [
      { fr: "Venti euro, per favore.",    ipa: "VEN-tee EH-oo-roh, pehr fah-VOH-reh",  en: "Twenty euros, please." },
      { fr: "Quant'è?",                  ipa: "kwan-TEH",                               en: "How much is it?" },
      { fr: "È troppo caro.",             ipa: "eh TROP-poh KAH-roh",                   en: "It's too expensive." },
      { fr: "Ha qualcosa di meno caro?",  ipa: "ah kwal-KOH-zah dee MEH-noh KAH-roh",  en: "Do you have something cheaper?" },
      { fr: "Cinquanta centesimi.",       ipa: "cheen-KWAN-tah chen-TEH-zee-mee",       en: "Fifty cents." },
      { fr: "Può fare uno sconto?",       ipa: "pwoh FAH-reh OO-noh SKON-toh",          en: "Can you give a discount?" },
      { fr: "Lo prendo.",                 ipa: "loh PREN-doh",                           en: "I'll take it." },
      { fr: "Tenga il resto.",            ipa: "TEN-gah eel RES-toh",                    en: "Keep the change." }
    ],
    grammar: "Italian drops the vowel in 21, 28, 31, 38 etc.: 'ventuno' not 'venti uno', 'ventotto' not 'venti otto'. From 11–19 the pattern is mostly regular: undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove. It's worth memorizing the teens as a block.",
    practice: [
      "Count by tens to 100: dieci, venti, trenta...",
      "Practice saying prices: 15, 22, 47, 99 euro.",
      "Learn Quant'è? and È troppo caro — market essentials."
    ]
  },
  {
    day: 6, title: "Days, Time & Dates", titleNative: "Giorni, Ora & Date",
    focus: "Schedule, reserve, and navigate time.",
    vocab: [
      { fr: "oggi",      ipa: "/ˈɔddʒi/ — OD-jee",           en: "today" },
      { fr: "domani",    ipa: "/doˈmani/ — doh-MAH-nee",      en: "tomorrow" },
      { fr: "ieri",      ipa: "/ˈjɛri/ — YEH-ree",            en: "yesterday" },
      { fr: "lunedì",    ipa: "/luneˈdi/ — loo-neh-DEE",      en: "Monday" },
      { fr: "mercoledì", ipa: "/merkoˈledi/ — mehr-koh-leh-DEE", en: "Wednesday" },
      { fr: "venerdì",   ipa: "/venerˈdi/ — veh-nehr-DEE",    en: "Friday" },
      { fr: "sabato",    ipa: "/ˈsabato/ — SAH-bah-toh",      en: "Saturday" },
      { fr: "domenica",  ipa: "/doˈmenika/ — doh-MEH-nee-kah",en: "Sunday" }
    ],
    phrases: [
      { fr: "Che ore sono?",              ipa: "keh OH-reh SOH-noh",                    en: "What time is it?" },
      { fr: "Sono le tre.",               ipa: "SOH-noh leh treh",                       en: "It's three o'clock." },
      { fr: "A che ora apre?",            ipa: "ah keh OH-rah AH-preh",                  en: "At what time do you open?" },
      { fr: "A che ora chiude?",          ipa: "ah keh OH-rah KYOO-deh",                 en: "At what time do you close?" },
      { fr: "Domani mattina.",            ipa: "doh-MAH-nee maht-TEE-nah",               en: "Tomorrow morning." },
      { fr: "Oggi pomeriggio.",           ipa: "OD-jee poh-meh-REED-joh",               en: "This afternoon." },
      { fr: "Ho una prenotazione per oggi.", ipa: "oh OO-nah preh-noh-tahts-YOH-neh pehr OD-jee", en: "I have a reservation for today." },
      { fr: "Per quante notti?",          ipa: "pehr KWAN-teh NOT-tee",                  en: "For how many nights?" }
    ],
    grammar: "Italian days of the week are not capitalized (unlike English). The week starts on Monday (lunedì). Days ending in -dì have the stress on the final syllable: luneDÌ, marteDÌ, mercoleDÌ, gioveDÌ, venerDÌ. Saturday (sabato) and Sunday (domenica) are the exceptions.",
    practice: [
      "Say today's day of the week in Italian.",
      "Practice Che ore sono? and answer with the current time.",
      "Learn A che ora apre/chiude — you'll use it constantly."
    ]
  },
  {
    day: 7, title: "Week 1 Review", titleNative: "Ripasso Settimana 1",
    focus: "Lock in everything from days 1–6.",
    vocab: [
      { fr: "Capisce?",         ipa: "/kaˈpiʃe/ — kah-PEE-sheh",          en: "Do you understand? (formal)" },
      { fr: "Capisco.",         ipa: "/kaˈpisko/ — kah-PEE-skoh",          en: "I understand." },
      { fr: "Non capisco.",     ipa: "/non kaˈpisko/ — non kah-PEE-skoh",  en: "I don't understand." },
      { fr: "Parli lentamente.", ipa: "/ˈparli lenˈtamente/ — PAHR-lee len-tah-MEN-teh", en: "Speak slowly." },
      { fr: "Come si dice?",    ipa: "/ˈkome si ˈditʃe/ — KOH-meh see DEE-cheh", en: "How do you say it?" },
      { fr: "Cosa vuol dire?",  ipa: "/ˈkoza vwɔl ˈdire/ — KOH-zah vwol DEE-reh", en: "What does it mean?" },
      { fr: "Può scrivere?",    ipa: "/ˈpwɔ ˈskrivere/ — pwoh SKREE-veh-reh", en: "Can you write it?" },
      { fr: "Ancora una volta.", ipa: "/aŋˈkora ˈuna ˈvolta/ — ahn-KOH-rah OO-nah VOHL-tah", en: "One more time." }
    ],
    phrases: [
      { fr: "Un'altra volta, per favore.", ipa: "oon-AHL-trah VOHL-tah, pehr fah-VOH-reh", en: "One more time, please." },
      { fr: "Come si dice 'grazie' in inglese?", ipa: "KOH-meh see DEE-cheh een een-GLEH-zeh", en: "How do you say 'grazie' in English?" },
      { fr: "Sto imparando l'italiano.", ipa: "stoh eem-pah-RAHN-doh lee-tahl-YAH-noh", en: "I'm learning Italian." },
      { fr: "L'italiano è bellissimo.",   ipa: "lee-tahl-YAH-noh eh bel-LEES-see-moh",   en: "Italian is beautiful." },
      { fr: "Ma è difficile!",            ipa: "mah eh dee-FEE-chee-leh",                 en: "But it's difficult!" },
      { fr: "Ci vuole pazienza.",         ipa: "chee VWOH-leh paht-TSYEN-tsah",           en: "It takes patience." },
      { fr: "Piano piano.",               ipa: "PYAH-noh PYAH-noh",                        en: "Little by little." },
      { fr: "Ce la faccio!",              ipa: "cheh lah FAHT-choh",                       en: "I can do it!" }
    ],
    grammar: "Italian pronunciation tip: C before E or I is 'ch' (ciao, certo, cinque). C before A, O, U is 'k' (caffè, come, curo). G before E or I is 'j' (gelato, giro). G before A, O, U is hard 'g' (grazie, gondola). This pattern is completely regular — once you know it, you can read any Italian word.",
    practice: [
      "Review flashcards from Days 1–6.",
      "Say the C-rule out loud five times with examples.",
      "Have a 30-second exchange using only Week 1 vocabulary."
    ]
  },
  {
    day: 8, title: "At the Café — Drinks", titleNative: "Al Caffè — Bevande",
    focus: "Order coffee like an Italian. It's an art form.",
    vocab: [
      { fr: "caffè",          ipa: "/kafˈfɛ/ — kahf-FEH",            en: "espresso" },
      { fr: "cappuccino",     ipa: "/kapuˈttʃino/ — kah-poo-CHEE-noh", en: "cappuccino" },
      { fr: "caffè macchiato",ipa: "/kafˈfɛ makˈkjato/ — kahf-FEH mahk-YAH-toh", en: "espresso with a dash of milk" },
      { fr: "caffè latte",    ipa: "/kafˈfɛ ˈlatte/ — kahf-FEH LAHT-teh", en: "milk coffee" },
      { fr: "acqua",          ipa: "/ˈakkwa/ — AHK-kwah",            en: "water" },
      { fr: "vino",           ipa: "/ˈvino/ — VEE-noh",              en: "wine" },
      { fr: "birra",          ipa: "/ˈbirra/ — BEER-rah",            en: "beer" },
      { fr: "succo di frutta",ipa: "/ˈsukko di ˈfrutta/ — SOOK-koh dee FROOT-tah", en: "fruit juice" }
    ],
    phrases: [
      { fr: "Un caffè, per favore.",      ipa: "oon kahf-FEH, pehr fah-VOH-reh",       en: "An espresso, please." },
      { fr: "Con zucchero o senza?",      ipa: "kon TSOOK-keh-roh oh SEN-tsah",         en: "With sugar or without?" },
      { fr: "Senza zucchero, grazie.",    ipa: "SEN-tsah TSOOK-keh-roh, GRAT-tsyeh",   en: "Without sugar, thank you." },
      { fr: "Un'acqua naturale.",         ipa: "oon-AHK-kwah nah-too-RAH-leh",          en: "A still water." },
      { fr: "Gassata o naturale?",        ipa: "gahs-SAH-tah oh nah-too-RAH-leh",       en: "Sparkling or still?" },
      { fr: "Il menù, per favore.",       ipa: "eel meh-NOO, pehr fah-VOH-reh",         en: "The menu, please." },
      { fr: "Posso avere il conto?",      ipa: "POS-soh ah-VEH-reh eel KON-toh",       en: "Can I have the bill?" },
      { fr: "Si beve al banco?",          ipa: "see BEH-veh ahl BAHN-koh",              en: "Do you drink at the bar?" }
    ],
    grammar: "In Italy, a 'caffè' is always an espresso — short, strong, and drunk standing at the bar. Cappuccino is a breakfast drink; ordering one after noon marks you as a tourist. 'Al banco' (at the counter) is cheaper than sitting at a table — a cultural and economic norm in Italian cafés.",
    practice: [
      "Practice: Un caffè, per favore. Then: Un cappuccino, senza zucchero.",
      "Learn Gassata o naturale? — you'll be asked this every meal.",
      "Memorize Posso avere il conto? — essential end-of-meal phrase."
    ]
  },
  {
    day: 9, title: "At the Café — Food", titleNative: "Al Caffè — Cibo",
    focus: "Breakfast pastries and café snacks.",
    vocab: [
      { fr: "cornetto",    ipa: "/korˈnetto/ — kor-NET-toh",        en: "croissant (Italian style)" },
      { fr: "brioche",     ipa: "/briˈɔʃ/ — bree-OSH",             en: "sweet bun / brioche" },
      { fr: "tramezzino",  ipa: "/trametˈtsino/ — trah-met-TSEE-noh", en: "Italian crustless sandwich" },
      { fr: "toast",       ipa: "/tost/ — tohst",                    en: "toasted sandwich" },
      { fr: "pane",        ipa: "/ˈpane/ — PAH-neh",                en: "bread" },
      { fr: "burro",       ipa: "/ˈburro/ — BOOR-roh",              en: "butter" },
      { fr: "marmellata",  ipa: "/marmelˈlata/ — mar-mel-LAH-tah",  en: "jam" },
      { fr: "pasticceria", ipa: "/pastiˈtʃeria/ — pah-stee-CHEH-ryah", en: "pastry shop" }
    ],
    phrases: [
      { fr: "Un cornetto e un caffè.",    ipa: "oon kor-NET-toh eh oon kahf-FEH",       en: "A cornetto and an espresso." },
      { fr: "Vuoto o con crema?",         ipa: "VWOH-toh oh kon KREH-mah",              en: "Plain or with cream?" },
      { fr: "Con marmellata, grazie.",    ipa: "kon mar-mel-LAH-tah, GRAT-tsyeh",       en: "With jam, please." },
      { fr: "Cos'è questo?",              ipa: "koh-ZEH KWES-toh",                      en: "What is this?" },
      { fr: "Molto buono!",               ipa: "MOHL-toh BWOH-noh",                     en: "Very good!" },
      { fr: "Un altro, per favore.",      ipa: "oon AHL-troh, pehr fah-VOH-reh",        en: "Another one, please." },
      { fr: "Basta così, grazie.",        ipa: "BAH-stah koh-ZEE, GRAT-tsyeh",          en: "That's enough, thank you." },
      { fr: "Ha qualcosa di dolce?",      ipa: "ah kwal-KOH-zah dee DOHL-cheh",         en: "Do you have anything sweet?" }
    ],
    grammar: "Italian breakfast is light: an espresso and a cornetto, standing at the bar. The cornetto is softer and sweeter than a French croissant. Asking 'Vuoto o con crema/marmellata/Nutella?' is standard. Italians eat breakfast between 7–9am and rarely brunch.",
    practice: [
      "Order the full Italian breakfast: Un cornetto con marmellata e un caffè.",
      "Practice Molto buono! as your go-to compliment.",
      "Learn Basta così — polite way to say you're done."
    ]
  },
  {
    day: 10, title: "Restaurant Ordering", titleNative: "Ordinare al Ristorante",
    focus: "Sit down, order, eat magnificently.",
    vocab: [
      { fr: "ristorante",    ipa: "/ristoˈrante/ — rees-toh-RAN-teh",  en: "restaurant" },
      { fr: "menù",          ipa: "/meˈnu/ — meh-NOO",                 en: "menu" },
      { fr: "cameriere/a",   ipa: "/kameˈrjɛre/ — kah-meh-RYEH-reh",  en: "waiter / waitress" },
      { fr: "tavolo",        ipa: "/ˈtavolo/ — TAH-voh-loh",           en: "table" },
      { fr: "conto",         ipa: "/ˈkonto/ — KON-toh",               en: "bill / check" },
      { fr: "prenotazione",  ipa: "/prenotaˈtsjone/ — preh-noh-tahts-YOH-neh", en: "reservation" },
      { fr: "primo",         ipa: "/ˈprimo/ — PREE-moh",              en: "first course (pasta/risotto)" },
      { fr: "secondo",       ipa: "/seˈkondo/ — seh-KON-doh",         en: "second course (meat/fish)" }
    ],
    phrases: [
      { fr: "Ho una prenotazione.",       ipa: "oh OO-nah preh-noh-tahts-YOH-neh",     en: "I have a reservation." },
      { fr: "Un tavolo per due.",         ipa: "oon TAH-voh-loh pehr DOO-eh",           en: "A table for two." },
      { fr: "Il menù, per favore.",       ipa: "eel meh-NOO, pehr fah-VOH-reh",         en: "The menu, please." },
      { fr: "Prendo questo.",             ipa: "PREN-doh KWES-toh",                     en: "I'll have this." },
      { fr: "Cosa consiglia?",            ipa: "KOH-zah kon-SEEL-yah",                  en: "What do you recommend?" },
      { fr: "Il conto, per favore.",      ipa: "eel KON-toh, pehr fah-VOH-reh",         en: "The bill, please." },
      { fr: "Il servizio è incluso?",     ipa: "eel sehr-VEETS-yoh eh een-KLOO-zoh",    en: "Is service included?" },
      { fr: "Era tutto ottimo.",          ipa: "EH-rah TOOT-toh OT-tee-moh",            en: "Everything was excellent." }
    ],
    grammar: "Italian meals have a structure: antipasto → primo (pasta or risotto) → secondo (meat/fish) + contorno (side) → dolce → caffè. You don't have to order every course — many locals skip primo or secondo at lunch. The bill won't arrive until you ask — it's considered rude to rush guests.",
    practice: [
      "Role-play: sit down, ask for menu, order primo and secondo, ask for bill.",
      "Learn Cosa consiglia? — locals love recommending the specialty.",
      "Practice Era tutto ottimo — say it walking out."
    ]
  },
  {
    day: 11, title: "Common Foods", titleNative: "Vocabolario del Cibo",
    focus: "Know what you're eating.",
    vocab: [
      { fr: "pasta",     ipa: "/ˈpasta/ — PAH-stah",           en: "pasta" },
      { fr: "pizza",     ipa: "/ˈpittsa/ — PEET-tsah",         en: "pizza" },
      { fr: "carne",     ipa: "/ˈkarne/ — KAR-neh",            en: "meat" },
      { fr: "pesce",     ipa: "/ˈpeʃʃe/ — PEH-sheh",           en: "fish" },
      { fr: "pollo",     ipa: "/ˈpɔllo/ — POL-loh",            en: "chicken" },
      { fr: "verdure",   ipa: "/verˈdure/ — vehr-DOO-reh",     en: "vegetables" },
      { fr: "formaggio", ipa: "/forˈmaddʒo/ — for-MAHD-joh",  en: "cheese" },
      { fr: "gelato",    ipa: "/dʒeˈlato/ — jeh-LAH-toh",      en: "gelato" }
    ],
    phrases: [
      { fr: "Cos'è questo piatto?",       ipa: "koh-ZEH KWES-toh PYAHT-toh",           en: "What is this dish?" },
      { fr: "C'è carne dentro?",          ipa: "cheh KAR-neh DEN-troh",                 en: "Is there meat in it?" },
      { fr: "È buonissimo!",              ipa: "eh bwoh-NEES-see-moh",                  en: "It's absolutely delicious!" },
      { fr: "Vorrei provare il risotto.", ipa: "vor-RAY proh-VAH-reh eel ree-ZOT-toh",  en: "I'd like to try the risotto." },
      { fr: "Senza pepe, per favore.",    ipa: "SEN-tsah PEH-peh, pehr fah-VOH-reh",    en: "Without pepper, please." },
      { fr: "Un po' di sale.",            ipa: "oon poh dee SAH-leh",                    en: "A little salt." },
      { fr: "Hanno piatti vegani?",       ipa: "AHN-noh PYAHT-tee veh-GAH-nee",         en: "Do you have vegan dishes?" },
      { fr: "Qual è la specialità?",      ipa: "kwahl eh lah speh-chah-lee-TAH",         en: "What's the specialty?" }
    ],
    grammar: "Never order 'spaghetti bolognese' in Italy — it doesn't exist there. The correct name is 'ragù alla bolognese' served on tagliatelle. Ordering 'pepperoni pizza' will get you bell peppers (peperoni). Meat sausage pizza is 'pizza con salame piccante'. These mistakes are how Italians spot tourists.",
    practice: [
      "Learn Cos'è questo piatto? — point at anything unfamiliar.",
      "Practice È buonissimo! with genuine enthusiasm.",
      "Commit gelato to memory — you'll say it 100 times."
    ]
  },
  {
    day: 12, title: "Dietary Needs", titleNative: "Esigenze Alimentari",
    focus: "Communicate what you can and can't eat.",
    vocab: [
      { fr: "allergico/a",  ipa: "/alˈlɛrdʒiko/ — al-LEHR-jee-koh",  en: "allergic" },
      { fr: "vegetariano/a",ipa: "/vedʒetaˈrjano/ — veh-jeh-tah-RYAH-noh", en: "vegetarian" },
      { fr: "vegano/a",     ipa: "/veˈɡano/ — veh-GAH-noh",           en: "vegan" },
      { fr: "glutine",      ipa: "/ˈɡlutine/ — GLOO-tee-neh",         en: "gluten" },
      { fr: "noci",         ipa: "/ˈnɔtʃi/ — NOH-chee",               en: "nuts" },
      { fr: "latte",        ipa: "/ˈlatte/ — LAHT-teh",               en: "milk / dairy" },
      { fr: "uova",         ipa: "/ˈwɔva/ — WOH-vah",                 en: "eggs" },
      { fr: "soia",         ipa: "/ˈsɔja/ — SOY-ah",                  en: "soy" }
    ],
    phrases: [
      { fr: "Sono allergico/a alle noci.", ipa: "SOH-noh al-LEHR-jee-koh AHL-leh NOH-chee", en: "I'm allergic to nuts." },
      { fr: "Non mangio carne.",          ipa: "non MAHN-joh KAR-neh",                  en: "I don't eat meat." },
      { fr: "Sono intollerante al lattosio.", ipa: "SOH-noh een-tol-leh-RAN-teh ahl laht-TOH-zyoh", en: "I'm lactose intolerant." },
      { fr: "C'è glutine?",               ipa: "cheh GLOO-tee-neh",                     en: "Does it contain gluten?" },
      { fr: "È senza glutine?",           ipa: "eh SEN-tsah GLOO-tee-neh",              en: "Is it gluten-free?" },
      { fr: "Può cucinarlo senza ___?",   ipa: "pwoh koo-chee-NAHR-loh SEN-tsah",       en: "Can you cook it without ___?" },
      { fr: "È una cosa seria.",          ipa: "eh OO-nah KOH-zah SEH-ryah",            en: "It's a serious matter." },
      { fr: "È sicuro?",                  ipa: "eh see-KOO-roh",                        en: "Is it safe?" }
    ],
    grammar: "Italians take food seriously and will generally accommodate dietary needs with good humor. 'Celiaco/a' is the Italian word for celiac disease — more specific than just 'senza glutine'. Writing your allergy on a card in Italian is always smart for emergencies.",
    practice: [
      "Write out your personal dietary needs in Italian.",
      "Practice C'è glutine/carne/latte? for your specific needs.",
      "Learn È una cosa seria — for genuine emergencies."
    ]
  },
  {
    day: 13, title: "Paying & Shopping", titleNative: "Pagare & Shopping",
    focus: "Handle money, cards, and receipts.",
    vocab: [
      { fr: "euro",       ipa: "/ˈɛuro/ — EH-oo-roh",             en: "euro" },
      { fr: "carta",      ipa: "/ˈkarta/ — KAR-tah",              en: "card (credit/debit)" },
      { fr: "contanti",   ipa: "/konˈtanti/ — kon-TAN-tee",       en: "cash" },
      { fr: "scontrino",  ipa: "/skonˈtrino/ — skon-TREE-noh",    en: "receipt" },
      { fr: "sconto",     ipa: "/ˈskonto/ — SKON-toh",            en: "discount" },
      { fr: "prezzo",     ipa: "/ˈprɛttso/ — PRET-tsoh",          en: "price" },
      { fr: "resto",      ipa: "/ˈrɛsto/ — RES-toh",              en: "change (money back)" },
      { fr: "mercato",    ipa: "/merˈkato/ — mehr-KAH-toh",       en: "market" }
    ],
    phrases: [
      { fr: "Accettate carte?",           ipa: "aht-chet-TAH-teh KAR-teh",              en: "Do you accept cards?" },
      { fr: "Pago in contanti.",          ipa: "PAH-goh een kon-TAN-tee",               en: "I'll pay cash." },
      { fr: "Quant'è in totale?",         ipa: "kwan-TEH een toh-TAH-leh",              en: "What's the total?" },
      { fr: "Possiamo dividere il conto?",ipa: "pos-SYAH-moh dee-VEE-deh-reh eel KON-toh", en: "Can we split the bill?" },
      { fr: "Tenga il resto.",            ipa: "TEN-gah eel RES-toh",                    en: "Keep the change." },
      { fr: "Mi dà lo scontrino?",        ipa: "mee dah loh skon-TREE-noh",             en: "Can I have the receipt?" },
      { fr: "È troppo caro.",             ipa: "eh TROP-poh KAH-roh",                   en: "It's too expensive." },
      { fr: "Costa meno quello?",         ipa: "KOH-stah MEH-noh KWEL-loh",             en: "Does that one cost less?" }
    ],
    grammar: "Italy is increasingly card-friendly but small shops, markets, and trattorie often prefer cash. The 'scontrino fiscale' (fiscal receipt) is legally required — restaurants can be fined if they don't provide one. In markets, gentle bargaining is acceptable; in shops, generally not.",
    practice: [
      "Practice Accettate carte? and Pago in contanti.",
      "Learn Possiamo dividere il conto? for group dinners.",
      "Memorize Tenga il resto vs Mi dà il resto — different situations."
    ]
  },
  {
    day: 14, title: "Week 2 Review — Café Day", titleNative: "Ripasso Settimana 2 — Giornata al Caffè",
    focus: "Lock in food, drink, and money vocabulary.",
    vocab: [
      { fr: "buono/a",    ipa: "/ˈbwɔno/ — BWOH-noh",             en: "good" },
      { fr: "ottimo/a",   ipa: "/ˈɔttimo/ — OT-tee-moh",          en: "excellent" },
      { fr: "fresco/a",   ipa: "/ˈfresko/ — FRES-koh",            en: "fresh / cool" },
      { fr: "caldo/a",    ipa: "/ˈkaldo/ — KAL-doh",              en: "hot / warm" },
      { fr: "freddo/a",   ipa: "/ˈfrɛddo/ — FRED-doh",            en: "cold" },
      { fr: "tanto",      ipa: "/ˈtanto/ — TAN-toh",              en: "a lot / very much" },
      { fr: "poco",       ipa: "/ˈpoko/ — POH-koh",               en: "a little" },
      { fr: "abbastanza", ipa: "/abbasˈtantsa/ — ah-bah-STAN-tsah", en: "enough" }
    ],
    phrases: [
      { fr: "Era tutto buonissimo.",      ipa: "EH-rah TOOT-toh bwoh-NEES-see-moh",    en: "Everything was absolutely delicious." },
      { fr: "Un po' di più, per favore.", ipa: "oon poh dee pyoo, pehr fah-VOH-reh",    en: "A little more, please." },
      { fr: "Basta così, grazie.",        ipa: "BAH-stah koh-ZEE, GRAT-tsyeh",          en: "That's enough, thank you." },
      { fr: "È troppo caldo.",            ipa: "eh TROP-poh KAL-doh",                   en: "It's too hot." },
      { fr: "Un po' freddo.",             ipa: "oon poh FRED-doh",                       en: "A little cold." },
      { fr: "Dov'è il bancomat?",         ipa: "doh-VEH eel bahn-koh-MAHT",             en: "Where is the ATM?" },
      { fr: "Hanno il menù in inglese?",  ipa: "AHN-noh eel meh-NOO een een-GLEH-zeh",  en: "Do they have the menu in English?" },
      { fr: "Cin cin!",                   ipa: "cheen cheen",                            en: "Cheers!" }
    ],
    grammar: "This is a good moment to practice stacking modifiers: Un caffè, molto caldo, senza zucchero, per favore. (A very hot coffee, no sugar, please.) Italians love specificity in food orders — being precise is a sign of someone who knows what they want.",
    practice: [
      "Flashcard review: Days 8–13 vocabulary.",
      "Role-play a full meal from arrival to paying.",
      "Practice Cin cin! — you'll use it at dinner."
    ]
  },
  {
    day: 15, title: "Hotel Check-In", titleNative: "Check-In in Hotel",
    focus: "Arrive, get your room, get settled.",
    vocab: [
      { fr: "hotel",       ipa: "/oˈtɛl/ — oh-TEL",               en: "hotel" },
      { fr: "camera",      ipa: "/ˈkamera/ — KAH-meh-rah",         en: "room" },
      { fr: "chiave",      ipa: "/ˈkjave/ — KYAH-veh",             en: "key" },
      { fr: "passaporto",  ipa: "/passaˈpɔrto/ — pahs-sah-POR-toh",en: "passport" },
      { fr: "notte",       ipa: "/ˈnɔtte/ — NOT-teh",              en: "night" },
      { fr: "bagno",       ipa: "/ˈbaɲɲo/ — BAHN-yoh",            en: "bathroom" },
      { fr: "ascensore",   ipa: "/aʃenˈsore/ — ah-shen-SOH-reh",  en: "elevator" },
      { fr: "valigia",     ipa: "/vaˈlidʒa/ — vah-LEE-jah",        en: "suitcase" }
    ],
    phrases: [
      { fr: "Ho una prenotazione a nome ___.", ipa: "oh OO-nah preh-noh-tahts-YOH-neh ah NOH-meh", en: "I have a reservation under the name ___." },
      { fr: "Una camera per due.",        ipa: "OO-nah KAH-meh-rah pehr DOO-eh",        en: "A room for two." },
      { fr: "Per quante notti?",          ipa: "pehr KWAN-teh NOT-tee",                  en: "For how many nights?" },
      { fr: "Dov'è l'ascensore?",         ipa: "doh-VEH lah-shen-SOH-reh",              en: "Where is the elevator?" },
      { fr: "C'è il Wi-Fi?",              ipa: "cheh eel wee-FEE",                       en: "Is there Wi-Fi?" },
      { fr: "Qual è la password del Wi-Fi?", ipa: "kwahl eh lah pass-word del wee-FEE",  en: "What's the Wi-Fi password?" },
      { fr: "Posso lasciare i bagagli?",  ipa: "POS-soh lah-SHAH-reh ee bah-GAH-lyee",  en: "Can I leave my luggage?" },
      { fr: "A che ora è il check-out?",  ipa: "ah keh OH-rah eh eel check-out",         en: "What time is check-out?" }
    ],
    grammar: "'Camera' means room (not camera/photo — that's 'macchina fotografica' or 'fotocamera'). Hotel rooms in Italy are typically smaller than American equivalents. Leaving your key at the front desk when going out is customary in many Italian hotels. The 'portiere' (doorman/concierge) knows everything about the neighborhood.",
    practice: [
      "Practice the check-in sentence with your actual name.",
      "Learn C'è il Wi-Fi? and Qual è la password? — first things first.",
      "Commit Dov'è il bagno? to instant recall."
    ]
  },
  {
    day: 16, title: "Hotel Room", titleNative: "La Camera d'Albergo",
    focus: "Request what you need, report what's broken.",
    vocab: [
      { fr: "asciugamano", ipa: "/aʃʃuɡaˈmano/ — ah-shoo-gah-MAH-noh", en: "towel" },
      { fr: "cuscino",    ipa: "/kuˈʃʃino/ — koo-SHEE-noh",         en: "pillow" },
      { fr: "coperta",    ipa: "/koˈperta/ — koh-PEHR-tah",          en: "blanket" },
      { fr: "aria condizionata", ipa: "/ˈarja konditsjoˈnata/ — AH-ryah kon-deets-yoh-NAH-tah", en: "air conditioning" },
      { fr: "riscaldamento", ipa: "/riskaldaˈmento/ — rees-kal-dah-MEN-toh", en: "heating" },
      { fr: "rubinetto",  ipa: "/rubiˈnetto/ — roo-bee-NET-toh",    en: "faucet / tap" },
      { fr: "presa",      ipa: "/ˈpreza/ — PREH-zah",               en: "electrical outlet" },
      { fr: "finestra",   ipa: "/fiˈnestra/ — fee-NES-trah",        en: "window" }
    ],
    phrases: [
      { fr: "La camera è troppo fredda.", ipa: "lah KAH-meh-rah eh TROP-poh FRED-dah", en: "The room is too cold." },
      { fr: "L'aria condizionata non funziona.", ipa: "LAH-ryah kon-deets-yoh-NAH-tah non foon-TSYOH-nah", en: "The AC isn't working." },
      { fr: "Può portarmi un altro asciugamano?", ipa: "pwoh por-TAHR-mee oon AHL-troh ah-shoo-gah-MAH-noh", en: "Can you bring me another towel?" },
      { fr: "Il rubinetto perde.",        ipa: "eel roo-bee-NET-toh PEHR-deh",           en: "The faucet is dripping." },
      { fr: "La luce non si accende.",    ipa: "lah LOO-cheh non see ah-CHEN-deh",       en: "The light won't turn on." },
      { fr: "Posso cambiare camera?",     ipa: "POS-soh kahm-BYAH-reh KAH-meh-rah",     en: "Can I change rooms?" },
      { fr: "La chiave non funziona.",    ipa: "lah KYAH-veh non foon-TSYOH-nah",       en: "The key doesn't work." },
      { fr: "Non c'è acqua calda.",       ipa: "non cheh AHK-kwah KAL-dah",              en: "There's no hot water." }
    ],
    grammar: "'Non funziona' (it doesn't work) — memorize this phrase. 'Può portarmi' (can you bring me) — polite way to request anything. Italian electrical outlets use Type F/L plugs — bring a universal adapter. Most Italian hotels now use key-card systems that cut power when you leave.",
    practice: [
      "Learn Non funziona by heart — works for anything broken.",
      "Practice Può portarmi un ___? with towel, pillow, blanket.",
      "Learn Posso cambiare camera? just in case."
    ]
  },
  {
    day: 17, title: "Directions", titleNative: "Chiedere Indicazioni",
    focus: "Get un-lost. Italy rewards wandering.",
    vocab: [
      { fr: "sinistra",   ipa: "/siˈnistra/ — see-NEE-strah",      en: "left" },
      { fr: "destra",     ipa: "/ˈdestra/ — DES-trah",             en: "right" },
      { fr: "dritto",     ipa: "/ˈdritto/ — DREET-toh",            en: "straight ahead" },
      { fr: "girare",     ipa: "/dʒiˈrare/ — jee-RAH-reh",         en: "to turn" },
      { fr: "vicino",     ipa: "/viˈtʃino/ — vee-CHEE-noh",        en: "near / close" },
      { fr: "lontano",    ipa: "/lonˈtano/ — lon-TAH-noh",          en: "far" },
      { fr: "strada",     ipa: "/ˈstrada/ — STRAH-dah",            en: "street / road" },
      { fr: "piazza",     ipa: "/ˈpjattsa/ — PYAHT-tsah",          en: "square / plaza" }
    ],
    phrases: [
      { fr: "Dov'è ___?",                 ipa: "doh-VEH ___",                           en: "Where is ___?" },
      { fr: "Giri a sinistra.",           ipa: "JEE-ree ah see-NEE-strah",              en: "Turn left." },
      { fr: "Giri a destra.",             ipa: "JEE-ree ah DES-trah",                   en: "Turn right." },
      { fr: "Vada dritto.",               ipa: "VAH-dah DREET-toh",                     en: "Go straight." },
      { fr: "Quanto è lontano?",          ipa: "KWAN-toh eh lon-TAH-noh",               en: "How far is it?" },
      { fr: "È vicino.",                  ipa: "eh vee-CHEE-noh",                       en: "It's nearby." },
      { fr: "Può mostrarmelo sulla mappa?", ipa: "pwoh moh-STRAHR-meh-loh SOOL-lah MAHP-pah", en: "Can you show me on the map?" },
      { fr: "Mi sono perso/a.",           ipa: "mee SOH-noh PEHR-soh",                  en: "I'm lost." }
    ],
    grammar: "Italians give directions with generous hand gestures — try to read both the words and the hands. 'A destra' (right) and 'a sinistra' (left) are the core pair. 'Sempre dritto' (always straight) is the most common direction. Getting lost in Italian cities is often the best way to find the most beautiful things.",
    practice: [
      "Memorize sinistra and destra cold — left and right instantly.",
      "Practice Dov'è il bagno / l'hotel / la stazione?",
      "Learn Mi sono perso/a — you'll probably use it."
    ]
  },
  {
    day: 18, title: "Getting Around", titleNative: "Muoversi in Città",
    focus: "Navigate Italian cities like a local.",
    vocab: [
      { fr: "autobus",    ipa: "/ˈautobus/ — OW-toh-boos",          en: "bus" },
      { fr: "tram",       ipa: "/tram/ — trahm",                    en: "tram" },
      { fr: "fermata",    ipa: "/ferˈmata/ — fehr-MAH-tah",         en: "stop (bus/tram)" },
      { fr: "biglietto",  ipa: "/biʎˈʎetto/ — beel-YET-toh",       en: "ticket" },
      { fr: "aeroporto",  ipa: "/aeroˈpɔrto/ — ah-eh-roh-POR-toh", en: "airport" },
      { fr: "centro",     ipa: "/ˈtʃɛntro/ — CHEN-troh",           en: "city center" },
      { fr: "entrata",    ipa: "/enˈtrata/ — en-TRAH-tah",          en: "entrance" },
      { fr: "uscita",     ipa: "/uˈʃʃita/ — oo-SHEE-tah",           en: "exit" }
    ],
    phrases: [
      { fr: "Dov'è la fermata dell'autobus?", ipa: "doh-VEH lah fehr-MAH-tah del-OW-toh-boos", en: "Where is the bus stop?" },
      { fr: "Un biglietto per il centro.", ipa: "oon beel-YET-toh pehr eel CHEN-troh",   en: "A ticket to the center." },
      { fr: "Quanto costa il biglietto?", ipa: "KWAN-toh KOH-stah eel beel-YET-toh",     en: "How much is the ticket?" },
      { fr: "A che ora parte?",           ipa: "ah keh OH-rah PAR-teh",                  en: "At what time does it leave?" },
      { fr: "Mi porti al centro, per favore.", ipa: "mee POR-tee ahl CHEN-troh, pehr fah-VOH-reh", en: "Take me to the center, please." },
      { fr: "Si fermi qui, per favore.",  ipa: "see FEHR-mee kwee, pehr fah-VOH-reh",    en: "Stop here, please." },
      { fr: "Quanto verrà a costare?",    ipa: "KWAN-toh vehr-RAH ah koh-STAH-reh",      en: "How much will it cost?" },
      { fr: "Vada dritto all'aeroporto.", ipa: "VAH-dah DREET-toh ahl-ah-eh-roh-POR-toh", en: "Go straight to the airport." }
    ],
    grammar: "Italian city buses require validation — stamp your ticket when you board or face a fine. Many cities (Rome, Milan, Florence) have apps for tickets. ZTL zones (Zona Traffico Limitato) are restricted traffic areas — if you're driving, check GPS carefully to avoid fines that arrive by mail months later.",
    practice: [
      "Practice Un biglietto per ___ per favore.",
      "Learn Si fermi qui — essential for taxis.",
      "Memorize Quanto verrà a costare? before every taxi ride."
    ]
  },
  {
    day: 19, title: "Transport & Travel", titleNative: "Trasporti & Viaggi",
    focus: "Trains, ferries, and getting between cities.",
    vocab: [
      { fr: "treno",      ipa: "/ˈtreno/ — TREH-noh",              en: "train" },
      { fr: "stazione",   ipa: "/statˈtsjone/ — staht-TSYOH-neh",  en: "station" },
      { fr: "binario",    ipa: "/biˈnarjo/ — bee-NAH-ryoh",         en: "platform / track" },
      { fr: "macchina",   ipa: "/ˈmakkina/ — MAHK-kee-nah",        en: "car" },
      { fr: "traghetto",  ipa: "/traˈɡetto/ — trah-GET-toh",       en: "ferry" },
      { fr: "ritardo",    ipa: "/riˈtardo/ — ree-TAR-doh",          en: "delay" },
      { fr: "andata",     ipa: "/anˈdata/ — ahn-DAH-tah",           en: "one way" },
      { fr: "andata e ritorno", ipa: "/anˈdata e riˈtorno/ — ahn-DAH-tah eh ree-TOR-noh", en: "round trip" }
    ],
    phrases: [
      { fr: "Un biglietto per Roma, per favore.", ipa: "oon beel-YET-toh pehr ROH-mah, pehr fah-VOH-reh", en: "A ticket to Rome, please." },
      { fr: "Andata e ritorno.",          ipa: "ahn-DAH-tah eh ree-TOR-noh",            en: "Round trip." },
      { fr: "Qual è il binario?",         ipa: "kwahl eh eel bee-NAH-ryoh",              en: "Which platform?" },
      { fr: "Il treno è in ritardo?",     ipa: "eel TREH-noh eh een ree-TAR-doh",        en: "Is the train delayed?" },
      { fr: "Ho perso il treno.",         ipa: "oh PEHR-soh eel TREH-noh",               en: "I missed the train." },
      { fr: "Ho perso i bagagli.",        ipa: "oh PEHR-soh ee bah-GAH-lyee",            en: "I've lost my luggage." },
      { fr: "A che ora arriva?",          ipa: "ah keh OH-rah ahr-REE-vah",              en: "At what time does it arrive?" },
      { fr: "Vorrei un posto al finestrino.", ipa: "vor-RAY oon POS-toh ahl fee-nes-TREE-noh", en: "I'd like a window seat." }
    ],
    grammar: "Italy's Trenitalia and Italo train networks are excellent. High-speed trains (Frecciarossa, Italotreno) connect major cities quickly. Always validate regional train tickets at the yellow machines before boarding — inspectors fine un-validated tickets even if purchased. The Eurail pass works on most Italian trains.",
    practice: [
      "Practice Un biglietto per ___, andata e ritorno.",
      "Learn Qual è il binario? — essential for Italian stations.",
      "Memorize Ho perso i bagagli — hopefully never needed."
    ]
  },
  {
    day: 20, title: "Telling Time & Schedules", titleNative: "L'Ora & gli Orari",
    focus: "Be on time. (Italians will not be.)",
    vocab: [
      { fr: "ora",       ipa: "/ˈora/ — OH-rah",                  en: "hour / time" },
      { fr: "minuto",    ipa: "/miˈnuto/ — mee-NOO-toh",          en: "minute" },
      { fr: "mattina",   ipa: "/matˈtina/ — maht-TEE-nah",        en: "morning" },
      { fr: "pomeriggio",ipa: "/pomeˈriddʒo/ — poh-meh-REED-joh", en: "afternoon" },
      { fr: "sera",      ipa: "/ˈsera/ — SEH-rah",                en: "evening" },
      { fr: "notte",     ipa: "/ˈnɔtte/ — NOT-teh",              en: "night" },
      { fr: "presto",    ipa: "/ˈprɛsto/ — PRES-toh",            en: "early / soon" },
      { fr: "tardi",     ipa: "/ˈtardi/ — TAR-dee",              en: "late" }
    ],
    phrases: [
      { fr: "Che ore sono?",              ipa: "keh OH-reh SOH-noh",                    en: "What time is it?" },
      { fr: "Sono le tre.",               ipa: "SOH-noh leh treh",                       en: "It's three o'clock." },
      { fr: "Sono le tre e mezza.",       ipa: "SOH-noh leh treh eh MED-zah",            en: "It's half past three." },
      { fr: "A che ora apre?",            ipa: "ah keh OH-rah AH-preh",                  en: "When does it open?" },
      { fr: "Sono in ritardo.",           ipa: "SOH-noh een ree-TAR-doh",                en: "I'm late." },
      { fr: "Sono arrivato/a presto.",    ipa: "SOH-noh ahr-ree-VAH-toh PRES-toh",       en: "I arrived early." },
      { fr: "Aspetti un momento.",        ipa: "ah-SPET-tee oon moh-MEN-toh",            en: "Wait a moment." },
      { fr: "Non abbiamo tempo.",         ipa: "non ahb-BYAH-moh TEM-poh",               en: "We don't have time." }
    ],
    grammar: "Italy runs on 24-hour time for schedules (trains, museums, restaurants) but 12-hour in conversation. 'È l'una' (it's one o'clock) — note the singular. All other hours use plural: 'Sono le due/tre...' Half-past: 'e mezza'. Quarter-past: 'e un quarto'. Quarter-to: 'meno un quarto'.",
    practice: [
      "Practice saying the current time in Italian.",
      "Learn Sono in ritardo and Aspetti un momento.",
      "Practice half-past and quarter expressions."
    ]
  },
  {
    day: 21, title: "Week 3 Review", titleNative: "Ripasso Settimana 3",
    focus: "Lock in hotel, transport, and directions.",
    vocab: [
      { fr: "problema",    ipa: "/ˈprɔblema/ — PROH-bleh-mah",      en: "problem" },
      { fr: "soluzione",   ipa: "/soluˈtsjone/ — soh-loot-SYOH-neh",en: "solution" },
      { fr: "aiuto",       ipa: "/aˈjuto/ — ah-YOO-toh",            en: "help" },
      { fr: "informazione",ipa: "/informatˈtsjone/ — een-for-mahts-YOH-neh", en: "information" },
      { fr: "ufficio",     ipa: "/ufˈfitʃo/ — oof-FEE-choh",        en: "office" },
      { fr: "ospedale",    ipa: "/ospeˈdale/ — oh-speh-DAH-leh",    en: "hospital" },
      { fr: "polizia",     ipa: "/poliˈttsia/ — poh-leet-TSEE-ah",  en: "police" },
      { fr: "ambasciata",  ipa: "/ambaˈʃʃata/ — ahm-bah-SHAH-tah", en: "embassy" }
    ],
    phrases: [
      { fr: "Dov'è l'ospedale?",          ipa: "doh-VEH loh-speh-DAH-leh",              en: "Where is the hospital?" },
      { fr: "Dov'è la polizia?",          ipa: "doh-VEH lah poh-leet-TSEE-ah",          en: "Where is the police?" },
      { fr: "Ho bisogno di aiuto.",       ipa: "oh bee-ZON-yoh dee ah-YOO-toh",         en: "I need help." },
      { fr: "Dov'è l'ambasciata americana?", ipa: "doh-VEH lahm-bah-SHAH-tah ah-meh-ree-KAH-nah", en: "Where is the American embassy?" },
      { fr: "Devo andare da un medico.",  ipa: "DEH-voh ahn-DAH-reh dah oon MEH-dee-koh", en: "I need to see a doctor." },
      { fr: "Può chiamare un'ambulanza?", ipa: "pwoh kyah-MAH-reh oon-ahm-boo-LAN-tsah", en: "Can you call an ambulance?" },
      { fr: "Dove trovo il Wi-Fi?",       ipa: "DOH-veh TROH-voh eel wee-FEE",           en: "Where can I find Wi-Fi?" },
      { fr: "Non so cosa sia successo.",  ipa: "non soh KOH-zah SEE-ah soot-CHES-soh",  en: "I don't know what happened." }
    ],
    grammar: "Emergency number in Italy: 112 (general EU emergency), 113 (police), 118 (ambulance), 115 (fire). The US Embassy in Rome: +39 06 46741. Most Italian pharmacies (farmacie, marked with a green cross) have a rotation for 24-hour service — look for the 'farmacia di turno' sign.",
    practice: [
      "Review all Week 3 vocabulary.",
      "Practice the emergency phrases out loud.",
      "Run through a scenario: lost in Rome, need to find your hotel."
    ]
  },
  {
    day: 22, title: "Shopping", titleNative: "Shopping",
    focus: "Boutiques, markets, and Italian style.",
    vocab: [
      { fr: "negozio",     ipa: "/neˈɡottsjo/ — neh-GOHTS-yoh",    en: "shop / store" },
      { fr: "mercato",     ipa: "/merˈkato/ — mehr-KAH-toh",        en: "market" },
      { fr: "prezzo",      ipa: "/ˈprɛttso/ — PRET-tsoh",           en: "price" },
      { fr: "economico/a", ipa: "/ekoˈnomiko/ — eh-koh-NOH-mee-koh",en: "affordable / cheap" },
      { fr: "caro/a",      ipa: "/ˈkaro/ — KAH-roh",               en: "expensive" },
      { fr: "taglia",      ipa: "/ˈtaʎʎa/ — TAHL-yah",             en: "size (clothing)" },
      { fr: "colore",      ipa: "/koˈlore/ — koh-LOH-reh",          en: "color" },
      { fr: "fatto a mano",ipa: "/ˈfatto a ˈmano/ — FAHT-toh ah MAH-noh", en: "handmade" }
    ],
    phrases: [
      { fr: "Quanto costa?",              ipa: "KWAN-toh KOH-stah",                     en: "How much does it cost?" },
      { fr: "È troppo caro.",             ipa: "eh TROP-poh KAH-roh",                   en: "It's too expensive." },
      { fr: "Può farmi uno sconto?",      ipa: "pwoh FAHR-mee OO-noh SKON-toh",         en: "Can you give me a discount?" },
      { fr: "Lo prendo.",                 ipa: "loh PREN-doh",                           en: "I'll take it." },
      { fr: "Non lo prendo.",             ipa: "non loh PREN-doh",                       en: "I won't take it." },
      { fr: "Ha un'altra taglia?",        ipa: "ah oon-AHL-trah TAHL-yah",               en: "Do you have another size?" },
      { fr: "Posso provarlo?",            ipa: "POS-soh proh-VAR-loh",                   en: "Can I try it on?" },
      { fr: "Dov'è il camerino?",         ipa: "doh-VEH eel kah-meh-REE-noh",           en: "Where is the fitting room?" }
    ],
    grammar: "Italy is one of the world's fashion capitals — shopping is serious. Fixed-price shops don't negotiate; market stalls do. The 'saldi' (sales) happen in January and July — massive discounts. Leather goods in Florence, ceramics in Deruta, glass in Murano, cameos in Naples — regional specialties are worth seeking.",
    practice: [
      "Practice Quanto costa? + È troppo caro + Può farmi uno sconto?",
      "Learn Lo prendo / Non lo prendo for decisive moments.",
      "Practice Posso provarlo? and Dov'è il camerino?"
    ]
  },
  {
    day: 23, title: "Colors & Descriptions", titleNative: "Colori & Descrizioni",
    focus: "Describe what you're looking for.",
    vocab: [
      { fr: "rosso/a",   ipa: "/ˈrosso/ — ROS-soh",               en: "red" },
      { fr: "blu",       ipa: "/ˈblu/ — bloo",                    en: "blue" },
      { fr: "verde",     ipa: "/ˈverde/ — VEHR-deh",              en: "green" },
      { fr: "bianco/a",  ipa: "/ˈbjanko/ — BYAHN-koh",            en: "white" },
      { fr: "nero/a",    ipa: "/ˈnero/ — NEH-roh",                en: "black" },
      { fr: "giallo/a",  ipa: "/ˈdʒallo/ — JAHL-loh",             en: "yellow" },
      { fr: "grande",    ipa: "/ˈɡrande/ — GRAHN-deh",            en: "big / large" },
      { fr: "piccolo/a", ipa: "/ˈpikkolo/ — PEEK-koh-loh",        en: "small" }
    ],
    phrases: [
      { fr: "Voglio qualcosa di rosso.",  ipa: "VOL-yoh kwal-KOH-zah dee ROS-soh",      en: "I want something red." },
      { fr: "Ce l'ha in un altro colore?",ipa: "cheh lah een oon AHL-troh koh-LOH-reh", en: "Do you have it in another color?" },
      { fr: "È troppo grande.",           ipa: "eh TROP-poh GRAHN-deh",                 en: "It's too big." },
      { fr: "Ha qualcosa di più piccolo?",ipa: "ah kwal-KOH-zah dee pyoo PEEK-koh-loh", en: "Do you have something smaller?" },
      { fr: "Questo colore mi piace.",    ipa: "KWES-toh koh-LOH-reh mee PYAH-cheh",   en: "I like this color." },
      { fr: "Vorrei la taglia M.",        ipa: "vor-RAY lah TAHL-yah M",                en: "I'd like size M." },
      { fr: "Mi sta bene?",               ipa: "mee stah BEH-neh",                      en: "Does it suit me?" },
      { fr: "Le sta benissimo.",          ipa: "leh stah beh-NEES-see-moh",             en: "It suits you perfectly." }
    ],
    grammar: "Italian adjectives agree with the noun in gender and number: 'vestito rosso' (red dress, m), 'gonna rossa' (red skirt, f). Colors that end in E (verde, blu, arancione) don't change for gender. 'Mi piace' (I like) is literally 'it pleases me' — a structure that trips up English speakers at first.",
    practice: [
      "Name the colors of five things around you in Italian.",
      "Practice Ce l'ha in un altro colore? — key shopping phrase.",
      "Learn Mi sta bene? and Le sta benissimo together."
    ]
  },
  {
    day: 24, title: "Small Talk", titleNative: "Chiacchiere",
    focus: "Connect with Italians beyond transactions.",
    vocab: [
      { fr: "bello/a",     ipa: "/ˈbɛllo/ — BEL-loh",              en: "beautiful / nice" },
      { fr: "interessante",ipa: "/interessˈante/ — een-teh-res-SAN-teh", en: "interesting" },
      { fr: "lavoro",      ipa: "/laˈvoro/ — lah-VOH-roh",          en: "work / job" },
      { fr: "famiglia",    ipa: "/faˈmiʎʎa/ — fah-MEEL-yah",       en: "family" },
      { fr: "abito a",     ipa: "/ˈabito a/ — AH-bee-toh ah",       en: "I live in..." },
      { fr: "sposato/a",   ipa: "/spoˈzato/ — spoh-ZAH-toh",        en: "married" },
      { fr: "figlio/a",    ipa: "/ˈfiʎʎo/ — FEEL-yoh",             en: "son / daughter" },
      { fr: "Italia",      ipa: "/iˈtalja/ — ee-TAH-lyah",          en: "Italy" }
    ],
    phrases: [
      { fr: "L'Italia è meravigliosa.",   ipa: "lee-TAH-lyah eh meh-rah-veel-YOH-zah",  en: "Italy is wonderful." },
      { fr: "Gli italiani sono simpaticissimi.", ipa: "lyee ee-tahl-YAH-nee SOH-noh seem-pah-tee-CHEES-see-mee", en: "Italians are incredibly friendly." },
      { fr: "Che lavoro fa?",             ipa: "keh lah-VOH-roh fah",                   en: "What do you do for work?" },
      { fr: "Abito a Dallas.",            ipa: "AH-bee-toh ah Dallas",                  en: "I live in Dallas." },
      { fr: "Ho due figli.",              ipa: "oh DOO-eh FEEL-yee",                    en: "I have two children." },
      { fr: "L'italiano è difficile ma bellissimo.", ipa: "lee-tahl-YAH-noh eh dee-FEE-chee-leh mah bel-LEES-see-moh", en: "Italian is difficult but beautiful." },
      { fr: "Buon appetito!",             ipa: "bwon ahp-peh-TEE-toh",                  en: "Enjoy your meal!" },
      { fr: "Ci ritornerò sicuramente.",  ipa: "chee ree-tor-neh-ROH see-koo-rah-MEN-teh", en: "I'll definitely come back." }
    ],
    grammar: "'Simpatico/a' is the highest compliment you can give an Italian — it means likable, warm, charming, fun to be around. 'Buon appetito' is said before every meal without exception. Responding: 'Grazie, altrettanto' (thanks, likewise). The Italian passion for food, family, and beauty is not a stereotype — it's the culture.",
    practice: [
      "Memorize L'Italia è meravigliosa — say it to someone.",
      "Practice your personal intro: name, city, job.",
      "Learn Buon appetito! — use it before every meal."
    ]
  },
  {
    day: 25, title: "Emergencies", titleNative: "Emergenze",
    focus: "Handle the unexpected with confidence.",
    vocab: [
      { fr: "Aiuto!",      ipa: "/aˈjuto/ — ah-YOO-toh",           en: "Help!" },
      { fr: "Fuoco!",      ipa: "/ˈfwɔko/ — FWOH-koh",             en: "Fire!" },
      { fr: "Al ladro!",   ipa: "/al ˈladro/ — ahl LAH-droh",       en: "Thief!" },
      { fr: "pericolo",    ipa: "/peˈrikolo/ — peh-REE-koh-loh",    en: "danger" },
      { fr: "ferito/a",    ipa: "/feˈrito/ — feh-REE-toh",          en: "injured" },
      { fr: "medico",      ipa: "/ˈmɛdiko/ — MEH-dee-koh",          en: "doctor" },
      { fr: "farmacia",    ipa: "/farˈmatʃa/ — far-MAH-chah",       en: "pharmacy" },
      { fr: "assicurazione",ipa: "/assikuratˈtsjone/ — ahs-see-koo-rahts-YOH-neh", en: "insurance" }
    ],
    phrases: [
      { fr: "Chiami un'ambulanza!",       ipa: "KYAH-mee oon-ahm-boo-LAN-tsah",         en: "Call an ambulance!" },
      { fr: "Chiami la polizia!",         ipa: "KYAH-mee lah poh-leet-TSEE-ah",         en: "Call the police!" },
      { fr: "Sono ferito/a.",             ipa: "SOH-noh feh-REE-toh",                    en: "I'm injured." },
      { fr: "Dov'è la farmacia?",         ipa: "doh-VEH lah far-MAH-chah",               en: "Where is the pharmacy?" },
      { fr: "Ho bisogno di un medico.",   ipa: "oh bee-ZON-yoh dee oon MEH-dee-koh",    en: "I need a doctor." },
      { fr: "Ho perso il portafoglio.",   ipa: "oh PEHR-soh eel por-tah-FOHL-yoh",      en: "I've lost my wallet." },
      { fr: "Ho perso il passaporto.",    ipa: "oh PEHR-soh eel pahs-sah-POR-toh",      en: "I've lost my passport." },
      { fr: "Ho un'assicurazione sanitaria.", ipa: "oh oon-ahs-see-koo-rahts-YOH-neh sah-nee-TAH-ryah", en: "I have health insurance." }
    ],
    grammar: "Italian emergency numbers: 112 (EU general), 113 (Carabinieri/Police), 118 (ambulance), 115 (fire). Pharmacies display a green cross and have 24-hour rotation duty ('farmacia di turno'). EHIC/EU health cards and travel insurance are strongly recommended. US Embassy Rome: +39 06 46741.",
    practice: [
      "Memorize 112 — the universal Italian emergency number.",
      "Practice Ho bisogno di un medico and Chiami un'ambulanza.",
      "Learn Ho perso il portafoglio — hopefully never needed."
    ]
  },
  {
    day: 26, title: "Compliments & Appreciation", titleNative: "Complimenti & Apprezzamento",
    focus: "Make people feel wonderful. Italians appreciate this deeply.",
    vocab: [
      { fr: "bellissimo/a", ipa: "/belˈlissimo/ — bel-LEES-see-moh",  en: "absolutely beautiful" },
      { fr: "straordinario/a", ipa: "/straordˈinarjo/ — strah-or-dee-NAH-ryoh", en: "extraordinary" },
      { fr: "gentile",    ipa: "/dʒenˈtile/ — jen-TEE-leh",          en: "kind / gentle" },
      { fr: "generoso/a", ipa: "/dʒeneˈrozo/ — jeh-neh-ROH-zoh",    en: "generous" },
      { fr: "ospitalità", ipa: "/ospitaliˈta/ — oh-spee-tah-lee-TAH",en: "hospitality" },
      { fr: "talento",    ipa: "/taˈlento/ — tah-LEN-toh",           en: "talent" },
      { fr: "cucina",     ipa: "/kuˈtʃina/ — koo-CHEE-nah",          en: "cuisine / kitchen" },
      { fr: "sapore",     ipa: "/saˈpore/ — sah-POH-reh",            en: "flavor / taste" }
    ],
    phrases: [
      { fr: "Grazie per la sua ospitalità.", ipa: "GRAT-tsyeh pehr lah SOO-ah oh-spee-tah-lee-TAH", en: "Thank you for your hospitality." },
      { fr: "La sua casa è bellissima.",  ipa: "lah SOO-ah KAH-zah eh bel-LEES-see-mah",en: "Your home is absolutely beautiful." },
      { fr: "La sua cucina è straordinaria.", ipa: "lah SOO-ah koo-CHEE-nah eh strah-or-dee-NAH-ryah", en: "Your cooking is extraordinary." },
      { fr: "È molto gentile.",           ipa: "eh MOHL-toh jen-TEE-leh",               en: "You're very kind." },
      { fr: "I Suoi bambini sono adorabili.", ipa: "ee SWOH-ee bahm-BEE-nee SOH-noh ah-doh-RAH-bee-lee", en: "Your children are adorable." },
      { fr: "Non dimenticherò mai.",      ipa: "non dee-men-tee-keh-ROH my",             en: "I will never forget." },
      { fr: "Siete stati meravigliosi.",  ipa: "SYEH-teh STAH-tee meh-rah-veel-YOH-zee", en: "You've been wonderful." },
      { fr: "Che bella sorpresa!",        ipa: "keh BEL-lah sor-PREH-zah",              en: "What a beautiful surprise!" }
    ],
    grammar: "Italians respond to genuine enthusiasm with more enthusiasm — complimenting the food, the city, the home is always appreciated. 'Bellissimo' is the superlative of 'bello' — the -issimo ending intensifies any adjective. 'Buonissimo' (delicious), 'grandissimo' (enormous), 'carissimo' (very dear).",
    practice: [
      "Memorize Grazie per la sua ospitalità — use it every time.",
      "Practice È buonissimo and Era straordinario.",
      "Learn Non dimenticherò mai — deeply meaningful."
    ]
  },
  {
    day: 27, title: "Past & Future", titleNative: "Passato & Futuro",
    focus: "Talk about what happened and what's coming.",
    vocab: [
      { fr: "sono andato/a",  ipa: "/ˈsono anˈdato/ — SOH-noh ahn-DAH-toh",  en: "I went" },
      { fr: "ho mangiato",    ipa: "/ɔ manˈdʒato/ — oh mahn-JAH-toh",         en: "I ate" },
      { fr: "ho visto",       ipa: "/ɔ ˈvisto/ — oh VEE-stoh",                en: "I saw" },
      { fr: "è stato/a",      ipa: "/ɛ ˈstato/ — eh STAH-toh",                en: "it was" },
      { fr: "andrò",          ipa: "/anˈdrɔ/ — ahn-DROH",                     en: "I will go" },
      { fr: "tornerò",        ipa: "/torneˈrɔ/ — tor-neh-ROH",                en: "I will return" },
      { fr: "vorrei",         ipa: "/vorˈrɛi/ — vor-RAY",                     en: "I would like" },
      { fr: "è stato bellissimo", ipa: "/ɛ ˈstato belˈlissimo/ — eh STAH-toh bel-LEES-see-moh", en: "it was absolutely wonderful" }
    ],
    phrases: [
      { fr: "Ieri sono andato al Colosseo.", ipa: "YEH-ree SOH-noh ahn-DAH-toh ahl koh-los-SEH-oh", en: "Yesterday I went to the Colosseum." },
      { fr: "Ho mangiato la cacio e pepe.", ipa: "oh mahn-JAH-toh lah KAH-choh eh PEH-peh", en: "I ate cacio e pepe." },
      { fr: "Ho visto il tramonto a Venezia.", ipa: "oh VEE-stoh eel trah-MON-toh ah veh-NETS-yah", en: "I saw the sunset in Venice." },
      { fr: "È stato tutto bellissimo.",   ipa: "eh STAH-toh TOOT-toh bel-LEES-see-moh",  en: "Everything was absolutely beautiful." },
      { fr: "Domani andrò a Firenze.",     ipa: "doh-MAH-nee ahn-DROH ah fee-REN-tseh",  en: "Tomorrow I'll go to Florence." },
      { fr: "Tornerò l'anno prossimo.",    ipa: "tor-neh-ROH LAHN-noh PROS-see-moh",     en: "I'll return next year." },
      { fr: "Ho passato un tempo meraviglioso.", ipa: "oh pahs-SAH-toh oon TEM-poh meh-rah-veel-YOH-zoh", en: "I had a wonderful time." },
      { fr: "Mi mancherà l'Italia.",       ipa: "mee mahn-keh-RAH lee-TAH-lyah",         en: "I will miss Italy." }
    ],
    grammar: "Italian past tense (passato prossimo) uses 'avere' or 'essere' as a helper verb. Movement verbs use 'essere': 'sono andato' (I went). Action verbs use 'avere': 'ho mangiato' (I ate), 'ho visto' (I saw). The agreement rule (andato/andata) matches your gender. Don't worry — just use it and people will understand.",
    practice: [
      "Tell a mini-story about your trip in past tense.",
      "Practice Tornerò l'anno prossimo — plan your return.",
      "Learn Mi mancherà l'Italia — the perfect parting thought."
    ]
  },
  {
    day: 28, title: "Goodbyes", titleNative: "Arrivederci",
    focus: "Leave well. The last impression matters.",
    vocab: [
      { fr: "arrivederci",  ipa: "/arriˈvederci/ — ar-ree-veh-DEHR-chee", en: "goodbye (formal, until we meet again)" },
      { fr: "addio",        ipa: "/adˈdio/ — ahd-DEE-oh",                 en: "goodbye (final, farewell)" },
      { fr: "a presto",     ipa: "/a ˈprɛsto/ — ah PRES-toh",             en: "see you soon" },
      { fr: "in bocca al lupo", ipa: "/in ˈbokka al ˈlupo/ — een BOK-kah ahl LOO-poh", en: "good luck (lit. in the mouth of the wolf)" },
      { fr: "ricordo",      ipa: "/riˈkordo/ — ree-KOR-doh",              en: "memory / souvenir" },
      { fr: "amicizia",     ipa: "/amiˈtʃittsja/ — ah-mee-CHEETS-yah",   en: "friendship" },
      { fr: "spero",        ipa: "/ˈspɛro/ — SPEH-roh",                  en: "I hope" },
      { fr: "buon viaggio", ipa: "/ˌbwɔn ˈvjaddʒo/ — bwon VYAHD-joh",   en: "have a good trip" }
    ],
    phrases: [
      { fr: "Buon viaggio!",              ipa: "bwon VYAHD-joh",                         en: "Have a good trip!" },
      { fr: "Mi mancherete.",             ipa: "mee mahn-keh-REH-teh",                   en: "I'll miss you all." },
      { fr: "È stato un piacere.",        ipa: "eh STAH-toh oon pyah-CHEH-reh",          en: "It's been a pleasure." },
      { fr: "Spero di rivederti presto.", ipa: "SPEH-roh dee ree-veh-DEHR-tee PRES-toh", en: "I hope to see you again soon." },
      { fr: "Grazie per tutto.",          ipa: "GRAT-tsyeh pehr TOOT-toh",               en: "Thank you for everything." },
      { fr: "Stammi bene!",               ipa: "STAHM-mee BEH-neh",                      en: "Take care! (informal)" },
      { fr: "Non dimenticherò mai l'Italia.", ipa: "non dee-men-tee-keh-ROH my lee-TAH-lyah", en: "I will never forget Italy." },
      { fr: "L'Italia sarà sempre nel mio cuore.", ipa: "lee-TAH-lyah sah-RAH SEM-preh nel MEE-oh KWOH-reh", en: "Italy will always be in my heart." }
    ],
    grammar: "'Arrivederci' means 'until we see each other again' — more hopeful than final. 'Addio' is for true farewells. 'In bocca al lupo' (good luck) — respond 'Crepi!' (may it die!). This wolf idiom dates to hunting culture. 'Buon viaggio' is the warmest send-off you can give someone heading home.",
    practice: [
      "Memorize Buon viaggio! and Stammi bene! as your goodbyes.",
      "Practice Grazie per tutto — the complete thank-you.",
      "Learn L'Italia sarà sempre nel mio cuore for your last night."
    ]
  },
  {
    day: 29, title: "Putting It All Together", titleNative: "Mettere Tutto Insieme",
    focus: "A full Italian day using everything you know.",
    vocab: [
      { fr: "conversazione", ipa: "/konversatˈtsjone/ — kon-vehr-sahts-YOH-neh", en: "conversation" },
      { fr: "domanda",    ipa: "/doˈmanda/ — doh-MAHN-dah",         en: "question" },
      { fr: "risposta",   ipa: "/risˈposta/ — rees-POS-tah",        en: "answer" },
      { fr: "penso",      ipa: "/ˈpɛnso/ — PEN-soh",               en: "I think" },
      { fr: "voglio",     ipa: "/ˈvɔʎʎo/ — VOL-yoh",               en: "I want" },
      { fr: "so",         ipa: "/ˈso/ — soh",                      en: "I know" },
      { fr: "non so",     ipa: "/non ˈso/ — non soh",               en: "I don't know" },
      { fr: "credo",      ipa: "/ˈkrɛdo/ — KREH-doh",              en: "I believe" }
    ],
    phrases: [
      { fr: "Penso di sì.",               ipa: "PEN-soh dee see",                        en: "I think so." },
      { fr: "Penso di no.",               ipa: "PEN-soh dee noh",                        en: "I don't think so." },
      { fr: "Non sono sicuro/a.",         ipa: "non SOH-noh see-KOO-roh",                en: "I'm not sure." },
      { fr: "Ci penserò.",                ipa: "chee pen-seh-ROH",                       en: "I'll think about it." },
      { fr: "Voglio imparare ancora più italiano.", ipa: "VOL-yoh eem-pah-RAH-reh ahn-KOH-rah pyoo ee-tahl-YAH-noh", en: "I want to learn even more Italian." },
      { fr: "Credo di riuscirci.",        ipa: "KREH-doh dee ryoo-SHEER-chee",           en: "I think I can do it." },
      { fr: "Grazie per la pazienza.",    ipa: "GRAT-tsyeh pehr lah paht-TSYEN-tsah",   en: "Thank you for your patience." },
      { fr: "Siete stati gentilissimi.",  ipa: "SYEH-teh STAH-tee jen-tee-LEES-see-mee", en: "You've all been incredibly kind." }
    ],
    grammar: "You now have a solid Italian foundation. The most important thing to remember: Italians reward effort with warmth. Even broken Italian delivered with enthusiasm gets you further than perfect grammar delivered timidly. 'Sto imparando l'italiano' (I'm learning Italian) — say it proudly. It will open every door.",
    practice: [
      "Have a 2-minute conversation using only Italian.",
      "Write the 10 phrases you feel least confident about and drill them.",
      "Practice Grazie per la pazienza — say it to yourself for getting this far."
    ]
  },
  {
    day: 30, title: "Final Tips & Cultural Notes", titleNative: "Consigli Finali & Note Culturali",
    focus: "Go in confident. Italy is waiting.",
    vocab: [
      { fr: "la dolce vita",  ipa: "/la ˈdoltʃe ˈvita/ — lah DOHL-cheh VEE-tah", en: "the sweet life" },
      { fr: "passeggiata",    ipa: "/passedˈdʒata/ — pahs-sed-JAH-tah",          en: "evening stroll" },
      { fr: "spritz",         ipa: "/sprits/ — spreets",                          en: "Aperol/Campari spritz" },
      { fr: "aperitivo",      ipa: "/apperiˈtivo/ — ah-peh-ree-TEE-voh",         en: "pre-dinner drinks + snacks" },
      { fr: "dolce far niente",ipa: "/ˈdoltʃe far ˈnjente/ — DOHL-cheh far NYEN-teh", en: "the sweetness of doing nothing" },
      { fr: "bella figura",   ipa: "/ˈbella ˈfiɡura/ — BEL-lah fee-GOO-rah",    en: "making a good impression / style" },
      { fr: "piazza",         ipa: "/ˈpjattsa/ — PYAHT-tsah",                    en: "town square (heart of Italian life)" },
      { fr: "campanile",      ipa: "/kampˈanile/ — kahm-pah-NEE-leh",            en: "bell tower" }
    ],
    phrases: [
      { fr: "L'Italia è straordinaria.",  ipa: "lee-TAH-lyah eh strah-or-dee-NAH-ryah",  en: "Italy is extraordinary." },
      { fr: "Gli italiani sono incredibili.", ipa: "lyee ee-tahl-YAH-nee SOH-noh een-kreh-DEE-bee-lee", en: "Italians are incredible." },
      { fr: "Tornerò sicuramente.",       ipa: "tor-neh-ROH see-koo-rah-MEN-teh",        en: "I'll definitely come back." },
      { fr: "Avete fatto tanto per me.",  ipa: "ah-VEH-teh FAHT-toh TAN-toh pehr meh",  en: "You've done so much for me." },
      { fr: "Non ci posso credere.",      ipa: "non chee POS-soh KREH-deh-reh",          en: "I can't believe it." },
      { fr: "Cin cin!",                   ipa: "cheen cheen",                            en: "Cheers!" },
      { fr: "Viva l'Italia!",             ipa: "VEE-vah lee-TAH-lyah",                   en: "Long live Italy!" },
      { fr: "Grazie di tutto, amici.",    ipa: "GRAT-tsyeh dee TOOT-toh, ah-MEE-chee",  en: "Thank you for everything, friends." }
    ],
    grammar: "Final cultural essentials: 1) La passeggiata — the evening stroll from ~6–8pm is sacred. Join it. 2) Aperitivo hour — drinks plus free snacks, usually 6–8pm. Spritz is the classic. 3) Bella figura — looking and acting your best in public matters. 4) Never rush a meal. 5) Cappuccino is a morning drink only. You now know enough to live Italian life. Viva l'Italia!",
    practice: [
      "Say all 30 day titles in Italian from memory.",
      "Write your five favorite Italian phrases to keep forever.",
      "Book the trip. Buon viaggio!"
    ]
  }
];

// ============================================================
// CONVERSATIONS
// ============================================================
const CONVERSATIONS_IT = [
  {
    title: "Ordering at a Café",
    scene: "A classic Roman bar. You want espresso and a cornetto.",
    lines: [
      { who: "them", fr: "Buongiorno! Prego?", en: "Good morning! Can I help you?" },
      { who: "you",  fr: "Buongiorno! Un caffè e un cornetto con marmellata, per favore.", en: "Good morning! An espresso and a cornetto with jam, please." },
      { who: "them", fr: "Il caffè con zucchero?", en: "Sugar in the coffee?" },
      { who: "you",  fr: "No, senza zucchero, grazie.", en: "No, without sugar, thank you." },
      { who: "them", fr: "Si accomodi pure.", en: "Please, make yourself comfortable." },
      { who: "you",  fr: "Posso pagare adesso?", en: "Can I pay now?" },
      { who: "them", fr: "Certo. Tre euro e cinquanta.", en: "Of course. Three euros fifty." },
      { who: "you",  fr: "Grazie mille. Era ottimo!", en: "Thank you very much. It was excellent!" }
    ]
  },
  {
    title: "Hotel Check-In",
    scene: "Arriving at your hotel in Florence with a reservation.",
    lines: [
      { who: "you",  fr: "Buonasera. Ho una prenotazione a nome Cannon.", en: "Good evening. I have a reservation under the name Cannon." },
      { who: "them", fr: "Buonasera! Sì, eccola. Per due notti?", en: "Good evening! Yes, here it is. For two nights?" },
      { who: "you",  fr: "Sì, esatto.", en: "Yes, exactly." },
      { who: "them", fr: "Il passaporto, per favore.", en: "Your passport, please." },
      { who: "you",  fr: "Eccolo. Qual è la password del Wi-Fi?", en: "Here it is. What's the Wi-Fi password?" },
      { who: "them", fr: "È 'Firenze2024'. L'ascensore è a destra.", en: "It's 'Firenze2024'. The elevator is on the right." },
      { who: "you",  fr: "Perfetto. A che ora è il check-out?", en: "Perfect. What time is check-out?" },
      { who: "them", fr: "Le undici. Buona permanenza!", en: "Eleven o'clock. Enjoy your stay!" }
    ]
  },
  {
    title: "Asking for Directions",
    scene: "You're lost near the Pantheon and need to find Piazza Navona.",
    lines: [
      { who: "you",  fr: "Scusi, dov'è Piazza Navona?", en: "Excuse me, where is Piazza Navona?" },
      { who: "them", fr: "È vicino! Vada dritto, poi giri a sinistra.", en: "It's close! Go straight, then turn left." },
      { who: "you",  fr: "Quanto è lontano a piedi?", en: "How far is it on foot?" },
      { who: "them", fr: "Cinque minuti, non di più.", en: "Five minutes, no more." },
      { who: "you",  fr: "Può mostrarmelo sulla mappa?", en: "Can you show me on the map?" },
      { who: "them", fr: "Certo! Eccola qui, vede? Dopo il vicolo.", en: "Of course! Here it is, see? After the alley." },
      { who: "you",  fr: "Grazie mille, è molto gentile!", en: "Thank you very much, you're very kind!" },
      { who: "them", fr: "Prego! Buona passeggiata!", en: "You're welcome! Enjoy your walk!" }
    ]
  },
  {
    title: "At the Restaurant",
    scene: "Dinner at a trattoria in Rome — the full experience.",
    lines: [
      { who: "them", fr: "Buonasera! Hanno prenotato?", en: "Good evening! Do you have a reservation?" },
      { who: "you",  fr: "Sì, a nome Cannon, per due.", en: "Yes, under the name Cannon, for two." },
      { who: "them", fr: "Perfetto, prego si accomodino.", en: "Perfect, please come in." },
      { who: "you",  fr: "Cosa consiglia come primo?", en: "What do you recommend for the first course?" },
      { who: "them", fr: "La cacio e pepe è la nostra specialità.", en: "The cacio e pepe is our specialty." },
      { who: "you",  fr: "Perfetto. Prendo quello e l'abbacchio per secondo.", en: "Perfect. I'll have that and the lamb for the main." },
      { who: "them", fr: "Ottima scelta! Da bere?", en: "Excellent choice! To drink?" },
      { who: "you",  fr: "Un quarto di vino rosso della casa e acqua naturale.", en: "A carafe of house red and still water." }
    ]
  },
  {
    title: "Buying Train Tickets",
    scene: "At Roma Termini, buying a ticket to Florence.",
    lines: [
      { who: "you",  fr: "Buongiorno. Un biglietto per Firenze, per favore.", en: "Good morning. A ticket to Florence, please." },
      { who: "them", fr: "Andata o andata e ritorno?", en: "One way or round trip?" },
      { who: "you",  fr: "Solo andata.", en: "One way only." },
      { who: "them", fr: "Prima o seconda classe?", en: "First or second class?" },
      { who: "you",  fr: "Seconda classe va bene.", en: "Second class is fine." },
      { who: "them", fr: "Il Frecciarossa delle 10:30. Ventotto euro.", en: "The Frecciarossa at 10:30. Twenty-eight euros." },
      { who: "you",  fr: "Perfetto. Pago con carta.", en: "Perfect. I'll pay by card." },
      { who: "them", fr: "Prego. Buon viaggio!", en: "Here you go. Have a good trip!" }
    ]
  },
  {
    title: "Shopping in a Boutique",
    scene: "You're shopping for leather goods in Florence.",
    lines: [
      { who: "you",  fr: "Buongiorno. Posso guardare?", en: "Good morning. Can I look around?" },
      { who: "them", fr: "Certo, prego! Posso aiutarla?", en: "Of course, please! Can I help you?" },
      { who: "you",  fr: "Cerco una borsa in pelle. Quanto costa questa?", en: "I'm looking for a leather bag. How much is this one?" },
      { who: "them", fr: "Quella è duecento euro. È fatta a mano.", en: "That one is two hundred euros. It's handmade." },
      { who: "you",  fr: "È troppo cara. Ha qualcosa di meno caro?", en: "It's too expensive. Do you have something cheaper?" },
      { who: "them", fr: "Sì, questa a centoventi euro. Qualità eccellente.", en: "Yes, this one at one hundred twenty euros. Excellent quality." },
      { who: "you",  fr: "Può farmi uno sconto?", en: "Can you give me a discount?" },
      { who: "them", fr: "Va bene, centodici euro per lei.", en: "Alright, one hundred twelve euros for you." }
    ]
  },
  {
    title: "At the Pharmacy",
    scene: "You have a headache and need something for it.",
    lines: [
      { who: "you",  fr: "Buongiorno. Ho un mal di testa.", en: "Good morning. I have a headache." },
      { who: "them", fr: "Da quanto tempo?", en: "Since when?" },
      { who: "you",  fr: "Da stamattina. Ha dell'ibuprofene?", en: "Since this morning. Do you have ibuprofen?" },
      { who: "them", fr: "Sì, certo. Ha allergie a qualche farmaco?", en: "Yes, of course. Are you allergic to any medicine?" },
      { who: "you",  fr: "No, non ho allergie.", en: "No, I have no allergies." },
      { who: "them", fr: "Bene. Una compressa ogni sei ore, con un po' d'acqua.", en: "Good. One tablet every six hours, with some water." },
      { who: "you",  fr: "Grazie. Quant'è?", en: "Thank you. How much is it?" },
      { who: "them", fr: "Quattro euro e venti. Si riprenda presto!", en: "Four euros twenty. Get well soon!" }
    ]
  },
  {
    title: "Making Friends — Small Talk",
    scene: "You're at an aperitivo and a local strikes up a conversation.",
    lines: [
      { who: "them", fr: "Di dove sei? Non sei italiano.", en: "Where are you from? You're not Italian." },
      { who: "you",  fr: "Sono americano, di Dallas. Texas!", en: "I'm American, from Dallas. Texas!" },
      { who: "them", fr: "Texas! Interessante. E parli italiano — dove l'hai imparato?", en: "Texas! Interesting. And you speak Italian — where did you learn?" },
      { who: "you",  fr: "Sto imparando da solo. L'italiano è bellissimo.", en: "I'm learning on my own. Italian is absolutely beautiful." },
      { who: "them", fr: "Bravissimo! Un altro spritz?", en: "Excellent! Another spritz?" },
      { who: "you",  fr: "Volentieri! Cin cin!", en: "Gladly! Cheers!" },
      { who: "them", fr: "Tornerai in Italia?", en: "Will you come back to Italy?" },
      { who: "you",  fr: "Sì, sicuramente. L'Italia sarà sempre nel mio cuore.", en: "Yes, definitely. Italy will always be in my heart." }
    ]
  }
];
