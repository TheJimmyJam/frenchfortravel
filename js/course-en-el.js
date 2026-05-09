// Greek — 30-Day Course (English → Greek)
// COURSE_EL + CONVERSATIONS_EL

const COURSE_EL = [
  {
    day: 1,
    title: "Greetings & Essentials",
    titleNative: "Χαιρετισμοί & Βασικά",
    vocab: [
      { el: "γεια σου", en: "hello / bye (informal)", ipa: "ˈja su", phonetic: "YAH soo" },
      { el: "γεια σας", en: "hello / bye (formal/plural)", ipa: "ˈja sas", phonetic: "YAH sahs" },
      { el: "καλημέρα", en: "good morning", ipa: "kaliˈmera", phonetic: "kah-lee-MEH-rah" },
      { el: "καλησπέρα", en: "good afternoon / evening", ipa: "kalisˈpera", phonetic: "kah-lees-PEH-rah" },
      { el: "καληνύχτα", en: "good night", ipa: "kaliˈnixta", phonetic: "kah-lee-NEEKH-tah" },
      { el: "ευχαριστώ", en: "thank you", ipa: "efxariˈsto", phonetic: "ef-kha-rees-TOH" },
      { el: "παρακαλώ", en: "please / you're welcome", ipa: "parakaˈlo", phonetic: "pah-rah-kah-LOH" },
      { el: "συγγνώμη", en: "sorry / excuse me", ipa: "siɣˈnomi", phonetic: "sing-NOH-mee" },
      { el: "ναι", en: "yes", ipa: "ne", phonetic: "neh" },
      { el: "όχι", en: "no", ipa: "ˈoxi", phonetic: "OH-khee" }
    ],
    phrases: [
      { el: "Τι κάνεις;", en: "How are you? (informal)" },
      { el: "Πολύ καλά, ευχαριστώ.", en: "Very well, thank you." },
      { el: "Πώς σε λένε;", en: "What is your name? (informal)" },
      { el: "Με λένε ___.", en: "My name is ___." },
      { el: "Χαίρω πολύ.", en: "Nice to meet you." }
    ],
    grammar: "Greek has two registers: informal (σου/σε) for friends and peers, formal (σας) for strangers, elders, and service staff. When in doubt, use formal. Greeks appreciate the effort and will quickly invite you to use informal.",
    tip: "Greeks greet warmly — a handshake for first meetings, a kiss on each cheek for people you know. 'Γεια σου' works for both hello and goodbye, like Italian 'ciao'. Note: 'ναι' (yes) sounds like 'neh' — don't confuse it with English 'nay'."
  },
  {
    day: 2,
    title: "Numbers & Money",
    titleNative: "Αριθμοί & Χρήματα",
    vocab: [
      { el: "ένα", en: "one", ipa: "ˈena", phonetic: "EH-nah" },
      { el: "δύο", en: "two", ipa: "ˈðio", phonetic: "THEE-oh" },
      { el: "τρία", en: "three", ipa: "ˈtria", phonetic: "TREE-ah" },
      { el: "πέντε", en: "five", ipa: "ˈpende", phonetic: "PEN-deh" },
      { el: "δέκα", en: "ten", ipa: "ˈðeka", phonetic: "THEH-kah" },
      { el: "είκοσι", en: "twenty", ipa: "ˈikosi", phonetic: "EE-koh-see" },
      { el: "εκατό", en: "one hundred", ipa: "ekaˈto", phonetic: "eh-kah-TOH" },
      { el: "ευρώ", en: "euro", ipa: "evˈro", phonetic: "ev-ROH" },
      { el: "ακριβό", en: "expensive", ipa: "akriˈvo", phonetic: "ah-kree-VOH" },
      { el: "φτηνό", en: "cheap", ipa: "ftiˈno", phonetic: "ftee-NOH" }
    ],
    phrases: [
      { el: "Πόσο κάνει;", en: "How much does it cost?" },
      { el: "Είναι ακριβό.", en: "It's expensive." },
      { el: "Δέχεστε κάρτα;", en: "Do you accept card?" },
      { el: "Μου δίνετε την απόδειξη;", en: "Can I have the receipt?" },
      { el: "Έχετε ρέστα;", en: "Do you have change?" }
    ],
    grammar: "Greek numbers change form based on gender: 'ένας' (masc.), 'μία' (fem.), 'ένα' (neut.). For simple counting and prices, 'ένα, δύο, τρία' works fine. Prices are always in euros — Greece uses the euro since 2002.",
    tip: "Greece is increasingly cashless in tourist areas, but smaller islands, markets, and tavernas often prefer cash. Always carry some euros. Tipping is appreciated but not mandatory — rounding up or leaving 10% at restaurants is standard."
  },
  {
    day: 3,
    title: "Getting Around",
    titleNative: "Μετακίνηση",
    vocab: [
      { el: "πού", en: "where", ipa: "pu", phonetic: "poo" },
      { el: "εδώ", en: "here", ipa: "eˈðo", phonetic: "eh-THOH" },
      { el: "εκεί", en: "there", ipa: "eˈci", phonetic: "eh-KEE" },
      { el: "αριστερά", en: "left", ipa: "aristeˈra", phonetic: "ah-rees-teh-RAH" },
      { el: "δεξιά", en: "right", ipa: "ðekˈsia", phonetic: "thek-SYAH" },
      { el: "ευθεία", en: "straight ahead", ipa: "efˈθia", phonetic: "ef-THEE-ah" },
      { el: "κοντά", en: "near", ipa: "konˈda", phonetic: "kon-DAH" },
      { el: "μακριά", en: "far", ipa: "maˈkria", phonetic: "mah-KRYAH" },
      { el: "λεωφορείο", en: "bus", ipa: "leofoˈrio", phonetic: "leh-oh-foh-REE-oh" },
      { el: "ταξί", en: "taxi", ipa: "takˈsi", phonetic: "tak-SEE" }
    ],
    phrases: [
      { el: "Πού είναι ____;", en: "Where is ___?" },
      { el: "Πώς πάω στην ____;", en: "How do I get to ___?" },
      { el: "Είναι μακριά;", en: "Is it far?" },
      { el: "Στρίψτε αριστερά / δεξιά.", en: "Turn left / right." },
      { el: "Πηγαίνετε ευθεία.", en: "Go straight ahead." }
    ],
    grammar: "'Πού είναι' (where is) is your most essential phrase. Add any destination: 'Πού είναι η παραλία;' (Where is the beach?), 'Πού είναι το ξενοδοχείο;' (Where is the hotel?). Greek uses articles that change based on gender — just say the place name and you'll be understood.",
    tip: "Athens has an excellent metro (Μετρό) — cheap, clean, and air-conditioned. On islands, buses (ΚΤΕΛ) connect main towns. For remote beaches, a rental scooter or ATV is the standard. Apps: Google Maps works well in Greece, Beat is the local ride-hailing app."
  },
  {
    day: 4,
    title: "At the Café",
    titleNative: "Στο Καφενείο",
    vocab: [
      { el: "καφές", en: "coffee", ipa: "kaˈfes", phonetic: "kah-FES" },
      { el: "ελληνικός καφές", en: "Greek coffee (traditional)", ipa: "eliniˈkos kaˈfes", phonetic: "eh-lee-nee-KOS kah-FES" },
      { el: "φραπέ", en: "iced instant coffee (classic Greek)", ipa: "fraˈpe", phonetic: "frah-PEH" },
      { el: "φρέντο", en: "iced espresso (modern)", ipa: "ˈfrendo", phonetic: "FREN-doh" },
      { el: "τσάι", en: "tea", ipa: "ˈtʃai", phonetic: "CHAY" },
      { el: "νερό", en: "water", ipa: "neˈro", phonetic: "neh-ROH" },
      { el: "χυμός", en: "juice", ipa: "xiˈmos", phonetic: "khee-MOS" },
      { el: "ζάχαρη", en: "sugar", ipa: "ˈzaxari", phonetic: "ZAH-khah-ree" },
      { el: "γάλα", en: "milk", ipa: "ˈɣala", phonetic: "GHAH-lah" },
      { el: "σερβιτόρος", en: "waiter", ipa: "serviˈtoros", phonetic: "ser-vee-TOH-ros" }
    ],
    phrases: [
      { el: "Έναν καφέ, παρακαλώ.", en: "A coffee, please." },
      { el: "Χωρίς ζάχαρη, παρακαλώ.", en: "Without sugar, please." },
      { el: "Έναν φραπέ με γάλα.", en: "A frappé with milk." },
      { el: "Τον λογαριασμό, παρακαλώ.", en: "The bill, please." },
      { el: "Τι μου συστήνετε;", en: "What do you recommend?" }
    ],
    grammar: "Greek coffee orders specify sweetness level: 'σκέτο' (no sugar), 'μέτριο' (medium sweet), 'γλυκό' (sweet). This applies to Greek coffee and frappe. Say 'Έναν ελληνικό σκέτο' for a traditional unsweetened Greek coffee — locals will nod approvingly.",
    tip: "The φραπέ (frappé) — iced Nescafé shaken with water — was invented in Thessaloniki in 1957 and is a Greek institution. Freddo espresso and freddo cappuccino (both iced) are the modern evolution. Greeks take coffee very seriously and nurse it for hours. Never rush your coffee."
  },
  {
    day: 5,
    title: "At the Restaurant",
    titleNative: "Στο Εστιατόριο",
    vocab: [
      { el: "μενού", en: "menu", ipa: "meˈnu", phonetic: "meh-NOO" },
      { el: "μεζές", en: "small shared dishes", ipa: "meˈzes", phonetic: "meh-ZES" },
      { el: "σουβλάκι", en: "grilled meat skewer", ipa: "suˈvlaki", phonetic: "soov-LAH-kee" },
      { el: "μουσακάς", en: "moussaka", ipa: "musaˈkas", phonetic: "moo-sah-KAS" },
      { el: "ταραμοσαλάτα", en: "fish roe dip", ipa: "taramosaˈlata", phonetic: "tah-rah-moh-sah-LAH-tah" },
      { el: "χωριάτικη σαλάτα", en: "Greek salad", ipa: "xorˈjatiki saˈlata", phonetic: "khoh-RYAH-tee-kee sah-LAH-tah" },
      { el: "ψωμί", en: "bread", ipa: "psoˈmi", phonetic: "psoh-MEE" },
      { el: "κρασί", en: "wine", ipa: "kraˈsi", phonetic: "krah-SEE" },
      { el: "ούζο", en: "ouzo (anise spirit)", ipa: "ˈuzo", phonetic: "OO-zoh" },
      { el: "χορτοφάγος", en: "vegetarian", ipa: "xortoˈfaɣos", phonetic: "khor-toh-FAH-ghos" }
    ],
    phrases: [
      { el: "Ένα τραπέζι για δύο, παρακαλώ.", en: "A table for two, please." },
      { el: "Είμαι χορτοφάγος.", en: "I'm vegetarian." },
      { el: "Τι συστήνετε;", en: "What do you recommend?" },
      { el: "Πολύ νόστιμο!", en: "Very delicious!" },
      { el: "Μπορούμε να χωρίσουμε τον λογαριασμό;", en: "Can we split the bill?" }
    ],
    grammar: "Greek restaurants work on the meze system — order multiple small dishes for the table to share. Don't be afraid to ask 'Τι έχετε σήμερα;' (What do you have today?) — many tavernas have unlisted daily specials based on what came in fresh.",
    tip: "A proper Greek meal is slow and social. Tzatziki, taramasalata, and htipiti (spicy feta dip) arrive with bread first. The Greek salad (χωριάτικη) comes with a whole slab of feta — never crumbled. Ouzo is served with ice and water, which turns it milky white. Sip slowly."
  },
  {
    day: 6,
    title: "Shopping",
    titleNative: "Ψώνια",
    vocab: [
      { el: "κατάστημα", en: "shop / store", ipa: "kaˈtastima", phonetic: "kah-TAS-tee-mah" },
      { el: "αγορά", en: "market", ipa: "aɣoˈra", phonetic: "ah-ghoh-RAH" },
      { el: "μέγεθος", en: "size", ipa: "ˈmeɣeθos", phonetic: "MEH-gheh-thos" },
      { el: "χρώμα", en: "color", ipa: "ˈxroma", phonetic: "KHROH-mah" },
      { el: "έκπτωση", en: "discount", ipa: "ˈekptosi", phonetic: "EK-ptoh-see" },
      { el: "απόδειξη", en: "receipt", ipa: "aˈpoðiksi", phonetic: "ah-POH-theek-see" },
      { el: "προσφορά", en: "offer / deal", ipa: "prosfoˈra", phonetic: "pros-foh-RAH" },
      { el: "δώρο", en: "gift", ipa: "ˈðoro", phonetic: "THOH-roh" },
      { el: "ανταλλαγή", en: "exchange / return", ipa: "analaˈji", phonetic: "an-dah-lah-YEE" },
      { el: "ταμείο", en: "cash register / checkout", ipa: "taˈmio", phonetic: "tah-MEE-oh" }
    ],
    phrases: [
      { el: "Μπορώ να το δοκιμάσω;", en: "Can I try it on?" },
      { el: "Έχετε σε άλλο μέγεθος;", en: "Do you have it in another size?" },
      { el: "Κάνετε έκπτωση;", en: "Do you give a discount?" },
      { el: "Θα το πάρω.", en: "I'll take it." },
      { el: "Απλώς κοιτάζω.", en: "I'm just looking." }
    ],
    grammar: "'Μπορώ να ___;' (Can I ___?) is your polite request opener. 'Μπορώ να δοκιμάσω;' (Can I try?), 'Μπορώ να δω;' (Can I see?), 'Μπορώ να πληρώσω με κάρτα;' (Can I pay by card?). Pair it with a verb and you're set.",
    tip: "Greece has excellent artisan goods — olive oil, honey, ceramics, leather sandals made to measure (especially in Athens' Monastiraki area). Haggling is expected at flea markets but not in proper shops. The Athens Central Market (Βαρβάκειος) is worth visiting for the atmosphere alone."
  },
  {
    day: 7,
    title: "Accommodation",
    titleNative: "Διαμονή",
    vocab: [
      { el: "ξενοδοχείο", en: "hotel", ipa: "ksenoðoˈxio", phonetic: "kseh-noh-thoh-KHEE-oh" },
      { el: "δωμάτιο", en: "room", ipa: "ðoˈmatio", phonetic: "thoh-MAH-tee-oh" },
      { el: "κράτηση", en: "reservation", ipa: "ˈkratisi", phonetic: "KRAH-tee-see" },
      { el: "check-in / αφίξεις", en: "check-in / arrivals", ipa: "tʃek in / aˈfikseis", phonetic: "chek in / ah-FEEK-sis" },
      { el: "κλιματισμός", en: "air conditioning", ipa: "klimatizˈmos", phonetic: "klee-mah-tees-MOS" },
      { el: "πρωινό", en: "breakfast", ipa: "proiˈno", phonetic: "proh-ee-NOH" },
      { el: "πετσέτα", en: "towel", ipa: "petˈseta", phonetic: "pet-SEH-tah" },
      { el: "κλειδί", en: "key", ipa: "kliˈði", phonetic: "klee-THEE" },
      { el: "θέα", en: "view", ipa: "ˈθea", phonetic: "THEH-ah" },
      { el: "μπαλκόνι", en: "balcony", ipa: "balˈkoni", phonetic: "bal-KOH-nee" }
    ],
    phrases: [
      { el: "Έχω κράτηση.", en: "I have a reservation." },
      { el: "Έχετε ελεύθερο δωμάτιο;", en: "Do you have a free room?" },
      { el: "Τι ώρα είναι το check-out;", en: "What time is check-out?" },
      { el: "Το δωμάτιο δεν έχει ζεστό νερό.", en: "The room doesn't have hot water." },
      { el: "Έχει θέα στη θάλασσα;", en: "Does it have a sea view?" }
    ],
    grammar: "'Έχει ___' (does it have ___) is your hotel inspection tool. 'Έχει wifi;' (Does it have wifi?), 'Έχει κλιματισμό;' (Does it have AC?), 'Έχει πρωινό;' (Does it include breakfast?). Short, direct, universally understood.",
    tip: "Greek island accommodation ranges from luxury to basic. 'Studios' and 'apartments' with kitchenettes are extremely common and often better value than hotels. Always confirm if breakfast is included. August is peak season — book months ahead for popular islands like Santorini, Mykonos, and Rhodes."
  },
  {
    day: 8,
    title: "Asking for Help",
    titleNative: "Ζητώντας Βοήθεια",
    vocab: [
      { el: "βοήθεια", en: "help", ipa: "voˈiθia", phonetic: "voh-EE-thee-ah" },
      { el: "βοήθεια! (επείγον)", en: "help! (emergency)", ipa: "voˈiθia", phonetic: "voh-EE-thee-ah" },
      { el: "αστυνομία", en: "police", ipa: "astinomiˈa", phonetic: "ah-stee-noh-MEE-ah" },
      { el: "νοσοκομείο", en: "hospital", ipa: "nosoko'mio", phonetic: "noh-soh-koh-MEE-oh" },
      { el: "ασθενοφόρο", en: "ambulance", ipa: "asθenoˈforo", phonetic: "as-theh-noh-FOH-roh" },
      { el: "χαμένος", en: "lost (masc.)", ipa: "xaˈmenos", phonetic: "khah-MEH-nos" },
      { el: "κλεμμένο", en: "stolen", ipa: "kleˈmeno", phonetic: "kleh-MEH-noh" },
      { el: "πρεσβεία", en: "embassy", ipa: "prezˈvia", phonetic: "prez-VEE-ah" },
      { el: "φαρμακείο", en: "pharmacy", ipa: "farmakˈio", phonetic: "far-mah-KEE-oh" },
      { el: "έκτακτη ανάγκη", en: "emergency", ipa: "ˈektakti aˈnaŋgi", phonetic: "EK-tak-tee ah-NAN-gee" }
    ],
    phrases: [
      { el: "Χρειάζομαι βοήθεια.", en: "I need help." },
      { el: "Έχω χαθεί.", en: "I'm lost." },
      { el: "Μου έκλεψαν το πορτοφόλι.", en: "Someone stole my wallet." },
      { el: "Καλέστε την αστυνομία!", en: "Call the police!" },
      { el: "Πού είναι το πλησιέστερο νοσοκομείο;", en: "Where is the nearest hospital?" }
    ],
    grammar: "'Χρειάζομαι ___' (I need ___) covers most emergencies. 'Χρειάζομαι γιατρό' (I need a doctor), 'Χρειάζομαι βοήθεια' (I need help), 'Χρειάζομαι μεταφραστή' (I need a translator). Simple and clear.",
    tip: "Greece emergency numbers: 100 (police), 166 (ambulance), 199 (fire). The tourist police (Τουριστική Αστυνομία, tel. 171) speak English and handle visitor problems. Keep a photo of your passport on your phone. Pharmacies (marked with a green cross) can handle many minor medical issues."
  },
  {
    day: 9,
    title: "Time & Schedules",
    titleNative: "Χρόνος & Δρομολόγια",
    vocab: [
      { el: "ώρα", en: "hour / time", ipa: "ˈora", phonetic: "OH-rah" },
      { el: "σήμερα", en: "today", ipa: "ˈsimera", phonetic: "SEE-meh-rah" },
      { el: "αύριο", en: "tomorrow", ipa: "ˈavrio", phonetic: "AV-ree-oh" },
      { el: "χθες", en: "yesterday", ipa: "xθes", phonetic: "khthes" },
      { el: "εβδομάδα", en: "week", ipa: "evðoˈmaða", phonetic: "ev-thoh-MAH-thah" },
      { el: "νωρίς", en: "early", ipa: "noˈris", phonetic: "noh-REES" },
      { el: "αργά", en: "late / slowly", ipa: "arˈɣa", phonetic: "ar-GHAH" },
      { el: "τώρα", en: "now", ipa: "ˈtora", phonetic: "TOH-rah" },
      { el: "μετά", en: "after / later", ipa: "meˈta", phonetic: "meh-TAH" },
      { el: "ανοιχτό / κλειστό", en: "open / closed", ipa: "aniχˈto / klistˈo", phonetic: "ah-neekh-TOH / klees-TOH" }
    ],
    phrases: [
      { el: "Τι ώρα είναι;", en: "What time is it?" },
      { el: "Είναι δύο η ώρα.", en: "It's two o'clock." },
      { el: "Τι ώρα ανοίγει;", en: "What time does it open?" },
      { el: "Αργώ πέντε λεπτά.", en: "I'm five minutes late." },
      { el: "Αμέσως.", en: "Right away / immediately." }
    ],
    grammar: "Time in Greek: 'Είναι ___ η ώρα' (It is ___ o'clock). 'Είναι τρεις και μισή' (It's three thirty — three and a half). 'Είναι τέσσερις παρά τέταρτο' (It's quarter to four — four minus a quarter). Greeks often give times in the 12-hour format with context.",
    tip: "Greek time is famously flexible in social settings — arriving 30 minutes late to a dinner invitation is normal. Business is increasingly punctual. The classic expression 'σιγά σιγά' (slowly slowly) captures the Greek attitude to time. It's not laziness — it's philosophy."
  },
  {
    day: 10,
    title: "Weather & Seasons",
    titleNative: "Καιρός & Εποχές",
    vocab: [
      { el: "ζέστη", en: "heat / hot weather", ipa: "ˈzesti", phonetic: "ZES-tee" },
      { el: "κρύο", en: "cold", ipa: "ˈkrio", phonetic: "KREE-oh" },
      { el: "βροχή", en: "rain", ipa: "vroˈxi", phonetic: "vroh-KHEE" },
      { el: "ήλιος", en: "sun", ipa: "ˈilios", phonetic: "EE-lee-os" },
      { el: "συννεφιά", en: "cloudiness / overcast", ipa: "sineˈfia", phonetic: "see-neh-FYAH" },
      { el: "καλοκαίρι", en: "summer", ipa: "kaloˈkeri", phonetic: "kah-loh-KEH-ree" },
      { el: "χειμώνας", en: "winter", ipa: "xiˈmonas", phonetic: "khee-MOH-nas" },
      { el: "μελτέμι", en: "Aegean summer wind", ipa: "melˈtemi", phonetic: "mel-TEH-mee" },
      { el: "θερμοκρασία", en: "temperature", ipa: "θermoˈkrasia", phonetic: "ther-moh-krah-SEE-ah" },
      { el: "ομπρέλα", en: "umbrella", ipa: "omˈbrela", phonetic: "om-BREH-lah" }
    ],
    phrases: [
      { el: "Τι ζέστη!", en: "It's so hot!" },
      { el: "Θα βρέξει σήμερα;", en: "Will it rain today?" },
      { el: "Κάνει πολύ ζέστη.", en: "It's very hot." },
      { el: "Ο καιρός είναι υπέροχος.", en: "The weather is wonderful." },
      { el: "Φυσάει πολύ.", en: "It's very windy." }
    ],
    grammar: "'Κάνει ___' (it makes / it is) is used for weather: 'Κάνει ζέστη' (it's hot), 'Κάνει κρύο' (it's cold), 'Κάνει ωραία' (the weather is nice). Alternatively: 'Έχει ζέστη' (there is heat). Both forms are used.",
    tip: "The μελτέμι is the famous Aegean summer wind — a north wind that cools the islands in July-August but makes some ferry routes rough and some beaches choppy. On the Cyclades (Santorini, Mykonos, Paros), the meltemi is strong in afternoon. Plan outdoor activities in the morning."
  },
  {
    day: 11,
    title: "Family & People",
    titleNative: "Οικογένεια & Άνθρωποι",
    vocab: [
      { el: "οικογένεια", en: "family", ipa: "ikoˈʝenia", phonetic: "ee-koh-YEH-nee-ah" },
      { el: "μητέρα / μαμά", en: "mother / mom", ipa: "miˈtera / maˈma", phonetic: "mee-TEH-rah / mah-MAH" },
      { el: "πατέρας / μπαμπάς", en: "father / dad", ipa: "paˈteras / baˈbas", phonetic: "pah-TEH-ras / bah-BAS" },
      { el: "αδερφός / αδερφή", en: "brother / sister", ipa: "aðerˈfos / aðerˈfi", phonetic: "ah-ther-FOS / ah-ther-FEE" },
      { el: "παιδί", en: "child", ipa: "peˈði", phonetic: "peh-THEE" },
      { el: "παππούς / γιαγιά", en: "grandfather / grandmother", ipa: "paˈpus / jaˈja", phonetic: "pah-POOS / yah-YAH" },
      { el: "φίλος / φίλη", en: "friend (m/f)", ipa: "ˈfilos / ˈfili", phonetic: "FEE-los / FEE-lee" },
      { el: "σύντροφος", en: "partner", ipa: "ˈsindrofos", phonetic: "SEEN-droh-fos" },
      { el: "συνάδελφος", en: "colleague", ipa: "siˈnaðelfos", phonetic: "see-NAH-thel-fos" },
      { el: "γείτονας", en: "neighbor", ipa: "ˈʝitonas", phonetic: "YEE-toh-nas" }
    ],
    phrases: [
      { el: "Έχεις αδέρφια;", en: "Do you have siblings?" },
      { el: "Έχω δύο παιδιά.", en: "I have two children." },
      { el: "Η οικογένειά μου είναι μεγάλη.", en: "My family is big." },
      { el: "Αυτή είναι η καλύτερή μου φίλη.", en: "This is my best friend." },
      { el: "Είμαστε παντρεμένοι.", en: "We are married." }
    ],
    grammar: "Greek uses different possessive forms: 'μου' (my) follows the noun — 'η οικογένειά μου' (my family), 'ο φίλος μου' (my friend). The accent shifts when 'μου' is added — this is normal and you'll develop an ear for it.",
    tip: "Greek family culture is intensely close-knit. Grandparents (παππούς/γιαγιά) often help raise grandchildren daily. Sunday family lunch is sacred. Being invited to a Greek home is a significant honor — expect to be fed until you can't move and sent home with leftovers."
  },
  {
    day: 12,
    title: "Food & Drink",
    titleNative: "Φαγητό & Ποτό",
    vocab: [
      { el: "γύρος", en: "gyros (meat in pita)", ipa: "ˈʝiros", phonetic: "YEE-ros" },
      { el: "τζατζίκι", en: "tzatziki (yogurt dip)", ipa: "dzaˈdziki", phonetic: "dzah-DZEE-kee" },
      { el: "φέτα", en: "feta cheese", ipa: "ˈfeta", phonetic: "FEH-tah" },
      { el: "ελιές", en: "olives", ipa: "eˈlies", phonetic: "eh-LYES" },
      { el: "ελαιόλαδο", en: "olive oil", ipa: "eleoˈlaðo", phonetic: "eh-leh-OH-lah-thoh" },
      { el: "ρετσίνα", en: "retsina (resinated wine)", ipa: "reˈtsina", phonetic: "ret-SEE-nah" },
      { el: "μέλι", en: "honey", ipa: "ˈmeli", phonetic: "MEH-lee" },
      { el: "λουκουμάδες", en: "honey doughnuts", ipa: "lukoˈmaðes", phonetic: "loo-koh-MAH-thes" },
      { el: "μπακλαβάς", en: "baklava", ipa: "baklaˈvas", phonetic: "bah-klah-VAS" },
      { el: "ψάρι", en: "fish", ipa: "ˈpsari", phonetic: "PSAH-ree" }
    ],
    phrases: [
      { el: "Πεινάω.", en: "I'm hungry." },
      { el: "Διψάω.", en: "I'm thirsty." },
      { el: "Είναι πολύ νόστιμο.", en: "It's very delicious." },
      { el: "Θέλω άλλο ένα.", en: "I want another one." },
      { el: "Τι είναι αυτό;", en: "What is this?" }
    ],
    grammar: "'Θέλω ___' (I want ___) is direct but acceptable in restaurants. For more politeness: 'Θα ήθελα ___' (I would like ___). Both work fine in casual tavernas. 'Άλλο ένα' (another one) — useful for everything from wine to bread.",
    tip: "Greek olive oil is world-class — especially Kalamata PDO. Greek honey (thyme honey from Hymettos or Crete) is extraordinary. Real feta is only made in Greece from sheep's milk (or sheep/goat blend) — the EU legally protects the name. If you see 'white cheese in brine' abroad, it's not real feta."
  },
  {
    day: 13,
    title: "At the Beach",
    titleNative: "Στην Παραλία",
    vocab: [
      { el: "παραλία", en: "beach", ipa: "paraˈlia", phonetic: "pah-rah-LEE-ah" },
      { el: "θάλασσα", en: "sea", ipa: "ˈθalasa", phonetic: "THAH-lah-sah" },
      { el: "άμμος", en: "sand", ipa: "ˈamos", phonetic: "AH-mos" },
      { el: "κύμα", en: "wave", ipa: "ˈkima", phonetic: "KEE-mah" },
      { el: "αντηλιακό", en: "sunscreen", ipa: "andiliaˈko", phonetic: "an-dee-lee-ah-KOH" },
      { el: "ομπρέλα θαλάσσης", en: "beach umbrella", ipa: "omˈbrela θaˈlasis", phonetic: "om-BREH-lah thah-LAH-sees" },
      { el: "ξαπλώστρα", en: "sunbed / lounger", ipa: "ksaˈplostra", phonetic: "ksah-PLOS-trah" },
      { el: "ναυαγοσώστης", en: "lifeguard", ipa: "navaɣoˈsostis", phonetic: "nah-vah-ghoh-SOS-tees" },
      { el: "βαθύ", en: "deep", ipa: "vaˈθi", phonetic: "vah-THEE" },
      { el: "ρεύμα", en: "current (water)", ipa: "ˈrevma", phonetic: "REV-mah" }
    ],
    phrases: [
      { el: "Το νερό είναι ζεστό;", en: "Is the water warm?" },
      { el: "Υπάρχει επικίνδυνο ρεύμα;", en: "Is there a dangerous current?" },
      { el: "Πού μπορώ να νοικιάσω ξαπλώστρα;", en: "Where can I rent a sunbed?" },
      { el: "Πάμε να κολυμπήσουμε!", en: "Let's go swimming!" },
      { el: "Τι όμορφη παραλία!", en: "What a beautiful beach!" }
    ],
    grammar: "'Πάμε να ___!' (Let's go ___!) is your Greek 'let's do it' phrase. 'Πάμε να φάμε' (Let's go eat), 'Πάμε να κολυμπήσουμε' (Let's go swimming), 'Πάμε να δούμε' (Let's go see). Short, energetic, used constantly.",
    tip: "Greek beaches range from crowded organized (sunbeds, bars, music) to completely wild. The organized beach at Mykonos is a party; a remote pebble cove in the Peloponnese is silence and crystal water. Greek water is exceptionally clear — visibility of 10–15 meters is common. Jellyfish (τσούχτρες) appear in August — ask locals."
  },
  {
    day: 14,
    title: "Transportation",
    titleNative: "Μεταφορές",
    vocab: [
      { el: "πλοίο / φέρι", en: "ship / ferry", ipa: "ˈplio / ˈferi", phonetic: "PLEE-oh / FEH-ree" },
      { el: "αεροπλάνο", en: "airplane", ipa: "aeroplˈano", phonetic: "ah-eh-roh-PLAH-noh" },
      { el: "αεροδρόμιο", en: "airport", ipa: "aeroˈðromio", phonetic: "ah-eh-roh-THROH-mee-oh" },
      { el: "λιμάνι", en: "port / harbor", ipa: "liˈmani", phonetic: "lee-MAH-nee" },
      { el: "εισιτήριο", en: "ticket", ipa: "isiˈtirio", phonetic: "ee-see-TEE-ree-oh" },
      { el: "δρομολόγιο", en: "schedule / route", ipa: "ðromoˈloʝio", phonetic: "throh-moh-LOH-yoh" },
      { el: "καθυστέρηση", en: "delay", ipa: "kaθiˈsterisi", phonetic: "kah-thee-STEH-ree-see" },
      { el: "ενοικίαση αυτοκινήτου", en: "car rental", ipa: "enikˈiasi aftokinˈitu", phonetic: "eh-nee-KEE-ah-see af-toh-kee-NEE-too" },
      { el: "βενζίνη", en: "petrol / gas", ipa: "venˈzini", phonetic: "ven-ZEE-nee" },
      { el: "στάση", en: "bus stop", ipa: "ˈstasi", phonetic: "STAH-see" }
    ],
    phrases: [
      { el: "Πού είναι το λιμάνι;", en: "Where is the port?" },
      { el: "Ένα εισιτήριο για ___, παρακαλώ.", en: "One ticket to ___, please." },
      { el: "Το φέρι έχει καθυστέρηση;", en: "Is the ferry delayed?" },
      { el: "Θέλω να νοικιάσω αυτοκίνητο.", en: "I want to rent a car." },
      { el: "Πού είναι η στάση του λεωφορείου;", en: "Where is the bus stop?" }
    ],
    grammar: "'Θέλω να ___' (I want to ___) + verb infinitive-equivalent covers most requests: 'Θέλω να αγοράσω εισιτήριο' (I want to buy a ticket), 'Θέλω να νοικιάσω' (I want to rent). The 'να' is essential — don't drop it.",
    tip: "Greece's island-hopping by ferry is one of travel's great experiences. Book ferries in advance in July-August — they sell out. Hellenic Seaways and Blue Star Ferries are the main operators. High-speed ferries (ταχύπλοα) cost more but save hours. On small islands, a scooter or ATV rental beats everything."
  },
  {
    day: 15,
    title: "Health & Emergencies",
    titleNative: "Υγεία & Έκτακτη Ανάγκη",
    vocab: [
      { el: "γιατρός", en: "doctor", ipa: "jaˈtros", phonetic: "yah-TROS" },
      { el: "νοσοκόμα", en: "nurse", ipa: "nosoˈkoma", phonetic: "noh-soh-KOH-mah" },
      { el: "πόνος", en: "pain", ipa: "ˈponos", phonetic: "POH-nos" },
      { el: "πυρετός", en: "fever", ipa: "pireˈtos", phonetic: "pee-reh-TOS" },
      { el: "φάρμακο", en: "medicine", ipa: "ˈfarmako", phonetic: "FAR-mah-koh" },
      { el: "αλλεργία", en: "allergy", ipa: "alerˈʝia", phonetic: "ah-ler-YEE-ah" },
      { el: "συνταγή", en: "prescription", ipa: "sindaˈʝi", phonetic: "seen-dah-YEE" },
      { el: "ασφάλεια", en: "insurance", ipa: "asˈfalia", phonetic: "as-FAH-lee-ah" },
      { el: "επείγον", en: "urgent / emergency", ipa: "eˈpiɣon", phonetic: "eh-PEE-ghon" },
      { el: "με πονάει", en: "it hurts me", ipa: "me poˈnai", phonetic: "meh poh-NAY" }
    ],
    phrases: [
      { el: "Χρειάζομαι γιατρό.", en: "I need a doctor." },
      { el: "Έχω πονοκέφαλο.", en: "I have a headache." },
      { el: "Είμαι αλλεργικός/ή σε ___.", en: "I'm allergic to ___ (m/f)." },
      { el: "Με πονάει εδώ.", en: "It hurts me here." },
      { el: "Χρειάζομαι το ασθενοφόρο.", en: "I need an ambulance." }
    ],
    grammar: "Body pain: 'Έχω πόνο στο/στη ___' (I have pain in the ___). 'Έχω πόνο στο κεφάλι' (headache), 'στο στομάχι' (stomachache), 'στο λαιμό' (throat). Or simply point and say 'Με πονάει εδώ' (it hurts here).",
    tip: "EU citizens get free/reduced public healthcare in Greece with a European Health Insurance Card (EHIC). Non-EU visitors should have travel insurance. Private clinics (ιδιωτικές κλινικές) in tourist areas are faster and often have English-speaking doctors. Pharmacists can treat minor ailments directly."
  },
  {
    day: 16,
    title: "Nightlife & Entertainment",
    titleNative: "Νυχτερινή Ζωή & Ψυχαγωγία",
    vocab: [
      { el: "κλαμπ / κλαμπ", en: "nightclub", ipa: "klab", phonetic: "klab" },
      { el: "ταβέρνα", en: "taverna (traditional restaurant)", ipa: "taˈverna", phonetic: "tah-VER-nah" },
      { el: "μουσική", en: "music", ipa: "musiˈki", phonetic: "moo-see-KEE" },
      { el: "ζωντανή μουσική", en: "live music", ipa: "zonˈdani musiˈki", phonetic: "zon-DAH-nee moo-see-KEE" },
      { el: "χορός", en: "dance", ipa: "xoˈros", phonetic: "khoh-ROS" },
      { el: "είσοδος", en: "entrance / cover charge", ipa: "ˈisoðos", phonetic: "EE-soh-thos" },
      { el: "ουρά", en: "queue / line", ipa: "uˈra", phonetic: "oo-RAH" },
      { el: "σινεμά", en: "cinema", ipa: "sineˈma", phonetic: "see-neh-MAH" },
      { el: "θέατρο", en: "theatre", ipa: "ˈθeatro", phonetic: "THEH-ah-troh" },
      { el: "βραδιά", en: "evening / night out", ipa: "vraˈðia", phonetic: "vrah-THYAH" }
    ],
    phrases: [
      { el: "Βγαίνουμε απόψε;", en: "Are we going out tonight?" },
      { el: "Πόση είναι η είσοδος;", en: "How much is the cover charge?" },
      { el: "Υπάρχει ζωντανή μουσική;", en: "Is there live music?" },
      { el: "Τι ώρα αρχίζει;", en: "What time does it start?" },
      { el: "Αυτή η βραδιά είναι υπέροχη!", en: "This evening is wonderful!" }
    ],
    grammar: "'Βγαίνω' (to go out) is the key verb for nightlife. 'Βγαίνουμε;' (Shall we go out?), 'Βγήκαμε χθες' (We went out yesterday). Combine with 'απόψε' (tonight), 'αύριο' (tomorrow) for quick plans.",
    tip: "Greek summer nightlife is legendary — clubs in Mykonos and Athens don't fill until 1-2am and go until dawn. The open-air cinema (θερινός κινηματογράφος) is a uniquely Greek summer institution — films shown outdoors under the stars, usually in original language with Greek subtitles. Magical."
  },
  {
    day: 17,
    title: "At the Market",
    titleNative: "Στην Αγορά",
    vocab: [
      { el: "λαϊκή αγορά", en: "street / farmers' market", ipa: "laɪˈki aɣoˈra", phonetic: "lah-ee-KEE ah-ghoh-RAH" },
      { el: "φρούτα", en: "fruit", ipa: "ˈfruta", phonetic: "FROO-tah" },
      { el: "λαχανικά", en: "vegetables", ipa: "laxaniˈka", phonetic: "lah-khah-nee-KAH" },
      { el: "κιλό", en: "kilogram", ipa: "kiˈlo", phonetic: "kee-LOH" },
      { el: "φρέσκο", en: "fresh", ipa: "ˈfresko", phonetic: "FRES-koh" },
      { el: "ντομάτα", en: "tomato", ipa: "doˈmata", phonetic: "doh-MAH-tah" },
      { el: "σύκο", en: "fig", ipa: "ˈsiko", phonetic: "SEE-koh" },
      { el: "ρόδι", en: "pomegranate", ipa: "ˈroði", phonetic: "ROH-thee" },
      { el: "ώριμο", en: "ripe", ipa: "ˈorimo", phonetic: "OH-ree-moh" },
      { el: "δοζίνα", en: "dozen", ipa: "doˈzina", phonetic: "doh-ZEE-nah" }
    ],
    phrases: [
      { el: "Πόσο το κιλό;", en: "How much per kilo?" },
      { el: "Δώστε μου ένα κιλό ντομάτες.", en: "Give me a kilo of tomatoes." },
      { el: "Είναι ώριμο;", en: "Is it ripe?" },
      { el: "Είναι φρέσκο σήμερα;", en: "Is it fresh today?" },
      { el: "Έχετε σύκα;", en: "Do you have figs?" }
    ],
    grammar: "'Δώστε μου ___' (Give me ___) is the standard market command — direct but polite. 'Δώστε μου μισό κιλό' (give me half a kilo), 'Δώστε μου λίγο από αυτό' (give me a little of that). Point freely — vendors expect it.",
    tip: "Greek tomatoes in summer are extraordinary — genuine, ungassed, sun-ripened. The 'λαϊκή' market sets up weekly per neighborhood and is how most Greeks buy produce. Figs (σύκα) in August, pomegranates (ρόδια) in autumn, oranges from Argos in winter — Greece has a strong seasonal food culture."
  },
  {
    day: 18,
    title: "Describing Things",
    titleNative: "Περιγραφή",
    vocab: [
      { el: "μεγάλος", en: "big / large", ipa: "meˈɣalos", phonetic: "meh-GHAH-los" },
      { el: "μικρός", en: "small", ipa: "miˈkros", phonetic: "mee-KROS" },
      { el: "όμορφος", en: "beautiful / handsome", ipa: "ˈomorfos", phonetic: "OH-mor-fos" },
      { el: "άσχημος", en: "ugly", ipa: "ˈasximos", phonetic: "AS-khee-mos" },
      { el: "γρήγορος", en: "fast", ipa: "ˈɣriɣoros", phonetic: "GHREE-ghoh-ros" },
      { el: "αργός", en: "slow", ipa: "arˈɣos", phonetic: "ar-GHOS" },
      { el: "καινούριος", en: "new", ipa: "keˈnurios", phonetic: "keh-NOO-ree-os" },
      { el: "παλιός", en: "old", ipa: "paˈlios", phonetic: "pah-LIOS" },
      { el: "γεμάτος", en: "full", ipa: "ʝeˈmatos", phonetic: "yeh-MAH-tos" },
      { el: "άδειος", en: "empty", ipa: "ˈaðios", phonetic: "AH-thee-os" }
    ],
    phrases: [
      { el: "Μιλάτε πιο αργά, παρακαλώ.", en: "Please speak more slowly." },
      { el: "Είναι πολύ μεγάλο για μένα.", en: "It's too big for me." },
      { el: "Έχετε κάτι μικρότερο;", en: "Do you have something smaller?" },
      { el: "Πώς λέγεται αυτό στα ελληνικά;", en: "What is this called in Greek?" },
      { el: "Τι όμορφο!", en: "How beautiful!" }
    ],
    grammar: "Greek adjectives agree in gender, number, and case with the noun. 'Μεγάλος άντρας' (big man), 'μεγάλη γυναίκα' (big woman), 'μεγάλο σπίτι' (big house). For beginners, just use the basic form and you'll be understood — Greeks appreciate any effort.",
    tip: "'Μιλάτε πιο αργά, παρακαλώ' — this is the phrase that will save you more than any other. Greeks speak rapidly with many sounds that don't exist in English. Most will slow down and enunciate gladly. Don't be embarrassed — attempting Greek at all earns enormous goodwill."
  },
  {
    day: 19,
    title: "Feelings & Opinions",
    titleNative: "Συναισθήματα & Απόψεις",
    vocab: [
      { el: "χαρούμενος", en: "happy", ipa: "xaˈrumenos", phonetic: "khah-ROO-meh-nos" },
      { el: "λυπημένος", en: "sad", ipa: "lipiˈmenos", phonetic: "lee-pee-MEH-nos" },
      { el: "κουρασμένος", en: "tired", ipa: "kuraˈzmenos", phonetic: "koo-raz-MEH-nos" },
      { el: "ενθουσιασμένος", en: "excited / enthusiastic", ipa: "enθusiaˈzmenos", phonetic: "en-thoo-syaz-MEH-nos" },
      { el: "φοβισμένος", en: "scared", ipa: "fiˈvizmenos", phonetic: "foh-veez-MEH-nos" },
      { el: "νομίζω ότι", en: "I think that", ipa: "noˈmizo ˈoti", phonetic: "noh-MEE-zoh OH-tee" },
      { el: "συμφωνώ", en: "I agree", ipa: "simfoˈno", phonetic: "seem-foh-NOH" },
      { el: "διαφωνώ", en: "I disagree", ipa: "ðiafoˈno", phonetic: "thee-ah-foh-NOH" },
      { el: "εξαρτάται", en: "it depends", ipa: "eksarˈtate", phonetic: "ek-sar-TAH-teh" },
      { el: "κρίμα", en: "what a shame / pity", ipa: "ˈkrima", phonetic: "KREE-mah" }
    ],
    phrases: [
      { el: "Είμαι πολύ κουρασμένος/η.", en: "I'm very tired (m/f)." },
      { el: "Νομίζω ότι ναι / όχι.", en: "I think so / I don't think so." },
      { el: "Κρίμα!", en: "What a shame!" },
      { el: "Τέλεια!", en: "Perfect!" },
      { el: "Κατά τη γνώμη μου...", en: "In my opinion..." }
    ],
    grammar: "'Νομίζω ότι ___' (I think that ___) softens any opinion. 'Νομίζω ότι είναι ακριβό' (I think it's expensive). 'Δεν νομίζω' (I don't think so). Essential for agreeing, disagreeing, and navigating conversation without sounding too definitive.",
    tip: "'Ωραία!' (OH-ree-ah) — beautiful/nice/great — is the Greek all-purpose positive exclamation. 'Τέλεια!' (perfect) and 'Μπράβο!' (bravo, borrowed) are also everywhere. Greeks are expressive and use these liberally — match their energy."
  },
  {
    day: 20,
    title: "Making Friends",
    titleNative: "Κάνοντας Φίλους",
    vocab: [
      { el: "ωραίος", en: "nice / cool / great", ipa: "oˈreos", phonetic: "oh-REH-os" },
      { el: "φιλόξενος", en: "hospitable / welcoming", ipa: "fiˈloksenos", phonetic: "fee-LOK-seh-nos" },
      { el: "παρέα", en: "company / group of friends", ipa: "paˈrea", phonetic: "pah-REH-ah" },
      { el: "μαζί", en: "together", ipa: "maˈzi", phonetic: "mah-ZEE" },
      { el: "κέφι", en: "high spirits / good mood", ipa: "ˈkefi", phonetic: "KEH-fee" },
      { el: "φιλοτιμία", en: "pride / sense of honor (untranslatable)", ipa: "filotiˈmia", phonetic: "fee-loh-tee-MEE-ah" },
      { el: "κεράσω", en: "to treat someone (buy drinks)", ipa: "keˈraso", phonetic: "keh-RAH-soh" },
      { el: "χαλαρός", en: "relaxed / laid-back", ipa: "xalaˈros", phonetic: "khah-lah-ROS" },
      { el: "σύστημα", en: "system / network (slang: connections)", ipa: "ˈsistima", phonetic: "SEES-tee-mah" },
      { el: "ξένος", en: "foreigner / stranger / guest", ipa: "ˈksenos", phonetic: "KSEH-nos" }
    ],
    phrases: [
      { el: "Είσαι από εδώ;", en: "Are you from here?" },
      { el: "Από πού είσαι;", en: "Where are you from?" },
      { el: "Τι σου αρέσει να κάνεις;", en: "What do you like to do?" },
      { el: "Να ανταλλάξουμε αριθμούς;", en: "Shall we exchange numbers?" },
      { el: "Σε κερνώ εγώ!", en: "This round is on me!" }
    ],
    grammar: "'Σε κερνώ' (I'm treating you / this is on me) — knowing this phrase is social gold. 'Κερνώ' means to buy drinks or food for others. Greeks take pride in treating guests — refusing can cause offense. Accept graciously and reciprocate when you can.",
    tip: "'Φιλοτιμία' is one of the untranslatable Greek concepts — a deep pride in doing right by others, in being generous and honorable. It's why a Greek host will insist you eat more, why a stranger will go out of their way to help you. 'Κέφι' is the joyous high spirits of a good evening — you'll know it when you feel it."
  },
  {
    day: 21,
    title: "Greek Culture",
    titleNative: "Ελληνική Κουλτούρα",
    vocab: [
      { el: "Ακρόπολη", en: "Acropolis", ipa: "aˈkropoli", phonetic: "ah-KROH-poh-lee" },
      { el: "αρχαία", en: "ancient (ruins)", ipa: "arˈxea", phonetic: "ar-KHEH-ah" },
      { el: "ορθόδοξος", en: "Orthodox (Christian)", ipa: "orˈθoðoksos", phonetic: "or-THOH-thok-sos" },
      { el: "Πάσχα", en: "Easter", ipa: "ˈpasxa", phonetic: "PAS-khah" },
      { el: "φιλόσοφος", en: "philosopher", ipa: "fiˈlosofos", phonetic: "fee-LOH-soh-fos" },
      { el: "μυθολογία", en: "mythology", ipa: "miθoloˈʝia", phonetic: "mee-thoh-loh-YEE-ah" },
      { el: "ολυμπιακοί", en: "Olympic (Games)", ipa: "olimpiaˈki", phonetic: "oh-leem-pee-ah-KEE" },
      { el: "νησί", en: "island", ipa: "niˈsi", phonetic: "nee-SEE" },
      { el: "βυζαντινός", en: "Byzantine", ipa: "vizantiˈnos", phonetic: "vee-zan-tee-NOS" },
      { el: "παράδοση", en: "tradition", ipa: "paˈraðosi", phonetic: "pah-RAH-thoh-see" }
    ],
    phrases: [
      { el: "Θέλω να επισκεφτώ την Ακρόπολη.", en: "I want to visit the Acropolis." },
      { el: "Η ελληνική μυθολογία είναι συναρπαστική.", en: "Greek mythology is fascinating." },
      { el: "Πότε γιορτάζετε το Πάσχα;", en: "When do you celebrate Easter?" },
      { el: "Τα αρχαία είναι εντυπωσιακά.", en: "The ancient ruins are impressive." },
      { el: "Η Ελλάδα έχει πλούσια ιστορία.", en: "Greece has a rich history." }
    ],
    grammar: "Greek is the language of philosophy, science, and the New Testament — an enormous proportion of English vocabulary has Greek roots. Pointing this out to Greeks will delight them. 'Αυτή η λέξη είναι ελληνική' (this word is Greek) — they'll give you five more examples.",
    tip: "Easter (Πάσχα) is far more important than Christmas in Greek Orthodox culture. The midnight resurrection service, the cracking of red eggs, and the lamb roast on Easter Sunday are extraordinary to witness. Greeks return to their home villages — it's the most meaningful holiday of the year. If invited, go."
  },
  {
    day: 22,
    title: "Sports & Activities",
    titleNative: "Αθλήματα & Δραστηριότητες",
    vocab: [
      { el: "ποδόσφαιρο", en: "football / soccer", ipa: "poˈðosfero", phonetic: "poh-THOS-feh-roh" },
      { el: "κολύμπι", en: "swimming", ipa: "koˈlimbi", phonetic: "koh-LEEM-bee" },
      { el: "πεζοπορία", en: "hiking", ipa: "pezopo'ria", phonetic: "peh-zoh-poh-REE-ah" },
      { el: "ιστιοπλοΐα", en: "sailing", ipa: "istioplˈoia", phonetic: "ees-tyoh-ploh-EE-ah" },
      { el: "αναρρίχηση", en: "rock climbing", ipa: "anarˈixisi", phonetic: "ah-nar-REE-khee-see" },
      { el: "παιχνίδι", en: "game", ipa: "pexˈniði", phonetic: "pekh-NEE-thee" },
      { el: "αγώνας", en: "match / competition", ipa: "aˈɣonas", phonetic: "ah-GHOH-nas" },
      { el: "γυμναστήριο", en: "gym", ipa: "ʝimnasˈtirio", phonetic: "yeem-nas-TEE-ree-oh" },
      { el: "βουτιά", en: "dive / jump into water", ipa: "vuˈtia", phonetic: "voo-TYAH" },
      { el: "νίκη", en: "victory", ipa: "ˈniki", phonetic: "NEE-kee" }
    ],
    phrases: [
      { el: "Κάνεις κάποιο άθλημα;", en: "Do you do any sports?" },
      { el: "Πού μπορώ να κάνω πεζοπορία;", en: "Where can I go hiking?" },
      { el: "Υπάρχει μαθήματα κατάδυσης;", en: "Are there scuba diving lessons?" },
      { el: "Πάμε να κάνουμε μπάνιο!", en: "Let's go for a swim!" },
      { el: "Ποιος κερδίζει;", en: "Who is winning?" }
    ],
    grammar: "'Κάνω ___' (I do / I make ___) is the sports verb for most activities: 'Κάνω κολύμπι' (I swim), 'Κάνω πεζοπορία' (I hike), 'Κάνω σκι' (I ski). For football and team sports: 'Παίζω ποδόσφαιρο' (I play football).",
    tip: "The Samaria Gorge in Crete is one of Europe's great hikes — 16km through a spectacular gorge. Sailing the Cyclades is a bucket-list experience. Greece invented the Olympics — the original Panathenaic Stadium in Athens hosted the first modern games in 1896 and is still open to visit."
  },
  {
    day: 23,
    title: "Technology & Communication",
    titleNative: "Τεχνολογία & Επικοινωνία",
    vocab: [
      { el: "κινητό", en: "mobile phone", ipa: "kiniˈto", phonetic: "kee-nee-TOH" },
      { el: "φορτιστής", en: "charger", ipa: "fortiˈstis", phonetic: "for-tees-TEES" },
      { el: "μπαταρία", en: "battery", ipa: "bataˈria", phonetic: "bah-tah-REE-ah" },
      { el: "μήνυμα", en: "message", ipa: "ˈminima", phonetic: "MEE-nee-mah" },
      { el: "κλήση", en: "call", ipa: "ˈklisi", phonetic: "KLEE-see" },
      { el: "κωδικός", en: "password / code", ipa: "koˈðikos", phonetic: "koh-THEE-kos" },
      { el: "εφαρμογή", en: "app / application", ipa: "efamoˈʝi", phonetic: "eh-far-moh-YEE" },
      { el: "σύνδεση", en: "connection", ipa: "ˈsinðesi", phonetic: "SEEN-theh-see" },
      { el: "σήμα", en: "signal", ipa: "ˈsima", phonetic: "SEE-mah" },
      { el: "αναζήτηση", en: "search", ipa: "anaˈzitisi", phonetic: "ah-nah-ZEE-tee-see" }
    ],
    phrases: [
      { el: "Ποιος είναι ο κωδικός του wifi;", en: "What is the wifi password?" },
      { el: "Το κινητό μου δεν έχει σήμα.", en: "My phone has no signal." },
      { el: "Μπορείς να με καλέσεις αργότερα;", en: "Can you call me later?" },
      { el: "Μπορώ να φορτίσω το κινητό μου;", en: "Can I charge my phone?" },
      { el: "Στείλε μου μήνυμα.", en: "Send me a message." }
    ],
    grammar: "'Μπορώ να ___' (Can I ___) is endlessly useful: 'Μπορώ να φορτίσω;' (Can I charge?), 'Μπορώ να χρησιμοποιήσω το wifi;' (Can I use the wifi?). Combine with any infinitive-equivalent and you'll be understood.",
    tip: "Greece has good mobile coverage on the mainland and larger islands but spotty on remote spots. A local SIM (Cosmote, Vodafone GR, Wind) is cheap and solves connectivity. WhatsApp and Viber are both widely used — Viber has a particularly strong user base in Greece."
  },
  {
    day: 24,
    title: "At the Pharmacy",
    titleNative: "Στο Φαρμακείο",
    vocab: [
      { el: "φαρμακείο", en: "pharmacy", ipa: "farmakˈio", phonetic: "far-mah-KEE-oh" },
      { el: "χάπι", en: "pill / tablet", ipa: "ˈxapi", phonetic: "KHAH-pee" },
      { el: "κρέμα", en: "cream / ointment", ipa: "ˈkrema", phonetic: "KREH-mah" },
      { el: "επίδεσμος", en: "bandage", ipa: "eˈpiðezmos", phonetic: "eh-PEE-thes-mos" },
      { el: "παυσίπονο", en: "painkiller", ipa: "pafˈsipono", phonetic: "paf-SEE-poh-noh" },
      { el: "αντιβιοτικό", en: "antibiotic", ipa: "andivioˈtiko", phonetic: "an-dee-vee-oh-TEE-koh" },
      { el: "αντηλιακό", en: "sunscreen", ipa: "andiliaˈko", phonetic: "an-dee-lee-ah-KOH" },
      { el: "εντομοαπωθητικό", en: "insect repellent", ipa: "endomoapoθiˈtiko", phonetic: "en-doh-moh-ah-poh-thee-TEE-koh" },
      { el: "αντιισταμινικό", en: "antihistamine", ipa: "andiistaminˈiko", phonetic: "an-dee-ee-stah-mee-NEE-koh" },
      { el: "συνταγή", en: "prescription", ipa: "sindaˈʝi", phonetic: "seen-dah-YEE" }
    ],
    phrases: [
      { el: "Έχετε κάτι για πονοκέφαλο;", en: "Do you have something for a headache?" },
      { el: "Χρειάζομαι δυνατό αντηλιακό.", en: "I need strong sunscreen." },
      { el: "Χρειάζεται συνταγή;", en: "Do I need a prescription?" },
      { el: "Πόσες φορές την ημέρα;", en: "How many times a day?" },
      { el: "Μπορείτε να μου συστήσετε κάτι;", en: "Can you recommend something?" }
    ],
    grammar: "'Έχετε κάτι για ___;' (Do you have something for ___?) is your pharmacy shortcut. 'Για πονόλαιμο' (for sore throat), 'για στομαχόπονο' (for stomachache), 'για ηλιακό έγκαυμα' (for sunburn). Pharmacists in Greece often speak some English in tourist areas.",
    tip: "Greek pharmacies are identified by a green cross. Sunscreen and insect repellent are essential — the Greek sun is intense and there are mosquitoes in summer evenings near water. Pharmacists can prescribe many treatments directly without a doctor's visit. They're your first stop for anything minor."
  },
  {
    day: 25,
    title: "Giving Directions",
    titleNative: "Δίνοντας Οδηγίες",
    vocab: [
      { el: "ευθεία", en: "straight ahead", ipa: "efˈθia", phonetic: "ef-THEE-ah" },
      { el: "στρίψτε αριστερά", en: "turn left", ipa: "ˈstripse aristeˈra", phonetic: "STREEP-seh ah-rees-teh-RAH" },
      { el: "στρίψτε δεξιά", en: "turn right", ipa: "ˈstripse ðekˈsia", phonetic: "STREEP-seh thek-SYAH" },
      { el: "φανάρι", en: "traffic light", ipa: "faˈnari", phonetic: "fah-NAH-ree" },
      { el: "γωνία", en: "corner", ipa: "ɣoˈnia", phonetic: "ghoh-NEE-ah" },
      { el: "πλατεία", en: "square / plaza", ipa: "plaˈtia", phonetic: "plah-TEE-ah" },
      { el: "γέφυρα", en: "bridge", ipa: "ˈʝefira", phonetic: "YEH-fee-rah" },
      { el: "είσοδος / έξοδος", en: "entrance / exit", ipa: "ˈisoðos / ˈeksoðos", phonetic: "EE-soh-thos / EK-soh-thos" },
      { el: "διασταύρωση", en: "crossroads / intersection", ipa: "ðiasˈtavrosi", phonetic: "thee-ah-STAV-roh-see" },
      { el: "μέχρι", en: "until / up to", ipa: "ˈmexri", phonetic: "MEH-khree" }
    ],
    phrases: [
      { el: "Πώς πάω στην παραλία;", en: "How do I get to the beach?" },
      { el: "Πηγαίνετε ευθεία μέχρι το φανάρι.", en: "Go straight until the traffic light." },
      { el: "Στρίψτε αριστερά στη γωνία.", en: "Turn left at the corner." },
      { el: "Είναι περίπου πέντε λεπτά με τα πόδια.", en: "It's about five minutes on foot." },
      { el: "Μπορείτε να μου δείξετε στον χάρτη;", en: "Can you show me on the map?" }
    ],
    grammar: "'Μέχρι ___' (until ___) chains directions together: 'Ευθεία μέχρι την πλατεία' (straight until the square), 'μέχρι το φανάρι' (until the traffic light). Then add 'και μετά' (and then) to continue. 'Ευθεία, μέχρι το φανάρι, και μετά δεξιά.'",
    tip: "Many Greek streets in old towns (παλιά πόλη) are pedestrian-only, unmarked, and genuinely labyrinthine — especially in island villages. Google Maps works but sometimes lags on tiny paths. Asking locals is often faster. Most will walk you to the corner. Accept the help."
  },
  {
    day: 26,
    title: "Making Plans",
    titleNative: "Κάνοντας Σχέδια",
    vocab: [
      { el: "σχέδιο", en: "plan", ipa: "ˈsxeðio", phonetic: "SKHEH-thee-oh" },
      { el: "κανόνισε", en: "arrange / organize", ipa: "kaˈnonise", phonetic: "kah-NOH-nee-seh" },
      { el: "συνάντηση", en: "meeting / appointment", ipa: "siˈnadisi", phonetic: "see-NAN-dee-see" },
      { el: "επιβεβαίωση", en: "confirmation", ipa: "epiveˈosi", phonetic: "eh-pee-veh-EH-oh-see" },
      { el: "ακύρωση", en: "cancellation", ipa: "aˈkirosi", phonetic: "ah-KEE-roh-see" },
      { el: "διαθέσιμος", en: "available", ipa: "ðiaˈθesimos", phonetic: "thee-ah-THEH-see-mos" },
      { el: "Σαββατοκύριακο", en: "weekend", ipa: "savato'kiriako", phonetic: "sah-vah-toh-KEE-ree-ah-koh" },
      { el: "την επόμενη εβδομάδα", en: "next week", ipa: "tin eˈpomeni evðoˈmaða", phonetic: "teen eh-POH-meh-nee ev-thoh-MAH-thah" },
      { el: "τι λες;", en: "what do you say? / sound good?", ipa: "ti ˈles", phonetic: "tee les" },
      { el: "ωραία!", en: "great! / sounds good!", ipa: "oˈrea", phonetic: "oh-REH-ah" }
    ],
    phrases: [
      { el: "Τι κάνεις το Σαββατοκύριακο;", en: "What are you doing this weekend?" },
      { el: "Να συναντηθούμε;", en: "Shall we meet up?" },
      { el: "Τι λες για Σάββατο στις τέσσερις;", en: "How about Saturday at four?" },
      { el: "Ωραία! Θα επιβεβαιώσω αργότερα.", en: "Great! I'll confirm later." },
      { el: "Δυστυχώς πρέπει να ακυρώσω.", en: "Unfortunately I have to cancel." }
    ],
    grammar: "'Τι λες για ___?' (What do you say about ___?) is your suggest-a-plan phrase. 'Τι λες για αύριο;' (How about tomorrow?), 'Τι λες για καφέ;' (How about coffee?). Casual, friendly, and widely used.",
    tip: "Greeks are spontaneous planners — 'Να βγούμε απόψε;' (Shall we go out tonight?) texted at 9pm is completely normal. Last-minute invitations are a sign of genuine interest, not disorganization. Say yes when you can — the best Greek evenings are the unplanned ones."
  },
  {
    day: 27,
    title: "At the Airport",
    titleNative: "Στο Αεροδρόμιο",
    vocab: [
      { el: "διαβατήριο", en: "passport", ipa: "ðiavaˈtirio", phonetic: "thee-ah-vah-TEE-ree-oh" },
      { el: "βίζα", en: "visa", ipa: "ˈviza", phonetic: "VEE-zah" },
      { el: "τελωνείο", en: "customs", ipa: "teloˈnio", phonetic: "teh-loh-NEE-oh" },
      { el: "μετανάστευση", en: "immigration", ipa: "metaˈnastevsi", phonetic: "meh-tah-NAS-tev-see" },
      { el: "κάρτα επιβίβασης", en: "boarding pass", ipa: "ˈkarta epiˈvivaˈsis", phonetic: "KAR-tah eh-pee-VEE-vah-sees" },
      { el: "βαλίτσα", en: "suitcase", ipa: "vaˈlitsa", phonetic: "vah-LEET-sah" },
      { el: "χειραποσκευή", en: "hand luggage / carry-on", ipa: "xirapaskeˈvi", phonetic: "khee-rah-pos-keh-VEE" },
      { el: "πύλη", en: "gate", ipa: "ˈpili", phonetic: "PEE-lee" },
      { el: "ανακοίνωση", en: "announcement", ipa: "anaˈkinosi", phonetic: "ah-nah-KEE-noh-see" },
      { el: "σύνδεση", en: "connection (flight)", ipa: "ˈsinðesi", phonetic: "SEEN-theh-see" }
    ],
    phrases: [
      { el: "Πού είναι ο έλεγχος διαβατηρίων;", en: "Where is passport control?" },
      { el: "Θέλω να παραδώσω μία βαλίτσα.", en: "I want to check one suitcase." },
      { el: "Έχω σύνδεση στη Φρανκφούρτη.", en: "I have a connection in Frankfurt." },
      { el: "Η βαλίτσα μου δεν ήρθε.", en: "My suitcase didn't arrive." },
      { el: "Χάθηκε το διαβατήριό μου.", en: "My passport is lost." }
    ],
    grammar: "Past tense essentials: 'ήρθε' (arrived/came), 'έχασα' (I lost), 'έφτασε' (it arrived). These three will handle most airport crises. 'Η βαλίτσα μου δεν ήρθε' (my suitcase didn't come) — say it calmly at the baggage claim desk.",
    tip: "Athens Eleftherios Venizelos Airport (ATH) is well-organized and has good English signage. The metro connects it directly to central Athens in 40 minutes. Thessaloniki's Makedonia Airport (SKG) is smaller and easy to navigate. Island airports vary wildly — Santorini's (JTR) is tiny and can be chaotic in peak season."
  },
  {
    day: 28,
    title: "Celebrations & Holidays",
    titleNative: "Γιορτές & Αργίες",
    vocab: [
      { el: "αργία", en: "public holiday", ipa: "arˈʝia", phonetic: "ar-YEE-ah" },
      { el: "γιορτή", en: "celebration / name day", ipa: "ʝorˈti", phonetic: "yor-TEE" },
      { el: "γενέθλια", en: "birthday", ipa: "ʝeˈneθlia", phonetic: "yeh-NEH-thlee-ah" },
      { el: "χρόνια πολλά", en: "happy birthday / many years", ipa: "ˈxronia poˈla", phonetic: "KHROH-nyah poh-LAH" },
      { el: "Χριστούγεννα", en: "Christmas", ipa: "xrisˈtuʝena", phonetic: "khrees-TOO-yeh-nah" },
      { el: "Πρωτοχρονιά", en: "New Year's", ipa: "protogroniˈa", phonetic: "proh-toh-khroh-NYAH" },
      { el: "συγχαρητήρια", en: "congratulations", ipa: "sinxaritiˈria", phonetic: "seen-khah-ree-TEE-ree-ah" },
      { el: "乾杯 / στην υγειά μας", en: "cheers! (to our health)", ipa: "stin iˈʝa mas", phonetic: "steen ee-YAH mas" },
      { el: "δώρο", en: "gift", ipa: "ˈðoro", phonetic: "THOH-roh" },
      { el: "ονομαστική γιορτή", en: "name day", ipa: "onomastiˈki ʝorˈti", phonetic: "oh-noh-mas-tee-KEE yor-TEE" }
    ],
    phrases: [
      { el: "Χρόνια πολλά!", en: "Happy birthday! / Many happy returns!" },
      { el: "Στην υγειά μας!", en: "Cheers! (to our health!)" },
      { el: "Καλά Χριστούγεννα!", en: "Merry Christmas!" },
      { el: "Καλή Χρονιά!", en: "Happy New Year!" },
      { el: "Χαρούμενο Πάσχα!", en: "Happy Easter!" }
    ],
    grammar: "'Χρόνια πολλά' (literally 'many years') is used for birthdays AND name days AND any celebration. It's the Greek all-purpose celebration phrase. Name days (γιορτή) are as important as birthdays — Greeks celebrate the feast day of their saint name, and friends drop by unannounced with sweets.",
    tip: "Name days are a uniquely Greek institution — if your name is Georgios/Georgia (April 23), Panagiotis/Panagiota (August 15), or Nikolaos/Nikoleta (December 6), expect visitors. The host provides sweets and drinks; guests say 'Χρόνια πολλά' and may bring a small gift. No invitation needed."
  },
  {
    day: 29,
    title: "Advanced Phrases",
    titleNative: "Προχωρημένες Φράσεις",
    vocab: [
      { el: "άλλωστε", en: "besides / after all", ipa: "ˈaloste", phonetic: "AH-los-teh" },
      { el: "ωστόσο", en: "however", ipa: "osˈtoso", phonetic: "os-TOH-soh" },
      { el: "παρόλα αυτά", en: "despite that / nevertheless", ipa: "paˈrola afˈta", phonetic: "pah-ROH-lah af-TAH" },
      { el: "επιπλέον", en: "furthermore / in addition", ipa: "epiˈpleon", phonetic: "eh-pee-PLEH-on" },
      { el: "ακόμα", en: "still / even", ipa: "aˈkoma", phonetic: "ah-KOH-mah" },
      { el: "τελικά", en: "in the end / finally", ipa: "teliˈka", phonetic: "teh-lee-KAH" },
      { el: "κατά τη γνώμη μου", en: "in my opinion", ipa: "ˈkata ti ˈɣnomi mu", phonetic: "KAH-tah tee GNOH-mee moo" },
      { el: "όπως και να έχει", en: "either way / regardless", ipa: "ˈopos ke na ˈexi", phonetic: "OH-pos keh nah EH-khee" },
      { el: "τι να πω", en: "what can I say / I don't know what to say", ipa: "ti na po", phonetic: "tee nah poh" },
      { el: "αδύνατο", en: "impossible", ipa: "aˈðinato", phonetic: "ah-THEE-nah-toh" }
    ],
    phrases: [
      { el: "Τελικά, τι έγινε;", en: "So what happened in the end?" },
      { el: "Ωστόσο, δεν είμαι σίγουρος/η.", en: "However, I'm not sure (m/f)." },
      { el: "Τι να πω — η Ελλάδα είναι μοναδική.", en: "What can I say — Greece is unique." },
      { el: "Κατά τη γνώμη μου, είναι η καλύτερη χώρα.", en: "In my opinion, it's the best country." },
      { el: "Όπως και να έχει, ευχαριστώ για όλα.", en: "Either way, thank you for everything." }
    ],
    grammar: "Discourse markers make you sound fluent. 'Ωστόσο' signals a contrast, 'τελικά' wraps things up, 'άλλωστε' adds supporting logic. Starting to drop these naturally — even one or two per conversation — will dramatically lift how your Greek sounds to native speakers.",
    tip: "'Τι να πω' — 'what can I say' — is one of the most Greek expressions in existence. Used when something is so beautiful, absurd, delicious, or overwhelming that words fail. You'll hear it constantly. Deploy it yourself when the sunset over Santorini renders you speechless. It's perfect."
  },
  {
    day: 30,
    title: "Real Conversation",
    titleNative: "Αληθινή Συνομιλία",
    vocab: [
      { el: "άπταιστα", en: "fluently", ipa: "ˈaptesta", phonetic: "AP-tes-tah" },
      { el: "προφορά", en: "accent / pronunciation", ipa: "profoˈra", phonetic: "proh-foh-RAH" },
      { el: "αλφάβητο", en: "alphabet", ipa: "alˈfavito", phonetic: "al-FAH-vee-toh" },
      { el: "υπέροχος", en: "wonderful / superb", ipa: "iˈperoxos", phonetic: "ee-PEH-roh-khos" },
      { el: "σιγά σιγά", en: "slowly slowly / little by little", ipa: "siˈɣa siˈɣa", phonetic: "see-GHAH see-GHAH" },
      { el: "ευτυχισμένος", en: "happy / fortunate", ipa: "eftiˈxizmenos", phonetic: "ef-tee-KHEEZ-meh-nos" },
      { el: "φιλία", en: "friendship", ipa: "fiˈlia", phonetic: "fee-LEE-ah" },
      { el: "αντίο", en: "goodbye", ipa: "anˈdio", phonetic: "an-DEE-oh" },
      { el: "στην υγειά σου", en: "to your health / cheers", ipa: "stin iˈʝa su", phonetic: "steen ee-YAH soo" },
      { el: "καλό ταξίδι", en: "safe travels / bon voyage", ipa: "kaˈlo takˈsiði", phonetic: "kah-LOH tak-SEE-thee" }
    ],
    phrases: [
      { el: "Τα ελληνικά μου δεν είναι τέλεια ακόμα.", en: "My Greek isn't perfect yet." },
      { el: "Μαθαίνω — μπορείτε να με διορθώσετε;", en: "I'm learning — can you correct me?" },
      { el: "Μιλάτε πολύ καλά!", en: "You speak very well!" },
      { el: "Έμαθα πολλά αυτόν τον μήνα.", en: "I learned a lot this month." },
      { el: "Καλό ταξίδι και ευχαριστώ για όλα!", en: "Safe travels and thank you for everything!" }
    ],
    grammar: "You've completed 30 days of Greek. You now have greetings, navigation, food, transport, culture, emergencies, slang, and the discourse markers of a real speaker. Greek is a lifelong pursuit — the alphabet alone opens up an ancient world. But you have enough now to connect, laugh, order, and get home safe.",
    tip: "The greatest compliment you can receive from a Greek is 'Μιλάς ελληνικά;' (You speak Greek?) said with genuine surprise and delight. It will happen. Greeks are extraordinarily proud of their language and moved when foreigners attempt it. 'Σιγά σιγά' — slowly, slowly. You're already further than almost anyone tries to get. Καλό ταξίδι. 🇬🇷"
  }
];

