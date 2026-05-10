// French → Spanish Native Lesson Plan
// Français comme langue d'instruction, espagnol comme objectif
// vocab: { es: "mot espagnol", fr: "traduction française", ipa: "phonétique pour francophones" }

var COURSE_FR_ES = [
  {
    day: 1,
    title: "Salutations et politesse",
    titleNative: "Saludos y cortesía",
    focus: "Les premiers mots que vous prononcerez dans n'importe quelle situation espagnole. Contrairement au français, l'espagnol est direct et chaleureux dès le premier contact.",
    vocab: [
      { es: "Hola", fr: "Bonjour / Salut", ipa: "O-la" },
      { es: "Buenos días", fr: "Bonjour (le matin)", ipa: "BWEH-nos-DI-as" },
      { es: "Buenas tardes", fr: "Bon après-midi / Bonsoir", ipa: "BWEH-nas-TAR-des" },
      { es: "Buenas noches", fr: "Bonne nuit / Bonsoir tardif", ipa: "BWEH-nas-NO-ches" },
      { es: "Adiós", fr: "Au revoir", ipa: "a-DYOS" },
      { es: "Por favor", fr: "S'il vous plaît", ipa: "por-fa-VOR" },
      { es: "Gracias", fr: "Merci", ipa: "GRA-syas" },
      { es: "De nada", fr: "De rien", ipa: "de-NA-da" },
      { es: "Perdón / Disculpe", fr: "Pardon / Excusez-moi", ipa: "per-DON / dis-KUL-pe" },
      { es: "Hasta luego", fr: "À tout à l'heure / Au revoir", ipa: "AS-ta-LWEH-go" }
    ],
    phrases: [
      { es: "Hola, ¿cómo estás?", fr: "Bonjour, comment vas-tu ?", ipa: "O-la, KO-mo-es-TAS" },
      { es: "Bien, gracias. ¿Y tú?", fr: "Bien, merci. Et toi ?", ipa: "BYEN, GRA-syas. i-TU" },
      { es: "Mucho gusto.", fr: "Enchanté(e).", ipa: "MU-cho-GUS-to" },
      { es: "¿Cómo se llama usted?", fr: "Comment vous appelez-vous ?", ipa: "KO-mo-se-YA-ma-us-TED" },
      { es: "¡Hasta pronto!", fr: "À bientôt !", ipa: "AS-ta-PRON-to" },
      { es: "¡Buen día!", fr: "Bonne journée !", ipa: "BWEN-DI-a" }
    ],
    grammar: "En espagnol, il existe deux formes de 'vous' : 'tú' (informel, comme 'tu' en français) et 'usted' (formel, comme 'vous'). Avec les inconnus et les personnes âgées, utilisez toujours 'usted'. Les Espagnols et Latinos sont très chaleureux — souriez et ils souriront !\n\nPhonétique clé : la 'j' espagnole se prononce comme un 'r' français guttural mais plus fort ('kh'). Le 'ñ' se prononce comme 'gn' dans 'agneau'.",
    practice: [
      "Répétez cinq fois à voix haute : '¡Hola ! ¿Cómo estás? Bien, gracias. ¿Y tú?'",
      "Imaginez entrer dans un café à Madrid. Saluez le serveur avec 'Buenos días' et demandez comment ça va.",
      "Pratiquez la séquence complète des adieux : '¡Hasta luego ! ¡Hasta pronto !'"
    ]
  },
  {
    day: 2,
    title: "Les chiffres",
    titleNative: "Los números",
    focus: "Les chiffres espagnols sont plus réguliers qu'en français — pas de 'quatre-vingt-dix' ! Vous allez apprécier cette logique dès le départ.",
    vocab: [
      { es: "uno / una", fr: "un / une", ipa: "U-no / U-na" },
      { es: "dos", fr: "deux", ipa: "DOS" },
      { es: "tres", fr: "trois", ipa: "TRES" },
      { es: "cuatro", fr: "quatre", ipa: "KWA-tro" },
      { es: "cinco", fr: "cinq", ipa: "SIN-ko" },
      { es: "seis", fr: "six", ipa: "SEYS" },
      { es: "siete", fr: "sept", ipa: "SYET-e" },
      { es: "ocho", fr: "huit", ipa: "O-cho" },
      { es: "nueve", fr: "neuf", ipa: "NWEH-ve" },
      { es: "diez", fr: "dix", ipa: "DYES" },
      { es: "veinte", fr: "vingt", ipa: "BEYN-te" },
      { es: "cien", fr: "cent", ipa: "SYEN" }
    ],
    phrases: [
      { es: "¿Cuánto cuesta?", fr: "Combien ça coûte ?", ipa: "KWAN-to-KWES-ta" },
      { es: "Son cinco euros.", fr: "C'est cinq euros.", ipa: "SON-SIN-ko-EU-ros" },
      { es: "Tengo treinta años.", fr: "J'ai trente ans.", ipa: "TEN-go-TREYN-ta-AN-yos" },
      { es: "Son las tres.", fr: "Il est trois heures.", ipa: "SON-las-TRES" },
      { es: "Deme dos, por favor.", fr: "Donnez-m'en deux, s'il vous plaît.", ipa: "DE-me-DOS, por-fa-VOR" }
    ],
    grammar: "Bonne nouvelle : en espagnol, 70 = 'setenta', 80 = 'ochenta', 90 = 'noventa' — beaucoup plus simple que le français ! Les chiffres de 16 à 19 s'écrivent en un seul mot : dieciséis, diecisiete, dieciocho, diecinueve. De 21 à 29 : veintiuno, veintidós, etc.",
    practice: [
      "Comptez de 1 à 10 en espagnol à voix haute jusqu'à ce que ça vienne naturellement.",
      "Dites votre âge en espagnol : 'Tengo ___ años.'",
      "Entraînez-vous à donner le prix de 3 objets autour de vous en espagnol."
    ]
  },
  {
    day: 3,
    title: "Au café",
    titleNative: "En el café",
    focus: "Commandez comme un local dans un café espagnol. La culture du café en Espagne est très différente — on prend un 'café solo' (espresso) au comptoir, debout, et on repart vite !",
    vocab: [
      { es: "un café solo", fr: "un espresso", ipa: "un-ka-FE-SO-lo" },
      { es: "un café con leche", fr: "un café au lait", ipa: "un-ka-FE-kon-LE-che" },
      { es: "un té", fr: "un thé", ipa: "un-TE" },
      { es: "un zumo de naranja", fr: "un jus d'orange", ipa: "un-SU-mo-de-na-RAN-kha" },
      { es: "un agua", fr: "une eau", ipa: "un-A-gwa" },
      { es: "un croissant", fr: "un croissant", ipa: "un-krwa-SAN" },
      { es: "la cuenta", fr: "l'addition", ipa: "la-KWEN-ta" },
      { es: "la terraza", fr: "la terrasse", ipa: "la-te-RRA-sa" },
      { es: "el camarero", fr: "le serveur", ipa: "el-ka-ma-RE-ro" },
      { es: "la carta", fr: "la carte / le menu", ipa: "la-KAR-ta" }
    ],
    phrases: [
      { es: "Póngame un café, por favor.", fr: "Donnez-moi un café, s'il vous plaît.", ipa: "PON-ga-me-un-ka-FE, por-fa-VOR" },
      { es: "¿Tienen cruasanes?", fr: "Vous avez des croissants ?", ipa: "TYE-nen-krwa-SA-nes" },
      { es: "La cuenta, por favor.", fr: "L'addition, s'il vous plaît.", ipa: "la-KWEN-ta, por-fa-VOR" },
      { es: "Para llevar.", fr: "Pour emporter.", ipa: "PA-ra-ye-VAR" },
      { es: "Una mesa para dos, por favor.", fr: "Une table pour deux, s'il vous plaît.", ipa: "U-na-ME-sa-PA-ra-DOS, por-fa-VOR" },
      { es: "¿Qué tienen de desayuno?", fr: "Qu'est-ce que vous avez comme petit-déjeuner ?", ipa: "KE-TYE-nen-de-de-sa-YU-no" }
    ],
    grammar: "Pour commander en espagnol, utilisez 'póngame' (donnez-moi, au bar) ou 'quiero' / 'quisiera' (je veux / je voudrais). 'Póngame' est typiquement espagnol, surtout au comptoir. En Amérique latine, on dit plutôt 'quiero' ou 'me pone'.\n\nNote : en Espagne, 'un zumo' = jus de fruit ; en Amérique latine on dit 'un jugo'.",
    practice: [
      "Entraînez-vous à commander : '¡Buenos días ! Póngame un café con leche y un cruasán, por favor.'",
      "Mémorisez comment demander l'addition : '¡La cuenta, por favor !'",
      "Imaginez-vous dans un bar à Madrid. Que commanderiez-vous ? Dites votre commande complète en espagnol."
    ]
  },
  {
    day: 4,
    title: "La nourriture",
    titleNative: "La comida",
    focus: "La gastronomie espagnole et latino-américaine est incroyablement riche. Connaître le vocabulaire de base vous permettra de vous régaler dans n'importe quel restaurant.",
    vocab: [
      { es: "el pan", fr: "le pain", ipa: "el-PAN" },
      { es: "el queso", fr: "le fromage", ipa: "el-KE-so" },
      { es: "la mantequilla", fr: "le beurre", ipa: "la-man-te-KI-ya" },
      { es: "la carne", fr: "la viande", ipa: "la-KAR-ne" },
      { es: "el pescado", fr: "le poisson", ipa: "el-pes-KA-do" },
      { es: "las verduras", fr: "les légumes", ipa: "las-ber-DU-ras" },
      { es: "las frutas", fr: "les fruits", ipa: "las-FRU-tas" },
      { es: "el postre", fr: "le dessert", ipa: "el-POS-tre" },
      { es: "delicioso", fr: "délicieux", ipa: "de-li-SYO-so" },
      { es: "picante", fr: "épicé / piquant", ipa: "pi-KAN-te" }
    ],
    phrases: [
      { es: "¡Está delicioso!", fr: "C'est délicieux !", ipa: "es-TA-de-li-SYO-so" },
      { es: "Soy vegetariano/a.", fr: "Je suis végétarien(ne).", ipa: "SOY-be-khe-ta-RYA-no" },
      { es: "No me gusta el picante.", fr: "Je n'aime pas les plats épicés.", ipa: "no-me-GUS-ta-el-pi-KAN-te" },
      { es: "¿Qué recomienda?", fr: "Qu'est-ce que vous recommandez ?", ipa: "KE-re-ko-MYEN-da" },
      { es: "Sin gluten, por favor.", fr: "Sans gluten, s'il vous plaît.", ipa: "SIN-glu-TEN, por-fa-VOR" }
    ],
    grammar: "En espagnol, les articles partitifs français (du, de la, des) n'existent pas. On dit simplement 'quiero pan' (je veux du pain), 'quiero carne' (je veux de la viande). Pas d'article partitif — c'est plus simple qu'en français ! La négation est très simple : 'no me gusta' (je n'aime pas).",
    practice: [
      "Décrivez trois aliments que vous aimez avec 'Me gusta...' et trois que vous n'aimez pas avec 'No me gusta...'",
      "Mémorisez : '¡Está delicioso !' — vous l'utiliserez souvent.",
      "Comment dites-vous que vous êtes allergique à quelque chose ? Entraînez-vous avec 'Soy alérgico/a a...'"
    ]
  },
  {
    day: 5,
    title: "Présentations et famille",
    titleNative: "Presentaciones y familia",
    focus: "Se présenter et parler de sa famille est indispensable pour les premières conversations. L'espagnol est une langue très directe et chaleureuse pour se faire connaître.",
    vocab: [
      { es: "Me llamo", fr: "Je m'appelle", ipa: "me-YA-mo" },
      { es: "tengo ... años", fr: "j'ai ... ans", ipa: "TEN-go-AN-yos" },
      { es: "soy de", fr: "je suis de / je viens de", ipa: "SOY-de" },
      { es: "la familia", fr: "la famille", ipa: "la-fa-MI-lya" },
      { es: "el padre / la madre", fr: "le père / la mère", ipa: "el-PA-dre / la-MA-dre" },
      { es: "el hermano / la hermana", fr: "le frère / la sœur", ipa: "el-er-MA-no / la-er-MA-na" },
      { es: "el marido / la mujer", fr: "le mari / la femme", ipa: "el-ma-RI-do / la-mu-KHER" },
      { es: "los hijos", fr: "les enfants / les fils", ipa: "los-I-khos" },
      { es: "los abuelos", fr: "les grands-parents", ipa: "los-a-BWEH-los" },
      { es: "soltero/a", fr: "célibataire", ipa: "sol-TE-ro" }
    ],
    phrases: [
      { es: "Me llamo Sophie. ¿Y tú?", fr: "Je m'appelle Sophie. Et toi ?", ipa: "me-YA-mo-SO-fye. i-TU" },
      { es: "Soy de Francia.", fr: "Je suis français(e).", ipa: "SOY-de-FRAN-sya" },
      { es: "Tengo dos hermanos y una hermana.", fr: "J'ai deux frères et une sœur.", ipa: "TEN-go-DOS-er-MA-nos-i-U-na-er-MA-na" },
      { es: "Estoy casado/a.", fr: "Je suis marié(e).", ipa: "es-TOY-ka-SA-do" },
      { es: "¿Tienes hijos?", fr: "Tu as des enfants ?", ipa: "TYE-nes-I-khos" }
    ],
    grammar: "En espagnol, les nationalités s'accordent en genre : 'soy francés' (homme), 'soy francesa' (femme). Contrairement au français, les nationalités ne prennent pas de majuscule : 'soy español', pas 'Español'. Le verbe 'ser' (être de façon permanente) s'utilise pour les origines et l'identité.",
    practice: [
      "Écrivez votre présentation complète en espagnol : nom, âge, origine, situation familiale.",
      "Enregistrez-vous en train de vous présenter et écoutez votre prononciation.",
      "Pratiquez : '—¿De dónde eres? —Soy de... Vivo en...'"
    ]
  },
  {
    day: 6,
    title: "Couleurs et description",
    titleNative: "Colores y descripción",
    focus: "Les couleurs et les adjectifs descriptifs vous permettent de parler des gens, des objets et des lieux. Ils sont essentiels pour faire des achats et décrire ce que vous cherchez.",
    vocab: [
      { es: "rojo/a", fr: "rouge", ipa: "RRO-kho" },
      { es: "azul", fr: "bleu(e)", ipa: "a-SUL" },
      { es: "verde", fr: "vert(e)", ipa: "BER-de" },
      { es: "amarillo/a", fr: "jaune", ipa: "a-ma-RI-yo" },
      { es: "blanco/a", fr: "blanc(he)", ipa: "BLAN-ko" },
      { es: "negro/a", fr: "noir(e)", ipa: "NE-gro" },
      { es: "grande", fr: "grand(e)", ipa: "GRAN-de" },
      { es: "pequeño/a", fr: "petit(e)", ipa: "pe-KEN-yo" },
      { es: "hermoso/a", fr: "beau / belle", ipa: "er-MO-so" },
      { es: "viejo/a", fr: "vieux / vieille", ipa: "BYEH-kho" }
    ],
    phrases: [
      { es: "Busco un vestido rojo.", fr: "Je cherche une robe rouge.", ipa: "BUS-ko-un-bes-TI-do-RRO-kho" },
      { es: "Es demasiado grande para mí.", fr: "C'est trop grand pour moi.", ipa: "es-de-ma-SYA-do-GRAN-de-PA-ra-MI" },
      { es: "¿Lo tienen en azul?", fr: "Vous l'avez en bleu ?", ipa: "lo-TYE-nen-en-a-SUL" },
      { es: "¡Es muy bonito!", fr: "C'est très joli !", ipa: "es-MUY-bo-NI-to" },
      { es: "Él es alto y moreno.", fr: "Il est grand et brun.", ipa: "el-es-AL-to-i-mo-RE-no" }
    ],
    grammar: "En espagnol, les adjectifs s'accordent en genre et en nombre avec le nom. 'Un gato negro' (un chat noir) → 'Una robe negra' (une robe noire). La règle est très régulière : -o pour le masculin, -a pour le féminin. Les adjectifs qui finissent déjà en -e ou en consonne ne changent pas : 'grande', 'azul', 'verde'.",
    practice: [
      "Décrivez vos vêtements d'aujourd'hui en utilisant des couleurs en espagnol.",
      "Décrivez un membre de votre famille : 'Mi madre es alta y tiene los ojos azules.'",
      "Entraînez-vous avec les couleurs en regardant les objets autour de vous et en les nommant en espagnol."
    ]
  },
  {
    day: 7,
    title: "Au marché",
    titleNative: "En el mercado",
    focus: "Les marchés ('mercados') sont au cœur de la vie quotidienne en Espagne et en Amérique latine. Savoir acheter des fruits, légumes et fromages comme un local vous connecte à la culture.",
    vocab: [
      { es: "las manzanas", fr: "les pommes", ipa: "las-man-SA-nas" },
      { es: "los tomates", fr: "les tomates", ipa: "los-to-MA-tes" },
      { es: "las fresas", fr: "les fraises", ipa: "las-FRE-sas" },
      { es: "el ajo", fr: "l'ail", ipa: "el-A-kho" },
      { es: "las cebollas", fr: "les oignons", ipa: "las-se-BO-yas" },
      { es: "un kilo de", fr: "un kilo de", ipa: "un-KI-lo-de" },
      { es: "medio kilo", fr: "une livre / un demi-kilo", ipa: "ME-dyo-KI-lo" },
      { es: "¿Cuánto es?", fr: "C'est combien ?", ipa: "KWAN-to-ES" },
      { es: "demasiado caro", fr: "trop cher", ipa: "de-ma-SYA-do-KA-ro" },
      { es: "fresco/a", fr: "frais / fraîche", ipa: "FRES-ko" }
    ],
    phrases: [
      { es: "Quisiera un kilo de tomates.", fr: "Je voudrais un kilo de tomates.", ipa: "ki-SYEH-ra-un-KI-lo-de-to-MA-tes" },
      { es: "¿Están frescos?", fr: "Ils sont frais ?", ipa: "es-TAN-FRES-kos" },
      { es: "Es un poco caro.", fr: "C'est un peu cher.", ipa: "es-un-PO-ko-KA-ro" },
      { es: "Me lo llevo.", fr: "Je le prends.", ipa: "me-lo-YE-bo" },
      { es: "Deme medio kilo de fresas.", fr: "Donnez-moi un demi-kilo de fraises.", ipa: "DE-me-ME-dyo-KI-lo-de-FRE-sas" }
    ],
    grammar: "Pour exprimer une quantité en espagnol : 'un kilo de tomates', 'un litro de leche' — pas d'article partitif, comme vous l'avez vu au jour 4. 'Quisiera' (je voudrais) est le conditionnel de 'querer' — plus poli que 'quiero' (je veux). Utilisez 'quisiera' dans les commerces.",
    practice: [
      "Imaginez-vous au marché. Écrivez votre liste de courses en espagnol et entraînez-vous à la dicter.",
      "Pratiquez le dialogue : '—¿Cuánto cuestan las fresas? —Tres euros el kilo. —Me lo llevo.'",
      "Apprenez trois fruits ou légumes supplémentaires et utilisez-les dans des phrases."
    ]
  },
  {
    day: 8,
    title: "Transport et directions",
    titleNative: "Transporte y direcciones",
    focus: "Se déplacer dans une ville espagnole ou latino-américaine demande de connaître les transports et de savoir demander son chemin. Le métro de Madrid et de Mexico sont excellents.",
    vocab: [
      { es: "el metro", fr: "le métro", ipa: "el-ME-tro" },
      { es: "el autobús", fr: "le bus", ipa: "el-aw-to-BUS" },
      { es: "el tren", fr: "le train", ipa: "el-TREN" },
      { es: "la estación", fr: "la gare / la station", ipa: "la-es-ta-SYON" },
      { es: "la parada", fr: "l'arrêt (de bus/métro)", ipa: "la-pa-RA-da" },
      { es: "a la derecha", fr: "à droite", ipa: "a-la-de-RE-cha" },
      { es: "a la izquierda", fr: "à gauche", ipa: "a-la-is-KYER-da" },
      { es: "todo recto", fr: "tout droit", ipa: "TO-do-RREK-to" },
      { es: "cerca de", fr: "près de", ipa: "SER-ka-de" },
      { es: "lejos de", fr: "loin de", ipa: "LE-khos-de" }
    ],
    phrases: [
      { es: "¿Dónde está la estación de metro?", fr: "Où est la station de métro ?", ipa: "DON-de-es-TA-la-es-ta-SYON-de-ME-tro" },
      { es: "¿A cuántos minutos está?", fr: "C'est à combien de minutes ?", ipa: "a-KWAN-tos-mi-NU-tos-es-TA" },
      { es: "Gire a la izquierda en el semáforo.", fr: "Tournez à gauche au feu rouge.", ipa: "KHI-re-a-la-is-KYER-da-en-el-se-MA-fo-ro" },
      { es: "Un billete, por favor.", fr: "Un ticket, s'il vous plaît.", ipa: "un-bi-YE-te, por-fa-VOR" },
      { es: "¿Este autobús va al centro?", fr: "Ce bus va au centre-ville ?", ipa: "ES-te-aw-to-BUS-ba-al-SEN-tro" }
    ],
    grammar: "La contraction 'a + el = al' est obligatoire en espagnol : 'voy al mercado' (je vais au marché). De même, 'de + el = del' : 'cerca del metro' (près du métro). Avec les féminins et les pluriels, pas de contraction : 'voy a la tienda', 'vengo de las montañas'.",
    practice: [
      "Entraînez-vous à donner des directions imaginaires depuis votre domicile jusqu'à un endroit proche.",
      "Mémorisez les quatre directions : derecha, izquierda, todo recto, detrás.",
      "Comment diriez-vous 'L'hôtel est près du métro' ? Construisez la phrase en espagnol."
    ]
  },
  {
    day: 9,
    title: "Au restaurant",
    titleNative: "En el restaurante",
    focus: "Manger dans un restaurant espagnol ou latino-américain est une expérience culturelle à part entière. Les horaires des repas sont très différents — en Espagne, le déjeuner est à 14h et le dîner après 21h !",
    vocab: [
      { es: "una mesa", fr: "une table", ipa: "U-na-ME-sa" },
      { es: "la carta / el menú", fr: "la carte / le menu", ipa: "la-KAR-ta / el-me-NU" },
      { es: "el primero", fr: "l'entrée / le premier plat", ipa: "el-pri-ME-ro" },
      { es: "el segundo", fr: "le plat principal", ipa: "el-se-GUN-do" },
      { es: "el postre", fr: "le dessert", ipa: "el-POS-tre" },
      { es: "una jarra de agua", fr: "une carafe d'eau", ipa: "U-na-KHA-rra-de-A-gwa" },
      { es: "poco hecho / bien hecho", fr: "saignant / bien cuit", ipa: "PO-ko-E-cho / BYEN-E-cho" },
      { es: "la cuenta", fr: "l'addition", ipa: "la-KWEN-ta" },
      { es: "la propina", fr: "le pourboire", ipa: "la-pro-PI-na" },
      { es: "una reserva", fr: "une réservation", ipa: "U-na-rre-SER-ba" }
    ],
    phrases: [
      { es: "Tengo una reserva a nombre de Dupont.", fr: "J'ai une réservation au nom de Dupont.", ipa: "TEN-go-U-na-rre-SER-ba-a-NOM-bre-de-du-PON" },
      { es: "¿Para cuántas personas?", fr: "Pour combien de personnes ?", ipa: "PA-ra-KWAN-tas-per-SO-nas" },
      { es: "El filete, poco hecho, por favor.", fr: "Le steak, saignant, s'il vous plaît.", ipa: "el-fi-LE-te, PO-ko-E-cho, por-fa-VOR" },
      { es: "¿Está incluido el servicio?", fr: "Le service est compris ?", ipa: "es-TA-in-klwi-DO-el-ser-BI-syo" },
      { es: "¡Estaba buenísimo!", fr: "C'était excellent !", ipa: "es-TA-ba-bwe-NI-si-mo" }
    ],
    grammar: "Le menu espagnol a souvent 'menú del día' : un menu à prix fixe avec entrée + plat + dessert + boisson pour un prix très avantageux, surtout le midi. 'La carta' est la carte à la demande. Contrairement à la France, le service n'est pas toujours inclus — pensez à vérifier.",
    practice: [
      "Entraînez-vous à réserver une table : 'Buenas tardes, quisiera reservar una mesa para dos personas esta noche.'",
      "Mémorisez la séquence : carte → commande → plats → dessert → addition.",
      "Comment demandez-vous votre steak favori en espagnol ? Entraînez-vous avec la phrase complète."
    ]
  },
  {
    day: 10,
    title: "La météo et les saisons",
    titleNative: "El tiempo y las estaciones",
    focus: "La météo est un sujet de conversation universel. C'est un excellent point de départ pour parler avec des locaux — et l'Espagne a un climat très varié selon les régions.",
    vocab: [
      { es: "hace buen tiempo", fr: "il fait beau", ipa: "A-se-BWEN-TYEM-po" },
      { es: "hace calor", fr: "il fait chaud", ipa: "A-se-ka-LOR" },
      { es: "hace frío", fr: "il fait froid", ipa: "A-se-FRI-o" },
      { es: "llueve", fr: "il pleut", ipa: "YWE-be" },
      { es: "nieva", fr: "il neige", ipa: "NYE-ba" },
      { es: "el sol", fr: "le soleil", ipa: "el-SOL" },
      { es: "la nube", fr: "le nuage", ipa: "la-NU-be" },
      { es: "la primavera", fr: "le printemps", ipa: "la-pri-ma-BE-ra" },
      { es: "el verano", fr: "l'été", ipa: "el-be-RA-no" },
      { es: "el invierno", fr: "l'hiver", ipa: "el-in-BYER-no" }
    ],
    phrases: [
      { es: "¿Qué tiempo hace hoy?", fr: "Quel temps fait-il aujourd'hui ?", ipa: "KE-TYEM-po-A-se-OY" },
      { es: "¡Hace muy buen tiempo hoy!", fr: "Il fait très beau aujourd'hui !", ipa: "A-se-MUY-BWEN-TYEM-po-OY" },
      { es: "Espero que no llueva.", fr: "J'espère qu'il ne pleuvra pas.", ipa: "es-PE-ro-ke-no-YWE-ba" },
      { es: "¿Cuál es la temperatura?", fr: "Quelle est la température ?", ipa: "KWAL-es-la-tem-pe-ra-TU-ra" },
      { es: "Me encanta el verano en España.", fr: "J'adore l'été en Espagne.", ipa: "me-en-KAN-ta-el-be-RA-no-en-es-PA-nya" }
    ],
    grammar: "En espagnol, la météo utilise le verbe 'hacer' impersonnel : 'hace frío/calor/buen tiempo'. Pour des phénomènes spécifiques, des verbes propres : 'llover' (pleuvoir) → 'llueve', 'nevar' (neiger) → 'nieva'. C'est très similaire au 'il fait' français mais avec 'hace'.",
    practice: [
      "Décrivez le temps qu'il fait aujourd'hui là où vous êtes, en espagnol.",
      "Quelle est votre saison préférée ? Dites pourquoi en espagnol : 'Me encanta... porque...'",
      "Entraînez-vous au petit dialogue météo : '—¿Qué tiempo hace? —Hace buen tiempo, pero un poco de frío.'"
    ]
  },
  {
    day: 11,
    title: "À l'hôtel",
    titleNative: "En el hotel",
    focus: "Que vous séjourniez dans une auberge de jeunesse ou un hôtel de luxe, vous devez savoir communiquer avec le personnel pour rendre votre séjour plus confortable.",
    vocab: [
      { es: "la habitación", fr: "la chambre", ipa: "la-a-bi-ta-SYON" },
      { es: "la llave / la tarjeta", fr: "la clé / la carte", ipa: "la-YA-be / la-tar-KHE-ta" },
      { es: "el desayuno", fr: "le petit-déjeuner", ipa: "el-de-sa-YU-no" },
      { es: "la recepción", fr: "la réception", ipa: "la-rre-sep-SYON" },
      { es: "el ascensor", fr: "l'ascenseur", ipa: "el-a-sen-SOR" },
      { es: "el wifi", fr: "le wifi", ipa: "el-WI-fi" },
      { es: "reservar", fr: "réserver", ipa: "rre-ser-BAR" },
      { es: "disponible", fr: "disponible", ipa: "dis-po-NI-ble" },
      { es: "el check-out", fr: "le départ / check-out", ipa: "el-CHEK-awt" },
      { es: "vista al mar", fr: "vue sur la mer", ipa: "BIS-ta-al-MAR" }
    ],
    phrases: [
      { es: "Tengo una reserva.", fr: "J'ai une réservation.", ipa: "TEN-go-U-na-rre-SER-ba" },
      { es: "¿A qué hora es el desayuno?", fr: "À quelle heure est le petit-déjeuner ?", ipa: "a-KE-O-ra-es-el-de-sa-YU-no" },
      { es: "Hay un problema con la habitación.", fr: "Il y a un problème avec la chambre.", ipa: "AY-un-pro-BLE-ma-kon-la-a-bi-ta-SYON" },
      { es: "Quisiera una habitación con vistas.", fr: "Je voudrais une chambre avec vue.", ipa: "ki-SYEH-ra-U-na-a-bi-ta-SYON-kon-BIS-tas" },
      { es: "¿A qué hora debo dejar la habitación?", fr: "À quelle heure dois-je libérer la chambre ?", ipa: "a-KE-O-ra-DE-bo-de-KHAR-la-a-bi-ta-SYON" }
    ],
    grammar: "'Hay' (il y a) est une expression très utile en espagnol qui ne change jamais : 'Hay un problema' (il y a un problème), 'Hay habitaciones disponibles' (il y a des chambres disponibles). Sa négation : 'No hay...' (il n'y a pas de...). C'est l'équivalent parfait du 'il y a' français.",
    practice: [
      "Entraînez-vous au check-in complet : vous présenter, confirmer la réservation, demander des infos.",
      "Imaginez un problème dans votre chambre (pas de serviettes, wifi en panne) et comment le signaler.",
      "Mémorisez : 'Hay un problema con...' — c'est votre phrase de secours pour tout problème."
    ]
  },
  {
    day: 12,
    title: "Vêtements et shopping",
    titleNative: "Ropa y compras",
    focus: "L'Espagne et l'Amérique latine ont une culture du shopping très vivante. Savoir chercher votre taille, essayer des vêtements et payer vous donnera confiance dans les boutiques.",
    vocab: [
      { es: "un pantalón", fr: "un pantalon", ipa: "un-pan-ta-LON" },
      { es: "una camisa", fr: "une chemise", ipa: "U-na-ka-MI-sa" },
      { es: "un vestido", fr: "une robe", ipa: "un-bes-TI-do" },
      { es: "un abrigo", fr: "un manteau", ipa: "un-a-BRI-go" },
      { es: "los zapatos", fr: "les chaussures", ipa: "los-sa-PA-tos" },
      { es: "la talla", fr: "la taille / la pointure", ipa: "la-TA-ya" },
      { es: "probarse", fr: "essayer (un vêtement)", ipa: "pro-BAR-se" },
      { es: "me queda bien", fr: "ça me va bien", ipa: "me-KE-da-BYEN" },
      { es: "en oferta", fr: "en solde / en promo", ipa: "en-o-FER-ta" },
      { es: "la caja", fr: "la caisse", ipa: "la-KA-kha" }
    ],
    phrases: [
      { es: "Busco una camisa blanca.", fr: "Je cherche une chemise blanche.", ipa: "BUS-ko-U-na-ka-MI-sa-BLAN-ka" },
      { es: "Uso la talla M.", fr: "Je fais du M.", ipa: "U-so-la-TA-ya-E-me" },
      { es: "¿Puedo probármelo?", fr: "Je peux l'essayer ?", ipa: "PWE-do-pro-BAR-me-lo" },
      { es: "Me queda un poco pequeño.", fr: "C'est un peu petit pour moi.", ipa: "me-KE-da-un-PO-ko-pe-KEN-yo" },
      { es: "¿Aceptan tarjeta?", fr: "Vous acceptez la carte ?", ipa: "a-SEP-tan-tar-KHE-ta" }
    ],
    grammar: "Les verbes pronominaux espagnols se comportent comme en français : 'probarse' → 'me pruebo' (j'essaie), 'quedarse' → 'me quedo' (je garde). Les cabines d'essayage s'appellent 'los probadores'. Pour demander une autre couleur : '¿Lo tienen en...?' (Vous l'avez en... ?)",
    practice: [
      "Entraînez-vous au dialogue complet : entrer, chercher, demander la taille, essayer, payer.",
      "Comment diriez-vous que quelque chose est trop grand ? Trop petit ? Entraînez-vous aux deux.",
      "Mémorisez les couleurs du jour 6 et combinez-les : 'Busco un abrigo negro.'"
    ]
  },
  {
    day: 13,
    title: "Santé et corps",
    titleNative: "Salud y cuerpo",
    focus: "Vous n'espérez jamais en avoir besoin, mais en cas de problème de santé à l'étranger, pouvoir s'exprimer clairement est essentiel.",
    vocab: [
      { es: "la cabeza", fr: "la tête", ipa: "la-ka-BE-sa" },
      { es: "el estómago", fr: "l'estomac / le ventre", ipa: "el-es-TO-ma-go" },
      { es: "la espalda", fr: "le dos", ipa: "la-es-PAL-da" },
      { es: "la garganta", fr: "la gorge", ipa: "la-gar-GAN-ta" },
      { es: "la fiebre", fr: "la fièvre", ipa: "la-FYE-bre" },
      { es: "me duele el/la", fr: "j'ai mal au/à la", ipa: "me-DWE-le" },
      { es: "el médico", fr: "le médecin", ipa: "el-ME-di-ko" },
      { es: "la farmacia", fr: "la pharmacie", ipa: "la-far-MA-sya" },
      { es: "una receta", fr: "une ordonnance", ipa: "U-na-rre-SE-ta" },
      { es: "las urgencias", fr: "les urgences", ipa: "las-ur-KHEN-syas" }
    ],
    phrases: [
      { es: "Me duele la cabeza.", fr: "J'ai mal à la tête.", ipa: "me-DWE-le-la-ka-BE-sa" },
      { es: "Tengo fiebre.", fr: "J'ai de la fièvre.", ipa: "TEN-go-FYE-bre" },
      { es: "Me encuentro muy mal.", fr: "Je me sens très mal.", ipa: "me-en-KWEN-tro-MUY-MAL" },
      { es: "¿Dónde está la farmacia más cercana?", fr: "Où est la pharmacie la plus proche ?", ipa: "DON-de-es-TA-la-far-MA-sya-mas-ser-KA-na" },
      { es: "¡Llame al 112!", fr: "Appelez le 112 (urgences) !", ipa: "YA-me-al-SYEN-to-DO-se" }
    ],
    grammar: "Pour exprimer la douleur en espagnol : 'me duele + partie du corps' (singulier) ou 'me duelen + parties du corps' (pluriel). 'Me duele la cabeza' (j'ai mal à la tête), 'me duelen los pies' (j'ai mal aux pieds). Le sujet grammatical est la partie du corps, pas la personne. Le 112 est le numéro d'urgence en Espagne (et dans toute l'UE).",
    practice: [
      "Mémorisez : '—¿Qué le pasa? —Me duele la cabeza y tengo fiebre.'",
      "Identifiez les parties du corps en espagnol en les montrant du doigt en les disant à voix haute.",
      "Comment demanderiez-vous un analgésique à la pharmacie ? Entraînez-vous."
    ]
  },
  {
    day: 14,
    title: "Le travail et les professions",
    titleNative: "El trabajo y las profesiones",
    focus: "Parler de son travail et de sa profession est inévitable dans toute conversation. C'est souvent l'une des premières choses qu'on demande lors d'une rencontre.",
    vocab: [
      { es: "¿A qué te dedicas?", fr: "Qu'est-ce que tu fais dans la vie ?", ipa: "a-KE-te-de-DI-kas" },
      { es: "trabajo en", fr: "je travaille dans", ipa: "tra-BA-kho-en" },
      { es: "médico/a", fr: "médecin", ipa: "ME-di-ko" },
      { es: "ingeniero/a", fr: "ingénieur(e)", ipa: "in-khe-NYE-ro" },
      { es: "maestro/a", fr: "instituteur / enseignant(e)", ipa: "ma-ES-tro" },
      { es: "abogado/a", fr: "avocat(e)", ipa: "a-bo-GA-do" },
      { es: "informático/a", fr: "informaticien(ne)", ipa: "in-for-MA-ti-ko" },
      { es: "cocinero/a", fr: "cuisinier / chef", ipa: "ko-si-NE-ro" },
      { es: "por cuenta propia", fr: "à son compte / indépendant(e)", ipa: "por-KWEN-ta-PRO-pya" },
      { es: "la oficina", fr: "le bureau", ipa: "la-o-fi-SI-na" }
    ],
    phrases: [
      { es: "¿A qué te dedicas en la vida?", fr: "Qu'est-ce que vous faites dans la vie ?", ipa: "a-KE-te-de-DI-kas-en-la-BI-da" },
      { es: "Soy profesor/a en París.", fr: "Je suis enseignant(e) à Paris.", ipa: "SOY-pro-fe-SOR-en-pa-RIS" },
      { es: "Trabajo por cuenta propia.", fr: "Je travaille à mon compte.", ipa: "tra-BA-kho-por-KWEN-ta-PRO-pya" },
      { es: "Me gusta mucho mi trabajo.", fr: "J'aime beaucoup mon travail.", ipa: "me-GUS-ta-MU-cho-mi-tra-BA-kho" },
      { es: "Estoy buscando trabajo.", fr: "Je cherche un emploi.", ipa: "es-TOY-bus-KAN-do-tra-BA-kho" }
    ],
    grammar: "En espagnol, les professions n'ont pas d'article après 'ser' : 'Soy médico' (pas 'Soy un médico'). Avec un adjectif, l'article réapparaît : 'Es un buen médico'. De nombreuses professions ont une forme féminine : enfermero → enfermera, maestro → maestra, médico → médica (ou médico pour les deux).",
    practice: [
      "Dites votre profession en espagnol : 'Soy...' Si vous êtes étudiant(e) : 'Soy estudiante.'",
      "Entraînez-vous : '—¿A qué te dedicas? —Soy..., trabajo en...'",
      "Apprenez 5 professions pertinentes pour votre environnement et entraînez-vous avec."
    ]
  },
  {
    day: 15,
    title: "Loisirs et temps libre",
    titleNative: "Ocio y tiempo libre",
    focus: "Les loisirs sont un sujet naturel et personnel. Parler de ce que vous aimez faire crée des liens authentiques avec les locaux.",
    vocab: [
      { es: "leer", fr: "lire", ipa: "le-ER" },
      { es: "escuchar música", fr: "écouter de la musique", ipa: "es-ku-CHAR-MU-si-ka" },
      { es: "hacer deporte", fr: "faire du sport", ipa: "a-SER-de-POR-te" },
      { es: "viajar", fr: "voyager", ipa: "bya-KHAR" },
      { es: "cocinar", fr: "cuisiner", ipa: "ko-si-NAR" },
      { es: "pintar", fr: "peindre", ipa: "pin-TAR" },
      { es: "jugar a las cartas", fr: "jouer aux cartes", ipa: "khu-GAR-a-las-KAR-tas" },
      { es: "ver películas", fr: "regarder des films", ipa: "BER-pe-LI-ku-las" },
      { es: "pasear", fr: "se promener / se balader", ipa: "pa-se-AR" },
      { es: "el fin de semana", fr: "le week-end", ipa: "el-fin-de-se-MA-na" }
    ],
    phrases: [
      { es: "¿Qué te gusta hacer el fin de semana?", fr: "Qu'est-ce que tu aimes faire le week-end ?", ipa: "KE-te-GUS-ta-a-SER-el-fin-de-se-MA-na" },
      { es: "Me encanta leer novelas.", fr: "J'adore lire des romans.", ipa: "me-en-KAN-ta-le-ER-no-BE-las" },
      { es: "Monto en bici los domingos.", fr: "Je fais du vélo le dimanche.", ipa: "MON-to-en-BI-si-los-do-MIN-gos" },
      { es: "¿Podríamos ir al cine?", fr: "On pourrait aller au cinéma ?", ipa: "po-DRI-a-mos-ir-al-SI-ne" },
      { es: "No tengo tiempo estos días.", fr: "Je n'ai pas le temps ces jours-ci.", ipa: "no-TEN-go-TYEM-po-ES-tos-DI-as" }
    ],
    grammar: "Pour parler d'activités habituelles, utilisez le présent : 'Leo todos los días' (je lis tous les jours). Avec 'hacer' pour les sports : 'Hago yoga', 'Hago natación'. Avec 'jugar' pour les sports d'équipe : 'Juego al fútbol'. La distinction hacer/jugar est similaire au faire/jouer français.",
    practice: [
      "Listez vos trois activités favorites du week-end en espagnol.",
      "Invitez quelqu'un à une activité : '¿Podríamos...?' et entraînez-vous à accepter et à refuser.",
      "Décrivez votre semaine typique : 'El lunes yo..., el viernes yo...'"
    ]
  },
  {
    day: 16,
    title: "La ville",
    titleNative: "La ciudad",
    focus: "Vous orienter dans une ville espagnole ou latino-américaine vous donne de l'indépendance et vous permet de faire des plans avec les locaux.",
    vocab: [
      { es: "el ayuntamiento", fr: "la mairie", ipa: "el-a-yun-ta-MYEN-to" },
      { es: "la iglesia", fr: "l'église", ipa: "la-i-GLE-sya" },
      { es: "el museo", fr: "le musée", ipa: "el-mu-SE-o" },
      { es: "la biblioteca", fr: "la bibliothèque", ipa: "la-bi-blyo-TE-ka" },
      { es: "el parque", fr: "le parc", ipa: "el-PAR-ke" },
      { es: "correos", fr: "la poste", ipa: "ko-RRE-os" },
      { es: "la comisaría", fr: "le commissariat", ipa: "la-ko-mi-sa-RI-a" },
      { es: "el centro", fr: "le centre-ville", ipa: "el-SEN-tro" },
      { es: "las afueras", fr: "la banlieue / la périphérie", ipa: "las-a-FWE-ras" },
      { es: "la plaza", fr: "la place (publique)", ipa: "la-PLA-sa" }
    ],
    phrases: [
      { es: "¿Dónde está el Museo del Prado?", fr: "Où se trouve le musée du Prado ?", ipa: "DON-de-es-TA-el-mu-SE-o-del-PRA-do" },
      { es: "¿Está lejos de aquí?", fr: "C'est loin d'ici ?", ipa: "es-TA-LE-khos-de-a-KI" },
      { es: "Busco correos.", fr: "Je cherche la poste.", ipa: "BUS-ko-ko-RRE-os" },
      { es: "El mercado está en la plaza principal.", fr: "Le marché est sur la place principale.", ipa: "el-mer-KA-do-es-TA-en-la-PLA-sa-prin-si-PAL" },
      { es: "¡La ciudad es preciosa!", fr: "La ville est magnifique !", ipa: "la-syu-DAD-es-pre-SYO-sa" }
    ],
    grammar: "'Estar' vs 'ser' : les deux verbes signifient 'être' mais s'utilisent différemment. 'Estar' pour les états et les localisations : '¿Dónde está el museo?' (où est le musée ?). 'Ser' pour les caractéristiques permanentes : 'La ciudad es grande' (la ville est grande). C'est LA grande difficulté de l'espagnol pour les francophones.",
    practice: [
      "Décrivez la ville où vous habitez avec 5 mots du vocabulaire d'aujourd'hui.",
      "Entraînez-vous à indiquer un chemin depuis chez vous jusqu'à un lieu important.",
      "Comment demandez-vous où sont les toilettes dans un musée ? Construisez la phrase."
    ]
  },
  {
    day: 17,
    title: "À la maison",
    titleNative: "En casa",
    focus: "Le vocabulaire de la maison est fondamental pour décrire où vous vivez, comprendre les annonces immobilières et parler avec des hôtes si vous logez chez quelqu'un.",
    vocab: [
      { es: "el salón", fr: "le salon", ipa: "el-sa-LON" },
      { es: "la cocina", fr: "la cuisine", ipa: "la-ko-SI-na" },
      { es: "la habitación", fr: "la chambre", ipa: "la-a-bi-ta-SYON" },
      { es: "el baño", fr: "la salle de bains", ipa: "el-BA-nyo" },
      { es: "el jardín", fr: "le jardin", ipa: "el-khar-DIN" },
      { es: "el balcón", fr: "le balcon", ipa: "el-bal-KON" },
      { es: "los muebles", fr: "les meubles", ipa: "los-MWE-bles" },
      { es: "el alquiler", fr: "le loyer", ipa: "el-al-ki-LER" },
      { es: "los vecinos", fr: "les voisins", ipa: "los-be-SI-nos" },
      { es: "mudarse", fr: "déménager", ipa: "mu-DAR-se" }
    ],
    phrases: [
      { es: "Vivo en un piso.", fr: "J'habite dans un appartement.", ipa: "BI-bo-en-un-PI-so" },
      { es: "Mi piso tiene dos habitaciones.", fr: "Mon appartement a deux chambres.", ipa: "mi-PI-so-TYE-ne-dos-a-bi-ta-SYONES" },
      { es: "El alquiler es caro en Madrid.", fr: "Le loyer est cher à Madrid.", ipa: "el-al-ki-LER-es-KA-ro-en-ma-DRID" },
      { es: "¡Estás en tu casa!", fr: "Fais comme chez toi !", ipa: "es-TAS-en-tu-KA-sa" },
      { es: "El baño está en el primer piso.", fr: "La salle de bains est au premier étage.", ipa: "el-BA-nyo-es-TA-en-el-pri-MER-PI-so" }
    ],
    grammar: "En Espagne, 'el piso' désigne l'appartement, 'la casa' peut être une maison ou un appartement. 'El baño' c'est la salle de bains et les toilettes. Le système d'étages : 'la planta baja' est le rez-de-chaussée, 'el primer piso' est le premier étage (= deuxième étage français). Mémorisez '¡Estás en tu casa !' — une expression très chaleureuse d'accueil.",
    practice: [
      "Décrivez votre logement actuel avec 5 mots du vocabulaire d'aujourd'hui.",
      "Comment diriez-vous que votre appartement a un salon, une cuisine, deux chambres et une salle de bains ?",
      "Mémorisez '¡Estás en tu casa !' — vous l'utiliserez quand vous recevrez des invités."
    ]
  },
  {
    day: 18,
    title: "Technologie et communication",
    titleNative: "Tecnología y comunicación",
    focus: "Dans le monde moderne, la technologie fait partie de toute conversation. Savoir parler de téléphones, d'internet et de réseaux sociaux en espagnol est essentiel pour communiquer avec les jeunes hispanophones.",
    vocab: [
      { es: "el móvil / el celular", fr: "le portable / le téléphone mobile", ipa: "el-MO-bil / el-se-lu-LAR" },
      { es: "el cargador", fr: "le chargeur", ipa: "el-kar-ga-DOR" },
      { es: "la red / la señal", fr: "le réseau / le signal", ipa: "la-RRED / la-se-NYAL" },
      { es: "una aplicación", fr: "une application", ipa: "U-na-a-pli-ka-SYON" },
      { es: "enviar un mensaje", fr: "envoyer un message", ipa: "en-byAR-un-men-SA-khe" },
      { es: "la contraseña", fr: "le mot de passe", ipa: "la-kon-tra-SE-nya" },
      { es: "la conexión", fr: "la connexion", ipa: "la-ko-nek-SYON" },
      { es: "descargar", fr: "télécharger", ipa: "des-kar-GAR" },
      { es: "las redes sociales", fr: "les réseaux sociaux", ipa: "las-RRE-des-so-SYA-les" },
      { es: "cargar la batería", fr: "recharger la batterie", ipa: "kar-GAR-la-ba-te-RI-a" }
    ],
    phrases: [
      { es: "¿Hay wifi aquí?", fr: "Il y a le wifi ici ?", ipa: "AY-WI-fi-a-KI" },
      { es: "Mi teléfono se ha quedado sin batería.", fr: "Mon téléphone est déchargé.", ipa: "mi-te-LE-fo-no-se-a-ke-DA-do-sin-ba-te-RI-a" },
      { es: "¿Puedes mandarme el enlace?", fr: "Tu peux m'envoyer le lien ?", ipa: "PWE-des-man-DAR-me-el-en-LA-se" },
      { es: "No tengo cobertura aquí.", fr: "Je n'ai pas de réseau ici.", ipa: "no-TEN-go-ko-ber-TU-ra-a-KI" },
      { es: "¿Cuál es tu número?", fr: "C'est quoi ton numéro ?", ipa: "KWAL-es-tu-NU-me-ro" }
    ],
    grammar: "En espagnol, 'el móvil' s'utilise en Espagne, 'el celular' en Amérique latine. Les anglicismes technologiques sont nombreux : 'el selfie', 'el streaming', 'el podcast'. La Real Academia Española propose des alternatives : 'el correo electrónico' pour email, 'la nube' pour le cloud — mais dans la pratique, les anglicismes dominent.",
    practice: [
      "Comment demanderiez-vous le mot de passe wifi à quelqu'un ? Entraînez-vous.",
      "Décrivez votre routine avec le téléphone le matin en espagnol.",
      "Apprenez à donner votre numéro de téléphone en espagnol, deux chiffres par deux chiffres."
    ]
  },
  {
    day: 19,
    title: "Voyages et tourisme",
    titleNative: "Viajes y turismo",
    focus: "Voyager est l'une des premières raisons d'apprendre l'espagnol. Ce vocabulaire vous aidera dans les aéroports, musées, visites guidées et quand vous explorez les destinations hispanophones.",
    vocab: [
      { es: "el aeropuerto", fr: "l'aéroport", ipa: "el-a-e-ro-PWER-to" },
      { es: "el pasaporte", fr: "le passeport", ipa: "el-pa-sa-POR-te" },
      { es: "la maleta", fr: "la valise", ipa: "la-ma-LE-ta" },
      { es: "la oficina de turismo", fr: "l'office de tourisme", ipa: "la-o-fi-SI-na-de-tu-RIS-mo" },
      { es: "una guía turística", fr: "un guide touristique", ipa: "U-na-GI-a-tu-RIS-ti-ka" },
      { es: "una entrada", fr: "un billet / un ticket d'entrée", ipa: "U-na-en-TRA-da" },
      { es: "una excursión", fr: "une excursion", ipa: "U-na-eks-kur-SYON" },
      { es: "el patrimonio", fr: "le patrimoine", ipa: "el-pa-tri-MO-nyo" },
      { es: "perderse", fr: "se perdre", ipa: "per-DER-se" },
      { es: "un recuerdo", fr: "un souvenir", ipa: "un-rre-KWER-do" }
    ],
    phrases: [
      { es: "Estoy de vacaciones.", fr: "Je suis en vacances.", ipa: "es-TOY-de-ba-ka-SYO-nes" },
      { es: "¿Dónde puedo comprar entradas?", fr: "Où puis-je acheter des billets ?", ipa: "DON-de-PWE-do-kom-PRAR-en-TRA-das" },
      { es: "Estoy perdido/a. ¿Puede ayudarme?", fr: "Je suis perdu(e). Vous pouvez m'aider ?", ipa: "es-TOY-per-DI-do. PWE-de-a-yu-DAR-me" },
      { es: "¡Es imperdible!", fr: "C'est à ne pas manquer !", ipa: "es-im-per-DI-ble" },
      { es: "¿Podemos visitar...?", fr: "On peut visiter... ?", ipa: "po-DE-mos-bi-si-TAR" }
    ],
    grammar: "'Poder' (pouvoir) + infinitif est la structure pour demander la permission ou parler de possibilités : '¿Podemos...?' (On peut... ?), '¿Puedo...?' (Je peux... ?). C'est un verbe à diphtongue : 'puedo, puedes, puede, podemos, podéis, pueden'. Ces changements o→ue sont très courants en espagnol.",
    practice: [
      "Planifiez une journée touristique à Madrid en espagnol : que visiter, comment y aller, que manger.",
      "Entraînez-vous à être perdu(e) : '—¡Disculpe ! Estoy perdido/a. ¿Dónde está...?'",
      "Quels sont les trois endroits que vous voulez le plus visiter dans un pays hispanophone ? Dites-le en espagnol."
    ]
  },
  {
    day: 20,
    title: "Émotions et sentiments",
    titleNative: "Emociones y sentimientos",
    focus: "Exprimer ses émotions va bien au-delà de 'bien' ou 'mal'. Les hispanophones sont très expressifs — apprendre ce vocabulaire vous permettra des conversations plus profondes et authentiques.",
    vocab: [
      { es: "feliz / contento/a", fr: "heureux / heureuse / content(e)", ipa: "fe-LIS / kon-TEN-to" },
      { es: "triste", fr: "triste", ipa: "TRIS-te" },
      { es: "cansado/a", fr: "fatigué(e)", ipa: "kan-SA-do" },
      { es: "estresado/a", fr: "stressé(e)", ipa: "es-tre-SA-do" },
      { es: "sorprendido/a", fr: "surpris(e)", ipa: "sor-pren-DI-do" },
      { es: "enfadado/a", fr: "énervé(e) / en colère", ipa: "en-fa-DA-do" },
      { es: "enamorado/a", fr: "amoureux / amoureuse", ipa: "e-na-mo-RA-do" },
      { es: "preocupado/a", fr: "inquiet / inquiète", ipa: "pre-o-ku-PA-do" },
      { es: "orgulloso/a", fr: "fier / fière", ipa: "or-gu-YO-so" },
      { es: "me da igual", fr: "ça m'est égal", ipa: "me-da-i-GWAL" }
    ],
    phrases: [
      { es: "Hoy me siento muy feliz.", fr: "Je me sens très heureux/heureuse aujourd'hui.", ipa: "OY-me-SYEN-to-MUY-fe-LIS" },
      { es: "Estoy un poco estresado/a por el trabajo.", fr: "Je suis un peu stressé(e) par le travail.", ipa: "es-TOY-un-PO-ko-es-tre-SA-do-por-el-tra-BA-kho" },
      { es: "¡Estoy agotado/a!", fr: "Je suis épuisé(e) !", ipa: "es-TOY-a-go-TA-do" },
      { es: "Eso me hace muy feliz.", fr: "Ça me rend très heureux.", ipa: "E-so-me-A-se-MUY-fe-LIS" },
      { es: "¡Estoy muy orgulloso/a de ti!", fr: "Je suis très fier/fière de toi !", ipa: "es-TOY-MUY-or-gu-YO-so-de-TI" }
    ],
    grammar: "'Sentirse' et 'estar' s'utilisent pour les émotions : 'Me siento triste' ou 'Estoy triste'. 'Ser' (caractère permanent) vs 'estar' (état momentané) : 'Él es nervioso' (il est nerveux de nature) vs 'Él está nervioso' (il est nerveux en ce moment). Cette distinction ser/estar est fondamentale en espagnol.",
    practice: [
      "Comment vous sentez-vous maintenant ? Décrivez votre état avec au moins deux émotions en espagnol.",
      "Entraînez-vous à exprimer des émotions liées à des situations : 'Cuando viajo, me siento...'",
      "Regardez une série espagnole ou latino-américaine et identifiez les émotions exprimées en espagnol."
    ]
  },
  {
    day: 21,
    title: "La nature",
    titleNative: "La naturaleza",
    focus: "L'Espagne et l'Amérique latine offrent des paysages extraordinairement variés : la Patagonie, l'Amazonie, les Pyrénées, les plages de la Costa del Sol. Ce vocabulaire enrichira vos descriptions.",
    vocab: [
      { es: "la montaña", fr: "la montagne", ipa: "la-mon-TA-nya" },
      { es: "el mar", fr: "la mer", ipa: "el-MAR" },
      { es: "el bosque", fr: "la forêt", ipa: "el-BOS-ke" },
      { es: "el río", fr: "le fleuve / la rivière", ipa: "el-RRI-o" },
      { es: "el lago", fr: "le lac", ipa: "el-LA-go" },
      { es: "la playa", fr: "la plage", ipa: "la-PLA-ya" },
      { es: "el campo", fr: "la campagne", ipa: "el-KAM-po" },
      { es: "un paisaje", fr: "un paysage", ipa: "un-pa-i-SA-khe" },
      { es: "el atardecer", fr: "le coucher de soleil", ipa: "el-a-tar-de-SER" },
      { es: "una excursión de senderismo", fr: "une randonnée", ipa: "U-na-eks-kur-SYON-de-sen-de-RIS-mo" }
    ],
    phrases: [
      { es: "Me encanta pasear por el bosque.", fr: "J'adore me promener en forêt.", ipa: "me-en-KAN-ta-pa-se-AR-por-el-BOS-ke" },
      { es: "¡La vista de la montaña es magnífica!", fr: "La vue sur la montagne est magnifique !", ipa: "la-BIS-ta-de-la-mon-TA-nya-es-mag-NI-fi-ka" },
      { es: "¿Vamos a la playa este fin de semana?", fr: "On va à la plage ce week-end ?", ipa: "BA-mos-a-la-PLA-ya-ES-te-fin-de-se-MA-na" },
      { es: "El atardecer fue impresionante.", fr: "Le coucher de soleil était extraordinaire.", ipa: "el-a-tar-de-SER-FWE-im-pre-syo-NAN-te" },
      { es: "Prefiero el mar a la montaña.", fr: "Je préfère la mer à la montagne.", ipa: "pre-FYE-ro-el-MAR-a-la-mon-TA-nya" }
    ],
    grammar: "'Preferir' (préférer) est un verbe à diphtongue : 'prefiero' (je préfère) → 'preferimos' (nous préférons). La structure est 'preferir A a B' : 'Prefiero el mar a la montaña'. Très similaire au 'préférer A à B' français. Ces verbes à diphtongue (o→ue, e→ie) sont très courants — mémorisez le modèle.",
    practice: [
      "Vous préférez la mer ou la montagne ? La ville ou la campagne ? Dites-le en espagnol.",
      "Décrivez le plus beau paysage que vous ayez jamais vu, en espagnol.",
      "Planifiez une activité nature en espagnol : '—¡Podríamos hacer una excursión este fin de semana !'"
    ]
  },
  {
    day: 22,
    title: "À la banque et l'argent",
    titleNative: "En el banco y el dinero",
    focus: "Gérer l'argent dans un pays hispanophone requiert un vocabulaire spécifique. Que vous soyez en Espagne (euro) ou en Amérique latine (monnaies locales), ces termes vous seront utiles.",
    vocab: [
      { es: "un billete", fr: "un billet (de banque)", ipa: "un-bi-YE-te" },
      { es: "una moneda", fr: "une pièce de monnaie", ipa: "U-na-mo-NE-da" },
      { es: "una cuenta bancaria", fr: "un compte bancaire", ipa: "U-na-KWEN-ta-ban-KA-rya" },
      { es: "una transferencia", fr: "un virement", ipa: "U-na-trans-fe-REN-sya" },
      { es: "un cajero automático", fr: "un distributeur / un DAB", ipa: "un-ka-KHE-ro-aw-to-MA-ti-ko" },
      { es: "el tipo de cambio", fr: "le taux de change", ipa: "el-TI-po-de-KAM-byo" },
      { es: "cambiar dinero", fr: "changer de l'argent", ipa: "kam-BYAR-di-NE-ro" },
      { es: "en efectivo", fr: "en espèces", ipa: "en-e-fek-TI-bo" },
      { es: "con tarjeta", fr: "par carte", ipa: "kon-tar-KHE-ta" },
      { es: "el recibo", fr: "le reçu / le ticket de caisse", ipa: "el-rre-SI-bo" }
    ],
    phrases: [
      { es: "¿Dónde está el cajero más cercano?", fr: "Où est le distributeur le plus proche ?", ipa: "DON-de-es-TA-el-ka-KHE-ro-mas-ser-KA-no" },
      { es: "Quisiera cambiar euros.", fr: "Je voudrais changer des euros.", ipa: "ki-SYEH-ra-kam-BYAR-EU-ros" },
      { es: "¿Aceptan cheques?", fr: "Vous acceptez les chèques ?", ipa: "a-SEP-tan-CHE-kes" },
      { es: "¿Puedo pagar con tarjeta?", fr: "Je peux payer par carte ?", ipa: "PWE-do-pa-GAR-kon-tar-KHE-ta" },
      { es: "Deme un recibo, por favor.", fr: "Donnez-moi un reçu, s'il vous plaît.", ipa: "DE-me-un-rre-SI-bo, por-fa-VOR" }
    ],
    grammar: "Les grands nombres en espagnol : 'mil' (mille), 'diez mil' (dix mille), 'cien mil' (cent mille), 'un millón' (un million). Pour les prix : '12,50 €' se dit 'doce euros con cincuenta'. Note importante : en espagnol, la virgule et le point sont utilisés de façon inverse selon les pays — en Espagne comme en France, on utilise la virgule comme séparateur décimal.",
    practice: [
      "Entraînez-vous à dire des prix en espagnol : 5€, 12,50€, 99€, 200€.",
      "Comment diriez-vous que vous avez besoin de retirer de l'argent ? Entraînez-vous.",
      "Simulez une situation à la banque : '—Buenos días, quisiera...' et complétez avec une opération."
    ]
  },
  {
    day: 23,
    title: "À la pharmacie",
    titleNative: "En la farmacia",
    focus: "La pharmacie est le premier recours pour les problèmes de santé mineurs. Les pharmaciens hispanophones sont très compétents et donnent souvent des conseils médicaux.",
    vocab: [
      { es: "un medicamento", fr: "un médicament", ipa: "un-me-di-ka-MEN-to" },
      { es: "un comprimido", fr: "un comprimé / une pastille", ipa: "un-kom-pri-MI-do" },
      { es: "un jarabe", fr: "un sirop", ipa: "un-kha-RA-be" },
      { es: "una crema", fr: "une crème", ipa: "U-na-KRE-ma" },
      { es: "una tirita", fr: "un pansement / un sparadrap", ipa: "U-na-ti-RI-ta" },
      { es: "el dolor", fr: "la douleur", ipa: "el-do-LOR" },
      { es: "alérgico/a a", fr: "allergique à", ipa: "a-LER-khi-ko-a" },
      { es: "con receta", fr: "sur ordonnance", ipa: "kon-rre-SE-ta" },
      { es: "sin receta", fr: "sans ordonnance", ipa: "sin-rre-SE-ta" },
      { es: "la dosis", fr: "la dose / la posologie", ipa: "la-DO-sis" }
    ],
    phrases: [
      { es: "Necesito algo para la tos.", fr: "J'ai besoin de quelque chose contre la toux.", ipa: "ne-se-SI-to-AL-go-PA-ra-la-TOS" },
      { es: "Soy alérgico/a a la penicilina.", fr: "Je suis allergique à la pénicilline.", ipa: "SOY-a-LER-khi-ko-a-la-pe-ni-si-LI-na" },
      { es: "¿Cuál es la dosis?", fr: "Quelle est la posologie ?", ipa: "KWAL-es-la-DO-sis" },
      { es: "¿Se puede comprar sin receta?", fr: "Ça s'achète sans ordonnance ?", ipa: "se-PWE-de-kom-PRAR-sin-rre-SE-ta" },
      { es: "¿Cuánto es?", fr: "Combien c'est ?", ipa: "KWAN-to-ES" }
    ],
    grammar: "Le verbe 'necesitar' (avoir besoin de) : 'Necesito + sustantivo o infinitivo'. 'Necesito un medicamento' (j'ai besoin d'un médicament), 'Necesito dormir' (j'ai besoin de dormir). Plus direct que 'j'ai besoin de' mais équivalent. En Espagne, les pharmacies sont reconnaissables à leur croix verte lumineuse — comme en France.",
    practice: [
      "Entraînez-vous à décrire trois symptômes en espagnol : 'Me duele...', 'Tengo fiebre...', etc.",
      "Comment demanderiez-vous un analgésique sans ordonnance ? Entraînez-vous au dialogue complet.",
      "Apprenez à dire vos allergies en espagnol — c'est une information vitale à l'étranger."
    ]
  },
  {
    day: 24,
    title: "Culture et art",
    titleNative: "Cultura y arte",
    focus: "L'Espagne et l'Amérique latine ont produit certains des artistes, écrivains et réalisateurs les plus importants du monde. Parler d'art en espagnol vous ouvre des conversations passionnantes.",
    vocab: [
      { es: "un cuadro", fr: "un tableau", ipa: "un-KWA-dro" },
      { es: "una escultura", fr: "une sculpture", ipa: "U-na-es-kul-TU-ra" },
      { es: "una obra maestra", fr: "un chef-d'œuvre", ipa: "U-na-O-bra-ma-ES-tra" },
      { es: "el surrealismo", fr: "le surréalisme", ipa: "el-su-rre-a-LIS-mo" },
      { es: "una exposición", fr: "une exposition", ipa: "U-na-eks-po-si-SYON" },
      { es: "el cine", fr: "le cinéma", ipa: "el-SI-ne" },
      { es: "una novela", fr: "un roman", ipa: "U-na-no-BE-la" },
      { es: "la literatura", fr: "la littérature", ipa: "la-li-te-ra-TU-ra" },
      { es: "un artista", fr: "un(e) artiste", ipa: "un-ar-TIS-ta" },
      { es: "me llegó al alma", fr: "ça m'a touché(e) profondément", ipa: "me-ye-GO-al-AL-ma" }
    ],
    phrases: [
      { es: "Me gustaría visitar el Museo del Prado.", fr: "J'aimerais visiter le musée du Prado.", ipa: "me-gus-ta-RI-a-bi-si-TAR-el-mu-SE-o-del-PRA-do" },
      { es: "Este cuadro es absolutamente magnífico.", fr: "Ce tableau est absolument magnifique.", ipa: "ES-te-KWA-dro-es-ab-so-lu-ta-MEN-te-mag-NI-fi-ko" },
      { es: "Soy fan del cine latinoamericano.", fr: "Je suis fan du cinéma latino-américain.", ipa: "SOY-fan-del-SI-ne-la-ti-no-a-me-ri-KA-no" },
      { es: "Me llegó al alma.", fr: "Ça m'a profondément touché.", ipa: "me-ye-GO-al-AL-ma" },
      { es: "¿Conoces a este artista?", fr: "Tu connais cet artiste ?", ipa: "ko-NO-ses-a-ES-te-ar-TIS-ta" }
    ],
    grammar: "'Conocer' (connaître une personne ou un lieu) vs 'saber' (savoir un fait) — exactement comme 'connaître' vs 'savoir' en français : '¿Conoces a Dalí ?' (Tu connais Dalí ?) vs '¿Sabes pintar ?' (Tu sais peindre ?). La préposition 'a' devant un complément d'objet humain est obligatoire en espagnol : 'Conozco a María'.",
    practice: [
      "Décrivez une œuvre d'art, un film ou un livre qui vous a marqué, en espagnol.",
      "Entraînez-vous : '—¿Conoces a...? —Sí, lo/la conozco. / No, no lo/la conozco.'",
      "Renseignez-vous sur un artiste espagnol (Dalí, Picasso, Buñuel) et préparez 3 phrases sur son œuvre."
    ]
  },
  {
    day: 25,
    title: "Sport et exercice",
    titleNative: "Deporte y ejercicio",
    focus: "Le sport est un sujet de conversation universel et un excellent point de connexion avec les hispanophones — surtout le football, qui est une véritable religion en Espagne et en Amérique latine.",
    vocab: [
      { es: "el fútbol", fr: "le football", ipa: "el-FUT-bol" },
      { es: "el ciclismo", fr: "le cyclisme", ipa: "el-si-KLIS-mo" },
      { es: "la natación", fr: "la natation", ipa: "la-na-ta-SYON" },
      { es: "el tenis", fr: "le tennis", ipa: "el-TE-nis" },
      { es: "el gimnasio", fr: "la salle de sport", ipa: "el-khim-NA-syo" },
      { es: "entrenarse", fr: "s'entraîner", ipa: "en-tre-NAR-se" },
      { es: "ganar", fr: "gagner", ipa: "ga-NAR" },
      { es: "perder", fr: "perdre", ipa: "per-DER" },
      { es: "un partido", fr: "un match", ipa: "un-par-TI-do" },
      { es: "el equipo", fr: "l'équipe", ipa: "el-e-KI-po" }
    ],
    phrases: [
      { es: "¿Haces deporte?", fr: "Tu fais du sport ?", ipa: "A-ses-de-POR-te" },
      { es: "Voy al gimnasio tres veces por semana.", fr: "Je vais à la salle trois fois par semaine.", ipa: "BOY-al-khim-NA-syo-TRES-BE-ses-por-se-MA-na" },
      { es: "¿Viste el partido de ayer?", fr: "Tu as regardé le match d'hier ?", ipa: "BIS-te-el-par-TI-do-de-a-YER" },
      { es: "¡Mi equipo ganó!", fr: "Mon équipe a gagné !", ipa: "mi-e-KI-po-ga-NO" },
      { es: "La Vuelta a España es increíble.", fr: "La Vuelta (tour d'Espagne) est incroyable.", ipa: "la-BWEL-ta-a-es-PA-nya-es-in-kre-I-ble" }
    ],
    grammar: "Pour parler de sport habituel : 'hacer + deporte/actividad' pour les sports individuels : 'Hago yoga', 'Hago natación'. Pour les sports d'équipe : 'jugar al + deporte' : 'Juego al fútbol', 'Juego al tenis'. Identique à la distinction français 'faire du sport' / 'jouer à'.",
    practice: [
      "Quels sports pratiquez-vous ? Dites-le en espagnol : 'Hago...' ou 'Juego al...'",
      "Entraînez-vous à parler d'un match récent ou de votre équipe favorite.",
      "Comment inviteriez-vous quelqu'un à faire du sport ensemble ? Créez la proposition en espagnol."
    ]
  },
  {
    day: 26,
    title: "La musique",
    titleNative: "La música",
    focus: "La musique hispanophone est d'une richesse extraordinaire : flamenco, salsa, reggaeton, tango, bossa nova... Connaître le vocabulaire musical vous permettra de vous connecter culturellement.",
    vocab: [
      { es: "una canción", fr: "une chanson", ipa: "U-na-kan-SYON" },
      { es: "un cantante", fr: "un(e) chanteur/chanteuse", ipa: "un-kan-TAN-te" },
      { es: "tocar un instrumento", fr: "jouer d'un instrument", ipa: "to-KAR-un-ins-tru-MEN-to" },
      { es: "la guitarra", fr: "la guitare", ipa: "la-gi-TA-rra" },
      { es: "el piano", fr: "le piano", ipa: "el-PYA-no" },
      { es: "un concierto", fr: "un concert", ipa: "un-kon-SYER-to" },
      { es: "una lista de reproducción", fr: "une playlist", ipa: "U-na-LIS-ta-de-rre-pro-duk-SYON" },
      { es: "el ritmo", fr: "le rythme", ipa: "el-RRIT-mo" },
      { es: "la letra", fr: "les paroles (d'une chanson)", ipa: "la-LE-tra" },
      { es: "tener buen oído", fr: "avoir l'oreille musicale", ipa: "te-NER-BWEN-o-I-do" }
    ],
    phrases: [
      { es: "¿Qué tipo de música escuchas?", fr: "Quel genre de musique tu écoutes ?", ipa: "KE-TI-po-de-MU-si-ka-es-KU-chas" },
      { es: "Me encanta el flamenco.", fr: "J'adore le flamenco.", ipa: "me-en-KAN-ta-el-fla-MEN-ko" },
      { es: "¿Tocas algún instrumento?", fr: "Tu joues d'un instrument ?", ipa: "TO-kas-al-GUN-ins-tru-MEN-to" },
      { es: "¿Vamos a un concierto esta noche?", fr: "On va à un concert ce soir ?", ipa: "BA-mos-a-un-kon-SYER-to-ES-ta-NO-che" },
      { es: "Esa canción es preciosa.", fr: "Cette chanson est magnifique.", ipa: "E-sa-kan-SYON-es-pre-SYO-sa" }
    ],
    grammar: "Pour parler d'instruments : 'tocar + el/la/los/las + instrument' : 'Toco la guitarra', 'Toco el piano'. En espagnol, c'est 'tocar' (toucher/jouer) et non 'jouer de' comme en français. Pour les genres musicaux, utilisez le même mot : 'Escucho salsa', 'Me gusta el reggaeton'.",
    practice: [
      "Quelle musique écoutez-vous ? Dites votre genre et artiste préféré en espagnol.",
      "Jouez-vous d'un instrument ? Entraînez-vous : 'Toco...' ou 'No sé tocar ningún instrumento.'",
      "Écoutez une chanson en espagnol (Rosalía, Shakira, Alejandro Sanz) et essayez d'identifier des mots que vous connaissez."
    ]
  },
  {
    day: 27,
    title: "Le passé : pretérito indefinido",
    titleNative: "El pasado: pretérito indefinido",
    focus: "Le 'pretérito indefinido' est le temps du passé le plus utilisé en espagnol pour raconter des événements. Il correspond à la fois au passé composé et au passé simple français.",
    vocab: [
      { es: "comí", fr: "j'ai mangé / je mangeai", ipa: "ko-MI" },
      { es: "bebí", fr: "j'ai bu / je bus", ipa: "be-BI" },
      { es: "vi", fr: "j'ai vu / je vis", ipa: "BI" },
      { es: "fui", fr: "je suis allé(e) / j'ai été", ipa: "FWI" },
      { es: "hice", fr: "j'ai fait / je fis", ipa: "I-se" },
      { es: "dije", fr: "j'ai dit / je dis", ipa: "DI-khe" },
      { es: "ayer", fr: "hier", ipa: "a-YER" },
      { es: "la semana pasada", fr: "la semaine dernière", ipa: "la-se-MA-na-pa-SA-da" },
      { es: "hace tres días", fr: "il y a trois jours", ipa: "A-se-TRES-DI-as" },
      { es: "ya", fr: "déjà", ipa: "YA" }
    ],
    phrases: [
      { es: "Ayer comí una paella deliciosa.", fr: "Hier, j'ai mangé une paella délicieuse.", ipa: "a-YER-ko-MI-U-na-pa-E-ya-de-li-SYO-sa" },
      { es: "La semana pasada fui a Barcelona.", fr: "La semaine dernière, je suis allé(e) à Barcelone.", ipa: "la-se-MA-na-pa-SA-da-FWI-a-bar-se-LO-na" },
      { es: "¿Ya visitaste el Sagrada Familia?", fr: "Tu as déjà visité la Sagrada Familia ?", ipa: "YA-bi-si-TAS-te-el-sa-GRA-da-fa-MI-lya" },
      { es: "Vi una película buenísima anoche.", fr: "J'ai vu un excellent film hier soir.", ipa: "BI-U-na-pe-LI-ku-la-bwe-NI-si-ma-a-NO-che" },
      { es: "¿Qué hiciste este fin de semana?", fr: "Qu'est-ce que tu as fait ce week-end ?", ipa: "KE-i-SIS-te-ES-te-fin-de-se-MA-na" }
    ],
    grammar: "Le 'pretérito indefinido' des verbes réguliers : -AR → -é, -aste, -ó, -amos, -asteis, -aron (hablar → hablé). -ER/-IR → -í, -iste, -ió, -imos, -isteis, -ieron (comer → comí). Mais les irréguliers sont nombreux : ser/ir → fui, fui, fue... ; hacer → hice, hiciste, hizo... Contrairement au français, il n'y a qu'un seul temps pour le passé conversationnel.",
    practice: [
      "Décrivez ce que vous avez fait hier avec 5 verbes au pretérito indefinido.",
      "Entraînez-vous : '—¿Qué hiciste ayer? —Ayer...' (avec au moins 3 activités).",
      "Mémorisez les 5 irréguliers les plus importants : fui (aller/être), hice (faire), vine (venir), puse (mettre), dije (dire)."
    ]
  },
  {
    day: 28,
    title: "Expressions idiomatiques",
    titleNative: "Expresiones idiomáticas",
    focus: "Les expressions idiomatiques sont celles qui vous feront vraiment ressembler à un natif. Les hispanophones les utilisent constamment — les apprendre vous donnera un avantage énorme.",
    vocab: [
      { es: "no hay mal que por bien no venga", fr: "à quelque chose malheur est bon", ipa: "no-AY-mal-ke-por-BYEN-no-BEN-ga" },
      { es: "costar un ojo de la cara", fr: "coûter les yeux de la tête", ipa: "kos-TAR-un-O-kho-de-la-KA-ra" },
      { es: "tener mala leche", fr: "être de mauvaise humeur / avoir la poisse (Espagne)", ipa: "te-NER-MA-la-LE-che" },
      { es: "meter la pata", fr: "mettre les pieds dans le plat / gaffer", ipa: "me-TER-la-PA-ta" },
      { es: "estar en las nubes", fr: "être dans les nuages / rêvasser", ipa: "es-TAR-en-las-NU-bes" },
      { es: "no pegar ojo", fr: "ne pas fermer l'œil", ipa: "no-pe-GAR-O-kho" },
      { es: "tomar el pelo", fr: "se moquer / faire marcher quelqu'un", ipa: "to-MAR-el-PE-lo" },
      { es: "así es la vida", fr: "c'est la vie", ipa: "a-SI-es-la-BI-da" },
      { es: "ponerse las pilas", fr: "se mettre au travail / se secouer", ipa: "po-NER-se-las-PI-las" },
      { es: "en un abrir y cerrar de ojos", fr: "en un clin d'œil", ipa: "en-un-a-BRIR-i-se-RRAR-de-O-khos" }
    ],
    phrases: [
      { es: "¡Me estás tomando el pelo!", fr: "Tu te moques de moi !", ipa: "me-es-TAS-to-MAN-do-el-PE-lo" },
      { es: "Ese restaurante cuesta un ojo de la cara.", fr: "Ce restaurant coûte les yeux de la tête.", ipa: "E-se-rres-taw-RAN-te-KWES-ta-un-O-kho-de-la-KA-ra" },
      { es: "Anoche no pegué ojo.", fr: "Hier soir, je n'ai pas fermé l'œil.", ipa: "a-NO-che-no-pe-GE-O-kho" },
      { es: "¡Métete las pilas !", fr: "Secoue-toi ! / Mets-toi au travail !", ipa: "ME-te-te-las-PI-las" },
      { es: "¡Así es la vida!", fr: "C'est la vie !", ipa: "a-SI-es-la-BI-da" }
    ],
    grammar: "Les expressions idiomatiques varient beaucoup selon les pays hispaniques. 'Tener mala leche' est typiquement espagnol (ibérique) — en Amérique latine, on dirait plutôt 'estar de mal humor'. 'Ponerse las pilas' (litt. mettre ses piles) est compris partout. Apprenez d'abord les universelles, puis celles du pays qui vous intéresse.",
    practice: [
      "Choisissez 3 expressions d'aujourd'hui et utilisez-les dans des phrases originales sur votre vie.",
      "Lesquelles ont un équivalent direct en français ? Lesquelles sont totalement différentes ?",
      "Entraînez-vous à utiliser '¡Así es la vida !' dans le bon contexte — c'est l'expression espagnole la plus connue."
    ]
  },
  {
    day: 29,
    title: "Conversation avancée",
    titleNative: "Conversación avanzada",
    focus: "Aujourd'hui nous pratiquons des structures plus sophistiquées pour des conversations plus fluides et naturelles. Ces expressions vous feront passer du niveau débutant à l'intermédiaire réel.",
    vocab: [
      { es: "en mi opinión", fr: "à mon avis", ipa: "en-mi-o-pi-NYON" },
      { es: "de hecho", fr: "en fait / en réalité", ipa: "de-E-cho" },
      { es: "además", fr: "de plus / par ailleurs", ipa: "a-de-MAS" },
      { es: "sin embargo", fr: "cependant / pourtant", ipa: "sin-em-BAR-go" },
      { es: "es decir", fr: "c'est-à-dire", ipa: "es-de-SIR" },
      { es: "por mi parte", fr: "pour ma part / quant à moi", ipa: "por-mi-PAR-te" },
      { es: "se dice que", fr: "on dit que / il paraît que", ipa: "se-DI-se-ke" },
      { es: "depende", fr: "ça dépend", ipa: "de-PEN-de" },
      { es: "en todo caso", fr: "en tout cas / de toute façon", ipa: "en-TO-do-KA-so" },
      { es: "sin duda", fr: "sans aucun doute", ipa: "sin-DU-da" }
    ],
    phrases: [
      { es: "En mi opinión, es una buena idea.", fr: "À mon avis, c'est une bonne idée.", ipa: "en-mi-o-pi-NYON-es-U-na-BWE-na-i-DE-a" },
      { es: "De hecho, no estoy de acuerdo.", fr: "En fait, je ne suis pas d'accord.", ipa: "de-E-cho, no-es-TOY-de-a-KWER-do" },
      { es: "Depende de la situación.", fr: "Ça dépend de la situation.", ipa: "de-PEN-de-de-la-si-twa-SYON" },
      { es: "Se dice que va a llover mañana.", fr: "Il paraît qu'il va pleuvoir demain.", ipa: "se-DI-se-ke-ba-a-yo-BER-ma-NYA-na" },
      { es: "En todo caso, ¡gracias por todo!", fr: "En tout cas, merci pour tout !", ipa: "en-TO-do-KA-so, GRA-syas-por-TO-do" }
    ],
    grammar: "Les connecteurs du discours ('de hecho', 'sin embargo', 'además') sont ce qui distingue un locuteur intermédiaire d'un avancé. Utilisez-les pour enchaîner les idées et donner de la fluidité. 'Sin embargo' est l'équivalent de 'cependant' / 'pourtant' — très formel et très utilisé à l'écrit comme à l'oral.",
    practice: [
      "Écrivez un paragraphe de 5 phrases sur n'importe quel sujet en utilisant au moins 4 connecteurs du jour.",
      "Entraînez-vous à exprimer un désaccord poli : 'En mi opinión... Sin embargo... De hecho...'",
      "Enregistrez-vous pendant une minute en espagnol sur votre sujet favori. Combien de connecteurs avez-vous utilisés ?"
    ]
  },
  {
    day: 30,
    title: "Révision finale et célébration",
    titleNative: "Repaso final y celebración",
    focus: "¡Vous avez atteint le jour 30 ! C'est votre révision finale — mais aussi une célébration. Aujourd'hui on consolide tout ce que vous avez appris et on trace la voie vers la fluidité.",
    vocab: [
      { es: "¡Felicidades!", fr: "Félicitations !", ipa: "fe-li-si-DA-des" },
      { es: "estoy orgulloso/a de mí", fr: "je suis fier/fière de moi", ipa: "es-TOY-or-gu-YO-so-de-MI" },
      { es: "he progresado", fr: "j'ai progressé", ipa: "e-pro-gre-SA-do" },
      { es: "continuar", fr: "continuer", ipa: "kon-ti-nwAR" },
      { es: "mejorar", fr: "s'améliorer", ipa: "me-kho-RAR" },
      { es: "la fluidez", fr: "la fluidité", ipa: "la-flwi-DES" },
      { es: "practicar", fr: "pratiquer", ipa: "prak-ti-KAR" },
      { es: "un intercambio de idiomas", fr: "un échange linguistique", ipa: "un-in-ter-KAM-byo-de-i-DYO-mas" },
      { es: "cada día", fr: "chaque jour", ipa: "KA-da-DI-a" },
      { es: "el camino", fr: "le chemin / le parcours", ipa: "el-ka-MI-no" }
    ],
    phrases: [
      { es: "¡Ya hablo un poco de español!", fr: "Je parle déjà un peu espagnol !", ipa: "YA-A-blo-un-PO-ko-de-es-pa-NYOL" },
      { es: "He aprendido muchísimas cosas.", fr: "J'ai appris énormément de choses.", ipa: "e-a-pren-DI-do-mu-CHI-si-mas-KO-sas" },
      { es: "Voy a seguir practicando.", fr: "Je vais continuer à pratiquer.", ipa: "BOY-a-se-GIR-prak-ti-KAN-do" },
      { es: "¡Gracias por todo este camino recorrido!", fr: "Merci pour tout ce chemin parcouru !", ipa: "GRA-syas-por-TO-do-ES-te-ka-MI-no-rre-ko-RRI-do" },
      { es: "¡Hasta la próxima aventura!", fr: "À la prochaine aventure !", ipa: "AS-ta-la-PROK-si-ma-a-ben-TU-ra" }
    ],
    grammar: "Récapitulatif des structures clés maîtrisées : (1) Présent pour les habitudes et les faits, (2) Pretérito indefinido pour le passé conversationnel, (3) Futur proche (ir a + infinitif) pour les projets, (4) Conditionnel (quisiera) pour la politesse, (5) Ser vs estar — la grande distinction espagnole. Continuez avec 15 min de vocabulaire + 15 min de conversation chaque jour.",
    practice: [
      "Écrivez une courte lettre en espagnol décrivant votre voyage d'apprentissage sur ces 30 jours.",
      "Cherchez un échange linguistique (tandem) avec un hispanophone qui veut apprendre le français.",
      "Fixez-vous un objectif concret pour le mois prochain : combien d'heures pratiquerez-vous ? Quelles ressources utiliserez-vous ?"
    ]
  }
];

