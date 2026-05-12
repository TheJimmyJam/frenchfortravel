// course-es-de.js — Español → Alemán (para hispanohablantes)
// Instrucciones en español. Vocabulario: { de: "palabra alemana", es: "traducción española", ipa: "guía fonética para hispanohablantes" }

var COURSE_ES_DE = [

  // ── SEMANA 1: FUNDAMENTOS ──────────────────────────────────────────────

  {
    day: 1,
    title: "Saludos y cortesía",
    focus: "Los alemanes son formales al principio. La distinción entre 'Sie' (usted formal) y 'du' (tú informal) es fundamental. Siempre usa 'Sie' con desconocidos. El equivalente alemán de 'Buenos días' es obligatorio para una buena primera impresión.",
    vocab: [
      { de: "Hallo", es: "Hola", ipa: "HA-lo" },
      { de: "Guten Morgen", es: "Buenos días", ipa: "GU-ten MOR-guen" },
      { de: "Guten Tag", es: "Buenas tardes / Buenos días (general)", ipa: "GU-ten TAHK" },
      { de: "Guten Abend", es: "Buenas noches (al llegar)", ipa: "GU-ten A-bent" },
      { de: "Gute Nacht", es: "Buenas noches (al despedirse)", ipa: "GU-te NAJT" },
      { de: "Auf Wiedersehen", es: "Adiós (formal)", ipa: "auf VEE-der-se-en" },
      { de: "Tschüss", es: "Chao / Hasta luego (informal)", ipa: "TCHUS" },
      { de: "Bitte", es: "Por favor / De nada", ipa: "BI-te" },
      { de: "Danke", es: "Gracias", ipa: "DAN-ke" },
      { de: "Danke schön", es: "Muchas gracias", ipa: "DAN-ke SHÖN" },
      { de: "Bitte schön", es: "Con mucho gusto / De nada", ipa: "BI-te SHÖN" },
      { de: "Entschuldigung", es: "Perdón / Disculpe", ipa: "ent-SHUL-di-gung" },
      { de: "Es tut mir leid", es: "Lo siento", ipa: "es TUT mir lait" },
      { de: "Ja", es: "Sí", ipa: "ya" },
      { de: "Nein", es: "No", ipa: "nain" }
    ],
    grammar: "PRONUNCIACIÓN CLAVE:\n• 'w' alemán = 'v' española: 'Wiedersehen' se dice 'VEE-der-se-en'\n• 'v' alemán = 'f': 'vier' (cuatro) se dice 'fier'\n• 'j' alemán = 'y' suave: 'ja' (sí) se dice 'ya'\n• 'z' alemán = 'ts': 'zehn' (diez) = 'tsen'\n• 'ei' alemán = 'ai': como en 'aire'\n• Los sustantivos en alemán siempre se escriben con mayúscula\n• 'sch' = 'sh': 'Entschuldigung' tiene el sonido 'sh' de 'shampoo'",
    practice: "Practica el ciclo completo: entra a una tienda imaginaria → di 'Guten Tag' → espera la respuesta → di 'Danke schön' al salir → 'Auf Wiedersehen'. La regla de oro alemana: siempre salude primero."
  },

  {
    day: 2,
    title: "Reacciones básicas y comprensión",
    focus: "Estas frases son tu salvavidas cuando el alemán va demasiado rápido. Los alemanes aprecian el esfuerzo aunque tu alemán sea imperfecto — no tengas miedo de usarlas.",
    vocab: [
      { de: "Ich verstehe nicht", es: "No entiendo", ipa: "ij ver-SHTEE-e nijt" },
      { de: "Ich verstehe", es: "Entiendo", ipa: "ij ver-SHTEE-e" },
      { de: "Bitte wiederholen Sie", es: "Repita por favor (formal)", ipa: "BI-te VEE-der-ho-len see" },
      { de: "Sprechen Sie langsamer?", es: "¿Puede hablar más despacio?", ipa: "SHPRE-jen see LANG-sa-mer" },
      { de: "Sprechen Sie Englisch?", es: "¿Habla inglés?", ipa: "SHPRE-jen see ENG-lish" },
      { de: "Sprechen Sie Spanisch?", es: "¿Habla español?", ipa: "SHPRE-jen see SHPAH-nish" },
      { de: "Ich spreche kein Deutsch", es: "No hablo alemán", ipa: "ij SHPRE-je kain DOITSH" },
      { de: "Ein bisschen", es: "Un poco", ipa: "ain BI-shen" },
      { de: "Wie bitte?", es: "¿Cómo dijo? / ¿Perdón?", ipa: "vee BI-te" },
      { de: "Ich weiß nicht", es: "No sé", ipa: "ij vais nijt" },
      { de: "Natürlich", es: "Por supuesto / Claro", ipa: "na-TÜR-lij" },
      { de: "Vielleicht", es: "Quizás / Tal vez", ipa: "fi-LAJT" },
      { de: "Kein Problem", es: "No hay problema", ipa: "kain pro-BLEM" },
      { de: "Super!", es: "¡Genial! / ¡Estupendo!", ipa: "ZU-per" },
      { de: "Gut", es: "Bien / Bueno", ipa: "gut" }
    ],
    grammar: "SONIDOS DIFÍCILES:\n• 'ü': di 'i' con los labios redondeados como para decir 'u'. Ejemplo: 'natürlich' = 'na-TÜR-lij'\n• 'ch' después de e/i: un sonido suave, como soplar suavemente. Ejemplo: 'ich' = 'ij'\n• 'ie' = 'i' larga: 'wiederholen' = 'VEE-der-ho-len'\n• 'sp' y 'st' al inicio de sílaba = 'shp' y 'sht': 'Sprechen' = 'SHPRE-jen'",
    practice: "Cuando alguien te hable en alemán y no entiendas: 1) 'Wie bitte?' 2) 'Sprechen Sie langsamer?' 3) 'Sprechen Sie Englisch?' — Esas tres frases te sacan de casi cualquier situación."
  },

  {
    day: 3,
    title: "Presentarse",
    focus: "Los alemanes son directos y valoran la claridad. Presentarte correctamente establece el tono de la conversación. La diferencia entre 'Ich bin...' y 'Ich heiße...' es sutileza — ambos funcionan.",
    vocab: [
      { de: "Wie heißen Sie?", es: "¿Cómo se llama usted? (formal)", ipa: "vee HAI-sen see" },
      { de: "Wie heißt du?", es: "¿Cómo te llamas? (informal)", ipa: "vee haist du" },
      { de: "Ich heiße...", es: "Me llamo...", ipa: "ij HAI-se" },
      { de: "Ich bin...", es: "Soy...", ipa: "ij bin" },
      { de: "Woher kommen Sie?", es: "¿De dónde es usted? (formal)", ipa: "VO-her KO-men see" },
      { de: "Ich komme aus...", es: "Soy de... / Vengo de...", ipa: "ij KO-me aus" },
      { de: "Mexiko / Spanien / Argentinien", es: "México / España / Argentina", ipa: "MEK-si-ko / SHPA-nien / ar-gen-TEE-nien" },
      { de: "Wo wohnen Sie?", es: "¿Dónde vive usted?", ipa: "vo VO-nen see" },
      { de: "Ich wohne in...", es: "Vivo en...", ipa: "ij VO-ne in" },
      { de: "Wie alt sind Sie?", es: "¿Cuántos años tiene?", ipa: "vee alt zint see" },
      { de: "Ich bin ... Jahre alt", es: "Tengo ... años", ipa: "ij bin ... YA-re alt" },
      { de: "Was machen Sie beruflich?", es: "¿A qué se dedica?", ipa: "vas MAJ-en see be-RUF-lij" },
      { de: "Ich bin Tourist/Touristin", es: "Soy turista", ipa: "ij bin tu-RIST / tu-RIS-tin" },
      { de: "Freut mich", es: "Mucho gusto / Encantado", ipa: "froyt mij" },
      { de: "Sehr angenehm", es: "Es un placer (muy formal)", ipa: "ser AN-ge-nem" }
    ],
    grammar: "GÉNERO EN ALEMÁN:\n• Hay tres géneros: masculino (der), femenino (die), neutro (das)\n• Los adjetivos y artículos cambian según el género — por ahora, no te preocupes por esto\n• FORMAL vs. INFORMAL: 'Sie' (con S mayúscula) = usted. 'du' = tú. Con desconocidos, siempre 'Sie'\n• Nota cultural: en Alemania, el tuteo ('du') entre desconocidos se está volviendo más común, especialmente entre jóvenes y en startups — pero en contextos tradicionales, espera a que el alemán te ofrezca el 'du'",
    practice: "Practica: 'Guten Tag. Ich heiße [tu nombre]. Ich komme aus [tu país]. Freut mich.' Dilo 5 veces hasta que fluya."
  },

  {
    day: 4,
    title: "Números 0–20",
    focus: "Los números son esenciales para precios, horas y direcciones. La buena noticia: el alemán es bastante regular en los números. La peculiaridad: los números del 13 al 19 terminan en '-zehn' (como nuestra terminación '-ce' y '-teen').",
    vocab: [
      { de: "null", es: "cero", ipa: "nul" },
      { de: "eins", es: "uno", ipa: "ains" },
      { de: "zwei", es: "dos", ipa: "tsvai" },
      { de: "drei", es: "tres", ipa: "drai" },
      { de: "vier", es: "cuatro", ipa: "fier" },
      { de: "fünf", es: "cinco", ipa: "fünf" },
      { de: "sechs", es: "seis", ipa: "zeks" },
      { de: "sieben", es: "siete", ipa: "ZEE-ben" },
      { de: "acht", es: "ocho", ipa: "ajt" },
      { de: "neun", es: "nueve", ipa: "noin" },
      { de: "zehn", es: "diez", ipa: "tsen" },
      { de: "elf", es: "once", ipa: "elf" },
      { de: "zwölf", es: "doce", ipa: "tsvölf" },
      { de: "dreizehn", es: "trece", ipa: "DRAI-tsen" },
      { de: "vierzehn", es: "catorce", ipa: "FIER-tsen" },
      { de: "fünfzehn", es: "quince", ipa: "FÜNF-tsen" },
      { de: "sechzehn", es: "dieciséis", ipa: "ZEJ-tsen" },
      { de: "siebzehn", es: "diecisiete", ipa: "ZEEP-tsen" },
      { de: "achtzehn", es: "dieciocho", ipa: "AJT-tsen" },
      { de: "neunzehn", es: "diecinueve", ipa: "NOIN-tsen" },
      { de: "zwanzig", es: "veinte", ipa: "TSVAN-tsij" }
    ],
    grammar: "PRONUNCIACIÓN:\n• 'v' en alemán = 'f': 'vier' (cuatro) = 'fier', 'fünf' = como suena\n• 'ö': como la 'e' española pero con labios redondeados: 'zwölf', 'fünf'\n• 'ei' = 'ai': 'eins', 'zwei', 'drei'\n• 'z' = 'ts': 'zehn', 'zwanzig', 'zwei'\n• 'w' = 'v': 'zwei' = 'tsvai'",
    practice: "Practica contando hacia arriba y hacia abajo. Luego: 3 + 8 = ? (di la respuesta en alemán). 17 - 5 = ? El objetivo: que los números salgan sin pensar."
  },

  {
    day: 5,
    title: "Números 20–1000 y precios",
    focus: "Los números alemanes del 21 al 99 se forman al revés de lo que estamos acostumbrados: primero las unidades, luego las decenas, unidas con 'und'. 'Einundzwanzig' = literalmente 'uno-y-veinte' = 21. ¡Exactamente como el español antiguo 'veintiuno'!",
    vocab: [
      { de: "dreißig", es: "treinta", ipa: "DRAI-sij" },
      { de: "vierzig", es: "cuarenta", ipa: "FIER-tsij" },
      { de: "fünfzig", es: "cincuenta", ipa: "FÜNF-tsij" },
      { de: "sechzig", es: "sesenta", ipa: "ZEJ-tsij" },
      { de: "siebzig", es: "setenta", ipa: "ZEEP-tsij" },
      { de: "achtzig", es: "ochenta", ipa: "AJT-sij" },
      { de: "neunzig", es: "noventa", ipa: "NOIN-tsij" },
      { de: "hundert", es: "cien", ipa: "HUN-dert" },
      { de: "zweihundert", es: "doscientos", ipa: "TSVAI-hun-dert" },
      { de: "tausend", es: "mil", ipa: "TAU-zent" },
      { de: "einundzwanzig", es: "veintiuno", ipa: "AIN-unt-tsvan-tsij" },
      { de: "fünfundvierzig", es: "cuarenta y cinco", ipa: "FÜNF-unt-fier-tsij" },
      { de: "Was kostet das?", es: "¿Cuánto cuesta esto?", ipa: "vas KOS-tet das" },
      { de: "Euro", es: "euro", ipa: "OI-ro" },
      { de: "Cent", es: "céntimo", ipa: "sent" }
    ],
    grammar: "FORMACIÓN DE NÚMEROS 21–99:\n• Unidades + 'und' + decenas: 21 = einundzwanzig, 35 = fünfunddreißig, 48 = achtundvierzig\n• Se escribe como una sola palabra larga\n• 'dreißig' (30) es irregular — lleva -ßig en vez de -zig\n• Para precios: '5 Euro 50' = 'fünf Euro fünfzig'\n• '€14,90' se dice 'vierzehn Euro neunzig'",
    practice: "Mira los precios en un menú imaginario y di cada precio en alemán. €2,50 → €7,80 → €14,30 → €23,99 → €105,00. Cuando vayas a Alemania, los precios son siempre en euros — practica el rango €5–€50."
  },

  {
    day: 6,
    title: "Días, meses y tiempo",
    focus: "Los días de la semana en alemán tienen raíces similares a las del inglés (no tanto al español), pero son bastante regulares. La semana alemana comienza el lunes, no el domingo. El formato de fecha es: día.mes.año.",
    vocab: [
      { de: "Montag", es: "lunes", ipa: "MON-tahk" },
      { de: "Dienstag", es: "martes", ipa: "DIENS-tahk" },
      { de: "Mittwoch", es: "miércoles", ipa: "MIT-voj" },
      { de: "Donnerstag", es: "jueves", ipa: "DO-ners-tahk" },
      { de: "Freitag", es: "viernes", ipa: "FRAI-tahk" },
      { de: "Samstag", es: "sábado", ipa: "ZAMS-tahk" },
      { de: "Sonntag", es: "domingo", ipa: "ZON-tahk" },
      { de: "heute", es: "hoy", ipa: "HOI-te" },
      { de: "morgen", es: "mañana", ipa: "MOR-gen" },
      { de: "gestern", es: "ayer", ipa: "GES-tern" },
      { de: "Woche", es: "semana", ipa: "VO-je" },
      { de: "Monat", es: "mes", ipa: "MO-nat" },
      { de: "Jahr", es: "año", ipa: "yar" },
      { de: "Wann?", es: "¿Cuándo?", ipa: "van" },
      { de: "Um wie viel Uhr?", es: "¿A qué hora?", ipa: "um vee fiel ur" }
    ],
    grammar: "LAS HORAS:\n• 'Es ist zwei Uhr' = Son las dos\n• 'halb drei' = las dos y media (literalmente 'mitad de tres')\n• 'Viertel nach zwei' = las dos y cuarto\n• 'Viertel vor drei' = las tres menos cuarto\n• Los alemanes usan el sistema de 24 horas en contextos formales: '14 Uhr' = las 2 de la tarde\n• NOTA: Las tiendas en Alemania cierran los domingos. Planifica tus compras para entre semana.",
    practice: "¿Qué día es hoy? Dilo en alemán. ¿Qué hora es ahora mismo? Dilo con 'Es ist... Uhr'. Practica decir la hora cada vez que mires el reloj hoy."
  },

  {
    day: 7,
    title: "Repaso Semana 1 — Mini conversación",
    focus: "Consolida todo lo de la semana 1. Practica el flujo completo de una primera conversación. Al final de esta sesión deberías poder presentarte, dar tu información básica y manejar la confusión con confianza.",
    vocab: [
      { de: "Wie geht es Ihnen?", es: "¿Cómo está usted? (formal)", ipa: "vee get es EE-nen" },
      { de: "Wie geht's?", es: "¿Cómo estás? (informal)", ipa: "vee gets" },
      { de: "Gut, danke", es: "Bien, gracias", ipa: "gut DAN-ke" },
      { de: "Sehr gut", es: "Muy bien", ipa: "ser gut" },
      { de: "Es geht", es: "Más o menos / Regular", ipa: "es get" },
      { de: "Nicht so gut", es: "No muy bien", ipa: "nijt zo gut" },
      { de: "Und Ihnen?", es: "¿Y usted? (formal)", ipa: "unt EE-nen" },
      { de: "Und dir?", es: "¿Y tú? (informal)", ipa: "unt dir" },
      { de: "Schön, Sie kennenzulernen", es: "Encantado de conocerle", ipa: "shön see KE-nen-tsu-ler-nen" },
      { de: "Ich bin auf Reisen", es: "Estoy de viaje", ipa: "ij bin auf RAI-zen" },
      { de: "zum ersten Mal", es: "por primera vez", ipa: "tsum ERS-ten mal" },
      { de: "Es gefällt mir hier", es: "Me gusta aquí", ipa: "es ge-FELT mir hier" },
      { de: "Deutschland", es: "Alemania", ipa: "DOITSH-lant" },
      { de: "Berlin / München / Hamburg", es: "Berlín / Múnich / Hamburgo", ipa: "ber-LEEN / MÜN-jen / HAM-burk" }
    ],
    grammar: "CONVERSACIÓN MODELO:\nA: Guten Tag!\nB: Guten Tag! Wie heißen Sie?\nA: Ich heiße [nombre]. Und Sie?\nB: Ich heiße [nombre]. Woher kommen Sie?\nA: Ich komme aus Mexiko. Ich bin zum ersten Mal in Deutschland. Und Sie?\nB: Ich bin aus Berlin. Wie gefällt es Ihnen hier?\nA: Es gefällt mir sehr gut. Danke!\nB: Sehr schön. Auf Wiedersehen!\nA: Auf Wiedersehen!",
    practice: "Repasa los 7 días anteriores. Luego practica la conversación modelo completa en voz alta — primero con el texto a la vista, luego sin él. ¿Puedes saludar, presentarte y preguntar cómo está alguien, todo en alemán?"
  },

  // ── SEMANA 2: COMER Y BEBER ──────────────────────────────────────────

  {
    day: 8,
    title: "En el café — bebidas",
    focus: "El café alemán (Café) es un pilar cultural. La tradición del 'Kaffee und Kuchen' (café y pastel) a las 3 de la tarde es sagrada. Los alemanes beben mucho café — Alemania es uno de los mayores consumidores per cápita del mundo. Sabrás pedir bebidas perfectamente hoy.",
    vocab: [
      { de: "ein Kaffee, bitte", es: "un café, por favor", ipa: "ain KA-fe BI-te" },
      { de: "ein Espresso", es: "un espreso", ipa: "ain es-PRES-so" },
      { de: "ein Cappuccino", es: "un capuchino", ipa: "ain ka-pu-CHEE-no" },
      { de: "ein Latte Macchiato", es: "un latte macchiato", ipa: "ain LA-te ma-KYA-to" },
      { de: "ein Tee", es: "un té", ipa: "ain te" },
      { de: "ein Wasser", es: "un agua", ipa: "ain VA-ser" },
      { de: "ein Mineralwasser", es: "un agua mineral", ipa: "ain mi-ne-RAL-va-ser" },
      { de: "ein Bier", es: "una cerveza", ipa: "ain bier" },
      { de: "ein Glas Wein", es: "una copa de vino", ipa: "ain glas vain" },
      { de: "ein Orangensaft", es: "un zumo de naranja", ipa: "ain o-RAN-zhen-zaft" },
      { de: "mit Milch", es: "con leche", ipa: "mit milj" },
      { de: "ohne Zucker", es: "sin azúcar", ipa: "O-ne TSU-ker" },
      { de: "Ich möchte...", es: "Quisiera... / Me gustaría...", ipa: "ij MÖJ-te" },
      { de: "Ich hätte gern...", es: "Me gustaría tener... (más formal)", ipa: "ij HE-te gern" },
      { de: "Prost!", es: "¡Salud!", ipa: "prost" }
    ],
    grammar: "CÓMO PEDIR:\n• La forma más sencilla: '[bebida], bitte' → 'Einen Kaffee, bitte'\n• Más educado: 'Ich möchte einen Kaffee, bitte'\n• Muy formal: 'Ich hätte gern einen Kaffee'\n• NOTA: En alemán, el artículo cambia según el género: 'ein Kaffee' (m), 'eine Tasse Tee' (f), 'ein Bier' (n). Por ahora, aprende la frase completa de memoria.\n• AGUA: en Alemania pedir 'Wasser' probablemente te dará agua con gas. Si quieres sin gas, di 'stilles Wasser' (VA-ser shtil-les)",
    practice: "Practica el escenario: entras al café → 'Guten Tag!' → camarero responde → 'Ich möchte einen Kaffee und ein Stück Kuchen, bitte' → 'Danke schön' cuando llega. ¡Eso es todo lo que necesitas!"
  },

  {
    day: 9,
    title: "En el café — comida básica",
    focus: "La repostería alemana es legendaria. Croissants (sí, también los comen), tortas de manzana, pretzels, pan de centeno — el desayuno y la merienda alemanes son un placer. Hoy aprendes a pedir lo que necesitas en la barra.",
    vocab: [
      { de: "ein Stück Kuchen", es: "un trozo de pastel / torta", ipa: "ain shtük KU-jen" },
      { de: "ein Croissant", es: "un cruasán", ipa: "ain kro-SANG" },
      { de: "ein Brot", es: "un pan", ipa: "ain brot" },
      { de: "ein Brötchen", es: "un panecillo", ipa: "ain BRÜT-jen" },
      { de: "ein Sandwich", es: "un sándwich", ipa: "ain ZEND-vitsh" },
      { de: "ein Brezel", es: "un pretzel", ipa: "ain BRE-tsel" },
      { de: "eine Wurst", es: "una salchicha / un embutido", ipa: "AI-ne vurst" },
      { de: "ein Käse", es: "un queso", ipa: "ain KE-ze" },
      { de: "ein Ei", es: "un huevo", ipa: "ain ai" },
      { de: "die Speisekarte", es: "la carta / el menú", ipa: "dee SHPAI-ze-kar-te" },
      { de: "Was empfehlen Sie?", es: "¿Qué recomienda?", ipa: "vas emp-FE-len see" },
      { de: "Das nehme ich", es: "Me llevo eso / Lo tomo", ipa: "das NE-me ij" },
      { de: "Für mich bitte...", es: "Para mí, por favor...", ipa: "für mij BI-te" },
      { de: "Ist das frisch?", es: "¿Está fresco?", ipa: "ist das frish" },
      { de: "sehr lecker", es: "muy rico / delicioso", ipa: "ser LE-ker" }
    ],
    grammar: "VOCABULARIO ÚTIL:\n• 'Die Speisekarte, bitte' = La carta, por favor (la primera frase al sentarte)\n• 'Was empfehlen Sie?' es muy útil — los camareros alemanes conocen bien su oferta\n• 'Das nehme ich' = expresión natural para elegir algo del menú\n• NOTA CULTURAL: El pan en Alemania merece capítulo propio. Hay más de 300 tipos. El 'Vollkornbrot' (pan integral de centeno) es el rey. Si te ofrecen 'Schwarzbrot' (pan negro), pruébalo con mantequilla — es sorprendentemente bueno.",
    practice: "Imagina que estás en una Bäckerei (panadería). Ves: Croissant €1,20, Brötchen €0,80, Apfelkuchen €3,50. Pide los tres artículos y da el precio total. ¿Cuánto cuesta todo? Dilo en alemán."
  },

  {
    day: 10,
    title: "En el restaurante — pedido completo",
    focus: "El servicio en los restaurantes alemanes es diferente al de México o España. El camarero NO vendrá automáticamente — tienes que hacer contacto visual y levantar la mano o decir '¡Entschuldigung!' para llamarle. También: la cuenta NO llega sola. Hay que pedirla.",
    vocab: [
      { de: "Einen Tisch für zwei, bitte", es: "Una mesa para dos, por favor", ipa: "AI-nen tish für tsvai BI-te" },
      { de: "Haben Sie reserviert?", es: "¿Tienen reserva?", ipa: "HA-ben zee re-zer-VIERT" },
      { de: "Ich habe eine Reservierung", es: "Tengo una reserva", ipa: "ij HA-be AI-ne re-zer-VEE-rung" },
      { de: "Die Karte, bitte", es: "La carta, por favor", ipa: "dee KAR-te BI-te" },
      { de: "Ich bin noch nicht so weit", es: "Aún no estoy listo para pedir", ipa: "ij bin noj nijt zo vait" },
      { de: "Ich möchte bestellen", es: "Quiero pedir / ordenar", ipa: "ij MÖJ-te be-SHTE-len" },
      { de: "Was ist das Tagesgericht?", es: "¿Cuál es el plato del día?", ipa: "vas ist das TA-ges-ge-rijt" },
      { de: "Zum Wohl!", es: "¡Salud! (en la mesa)", ipa: "tsum vol" },
      { de: "Guten Appetit!", es: "¡Buen provecho!", ipa: "GU-ten a-pe-TEET" },
      { de: "Es schmeckt sehr gut", es: "Está muy rico / Sabe muy bien", ipa: "es shmekt ser gut" },
      { de: "Ich bin satt", es: "Estoy lleno / satisfecho", ipa: "ij bin zat" },
      { de: "Noch einmal dasselbe", es: "Lo mismo otra vez", ipa: "noj AIN-mal das-ZEL-be" },
      { de: "Das war ausgezeichnet", es: "Estuvo excelente", ipa: "das var AUS-ge-tsaij-net" },
      { de: "Die Rechnung, bitte", es: "La cuenta, por favor", ipa: "dee REJ-nung BI-te" },
      { de: "Getrennt oder zusammen?", es: "¿Separado o junto? (al pagar)", ipa: "ge-TRENT O-der tsu-ZA-men" }
    ],
    grammar: "PROTOCOLO EN EL RESTAURANTE ALEMÁN:\n1. Llegas → 'Guten Abend, einen Tisch für zwei, bitte'\n2. Te sientas → 'Die Karte, bitte' (o ya está en la mesa)\n3. Para pedir → levanta la mano o di '¡Entschuldigung!'\n4. Cuando llegue la comida → '¡Guten Appetit!' entre todos\n5. Para pedir la cuenta → '¡Entschuldigung! Die Rechnung, bitte'\n6. ¿Juntos o separados? → 'Zusammen, bitte' o 'Getrennt, bitte'",
    practice: "Simula una cena completa en voz alta: llegada → pedir mesa → pedir carta → elegir → brindis → pagar. El ejercicio completo no debería tomarte más de 3 minutos."
  },

  {
    day: 11,
    title: "Comidas comunes — leer un menú",
    focus: "Los menús alemanes pueden ser intimidantes: palabras larguísimas que en realidad son combinaciones de palabras más simples. 'Rindfleischsalat' = Rind (res) + Fleisch (carne) + Salat (ensalada) = ensalada de carne de res. Una vez que entiendes las raíces, puedes descifrar casi cualquier cosa.",
    vocab: [
      { de: "das Frühstück", es: "el desayuno", ipa: "das FRÜH-shtük" },
      { de: "das Mittagessen", es: "el almuerzo / la comida", ipa: "das MI-tahk-e-sen" },
      { de: "das Abendessen", es: "la cena", ipa: "das A-bent-e-sen" },
      { de: "das Fleisch", es: "la carne", ipa: "das flaish" },
      { de: "das Hähnchen", es: "el pollo", ipa: "das HEN-jen" },
      { de: "das Schweinefleisch", es: "la carne de cerdo", ipa: "das SHVAI-ne-flaish" },
      { de: "das Rindfleisch", es: "la carne de res / ternera", ipa: "das RINT-flaish" },
      { de: "der Fisch", es: "el pescado", ipa: "der fish" },
      { de: "die Suppe", es: "la sopa", ipa: "dee ZU-pe" },
      { de: "der Salat", es: "la ensalada", ipa: "der za-LAT" },
      { de: "die Kartoffeln", es: "las papas / patatas", ipa: "dee kar-TO-feln" },
      { de: "das Gemüse", es: "las verduras", ipa: "das ge-MÜ-ze" },
      { de: "die Nudeln", es: "los fideos / la pasta", ipa: "dee NU-deln" },
      { de: "der Nachtisch / das Dessert", es: "el postre", ipa: "der NAJ-tish / das de-SER" },
      { de: "die Vorspeise", es: "el entrante / la entrada", ipa: "dee FOR-shpai-ze" }
    ],
    grammar: "PALABRAS COMPUESTAS ALEMANAS:\n• Schweinefleisch = Schwein (cerdo) + Fleisch (carne)\n• Frühstück = früh (temprano) + Stück (pieza) → literalmente 'pieza temprana'\n• Mittagessen = Mittag (mediodía) + Essen (comida)\n• Abendessen = Abend (tarde/noche) + Essen (comida)\n• TRUCO: busca las raíces. 'Fleisch' siempre = carne. 'Brot' siempre = pan. Una vez reconoces los bloques, los menús se vuelven legibles.",
    practice: "Lee este 'menú' en voz alta y tradúcelo mentalmente: Vorspeise: Tomatensuppe. Hauptgericht: Schweineschnitzel mit Kartoffeln und Gemüse. Nachtisch: Apfelkuchen. ¿Qué comiste?"
  },

  {
    day: 12,
    title: "Alergias y necesidades dietéticas",
    focus: "Alemania es muy consciente de las alergias alimentarias — la ley europea obliga a indicar los 14 alérgenos principales. El vegetarianismo está muy extendido; el veganismo va creciendo. Saber comunicar tus necesidades puede ser literal o figurativamente vital.",
    vocab: [
      { de: "Ich bin Vegetarier/Vegetarierin", es: "Soy vegetariano/a", ipa: "ij bin ve-ge-TA-rier / ve-ge-ta-RIE-rin" },
      { de: "Ich bin Veganer/Veganerin", es: "Soy vegano/a", ipa: "ij bin ve-GA-ner / ve-ga-NE-rin" },
      { de: "Ich bin allergisch gegen...", es: "Soy alérgico/a a...", ipa: "ij bin a-LER-gish GE-gen" },
      { de: "Nüsse", es: "frutos secos / nueces", ipa: "NÜ-se" },
      { de: "Gluten", es: "gluten", ipa: "GLU-ten" },
      { de: "Laktose", es: "lactosa", ipa: "lak-TO-ze" },
      { de: "Meeresfrüchte", es: "mariscos", ipa: "ME-res-früj-te" },
      { de: "Enthält das...?", es: "¿Contiene esto...?", ipa: "ent-HELT das" },
      { de: "ohne Fleisch", es: "sin carne", ipa: "O-ne flaish" },
      { de: "ohne Milch", es: "sin leche", ipa: "O-ne milj" },
      { de: "Haben Sie vegane Optionen?", es: "¿Tienen opciones veganas?", ipa: "HA-ben zee ve-GA-ne op-TSYO-nen" },
      { de: "Das kann ich nicht essen", es: "Eso no lo puedo comer", ipa: "das kan ij nijt E-sen" },
      { de: "Ich vertraue Ihnen", es: "Confío en usted", ipa: "ij fer-TRAU-e EE-nen" },
      { de: "mittelsarf / scharf", es: "picante medio / picante", ipa: "MI-tel-sharf / sharf" },
      { de: "nicht zu scharf", es: "no muy picante", ipa: "nijt tsu sharf" }
    ],
    grammar: "FRASES DE EMERGENCIA ALÉRGICA:\n• 'Ich bin allergisch gegen Nüsse — das ist sehr wichtig für mich' = 'Soy alérgico a los frutos secos — esto es muy importante para mí'\n• 'Wichtig' (VIJ-tij) = importante. Enfatiza esta palabra.\n• NOTA: El picante (scharf) en Alemania es mucho más suave que en México o España. Lo que para ellos es 'scharf' a menudo nos parece normal. No esperes chile habanero.",
    practice: "Si tienes alguna alergia o restricción real, aprende a decirla en alemán hoy. Si no, practica con el escenario más común: 'Ich bin Vegetarier. Haben Sie vegane Optionen? Ich bin allergisch gegen Gluten. Enthält das Gluten?'"
  },

  {
    day: 13,
    title: "Pagar y propinas",
    focus: "En Alemania, las propinas no son obligatorias pero se aprecian. La costumbre es redondear o añadir un 5–10% en restaurantes. El sistema de pago alemán es diferente: frecuentemente te preguntan si quieres pagar con tarjeta o en efectivo antes de traer la cuenta — y muchos sitios siguen siendo solo efectivo.",
    vocab: [
      { de: "Zahlen, bitte!", es: "¡La cuenta, por favor!", ipa: "TSA-len BI-te" },
      { de: "Kann ich mit Karte zahlen?", es: "¿Puedo pagar con tarjeta?", ipa: "kan ij mit KAR-te TSA-len" },
      { de: "Nur Bargeld", es: "Solo efectivo", ipa: "nur BAR-gelt" },
      { de: "Haben Sie Kleingeld?", es: "¿Tiene cambio / suelto?", ipa: "HA-ben zee KLAIN-gelt" },
      { de: "Das stimmt so", es: "Está bien así (quédese el cambio)", ipa: "das shtimt zo" },
      { de: "Das ist für Sie", es: "Esto es para usted (la propina)", ipa: "das ist für zee" },
      { de: "Getrennt bitte", es: "Separado, por favor", ipa: "ge-TRENT BI-te" },
      { de: "Zusammen bitte", es: "Junto, por favor", ipa: "tsu-ZA-men BI-te" },
      { de: "die Quittung", es: "el recibo", ipa: "dee KVI-tung" },
      { de: "Stimmt der Betrag?", es: "¿Es correcto el importe?", ipa: "shtimt der be-TRAHK" },
      { de: "Ich glaube, hier ist ein Fehler", es: "Creo que hay un error aquí", ipa: "ij GLAU-be hier ist ain FE-ler" },
      { de: "Es war alles wunderbar", es: "Todo estuvo maravilloso", ipa: "es var A-les VUN-der-bar" },
      { de: "Das Essen war ausgezeichnet", es: "La comida estuvo excelente", ipa: "das E-sen var AUS-ge-tsaij-net" },
      { de: "Wir kommen wieder", es: "Volveremos", ipa: "vir KO-men VEE-der" }
    ],
    grammar: "SISTEMA DE PAGO EN ALEMANIA:\n• Muchos restaurantes y tiendas siguen siendo 'nur Bargeld' (solo efectivo) — siempre lleva algo de cash\n• Al pagar, dices el importe que quieres dar: si la cuenta es €18 y das €20, di 'Zwanzig' y quédate con el cambio, o di 'Neunzehn' para dejar €1 de propina\n• 'Das stimmt so' = la forma elegante de decir 'quédate el cambio'\n• Propinas: 10% es generoso y muy apreciado. 5% es normal.",
    practice: "La cuenta es €23,70. Pagas con €30. ¿Qué dices para dejar €3 de propina? ('Siebenundzwanzig Euro, bitte' = quieres €3 de cambio, dejando €3,30 de propina). Si quieres pagar exacto: 'Das stimmt so.'"
  },

  {
    day: 14,
    title: "Repaso Semana 2 — Día de café imaginario",
    focus: "Vive un día alemán completo: desayuno en la Bäckerei, almuerzo en el restaurante, Kaffee und Kuchen a las 15h. Practica todo el flujo de comida y bebida de principio a fin.",
    vocab: [
      { de: "Ich hätte gern die Tageskarte", es: "Quisiera el menú del día", ipa: "ij HE-te gern dee TA-ges-kar-te" },
      { de: "Was ist heute das Tagesgericht?", es: "¿Cuál es el plato del día hoy?", ipa: "vas ist HOI-te das TA-ges-ge-rijt" },
      { de: "Für den Tisch", es: "Para la mesa", ipa: "für den tish" },
      { de: "Noch etwas?", es: "¿Algo más?", ipa: "noj ET-vas" },
      { de: "Nein danke, das ist alles", es: "No gracias, eso es todo", ipa: "nain DAN-ke das ist A-les" },
      { de: "Es war ein schöner Abend", es: "Fue una velada muy agradable", ipa: "es var ain SHÖNER A-bent" },
      { de: "Sehr gemütlich hier", es: "Muy acogedor aquí", ipa: "ser ge-MÜT-lij hier" },
      { de: "Ich empfehle...", es: "Recomiendo...", ipa: "ij emp-FE-le" },
      { de: "Zum Mitnehmen", es: "Para llevar", ipa: "tsum MIT-ne-men" },
      { de: "Hier essen", es: "Para comer aquí", ipa: "hier E-sen" }
    ],
    grammar: "MINI ESCENARIO COMPLETO:\nMañana — Bäckerei: 'Guten Morgen! Ein Brötchen und einen Kaffee, bitte. — Für hier oder zum Mitnehmen? — Für hier. — Das macht €3,20.'\n\nTarde — Restaurante: 'Was ist heute das Tagesgericht? — Schweineschnitzel mit Kartoffeln. — Das nehme ich, bitte. — Guten Appetit! — Danke! Es schmeckt sehr gut. — Zahlen bitte! — Das macht €14,50. — Fünfzehn Euro. Das stimmt so.'\n\nMerienda — Café: 'Einen Kaffee und ein Stück Apfelkuchen, bitte. — Sehr gemütlich hier! — Ja, danke!'",
    practice: "¿Puedes entrar a un café, pedir algo de comer y beber, preguntar la cuenta y pagar correctamente — todo en alemán? Ese es el objetivo de la semana 2."
  },

  // ── SEMANA 3: HOTEL Y TRANSPORTE ────────────────────────────────────

  {
    day: 15,
    title: "Check-in en el hotel",
    focus: "Los hoteles alemanes son eficientes y directos. El check-in es generalmente a las 15h, el check-out a las 11h. El recepcionista será amable pero no efusivo — eso es normal en Alemania y no significa que esté de mal humor.",
    vocab: [
      { de: "Ich habe eine Reservierung", es: "Tengo una reserva", ipa: "ij HA-be AI-ne re-zer-VEE-rung" },
      { de: "auf den Namen...", es: "a nombre de...", ipa: "auf den NA-men" },
      { de: "Ich möchte einchecken", es: "Quiero hacer el check-in", ipa: "ij MÖJ-te AIN-tje-ken" },
      { de: "für wie viele Nächte?", es: "¿para cuántas noches?", ipa: "für vee FEE-le NEJ-te" },
      { de: "für zwei Nächte", es: "para dos noches", ipa: "für tsvai NEJ-te" },
      { de: "Ein Einzelzimmer", es: "Una habitación individual", ipa: "ain AIN-tsel-tsi-mer" },
      { de: "Ein Doppelzimmer", es: "Una habitación doble", ipa: "ain DO-pel-tsi-mer" },
      { de: "mit Dusche / mit Bad", es: "con ducha / con baño", ipa: "mit DU-she / mit bat" },
      { de: "Wann ist Frühstück?", es: "¿A qué hora es el desayuno?", ipa: "van ist FRÜH-shtük" },
      { de: "Ist das Frühstück inbegriffen?", es: "¿Está el desayuno incluido?", ipa: "ist das FRÜH-shtük IN-be-gri-fen" },
      { de: "Wo ist der Aufzug?", es: "¿Dónde está el ascensor?", ipa: "vo ist der AUF-tsug" },
      { de: "Kann ich einen späten Check-out haben?", es: "¿Puedo tener check-out tardío?", ipa: "kan ij AI-nen SHPÄ-ten TSHEK-aut HA-ben" },
      { de: "Mein Zimmerschlüssel", es: "Mi llave de habitación", ipa: "main TSI-mer-shlüs-sel" },
      { de: "Zimmer Nummer...", es: "Habitación número...", ipa: "TSI-mer NU-mer" },
      { de: "Haben Sie WLAN?", es: "¿Tienen WiFi?", ipa: "HA-ben zee VEE-lan" }
    ],
    grammar: "PROTOCOLO HOTEL ALEMÁN:\n1. 'Guten Tag, ich habe eine Reservierung auf den Namen [apellido]'\n2. El recepcionista te pedirá el pasaporte — entrégalo\n3. Firmará o hará el check-in digitalmente\n4. 'Wann ist Frühstück?' → importante: los desayunos alemanes son abundantes y valen mucho la pena\n5. 'Wo ist der Aufzug?' → para subir a tu habitación\n6. WLAN: en Alemania se dice 'WLAN' (Wireless Local Area Network) = WiFi",
    practice: "Practica el check-in completo: llegas al hotel, dices tu nombre, preguntas sobre el desayuno, pides la clave WiFi y preguntas dónde está el ascensor. Todo en alemán."
  },

  {
    day: 16,
    title: "El cuarto — vocabulario y problemas",
    focus: "Saber comunicar problemas con la habitación puede hacer la diferencia entre dormir bien o no. Los hoteles alemanes son generalmente muy eficientes para resolver problemas — solo necesitas las palabras correctas.",
    vocab: [
      { de: "das Zimmer ist zu laut", es: "la habitación es demasiado ruidosa", ipa: "das TSI-mer ist tsu laut" },
      { de: "die Heizung funktioniert nicht", es: "la calefacción no funciona", ipa: "dee HAI-tsung funk-tsyo-NIERT nijt" },
      { de: "die Klimaanlage", es: "el aire acondicionado", ipa: "dee KLI-ma-an-la-ge" },
      { de: "kein warmes Wasser", es: "no hay agua caliente", ipa: "kain VAR-mes VA-ser" },
      { de: "das Licht geht nicht an", es: "la luz no enciende", ipa: "das lijt get nijt an" },
      { de: "mehr Handtücher, bitte", es: "más toallas, por favor", ipa: "mer HANT-tü-jer BI-te" },
      { de: "ein Kopfkissen mehr", es: "una almohada más", ipa: "ain KOPF-ki-sen mer" },
      { de: "Können Sie das Zimmer wechseln?", es: "¿Puede cambiarme de habitación?", ipa: "KÖ-nen zee das TSI-mer VEK-seln" },
      { de: "Es gibt ein Problem", es: "Hay un problema", ipa: "es gibt ain PRO-blem" },
      { de: "Das Schloss ist kaputt", es: "La cerradura está rota", ipa: "das shloss ist ka-PUT" },
      { de: "Wann wird das repariert?", es: "¿Cuándo lo repararán?", ipa: "van virt das re-pa-RIERT" },
      { de: "Können Sie bitte kommen?", es: "¿Puede venir por favor?", ipa: "KÖ-nen zee BI-te KO-men" },
      { de: "die Rezeption", es: "la recepción", ipa: "dee re-tsep-TSYON" },
      { de: "der Zimmerservice", es: "el servicio de habitaciones", ipa: "der TSI-mer-zer-vees" },
      { de: "Alles in Ordnung", es: "Todo en orden / Todo bien", ipa: "A-les in ORD-nung" }
    ],
    grammar: "EXPRESAR PROBLEMAS:\n• Estructura básica: '[cosa] + funktioniert nicht' o '[cosa] + ist kaputt'\n• 'Können Sie...' = ¿Puede usted...? (petición educada esencial)\n• 'Es gibt ein Problem' = apertura universal para cualquier queja\n• KULTURELL: Los alemanes prefieren la comunicación directa. No hay que disculparse mucho ni ser evasivo. Un 'Es gibt ein Problem mit meinem Zimmer, die Heizung funktioniert nicht' directo y claro es perfectamente aceptable y apropiado.",
    practice: "Tres escenarios de problemas: (1) No hay agua caliente, (2) La habitación está muy ruidosa, (3) Faltan toallas. Practica reportarlos en la recepción con 'Guten Abend, ich habe ein Problem...'"
  },

  {
    day: 17,
    title: "Pedir direcciones",
    focus: "Alemanes en general son muy serviciales cuando pides ayuda en la calle. Les gusta dar instrucciones precisas. La mala noticia: las instrucciones precisas en alemán pueden ser muy largas. Hoy aprendes las palabras clave para descifrar lo más importante.",
    vocab: [
      { de: "Entschuldigung, wo ist...?", es: "Disculpe, ¿dónde está...?", ipa: "ent-SHUL-di-gung vo ist" },
      { de: "Wie komme ich zu...?", es: "¿Cómo llego a...?", ipa: "vee KO-me ij tsu" },
      { de: "geradeaus", es: "recto / todo seguido", ipa: "ge-ra-de-AUS" },
      { de: "links", es: "a la izquierda", ipa: "links" },
      { de: "rechts", es: "a la derecha", ipa: "rejts" },
      { de: "an der Ecke", es: "en la esquina", ipa: "an der E-ke" },
      { de: "die erste Straße links", es: "la primera calle a la izquierda", ipa: "dee ERS-te SHTRAS-se links" },
      { de: "die nächste Ampel", es: "el próximo semáforo", ipa: "dee NEJKS-te AM-pel" },
      { de: "nah / weit", es: "cerca / lejos", ipa: "na / vait" },
      { de: "ungefähr fünf Minuten", es: "aproximadamente cinco minutos", ipa: "UN-ge-fer fünf mi-NU-ten" },
      { de: "zu Fuß / mit dem Bus", es: "a pie / en autobús", ipa: "tsu fus / mit dem bus" },
      { de: "die U-Bahn-Station", es: "la estación de metro", ipa: "dee U-ban-shta-TSYON" },
      { de: "der Bahnhof", es: "la estación de tren", ipa: "der BAN-hof" },
      { de: "der Flughafen", es: "el aeropuerto", ipa: "der FLUG-ha-fen" },
      { de: "Können Sie es auf der Karte zeigen?", es: "¿Puede señalarlo en el mapa?", ipa: "KÖ-nen zee es auf der KAR-te TSAI-gen" }
    ],
    grammar: "TRUCO PARA DIRECCIONES:\n• No necesitas entender cada palabra — identifica las palabras clave: 'links' (izquierda), 'rechts' (derecha), 'geradeaus' (recto), nombres de calles\n• 'Können Sie es auf der Karte zeigen?' es tu mejor amigo — saca el teléfono con Google Maps y pide que señalen\n• Si no entiendes, di: 'Entschuldigung, ich verstehe nicht. Können Sie das aufschreiben?' (¿Puede escribirlo?)",
    practice: "Practica preguntar cómo llegar a: (1) el hotel, (2) la estación de metro más cercana, (3) un supermercado. Luego practica entender respuestas que incluyan 'geradeaus', 'links', 'rechts' y números de minutos."
  },

  {
    day: 18,
    title: "El metro (U-Bahn y S-Bahn)",
    focus: "El transporte público alemán es de los mejores del mundo — puntual, extenso y bien señalizado. La U-Bahn es el metro subterráneo; la S-Bahn es el tren de cercanías. En muchas ciudades usan el mismo billete. ¡Y te pueden multar fuertemente por no llevar billete — hasta €60!",
    vocab: [
      { de: "eine Fahrkarte, bitte", es: "un billete, por favor", ipa: "AI-ne FAR-kar-te BI-te" },
      { de: "eine Einzelfahrt", es: "un billete sencillo / de ida", ipa: "AI-ne AIN-tsel-fart" },
      { de: "eine Tageskarte", es: "un billete de día", ipa: "AI-ne TA-ges-kar-te" },
      { de: "eine Wochenkarte", es: "un abono semanal", ipa: "AI-ne VO-jen-kar-te" },
      { de: "Welche Linie fährt nach...?", es: "¿Qué línea va a...?", ipa: "VEL-je LI-nie fert naj" },
      { de: "Muss ich umsteigen?", es: "¿Tengo que hacer transbordo?", ipa: "mus ij UM-shtai-gen" },
      { de: "Wo muss ich aussteigen?", es: "¿Dónde tengo que bajarme?", ipa: "vo mus ij AUS-shtai-gen" },
      { de: "Wo ist die nächste Station?", es: "¿Dónde está la próxima estación?", ipa: "vo ist dee NEJKS-te shta-TSYON" },
      { de: "in Richtung...", es: "en dirección a...", ipa: "in RISH-tung" },
      { de: "Endstation", es: "terminal / última parada", ipa: "ENT-shta-tsyon" },
      { de: "der Ausgang", es: "la salida", ipa: "der AUS-gang" },
      { de: "Nächste Haltestelle...", es: "Próxima parada...", ipa: "NEJKS-te HAL-te-shte-le" },
      { de: "Türen schließen", es: "Las puertas se cierran", ipa: "TÜ-ren SHLEE-sen" },
      { de: "Achtung!", es: "¡Atención!", ipa: "AJ-tung" },
      { de: "Vorsicht!", es: "¡Cuidado!", ipa: "FOR-zijt" }
    ],
    grammar: "SISTEMA DE TICKETS:\n• En muchas ciudades el billete es por zona — Innenraum (zona interior) suele cubrir el centro\n• Una Tageskarte para una persona suele ser más barata que 3 viajes sueltos\n• VALIDACIÓN: En muchos sistemas alemanes HAY que validar (entwerten) el billete en la máquina amarilla antes de subir. Si no lo haces, se considera fraude aunque tengas billete.\n• En Berlín: U1-U9 son U-Bahn; S1-S9 son S-Bahn. En Múnich el sistema es similar.",
    practice: "Escenario: quieres ir del aeropuerto al centro de Berlín (Berliner Hauptbahnhof). Pregunta en la máquina o a alguien: 'Entschuldigung, welche Linie fährt zum Hauptbahnhof?' Luego compra tu billete: 'Eine Einzelfahrt zum Zentrum, bitte.'"
  },

  {
    day: 19,
    title: "Taxis, trenes y otras opciones",
    focus: "Alemania tiene una red de trenes (Deutsche Bahn) excelente para viajar entre ciudades. Los taxis son caros pero confiables. Los taxis Uber existen en las ciudades grandes pero con restricciones. Hoy dominas todos los modos de transporte.",
    vocab: [
      { de: "Taxi!", es: "¡Taxi!", ipa: "TAK-si" },
      { de: "Fahren Sie mich bitte zu...", es: "Lléveme por favor a...", ipa: "FA-ren zee mij BI-te tsu" },
      { de: "zum Flughafen", es: "al aeropuerto", ipa: "tsum FLUG-ha-fen" },
      { de: "zum Bahnhof", es: "a la estación de tren", ipa: "tsum BAN-hof" },
      { de: "ins Stadtzentrum", es: "al centro de la ciudad", ipa: "ins SHTAT-tsen-trum" },
      { de: "Was kostet das ungefähr?", es: "¿Cuánto cuesta aproximadamente?", ipa: "vas KOS-tet das UN-ge-fer" },
      { de: "eine Fahrkarte nach München", es: "un billete a Múnich", ipa: "AI-ne FAR-kar-te naj MÜN-jen" },
      { de: "einfach / hin und zurück", es: "solo ida / ida y vuelta", ipa: "AIN-faj / hin unt tsu-RÜK" },
      { de: "erster / zweiter Klasse", es: "primera / segunda clase", ipa: "ERS-ter / TSVAI-ter KLA-se" },
      { de: "Wann fährt der nächste Zug?", es: "¿Cuándo sale el próximo tren?", ipa: "van fert der NEJKS-te tsug" },
      { de: "Auf welchem Gleis?", es: "¿En qué vía / andén?", ipa: "auf VEL-jem glais" },
      { de: "Der Zug hat Verspätung", es: "El tren tiene retraso", ipa: "der tsug hat fer-SHPÄ-tung" },
      { de: "Ist dieser Platz frei?", es: "¿Está libre este asiento?", ipa: "ist DEE-zer plats frai" },
      { de: "ein Leihfahrrad", es: "una bicicleta de alquiler", ipa: "ain LAI-far-rat" },
      { de: "ein Mietauto", es: "un coche de alquiler", ipa: "ain MEET-au-to" }
    ],
    grammar: "DEUTSCHE BAHN (DB):\n• La app de Deutsche Bahn es excelente — tiene versión en inglés pero si ves la alemana, ya conoces las palabras clave\n• Segunda clase (2. Klasse) es perfectamente cómoda y mucho más barata\n• ICE = InterCityExpress (tren de alta velocidad) — reserva asiento\n• IC/EC = InterCity (tren rápido normal)\n• RE = RegionalExpress (tren regional más lento, sin reserva)\n• BICICLETAS: Alemania es muy ciclista. En muchas ciudades hay sistemas de bicicleta compartida muy buenos.",
    practice: "Estás en Berlín y quieres ir a Hamburgo. Pregunta: '¿Cuándo sale el próximo tren a Hamburgo? ¿Cuánto cuesta un billete de ida en segunda clase?' Todo en alemán."
  },

  {
    day: 20,
    title: "Decir la hora y horarios",
    focus: "Los alemanes son famosos por su puntualidad. 'Pünktlichkeit ist die Höflichkeit der Könige' — la puntualidad es la cortesía de los reyes. Llegar tarde sin avisar es considerado una falta de respeto. Por eso, saber decir y preguntar la hora es fundamental.",
    vocab: [
      { de: "Wie spät ist es?", es: "¿Qué hora es?", ipa: "vee shpet ist es" },
      { de: "Es ist drei Uhr", es: "Son las tres", ipa: "es ist drai ur" },
      { de: "halb vier", es: "las tres y media (mitad de cuatro)", ipa: "halp fier" },
      { de: "Viertel nach drei", es: "las tres y cuarto", ipa: "FIER-tel naj drai" },
      { de: "Viertel vor vier", es: "las cuatro menos cuarto", ipa: "FIER-tel for fier" },
      { de: "Um wie viel Uhr...?", es: "¿A qué hora...?", ipa: "um vee fiel ur" },
      { de: "Wann öffnet... / Wann schließt...?", es: "¿Cuándo abre... / cuándo cierra...?", ipa: "van ÖF-net / van SHLEEST" },
      { de: "geöffnet / geschlossen", es: "abierto / cerrado", ipa: "ge-ÖF-net / ge-SHLO-sen" },
      { de: "Von ... bis ...", es: "De... a... (horario)", ipa: "fon ... bis" },
      { de: "Sonntagsruhe", es: "descanso dominical (tiendas cerradas)", ipa: "ZON-tahks-ru-e" },
      { de: "pünktlich", es: "puntual / a tiempo", ipa: "PÜNJT-lij" },
      { de: "zu spät", es: "tarde / con retraso", ipa: "tsu shpet" },
      { de: "Ich bin gleich da", es: "Ya llego / Estoy a punto de llegar", ipa: "ij bin glaij da" },
      { de: "Ich komme in zehn Minuten", es: "Llego en diez minutos", ipa: "ij KO-me in tsen mi-NU-ten" }
    ],
    grammar: "'HALB' ES DIFERENTE:\n• Español: '3:30' = 'tres y media'\n• Alemán: 'halb vier' = literalmente 'mitad de cuatro' = 3:30\n• ¡TRAMPA! Si alguien dice 'halb acht', NO son las ocho y media — son las SIETE Y MEDIA (mitad del camino hacia las ocho)\n• HORARIOS COMERCIALES: En Alemania muchas tiendas cierran a las 20h entre semana y los SÁBADOS a las 18-20h. El DOMINGO, prácticamente todo está cerrado (Sonntagsruhe). Planifica tus compras.",
    practice: "¿Qué hora es cuando son 'halb drei'? ¿Y 'Viertel vor sechs'? ¿Y 'zwanzig nach neun'? Practica decir la hora actual y la hora de tus próximas actividades de hoy."
  },

  {
    day: 21,
    title: "Repaso Semana 3 — Día de viaje completo",
    focus: "Llegas al aeropuerto de Berlín-Brandenburgo. Desde aquí debes: llegar al hotel, hacer check-in, pedir direcciones para encontrar un restaurante, cenar y volver al hotel. Todo en alemán.",
    vocab: [
      { de: "Können Sie mir helfen?", es: "¿Puede ayudarme?", ipa: "KÖ-nen zee mir HEL-fen" },
      { de: "Ich habe mich verlaufen", es: "Me he perdido (a pie)", ipa: "ij HA-be mij fer-LAU-fen" },
      { de: "Ich suche...", es: "Estoy buscando...", ipa: "ij ZU-je" },
      { de: "in der Nähe", es: "cerca de aquí", ipa: "in der NE-e" },
      { de: "Gibt es hier... in der Nähe?", es: "¿Hay... cerca de aquí?", ipa: "gibt es hier ... in der NE-e" },
      { de: "ein gutes Restaurant", es: "un buen restaurante", ipa: "ain GU-tes res-tau-RANT" },
      { de: "ein Supermarkt", es: "un supermercado", ipa: "ain ZU-per-markt" },
      { de: "eine Apotheke", es: "una farmacia", ipa: "AI-ne a-po-TE-ke" },
      { de: "ein Geldautomat", es: "un cajero automático", ipa: "ain GELT-au-to-mat" },
      { de: "Danke für Ihre Hilfe", es: "Gracias por su ayuda", ipa: "DAN-ke für EE-re HIL-fe" },
      { de: "Sie sind sehr freundlich", es: "Es usted muy amable", ipa: "zee zint ser FROIND-lij" }
    ],
    grammar: "ESCENARIO COMPLETO DÍA DE VIAJE:\n1. Aeropuerto → U-Bahn: 'Entschuldigung, welche Linie fährt ins Stadtzentrum?'\n2. Comprar billete: 'Eine Einzelfahrt, bitte — wie viel kostet das?'\n3. Llegar al hotel: 'Guten Tag, ich habe eine Reservierung auf den Namen...'\n4. Buscar restaurante: 'Gibt es ein gutes Restaurant in der Nähe?'\n5. Cenar: toda la secuencia del restaurante\n6. Volver: 'Wo ist die U-Bahn-Station?'\n\nPuedes hacer todo esto. Las palabras están en tu cabeza.",
    practice: "Haz el escenario completo de corrido, en voz alta, desde el aeropuerto hasta volver al hotel por la noche. Cronométrate. El objetivo es que fluya sin pausas largas."
  },

  // ── SEMANA 4: CONVERSACIONES REALES ─────────────────────────────────

  {
    day: 22,
    title: "Compras básicas",
    focus: "El comercio en Alemania tiene su propio ritmo. Las tiendas del centro suelen estar en Einkaufsstraßen (calles comerciales) o en un Kaufhaus (grandes almacenes). Los mercados de los sábados (Wochenmarkt) son una institución. Hoy aprendes a comprar con confianza.",
    vocab: [
      { de: "Was kostet das?", es: "¿Cuánto cuesta esto?", ipa: "vas KOS-tet das" },
      { de: "Kann ich das anprobieren?", es: "¿Puedo probármelo?", ipa: "kan ij das AN-pro-bee-ren" },
      { de: "Haben Sie das in...?", es: "¿Lo tiene en...?", ipa: "HA-ben zee das in" },
      { de: "Haben Sie etwas Günstigeres?", es: "¿Tiene algo más barato?", ipa: "HA-ben zee ET-vas GÜN-sti-ge-res" },
      { de: "Das ist zu teuer", es: "Esto es demasiado caro", ipa: "das ist tsu TOI-er" },
      { de: "Ich nehme das", es: "Me lo llevo", ipa: "ij NE-me das" },
      { de: "Ich schaue nur", es: "Solo estoy mirando", ipa: "ij SHAU-e nur" },
      { de: "Haben Sie noch mehr davon?", es: "¿Tiene más de esto?", ipa: "HA-ben zee noj mer da-FON" },
      { de: "der Kassenbon / die Quittung", es: "el recibo / el tíquet", ipa: "der KA-sen-bon / dee KVI-tung" },
      { de: "Kann ich das umtauschen?", es: "¿Puedo cambiarlo?", ipa: "kan ij das UM-tau-shen" },
      { de: "die Umkleidekabine", es: "el probador", ipa: "dee UM-klai-de-ka-bee-ne" },
      { de: "Haben Sie Bags?", es: "¿Tiene bolsas?", ipa: "HA-ben zee beks" },
      { de: "ein Andenken", es: "un recuerdo / un souvenir", ipa: "ain AN-den-ken" },
      { de: "das Kaufhaus", es: "los grandes almacenes", ipa: "das KAU-fhaus" },
      { de: "der Wochenmarkt", es: "el mercado semanal", ipa: "der VO-jen-markt" }
    ],
    grammar: "NOTA CULTURAL:\n• 'Ich schaue nur' es una respuesta perfectamente válida cuando el vendedor te pregunta si necesitas ayuda — no es maleducado\n• Las rebajas en Alemania se llaman 'Schlussverkauf' (al final de temporada) o 'Sale' (los jóvenes usan la palabra inglesa)\n• REGATEO: En tiendas normales no se regatea. En mercados de pulgas (Flohmarkt) sí es aceptable: 'Könnten Sie etwas am Preis machen?' (¿Podría hacer algo con el precio?)",
    practice: "Estás en un mercado de Navidad (Weihnachtsmarkt) en Berlín. Ve tres puestos: ropa, artesanía, comida. En cada uno: pregunta precio, pide información, decide si compras."
  },

  {
    day: 23,
    title: "Tallas, colores y probadores",
    focus: "Las tallas europeas son diferentes a las mexicanas o latinoamericanas. Hoy aprendes el vocabulario para asegurarte de comprar lo correcto sin sorpresas. Los colores en alemán son fáciles — muchos tienen raíces similares al inglés.",
    vocab: [
      { de: "die Größe", es: "la talla / el tamaño", ipa: "dee GRÖ-se" },
      { de: "Welche Größe haben Sie?", es: "¿Qué talla usa usted?", ipa: "VEL-je GRÖ-se HA-ben zee" },
      { de: "klein / mittel / groß", es: "pequeño / mediano / grande", ipa: "klain / MI-tel / gros" },
      { de: "rot / blau / grün", es: "rojo / azul / verde", ipa: "rot / blau / grün" },
      { de: "schwarz / weiß / grau", es: "negro / blanco / gris", ipa: "shvarts / vais / grau" },
      { de: "gelb / orange / lila", es: "amarillo / naranja / lila", ipa: "gelp / o-RAN-zhe / LEE-la" },
      { de: "braun / beige / gold", es: "marrón / beis / dorado", ipa: "braun / beizh / golt" },
      { de: "Das passt mir gut", es: "Me queda bien", ipa: "das past mir gut" },
      { de: "Das passt nicht", es: "No me queda / No queda bien", ipa: "das past nijt" },
      { de: "zu groß / zu klein", es: "demasiado grande / demasiado pequeño", ipa: "tsu gros / tsu klain" },
      { de: "eine Nummer größer", es: "una talla más grande", ipa: "AI-ne NU-mer GRÖ-ser" },
      { de: "eine Nummer kleiner", es: "una talla más pequeña", ipa: "AI-ne NU-mer KLAI-ner" },
      { de: "Haben Sie das in Rot?", es: "¿Lo tiene en rojo?", ipa: "HA-ben zee das in rot" },
      { de: "Das gefällt mir sehr", es: "Me gusta mucho", ipa: "das ge-FELT mir ser" },
      { de: "Darf ich...?", es: "¿Me permite...? / ¿Puedo...?", ipa: "darf ij" }
    ],
    grammar: "TALLAS EUROPEAS:\n• Camisetas/ropa: XS/S/M/L/XL (igual que en México)\n• Pantalones: talla europea ≈ talla mexicana + 8-10 (talla MX 28 ≈ EU 38)\n• Zapatos: talla europea = talla mexicana + 18-20 (MX 7 ≈ EU 40)\n• Si tu talla habitual en México es 38-40 de pantalón, en Europa busca 48-50\n• Cuando estés en el probador: 'Das passt mir gut' o 'Das passt nicht — haben Sie eine Nummer größer?'",
    practice: "Estás en una tienda de ropa. Pide el color y la talla correctos en tres artículos distintos: una camiseta, unos pantalones, unos zapatos."
  },

  {
    day: 24,
    title: "Conversación casual",
    focus: "Los alemanes no son efusivos con desconocidos, pero una vez que se abren son amables y genuinos. En contextos turísticos o de viaje, suelen ser bastante accesibles. Hoy aprendes a mantener una pequeña charla sin volverse loco.",
    vocab: [
      { de: "Woher kommen Sie?", es: "¿De dónde viene usted?", ipa: "VO-her KO-men zee" },
      { de: "Wie lange sind Sie schon hier?", es: "¿Cuánto tiempo lleva aquí?", ipa: "vee LAN-ge zint zee shon hier" },
      { de: "Was gefällt Ihnen hier?", es: "¿Qué le gusta de aquí?", ipa: "vas ge-FELT EE-nen hier" },
      { de: "Ich bin zum ersten Mal hier", es: "Es mi primera vez aquí", ipa: "ij bin tsum ERS-ten mal hier" },
      { de: "Was empfehlen Sie?", es: "¿Qué recomienda?", ipa: "vas emp-FE-len zee" },
      { de: "Ich finde es hier wunderschön", es: "Encuentro esto aquí precioso", ipa: "ij FIN-de es hier VUN-der-shön" },
      { de: "Was machen Sie beruflich?", es: "¿A qué se dedica?", ipa: "vas MAJ-en zee be-RUF-lij" },
      { de: "Ich bin... von Beruf", es: "Soy... de profesión", ipa: "ij bin ... fon be-RUF" },
      { de: "Haben Sie Kinder?", es: "¿Tiene hijos?", ipa: "HA-ben zee KIN-der" },
      { de: "Das Wetter ist schön heute", es: "El tiempo está bonito hoy", ipa: "das VE-ter ist shön HOI-te" },
      { de: "Mögen Sie...?", es: "¿Le gusta...?", ipa: "MÖ-gen zee" },
      { de: "Ich mag... sehr", es: "Me gusta mucho...", ipa: "ij mahk ... ser" },
      { de: "Das finde ich interessant", es: "Eso me parece interesante", ipa: "das FIN-de ij in-te-re-SANT" },
      { de: "Stimmt das?", es: "¿Es verdad? / ¿En serio?", ipa: "shtimt das" },
      { de: "Wirklich?", es: "¿De verdad?", ipa: "VIR-klij" }
    ],
    grammar: "TEMAS DE CONVERSACIÓN SEGURA EN ALEMANIA:\n✅ El viaje / turismo / arquitectura\n✅ El tiempo (siempre funciona)\n✅ La comida y la cerveza (especialmente en Baviera)\n✅ El fútbol (especialmente si hay torneo en curso)\n✅ La música (Alemania tiene escena musical excelente)\n⚠️ Política actual: evita a menos que te pregunten\n⚠️ Historia de la Segunda Guerra Mundial: no es tabú pero hay que ser respetuoso\n⚠️ Preguntar directamente el salario o el precio de las cosas personales",
    practice: "Imagina que conoces a alguien en un café. Mantén una conversación de 5 intercambios: presentación → de dónde son → qué les gusta del lugar → recomendación → despedida."
  },

  {
    day: 25,
    title: "Emergencias y salud",
    focus: "Esperamos que no los necesites — pero saber estas frases puede ser vital. Alemania tiene un sistema de emergencias excelente. El número único es el 112. Las farmacias (Apotheke) son tu primer recurso para problemas menores de salud.",
    vocab: [
      { de: "Hilfe!", es: "¡Socorro! / ¡Ayuda!", ipa: "HIL-fe" },
      { de: "Rufen Sie einen Arzt!", es: "¡Llame a un médico!", ipa: "RU-fen zee AI-nen artst" },
      { de: "Rufen Sie die Polizei!", es: "¡Llame a la policía!", ipa: "RU-fen zee dee po-li-TSAI" },
      { de: "Rufen Sie den Notarzt!", es: "¡Llame a urgencias!", ipa: "RU-fen zee den NOT-artst" },
      { de: "Notruf: 112", es: "Número de emergencias: 112", ipa: "NOT-ruf: AIN-AIN-TSVAI" },
      { de: "Ich brauche einen Arzt", es: "Necesito un médico", ipa: "ij BRAU-je AI-nen artst" },
      { de: "Ich habe Schmerzen", es: "Tengo dolor", ipa: "ij HA-be SHMER-tsen" },
      { de: "Hier tut es weh", es: "Aquí me duele", ipa: "hier tut es ve" },
      { de: "Ich bin krank", es: "Estoy enfermo/a", ipa: "ij bin krank" },
      { de: "Mir ist schlecht", es: "Me siento mal / Tengo náuseas", ipa: "mir ist shlecht" },
      { de: "Mein Pass ist weg", es: "Mi pasaporte ha desaparecido", ipa: "main pas ist vek" },
      { de: "Mein Portemonnaie wurde gestohlen", es: "Me robaron la cartera", ipa: "main por-te-mo-NE vur-de ge-SHTO-len" },
      { de: "Wo ist die nächste Apotheke?", es: "¿Dónde está la farmacia más cercana?", ipa: "vo ist dee NEJKS-te a-po-TE-ke" },
      { de: "Haben Sie etwas gegen Kopfschmerzen?", es: "¿Tiene algo para el dolor de cabeza?", ipa: "HA-ben zee ET-vas GE-gen KOPF-shmer-tsen" },
      { de: "die Krankenversicherung", es: "el seguro médico", ipa: "dee KRAN-ken-fer-zi-je-rung" }
    ],
    grammar: "NÚMEROS DE EMERGENCIA:\n• 112 = Emergencias generales (ambulancia, bomberos) — funciona en toda la UE\n• 110 = Solo policía en Alemania\n• APOTHEKE vs. DROGERIE:\n  - Apotheke (cruz verde): venden medicamentos, tienen farmacéuticos — para lo médico\n  - Drogerie (DM, Rossmann): productos de higiene, cosméticos, algunos suplementos — NO medicamentos con receta\n• Lleva siempre: pasaporte o copia, tarjeta de seguro médico de viaje, número de teléfono de la embajada",
    practice: "Practica decir en alemán: (1) Me duele el estómago, (2) Necesito una farmacia, (3) Me han robado el pasaporte, (4) Necesito un médico. Son las frases que esperas nunca usar pero siempre debes saber."
  },

  {
    day: 26,
    title: "Cumplidos y reacciones",
    focus: "Los alemanes son más directos y menos efusivos en los cumplidos que los latinoamericanos, pero aprecian la autenticidad. Un cumplido directo y genuino es mucho más valorado que uno exagerado. Hoy aprendes a expresar apreciación de manera natural.",
    vocab: [
      { de: "Das ist wunderschön", es: "Esto es precioso / maravilloso", ipa: "das ist VUN-der-shön" },
      { de: "Das gefällt mir sehr gut", es: "Me gusta mucho esto", ipa: "das ge-FELT mir ser gut" },
      { de: "Ich bin beeindruckt", es: "Estoy impresionado/a", ipa: "ij bin be-ain-DRUKT" },
      { de: "Das ist fantastisch", es: "Esto es fantástico", ipa: "das ist fan-TAS-tish" },
      { de: "Sehr lecker!", es: "¡Muy rico!", ipa: "ser LE-ker" },
      { de: "Wie schön!", es: "¡Qué bonito!", ipa: "vee shön" },
      { de: "Das haben Sie sehr gut gemacht", es: "Lo ha hecho muy bien", ipa: "das HA-ben zee ser gut ge-MAJT" },
      { de: "Sie sprechen sehr gut Spanisch", es: "Habla muy bien español", ipa: "zee SHPRE-jen ser gut SHPA-nish" },
      { de: "Ihr Deutsch ist sehr gut", es: "Su alemán es muy bueno", ipa: "ier doitsh ist ser gut" },
      { de: "Sie sind sehr nett", es: "Es usted muy amable", ipa: "zee zint ser net" },
      { de: "Das war ein wunderbarer Abend", es: "Fue una velada maravillosa", ipa: "das var ain VUN-der-ba-rer A-bent" },
      { de: "Ich freue mich sehr", es: "Estoy muy contento/a", ipa: "ij FROI-e mij ser" },
      { de: "Das ist genau das, was ich wollte", es: "Es exactamente lo que quería", ipa: "das ist ge-NAU das vas ij VOL-te" },
      { de: "Herzlichen Dank", es: "Muchas gracias / Gracias de corazón", ipa: "HERTS-li-jen dank" },
      { de: "Ich bin sehr dankbar", es: "Estoy muy agradecido/a", ipa: "ij bin ser DANK-bar" }
    ],
    grammar: "CÓMO RESPONDER A CUMPLIDOS:\n• Alemán: cuando recibes un cumplido, es normal minimizarlo un poco — 'Danke, das ist sehr nett von Ihnen' (Gracias, es muy amable de su parte) es perfectamente apropiado\n• En contraste al español latinoamericano donde los cumplidos pueden ser más efusivos, en alemán la sobriedad se valora\n• NOTA: 'Das freut mich' (eso me alegra) es una respuesta muy versátil y natural cuando recibes buenas noticias o un cumplido",
    practice: "Practica dar y recibir tres cumplidos: sobre la comida en un restaurante, sobre las instrucciones de alguien que te ayudó, y sobre la ciudad que estás visitando."
  },

  {
    day: 27,
    title: "Pasado y futuro básico",
    focus: "Solo con el presente puedes sobrevivir muy bien. Pero añadir algo de pasado y futuro hace que tus conversaciones sean mucho más ricas. Hoy aprendes las formas más útiles sin necesidad de entender toda la gramática.",
    vocab: [
      { de: "Ich war in...", es: "Estuve en... / Fui a...", ipa: "ij var in" },
      { de: "Ich habe... gegessen", es: "Comí... / He comido...", ipa: "ij HA-be ... ge-GE-sen" },
      { de: "Ich habe... getrunken", es: "Bebí... / He bebido...", ipa: "ij HA-be ... ge-TRUN-ken" },
      { de: "Ich habe... besucht", es: "Visité... / He visitado...", ipa: "ij HA-be ... be-ZUJT" },
      { de: "Das war toll", es: "Fue genial / Estuvo estupendo", ipa: "das var tol" },
      { de: "Ich werde... besuchen", es: "Visitaré... / Voy a visitar...", ipa: "ij VER-de ... be-ZU-jen" },
      { de: "Morgen werde ich...", es: "Mañana voy a...", ipa: "MOR-gen VER-de ij" },
      { de: "Ich möchte noch...", es: "Todavía quiero... / Me gustaría...", ipa: "ij MÖJ-te noj" },
      { de: "Ich habe schon... gesehen", es: "Ya he visto...", ipa: "ij HA-be shon ... ge-ZE-en" },
      { de: "noch nicht", es: "todavía no", ipa: "noj nijt" },
      { de: "schon", es: "ya", ipa: "shon" },
      { de: "gestern war ich...", es: "ayer estuve en...", ipa: "GES-tern var ij" },
      { de: "nächste Woche", es: "la semana que viene", ipa: "NEJKS-te VO-je" },
      { de: "letztes Jahr", es: "el año pasado", ipa: "LETS-tes yar" },
      { de: "in Zukunft", es: "en el futuro", ipa: "in TSU-kunft" }
    ],
    grammar: "DOS TRUCOS PARA EL TIEMPO VERBAL:\n\n1. PASADO: 'Ich habe + [participio pasado]'\n   Los participios más comunes: gegessen (comido), getrunken (bebido), gesehen (visto), gemacht (hecho), besucht (visitado)\n   → 'Ich habe das Brandenburger Tor besucht' = He visitado la Puerta de Brandemburgo\n\n2. FUTURO: 'Ich werde + [infinitivo]'\n   → 'Morgen werde ich das Museum besuchen' = Mañana voy a visitar el museo\n   O simplemente: presente + indicador de tiempo: 'Morgen gehe ich ins Museum' (también correcto y muy natural)",
    practice: "Di tres cosas que hiciste ayer (en Berlín imaginario), y tres cosas que harás mañana. Usa 'Ich habe... gemacht/besucht/gegessen' y 'Morgen werde ich...' / 'Morgen gehe ich...'"
  },

  {
    day: 28,
    title: "Despedirse bien",
    focus: "Las despedidas en alemán son rituales importantes, especialmente si has tenido una buena interacción. Saber cerrar una conversación bien deja una impresión duradera. Hoy aprendes a despedirte con elegancia.",
    vocab: [
      { de: "Es war wirklich schön", es: "Ha sido realmente bonito / agradable", ipa: "es var VIR-klij shön" },
      { de: "Ich habe es sehr genossen", es: "Lo he disfrutado mucho", ipa: "ij HA-be es ser ge-NO-sen" },
      { de: "Wir sollten das wiederholen", es: "Deberíamos repetir esto", ipa: "vir ZOL-ten das VEE-der-ho-len" },
      { de: "Alles Gute!", es: "¡Que te vaya bien! / ¡Todo lo mejor!", ipa: "A-les GU-te" },
      { de: "Viel Spaß!", es: "¡Que lo pases bien! / ¡Diviértete!", ipa: "fiel shpas" },
      { de: "Gute Reise!", es: "¡Buen viaje!", ipa: "GU-te RAI-ze" },
      { de: "Bleiben Sie gesund", es: "Cuídese / Que se mantenga sano", ipa: "BLAI-ben zee ge-ZUNT" },
      { de: "Bis bald!", es: "¡Hasta pronto!", ipa: "bis balt" },
      { de: "Bis zum nächsten Mal", es: "Hasta la próxima vez", ipa: "bis tsum NEJKS-ten mal" },
      { de: "Auf Wiedersehen", es: "Adiós (hasta volver a vernos)", ipa: "auf VEE-der-ze-en" },
      { de: "Schönen Tag noch!", es: "¡Que tenga un buen día!", ipa: "SHÖNEN tahk noj" },
      { de: "Schönes Wochenende!", es: "¡Que tenga un buen fin de semana!", ipa: "SHÖNES VO-jen-en-de" },
      { de: "Es war mir eine Freude", es: "Ha sido un placer para mí", ipa: "es var mir AI-ne FROI-de" },
      { de: "Ich komme bestimmt wieder", es: "Volveré sin duda", ipa: "ij KO-me be-SHTIM vee-der" },
      { de: "Danke für alles", es: "Gracias por todo", ipa: "DAN-ke für A-les" }
    ],
    grammar: "EL ARTE DE LA DESPEDIDA ALEMANA:\n• 'Auf Wiedersehen' es formal y completo (literalmente: 'hasta que nos volvamos a ver')\n• 'Tschüss' es informal y muy común entre conocidos\n• 'Bis bald' asume que te verás de nuevo pronto\n• 'Schönen Tag noch!' y 'Schönes Wochenende!' son perfectas para terminar interacciones de servicio (tiendas, restaurants)\n• 'Gute Reise' se dice a alguien que está a punto de emprender viaje — muy apreciado",
    practice: "Practica cerrar cuatro tipos de conversación: (1) en una tienda, (2) con alguien que te dio indicaciones, (3) al final de una cena, (4) en el check-out del hotel al irte."
  },

  // ── DÍAS BONUS ──────────────────────────────────────────────────────

  {
    day: 29,
    title: "Un día completo en Berlín",
    focus: "Este es tu ensayo general. Un día completo imaginario en Berlín — desde el desayuno hasta la noche. Sin parar, en alemán. Vamos a cubrir todo el vocabulario que has aprendido en un flujo continuo.",
    vocab: [
      { de: "das Brandenburger Tor", es: "la Puerta de Brandemburgo", ipa: "das BRAN-den-bur-ger tor" },
      { de: "der Berliner Mauer", es: "el Muro de Berlín", ipa: "der ber-LEE-ner MAU-er" },
      { de: "das Museumsinsel", es: "la Isla de los Museos", ipa: "das mu-ZE-ums-in-zel" },
      { de: "der Alexanderplatz", es: "la plaza Alexanderplatz", ipa: "der a-lek-SAN-der-plats" },
      { de: "der Tiergarten", es: "el Parque Tiergarten", ipa: "der TIER-gar-ten" },
      { de: "Ein Foto, bitte!", es: "¡Una foto, por favor!", ipa: "ain FO-to BI-te" },
      { de: "Können Sie ein Foto von mir machen?", es: "¿Puede hacerme una foto?", ipa: "KÖ-nen zee ain FO-to fon mir MAJ-en" },
      { de: "Darf ich hier fotografieren?", es: "¿Puedo fotografiar aquí?", ipa: "darf ij hier fo-to-gra-FEE-ren" },
      { de: "Was für ein schöner Tag!", es: "¡Qué día tan bonito!", ipa: "vas für ain SHÖNER tahk" },
      { de: "Das war der beste Urlaub", es: "Fue las mejores vacaciones", ipa: "das var der BES-te UR-laup" },
      { de: "Ich komme wieder", es: "Volveré", ipa: "ij KO-me VEE-der" },
      { de: "Deutschland ist wunderbar", es: "Alemania es maravillosa", ipa: "DOITSH-lant ist VUN-der-bar" }
    ],
    grammar: "ITINERARIO BERLÍN COMPLETO:\n7:30 — Desayuno en la Bäckerei\n9:00 — Puerta de Brandemburgo + pedir foto\n10:30 — Museo (pedir entradas, preguntar si se puede fotografiar)\n13:00 — Almuerzo (restaurante completo)\n15:00 — Café und Kuchen (obligatorio)\n16:00 — Tiergarten (preguntar dirección)\n18:00 — Compras en Ku'Damm\n20:00 — Cena (cena completa con brindis)\n22:00 — Volver al hotel (taxi o metro)\n\nPractica cada segmento con las frases correctas.",
    practice: "Haz el día completo de corrido. Máximo 2 segundos de pausa entre frases. Si no recuerdas una palabra, usa las que sí sabes — la comunicación imperfecta es mejor que el silencio."
  },

  {
    day: 30,
    title: "Consejos prácticos y repaso final",
    focus: "Has llegado al día 30. Hoy consolidamos lo aprendido y hablamos de los intangibles: la actitud, las trampas de los hispanohablantes en Alemania, y cómo seguir avanzando cuando vuelvas.",
    vocab: [
      { de: "Ich lerne Deutsch", es: "Estoy aprendiendo alemán", ipa: "ij LER-ne doitsh" },
      { de: "Mein Deutsch ist noch nicht perfekt", es: "Mi alemán todavía no es perfecto", ipa: "main doitsh ist noj nijt per-FEKT" },
      { de: "Aber ich versuche es", es: "Pero lo intento", ipa: "A-ber ij fer-ZU-je es" },
      { de: "Haben Sie Geduld mit mir", es: "Tenga paciencia conmigo", ipa: "HA-ben zee ge-DULT mit mir" },
      { de: "Ich mache Fortschritte", es: "Estoy progresando", ipa: "ij MA-je FORT-shri-te" },
      { de: "Auf ein Neues!", es: "¡A empezar de nuevo! / ¡Por un nuevo comienzo!", ipa: "auf ain NOI-es" },
      { de: "Herzlich willkommen", es: "Bienvenido/a de corazón", ipa: "HERTS-lij VIL-ko-men" },
      { de: "Es war eine tolle Erfahrung", es: "Ha sido una experiencia genial", ipa: "es var AI-ne TO-le er-FA-rung" },
      { de: "Ich werde Deutsch weiterlernen", es: "Seguiré aprendiendo alemán", ipa: "ij VER-de doitsh VAI-ter-ler-nen" },
      { de: "Danke für alles", es: "Gracias por todo", ipa: "DAN-ke für A-les" },
      { de: "Auf Wiedersehen, Deutschland!", es: "¡Hasta la vista, Alemania!", ipa: "auf VEE-der-ze-en DOITSH-lant" }
    ],
    grammar: "TRAMPA #1 PARA HISPANOHABLANTES:\n• 'Gift' en alemán = VENENO (no regalo). 'Ich möchte ein Gift' = quiero un veneno. El regalo es 'Geschenk'.\n• 'bekommen' = recibir/obtener (NO convertirse en). 'Ich bekomme einen Kaffee' = recibo/me traen un café\n• 'eventuell' = posiblemente/quizás (NO eventualmente = 'irgendwann')\n• 'sensibel' = sensible/delicado (¡igual que en español, bien!)\n\nTRAMPA #2: LA CORTESÍA DIRECTA\n• Los alemanes son directos, no maleducados. 'Einen Kaffee bitte' sin 'Ich möchte' es perfectamente aceptable y normal — no es rudo.\n\nSIGUIENTES PASOS:\n• App Duolingo o Babbel — para mantener el vocabulario\n• Podcast 'Coffee Break German' — excelente para hispanohablantes\n• Serie 'Dark' en Netflix (alemán con subtítulos) — alemán real y fascinante\n• Intercambios de idioma: busca 'Tandem' o 'HelloTalk'",
    practice: "Tu evaluación final: (1) Saluda y preséntate (30 seg), (2) Pide una comida completa (1 min), (3) Pide ayuda con las direcciones (30 seg), (4) Paga y despídete (30 seg). Si puedes hacer esos 4 sin perderte, estás listo para Alemania. ¡Viel Erfolg! (¡Mucho éxito!)"
  }

];

if (typeof window !== 'undefined') {
  window.COURSE_ES_DE = COURSE_ES_DE;
}
