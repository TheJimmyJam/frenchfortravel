// Spanish → French Native Lesson Plan
// Español como idioma de instrucción, francés como objetivo
// vocab: { fr: "palabra francesa", es: "traducción al español", ipa: "fonética para hispanohablantes" }

var COURSE_ES_FR = [
  {
    day: 1,
    title: "Saludos y cortesía",
    titleNative: "Bonjour & Politesse",
    focus: "Las primeras palabras que dirás en cualquier situación francesa. En Francia, saludar antes de hablar es obligatorio — si no lo haces, pareces grosero.",
    vocab: [
      { fr: "Bonjour", es: "Hola / Buenos días", ipa: "bon-ZHUR" },
      { fr: "Bonsoir", es: "Buenas noches (al saludar)", ipa: "bon-SUAR" },
      { fr: "Bonne nuit", es: "Buenas noches (al despedirse)", ipa: "bon-NWEE" },
      { fr: "Salut", es: "Hola / Chao (informal)", ipa: "sa-LÜ" },
      { fr: "Au revoir", es: "Adiós", ipa: "o-reh-VUAR" },
      { fr: "S'il vous plaît", es: "Por favor (formal)", ipa: "sil vu PLE" },
      { fr: "Merci", es: "Gracias", ipa: "mer-SI" },
      { fr: "De rien", es: "De nada", ipa: "deh-RIEN" },
      { fr: "Excusez-moi", es: "Disculpe", ipa: "ek-skü-ZE-mua" },
      { fr: "Pardon", es: "Perdón", ipa: "par-DON" }
    ],
    phrases: [
      { fr: "Bonjour, comment allez-vous ?", es: "Hola, ¿cómo está usted?", ipa: "bon-ZHUR, ko-mon-ta-LE-vu" },
      { fr: "Je vais bien, merci.", es: "Estoy bien, gracias.", ipa: "zheh-ve-BIEN, mer-SI" },
      { fr: "Et vous ?", es: "¿Y usted?", ipa: "e VU" },
      { fr: "Enchanté(e).", es: "Encantado/a.", ipa: "on-shon-TE" },
      { fr: "À bientôt !", es: "¡Hasta pronto!", ipa: "a-bien-TO" },
      { fr: "À tout à l'heure !", es: "¡Hasta luego!", ipa: "a-tu-ta-LEUR" }
    ],
    grammar: "En francés, el tuteo ('tu') es para amigos y familia. Con desconocidos, usa 'vous'. Nunca abrevies el saludo — siempre di 'Bonjour' completo antes de cualquier petición. La 'r' francesa es gutural, como aclarar la garganta suavemente.",
    practice: [
      "Practica saludar en voz alta cinco veces: 'Bonjour, comment allez-vous ? Je vais bien, merci.'",
      "Imagina entrar a una tienda en París. Di 'Bonjour !' antes de preguntar cualquier cosa.",
      "Repite la secuencia completa de despedida: 'Au revoir ! À bientôt !'"
    ]
  },
  {
    day: 2,
    title: "Números del 1 al 30",
    titleNative: "Les Chiffres",
    focus: "Los números son esenciales para precios, horarios y direcciones. El sistema francés tiene algunas peculiaridades que debes conocer desde el principio.",
    vocab: [
      { fr: "un / une", es: "uno / una", ipa: "UHN / ÜN" },
      { fr: "deux", es: "dos", ipa: "DEU" },
      { fr: "trois", es: "tres", ipa: "TRUA" },
      { fr: "quatre", es: "cuatro", ipa: "KA-treh" },
      { fr: "cinq", es: "cinco", ipa: "SENK" },
      { fr: "six", es: "seis", ipa: "SIS" },
      { fr: "sept", es: "siete", ipa: "SET" },
      { fr: "huit", es: "ocho", ipa: "WEET" },
      { fr: "neuf", es: "nueve", ipa: "NEUF" },
      { fr: "dix", es: "diez", ipa: "DIS" },
      { fr: "vingt", es: "veinte", ipa: "VEN" },
      { fr: "trente", es: "treinta", ipa: "TRONT" }
    ],
    phrases: [
      { fr: "Ça coûte combien ?", es: "¿Cuánto cuesta?", ipa: "sa-kut-kom-BIEN" },
      { fr: "C'est cinq euros.", es: "Son cinco euros.", ipa: "se-senk-eu-RO" },
      { fr: "J'ai vingt ans.", es: "Tengo veinte años.", ipa: "zhe-ven-ON" },
      { fr: "Il est trois heures.", es: "Son las tres.", ipa: "il-e-trua-EUR" },
      { fr: "Donnez-moi deux, s'il vous plaît.", es: "Deme dos, por favor.", ipa: "do-ne-mua-DEU, sil-vu-PLE" }
    ],
    grammar: "En francés, 70 = 'soixante-dix' (60+10), 80 = 'quatre-vingts' (4×20), 90 = 'quatre-vingt-dix' (4×20+10). Es un sistema inusual que requiere práctica. Del 11 al 16 tienen formas especiales: onze, douze, treize, quatorze, quinze, seize.",
    practice: [
      "Cuenta del 1 al 10 en voz alta varias veces hasta que salga natural.",
      "Practica decir tu edad en francés: 'J'ai ___ ans.'",
      "Di el precio de 3 cosas de tu cuarto en francés imaginando que estás en un mercado."
    ]
  },
  {
    day: 3,
    title: "En el café",
    titleNative: "Au Café",
    focus: "El café es el corazón de la vida social francesa. Saber pedir correctamente — y con cortesía — es una habilidad esencial para cualquier hispanohablante en Francia.",
    vocab: [
      { fr: "un café", es: "un café (espresso solo)", ipa: "uhn-ka-FE" },
      { fr: "un café au lait", es: "café con leche", ipa: "uhn-ka-fe-o-LE" },
      { fr: "un thé", es: "un té", ipa: "uhn-TE" },
      { fr: "un jus d'orange", es: "un jugo de naranja", ipa: "uhn-zhü-do-RONZH" },
      { fr: "une eau", es: "un agua", ipa: "ün-O" },
      { fr: "un croissant", es: "un croissant", ipa: "uhn-krua-SON" },
      { fr: "l'addition", es: "la cuenta", ipa: "la-di-SION" },
      { fr: "la terrasse", es: "la terraza", ipa: "la-te-RAS" },
      { fr: "le garçon", es: "el mesero / camarero", ipa: "leh-gar-SON" },
      { fr: "le menu", es: "el menú", ipa: "leh-meh-NÜ" }
    ],
    phrases: [
      { fr: "Je voudrais un café, s'il vous plaît.", es: "Quisiera un café, por favor.", ipa: "zheh-vu-DRE-uhn-ka-FE, sil-vu-PLE" },
      { fr: "Un thé au lait, s'il vous plaît.", es: "Un té con leche, por favor.", ipa: "uhn-te-o-LE, sil-vu-PLE" },
      { fr: "L'addition, s'il vous plaît.", es: "La cuenta, por favor.", ipa: "la-di-SION, sil-vu-PLE" },
      { fr: "C'est pour emporter.", es: "Es para llevar.", ipa: "se-pur-on-por-TE" },
      { fr: "Une table pour deux, s'il vous plaît.", es: "Una mesa para dos, por favor.", ipa: "ün-ta-bleh-pur-DEU, sil-vu-PLE" },
      { fr: "Vous avez quoi comme gâteaux ?", es: "¿Qué pasteles tienen?", ipa: "vu-za-ve-kua-kom-ga-TO" }
    ],
    grammar: "Para pedir en francés: 'Je voudrais...' (quisiera) es más educado que 'Je veux...' (quiero). Los artículos: 'un' para masculino, 'une' para femenino. Nota: en francés 'café' siempre significa espresso; si quieres americano di 'un café allongé'.",
    practice: [
      "Practica el pedido completo: 'Bonjour ! Je voudrais un café et un croissant, s'il vous plaît.'",
      "Memoriza cómo pedir la cuenta: 'L'addition, s'il vous plaît !'",
      "Imagina sentarte en un café parisiense. ¿Qué pedirías? Di tu orden completa en francés."
    ]
  },
  {
    day: 4,
    title: "Comida y sabores",
    titleNative: "La Nourriture",
    focus: "Francia es famosa por su gastronomía. Conocer el vocabulario de comida te ayudará en mercados, restaurantes y supermercados — y te permitirá apreciar mejor la cultura.",
    vocab: [
      { fr: "le pain", es: "el pan", ipa: "leh-PEN" },
      { fr: "le fromage", es: "el queso", ipa: "leh-fro-MAZH" },
      { fr: "le beurre", es: "la mantequilla", ipa: "leh-BEUR" },
      { fr: "la viande", es: "la carne", ipa: "la-VIOND" },
      { fr: "le poisson", es: "el pescado", ipa: "leh-pua-SON" },
      { fr: "les légumes", es: "las verduras", ipa: "le-le-GÜM" },
      { fr: "les fruits", es: "las frutas", ipa: "le-FRWEE" },
      { fr: "le dessert", es: "el postre", ipa: "leh-de-SER" },
      { fr: "délicieux", es: "delicioso", ipa: "de-li-SIEU" },
      { fr: "sucré / salé", es: "dulce / salado", ipa: "sü-KRE / sa-LE" }
    ],
    phrases: [
      { fr: "C'est délicieux !", es: "¡Está delicioso!", ipa: "se-de-li-SIEU" },
      { fr: "Je suis végétarien(ne).", es: "Soy vegetariano/a.", ipa: "zheh-swi-ve-zhe-ta-RIEN" },
      { fr: "Je n'aime pas le poisson.", es: "No me gusta el pescado.", ipa: "zheh-nem-pa-leh-pua-SON" },
      { fr: "Qu'est-ce que vous recommandez ?", es: "¿Qué recomienda usted?", ipa: "ke-skeh-vu-re-ko-man-DE" },
      { fr: "Sans gluten, s'il vous plaît.", es: "Sin gluten, por favor.", ipa: "son-glü-TEN, sil-vu-PLE" }
    ],
    grammar: "En francés, los artículos de cantidad son 'du' (del, masculino), 'de la' (de la, femenino), 'des' (de los/las, plural). Ejemplo: 'Je veux du pain' (Quiero pan), 'Je veux de la viande' (Quiero carne). Nunca se dice simplemente 'Je veux pain'.",
    practice: [
      "Describe tres comidas que te gusten usando 'J'aime...' y tres que no te gusten con 'Je n'aime pas...'",
      "Aprende de memoria: 'C'est délicieux !' — la usarás más de lo que crees.",
      "¿Cómo dirías que eres alérgico a algo? Investiga 'Je suis allergique à...' y practica con un alimento."
    ]
  },
  {
    day: 5,
    title: "Presentaciones y familia",
    titleNative: "Se Présenter & La Famille",
    focus: "Saber presentarte y hablar de tu familia es fundamental para las primeras conversaciones. Los franceses aprecian la formalidad al conocer a alguien nuevo.",
    vocab: [
      { fr: "je m'appelle", es: "me llamo", ipa: "zheh-ma-PEL" },
      { fr: "j'ai ... ans", es: "tengo ... años", ipa: "zhe-ON" },
      { fr: "je viens de", es: "soy de / vengo de", ipa: "zheh-VIEN-deh" },
      { fr: "la famille", es: "la familia", ipa: "la-fa-MI-yeh" },
      { fr: "le père / la mère", es: "el padre / la madre", ipa: "leh-PER / la-MER" },
      { fr: "le frère / la sœur", es: "el hermano / la hermana", ipa: "leh-FRER / la-SEUR" },
      { fr: "le mari / la femme", es: "el esposo / la esposa", ipa: "leh-ma-RI / la-FAM" },
      { fr: "les enfants", es: "los hijos / los niños", ipa: "le-zon-FON" },
      { fr: "les grands-parents", es: "los abuelos", ipa: "le-gron-pa-RON" },
      { fr: "célibataire", es: "soltero/a", ipa: "se-li-ba-TER" }
    ],
    phrases: [
      { fr: "Je m'appelle Carlos. Et vous ?", es: "Me llamo Carlos. ¿Y usted?", ipa: "zheh-ma-pel-kar-LOS. e-VU" },
      { fr: "Je viens d'Espagne.", es: "Vengo de España.", ipa: "zheh-vien-des-PAN-yeh" },
      { fr: "J'ai deux frères et une sœur.", es: "Tengo dos hermanos y una hermana.", ipa: "zhe-DEU-frer-e-ün-SEUR" },
      { fr: "Je suis marié(e).", es: "Estoy casado/a.", ipa: "zheh-swi-ma-RIE" },
      { fr: "Vous avez des enfants ?", es: "¿Tiene hijos?", ipa: "vu-za-ve-de-zon-FON" }
    ],
    grammar: "En francés, los adjetivos de nacionalidad no se escriben con mayúscula cuando son adjetivos: 'je suis espagnol' (soy español). Pero sí cuando son sustantivos: 'un Espagnol' (un español). La 'r' en 'frère' es gutural — practica haciendo el sonido en la garganta.",
    practice: [
      "Escribe tu presentación completa en francés: nombre, edad, origen, estado civil y familia.",
      "Grábate presentándote y escúchate para mejorar la pronunciación.",
      "Practica preguntar y responder: '—Vous avez des frères et sœurs ? —Oui, j'ai...'"
    ]
  },
  {
    day: 6,
    title: "Colores y descripción",
    titleNative: "Les Couleurs & La Description",
    focus: "Los colores y adjetivos descriptivos te permiten hablar de personas, objetos y lugares. Son esenciales para hacer compras y describir lo que buscas.",
    vocab: [
      { fr: "rouge", es: "rojo", ipa: "RUZH" },
      { fr: "bleu / bleue", es: "azul", ipa: "BLEU" },
      { fr: "vert / verte", es: "verde", ipa: "VER / VERT" },
      { fr: "jaune", es: "amarillo", ipa: "ZHON" },
      { fr: "blanc / blanche", es: "blanco", ipa: "BLON / BLONSH" },
      { fr: "noir / noire", es: "negro", ipa: "NUAR" },
      { fr: "grand / grande", es: "grande", ipa: "GRON / GROND" },
      { fr: "petit / petite", es: "pequeño/a", ipa: "peh-TI / peh-TIT" },
      { fr: "beau / belle", es: "hermoso/a", ipa: "BO / BEL" },
      { fr: "vieux / vieille", es: "viejo/a", ipa: "VIEU / VIEI-yeh" }
    ],
    phrases: [
      { fr: "Je cherche une robe rouge.", es: "Busco un vestido rojo.", ipa: "zheh-sher-SH-ün-rob-RUZH" },
      { fr: "C'est trop grand pour moi.", es: "Es demasiado grande para mí.", ipa: "se-tro-GRON-pur-MUA" },
      { fr: "Vous avez ça en bleu ?", es: "¿Lo tienen en azul?", ipa: "vu-za-ve-sa-on-BLEU" },
      { fr: "C'est très joli !", es: "¡Está muy bonito!", ipa: "se-tre-zho-LI" },
      { fr: "Il est grand et brun.", es: "Él es alto y moreno.", ipa: "il-e-GRON-e-BREN" }
    ],
    grammar: "En francés, los adjetivos concuerdan en género y número con el sustantivo. 'Un chat noir' (un gato negro) → 'Une robe noire' (un vestido negro). Muchos adjetivos añaden -e para el femenino: grand → grande, petit → petite. Los que ya terminan en -e no cambian: rouge, jaune.",
    practice: [
      "Describe tu ropa de hoy usando colores en francés.",
      "Describe a una persona de tu familia: 'Ma mère est grande et belle.'",
      "Practica los colores mirando objetos a tu alrededor y nombrándolos en francés."
    ]
  },
  {
    day: 7,
    title: "En el mercado",
    titleNative: "Au Marché",
    focus: "Los mercados franceses ('marchés') son una institución cultural. Aprender a comprar frutas, verduras y quesos como local te conecta con la vida cotidiana francesa.",
    vocab: [
      { fr: "les pommes", es: "las manzanas", ipa: "le-POM" },
      { fr: "les tomates", es: "los tomates", ipa: "le-to-MAT" },
      { fr: "les fraises", es: "las fresas", ipa: "le-FREZ" },
      { fr: "l'ail", es: "el ajo", ipa: "LA-yeh" },
      { fr: "les oignons", es: "las cebollas", ipa: "le-zo-NION" },
      { fr: "un kilo de", es: "un kilo de", ipa: "uhn-ki-lo-DEH" },
      { fr: "une livre de", es: "medio kilo de", ipa: "ün-LI-vreh-deh" },
      { fr: "c'est combien ?", es: "¿cuánto es?", ipa: "se-kom-BIEN" },
      { fr: "trop cher", es: "demasiado caro", ipa: "tro-SHER" },
      { fr: "frais / fraîche", es: "fresco/a", ipa: "FRE / FRESH" }
    ],
    phrases: [
      { fr: "Je voudrais un kilo de tomates.", es: "Quisiera un kilo de tomates.", ipa: "zheh-vu-DRE-uhn-ki-lo-deh-to-MAT" },
      { fr: "Ils sont frais, vos fruits ?", es: "¿Están frescos sus frutas?", ipa: "il-son-FRE, vo-FRWEE" },
      { fr: "C'est un peu trop cher.", es: "Es un poco caro.", ipa: "se-uhn-peu-tro-SHER" },
      { fr: "Je prends ça.", es: "Me llevo esto.", ipa: "zheh-PRON-sa" },
      { fr: "Donnez-moi une livre de fraises.", es: "Deme medio kilo de fresas.", ipa: "do-ne-MUA-ün-li-vreh-deh-FREZ" }
    ],
    grammar: "Para expresar cantidad en francés se usa 'de/d'' sin artículo: 'un kilo de pommes' (no 'un kilo des pommes'). Este patrón es consistente: 'beaucoup de monde' (mucha gente), 'trop de sel' (demasiada sal). Excepción: cuando el adjetivo precede al sustantivo plural se usa 'de': 'de belles fleurs'.",
    practice: [
      "Imagina que estás en un mercado. Escribe tu lista de compras en francés y practica pedirla.",
      "Practica el diálogo: 'C'est combien les fraises ?' — 'Trois euros le kilo.' — 'Je prends ça.'",
      "Aprende tres frutas o verduras más allá de las de hoy y úsalas en frases."
    ]
  },
  {
    day: 8,
    title: "Transporte y direcciones",
    titleNative: "Transport & Directions",
    focus: "Moverte por una ciudad francesa requiere entender direcciones, transporte público y cómo preguntar el camino. El metro de París es uno de los más eficientes del mundo.",
    vocab: [
      { fr: "le métro", es: "el metro", ipa: "leh-me-TRO" },
      { fr: "le bus", es: "el autobús", ipa: "leh-BUS" },
      { fr: "le train", es: "el tren", ipa: "leh-TREN" },
      { fr: "la gare", es: "la estación de tren", ipa: "la-GAR" },
      { fr: "l'arrêt de bus", es: "la parada de autobús", ipa: "la-RE-deh-BUS" },
      { fr: "à droite", es: "a la derecha", ipa: "a-DRUAT" },
      { fr: "à gauche", es: "a la izquierda", ipa: "a-GOSH" },
      { fr: "tout droit", es: "todo recto / derecho", ipa: "tu-DRUA" },
      { fr: "près de", es: "cerca de", ipa: "pre-DEH" },
      { fr: "loin de", es: "lejos de", ipa: "luen-DEH" }
    ],
    phrases: [
      { fr: "Où est la station de métro ?", es: "¿Dónde está la estación de metro?", ipa: "u-e-la-sta-SION-deh-me-TRO" },
      { fr: "C'est à combien de minutes ?", es: "¿A cuántos minutos está?", ipa: "se-ta-kom-BIEN-deh-mi-NUT" },
      { fr: "Tournez à gauche au feu rouge.", es: "Gire a la izquierda en el semáforo.", ipa: "tur-NE-a-GOSH-o-feu-RUZH" },
      { fr: "Un ticket, s'il vous plaît.", es: "Un boleto, por favor.", ipa: "uhn-ti-KE, sil-vu-PLE" },
      { fr: "Est-ce que ce bus va à la Tour Eiffel ?", es: "¿Este autobús va a la Torre Eiffel?", ipa: "es-keh-seh-BUS-va-a-la-tur-e-FEL" }
    ],
    grammar: "La preposición de lugar 'à' se contrae con los artículos: 'à + le = au' (al) y 'à + les = aux' (a los). Pero 'à la' y 'à l'' no cambian. Ejemplos: 'Je vais au marché' (voy al mercado), 'Je vais à la gare' (voy a la estación).",
    practice: [
      "Practica dar direcciones imaginando que estás en el centro de París hacia la Torre Eiffel.",
      "Memoriza las cuatro direcciones básicas: droite, gauche, tout droit, derrière.",
      "¿Cómo dirías 'El hotel está cerca del metro'? Construye la frase en francés."
    ]
  },
  {
    day: 9,
    title: "En el restaurante",
    titleNative: "Au Restaurant",
    focus: "Comer en un restaurante francés es toda una experiencia cultural. El servicio es formal, el menú tiene estructura fija y hay etiqueta que debes conocer para sentirte cómodo.",
    vocab: [
      { fr: "une table", es: "una mesa", ipa: "ün-TA-bleh" },
      { fr: "la carte", es: "la carta / el menú", ipa: "la-KART" },
      { fr: "l'entrée", es: "el primer plato / entrada", ipa: "lon-TRE" },
      { fr: "le plat principal", es: "el plato principal", ipa: "leh-pla-pren-si-PAL" },
      { fr: "le dessert", es: "el postre", ipa: "leh-de-SER" },
      { fr: "la carafe d'eau", es: "la jarra de agua (gratis)", ipa: "la-ka-raf-DO" },
      { fr: "saignant / bien cuit", es: "poco hecho / bien hecho", ipa: "se-NION / bien-KWEE" },
      { fr: "l'addition", es: "la cuenta", ipa: "la-di-SION" },
      { fr: "le pourboire", es: "la propina", ipa: "leh-pur-BUAR" },
      { fr: "une réservation", es: "una reservación", ipa: "ün-re-zer-va-SION" }
    ],
    phrases: [
      { fr: "J'ai une réservation au nom de García.", es: "Tengo una reservación a nombre de García.", ipa: "zhe-ün-re-zer-va-SION-o-non-deh-gar-SI-a" },
      { fr: "Nous sommes combien ?", es: "¿Somos cuántos?", ipa: "nu-som-kom-BIEN" },
      { fr: "Le steak, saignant s'il vous plaît.", es: "El bistec, poco hecho por favor.", ipa: "leh-STEK, se-NION-sil-vu-PLE" },
      { fr: "Est-ce que le service est compris ?", es: "¿Está incluido el servicio?", ipa: "es-keh-leh-ser-VIS-e-kom-PRI" },
      { fr: "C'était excellent !", es: "¡Estuvo excelente!", ipa: "se-te-tek-se-LON" }
    ],
    grammar: "El menú francés tradicional tiene: entrée (primer plato), plat (principal) y dessert. 'La carte' es la carta general; 'le menu' suele referirse al menú del día con precio fijo ('menu à prix fixe'). El servicio está incluido por ley en Francia — no es obligatorio dejar propina adicional.",
    practice: [
      "Practica reservar una mesa: 'Bonjour, je voudrais réserver une table pour deux personnes ce soir.'",
      "Memoriza la secuencia: carta → pedido → platos → postre → cuenta.",
      "¿Cómo pedirías tu bistec favorito en francés? Practica la frase completa."
    ]
  },
  {
    day: 10,
    title: "El tiempo y las estaciones",
    titleNative: "La Météo & Les Saisons",
    focus: "El tiempo es uno de los temas de conversación más universales. Los franceses lo comentan constantemente — es un excelente tema para romper el hielo con nativos.",
    vocab: [
      { fr: "il fait beau", es: "hace buen tiempo", ipa: "il-fe-BO" },
      { fr: "il fait chaud", es: "hace calor", ipa: "il-fe-SHO" },
      { fr: "il fait froid", es: "hace frío", ipa: "il-fe-FRUA" },
      { fr: "il pleut", es: "llueve / está lloviendo", ipa: "il-PLEU" },
      { fr: "il neige", es: "nieva / está nevando", ipa: "il-NEZH" },
      { fr: "le soleil", es: "el sol", ipa: "leh-so-LEI" },
      { fr: "le nuage", es: "la nube", ipa: "leh-nü-AZH" },
      { fr: "le printemps", es: "la primavera", ipa: "leh-pren-TON" },
      { fr: "l'été", es: "el verano", ipa: "le-TE" },
      { fr: "l'hiver", es: "el invierno", ipa: "li-VER" }
    ],
    phrases: [
      { fr: "Quel temps fait-il aujourd'hui ?", es: "¿Qué tiempo hace hoy?", ipa: "kel-ton-fe-til-o-zhur-DWEE" },
      { fr: "Il fait très beau aujourd'hui !", es: "¡Hace muy buen tiempo hoy!", ipa: "il-fe-tre-BO-o-zhur-DWEE" },
      { fr: "J'espère qu'il ne pleuvra pas.", es: "Espero que no llueva.", ipa: "zhes-per-kil-neh-pleu-VRA-pa" },
      { fr: "Quelle est la température ?", es: "¿Cuál es la temperatura?", ipa: "ke-le-la-ton-pe-ra-TUR" },
      { fr: "J'adore l'été en France.", es: "Me encanta el verano en Francia.", ipa: "zha-dor-le-TE-on-FRONS" }
    ],
    grammar: "En francés, el clima usa el verbo 'faire' impersonal con 'il': 'il fait beau/chaud/froid'. Para fenómenos específicos se usan verbos propios: 'il pleut' (llover), 'il neige' (nevar), 'il vente' (hacer viento). Nota que 'il' aquí no se refiere a ninguna persona.",
    practice: [
      "Describe el tiempo que hace hoy donde estás en francés.",
      "¿Cuál es tu estación favorita? Di por qué en francés: 'J'adore... parce que...'",
      "Practica el pequeño diálogo de saludo con el tiempo: '—Quel temps fait-il ? —Il fait beau !'"
    ]
  },
  {
    day: 11,
    title: "En el hotel",
    titleNative: "À l'Hôtel",
    focus: "Ya sea un hostal o un hotel de lujo, necesitas saber comunicarte con el personal para hacer tu estancia más cómoda y resolver cualquier problema.",
    vocab: [
      { fr: "la chambre", es: "la habitación", ipa: "la-SHOM-breh" },
      { fr: "la clé / le badge", es: "la llave / la tarjeta", ipa: "la-KLE / leh-BAZH" },
      { fr: "le petit-déjeuner", es: "el desayuno", ipa: "leh-peh-ti-de-zheu-NE" },
      { fr: "la réception", es: "la recepción", ipa: "la-re-sep-SION" },
      { fr: "l'ascenseur", es: "el ascensor / elevador", ipa: "la-son-SEUR" },
      { fr: "le wifi", es: "el wifi", ipa: "leh-wi-FI" },
      { fr: "réserver", es: "reservar", ipa: "re-zer-VE" },
      { fr: "disponible", es: "disponible", ipa: "dis-po-NI-bleh" },
      { fr: "le check-out", es: "la salida del hotel", ipa: "leh-chek-OUT" },
      { fr: "vue sur la mer", es: "vista al mar", ipa: "vü-sür-la-MER" }
    ],
    phrases: [
      { fr: "J'ai une réservation.", es: "Tengo una reservación.", ipa: "zhe-ün-re-zer-va-SION" },
      { fr: "À quelle heure est le petit-déjeuner ?", es: "¿A qué hora es el desayuno?", ipa: "a-kel-EUR-e-leh-peh-ti-de-zheu-NE" },
      { fr: "Il y a un problème avec la chambre.", es: "Hay un problema con la habitación.", ipa: "il-ia-uhn-pro-BLEM-a-vek-la-SHOM-breh" },
      { fr: "Je voudrais une chambre avec vue.", es: "Quisiera una habitación con vista.", ipa: "zheh-vu-DRE-ün-SHOM-breh-a-vek-VÜ" },
      { fr: "À quelle heure dois-je libérer la chambre ?", es: "¿A qué hora debo desocupar la habitación?", ipa: "a-kel-EUR-dua-zheh-li-be-RE-la-SHOM-breh" }
    ],
    grammar: "'Il y a' (hay) es una expresión muy útil que no cambia: 'Il y a un problème' (hay un problema), 'Il y a des chambres disponibles' (hay habitaciones disponibles). Su negación es 'Il n'y a pas de...' (no hay). Esta expresión es equivalente al 'hay' español.",
    practice: [
      "Practica el check-in completo: presentarte, confirmar reservación, pedir información sobre el desayuno.",
      "Imagina un problema en tu cuarto (no hay toallas, el wifi no funciona) y cómo lo reportarías.",
      "Memoriza: 'Il y a un problème...' — es tu frase de rescate para cualquier inconveniente."
    ]
  },
  {
    day: 12,
    title: "Ropa y compras",
    titleNative: "Les Vêtements & Le Shopping",
    focus: "Francia es sinónimo de moda. Saber comprar ropa, preguntar por tallas y negociar en tiendas te dará confianza en uno de los entornos más comunes para los turistas.",
    vocab: [
      { fr: "un pantalon", es: "un pantalón", ipa: "uhn-pon-ta-LON" },
      { fr: "une chemise", es: "una camisa", ipa: "ün-sheh-MIZ" },
      { fr: "une robe", es: "un vestido", ipa: "ün-ROB" },
      { fr: "un manteau", es: "un abrigo", ipa: "uhn-mon-TO" },
      { fr: "les chaussures", es: "los zapatos", ipa: "le-sho-SÜR" },
      { fr: "la taille", es: "la talla", ipa: "la-TA-yeh" },
      { fr: "essayer", es: "probar (ropa)", ipa: "e-se-YE" },
      { fr: "ça me va bien", es: "me queda bien", ipa: "sa-meh-va-BIEN" },
      { fr: "en solde", es: "en oferta / rebajado", ipa: "on-SOLD" },
      { fr: "la caisse", es: "la caja / caja registradora", ipa: "la-KES" }
    ],
    phrases: [
      { fr: "Je cherche une chemise blanche.", es: "Busco una camisa blanca.", ipa: "zheh-SHER-SH-ün-sheh-MIZ-BLONSH" },
      { fr: "Je fais du 42.", es: "Uso la talla 42.", ipa: "zheh-fe-dü-ka-RONT-deu" },
      { fr: "Je peux l'essayer ?", es: "¿Puedo probármelo?", ipa: "zheh-peu-le-se-YE" },
      { fr: "C'est trop serré.", es: "Es demasiado ajustado.", ipa: "se-tro-se-RE" },
      { fr: "Vous acceptez la carte ?", es: "¿Aceptan tarjeta?", ipa: "vu-zak-sep-TE-la-KART" }
    ],
    grammar: "El verbo 'essayer' (probar) se conjuga con cambio ortográfico: j'essaie, tu essaies, il essaie. Los probadores se llaman 'les cabines d'essayage'. Para preguntar por un artículo específico usa 'Vous avez... en taille...?' Las tallas francesas difieren de las latinoamericanas — investiga tu equivalente.",
    practice: [
      "Practica el diálogo completo: entrar, buscar, preguntar talla, probar, y pagar.",
      "¿Cómo dirías que algo te queda grande? ¿Y pequeño? Practica ambas frases.",
      "Memoriza los colores de hoy y úsalos describiendo ropa: 'Je cherche un manteau noir.'"
    ]
  },
  {
    day: 13,
    title: "Salud y el cuerpo",
    titleNative: "La Santé & Le Corps",
    focus: "Esperar que nunca lo necesites, pero en caso de una emergencia médica o una visita a la farmacia, debes poder comunicarte claramente sobre tu salud.",
    vocab: [
      { fr: "la tête", es: "la cabeza", ipa: "la-TET" },
      { fr: "le ventre", es: "el estómago / vientre", ipa: "leh-VON-treh" },
      { fr: "le dos", es: "la espalda", ipa: "leh-DO" },
      { fr: "la gorge", es: "la garganta", ipa: "la-GORZH" },
      { fr: "la fièvre", es: "la fiebre", ipa: "la-FIEV-reh" },
      { fr: "j'ai mal à", es: "me duele el/la", ipa: "zhe-mal-A" },
      { fr: "le médecin", es: "el médico", ipa: "leh-med-SEN" },
      { fr: "la pharmacie", es: "la farmacia", ipa: "la-far-ma-SI" },
      { fr: "une ordonnance", es: "una receta médica", ipa: "ün-or-do-NONS" },
      { fr: "les urgences", es: "las urgencias / emergencias", ipa: "le-zur-ZHONS" }
    ],
    phrases: [
      { fr: "J'ai mal à la tête.", es: "Me duele la cabeza.", ipa: "zhe-mal-a-la-TET" },
      { fr: "J'ai de la fièvre.", es: "Tengo fiebre.", ipa: "zhe-deh-la-FIEV-reh" },
      { fr: "Je me sens très mal.", es: "Me siento muy mal.", ipa: "zheh-meh-son-tre-MAL" },
      { fr: "Où est la pharmacie la plus proche ?", es: "¿Dónde está la farmacia más cercana?", ipa: "u-e-la-far-ma-SI-la-plü-PROSH" },
      { fr: "Appelez le SAMU !", es: "¡Llame al 15 (emergencias)!", ipa: "a-pe-LE-leh-sa-MÜ" }
    ],
    grammar: "Para expresar dolor en francés: 'J'ai mal à + artículo + parte del cuerpo'. Atención a las contracciones: 'J'ai mal au dos' (espalda — masculino), 'J'ai mal à la tête' (cabeza — femenino), 'J'ai mal aux pieds' (pies — plural). El SAMU es el 15 (emergencias médicas en Francia).",
    practice: [
      "Aprende de memoria: '—Qu'est-ce qui ne va pas ? —J'ai mal à la tête et de la fièvre.'",
      "Identifica las partes del cuerpo en francés señalándolas mientras las dices en voz alta.",
      "¿Cómo pedirías un analgésico en la farmacia? Practica la frase."
    ]
  },
  {
    day: 14,
    title: "Trabajo y profesiones",
    titleNative: "Le Travail & Les Professions",
    focus: "Hablar sobre el trabajo y las profesiones es inevitable en las conversaciones. En contextos profesionales o sociales, estos temas aparecen desde el primer encuentro.",
    vocab: [
      { fr: "qu'est-ce que vous faites ?", es: "¿a qué se dedica usted?", ipa: "ke-skeh-vu-FET" },
      { fr: "je travaille dans", es: "trabajo en", ipa: "zheh-tra-VA-yeh-don" },
      { fr: "médecin", es: "médico/a", ipa: "med-SEN" },
      { fr: "ingénieur", es: "ingeniero/a", ipa: "en-zhe-NIEUR" },
      { fr: "enseignant(e)", es: "maestro/a", ipa: "on-se-NION" },
      { fr: "avocat(e)", es: "abogado/a", ipa: "a-vo-KA" },
      { fr: "informaticien(ne)", es: "informático/a", ipa: "en-for-ma-ti-SIEN" },
      { fr: "chef cuisinier", es: "chef cocinero", ipa: "shef-kwi-zi-NIE" },
      { fr: "à mon compte", es: "por cuenta propia / independiente", ipa: "a-mon-KONT" },
      { fr: "le bureau", es: "la oficina", ipa: "leh-bü-RO" }
    ],
    phrases: [
      { fr: "Qu'est-ce que vous faites dans la vie ?", es: "¿A qué se dedica en la vida?", ipa: "ke-skeh-vu-fet-don-la-VI" },
      { fr: "Je suis enseignant(e) à Madrid.", es: "Soy maestro/a en Madrid.", ipa: "zheh-swi-on-se-NION-a-ma-DRID" },
      { fr: "Je travaille à mon compte.", es: "Trabajo por cuenta propia.", ipa: "zheh-tra-VA-yeh-a-mon-KONT" },
      { fr: "J'aime beaucoup mon travail.", es: "Me gusta mucho mi trabajo.", ipa: "zhem-bo-ku-mon-tra-VA-yeh" },
      { fr: "Je cherche un emploi.", es: "Busco trabajo.", ipa: "zheh-SHER-SH-uhn-on-PLUA" }
    ],
    grammar: "En francés, las profesiones no llevan artículo después de 'être': 'Je suis médecin' (no 'Je suis un médecin'). Pero si hay un adjetivo, sí se usa: 'C'est un bon médecin'. Muchas profesiones tienen forma femenina: infirmier → infirmière, enseignant → enseignante.",
    practice: [
      "Di tu profesión en francés: 'Je suis...' Si eres estudiante: 'Je suis étudiant(e).'",
      "Practica preguntar y responder: '—Qu'est-ce que vous faites ? —Je suis..., je travaille dans...'",
      "Aprende 5 profesiones relevantes para tu entorno y practica con ellas."
    ]
  },
  {
    day: 15,
    title: "Pasatiempos y tiempo libre",
    titleNative: "Les Loisirs",
    focus: "Los pasatiempos son un tema de conversación natural y personal. Hablar de lo que te gusta hacer en tu tiempo libre crea conexiones auténticas con nativos.",
    vocab: [
      { fr: "lire", es: "leer", ipa: "LIR" },
      { fr: "écouter de la musique", es: "escuchar música", ipa: "e-ku-TE-deh-la-mü-ZIK" },
      { fr: "faire du sport", es: "hacer deporte", ipa: "fer-dü-SPOR" },
      { fr: "voyager", es: "viajar", ipa: "vua-ya-ZHE" },
      { fr: "cuisiner", es: "cocinar", ipa: "kwi-zi-NE" },
      { fr: "peindre", es: "pintar", ipa: "PENDR" },
      { fr: "jouer aux cartes", es: "jugar a las cartas", ipa: "zhue-o-KART" },
      { fr: "regarder des films", es: "ver películas", ipa: "reh-gar-DE-de-FILM" },
      { fr: "se balader", es: "pasear / dar un paseo", ipa: "seh-ba-la-DE" },
      { fr: "le week-end", es: "el fin de semana", ipa: "leh-wi-KEND" }
    ],
    phrases: [
      { fr: "Qu'est-ce que vous aimez faire le week-end ?", es: "¿Qué le gusta hacer el fin de semana?", ipa: "ke-skeh-vu-ze-ME-fer-leh-wi-KEND" },
      { fr: "J'adore lire des romans.", es: "Me encanta leer novelas.", ipa: "zha-dor-LIR-de-ro-MON" },
      { fr: "Je fais du vélo le dimanche.", es: "Ando en bicicleta los domingos.", ipa: "zheh-fe-dü-ve-lo-leh-di-MONSH" },
      { fr: "On pourrait aller au cinéma ?", es: "¿Podríamos ir al cine?", ipa: "on-pu-RE-ta-le-o-si-ne-MA" },
      { fr: "Je n'ai pas le temps ces jours-ci.", es: "No tengo tiempo estos días.", ipa: "zheh-ne-pa-leh-ton-se-zhur-SI" }
    ],
    grammar: "Para hablar de actividades habituales se usa el presente: 'Je lis tous les soirs' (leo todas las noches). Con 'faire' para deportes y actividades: 'Je fais du vélo' (ando en bici), 'Je fais du yoga'. Con 'jouer': deportes de equipo — 'Je joue au football'. La distinción faire/jouer es importante.",
    practice: [
      "Lista tus tres actividades favoritas del fin de semana en francés.",
      "Invita a alguien a una actividad: 'On pourrait aller...?' y practica aceptar y rechazar.",
      "Describe tu semana típica usando presente habitual: 'Le lundi je..., le vendredi je...'"
    ]
  },
  {
    day: 16,
    title: "La ciudad",
    titleNative: "La Ville",
    focus: "Orientarte en una ciudad francesa y conocer los lugares clave te da independencia. También te permitirá hacer planes y sugerir actividades a nativos.",
    vocab: [
      { fr: "la mairie", es: "el ayuntamiento / municipio", ipa: "la-me-RI" },
      { fr: "l'église", es: "la iglesia", ipa: "le-GLIZ" },
      { fr: "le musée", es: "el museo", ipa: "leh-mü-ZE" },
      { fr: "la bibliothèque", es: "la biblioteca", ipa: "la-bi-blio-TEK" },
      { fr: "le parc", es: "el parque", ipa: "leh-PARK" },
      { fr: "la poste", es: "el correo / la oficina postal", ipa: "la-POST" },
      { fr: "le commissariat", es: "la comisaría / policía", ipa: "leh-ko-mi-sa-RIA" },
      { fr: "le centre-ville", es: "el centro de la ciudad", ipa: "leh-son-treh-VIL" },
      { fr: "la banlieue", es: "los suburbios / las afueras", ipa: "la-bon-LIEU" },
      { fr: "la place", es: "la plaza", ipa: "la-PLAS" }
    ],
    phrases: [
      { fr: "Où se trouve le musée du Louvre ?", es: "¿Dónde está el museo del Louvre?", ipa: "u-seh-truv-leh-mü-ZE-dü-LUVR" },
      { fr: "C'est loin d'ici ?", es: "¿Está lejos de aquí?", ipa: "se-luen-di-SI" },
      { fr: "Je cherche la poste.", es: "Busco la oficina de correos.", ipa: "zheh-SHER-SH-la-POST" },
      { fr: "Le marché est sur la place principale.", es: "El mercado está en la plaza principal.", ipa: "leh-mar-SHE-e-sür-la-PLAS-pren-si-PAL" },
      { fr: "La ville est vraiment belle !", es: "¡La ciudad es realmente hermosa!", ipa: "la-VIL-e-vre-mon-BEL" }
    ],
    grammar: "'Se trouver' es una forma elegante de decir 'estar ubicado': 'Le musée se trouve rue de Rivoli'. 'Où est' y 'Où se trouve' son intercambiables pero 'se trouver' suena más formal. Para dar ubicaciones: 'C'est à côté de...' (está al lado de), 'C'est en face de...' (está enfrente de).",
    practice: [
      "Describe la ciudad donde vives usando 5 de las palabras de hoy.",
      "Practica dar indicaciones desde tu casa imaginaria hasta un lugar importante.",
      "¿Cómo preguntarías dónde está el baño en un museo? Practica la frase."
    ]
  },
  {
    day: 17,
    title: "En casa",
    titleNative: "À la Maison",
    focus: "El vocabulario del hogar es fundamental para describir dónde vives, para entender textos de arriendos o para hablar con tus anfitriones si te quedas en casa de alguien.",
    vocab: [
      { fr: "le salon", es: "la sala de estar", ipa: "leh-sa-LON" },
      { fr: "la cuisine", es: "la cocina", ipa: "la-kwi-ZIN" },
      { fr: "la chambre", es: "la habitación / recámara", ipa: "la-SHOM-breh" },
      { fr: "la salle de bains", es: "el baño", ipa: "la-sal-deh-BEN" },
      { fr: "le jardin", es: "el jardín", ipa: "leh-zhar-DEN" },
      { fr: "le balcon", es: "el balcón", ipa: "leh-bal-KON" },
      { fr: "les meubles", es: "los muebles", ipa: "le-MEUBLEH" },
      { fr: "le loyer", es: "el alquiler", ipa: "leh-lua-YE" },
      { fr: "les voisins", es: "los vecinos", ipa: "le-vua-ZEN" },
      { fr: "emménager", es: "mudarse (a un lugar)", ipa: "e-me-na-ZHE" }
    ],
    phrases: [
      { fr: "J'habite dans un appartement.", es: "Vivo en un apartamento.", ipa: "zha-BIT-don-zuhn-a-par-teh-MON" },
      { fr: "Mon appartement a deux chambres.", es: "Mi apartamento tiene dos habitaciones.", ipa: "mon-a-par-teh-MON-a-deu-SHOM-breh" },
      { fr: "Le loyer est cher à Paris.", es: "El alquiler es caro en París.", ipa: "leh-lua-YE-e-SHER-a-pa-RI" },
      { fr: "Faites comme chez vous !", es: "¡Siéntase como en casa!", ipa: "fet-kom-she-VU" },
      { fr: "La salle de bains est au premier étage.", es: "El baño está en el primer piso.", ipa: "la-sal-deh-BEN-e-o-preh-mie-re-TAZH" }
    ],
    grammar: "Los pisos en Francia se cuentan diferente: 'le rez-de-chaussée' es la planta baja (nivel 0), 'le premier étage' es el primer piso (lo que en Latinoamérica sería el segundo). 'J'habite' viene del verbo 'habiter' — nota que la 'h' siempre es muda en francés.",
    practice: [
      "Describe tu hogar actual usando 5 palabras de hoy: '—Où est-ce que tu habites ? —J'habite...'",
      "¿Cómo dirías que tu apartamento tiene sala, cocina, dos cuartos y un baño? Practica.",
      "Aprende de memoria 'Faites comme chez vous !' — la usarás cuando recibas visitas."
    ]
  },
  {
    day: 18,
    title: "Tecnología y comunicación",
    titleNative: "Technologie & Communication",
    focus: "En el mundo moderno, la tecnología es parte de toda conversación. Saber hablar de teléfonos, internet y redes sociales en francés es esencial para conectar con jóvenes francófonos.",
    vocab: [
      { fr: "le portable", es: "el celular / teléfono móvil", ipa: "leh-por-ta-BLEH" },
      { fr: "le chargeur", es: "el cargador", ipa: "leh-shar-ZHEUR" },
      { fr: "le réseau", es: "la red / la señal", ipa: "leh-re-ZO" },
      { fr: "une application", es: "una aplicación", ipa: "ün-a-pli-ka-SION" },
      { fr: "envoyer un message", es: "enviar un mensaje", ipa: "on-vua-YE-uhn-me-SAZH" },
      { fr: "le mot de passe", es: "la contraseña", ipa: "leh-mo-deh-PAS" },
      { fr: "la connexion", es: "la conexión", ipa: "la-ko-nek-SION" },
      { fr: "télécharger", es: "descargar", ipa: "te-le-shar-ZHE" },
      { fr: "les réseaux sociaux", es: "las redes sociales", ipa: "le-re-zo-so-SIO" },
      { fr: "recharger", es: "recargar / cargar (batería)", ipa: "reh-shar-ZHE" }
    ],
    phrases: [
      { fr: "Est-ce qu'il y a le wifi ici ?", es: "¿Hay wifi aquí?", ipa: "es-kil-ia-leh-wi-FI-i-SI" },
      { fr: "Mon téléphone est déchargé.", es: "Mi teléfono está sin batería.", ipa: "mon-te-le-FON-e-de-shar-ZHE" },
      { fr: "Tu peux m'envoyer le lien ?", es: "¿Puedes enviarme el enlace?", ipa: "tü-peu-mon-vua-YE-leh-LIEN" },
      { fr: "Je n'ai pas de réseau ici.", es: "No tengo señal aquí.", ipa: "zheh-ne-pa-deh-re-ZO-i-SI" },
      { fr: "C'est quoi ton numéro ?", es: "¿Cuál es tu número?", ipa: "se-kua-ton-nü-me-RO" }
    ],
    grammar: "En francés moderno hay muchos anglicismos tecnológicos: 'le smartphone', 'le selfie', 'le tweet'. Sin embargo, los franceses también tienen sus equivalentes propios: 'le courriel' (email), 'le numérique' (digital). La Academia Francesa defiende activamente el uso del francés puro.",
    practice: [
      "¿Cómo le pedirías la contraseña del wifi a alguien? Practica la pregunta.",
      "Describe tu rutina con el teléfono por la mañana en francés.",
      "Aprende a dar tu número de teléfono en francés diciendo cada dígito de dos en dos."
    ]
  },
  {
    day: 19,
    title: "Viajes y turismo",
    titleNative: "Voyages & Tourisme",
    focus: "Viajar es una de las razones principales para aprender francés. Este vocabulario te ayudará en aeropuertos, museos, tours y cuando explores destinos francófonos.",
    vocab: [
      { fr: "l'aéroport", es: "el aeropuerto", ipa: "la-e-ro-POR" },
      { fr: "le passeport", es: "el pasaporte", ipa: "leh-pas-POR" },
      { fr: "la valise", es: "la maleta", ipa: "la-va-LIZ" },
      { fr: "l'office de tourisme", es: "la oficina de turismo", ipa: "lo-fis-deh-tu-RISM" },
      { fr: "un guide touristique", es: "una guía turística", ipa: "uhn-GID-tu-ris-TIK" },
      { fr: "un billet", es: "un boleto / billete", ipa: "uhn-bi-YE" },
      { fr: "une excursion", es: "una excursión", ipa: "ün-ek-skür-SION" },
      { fr: "le patrimoine", es: "el patrimonio (cultural)", ipa: "leh-pa-tri-MUAN" },
      { fr: "se perdre", es: "perderse", ipa: "seh-PERDR" },
      { fr: "un souvenir", es: "un recuerdo / souvenir", ipa: "uhn-su-veh-NIR" }
    ],
    phrases: [
      { fr: "Je suis en vacances.", es: "Estoy de vacaciones.", ipa: "zheh-swi-on-va-KONS" },
      { fr: "Où puis-je acheter des billets ?", es: "¿Dónde puedo comprar boletos?", ipa: "u-pwi-zheh-ash-TE-de-bi-YE" },
      { fr: "Je suis perdu(e). Pouvez-vous m'aider ?", es: "Estoy perdido/a. ¿Puede ayudarme?", ipa: "zheh-swi-per-DÜ. pu-ve-vu-me-DE" },
      { fr: "C'est à ne pas manquer !", es: "¡Es imperdible!", ipa: "se-ta-neh-pa-mon-KE" },
      { fr: "On peut visiter... ?", es: "¿Podemos visitar...?", ipa: "on-peu-vi-zi-TE" }
    ],
    grammar: "'Pouvoir' (poder) + infinitivo es la estructura para pedir permiso o hablar de posibilidades: 'On peut...?' (¿Podemos...?), 'Je peux...?' (¿Puedo...?), 'Vous pouvez...?' (¿Puede usted...?). Es uno de los verbos más útiles del francés y es irregular — vale la pena memorizarlo completo.",
    practice: [
      "Planea un día de turismo en París en francés: qué visitar, cómo llegar, qué comer.",
      "Practica la situación de estar perdido: '—Excusez-moi, je suis perdu(e). Où est...?'",
      "¿Cuáles son los tres lugares que más quieres visitar en Francia? Díselos en francés."
    ]
  },
  {
    day: 20,
    title: "Emociones y sentimientos",
    titleNative: "Émotions & Sentiments",
    focus: "Expresar cómo te sientes va mucho más allá de 'bien' o 'mal'. Los franceses son muy expresivos con sus emociones — aprender este vocabulario te permitirá conversaciones más profundas y auténticas.",
    vocab: [
      { fr: "heureux / heureuse", es: "feliz / contento", ipa: "eu-REU / eu-REUZ" },
      { fr: "triste", es: "triste", ipa: "TRIST" },
      { fr: "fatigué(e)", es: "cansado/a", ipa: "fa-ti-GE" },
      { fr: "stressé(e)", es: "estresado/a", ipa: "stre-SE" },
      { fr: "surpris(e)", es: "sorprendido/a", ipa: "sür-PRI / sür-PRIZ" },
      { fr: "énervé(e)", es: "irritado/a / molesto/a", ipa: "e-ner-VE" },
      { fr: "amoureux / amoureuse", es: "enamorado/a", ipa: "a-mu-REU / a-mu-REUZ" },
      { fr: "inquiet / inquiète", es: "preocupado/a", ipa: "en-KIET / en-KIET" },
      { fr: "fier / fière", es: "orgulloso/a", ipa: "FIER" },
      { fr: "ça m'est égal", es: "me da igual / no me importa", ipa: "sa-me-te-GAL" }
    ],
    phrases: [
      { fr: "Je me sens très heureux aujourd'hui.", es: "Me siento muy feliz hoy.", ipa: "zheh-meh-son-tre-eu-REU-o-zhur-DWEE" },
      { fr: "Je suis un peu stressé(e) par le travail.", es: "Estoy un poco estresado/a por el trabajo.", ipa: "zheh-swi-uhn-peu-stre-SE-par-leh-tra-VA-yeh" },
      { fr: "Je suis tellement fatigué(e) !", es: "¡Estoy tan cansado/a!", ipa: "zheh-swi-tel-mon-fa-ti-GE" },
      { fr: "Ça me rend heureux.", es: "Eso me hace feliz.", ipa: "sa-meh-ron-eu-REU" },
      { fr: "Je suis fier(ère) de toi !", es: "¡Estoy orgulloso/a de ti!", ipa: "zheh-swi-FIER-deh-tua" }
    ],
    grammar: "'Se sentir' y 'être' se usan para emociones: 'Je me sens triste' o 'Je suis triste'. La diferencia es sutil: 'se sentir' expresa un estado momentáneo, 'être' puede ser más permanente. El intensificador 'tellement' (tan/tanto) es muy coloquial y expresivo: 'Je suis tellement content !'",
    practice: [
      "¿Cómo te sientes ahora mismo? Descríbelo en francés con al menos dos emociones.",
      "Practica expresar emociones sobre situaciones: 'Quand je voyage, je me sens...'",
      "Aprende a reconocer estas emociones cuando las escuches — ponlas en contexto de películas o series francesas."
    ]
  },
  {
    day: 21,
    title: "La naturaleza",
    titleNative: "La Nature",
    focus: "Francia tiene paisajes increíblemente diversos: los Alpes, la Costa Azul, los viñedos de Borgoña, los Pirineos. El vocabulario de naturaleza enriquecerá tus descripciones y conversaciones.",
    vocab: [
      { fr: "la montagne", es: "la montaña", ipa: "la-mon-TAN-yeh" },
      { fr: "la mer", es: "el mar", ipa: "la-MER" },
      { fr: "la forêt", es: "el bosque", ipa: "la-fo-RE" },
      { fr: "la rivière", es: "el río (pequeño)", ipa: "la-ri-VIER" },
      { fr: "le lac", es: "el lago", ipa: "leh-LAK" },
      { fr: "la plage", es: "la playa", ipa: "la-PLAZH" },
      { fr: "la campagne", es: "el campo / el campo rural", ipa: "la-kom-PAN-yeh" },
      { fr: "un paysage", es: "un paisaje", ipa: "uhn-pe-i-ZAZH" },
      { fr: "le coucher de soleil", es: "el atardecer / la puesta del sol", ipa: "leh-ku-she-deh-so-LEI" },
      { fr: "une randonnée", es: "una caminata / senderismo", ipa: "ün-ron-do-NE" }
    ],
    phrases: [
      { fr: "J'adore me promener en forêt.", es: "Me encanta pasear por el bosque.", ipa: "zha-dor-meh-pro-meh-NE-on-fo-RE" },
      { fr: "La vue sur la montagne est magnifique !", es: "¡La vista de la montaña es magnífica!", ipa: "la-VÜ-sür-la-mon-TAN-yeh-e-man-yi-FIK" },
      { fr: "On va à la plage ce week-end ?", es: "¿Vamos a la playa este fin de semana?", ipa: "on-va-a-la-PLAZH-seh-wi-KEND" },
      { fr: "Le coucher de soleil était extraordinaire.", es: "El atardecer fue extraordinario.", ipa: "leh-ku-she-deh-so-LEI-e-te-eks-tra-or-di-NER" },
      { fr: "Je préfère la mer à la montagne.", es: "Prefiero el mar a la montaña.", ipa: "zheh-pre-FER-la-MER-a-la-mon-TAN-yeh" }
    ],
    grammar: "'Préférer' (preferir) toma la construcción 'préférer A à B' (preferir A sobre B): 'Je préfère la mer à la montagne'. El verbo tiene acento cambiante: 'je préfère' pero 'nous préférons'. Esta es una estructura muy útil para expresar preferencias de manera elegante.",
    practice: [
      "¿Prefieres el mar o la montaña? ¿La ciudad o el campo? Dilo en francés con 'je préfère... à...'",
      "Describe el paisaje más hermoso que hayas visto en francés.",
      "Planea una actividad en la naturaleza en francés: '—On pourrait faire une randonnée ce week-end !'"
    ]
  },
  {
    day: 22,
    title: "En el banco y el dinero",
    titleNative: "À la Banque & L'Argent",
    focus: "Gestionar el dinero en Francia requiere vocabulario específico. El euro tiene sus propias denominaciones y hay términos bancarios que debes conocer para operaciones cotidianas.",
    vocab: [
      { fr: "un billet", es: "un billete (de dinero)", ipa: "uhn-bi-YE" },
      { fr: "une pièce", es: "una moneda", ipa: "ün-PIES" },
      { fr: "un compte bancaire", es: "una cuenta bancaria", ipa: "uhn-KONT-bon-KER" },
      { fr: "un virement", es: "una transferencia", ipa: "uhn-vir-MON" },
      { fr: "un distributeur", es: "un cajero automático (ATM)", ipa: "uhn-dis-tri-bü-TEUR" },
      { fr: "le taux de change", es: "el tipo de cambio", ipa: "leh-to-deh-SHONZH" },
      { fr: "changer de l'argent", es: "cambiar dinero", ipa: "shon-ZHE-deh-lar-ZHON" },
      { fr: "en espèces", es: "en efectivo", ipa: "on-es-PES" },
      { fr: "par carte", es: "con tarjeta", ipa: "par-KART" },
      { fr: "le reçu", es: "el recibo", ipa: "leh-reh-SÜ" }
    ],
    phrases: [
      { fr: "Où est le distributeur le plus proche ?", es: "¿Dónde está el cajero más cercano?", ipa: "u-e-leh-dis-tri-bü-TEUR-leh-plü-PROSH" },
      { fr: "Je voudrais changer des euros.", es: "Quisiera cambiar euros.", ipa: "zheh-vu-DRE-shon-ZHE-de-EU-ro" },
      { fr: "Vous acceptez les chèques ?", es: "¿Aceptan cheques?", ipa: "vu-zak-sep-TE-le-SHEK" },
      { fr: "Je peux payer par carte ?", es: "¿Puedo pagar con tarjeta?", ipa: "zheh-peu-pe-YE-par-KART" },
      { fr: "Donnez-moi un reçu, s'il vous plaît.", es: "Deme un recibo, por favor.", ipa: "do-ne-MUA-uhn-reh-SÜ, sil-vu-PLE" }
    ],
    grammar: "Los números grandes en francés: 'mille' (mil), 'dix mille' (diez mil), 'cent mille' (cien mil), 'un million' (un millón). Para precios: '12,50 €' se dice 'douze euros cinquante'. Nota que Francia usa coma como separador decimal y punto para los miles — al revés que en muchos países hispanohablantes.",
    practice: [
      "Practica decir precios en francés: 5€, 12,50€, 99€, 200€.",
      "¿Cómo dirías que necesitas sacar dinero del cajero? Practica la frase.",
      "Simula una situación en el banco: '—Bonjour, je voudrais...' y completa con una operación."
    ]
  },
  {
    day: 23,
    title: "En la farmacia",
    titleNative: "À la Pharmacie",
    focus: "La farmacia francesa (reconocible por la cruz verde luminosa) es el primer recurso para problemas de salud menores. Los farmacéuticos franceses están altamente capacitados y dan consejos médicos.",
    vocab: [
      { fr: "un médicament", es: "un medicamento", ipa: "uhn-me-di-ka-MON" },
      { fr: "un comprimé", es: "una pastilla / tableta", ipa: "uhn-kom-pri-ME" },
      { fr: "un sirop", es: "un jarabe", ipa: "uhn-si-RO" },
      { fr: "une crème", es: "una crema", ipa: "ün-KREM" },
      { fr: "un pansement", es: "un vendaje / curita", ipa: "uhn-pon-sehMON" },
      { fr: "la douleur", es: "el dolor", ipa: "la-du-LEUR" },
      { fr: "allergique à", es: "alérgico/a a", ipa: "a-ler-ZHIK-a" },
      { fr: "sur ordonnance", es: "con receta médica", ipa: "sür-or-do-NONS" },
      { fr: "sans ordonnance", es: "sin receta / de libre venta", ipa: "son-or-do-NONS" },
      { fr: "la posologie", es: "la dosis / posología", ipa: "la-po-zo-lo-ZHI" }
    ],
    phrases: [
      { fr: "J'ai besoin de quelque chose contre la toux.", es: "Necesito algo para la tos.", ipa: "zhe-be-ZUEN-deh-kel-keh-shoz-KONTR-la-TU" },
      { fr: "Je suis allergique à la pénicilline.", es: "Soy alérgico/a a la penicilina.", ipa: "zheh-swi-a-ler-ZHIK-a-la-pe-ni-si-LIN" },
      { fr: "Quelle est la posologie ?", es: "¿Cuál es la dosis?", ipa: "kel-e-la-po-zo-lo-ZHI" },
      { fr: "Est-ce que c'est disponible sans ordonnance ?", es: "¿Está disponible sin receta?", ipa: "es-keh-se-dis-po-NIB-son-or-do-NONS" },
      { fr: "Ça fait combien ?", es: "¿Cuánto es?", ipa: "sa-fe-kom-BIEN" }
    ],
    grammar: "El verbo 'avoir besoin de' (necesitar) es una expresión muy común: 'J'ai besoin de...' + sustantivo o infinitivo. 'J'ai besoin d'un médicament' (necesito un medicamento), 'J'ai besoin de dormir' (necesito dormir). Es más formal que simplemente 'je veux' (quiero).",
    practice: [
      "Practica describir tres síntomas en francés usando 'J'ai mal à...', 'J'ai de la fièvre...', etc.",
      "¿Cómo pedirías un analgésico sin receta? Practica el diálogo completo en la farmacia.",
      "Aprende a decir tus alergias en francés — es información importante en cualquier país."
    ]
  },
  {
    day: 24,
    title: "Cultura y arte",
    titleNative: "Culture & Art",
    focus: "Francia es una de las capitales culturales del mundo. Poder hablar de arte, museos, películas y literatura en francés te abre puertas a conversaciones muy enriquecedoras con nativos.",
    vocab: [
      { fr: "un tableau", es: "un cuadro / pintura", ipa: "uhn-ta-BLO" },
      { fr: "une sculpture", es: "una escultura", ipa: "ün-skülp-TÜR" },
      { fr: "un chef-d'œuvre", es: "una obra maestra", ipa: "uhn-she-DEUVR" },
      { fr: "l'impressionnisme", es: "el impresionismo", ipa: "len-pre-sio-NISM" },
      { fr: "une exposition", es: "una exposición", ipa: "ün-eks-po-zi-SION" },
      { fr: "le cinéma", es: "el cine", ipa: "leh-si-ne-MA" },
      { fr: "un roman", es: "una novela", ipa: "uhn-ro-MON" },
      { fr: "la littérature", es: "la literatura", ipa: "la-li-te-ra-TÜR" },
      { fr: "un artiste", es: "un artista", ipa: "uhn-ar-TIST" },
      { fr: "ça m'a touché(e)", es: "me conmovió / me llegó", ipa: "sa-ma-tu-SHE" }
    ],
    phrases: [
      { fr: "Je voudrais visiter le Louvre.", es: "Me gustaría visitar el Louvre.", ipa: "zheh-vu-DRE-vi-zi-TE-leh-LUVR" },
      { fr: "Ce tableau est absolument magnifique.", es: "Este cuadro es absolutamente magnífico.", ipa: "seh-ta-BLO-e-ab-so-lü-MON-man-yi-FIK" },
      { fr: "Je suis fan du cinéma français.", es: "Soy fanático/a del cine francés.", ipa: "zheh-swi-fan-dü-si-ne-MA-fron-SE" },
      { fr: "Ça m'a beaucoup touché.", es: "Me conmovió mucho.", ipa: "sa-ma-bo-ku-tu-SHE" },
      { fr: "Tu connais cet artiste ?", es: "¿Conoces a este artista?", ipa: "tü-ko-NE-set-ar-TIST" }
    ],
    grammar: "'Connaître' (conocer a una persona o lugar) vs 'savoir' (saber un hecho o cómo hacer algo) es una distinción crucial: 'Tu connais Monet ?' (¿Conoces a Monet?) vs 'Tu sais peindre ?' (¿Sabes pintar?). Esta diferencia es análoga al español 'conocer' vs 'saber'.",
    practice: [
      "Describe una obra de arte, película o libro que te haya impactado en francés.",
      "Practica: '—Tu connais...? —Oui, je connais... / Non, je ne connais pas...'",
      "Investiga un artista francés (Monet, Rodin, Godard) y prepara 3 frases sobre su obra."
    ]
  },
  {
    day: 25,
    title: "Deportes y ejercicio",
    titleNative: "Sport & Exercice",
    focus: "El deporte es un tema de conversación universal y un excelente punto de conexión con los franceses, especialmente el fútbol, el ciclismo y el tenis.",
    vocab: [
      { fr: "le football", es: "el fútbol", ipa: "leh-fut-BOL" },
      { fr: "le cyclisme", es: "el ciclismo", ipa: "leh-si-KLISM" },
      { fr: "la natation", es: "la natación", ipa: "la-na-ta-SION" },
      { fr: "le tennis", es: "el tenis", ipa: "leh-te-NIS" },
      { fr: "la salle de sport", es: "el gimnasio", ipa: "la-sal-deh-SPOR" },
      { fr: "s'entraîner", es: "entrenarse", ipa: "son-tre-NE" },
      { fr: "gagner", es: "ganar", ipa: "gan-YE" },
      { fr: "perdre", es: "perder", ipa: "PERDR" },
      { fr: "un match", es: "un partido", ipa: "uhn-MATCH" },
      { fr: "l'équipe", es: "el equipo", ipa: "le-KIP" }
    ],
    phrases: [
      { fr: "Tu fais du sport ?", es: "¿Haces deporte?", ipa: "tü-fe-dü-SPOR" },
      { fr: "Je vais à la salle trois fois par semaine.", es: "Voy al gimnasio tres veces por semana.", ipa: "zheh-ve-a-la-SAL-trua-fua-par-seh-MEN" },
      { fr: "Tu as regardé le match hier ?", es: "¿Viste el partido ayer?", ipa: "tü-a-reh-gar-DE-leh-MATCH-i-ER" },
      { fr: "Mon équipe a gagné !", es: "¡Mi equipo ganó!", ipa: "mon-e-KIP-a-gan-YE" },
      { fr: "Le Tour de France est incroyable.", es: "El Tour de France es increíble.", ipa: "leh-tur-deh-FRONS-e-en-krua-YA-bleh" }
    ],
    grammar: "Para hablar de deporte habitual: 'faire du/de la + deporte' para actividades físicas individuales: 'Je fais du yoga', 'Je fais de la natation'. Para deportes de equipo: 'jouer au + deporte': 'Je joue au football', 'Je joue au tennis'. Esta distinción es consistente.",
    practice: [
      "¿Qué deportes practicas? Dilo en francés: 'Je fais du...' o 'Je joue au...'",
      "Practica hablar de un partido reciente o de tu equipo favorito en francés.",
      "¿Cómo invitarías a alguien a hacer deporte juntos? Crea la propuesta en francés."
    ]
  },
  {
    day: 26,
    title: "La música",
    titleNative: "La Musique",
    focus: "La música francesa es rica y variada — desde la chanson tradicional hasta el hip-hop. Conocer el vocabulario musical te permitirá conectar culturalmente de una manera más profunda.",
    vocab: [
      { fr: "une chanson", es: "una canción", ipa: "ün-shon-SON" },
      { fr: "un chanteur / une chanteuse", es: "un cantante / una cantante", ipa: "uhn-shon-TEUR / ün-shon-TEUZ" },
      { fr: "jouer d'un instrument", es: "tocar un instrumento", ipa: "zhue-duhn-en-strü-MON" },
      { fr: "la guitare", es: "la guitarra", ipa: "la-gi-TAR" },
      { fr: "le piano", es: "el piano", ipa: "leh-pia-NO" },
      { fr: "un concert", es: "un concierto", ipa: "uhn-kon-SER" },
      { fr: "une playlist", es: "una lista de reproducción", ipa: "ün-PLAY-list" },
      { fr: "le rythme", es: "el ritmo", ipa: "leh-RITM" },
      { fr: "les paroles", es: "la letra (de una canción)", ipa: "le-pa-ROL" },
      { fr: "avoir l'oreille musicale", es: "tener oído musical", ipa: "a-vuar-lo-REI-mü-zi-KAL" }
    ],
    phrases: [
      { fr: "Qu'est-ce que tu écoutes comme musique ?", es: "¿Qué tipo de música escuchas?", ipa: "ke-skeh-tü-e-KUT-kom-mü-ZIK" },
      { fr: "J'adore Édith Piaf.", es: "Me encanta Édith Piaf.", ipa: "zha-dor-e-DIT-PIAF" },
      { fr: "Tu joues d'un instrument ?", es: "¿Tocas algún instrumento?", ipa: "tü-zhue-duhn-en-strü-MON" },
      { fr: "On va à un concert ce soir ?", es: "¿Vamos a un concierto esta noche?", ipa: "on-va-a-uhn-kon-SER-seh-SUAR" },
      { fr: "Cette chanson est vraiment belle.", es: "Esa canción es realmente hermosa.", ipa: "set-shon-SON-e-vre-MON-BEL" }
    ],
    grammar: "Para hablar de instrumentos: 'jouer de + artículo + instrumento': 'Je joue de la guitare', 'Je joue du piano'. Nota que es 'de' no 'avec' — no se dice 'Je joue avec la guitare'. Esta distinción se aplica a todos los instrumentos musicales sin excepción.",
    practice: [
      "¿Qué música escuchas? Di tu género y artista favorito en francés.",
      "¿Tocas algún instrumento? Practica: 'Je joue de...' o 'Je ne sais pas jouer d'un instrument.'",
      "Escucha una canción francesa (Édith Piaf, Stromae, Zaz) e intenta identificar palabras que ya conoces."
    ]
  },
  {
    day: 27,
    title: "El pasado: passé composé",
    titleNative: "Le Passé Composé",
    focus: "El passé composé es el tiempo pasado más usado en la conversación francesa. Equivale al pretérito perfecto del español ('he comido') y también al indefinido ('comí') según el contexto.",
    vocab: [
      { fr: "j'ai mangé", es: "comí / he comido", ipa: "zhe-mon-ZHE" },
      { fr: "j'ai bu", es: "bebí / he bebido", ipa: "zhe-BÜ" },
      { fr: "j'ai vu", es: "vi / he visto", ipa: "zhe-VÜ" },
      { fr: "je suis allé(e)", es: "fui / he ido", ipa: "zheh-swi-za-LE" },
      { fr: "j'ai fait", es: "hice / he hecho", ipa: "zhe-FE" },
      { fr: "j'ai dit", es: "dije / he dicho", ipa: "zhe-DI" },
      { fr: "hier", es: "ayer", ipa: "i-ER" },
      { fr: "la semaine dernière", es: "la semana pasada", ipa: "la-seh-MEN-der-NIER" },
      { fr: "il y a trois jours", es: "hace tres días", ipa: "il-ia-trua-ZHUR" },
      { fr: "déjà", es: "ya", ipa: "de-ZHA" }
    ],
    phrases: [
      { fr: "Hier, j'ai mangé une crêpe délicieuse.", es: "Ayer comí una crepa deliciosa.", ipa: "i-ER-zhe-mon-ZHE-ün-KREP-de-li-SIEUZ" },
      { fr: "Je suis allé(e) à Paris la semaine dernière.", es: "Fui a París la semana pasada.", ipa: "zheh-swi-za-LE-a-pa-RI-la-seh-MEN-der-NIER" },
      { fr: "Tu as déjà visité la Tour Eiffel ?", es: "¿Ya visitaste la Torre Eiffel?", ipa: "tü-a-de-ZHA-vi-zi-TE-la-tur-e-FEL" },
      { fr: "J'ai vu un très beau film hier soir.", es: "Vi una película muy bonita anoche.", ipa: "zhe-VÜ-uhn-tre-bo-FILM-i-ER-SUAR" },
      { fr: "Qu'est-ce que tu as fait ce week-end ?", es: "¿Qué hiciste este fin de semana?", ipa: "ke-skeh-tü-a-fe-seh-wi-KEND" }
    ],
    grammar: "El passé composé se forma con 'avoir' o 'être' + participio pasado. La mayoría usa 'avoir': 'j'ai mangé', 'j'ai vu'. Los verbos de movimiento y reflexivos usan 'être': 'je suis allé(e)', 'je me suis levé(e)'. Con 'être', el participio concuerda con el sujeto: 'Elle est allée'.",
    practice: [
      "Describe lo que hiciste ayer usando 5 verbos en passé composé.",
      "Practica: '—Qu'est-ce que tu as fait hier ? —J'ai...' (con al menos 3 actividades).",
      "¿Cuáles son los 5 participios irregulares más importantes que debes memorizar? (avoir: eu, être: été, faire: fait, voir: vu, aller: allé)"
    ]
  },
  {
    day: 28,
    title: "Expresiones idiomáticas",
    titleNative: "Expressions Idiomatiques",
    focus: "Las expresiones idiomáticas son las que realmente hacen que suenes como un nativo. Los franceses las usan constantemente — aprenderlas te dará una ventaja enorme en la fluidez.",
    vocab: [
      { fr: "avoir le cafard", es: "estar deprimido / melancólico (lit: tener la cucaracha)", ipa: "a-vuar-leh-ka-FAR" },
      { fr: "casser les pieds", es: "molestar / fastidiar (lit: romper los pies)", ipa: "ka-SE-le-PIE" },
      { fr: "avoir le coup de foudre", es: "enamorarse a primera vista (lit: golpe de rayo)", ipa: "a-vuar-leh-ku-deh-FUDR" },
      { fr: "poser un lapin", es: "dejar plantado (lit: poner un conejo)", ipa: "po-ZE-uhn-la-PEN" },
      { fr: "avoir du pain sur la planche", es: "tener mucho trabajo por hacer", ipa: "a-vuar-dü-PEN-sür-la-PLONSH" },
      { fr: "c'est la vie", es: "así es la vida", ipa: "se-la-VI" },
      { fr: "avoir le beurre et l'argent du beurre", es: "querer todo (lit: tener la mantequilla y el dinero de la mantequilla)", ipa: "a-vuar-leh-BEUR-e-lar-ZHON-dü-BEUR" },
      { fr: "tomber dans les pommes", es: "desmayarse (lit: caer en las manzanas)", ipa: "ton-BE-don-le-POM" },
      { fr: "coûter les yeux de la tête", es: "costar un ojo de la cara", ipa: "ku-TE-le-IEU-deh-la-TET" },
      { fr: "avoir d'autres chats à fouetter", es: "tener cosas más importantes que hacer", ipa: "a-vuar-dotr-SHA-a-fue-TE" }
    ],
    phrases: [
      { fr: "Il m'a posé un lapin hier soir !", es: "¡Me dejó plantado anoche!", ipa: "il-ma-po-ZE-uhn-la-PEN-i-ER-SUAR" },
      { fr: "Ce restaurant coûte les yeux de la tête.", es: "Ese restaurante cuesta un ojo de la cara.", ipa: "seh-res-to-RON-kut-le-IEU-deh-la-TET" },
      { fr: "J'ai le cafard aujourd'hui.", es: "Estoy melancólico hoy.", ipa: "zhe-leh-ka-FAR-o-zhur-DWEE" },
      { fr: "On a eu le coup de foudre.", es: "Nos enamoramos a primera vista.", ipa: "on-a-eu-leh-ku-deh-FUDR" },
      { fr: "C'est la vie !", es: "¡Así es la vida!", ipa: "se-la-VI" }
    ],
    grammar: "Las expresiones idiomáticas raramente son traducibles literalmente. Lo mejor es aprenderlas en contexto. La mayoría involucra el verbo 'avoir' (tener) para estados: 'avoir le cafard', 'avoir du courage'. Esta es la razón por la que dominar 'avoir' es tan importante en francés.",
    practice: [
      "Elige 3 expresiones de hoy y úsalas en frases originales sobre tu propia vida.",
      "¿Cuáles de estas expresiones tienen un equivalente exacto en español? ¿Cuáles son completamente diferentes?",
      "Practica usar 'c'est la vie' en el contexto correcto — es la expresión francesa más conocida del mundo."
    ]
  },
  {
    day: 29,
    title: "Conversación avanzada",
    titleNative: "Conversation Avancée",
    focus: "Hoy practicamos estructuras más sofisticadas para conversaciones más fluidas y naturales. Estas expresiones te llevarán del nivel básico al intermedio real.",
    vocab: [
      { fr: "à mon avis", es: "en mi opinión", ipa: "a-mon-a-VI" },
      { fr: "en fait", es: "de hecho / en realidad", ipa: "on-FE" },
      { fr: "d'ailleurs", es: "por cierto / además", ipa: "da-IEUR" },
      { fr: "pourtant", es: "sin embargo / a pesar de eso", ipa: "pur-TON" },
      { fr: "c'est-à-dire", es: "es decir / o sea", ipa: "se-ta-DIR" },
      { fr: "quant à moi", es: "en cuanto a mí / por mi parte", ipa: "kon-ta-MUA" },
      { fr: "il paraît que", es: "dicen que / parece que", ipa: "il-pa-RE-keh" },
      { fr: "ça dépend", es: "depende", ipa: "sa-de-PON" },
      { fr: "en tout cas", es: "en cualquier caso / de todas formas", ipa: "on-tu-KA" },
      { fr: "sans doute", es: "sin duda", ipa: "son-DUT" }
    ],
    phrases: [
      { fr: "À mon avis, c'est une bonne idée.", es: "En mi opinión, es una buena idea.", ipa: "a-mon-a-VI-se-ün-bon-i-DE" },
      { fr: "En fait, je ne suis pas d'accord.", es: "De hecho, no estoy de acuerdo.", ipa: "on-FE-zheh-neh-swi-pa-da-KOR" },
      { fr: "Ça dépend de la situation.", es: "Depende de la situación.", ipa: "sa-de-PON-deh-la-si-tü-a-SION" },
      { fr: "Il paraît qu'il va pleuvoir demain.", es: "Dicen que va a llover mañana.", ipa: "il-pa-RE-kil-va-pleu-VUAR-deh-MEN" },
      { fr: "En tout cas, merci pour tout !", es: "De todas formas, ¡gracias por todo!", ipa: "on-tu-KA, mer-SI-pur-TU" }
    ],
    grammar: "Los conectores discursivos (en fait, pourtant, d'ailleurs) son los que diferencian a un hablante intermedio de uno avanzado. Úsalos para enlazar ideas y dar fluidez. 'En fait' se pronuncia prácticamente 'onfè' — la 't' final es muda, pero la 'n' final nasaliza la 'e'.",
    practice: [
      "Escribe un párrafo de 5 oraciones sobre cualquier tema usando al menos 4 conectores de hoy.",
      "Practica expresar desacuerdo de manera educada: 'À mon avis... Pourtant... En fait...'",
      "Grábate hablando durante un minuto en francés sobre tu tema favorito. ¿Cuántos conectores usaste?"
    ]
  },
  {
    day: 30,
    title: "Repaso final y celebración",
    titleNative: "Révision Finale & Célébration",
    focus: "¡Has llegado al día 30! Este es tu repaso final — pero también una celebración. Hoy consolidamos todo lo aprendido y trazamos el camino hacia la fluidez continua.",
    vocab: [
      { fr: "félicitations !", es: "¡felicitaciones!", ipa: "fe-li-si-ta-SION" },
      { fr: "je suis fier(ère) de moi", es: "estoy orgulloso/a de mí mismo/a", ipa: "zheh-swi-FIER-deh-MUA" },
      { fr: "j'ai progressé", es: "he progresado", ipa: "zhe-pro-gre-SE" },
      { fr: "continuer", es: "continuar", ipa: "kon-ti-nüE" },
      { fr: "s'améliorer", es: "mejorar / superarse", ipa: "sa-me-lio-RE" },
      { fr: "la fluidité", es: "la fluidez", ipa: "la-flwi-di-TE" },
      { fr: "pratiquer", es: "practicar", ipa: "pra-ti-KE" },
      { fr: "un échange linguistique", es: "un intercambio lingüístico", ipa: "uhn-e-SHONZH-len-gwis-TIK" },
      { fr: "chaque jour", es: "cada día", ipa: "shak-ZHUR" },
      { fr: "le chemin", es: "el camino / el trayecto", ipa: "leh-sheh-MEN" }
    ],
    phrases: [
      { fr: "Je parle un peu français maintenant !", es: "¡Ya hablo un poco de francés!", ipa: "zheh-PARL-uhn-peu-fron-SE-men-teh-NON" },
      { fr: "J'ai appris beaucoup de choses.", es: "He aprendido muchas cosas.", ipa: "zhe-za-PRI-bo-ku-deh-SHOHZ" },
      { fr: "Je vais continuer à pratiquer.", es: "Voy a seguir practicando.", ipa: "zheh-ve-kon-ti-nüE-a-pra-ti-KE" },
      { fr: "Merci pour tout ce chemin parcouru !", es: "¡Gracias por todo este camino recorrido!", ipa: "mer-SI-pur-tu-seh-sheh-MEN-par-ku-RÜ" },
      { fr: "À la prochaine aventure !", es: "¡Hasta la próxima aventura!", ipa: "a-la-pro-SHEN-a-von-TÜR" }
    ],
    grammar: "Resumen de las estructuras clave que dominas: (1) Presente para hábitos y hechos, (2) Passé composé para el pasado conversacional, (3) Futur proche (aller + infinitivo) para planes, (4) Condicional (voudrais) para cortesía, (5) Imperatif para instrucciones. Sigue un método cada día: 15 min de vocabulario, 15 min de conversación real.",
    practice: [
      "Escribe una carta breve en francés describiendo tu viaje de aprendizaje estos 30 días.",
      "Busca un intercambio de idiomas (tandem) con un francohablante que quiera aprender español.",
      "Establece una meta concreta para el próximo mes: ¿cuántas horas practicarás? ¿Qué recursos usarás?"
    ]
  }
];