var CONVERSATIONS_FR_ES = [
  { title:"Au café",
    scene:"Tu entres dans un café à Madrid et tu commandes le petit-déjeuner.",
    lines:[
      {who:"them", es:"¡Buenos días! ¿Qué le pongo?", en:"Bonjour ! Qu'est-ce que je vous sers ?"},
      {who:"you",  es:"Buenos días. Un café con leche y una tostada, por favor.", en:"Bonjour. Un café au lait et une tartine, s'il vous plaît."},
      {who:"them", es:"¿Para tomar aquí o para llevar?", en:"Sur place ou à emporter ?"},
      {who:"you",  es:"Para tomar aquí, gracias.", en:"Sur place, merci."},
      {who:"them", es:"Ahora mismo. Son tres euros veinte.", en:"Tout de suite. Ça fait trois euros vingt."},
      {who:"you",  es:"Aquí tiene. Muchas gracias.", en:"Voilà. Merci beaucoup."},
      {who:"them", es:"¡Que aproveche! ¡Buen día!", en:"Bon appétit ! Bonne journée !"}
    ]},
  { title:"À l'hôtel",
    scene:"Tu arrives à ton hôtel à Barcelone avec une réservation.",
    lines:[
      {who:"you",  es:"Buenas tardes, tengo una reserva a nombre de Dupont.", en:"Bonsoir, j'ai une réservation au nom de Dupont."},
      {who:"them", es:"Bienvenido, señor Dupont. Dos noches, habitación doble, ¿verdad?", en:"Bienvenue, monsieur Dupont. Deux nuits, chambre double, c'est ça ?"},
      {who:"you",  es:"Exacto. ¿A qué hora es el desayuno?", en:"Exactement. À quelle heure est le petit-déjeuner ?"},
      {who:"them", es:"De ocho a once, en el primer piso.", en:"De huit à onze heures, au premier étage."},
      {who:"you",  es:"¿Y hay wifi gratuito?", en:"Et il y a le wifi gratuit ?"},
      {who:"them", es:"Sí, la contraseña está en la tarjeta de la habitación. Aquí tiene la llave, habitación 312.", en:"Oui, le mot de passe est sur la carte de chambre. Voici la clé, chambre 312."},
      {who:"you",  es:"Perfecto, muchas gracias.", en:"Parfait, merci beaucoup."}
    ]},
  { title:"Demander son chemin",
    scene:"Tu es perdu près de la Plaza Mayor et tu cherches le musée du Prado.",
    lines:[
      {who:"you",  es:"Perdone, ¿sabe dónde está el Museo del Prado?", en:"Excusez-moi, savez-vous où se trouve le musée du Prado ?"},
      {who:"them", es:"Sí, claro. Siga todo recto por esta calle y gire a la izquierda.", en:"Oui, bien sûr. Continuez tout droit dans cette rue et tournez à gauche."},
      {who:"you",  es:"¿Todo recto y luego a la izquierda?", en:"Tout droit et ensuite à gauche ?"},
      {who:"them", es:"Exacto, verá el museo enfrente. Son unos diez minutos a pie.", en:"Exactement, vous verrez le musée en face. C'est à environ dix minutes à pied."},
      {who:"you",  es:"Muchas gracias, es usted muy amable.", en:"Merci beaucoup, vous êtes très aimable."},
      {who:"them", es:"De nada. ¡Que disfrute del museo!", en:"De rien. Profitez bien du musée !"}
    ]},
  { title:"Au restaurant",
    scene:"Tu dînes dans un restaurant typique espagnol.",
    lines:[
      {who:"you",  es:"Buenas noches, ¿tienen mesa para dos?", en:"Bonsoir, avez-vous une table pour deux ?"},
      {who:"them", es:"Buenas noches. Sí, síganme por favor.", en:"Bonsoir. Oui, suivez-moi s'il vous plaît."},
      {who:"you",  es:"¿Cuál es el plato del día?", en:"Quel est le plat du jour ?"},
      {who:"them", es:"El plato del día es paella valenciana y de postre, flan casero.", en:"Le plat du jour est la paella valenciana et comme dessert, flan maison."},
      {who:"you",  es:"Perfecto. Tomaré la paella y agua con gas, por favor.", en:"Parfait. Je prendrai la paella et de l'eau gazeuse, s'il vous plaît."},
      {who:"them", es:"Enseguida. ¿Algo más?", en:"Tout de suite. Autre chose ?"},
      {who:"you",  es:"No, gracias. Y la cuenta cuando pueda.", en:"Non, merci. Et l'addition quand vous pourrez."},
      {who:"them", es:"¡Claro! Que aproveche.", en:"Bien sûr ! Bon appétit."}
    ]},
  { title:"Faire du shopping",
    scene:"Tu cherches un souvenir dans une boutique à Séville.",
    lines:[
      {who:"them", es:"¡Hola! ¿Le puedo ayudar en algo?", en:"Bonjour ! Puis-je vous aider ?"},
      {who:"you",  es:"Hola, busco algo típico de Sevilla para llevar de regalo.", en:"Bonjour, je cherche quelque chose de typique de Séville comme cadeau."},
      {who:"them", es:"Tenemos abanicos, cerámica y azulejos artesanales.", en:"Nous avons des éventails, de la céramique et des carreaux artisanaux."},
      {who:"you",  es:"¿Cuánto cuesta ese abanico rojo?", en:"Combien coûte cet éventail rouge ?"},
      {who:"them", es:"Ese es de doce euros. Es hecho a mano.", en:"Celui-là est à douze euros. Il est fait main."},
      {who:"you",  es:"Me lo llevo. ¿Acepta tarjeta?", en:"Je le prends. Vous acceptez la carte ?"},
      {who:"them", es:"Sí, claro. ¿Le envuelvo para regalo?", en:"Oui, bien sûr. Vous le voulez emballé cadeau ?"},
      {who:"you",  es:"Sí, por favor. Muchas gracias.", en:"Oui, s'il vous plaît. Merci beaucoup."}
    ]},
  { title:"Chez le médecin",
    scene:"Tu te sens mal et tu consultes un médecin.",
    lines:[
      {who:"them", es:"Buenos días, ¿qué le ocurre?", en:"Bonjour, qu'est-ce qui ne va pas ?"},
      {who:"you",  es:"Me duele el estómago desde ayer y tengo un poco de fiebre.", en:"J'ai mal à l'estomac depuis hier et j'ai un peu de fièvre."},
      {who:"them", es:"¿Qué ha comido hoy?", en:"Qu'avez-vous mangé aujourd'hui ?"},
      {who:"you",  es:"No mucho. No tengo apetito.", en:"Pas grand-chose. Je n'ai pas d'appétit."},
      {who:"them", es:"Puede ser una gastroenteritis leve. Le receto un antiácido y reposo.", en:"Ça pourrait être une légère gastro-entérite. Je vous prescris un antiacide et du repos."},
      {who:"you",  es:"¿Necesito guardar cama?", en:"Je dois rester au lit ?"},
      {who:"them", es:"Un día de descanso sería lo ideal. Si no mejora, vuelva mañana.", en:"Un jour de repos serait idéal. Si vous n'allez pas mieux, revenez demain."},
      {who:"you",  es:"Gracias, doctor. ¿Dónde está la farmacia más cercana?", en:"Merci, docteur. Où est la pharmacie la plus proche ?"}
    ]},
  { title:"Petite conversation",
    scene:"Échange sympathique avec un Espagnol dans un parc.",
    lines:[
      {who:"them", es:"¿De dónde eres? Tienes acento extranjero.", en:"D'où tu viens ? Tu as un accent étranger."},
      {who:"you",  es:"Soy francés, de Lyon. Estoy de visita.", en:"Je suis français, de Lyon. Je suis en visite."},
      {who:"them", es:"¡Qué bien! ¿Es tu primera vez en España?", en:"Super ! C'est ta première fois en Espagne ?"},
      {who:"you",  es:"Sí, es la primera vez. Me encanta el ambiente.", en:"Oui, c'est la première fois. J'adore l'ambiance."},
      {who:"them", es:"¿Y hablas español desde hace mucho?", en:"Et tu parles espagnol depuis longtemps ?"},
      {who:"you",  es:"Llevo un año aprendiéndolo. El español y el francés se parecen mucho.", en:"J'apprends depuis un an. L'espagnol et le français se ressemblent beaucoup."},
      {who:"them", es:"¡Es verdad! ¿Qué te parece España?", en:"C'est vrai ! Qu'est-ce que tu penses de l'Espagne ?"},
      {who:"you",  es:"Me encanta la comida, la gente y el clima. ¡Ojalá vivir aquí!", en:"J'adore la nourriture, les gens et le climat. J'aimerais vivre ici !"}
    ]}
];
