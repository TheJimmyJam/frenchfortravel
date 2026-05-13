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
      { en: "Hello", fr: "Bonjour / Salut", ipa: "jeh-LOH" },
      { en: "Hi", fr: "Salut (informel)", ipa: "JAI" },
      { en: "Good morning", fr: "Bonjour (le matin)", ipa: "gud MOR-ning" },
      { en: "Good afternoon", fr: "Bon après-midi", ipa: "gud af-ter-NOON" },
      { en: "Good evening", fr: "Bonsoir (en arrivant)", ipa: "gud EEV-ning" },
      { en: "Good night", fr: "Bonne nuit (en partant)", ipa: "gud NAIT" },
      { en: "Goodbye", fr: "Au revoir", ipa: "gud-BAI" },
      { en: "See you later", fr: "À tout à l'heure / À bientôt", ipa: "si iu LEI-ter" },
      { en: "Please", fr: "S'il vous plaît", ipa: "PLEES" },
      { en: "Thank you", fr: "Merci", ipa: "ZANK iu" }
    ],
    phrases: [
      { en: "Hello! How are you?", fr: "Bonjour ! Comment allez-vous ?", ipa: "jeh-LOH jau ar IU" },
      { en: "I'm fine, thank you.", fr: "Je vais bien, merci.", ipa: "aim FAIN zank IU" },
      { en: "Nice to meet you.", fr: "Enchanté(e) de vous rencontrer.", ipa: "nais tu MEET iu" },
      { en: "Good morning! How are you today?", fr: "Bonjour ! Comment allez-vous aujourd'hui ?", ipa: "gud MOR-ning jau ar iu tu-DEI" },
      { en: "Thank you very much.", fr: "Merci beaucoup.", ipa: "zank iu VEH-ree mach" },
      { en: "You're welcome.", fr: "De rien.", ipa: "ior WEL-kom" },
      { en: "See you tomorrow!", fr: "À demain !", ipa: "si iu tu-MOR-oh" },
      { en: "Have a good day!", fr: "Bonne journée !", ipa: "jav a gud DEI" }
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
      { en: "Yes", fr: "Oui", ipa: "YES" },
      { en: "No", fr: "Non", ipa: "NOH" },
      { en: "Maybe", fr: "Peut-être", ipa: "MEI-bi" },
      { en: "Of course", fr: "Bien sûr / Évidemment", ipa: "ov KORS" },
      { en: "Sure", fr: "Bien sûr / D'accord", ipa: "SHUR" },
      { en: "OK", fr: "D'accord / OK", ipa: "oh-KEI" },
      { en: "I understand", fr: "Je comprends", ipa: "ai an-der-STAND" },
      { en: "I don't understand", fr: "Je ne comprends pas", ipa: "ai dohnt an-der-STAND" },
      { en: "Do you speak French?", fr: "Parlez-vous français ?", ipa: "du iu SPEEK FRENCH" },
      { en: "A little", fr: "Un peu", ipa: "a LIT-el" }
    ],
    phrases: [
      { en: "I'm sorry, I don't speak English well.", fr: "Désolé(e), je ne parle pas bien anglais.", ipa: "aim SOR-ee ai dohnt speek ING-lish wel" },
      { en: "Can you repeat that, please?", fr: "Pouvez-vous répéter, s'il vous plaît ?", ipa: "kan iu ri-PEET dat PLEES" },
      { en: "More slowly, please.", fr: "Plus lentement, s'il vous plaît.", ipa: "mor SLOH-lee PLEES" },
      { en: "Yes, of course!", fr: "Oui, bien sûr !", ipa: "yes ov KORS" },
      { en: "No, thank you.", fr: "Non, merci.", ipa: "noh ZANK iu" },
      { en: "I don't understand. Can you help me?", fr: "Je ne comprends pas. Pouvez-vous m'aider ?", ipa: "ai dohnt an-der-STAND kan iu JELP mi" },
      { en: "Sure, no problem.", fr: "Bien sûr, pas de problème.", ipa: "SHUR noh PROB-lem" },
      { en: "Maybe later.", fr: "Peut-être plus tard.", ipa: "MEI-bi LEI-ter" }
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
      { en: "One, two, three", fr: "Un, deux, trois", ipa: "WAN, TUU, ZRII" },
      { en: "Four, five, six", fr: "Quatre, cinq, six", ipa: "FOR, FAIV, SIKS" },
      { en: "Seven, eight, nine", fr: "Sept, huit, neuf", ipa: "SEV-en, EIT, NAIN" },
      { en: "Ten", fr: "Dix", ipa: "TEN" },
      { en: "Eleven, twelve", fr: "Onze, douze", ipa: "i-LEV-en, TWELV" },
      { en: "Thirteen, fourteen, fifteen", fr: "Treize, quatorze, quinze", ipa: "zer-TEEN, for-TEEN, fif-TEEN" },
      { en: "Sixteen, seventeen, eighteen", fr: "Seize, dix-sept, dix-huit", ipa: "siks-TEEN, sev-en-TEEN, ei-TEEN" },
      { en: "Nineteen, twenty", fr: "Dix-neuf, vingt", ipa: "nain-TEEN, TWEN-tee" },
      { en: "Twenty-one, twenty-five", fr: "Vingt et un, vingt-cinq", ipa: "TWEN-tee-wan, TWEN-tee-faiv" },
      { en: "Thirty", fr: "Trente", ipa: "ZER-tee" }
    ],
    phrases: [
      { en: "How much does it cost?", fr: "Combien ça coûte ?", ipa: "jau mach daz it KOST" },
      { en: "It costs twenty dollars.", fr: "Ça coûte vingt dollars.", ipa: "it KOSTS TWEN-tee DOL-ars" },
      { en: "What's your phone number?", fr: "Quel est votre numéro de téléphone ?", ipa: "wots ior FOHN NAM-ber" },
      { en: "Table for two, please.", fr: "Une table pour deux, s'il vous plaît.", ipa: "TEI-bel for TUU PLEES" },
      { en: "I need three tickets.", fr: "J'ai besoin de trois billets.", ipa: "ai NIID ZRII TIK-ets" },
      { en: "I'm on floor five.", fr: "Je suis au cinquième étage.", ipa: "aim on FLOR FAIV" }
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
      { en: "Red", fr: "Rouge", ipa: "RED" },
      { en: "Blue", fr: "Bleu", ipa: "BLUU" },
      { en: "Green", fr: "Vert", ipa: "GRIIN" },
      { en: "Yellow", fr: "Jaune", ipa: "YEL-oh" },
      { en: "White", fr: "Blanc", ipa: "WAIT" },
      { en: "Black", fr: "Noir", ipa: "BLAK" },
      { en: "Big / Large", fr: "Grand / Gros", ipa: "BIG / LARCH" },
      { en: "Small / Little", fr: "Petit", ipa: "SMOL / LIT-el" },
      { en: "Good", fr: "Bon / Bien", ipa: "GUD" },
      { en: "Bad", fr: "Mauvais / Mal", ipa: "BAD" }
    ],
    phrases: [
      { en: "The red bag, please.", fr: "Le sac rouge, s'il vous plaît.", ipa: "da RED bag PLEES" },
      { en: "Do you have it in blue?", fr: "Vous l'avez en bleu ?", ipa: "du iu jav it in BLUU" },
      { en: "That's a big house.", fr: "C'est une grande maison.", ipa: "dats a BIG JAUS" },
      { en: "It's very good!", fr: "C'est très bon !", ipa: "its VEH-ree GUD" },
      { en: "The food is bad.", fr: "La nourriture est mauvaise.", ipa: "da FUUD iz BAD" },
      { en: "I like the green one.", fr: "J'aime le vert.", ipa: "ai LAIK da GRIIN WAN" }
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
      { en: "Monday, Tuesday, Wednesday", fr: "Lundi, mardi, mercredi", ipa: "MAN-dei, TOOS-dei, WENZ-dei" },
      { en: "Thursday, Friday", fr: "Jeudi, vendredi", ipa: "ZERZ-dei, FRAI-dei" },
      { en: "Saturday, Sunday", fr: "Samedi, dimanche", ipa: "SAT-er-dei, SAN-dei" },
      { en: "Today / Tomorrow / Yesterday", fr: "Aujourd'hui / Demain / Hier", ipa: "tu-DEI / tu-MOR-oh / YES-ter-dei" },
      { en: "January, February, March", fr: "Janvier, février, mars", ipa: "JAN-yu-eh-ree, FEB-ru-eh-ree, MARCH" },
      { en: "April, May, June", fr: "Avril, mai, juin", ipa: "EI-pril, MEI, JOON" },
      { en: "July, August, September", fr: "Juillet, août, septembre", ipa: "ju-LAI, AW-gust, sep-TEM-ber" },
      { en: "October, November, December", fr: "Octobre, novembre, décembre", ipa: "ok-TOH-ber, noh-VEM-ber, di-SEM-ber" },
      { en: "What day is today?", fr: "Quel jour sommes-nous ?", ipa: "wot DEI iz tu-DEI" },
      { en: "What time is it?", fr: "Quelle heure est-il ?", ipa: "wot TAIM iz it" }
    ],
    phrases: [
      { en: "Today is Monday.", fr: "Aujourd'hui c'est lundi.", ipa: "tu-DEI iz MAN-dei" },
      { en: "My appointment is on Friday.", fr: "Mon rendez-vous est vendredi.", ipa: "mai a-POINT-ment iz on FRAI-dei" },
      { en: "See you next week.", fr: "À la semaine prochaine.", ipa: "si iu NEKST wiik" },
      { en: "The meeting is on March 15th.", fr: "La réunion est le 15 mars.", ipa: "da MIIT-ing iz on MARCH fif-TEENΘ" },
      { en: "I was born in July.", fr: "Je suis né(e) en juillet.", ipa: "ai woz BORN in ju-LAI" },
      { en: "The store is closed on Sundays.", fr: "Le magasin est fermé le dimanche.", ipa: "da STOR iz KLOHZD on SAN-deiz" }
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
      { en: "Menu", fr: "Menu / Carte", ipa: "MEN-yuu" },
      { en: "I'd like...", fr: "Je voudrais...", ipa: "aid LAIK" },
      { en: "To order", fr: "Commander / Passer commande", ipa: "tu OR-der" },
      { en: "The bill / The check", fr: "L'addition", ipa: "da BIL / da CHEK" },
      { en: "A table for two", fr: "Une table pour deux", ipa: "a TEI-bel for TUU" },
      { en: "Water", fr: "Eau", ipa: "WAW-ter" },
      { en: "Wine", fr: "Vin", ipa: "WAIN" },
      { en: "Beer", fr: "Bière", ipa: "BIIR" },
      { en: "Vegetarian", fr: "Végétarien(ne)", ipa: "vech-i-TEHR-ee-an" },
      { en: "Delicious", fr: "Délicieux", ipa: "di-LISH-us" }
    ],
    phrases: [
      { en: "Can I see the menu, please?", fr: "Puis-je voir le menu, s'il vous plaît ?", ipa: "kan ai SII da MEN-yuu PLEES" },
      { en: "I'd like the chicken, please.", fr: "Je voudrais le poulet, s'il vous plaît.", ipa: "aid LAIK da CHIK-en PLEES" },
      { en: "Do you have vegetarian options?", fr: "Avez-vous des options végétariennes ?", ipa: "du iu jav VECH-i-TEHR-ee-an OP-shuns" },
      { en: "Can I get the bill, please?", fr: "L'addition, s'il vous plaît.", ipa: "kan ai get da BIL PLEES" },
      { en: "Is service included?", fr: "Le service est-il compris ?", ipa: "iz SER-vis in-KLUU-did" },
      { en: "This is delicious!", fr: "C'est délicieux !", ipa: "dis iz di-LISH-us" },
      { en: "I'm allergic to nuts.", fr: "Je suis allergique aux noix.", ipa: "aim a-LER-chik tu NATS" },
      { en: "We'd like a table for four.", fr: "Nous voudrions une table pour quatre.", ipa: "wiid LAIK a TEI-bel for FOR" }
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
      { en: "Breakfast / Lunch / Dinner", fr: "Petit-déjeuner / Déjeuner / Dîner", ipa: "BREK-fast / LANCH / DIN-er" },
      { en: "Bread", fr: "Pain", ipa: "BRED" },
      { en: "Chicken", fr: "Poulet", ipa: "CHIK-en" },
      { en: "Fish", fr: "Poisson", ipa: "FISH" },
      { en: "Rice", fr: "Riz", ipa: "RAIS" },
      { en: "Salad", fr: "Salade", ipa: "SAL-ad" },
      { en: "Coffee / Tea", fr: "Café / Thé", ipa: "KOF-ee / TII" },
      { en: "Juice", fr: "Jus", ipa: "JUUS" },
      { en: "Ice cream", fr: "Glace", ipa: "AIS KREEM" },
      { en: "Dessert", fr: "Dessert", ipa: "di-ZERT" }
    ],
    phrases: [
      { en: "I'd like coffee with milk.", fr: "Je voudrais un café au lait.", ipa: "aid LAIK KOF-ee wid MILK" },
      { en: "Do you have fresh juice?", fr: "Avez-vous du jus frais ?", ipa: "du iu jav FRESH JUUS" },
      { en: "What do you recommend?", fr: "Qu'est-ce que vous recommandez ?", ipa: "wot du iu rek-o-MEND" },
      { en: "I'll have the fish, please.", fr: "Je prendrai le poisson, s'il vous plaît.", ipa: "ail jav da FISH PLEES" },
      { en: "Can I get this to go?", fr: "C'est possible à emporter ?", ipa: "kan ai get dis tu GOH" },
      { en: "No sugar, please.", fr: "Sans sucre, s'il vous plaît.", ipa: "noh SHUG-er PLEES" },
      { en: "That was delicious, thank you.", fr: "C'était délicieux, merci.", ipa: "dat woz di-LISH-us ZANK iu" }
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
      { en: "How much is this?", fr: "Combien ça coûte ?", ipa: "jau MACH iz DIS" },
      { en: "Size", fr: "Taille / Pointure", ipa: "SAIZ" },
      { en: "Too expensive", fr: "Trop cher", ipa: "tuu eks-PEN-siv" },
      { en: "Cheap / Affordable", fr: "Pas cher / Abordable", ipa: "CHIIP / a-FOR-da-bel" },
      { en: "Sale / Discount", fr: "Soldes / Réduction", ipa: "SEIL / DIS-kaunt" },
      { en: "Cash / Credit card", fr: "Espèces / Carte de crédit", ipa: "KASH / KRED-it KARD" },
      { en: "Receipt", fr: "Reçu / Ticket de caisse", ipa: "ri-SIIT" },
      { en: "Return / Exchange", fr: "Remboursement / Échange", ipa: "ri-TERN / eks-CHEYNCH" },
      { en: "Fitting room", fr: "Cabine d'essayage", ipa: "FIT-ing RUUM" },
      { en: "I'm just looking", fr: "Je regarde seulement", ipa: "aim CHAST LUK-ing" }
    ],
    phrases: [
      { en: "Can I try this on?", fr: "Puis-je l'essayer ?", ipa: "kan ai TRAI dis ON" },
      { en: "Do you have this in a medium?", fr: "Vous l'avez en taille moyenne ?", ipa: "du iu jav dis in a MIID-ee-um" },
      { en: "I'll take it.", fr: "Je le prends.", ipa: "ail TEIK it" },
      { en: "Can I pay by card?", fr: "Je peux payer par carte ?", ipa: "kan ai PEI bai KARD" },
      { en: "Do you have anything cheaper?", fr: "Vous avez quelque chose de moins cher ?", ipa: "du iu jav EN-ee-zing CHIIP-er" },
      { en: "Is there a sale on?", fr: "Il y a des soldes en ce moment ?", ipa: "iz der a SEIL ON" },
      { en: "I'd like to return this.", fr: "Je voudrais retourner ceci.", ipa: "aid LAIK tu ri-TERN DIS" },
      { en: "Can I have a receipt, please?", fr: "Puis-je avoir un reçu, s'il vous plaît ?", ipa: "kan ai jav a ri-SIIT PLEES" }
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
      { en: "Where is...?", fr: "Où est... ?", ipa: "wer IZ" },
      { en: "Straight ahead", fr: "Tout droit", ipa: "streit a-JED" },
      { en: "Turn left / Turn right", fr: "Tournez à gauche / à droite", ipa: "TERN LEFT / TERN RAIT" },
      { en: "Bus / Train / Subway", fr: "Bus / Train / Métro", ipa: "BAS / TREIN / SAB-wei" },
      { en: "Airport", fr: "Aéroport", ipa: "EHR-port" },
      { en: "Taxi / Uber", fr: "Taxi / Uber", ipa: "TAK-si / UU-ber" },
      { en: "Ticket", fr: "Billet / Ticket", ipa: "TIK-et" },
      { en: "Next stop", fr: "Prochain arrêt", ipa: "NEKST STOP" },
      { en: "How far is it?", fr: "C'est loin ?", ipa: "jau FAR iz IT" },
      { en: "I'm lost", fr: "Je suis perdu(e)", ipa: "aim LOST" }
    ],
    phrases: [
      { en: "How do I get to the airport?", fr: "Comment puis-je aller à l'aéroport ?", ipa: "jau du ai GET tu di EHR-port" },
      { en: "Take the number 5 bus.", fr: "Prenez le bus numéro 5.", ipa: "TEIK da NAM-ber FAIV BAS" },
      { en: "Get off at the third stop.", fr: "Descendez au troisième arrêt.", ipa: "get OFF at da ZERD STOP" },
      { en: "Is this the right train for downtown?", fr: "C'est bien le bon train pour le centre-ville ?", ipa: "iz DIS da RAIT TREIN for DAUN-taun" },
      { en: "Where can I buy a ticket?", fr: "Où puis-je acheter un billet ?", ipa: "wer kan ai BAI a TIK-et" },
      { en: "I'm lost. Can you help me?", fr: "Je suis perdu(e). Pouvez-vous m'aider ?", ipa: "aim LOST kan iu JELP mi" },
      { en: "It's about 10 minutes on foot.", fr: "C'est à environ 10 minutes à pied.", ipa: "its a-BAUT TEN MIN-its on FUT" }
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
      { en: "Hospital", fr: "Hôpital", ipa: "JOS-pi-tal" },
      { en: "Pharmacy / Drugstore", fr: "Pharmacie", ipa: "FAR-ma-see / DRAG-stor" },
      { en: "Supermarket", fr: "Supermarché", ipa: "SUU-per-mar-ket" },
      { en: "Bank", fr: "Banque", ipa: "BANK" },
      { en: "Restaurant", fr: "Restaurant", ipa: "RES-tuh-rant" },
      { en: "Hotel", fr: "Hôtel", ipa: "joh-TEL" },
      { en: "Museum", fr: "Musée", ipa: "myuu-ZEE-um" },
      { en: "Park", fr: "Parc", ipa: "PARK" },
      { en: "Police station", fr: "Commissariat / Poste de police", ipa: "po-LIIS STEI-shun" },
      { en: "Post office", fr: "Bureau de poste", ipa: "POHST OF-is" }
    ],
    phrases: [
      { en: "Is there a pharmacy nearby?", fr: "Y a-t-il une pharmacie à proximité ?", ipa: "iz der a FAR-ma-see NEER-bai" },
      { en: "Where is the nearest bank?", fr: "Où est la banque la plus proche ?", ipa: "wer iz da NEER-est BANK" },
      { en: "How far is the hospital?", fr: "L'hôpital est loin ?", ipa: "jau FAR iz da JOS-pi-tal" },
      { en: "I need to find a supermarket.", fr: "J'ai besoin de trouver un supermarché.", ipa: "ai NIID tu FAIND a SUU-per-mar-ket" },
      { en: "Is the museum open today?", fr: "Le musée est ouvert aujourd'hui ?", ipa: "iz da myuu-ZEE-um OH-pen tu-DEI" },
      { en: "Can you show me on the map?", fr: "Pouvez-vous me montrer sur la carte ?", ipa: "kan iu SHOH mi on da MAP" }
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
      { en: "Reservation / Booking", fr: "Réservation", ipa: "rez-er-VEI-shun / BUK-ing" },
      { en: "Check-in / Check-out", fr: "Arrivée / Départ", ipa: "CHEK-in / CHEK-aut" },
      { en: "Room", fr: "Chambre", ipa: "RUUM" },
      { en: "Single / Double room", fr: "Chambre simple / double", ipa: "SIN-gel / DAB-el RUUM" },
      { en: "Key card", fr: "Carte-clé", ipa: "KII KARD" },
      { en: "Wifi password", fr: "Mot de passe wifi", ipa: "WAI-fai PAS-werd" },
      { en: "Towels", fr: "Serviettes", ipa: "TAU-elz" },
      { en: "Floor / Elevator", fr: "Étage / Ascenseur", ipa: "FLOR / EL-e-vei-tor" },
      { en: "Do not disturb", fr: "Ne pas déranger", ipa: "du NOT dis-TERB" },
      { en: "Complaint", fr: "Réclamation", ipa: "kom-PLEINT" }
    ],
    phrases: [
      { en: "I have a reservation under [name].", fr: "J'ai une réservation au nom de [nom].", ipa: "ai jav a rez-er-VEI-shun AN-der [NEIM]" },
      { en: "What time is check-out?", fr: "À quelle heure est le départ ?", ipa: "wot TAIM iz CHEK-aut" },
      { en: "Can I have more towels, please?", fr: "Puis-je avoir plus de serviettes, s'il vous plaît ?", ipa: "kan ai jav MOR TAU-elz PLEES" },
      { en: "The air conditioning isn't working.", fr: "La climatisation ne fonctionne pas.", ipa: "di EHR kon-DISH-un-ing IZ-ent WER-king" },
      { en: "What's the wifi password?", fr: "Quel est le mot de passe wifi ?", ipa: "wots da WAI-fai PAS-werd" },
      { en: "I'd like a late check-out, please.", fr: "Je voudrais un départ tardif, s'il vous plaît.", ipa: "aid LAIK a LEIT CHEK-aut PLEES" },
      { en: "Can I leave my luggage here?", fr: "Puis-je laisser mes bagages ici ?", ipa: "kan ai LIIV mai LAG-ich JIIR" }
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
      { en: "Passport / ID", fr: "Passeport / Pièce d'identité", ipa: "PAS-port / ai-DII" },
      { en: "Boarding pass", fr: "Carte d'embarquement", ipa: "BOR-ding PAS" },
      { en: "Gate", fr: "Porte (d'embarquement)", ipa: "GEIT" },
      { en: "Departure / Arrival", fr: "Départ / Arrivée", ipa: "di-PAR-chur / a-RAI-val" },
      { en: "Delayed / On time", fr: "Retardé / À l'heure", ipa: "di-LEID / ON TAIM" },
      { en: "Luggage / Baggage", fr: "Bagages", ipa: "LAG-ich / BAG-ich" },
      { en: "Carry-on", fr: "Bagage à main", ipa: "KEHR-ee ON" },
      { en: "Customs", fr: "Douane", ipa: "KAS-tomz" },
      { en: "Nothing to declare", fr: "Rien à déclarer", ipa: "NAZ-ing tu di-KLAIR" },
      { en: "Window / Aisle seat", fr: "Siège hublot / couloir", ipa: "WIN-doh / AIL SIIT" }
    ],
    phrases: [
      { en: "Where is gate B12?", fr: "Où est la porte B12 ?", ipa: "wer iz GEIT BEE TWELV" },
      { en: "My flight has been delayed.", fr: "Mon vol a du retard.", ipa: "mai FLAIT jaz BIN di-LEID" },
      { en: "I have nothing to declare.", fr: "Je n'ai rien à déclarer.", ipa: "ai jav NAZ-ing tu di-KLAIR" },
      { en: "Can I have a window seat?", fr: "Puis-je avoir un siège hublot ?", ipa: "kan ai jav a WIN-doh SIIT" },
      { en: "Is this the line for check-in?", fr: "C'est bien la file pour le check-in ?", ipa: "iz DIS da LAIN for CHEK-in" },
      { en: "My baggage is lost.", fr: "Mes bagages sont perdus.", ipa: "mai BAG-ich iz LOST" },
      { en: "What time does boarding start?", fr: "L'embarquement commence à quelle heure ?", ipa: "wot TAIM daz BOR-ding START" }
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
      { en: "Hot / Cold", fr: "Chaud / Froid", ipa: "JOT / KOHLD" },
      { en: "Warm / Cool", fr: "Tiède / Frais", ipa: "WORM / KUUL" },
      { en: "Sunny", fr: "Ensoleillé", ipa: "SAN-ee" },
      { en: "Cloudy / Rainy", fr: "Nuageux / Pluvieux", ipa: "KLAU-dee / REI-nee" },
      { en: "Wind / Windy", fr: "Vent / Venteux", ipa: "WIND / WIN-dee" },
      { en: "Snow / Snowy", fr: "Neige / Neigeux", ipa: "SNOH / SNOH-ee" },
      { en: "Fog / Foggy", fr: "Brouillard / Brumeux", ipa: "FOG / FOG-ee" },
      { en: "Storm / Stormy", fr: "Orage / Orageux", ipa: "STORM / STOR-mee" },
      { en: "Temperature", fr: "Température", ipa: "TEM-per-a-chur" },
      { en: "Forecast", fr: "Prévisions météo", ipa: "FOR-kast" }
    ],
    phrases: [
      { en: "What's the weather like today?", fr: "Quel temps fait-il aujourd'hui ?", ipa: "wots da WEZ-er LAIK tu-DEI" },
      { en: "It's really hot today.", fr: "Il fait vraiment chaud aujourd'hui.", ipa: "its RII-lee JOT tu-DEI" },
      { en: "It's going to rain tomorrow.", fr: "Il va pleuvoir demain.", ipa: "its GOH-ing tu REIN tu-MOR-oh" },
      { en: "Don't forget your umbrella!", fr: "N'oubliez pas votre parapluie !", ipa: "dohnt for-GET ior am-BREL-a" },
      { en: "I love this weather.", fr: "J'adore ce temps.", ipa: "ai LAV dis WEZ-er" },
      { en: "It's freezing outside!", fr: "Il fait un froid glacial dehors !", ipa: "its FRIIZ-ing aut-SAID" },
      { en: "What's the temperature today?", fr: "Quelle est la température aujourd'hui ?", ipa: "wots da TEM-per-a-chur tu-DEI" }
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
      { en: "Mother / Father", fr: "Mère / Père", ipa: "MAZ-er / FAZ-er" },
      { en: "Mom / Dad", fr: "Maman / Papa (informel)", ipa: "MOM / DAD" },
      { en: "Brother / Sister", fr: "Frère / Sœur", ipa: "BRAZ-er / SIS-ter" },
      { en: "Son / Daughter", fr: "Fils / Fille", ipa: "SAN / DAW-ter" },
      { en: "Husband / Wife", fr: "Mari / Femme", ipa: "JAZ-band / WAIF" },
      { en: "Boyfriend / Girlfriend", fr: "Petit ami / Petite amie", ipa: "BOI-frend / GERL-frend" },
      { en: "Grandfather / Grandmother", fr: "Grand-père / Grand-mère", ipa: "GRAND-fa-zer / GRAND-maz-er" },
      { en: "Uncle / Aunt", fr: "Oncle / Tante", ipa: "AN-kel / ANT" },
      { en: "Cousin", fr: "Cousin(e)", ipa: "KAZ-en" },
      { en: "Only child", fr: "Enfant unique", ipa: "OHN-lee CHAILD" }
    ],
    phrases: [
      { en: "I have two brothers and one sister.", fr: "J'ai deux frères et une sœur.", ipa: "ai jav TUU BRAZ-erz and WAN SIS-ter" },
      { en: "My mother is a doctor.", fr: "Ma mère est médecin.", ipa: "mai MAZ-er iz a DOK-tor" },
      { en: "I'm married with two kids.", fr: "Je suis marié(e) et j'ai deux enfants.", ipa: "aim MEHR-eed wid TUU KIDZ" },
      { en: "My parents live in France.", fr: "Mes parents habitent en France.", ipa: "mai PEHR-ents LIV in FRANTS" },
      { en: "Do you have any siblings?", fr: "Vous avez des frères et sœurs ?", ipa: "du iu jav EN-ee SIB-lingz" },
      { en: "I'm an only child.", fr: "Je suis enfant unique.", ipa: "aim an OHN-lee CHAILD" },
      { en: "This is my wife, [name].", fr: "Voici ma femme, [prénom].", ipa: "dis iz mai WAIF [NEIM]" }
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
      { en: "Head / Neck", fr: "Tête / Cou", ipa: "JED / NEK" },
      { en: "Chest / Back", fr: "Poitrine / Dos", ipa: "CHEST / BAK" },
      { en: "Stomach / Belly", fr: "Estomac / Ventre", ipa: "STAM-ak / BEL-ee" },
      { en: "Arm / Hand", fr: "Bras / Main", ipa: "ARM / JAND" },
      { en: "Leg / Foot (feet)", fr: "Jambe / Pied (pieds)", ipa: "LEG / FUT (FIIT)" },
      { en: "Eye / Ear / Nose", fr: "Œil / Oreille / Nez", ipa: "AI / IIR / NOHZ" },
      { en: "Mouth / Teeth", fr: "Bouche / Dents", ipa: "MAUΘ / TIIZ" },
      { en: "Throat", fr: "Gorge", ipa: "ΘROHT" },
      { en: "Heart", fr: "Cœur", ipa: "JART" },
      { en: "Skin", fr: "Peau", ipa: "SKIN" }
    ],
    phrases: [
      { en: "My head hurts.", fr: "J'ai mal à la tête.", ipa: "mai JED JERTS" },
      { en: "I have a stomachache.", fr: "J'ai mal à l'estomac.", ipa: "ai jav a STAM-ak-eik" },
      { en: "My back is killing me.", fr: "Mon dos me tue. (J'ai très mal)", ipa: "mai BAK iz KIL-ing mi" },
      { en: "I hurt my leg.", fr: "Je me suis blessé(e) à la jambe.", ipa: "ai JERT mai LEG" },
      { en: "I have a sore throat.", fr: "J'ai mal à la gorge.", ipa: "ai jav a SOR ΘROHT" },
      { en: "I can't move my arm.", fr: "Je ne peux pas bouger le bras.", ipa: "ai kant MUUV mai ARM" },
      { en: "Where exactly does it hurt?", fr: "Où exactement avez-vous mal ?", ipa: "wer eg-ZAK-lee daz it JERT" }
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
      { en: "Doctor / Nurse", fr: "Médecin / Infirmier(ère)", ipa: "DOK-tor / NERS" },
      { en: "Appointment", fr: "Rendez-vous", ipa: "a-POINT-ment" },
      { en: "Symptoms", fr: "Symptômes", ipa: "SIMP-tomz" },
      { en: "Fever / Temperature", fr: "Fièvre / Température", ipa: "FII-ver / TEM-per-a-chur" },
      { en: "Prescription", fr: "Ordonnance", ipa: "pre-SKRIP-shun" },
      { en: "Medicine / Medication", fr: "Médicament", ipa: "MED-i-sin / med-i-KEI-shun" },
      { en: "Allergy", fr: "Allergie", ipa: "AL-er-chee" },
      { en: "Surgery", fr: "Chirurgie / Opération", ipa: "SER-cher-ee" },
      { en: "Emergency room (ER)", fr: "Urgences", ipa: "i-MER-chen-see RUUM" },
      { en: "Insurance", fr: "Assurance (maladie)", ipa: "in-SHUR-ans" }
    ],
    phrases: [
      { en: "I need to see a doctor.", fr: "J'ai besoin de voir un médecin.", ipa: "ai NIID tu SII a DOK-tor" },
      { en: "I've had a fever for two days.", fr: "J'ai de la fièvre depuis deux jours.", ipa: "aiv JAD a FII-ver for TUU DEIZ" },
      { en: "I'm allergic to penicillin.", fr: "Je suis allergique à la pénicilline.", ipa: "aim a-LER-chik tu pen-i-SIL-in" },
      { en: "How many times a day should I take this?", fr: "Combien de fois par jour dois-je le prendre ?", ipa: "jau MEN-ee TAIMZ a DEI shud ai TEIK DIS" },
      { en: "Is this serious?", fr: "C'est grave ?", ipa: "iz DIS SIR-ee-us" },
      { en: "I have health insurance.", fr: "J'ai une assurance maladie.", ipa: "ai jav JELZ in-SHUR-ans" },
      { en: "I feel dizzy / nauseous.", fr: "Je me sens étourdi(e) / nauséeux(se).", ipa: "ai FIIL DIZ-ee / NAW-shus" }
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
      { en: "Job / Work", fr: "Travail / Emploi", ipa: "CHOB / WERK" },
      { en: "Office / Company", fr: "Bureau / Entreprise", ipa: "OF-is / KAM-pa-nee" },
      { en: "Boss / Manager", fr: "Chef / Responsable", ipa: "BOS / MAN-i-cher" },
      { en: "Colleague / Coworker", fr: "Collègue", ipa: "KOL-iig / KOH-wer-ker" },
      { en: "Meeting", fr: "Réunion", ipa: "MIIT-ing" },
      { en: "Deadline", fr: "Date limite / Délai", ipa: "DED-lain" },
      { en: "Salary / Wages", fr: "Salaire", ipa: "SAL-a-ree / WEI-chiz" },
      { en: "Resume / CV", fr: "CV / Curriculum vitae", ipa: "REZ-u-mei / SII-VII" },
      { en: "Interview", fr: "Entretien d'embauche", ipa: "IN-ter-vyuu" },
      { en: "Remote work", fr: "Télétravail", ipa: "ri-MOHT WERK" }
    ],
    phrases: [
      { en: "What do you do for a living?", fr: "Qu'est-ce que vous faites dans la vie ?", ipa: "wot du iu DUU for a LIV-ing" },
      { en: "I work in marketing.", fr: "Je travaille dans le marketing.", ipa: "ai WERK in MAR-ke-ting" },
      { en: "I'm self-employed.", fr: "Je travaille à mon compte.", ipa: "aim SELF-em-ploid" },
      { en: "I have a meeting at 3 PM.", fr: "J'ai une réunion à 15h.", ipa: "ai jav a MIIT-ing at ZRII PII-EM" },
      { en: "The deadline is Friday.", fr: "La date limite est vendredi.", ipa: "da DED-lain iz FRAI-dee" },
      { en: "I work from home.", fr: "Je travaille de chez moi.", ipa: "ai WERK from JOHM" },
      { en: "I'm looking for a new job.", fr: "Je cherche un nouvel emploi.", ipa: "aim LUK-ing for a NUU CHOB" }
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
      { en: "Phone call / Text message", fr: "Appel téléphonique / SMS", ipa: "FOHN KOL / TEKST MES-ich" },
      { en: "Email", fr: "E-mail / Courriel", ipa: "EE-meil" },
      { en: "Password", fr: "Mot de passe", ipa: "PAS-werd" },
      { en: "Download / Upload", fr: "Télécharger / Envoyer", ipa: "DAUN-lohd / AP-lohd" },
      { en: "Social media", fr: "Réseaux sociaux", ipa: "SOH-shal MII-dee-a" },
      { en: "App", fr: "Application", ipa: "AP" },
      { en: "Wifi / Connection", fr: "Wifi / Connexion", ipa: "WAI-fai / ko-NEK-shun" },
      { en: "Search / Google it", fr: "Rechercher / Chercher sur Google", ipa: "SERCH / GUUG-el it" },
      { en: "Screen / Battery", fr: "Écran / Batterie", ipa: "SKRIIN / BAT-er-ee" },
      { en: "Charger", fr: "Chargeur", ipa: "CHAR-cher" }
    ],
    phrases: [
      { en: "Can I use your wifi?", fr: "Je peux utiliser votre wifi ?", ipa: "kan ai YUUZ ior WAI-fai" },
      { en: "My phone is dead.", fr: "Mon téléphone est déchargé.", ipa: "mai FOHN iz DED" },
      { en: "Do you have a charger?", fr: "Vous avez un chargeur ?", ipa: "du iu jav a CHAR-cher" },
      { en: "Just google it.", fr: "Cherchez sur Google.", ipa: "CHAST GUUG-el it" },
      { en: "I'll send you a text.", fr: "Je vous envoie un SMS.", ipa: "ail SEND iu a TEKST" },
      { en: "I can't connect to the internet.", fr: "Je n'arrive pas à me connecter à internet.", ipa: "ai kant ko-NEKT tu di IN-ter-net" },
      { en: "Can you send me the file?", fr: "Pouvez-vous m'envoyer le fichier ?", ipa: "kan iu SEND mi da FAIL" }
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
      { en: "Happy / Excited", fr: "Heureux / Enthousiaste", ipa: "JAP-ee / ek-SAI-tid" },
      { en: "Sad / Upset", fr: "Triste / Bouleversé(e)", ipa: "SAD / ap-SET" },
      { en: "Angry / Frustrated", fr: "En colère / Frustré(e)", ipa: "ANG-gree / FRAS-treit-id" },
      { en: "Nervous / Anxious", fr: "Nerveux(se) / Anxieux(se)", ipa: "NER-vus / ANK-shus" },
      { en: "Tired / Exhausted", fr: "Fatigué(e) / Épuisé(e)", ipa: "TAIRD / eg-ZOS-tid" },
      { en: "Bored", fr: "Ennuyé(e)", ipa: "BORD" },
      { en: "Stressed", fr: "Stressé(e)", ipa: "STREST" },
      { en: "Proud", fr: "Fier(ère)", ipa: "PRAUD" },
      { en: "Confused", fr: "Confus(e) / Perplexe", ipa: "kon-FYUUZD" },
      { en: "Relieved", fr: "Soulagé(e)", ipa: "ri-LIIVD" }
    ],
    phrases: [
      { en: "I'm so happy to see you!", fr: "Je suis tellement content(e) de vous voir !", ipa: "aim soh JAP-ee tu SII iu" },
      { en: "I'm feeling a bit stressed.", fr: "Je me sens un peu stressé(e).", ipa: "aim FIIL-ing a bit STREST" },
      { en: "Are you okay?", fr: "Vous allez bien ?", ipa: "ar iu oh-KEI" },
      { en: "I'm exhausted — it's been a long day.", fr: "Je suis épuisé(e) — c'était une longue journée.", ipa: "aim eg-ZOS-tid its BIN a LONG DEI" },
      { en: "Don't worry about it.", fr: "Ne vous en faites pas.", ipa: "dohnt WER-ee a-BAUT it" },
      { en: "I'm really excited about the trip.", fr: "Je suis vraiment enthousiaste pour le voyage.", ipa: "aim RII-lee ek-SAI-tid a-BAUT da TRIP" },
      { en: "I feel much better now.", fr: "Je me sens beaucoup mieux maintenant.", ipa: "ai FIIL mach BET-er NAU" }
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
      { en: "Aisle", fr: "Rayon / Allée", ipa: "AIL" },
      { en: "Cart / Basket", fr: "Chariot / Panier", ipa: "KART / BAS-ket" },
      { en: "Checkout / Cashier", fr: "Caisse / Caissier(ère)", ipa: "CHEK-aut / ka-SHIIR" },
      { en: "Organic", fr: "Biologique / Bio", ipa: "or-GAN-ik" },
      { en: "Expiration date", fr: "Date de péremption", ipa: "ek-spi-REI-shun DEIT" },
      { en: "On sale", fr: "En promotion / En soldes", ipa: "on SEIL" },
      { en: "Frozen food", fr: "Surgelés", ipa: "FROH-zen FUUD" },
      { en: "Dairy", fr: "Produits laitiers", ipa: "DEHR-ee" },
      { en: "Produce", fr: "Fruits et légumes", ipa: "PROH-dyuus" },
      { en: "Bag / Bags", fr: "Sac / Sacs", ipa: "BAG / BAGZ" }
    ],
    phrases: [
      { en: "Where can I find the milk?", fr: "Où puis-je trouver le lait ?", ipa: "wer kan ai FAIND da MILK" },
      { en: "Is this on sale?", fr: "C'est en promotion ?", ipa: "iz DIS on SEIL" },
      { en: "Do you have reusable bags?", fr: "Vous avez des sacs réutilisables ?", ipa: "du iu jav ree-YUUZ-a-bel BAGZ" },
      { en: "I'm looking for the bread aisle.", fr: "Je cherche le rayon pain.", ipa: "aim LUK-ing for da BRED AIL" },
      { en: "Can I pay with card here?", fr: "Je peux payer par carte ici ?", ipa: "kan ai PEI wid KARD JIIR" },
      { en: "Paper or plastic?", fr: "Papier ou plastique ? (type de sac)", ipa: "PEI-per or PLAS-tik" },
      { en: "I'll use my own bag.", fr: "J'utiliserai mon propre sac.", ipa: "ail YUUZ mai OHN BAG" }
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
      { en: "Soccer / Football", fr: "Football", ipa: "SOK-er / FUT-bol" },
      { en: "Basketball / Baseball", fr: "Basket-ball / Base-ball", ipa: "BAS-ket-bol / BEIS-bol" },
      { en: "Swimming", fr: "Natation / Nager", ipa: "SWIM-ing" },
      { en: "Running / Jogging", fr: "Course à pied / Footing", ipa: "RAN-ing / CHOG-ing" },
      { en: "Gym / Workout", fr: "Salle de sport / Entraînement", ipa: "CHIM / WER-kaut" },
      { en: "Hiking", fr: "Randonnée", ipa: "HAIK-ing" },
      { en: "Team", fr: "Équipe", ipa: "TIIM" },
      { en: "Win / Lose", fr: "Gagner / Perdre", ipa: "WIN / LUUZ" },
      { en: "Score", fr: "Score / Résultat", ipa: "SKOR" },
      { en: "Coach / Trainer", fr: "Entraîneur(se)", ipa: "KOHCH / TREI-ner" }
    ],
    phrases: [
      { en: "Do you play any sports?", fr: "Vous pratiquez un sport ?", ipa: "du iu PLEI EN-ee SPORTS" },
      { en: "I play soccer every weekend.", fr: "Je joue au football chaque week-end.", ipa: "ai PLEI SOK-er EV-ree WIIK-end" },
      { en: "I go to the gym three times a week.", fr: "Je vais à la salle trois fois par semaine.", ipa: "ai GOH tu da CHIM ZRII TAIMZ a WIIK" },
      { en: "What's the score?", fr: "Quel est le score ?", ipa: "wots da SKOR" },
      { en: "Did you watch the game last night?", fr: "Tu as regardé le match hier soir ?", ipa: "did iu WOCH da GEIM LAST NAIT" },
      { en: "I'm trying to get in shape.", fr: "J'essaie de me remettre en forme.", ipa: "aim TRAI-ing tu get in SHEIP" },
      { en: "I prefer individual sports.", fr: "Je préfère les sports individuels.", ipa: "ai pri-FER in-di-VICH-u-al SPORTS" }
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
      { en: "Mountain / Hill", fr: "Montagne / Colline", ipa: "MAUN-ten / JIL" },
      { en: "Beach / Ocean", fr: "Plage / Océan", ipa: "BIICH / OH-shun" },
      { en: "River / Lake", fr: "Rivière / Lac", ipa: "RIV-er / LEIK" },
      { en: "Forest / Jungle", fr: "Forêt / Jungle", ipa: "FOR-est / CHAN-gel" },
      { en: "Desert", fr: "Désert", ipa: "DEZ-ert" },
      { en: "Flower / Tree", fr: "Fleur / Arbre", ipa: "FLAU-er / TREE" },
      { en: "Animal / Wildlife", fr: "Animal / Faune sauvage", ipa: "AN-i-mal / WILD-laif" },
      { en: "Sunrise / Sunset", fr: "Lever du soleil / Coucher du soleil", ipa: "SAN-raiz / SAN-set" },
      { en: "Sky / Cloud", fr: "Ciel / Nuage", ipa: "SKAI / KLAUD" },
      { en: "Earth / Nature", fr: "Terre / Nature", ipa: "ERZ / NEI-chur" }
    ],
    phrases: [
      { en: "The view is breathtaking.", fr: "La vue est à couper le souffle.", ipa: "da VYUU iz BREΘ-teik-ing" },
      { en: "I love being in nature.", fr: "J'adore être dans la nature.", ipa: "ai LAV BII-ing in NEI-chur" },
      { en: "Is this beach safe for swimming?", fr: "Cette plage est-elle sûre pour nager ?", ipa: "iz DIS BIICH SEIF for SWIM-ing" },
      { en: "The mountains are covered in snow.", fr: "Les montagnes sont couvertes de neige.", ipa: "da MAUN-tenz ar KAV-erd in SNOH" },
      { en: "I'd love to see the sunset.", fr: "J'aimerais voir le coucher du soleil.", ipa: "aid LAV tu SII da SAN-set" },
      { en: "Watch out for wild animals.", fr: "Faites attention aux animaux sauvages.", ipa: "WOCH AUT for WILD AN-i-malz" }
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
      { en: "Living room / Bedroom", fr: "Salon / Chambre", ipa: "LIV-ing RUUM / BED-ruum" },
      { en: "Kitchen / Bathroom", fr: "Cuisine / Salle de bains", ipa: "KICH-en / BAZ-ruum" },
      { en: "Furniture", fr: "Meubles", ipa: "FER-ni-chur" },
      { en: "Rent / Mortgage", fr: "Loyer / Prêt immobilier", ipa: "RENT / MOR-gich" },
      { en: "Roommate / Landlord", fr: "Colocataire / Propriétaire", ipa: "RUUM-meit / LAND-lord" },
      { en: "Chores", fr: "Tâches ménagères", ipa: "CHORZ" },
      { en: "Laundry", fr: "Lessive / Linge à laver", ipa: "LON-dree" },
      { en: "Trash / Recycling", fr: "Poubelle / Recyclage", ipa: "TRASH / ri-SAI-kling" },
      { en: "Broken / Fix", fr: "Cassé / Réparer", ipa: "BROH-ken / FIKS" },
      { en: "Neighbor", fr: "Voisin(e)", ipa: "NEI-ber" }
    ],
    phrases: [
      { en: "I live in a two-bedroom apartment.", fr: "Je vis dans un appartement de deux chambres.", ipa: "ai LIV in a TUU-BED-ruum a-PART-ment" },
      { en: "The rent is $1,200 a month.", fr: "Le loyer est de 1 200 $ par mois.", ipa: "da RENT iz WAN-TAUS-and TUU-JAD-red a MANΘ" },
      { en: "Can you take out the trash?", fr: "Pouvez-vous sortir la poubelle ?", ipa: "kan iu TEIK aut da TRASH" },
      { en: "I need to do the laundry.", fr: "J'ai besoin de faire la lessive.", ipa: "ai NIID tu DUU da LON-dree" },
      { en: "The sink is broken.", fr: "L'évier est cassé.", ipa: "da SINK iz BROH-ken" },
      { en: "My neighbors are very noisy.", fr: "Mes voisins sont très bruyants.", ipa: "mai NEI-berz ar VEH-ree NOI-zee" },
      { en: "Make yourself at home.", fr: "Faites comme chez vous.", ipa: "meik ior-SELF at JOHM" }
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
      { en: "Shirt / T-shirt", fr: "Chemise / T-shirt", ipa: "SHERT / TII-shert" },
      { en: "Pants / Jeans", fr: "Pantalon / Jean", ipa: "PANTS / CHIINZ" },
      { en: "Dress / Skirt", fr: "Robe / Jupe", ipa: "DRES / SKERT" },
      { en: "Shoes / Boots / Sneakers", fr: "Chaussures / Bottes / Baskets", ipa: "SHUUZ / BUUTS / SNIIK-erz" },
      { en: "Jacket / Coat", fr: "Veste / Manteau", ipa: "CHAK-et / KOHT" },
      { en: "Hat / Cap", fr: "Chapeau / Casquette", ipa: "JAT / KAP" },
      { en: "Comfortable", fr: "Confortable", ipa: "KAM-fer-ta-bel" },
      { en: "Tight / Loose", fr: "Serré / Ample", ipa: "TAIT / LUUS" },
      { en: "Pattern / Stripe / Solid", fr: "Motif / Rayé / Uni", ipa: "PAT-ern / STRAIP / SOL-id" },
      { en: "Brand", fr: "Marque", ipa: "BRAND" }
    ],
    phrases: [
      { en: "I love your outfit!", fr: "J'adore ta tenue !", ipa: "ai LAV ior AUT-fit" },
      { en: "What size are you?", fr: "Quelle est votre taille ?", ipa: "wot SAIZ ar IU" },
      { en: "These pants are too tight.", fr: "Ce pantalon est trop serré.", ipa: "diiz PANTS ar tuu TAIT" },
      { en: "Do you have this in a large?", fr: "Vous l'avez en grande taille ?", ipa: "du iu jav DIS in a LARCH" },
      { en: "I'm looking for a casual jacket.", fr: "Je cherche une veste décontractée.", ipa: "aim LUK-ing for a KAZH-u-al CHAK-et" },
      { en: "It doesn't fit me.", fr: "Ça ne me va pas / ça ne me convient pas.", ipa: "it DAZ-ent FIT mi" },
      { en: "That looks great on you.", fr: "Ça vous va très bien.", ipa: "dat LUKS GREIT on IU" }
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
      { en: "Movie / Film", fr: "Film", ipa: "MUUV-ee / FILM" },
      { en: "Concert / Show", fr: "Concert / Spectacle", ipa: "KON-sert / SHOH" },
      { en: "Museum / Gallery", fr: "Musée / Galerie", ipa: "myuu-ZEE-um / GAL-er-ee" },
      { en: "Read / Book", fr: "Lire / Livre", ipa: "RIID / BUK" },
      { en: "Cook / Bake", fr: "Cuisiner / Pâtisser", ipa: "KUK / BEIK" },
      { en: "Travel", fr: "Voyager", ipa: "TRAV-el" },
      { en: "Hang out", fr: "Traîner / Sortir avec des amis", ipa: "JANG AUT" },
      { en: "Hobby", fr: "Passe-temps / Hobby", ipa: "JOB-ee" },
      { en: "Relax / Chill", fr: "Se détendre / Se relaxer", ipa: "ri-LAKS / CHIL" },
      { en: "Weekend plans", fr: "Plans pour le week-end", ipa: "WIIK-end PLANZ" }
    ],
    phrases: [
      { en: "What do you do in your free time?", fr: "Qu'est-ce que vous faites pendant votre temps libre ?", ipa: "wot du iu DUU in ior FRII TAIM" },
      { en: "I love watching movies.", fr: "J'adore regarder des films.", ipa: "ai LAV WOCH-ing MUUV-eez" },
      { en: "Do you want to hang out this weekend?", fr: "Tu veux qu'on se voie ce week-end ?", ipa: "du iu WONT tu JANG AUT DIS WIIK-end" },
      { en: "What kind of music do you like?", fr: "Quel genre de musique vous aimez ?", ipa: "wot KAIND ov MYUU-zik du iu LAIK" },
      { en: "I'm into cooking lately.", fr: "En ce moment je suis passionné(e) de cuisine.", ipa: "aim IN-tu KUK-ing LEIT-lee" },
      { en: "Have you seen that new movie?", fr: "Vous avez vu ce nouveau film ?", ipa: "jav iu SIN dat NYU MUUV-ee" },
      { en: "I just want to stay in and relax.", fr: "Je veux juste rester à la maison et me détendre.", ipa: "ai CHAST WONT tu STEI IN and ri-LAKS" }
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
      { en: "School / University", fr: "École / Université", ipa: "SKUUL / yuu-ni-VER-si-tee" },
      { en: "Student / Teacher", fr: "Étudiant(e) / Professeur(e)", ipa: "STYUU-dent / TIICH-er" },
      { en: "Class / Classroom", fr: "Cours / Salle de classe", ipa: "KLAS / KLAS-ruum" },
      { en: "Homework / Assignment", fr: "Devoirs / Devoir à rendre", ipa: "JOHM-werk / a-SAIN-ment" },
      { en: "Grade / Score", fr: "Note / Score", ipa: "GREID / SKOR" },
      { en: "Degree / Diploma", fr: "Diplôme / Titre académique", ipa: "di-GREE / di-PLOH-ma" },
      { en: "Major", fr: "Spécialité / Filière", ipa: "MEI-cher" },
      { en: "Scholarship", fr: "Bourse d'études", ipa: "SKOL-er-ship" },
      { en: "Tuition", fr: "Frais de scolarité", ipa: "tyu-ISH-un" },
      { en: "Graduate", fr: "Obtenir son diplôme", ipa: "GRACH-u-eit" }
    ],
    phrases: [
      { en: "What are you studying?", fr: "Qu'est-ce que vous étudiez ?", ipa: "wot ar iu STAD-ee-ing" },
      { en: "I'm studying business administration.", fr: "J'étudie la gestion d'entreprise.", ipa: "aim STAD-ee-ing BIZ-nes ad-min-i-STREI-shun" },
      { en: "I graduated last year.", fr: "J'ai obtenu mon diplôme l'année dernière.", ipa: "ai GRACH-u-eit-id LAST YIIR" },
      { en: "Do you have a scholarship?", fr: "Vous avez une bourse d'études ?", ipa: "du iu jav a SKOL-er-ship" },
      { en: "I have a bachelor's degree in engineering.", fr: "J'ai une licence en ingénierie.", ipa: "ai jav a BACH-e-lorz di-GREE in en-chi-NIIR-ing" },
      { en: "Tuition is very expensive here.", fr: "Les frais de scolarité sont très élevés ici.", ipa: "tyu-ISH-un iz VEH-ree eks-PEN-siv JIIR" }
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
      { en: "Dollar / Cent", fr: "Dollar / Centime", ipa: "DOL-er / SENT" },
      { en: "Bill / Coin", fr: "Billet / Pièce de monnaie", ipa: "BIL / KOIN" },
      { en: "Bank account", fr: "Compte bancaire", ipa: "BANK a-KAUNT" },
      { en: "ATM / Cash machine", fr: "Distributeur automatique", ipa: "EI-TII-EM / KASH ma-SHIIN" },
      { en: "Exchange rate", fr: "Taux de change", ipa: "eks-CHEYNCH REIT" },
      { en: "Transfer", fr: "Virement", ipa: "TRANS-fer" },
      { en: "Budget", fr: "Budget", ipa: "BACH-et" },
      { en: "Savings", fr: "Épargne / Économies", ipa: "SEI-vingz" },
      { en: "Loan / Debt", fr: "Prêt / Dette", ipa: "LOHN / DET" },
      { en: "Split the bill", fr: "Partager l'addition", ipa: "SPLIT da BIL" }
    ],
    phrases: [
      { en: "Where is the nearest ATM?", fr: "Où est le distributeur le plus proche ?", ipa: "wer iz da NEER-est EI-TII-EM" },
      { en: "What's the exchange rate today?", fr: "Quel est le taux de change aujourd'hui ?", ipa: "wots di eks-CHEYNCH REIT tu-DEI" },
      { en: "Can we split the bill?", fr: "On peut partager l'addition ?", ipa: "kan WII SPLIT da BIL" },
      { en: "I need to send money abroad.", fr: "J'ai besoin d'envoyer de l'argent à l'étranger.", ipa: "ai NIID tu SEND MAN-ee a-BROD" },
      { en: "Do you accept credit cards?", fr: "Vous acceptez les cartes de crédit ?", ipa: "du iu ak-SEPT KRED-it KARDZ" },
      { en: "I'm saving up for a trip.", fr: "J'économise pour un voyage.", ipa: "aim SEIV-ing ap for a TRIP" },
      { en: "I'm on a tight budget.", fr: "J'ai un budget serré.", ipa: "aim on a TAIT BACH-et" }
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
      { en: "Help!", fr: "Au secours ! / À l'aide !", ipa: "JELP" },
      { en: "Call the police!", fr: "Appelez la police !", ipa: "KOL da po-LIIS" },
      { en: "Fire!", fr: "Au feu !", ipa: "FAIR" },
      { en: "Emergency", fr: "Urgence", ipa: "i-MER-chen-see" },
      { en: "Ambulance", fr: "Ambulance", ipa: "AM-byuu-lans" },
      { en: "I've been robbed.", fr: "On m'a volé.", ipa: "aiv BIN ROBD" },
      { en: "I need a doctor.", fr: "J'ai besoin d'un médecin.", ipa: "ai NIID a DOK-tor" },
      { en: "I'm lost.", fr: "Je suis perdu(e).", ipa: "aim LOST" },
      { en: "Emergency number", fr: "Numéro d'urgence", ipa: "i-MER-chen-see NAM-ber" },
      { en: "Accident", fr: "Accident", ipa: "AK-si-dent" }
    ],
    phrases: [
      { en: "Call 911!", fr: "Appelez le 911 !", ipa: "KOL NAIN WAN WAN" },
      { en: "I need help immediately.", fr: "J'ai besoin d'aide immédiatement.", ipa: "ai NIID JELP i-MII-dee-at-lee" },
      { en: "There's been an accident.", fr: "Il y a eu un accident.", ipa: "derz BIN an AK-si-dent" },
      { en: "I can't breathe.", fr: "Je n'arrive pas à respirer.", ipa: "ai kant BRIIZ" },
      { en: "My bag was stolen.", fr: "Mon sac a été volé.", ipa: "mai BAG woz STOH-len" },
      { en: "I need to contact the embassy.", fr: "J'ai besoin de contacter l'ambassade.", ipa: "ai NIID tu KON-takt di EM-ba-see" },
      { en: "Is there anyone who speaks French?", fr: "Y a-t-il quelqu'un qui parle français ?", ipa: "iz der EN-ee-wan huu SPEEKS FRENCH" },
      { en: "Please stay with me.", fr: "Restez avec moi, s'il vous plaît.", ipa: "PLEES STEI wid MI" }
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
      { en: "Hang in there", fr: "Tiens bon / Ne lâche pas", ipa: "JANG in DER" },
      { en: "Bite the bullet", fr: "Serrer les dents / Faire quelque chose de difficile", ipa: "BAIT da BUL-et" },
      { en: "Under the weather", fr: "Ne pas se sentir bien (malade)", ipa: "AN-der da WEZ-er" },
      { en: "Hit the road", fr: "Se mettre en route / Partir", ipa: "JIT da ROHD" },
      { en: "Piece of cake", fr: "Du gâteau / Très facile", ipa: "PIIS ov KEIK" },
      { en: "Break a leg", fr: "Bonne chance ! (avant une représentation)", ipa: "BREIK a LEG" },
      { en: "Cost an arm and a leg", fr: "Coûter les yeux de la tête / Très cher", ipa: "KOST an ARM and a LEG" },
      { en: "Beat around the bush", fr: "Tourner autour du pot", ipa: "BIIT a-RAUND da BUSH" },
      { en: "Get the ball rolling", fr: "Mettre les choses en route / Démarrer", ipa: "GET da BOL ROH-ling" },
      { en: "Hit the nail on the head", fr: "Mettre le doigt dessus / Viser juste", ipa: "JIT da NEIL on da JED" }
    ],
    phrases: [
      { en: "I'm feeling a bit under the weather today.", fr: "Je ne me sens pas très bien aujourd'hui.", ipa: "aim FIIL-ing a bit AN-der da WEZ-er tu-DEI" },
      { en: "Don't beat around the bush — just tell me!", fr: "Ne tournez pas autour du pot — dites-moi !", ipa: "dohnt BIIT a-RAUND da BUSH CHAST TEL mi" },
      { en: "That test was a piece of cake.", fr: "Cet examen était du gâteau.", ipa: "dat TEST woz a PIIS ov KEIK" },
      { en: "Break a leg at your presentation!", fr: "Bonne chance pour votre présentation !", ipa: "BREIK a LEG at ior PREZ-en-TEI-shun" },
      { en: "That vacation cost me an arm and a leg.", fr: "Ces vacances m'ont coûté les yeux de la tête.", ipa: "dat vei-KEI-shun KOST mi an ARM and a LEG" },
      { en: "Let's get the ball rolling on this project.", fr: "Mettons ce projet en route.", ipa: "LETS GET da BOL ROH-ling on DIS PROCH-ekt" }
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
      { en: "Excuse me, can you help me?", fr: "Excusez-moi, pouvez-vous m'aider ?", ipa: "eks-KYUUZ mi kan iu JELP mi" },
      { en: "I'd like... please.", fr: "Je voudrais... s'il vous plaît.", ipa: "aid LAIK... PLEES" },
      { en: "How much does it cost?", fr: "Combien ça coûte ?", ipa: "jau MACH daz it KOST" },
      { en: "Where is...?", fr: "Où est... ?", ipa: "wer IZ" },
      { en: "Can you repeat that, please?", fr: "Pouvez-vous répéter, s'il vous plaît ?", ipa: "kan iu ri-PIIT dat PLEES" },
      { en: "I don't understand.", fr: "Je ne comprends pas.", ipa: "ai dohnt an-der-STAND" },
      { en: "Do you speak French?", fr: "Parlez-vous français ?", ipa: "du iu SPEEK FRENCH" },
      { en: "I need help.", fr: "J'ai besoin d'aide.", ipa: "ai NIID JELP" },
      { en: "Thank you very much.", fr: "Merci beaucoup.", ipa: "ZANK iu VEH-ree MACH" },
      { en: "Nice to meet you.", fr: "Enchanté(e).", ipa: "nais tu MIIT iu" }
    ],
    phrases: [
      { en: "I've been learning English for 30 days!", fr: "J'apprends l'anglais depuis 30 jours !", ipa: "aiv BIN LER-ning ING-lish for ZER-tee DEIZ" },
      { en: "My English is getting better every day.", fr: "Mon anglais s'améliore chaque jour.", ipa: "mai ING-lish iz GET-ing BET-er EV-ree DEI" },
      { en: "I'm not perfect, but I keep trying.", fr: "Je ne suis pas parfait(e), mais je continue d'essayer.", ipa: "aim not PER-fekt bat ai KIIP TRAI-ing" },
      { en: "Don't be afraid to make mistakes.", fr: "N'ayez pas peur de faire des erreurs.", ipa: "dohnt bi a-FREID tu MEIK mis-TEIKS" },
      { en: "Practice makes perfect.", fr: "C'est en forgeant qu'on devient forgeron.", ipa: "PRAK-tis MEIKS PER-fekt" },
      { en: "Keep it up!", fr: "Continuez comme ça ! / Bravo !", ipa: "KIIP it AP" },
      { en: "I'm proud of myself.", fr: "Je suis fier(ère) de moi.", ipa: "aim PRAUD ov mai-SELF" },
      { en: "What a journey!", fr: "Quel voyage / parcours !", ipa: "wot a JER-nee" }
    ],
    grammar: "En 30 jours, vous avez couvert : les salutations, les réactions, les nombres, les couleurs, les dates, le restaurant, la nourriture, les courses, les transports, la ville, l'hôtel, l'aéroport, la météo, la famille, le corps, la médecine, le travail, la technologie, les émotions, le supermarché, les sports, la nature, la maison, les vêtements, les loisirs, l'éducation, les finances, les urgences, les expressions idiomatiques et la révision. C'est une base solide. La prochaine étape : pratiquez en parlant avec des locuteurs natifs, regardez des séries en anglais, écoutez des podcasts. La fluidité vient avec la pratique constante !",
    practice: [
      "Écrivez un paragraphe de 5-8 phrases en anglais décrivant qui vous êtes, d'où vous venez, ce que vous faites et ce que vous aimez.",
      "Téléchargez l'application Tandem ou HelloTalk, ou regardez vos séries préférées en anglais — commencez aujourd'hui !"
    ]
  }
];