const CONVERSATIONS_EL = [
  {
    title: "Ordering at a Café",
    scene: "A sunny café in Athens — you're trying to order the right kind of coffee in a country that takes it very seriously.",
    lines: [
      { who: "them", el: "Καλημέρα! Τι θα πάρετε;", phonetic: "kah-lee-MEH-rah! tee tha PAH-reh-teh?", en: "Good morning! What will you have?" },
      { who: "you", el: "Καλημέρα! Έναν φραπέ, παρακαλώ.", phonetic: "kah-lee-MEH-rah! EH-nan frah-PEH, pah-rah-kah-LOH.", en: "Good morning! A frappé, please." },
      { who: "them", el: "Σκέτο, μέτριο ή γλυκό;", phonetic: "SKEH-toh, MEH-tree-oh ee ghlee-KOH?", en: "No sugar, medium, or sweet?" },
      { who: "you", el: "Μέτριο, με λίγο γάλα.", phonetic: "MEH-tree-oh, meh LEE-ghoh GHAH-lah.", en: "Medium, with a little milk." },
      { who: "them", el: "Και για φαγητό;", phonetic: "keh yah fah-yee-TOH?", en: "And for food?" },
      { who: "you", el: "Έχετε τυρόπιτα;", phonetic: "EH-kheh-teh tee-ROH-pee-tah?", en: "Do you have cheese pie?" },
      { who: "them", el: "Έχουμε, φρέσκια από το φούρνο.", phonetic: "EH-khoo-meh, FREHSK-yah ah-POH toh FOOR-noh.", en: "We do, fresh from the oven." },
      { who: "you", el: "Τέλεια! Μία τυρόπιτα επίσης.", phonetic: "TEH-lee-ah! MEE-ah tee-ROH-pee-tah eh-PEE-sees.", en: "Perfect! One cheese pie as well." },
      { who: "them", el: "Αμέσως. Θέλετε τίποτα άλλο;", phonetic: "ah-MEH-sohs. THEH-leh-teh TEE-poh-tah AH-loh?", en: "Right away. Would you like anything else?" },
      { who: "you", el: "Όχι, ευχαριστώ. Πόσο κάνει;", phonetic: "OH-khee, ef-khah-rees-TOH. POH-soh KAH-nee?", en: "No thank you. How much is it?" },
      { who: "them", el: "Τέσσερα ευρώ και πενήντα.", phonetic: "TEH-seh-rah ev-ROH keh peh-NEEN-dah.", en: "Four euros fifty." }
    ]
  },
  {
    title: "Checking into a Hotel",
    scene: "A boutique hotel in Thessaloniki — you've arrived after your flight and you're ready to rest.",
    lines: [
      { who: "you", el: "Καλησπέρα. Έχω κράτηση στο όνομα ___.", phonetic: "kah-lee-SPEH-rah. EH-khoh KRAH-tee-see stoh OH-noh-mah ___.", en: "Good evening. I have a reservation under the name ___." },
      { who: "them", el: "Ένα λεπτό... Ναι, το βρήκα. Δωμάτιο για δύο νύχτες.", phonetic: "EH-nah lep-TOH... neh, toh VREE-kah. dhoh-MAH-tee-oh yah DHEE-oh NEEKH-tes.", en: "One moment... Yes, found it. Room for two nights." },
      { who: "you", el: "Σωστά. Περιλαμβάνεται πρωινό;", phonetic: "sohs-TAH. peh-ree-lahm-VAH-neh-teh proh-ee-NOH?", en: "Correct. Is breakfast included?" },
      { who: "them", el: "Ναι, από τις επτά έως τις δέκα.", phonetic: "neh, ah-POH tees ep-TAH EH-ohs tees DHEH-kah.", en: "Yes, from seven to ten." },
      { who: "you", el: "Ωραία. Έχει θέα στη θάλασσα το δωμάτιο;", phonetic: "oh-REH-ah. EH-khee THEH-ah stee THAH-lah-sah toh dhoh-MAH-tee-oh?", en: "Great. Does the room have a sea view?" },
      { who: "them", el: "Ναι, έχει υπέροχη θέα στον Θερμαϊκό.", phonetic: "neh, EH-khee ee-PEH-roh-khee THEH-ah ston ther-mah-ee-KOH.", en: "Yes, it has a wonderful view of the Thermaikos Gulf." },
      { who: "you", el: "Εξαιρετικό! Ποιος είναι ο κωδικός του wifi;", phonetic: "ex-eh-reh-tee-KOH! PYOHS EE-neh oh koh-dhee-KOHS too wifi?", en: "Excellent! What is the wifi password?" },
      { who: "them", el: "Είναι 'athens2024', με μικρά γράμματα.", phonetic: "EE-neh 'athens2024', meh mee-KRAH GHRAH-mah-tah.", en: "It's 'athens2024', in lowercase." },
      { who: "you", el: "Ευχαριστώ πολύ. Τι ώρα είναι το check-out;", phonetic: "ef-khah-rees-TOH poh-LEE. tee OH-rah EE-neh toh check-out?", en: "Thank you very much. What time is check-out?" },
      { who: "them", el: "Στις δώδεκα το μεσημέρι. Καλή ξεκούραση!", phonetic: "stees DHOH-dheh-kah toh meh-see-MEH-ree. kah-LEE xeh-KOO-rah-see!", en: "At twelve noon. Have a good rest!" }
    ]
  },
  {
    title: "At the Taverna",
    scene: "A seaside taverna on a Greek island — the kind where the day's catch is displayed on ice at the entrance.",
    lines: [
      { who: "them", el: "Καλώς ορίσατε! Ένα τραπέζι;", phonetic: "kah-LOHS oh-REE-sah-teh! EH-nah trah-PEH-zee?", en: "Welcome! A table?" },
      { who: "you", el: "Για δύο, παρακαλώ. Κατά προτίμηση έξω.", phonetic: "yah DHEE-oh, pah-rah-kah-LOH. kah-TAH proh-TEE-mee-see EH-xoh.", en: "For two, please. Preferably outside." },
      { who: "them", el: "Αμέσως. Θέλετε να δείτε τα ψάρια;", phonetic: "ah-MEH-sohs. THEH-leh-teh nah DHEE-teh tah PSAH-ryah?", en: "Right away. Would you like to see the fish?" },
      { who: "you", el: "Βεβαίως! Τι έχετε σήμερα;", phonetic: "veh-VEH-ohs! tee EH-kheh-teh SEE-meh-rah?", en: "Of course! What do you have today?" },
      { who: "them", el: "Έχουμε φρέσκο λαβράκι, τσιπούρα και χταπόδι.", phonetic: "EH-khoo-meh FREHS-koh lahv-RAH-kee, tsee-POO-rah keh khtah-POH-dhee.", en: "We have fresh sea bass, sea bream, and octopus." },
      { who: "you", el: "Τo λαβράκι πώς μαγειρεύεται;", phonetic: "toh lahv-RAH-kee pohs mah-yee-REV-eh-teh?", en: "How is the sea bass prepared?" },
      { who: "them", el: "Σχάρα με ελαιόλαδο και λεμόνι.", phonetic: "SKHAH-rah meh eh-leh-OH-lah-dhoh keh leh-MOH-nee.", en: "Grilled with olive oil and lemon." },
      { who: "you", el: "Τέλειο. Ένα λαβράκι και χταπόδι για μεζέ.", phonetic: "TEH-lee-oh. EH-nah lahv-RAH-kee keh khtah-POH-dhee yah meh-ZEH.", en: "Perfect. One sea bass and octopus for meze." },
      { who: "them", el: "Και να φέρω λίγο τζατζίκι και ψωμί;", phonetic: "keh nah FEH-roh LEE-ghoh dzah-DZEE-kee keh psoh-MEE?", en: "And shall I bring some tzatziki and bread?" },
      { who: "you", el: "Ναι, παρακαλώ. Και ένα καράφι λευκό κρασί.", phonetic: "neh, pah-rah-kah-LOH. keh EH-nah kah-RAH-fee lef-KOH krah-SEE.", en: "Yes please. And a carafe of white wine." }
    ]
  },
  {
    title: "Getting Directions in Athens",
    scene: "You're near Monastiraki and trying to get to the Acropolis on foot.",
    lines: [
      { who: "you", el: "Συγγνώμη! Μπορείτε να με βοηθήσετε; Πώς πάω στην Ακρόπολη;", phonetic: "seeg-NOH-mee! boh-REE-teh nah meh voh-ee-THEE-seh-teh? pohs PAH-oh steen ah-KROH-poh-lee?", en: "Excuse me! Can you help me? How do I get to the Acropolis?" },
      { who: "them", el: "Βεβαίως! Είναι πολύ κοντά, περίπου δέκα λεπτά με τα πόδια.", phonetic: "veh-VEH-ohs! EE-neh poh-LEE kon-DAH, peh-REE-poo DHEH-kah lep-TAH meh tah POH-dhyah.", en: "Of course! It's very close, about ten minutes on foot." },
      { who: "you", el: "Ωραία! Από ποιο δρόμο;", phonetic: "oh-REH-ah! ah-POH PYOH DHROH-moh?", en: "Great! Which road?" },
      { who: "them", el: "Ακολουθήστε αυτό τον δρόμο ευθεία μέχρι την πλατεία.", phonetic: "ah-koh-loo-THEE-steh af-TOH ton DHROH-moh ef-THEH-ah MEH-khree teen plah-TEE-ah.", en: "Follow this road straight until the square." },
      { who: "you", el: "Και μετά;", phonetic: "keh meh-TAH?", en: "And then?" },
      { who: "them", el: "Στρίψτε αριστερά και θα δείτε την ανηφόρα. Ακολουθήστε τα σημάδια.", phonetic: "STREEP-steh ah-rees-teh-RAH keh tha DHEE-teh teen ah-nee-FOH-rah. ah-koh-loo-THEE-steh tah see-MAH-dhyah.", en: "Turn left and you'll see the uphill path. Follow the signs." },
      { who: "you", el: "Χρειάζεται εισιτήριο;", phonetic: "khryah-ZEH-teh ee-see-TEE-ryoh?", en: "Do I need a ticket?" },
      { who: "them", el: "Ναι, αγοράστε το online αν μπορείτε — έχει ουρά.", phonetic: "neh, ah-ghoh-RAH-steh toh online an boh-REE-teh — EH-khee oo-RAH.", en: "Yes, buy it online if you can — there's a queue." },
      { who: "you", el: "Σας ευχαριστώ πολύ!", phonetic: "sahs ef-khah-rees-TOH poh-LEE!", en: "Thank you very much!" },
      { who: "them", el: "Τίποτα! Καλή επίσκεψη — είναι μαγευτικό.", phonetic: "TEE-poh-tah! kah-LEE eh-PEE-skep-see — EE-neh mah-yef-tee-KOH.", en: "Don't mention it! Have a good visit — it's magical." }
    ]
  },
  {
    title: "At the Laïki (Street Market)",
    scene: "A Tuesday morning neighborhood market in a Greek city — olives, tomatoes, honey, and a vendor who takes produce personally.",
    lines: [
      { who: "them", el: "Καλημέρα! Τι θέλετε σήμερα;", phonetic: "kah-lee-MEH-rah! tee THEH-leh-teh SEE-meh-rah?", en: "Good morning! What do you want today?" },
      { who: "you", el: "Καλημέρα! Πόσο κάνουν οι ντομάτες;", phonetic: "kah-lee-MEH-rah! POH-soh KAH-noon ee ndoh-MAH-tes?", en: "Good morning! How much are the tomatoes?" },
      { who: "them", el: "Δύο ευρώ το κιλό. Από τον κήπο μου, φρέσκες.", phonetic: "DHEE-oh ev-ROH toh kee-LOH. ah-POH ton KEE-poh moo, FREHS-kes.", en: "Two euros a kilo. From my garden, fresh." },
      { who: "you", el: "Δώστε μου δύο κιλά. Και έχετε σύκα;", phonetic: "DHOHS-teh moo DHEE-oh kee-LAH. keh EH-kheh-teh SEE-kah?", en: "Give me two kilos. And do you have figs?" },
      { who: "them", el: "Φρέσκα σήκα, μόλις μάζεψα! Τρία ευρώ η κιλό.", phonetic: "FREHS-kah SEE-kah, MOH-lees MAH-zep-sah! TREE-ah ev-ROH ee kee-LOH.", en: "Fresh figs, just picked! Three euros a kilo." },
      { who: "you", el: "Είναι ώριμα;", phonetic: "EE-neh OH-ree-mah?", en: "Are they ripe?" },
      { who: "them", el: "Φάτε ένα να δείτε!", phonetic: "FAH-teh EH-nah nah DHEE-teh!", en: "Have one and see for yourself!" },
      { who: "you", el: "Μμμ, υπέροχο. Δώστε μου ένα κιλό σύκα επίσης.", phonetic: "mmm, ee-PEH-roh-khoh. DHOHS-teh moo EH-nah kee-LOH SEE-kah eh-PEE-sees.", en: "Mmm, wonderful. Give me a kilo of figs as well." },
      { who: "them", el: "Αμέσως. Πέντε ευρώ για όλα.", phonetic: "ah-MEH-sohs. PEN-deh ev-ROH yah OH-lah.", en: "Right away. Five euros for everything." },
      { who: "you", el: "Ορίστε. Ευχαριστώ πολύ!", phonetic: "oh-REE-steh. ef-khah-rees-TOH poh-LEE!", en: "Here you go. Thank you very much!" },
      { who: "them", el: "Να'στε καλά! Ελάτε πάλι!", phonetic: "NAH-steh kah-LAH! eh-LAH-teh PAH-lee!", en: "Be well! Come again!" }
    ]
  },
  {
    title: "At the Pharmacy",
    scene: "The Santorini sun has won. You need help.",
    lines: [
      { who: "you", el: "Καλημέρα. Χρειάζομαι βοήθεια.", phonetic: "kah-lee-MEH-rah. khryah-ZOH-meh voh-EE-theh-ah.", en: "Good morning. I need help." },
      { who: "them", el: "Τι συμβαίνει;", phonetic: "tee seem-VEH-nee?", en: "What's the matter?" },
      { who: "you", el: "Έκανα ηλιακό έγκαυμα. Με πονάει πολύ.", phonetic: "EH-kah-nah ee-lee-ah-KOH EN-gav-mah. meh poh-NAH-ee poh-LEE.", en: "I got sunburned. It hurts a lot." },
      { who: "them", el: "Πότε συνέβη; Έχετε πυρετό;", phonetic: "POH-teh see-NEH-vee? EH-kheh-teh pee-reh-TOH?", en: "When did it happen? Do you have a fever?" },
      { who: "you", el: "Χθες. Νομίζω λίγο ναι.", phonetic: "khthes. noh-MEE-zoh LEE-ghoh neh.", en: "Yesterday. I think a little yes." },
      { who: "them", el: "Έχετε αλλεργία σε κάποιο φάρμακο;", phonetic: "EH-kheh-teh ah-lehr-YEE-ah seh KAH-pyoh FAHR-mah-koh?", en: "Are you allergic to any medication?" },
      { who: "you", el: "Όχι, καμία.", phonetic: "OH-khee, kah-MEE-ah.", en: "No, none." },
      { who: "them", el: "Σας δίνω κρέμα για το έγκαυμα και ένα παυσίπονο.", phonetic: "sahs DHEE-noh KREH-mah yah toh EN-gav-mah keh EH-nah pahf-SEE-poh-noh.", en: "I'll give you a cream for the burn and a painkiller." },
      { who: "you", el: "Χρειάζεται συνταγή;", phonetic: "khryah-ZEH-teh seen-dah-YEE?", en: "Does it need a prescription?" },
      { who: "them", el: "Όχι, είναι ελεύθερα. Και πιείτε πολύ νερό.", phonetic: "OH-khee, EE-neh eh-LEF-theh-rah. keh PYEE-teh poh-LEE neh-ROH.", en: "No, they're over-the-counter. And drink plenty of water." },
      { who: "you", el: "Ευχαριστώ! Πόσο κάνουν;", phonetic: "ef-khah-rees-TOH! POH-soh KAH-noon?", en: "Thank you! How much are they?" }
    ]
  },
  {
    title: "Making Plans with a Local",
    scene: "You've met someone on a ferry to Paros and they're suggesting an evening out.",
    lines: [
      { who: "them", el: "Πρώτη φορά στην Ελλάδα;", phonetic: "PROH-tee foh-RAH steen eh-LAH-dhah?", en: "First time in Greece?" },
      { who: "you", el: "Ναι! Έχω ακούσει τόσα πολλά — ήθελα να έρθω χρόνια.", phonetic: "neh! EH-khoh ah-KOO-see TOH-sah poh-LAH — EE-theh-lah nah EHR-thoh KHROH-nyah.", en: "Yes! I've heard so much — I wanted to come for years." },
      { who: "them", el: "Και πού θα μείνεις στην Πάρο;", phonetic: "keh poo tha MEE-nees steen PAH-roh?", en: "And where will you stay in Paros?" },
      { who: "you", el: "Στην Παροικία. Έχεις ιδέες τι να κάνω;", phonetic: "steen pah-ree-KEE-ah. EH-khees ee-DHEH-es tee nah KAH-noh?", en: "In Parikia. Do you have ideas of what to do?" },
      { who: "them", el: "Πολλές! Να πας στη Νάουσα — είναι υπέροχη.", phonetic: "poh-LES! nah pahs stee NAH-oo-sah — EE-neh ee-PEH-roh-khee.", en: "Many! Go to Naoussa — it's wonderful." },
      { who: "you", el: "Ακούγεται τέλεια. Θα βγεις απόψε;", phonetic: "ah-KOO-yeh-teh TEH-lee-ah. tha vyees ah-POH-pseh?", en: "That sounds perfect. Are you going out tonight?" },
      { who: "them", el: "Ναι, με παρέα. Θέλεις να έρθεις;", phonetic: "neh, meh pah-REH-ah. THEH-lees nah EHR-thees?", en: "Yes, with friends. Do you want to come?" },
      { who: "you", el: "Με χαρά! Τι ώρα και πού;", phonetic: "meh khah-RAH! tee OH-rah keh poo?", en: "With pleasure! What time and where?" },
      { who: "them", el: "Στις εννιά στην κεντρική πλατεία. Θα σου στείλω μήνυμα.", phonetic: "stees eh-NYAH steen ken-dree-KEE plah-TEE-ah. tha soo STEE-loh MEE-nee-mah.", en: "At nine in the central square. I'll send you a message." },
      { who: "you", el: "Τέλεια. Ανυπομονώ!", phonetic: "TEH-lee-ah. ah-nee-poh-moh-NOH!", en: "Perfect. I can't wait!" }
    ]
  },
  {
    title: "At the Airport — Leaving Greece",
    scene: "Athens Airport, heading home — with a suitcase full of olive oil and a heart full of μεράκι.",
    lines: [
      { who: "them", el: "Καλημέρα! Διαβατήριο και κάρτα επιβίβασης, παρακαλώ.", phonetic: "kah-lee-MEH-rah! dhyah-vah-TEE-ryoh keh KAR-tah eh-pee-VEE-vah-sees, pah-rah-kah-LOH.", en: "Good morning! Passport and boarding pass, please." },
      { who: "you", el: "Ορίστε. Θέλω να παραδώσω μία βαλίτσα.", phonetic: "oh-REE-steh. THEH-loh nah pah-rah-DHOHS-oh MEE-ah vah-LEET-sah.", en: "Here you go. I'd like to check one suitcase." },
      { who: "them", el: "Έχετε εύθραυστα αντικείμενα;", phonetic: "EH-kheh-teh EF-thrahf-stah an-dee-KEE-meh-nah?", en: "Do you have fragile items?" },
      { who: "you", el: "Έχω μπουκάλια ελαιόλαδο και μέλι.", phonetic: "EH-khoh boo-KAH-lyah eh-leh-OH-lah-dhoh keh MEH-lee.", en: "I have bottles of olive oil and honey." },
      { who: "them", el: "Τυλιγμένα ασφαλώς; Μπορεί να ελεγχθούν.", phonetic: "tee-leeg-MEH-nah ahs-fah-LOHS? boh-REE nah eh-lehng-THOON.", en: "Safely wrapped? They may be checked." },
      { who: "you", el: "Ναι, τα έχω τυλίξει. Μπορώ θέση στο παράθυρο;", phonetic: "neh, tah EH-khoh tee-LEEK-see. boh-ROH THEH-see stoh pah-RAH-thee-roh?", en: "Yes, I've wrapped them. Can I have a window seat?" },
      { who: "them", el: "Βλέπω... ναι, η 22Α είναι ελεύθερη.", phonetic: "VLEH-poh... neh, ee 22A EE-neh eh-LEF-theh-ree.", en: "Let me see... yes, 22A is free." },
      { who: "you", el: "Ευχαριστώ. Ποια πύλη είναι;", phonetic: "ef-khah-rees-TOH. PYAH PEE-lee EE-neh?", en: "Thank you. Which gate is it?" },
      { who: "them", el: "Πύλη Α15. Επιβίβαση στις δέκα.", phonetic: "PEE-lee A15. eh-pee-VEE-vah-see stees DHEH-kah.", en: "Gate A15. Boarding at ten." },
      { who: "you", el: "Ευχαριστώ. Τι χώρα — θα επιστρέψω σίγουρα.", phonetic: "ef-khah-rees-TOH. tee KHOH-rah — tha eh-pee-STREP-soh SEE-ghoo-rah.", en: "Thank you. What a country — I'll definitely return." },
      { who: "them", el: "Καλό ταξίδι! Να'ρθείτε ξανά!", phonetic: "kah-LOH tahk-SEE-dhee! NAR-thee-teh xah-NAH!", en: "Safe travels! Come back again!" }
    ]
  }
];
