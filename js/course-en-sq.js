// Albanian Course Data
// sq = ISO 639-1 code for Albanian (Shqip)
// Dialect: Standard Albanian (Tosk-based official standard)
// NOTE: Reviewed by native speaker before publishing

const COURSE_SQ = [
  {
    day: 1,
    title: "Greetings & Essentials", titleNative: "Përshëndetje & Thelbësorë",
    focus: "The words you'll use every single day.",
    vocab: [
      { fr: "Tungjatjeta", ipa: "/tunɟatˈjɛta/ — toon-dyat-YEH-ta", en: "Hello (formal)" },
      { fr: "Ç'kemi", ipa: "/tʃˈkɛmi/ — ch-KEH-mee", en: "How's it going? (informal hello)" },
      { fr: "Mirëdita", ipa: "/miɾəˈdita/ — mee-ruh-DEE-ta", en: "Good day / Good afternoon" },
      { fr: "Mirëmëngjes", ipa: "/miɾəmənˈɟɛs/ — mee-ruh-mun-DYES", en: "Good morning" },
      { fr: "Mirëmbrëma", ipa: "/miɾəmˈbɾəma/ — mee-ruh-MBRAY-ma", en: "Good evening" },
      { fr: "Po", ipa: "/po/ — poh", en: "Yes" },
      { fr: "Jo", ipa: "/jo/ — yo", en: "No" },
      { fr: "Faleminderit", ipa: "/falemindeˈrit/ — fah-leh-meen-deh-REET", en: "Thank you" }
    ],
    phrases: [
      { fr: "Mirë, faleminderit.", ipa: "MEE-ruh, fah-leh-meen-deh-REET", en: "Fine, thank you." },
      { fr: "Si jeni?", ipa: "see YEH-nee", en: "How are you? (formal)" },
      { fr: "Si je?", ipa: "see yeh", en: "How are you? (informal)" },
      { fr: "Shumë mirë.", ipa: "SHOO-muh MEE-ruh", en: "Very good." },
      { fr: "Edhe ju.", ipa: "EH-dhuh yoo", en: "You too." },
      { fr: "Natën e mirë.", ipa: "NAH-tuhn eh MEE-ruh", en: "Good night." },
      { fr: "Mirupafshim.", ipa: "mee-roo-PAF-sheem", en: "Goodbye." },
      { fr: "Shihemi!", ipa: "shee-HEH-mee", en: "See you!" }
    ],
    grammar: "Albanian has two dialects: Gheg (north, Kosovo) and Tosk (south). Standard Albanian is Tosk-based. The ë at the end of words is a soft 'uh' schwa sound — it often nearly disappears in fast speech. Mirëdita literally means 'good day' and works morning through early evening.",
    practice: [
      "Say Mirëmëngjes to someone in the morning, Mirëdita in the afternoon.",
      "Practice the ë sound: say 'Mirëdita' five times until the ë feels natural.",
      "Learn Po and Jo cold — you'll need them immediately."
    ]
  },
  {
    day: 2,
    title: "Polite Phrases & Reactions", titleNative: "Fraza të Sjellshme & Reagime",
    focus: "Sorry, please, excuse me — the social glue.",
    vocab: [
      { fr: "Ju lutem", ipa: "/ju ˈlutɛm/ — yoo LOO-tem", en: "Please / You're welcome" },
      { fr: "Më falni", ipa: "/mə ˈfalni/ — muh FAHL-nee", en: "Excuse me / I'm sorry (formal)" },
      { fr: "Më vjen keq", ipa: "/mə vjɛn kɛc/ — muh vyen kech", en: "I'm sorry (sympathy)" },
      { fr: "S'ka gjë", ipa: "/ska ɟə/ — skah dyuh", en: "No problem / It's nothing" },
      { fr: "Sigurisht", ipa: "/siɡuˈɾiʃt/ — see-goo-REESHT", en: "Of course / Certainly" },
      { fr: "Natyrisht", ipa: "/natyˈɾiʃt/ — nah-tü-REESHT", en: "Naturally / Of course" },
      { fr: "Ashtu është", ipa: "/ˈaʃtu ˈəʃtə/ — AHSHtoo UHSHtuh", en: "That's right / Exactly" },
      { fr: "Mos u shqetëso", ipa: "/mos u ʃcɛtəˈso/ — mos oo shcheh-tuh-SO", en: "Don't worry" }
    ],
    phrases: [
      { fr: "Ju lutem, një kafe.", ipa: "yoo LOO-tem, nyuh KAH-feh", en: "A coffee, please." },
      { fr: "Faleminderit shumë.", ipa: "fah-leh-meen-deh-REET SHOO-muh", en: "Thank you very much." },
      { fr: "S'ka gjë, ju lutem.", ipa: "skah dyuh, yoo LOO-tem", en: "You're welcome." },
      { fr: "A mundeni të ndihmoni?", ipa: "ah moon-DEH-nee tuh ndee-MOH-nee", en: "Can you help me?" },
      { fr: "Një moment, ju lutem.", ipa: "nyuh mo-MENT, yoo LOO-tem", en: "One moment, please." },
      { fr: "Me kënaqësi.", ipa: "meh kuh-nah-CHUH-see", en: "With pleasure." },
      { fr: "Nuk e kuptova.", ipa: "nook eh koop-TOH-vah", en: "I didn't understand." },
      { fr: "Mund të përsërisni?", ipa: "moond tuh puhr-suh-REES-nee", en: "Can you repeat that?" }
    ],
    grammar: "Ju lutem is incredibly versatile — it means 'please' when asking, and 'you're welcome' when responding. Note that 'q' in Albanian sounds like a soft 'ky' or 'ch' — not the English Q sound. 'Më vjen keq' (I'm sorry) literally translates to 'it comes badly to me.'",
    practice: [
      "Use Ju lutem at the end of every order or request today.",
      "Practice Më falni — you'll use it to get attention in shops and restaurants.",
      "Learn S'ka gjë as your go-to 'no problem' response."
    ]
  },
  {
    day: 3,
    title: "Introductions", titleNative: "Prezantimi",
    focus: "Tell people who you are and where you're from.",
    vocab: [
      { fr: "Emri im është", ipa: "/ˈɛmɾi im ˈəʃtə/ — EM-ree eem UHSHtuh", en: "My name is..." },
      { fr: "Jam nga", ipa: "/jam ŋa/ — yahm ngah", en: "I am from..." },
      { fr: "Amerikanë", ipa: "/amɛɾiˈkanə/ — ah-meh-ree-KAH-nuh", en: "American" },
      { fr: "Anglisht", ipa: "/aŋˈɡliʃt/ — ahng-GLEESHT", en: "English (language)" },
      { fr: "Shqip", ipa: "/ʃcip/ — shkeep", en: "Albanian (language)" },
      { fr: "Turist", ipa: "/tuˈɾist/ — too-REEST", en: "Tourist" },
      { fr: "Kënaqësi.", ipa: "/kənacəˈsi/ — kuh-nah-chuh-SEE", en: "Nice to meet you." },
      { fr: "Bashkëshort/e", ipa: "/baʃkəˈʃoɾt/ — bahsh-kuh-SHOHRT", en: "Husband / Wife" }
    ],
    phrases: [
      { fr: "Emri im është ___.", ipa: "EM-ree eem UHSHtuh ___", en: "My name is ___." },
      { fr: "Jam nga Shtetet e Bashkuara.", ipa: "yahm ngah SHTEH-tet eh bahsh-KOO-ah-rah", en: "I'm from the United States." },
      { fr: "Flas pak shqip.", ipa: "flahs pahk shkeep", en: "I speak a little Albanian." },
      { fr: "A flisni anglisht?", ipa: "ah FLEES-nee ahng-GLEESHT", en: "Do you speak English?" },
      { fr: "Nuk kuptoj mirë shqip.", ipa: "nook koop-TOY MEE-ruh shkeep", en: "I don't understand Albanian well." },
      { fr: "Sa vjeç jeni?", ipa: "sah vyech YEH-nee", en: "How old are you?" },
      { fr: "Jam këtu me pushime.", ipa: "yahm KUH-too meh poo-SHEE-meh", en: "I'm here on vacation." },
      { fr: "Ju falënderoj.", ipa: "yoo fah-luhn-deh-ROY", en: "I thank you (formal)." }
    ],
    grammar: "'Shqip' (Albanian) and 'Shqipëri' (Albania) both come from 'shqipe' — eagle. Albanians call their country Land of the Eagles. The double-headed eagle on the flag is everywhere. Saying 'Flas pak shqip' will earn you immediate goodwill — Albanians are proud of their language and delighted when visitors try.",
    practice: [
      "Write out: Emri im është [your name]. Jam nga [your city].",
      "Practice saying Flas pak shqip until it sounds smooth.",
      "Learn A flisni anglisht? — your emergency exit phrase."
    ]
  },
  {
    day: 4,
    title: "Numbers 1–10", titleNative: "Numrat 1–10",
    focus: "Count to ten. Everything else builds on this.",
    vocab: [
      { fr: "një", ipa: "/ɲə/ — nyuh", en: "1" },
      { fr: "dy", ipa: "/dy/ — dü (like French 'du')", en: "2" },
      { fr: "tre", ipa: "/tɾɛ/ — treh", en: "3" },
      { fr: "katër", ipa: "/ˈkatəɾ/ — KAH-tuhr", en: "4" },
      { fr: "pesë", ipa: "/ˈpɛsə/ — PEH-suh", en: "5" },
      { fr: "gjashtë", ipa: "/ˈɟaʃtə/ — DYAHSH-tuh", en: "6" },
      { fr: "shtatë", ipa: "/ˈʃtatə/ — SHTAH-tuh", en: "7" },
      { fr: "tetë", ipa: "/ˈtɛtə/ — TEH-tuh", en: "8" },
      { fr: "nëntë", ipa: "/ˈnəntə/ — NUN-tuh", en: "9" },
      { fr: "dhjetë", ipa: "/ˈðjɛtə/ — DYEH-tuh", en: "10" }
    ],
    phrases: [
      { fr: "Dy kafe, ju lutem.", ipa: "dü KAH-feh, yoo LOO-tem", en: "Two coffees, please." },
      { fr: "Tre bileta, ju lutem.", ipa: "treh bee-LEH-tah, yoo LOO-tem", en: "Three tickets, please." },
      { fr: "Katër persona.", ipa: "KAH-tuhr pehr-SOH-nah", en: "Four people." },
      { fr: "Pesë minuta.", ipa: "PEH-suh mee-NOO-tah", en: "Five minutes." },
      { fr: "Dhjetë euro.", ipa: "DYEH-tuh EH-oo-roh", en: "Ten euros." },
      { fr: "Sa kushton?", ipa: "sah koosh-TON", en: "How much does it cost?" },
      { fr: "Numër telefoni?", ipa: "NOO-muhr teh-leh-FOH-nee", en: "Phone number?" },
      { fr: "Shkruajeni, ju lutem.", ipa: "shkroo-AH-yeh-nee, yoo LOO-tem", en: "Write it down, please." }
    ],
    grammar: "Albanian numbers 1–10 are straightforward. 'Një' (1) sounds like 'nyuh' — the 'nj' combo makes a sound like the 'ny' in 'canyon'. 'Gjashtë' (6) starts with 'gj' which sounds like a soft 'dy' — think 'dyahsh'. The ë endings are soft schwas.",
    practice: [
      "Count to 10 out loud three times.",
      "Practice ordering: Një/Dy/Tre ___, ju lutem.",
      "Quiz yourself: cover the Albanian and try to recall the word for each number."
    ]
  },
  {
    day: 5,
    title: "Numbers 11–100", titleNative: "Numrat 11–100",
    focus: "Prices, addresses, and ages.",
    vocab: [
      { fr: "njëmbëdhjetë", ipa: "/ɲəmbəˈðjɛtə/ — nyum-buh-DYEH-tuh", en: "11" },
      { fr: "dymbëdhjetë", ipa: "/dymbəˈðjɛtə/ — düm-buh-DYEH-tuh", en: "12" },
      { fr: "njëzet", ipa: "/ɲəˈzɛt/ — nyuh-ZET", en: "20" },
      { fr: "njëzet e një", ipa: "/ɲəˈzɛt e ɲə/ — nyuh-ZET eh nyuh", en: "21" },
      { fr: "tridhjetë", ipa: "/tɾiˈðjɛtə/ — tree-DYEH-tuh", en: "30" },
      { fr: "dyzet", ipa: "/dyˈzɛt/ — dü-ZET", en: "40" },
      { fr: "pesëdhjetë", ipa: "/pɛsəˈðjɛtə/ — peh-suh-DYEH-tuh", en: "50" },
      { fr: "njëqind", ipa: "/ɲəˈcind/ — nyuh-CHEEND", en: "100" }
    ],
    phrases: [
      { fr: "Njëzet euro, ju lutem.", ipa: "nyuh-ZET EH-oo-roh, yoo LOO-tem", en: "Twenty euros, please." },
      { fr: "Sa është?", ipa: "sah UHSHtuh", en: "How much is it?" },
      { fr: "Shumë shtrenjtë.", ipa: "SHOO-muh SHTRENY-tuh", en: "Too expensive." },
      { fr: "Keni diçka më lirë?", ipa: "KEH-nee deech-KAH muh LEE-ruh", en: "Do you have something cheaper?" },
      { fr: "Pesëdhjetë lekë.", ipa: "peh-suh-DYEH-tuh LEH-kuh", en: "Fifty lekë." },
      { fr: "Mund të bëni zbritje?", ipa: "moond tuh BUH-nee ZBREE-tyeh", en: "Can you give a discount?" },
      { fr: "Do të marr këtë.", ipa: "doh tuh marr KUH-tuh", en: "I'll take this one." },
      { fr: "Kthejeni kusur.", ipa: "ktheh-YEH-nee koo-SOOR", en: "Keep the change." }
    ],
    grammar: "Albanian forms numbers 11-19 by adding '-mbëdhjetë' after the base number. 20 is 'njëzet' (one-twenty, a base-20 remnant). 40 is 'dyzet' (two-twenty). The Albanian currency is the Lek (lekë). Albania also uses euros in tourist areas, especially near the coast.",
    practice: [
      "Practice saying prices: 15, 25, 50, 100 lekë.",
      "Learn Sa është? and Sa kushton? — you need both.",
      "Practice the zbritje (discount) phrase for the bazaar."
    ]
  },
  {
    day: 6,
    title: "Days, Time & Dates", titleNative: "Ditët, Ora & Datat",
    focus: "Schedule, reserve, and navigate time.",
    vocab: [
      { fr: "sot", ipa: "/sot/ — soht", en: "today" },
      { fr: "nesër", ipa: "/ˈnɛsəɾ/ — NEH-suhr", en: "tomorrow" },
      { fr: "dje", ipa: "/djɛ/ — dyeh", en: "yesterday" },
      { fr: "e hënë", ipa: "/ɛ ˈhənə/ — eh HUH-nuh", en: "Monday" },
      { fr: "e martë", ipa: "/ɛ ˈmaɾtə/ — eh MAHR-tuh", en: "Tuesday" },
      { fr: "e mërkurë", ipa: "/ɛ ˈməɾkuɾə/ — eh muhr-KOO-ruh", en: "Wednesday" },
      { fr: "e premte", ipa: "/ɛ ˈpɾɛmtɛ/ — eh PREM-teh", en: "Friday" },
      { fr: "e shtunë", ipa: "/ɛ ˈʃtunə/ — eh SHTOO-nuh", en: "Saturday" }
    ],
    phrases: [
      { fr: "Çfarë ore është?", ipa: "chfah-RUH OH-reh UHSHtuh", en: "What time is it?" },
      { fr: "Është ora tre.", ipa: "UHSHtuh OH-rah treh", en: "It's three o'clock." },
      { fr: "Kur hapni?", ipa: "koor HAHP-nee", en: "When do you open?" },
      { fr: "Kur mbyllni?", ipa: "koor MBÜLL-nee", en: "When do you close?" },
      { fr: "Nesër në mëngjes.", ipa: "NEH-suhr nuh MUN-dyes", en: "Tomorrow morning." },
      { fr: "Sot pasdite.", ipa: "soht pahs-DEE-teh", en: "This afternoon." },
      { fr: "Kam rezervim për sot.", ipa: "kahm reh-zehr-VEEM puhr soht", en: "I have a reservation for today." },
      { fr: "Për sa ditë?", ipa: "puhr sah DEE-tuh", en: "For how many days?" }
    ],
    grammar: "Albanian days of the week are preceded by 'e' (feminine article). Note that Saturday 'e shtunë' comes from 'Sabbath' and Sunday 'e diel' comes from 'dies Solis' (day of the sun). Albania uses 24-hour time in formal contexts but 12-hour in casual speech.",
    practice: [
      "Say today's day of the week in Albanian.",
      "Practice Çfarë ore është? and answer with the current hour.",
      "Learn Kur hapni/mbyllni — essential for shops and restaurants."
    ]
  },
  {
    day: 7,
    title: "Week 1 Review", titleNative: "Rishikim i Javës 1",
    focus: "Lock in everything from days 1–6.",
    vocab: [
      { fr: "Kuptoni?", ipa: "/kupˈtoni/ — koop-TOH-nee", en: "Do you understand?" },
      { fr: "Kuptoj.", ipa: "/kupˈtoj/ — koop-TOY", en: "I understand." },
      { fr: "Nuk kuptoj.", ipa: "/nuk kupˈtoj/ — nook koop-TOY", en: "I don't understand." },
      { fr: "Flisni ngadalë.", ipa: "/ˈflisni ŋaˈdalə/ — FLEES-nee ngah-DAH-luh", en: "Speak slowly." },
      { fr: "Çfarë do të thotë?", ipa: "/tʃˈfaɾə do tə ˈθotə/ — chfah-RUH doh tuh THOH-tuh", en: "What does it mean?" },
      { fr: "Si thuhet?", ipa: "/si ˈθuhɛt/ — see THOO-het", en: "How do you say it?" },
      { fr: "Mund ta shkruani?", ipa: "/mund ta ʃkɾuˈani/ — moond tah shkroo-AH-nee", en: "Can you write it down?" },
      { fr: "Përsëritni, ju lutem.", ipa: "/pəɾsəˈɾitni/ — puhr-suh-REET-nee", en: "Repeat, please." }
    ],
    phrases: [
      { fr: "Një herë tjetër, ju lutem.", ipa: "nyuh HEH-ruh TYEH-tuhr, yoo LOO-tem", en: "One more time, please." },
      { fr: "Çfarë do të thotë 'mirëdita'?", ipa: "chfah-RUH doh tuh THOH-tuh mee-ruh-DEE-tah", en: "What does 'mirëdita' mean?" },
      { fr: "Si thuhet 'thank you' shqip?", ipa: "see THOO-het shkeep", en: "How do you say 'thank you' in Albanian?" },
      { fr: "Folurit tuaj është i bukur.", ipa: "foh-LOO-reet too-AHY UHSHtuh ee BOO-koor", en: "Your speech is beautiful." },
      { fr: "Po mësoj shqip.", ipa: "poh muh-SOY shkeep", en: "I'm learning Albanian." },
      { fr: "Shqipja është e vështirë.", ipa: "shkeep-YAH UHSHtuh eh vush-TEE-ruh", en: "Albanian is difficult." },
      { fr: "Por e dua.", ipa: "pohr eh DOO-ah", en: "But I love it." },
      { fr: "Vazhdoni, ju lutem.", ipa: "vahzh-DOH-nee, yoo LOO-tem", en: "Continue, please." }
    ],
    grammar: "Albanian pronunciation challenge: 'dh' sounds like the English 'th' in 'the'. 'Th' in Albanian sounds like the 'th' in 'think'. 'Gj' is like a soft 'dy'. 'Xh' is like 'j' in 'jump'. 'Q' is like a soft 'ky'. Once you hear them, they click fast.",
    practice: [
      "Review flashcards from Days 1–6.",
      "Have a 30-second conversation using only what you've learned.",
      "Write out 5 phrases from memory without looking."
    ]
  },
  {
    day: 8,
    title: "At the Café — Drinks", titleNative: "Në Kafe — Pijet",
    focus: "Order coffee like a local. Albania runs on coffee.",
    vocab: [
      { fr: "kafe", ipa: "/ˈkafɛ/ — KAH-feh", en: "coffee" },
      { fr: "kafe ekspres", ipa: "/ˈkafɛ ɛkˈspɾɛs/ — KAH-feh ek-SPRES", en: "espresso" },
      { fr: "kapuçino", ipa: "/kapuˈtʃino/ — kah-poo-CHEE-noh", en: "cappuccino" },
      { fr: "çaj", ipa: "/tʃaj/ — chay", en: "tea" },
      { fr: "ujë", ipa: "/ˈujə/ — OO-yuh", en: "water" },
      { fr: "lëng frutash", ipa: "/ləŋ ˈfɾutaʃ/ — lung FROO-tahsh", en: "fruit juice" },
      { fr: "birrë", ipa: "/ˈbiɾə/ — BEER-uh", en: "beer" },
      { fr: "raki", ipa: "/ɾaˈki/ — rah-KEE", en: "raki (Albanian brandy)" }
    ],
    phrases: [
      { fr: "Një kafe ekspres, ju lutem.", ipa: "nyuh KAH-feh ek-SPRES, yoo LOO-tem", en: "One espresso, please." },
      { fr: "Me sheqer apo pa?", ipa: "meh sheh-CHEHR ah-poh pah", en: "With sugar or without?" },
      { fr: "Pa sheqer, faleminderit.", ipa: "pah sheh-CHEHR, fah-leh-meen-deh-REET", en: "Without sugar, thank you." },
      { fr: "Një ujë, ju lutem.", ipa: "nyuh OO-yuh, yoo LOO-tem", en: "A water, please." },
      { fr: "Gaz apo pa gaz?", ipa: "gahz ah-poh pah gahz", en: "Sparkling or still?" },
      { fr: "Sa kushton kjo?", ipa: "sah koosh-TON kyoh", en: "How much is this?" },
      { fr: "Mund të paguaj tani?", ipa: "moond tuh pah-GOO-ay TAH-nee", en: "Can I pay now?" },
      { fr: "Keni menunë?", ipa: "KEH-nee meh-NOO-nuh", en: "Do you have a menu?" }
    ],
    grammar: "Albania has a serious coffee culture — the 'kafe' is tiny, strong, and social. Sitting at a café for hours is normal and expected. Raki (grape or mulberry brandy) is the national spirit and offered as hospitality everywhere — refusing is fine but accepting earns points. 'Gëzuar!' (guh-ZOO-ahr) means 'Cheers!'",
    practice: [
      "Practice: Një kafe ekspres, pa sheqer, ju lutem.",
      "Learn Gëzuar! — you'll use it.",
      "Quiz yourself: how do you ask if they have a menu?"
    ]
  },
  {
    day: 9,
    title: "At the Café — Food", titleNative: "Në Kafe — Ushqimi",
    focus: "Breakfast and café snacks.",
    vocab: [
      { fr: "bukë", ipa: "/ˈbukə/ — BOO-kuh", en: "bread" },
      { fr: "gjalpë", ipa: "/ˈɟalpə/ — DYAHL-puh", en: "butter" },
      { fr: "reçel", ipa: "/ɾɛˈtʃɛl/ — reh-CHEL", en: "jam" },
      { fr: "vezë", ipa: "/ˈvɛzə/ — VEH-zuh", en: "egg" },
      { fr: "djathë", ipa: "/ˈdjaθə/ — DYAH-thuh", en: "cheese" },
      { fr: "kos", ipa: "/kos/ — kohs", en: "yogurt" },
      { fr: "byrek", ipa: "/byˈɾɛk/ — bü-REK", en: "börek (savory pastry)" },
      { fr: "petë", ipa: "/ˈpɛtə/ — PEH-tuh", en: "pastry / dough" }
    ],
    phrases: [
      { fr: "Një byrek me djathë, ju lutem.", ipa: "nyuh bü-REK meh DYAH-thuh, yoo LOO-tem", en: "A cheese börek, please." },
      { fr: "Keni byrek me mish?", ipa: "KEH-nee bü-REK meh meesh", en: "Do you have meat börek?" },
      { fr: "Pa mish, ju lutem.", ipa: "pah meesh, yoo LOO-tem", en: "Without meat, please." },
      { fr: "Çfarë keni për mëngjes?", ipa: "chfah-RUH KEH-nee puhr MUN-dyes", en: "What do you have for breakfast?" },
      { fr: "Shumë i/e shijshëm/e!", ipa: "SHOO-muh ee shee-SHUHM", en: "Very delicious!" },
      { fr: "Edhe një herë, ju lutem.", ipa: "EH-dhuh nyuh HEH-ruh, yoo LOO-tem", en: "One more, please." },
      { fr: "Mjafton, faleminderit.", ipa: "myahf-TON, fah-leh-meen-deh-REET", en: "That's enough, thank you." },
      { fr: "Keni diçka të ëmbël?", ipa: "KEH-nee deech-KAH tuh UM-buhl", en: "Do you have anything sweet?" }
    ],
    grammar: "Byrek (börek) is the Albanian national snack — flaky pastry filled with cheese, spinach, or meat. You'll find it everywhere. Albanian adjectives agree with the gender of the noun: 'i shijshëm' (masculine), 'e shijshme' (feminine). Don't worry about this too much — people will understand you either way.",
    practice: [
      "Order: Një byrek me djathë dhe një kafe, ju lutem.",
      "Practice Shumë i shijshëm! — compliment the food.",
      "Learn Keni diçka të ëmbël? for dessert hunting."
    ]
  },
  {
    day: 10,
    title: "Restaurant Ordering", titleNative: "Porosia në Restorant",
    focus: "Sit down, order, eat well.",
    vocab: [
      { fr: "restorant", ipa: "/ɾɛstoˈɾant/ — res-toh-RANT", en: "restaurant" },
      { fr: "menu", ipa: "/mɛˈnu/ — meh-NOO", en: "menu" },
      { fr: "kamarier/e", ipa: "/kamaˈɾiɛɾ/ — kah-mah-RYEHR", en: "waiter / waitress" },
      { fr: "tavolinë", ipa: "/tavoˈlinə/ — tah-voh-LEE-nuh", en: "table" },
      { fr: "faturë", ipa: "/faˈtuɾə/ — fah-TOO-ruh", en: "bill / check" },
      { fr: "rezervim", ipa: "/ɾɛzɛɾˈvim/ — reh-zehr-VEEM", en: "reservation" },
      { fr: "porosi", ipa: "/poɾoˈsi/ — poh-roh-SEE", en: "order" },
      { fr: "meze", ipa: "/mɛˈzɛ/ — meh-ZEH", en: "appetizers / small dishes" }
    ],
    phrases: [
      { fr: "Kam rezervim.", ipa: "kahm reh-zehr-VEEM", en: "I have a reservation." },
      { fr: "Një tavolinë për dy, ju lutem.", ipa: "nyuh tah-voh-LEE-nuh puhr dü, yoo LOO-tem", en: "A table for two, please." },
      { fr: "Menunë, ju lutem.", ipa: "meh-NOO-nuh, yoo LOO-tem", en: "The menu, please." },
      { fr: "Do të porosis këtë.", ipa: "doh tuh poh-roh-SEES KUH-tuh", en: "I'll order this." },
      { fr: "Çfarë rekomandoni?", ipa: "chfah-RUH reh-koh-mahn-DOH-nee", en: "What do you recommend?" },
      { fr: "Faturën, ju lutem.", ipa: "fah-TOO-ruhn, yoo LOO-tem", en: "The bill, please." },
      { fr: "A është përfshirë shërbimi?", ipa: "ah UHSHtuh puhr-fshee-RUH shuhr-BEE-mee", en: "Is service included?" },
      { fr: "Ishte shumë e mirë.", ipa: "eesh-TEH SHOO-muh eh MEE-ruh", en: "It was very good." }
    ],
    grammar: "Albanian restaurants often bring meze (small appetizers) before the main course — these are usually included or very cheap. Tipping is not mandatory but appreciated, typically 10%. The bill is 'fatura' — just saying 'Faturën' with a slightly raised hand gets the message across.",
    practice: [
      "Role-play: you sit down, order two dishes, ask for the bill.",
      "Learn Çfarë rekomandoni? — locals love recommending the specialty.",
      "Practice Ishte shumë e mirë as you leave — it means a lot."
    ]
  },
  {
    day: 11,
    title: "Food Vocabulary", titleNative: "Fjalori i Ushqimit",
    focus: "Know what you're eating.",
    vocab: [
      { fr: "mish", ipa: "/miʃ/ — meesh", en: "meat" },
      { fr: "peshk", ipa: "/pɛʃk/ — peshk", en: "fish" },
      { fr: "pulë", ipa: "/ˈpulə/ — POO-luh", en: "chicken" },
      { fr: "qengj", ipa: "/cɛɲ/ — cheny", en: "lamb" },
      { fr: "perime", ipa: "/pɛˈɾimɛ/ — peh-REE-meh", en: "vegetables" },
      { fr: "sallatë", ipa: "/saˈlatə/ — sah-LAH-tuh", en: "salad" },
      { fr: "supë", ipa: "/ˈsupə/ — SOO-puh", en: "soup" },
      { fr: "tavë kosi", ipa: "/ˈtavə ˈkosi/ — TAH-vuh KOH-see", en: "baked lamb with yogurt (national dish)" }
    ],
    phrases: [
      { fr: "Çfarë është kjo?", ipa: "chfah-RUH UHSHtuh kyoh", en: "What is this?" },
      { fr: "A ka mish brenda?", ipa: "ah kah meesh BREN-dah", en: "Does it have meat in it?" },
      { fr: "Shumë e shijshme!", ipa: "SHOO-muh eh sheesh-MEH", en: "Very delicious!" },
      { fr: "Dua të provoj tavën.", ipa: "DOO-ah tuh proh-VOY TAH-vuhn", en: "I want to try the tave." },
      { fr: "Pa piper, ju lutem.", ipa: "pah PEE-pehr, yoo LOO-tem", en: "Without pepper, please." },
      { fr: "Pak kripë, ju lutem.", ipa: "pahk KREE-puh, yoo LOO-tem", en: "A little salt, please." },
      { fr: "A keni gjellë vegane?", ipa: "ah KEH-nee DYEL-luh veh-GAH-neh", en: "Do you have vegan dishes?" },
      { fr: "Çfarë është specialiteti?", ipa: "chfah-RUH UHSHtuh speh-chah-lee-TEH-tee", en: "What's the specialty?" }
    ],
    grammar: "Tavë kosi (lamb baked in yogurt sauce) is the Albanian national dish — order it at least once. Albanian cuisine is Mediterranean with Ottoman influences: lots of lamb, yogurt, olive oil, and fresh vegetables. The city of Gjirokastër and the coast have the best food reputations.",
    practice: [
      "Learn Çfarë është kjo? — point at anything unfamiliar.",
      "Practice A ka mish brenda? if you have dietary preferences.",
      "Commit Tavë kosi to memory — it's the one dish to order."
    ]
  },
  {
    day: 12,
    title: "Dietary Needs", titleNative: "Nevojat Ushqimore",
    focus: "Communicate what you can and can't eat.",
    vocab: [
      { fr: "alergjik/e", ipa: "/alɛɾˈɟik/ — ah-lehr-DYEEK", en: "allergic" },
      { fr: "vegjetarian/e", ipa: "/vɛɟɛtaˈɾian/ — veh-dyeh-tah-RYAHN", en: "vegetarian" },
      { fr: "vegan/e", ipa: "/ˈveɡan/ — VEH-gahn", en: "vegan" },
      { fr: "gluten", ipa: "/ˈɡlutɛn/ — GLOO-ten", en: "gluten" },
      { fr: "arrorë", ipa: "/aˈɾoɾə/ — ah-ROH-ruh", en: "nuts" },
      { fr: "qumësht", ipa: "/ˈcumɛʃt/ — CHOO-musht", en: "milk / dairy" },
      { fr: "vezë", ipa: "/ˈvɛzə/ — VEH-zuh", en: "eggs" },
      { fr: "soja", ipa: "/ˈsoja/ — SOH-yah", en: "soy" }
    ],
    phrases: [
      { fr: "Jam alergjik/e ndaj arrorëve.", ipa: "yahm ah-lehr-DYEEK ndahy ah-ROH-ruh-veh", en: "I'm allergic to nuts." },
      { fr: "Nuk ha mish.", ipa: "nook hah meesh", en: "I don't eat meat." },
      { fr: "Nuk ha produkte qumështi.", ipa: "nook hah proh-DOOK-teh CHOO-mush-tee", en: "I don't eat dairy products." },
      { fr: "A ka gluten?", ipa: "ah kah GLOO-ten", en: "Does it contain gluten?" },
      { fr: "Kjo është urgjente.", ipa: "kyoh UHSHtuh oor-DYEN-teh", en: "This is urgent / serious." },
      { fr: "A mund të gatuani pa ___?", ipa: "ah moond tuh gah-too-AH-nee pah", en: "Can you cook it without ___?" },
      { fr: "Kam intolerancë ndaj qumështit.", ipa: "kahm een-toh-leh-RAHN-tsuh ndahy CHOO-mush-teet", en: "I'm lactose intolerant." },
      { fr: "Është i/e sigurt?", ipa: "UHSHtuh ee see-GOORT", en: "Is it safe?" }
    ],
    grammar: "Albanian adjectives ending in -ik have feminine form -ike: alergjik (m) / alergjike (f). When in doubt, just use the masculine form — people will understand. For serious allergies, writing the allergy on paper and showing it is always smart anywhere.",
    practice: [
      "Write out your personal dietary statement in Albanian.",
      "Practice A ka ___? for your specific allergen.",
      "Learn Kjo është urgjente — for serious situations."
    ]
  },
  {
    day: 13,
    title: "Paying & Shopping", titleNative: "Pagesa & Blerjet",
    focus: "Handle money, cards, and the bill.",
    vocab: [
      { fr: "lekë", ipa: "/ˈlɛkə/ — LEH-kuh", en: "Albanian currency (lek)" },
      { fr: "kartë krediti", ipa: "/ˈkaɾtə kɾɛˈditi/ — KAHR-tuh kreh-DEE-tee", en: "credit card" },
      { fr: "kesh", ipa: "/kɛʃ/ — kesh", en: "cash" },
      { fr: "faturë", ipa: "/faˈtuɾə/ — fah-TOO-ruh", en: "bill / receipt" },
      { fr: "kusur", ipa: "/kuˈsuɾ/ — koo-SOOR", en: "change (money back)" },
      { fr: "zbritje", ipa: "/ˈzbɾitjɛ/ — ZBREE-tyeh", en: "discount" },
      { fr: "çmim", ipa: "/tʃmim/ — chmeem", en: "price" },
      { fr: "treg", ipa: "/tɾɛɡ/ — trek", en: "market / bazaar" }
    ],
    phrases: [
      { fr: "Pranoj kartë?", ipa: "prah-NOY KAHR-tuh", en: "Do you accept cards?" },
      { fr: "Do të paguaj me kesh.", ipa: "doh tuh pah-GOO-ay meh kesh", en: "I'll pay with cash." },
      { fr: "Sa bën gjithsej?", ipa: "sah buhn dyee-THSAY", en: "What's the total?" },
      { fr: "Mund të ndaj faturën?", ipa: "moond tuh ndahy fah-TOO-ruhn", en: "Can we split the bill?" },
      { fr: "Mbajeni kusur.", ipa: "MBAH-yeh-nee koo-SOOR", en: "Keep the change." },
      { fr: "Kthejeni kusur, ju lutem.", ipa: "ktheh-YEH-nee koo-SOOR, yoo LOO-tem", en: "Give me the change, please." },
      { fr: "Sa kushton kjo saktësisht?", ipa: "sah koosh-TON kyoh sahk-tuh-SEESHT", en: "How much exactly is this?" },
      { fr: "A keni faturë?", ipa: "ah KEH-nee fah-TOO-ruh", en: "Can I have a receipt?" }
    ],
    grammar: "Albania is mostly cash-based outside Tirana. Card acceptance is increasing in the capital and tourist areas but don't count on it in smaller towns. The exchange rate is roughly 100 lekë = €1 — easy math. ATMs (bankomat) are in most town centers.",
    practice: [
      "Practice Sa bën gjithsej? and Pranoj kartë?",
      "Memorize the cash/card vocabulary — you'll need it daily.",
      "Learn Mbajeni kusur vs Kthejeni kusur — different situations."
    ]
  },
  {
    day: 14,
    title: "Week 2 Review", titleNative: "Rishikim i Javës 2",
    focus: "Reinforce café, restaurant, and money vocabulary.",
    vocab: [
      { fr: "shijshëm/e", ipa: "/ˈʃiʃəm/ — shee-SHUHM", en: "delicious" },
      { fr: "i/e freskët", ipa: "/i ˈfɾɛskət/ — ee FRES-kuht", en: "fresh" },
      { fr: "i/e ngrohtë", ipa: "/i ˈnɾohtə/ — ee NROHT-uh", en: "warm / hot" },
      { fr: "i/e ftohtë", ipa: "/i ˈftɔhtə/ — ee FTOHT-uh", en: "cold" },
      { fr: "shumë", ipa: "/ˈʃumə/ — SHOO-muh", en: "very / a lot" },
      { fr: "pak", ipa: "/pak/ — pahk", en: "a little / few" },
      { fr: "mjaft", ipa: "/mjaft/ — myahft", en: "enough" },
      { fr: "tepër", ipa: "/ˈtɛpəɾ/ — TEH-puhr", en: "too much / too many" }
    ],
    phrases: [
      { fr: "Ishte shumë e shijshme.", ipa: "eesh-TEH SHOO-muh eh sheesh-MEH", en: "It was very delicious." },
      { fr: "Pak më shumë, ju lutem.", ipa: "pahk muh SHOO-muh, yoo LOO-tem", en: "A little more, please." },
      { fr: "Mjaft, faleminderit.", ipa: "myahft, fah-leh-meen-deh-REET", en: "That's enough, thank you." },
      { fr: "Shumë i ngrohtë.", ipa: "SHOO-muh ee NROHT-uh", en: "Very hot." },
      { fr: "Pak i ftohtë.", ipa: "pahk ee FTOHT-uh", en: "A little cold." },
      { fr: "Ku është bankomati?", ipa: "koo UHSHtuh bahn-koh-MAH-tee", en: "Where is the ATM?" },
      { fr: "Keni menu anglisht?", ipa: "KEH-nee meh-NOO ahng-GLEESHT", en: "Do you have an English menu?" },
      { fr: "Gëzuar!", ipa: "guh-ZOO-ahr", en: "Cheers!" }
    ],
    grammar: "Great time to revisit the core food/drink combos: një + [item] + ju lutem. Stack in modifiers: Një kafe, pak e ngrohtë, pa sheqer, ju lutem. (A coffee, slightly warm, no sugar, please.) Albanians are patient with language learners — just keep trying.",
    practice: [
      "Flashcard review: Days 8–13 vocab.",
      "Role-play ordering a full meal from start to bill.",
      "Practice Gëzuar! — you'll need it."
    ]
  },
  {
    day: 15,
    title: "Hotel Check-In", titleNative: "Check-In në Hotel",
    focus: "Arrive, get your room, sort out the basics.",
    vocab: [
      { fr: "hotel", ipa: "/hoˈtɛl/ — hoh-TEL", en: "hotel" },
      { fr: "dhomë", ipa: "/ˈðomə/ — DHOH-muh", en: "room" },
      { fr: "çelës", ipa: "/ˈtʃɛləs/ — CHEH-luhs", en: "key" },
      { fr: "pasaportë", ipa: "/pasaˈpoɾtə/ — pah-sah-POHR-tuh", en: "passport" },
      { fr: "natë", ipa: "/ˈnatə/ — NAH-tuh", en: "night" },
      { fr: "banjë", ipa: "/ˈbanjə/ — BAH-nyuh", en: "bathroom" },
      { fr: "lift", ipa: "/lift/ — leeft", en: "elevator" },
      { fr: "valixhe", ipa: "/vaˈliðɛ/ — vah-LEE-dheh", en: "suitcase" }
    ],
    phrases: [
      { fr: "Kam rezervim në emrin ___.", ipa: "kahm reh-zehr-VEEM nuh EM-reen", en: "I have a reservation under the name ___." },
      { fr: "Dua një dhomë për dy.", ipa: "DOO-ah nyuh DHOH-muh puhr dü", en: "I want a room for two." },
      { fr: "Sa netë do të qëndroni?", ipa: "sah NEH-tuh doh tuh CHUN-droh-nee", en: "How many nights will you stay?" },
      { fr: "Ku është lifti?", ipa: "koo UHSHtuh LEEF-tee", en: "Where is the elevator?" },
      { fr: "Wi-Fi e keni?", ipa: "WEE-FEE eh KEH-nee", en: "Do you have Wi-Fi?" },
      { fr: "Fjalëkalimi i Wi-Fi?", ipa: "fyah-luh-kah-LEE-mee ee WEE-FEE", en: "What's the Wi-Fi password?" },
      { fr: "A mund të la valixhet?", ipa: "ah moond tuh lah vah-LEE-dhet", en: "Can I leave my luggage?" },
      { fr: "Orari i check-out?", ipa: "oh-RAH-ree ee check-out", en: "What's check-out time?" }
    ],
    grammar: "Albanian uses definite forms by adding suffixes to nouns — 'dhomë' (a room) becomes 'dhoma' (the room). You don't need to master this, but noticing it helps. 'Fjalëkalim' (password) literally means 'word-passage' — a great compound word.",
    practice: [
      "Practice the check-in sentence with your actual name.",
      "Learn Wi-Fi e keni? and Fjalëkalimi? — you'll use them immediately.",
      "Commit Ku është lifti/banja? to memory."
    ]
  },
  {
    day: 16,
    title: "Hotel Room", titleNative: "Dhoma e Hotelit",
    focus: "Request what you need, report what's broken.",
    vocab: [
      { fr: "peshqir", ipa: "/pɛʃˈciɾ/ — pesh-CHEER", en: "towel" },
      { fr: "jastëk", ipa: "/ˈjastək/ — YAH-stuhk", en: "pillow" },
      { fr: "batanije", ipa: "/bataˈnijɛ/ — bah-tah-NEE-yeh", en: "blanket" },
      { fr: "kondicionier", ipa: "/konditsjoˈnjɛɾ/ — kon-dee-tsyoh-NYEHR", en: "air conditioning" },
      { fr: "ngrohje", ipa: "/ˈnɾohjɛ/ — NROH-yeh", en: "heating" },
      { fr: "çezme", ipa: "/ˈtʃɛzmɛ/ — CHEZ-meh", en: "faucet / tap" },
      { fr: "prizë", ipa: "/ˈpɾizə/ — PREE-zuh", en: "electrical outlet" },
      { fr: "dritare", ipa: "/dɾiˈtaɾɛ/ — dree-TAH-reh", en: "window" }
    ],
    phrases: [
      { fr: "Dhoma ime është shumë e ftohtë.", ipa: "DHOH-mah EE-meh UHSHtuh SHOO-muh eh FTOHT-uh", en: "My room is very cold." },
      { fr: "Kondicionieri nuk funksionon.", ipa: "kon-dee-tsyoh-NYEH-ree nook foonk-syoh-NON", en: "The air conditioning isn't working." },
      { fr: "Mund të më jepni peshqir tjetër?", ipa: "moond tuh muh YEP-nee pesh-CHEER TYEH-tuhr", en: "Can you give me another towel?" },
      { fr: "Çezma po rrjedh.", ipa: "CHEZ-mah poh RRYEDH", en: "The faucet is leaking." },
      { fr: "Drita nuk ndizet.", ipa: "DREE-tah nook NDEE-zeht", en: "The light doesn't turn on." },
      { fr: "Mund të ndërroni dhomën?", ipa: "moond tuh NDEH-rroh-nee DHOH-muhn", en: "Can you change my room?" },
      { fr: "Çelësi nuk punon.", ipa: "CHEH-luh-see nook poo-NON", en: "The key doesn't work." },
      { fr: "Nuk ka ujë të ngrohtë.", ipa: "nook kah OO-yuh tuh NROHT-uh", en: "There's no hot water." }
    ],
    grammar: "'Nuk funksionon' (it doesn't work) is your most useful hotel phrase. 'Nuk' is the negation — put it before the verb. 'Mund të' means 'can / is it possible to' — a polite way to make requests.",
    practice: [
      "Memorize Nuk funksionon — works for anything broken.",
      "Practice Mund të më jepni ___? with different nouns.",
      "Learn Mund të ndërroni dhomën? — good to know just in case."
    ]
  },
  {
    day: 17,
    title: "Directions", titleNative: "Drejtimet",
    focus: "Get un-lost.",
    vocab: [
      { fr: "majtas", ipa: "/ˈmajtas/ — MY-tahs", en: "left" },
      { fr: "djathtas", ipa: "/ˈdjaθtas/ — DYAHTH-tahs", en: "right" },
      { fr: "drejt", ipa: "/dɾɛjt/ — dret", en: "straight ahead" },
      { fr: "kthehu", ipa: "/ˈktʰɛhu/ — KTHEH-hoo", en: "turn" },
      { fr: "afër", ipa: "/ˈafəɾ/ — AH-fuhr", en: "near / close" },
      { fr: "larg", ipa: "/laɾɡ/ — lahrg", en: "far" },
      { fr: "rrugë", ipa: "/ˈruɡə/ — RROO-guh", en: "street / road" },
      { fr: "shesh", ipa: "/ʃɛʃ/ — shesh", en: "square / plaza" }
    ],
    phrases: [
      { fr: "Ku është ___?", ipa: "koo UHSHtuh ___", en: "Where is ___?" },
      { fr: "Drejtohuni majtas.", ipa: "drey-TOH-hoo-nee MY-tahs", en: "Turn left." },
      { fr: "Drejtohuni djathtas.", ipa: "drey-TOH-hoo-nee DYAHTH-tahs", en: "Turn right." },
      { fr: "Ecni drejt.", ipa: "EC-nee dreyt", en: "Go straight." },
      { fr: "Sa larg është?", ipa: "sah lahrg UHSHtuh", en: "How far is it?" },
      { fr: "Është afër.", ipa: "UHSHtuh AH-fuhr", en: "It's nearby." },
      { fr: "Mund të tregoni në hartë?", ipa: "moond tuh treh-GOH-nee nuh hahr-TUH", en: "Can you show me on the map?" },
      { fr: "Humbëm rrugën.", ipa: "HOOM-buhm RROO-guhn", en: "We got lost." }
    ],
    grammar: "Albanians are very helpful with directions. If you look lost, someone will approach you — especially in smaller towns. Expect long, detailed directions with hand gestures. The phrase 'Mund të tregoni në hartë?' with your phone map open is your best friend.",
    practice: [
      "Learn the four direction words cold: majtas, djathtas, drejt, kthehu.",
      "Practice Ku është ___? with hotel, restaurant, WC.",
      "Learn Humbëm rrugën — you'll probably need it."
    ]
  },
  {
    day: 18,
    title: "Getting Around Town", titleNative: "Lëvizja në Qytet",
    focus: "Navigate Tirana and beyond.",
    vocab: [
      { fr: "autobus", ipa: "/autoˈbus/ — ow-toh-BOOS", en: "bus" },
      { fr: "taksi", ipa: "/ˈtaksi/ — TAHK-see", en: "taxi" },
      { fr: "stacion", ipa: "/statˈsjon/ — stah-TSYON", en: "station" },
      { fr: "biletë", ipa: "/biˈlɛtə/ — bee-LEH-tuh", en: "ticket" },
      { fr: "aeroport", ipa: "/aɛɾoˈpoɾt/ — ah-eh-roh-PORT", en: "airport" },
      { fr: "qendër", ipa: "/ˈcɛndəɾ/ — CHEN-duhr", en: "center / downtown" },
      { fr: "hyrje", ipa: "/ˈhyɾjɛ/ — HÜR-yeh", en: "entrance" },
      { fr: "dalje", ipa: "/ˈdaljɛ/ — DAHL-yeh", en: "exit" }
    ],
    phrases: [
      { fr: "Ku është stacioni i autobusit?", ipa: "koo UHSHtuh stah-TSYOH-nee ee ow-toh-BOO-seet", en: "Where is the bus station?" },
      { fr: "Dua një biletë për Shkodër.", ipa: "DOO-ah nyuh bee-LEH-tuh puhr SHKOH-duhr", en: "I want a ticket to Shkodër." },
      { fr: "Sa kushton bileta?", ipa: "sah koosh-TON bee-LEH-tah", en: "How much is the ticket?" },
      { fr: "Kur niset autobusi?", ipa: "koor NEE-seht ow-toh-BOO-see", en: "When does the bus leave?" },
      { fr: "Më çoni në qendër, ju lutem.", ipa: "muh CHOH-nee nuh CHEN-duhr, yoo LOO-tem", en: "Take me to the center, please." },
      { fr: "Ndalni këtu, ju lutem.", ipa: "NDAHL-nee KUH-too, yoo LOO-tem", en: "Stop here, please." },
      { fr: "Sa do të kushtojë?", ipa: "sah doh tuh koosh-TOH-yuh", en: "How much will it cost?" },
      { fr: "Ecni drejt aeroportit.", ipa: "EC-nee dreyt ah-eh-roh-POHR-teet", en: "Go straight to the airport." }
    ],
    grammar: "Albania's intercity transport is mainly minivans ('furgon') and buses — ask at the local bus station for schedules as they're not always online. Tirana taxis use apps (Bolt is popular) or hail on the street. Always confirm the price before getting in a non-app taxi.",
    practice: [
      "Practice Dua një biletë për ___ with a destination.",
      "Learn Ndalni këtu — essential for taxis.",
      "Memorize Sa do të kushtojë? before every taxi ride."
    ]
  },
  {
    day: 19,
    title: "Transport & Travel", titleNative: "Transporti & Udhëtimi",
    focus: "Trains, ferries, and longer journeys.",
    vocab: [
      { fr: "tren", ipa: "/tɾɛn/ — tren", en: "train" },
      { fr: "traget", ipa: "/tɾaˈɡɛt/ — trah-GET", en: "ferry" },
      { fr: "makinë", ipa: "/maˈkinə/ — mah-KEE-nuh", en: "car" },
      { fr: "benzinë", ipa: "/bɛnˈzinə/ — ben-ZEE-nuh", en: "gasoline / petrol" },
      { fr: "parking", ipa: "/ˈpaɾkiŋ/ — PAHR-keeng", en: "parking" },
      { fr: "rrugë nacionale", ipa: "/ˈruɡə natsjohˈnalɛ/ — RROO-guh nah-tsyoh-NAH-leh", en: "national highway" },
      { fr: "kufir", ipa: "/kuˈfiɾ/ — koo-FEER", en: "border" },
      { fr: "doganë", ipa: "/doˈɡanə/ — doh-GAH-nuh", en: "customs" }
    ],
    phrases: [
      { fr: "Ku nis trageti për Bari?", ipa: "koo nees trah-GEH-tee puhr BAH-ree", en: "Where does the Bari ferry leave from?" },
      { fr: "Dua të marr me qira makinë.", ipa: "DOO-ah tuh marr meh CHEE-rah mah-KEE-nuh", en: "I want to rent a car." },
      { fr: "Ku është pompa e benzinës?", ipa: "koo UHSHtuh POHM-pah eh ben-ZEE-nuhs", en: "Where is the gas station?" },
      { fr: "Kam humbur bagazhin.", ipa: "kahm HOOM-boor bah-GAH-zheen", en: "I've lost my luggage." },
      { fr: "Fluturimi im është anuluar.", ipa: "floo-too-REE-mee eem UHSHtuh ah-noo-LOO-ahr", en: "My flight has been cancelled." },
      { fr: "Kur arrin trageti?", ipa: "koor AH-rreen trah-GEH-tee", en: "When does the ferry arrive?" },
      { fr: "A ka vend?", ipa: "ah kah vend", en: "Is there space / availability?" },
      { fr: "Dua vend pranë dritares.", ipa: "DOO-ah vend PRAH-nyuh dree-TAH-rehs", en: "I want a window seat." }
    ],
    grammar: "Durrës is Albania's main port with regular ferries to Italy (Bari, Ancona, Trieste). The journey is overnight — a classic Adriatic experience. Albania-Kosovo border crossings are straightforward for most Western passports. Always carry a physical copy of your passport.",
    practice: [
      "Practice Dua të marr me qira makinë.",
      "Learn Kam humbur bagazhin — hopefully you won't need it.",
      "Memorize A ka vend? — works for buses, ferries, restaurants."
    ]
  },
  {
    day: 20,
    title: "Telling Time & Schedules", titleNative: "Ora & Oraret",
    focus: "Be on time, ask about time.",
    vocab: [
      { fr: "orë", ipa: "/ˈoɾə/ — OH-ruh", en: "hour / o'clock" },
      { fr: "minutë", ipa: "/miˈnutə/ — mee-NOO-tuh", en: "minute" },
      { fr: "mëngjes", ipa: "/ˈmənɟɛs/ — MUN-dyes", en: "morning" },
      { fr: "pasdite", ipa: "/pasˈditɛ/ — pahs-DEE-teh", en: "afternoon" },
      { fr: "mbrëmje", ipa: "/ˈmbɾəmjɛ/ — MBRAY-myeh", en: "evening" },
      { fr: "natë", ipa: "/ˈnatə/ — NAH-tuh", en: "night" },
      { fr: "herët", ipa: "/ˈhɛɾət/ — HEH-ruht", en: "early" },
      { fr: "vonë", ipa: "/ˈvonə/ — VOH-nuh", en: "late" }
    ],
    phrases: [
      { fr: "Çfarë ore është tani?", ipa: "chfah-RUH OH-reh UHSHtuh TAH-nee", en: "What time is it now?" },
      { fr: "Është ora dhjetë.", ipa: "UHSHtuh OH-rah DYEH-tuh", en: "It's ten o'clock." },
      { fr: "Është ora tre e gjysmë.", ipa: "UHSHtuh OH-rah treh eh DYÜS-muh", en: "It's half past three." },
      { fr: "Kur hapet?", ipa: "koor HAH-peht", en: "When does it open?" },
      { fr: "Jam i/e vonë.", ipa: "yahm ee VOH-nuh", en: "I'm late." },
      { fr: "Erdha herët.", ipa: "EHR-dhah HEH-ruht", en: "I arrived early." },
      { fr: "Prisni pak, ju lutem.", ipa: "PREES-nee pahk, yoo LOO-tem", en: "Wait a moment, please." },
      { fr: "Nuk kemi kohë.", ipa: "nook KEH-mee KOH-uh", en: "We don't have time." }
    ],
    grammar: "Albanians express half-hours as 'e gjysmë' (and a half): 'ora tre e gjysmë' = 3:30. Quarter hours: 'e çerek' = quarter past, 'pa çerek' = quarter to. Like many southern European cultures, schedules can be approximate — being 15 minutes late is socially normal.",
    practice: [
      "Practice saying the current time in Albanian.",
      "Learn Jam i vonë and Prisni pak — you'll use both.",
      "Practice quarter and half-hour expressions."
    ]
  },
  {
    day: 21,
    title: "Week 3 Review", titleNative: "Rishikim i Javës 3",
    focus: "Lock in hotel, transport, and directions.",
    vocab: [
      { fr: "problemi", ipa: "/pɾoˈblɛmi/ — proh-BLEH-mee", en: "the problem" },
      { fr: "zgjidhje", ipa: "/ˈzɟiðjɛ/ — ZDYEE-dhyeh", en: "solution" },
      { fr: "ndihmë", ipa: "/ˈndimə/ — NDEE-muh", en: "help" },
      { fr: "informacion", ipa: "/infohɾmatˈsjon/ — een-fohr-mah-TSYON", en: "information" },
      { fr: "zyrë", ipa: "/ˈzyɾə/ — ZÜ-ruh", en: "office" },
      { fr: "spital", ipa: "/spiˈtal/ — spee-TAHL", en: "hospital" },
      { fr: "polici", ipa: "/poliˈtsi/ — poh-lee-TSEE", en: "police" },
      { fr: "ambasadë", ipa: "/ambaˈsadə/ — ahm-bah-SAH-duh", en: "embassy" }
    ],
    phrases: [
      { fr: "Ku është spitali?", ipa: "koo UHSHtuh spee-TAH-lee", en: "Where is the hospital?" },
      { fr: "Ku është policia?", ipa: "koo UHSHtuh poh-lee-TSEE-ah", en: "Where is the police station?" },
      { fr: "Kam nevojë për ndihmë.", ipa: "kahm neh-VOH-yuh puhr NDEE-muh", en: "I need help." },
      { fr: "Ku është ambasada amerikane?", ipa: "koo UHSHtuh ahm-bah-SAH-dah ah-meh-ree-KAH-neh", en: "Where is the American embassy?" },
      { fr: "Duhet të shkoj te mjeku.", ipa: "DOO-het tuh shkoy teh MYEH-koo", en: "I need to go to a doctor." },
      { fr: "Mund të thirrni ambulancën?", ipa: "moond tuh THEER-nee ahm-boo-LAHN-tsuhn", en: "Can you call an ambulance?" },
      { fr: "Ku mund të gjej Wi-Fi?", ipa: "koo moond tuh DYEY WEE-FEE", en: "Where can I find Wi-Fi?" },
      { fr: "Nuk di çfarë ndodhi.", ipa: "nook dee chfah-RUH NDOH-dhee", en: "I don't know what happened." }
    ],
    grammar: "Emergency number in Albania: 127 (police), 128 (fire), 129 (ambulance). The number 112 also works as a general European emergency line. The US Embassy in Tirana: +355 4 2247 285. Writing this in your phone before you need it is always smart.",
    practice: [
      "Review all transportation and direction vocabulary.",
      "Practice the emergency phrases out loud.",
      "Run through a scenario: lost in Tirana, need to find the hotel."
    ]
  },
  {
    day: 22,
    title: "Shopping", titleNative: "Blerjet",
    focus: "Markets, boutiques, and bargaining.",
    vocab: [
      { fr: "dyqan", ipa: "/dyˈcan/ — dü-CHAHN", en: "shop / store" },
      { fr: "treg", ipa: "/tɾɛɡ/ — trek", en: "market" },
      { fr: "çmim", ipa: "/tʃmim/ — CHMEEM", en: "price" },
      { fr: "i/e lirë", ipa: "/i ˈliɾə/ — ee LEE-ruh", en: "cheap / inexpensive" },
      { fr: "i/e shtrenjtë", ipa: "/i ˈʃtɾɛɲtə/ — ee SHTRENY-tuh", en: "expensive" },
      { fr: "madhësi", ipa: "/maðəˈsi/ — mah-dhuh-SEE", en: "size" },
      { fr: "ngjyrë", ipa: "/ˈɲɟyɾə/ — NGYÜ-ruh", en: "color" },
      { fr: "prodhim vendor", ipa: "/pɾoˈðim ˈvɛndoɾ/ — proh-DHEEM VEN-dohr", en: "local product" }
    ],
    phrases: [
      { fr: "Sa kushton kjo?", ipa: "sah koosh-TON kyoh", en: "How much is this?" },
      { fr: "Kjo është shumë e shtrenjtë.", ipa: "kyoh UHSHtuh SHOO-muh eh SHTRENY-tuh", en: "This is too expensive." },
      { fr: "A mund të ulni çmimin?", ipa: "ah moond tuh OOL-nee CHMEE-meen", en: "Can you lower the price?" },
      { fr: "Do ta marr.", ipa: "doh tah marr", en: "I'll take it." },
      { fr: "Nuk do ta marr.", ipa: "nook doh tah marr", en: "I won't take it." },
      { fr: "Keni madhësi tjetër?", ipa: "KEH-nee mah-dhuh-SEE TYEH-tuhr", en: "Do you have another size?" },
      { fr: "Mund ta provoj?", ipa: "moond tah proh-VOY", en: "Can I try it on?" },
      { fr: "Ku është dhoma e provës?", ipa: "koo UHSHtuh DHOH-mah eh PROH-vuhs", en: "Where is the fitting room?" }
    ],
    grammar: "Albania's Old Bazaar in Gjirokastër and Krujë's handicraft market are the best shopping spots. Bargaining is expected in markets, less so in fixed-price shops. Starting at 60-70% of the asking price is reasonable. The crafts specialty: carved wood, copper work, and traditional clothing.",
    practice: [
      "Practice Sa kushton? + Kjo është shumë e shtrenjtë + A mund të ulni?",
      "Learn Do ta marr / Nuk do ta marr for decisive moments.",
      "Practice Mund ta provoj? for clothes shopping."
    ]
  },
  {
    day: 23,
    title: "Colors & Descriptions", titleNative: "Ngjyrat & Përshkrimet",
    focus: "Describe what you're looking for.",
    vocab: [
      { fr: "i/e kuq", ipa: "/i kuc/ — ee kooch", en: "red" },
      { fr: "i/e kaltër", ipa: "/i ˈkaltəɾ/ — ee KAHL-tuhr", en: "blue" },
      { fr: "i/e gjelbër", ipa: "/i ˈɟɛlbəɾ/ — ee DYEL-buhr", en: "green" },
      { fr: "i/e bardhë", ipa: "/i ˈbaɾðə/ — ee BAHR-dhuh", en: "white" },
      { fr: "i/e zezë", ipa: "/i ˈzɛzə/ — ee ZEH-zuh", en: "black" },
      { fr: "i/e verdhë", ipa: "/i ˈvɛɾðə/ — ee VEHR-dhuh", en: "yellow" },
      { fr: "i/e madh", ipa: "/i maɟ/ — ee mahdy", en: "big / large" },
      { fr: "i/e vogël", ipa: "/i ˈvoɡəl/ — ee VOH-guhl", en: "small" }
    ],
    phrases: [
      { fr: "Dua diçka të kuqe.", ipa: "DOO-ah deech-KAH tuh KOO-cheh", en: "I want something red." },
      { fr: "Keni në ngjyrë tjetër?", ipa: "KEH-nee nuh NGYÜ-ruh TYEH-tuhr", en: "Do you have it in another color?" },
      { fr: "Kjo është shumë e madhe.", ipa: "kyoh UHSHtuh SHOO-muh eh MAH-dheh", en: "This is too big." },
      { fr: "Keni diçka më të vogël?", ipa: "KEH-nee deech-KAH muh tuh VOH-guhl", en: "Do you have something smaller?" },
      { fr: "Kjo ngjyrë është e bukur.", ipa: "kyoh NGYÜ-ruh UHSHtuh eh BOO-koor", en: "This color is beautiful." },
      { fr: "Dua madhësinë M.", ipa: "DOO-ah mah-dhuh-SEE-nuh M", en: "I want size M." },
      { fr: "A e keni numrin tim?", ipa: "ah eh KEH-nee NOOM-reen teem", en: "Do you have my size?" },
      { fr: "Kjo më shkon shumë mirë.", ipa: "kyoh muh shkon SHOO-muh MEE-ruh", en: "This fits me very well." }
    ],
    grammar: "Albanian colors are adjectives and agree with noun gender. Masculine: i kuq (red), i kaltër (blue). Feminine: e kuqe, e kaltër. The 'i/e' before the color is the agreement marker — don't worry about memorizing the rules, just say the color and people will understand.",
    practice: [
      "Practice naming colors on objects around you.",
      "Learn Keni në ngjyrë tjetër? — indispensable shopping phrase.",
      "Practice Kjo më shkon shumë mirë after trying something on."
    ]
  },
  {
    day: 24,
    title: "Small Talk", titleNative: "Biseda të Vogla",
    focus: "Connect with Albanians beyond transactions.",
    vocab: [
      { fr: "bukur", ipa: "/ˈbukuɾ/ — BOO-koor", en: "beautiful" },
      { fr: "interesant", ipa: "/intɛɾɛˈsant/ — een-teh-reh-SAHNT", en: "interesting" },
      { fr: "punë", ipa: "/ˈpunə/ — POO-nuh", en: "work / job" },
      { fr: "familje", ipa: "/faˈmiljɛ/ — fah-MEEL-yeh", en: "family" },
      { fr: "jetoj", ipa: "/jɛˈtoj/ — yeh-TOY", en: "I live (in...)" },
      { fr: "jam i/e martuar", ipa: "/jam i maɾˈtuar/ — yahm ee mahr-TOO-ahr", en: "I'm married" },
      { fr: "fëmijë", ipa: "/fəˈmijə/ — fuh-MEE-yuh", en: "child / children" },
      { fr: "Shqipëria", ipa: "/ʃcipəˈɾia/ — shkeep-uh-REE-ah", en: "Albania" }
    ],
    phrases: [
      { fr: "Shqipëria është shumë e bukur.", ipa: "shkeep-uh-REE-ah UHSHtuh SHOO-muh eh BOO-koor", en: "Albania is very beautiful." },
      { fr: "Njerëzit janë shumë miqësorë.", ipa: "nyeh-RUH-zeet YAH-nuh SHOO-muh mee-chuh-SOH-ruh", en: "The people are very friendly." },
      { fr: "Çfarë pune bëni?", ipa: "chfah-RUH POO-nuh BUH-nee", en: "What work do you do?" },
      { fr: "Jetoj në Dallas.", ipa: "yeh-TOY nuh Dallas", en: "I live in Dallas." },
      { fr: "Kam dy fëmijë.", ipa: "kahm dü fuh-MEE-yuh", en: "I have two children." },
      { fr: "Shqipja është e vështirë por e bukur.", ipa: "shkeep-YAH UHSHtuh eh vush-TEE-ruh pohr eh BOO-koor", en: "Albanian is hard but beautiful." },
      { fr: "Ju bëftë mirë!", ipa: "yoo BUH-ftuh MEE-ruh", en: "Enjoy! / Bon appétit!" },
      { fr: "Do të kthehem.", ipa: "doh tuh KTHEH-hem", en: "I will come back." }
    ],
    grammar: "Saying 'Shqipëria është shumë e bukur' to a local will earn you a wide smile and likely an invitation for coffee. Albanians have a strong national pride and are genuinely touched when visitors show interest in their country. The concept of 'besa' (sacred word of honor) is central to Albanian culture — a promise made is a promise kept.",
    practice: [
      "Memorize Shqipëria është shumë e bukur — say it to someone.",
      "Practice your personal intro: name, city, occupation.",
      "Learn Ju bëftë mirë! — use it before every meal."
    ]
  },
  {
    day: 25,
    title: "Emergencies", titleNative: "Emergjencat",
    focus: "Handle the unexpected calmly.",
    vocab: [
      { fr: "ndihmë!", ipa: "/ˈndimə/ — NDEE-muh", en: "Help!" },
      { fr: "zjarr!", ipa: "/zjaɾ/ — zyahr", en: "Fire!" },
      { fr: "hajdut!", ipa: "/hajˈdut/ — hay-DOOT", en: "Thief!" },
      { fr: "rrezik", ipa: "/ɾəˈzik/ — ruh-ZEEK", en: "danger" },
      { fr: "lëndim", ipa: "/ləˈndim/ — luhn-DEEM", en: "injury" },
      { fr: "mjek", ipa: "/mjɛk/ — myehk", en: "doctor" },
      { fr: "farmaci", ipa: "/faɾmaˈtsi/ — fahr-mah-TSEE", en: "pharmacy" },
      { fr: "sigurim", ipa: "/siɡuˈɾim/ — see-goo-REEM", en: "insurance" }
    ],
    phrases: [
      { fr: "Thirrni ambulancën!", ipa: "THEER-nee ahm-boo-LAHN-tsuhn", en: "Call an ambulance!" },
      { fr: "Thirrni policinë!", ipa: "THEER-nee poh-lee-TSEE-nuh", en: "Call the police!" },
      { fr: "Jam lënduar.", ipa: "yahm luhn-DOO-ahr", en: "I'm injured." },
      { fr: "Ku është farmacia?", ipa: "koo UHSHtuh fahr-mah-TSEE-ah", en: "Where is the pharmacy?" },
      { fr: "Kam nevojë për mjek.", ipa: "kahm neh-VOH-yuh puhr myehk", en: "I need a doctor." },
      { fr: "Kam humbur portofolin.", ipa: "kahm HOOM-boor pohr-toh-FOH-leen", en: "I've lost my wallet." },
      { fr: "Kam humbur pasaportën.", ipa: "kahm HOOM-boor pah-sah-POHR-tuhn", en: "I've lost my passport." },
      { fr: "Kam sigurim shëndetësor.", ipa: "kahm see-goo-REEM shun-deh-tuh-SOHR", en: "I have health insurance." }
    ],
    grammar: "Emergency numbers: 127 (police), 128 (fire), 129 (ambulance), 112 (general). Pharmacies (farmaci) are marked with a green cross and are everywhere in Albanian towns. Most pharmacists in cities speak some Italian or English. Always carry a copy of your insurance card and passport.",
    practice: [
      "Memorize the emergency numbers: 127, 128, 129.",
      "Practice Kam nevojë për mjek and Thirrni ambulancën.",
      "Learn Kam humbur portofolin/pasaportën — hopefully not needed."
    ]
  },
  {
    day: 26,
    title: "Compliments & Appreciation", titleNative: "Komplimente & Mirënjohje",
    focus: "Make people feel good. It goes a long way.",
    vocab: [
      { fr: "i/e bukur", ipa: "/i ˈbukuɾ/ — ee BOO-koor", en: "beautiful / handsome" },
      { fr: "i/e mrekullueshëm/e", ipa: "/i mɾɛkulˈluɛʃəm/ — ee mreh-koo-LOO-esh-uhm", en: "wonderful / amazing" },
      { fr: "i/e zgjuar", ipa: "/i ˈzɟuar/ — ee ZDYOO-ahr", en: "smart / clever" },
      { fr: "i/e sjellshëm/e", ipa: "/i ˈsjɛllʃəm/ — ee SYELL-shuhm", en: "kind / polite" },
      { fr: "shije", ipa: "/ˈʃijɛ/ — SHEE-yeh", en: "taste / flavor" },
      { fr: "talent", ipa: "/taˈlɛnt/ — tah-LENT", en: "talent" },
      { fr: "bujar", ipa: "/buˈjaɾ/ — boo-YAHR", en: "generous" },
      { fr: "mikpritje", ipa: "/mikˈpɾitjɛ/ — meek-PREET-yeh", en: "hospitality" }
    ],
    phrases: [
      { fr: "Faleminderit për mikpritjen.", ipa: "fah-leh-meen-deh-REET puhr meek-PREET-yen", en: "Thank you for the hospitality." },
      { fr: "Shtëpia juaj është shumë e bukur.", ipa: "shtuh-PEE-ah yoo-AHY UHSHtuh SHOO-muh eh BOO-koor", en: "Your home is very beautiful." },
      { fr: "Gjella juaj është mrekulluese.", ipa: "DYEL-lah yoo-AHY UHSHtuh mreh-koo-LOO-eh-seh", en: "Your food is wonderful." },
      { fr: "Jeni shumë bujarë.", ipa: "YEH-nee SHOO-muh boo-YAH-ruh", en: "You are very generous." },
      { fr: "Fëmijët tuaj janë të mrekullueshëm.", ipa: "fuh-MEE-yuht too-AHY YAH-nuh tuh mreh-koo-LOO-esh-uhm", en: "Your children are wonderful." },
      { fr: "Kjo është surprizë shumë e bukur.", ipa: "kyoh UHSHtuh soor-PREE-zuh SHOO-muh eh BOO-koor", en: "This is a very beautiful surprise." },
      { fr: "Nuk e harroj kurrë.", ipa: "nook eh hah-RROY KOOR-ruh", en: "I will never forget this." },
      { fr: "Jeni shumë të sjellshëm.", ipa: "YEH-nee SHOO-muh tuh SYELL-shuhm", en: "You are very kind." }
    ],
    grammar: "Albanian hospitality ('mikpritja') is legendary — hosts will insist you eat more, stay longer, take gifts home. Refusing too quickly is impolite; accept with gratitude. Saying 'Faleminderit për mikpritjen' at the end of a visit is one of the highest compliments you can give.",
    practice: [
      "Memorize Faleminderit për mikpritjen — use it every time.",
      "Practice Jeni shumë bujarë and Jeni shumë të sjellshëm.",
      "Learn Nuk e harroj kurrë — deeply meaningful to hear."
    ]
  },
  {
    day: 27,
    title: "Past & Future", titleNative: "E Kaluara & e Ardhmja",
    focus: "Talk about what happened and what's coming.",
    vocab: [
      { fr: "erdha", ipa: "/ˈɛɾða/ — EHR-dhah", en: "I came / I arrived" },
      { fr: "shkova", ipa: "/ˈʃkova/ — SHKOH-vah", en: "I went" },
      { fr: "hëngra", ipa: "/ˈhəŋɾa/ — HUNG-rah", en: "I ate" },
      { fr: "piva", ipa: "/ˈpiva/ — PEE-vah", en: "I drank" },
      { fr: "do të shkoj", ipa: "/do tə ˈʃkoj/ — doh tuh shkoy", en: "I will go" },
      { fr: "do të rri", ipa: "/do tə ˈri/ — doh tuh rree", en: "I will stay" },
      { fr: "do të kthehem", ipa: "/do tə ˈktʰɛhɛm/ — doh tuh KTHEH-hem", en: "I will return" },
      { fr: "ka qenë", ipa: "/ka ˈcɛnə/ — kah CHEH-nuh", en: "it was / there was" }
    ],
    phrases: [
      { fr: "Erdha dje nga Tirana.", ipa: "EHR-dhah dyeh ngah tee-RAH-nah", en: "I arrived from Tirana yesterday." },
      { fr: "Shkova në Gjirokastër.", ipa: "SHKOH-vah nuh dyee-roh-KAHS-tuhr", en: "I went to Gjirokastër." },
      { fr: "Hëngra tavë kosi.", ipa: "HUNG-rah TAH-vuh KOH-see", en: "I ate tave kosi." },
      { fr: "Ka qenë shumë mirë.", ipa: "kah CHEH-nuh SHOO-muh MEE-ruh", en: "It was very good." },
      { fr: "Do të shkoj nesër.", ipa: "doh tuh shkoy NEH-suhr", en: "I will go tomorrow." },
      { fr: "Do të kthehem vitin tjetër.", ipa: "doh tuh KTHEH-hem VEE-teen TYEH-tuhr", en: "I will return next year." },
      { fr: "Kam kaluar mirë.", ipa: "kahm kah-LOO-ahr MEE-ruh", en: "I had a good time." },
      { fr: "Do ta mungoj Shqipëria.", ipa: "doh tah MOON-goy shkeep-uh-REE-ah", en: "I will miss Albania." }
    ],
    grammar: "Albanian future tense is formed with 'do të' + verb: 'do të shkoj' (I will go). Past tense has a simple form similar to the above. The phrase 'Do ta mungoj Shqipëria' is a beautiful, meaningful thing to say to your Albanian friends on departure.",
    practice: [
      "Tell a mini-story about your trip using past tense verbs.",
      "Practice Do të kthehem — plan your return out loud.",
      "Learn Kam kaluar mirë as your trip-summary phrase."
    ]
  },
  {
    day: 28,
    title: "Goodbyes", titleNative: "Lamtumira",
    focus: "Leave well. Albanians remember how you end.",
    vocab: [
      { fr: "lamtumirë", ipa: "/lamtuˈmiɾə/ — lahm-too-MEE-ruh", en: "goodbye (formal, final)" },
      { fr: "mirupafshim", ipa: "/miɾuˈpafʃim/ — mee-roo-PAF-sheem", en: "goodbye (see you again)" },
      { fr: "shpejt", ipa: "/ʃpɛjt/ — shpeyt", en: "soon" },
      { fr: "mall", ipa: "/mal/ — mahl", en: "longing / missing someone" },
      { fr: "kujtim", ipa: "/kujˈtim/ — kooy-TEEM", en: "memory / souvenir" },
      { fr: "miqësi", ipa: "/micəˈsi/ — mee-chuh-SEE", en: "friendship" },
      { fr: "shpresoj", ipa: "/ʃpɾɛˈsoj/ — shpreh-SOY", en: "I hope" },
      { fr: "rrugë e mbarë", ipa: "/ˈruɡə ɛ ˈmbaɾə/ — RROO-guh eh MBAH-ruh", en: "safe travels (goodbye wish)" }
    ],
    phrases: [
      { fr: "Rrugë e mbarë!", ipa: "RROO-guh eh MBAH-ruh", en: "Safe travels!" },
      { fr: "Do të kisha mall.", ipa: "doh tuh KEE-shah mahl", en: "I will miss you." },
      { fr: "Ishte kënaqësi.", ipa: "eesh-TEH kuh-nah-CHUH-see", en: "It was a pleasure." },
      { fr: "Shpresoj të takohemi sërish.", ipa: "shpreh-SOY tuh tah-KOH-mee SUH-reesh", en: "I hope we meet again." },
      { fr: "Faleminderit për gjithçka.", ipa: "fah-leh-meen-deh-REET puhr dyeeth-CHKAH", en: "Thank you for everything." },
      { fr: "Kini kujdes!", ipa: "kee-NEE kooy-DES", en: "Take care!" },
      { fr: "Do ta mbaj mend gjithmonë.", ipa: "doh tah mbahy mend dyeeth-MOH-nuh", en: "I will always remember." },
      { fr: "Shqipëria do të jetë gjithmonë në zemrën time.", ipa: "shkeep-uh-REE-ah doh tuh yeh-TUH dyeeth-MOH-nuh nuh ZEM-ruhn TEE-meh", en: "Albania will always be in my heart." }
    ],
    grammar: "'Mirupafshim' means 'until we see each other' — the implication is you'll meet again. Use 'lamtumirë' for truly final goodbyes. 'Mall' is a uniquely Albanian/Balkan word for deep longing or missing — it can't quite be translated. Ending with 'Rrugë e mbarë' is the warmest possible farewell.",
    practice: [
      "Memorize Rrugë e mbarë! — say it to everyone leaving.",
      "Practice Faleminderit për gjithçka — the complete thank-you.",
      "Learn Shqipëria do të jetë gjithmonë në zemrën time for your last night."
    ]
  },
  {
    day: 29,
    title: "Putting It All Together", titleNative: "Duke i Bashkuar të Gjitha",
    focus: "Full conversation practice — use everything.",
    vocab: [
      { fr: "bisedë", ipa: "/biˈsɛdə/ — bee-SEH-duh", en: "conversation" },
      { fr: "pyetje", ipa: "/ˈpyɛtjɛ/ — PYEH-tyeh", en: "question" },
      { fr: "përgjigje", ipa: "/pəɾˈɟiɡjɛ/ — puhr-DYEE-gyeh", en: "answer" },
      { fr: "mendoj", ipa: "/mɛnˈdoj/ — men-DOY", en: "I think / I believe" },
      { fr: "dua", ipa: "/ˈdua/ — DOO-ah", en: "I want / I love" },
      { fr: "di", ipa: "/di/ — dee", en: "I know" },
      { fr: "nuk di", ipa: "/nuk di/ — nook dee", en: "I don't know" },
      { fr: "besoj", ipa: "/bɛˈsoj/ — beh-SOY", en: "I believe / I trust" }
    ],
    phrases: [
      { fr: "Mendoj se po.", ipa: "men-DOY seh poh", en: "I think so." },
      { fr: "Mendoj se jo.", ipa: "men-DOY seh yoh", en: "I don't think so." },
      { fr: "Nuk jam i/e sigurt.", ipa: "nook yahm ee see-GOORT", en: "I'm not sure." },
      { fr: "Do ta mendoj.", ipa: "doh tah men-DOY", en: "I'll think about it." },
      { fr: "Dua të mësoj më shumë shqip.", ipa: "DOO-ah tuh muh-SOY muh SHOO-muh shkeep", en: "I want to learn more Albanian." },
      { fr: "Besoj se mund ta bëj.", ipa: "beh-SOY seh moond tah buhy", en: "I believe I can do it." },
      { fr: "Faleminderit për durimin.", ipa: "fah-leh-meen-deh-REET puhr doo-REE-meen", en: "Thank you for your patience." },
      { fr: "Keni qenë shumë të dobishëm.", ipa: "KEH-nee CHEH-nuh SHOO-muh tuh doh-bee-SHUHM", en: "You have been very helpful." }
    ],
    grammar: "You now have a solid Albanian foundation. The key to conversational fluency: don't fear mistakes. Albanians will correct you kindly and appreciate every attempt. The best phrase to remember: 'Po mësoj shqip' (I'm learning Albanian). Those three words open more doors than any perfect grammar ever will.",
    practice: [
      "Have a 2-minute pretend conversation using only Albanian.",
      "Write down the 10 phrases you feel least confident about and drill them.",
      "Practice Faleminderit për durimin — say it to yourself for getting this far."
    ]
  },
  {
    day: 30,
    title: "Final Tips & Cultural Notes", titleNative: "Këshilla Finale & Shënime Kulturore",
    focus: "Go in confident. Albania is waiting.",
    vocab: [
      { fr: "krenari", ipa: "/kɾɛnaˈɾi/ — kreh-nah-REE", en: "pride" },
      { fr: "traditë", ipa: "/tɾaˈditə/ — trah-DEE-tuh", en: "tradition" },
      { fr: "kulturë", ipa: "/kulˈtuɾə/ — kool-TOO-ruh", en: "culture" },
      { fr: "histori", ipa: "/histoˈɾi/ — hees-toh-REE", en: "history" },
      { fr: "besa", ipa: "/ˈbɛsa/ — BEH-sah", en: "sacred word of honor" },
      { fr: "kanun", ipa: "/kaˈnun/ — kah-NOON", en: "traditional law code" },
      { fr: "shqiptar/e", ipa: "/ʃcipˈtaɾ/ — shkeep-TAHR", en: "Albanian (person)" },
      { fr: "atdhe", ipa: "/atˈðɛ/ — aht-DHEH", en: "homeland / fatherland" }
    ],
    phrases: [
      { fr: "Shqipëria është e mahnitshme.", ipa: "shkeep-uh-REE-ah UHSHtuh eh mah-NEET-shmeh", en: "Albania is magnificent." },
      { fr: "Populli shqiptar është i mrekullueshëm.", ipa: "poh-POOL-lee shkeep-TAHR UHSHtuh ee mreh-koo-LOO-esh-uhm", en: "The Albanian people are wonderful." },
      { fr: "Do të kthehem patjetër.", ipa: "doh tuh KTHEH-hem paht-YEH-tuhr", en: "I will definitely come back." },
      { fr: "Keni bërë shumë për mua.", ipa: "KEH-nee BUH-ruh SHOO-muh puhr MOO-ah", en: "You have done so much for me." },
      { fr: "Nuk mund ta besoj sa mirë ishte.", ipa: "nook moond tah beh-SOY sah MEE-ruh eesh-TEH", en: "I can't believe how good it was." },
      { fr: "Gëzuar jetën!", ipa: "guh-ZOO-ahr YEH-tuhn", en: "Cheers to life!" },
      { fr: "Rroft Shqipëria!", ipa: "rroft shkeep-uh-REE-ah", en: "Long live Albania!" },
      { fr: "Faleminderit, miqtë e mi.", ipa: "fah-leh-meen-deh-REET, meek-TUH eh mee", en: "Thank you, my friends." }
    ],
    grammar: "Final cultural notes: 1) The nod/shake confusion — Albanians historically nod for 'no' and shake for 'yes' (though this is fading in cities, so don't rely on it). 2) Besa is sacred — if someone gives you their word, it is unbreakable. 3) The two-headed eagle is everywhere and deeply meaningful. 4) Never refuse coffee when offered by a host — it's an honor to serve you. Gëzuar!",
    practice: [
      "Say all 30 day titles from memory.",
      "Write your favorite 5 Albanian phrases to keep forever.",
      "Plan your trip. Then go. Rrugë e mbarë!"
    ]
  }
];