// ============================================================
// CONVERSATIONS FR→EN
// Instructions en français. Dialogues en anglais (cible) avec traduction française.
// Structure : { en: "texte anglais", fr: "traduction française" }
// ============================================================
var CONVERSATIONS_FR_EN = [
  {
    title: "À l'aéroport américain",
    scene: "Vous venez d'atterrir aux États-Unis et passez le contrôle des passeports. L'agent vous pose des questions de routine.",
    lines: [
      { who:"them", en:"Good morning. Passport, please.", fr:"Bonjour. Votre passeport, s'il vous plaît." },
      { who:"you",  en:"Good morning. Here you go.", fr:"Bonjour. Le voici." },
      { who:"them", en:"What is the purpose of your visit?", fr:"Quel est l'objet de votre visite ?" },
      { who:"you",  en:"Tourism. I'm here for two weeks.", fr:"Tourisme. Je suis ici pour deux semaines." },
      { who:"them", en:"Where will you be staying?", fr:"Où allez-vous séjourner ?" },
      { who:"you",  en:"At a hotel in New York. The Marriott Midtown.", fr:"Dans un hôtel à New York. Le Marriott Midtown." },
      { who:"them", en:"Do you have anything to declare?", fr:"Avez-vous quelque chose à déclarer ?" },
      { who:"you",  en:"No, nothing to declare.", fr:"Non, rien à déclarer." },
      { who:"them", en:"Welcome to the United States. Enjoy your stay.", fr:"Bienvenue aux États-Unis. Bon séjour." },
      { who:"you",  en:"Thank you very much.", fr:"Merci beaucoup." }
    ]
  },
  {
    title: "Enregistrement à l'hôtel",
    scene: "Vous arrivez à votre hôtel américain en fin d'après-midi avec une réservation.",
    lines: [
      { who:"you",  en:"Hello, I have a reservation. My name is Dupont.", fr:"Bonjour, j'ai une réservation. Je m'appelle Dupont." },
      { who:"them", en:"Welcome, Mr. Dupont. Let me pull that up.", fr:"Bienvenue, M. Dupont. Je recherche ça." },
      { who:"them", en:"I have you for three nights, a king room. Is that correct?", fr:"J'ai trois nuits, une chambre king. C'est bien ça ?" },
      { who:"you",  en:"Yes, that's right.", fr:"Oui, c'est exact." },
      { who:"them", en:"I'll need a credit card for incidentals.", fr:"J'ai besoin d'une carte de crédit pour les extras." },
      { who:"you",  en:"Sure, here is my card.", fr:"Bien sûr, voici ma carte." },
      { who:"them", en:"Your room is on the 12th floor, room 1204. Checkout is at noon.", fr:"Votre chambre est au 12e étage, chambre 1204. Le départ est à midi." },
      { who:"you",  en:"What is the wifi password?", fr:"Quel est le mot de passe wifi ?" },
      { who:"them", en:"It's on the card in your room. Here are your key cards.", fr:"Il est sur la carte dans votre chambre. Voici vos cartes-clés." },
      { who:"you",  en:"Perfect. Thank you so much.", fr:"Parfait. Merci beaucoup." }
    ]
  },
  {
    title: "Au restaurant américain",
    scene: "Vous dînez dans un restaurant américain. Le serveur prend votre commande et gère l'addition.",
    lines: [
      { who:"them", en:"Hi there! Can I start you off with something to drink?", fr:"Bonjour ! Je vous apporte quelque chose à boire ?" },
      { who:"you",  en:"Yes, a sparkling water and a glass of red wine, please.", fr:"Oui, une eau gazeuse et un verre de vin rouge, s'il vous plaît." },
      { who:"them", en:"Are you ready to order, or do you need a few more minutes?", fr:"Vous êtes prêt à commander, ou il vous faut encore quelques minutes ?" },
      { who:"you",  en:"I think I'm ready. I'll have the grilled salmon.", fr:"Je crois que je suis prêt. Je vais prendre le saumon grillé." },
      { who:"them", en:"Excellent choice. Would you like a salad or soup to start?", fr:"Excellent choix. Vous voulez une salade ou une soupe en entrée ?" },
      { who:"you",  en:"A Caesar salad, please.", fr:"Une salade César, s'il vous plaît." },
      { who:"them", en:"How would you like your salmon cooked?", fr:"Comment désirez-vous la cuisson de votre saumon ?" },
      { who:"you",  en:"Medium, please.", fr:"À point, s'il vous plaît." },
      { who:"them", en:"Can I get you anything else? Dessert?", fr:"Autre chose ? Un dessert ?" },
      { who:"you",  en:"No thank you. Just the check, please.", fr:"Non merci. L'addition, s'il vous plaît." }
    ]
  },
  {
    title: "Prendre un taxi / Uber",
    scene: "Vous montez dans un taxi ou Uber et donnez votre destination au chauffeur.",
    lines: [
      { who:"them", en:"Hi, are you the one who ordered the Uber?", fr:"Bonjour, c'est vous qui avez commandé l'Uber ?" },
      { who:"you",  en:"Yes, that's me. Dupont.", fr:"Oui, c'est moi. Dupont." },
      { who:"them", en:"Great. Where are you headed?", fr:"Parfait. Où allez-vous ?" },
      { who:"you",  en:"To JFK airport, please. Terminal 4.", fr:"À l'aéroport JFK, s'il vous plaît. Terminal 4." },
      { who:"them", en:"No problem. It should take about 40 minutes depending on traffic.", fr:"Pas de problème. Ça devrait prendre environ 40 minutes selon le trafic." },
      { who:"you",  en:"Is there a lot of traffic at this hour?", fr:"Il y a beaucoup de circulation à cette heure-ci ?" },
      { who:"them", en:"A little. But I know a shortcut.", fr:"Un peu. Mais je connais un raccourci." },
      { who:"you",  en:"Could you turn the air conditioning up a bit?", fr:"Pourriez-vous monter un peu la climatisation ?" },
      { who:"them", en:"Of course. Is this better?", fr:"Bien sûr. C'est mieux comme ça ?" },
      { who:"you",  en:"Perfect. Thank you.", fr:"Parfait. Merci." }
    ]
  },
  {
    title: "Faire des achats",
    scene: "Vous êtes dans une boutique américaine et cherchez quelque chose de précis. Le vendeur vous aide.",
    lines: [
      { who:"them", en:"Hi! Can I help you find something?", fr:"Bonjour ! Je peux vous aider à trouver quelque chose ?" },
      { who:"you",  en:"Yes, I'm looking for a jacket. Something casual.", fr:"Oui, je cherche une veste. Quelque chose de décontracté." },
      { who:"them", en:"What size are you?", fr:"Quelle est votre taille ?" },
      { who:"you",  en:"I'm a medium, I think. Or large in American sizes.", fr:"Je suis un medium, je crois. Ou un large en tailles américaines." },
      { who:"them", en:"These just came in. Do you like this style?", fr:"Celles-ci viennent d'arriver. Vous aimez ce style ?" },
      { who:"you",  en:"I like it. Do you have it in navy blue?", fr:"J'aime bien. Vous l'avez en bleu marine ?" },
      { who:"them", en:"Let me check the back. One moment.", fr:"Je vérifie en réserve. Un instant." },
      { who:"you",  en:"Take your time.", fr:"Prenez votre temps." },
      { who:"them", en:"We have it in navy, size large. Would you like to try it on?", fr:"Nous l'avons en bleu marine, taille large. Vous voulez l'essayer ?" },
      { who:"you",  en:"Yes please. Where are the fitting rooms?", fr:"Oui s'il vous plaît. Où sont les cabines d'essayage ?" }
    ]
  },
  {
    title: "Se présenter au travail",
    scene: "Votre premier jour dans une entreprise américaine. Vous rencontrez un collègue dans le couloir.",
    lines: [
      { who:"them", en:"Hey, you must be the new person from Paris! Welcome!", fr:"Salut, vous devez être la nouvelle personne de Paris ! Bienvenue !" },
      { who:"you",  en:"Yes! Hi, I'm Claire. Nice to meet you.", fr:"Oui ! Bonjour, je suis Claire. Enchanté(e)." },
      { who:"them", en:"I'm Mark from the marketing team. How was your flight?", fr:"Je suis Mark, de l'équipe marketing. Comment s'est passé votre vol ?" },
      { who:"you",  en:"Long, but fine. I'm still a little jet-lagged.", fr:"Long, mais bien. Je suis encore un peu décalé(e) horaire." },
      { who:"them", en:"That's totally normal. Are you settling in okay?", fr:"C'est tout à fait normal. Vous vous installez bien ?" },
      { who:"you",  en:"Yes, thank you. Everyone has been very welcoming.", fr:"Oui, merci. Tout le monde a été très accueillant." },
      { who:"them", en:"We have a team lunch on Fridays if you want to join.", fr:"Nous avons un déjeuner d'équipe le vendredi si vous voulez vous joindre à nous." },
      { who:"you",  en:"That sounds great. I'd love to.", fr:"Ça a l'air super. Avec plaisir." },
      { who:"them", en:"Perfect. If you need anything, my office is just down the hall.", fr:"Parfait. Si vous avez besoin de quoi que ce soit, mon bureau est au fond du couloir." },
      { who:"you",  en:"Thank you so much, Mark. I really appreciate it.", fr:"Merci beaucoup, Mark. J'apprécie vraiment." }
    ]
  }
];