var CONVERSATIONS_ES_FR = [
  { title:"En el café",
    scene:"Entras a una cafetería en París y pides el desayuno.",
    lines:[
      {who:"them", fr:"Bonjour ! Qu'est-ce que vous désirez ?", en:"¡Buenos días! ¿Qué desea usted?"},
      {who:"you",  fr:"Bonjour. Un café au lait et un croissant, s'il vous plaît.", en:"Buenos días. Un café con leche y un croissant, por favor."},
      {who:"them", fr:"Sur place ou à emporter ?", en:"¿Para tomar aquí o para llevar?"},
      {who:"you",  fr:"Sur place, merci.", en:"Para tomar aquí, gracias."},
      {who:"them", fr:"Très bien. Ça fait cinq euros cinquante.", en:"Muy bien. Son cinco euros cincuenta."},
      {who:"you",  fr:"Voilà. Merci beaucoup.", en:"Aquí tiene. Muchas gracias."},
      {who:"them", fr:"Merci à vous. Bonne journée !", en:"Gracias a usted. ¡Que tenga buen día!"},
      {who:"you",  fr:"Bonne journée !", en:"¡Igualmente!"}
    ]},
  { title:"En el hotel",
    scene:"Llegas al hotel con una reserva y haces el check-in.",
    lines:[
      {who:"you",  fr:"Bonjour, j'ai une réservation au nom de García.", en:"Buenos días, tengo una reserva a nombre de García."},
      {who:"them", fr:"Bonjour monsieur. García... oui, deux nuits, chambre double.", en:"Buenos días, señor. García... sí, dos noches, habitación doble."},
      {who:"you",  fr:"Parfait. À quelle heure est le petit-déjeuner ?", en:"Perfecto. ¿A qué hora es el desayuno?"},
      {who:"them", fr:"De sept heures à dix heures, au rez-de-chaussée.", en:"De siete a diez, en la planta baja."},
      {who:"you",  fr:"Et le mot de passe wifi, c'est quoi ?", en:"¿Y cuál es la contraseña del wifi?"},
      {who:"them", fr:"C'est 'Paris2024'. Voici votre clé, chambre 214.", en:"Es 'Paris2024'. Aquí tiene su llave, habitación 214."},
      {who:"you",  fr:"Merci beaucoup. Bonne soirée.", en:"Muchas gracias. Que tenga buena tarde."}
    ]},
  { title:"Pidiendo direcciones",
    scene:"Estás perdido cerca del Sena y buscas la Torre Eiffel.",
    lines:[
      {who:"you",  fr:"Excusez-moi, je cherche la Tour Eiffel.", en:"Perdone, busco la Torre Eiffel."},
      {who:"them", fr:"Ah, c'est assez loin d'ici. Prenez le métro, ligne 6.", en:"Ah, está bastante lejos de aquí. Coja el metro, línea 6."},
      {who:"you",  fr:"La ligne 6, d'accord. Et où est la station ?", en:"La línea 6, de acuerdo. ¿Y dónde está la estación?"},
      {who:"them", fr:"Tournez à droite, c'est à deux minutes à pied.", en:"Gire a la derecha, está a dos minutos a pie."},
      {who:"you",  fr:"Combien d'arrêts ?", en:"¿Cuántas paradas?"},
      {who:"them", fr:"Trois arrêts, descendez à Champ de Mars.", en:"Tres paradas, bájese en Champ de Mars."},
      {who:"you",  fr:"Merci mille fois ! Bonne journée.", en:"¡Muchísimas gracias! Que pase buen día."}
    ]},
  { title:"En el restaurante",
    scene:"Cenas en un bistró parisino — desde la entrada hasta la cuenta.",
    lines:[
      {who:"you",  fr:"Bonsoir, une table pour deux, s'il vous plaît.", en:"Buenas noches, una mesa para dos, por favor."},
      {who:"them", fr:"Bonsoir. Vous avez réservé ?", en:"Buenas noches. ¿Tienen reserva?"},
      {who:"you",  fr:"Non, désolé. Vous avez de la place ?", en:"No, lo siento. ¿Tienen sitio?"},
      {who:"them", fr:"Oui, suivez-moi. Voici la carte.", en:"Sí, síganme. Aquí tienen la carta."},
      {who:"you",  fr:"Qu'est-ce que vous recommandez ?", en:"¿Qué nos recomienda?"},
      {who:"them", fr:"Le bœuf bourguignon est excellent ce soir.", en:"El bœuf bourguignon está excelente esta noche."},
      {who:"you",  fr:"Parfait, je vais prendre ça. Et un verre de vin rouge.", en:"Perfecto, tomaré eso. Y una copa de vino tinto."},
      {who:"you",  fr:"L'addition, s'il vous plaît.", en:"La cuenta, por favor."},
      {who:"them", fr:"Voici. Vous payez par carte ?", en:"Aquí tiene. ¿Paga con tarjeta?"},
      {who:"you",  fr:"Oui, par carte. C'était délicieux, merci.", en:"Sí, con tarjeta. Estaba delicioso, gracias."}
    ]},
  { title:"De compras",
    scene:"Buscas ropa en una boutique parisina.",
    lines:[
      {who:"them", fr:"Bonjour ! Je peux vous aider ?", en:"¡Buenos días! ¿Le puedo ayudar?"},
      {who:"you",  fr:"Bonjour, je cherche une veste pour l'hiver.", en:"Buenos días, busco una chaqueta para el invierno."},
      {who:"them", fr:"Nous avons ce modèle en noir et en gris. Quelle taille ?", en:"Tenemos este modelo en negro y en gris. ¿Qué talla?"},
      {who:"you",  fr:"Taille M, s'il vous plaît.", en:"Talla M, por favor."},
      {who:"them", fr:"Voilà. La cabine d'essayage est au fond.", en:"Aquí tiene. El probador está al fondo."},
      {who:"you",  fr:"Elle me va très bien. C'est combien ?", en:"Me queda muy bien. ¿Cuánto es?"},
      {who:"them", fr:"Quatre-vingt-dix euros.", en:"Noventa euros."},
      {who:"you",  fr:"Je la prends. Je peux payer par carte ?", en:"Me la llevo. ¿Puedo pagar con tarjeta?"},
      {who:"them", fr:"Bien sûr. Bonne journée !", en:"Por supuesto. ¡Que pase buen día!"}
    ]},
  { title:"En la farmacia",
    scene:"Tienes dolor de cabeza y necesitas medicación.",
    lines:[
      {who:"you",  fr:"Bonjour, j'ai mal à la tête depuis ce matin.", en:"Buenos días, tengo dolor de cabeza desde esta mañana."},
      {who:"them", fr:"Bonjour. Du paracétamol devrait aider. Vous êtes allergique à quelque chose ?", en:"Buenos días. El paracetamol debería ayudar. ¿Es alérgico a algo?"},
      {who:"you",  fr:"Non, pas d'allergies.", en:"No, sin alergias."},
      {who:"them", fr:"Voici une boîte. À prendre toutes les six heures avec de l'eau.", en:"Aquí tiene una caja. Tómelo cada seis horas con agua."},
      {who:"you",  fr:"Merci. C'est combien ?", en:"Gracias. ¿Cuánto es?"},
      {who:"them", fr:"Trois euros quatre-vingts.", en:"Tres euros ochenta."},
      {who:"you",  fr:"Voilà. Merci beaucoup.", en:"Aquí tiene. Muchas gracias."},
      {who:"them", fr:"Bon rétablissement !", en:"¡Que se mejore pronto!"}
    ]},
  { title:"Conversación con un local",
    scene:"Charla amistosa en la terraza de un café.",
    lines:[
      {who:"them", fr:"Vous êtes en vacances ici ?", en:"¿Está de vacaciones aquí?"},
      {who:"you",  fr:"Oui, je suis à Paris pour dix jours.", en:"Sí, estoy en París diez días."},
      {who:"them", fr:"Et vous venez d'où ?", en:"¿Y de dónde viene?"},
      {who:"you",  fr:"Je viens d'Espagne, de Madrid.", en:"Vengo de España, de Madrid."},
      {who:"them", fr:"Ah, Madrid ! Vous parlez très bien français.", en:"¡Ah, Madrid! Habla muy bien francés."},
      {who:"you",  fr:"Merci, je l'apprends depuis un an. C'est une belle langue.", en:"Gracias, lo aprendo desde hace un año. Es un idioma precioso."},
      {who:"them", fr:"Le français et l'espagnol se ressemblent beaucoup !", en:"¡El francés y el español se parecen mucho!"},
      {who:"you",  fr:"Oui, ça aide énormément. Bonne continuation !", en:"Sí, ayuda enormemente. ¡Que vaya bien!"}
    ]}
];