// ============================================================
// CONVERSATIONS
// ============================================================
const CONVERSATIONS_SQ = [
  {
    title: "Ordering at a Café",
    scene: "A café in Tirana's Blloku district. You want coffee and a byrek.",
    lines: [
      { who: "them", fr: "Mirëdita! Çfarë dëshironi?", en: "Good day! What would you like?" },
      { who: "you",  fr: "Mirëdita! Një kafe ekspres dhe një byrek me djathë, ju lutem.", en: "Good day! An espresso and a cheese börek, please." },
      { who: "them", fr: "Kafe me sheqer?", en: "Coffee with sugar?" },
      { who: "you",  fr: "Jo, pa sheqer, faleminderit.", en: "No, without sugar, thank you." },
      { who: "them", fr: "Ujë gaz apo pa gaz?", en: "Sparkling water or still?" },
      { who: "you",  fr: "Pa gaz, ju lutem.", en: "Still, please." },
      { who: "them", fr: "Menjëherë!", en: "Right away!" },
      { who: "you",  fr: "Faleminderit shumë.", en: "Thank you very much." }
    ]
  },
  {
    title: "Hotel Check-In",
    scene: "Arriving at your hotel in the center of Tirana.",
    lines: [
      { who: "you",  fr: "Mirëmbrëma. Kam rezervim në emrin Canon.", en: "Good evening. I have a reservation under the name Cannon." },
      { who: "them", fr: "Mirëmbrëma! Po shikoj... po, ja. Për dy netë?", en: "Good evening! Let me check... yes, here it is. For two nights?" },
      { who: "you",  fr: "Po, saktë.", en: "Yes, that's right." },
      { who: "them", fr: "Pasaportën, ju lutem.", en: "Your passport, please." },
      { who: "you",  fr: "Urdhëroni. Fjalëkalimi i Wi-Fi?", en: "Here you go. What's the Wi-Fi password?" },
      { who: "them", fr: "Është 'Tirana2024'. Lifti është djathtas.", en: "It's 'Tirana2024'. The elevator is on the right." },
      { who: "you",  fr: "Faleminderit. Orari i check-out?", en: "Thank you. What's check-out time?" },
      { who: "them", fr: "Ora dymbëdhjetë.", en: "Twelve o'clock." }
    ]
  },
  {
    title: "Asking for Directions",
    scene: "You're looking for the National History Museum in Skanderbeg Square.",
    lines: [
      { who: "you",  fr: "Më falni, ku është Muzeu Historik Kombëtar?", en: "Excuse me, where is the National History Museum?" },
      { who: "them", fr: "Ahh, është në Sheshin Skënderbej!", en: "Ahh, it's in Skanderbeg Square!" },
      { who: "you",  fr: "Sa larg është?", en: "How far is it?" },
      { who: "them", fr: "Dhjetë minuta në këmbë. Ecni drejt, pastaj majtas.", en: "Ten minutes on foot. Go straight, then left." },
      { who: "you",  fr: "Majtas tek rruga e madhe?", en: "Left at the main road?" },
      { who: "them", fr: "Po, saktë! Do ta shihni sheshin.", en: "Yes, exactly! You'll see the square." },
      { who: "you",  fr: "Faleminderit shumë!", en: "Thank you very much!" },
      { who: "them", fr: "S'ka gjë! Rrugë e mbarë!", en: "No problem! Safe travels!" }
    ]
  },
  {
    title: "Ordering at a Restaurant",
    scene: "A traditional Albanian restaurant. You want to try the national dish.",
    lines: [
      { who: "them", fr: "Mirëdita! Ç'kemi sot?", en: "Good day! What can I get you?" },
      { who: "you",  fr: "Çfarë rekomandoni?", en: "What do you recommend?" },
      { who: "them", fr: "Tavë kosi është specialiteti ynë. Shumë e mirë!", en: "Tave kosi is our specialty. Very good!" },
      { who: "you",  fr: "Shumë mirë, dua tavë kosi. Dhe sallatë greke.", en: "Very good, I want tave kosi. And a Greek salad." },
      { who: "them", fr: "Të pini?", en: "To drink?" },
      { who: "you",  fr: "Ujë dhe një birrë, ju lutem.", en: "Water and a beer, please." },
      { who: "them", fr: "Menjëherë. Ju bëftë mirë!", en: "Right away. Enjoy your meal!" },
      { who: "you",  fr: "Faleminderit! Ishte shumë e shijshme.", en: "Thank you! It was very delicious." }
    ]
  },
  {
    title: "At the Market (Bargaining)",
    scene: "The Old Bazaar in Krujë. You want a hand-carved wooden item.",
    lines: [
      { who: "you",  fr: "Mirëdita! Sa kushton kjo?", en: "Good day! How much is this?" },
      { who: "them", fr: "Mirëdita! Njëzet e pesë euro.", en: "Good day! Twenty-five euros." },
      { who: "you",  fr: "Kjo është shumë e shtrenjtë. Pesëmbëdhjetë euro?", en: "That's too expensive. Fifteen euros?" },
      { who: "them", fr: "Jo jo, është prodhim vendor, me dorë bërë!", en: "No no, it's a local product, handmade!" },
      { who: "you",  fr: "Kuptoj. Njëzet euro?", en: "I understand. Twenty euros?" },
      { who: "them", fr: "Mirë, njëzet euro, vetëm për ju!", en: "Okay, twenty euros, just for you!" },
      { who: "you",  fr: "Shumë mirë! Do ta marr. Faleminderit.", en: "Very good! I'll take it. Thank you." },
      { who: "them", fr: "Faleminderit! Rrugë e mbarë!", en: "Thank you! Safe travels!" }
    ]
  },
  {
    title: "Asking for Help — Lost",
    scene: "You're lost in the streets of Gjirokastër old town.",
    lines: [
      { who: "you",  fr: "Më falni, humbëm rrugën. Mund të ndihmoni?", en: "Excuse me, we got lost. Can you help?" },
      { who: "them", fr: "Po sigurisht! Ku doni të shkoni?", en: "Of course! Where do you want to go?" },
      { who: "you",  fr: "Kalanë e Gjirokastrës. Ku është?", en: "The Gjirokastër Castle. Where is it?" },
      { who: "them", fr: "Aha! Shkoni drejt, pastaj djathtas tek shkallët.", en: "Aha! Go straight, then right at the stairs." },
      { who: "you",  fr: "Mund të tregoni në hartë?", en: "Can you show me on the map?" },
      { who: "them", fr: "Po, ja, këtu. Është afër, pesë minuta.", en: "Yes, here, here. It's close, five minutes." },
      { who: "you",  fr: "Shumë mirë. Faleminderit shumë!", en: "Very good. Thank you so much!" },
      { who: "them", fr: "S'ka gjë! Kini kujdes!", en: "No problem! Take care!" }
    ]
  },
  {
    title: "At the Pharmacy",
    scene: "You have a headache and need medication.",
    lines: [
      { who: "you",  fr: "Mirëdita. Kam dhimbje koke.", en: "Good day. I have a headache." },
      { who: "them", fr: "Mirëdita! Sa kohë?", en: "Good day! How long?" },
      { who: "you",  fr: "Që mëngjesin. Keni ibuprofen?", en: "Since this morning. Do you have ibuprofen?" },
      { who: "them", fr: "Po, patjetër. Keni alergji ndaj ndonjë ilaçi?", en: "Yes, of course. Are you allergic to any medicine?" },
      { who: "you",  fr: "Jo, nuk jam alergjik.", en: "No, I'm not allergic." },
      { who: "them", fr: "Mirë. Njëra tabletë çdo gjashtë orë.", en: "Good. One tablet every six hours." },
      { who: "you",  fr: "Faleminderit. Sa kushton?", en: "Thank you. How much is it?" },
      { who: "them", fr: "Treqind lekë. Shërim të shpejtë!", en: "Three hundred lekë. Get well soon!" }
    ]
  },
  {
    title: "Making Friends — Small Talk",
    scene: "You're at a café and a local strikes up conversation.",
    lines: [
      { who: "them", fr: "Nga vini ju? Nuk jeni shqiptar.", en: "Where are you from? You're not Albanian." },
      { who: "you",  fr: "Jam nga Shtetet e Bashkuara. Nga Dallas.", en: "I'm from the United States. From Dallas." },
      { who: "them", fr: "Oh, Texas! Dhe flas pak shqip — ku e mësuat?", en: "Oh, Texas! And you speak a little Albanian — where did you learn?" },
      { who: "you",  fr: "Po mësoj online. Shqipja është e vështirë por e bukur.", en: "I'm learning online. Albanian is hard but beautiful." },
      { who: "them", fr: "Woooo! Shumë mirë! Gëzuar!", en: "Woooo! Very good! Cheers!" },
      { who: "you",  fr: "Gëzuar! Shqipëria është shumë e bukur.", en: "Cheers! Albania is very beautiful." },
      { who: "them", fr: "Faleminderit! Do të ktheheni?", en: "Thank you! Will you come back?" },
      { who: "you",  fr: "Po, do të kthehem patjetër. Nuk e harroj kurrë.", en: "Yes, I will definitely come back. I will never forget it." }
    ]
  }
];
