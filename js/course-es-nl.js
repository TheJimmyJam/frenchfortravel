```js
// Spanish → Dutch Native Lesson Plan
// español als instructietaal, Nederlands als doeltaal
// vocab: { nl: "Dutch word", es: "Spanish translation", ipa: "Dutch phonetics for Spanish speakers" }

var COURSE_ES_NL = [
  {
    day: 1,
    title: "Saludos y cortesía",
    titleNative: "Groeten en beleefdheid",
    focus: "Los saludos básicos te ayudan a empezar cualquier interacción en Ámsterdam con buen tono. Aunque muchos neerlandeses cambien al inglés, un saludo en neerlandés suele ser bien recibido.",
    vocab: [
      { nl: "hallo", es: "hola", ipa: "HA-lo" },
      { nl: "goedemorgen", es: "buenos días", ipa: "JUU-de-MOR-jen" },
      { nl: "goedemiddag", es: "buenas tardes", ipa: "JUU-de-MI-daj" },
      { nl: "goedenavond", es: "buenas noches", ipa: "JUU-den-A-vont" },
      { nl: "dag", es: "hola/adiós", ipa: "daj" },
      { nl: "doei", es: "chao", ipa: "dui" },
      { nl: "alsjeblieft", es: "por favor", ipa: "ALS-ye-blift" },
      { nl: "alstublieft", es: "por favor formal", ipa: "ALS-tu-blift" },
      { nl: "dank je", es: "gracias", ipa: "DANK ye" },
      { nl: "bedankt", es: "gracias", ipa: "be-DANKT" }
    ],
    phrases: [
      { nl: "Hallo, goedemorgen.", es: "Hola, buenos días.", ipa: "HA-lo, JUU-de-MOR-jen" },
      { nl: "Dag, hoe gaat het?", es: "Hola, ¿cómo va?", ipa: "daj, ju JAAT jet" },
      { nl: "Dank je wel.", es: "Muchas gracias.", ipa: "DANK ye vel" },
      { nl: "Alstublieft.", es: "Por favor / aquí tiene.", ipa: "ALS-tu-blift" },
      { nl: "Tot ziens.", es: "Hasta luego.", ipa: "tot ZEENS" },
      { nl: "Fijne dag!", es: "¡Que tengas buen día!", ipa: "FAY-ne daj" }
    ],
    grammar: "En neerlandés existe una diferencia útil entre informal y formal. Usa “dank je” y “alsjeblieft” con gente joven o situaciones relajadas; usa “dank u” y “alstublieft” en hoteles, restaurantes o con desconocidos. La g neerlandesa, como en “goedemorgen”, es gutural: suena como una j española muy rasposa.",
    practice: [
      "Saluda en neerlandés a tres personas imaginarias: una recepcionista, un camarero y un amigo.",
      "Di en voz alta: “goedemorgen”, “dank je wel” y “tot ziens”, exagerando la g gutural."
    ]
  },
  {
    day: 2,
    title: "Sí, no y reacciones básicas",
    titleNative: "Ja, nee en basisreacties",
    focus: "Las respuestas cortas son esenciales cuando compras café, tomas el tranvía o respondes preguntas simples. Te permiten participar aunque todavía no formes frases largas.",
    vocab: [
      { nl: "ja", es: "sí", ipa: "yaa" },
      { nl: "nee", es: "no", ipa: "ney" },
      { nl: "misschien", es: "quizás", ipa: "mis-SJIN" },
      { nl: "goed", es: "bien", ipa: "jut" },
      { nl: "prima", es: "perfecto / está bien", ipa: "PRI-ma" },
      { nl: "oké", es: "vale / ok", ipa: "o-KEY" },
      { nl: "natuurlijk", es: "por supuesto", ipa: "na-TUUR-luk" },
      { nl: "geen probleem", es: "ningún problema", ipa: "jeyn pro-BLEYM" },
      { nl: "sorry", es: "perdón", ipa: "SO-ri" },
      { nl: "pardon", es: "disculpe", ipa: "par-DON" }
    ],
    phrases: [
      { nl: "Ja, graag.", es: "Sí, por favor.", ipa: "yaa, jraaj" },
      { nl: "Nee, bedankt.", es: "No, gracias.", ipa: "ney, be-DANKT" },
      { nl: "Dat is goed.", es: "Eso está bien.", ipa: "dat is jut" },
      { nl: "Geen probleem.", es: "No hay problema.", ipa: "jeyn pro-BLEYM" },
      { nl: "Sorry, ik begrijp het niet.", es: "Perdón, no lo entiendo.", ipa: "SO-ri, ik be-JRAYP jet neet" },
      { nl: "Kunt u dat herhalen?", es: "¿Puede repetir eso?", ipa: "kunt uu dat jer-HA-len" }
    ],
    grammar: "“Graag” es una palabra muy útil: significa algo como “con gusto” o “sí, por favor”. En una cafetería, si te preguntan si quieres algo, “ja, graag” suena natural y educado. Si la persona cambia al inglés, puedes decir “Ik probeer Nederlands te spreken” para seguir practicando.",
    practice: [
      "Responde con “ja, graag” o “nee, bedankt” a cinco ofertas imaginarias.",
      "Practica la frase “Ik begrijp het niet” hasta poder decirla sin pausar."
    ]
  },
  {
    day: 3,
    title: "Presentarte",
    titleNative: "Jezelf voorstellen",
    focus: "Presentarte te servirá en hoteles, tours, bares y conversaciones casuales. En Países Bajos suelen ser directos, así que una presentación sencilla funciona muy bien.",
    vocab: [
      { nl: "ik", es: "yo", ipa: "ik" },
      { nl: "jij", es: "tú", ipa: "yay" },
      { nl: "u", es: "usted", ipa: "uu" },
      { nl: "naam", es: "nombre", ipa: "naam" },
      { nl: "heten", es: "llamarse", ipa: "JEY-ten" },
      { nl: "zijn", es: "ser/estar", ipa: "zayn" },
      { nl: "komen", es: "venir", ipa: "KO-men" },
      { nl: "Spanje", es: "España", ipa: "SPAN-ye" },
      { nl: "Mexico", es: "México", ipa: "MEK-si-ko" },
      { nl: "toerist", es: "turista", ipa: "tu-RIST" }
    ],
    phrases: [
      { nl: "Ik heet Carlos.", es: "Me llamo Carlos.", ipa: "ik jeyt KAR-los" },
      { nl: "Mijn naam is Ana.", es: "Mi nombre es Ana.", ipa: "mayn naam is A-na" },
      { nl: "Ik kom uit Spanje.", es: "Vengo de España.", ipa: "ik kom out SPAN-ye" },
      { nl: "Ik ben toerist.", es: "Soy turista.", ipa: "ik ben tu-RIST" },
      { nl: "Waar kom je vandaan?", es: "¿De dónde vienes?", ipa: "vaar kom ye van-DAAN" },
      { nl: "Leuk je te ontmoeten.", es: "Encantado/a de conocerte.", ipa: "loek ye te unt-MOO-ten" }
    ],
    grammar: "Para decir tu nombre puedes usar “Ik heet…” o “Mijn naam is…”. “Ik ben” significa “soy” o “estoy”, parecido a una mezcla de ser y estar. “Uit” significa “de” cuando hablas de origen: “Ik kom uit Spanje”.",
    practice: [
      "Escribe una mini-presentación de tres frases usando nombre, país y motivo del viaje.",
      "Pregunta y responde: “Waar kom je vandaan?” con tres países distintos."
    ]
  },
  {
    day: 4,
    title: "Números del 0 al 20",
    titleNative: "Getallen van 0 tot 20",
    focus: "Los números aparecen al pagar, pedir mesa, dar teléfono o entender horarios. Aprenderlos temprano te da mucha autonomía en Ámsterdam.",
    vocab: [
      { nl: "nul", es: "cero", ipa: "nul" },
      { nl: "een", es: "uno", ipa: "eyn" },
      { nl: "twee", es: "dos", ipa: "tvey" },
      { nl: "drie", es: "tres", ipa: "drii" },
      { nl: "vier", es: "cuatro", ipa: "fiir" },
      { nl: "vijf", es: "cinco", ipa: "fayf" },
      { nl: "zes", es: "seis", ipa: "zes" },
      { nl: "zeven", es: "siete", ipa: "ZEY-ven" },
      { nl: "acht", es: "ocho", ipa: "ajt" },
      { nl: "tien", es: "diez", ipa: "tiin" }
    ],
    phrases: [
      { nl: "Ik wil twee koffie.", es: "Quiero dos cafés.", ipa: "ik vil tvey KO-fi" },
      { nl: "Een tafel voor drie.", es: "Una mesa para tres.", ipa: "eyn TAA-fel vor drii" },
      { nl: "Dat kost vijf euro.", es: "Eso cuesta cinco euros.", ipa: "dat kost fayf OY-ro" },
      { nl: "Nummer acht, alstublieft.", es: "Número ocho, por favor.", ipa: "NU-mer ajt, ALS-tu-blift" },
      { nl: "Ik heb tien minuten.", es: "Tengo diez minutos.", ipa: "ik heb tiin mi-NU-ten" },
      { nl: "Zes of zeven?", es: "¿Seis o siete?", ipa: "zes of ZEY-ven" }
    ],
    grammar: "Los números neerlandeses tienen sonidos cortos y claros. La “v” suele sonar más como una f suave para oídos españoles, por eso “vier” y “vijf” pueden sonar como “fiir” y “fayf”. Practica pares parecidos como “zes” y “zeven”.",
    practice: [
      "Cuenta del 0 al 10 y luego del 10 al 0 en voz alta.",
      "Crea cinco pedidos de café usando números del 1 al 10."
    ]
  },
  {
    day: 5,
    title: "Números del 20 al 100",
    titleNative: "Getallen van 20 tot 100",
    focus: "Los precios, direcciones y horarios usan números más grandes. En neerlandés el orden de algunos números puede parecer raro para hispanohablantes.",
    vocab: [
      { nl: "twintig", es: "veinte", ipa: "TVIN-tuj" },
      { nl: "dertig", es: "treinta", ipa: "DER-tuj" },
      { nl: "veertig", es: "cuarenta", ipa: "FEER-tuj" },
      { nl: "vijftig", es: "cincuenta", ipa: "FAYF-tuj" },
      { nl: "zestig", es: "sesenta", ipa: "ZES-tuj" },
      { nl: "zeventig", es: "setenta", ipa: "ZEY-ven-tuj" },
      { nl: "tachtig", es: "ochenta", ipa: "TAJ-tuj" },
      { nl: "negentig", es: "noventa", ipa: "NEY-jen-tuj" },
      { nl: "honderd", es: "cien", ipa: "JON-dert" },
      { nl: "euro", es: "euro", ipa: "OY-ro" }
    ],
    phrases: [
      { nl: "Het kost twintig euro.", es: "Cuesta veinte euros.", ipa: "jet kost TVIN-tuj OY-ro" },
      { nl: "Ik ben dertig jaar.", es: "Tengo treinta años.", ipa: "ik ben DER-tuj yaar" },
      { nl: "Bus nummer veertig.", es: "Autobús número cuarenta.", ipa: "bus NU-mer FEER-tuj" },
      { nl: "Vijfentwintig euro.", es: "Veinticinco euros.", ipa: "FAYF-en-TVIN-tuj OY-ro" },
      { nl: "Een kaartje kost zestig euro.", es: "Un billete cuesta sesenta euros.", ipa: "eyn KAAR-che kost ZES-tuj OY-ro" },
      { nl: "Is het honderd?", es: "¿Son cien?", ipa: "is jet JON-dert" }
    ],
    grammar: "Del 21 al 99, el neerlandés dice primero la unidad y luego la decena: “vijfentwintig” es literalmente “cinco-y-veinte”. Esto se parece al alemán, pero no al español. Escucha con atención los precios, porque “vierentwintig” y “vijfenveertig” pueden confundirse al principio.",
    practice: [
      "Forma los números 21, 32, 45, 58 y 99 en neerlandés.",
      "Practica decir precios: 25 euros, 48 euros, 73 euros y 100 euros."
    ]
  },
  {
    day: 6,
    title: "Días, meses y palabras de tiempo",
    titleNative: "Dagen, maanden en tijdwoorden",
    focus: "Reservas, museos y trenes dependen de fechas y días. Esta lección te prepara para entender planes sencillos durante tu viaje.",
    vocab: [
      { nl: "vandaag", es: "hoy", ipa: "van-DAAJ" },
      { nl: "morgen", es: "mañana", ipa: "MOR-jen" },
      { nl: "gisteren", es: "ayer", ipa: "JIS-te-ren" },
      { nl: "week", es: "semana", ipa: "veyk" },
      { nl: "maandag", es: "lunes", ipa: "MAAN-daj" },
      { nl: "dinsdag", es: "martes", ipa: "DINS-daj" },
      { nl: "woensdag", es: "miércoles", ipa: "VUNS-daj" },
      { nl: "donderdag", es: "jueves", ipa: "DON-der-daj" },
      { nl: "vrijdag", es: "viernes", ipa: "VRAY-daj" },
      { nl: "zaterdag", es: "sábado", ipa: "ZAA-ter-daj" }
    ],
    phrases: [
      { nl: "Vandaag is maandag.", es: "Hoy es lunes.", ipa: "van-DAAJ is MAAN-daj" },
      { nl: "Morgen ga ik naar Amsterdam.", es: "Mañana voy a Ámsterdam.", ipa: "MOR-jen jaa ik naar AM-ster-dam" },
      { nl: "Ik heb tijd op vrijdag.", es: "Tengo tiempo el viernes.", ipa: "ik heb tayt op VRAY-daj" },
      { nl: "Wanneer is het open?", es: "¿Cuándo está abierto?", ipa: "van-NEER is jet O-pen" },
      { nl: "Het is deze week.", es: "Es esta semana.", ipa: "jet is DEY-ze veyk" },
      { nl: "Tot morgen!", es: "¡Hasta mañana!", ipa: "tot MOR-jen" }
    ],
    grammar: "Los días de la semana normalmente no llevan mayúscula en neerlandés dentro de una frase. “Wanneer?” significa “¿cuándo?” y es clave para horarios. Para viajeros, conviene aprender primero días y palabras como “vandaag”, “morgen” y “gisteren”.",
    practice: [
      "Di qué día es hoy, mañana y pasado mañana en neerlandés.",
      "Haz tres preguntas con “Wanneer is…?” sobre un museo, restaurante y tren."
    ]
  },
  {
    day: 7,
    title: "Repaso semana 1 y mini-conversación",
    titleNative: "Week 1 herhaling en minigesprek",
    focus: "Ahora juntamos saludos, números y presentaciones para sobrevivir a las primeras conversaciones. El objetivo no es sonar perfecto, sino poder iniciar contacto en neerlandés.",
    vocab: [
      { nl: "spreken", es: "hablar", ipa: "SPREY-ken" },
      { nl: "Nederlands", es: "neerlandés", ipa: "NEY-der-lants" },
      { nl: "Engels", es: "inglés", ipa: "ENG-els" },
      { nl: "Spaans", es: "español", ipa: "spaans" },
      { nl: "langzaam", es: "lentamente", ipa: "LANG-zaam" },
      { nl: "snel", es: "rápido", ipa: "snel" },
      { nl: "begrijpen", es: "entender", ipa: "be-JRAY-pen" },
      { nl: "herhalen", es: "repetir", ipa: "jer-HA-len" },
      { nl: "zeggen", es: "decir", ipa: "ZE-jen" },
      { nl: "oefenen", es: "practicar", ipa: "UU-fe-nen" }
    ],
    phrases: [
      { nl: "Ik spreek een beetje Nederlands.", es: "Hablo un poco de neerlandés.", ipa: "ik spreyK eyn BEY-che NEY-der-lants" },
      { nl: "Spreekt u Engels?", es: "¿Habla usted inglés?", ipa: "spreykt uu ENG-els" },
      { nl: "Kunt u langzaam spreken?", es: "¿Puede hablar despacio?", ipa: "kunt uu LANG-zaam SPREY-ken" },
      { nl: "Ik wil oefenen.", es: "Quiero practicar.", ipa: "ik vil UU-fe-nen" },
      { nl: "Hoe zeg je dat in het Nederlands?", es: "¿Cómo se dice eso en neerlandés?", ipa: "ju zej ye dat in jet NEY-der-lants" },
      { nl: "Ik begrijp een beetje.", es: "Entiendo un poco.", ipa: "ik be-JRAYP eyn BEY-che" }
    ],
    grammar: "Cuando un neerlandés note tu acento, puede cambiar al inglés por amabilidad o eficiencia. Si quieres seguir practicando, di: “Ik wil graag Nederlands oefenen”. Mantén frases cortas: sujeto + verbo + información básica.",
    practice: [
      "Crea una conversación de seis líneas entre tú y una recepcionista.",
      "Practica pedir que alguien hable más despacio y repita una frase."
    ]
  },
  {
    day: 8,
    title: "En el café: bebidas",
    titleNative: "In het café: drankjes",
    focus: "La cultura de café es fuerte en los Países Bajos, desde espresso hasta café con stroopwafel. Pedir bebidas en neerlandés es una forma fácil de practicar a diario.",
    vocab: [
      { nl: "koffie", es: "café", ipa: "KO-fi" },
      { nl: "thee", es: "té", ipa: "tey" },
      { nl: "water", es: "agua", ipa: "VA-ter" },
      { nl: "bier", es: "cerveza", ipa: "biir" },
      { nl: "wijn", es: "vino", ipa: "vayn" },
      { nl: "melk", es: "leche", ipa: "melk" },
      { nl: "suiker", es: "azúcar", ipa: "SOW-ker" },
      { nl: "zonder", es: "sin", ipa: "ZON-der" },
      { nl: "met", es: "con", ipa: "met" },
      { nl: "glas", es: "vaso/copa", ipa: "jlas" }
    ],
    phrases: [
      { nl: "Een koffie, alstublieft.", es: "Un café, por favor.", ipa: "eyn KO-fi, ALS-tu-blift" },
      { nl: "Mag ik een thee?", es: "¿Me da un té?", ipa: "maj ik eyn tey" },
      { nl: "Water zonder gas, graag.", es: "Agua sin gas, por favor.", ipa: "VA-ter ZON-der jas, jraaj" },
      { nl: "Koffie met melk.", es: "Café con leche.", ipa: "KO-fi met melk" },
      { nl: "Zonder suiker, graag.", es: "Sin azúcar, por favor.", ipa: "ZON-der SOW-ker, jraaj" },
      { nl: "Een glas wijn.", es: "Una copa de vino.", ipa: "eyn jlas vayn" }
    ],
    grammar: "“Mag ik…?” es una forma muy natural de pedir algo: literalmente “¿puedo tener…?”. En cafeterías, “graag” suaviza mucho el pedido. Recuerda que “g” en “graag” y “glas” es gutural, como una j española muy fuerte.",
    practice: [
      "Pide tres bebidas distintas usando “Mag ik…?”",
      "Practica combinaciones: con leche, sin azúcar, sin gas."
    ]
  },
  {
    day: 9,
    title: "En el café: comida",
    titleNative: "In het café: eten",
    focus: "Además del café, necesitarás pedir bocados rápidos, pasteles o desayuno. Esta lección te da vocabulario útil para cafeterías de Ámsterdam.",
    vocab: [
      { nl: "eten", es: "comida / comer", ipa: "EY-ten" },
      { nl: "brood", es: "pan", ipa: "broot" },
      { nl: "kaas", es: "queso", ipa: "kaas" },
      { nl: "croissant", es: "cruasán", ipa: "kro-SANT" },
      { nl: "taart", es: "tarta", ipa: "taart" },
      { nl: "koekje", es: "galleta", ipa: "KUK-ye" },
      { nl: "stroopwafel", es: "stroopwafel", ipa: "STROOP-va-fel" },
      { nl: "ontbijt", es: "desayuno", ipa: "ONT-bayt" },
      { nl: "lunch", es: "almuerzo", ipa: "lunch" },
      { nl: "lekker", es: "rico / delicioso", ipa: "LE-ker" }
    ],
    phrases: [
      { nl: "Heeft u croissants?", es: "¿Tiene cruasanes?", ipa: "heeft uu kro-SANTS" },
      { nl: "Ik wil graag een broodje kaas.", es: "Quisiera un bocadillo de queso.", ipa: "ik vil jraaj eyn BRO-che kaas" },
      { nl: "Een stroopwafel bij de koffie.", es: "Un stroopwafel con el café.", ipa: "eyn STROOP-va-fel bay de KO-fi" },
      { nl: "Dat ziet er lekker uit.", es: "Eso se ve rico.", ipa: "dat ziet er LE-ker out" },
      { nl: "Is dit ontbijt?", es: "¿Esto es desayuno?", ipa: "is dit ONT-bayt" },
      { nl: "Mag ik de kaart?", es: "¿Me da la carta?", ipa: "maj ik de kaart" }
    ],
    grammar: "“Broodje” significa literalmente “panecillo”, pero en la práctica puede ser un bocadillo. El diminutivo “-je” es muy común en neerlandés: “koekje”, “broodje”, “kaartje”. No siempre significa pequeño; a veces suena más cotidiano o amable.",
    practice: [
      "Haz un pedido de café con algo dulce y algo salado.",
      "Describe tres alimentos usando “lekker”."
    ]
  },
  {
    day: 10,
    title: "Pedir en un restaurante",
    titleNative: "Bestellen in een restaurant",
    focus: "Pedir comida con seguridad hará que tus comidas sean más cómodas. En Ámsterdam muchos menús están en inglés, pero pedir en neerlandés crea una experiencia más local.",
    vocab: [
      { nl: "restaurant", es: "restaurante", ipa: "res-to-RANT" },
      { nl: "menukaart", es: "menú/carta", ipa: "MEY-nu-kaart" },
      { nl: "voorgerecht", es: "entrante", ipa: "VOR-je-rejt" },
      { nl: "hoofdgerecht", es: "plato principal", ipa: "JOOFD-je-rejt" },
      { nl: "nagerecht", es: "postre", ipa: "NAA-je-rejt" },
      { nl: "bestellen", es: "pedir/ordenar", ipa: "be-STE-len" },
      { nl: "aanraden", es: "recomendar", ipa: "AAN-raa-den" },
      { nl: "kip", es: "pollo", ipa: "kip" },
      { nl: "vis", es: "pescado", ipa: "fis" },
      { nl: "groenten", es: "verduras", ipa: "JRUUN-ten" }
    ],
    phrases: [
      { nl: "Ik wil graag bestellen.", es: "Quisiera pedir.", ipa: "ik vil jraaj be-STE-len" },
      { nl: "Wat raadt u aan?", es: "¿Qué recomienda?", ipa: "vat raat uu aan" },
      { nl: "Ik neem de kip.", es: "Tomaré el pollo.", ipa: "ik neym de kip" },
      { nl: "Heeft u vegetarische opties?", es: "¿Tiene opciones vegetarianas?", ipa: "heeft uu vey-je-TAA-ris-e OP-sees" },
      { nl: "Voor mij de vis, graag.", es: "Para mí el pescado, por favor.", ipa: "vor may de fis, jraaj" },
      { nl: "Dat was heerlijk.", es: "Eso estuvo delicioso.", ipa: "dat vas HEER-luk" }
    ],
    grammar: "Para pedir, “Ik neem…” significa “tomaré…”, y suena más natural que traducir literalmente “quiero”. “Wat raadt u aan?” es una pregunta excelente para recomendaciones. Si el camarero cambia al inglés, responde una frase corta en neerlandés y sigue si te sientes cómodo.",
    practice: [
      "Elige un entrante, un principal y un postre en neerlandés.",
      "Practica pedir una recomendación y aceptar una sugerencia."
    ]
  },
  {
    day: 11,
    title: "Comidas comunes",
    titleNative: "Veelvoorkomend eten",
    focus: "Conocer ingredientes básicos te ayuda a leer menús y evitar confusiones. Algunos platos neerlandeses son sencillos, pero los nombres pueden sorprender.",
    vocab: [
      { nl: "aardappel", es: "patata", ipa: "AAR-da-pel" },
      { nl: "soep", es: "sopa", ipa: "soop" },
      { nl: "salade", es: "ensalada", ipa: "sa-LAA-de" },
      { nl: "vlees", es: "carne", ipa: "vleys" },
      { nl: "rundvlees", es: "carne de res", ipa: "RUNT-vleys" },
      { nl: "kaas", es: "queso", ipa: "kaas" },
      { nl: "ei", es: "huevo", ipa: "ay" },
      { nl: "appel", es: "manzana", ipa: "A-pel" },
      { nl: "friet", es: "papas fritas", ipa: "frit" },
      { nl: "haring", es: "arenque", ipa: "HAA-ring" }
    ],
    phrases: [
      { nl: "Ik eet geen vlees.", es: "No como carne.", ipa: "ik eyt jeyn vleys" },
      { nl: "Heeft dit kaas?", es: "¿Esto tiene queso?", ipa: "heeft dit kaas" },
      { nl: "Ik wil friet.", es: "Quiero papas fritas.", ipa: "ik vil frit" },
      { nl: "Is de soep warm?", es: "¿La sopa está caliente?", ipa: "is de soop varm" },
      { nl: "Ik probeer haring.", es: "Voy a probar arenque.", ipa: "ik pro-BEER HAA-ring" },
      { nl: "Dat is met ei.", es: "Eso es con huevo.", ipa: "dat is met ay" }
    ],
    grammar: "“Geen” significa “ningún/no” delante de sustantivos: “geen vlees” = “nada de carne”. Para ingredientes, pregunta “Heeft dit…?” aunque literalmente sea “¿tiene esto…?”. Es muy práctico y se entiende rápido.",
    practice: [
      "Haz una lista de cinco alimentos que comes y dos que no comes.",
      "Pregunta si tres platos tienen queso, huevo o carne."
    ]
  },
  {
    day: 12,
    title: "Necesidades dietéticas y alergias",
    titleNative: "Dieetwensen en allergieën",
    focus: "Saber explicar alergias o restricciones alimentarias es importante para viajar con seguridad. En Países Bajos suelen manejar bien estas solicitudes, pero conviene ser claro.",
    vocab: [
      { nl: "allergie", es: "alergia", ipa: "a-ler-JII" },
      { nl: "allergisch", es: "alérgico/a", ipa: "a-LER-jis" },
      { nl: "noten", es: "frutos secos", ipa: "NO-ten" },
      { nl: "pinda", es: "cacahuete", ipa: "PIN-da" },
      { nl: "melk", es: "leche", ipa: "melk" },
      { nl: "gluten", es: "gluten", ipa: "JLUU-ten" },
      { nl: "vegetarisch", es: "vegetariano/a", ipa: "vey-je-TAA-ris" },
      { nl: "veganistisch", es: "vegano/a", ipa: "vey-JAA-nis-tis" },
      { nl: "zonder", es: "sin", ipa: "ZON-der" },
      { nl: "gevaarlijk", es: "peligroso", ipa: "je-VAAR-luk" }
    ],
    phrases: [
      { nl: "Ik ben allergisch voor noten.", es: "Soy alérgico/a a los frutos secos.", ipa: "ik ben a-LER-jis vor NO-ten" },
      { nl: "Zonder gluten, alstublieft.", es: "Sin gluten, por favor.", ipa: "ZON-der JLUU-ten, ALS-tu-blift" },
      { nl: "Ik eet vegetarisch.", es: "Como vegetariano.", ipa: "ik eyt vey-je-TAA-ris" },
      { nl: "Is dit veganistisch?", es: "¿Esto es vegano?", ipa: "is dit vey-JAA-nis-tis" },
      { nl: "Dat is gevaarlijk voor mij.", es: "Eso es peligroso para mí.", ipa: "dat is je-VAAR-luk vor may" },
      { nl: "Kunt u het controleren?", es: "¿Puede comprobarlo?", ipa: "kunt uu jet kon-tro-LEY-ren" }
    ],
    grammar: "Para alergias usa “Ik ben allergisch voor…”. Para decir que no comes algo, usa “Ik eet geen…”. En temas de salud, si la situación es seria, está bien cambiar al inglés para precisión después de decir la frase clave en neerlandés.",
    practice: [
      "Escribe tu restricción alimentaria real o inventada en una frase neerlandesa.",
      "Practica pedir que revisen un ingrediente: “Kunt u het controleren?”"
    ]
  },
  {
    day: 13,
    title: "Pagar y propinas",
    titleNative: "Betalen en fooi",
    focus: "Pagar en restaurantes y cafés es una interacción diaria. En Países Bajos la propina suele ser baja y opcional, no como en algunos países de América.",
    vocab: [
      { nl: "betalen", es: "pagar", ipa: "be-TAA-len" },
      { nl: "rekening", es: "cuenta", ipa: "REY-kening" },
      { nl: "pinpas", es: "tarjeta bancaria", ipa: "PIN-pas" },
      { nl: "contant", es: "en efectivo", ipa: "kon-TANT" },
      { nl: "kaart", es: "tarjeta", ipa: "kaart" },
      { nl: "fooi", es: "propina", ipa: "foy" },
      { nl: "bonnetje", es: "recibo", ipa: "BON-e-che" },
      { nl: "samen", es: "juntos", ipa: "SAA-men" },
      { nl: "apart", es: "separado", ipa: "a-PART" },
      { nl: "totaal", es: "total", ipa: "to-TAAL" }
    ],
    phrases: [
      { nl: "Mag ik de rekening?", es: "¿Me trae la cuenta?", ipa: "maj ik de REY-kening" },
      { nl: "Kan ik met kaart betalen?", es: "¿Puedo pagar con tarjeta?", ipa: "kan ik met kaart be-TAA-len" },
      { nl: "We betalen apart.", es: "Pagamos separado.", ipa: "ve be-TAA-len a-PART" },
      { nl: "We betalen samen.", es: "Pagamos juntos.", ipa: "ve be-TAA-len SAA-men" },
      { nl: "Heeft u een bonnetje?", es: "¿Tiene un recibo?", ipa: "heeft uu eyn BON-e-che" },
      { nl: "Laat de rest maar zitten.", es: "Quédese con el cambio.", ipa: "laat de rest maar ZI-ten" }
    ],
    grammar: "“Mag ik de rekening?” es la frase más útil para pedir la cuenta. Las propinas en Países Bajos no suelen ser obligatorias; redondear o dejar algo pequeño por buen servicio es suficiente. Muchos lugares prefieren tarjeta, así que “Kan ik met kaart betalen?” es esencial.",
    practice: [
      "Simula pagar una cuenta separada y otra cuenta conjunta.",
      "Practica pedir la cuenta, pagar con tarjeta y pedir recibo."
    ]
  },
  {
    day: 14,
    title: "Repaso semana 2: día de café",
    titleNative: "Week 2 herhaling: cafédag",
    focus: "Hoy combinas bebidas, comida, restricciones y pago. Es una situación completa y realista para cualquier viajero español en Ámsterdam.",
    vocab: [
      { nl: "café", es: "cafetería", ipa: "ka-FEY" },
      { nl: "terras", es: "terraza", ipa: "te-RAS" },
      { nl: "binnen", es: "dentro", ipa: "BI-nen" },
      { nl: "buiten", es: "fuera", ipa: "BOW-ten" },
      { nl: "tafel", es: "mesa", ipa: "TAA-fel" },
      { nl: "stoel", es: "silla", ipa: "stool" },
      { nl: "reservering", es: "reserva", ipa: "rey-zer-VEY-ring" },
      { nl: "druk", es: "lleno/ocupado", ipa: "druk" },
      { nl: "rustig", es: "tranquilo", ipa: "RUS-tuj" },
      { nl: "klaar", es: "listo/terminado", ipa: "klaar" }
    ],
    phrases: [
      { nl: "Heeft u een tafel buiten?", es: "¿Tiene una mesa afuera?", ipa: "heeft uu eyn TAA-fel BOW-ten" },
      { nl: "Ik heb geen reservering.", es: "No tengo reserva.", ipa: "ik heb jeyn rey-zer-VEY-ring" },
      { nl: "Het is erg druk.", es: "Está muy lleno.", ipa: "jet is erj druk" },
      { nl: "Ik wil graag koffie en taart.", es: "Quisiera café y tarta.", ipa: "ik vil jraaj KO-fi en taart" },
      { nl: "Ik ben klaar.", es: "Ya terminé.", ipa: "ik ben klaar" },
      { nl: "Mag ik betalen?", es: "¿Puedo pagar?", ipa: "maj ik be-TAA-len" }
    ],
    grammar: "En una conversación real, no necesitas frases largas. Puedes usar bloques: saludo + pedido + restricción + pago. Si te responden en inglés, puedes contestar “Dank je, ik oefen Nederlands” y seguir con frases simples.",
    practice: [
      "Escribe un diálogo completo de café: entrada, pedido, alergia y pago.",
      "Pide una mesa dentro y luego cambia la frase para pedir una mesa afuera."
    ]
  },
  {
    day: 15,
    title: "Registro en el hotel",
    titleNative: "Inchecken in het hotel",
    focus: "El check-in de hotel mezcla identificación, reservas y horarios. Aunque el personal hablará inglés, usar neerlandés aquí te da práctica segura y estructurada.",
    vocab: [
      { nl: "hotel", es: "hotel", ipa: "ho-TEL" },
      { nl: "receptie", es: "recepción", ipa: "rey-SEP-see" },
      { nl: "reservering", es: "reserva", ipa: "rey-zer-VEY-ring" },
      { nl: "paspoort", es: "pasaporte", ipa: "PAS-poort" },
      { nl: "kamer", es: "habitación", ipa: "KAA-mer" },
      { nl: "sleutel", es: "llave", ipa: "SLUU-tel" },
      { nl: "kaart", es: "tarjeta", ipa: "kaart" },
      { nl: "inchecken", es: "hacer check-in", ipa: "IN-che-ken" },
      { nl: "uitchecken", es: "hacer check-out", ipa: "OWT-che-ken" },
      { nl: "bagage", es: "equipaje", ipa: "ba-GAA-zje" }
    ],
    phrases: [
      { nl: "Ik heb een reservering.", es: "Tengo una reserva.", ipa: "ik heb eyn rey-zer-VEY-ring" },
      { nl: "Ik wil graag inchecken.", es: "Quisiera hacer check-in.", ipa: "ik vil jraaj IN-che-ken" },
      { nl: "Hier is mijn paspoort.", es: "Aquí está mi pasaporte.", ipa: "hiir is mayn PAS-poort" },
      { nl: "Hoe laat is uitchecken?", es: "¿A qué hora es el check-out?", ipa: "ju laat is OWT-che-ken" },
      { nl: "Kan ik mijn bagage hier laten?", es: "¿Puedo dejar mi equipaje aquí?", ipa: "kan ik mayn ba-GAA-zje hiir LAA-ten" },
      { nl: "Welke kamer heb ik?", es: "¿Qué habitación tengo?", ipa: "VEL-ke KAA-mer heb ik" }
    ],
    grammar: "“Ik heb…” significa “tengo” y será tu frase clave para reservas y documentos. “Hoe laat?” pregunta la hora, especialmente en horarios de hotel o transporte. “Hier is…” significa “aquí está…”, útil al entregar pasaporte o tarjeta.",
    practice: [
      "Simula un check-in con reserva, pasaporte y pregunta de check-out.",
      "Practica decir tu nombre deletreado lentamente después de “Mijn naam is…”."
    ]
  },
  {
    day: 16,
    title: "Habitación de hotel y problemas",
    titleNative: "Hotelkamer en problemen",
    focus: "Si algo falla en tu habitación, necesitas explicar el problema claramente. Los neerlandeses valoran la comunicación directa, así que una frase simple y honesta funciona bien.",
    vocab: [
      { nl: "bed", es: "cama", ipa: "bet" },
      { nl: "badkamer", es: "baño", ipa: "BAT-kaa-mer" },
      { nl: "douche", es: "ducha", ipa: "DU-sha" },
      { nl: "handdoek", es: "toalla", ipa: "HAND-duk" },
      { nl: "airco", es: "aire acondicionado", ipa: "AIR-ko" },
      { nl: "verwarming", es: "calefacción", ipa: "ver-VAR-ming" },
      { nl: "wifi", es: "wifi", ipa: "WAI-fai" },
      { nl: "kapot", es: "roto", ipa: "ka-POT" },
      { nl: "vuil", es: "sucio", ipa: "vowl" },
      { nl: "lawaai", es: "ruido", ipa: "la-WAAI" }
    ],
    phrases: [
      { nl: "De wifi werkt niet.", es: "El wifi no funciona.", ipa: "de WAI-fai werkt neet" },
      { nl: "De douche is kapot.", es: "La ducha está rota.", ipa: "de DU-sha is ka-POT" },
      { nl: "Ik heb een extra handdoek nodig.", es: "Necesito una toalla extra.", ipa: "ik heb eyn EX-tra HAND-duk NO-dij" },
      { nl: "De kamer is te koud.", es: "La habitación está demasiado fría.", ipa: "de KAA-mer is te kowt" },
      { nl: "Er is veel lawaai.", es: "Hay mucho ruido.", ipa: "er is veel la-WAAI" },
      { nl: "Kunt u iemand sturen?", es: "¿Puede enviar a alguien?", ipa: "kunt uu EE-mant STUU-ren" }
    ],
    grammar: "Para problemas, usa “De/het + cosa + werkt niet” o “is kapot”. “Nodig” significa “necesario”: “Ik heb… nodig” = “necesito…”. Sé directo pero educado; eso encaja bien con el estilo neerlandés.",
    practice: [
      "Describe tres problemas de hotel usando “werkt niet” o “is kapot”.",
      "Pide dos objetos extra para la habitación."
    ]
  },
  {
    day: 17,
    title: "Pedir direcciones",
    titleNative: "De weg vragen",
    focus: "Ámsterdam tiene canales, calles pequeñas y barrios fáciles de confundir. Saber pedir direcciones te ayuda incluso cuando el mapa del móvil no basta.",
    vocab: [
      { nl: "waar", es: "dónde", ipa: "vaar" },
      { nl: "weg", es: "camino", ipa: "vej" },
      { nl: "links", es: "izquierda", ipa: "links" },
      { nl: "rechts", es: "derecha", ipa: "rejts" },
      { nl: "rechtdoor", es: "todo recto", ipa: "REJT-dor" },
      { nl: "straat", es: "calle", ipa: "straat" },
      { nl: "plein", es: "plaza", ipa: "playn" },
      { nl: "brug", es: "puente", ipa: "bruj" },
      { nl: "kanaal", es: "canal", ipa: "ka-NAAL" },
      { nl: "dichtbij", es: "cerca", ipa: "DIJT-bay" }
    ],
    phrases: [
      { nl: "Waar is het station?", es: "¿Dónde está la estación?", ipa: "vaar is jet sta-SJON" },
      { nl: "Hoe kom ik daar?", es: "¿Cómo llego allí?", ipa: "ju kom ik daar" },
      { nl: "Ga rechtdoor.", es: "Vaya todo recto.", ipa: "jaa REJT-dor" },
      { nl: "Sla linksaf.", es: "Gire a la izquierda.", ipa: "sla LINKS-af" },
      { nl: "Sla rechtsaf.", es: "Gire a la derecha.", ipa: "sla REJTS-af" },
      { nl: "Is het dichtbij?", es: "¿Está cerca?", ipa: "is jet DIJT-bay" }
    ],
    grammar: "“Waar is…?” es la forma más simple de preguntar por un lugar. Las direcciones usan verbos cortos: “ga” = vaya, “sla” = gire. En Ámsterdam, aprende “brug” y “kanaal” porque muchas indicaciones usan puentes y canales.",
    practice: [
      "Pregunta cómo llegar a la estación, un museo y un café.",
      "Da direcciones usando derecha, izquierda y todo recto."
    ]
  },
  {
    day: 18,
    title: "Tranvía, tren y transporte público",
    titleNative: "Tram, trein en openbaar vervoer",
    focus: "El transporte público neerlandés es eficiente, pero tiene tarjetas, validación y horarios estrictos. Estas frases te ayudan a moverte por Ámsterdam y otras ciudades.",
    vocab: [
      { nl: "tram", es: "tranvía", ipa: "tram" },
      { nl: "trein", es: "tren", ipa: "trayn" },
      { nl: "bus", es: "autobús", ipa: "bus" },
      { nl: "metro", es: "metro", ipa: "MEY-tro" },
      { nl: "station", es: "estación", ipa: "sta-SJON" },
      { nl: "halte", es: "parada", ipa: "HAL-te" },
      { nl: "kaartje", es: "billete", ipa: "KAAR-che" },
      { nl: "OV-chipkaart", es: "tarjeta de transporte OV", ipa: "o-FEY CHIP-kaart" },
      { nl: "vertrek", es: "salida", ipa: "ver-TREK" },
      { nl: "aankomst", es: "llegada", ipa: "AAN-komst" }
    ],
    phrases: [
      { nl: "Waar is de tramhalte?", es: "¿Dónde está la parada del tranvía?", ipa: "vaar is de TRAM-hal-te" },
      { nl: "Ik wil een kaartje naar Amsterdam Centraal.", es: "Quiero un billete a Amsterdam Centraal.", ipa: "ik vil eyn KAAR-che naar AM-ster-dam sen-TRAAL" },
      { nl: "Welke trein gaat naar Utrecht?", es: "¿Qué tren va a Utrecht?", ipa: "VEL-ke trayn jaat naar UU-trejt" },
      { nl: "Moet ik inchecken?", es: "¿Tengo que validar/entrar con tarjeta?", ipa: "mut ik IN-che-ken" },
      { nl: "Wanneer vertrekt de trein?", es: "¿Cuándo sale el tren?", ipa: "van-NEER ver-TREKT de trayn" },
      { nl: "Is dit de juiste halte?", es: "¿Esta es la parada correcta?", ipa: "is dit de YOW-ste HAL-te" }
    ],
    grammar: "En transporte, “inchecken” y “uitchecken” se usan al tocar la tarjeta al entrar y salir. La OV-chipkaart o el pago contactless son comunes. En estaciones, mira “vertrek” para salida y “aankomst” para llegada.",
    practice: [
      "Pregunta por un tranvía, un tren y una parada usando “waar” y “welke”.",
      "Practica la frase “Moet ik inchecken?” hasta decirla con fluidez."
    ]
  },
  {
    day: 19,
    title: "Vocabulario de bicicleta",
    titleNative: "Fietsvocabulaire",
    focus: "Países Bajos es un país pensado para bicicletas, y Ámsterdam puede ser intimidante si no conoces las reglas básicas. Estas palabras son esenciales para moverte sin molestar ni ponerte en peligro.",
    vocab: [
      { nl: "fiets", es: "bicicleta", ipa: "fits" },
      { nl: "fietspad", es: "carril bici", ipa: "FITS-pad" },
      { nl: "fietser", es: "ciclista", ipa: "FIT-ser" },
      { nl: "bel", es: "timbre", ipa: "bel" },
      { nl: "slot", es: "candado", ipa: "slot" },
      { nl: "helm", es: "casco", ipa: "helm" },
      { nl: "verhuren", es: "alquilar", ipa: "ver-JUU-ren" },
      { nl: "rem", es: "freno", ipa: "rem" },
      { nl: "linksaf", es: "a la izquierda", ipa: "LINKS-af" },
      { nl: "rechtsaf", es: "a la derecha", ipa: "REJTS-af" }
    ],
    phrases: [
      { nl: "Ik wil een fiets huren.", es: "Quiero alquilar una bicicleta.", ipa: "ik vil eyn fits JUU-ren" },
      { nl: "Waar is het fietspad?", es: "¿Dónde está el carril bici?", ipa: "vaar is jet FITS-pad" },
      { nl: "Mijn fiets is kapot.", es: "Mi bicicleta está rota.", ipa: "mayn fits is ka-POT" },
      { nl: "Heeft u een slot?", es: "¿Tiene un candado?", ipa: "heeft uu eyn slot" },
      { nl: "Ik ga linksaf.", es: "Voy a la izquierda.", ipa: "ik jaa LINKS-af" },
      { nl: "Pas op!", es: "¡Cuidado!", ipa: "pas op" }
    ],
    grammar: "La palabra “fiets” es fundamental: la verás en señales como “fietspad”. No camines por el carril bici; los ciclistas van rápido y esperan que esté libre. Si alquilas bicicleta, aprende “slot”, porque siempre debes candarla bien.",
    practice: [
      "Di tres frases sobre alquilar, candar y reparar una bicicleta.",
      "Mira un mapa de Ámsterdam e identifica dónde usarías “fietspad”, “linksaf” y “rechtsaf”."
    ]
  },
  {
    day: 20,
    title: "Decir la hora y horarios",
    titleNative: "Tijd zeggen en dienstregelingen",
    focus: "Los museos, trenes y reservas dependen de horarios. Entender la hora evita perder entradas, conexiones o mesas reservadas.",
    vocab: [
      { nl: "tijd", es: "tiempo/hora", ipa: "tayt" },
      { nl: "uur", es: "hora", ipa: "uur" },
      { nl: "minuut", es: "minuto", ipa: "mi-NUUT" },
      { nl: "half", es: "media", ipa: "half" },
      { nl: "kwart", es: "cuarto", ipa: "kvart" },
      { nl: "vroeg", es: "temprano", ipa: "fruj" },
      { nl: "laat", es: "tarde", ipa: "laat" },
      { nl: "open", es: "abierto", ipa: "O-pen" },
      { nl: "gesloten", es: "cerrado", ipa: "je-SLO-ten" },
      { nl: "schema", es: "horario/programa", ipa: "SJEY-ma" }
    ],
    phrases: [
      { nl: "Hoe laat is het?", es: "¿Qué hora es?", ipa: "ju laat is jet" },
      { nl: "Het is drie uur.", es: "Son las tres.", ipa: "jet is drii uur" },
      { nl: "Het is half vier.", es: "Son las tres y media.", ipa: "jet is half fiir" },
      { nl: "Om acht uur.", es: "A las ocho.", ipa: "om ajt uur" },
      { nl: "Wanneer gaat het open?", es: "¿Cuándo abre?", ipa: "van-NEER jaat jet O-pen" },
      { nl: "Het museum is gesloten.", es: "El museo está cerrado.", ipa: "jet mu-ZEY-um is je-SLO-ten" }
    ],
    grammar: "Cuidado: “half vier” en neerlandés significa 3:30, literalmente “media hacia las cuatro”. Para evitar errores, puedes usar números digitales: “drie uur dertig”. “Om” se usa para decir “a las” con una hora.",
    practice: [
      "Di estas horas en neerlandés: 8:00, 9:15, 3:30 y 6:45.",
      "Pregunta a qué hora abre y cierra un museo."
    ]
  },
  {
    day: 21,
    title: "Repaso semana 3: día de viaje",
    titleNative: "Week 3 herhaling: reisdag",
    focus: "Hoy conectas hotel, direcciones, transporte, bicicleta y horarios. Es un día completo de movimiento por Países Bajos.",
    vocab: [
      { nl: "reis", es: "viaje", ipa: "rays" },
      { nl: "reizen", es: "viajar", ipa: "RAY-zen" },
      { nl: "kaart", es: "mapa/tarjeta", ipa: "kaart" },
      { nl: "centrum", es: "centro", ipa: "SEN-trum" },
      { nl: "museum", es: "museo", ipa: "mu-ZEY-um" },
      { nl: "kanaal", es: "canal", ipa: "ka-NAAL" },
      { nl: "vertraging", es: "retraso", ipa: "ver-TRAA-jing" },
      { nl: "overstappen", es: "hacer transbordo", ipa: "O-ver-sta-pen" },
      { nl: "drukte", es: "multitud/aglomeración", ipa: "DRUK-te" },
      { nl: "aankomen", es: "llegar", ipa: "AAN-ko-men" }
    ],
    phrases: [
      { nl: "Ik reis vandaag naar Amsterdam.", es: "Hoy viajo a Ámsterdam.", ipa: "ik rays van-DAAJ naar AM-ster-dam" },
      { nl: "Is er vertraging?", es: "¿Hay retraso?", ipa: "is er ver-TRAA-jing" },
      { nl: "Waar moet ik overstappen?", es: "¿Dónde tengo que hacer transbordo?", ipa: "vaar mut ik O-ver-sta-pen" },
      { nl: "Ik wil naar het centrum.", es: "Quiero ir al centro.", ipa: "ik vil naar jet SEN-trum" },
      { nl: "Hoe laat kom ik aan?", es: "¿A qué hora llego?", ipa: "ju laat kom ik aan" },
      { nl: "Ik neem de tram en daarna de fiets.", es: "Tomo el tranvía y después la bici.", ipa: "ik neym de tram en daar-NA de fits" }
    ],
    grammar: "Los verbos de movimiento son muy útiles: “gaan” = ir, “nemen” = tomar, “aankomen” = llegar. En frases de viaje, puedes usar estructuras simples: “Ik neem…” y “Ik ga naar…”. Es mejor ser claro que intentar una frase larga.",
    practice: [
      "Crea un itinerario de tres pasos: hotel, tranvía, museo.",
      "Explica un retraso y pregunta dónde hacer transbordo."
    ]
  },
  {
    day: 22,
    title: "Compras básicas",
    titleNative: "Basiswinkelen",
    focus: "Comprar recuerdos, ropa o artículos de farmacia requiere preguntas simples. En tiendas neerlandesas, la interacción suele ser directa y rápida.",
    vocab: [
      { nl: "winkel", es: "tienda", ipa: "VIN-kel" },
      { nl: "kopen", es: "comprar", ipa: "KO-pen" },
      { nl: "prijs", es: "precio", ipa: "prays" },
      { nl: "duur", es: "caro", ipa: "duur" },
      { nl: "goedkoop", es: "barato", ipa: "JUT-koop" },
      { nl: "cadeau", es: "regalo", ipa: "ka-DO" },
      { nl: "tas", es: "bolsa", ipa: "tas" },
      { nl: "markt", es: "mercado", ipa: "markt" },
      { nl: "open", es: "abierto", ipa: "O-pen" },
      { nl: "korting", es: "descuento", ipa: "KOR-ting" }
    ],
    phrases: [
      { nl: "Hoeveel kost dit?", es: "¿Cuánto cuesta esto?", ipa: "ju-VEEL kost dit" },
      { nl: "Ik wil dit kopen.", es: "Quiero comprar esto.", ipa: "ik vil dit KO-pen" },
      { nl: "Heeft u een tas?", es: "¿Tiene una bolsa?", ipa: "heeft uu eyn tas" },
      { nl: "Dat is te duur.", es: "Eso es demasiado caro.", ipa: "dat is te duur" },
      { nl: "Is er korting?", es: "¿Hay descuento?", ipa: "is er KOR-ting" },
      { nl: "Ik zoek een cadeau.", es: "Busco un regalo.", ipa: "ik zuk eyn ka-DO" }
    ],
    grammar: "“Dit” significa “esto” y “dat” significa “eso”. Para compras, “Hoeveel kost dit?” es la pregunta clave. En Países Bajos no se regatea mucho en tiendas normales; en mercados puede haber algo más de flexibilidad, pero de forma moderada.",
    practice: [
      "Pregunta el precio de cinco objetos imaginarios.",
      "Explica que buscas un regalo barato pero bonito."
    ]
  },
  {
    day: 23,
    title: "Tallas, colores y probarse ropa",
    titleNative: "Maten, kleuren en passen",
    focus: "Si compras ropa, necesitas tallas, colores y frases para probarte algo. Esto también sirve en mercados y tiendas de souvenirs.",
    vocab: [
      { nl: "maat", es: "talla", ipa: "maat" },
      { nl: "klein", es: "pequeño", ipa: "klayn" },
      { nl: "groot", es: "grande", ipa: "jroot" },
      { nl: "passen", es: "probarse", ipa: "PA-sen" },
      { nl: "rood", es: "rojo", ipa: "root" },
      { nl: "blauw", es: "azul", ipa: "blow" },
      { nl: "groen", es: "verde", ipa: "jrun" },
      { nl: "zwart", es: "negro", ipa: "zvart" },
      { nl: "wit", es: "blanco", ipa: "vit" },
      { nl: "mooi", es: "bonito", ipa: "moy" }
    ],
    phrases: [
      { nl: "Heeft u maat medium?", es: "¿Tiene talla mediana?", ipa: "heeft uu maat MEE-di-um" },
      { nl: "Mag ik dit passen?", es: "¿Puedo probarme esto?", ipa: "maj ik dit PA-sen" },
      { nl: "Het is te groot.", es: "Es demasiado grande.", ipa: "jet is te jroot" },
      { nl: "Het is te klein.", es: "Es demasiado pequeño.", ipa: "jet is te klayn" },
      { nl: "Heeft u dit in blauw?", es: "¿Tiene esto en azul?", ipa: "heeft uu dit in blow" },
      { nl: "Deze kleur is mooi.", es: "Este color es bonito.", ipa: "DEY-ze KUL-er is moy" }
    ],
    grammar: "“Te” antes de un adjetivo significa “demasiado”: “te groot”, “te klein”, “te duur”. “Deze” se usa para “este/esta” con palabras comunes, y “dit” para “esto”. No te preocupes por dominar todos los géneros; en tiendas, el contexto ayuda mucho.",
    practice: [
      "Di que una prenda es demasiado grande, pequeña y cara.",
      "Pide el mismo objeto en tres colores distintos."
    ]
  },
  {
    day: 24,
    title: "Charla informal",
    titleNative: "Smalltalk",
    focus: "Aunque los neerlandeses pueden ser directos, también hay espacio para conversación ligera. Estas frases sirven en bares, tours, hostales y encuentros casuales.",
    vocab: [
      { nl: "weer", es: "clima", ipa: "veer" },
      { nl: "mooi", es: "bonito", ipa: "moy" },
      { nl: "slecht", es: "malo", ipa: "slejt" },
      { nl: "warm", es: "cálido/calor", ipa: "varm" },
      { nl: "koud", es: "frío", ipa: "kowt" },
      { nl: "gezellig", es: "acogedor/agradable", ipa: "je-ZE-luj" },
      { nl: "druk", es: "ocupado/lleno", ipa: "druk" },
      { nl: "leuk", es: "divertido/agradable", ipa: "loek" },
      { nl: "stad", es: "ciudad", ipa: "stat" },
      { nl: "vakantie", es: "vacaciones", ipa: "va-KAN-see" }
    ],
    phrases: [
      { nl: "Mooi weer vandaag.", es: "Buen clima hoy.", ipa: "moy veer van-DAAJ" },
      { nl: "Amsterdam is een mooie stad.", es: "Ámsterdam es una ciudad bonita.", ipa: "AM-ster-dam is eyn MOY-e stat" },
      { nl: "Het is hier gezellig.", es: "Aquí es muy agradable/acogedor.", ipa: "jet is hiir je-ZE-luj" },
      { nl: "Ben je op vakantie?", es: "¿Estás de vacaciones?", ipa: "ben ye op va-KAN-see" },
      { nl: "Waar woon je?", es: "¿Dónde vives?", ipa: "vaar voon ye" },
      { nl: "Dat is leuk!", es: "¡Qué bien / qué divertido!", ipa: "dat is loek" }
    ],
    grammar: "“Gezellig” es una palabra muy neerlandesa: puede significar acogedor, agradable, sociable o con buen ambiente. No tiene una sola traducción perfecta al español. Úsala para cafés, cenas, bares y momentos agradables.",
    practice: [
      "Describe el clima y el ambiente de un café usando “mooi”, “koud” y “gezellig”.",
      "Haz tres preguntas informales a alguien que acabas de conocer."
    ]
  },
  {
    day: 25,
    title: "Emergencias y salud",
    titleNative: "Noodgevallen en gezondheid",
    focus: "En emergencias, lo importante es ser claro y rápido. Aprende estas frases aunque luego cambies al inglés para explicar detalles médicos.",
    vocab: [
      { nl: "help", es: "ayuda", ipa: "help" },
      { nl: "noodgeval", es: "emergencia", ipa: "NOOT-je-val" },
      { nl: "politie", es: "policía", ipa: "po-LIT-see" },
      { nl: "dokter", es: "médico", ipa: "DOK-ter" },
      { nl: "ziekenhuis", es: "hospital", ipa: "ZII-ken-house" },
      { nl: "apotheek", es: "farmacia", ipa: "a-po-TEYK" },
      { nl: "pijn", es: "dolor", ipa: "payn" },
      { nl: "ziek", es: "enfermo", ipa: "ziik" },
      { nl: "gevallen", es: "caído", ipa: "je-VA-len" },
      { nl: "gestolen", es: "robado", ipa: "je-STO-len" }
    ],
    phrases: [
      { nl: "Help, alstublieft!", es: "¡Ayuda, por favor!", ipa: "help, ALS-tu-blift" },
      { nl: "Ik heb een dokter nodig.", es: "Necesito un médico.", ipa: "ik heb eyn DOK-ter NO-dij" },
      { nl: "Waar is de apotheek?", es: "¿Dónde está la farmacia?", ipa: "vaar is de a-po-TEYK" },
      { nl: "Ik heb pijn.", es: "Tengo dolor.", ipa: "ik heb payn" },
      { nl: "Mijn tas is gestolen.", es: "Me han robado la bolsa.", ipa: "mayn tas is je-STO-len" },
      { nl: "Bel de politie.", es: "Llame a la policía.", ipa: "bel de po-LIT-see" }
    ],
    grammar: "Para necesidad urgente, usa “Ik heb… nodig” = “necesito…”. “Bel” significa “llama”, como en “Bel de politie”. En situaciones médicas reales, usa neerlandés para captar atención y luego cambia al idioma que permita máxima precisión.",
    practice: [
      "Di tres frases de emergencia: médico, policía y farmacia.",
      "Practica señalar dolor: “Ik heb pijn” + parte del cuerpo en español si no sabes la palabra neerlandesa."
    ]
  },
  {
    day: 26,
    title: "Cumplidos y reacciones",
    titleNative: "Complimenten en reacties",
    focus: "Los cumplidos te ayudan a sonar amable sin exagerar. En Países Bajos, lo natural suele ser breve, directo y sincero.",
    vocab: [
      { nl: "mooi", es: "bonito", ipa: "moy" },
      { nl: "lekker", es: "rico", ipa: "LE-ker" },
      { nl: "goed", es: "bueno/bien", ipa: "jut" },
      { nl: "geweldig", es: "genial", ipa: "je-VEL-duj" },
      { nl: "interessant", es: "interesante", ipa: "in-te-re-SANT" },
      { nl: "vriendelijk", es: "amable", ipa: "VRINT-duh-luk" },
      { nl: "bedankt", es: "gracias", ipa: "be-DANKT" },
      { nl: "aardig", es: "agradable/amable", ipa: "AAR-duj" },
      { nl: "knap", es: "guapo/inteligente/hábil", ipa: "knap" },
      { nl: "trots", es: "orgulloso", ipa: "trots" }
    ],
    phrases: [
      { nl: "Wat mooi!", es: "¡Qué bonito!", ipa: "vat moy" },
      { nl: "Het eten is lekker.", es: "La comida está rica.", ipa: "jet EY-ten is LE-ker" },
      { nl: "Je bent heel vriendelijk.", es: "Eres muy amable.", ipa: "ye bent heel VRINT-duh-luk" },
      { nl: "Dat is interessant.", es: "Eso es interesante.", ipa: "dat is in-te-re-SANT" },
      { nl: "Dank je, dat is aardig.", es: "Gracias, eso es amable.", ipa: "DANK ye, dat is AAR-duj" },
      { nl: "Goed gedaan!", es: "¡Bien hecho!", ipa: "jut je-DAAN" }
    ],
    grammar: "Los cumplidos neerlandeses suelen ser menos dramáticos que en español. “Lekker” se usa para comida, bebidas e incluso clima de forma informal. “Mooi” funciona para cosas visualmente bonitas, como una ciudad, una vista o una prenda.",
    practice: [
      "Haz tres cumplidos: a una comida, una ciudad y una persona amable.",
      "Responde a un cumplido con “Dank je, dat is aardig”."
    ]
  },
  {
    day: 27,
    title: "Básicos de pasado y futuro",
    titleNative: "Basis verleden en toekomst",
    focus: "Hablar de ayer y mañana te permite contar planes y experiencias. No necesitas dominar todos los tiempos verbales para comunicarte bien como viajero.",
    vocab: [
      { nl: "gisteren", es: "ayer", ipa: "JIS-te-ren" },
      { nl: "vandaag", es: "hoy", ipa: "van-DAAJ" },
      { nl: "morgen", es: "mañana", ipa: "MOR-jen" },
      { nl: "gaan", es: "ir", ipa: "jaan" },
      { nl: "ging", es: "fui/iba", ipa: "jing" },
      { nl: "geweest", es: "estado/ido", ipa: "je-VEYST" },
      { nl: "doen", es: "hacer", ipa: "doon" },
      { nl: "gedaan", es: "hecho", ipa: "je-DAAN" },
      { nl: "straks", es: "más tarde", ipa: "straks" },
      { nl: "later", es: "después", ipa: "LAA-ter" }
    ],
    phrases: [
      { nl: "Gisteren was ik in Amsterdam.", es: "Ayer estuve en Ámsterdam.", ipa: "JIS-te-ren vas ik in AM-ster-dam" },
      { nl: "Vandaag ga ik naar het museum.", es: "Hoy voy al museo.", ipa: "van-DAAJ jaa ik naar jet mu-ZEY-um" },
      { nl: "Morgen ga ik fietsen.", es: "Mañana voy a montar en bici.", ipa: "MOR-jen jaa ik FIT-sen" },
      { nl: "Ik ben daar geweest.", es: "He estado allí.", ipa: "ik ben daar je-VEYST" },
      { nl: "Wat ga je doen?", es: "¿Qué vas a hacer?", ipa: "vat jaa ye doon" },
      { nl: "Tot later.", es: "Hasta después.", ipa: "tot LAA-ter" }
    ],
    grammar: "Para futuro, usa “gaan” + verbo: “Ik ga fietsen” = “voy a montar en bici”. Para pasado básico, puedes usar frases memorizadas como “Ik ben daar geweest”. No intentes conjugar todo al principio; usa marcadores como “gisteren”, “vandaag” y “morgen”.",
    practice: [
      "Di una cosa que hiciste ayer, una que haces hoy y una que harás mañana.",
      "Pregunta a alguien: “Wat ga je doen?” y responde con “Ik ga…”."
    ]
  },
  {
    day: 28,
    title: "Despedirse bien",
    titleNative: "Goed afscheid nemen",
    focus: "Las despedidas correctas dejan buena impresión en tiendas, hoteles y conversaciones sociales. En neerlandés hay opciones formales, informales y cálidas.",
    vocab: [
      { nl: "doei", es: "chao", ipa: "dui" },
      { nl: "dag", es: "hola/adiós", ipa: "daj" },
      { nl: "tot ziens", es: "hasta luego", ipa: "tot ZEENS" },
      { nl: "tot morgen", es: "hasta mañana", ipa: "tot MOR-jen" },
      { nl: "tot straks", es: "hasta ahora/más tarde", ipa: "tot straks" },
      { nl: "succes", es: "suerte/éxito", ipa: "suk-SES" },
      { nl: "fijne dag", es: "buen día", ipa: "FAY-ne daj" },
      { nl: "fijne avond", es: "buena noche", ipa: "FAY-ne A-vont" },
      { nl: "bedankt", es: "gracias", ipa: "be-DANKT" },
      { nl: "reis", es: "viaje", ipa: "rays" }
    ],
    phrases: [
      { nl: "Tot ziens en bedankt.", es: "Hasta luego y gracias.", ipa: "tot ZEENS en be-DANKT" },
      { nl: "Fijne dag!", es: "¡Que tenga buen día!", ipa: "FAY-ne daj" },
      { nl: "Fijne avond!", es: "¡Que tenga buena noche!", ipa: "FAY-ne A-vont" },
      { nl: "Tot morgen.", es: "Hasta mañana.", ipa: "tot MOR-jen" },
      { nl: "Goede reis!", es: "¡Buen viaje!", ipa: "JUU-de rays" },
      { nl: "Doei, tot later.", es: "Chao, hasta luego.", ipa: "dui, tot LAA-ter" }
    ],
    grammar: "“Tot…” equivale a “hasta…”, como “tot morgen” o “tot later”. “Doei” es informal; “tot ziens” es más seguro en situaciones educadas. Añadir “fijne dag” suena natural y amable al salir de una tienda o café.",
    practice: [
      "Despídete de forma formal, informal y amistosa.",
      "Combina una despedida con un agradecimiento en tres situaciones distintas."
    ]
  },
  {
    day: 29,
    title: "Ponerlo todo junto",
    titleNative: "Alles samenbrengen",
    focus: "Hoy practicas conversaciones completas de viaje. La meta es moverte por Ámsterdam usando neerlandés sencillo incluso si la otra persona puede hablar inglés.",
    vocab: [
      { nl: "beginnen", es: "empezar", ipa: "be-JI-nen" },
      { nl: "vragen", es: "preguntar", ipa: "VRAA-jen" },
      { nl: "antwoorden", es: "responder", ipa: "ANT-voor-den" },
      { nl: "zoeken", es: "buscar", ipa: "ZU-ken" },
      { nl: "vinden", es: "encontrar", ipa: "VIN-den" },
      { nl: "nodig", es: "necesario", ipa: "NO-dij" },
      { nl: "genoeg", es: "suficiente", ipa: "je-NUJ" },
      { nl: "makkelijk", es: "fácil", ipa: "MA-ke-luk" },
      { nl: "moeilijk", es: "difícil", ipa: "MOOY-luk" },
      { nl: "klaar", es: "listo/terminado", ipa: "klaar" }
    ],
    phrases: [
      { nl: "Ik zoek het station.", es: "Busco la estación.", ipa: "ik zuk jet sta-SJON" },
      { nl: "Ik heb hulp nodig.", es: "Necesito ayuda.", ipa: "ik heb hulp NO-dij" },
      { nl: "Dat is genoeg, bedankt.", es: "Eso es suficiente, gracias.", ipa: "dat is je-NUJ, be-DANKT" },
      { nl: "Nederlands is moeilijk maar leuk.", es: "El neerlandés es difícil pero divertido.", ipa: "NEY-der-lants is MOOY-luk maar loek" },
      { nl: "Ik probeer het opnieuw.", es: "Lo intento otra vez.", ipa: "ik pro-BEER jet OP-nieuw" },
      { nl: "Ik ben klaar om te gaan.", es: "Estoy listo/a para ir.", ipa: "ik ben klaar om te jaan" }
    ],
    grammar: "Una conversación útil puede construirse con pocas piezas: “Ik zoek…”, “Ik wil…”, “Ik heb… nodig” y “Waar is…?”. Si te bloqueas, usa “Ik probeer het opnieuw” y repite más lento. La confianza viene de frases reutilizables, no de perfección.",
    practice: [
      "Crea un diálogo de 10 líneas que incluya hotel, tranvía, café y pago.",
      "Cuenta tu día ideal en Ámsterdam usando presente, pasado y futuro."
    ]
  },
  {
    day: 30,
    title: "Consejos neerlandeses y repaso final",
    titleNative: "Nederlandse tips en eindherhaling",
    focus: "El último día combina idioma y cultura: café con stroopwafels, comunicación directa, poca propina y transporte público. También repasas falsos amigos comunes para evitar errores.",
    vocab: [
      { nl: "stroopwafel", es: "galleta neerlandesa con sirope", ipa: "STROOP-va-fel" },
      { nl: "koffie", es: "café", ipa: "KO-fi" },
      { nl: "direct", es: "directo", ipa: "di-REKT" },
      { nl: "fooi", es: "propina", ipa: "foy" },
      { nl: "OV-chipkaart", es: "tarjeta de transporte OV", ipa: "o-FEY CHIP-kaart" },
      { nl: "gezellig", es: "acogedor/agradable", ipa: "je-ZE-luj" },
      { nl: "winkel", es: "tienda", ipa: "VIN-kel" },
      { nl: "bellen", es: "llamar por teléfono", ipa: "BE-len" },
      { nl: "slim", es: "inteligente", ipa: "slim" },
      { nl: "raar", es: "raro/extraño", ipa: "raar" }
    ],
    phrases: [
      { nl: "Een stroopwafel bij de koffie is lekker.", es: "Un stroopwafel con café está rico.", ipa: "eyn STROOP-va-fel bay de KO-fi is LE-ker" },
      { nl: "Nederlanders zijn vaak direct.", es: "Los neerlandeses suelen ser directos.", ipa: "NEY-der-lan-ders zayn vaak di-REKT" },
      { nl: "Fooi is niet verplicht.", es: "La propina no es obligatoria.", ipa: "foy is neet ver-PLIJT" },
      { nl: "Kan ik met de OV-chipkaart reizen?", es: "¿Puedo viajar con la OV-chipkaart?", ipa: "kan ik met de o-FEY CHIP-kaart RAY-zen" },
      { nl: "Ik wil graag Nederlands blijven oefenen.", es: "Quiero seguir practicando neerlandés.", ipa: "ik vil jraaj NEY-der-lants BLAY-ven UU-fe-nen" },
      { nl: "Dank je voor je hulp.", es: "Gracias por tu ayuda.", ipa: "DANK ye vor ye hulp" },
      { nl: "Tot ziens, Nederland!", es: "¡Hasta luego, Países Bajos!", ipa: "tot ZEENS, NEY-der-lant" }
    ],
    grammar: "Cultura práctica: el café con stroopwafel es muy típico, la comunicación neerlandesa puede sonar directa pero no necesariamente grosera, y la propina suele ser baja u opcional. Para transporte, recuerda la OV-chipkaart o pago contactless y valida entrada/salida. Falsos amigos útiles: “bellen” no es bailar, sino llamar; “slim” significa inteligente, no delgado; “winkel” es tienda, no rincón; y “raar” significa raro o extraño.",
    practice: [
      "Haz una conversación final donde pidas café, uses transporte, compres algo y te despidas.",
      "Escribe cinco consejos para un viajero español en Países Bajos usando al menos cinco palabras neerlandesas."
    ]
  }
];
```
