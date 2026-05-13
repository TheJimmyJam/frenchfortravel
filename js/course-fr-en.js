// French → English Native Lesson Plan
// Français comme langue d'instruction, anglais comme objectif
// vocab: { fr: "English word/phrase", fr_native: "mot français", ipa: "phonétique pour francophones" }
// Note: uses { fr: "English target", fr_native: "French source", ipa: "..." }
// app reads v.en via getFrontWord when isTargetEnglish(), getBackWord returns v.fr (native French)

var COURSE_FR_EN = [
  {
    day: 1,
    title: "Salutations et politesse",
    titleNative: "Greetings & Courtesy",
    focus: "Les premiers mots que vous utiliserez dans n'importe quelle situation en anglais. Maîtriser les salutations vous donne confiance dès la première seconde.",
    vocab: [
      { fr: "Hello", en: "Bonjour / Salut", ipa: "jeh-LOH" },
      { fr: "Hi", en: "Salut (informel)", ipa: "JAI" },
      { fr: "Good morning", en: "Bonjour (le matin)", ipa: "gud MOR-ning" },
      { fr: "Good afternoon", en: "Bon après-midi", ipa: "gud af-ter-NOON" },
      { fr: "Good evening", en: "Bonsoir (en arrivant)", ipa: "gud EEV-ning" },
      { fr: "Good night", en: "Bonne nuit (en partant)", ipa: "gud NAIT" },
      { fr: "Goodbye", en: "Au revoir", ipa: "gud-BAI" },
      { fr: "See you later", en: "À tout à l'heure / À bientôt", ipa: "si iu LEI-ter" },
      { fr: "Please", en: "S'il vous plaît", ipa: "PLEES" },
      { fr: "Thank you", en: "Merci", ipa: "ZANK iu" }
    ],
    phrases: [
      { fr: "Hello! How are you?", en: "Bonjour ! Comment allez-vous ?", ipa: "jeh-LOH jau ar IU" },
      { fr: "I'm fine, thank you.", en: "Je vais bien, merci.", ipa: "aim FAIN zank IU" },
      { fr: "Nice to meet you.", en: "Enchanté(e) de vous rencontrer.", ipa: "nais tu MEET iu" },
      { fr: "Good morning! How are you today?", en: "Bonjour ! Comment allez-vous aujourd'hui ?", ipa: "gud MOR-ning jau ar iu tu-DEI" },
      { fr: "Thank you very much.", en: "Merci beaucoup.", ipa: "zank iu VEH-ree mach" },
      { fr: "You're welcome.", en: "De rien.", ipa: "ior WEL-kom" },
      { fr: "See you tomorrow!", en: "À demain !", ipa: "si iu tu-MOR-oh" },
      { fr: "Have a good day!", en: "Bonne journée !", ipa: "jav a gud DEI" }
    ],
    grammar: "En anglais, il n'y a pas de distinction entre 'tu' et 'vous' — le pronom 'you' s'utilise pour les deux. Cela simplifie beaucoup les choses ! 'Hi' est informel et très courant entre amis. 'Hello' est légèrement plus formel. Le 'th' dans 'Thank you' se prononce comme un 'd' doux — placez la langue entre les dents et soufflez : /ð/.",
    practice: [
      "Entraînez-vous à dire la séquence complète à voix haute : 'Hello! How are you? I'm fine, thank you. Nice to meet you.'",
      "Dites 'Good morning', 'Good afternoon' et 'Good night' à voix haute selon l'heure de la journée pendant une semaine."
    ]
  },
  {
    day: 2,
    title: "Oui, Non et Réactions",
    titleNative: "Yes, No & Reactions",
    focus: "Comment répondre et réagir en anglais. Ces mots vous tirent d'affaire dans n'importe quelle conversation.",
    vocab: [
      { fr: "Yes", en: "Oui", ipa: "YES" },
      { fr: "No", en: "Non", ipa: "NOH" },
      { fr: "Maybe", en: "Peut-être", ipa: "MEI-bi" },
      { fr: "Of course", en: "Bien sûr / Évidemment", ipa: "ov KORS" },
      { fr: "Sure", en: "Bien sûr / D'accord", ipa: "SHUR" },
      { fr: "OK", en: "D'accord / OK", ipa: "oh-KEI" },
      { fr: "I understand", en: "Je comprends", ipa: "ai an-der-STAND" },
      { fr: "I don't understand", en: "Je ne comprends pas", ipa: "ai dohnt an-der-STAND" },
      { fr: "Do you speak French?", en: "Parlez-vous français ?", ipa: "du iu SPEEK FRENCH" },
      { fr: "A little", en: "Un peu", ipa: "a LIT-el" }
    ],
    phrases: [
      { fr: "I'm sorry, I don't speak English well.", en: "Désolé(e), je ne parle pas bien anglais.", ipa: "aim SOR-ee ai dohnt speek ING-lish wel" },
      { fr: "Can you repeat that, please?", en: "Pouvez-vous répéter, s'il vous plaît ?", ipa: "kan iu ri-PEET dat PLEES" },
      { fr: "More slowly, please.", en: "Plus lentement, s'il vous plaît.", ipa: "mor SLOH-lee PLEES" },
      { fr: "Yes, of course!", en: "Oui, bien sûr !", ipa: "yes ov KORS" },
      { fr: "No, thank you.", en: "Non, merci.", ipa: "noh ZANK iu" },
      { fr: "I don't understand. Can you help me?", en: "Je ne comprends pas. Pouvez-vous m'aider ?", ipa: "ai dohnt an-der-STAND kan iu JELP mi" },
      { fr: "Sure, no problem.", en: "Bien sûr, pas de problème.", ipa: "SHUR noh PROB-lem" },
      { fr: "Maybe later.", en: "Peut-être plus tard.", ipa: "MEI-bi LEI-ter" }
    ],
    grammar: "En anglais, la négation utilise l'auxiliaire 'don't' (do not) : 'I don't understand'. Contrairement au français, il n'y a PAS de double négation — ne dites jamais 'I don't understand nothing' (incorrect) ; on dit 'I don't understand anything'. La contraction 'don't' est la plus courante dans la conversation.",
    practice: [
      "Entraînez-vous à votre phrase de secours à voix haute : 'I'm sorry, I don't speak English well. Can you speak more slowly, please?'",
      "Dites 'I understand' et 'I don't understand' cinq fois jusqu'à ce que ça sonne naturel."
    ]
  },
  {
    day: 3,
    title: "Les nombres de 1 à 30",
    titleNative: "Numbers 1–30",
    focus: "Les nombres en anglais sont essentiels pour les prix, les adresses, les téléphones et les horaires. Apprenez-les par cœur.",
    vocab: [
      { fr: "One, two, three", en: "Un, deux, trois", ipa: "WAN, TUU, ZRII" },
      { fr: "Four, five, six", en: "Quatre, cinq, six", ipa: "FOR, FAIV, SIKS" },
      { fr: "Seven, eight, nine", en: "Sept, huit, neuf", ipa: "SEV-en, EIT, NAIN" },
      { fr: "Ten", en: "Dix", ipa: "TEN" },
      { fr: "Eleven, twelve", en: "Onze, douze", ipa: "i-LEV-en, TWELV" },
      { fr: "Thirteen, fourteen, fifteen", en: "Treize, quatorze, quinze", ipa: "zer-TEEN, for-TEEN, fif-TEEN" },
      { fr: "Sixteen, seventeen, eighteen", en: "Seize, dix-sept, dix-huit", ipa: "siks-TEEN, sev-en-TEEN, ei-TEEN" },
      { fr: "Nineteen, twenty", en: "Dix-neuf, vingt", ipa: "nain-TEEN, TWEN-tee" },
      { fr: "Twenty-one, twenty-five", en: "Vingt et un, vingt-cinq", ipa: "TWEN-tee-wan, TWEN-tee-faiv" },
      { fr: "Thirty", en: "Trente", ipa: "ZER-tee" }
    ],
    phrases: [
      { fr: "How much does it cost?", en: "Combien ça coûte ?", ipa: "jau mach daz it KOST" },
      { fr: "It costs twenty dollars.", en: "Ça coûte vingt dollars.", ipa: "it KOSTS TWEN-tee DOL-ars" },
      { fr: "What's your phone number?", en: "Quel est votre numéro de téléphone ?", ipa: "wots ior FOHN NAM-ber" },
      { fr: "Table for two, please.", en: "Une table pour deux, s'il vous plaît.", ipa: "TEI-bel for TUU PLEES" },
      { fr: "I need three tickets.", en: "J'ai besoin de trois billets.", ipa: "ai NIID ZRII TIK-ets" },
      { fr: "I'm on floor five.", en: "Je suis au cinquième étage.", ipa: "aim on FLOR FAIV" }
    ],
    grammar: "Les nombres de 13 à 19 se terminent en '-teen'. Les dizaines se terminent en '-ty' : twenty, thirty, forty, fifty. Pour les nombres composés (21–99), on utilise un trait d'union : twenty-one, thirty-five. Contrairement au français 'vingt et un', l'anglais dit simplement 'twenty-one' sans 'and' (sauf pour les centaines : 'one hundred and one').",
    practice: [
      "Comptez de 1 à 30 en anglais à voix haute trois fois sans vous arrêter.",
      "Entraînez-vous à donner des prix : 'It costs five dollars', 'It costs twenty-three dollars', 'It costs fifteen dollars'."
    ]
  },
  {
    day: 4,
    title: "Les couleurs et descriptions de base",
    titleNative: "Colors & Basic Descriptions",
    focus: "Les couleurs et adjectifs de base pour décrire le monde qui vous entoure et comprendre les instructions.",
    vocab: [
      { fr: "Red", en: "Rouge", ipa: "RED" },
      { fr: "Blue", en: "Bleu", ipa: "BLUU" },
      { fr: "Green", en: "Vert", ipa: "GRIIN" },
      { fr: "Yellow", en: "Jaune", ipa: "YEL-oh" },
      { fr: "White", en: "Blanc", ipa: "WAIT" },
      { fr: "Black", en: "Noir", ipa: "BLAK" },
      { fr: "Big / Large", en: "Grand / Gros", ipa: "BIG / LARCH" },
      { fr: "Small / Little", en: "Petit", ipa: "SMOL / LIT-el" },
      { fr: "Good", en: "Bon / Bien", ipa: "GUD" },
      { fr: "Bad", en: "Mauvais / Mal", ipa: "BAD" }
    ],
    phrases: [
      { fr: "The red bag, please.", en: "Le sac rouge, s'il vous plaît.", ipa: "da RED bag PLEES" },
      { fr: "Do you have it in blue?", en: "Vous l'avez en bleu ?", ipa: "du iu jav it in BLUU" },
      { fr: "That's a big house.", en: "C'est une grande maison.", ipa: "dats a BIG JAUS" },
      { fr: "It's very good!", en: "C'est très bon !", ipa: "its VEH-ree GUD" },
      { fr: "The food is bad.", en: "La nourriture est mauvaise.", ipa: "da FUUD iz BAD" },
      { fr: "I like the green one.", en: "J'aime le vert.", ipa: "ai LAIK da GRIIN WAN" }
    ],
    grammar: "En anglais, les adjectifs se placent TOUJOURS avant le nom, jamais après : 'a red car' (une voiture rouge), pas 'a car red'. De plus, les adjectifs sont invariables — ils ne changent pas selon le genre ou le nombre : 'a red car', 'red cars', 'a red house' — toujours 'red'. Fini les accords !",
    practice: [
      "Décrivez 5 objets dans votre chambre en anglais : couleur + objet. Exemple : 'a white wall', 'a black chair'.",
      "Entraînez-vous : 'Do you have it in...?' avec différentes couleurs."
    ]
  },
  {
    day: 5,
    title: "Les jours et les mois",
    titleNative: "Days & Months",
    focus: "Dates, rendez-vous et réservations — vous ne pouvez pas éviter les jours et les mois en anglais.",
    vocab: [
      { fr: "Monday, Tuesday, Wednesday", en: "Lundi, mardi, mercredi", ipa: "MAN-dei, TOOS-dei, WENZ-dei" },
      { fr: "Thursday, Friday", en: "Jeudi, vendredi", ipa: "ZERZ-dei, FRAI-dei" },
      { fr: "Saturday, Sunday", en: "Samedi, dimanche", ipa: "SAT-er-dei, SAN-dei" },
      { fr: "Today / Tomorrow / Yesterday", en: "Aujourd'hui / Demain / Hier", ipa: "tu-DEI / tu-MOR-oh / YES-ter-dei" },
      { fr: "January, February, March", en: "Janvier, février, mars", ipa: "JAN-yu-eh-ree, FEB-ru-eh-ree, MARCH" },
      { fr: "April, May, June", en: "Avril, mai, juin", ipa: "EI-pril, MEI, JOON" },
      { fr: "July, August, September", en: "Juillet, août, septembre", ipa: "ju-LAI, AW-gust, sep-TEM-ber" },
      { fr: "October, November, December", en: "Octobre, novembre, décembre", ipa: "ok-TOH-ber, noh-VEM-ber, di-SEM-ber" },
      { fr: "What day is today?", en: "Quel jour sommes-nous ?", ipa: "wot DEI iz tu-DEI" },
      { fr: "What time is it?", en: "Quelle heure est-il ?", ipa: "wot TAIM iz it" }
    ],
    phrases: [
      { fr: "Today is Monday.", en: "Aujourd'hui c'est lundi.", ipa: "tu-DEI iz MAN-dei" },
      { fr: "My appointment is on Friday.", en: "Mon rendez-vous est vendredi.", ipa: "mai a-POINT-ment iz on FRAI-dei" },
      { fr: "See you next week.", en: "À la semaine prochaine.", ipa: "si iu NEKST wiik" },
      { fr: "The meeting is on March 15th.", en: "La réunion est le 15 mars.", ipa: "da MIIT-ing iz on MARCH fif-TEENΘ" },
      { fr: "I was born in July.", en: "Je suis né(e) en juillet.", ipa: "ai woz BORN in ju-LAI" },
      { fr: "The store is closed on Sundays.", en: "Le magasin est fermé le dimanche.", ipa: "da STOR iz KLOHZD on SAN-deiz" }
    ],
    grammar: "En anglais, les jours et les mois s'écrivent TOUJOURS avec une majuscule : Monday, January. Pour les dates, on utilise les ordinaux : 'March 15th', 'July 4th'. Les ordinaux courants : 1st (first), 2nd (second), 3rd (third), 4th–20th ajoutent 'th'. Attention : aux États-Unis la semaine commence le dimanche, pas le lundi.",
    practice: [
      "Dites les 7 jours de la semaine et les 12 mois de l'année à voix haute sans regarder.",
      "Entraînez-vous à dire votre date d'anniversaire en anglais : 'I was born on [jour], [mois] [nombre]th.'"
    ]
  },
  {
    day: 6,
    title: "Au restaurant",
    titleNative: "At the Restaurant",
    focus: "Commander de la nourriture, demander le menu et payer l'addition — tout ce qu'il faut pour bien manger en anglais.",
    vocab: [
      { fr: "Menu", en: "Menu / Carte", ipa: "MEN-yuu" },
      { fr: "I'd like...", en: "Je voudrais...", ipa: "aid LAIK" },
      { fr: "To order", en: "Commander / Passer commande", ipa: "tu OR-der" },
      { fr: "The bill / The check", en: "L'addition", ipa: "da BIL / da CHEK" },
      { fr: "A table for two", en: "Une table pour deux", ipa: "a TEI-bel for TUU" },
      { fr: "Water", en: "Eau", ipa: "WAW-ter" },
      { fr: "Wine", en: "Vin", ipa: "WAIN" },
      { fr: "Beer", en: "Bière", ipa: "BIIR" },
      { fr: "Vegetarian", en: "Végétarien(ne)", ipa: "vech-i-TEHR-ee-an" },
      { fr: "Delicious", en: "Délicieux", ipa: "di-LISH-us" }
    ],
    phrases: [
      { fr: "Can I see the menu, please?", en: "Puis-je voir le menu, s'il vous plaît ?", ipa: "kan ai SII da MEN-yuu PLEES" },
      { fr: "I'd like the chicken, please.", en: "Je voudrais le poulet, s'il vous plaît.", ipa: "aid LAIK da CHIK-en PLEES" },
      { fr: "Do you have vegetarian options?", en: "Avez-vous des options végétariennes ?", ipa: "du iu jav VECH-i-TEHR-ee-an OP-shuns" },
      { fr: "Can I get the bill, please?", en: "L'addition, s'il vous plaît.", ipa: "kan ai get da BIL PLEES" },
      { fr: "Is service included?", en: "Le service est-il compris ?", ipa: "iz SER-vis in-KLUU-did" },
      { fr: "This is delicious!", en: "C'est délicieux !", ipa: "dis iz di-LISH-us" },
      { fr: "I'm allergic to nuts.", en: "Je suis allergique aux noix.", ipa: "aim a-LER-chik tu NATS" },
      { fr: "We'd like a table for four.", en: "Nous voudrions une table pour quatre.", ipa: "wiid LAIK a TEI-bel for FOR" }
    ],
    grammar: "'I'd like' (I would like) est la façon la plus polie de commander — équivalent de 'Je voudrais'. Ne dites jamais simplement 'I want' à un inconnu — ça paraît impoli. Utilisez 'I'd like' ou 'Can I have...?' pour commander. Aux États-Unis, on dit 'the check' ; au Royaume-Uni, on dit 'the bill'.",
    practice: [
      "Entraînez-vous au scénario complet du restaurant à voix haute : demander une table, voir le menu, commander, demander l'addition.",
      "Mémorisez : 'Can I get the bill, please?' — la phrase la plus utile à la fin d'un repas."
    ]
  },
  {
    day: 7,
    title: "La nourriture et les boissons",
    titleNative: "Food & Drinks",
    focus: "Le vocabulaire essentiel des aliments pour comprendre les menus, faire les courses et parler de vos préférences.",
    vocab: [
      { fr: "Breakfast / Lunch / Dinner", en: "Petit-déjeuner / Déjeuner / Dîner", ipa: "BREK-fast / LANCH / DIN-er" },
      { fr: "Bread", en: "Pain", ipa: "BRED" },
      { fr: "Chicken", en: "Poulet", ipa: "CHIK-en" },
      { fr: "Fish", en: "Poisson", ipa: "FISH" },
      { fr: "Rice", en: "Riz", ipa: "RAIS" },
      { fr: "Salad", en: "Salade", ipa: "SAL-ad" },
      { fr: "Coffee / Tea", en: "Café / Thé", ipa: "KOF-ee / TII" },
      { fr: "Juice", en: "Jus", ipa: "JUUS" },
      { fr: "Ice cream", en: "Glace", ipa: "AIS KREEM" },
      { fr: "Dessert", en: "Dessert", ipa: "di-ZERT" }
    ],
    phrases: [
      { fr: "I'd like coffee with milk.", en: "Je voudrais un café au lait.", ipa: "aid LAIK KOF-ee wid MILK" },
      { fr: "Do you have fresh juice?", en: "Avez-vous du jus frais ?", ipa: "du iu jav FRESH JUUS" },
      { fr: "What do you recommend?", en: "Qu'est-ce que vous recommandez ?", ipa: "wot du iu rek-o-MEND" },
      { fr: "I'll have the fish, please.", en: "Je prendrai le poisson, s'il vous plaît.", ipa: "ail jav da FISH PLEES" },
      { fr: "Can I get this to go?", en: "C'est possible à emporter ?", ipa: "kan ai get dis tu GOH" },
      { fr: "No sugar, please.", en: "Sans sucre, s'il vous plaît.", ipa: "noh SHUG-er PLEES" },
      { fr: "That was delicious, thank you.", en: "C'était délicieux, merci.", ipa: "dat woz di-LISH-us ZANK iu" }
    ],
    grammar: "En anglais, les noms indénombrables (eau, sucre, riz) ne prennent pas d'article indéfini : 'I'd like water' (pas 'a water'). Pour préciser la quantité, utilisez : 'a glass of water', 'a cup of coffee', 'a bowl of rice'. Les dénombrables prennent l'article : 'a sandwich', 'an apple'.",
    practice: [
      "Consultez le menu d'un restaurant américain en ligne et entraînez-vous à commander à voix haute.",
      "Décrivez ce que vous avez mangé au petit-déjeuner aujourd'hui en anglais : 'For breakfast I had...'"
    ]
  },
  {
    day: 8,
    title: "Faire des courses",
    titleNative: "Shopping",
    focus: "Comment acheter, demander les prix, chercher les tailles et comprendre un magasin en anglais.",
    vocab: [
      { fr: "How much is this?", en: "Combien ça coûte ?", ipa: "jau MACH iz DIS" },
      { fr: "Size", en: "Taille / Pointure", ipa: "SAIZ" },
      { fr: "Too expensive", en: "Trop cher", ipa: "tuu eks-PEN-siv" },
      { fr: "Cheap / Affordable", en: "Pas cher / Abordable", ipa: "CHIIP / a-FOR-da-bel" },
      { fr: "Sale / Discount", en: "Soldes / Réduction", ipa: "SEIL / DIS-kaunt" },
      { fr: "Cash / Credit card", en: "Espèces / Carte de crédit", ipa: "KASH / KRED-it KARD" },
      { fr: "Receipt", en: "Reçu / Ticket de caisse", ipa: "ri-SIIT" },
      { fr: "Return / Exchange", en: "Remboursement / Échange", ipa: "ri-TERN / eks-CHEYNCH" },
      { fr: "Fitting room", en: "Cabine d'essayage", ipa: "FIT-ing RUUM" },
      { fr: "I'm just looking", en: "Je regarde seulement", ipa: "aim CHAST LUK-ing" }
    ],
    phrases: [
      { fr: "Can I try this on?", en: "Puis-je l'essayer ?", ipa: "kan ai TRAI dis ON" },
      { fr: "Do you have this in a medium?", en: "Vous l'avez en taille moyenne ?", ipa: "du iu jav dis in a MIID-ee-um" },
      { fr: "I'll take it.", en: "Je le prends.", ipa: "ail TEIK it" },
      { fr: "Can I pay by card?", en: "Je peux payer par carte ?", ipa: "kan ai PEI bai KARD" },
      { fr: "Do you have anything cheaper?", en: "Vous avez quelque chose de moins cher ?", ipa: "du iu jav EN-ee-zing CHIIP-er" },
      { fr: "Is there a sale on?", en: "Il y a des soldes en ce moment ?", ipa: "iz der a SEIL ON" },
      { fr: "I'd like to return this.", en: "Je voudrais retourner ceci.", ipa: "aid LAIK tu ri-TERN DIS" },
      { fr: "Can I have a receipt, please?", en: "Puis-je avoir un reçu, s'il vous plaît ?", ipa: "kan ai jav a ri-SIIT PLEES" }
    ],
    grammar: "En anglais, 'Can I...?' sert à demander poliment la permission : 'Can I try this on?', 'Can I pay by card?'. C'est l'équivalent de 'Puis-je...?' Les tailles américaines : XS, S, M, L, XL — différentes des tailles françaises (36, 38, 40...). Une taille 38 française correspond environ à un S/M américain.",
    practice: [
      "Entraînez-vous au scénario complet des courses : entrer, demander une taille, aller à la cabine, payer et demander un reçu.",
      "Mémorisez 'I'm just looking, thank you' pour quand un vendeur s'approche et que vous n'avez pas besoin d'aide."
    ]
  },
  {
    day: 9,
    title: "Transports et directions",
    titleNative: "Transportation & Directions",
    focus: "Comment se déplacer dans un pays anglophone — demander son chemin, prendre les transports et comprendre les indications.",
    vocab: [
      { fr: "Where is...?", en: "Où est... ?", ipa: "wer IZ" },
      { fr: "Straight ahead", en: "Tout droit", ipa: "streit a-JED" },
      { fr: "Turn left / Turn right", en: "Tournez à gauche / à droite", ipa: "TERN LEFT / TERN RAIT" },
      { fr: "Bus / Train / Subway", en: "Bus / Train / Métro", ipa: "BAS / TREIN / SAB-wei" },
      { fr: "Airport", en: "Aéroport", ipa: "EHR-port" },
      { fr: "Taxi / Uber", en: "Taxi / Uber", ipa: "TAK-si / UU-ber" },
      { fr: "Ticket", en: "Billet / Ticket", ipa: "TIK-et" },
      { fr: "Next stop", en: "Prochain arrêt", ipa: "NEKST STOP" },
      { fr: "How far is it?", en: "C'est loin ?", ipa: "jau FAR iz IT" },
      { fr: "I'm lost", en: "Je suis perdu(e)", ipa: "aim LOST" }
    ],
    phrases: [
      { fr: "How do I get to the airport?", en: "Comment puis-je aller à l'aéroport ?", ipa: "jau du ai GET tu di EHR-port" },
      { fr: "Take the number 5 bus.", en: "Prenez le bus numéro 5.", ipa: "TEIK da NAM-ber FAIV BAS" },
      { fr: "Get off at the third stop.", en: "Descendez au troisième arrêt.", ipa: "get OFF at da ZERD STOP" },
      { fr: "Is this the right train for downtown?", en: "C'est bien le bon train pour le centre-ville ?", ipa: "iz DIS da RAIT TREIN for DAUN-taun" },
      { fr: "Where can I buy a ticket?", en: "Où puis-je acheter un billet ?", ipa: "wer kan ai BAI a TIK-et" },
      { fr: "I'm lost. Can you help me?", en: "Je suis perdu(e). Pouvez-vous m'aider ?", ipa: "aim LOST kan iu JELP mi" },
      { fr: "It's about 10 minutes on foot.", en: "C'est à environ 10 minutes à pied.", ipa: "its a-BAUT TEN MIN-its on FUT" }
    ],
    grammar: "Pour demander comment aller quelque part : 'How do I get to...?' ou plus informel 'Where is...?'. Pour donner des directions, l'anglais utilise l'impératif direct : 'Turn left', 'Go straight', 'Take the bus'. Ce n'est pas impoli — c'est simplement la façon de donner des instructions en anglais. 'Subway' = métro aux USA ; au Royaume-Uni on dit 'Underground' ou 'Tube'.",
    practice: [
      "Entraînez-vous à voix haute : 'Excuse me, how do I get to the nearest subway station?'",
      "Apprenez à donner votre adresse en anglais et entraînez-vous à donner des directions pour y arriver."
    ]
  },
  {
    day: 10,
    title: "Les lieux en ville",
    titleNative: "Places in the City",
    focus: "Les endroits les plus courants que vous aurez besoin de trouver ou de mentionner dans n'importe quelle ville anglophone.",
    vocab: [
      { fr: "Hospital", en: "Hôpital", ipa: "JOS-pi-tal" },
      { fr: "Pharmacy / Drugstore", en: "Pharmacie", ipa: "FAR-ma-see / DRAG-stor" },
      { fr: "Supermarket", en: "Supermarché", ipa: "SUU-per-mar-ket" },
      { fr: "Bank", en: "Banque", ipa: "BANK" },
      { fr: "Restaurant", en: "Restaurant", ipa: "RES-tuh-rant" },
      { fr: "Hotel", en: "Hôtel", ipa: "joh-TEL" },
      { fr: "Museum", en: "Musée", ipa: "myuu-ZEE-um" },
      { fr: "Park", en: "Parc", ipa: "PARK" },
      { fr: "Police station", en: "Commissariat / Poste de police", ipa: "po-LIIS STEI-shun" },
      { fr: "Post office", en: "Bureau de poste", ipa: "POHST OF-is" }
    ],
    phrases: [
      { fr: "Is there a pharmacy nearby?", en: "Y a-t-il une pharmacie à proximité ?", ipa: "iz der a FAR-ma-see NEER-bai" },
      { fr: "Where is the nearest bank?", en: "Où est la banque la plus proche ?", ipa: "wer iz da NEER-est BANK" },
      { fr: "How far is the hospital?", en: "L'hôpital est loin ?", ipa: "jau FAR iz da JOS-pi-tal" },
      { fr: "I need to find a supermarket.", en: "J'ai besoin de trouver un supermarché.", ipa: "ai NIID tu FAIND a SUU-per-mar-ket" },
      { fr: "Is the museum open today?", en: "Le musée est ouvert aujourd'hui ?", ipa: "iz da myuu-ZEE-um OH-pen tu-DEI" },
      { fr: "Can you show me on the map?", en: "Pouvez-vous me montrer sur la carte ?", ipa: "kan iu SHOH mi on da MAP" }
    ],
    grammar: "Pour demander si quelque chose existe à proximité : 'Is there a...?' (Y a-t-il un/une...?). Pour demander où se trouve quelque chose de spécifique : 'Where is the...?' (Où est le/la...?). La différence : 'Is there a bank?' (je ne sais pas s'il y en a un) vs 'Where is the bank?' (je sais qu'il en existe un, je veux savoir où).",
    practice: [
      "Cherchez une ville américaine sur Google Maps et entraînez-vous à décrire les lieux en anglais.",
      "Entraînez-vous : 'Is there a...?' avec 5 lieux différents près de chez vous."
    ]
  },
  {
    day: 11,
    title: "À l'hôtel",
    titleNative: "At the Hotel",
    focus: "Check-in, check-out, demander ce dont vous avez besoin et résoudre des problèmes dans un hôtel.",
    vocab: [
      { fr: "Reservation / Booking", en: "Réservation", ipa: "rez-er-VEI-shun / BUK-ing" },
      { fr: "Check-in / Check-out", en: "Arrivée / Départ", ipa: "CHEK-in / CHEK-aut" },
      { fr: "Room", en: "Chambre", ipa: "RUUM" },
      { fr: "Single / Double room", en: "Chambre simple / double", ipa: "SIN-gel / DAB-el RUUM" },
      { fr: "Key card", en: "Carte-clé", ipa: "KII KARD" },
      { fr: "Wifi password", en: "Mot de passe wifi", ipa: "WAI-fai PAS-werd" },
      { fr: "Towels", en: "Serviettes", ipa: "TAU-elz" },
      { fr: "Floor / Elevator", en: "Étage / Ascenseur", ipa: "FLOR / EL-e-vei-tor" },
      { fr: "Do not disturb", en: "Ne pas déranger", ipa: "du NOT dis-TERB" },
      { fr: "Complaint", en: "Réclamation", ipa: "kom-PLEINT" }
    ],
    phrases: [
      { fr: "I have a reservation under [name].", en: "J'ai une réservation au nom de [nom].", ipa: "ai jav a rez-er-VEI-shun AN-der [NEIM]" },
      { fr: "What time is check-out?", en: "À quelle heure est le départ ?", ipa: "wot TAIM iz CHEK-aut" },
      { fr: "Can I have more towels, please?", en: "Puis-je avoir plus de serviettes, s'il vous plaît ?", ipa: "kan ai jav MOR TAU-elz PLEES" },
      { fr: "The air conditioning isn't working.", en: "La climatisation ne fonctionne pas.", ipa: "di EHR kon-DISH-un-ing IZ-ent WER-king" },
      { fr: "What's the wifi password?", en: "Quel est le mot de passe wifi ?", ipa: "wots da WAI-fai PAS-werd" },
      { fr: "I'd like a late check-out, please.", en: "Je voudrais un départ tardif, s'il vous plaît.", ipa: "aid LAIK a LEIT CHEK-aut PLEES" },
      { fr: "Can I leave my luggage here?", en: "Puis-je laisser mes bagages ici ?", ipa: "kan ai LIIV mai LAG-ich JIIR" }
    ],
    grammar: "En anglais américain : 'elevator' ; en anglais britannique : 'lift'. Aussi : 'bathroom' (américain) vs 'toilet' (britannique). Quand quelque chose ne fonctionne pas : 'The [chose] isn't working' ou 'The [chose] is broken'. Ce sont les phrases les plus utiles pour signaler un problème.",
    practice: [
      "Entraînez-vous au check-in complet à voix haute : nom, type de chambre, demander la clé et le wifi.",
      "Entraînez-vous à signaler un problème : 'Excuse me, the [chose] in my room isn't working.'"
    ]
  },
  {
    day: 12,
    title: "À l'aéroport",
    titleNative: "At the Airport",
    focus: "Naviguer dans un aéroport en anglais — du check-in jusqu'à la douane et l'embarquement.",
    vocab: [
      { fr: "Passport / ID", en: "Passeport / Pièce d'identité", ipa: "PAS-port / ai-DII" },
      { fr: "Boarding pass", en: "Carte d'embarquement", ipa: "BOR-ding PAS" },
      { fr: "Gate", en: "Porte (d'embarquement)", ipa: "GEIT" },
      { fr: "Departure / Arrival", en: "Départ / Arrivée", ipa: "di-PAR-chur / a-RAI-val" },
      { fr: "Delayed / On time", en: "Retardé / À l'heure", ipa: "di-LEID / ON TAIM" },
      { fr: "Luggage / Baggage", en: "Bagages", ipa: "LAG-ich / BAG-ich" },
      { fr: "Carry-on", en: "Bagage à main", ipa: "KEHR-ee ON" },
      { fr: "Customs", en: "Douane", ipa: "KAS-tomz" },
      { fr: "Nothing to declare", en: "Rien à déclarer", ipa: "NAZ-ing tu di-KLAIR" },
      { fr: "Window / Aisle seat", en: "Siège hublot / couloir", ipa: "WIN-doh / AIL SIIT" }
    ],
    phrases: [
      { fr: "Where is gate B12?", en: "Où est la porte B12 ?", ipa: "wer iz GEIT BEE TWELV" },
      { fr: "My flight has been delayed.", en: "Mon vol a du retard.", ipa: "mai FLAIT jaz BIN di-LEID" },
      { fr: "I have nothing to declare.", en: "Je n'ai rien à déclarer.", ipa: "ai jav NAZ-ing tu di-KLAIR" },
      { fr: "Can I have a window seat?", en: "Puis-je avoir un siège hublot ?", ipa: "kan ai jav a WIN-doh SIIT" },
      { fr: "Is this the line for check-in?", en: "C'est bien la file pour le check-in ?", ipa: "iz DIS da LAIN for CHEK-in" },
      { fr: "My baggage is lost.", en: "Mes bagages sont perdus.", ipa: "mai BAG-ich iz LOST" },
      { fr: "What time does boarding start?", en: "L'embarquement commence à quelle heure ?", ipa: "wot TAIM daz BOR-ding START" }
    ],
    grammar: "L'anglais aéroportuaire utilise beaucoup le passif et le présent parfait : 'Your flight has been delayed', 'Boarding has begun'. Ne vous inquiétez pas de comprendre chaque mot — concentrez-vous sur les numéros de porte et les verbes clés. Aux USA le numéro d'urgence est le 911 ; au Royaume-Uni le 999 ; en Europe le 112.",
    practice: [
      "Écoutez des annonces d'aéroport en anglais sur YouTube et entraînez-vous à comprendre le numéro de vol et la porte.",
      "Mémorisez : 'Excuse me, where is gate [lettre+numéro]?' — la question la plus utile dans tout aéroport."
    ]
  },
  {
    day: 13,
    title: "La météo",
    titleNative: "Weather",
    focus: "La météo est le sujet de conversation numéro 1 dans les pays anglophones (surtout au Royaume-Uni). Apprenez à en parler.",
    vocab: [
      { fr: "Hot / Cold", en: "Chaud / Froid", ipa: "JOT / KOHLD" },
      { fr: "Warm / Cool", en: "Tiède / Frais", ipa: "WORM / KUUL" },
      { fr: "Sunny", en: "Ensoleillé", ipa: "SAN-ee" },
      { fr: "Cloudy / Rainy", en: "Nuageux / Pluvieux", ipa: "KLAU-dee / REI-nee" },
      { fr: "Wind / Windy", en: "Vent / Venteux", ipa: "WIND / WIN-dee" },
      { fr: "Snow / Snowy", en: "Neige / Neigeux", ipa: "SNOH / SNOH-ee" },
      { fr: "Fog / Foggy", en: "Brouillard / Brumeux", ipa: "FOG / FOG-ee" },
      { fr: "Storm / Stormy", en: "Orage / Orageux", ipa: "STORM / STOR-mee" },
      { fr: "Temperature", en: "Température", ipa: "TEM-per-a-chur" },
      { fr: "Forecast", en: "Prévisions météo", ipa: "FOR-kast" }
    ],
    phrases: [
      { fr: "What's the weather like today?", en: "Quel temps fait-il aujourd'hui ?", ipa: "wots da WEZ-er LAIK tu-DEI" },
      { fr: "It's really hot today.", en: "Il fait vraiment chaud aujourd'hui.", ipa: "its RII-lee JOT tu-DEI" },
      { fr: "It's going to rain tomorrow.", en: "Il va pleuvoir demain.", ipa: "its GOH-ing tu REIN tu-MOR-oh" },
      { fr: "Don't forget your umbrella!", en: "N'oubliez pas votre parapluie !", ipa: "dohnt for-GET ior am-BREL-a" },
      { fr: "I love this weather.", en: "J'adore ce temps.", ipa: "ai LAV dis WEZ-er" },
      { fr: "It's freezing outside!", en: "Il fait un froid glacial dehors !", ipa: "its FRIIZ-ing aut-SAID" },
      { fr: "What's the temperature today?", en: "Quelle est la température aujourd'hui ?", ipa: "wots da TEM-per-a-chur tu-DEI" }
    ],
    grammar: "En anglais on utilise 'It's...' pour décrire la météo : 'It's hot', 'It's raining', 'It's sunny'. Pour la température : aux USA on utilise Fahrenheit (°F), au Royaume-Uni et dans la plupart des pays on utilise Celsius (°C). 60°F ≈ 15°C, 80°F ≈ 27°C, 100°F ≈ 38°C. Si quelqu'un dit 'It's 90 degrees' aux USA, il fait très chaud !",
    practice: [
      "Consultez les prévisions météo en anglais cette semaine et entraînez-vous à les décrire : 'It's going to be [météo] on [jour].'",
      "Apprenez à répondre à 'Nice weather, isn't it?' — la phrase d'ouverture de conversation la plus britannique du monde."
    ]
  },
  {
    day: 14,
    title: "La famille",
    titleNative: "Family",
    focus: "Présenter votre famille et comprendre les liens de parenté en anglais.",
    vocab: [
      { fr: "Mother / Father", en: "Mère / Père", ipa: "MAZ-er / FAZ-er" },
      { fr: "Mom / Dad", en: "Maman / Papa (informel)", ipa: "MOM / DAD" },
      { fr: "Brother / Sister", en: "Frère / Sœur", ipa: "BRAZ-er / SIS-ter" },
      { fr: "Son / Daughter", en: "Fils / Fille", ipa: "SAN / DAW-ter" },
      { fr: "Husband / Wife", en: "Mari / Femme", ipa: "JAZ-band / WAIF" },
      { fr: "Boyfriend / Girlfriend", en: "Petit ami / Petite amie", ipa: "BOI-frend / GERL-frend" },
      { fr: "Grandfather / Grandmother", en: "Grand-père / Grand-mère", ipa: "GRAND-fa-zer / GRAND-maz-er" },
      { fr: "Uncle / Aunt", en: "Oncle / Tante", ipa: "AN-kel / ANT" },
      { fr: "Cousin", en: "Cousin(e)", ipa: "KAZ-en" },
      { fr: "Only child", en: "Enfant unique", ipa: "OHN-lee CHAILD" }
    ],
    phrases: [
      { fr: "I have two brothers and one sister.", en: "J'ai deux frères et une sœur.", ipa: "ai jav TUU BRAZ-erz and WAN SIS-ter" },
      { fr: "My mother is a doctor.", en: "Ma mère est médecin.", ipa: "mai MAZ-er iz a DOK-tor" },
      { fr: "I'm married with two kids.", en: "Je suis marié(e) et j'ai deux enfants.", ipa: "aim MEHR-eed wid TUU KIDZ" },
      { fr: "My parents live in France.", en: "Mes parents habitent en France.", ipa: "mai PEHR-ents LIV in FRANTS" },
      { fr: "Do you have any siblings?", en: "Vous avez des frères et sœurs ?", ipa: "du iu jav EN-ee SIB-lingz" },
      { fr: "I'm an only child.", en: "Je suis enfant unique.", ipa: "aim an OHN-lee CHAILD" },
      { fr: "This is my wife, [name].", en: "Voici ma femme, [prénom].", ipa: "dis iz mai WAIF [NEIM]" }
    ],
    grammar: "'Siblings' est le terme neutre pour 'frères et sœurs'. 'Do you have any siblings?' demande si vous avez des frères ou des sœurs. En anglais, il n'y a pas de distinction entre cousin masculin et féminin — 'cousin' convient aux deux. 'Partner' est une alternative neutre à husband/wife, utilisée pour tout type de relation.",
    practice: [
      "Décrivez votre famille en anglais en 4-5 phrases : nombre de frères et sœurs, profession des parents, situation maritale.",
      "Entraînez-vous à présenter un membre de votre famille : 'This is my [lien de parenté], [prénom]. She/He is [profession].'"
    ]
  },
  {
    day: 15,
    title: "Le corps humain",
    titleNative: "The Human Body",
    focus: "Vocabulaire essentiel pour expliquer où vous avez mal et comprendre les instructions médicales de base.",
    vocab: [
      { fr: "Head / Neck", en: "Tête / Cou", ipa: "JED / NEK" },
      { fr: "Chest / Back", en: "Poitrine / Dos", ipa: "CHEST / BAK" },
      { fr: "Stomach / Belly", en: "Estomac / Ventre", ipa: "STAM-ak / BEL-ee" },
      { fr: "Arm / Hand", en: "Bras / Main", ipa: "ARM / JAND" },
      { fr: "Leg / Foot (feet)", en: "Jambe / Pied (pieds)", ipa: "LEG / FUT (FIIT)" },
      { fr: "Eye / Ear / Nose", en: "Œil / Oreille / Nez", ipa: "AI / IIR / NOHZ" },
      { fr: "Mouth / Teeth", en: "Bouche / Dents", ipa: "MAUΘ / TIIZ" },
      { fr: "Throat", en: "Gorge", ipa: "ΘROHT" },
      { fr: "Heart", en: "Cœur", ipa: "JART" },
      { fr: "Skin", en: "Peau", ipa: "SKIN" }
    ],
    phrases: [
      { fr: "My head hurts.", en: "J'ai mal à la tête.", ipa: "mai JED JERTS" },
      { fr: "I have a stomachache.", en: "J'ai mal à l'estomac.", ipa: "ai jav a STAM-ak-eik" },
      { fr: "My back is killing me.", en: "Mon dos me tue. (J'ai très mal)", ipa: "mai BAK iz KIL-ing mi" },
      { fr: "I hurt my leg.", en: "Je me suis blessé(e) à la jambe.", ipa: "ai JERT mai LEG" },
      { fr: "I have a sore throat.", en: "J'ai mal à la gorge.", ipa: "ai jav a SOR ΘROHT" },
      { fr: "I can't move my arm.", en: "Je ne peux pas bouger le bras.", ipa: "ai kant MUUV mai ARM" },
      { fr: "Where exactly does it hurt?", en: "Où exactement avez-vous mal ?", ipa: "wer eg-ZAK-lee daz it JERT" }
    ],
    grammar: "Pour exprimer la douleur en anglais, deux constructions : 1) 'My [partie du corps] hurts' — 'J'ai mal à [partie]'. 2) 'I have a [partie]-ache' — seulement pour : headache (mal de tête), stomachache, backache, toothache. 'It hurts' est impersonnel (ça fait mal ici). 'I hurt my leg' signifie que vous vous êtes blessé(e) à la jambe.",
    practice: [
      "Montrez différentes parties de votre corps et dites le nom en anglais à voix haute 10 fois.",
      "Entraînez-vous à décrire une douleur : 'I have a headache', 'My back hurts', 'I have a sore throat'."
    ]
  },
  {
    day: 16,
    title: "Chez le médecin",
    titleNative: "At the Doctor",
    focus: "Comment communiquer lors d'une consultation médicale — décrire les symptômes, comprendre les diagnostics et suivre les instructions.",
    vocab: [
      { fr: "Doctor / Nurse", en: "Médecin / Infirmier(ère)", ipa: "DOK-tor / NERS" },
      { fr: "Appointment", en: "Rendez-vous", ipa: "a-POINT-ment" },
      { fr: "Symptoms", en: "Symptômes", ipa: "SIMP-tomz" },
      { fr: "Fever / Temperature", en: "Fièvre / Température", ipa: "FII-ver / TEM-per-a-chur" },
      { fr: "Prescription", en: "Ordonnance", ipa: "pre-SKRIP-shun" },
      { fr: "Medicine / Medication", en: "Médicament", ipa: "MED-i-sin / med-i-KEI-shun" },
      { fr: "Allergy", en: "Allergie", ipa: "AL-er-chee" },
      { fr: "Surgery", en: "Chirurgie / Opération", ipa: "SER-cher-ee" },
      { fr: "Emergency room (ER)", en: "Urgences", ipa: "i-MER-chen-see RUUM" },
      { fr: "Insurance", en: "Assurance (maladie)", ipa: "in-SHUR-ans" }
    ],
    phrases: [
      { fr: "I need to see a doctor.", en: "J'ai besoin de voir un médecin.", ipa: "ai NIID tu SII a DOK-tor" },
      { fr: "I've had a fever for two days.", en: "J'ai de la fièvre depuis deux jours.", ipa: "aiv JAD a FII-ver for TUU DEIZ" },
      { fr: "I'm allergic to penicillin.", en: "Je suis allergique à la pénicilline.", ipa: "aim a-LER-chik tu pen-i-SIL-in" },
      { fr: "How many times a day should I take this?", en: "Combien de fois par jour dois-je le prendre ?", ipa: "jau MEN-ee TAIMZ a DEI shud ai TEIK DIS" },
      { fr: "Is this serious?", en: "C'est grave ?", ipa: "iz DIS SIR-ee-us" },
      { fr: "I have health insurance.", en: "J'ai une assurance maladie.", ipa: "ai jav JELZ in-SHUR-ans" },
      { fr: "I feel dizzy / nauseous.", en: "Je me sens étourdi(e) / nauséeux(se).", ipa: "ai FIIL DIZ-ee / NAW-shus" }
    ],
    grammar: "Pour décrire depuis combien de temps vous avez un symptôme : 'I've had [symptôme] for [durée]' — par exemple 'I've had a headache for three hours'. Utilisez 'I feel...' pour décrire comment vous vous sentez : 'I feel sick', 'I feel dizzy', 'I feel tired'. Le présent parfait ('I've had') indique que ça a commencé dans le passé et continue maintenant.",
    practice: [
      "Entraînez-vous à décrire 3 symptômes en anglais : 'I have a fever', 'I feel nauseous', 'My throat hurts'.",
      "Mémorisez : 'I'm allergic to...' + nom du médicament ou de l'aliment. Ça peut vous sauver la vie."
    ]
  },
  {
    day: 17,
    title: "Le travail et les professions",
    titleNative: "Work & Professions",
    focus: "Parler de votre travail, votre entreprise et vos responsabilités en anglais — indispensable en contexte professionnel.",
    vocab: [
      { fr: "Job / Work", en: "Travail / Emploi", ipa: "CHOB / WERK" },
      { fr: "Office / Company", en: "Bureau / Entreprise", ipa: "OF-is / KAM-pa-nee" },
      { fr: "Boss / Manager", en: "Chef / Responsable", ipa: "BOS / MAN-i-cher" },
      { fr: "Colleague / Coworker", en: "Collègue", ipa: "KOL-iig / KOH-wer-ker" },
      { fr: "Meeting", en: "Réunion", ipa: "MIIT-ing" },
      { fr: "Deadline", en: "Date limite / Délai", ipa: "DED-lain" },
      { fr: "Salary / Wages", en: "Salaire", ipa: "SAL-a-ree / WEI-chiz" },
      { fr: "Resume / CV", en: "CV / Curriculum vitae", ipa: "REZ-u-mei / SII-VII" },
      { fr: "Interview", en: "Entretien d'embauche", ipa: "IN-ter-vyuu" },
      { fr: "Remote work", en: "Télétravail", ipa: "ri-MOHT WERK" }
    ],
    phrases: [
      { fr: "What do you do for a living?", en: "Qu'est-ce que vous faites dans la vie ?", ipa: "wot du iu DUU for a LIV-ing" },
      { fr: "I work in marketing.", en: "Je travaille dans le marketing.", ipa: "ai WERK in MAR-ke-ting" },
      { fr: "I'm self-employed.", en: "Je travaille à mon compte.", ipa: "aim SELF-em-ploid" },
      { fr: "I have a meeting at 3 PM.", en: "J'ai une réunion à 15h.", ipa: "ai jav a MIIT-ing at ZRII PII-EM" },
      { fr: "The deadline is Friday.", en: "La date limite est vendredi.", ipa: "da DED-lain iz FRAI-dee" },
      { fr: "I work from home.", en: "Je travaille de chez moi.", ipa: "ai WERK from JOHM" },
      { fr: "I'm looking for a new job.", en: "Je cherche un nouvel emploi.", ipa: "aim LUK-ing for a NUU CHOB" }
    ],
    grammar: "Pour demander la profession de quelqu'un : 'What do you do?' ou 'What do you do for a living?' — équivalent de 'Qu'est-ce que vous faites dans la vie ?'. Pour répondre : 'I'm a [profession]' ou 'I work in [secteur]'. Si vous êtes sans emploi : 'I'm between jobs' (neutre et professionnel) ou 'I'm currently job hunting'.",
    practice: [
      "Préparez votre présentation professionnelle en anglais : qui vous êtes, ce que vous faites, dans quelle entreprise (3 phrases).",
      "Entraînez-vous à répondre à 'What do you do?' de façon naturelle et assurée."
    ]
  },
  {
    day: 18,
    title: "La technologie et la communication",
    titleNative: "Technology & Communication",
    focus: "Le vocabulaire numérique que vous utilisez tous les jours — réseaux sociaux, téléphone, internet et communication moderne.",
    vocab: [
      { fr: "Phone call / Text message", en: "Appel téléphonique / SMS", ipa: "FOHN KOL / TEKST MES-ich" },
      { fr: "Email", en: "E-mail / Courriel", ipa: "EE-meil" },
      { fr: "Password", en: "Mot de passe", ipa: "PAS-werd" },
      { fr: "Download / Upload", en: "Télécharger / Envoyer", ipa: "DAUN-lohd / AP-lohd" },
      { fr: "Social media", en: "Réseaux sociaux", ipa: "SOH-shal MII-dee-a" },
      { fr: "App", en: "Application", ipa: "AP" },
      { fr: "Wifi / Connection", en: "Wifi / Connexion", ipa: "WAI-fai / ko-NEK-shun" },
      { fr: "Search / Google it", en: "Rechercher / Chercher sur Google", ipa: "SERCH / GUUG-el it" },
      { fr: "Screen / Battery", en: "Écran / Batterie", ipa: "SKRIIN / BAT-er-ee" },
      { fr: "Charger", en: "Chargeur", ipa: "CHAR-cher" }
    ],
    phrases: [
      { fr: "Can I use your wifi?", en: "Je peux utiliser votre wifi ?", ipa: "kan ai YUUZ ior WAI-fai" },
      { fr: "My phone is dead.", en: "Mon téléphone est déchargé.", ipa: "mai FOHN iz DED" },
      { fr: "Do you have a charger?", en: "Vous avez un chargeur ?", ipa: "du iu jav a CHAR-cher" },
      { fr: "Just google it.", en: "Cherchez sur Google.", ipa: "CHAST GUUG-el it" },
      { fr: "I'll send you a text.", en: "Je vous envoie un SMS.", ipa: "ail SEND iu a TEKST" },
      { fr: "I can't connect to the internet.", en: "Je n'arrive pas à me connecter à internet.", ipa: "ai kant ko-NEKT tu di IN-ter-net" },
      { fr: "Can you send me the file?", en: "Pouvez-vous m'envoyer le fichier ?", ipa: "kan iu SEND mi da FAIL" }
    ],
    grammar: "L'anglais technologique est plein de verbes à particule (phrasal verbs) : 'log in' (se connecter), 'log out' (se déconnecter), 'sign up' (s'inscrire), 'scroll down/up' (faire défiler vers le bas/haut), 'zoom in/out' (zoomer/dézoomer). Ces verbes se séparent quand ils ont un complément : 'log in to the app', 'scroll down the page'.",
    practice: [
      "Passez l'interface de votre téléphone en anglais pendant 24 heures — c'est la meilleure façon d'apprendre le vocabulaire numérique.",
      "Entraînez-vous à décrire un problème : 'My [appareil] is not working', 'I can't connect to...', 'The screen is broken'."
    ]
  },
  {
    day: 19,
    title: "Les émotions et les humeurs",
    titleNative: "Emotions & Moods",
    focus: "Exprimer comment vous vous sentez et demander l'état émotionnel des autres — essentiel pour de vraies connexions humaines.",
    vocab: [
      { fr: "Happy / Excited", en: "Heureux / Enthousiaste", ipa: "JAP-ee / ek-SAI-tid" },
      { fr: "Sad / Upset", en: "Triste / Bouleversé(e)", ipa: "SAD / ap-SET" },
      { fr: "Angry / Frustrated", en: "En colère / Frustré(e)", ipa: "ANG-gree / FRAS-treit-id" },
      { fr: "Nervous / Anxious", en: "Nerveux(se) / Anxieux(se)", ipa: "NER-vus / ANK-shus" },
      { fr: "Tired / Exhausted", en: "Fatigué(e) / Épuisé(e)", ipa: "TAIRD / eg-ZOS-tid" },
      { fr: "Bored", en: "Ennuyé(e)", ipa: "BORD" },
      { fr: "Stressed", en: "Stressé(e)", ipa: "STREST" },
      { fr: "Proud", en: "Fier(ère)", ipa: "PRAUD" },
      { fr: "Confused", en: "Confus(e) / Perplexe", ipa: "kon-FYUUZD" },
      { fr: "Relieved", en: "Soulagé(e)", ipa: "ri-LIIVD" }
    ],
    phrases: [
      { fr: "I'm so happy to see you!", en: "Je suis tellement content(e) de vous voir !", ipa: "aim soh JAP-ee tu SII iu" },
      { fr: "I'm feeling a bit stressed.", en: "Je me sens un peu stressé(e).", ipa: "aim FIIL-ing a bit STREST" },
      { fr: "Are you okay?", en: "Vous allez bien ?", ipa: "ar iu oh-KEI" },
      { fr: "I'm exhausted — it's been a long day.", en: "Je suis épuisé(e) — c'était une longue journée.", ipa: "aim eg-ZOS-tid its BIN a LONG DEI" },
      { fr: "Don't worry about it.", en: "Ne vous en faites pas.", ipa: "dohnt WER-ee a-BAUT it" },
      { fr: "I'm really excited about the trip.", en: "Je suis vraiment enthousiaste pour le voyage.", ipa: "aim RII-lee ek-SAI-tid a-BAUT da TRIP" },
      { fr: "I feel much better now.", en: "Je me sens beaucoup mieux maintenant.", ipa: "ai FIIL mach BET-er NAU" }
    ],
    grammar: "Pour exprimer des émotions : 'I'm [adjectif]' ou 'I feel [adjectif]'. Vous pouvez aussi préciser la raison : 'I'm excited about [quelque chose]', 'I'm nervous about [quelque chose]', 'I'm happy for [quelqu'un]'. Pour demander : 'How are you feeling?' ou de façon très informelle 'You okay?' ou 'You alright?' (très britannique).",
    practice: [
      "Décrivez comment vous vous êtes senti(e) cette semaine en utilisant au moins 5 émotions différentes en anglais.",
      "Entraînez-vous à répondre à 'How are you?' avec quelque chose de plus intéressant que 'fine' : 'I'm pretty good', 'I've been better', 'I'm exhausted but happy'."
    ]
  },
  {
    day: 20,
    title: "Au supermarché",
    titleNative: "At the Supermarket",
    focus: "Naviguer dans un supermarché anglophone — trouver des produits, demander où ils sont et comprendre les étiquettes.",
    vocab: [
      { fr: "Aisle", en: "Rayon / Allée", ipa: "AIL" },
      { fr: "Cart / Basket", en: "Chariot / Panier", ipa: "KART / BAS-ket" },
      { fr: "Checkout / Cashier", en: "Caisse / Caissier(ère)", ipa: "CHEK-aut / ka-SHIIR" },
      { fr: "Organic", en: "Biologique / Bio", ipa: "or-GAN-ik" },
      { fr: "Expiration date", en: "Date de péremption", ipa: "ek-spi-REI-shun DEIT" },
      { fr: "On sale", en: "En promotion / En soldes", ipa: "on SEIL" },
      { fr: "Frozen food", en: "Surgelés", ipa: "FROH-zen FUUD" },
      { fr: "Dairy", en: "Produits laitiers", ipa: "DEHR-ee" },
      { fr: "Produce", en: "Fruits et légumes", ipa: "PROH-dyuus" },
      { fr: "Bag / Bags", en: "Sac / Sacs", ipa: "BAG / BAGZ" }
    ],
    phrases: [
      { fr: "Where can I find the milk?", en: "Où puis-je trouver le lait ?", ipa: "wer kan ai FAIND da MILK" },
      { fr: "Is this on sale?", en: "C'est en promotion ?", ipa: "iz DIS on SEIL" },
      { fr: "Do you have reusable bags?", en: "Vous avez des sacs réutilisables ?", ipa: "du iu jav ree-YUUZ-a-bel BAGZ" },
      { fr: "I'm looking for the bread aisle.", en: "Je cherche le rayon pain.", ipa: "aim LUK-ing for da BRED AIL" },
      { fr: "Can I pay with card here?", en: "Je peux payer par carte ici ?", ipa: "kan ai PEI wid KARD JIIR" },
      { fr: "Paper or plastic?", en: "Papier ou plastique ? (type de sac)", ipa: "PEI-per or PLAS-tik" },
      { fr: "I'll use my own bag.", en: "J'utiliserai mon propre sac.", ipa: "ail YUUZ mai OHN BAG" }
    ],
    grammar: "Les rayons du supermarché en anglais : 'produce' (fruits et légumes), 'dairy' (produits laitiers), 'bakery' (boulangerie), 'meat' (viandes), 'frozen' (surgelés), 'deli' (charcuterie). 'Paper or plastic?' est la question classique des caissiers aux USA — bien que beaucoup de magasins utilisent désormais des sacs en tissu.",
    practice: [
      "Faites une liste de courses en anglais avec 10 produits que vous achetez habituellement.",
      "Entraînez-vous à demander où se trouve quelque chose : 'Excuse me, where can I find the [produit]?'"
    ]
  },
  {
    day: 21,
    title: "Les sports et activités",
    titleNative: "Sports & Activities",
    focus: "Parler de vos loisirs, sports préférés et activités physiques — conversation sociale essentielle.",
    vocab: [
      { fr: "Soccer / Football", en: "Football", ipa: "SOK-er / FUT-bol" },
      { fr: "Basketball / Baseball", en: "Basket-ball / Base-ball", ipa: "BAS-ket-bol / BEIS-bol" },
      { fr: "Swimming", en: "Natation / Nager", ipa: "SWIM-ing" },
      { fr: "Running / Jogging", en: "Course à pied / Footing", ipa: "RAN-ing / CHOG-ing" },
      { fr: "Gym / Workout", en: "Salle de sport / Entraînement", ipa: "CHIM / WER-kaut" },
      { fr: "Hiking", en: "Randonnée", ipa: "HAIK-ing" },
      { fr: "Team", en: "Équipe", ipa: "TIIM" },
      { fr: "Win / Lose", en: "Gagner / Perdre", ipa: "WIN / LUUZ" },
      { fr: "Score", en: "Score / Résultat", ipa: "SKOR" },
      { fr: "Coach / Trainer", en: "Entraîneur(se)", ipa: "KOHCH / TREI-ner" }
    ],
    phrases: [
      { fr: "Do you play any sports?", en: "Vous pratiquez un sport ?", ipa: "du iu PLEI EN-ee SPORTS" },
      { fr: "I play soccer every weekend.", en: "Je joue au football chaque week-end.", ipa: "ai PLEI SOK-er EV-ree WIIK-end" },
      { fr: "I go to the gym three times a week.", en: "Je vais à la salle trois fois par semaine.", ipa: "ai GOH tu da CHIM ZRII TAIMZ a WIIK" },
      { fr: "What's the score?", en: "Quel est le score ?", ipa: "wots da SKOR" },
      { fr: "Did you watch the game last night?", en: "Tu as regardé le match hier soir ?", ipa: "did iu WOCH da GEIM LAST NAIT" },
      { fr: "I'm trying to get in shape.", en: "J'essaie de me remettre en forme.", ipa: "aim TRAI-ing tu get in SHEIP" },
      { fr: "I prefer individual sports.", en: "Je préfère les sports individuels.", ipa: "ai pri-FER in-di-VICH-u-al SPORTS" }
    ],
    grammar: "En anglais on utilise des verbes différents selon le sport : 'play' pour les sports collectifs avec ballon (play soccer, play basketball, play tennis), 'go' pour les activités avec '-ing' (go swimming, go running, go hiking), et 'do' pour les arts martiaux et la gym (do yoga, do karate, do gymnastics). Important : aux USA, 'football' = football américain, pas le football européen !",
    practice: [
      "Parlez de votre sport ou activité préféré(e) en anglais : quand vous le pratiquez, avec qui, pourquoi vous l'aimez.",
      "Entraînez-vous aux trois formes verbales : 'I play...', 'I go...', 'I do...' avec différentes activités."
    ]
  },
  {
    day: 22,
    title: "La nature",
    titleNative: "Nature",
    focus: "Vocabulaire pour parler du monde naturel — utile pour les voyages, les conversations informelles et la description de lieux.",
    vocab: [
      { fr: "Mountain / Hill", en: "Montagne / Colline", ipa: "MAUN-ten / JIL" },
      { fr: "Beach / Ocean", en: "Plage / Océan", ipa: "BIICH / OH-shun" },
      { fr: "River / Lake", en: "Rivière / Lac", ipa: "RIV-er / LEIK" },
      { fr: "Forest / Jungle", en: "Forêt / Jungle", ipa: "FOR-est / CHAN-gel" },
      { fr: "Desert", en: "Désert", ipa: "DEZ-ert" },
      { fr: "Flower / Tree", en: "Fleur / Arbre", ipa: "FLAU-er / TREE" },
      { fr: "Animal / Wildlife", en: "Animal / Faune sauvage", ipa: "AN-i-mal / WILD-laif" },
      { fr: "Sunrise / Sunset", en: "Lever du soleil / Coucher du soleil", ipa: "SAN-raiz / SAN-set" },
      { fr: "Sky / Cloud", en: "Ciel / Nuage", ipa: "SKAI / KLAUD" },
      { fr: "Earth / Nature", en: "Terre / Nature", ipa: "ERZ / NEI-chur" }
    ],
    phrases: [
      { fr: "The view is breathtaking.", en: "La vue est à couper le souffle.", ipa: "da VYUU iz BREΘ-teik-ing" },
      { fr: "I love being in nature.", en: "J'adore être dans la nature.", ipa: "ai LAV BII-ing in NEI-chur" },
      { fr: "Is this beach safe for swimming?", en: "Cette plage est-elle sûre pour nager ?", ipa: "iz DIS BIICH SEIF for SWIM-ing" },
      { fr: "The mountains are covered in snow.", en: "Les montagnes sont couvertes de neige.", ipa: "da MAUN-tenz ar KAV-erd in SNOH" },
      { fr: "I'd love to see the sunset.", en: "J'aimerais voir le coucher du soleil.", ipa: "aid LAV tu SII da SAN-set" },
      { fr: "Watch out for wild animals.", en: "Faites attention aux animaux sauvages.", ipa: "WOCH AUT for WILD AN-i-malz" }
    ],
    grammar: "'Breathtaking' est un adjectif composé très courant pour quelque chose de visuellement impressionnant — équivalent de 'à couper le souffle'. L'anglais a beaucoup d'adjectifs composés pour décrire la nature : 'snow-capped' (enneigé au sommet), 'crystal-clear' (cristallin), 'sun-drenched' (baigné de soleil). Apprenez-les comme des blocs.",
    practice: [
      "Décrivez votre endroit naturel préféré en anglais : qu'est-ce qu'il y a ? Que peut-on y faire ? Comment vous fait-il vous sentir ?",
      "Entraînez-vous : 'The [lieu] is [adjectif]. I love it because...'"
    ]
  },
  {
    day: 23,
    title: "À la maison",
    titleNative: "At Home",
    focus: "Vocabulaire du foyer pour décrire votre logement, parler des tâches ménagères et comprendre les instructions.",
    vocab: [
      { fr: "Living room / Bedroom", en: "Salon / Chambre", ipa: "LIV-ing RUUM / BED-ruum" },
      { fr: "Kitchen / Bathroom", en: "Cuisine / Salle de bains", ipa: "KICH-en / BAZ-ruum" },
      { fr: "Furniture", en: "Meubles", ipa: "FER-ni-chur" },
      { fr: "Rent / Mortgage", en: "Loyer / Prêt immobilier", ipa: "RENT / MOR-gich" },
      { fr: "Roommate / Landlord", en: "Colocataire / Propriétaire", ipa: "RUUM-meit / LAND-lord" },
      { fr: "Chores", en: "Tâches ménagères", ipa: "CHORZ" },
      { fr: "Laundry", en: "Lessive / Linge à laver", ipa: "LON-dree" },
      { fr: "Trash / Recycling", en: "Poubelle / Recyclage", ipa: "TRASH / ri-SAI-kling" },
      { fr: "Broken / Fix", en: "Cassé / Réparer", ipa: "BROH-ken / FIKS" },
      { fr: "Neighbor", en: "Voisin(e)", ipa: "NEI-ber" }
    ],
    phrases: [
      { fr: "I live in a two-bedroom apartment.", en: "Je vis dans un appartement de deux chambres.", ipa: "ai LIV in a TUU-BED-ruum a-PART-ment" },
      { fr: "The rent is $1,200 a month.", en: "Le loyer est de 1 200 $ par mois.", ipa: "da RENT iz WAN-TAUS-and TUU-JAD-red a MANΘ" },
      { fr: "Can you take out the trash?", en: "Pouvez-vous sortir la poubelle ?", ipa: "kan iu TEIK aut da TRASH" },
      { fr: "I need to do the laundry.", en: "J'ai besoin de faire la lessive.", ipa: "ai NIID tu DUU da LON-dree" },
      { fr: "The sink is broken.", en: "L'évier est cassé.", ipa: "da SINK iz BROH-ken" },
      { fr: "My neighbors are very noisy.", en: "Mes voisins sont très bruyants.", ipa: "mai NEI-berz ar VEH-ree NOI-zee" },
      { fr: "Make yourself at home.", en: "Faites comme chez vous.", ipa: "meik ior-SELF at JOHM" }
    ],
    grammar: "En anglais américain : 'apartment' (appartement). En anglais britannique : 'flat'. 'Roommate' = colocataire aux USA ; 'housemate' au Royaume-Uni. 'Chores' = les tâches ménagères, toujours au pluriel. 'Do the laundry', 'do the dishes', 'take out the trash' — notez qu'on utilise 'do' et 'take out', pas 'make'.",
    practice: [
      "Décrivez votre appartement ou maison en anglais : combien de pièces, type de logement, situation géographique.",
      "Entraînez-vous à la phrase la plus utile pour recevoir des invités : 'Make yourself at home' et 'Can I offer you something to drink?'"
    ]
  },
  {
    day: 24,
    title: "Les vêtements et la mode",
    titleNative: "Clothes & Fashion",
    focus: "Parler de ce que vous portez, acheter des vêtements et comprendre les descriptions vestimentaires.",
    vocab: [
      { fr: "Shirt / T-shirt", en: "Chemise / T-shirt", ipa: "SHERT / TII-shert" },
      { fr: "Pants / Jeans", en: "Pantalon / Jean", ipa: "PANTS / CHIINZ" },
      { fr: "Dress / Skirt", en: "Robe / Jupe", ipa: "DRES / SKERT" },
      { fr: "Shoes / Boots / Sneakers", en: "Chaussures / Bottes / Baskets", ipa: "SHUUZ / BUUTS / SNIIK-erz" },
      { fr: "Jacket / Coat", en: "Veste / Manteau", ipa: "CHAK-et / KOHT" },
      { fr: "Hat / Cap", en: "Chapeau / Casquette", ipa: "JAT / KAP" },
      { fr: "Comfortable", en: "Confortable", ipa: "KAM-fer-ta-bel" },
      { fr: "Tight / Loose", en: "Serré / Ample", ipa: "TAIT / LUUS" },
      { fr: "Pattern / Stripe / Solid", en: "Motif / Rayé / Uni", ipa: "PAT-ern / STRAIP / SOL-id" },
      { fr: "Brand", en: "Marque", ipa: "BRAND" }
    ],
    phrases: [
      { fr: "I love your outfit!", en: "J'adore ta tenue !", ipa: "ai LAV ior AUT-fit" },
      { fr: "What size are you?", en: "Quelle est votre taille ?", ipa: "wot SAIZ ar IU" },
      { fr: "These pants are too tight.", en: "Ce pantalon est trop serré.", ipa: "diiz PANTS ar tuu TAIT" },
      { fr: "Do you have this in a large?", en: "Vous l'avez en grande taille ?", ipa: "du iu jav DIS in a LARCH" },
      { fr: "I'm looking for a casual jacket.", en: "Je cherche une veste décontractée.", ipa: "aim LUK-ing for a KAZH-u-al CHAK-et" },
      { fr: "It doesn't fit me.", en: "Ça ne me va pas / ça ne me convient pas.", ipa: "it DAZ-ent FIT mi" },
      { fr: "That looks great on you.", en: "Ça vous va très bien.", ipa: "dat LUKS GREIT on IU" }
    ],
    grammar: "Les tailles américaines : XS, S, M, L, XL. Pour les chaussures, une pointure 38 française correspond environ à un 7.5 américain pour les femmes et un 6 pour les hommes. 'It fits' = ça me va bien ; 'It doesn't fit' = ça ne me va pas (question de taille). 'It suits you' = ça vous sied bien (question de style, de compatibilité avec la personne).",
    practice: [
      "Décrivez ce que vous portez aujourd'hui en anglais : couleur, type de vêtement, taille.",
      "Entraînez-vous au compliment et à la réponse : 'I love your [vêtement]!' → 'Thank you! It's from [magasin].'"
    ]
  },
  {
    day: 25,
    title: "Les loisirs et le divertissement",
    titleNative: "Free Time & Entertainment",
    focus: "Parler de ce que vous faites quand vous ne travaillez pas — loisirs, films, musique et plans pour le week-end.",
    vocab: [
      { fr: "Movie / Film", en: "Film", ipa: "MUUV-ee / FILM" },
      { fr: "Concert / Show", en: "Concert / Spectacle", ipa: "KON-sert / SHOH" },
      { fr: "Museum / Gallery", en: "Musée / Galerie", ipa: "myuu-ZEE-um / GAL-er-ee" },
      { fr: "Read / Book", en: "Lire / Livre", ipa: "RIID / BUK" },
      { fr: "Cook / Bake", en: "Cuisiner / Pâtisser", ipa: "KUK / BEIK" },
      { fr: "Travel", en: "Voyager", ipa: "TRAV-el" },
      { fr: "Hang out", en: "Traîner / Sortir avec des amis", ipa: "JANG AUT" },
      { fr: "Hobby", en: "Passe-temps / Hobby", ipa: "JOB-ee" },
      { fr: "Relax / Chill", en: "Se détendre / Se relaxer", ipa: "ri-LAKS / CHIL" },
      { fr: "Weekend plans", en: "Plans pour le week-end", ipa: "WIIK-end PLANZ" }
    ],
    phrases: [
      { fr: "What do you do in your free time?", en: "Qu'est-ce que vous faites pendant votre temps libre ?", ipa: "wot du iu DUU in ior FRII TAIM" },
      { fr: "I love watching movies.", en: "J'adore regarder des films.", ipa: "ai LAV WOCH-ing MUUV-eez" },
      { fr: "Do you want to hang out this weekend?", en: "Tu veux qu'on se voie ce week-end ?", ipa: "du iu WONT tu JANG AUT DIS WIIK-end" },
      { fr: "What kind of music do you like?", en: "Quel genre de musique vous aimez ?", ipa: "wot KAIND ov MYUU-zik du iu LAIK" },
      { fr: "I'm into cooking lately.", en: "En ce moment je suis passionné(e) de cuisine.", ipa: "aim IN-tu KUK-ing LEIT-lee" },
      { fr: "Have you seen that new movie?", en: "Vous avez vu ce nouveau film ?", ipa: "jav iu SIN dat NYU MUUV-ee" },
      { fr: "I just want to stay in and relax.", en: "Je veux juste rester à la maison et me détendre.", ipa: "ai CHAST WONT tu STEI IN and ri-LAKS" }
    ],
    grammar: "'I'm into [activité]' est une expression familière pour 'je suis passionné(e) par / j'aime beaucoup en ce moment'. 'Hang out' = passer du temps avec des amis de façon détendue, sans plan précis. 'Chill' comme verbe : 'Let's just chill at home' = restons à la maison tranquillement. 'Stay in' = rester chez soi (opposé de 'go out').",
    practice: [
      "Décrivez vos 3 passe-temps préférés en anglais avec un détail pour chacun.",
      "Entraînez-vous à inviter quelqu'un : 'Hey, do you want to [activité] this [jour]?'"
    ]
  },
  {
    day: 26,
    title: "L'éducation et l'école",
    titleNative: "Education & School",
    focus: "Parler de vos études, des écoles et de l'apprentissage — indispensable si vous étudiez dans un pays anglophone.",
    vocab: [
      { fr: "School / University", en: "École / Université", ipa: "SKUUL / yuu-ni-VER-si-tee" },
      { fr: "Student / Teacher", en: "Étudiant(e) / Professeur(e)", ipa: "STYUU-dent / TIICH-er" },
      { fr: "Class / Classroom", en: "Cours / Salle de classe", ipa: "KLAS / KLAS-ruum" },
      { fr: "Homework / Assignment", en: "Devoirs / Devoir à rendre", ipa: "JOHM-werk / a-SAIN-ment" },
      { fr: "Grade / Score", en: "Note / Score", ipa: "GREID / SKOR" },
      { fr: "Degree / Diploma", en: "Diplôme / Titre académique", ipa: "di-GREE / di-PLOH-ma" },
      { fr: "Major", en: "Spécialité / Filière", ipa: "MEI-cher" },
      { fr: "Scholarship", en: "Bourse d'études", ipa: "SKOL-er-ship" },
      { fr: "Tuition", en: "Frais de scolarité", ipa: "tyu-ISH-un" },
      { fr: "Graduate", en: "Obtenir son diplôme", ipa: "GRACH-u-eit" }
    ],
    phrases: [
      { fr: "What are you studying?", en: "Qu'est-ce que vous étudiez ?", ipa: "wot ar iu STAD-ee-ing" },
      { fr: "I'm studying business administration.", en: "J'étudie la gestion d'entreprise.", ipa: "aim STAD-ee-ing BIZ-nes ad-min-i-STREI-shun" },
      { fr: "I graduated last year.", en: "J'ai obtenu mon diplôme l'année dernière.", ipa: "ai GRACH-u-eit-id LAST YIIR" },
      { fr: "Do you have a scholarship?", en: "Vous avez une bourse d'études ?", ipa: "du iu jav a SKOL-er-ship" },
      { fr: "I have a bachelor's degree in engineering.", en: "J'ai une licence en ingénierie.", ipa: "ai jav a BACH-e-lorz di-GREE in en-chi-NIIR-ing" },
      { fr: "Tuition is very expensive here.", en: "Les frais de scolarité sont très élevés ici.", ipa: "tyu-ISH-un iz VEH-ree eks-PEN-siv JIIR" }
    ],
    grammar: "Le système américain : 'bachelor's degree' (licence, 4 ans), 'master's degree' (master), 'PhD' ou 'doctorate' (doctorat). 'Major' = votre spécialité à l'université : 'I'm majoring in psychology'. 'GPA' = moyenne académique (Grade Point Average), échelle de 0 à 4.0. Contrairement au système français, les universités américaines peuvent coûter des dizaines de milliers de dollars par an.",
    practice: [
      "Décrivez votre parcours académique en anglais : où vous avez étudié, quelle filière, quand vous avez obtenu votre diplôme.",
      "Entraînez-vous : 'I have a [diplôme] in [matière] from [établissement].'"
    ]
  },
  {
    day: 27,
    title: "L'argent et les finances",
    titleNative: "Money & Finances",
    focus: "Le vocabulaire financier pour gérer l'argent, faire des transactions et comprendre les conversations sur les finances.",
    vocab: [
      { fr: "Dollar / Cent", en: "Dollar / Centime", ipa: "DOL-er / SENT" },
      { fr: "Bill / Coin", en: "Billet / Pièce de monnaie", ipa: "BIL / KOIN" },
      { fr: "Bank account", en: "Compte bancaire", ipa: "BANK a-KAUNT" },
      { fr: "ATM / Cash machine", en: "Distributeur automatique", ipa: "EI-TII-EM / KASH ma-SHIIN" },
      { fr: "Exchange rate", en: "Taux de change", ipa: "eks-CHEYNCH REIT" },
      { fr: "Transfer", en: "Virement", ipa: "TRANS-fer" },
      { fr: "Budget", en: "Budget", ipa: "BACH-et" },
      { fr: "Savings", en: "Épargne / Économies", ipa: "SEI-vingz" },
      { fr: "Loan / Debt", en: "Prêt / Dette", ipa: "LOHN / DET" },
      { fr: "Split the bill", en: "Partager l'addition", ipa: "SPLIT da BIL" }
    ],
    phrases: [
      { fr: "Where is the nearest ATM?", en: "Où est le distributeur le plus proche ?", ipa: "wer iz da NEER-est EI-TII-EM" },
      { fr: "What's the exchange rate today?", en: "Quel est le taux de change aujourd'hui ?", ipa: "wots di eks-CHEYNCH REIT tu-DEI" },
      { fr: "Can we split the bill?", en: "On peut partager l'addition ?", ipa: "kan WII SPLIT da BIL" },
      { fr: "I need to send money abroad.", en: "J'ai besoin d'envoyer de l'argent à l'étranger.", ipa: "ai NIID tu SEND MAN-ee a-BROD" },
      { fr: "Do you accept credit cards?", en: "Vous acceptez les cartes de crédit ?", ipa: "du iu ak-SEPT KRED-it KARDZ" },
      { fr: "I'm saving up for a trip.", en: "J'économise pour un voyage.", ipa: "aim SEIV-ing ap for a TRIP" },
      { fr: "I'm on a tight budget.", en: "J'ai un budget serré.", ipa: "aim on a TAIT BACH-et" }
    ],
    grammar: "Les pièces américaines : penny (1¢), nickel (5¢), dime (10¢), quarter (25¢). Les billets : one dollar, five, ten, twenty, fifty, one hundred. 'Split the bill' (ou 'go Dutch') = chacun paie sa part. 'I'm broke' (familier) = je n'ai pas d'argent. 'I'm a bit short' = il me manque un peu d'argent.",
    practice: [
      "Entraînez-vous à dire des montants à voix haute : $4.75, $23.50, $150, $1,200.",
      "Apprenez à demander le taux de change : 'What's today's exchange rate from US dollars to euros?'"
    ]
  },
  {
    day: 28,
    title: "Les urgences",
    titleNative: "Emergencies",
    focus: "Les phrases les plus importantes que vous pourriez avoir besoin dans une situation critique. Mémorisez-les bien.",
    vocab: [
      { fr: "Help!", en: "Au secours ! / À l'aide !", ipa: "JELP" },
      { fr: "Call the police!", en: "Appelez la police !", ipa: "KOL da po-LIIS" },
      { fr: "Fire!", en: "Au feu !", ipa: "FAIR" },
      { fr: "Emergency", en: "Urgence", ipa: "i-MER-chen-see" },
      { fr: "Ambulance", en: "Ambulance", ipa: "AM-byuu-lans" },
      { fr: "I've been robbed.", en: "On m'a volé.", ipa: "aiv BIN ROBD" },
      { fr: "I need a doctor.", en: "J'ai besoin d'un médecin.", ipa: "ai NIID a DOK-tor" },
      { fr: "I'm lost.", en: "Je suis perdu(e).", ipa: "aim LOST" },
      { fr: "Emergency number", en: "Numéro d'urgence", ipa: "i-MER-chen-see NAM-ber" },
      { fr: "Accident", en: "Accident", ipa: "AK-si-dent" }
    ],
    phrases: [
      { fr: "Call 911!", en: "Appelez le 911 !", ipa: "KOL NAIN WAN WAN" },
      { fr: "I need help immediately.", en: "J'ai besoin d'aide immédiatement.", ipa: "ai NIID JELP i-MII-dee-at-lee" },
      { fr: "There's been an accident.", en: "Il y a eu un accident.", ipa: "derz BIN an AK-si-dent" },
      { fr: "I can't breathe.", en: "Je n'arrive pas à respirer.", ipa: "ai kant BRIIZ" },
      { fr: "My bag was stolen.", en: "Mon sac a été volé.", ipa: "mai BAG woz STOH-len" },
      { fr: "I need to contact the embassy.", en: "J'ai besoin de contacter l'ambassade.", ipa: "ai NIID tu KON-takt di EM-ba-see" },
      { fr: "Is there anyone who speaks French?", en: "Y a-t-il quelqu'un qui parle français ?", ipa: "iz der EN-ee-wan huu SPEEKS FRENCH" },
      { fr: "Please stay with me.", en: "Restez avec moi, s'il vous plaît.", ipa: "PLEES STEI wid MI" }
    ],
    grammar: "Aux USA et au Canada, le numéro d'urgence est le 911. Au Royaume-Uni c'est le 999. En Europe et dans beaucoup de pays c'est le 112. Dites toujours d'abord CE QUI s'est passé, puis OÙ vous êtes : 'There's been an accident at [adresse].' Dans les situations d'urgence, l'anglais est direct — il n'y a pas de mauvaise façon de demander de l'aide, l'important est de communiquer.",
    practice: [
      "Mémorisez ces phrases par cœur, ne les lisez pas seulement : 'Help!', 'Call 911!', 'I need a doctor', 'I've been robbed'.",
      "Entraînez-vous à dire votre localisation en anglais — en cas d'urgence, vous devrez la donner rapidement."
    ]
  },
  {
    day: 29,
    title: "Expressions idiomatiques américaines",
    titleNative: "American Idioms & Expressions",
    focus: "Les expressions idiomatiques les plus courantes de l'anglais américain — ce que les manuels ne vous apprennent pas mais que tout le monde utilise.",
    vocab: [
      { fr: "Hang in there", en: "Tiens bon / Ne lâche pas", ipa: "JANG in DER" },
      { fr: "Bite the bullet", en: "Serrer les dents / Faire quelque chose de difficile", ipa: "BAIT da BUL-et" },
      { fr: "Under the weather", en: "Ne pas se sentir bien (malade)", ipa: "AN-der da WEZ-er" },
      { fr: "Hit the road", en: "Se mettre en route / Partir", ipa: "JIT da ROHD" },
      { fr: "Piece of cake", en: "Du gâteau / Très facile", ipa: "PIIS ov KEIK" },
      { fr: "Break a leg", en: "Bonne chance ! (avant une représentation)", ipa: "BREIK a LEG" },
      { fr: "Cost an arm and a leg", en: "Coûter les yeux de la tête / Très cher", ipa: "KOST an ARM and a LEG" },
      { fr: "Beat around the bush", en: "Tourner autour du pot", ipa: "BIIT a-RAUND da BUSH" },
      { fr: "Get the ball rolling", en: "Mettre les choses en route / Démarrer", ipa: "GET da BOL ROH-ling" },
      { fr: "Hit the nail on the head", en: "Mettre le doigt dessus / Viser juste", ipa: "JIT da NEIL on da JED" }
    ],
    phrases: [
      { fr: "I'm feeling a bit under the weather today.", en: "Je ne me sens pas très bien aujourd'hui.", ipa: "aim FIIL-ing a bit AN-der da WEZ-er tu-DEI" },
      { fr: "Don't beat around the bush — just tell me!", en: "Ne tournez pas autour du pot — dites-moi !", ipa: "dohnt BIIT a-RAUND da BUSH CHAST TEL mi" },
      { fr: "That test was a piece of cake.", en: "Cet examen était du gâteau.", ipa: "dat TEST woz a PIIS ov KEIK" },
      { fr: "Break a leg at your presentation!", en: "Bonne chance pour votre présentation !", ipa: "BREIK a LEG at ior PREZ-en-TEI-shun" },
      { fr: "That vacation cost me an arm and a leg.", en: "Ces vacances m'ont coûté les yeux de la tête.", ipa: "dat vei-KEI-shun KOST mi an ARM and a LEG" },
      { fr: "Let's get the ball rolling on this project.", en: "Mettons ce projet en route.", ipa: "LETS GET da BOL ROH-ling on DIS PROCH-ekt" }
    ],
    grammar: "Les expressions idiomatiques (idioms) ne se traduisent pas littéralement — 'It's raining cats and dogs' ne parle pas de chats ou de chiens, ça signifie qu'il pleut très fort. La meilleure façon de les apprendre, c'est en contexte. Quand vous entendez une expression que vous ne comprenez pas, demandez : 'What does that mean?' Les anglophones natifs sont ravis d'expliquer.",
    practice: [
      "Choisissez 3 expressions d'aujourd'hui et utilisez-les dans une phrase qui a du sens pour vous.",
      "Cherchez 2 expressions idiomatiques américaines supplémentaires qui ne figurent pas dans cette liste et apprenez leur signification."
    ]
  },
  {
    day: 30,
    title: "Révision finale : vous l'avez fait !",
    titleNative: "Final Review: You Did It!",
    focus: "Révision des phrases les plus essentielles du cours. Si vous maîtrisez celles-ci, vous pouvez survivre et prospérer dans n'importe quelle situation en anglais.",
    vocab: [
      { fr: "Excuse me, can you help me?", en: "Excusez-moi, pouvez-vous m'aider ?", ipa: "eks-KYUUZ mi kan iu JELP mi" },
      { fr: "I'd like... please.", en: "Je voudrais... s'il vous plaît.", ipa: "aid LAIK... PLEES" },
      { fr: "How much does it cost?", en: "Combien ça coûte ?", ipa: "jau MACH daz it KOST" },
      { fr: "Where is...?", en: "Où est... ?", ipa: "wer IZ" },
      { fr: "Can you repeat that, please?", en: "Pouvez-vous répéter, s'il vous plaît ?", ipa: "kan iu ri-PIIT dat PLEES" },
      { fr: "I don't understand.", en: "Je ne comprends pas.", ipa: "ai dohnt an-der-STAND" },
      { fr: "Do you speak French?", en: "Parlez-vous français ?", ipa: "du iu SPEEK FRENCH" },
      { fr: "I need help.", en: "J'ai besoin d'aide.", ipa: "ai NIID JELP" },
      { fr: "Thank you very much.", en: "Merci beaucoup.", ipa: "ZANK iu VEH-ree MACH" },
      { fr: "Nice to meet you.", en: "Enchanté(e).", ipa: "nais tu MIIT iu" }
    ],
    phrases: [
      { fr: "I've been learning English for 30 days!", en: "J'apprends l'anglais depuis 30 jours !", ipa: "aiv BIN LER-ning ING-lish for ZER-tee DEIZ" },
      { fr: "My English is getting better every day.", en: "Mon anglais s'améliore chaque jour.", ipa: "mai ING-lish iz GET-ing BET-er EV-ree DEI" },
      { fr: "I'm not perfect, but I keep trying.", en: "Je ne suis pas parfait(e), mais je continue d'essayer.", ipa: "aim not PER-fekt bat ai KIIP TRAI-ing" },
      { fr: "Don't be afraid to make mistakes.", en: "N'ayez pas peur de faire des erreurs.", ipa: "dohnt bi a-FREID tu MEIK mis-TEIKS" },
      { fr: "Practice makes perfect.", en: "C'est en forgeant qu'on devient forgeron.", ipa: "PRAK-tis MEIKS PER-fekt" },
      { fr: "Keep it up!", en: "Continuez comme ça ! / Bravo !", ipa: "KIIP it AP" },
      { fr: "I'm proud of myself.", en: "Je suis fier(ère) de moi.", ipa: "aim PRAUD ov mai-SELF" },
      { fr: "What a journey!", en: "Quel voyage / parcours !", ipa: "wot a JER-nee" }
    ],
    grammar: "En 30 jours, vous avez couvert : les salutations, les réactions, les nombres, les couleurs, les dates, le restaurant, la nourriture, les courses, les transports, la ville, l'hôtel, l'aéroport, la météo, la famille, le corps, la médecine, le travail, la technologie, les émotions, le supermarché, les sports, la nature, la maison, les vêtements, les loisirs, l'éducation, les finances, les urgences, les expressions idiomatiques et la révision. C'est une base solide. La prochaine étape : pratiquez en parlant avec des locuteurs natifs, regardez des séries en anglais, écoutez des podcasts. La fluidité vient avec la pratique constante !",
    practice: [
      "Écrivez un paragraphe de 5-8 phrases en anglais décrivant qui vous êtes, d'où vous venez, ce que vous faites et ce que vous aimez.",
      "Téléchargez l'application Tandem ou HelloTalk, ou regardez vos séries préférées en anglais — commencez aujourd'hui !"
    ]
  }
];
