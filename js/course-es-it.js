// Spanish → Italian Native Lesson Plan
// Español como idioma de instrucción, italiano como objetivo
// vocab: { it: "palabra italiana", es: "traducción española", ipa: "fonética para hispanohablantes" }
// Fonética: c+e/i = "ch"; g+e/i = "dy/y suave"; gn = "ñ"; gli = "lli/lyi"; sc+e/i = "sh"; z = "ts/ds"; consonantes dobles = más largas

var COURSE_ES_IT = [
  { day:1,
    title:"Saludos y cortesía",
    titleNative:"Saluti e cortesia",
    focus:"El italiano y el español comparten el 80% del vocabulario — ¡tu mayor ventaja! La mayor diferencia está en la pronunciación. La 'c' antes de 'e' o 'i' suena 'ch', y las consonantes dobles se pronuncian más largas. Hoy aprendemos los saludos esenciales.",
    vocab:[
      {it:"Buongiorno", es:"Buenos días", ipa:"bwon-DJOR-no"},
      {it:"Buonasera", es:"Buenas tardes / Buenas noches", ipa:"bwona-SE-ra"},
      {it:"Ciao", es:"Hola / Adiós (informal)", ipa:"CHAO"},
      {it:"Salve", es:"Hola (formal/neutro)", ipa:"SAL-ve"},
      {it:"Arrivederci", es:"Hasta luego (formal)", ipa:"arri-ve-DER-chi"},
      {it:"Per favore", es:"Por favor", ipa:"per fa-VO-re"},
      {it:"Grazie", es:"Gracias", ipa:"GRA-tsye"},
      {it:"Prego", es:"De nada / Con mucho gusto", ipa:"PRE-go"},
      {it:"Mi dispiace", es:"Lo siento", ipa:"mi dis-PYA-che"},
      {it:"Scusi", es:"Perdón / Disculpe (formal)", ipa:"SKU-zi"}
    ],
    phrases:[
      {it:"Buongiorno, come sta?", es:"Buenos días, ¿cómo está usted?", ipa:"bwon-DJOR-no, KO-me STA"},
      {it:"Come si chiama?", es:"¿Cómo se llama?", ipa:"KO-me si KYA-ma"},
      {it:"Mi chiamo Marco.", es:"Me llamo Marco.", ipa:"mi KYA-mo MAR-ko"},
      {it:"Piacere di conoscerla.", es:"Mucho gusto en conocerle.", ipa:"pya-CHE-re di ko-NOSHER-la"},
      {it:"Come va?", es:"¿Cómo va? (informal)", ipa:"KO-me VA"},
      {it:"Tutto bene, grazie!", es:"¡Todo bien, gracias!", ipa:"TUT-to BE-ne, GRA-tsye"}
    ],
    grammar:"En italiano existen DOS niveles de cortesía: 'tu' (informal, para amigos y familia) y 'Lei' (formal, se escribe con mayúscula). 'Ciao' solo se usa con amigos — con desconocidos usa 'Buongiorno' o 'Salve'. La 'c' antes de 'i' o 'e' suena como 'ch' en español: 'ciao' = 'chao', 'arrivederci' = 'arri-ve-DER-chi'.",
    practice:[
      "Saluda a alguien con 'Buongiorno' y pregunta 'Come sta?' (formal) o 'Come va?' (informal)",
      "Practica decir tu nombre: 'Mi chiamo ___'",
      "Di 'Grazie' y responde 'Prego' en una conversación imaginaria"
    ]
  },
  { day:2,
    title:"Números del 1 al 20",
    titleNative:"Numeri dall'1 al 20",
    focus:"Los números italianos son muy similares al español — los reconocerás casi todos. Atención especial a 'diciassette' (17), 'diciotto' (18), 'diciannove' (19): tienen una forma compacta única. Y recuerda: las consonantes dobles se sostienen más: 'otto' tiene la 't' larga.",
    vocab:[
      {it:"uno / una", es:"uno / una", ipa:"U-no / U-na"},
      {it:"due", es:"dos", ipa:"DU-e"},
      {it:"tre", es:"tres", ipa:"TRE"},
      {it:"quattro", es:"cuatro", ipa:"KWAT-tro"},
      {it:"cinque", es:"cinco", ipa:"CHIN-kwe"},
      {it:"sei", es:"seis", ipa:"SEI"},
      {it:"sette", es:"siete", ipa:"SET-te"},
      {it:"otto", es:"ocho", ipa:"OT-to"},
      {it:"nove", es:"nueve", ipa:"NO-ve"},
      {it:"dieci", es:"diez", ipa:"DYE-chi"}
    ],
    phrases:[
      {it:"undici / dodici / tredici", es:"once / doce / trece", ipa:"UN-di-chi / DO-di-chi / TRE-di-chi"},
      {it:"quattordici / quindici", es:"catorce / quince", ipa:"kwat-TOR-di-chi / KWIN-di-chi"},
      {it:"sedici / diciassette", es:"dieciséis / diecisiete", ipa:"SE-di-chi / di-chas-SET-te"},
      {it:"diciotto / diciannove", es:"dieciocho / diecinueve", ipa:"di-CHOT-to / di-chan-NO-ve"},
      {it:"venti", es:"veinte", ipa:"VEN-ti"},
      {it:"Quanti anni hai?", es:"¿Cuántos años tienes?", ipa:"KWAN-ti AN-ni AI"}
    ],
    grammar:"Las consonantes dobles en italiano son fundamentales: 'otto' (ocho) ≠ 'oto' (que no existe). La diferencia cambia el significado: 'palla' (pelota) vs 'pala' (pala). Para pronunciarlas, imagina que sostienes la consonante una fracción de segundo más: s-SET-te. Es el mayor desafío fonético para el hispanohablante.",
    practice:[
      "Cuenta del 1 al 20 en voz alta varias veces seguidas",
      "Di tu edad en italiano: 'Ho ___ anni' (tengo ___ años)",
      "Practica los números compuestos 11-19: tienen estructura diferente al español"
    ]
  },
  { day:3,
    title:"Colores y descripciones",
    titleNative:"Colori e descrizioni",
    focus:"Los colores en italiano son muy parecidos al español — reconocerás casi todos. Recuerda que los adjetivos italianos concuerdan en género y número con el sustantivo, igual que en español. La 'g' antes de 'i' o 'e' suena suave, como 'y' o 'dy'.",
    vocab:[
      {it:"rosso / rossa", es:"rojo / roja", ipa:"ROS-so / ROS-sa"},
      {it:"blu", es:"azul (invariable)", ipa:"BLU"},
      {it:"verde", es:"verde", ipa:"VER-de"},
      {it:"giallo / gialla", es:"amarillo / amarilla", ipa:"JAL-lo / JAL-la"},
      {it:"bianco / bianca", es:"blanco / blanca", ipa:"BYAN-ko / BYAN-ka"},
      {it:"nero / nera", es:"negro / negra", ipa:"NE-ro / NE-ra"},
      {it:"arancione", es:"naranja (invariable en género)", ipa:"aran-CHO-ne"},
      {it:"viola", es:"morado / violeta (invariable)", ipa:"VYO-la"},
      {it:"grigio / grigia", es:"gris", ipa:"GRI-jo / GRI-ja"},
      {it:"marrone", es:"marrón / café", ipa:"mar-RO-ne"}
    ],
    phrases:[
      {it:"Di che colore è?", es:"¿De qué color es?", ipa:"di ke ko-LO-re E"},
      {it:"La macchina è rossa.", es:"El coche es rojo.", ipa:"la MAK-ki-na E ROS-sa"},
      {it:"Mi piace il blu.", es:"Me gusta el azul.", ipa:"mi PYA-che il BLU"},
      {it:"Ho i capelli neri.", es:"Tengo el pelo negro.", ipa:"O i ka-PEL-li NE-ri"},
      {it:"Che bello!", es:"¡Qué bonito!", ipa:"ke BEL-lo"},
      {it:"È grande o piccolo?", es:"¿Es grande o pequeño?", ipa:"E GRAN-de o PIK-ko-lo"}
    ],
    grammar:"La 'g' antes de 'i' o 'e' suena como 'y/dy' suave: 'giallo' = JAL-lo, 'grigio' = GRI-jo. Pero 'gh' antes de 'e/i' suena /g/ duro: 'spaghetti' = spa-GET-ti. Es el sistema opuesto a la 'c': 'c+a/o/u' = /k/, 'c+e/i' = /ch/; 'g+a/o/u' = /g/, 'g+e/i' = /dy/.",
    practice:[
      "Describe 5 objetos de tu habitación usando colores italianos",
      "Practica: 'bianco', 'giallo', 'grigio' — la 'g' suave y las consonantes dobles",
      "Di el color de tu ropa hoy: 'La mia camicia è ___'"
    ]
  },
  { day:4,
    title:"La familia",
    titleNative:"La famiglia",
    focus:"El vocabulario familiar es muy similar al español. Una diferencia importante: el sonido 'gli' (en 'figlio', 'moglie') suena como una 'll' muy suave, similar a la 'll' del español rioplatense o a 'li' seguido de vocal. ¡Es el sonido más italiano de todos!",
    vocab:[
      {it:"la madre / la mamma", es:"la madre / la mamá", ipa:"la MA-dre / la MAM-ma"},
      {it:"il padre / il papà", es:"el padre / el papá", ipa:"il PA-dre / il pa-PA"},
      {it:"il fratello", es:"el hermano", ipa:"il fra-TEL-lo"},
      {it:"la sorella", es:"la hermana", ipa:"la so-REL-la"},
      {it:"il figlio / la figlia", es:"el hijo / la hija", ipa:"il FI-lyo / la FI-lya"},
      {it:"il nonno / la nonna", es:"el abuelo / la abuela", ipa:"il NON-no / la NON-na"},
      {it:"lo zio / la zia", es:"el tío / la tía", ipa:"lo DZYO / la DZYA"},
      {it:"il cugino / la cugina", es:"el primo / la prima", ipa:"il ku-JI-no / la ku-JI-na"},
      {it:"il marito", es:"el marido / el esposo", ipa:"il ma-RI-to"},
      {it:"la moglie", es:"la esposa / la mujer", ipa:"la MO-lye"}
    ],
    phrases:[
      {it:"Ho due fratelli e una sorella.", es:"Tengo dos hermanos y una hermana.", ipa:"O DU-e fra-TEL-li e U-na so-REL-la"},
      {it:"Mia madre si chiama Ana.", es:"Mi madre se llama Ana.", ipa:"MYA MA-dre si KYA-ma A-na"},
      {it:"Sei sposato/a?", es:"¿Estás casado/a?", ipa:"SEI spo-ZA-to/a"},
      {it:"Ho una famiglia grande.", es:"Tengo una familia grande.", ipa:"O U-na fa-MI-lya GRAN-de"},
      {it:"I miei genitori vivono a Roma.", es:"Mis padres viven en Roma.", ipa:"i MYEI je-NI-to-ri VI-vo-no a RO-ma"},
      {it:"Quanti fratelli hai?", es:"¿Cuántos hermanos tienes?", ipa:"KWAN-ti fra-TEL-li AI"}
    ],
    grammar:"El sonido 'gli' = /ʎ/ aparece en 'figlio' (hijo), 'figlia' (hija), 'moglie' (esposa), 'famiglia' (familia). Para hispanohablantes: pronúncialo como 'lyi' muy suave, o como la 'll' de 'llover' en español castellano. 'gn' en italiano = exactamente la 'ñ' española: 'nonno' ≈ 'ñoño' en cuanto al sonido nasal.",
    practice:[
      "Describe tu familia: 'Nella mia famiglia ci sono ___'",
      "Practica los posesivos: mio/mia (mi), tuo/tua (tu), suo/sua (su)",
      "Presenta a un familiar: 'Questo è mio fratello, si chiama ___'"
    ]
  },
  { day:5,
    title:"Comida y bebida",
    titleNative:"Cibo e bevande",
    focus:"¡El vocabulario gastronómico italiano es mundialmente famoso! Muchas palabras ya las conoces. Hoy aprendemos lo esencial para comer bien en Italia. Nota: 'vorrei' (quisiera) es tu arma secreta para pedir con educación.",
    vocab:[
      {it:"il pane", es:"el pan", ipa:"il PA-ne"},
      {it:"la pasta", es:"la pasta", ipa:"la PAS-ta"},
      {it:"la pizza", es:"la pizza", ipa:"la PIT-tsa"},
      {it:"il formaggio", es:"el queso", ipa:"il for-MAD-jo"},
      {it:"la carne", es:"la carne", ipa:"la KAR-ne"},
      {it:"il pesce", es:"el pescado", ipa:"il PE-she"},
      {it:"la verdura", es:"la verdura / los vegetales", ipa:"la ver-DU-ra"},
      {it:"l'acqua", es:"el agua", ipa:"LAK-kwa"},
      {it:"il vino", es:"el vino", ipa:"il VI-no"},
      {it:"il caffè", es:"el café", ipa:"il kaf-FE"}
    ],
    phrases:[
      {it:"Vorrei un caffè, per favore.", es:"Quisiera un café, por favor.", ipa:"vor-REI un kaf-FE, per fa-VO-re"},
      {it:"Il conto, per favore.", es:"La cuenta, por favor.", ipa:"il KON-to, per fa-VO-re"},
      {it:"È delizioso!", es:"¡Está delicioso!", ipa:"E de-li-TSYO-zo"},
      {it:"Ho fame. / Ho sete.", es:"Tengo hambre. / Tengo sed.", ipa:"O FA-me / O SE-te"},
      {it:"Sono vegetariano/a.", es:"Soy vegetariano/a.", ipa:"SO-no ve-je-ta-RYA-no/a"},
      {it:"Che cos'è questo?", es:"¿Qué es esto?", ipa:"ke ko-ZE KWES-to"}
    ],
    grammar:"'Vorrei' (quisiera) es el condicional de 'volere' (querer). Es LA forma más educada para pedir en Italia — equivale exactamente al español 'quisiera' vs 'quiero'. 'Ho fame' (tengo hambre) y 'Ho sete' (tengo sed) usan 'avere' (tener), igual que en español. 'Ho' = tengo.",
    practice:[
      "Pide tu comida o bebida favorita: 'Vorrei ___'",
      "Practica: 'formaggio' (for-MAD-jo) — la 'gg' antes de 'io' suena 'dy'",
      "Di 3 cosas que te gustan de la cocina italiana usando 'Mi piace ___'"
    ]
  },
  { day:6,
    title:"En el restaurante",
    titleNative:"Al ristorante",
    focus:"Comer en un restaurante italiano es una experiencia con sus propios rituales. La estructura del menú es fija: antipasto → primo → secondo → dolce. Aprende a navegar la experiencia completa.",
    vocab:[
      {it:"il ristorante", es:"el restaurante", ipa:"il ris-to-RAN-te"},
      {it:"il cameriere / la cameriera", es:"el camarero / la camarera", ipa:"il ka-me-RYE-re / la ka-me-RYE-ra"},
      {it:"il menù", es:"el menú", ipa:"il me-NU"},
      {it:"l'antipasto", es:"el entrante / el aperitivo", ipa:"lan-ti-PAS-to"},
      {it:"il primo piatto", es:"el primer plato (pasta o risotto)", ipa:"il PRI-mo PYAT-to"},
      {it:"il secondo piatto", es:"el segundo plato (carne o pescado)", ipa:"il se-KON-do PYAT-to"},
      {it:"il dolce", es:"el postre", ipa:"il DOL-che"},
      {it:"la prenotazione", es:"la reserva", ipa:"la pre-no-ta-TSYO-ne"},
      {it:"il coperto", es:"el cubierto (cargo fijo por servicio)", ipa:"il ko-PER-to"},
      {it:"il conto", es:"la cuenta", ipa:"il KON-to"}
    ],
    phrases:[
      {it:"Ho una prenotazione a nome ___.", es:"Tengo una reserva a nombre de ___.", ipa:"O U-na pre-no-ta-TSYO-ne a NO-me"},
      {it:"Un tavolo per due, per favore.", es:"Una mesa para dos, por favor.", ipa:"un TA-vo-lo per DU-e, per fa-VO-re"},
      {it:"Cosa mi consiglia?", es:"¿Qué me recomienda?", ipa:"KO-za mi kon-SI-lya"},
      {it:"Vorrei il risotto, per favore.", es:"Quisiera el risotto, por favor.", ipa:"vor-REI il ri-ZOT-to, per fa-VO-re"},
      {it:"È incluso il servizio?", es:"¿Está incluido el servicio?", ipa:"E in-KLU-zo il ser-VI-tsyo"},
      {it:"Possiamo pagare separati?", es:"¿Podemos pagar por separado?", ipa:"pos-SYA-mo pa-GA-re se-pa-RA-ti"}
    ],
    grammar:"En Italia la comida tiene una estructura clásica: antipasto → primo (pasta/risotto) → secondo (carne/pescado) + contorno (guarnición) → dolce. No es obligatorio pedir todo, pero en restaurantes tradicionales se espera al menos primo o secondo. El 'coperto' es un cargo normal — no es una trampa para turistas.",
    practice:[
      "Simula pedir una comida completa: desde la reserva hasta pedir la cuenta",
      "Practica: 'Cosa mi consiglia?' — la pregunta más útil en cualquier restaurante",
      "Aprende: 'Senza glutine' (sin gluten), 'senza lattosio' (sin lactosa)"
    ]
  },
  { day:7,
    title:"El mercado y las compras",
    titleNative:"Il mercato e gli acquisti",
    focus:"Los mercados italianos son una experiencia cultural imprescindible. Aprende a pedir cantidades, preguntar precios y hacer compras. 'Un etto' (100 gramos) es la unidad estrella de los mercados italianos.",
    vocab:[
      {it:"il mercato", es:"el mercado", ipa:"il mer-KA-to"},
      {it:"il negozio", es:"la tienda", ipa:"il ne-GO-tsyo"},
      {it:"quanto costa?", es:"¿cuánto cuesta?", ipa:"KWAN-to KOS-ta"},
      {it:"caro / economico", es:"caro / barato", ipa:"KA-ro / e-ko-NO-mi-ko"},
      {it:"il chilo", es:"el kilo", ipa:"il KI-lo"},
      {it:"mezzo chilo", es:"medio kilo", ipa:"MED-dzo KI-lo"},
      {it:"un etto", es:"100 gramos", ipa:"un ET-to"},
      {it:"la taglia", es:"la talla", ipa:"la TA-lya"},
      {it:"i saldi", es:"las rebajas", ipa:"i SAL-di"},
      {it:"il resto", es:"el cambio (dinero)", ipa:"il RES-to"}
    ],
    phrases:[
      {it:"Quanto costa questo?", es:"¿Cuánto cuesta esto?", ipa:"KWAN-to KOS-ta KWES-to"},
      {it:"È troppo caro.", es:"Es demasiado caro.", ipa:"E TROP-po KA-ro"},
      {it:"Vorrei mezzo chilo di pomodori.", es:"Quisiera medio kilo de tomates.", ipa:"vor-REI MED-dzo KI-lo di po-mo-DO-ri"},
      {it:"Avete questo in taglia media?", es:"¿Tienen esto en talla mediana?", ipa:"a-VE-te KWES-to in TA-lya ME-dya"},
      {it:"Posso pagare con carta?", es:"¿Puedo pagar con tarjeta?", ipa:"POS-so pa-GA-re kon KAR-ta"},
      {it:"Mi fa lo scontrino?", es:"¿Me da el recibo?", ipa:"mi fa lo skon-TRI-no"}
    ],
    grammar:"'Un etto' = 100 gramos es la medida estándar en los mercados italianos. Pedirás: 'due etti di prosciutto' (200g de jamón), 'tre etti di formaggio' (300g de queso). ¡Es la medida más usada en salumerías y carnicerías! También: 'mezzo chilo' (medio kilo), 'un chilo' (un kilo).",
    practice:[
      "Practica pedir en el mercado: cantidades de frutas y verduras",
      "Di precios en italiano: 3,50€ = 'tre euro e cinquanta centesimi'",
      "Simula comprar ropa: pedir tu talla y negociar el precio"
    ]
  },
  { day:8,
    title:"La ciudad y orientación",
    titleNative:"La città e l'orientamento",
    focus:"Las ciudades italianas tienen centros históricos medievales con calles estrechas y plazas magníficas. Aprende a pedir y dar direcciones con confianza. 'Dov'è?' es la pregunta más útil de cualquier viaje.",
    vocab:[
      {it:"la strada / la via", es:"la calle", ipa:"la STRA-da / la VI-a"},
      {it:"la piazza", es:"la plaza", ipa:"la PYAT-tsa"},
      {it:"il centro storico", es:"el casco histórico", ipa:"il CHEN-tro STO-ri-ko"},
      {it:"la chiesa", es:"la iglesia", ipa:"la KYE-za"},
      {it:"il museo", es:"el museo", ipa:"il mu-ZE-o"},
      {it:"la stazione", es:"la estación de tren", ipa:"la sta-TSYO-ne"},
      {it:"a destra / a sinistra", es:"a la derecha / a la izquierda", ipa:"a DES-tra / a si-NIS-tra"},
      {it:"sempre dritto", es:"todo recto", ipa:"SEM-pre DRIT-to"},
      {it:"vicino / lontano", es:"cerca / lejos", ipa:"vi-CHI-no / lon-TA-no"},
      {it:"il semaforo", es:"el semáforo", ipa:"il se-MA-fo-ro"}
    ],
    phrases:[
      {it:"Dov'è la stazione?", es:"¿Dónde está la estación?", ipa:"do-VE la sta-TSYO-ne"},
      {it:"Come arrivo al museo?", es:"¿Cómo llego al museo?", ipa:"KO-me ar-RI-vo al mu-ZE-o"},
      {it:"È lontano da qui?", es:"¿Está lejos de aquí?", ipa:"E lon-TA-no da KWI"},
      {it:"Giri a destra al semaforo.", es:"Gire a la derecha en el semáforo.", ipa:"JI-ri a DES-tra al se-MA-fo-ro"},
      {it:"Sono perso/a.", es:"Estoy perdido/a.", ipa:"SO-no PER-so/a"},
      {it:"Mi può aiutare?", es:"¿Me puede ayudar?", ipa:"mi PWO a-yu-TA-re"}
    ],
    grammar:"'Dov'è' = '¿Dónde está?' — 'dove' (dónde) + 'è' (es/está). Para plural: 'Dove sono i bagni?' (¿Dónde están los baños?). La 'ch' en italiano SIEMPRE suena /k/ — 'chiesa' = KYE-za, nunca 'chie-sa'. Y la 'c' antes de 'e/i' SIEMPRE suena /ch/. Este sistema es fijo y sin excepciones.",
    practice:[
      "Practica pedir direcciones al hotel, la estación y el museo",
      "Memoriza: 'a destra' y 'a sinistra' — derecha e izquierda son esenciales",
      "Aprende: 'Scusi, dov'è…?' — la frase más importante del viajero"
    ]
  },
  { day:9,
    title:"Transporte",
    titleNative:"I trasporti",
    focus:"Italia tiene una excelente red de trenes de alta velocidad (Frecciarossa). Aprende el vocabulario del transporte para moverte libremente. Importante: hay que validar (timbrar) el billete antes de subir al tren regional.",
    vocab:[
      {it:"il treno", es:"el tren", ipa:"il TRE-no"},
      {it:"l'autobus", es:"el autobús", ipa:"lau-TO-bus"},
      {it:"la metropolitana", es:"el metro / el subte", ipa:"la me-tro-po-li-TA-na"},
      {it:"il taxi", es:"el taxi", ipa:"il TAK-si"},
      {it:"il biglietto", es:"el billete / el boleto", ipa:"il bi-LYET-to"},
      {it:"il binario", es:"el andén / la vía", ipa:"il bi-NA-ryo"},
      {it:"la partenza", es:"la salida", ipa:"la par-TEN-tsa"},
      {it:"l'arrivo", es:"la llegada", ipa:"lar-RI-vo"},
      {it:"in ritardo", es:"con retraso", ipa:"in ri-TAR-do"},
      {it:"validare il biglietto", es:"validar / timbrar el billete", ipa:"va-li-DA-re il bi-LYET-to"}
    ],
    phrases:[
      {it:"Un biglietto per Roma, per favore.", es:"Un billete para Roma, por favor.", ipa:"un bi-LYET-to per RO-ma, per fa-VO-re"},
      {it:"A che ora parte il treno?", es:"¿A qué hora sale el tren?", ipa:"a ke O-ra PAR-te il TRE-no"},
      {it:"Il treno è in ritardo.", es:"El tren tiene retraso.", ipa:"il TRE-no E in ri-TAR-do"},
      {it:"Dove si comprano i biglietti?", es:"¿Dónde se compran los billetes?", ipa:"DO-ve si KOM-pra-no i bi-LYET-ti"},
      {it:"Devo cambiare treno?", es:"¿Tengo que cambiar de tren?", ipa:"DE-vo kam-BYA-re TRE-no"},
      {it:"Mi fermi qui, grazie.", es:"Pare aquí, gracias. (al taxista)", ipa:"mi FER-mi KWI, GRA-tsye"}
    ],
    grammar:"'Devo + infinitivo' = 'tengo que + infinitivo': 'Devo cambiare' (tengo que cambiar), 'Devo pagare' (tengo que pagar). Del verbo 'dovere' (deber). Vocabulario esencial de taquilla: 'Andata' (ida), 'Andata e ritorno' (ida y vuelta), 'Prima classe / Seconda classe' (primera/segunda clase).",
    practice:[
      "Practica comprar un billete de tren a tu ciudad italiana favorita",
      "Aprende: 'Andata' vs 'Andata e ritorno' — imprescindible en taquilla",
      "Practica preguntar horarios: 'A che ora parte/arriva il treno per ___?'"
    ]
  },
  { day:10,
    title:"El hotel y el alojamiento",
    titleNative:"L'albergo e l'alloggio",
    focus:"Desde el 'albergo' de lujo hasta el 'agriturismo' rural, Italia ofrece todo tipo de alojamientos. El vocabulario hotelero italiano tiene muchas palabras transparentes para el hispanohablante.",
    vocab:[
      {it:"l'albergo / l'hotel", es:"el hotel", ipa:"lal-BER-go / lo-TEL"},
      {it:"la camera", es:"la habitación", ipa:"la KA-me-ra"},
      {it:"la reception", es:"la recepción", ipa:"la re-CHEP-shon"},
      {it:"la colazione", es:"el desayuno", ipa:"la ko-la-TSYO-ne"},
      {it:"l'asciugamano", es:"la toalla", ipa:"la-shu-ga-MA-no"},
      {it:"il cuscino", es:"la almohada", ipa:"il ku-SHI-no"},
      {it:"il riscaldamento", es:"la calefacción", ipa:"il ris-kal-da-MEN-to"},
      {it:"l'aria condizionata", es:"el aire acondicionado", ipa:"LA-rya kon-di-tsyo-NA-ta"},
      {it:"il parcheggio", es:"el aparcamiento / el estacionamiento", ipa:"il par-KED-jo"},
      {it:"la chiave", es:"la llave", ipa:"la KYA-ve"}
    ],
    phrases:[
      {it:"Ho una prenotazione.", es:"Tengo una reserva.", ipa:"O U-na pre-no-ta-TSYO-ne"},
      {it:"Vorrei una camera doppia.", es:"Quisiera una habitación doble.", ipa:"vor-REI U-na KA-me-ra DOP-pya"},
      {it:"È inclusa la colazione?", es:"¿Está incluido el desayuno?", ipa:"E in-KLU-za la ko-la-TSYO-ne"},
      {it:"C'è il Wi-Fi?", es:"¿Hay Wi-Fi?", ipa:"CHE il WI-fi"},
      {it:"Posso avere più asciugamani?", es:"¿Puedo tener más toallas?", ipa:"POS-so a-VE-re pyU a-shu-ga-MA-ni"},
      {it:"A che ora è il check-out?", es:"¿A qué hora es el check-out?", ipa:"a ke O-ra E il chek-AUT"}
    ],
    grammar:"'C'è' (hay/existe singular) y 'ci sono' (hay/existen plural): 'C'è il Wi-Fi?' (¿Hay Wi-Fi?), 'Ci sono asciugamani?' (¿Hay toallas?). Tipos de habitación: 'camera singola' (individual), 'camera doppia' (doble con dos camas), 'camera matrimoniale' (doble con cama de matrimonio). El primero suele ser más caro en Italia.",
    practice:[
      "Simula hacer el check-in en un hotel italiano",
      "Practica pedir cosas en la habitación",
      "Aprende: 'agriturismo' (turismo rural), 'bed and breakfast', 'ostello' (albergue)"
    ]
  },
  { day:11,
    title:"El tiempo y el clima",
    titleNative:"Il tempo e il clima",
    focus:"El clima italiano varía enormemente — del norte alpino al sur mediterráneo. El vocabulario meteorológico tiene muchos cognados con el español.",
    vocab:[
      {it:"il sole / soleggiato", es:"el sol / soleado", ipa:"il SO-le / so-led-JA-to"},
      {it:"la pioggia", es:"la lluvia", ipa:"la PYOD-ja"},
      {it:"la neve", es:"la nieve", ipa:"la NE-ve"},
      {it:"il vento", es:"el viento", ipa:"il VEN-to"},
      {it:"la nebbia", es:"la niebla / la neblina", ipa:"la NEB-bya"},
      {it:"nuvoloso", es:"nublado", ipa:"nu-vo-LO-zo"},
      {it:"caldo / freddo", es:"calor / frío", ipa:"KAL-do / FRED-do"},
      {it:"la temperatura", es:"la temperatura", ipa:"la tem-pe-ra-TU-ra"},
      {it:"la previsione del tempo", es:"el pronóstico del tiempo", ipa:"la pre-vi-ZYO-ne del TEM-po"},
      {it:"il temporale", es:"la tormenta / el temporal", ipa:"il tem-po-RA-le"}
    ],
    phrases:[
      {it:"Che tempo fa oggi?", es:"¿Qué tiempo hace hoy?", ipa:"ke TEM-po FA OD-ji"},
      {it:"Fa molto caldo.", es:"Hace mucho calor.", ipa:"FA MOL-to KAL-do"},
      {it:"Piove.", es:"Llueve.", ipa:"PYO-ve"},
      {it:"Nevica in montagna.", es:"Nieva en la montaña.", ipa:"NE-vi-ka in mon-TA-nya"},
      {it:"Quanti gradi ci sono?", es:"¿Cuántos grados hay?", ipa:"KWAN-ti GRA-di chi SO-no"},
      {it:"Porterò un ombrello.", es:"Llevaré un paraguas.", ipa:"por-te-RO un om-BREL-lo"}
    ],
    grammar:"'Fa caldo/freddo' usa 'fare' igual que el español 'hacer': 'hace calor/frío'. Para lluvias, el italiano usa impersonales: 'Piove' (llueve), 'Nevica' (nieva), 'Grandina' (graniza). Las estaciones: primavera, estate (verano), autunno (otoño), inverno (invierno). ¡'Estate' es verano, no 'el estado'!",
    practice:[
      "Describe el tiempo de hoy en italiano",
      "Practica: 'Ci sono venti gradi' (hay veinte grados) — temperatura con 'ci sono'",
      "Aprende las estaciones en italiano: ¡estate = verano, cuidado con el false friend!"
    ]
  },
  { day:12,
    title:"Ropa y moda",
    titleNative:"Abbigliamento e moda",
    focus:"Italia es la capital mundial de la moda — Milan alberga una de las Semanas de la Moda más importantes del mundo. El vocabulario de la ropa tiene muchos cognados con el español.",
    vocab:[
      {it:"la camicia / la camicetta", es:"la camisa / la blusa", ipa:"la ka-MI-cha / la ka-mi-CHET-ta"},
      {it:"i pantaloni", es:"los pantalones", ipa:"i pan-ta-LO-ni"},
      {it:"la gonna", es:"la falda", ipa:"la GON-na"},
      {it:"il vestito", es:"el vestido / el traje", ipa:"il ves-TI-to"},
      {it:"le scarpe", es:"los zapatos", ipa:"le SKAR-pe"},
      {it:"il cappotto", es:"el abrigo", ipa:"il kap-POT-to"},
      {it:"la giacca", es:"la chaqueta", ipa:"la JAK-ka"},
      {it:"i jeans", es:"los jeans / los vaqueros", ipa:"i JINS"},
      {it:"la cintura", es:"el cinturón", ipa:"la chin-TU-ra"},
      {it:"i guanti", es:"los guantes", ipa:"i GWAN-ti"}
    ],
    phrases:[
      {it:"Posso provarlo?", es:"¿Puedo probármelo?", ipa:"POS-so pro-VAR-lo"},
      {it:"Che taglia porta?", es:"¿Qué talla usa?", ipa:"ke TA-lya POR-ta"},
      {it:"È troppo grande/piccolo.", es:"Es demasiado grande/pequeño.", ipa:"E TROP-po GRAN-de / PIK-ko-lo"},
      {it:"Avete questo in un altro colore?", es:"¿Lo tienen en otro color?", ipa:"a-VE-te KWES-to in un AL-tro ko-LO-re"},
      {it:"Mi sta bene?", es:"¿Me queda bien?", ipa:"mi STA BE-ne"},
      {it:"Lo prendo.", es:"Me lo llevo.", ipa:"lo PREN-do"}
    ],
    grammar:"'Mi sta bene' = 'me queda bien' — usa 'stare' (estar) para describir cómo queda la ropa. 'Stare' en italiano funciona igual que 'estar' en español para estados temporales: 'Come stai?' (¿cómo estás?). Las tallas italianas son europeas: camisa 38-46, zapatos 35-47 — diferentes a las de Latinoamérica.",
    practice:[
      "Practica la secuencia completa de comprar ropa: entrar, pedir talla, probarse, decidir",
      "Di qué ropa llevas hoy: 'Oggi porto ___ e ___'",
      "Aprende las marcas italianas más famosas: Gucci, Prada, Armani, Versace, Fendi"
    ]
  },
  { day:13,
    title:"El cuerpo y la salud",
    titleNative:"Il corpo e la salute",
    focus:"Saber describir síntomas en el extranjero es fundamental. El vocabulario médico italiano tiene una base latina muy similar al español — reconocerás la mayoría de términos.",
    vocab:[
      {it:"la testa", es:"la cabeza", ipa:"la TES-ta"},
      {it:"il mal di testa", es:"el dolor de cabeza", ipa:"il mal di TES-ta"},
      {it:"la schiena", es:"la espalda", ipa:"la SKYE-na"},
      {it:"lo stomaco", es:"el estómago", ipa:"lo STO-ma-ko"},
      {it:"la febbre", es:"la fiebre", ipa:"la FEB-bre"},
      {it:"il raffreddore", es:"el resfriado", ipa:"il raf-fred-DO-re"},
      {it:"la farmacia", es:"la farmacia", ipa:"la far-ma-CHI-a"},
      {it:"il medico", es:"el médico", ipa:"il ME-di-ko"},
      {it:"la ricetta", es:"la receta médica", ipa:"la ri-CHET-ta"},
      {it:"l'ospedale", es:"el hospital", ipa:"los-pe-DA-le"}
    ],
    phrases:[
      {it:"Mi fa male la testa.", es:"Me duele la cabeza.", ipa:"mi fa MA-le la TES-ta"},
      {it:"Ho la febbre.", es:"Tengo fiebre.", ipa:"O la FEB-bre"},
      {it:"Ho bisogno di un medico.", es:"Necesito un médico.", ipa:"O bi-ZO-nyo di un ME-di-ko"},
      {it:"Dov'è la farmacia più vicina?", es:"¿Dónde está la farmacia más cercana?", ipa:"do-VE la far-ma-CHI-a pyU vi-CHI-na"},
      {it:"Ho un'allergia a ___.", es:"Soy alérgico/a a ___.", ipa:"O u-nal-ler-JI-a a"},
      {it:"Chiami un'ambulanza!", es:"¡Llame a una ambulancia!", ipa:"KYA-mi u-nam-bu-LAN-tsa"}
    ],
    grammar:"'Mi fa male ___' = 'me duele ___'. Para plural: 'Mi fanno male i piedi' (me duelen los pies). 'Ho bisogno di' = 'necesito' — literalmente 'tengo necesidad de'. Farmacia en Italia: la cruz verde iluminada indica que está abierta. Las farmacias italianas venden muchos medicamentos sin receta que en otros países requieren prescripción.",
    practice:[
      "Practica describir síntomas comunes: fiebre, dolor de cabeza, resfriado",
      "Aprende los números de emergencia italianos: 118 (ambulancia), 113 (policía), 115 (bomberos)",
      "Practica: 'Ho bisogno di...' — fundamental en cualquier situación de urgencia"
    ]
  },
  { day:14,
    title:"Trabajo y profesiones",
    titleNative:"Il lavoro e le professioni",
    focus:"El vocabulario profesional italiano tiene una base latina muy similar al español. Hablar de tu trabajo es una de las primeras conversaciones que tendrás con italianos.",
    vocab:[
      {it:"il lavoro", es:"el trabajo", ipa:"il la-VO-ro"},
      {it:"l'azienda", es:"la empresa", ipa:"la-TSYEN-da"},
      {it:"il collega", es:"el/la colega de trabajo", ipa:"il kol-LE-ga"},
      {it:"il capo", es:"el jefe / la jefa", ipa:"il KA-po"},
      {it:"la riunione", es:"la reunión", ipa:"la ryu-NYO-ne"},
      {it:"il contratto", es:"el contrato", ipa:"il kon-TRAT-to"},
      {it:"lo stipendio", es:"el sueldo / el salario", ipa:"lo sti-PEN-dyo"},
      {it:"il medico", es:"el médico", ipa:"il ME-di-ko"},
      {it:"l'avvocato", es:"el abogado", ipa:"lav-vo-KA-to"},
      {it:"l'insegnante", es:"el/la maestro/a", ipa:"lin-se-NYAN-te"}
    ],
    phrases:[
      {it:"Che lavoro fai?", es:"¿A qué te dedicas?", ipa:"ke la-VO-ro FAI"},
      {it:"Sono ingegnere.", es:"Soy ingeniero/a.", ipa:"SO-no in-je-NYE-re"},
      {it:"Lavoro in una banca.", es:"Trabajo en un banco.", ipa:"la-VO-ro in U-na BAN-ka"},
      {it:"Sono disoccupato/a.", es:"Estoy desempleado/a.", ipa:"SO-no di-zok-ku-PA-to/a"},
      {it:"Ho una riunione importante.", es:"Tengo una reunión importante.", ipa:"O U-na ryu-NYO-ne im-por-TAN-te"},
      {it:"Sono in smart working.", es:"Estoy teletrabajando.", ipa:"SO-no in SMART WOR-king"}
    ],
    grammar:"Para decir tu profesión en italiano, NO se usa artículo: 'Sono medico' (soy médico), no 'Sono un medico'. Es igual que en español informal: 'Soy médico' (sin artículo). Pero en inglés sí: 'I am a doctor'. Recuerda: italiano y español se parecen más entre sí que cualquiera de los dos con el inglés.",
    practice:[
      "Presenta tu profesión y empresa en italiano",
      "Practica: 'Lavoro come ___ in ___' (trabajo como ___ en ___)",
      "Aprende 5 profesiones de tu sector laboral en italiano"
    ]
  },
  { day:15,
    title:"Tecnología",
    titleNative:"La tecnologia",
    focus:"El vocabulario tecnológico es muy internacional — la mayoría de términos son anglicismos que se usan igual en italiano y español. Aprende las variantes propias del italiano.",
    vocab:[
      {it:"il telefono / lo smartphone", es:"el teléfono / el smartphone", ipa:"il te-LE-fo-no"},
      {it:"il computer / il portatile", es:"el ordenador / el portátil", ipa:"il kom-PYU-ter / il por-TA-ti-le"},
      {it:"la rete / internet", es:"la red / internet", ipa:"la RE-te"},
      {it:"la password", es:"la contraseña", ipa:"la PAS-word"},
      {it:"l'applicazione / l'app", es:"la aplicación / la app", ipa:"lap-pli-ka-TSYO-ne"},
      {it:"il caricatore", es:"el cargador", ipa:"il ka-ri-ka-TO-re"},
      {it:"la batteria", es:"la batería", ipa:"la bat-te-RI-a"},
      {it:"scaricare", es:"descargar", ipa:"ska-ri-KA-re"},
      {it:"condividere", es:"compartir", ipa:"kon-di-VI-de-re"},
      {it:"il social media", es:"las redes sociales", ipa:"il SO-chal ME-dya"}
    ],
    phrases:[
      {it:"La mia batteria è scarica.", es:"Mi batería está descargada.", ipa:"la MYA bat-te-RI-a E SKA-ri-ka"},
      {it:"Hai il caricatore?", es:"¿Tienes el cargador?", ipa:"AI il ka-ri-ka-TO-re"},
      {it:"Puoi mandarlo per WhatsApp?", es:"¿Puedes enviarlo por WhatsApp?", ipa:"PWOI man-DAR-lo per WATS-ap"},
      {it:"La connessione è lenta.", es:"La conexión es lenta.", ipa:"la kon-nes-SYO-ne E LEN-ta"},
      {it:"Qual è la password del Wi-Fi?", es:"¿Cuál es la contraseña del Wi-Fi?", ipa:"kwal E la PAS-word del WI-fi"},
      {it:"Come si dice in italiano?", es:"¿Cómo se dice en italiano?", ipa:"KO-me si DI-che in i-ta-LYA-no"}
    ],
    grammar:"'Puoi' = '¿puedes?' del verbo 'potere' (poder). 'Puoi + infinitivo': 'Puoi aiutarmi?' (¿puedes ayudarme?), 'Puoi ripetere?' (¿puedes repetir?). Para mayor cortesía: 'Potresti' (podrías) = condicional de 'potere'. Exactamente como el español 'puedes' vs 'podrías'.",
    practice:[
      "Practica describir un problema tecnológico en italiano",
      "Aprende la pregunta del Wi-Fi: '¿Qual è la password del Wi-Fi?' — imprescindible",
      "Di qué apps usas más y cómo se llaman en italiano"
    ]
  },
  { day:16,
    title:"Naturaleza y paisajes",
    titleNative:"Natura e paesaggi",
    focus:"Italia tiene una geografía espectacular: los Alpes, los Apeninos, el Mediterráneo, el lago de Como, el Etna y el Vesubio. El vocabulario natural tiene raíces latinas muy familiares.",
    vocab:[
      {it:"la montagna", es:"la montaña", ipa:"la mon-TA-nya"},
      {it:"il mare", es:"el mar", ipa:"il MA-re"},
      {it:"il lago", es:"el lago", ipa:"il LA-go"},
      {it:"il fiume", es:"el río", ipa:"il FYU-me"},
      {it:"la foresta", es:"el bosque", ipa:"la fo-RES-ta"},
      {it:"la spiaggia", es:"la playa", ipa:"la SPYAD-ja"},
      {it:"il vulcano", es:"el volcán", ipa:"il vul-KA-no"},
      {it:"la collina", es:"la colina", ipa:"la kol-LI-na"},
      {it:"il tramonto", es:"el atardecer", ipa:"il tra-MON-to"},
      {it:"la campagna", es:"el campo / la campiña", ipa:"la kam-PA-nya"}
    ],
    phrases:[
      {it:"Che bel paesaggio!", es:"¡Qué bello paisaje!", ipa:"ke bel pa-e-ZAD-jo"},
      {it:"Voglio fare un'escursione.", es:"Quiero hacer una excursión.", ipa:"VO-lyo FA-re u-nes-kur-SYO-ne"},
      {it:"Il mare è calmo oggi.", es:"El mar está tranquilo hoy.", ipa:"il MA-re E KAL-mo OD-ji"},
      {it:"È un'area protetta.", es:"Es un área protegida.", ipa:"E u-NA-re-a pro-TET-ta"},
      {it:"Andiamo al lago domani.", es:"Vamos al lago mañana.", ipa:"an-DYA-mo al LA-go do-MA-ni"},
      {it:"Il tramonto sull'Etna è magnifico.", es:"El atardecer sobre el Etna es magnífico.", ipa:"il tra-MON-to sul-ET-na E ma-NYI-fi-ko"}
    ],
    grammar:"'Voglio + infinitivo' = 'quiero + infinitivo': 'Voglio andare' (quiero ir), 'Voglio vedere' (quiero ver). Para sonar más educado: 'Vorrei' (quisiera). La diferencia es exacta al español 'quiero' vs 'quisiera'. 'Spiaggia' (playa) tiene doble 'g' — ¡pronúnciala más larga!",
    practice:[
      "Describe el paisaje de tu región natal en italiano",
      "Aprende los grandes accidentes geográficos de Italia: Etna, Dolomiti, Po, lago di Como",
      "Practica: 'Voglio visitare ___' (quiero visitar ___)"
    ]
  },
  { day:17,
    title:"Arte y cultura",
    titleNative:"Arte e cultura",
    focus:"Italia tiene más patrimonio UNESCO que cualquier otro país. El vocabulario artístico tiene una base latina enorme — y muchos términos artísticos del mundo vienen del italiano.",
    vocab:[
      {it:"il dipinto / il quadro", es:"el cuadro / la pintura", ipa:"il di-PIN-to / il KWAD-ro"},
      {it:"la scultura", es:"la escultura", ipa:"la skul-TU-ra"},
      {it:"la galleria", es:"la galería", ipa:"la gal-le-RI-a"},
      {it:"la cattedrale", es:"la catedral", ipa:"la kat-te-DRA-le"},
      {it:"il Rinascimento", es:"el Renacimiento", ipa:"il ri-na-shi-MEN-to"},
      {it:"il capolavoro", es:"la obra maestra", ipa:"il ka-po-la-VO-ro"},
      {it:"il pittore / la pittrice", es:"el pintor / la pintora", ipa:"il pit-TO-re / la pit-TRI-che"},
      {it:"l'opera", es:"la ópera / la obra", ipa:"LO-pe-ra"},
      {it:"il patrimonio UNESCO", es:"el patrimonio UNESCO", ipa:"il pa-tri-MO-nyo"},
      {it:"il restauro", es:"la restauración", ipa:"il res-TAU-ro"}
    ],
    phrases:[
      {it:"Quanto costa l'ingresso?", es:"¿Cuánto cuesta la entrada?", ipa:"KWAN-to KOS-ta lin-GRES-so"},
      {it:"Vorrei un biglietto ridotto.", es:"Quisiera una entrada con descuento.", ipa:"vor-REI un bi-LYET-to ri-DOT-to"},
      {it:"Questo dipinto è del Cinquecento.", es:"Este cuadro es del siglo XVI.", ipa:"KWES-to di-PIN-to E del chin-kwe-CHEN-to"},
      {it:"Chi ha dipinto questo?", es:"¿Quién pintó esto?", ipa:"ki A di-PIN-to KWES-to"},
      {it:"È vietato toccare le opere.", es:"Está prohibido tocar las obras.", ipa:"E vye-TA-to tok-KA-re le O-pe-re"},
      {it:"Posso fare fotografie?", es:"¿Puedo hacer fotos?", ipa:"POS-so FA-re fo-to-GRA-fye"}
    ],
    grammar:"Los siglos en italiano: il Trecento (s. XIV — los 1300), il Quattrocento (s. XV — los 1400), il Cinquecento (s. XVI — los 1500), il Seicento (s. XVII). Es el sistema de los museos — imprescindible para entender guías y cartelas. Recuerda: Trecento = 1300s, no el siglo 3.",
    practice:[
      "Visita virtualmente un museo italiano y practica el vocabulario",
      "Aprende los grandes artistas en italiano: Leonardo da Vinci, Michelangelo, Raffaello, Botticelli",
      "Practica pedir información en un museo: horarios, precios, audioguías"
    ]
  },
  { day:18,
    title:"Deportes y tiempo libre",
    titleNative:"Sport e tempo libero",
    focus:"El fútbol (calcio) es una pasión nacional en Italia. Pero hay mucho más: ciclismo, esquí, vela, tenis. El vocabulario deportivo tiene muchos internacionalismos y cognados con el español.",
    vocab:[
      {it:"il calcio", es:"el fútbol", ipa:"il KAL-cho"},
      {it:"la partita", es:"el partido", ipa:"la par-TI-ta"},
      {it:"la squadra", es:"el equipo", ipa:"la SKWAD-ra"},
      {it:"l'allenamento", es:"el entrenamiento", ipa:"lal-le-na-MEN-to"},
      {it:"la palestra", es:"el gimnasio", ipa:"la pa-LES-tra"},
      {it:"nuotare", es:"nadar", ipa:"nwo-TA-re"},
      {it:"correre", es:"correr", ipa:"KOR-re-re"},
      {it:"la bicicletta", es:"la bicicleta", ipa:"la bi-chi-KLET-ta"},
      {it:"il tifoso / la tifosa", es:"el/la aficionado/a / hincha", ipa:"il ti-FO-zo / la ti-FO-za"},
      {it:"vincere / perdere", es:"ganar / perder", ipa:"VIN-che-re / PER-de-re"}
    ],
    phrases:[
      {it:"Hai visto la partita ieri?", es:"¿Viste el partido de ayer?", ipa:"AI VIS-to la par-TI-ta YE-ri"},
      {it:"Di che squadra sei?", es:"¿De qué equipo eres?", ipa:"di ke SKWAD-ra SEI"},
      {it:"Andiamo allo stadio!", es:"¡Vamos al estadio!", ipa:"an-DYA-mo AL-lo STA-dyo"},
      {it:"Faccio jogging ogni mattina.", es:"Hago jogging cada mañana.", ipa:"FAT-cho JOG-ging O-nyi mat-TI-na"},
      {it:"Mi piace nuotare in mare.", es:"Me gusta nadar en el mar.", ipa:"mi PYA-che nwo-TA-re in MA-re"},
      {it:"Abbiamo vinto!", es:"¡Hemos ganado!", ipa:"ab-BYA-mo VIN-to"}
    ],
    grammar:"'Mi piace' = 'me gusta'. Para actividades: 'Mi piace nuotare' (me gusta nadar). Para cosas: 'Mi piace il calcio' (me gusta el fútbol). Para plural: 'Mi piacciono gli sport' (me gustan los deportes). El mismo funcionamiento que el español 'gustar'. Clubes italianos: Juventus, Inter, Milan, Napoli, Roma, Lazio.",
    practice:[
      "Di qué deportes te gustan usando 'Mi piace ___' o 'Mi piacciono ___'",
      "Aprende el nombre de los grandes clubes de fútbol italianos",
      "Practica hablar de tus aficiones de tiempo libre en italiano"
    ]
  },
  { day:19,
    title:"Viajes y turismo",
    titleNative:"Viaggi e turismo",
    focus:"Italia es el tercer destino turístico mundial. Aprende a planificar tu viaje, hacer reservas y disfrutar como un viajero bien preparado.",
    vocab:[
      {it:"il viaggio", es:"el viaje", ipa:"il VYAD-jo"},
      {it:"la vacanza", es:"las vacaciones", ipa:"la va-KAN-tsa"},
      {it:"il passaporto", es:"el pasaporte", ipa:"il pas-sa-POR-to"},
      {it:"la valigia", es:"la maleta", ipa:"la va-LI-ja"},
      {it:"la guida turistica", es:"la guía turística", ipa:"la GWI-da tu-RIS-ti-ka"},
      {it:"la cartina", es:"el mapa", ipa:"la kar-TI-na"},
      {it:"la fotografia", es:"la fotografía", ipa:"la fo-to-gra-FI-a"},
      {it:"il souvenir", es:"el souvenir / el recuerdo", ipa:"il su-ve-NIR"},
      {it:"l'assicurazione", es:"el seguro de viaje", ipa:"las-si-ku-ra-TSYO-ne"},
      {it:"la gita", es:"la excursión de un día", ipa:"la JI-ta"}
    ],
    phrases:[
      {it:"È la mia prima volta in Italia.", es:"Es mi primera vez en Italia.", ipa:"E la MYA PRI-ma VOL-ta in i-TA-lya"},
      {it:"Cosa c'è da vedere qui?", es:"¿Qué hay que ver aquí?", ipa:"KO-za CHE da ve-DE-re KWI"},
      {it:"Posso fare una foto?", es:"¿Puedo hacer una foto?", ipa:"POS-so FA-re U-na FO-to"},
      {it:"Quanto dura il tour?", es:"¿Cuánto dura el tour?", ipa:"KWAN-to DU-ra il TUR"},
      {it:"Cerco un hotel economico.", es:"Busco un hotel barato.", ipa:"CHER-ko un o-TEL e-ko-NO-mi-ko"},
      {it:"Quando chiude il museo?", es:"¿Cuándo cierra el museo?", ipa:"KWAN-do KYU-de il mu-ZE-o"}
    ],
    grammar:"'Cerco' = 'busco' (del verbo 'cercare'). No confundir con 'cerca' (cerca de). 'Cercare' = buscar: 'Cerco un ristorante' (busco un restaurante). El resultado se expresa con 'trovare' (encontrar): 'Ho trovato un ottimo hotel' (encontré un hotel excelente). Ciudades imprescindibles: Roma, Firenze, Venezia, Milano, Napoli.",
    practice:[
      "Planifica en italiano un itinerario de 3 días en Roma, Florencia o Venecia",
      "Practica preguntar horarios: 'A che ora apre/chiude ___?'",
      "Aprende los nombres en italiano de las 10 ciudades más visitadas de Italia"
    ]
  },
  { day:20,
    title:"Amor y relaciones",
    titleNative:"Amore e relazioni",
    focus:"El italiano es la lengua del amor — la ópera, la poesía y el cine han exportado sus expresiones románticas al mundo entero. Los italianos son muy expresivos en sus relaciones.",
    vocab:[
      {it:"l'amore", es:"el amor", ipa:"la-MO-re"},
      {it:"l'amicizia", es:"la amistad", ipa:"la-mi-CHI-tsya"},
      {it:"il fidanzato / la fidanzata", es:"el novio / la novia", ipa:"il fi-dan-ZA-to / la fi-dan-ZA-ta"},
      {it:"il marito / la moglie", es:"el esposo / la esposa", ipa:"il ma-RI-to / la MO-lye"},
      {it:"innamorarsi", es:"enamorarse", ipa:"in-na-mo-RAR-si"},
      {it:"sposarsi", es:"casarse", ipa:"spo-ZAR-si"},
      {it:"Ti voglio bene.", es:"Te quiero. (familia/amigos)", ipa:"ti VO-lyo BE-ne"},
      {it:"Ti amo.", es:"Te amo. (amor romántico)", ipa:"ti A-mo"},
      {it:"Mi manchi.", es:"Te echo de menos.", ipa:"mi MAN-ki"},
      {it:"Sei bellissimo/a.", es:"Eres precioso/a.", ipa:"SEI bel-LIS-si-mo/a"}
    ],
    phrases:[
      {it:"Ti voglio bene.", es:"Te quiero mucho. (amigos/familia)", ipa:"ti VO-lyo BE-ne"},
      {it:"Sei la persona più bella che abbia mai visto.", es:"Eres la persona más bella que he visto jamás.", ipa:"SEI la per-SO-na pyU BEL-la ke AB-bya MAI VIS-to"},
      {it:"Posso offrirti qualcosa?", es:"¿Puedo invitarte a algo?", ipa:"POS-so of-FRIR-ti kwal-KO-za"},
      {it:"Vuoi uscire con me?", es:"¿Quieres salir conmigo?", ipa:"VWOI u-SHI-re kon ME"},
      {it:"Sei molto simpatico/a.", es:"Eres muy simpático/a.", ipa:"SEI MOL-to sim-PA-ti-ko/a"},
      {it:"Sono felice di conoscerti.", es:"Estoy feliz de conocerte.", ipa:"SO-no fe-LI-che di ko-NOSHER-ti"}
    ],
    grammar:"'Ti voglio bene' vs 'Ti amo': diferencia clave. 'Ti voglio bene' (te quiero bien) se usa para familia y amigos muy cercanos — expresa cariño profundo. 'Ti amo' es exclusivamente romántico. ¡No los confundas! Un italiano que te dice 'ti voglio bene' te aprecia mucho — no te está declarando su amor romántico.",
    practice:[
      "Practica hacer cumplidos sinceros en italiano",
      "Aprende a presentar a tu pareja o mejor amigo/a",
      "Practica: 'Mi manchi' — una expresión muy italiana y muy emotiva"
    ]
  },
  { day:21,
    title:"Emociones y sentimientos",
    titleNative:"Emozioni e sentimenti",
    focus:"Los italianos expresan sus emociones con gran intensidad y gesticulación. El vocabulario emocional tiene muchos cognados con el español. Aprende también las exclamaciones más típicas italianas.",
    vocab:[
      {it:"felice / contento", es:"feliz / contento", ipa:"fe-LI-che / kon-TEN-to"},
      {it:"triste", es:"triste", ipa:"TRIS-te"},
      {it:"arrabbiato/a", es:"enfadado/a / enojado/a", ipa:"ar-rab-BYA-to/a"},
      {it:"sorpreso/a", es:"sorprendido/a", ipa:"sor-PRE-zo/a"},
      {it:"stanco/a", es:"cansado/a", ipa:"STAN-ko/a"},
      {it:"preoccupato/a", es:"preocupado/a", ipa:"pre-ok-ku-PA-to/a"},
      {it:"annoiato/a", es:"aburrido/a", ipa:"an-no-YA-to/a"},
      {it:"emozionato/a", es:"emocionado/a", ipa:"e-mo-tsyo-NA-to/a"},
      {it:"nervoso/a", es:"nervioso/a", ipa:"ner-VO-zo/a"},
      {it:"entusiasta", es:"entusiasta", ipa:"en-tuz-YAS-ta"}
    ],
    phrases:[
      {it:"Come ti senti?", es:"¿Cómo te sientes?", ipa:"KO-me ti SEN-ti"},
      {it:"Mi sento molto felice oggi.", es:"Hoy me siento muy feliz.", ipa:"mi SEN-to MOL-to fe-LI-che OD-ji"},
      {it:"Sono stressato/a.", es:"Estoy estresado/a.", ipa:"SO-no stres-SA-to/a"},
      {it:"Non mi va.", es:"No me apetece / No me va.", ipa:"non mi VA"},
      {it:"Che bella sorpresa!", es:"¡Qué bonita sorpresa!", ipa:"ke BEL-la sor-PRE-za"},
      {it:"Che peccato!", es:"¡Qué lástima!", ipa:"ke pek-KA-to"}
    ],
    grammar:"'Mi sento ___' = 'me siento ___' (del verbo 'sentirsi'). Exclamaciones italianas esenciales: 'Che bello!' (¡qué bonito!), 'Che peccato!' (¡qué lástima!), 'Mamma mia!' (expresión de sorpresa/exasperación), 'Dai!' (¡venga! / ¡vamos!), 'Certo!' (¡claro!). Estas expresiones te harán sonar inmediatamente más natural.",
    practice:[
      "Describe cómo te sientes hoy en italiano",
      "Practica reaccionar a noticias buenas y malas con las exclamaciones correctas",
      "Aprende los gestos italianos más famosos — muchos complementan las expresiones emocionales"
    ]
  },
  { day:22,
    title:"Casa y hogar",
    titleNative:"Casa e abitazione",
    focus:"El vocabulario doméstico italiano es muy similar al español. Hablar de tu casa es esencial para invitaciones y conversaciones de vida cotidiana.",
    vocab:[
      {it:"la casa", es:"la casa", ipa:"la KA-za"},
      {it:"l'appartamento", es:"el apartamento / el piso", ipa:"lap-par-ta-MEN-to"},
      {it:"la cucina", es:"la cocina", ipa:"la ku-CHI-na"},
      {it:"il salotto / il soggiorno", es:"el salón / la sala de estar", ipa:"il sa-LOT-to / il sod-JOR-no"},
      {it:"la camera da letto", es:"el dormitorio", ipa:"la KA-me-ra da LET-to"},
      {it:"il bagno", es:"el baño", ipa:"il BA-nyo"},
      {it:"il balcone", es:"el balcón", ipa:"il bal-KO-ne"},
      {it:"il divano", es:"el sofá", ipa:"il di-VA-no"},
      {it:"la finestra", es:"la ventana", ipa:"la fi-NES-tra"},
      {it:"l'affitto", es:"el alquiler", ipa:"laf-FIT-to"}
    ],
    phrases:[
      {it:"Abito in un appartamento al terzo piano.", es:"Vivo en un apartamento en el tercer piso.", ipa:"A-bi-to in un ap-par-ta-MEN-to al TER-tso PYA-no"},
      {it:"Ho un balcone con vista sul mare.", es:"Tengo un balcón con vista al mar.", ipa:"O un bal-KO-ne kon VIS-ta sul MA-re"},
      {it:"Il mio affitto è caro.", es:"Mi alquiler es caro.", ipa:"il MYO af-FIT-to E KA-ro"},
      {it:"Devo fare le pulizie.", es:"Tengo que limpiar.", ipa:"DE-vo FA-re le pu-LI-tsye"},
      {it:"Vieni a casa mia?", es:"¿Vienes a mi casa?", ipa:"VYE-ni a KA-za MYA"},
      {it:"Il mio quartiere è tranquillo.", es:"Mi barrio es tranquilo.", ipa:"il MYO kwar-TYE-re E tran-KWIL-lo"}
    ],
    grammar:"Los ordinales italianos para pisos: primo (1°), secondo (2°), terzo (3°), quarto (4°), quinto (5°). La planta baja = 'pianterreno' o 'piano terra'. ¡Cuidado! El 'primo piano' italiano es el primer piso sobre la planta baja — equivale al segundo piso en España o Latinoamérica.",
    practice:[
      "Describe tu casa o apartamento en italiano",
      "Practica: 'Abito a ___ in un appartamento al ___ piano'",
      "Aprende el vocabulario de los electrodomésticos de cocina en italiano"
    ]
  },
  { day:23,
    title:"Animales",
    titleNative:"Gli animali",
    focus:"El vocabulario animal tiene raíces latinas muy transparentes para el hispanohablante. Muchos nombres de animales en italiano son casi idénticos al español.",
    vocab:[
      {it:"il cane", es:"el perro", ipa:"il KA-ne"},
      {it:"il gatto", es:"el gato", ipa:"il GAT-to"},
      {it:"l'uccello", es:"el pájaro / el ave", ipa:"lut-CHEL-lo"},
      {it:"il pesce", es:"el pez / el pescado", ipa:"il PE-she"},
      {it:"il cavallo", es:"el caballo", ipa:"il ka-VAL-lo"},
      {it:"la mucca", es:"la vaca", ipa:"la MUK-ka"},
      {it:"il maiale", es:"el cerdo / el puerco", ipa:"il ma-YA-le"},
      {it:"la pecora", es:"la oveja", ipa:"la PE-ko-ra"},
      {it:"l'aquila", es:"el águila", ipa:"LAK-wi-la"},
      {it:"il lupo", es:"el lobo", ipa:"il LU-po"}
    ],
    phrases:[
      {it:"Ho un cane di nome Fido.", es:"Tengo un perro llamado Fido.", ipa:"O un KA-ne di NO-me FI-do"},
      {it:"Il tuo gatto è adorabile!", es:"¡Tu gato es adorable!", ipa:"il TWO GAT-to E a-do-RA-bi-le"},
      {it:"Posso portare il mio cane?", es:"¿Puedo traer a mi perro?", ipa:"POS-so por-TA-re il MYO KA-ne"},
      {it:"Sono allergico/a ai gatti.", es:"Soy alérgico/a a los gatos.", ipa:"SO-no al-ler-JI-ko/a ai GAT-ti"},
      {it:"Il lupo fa paura.", es:"El lobo da miedo.", ipa:"il LU-po FA pa-U-ra"},
      {it:"Che animale carino!", es:"¡Qué animal tan mono!", ipa:"ke a-ni-MA-le ka-RI-no"}
    ],
    grammar:"'Fare paura' = 'dar miedo'. 'Fare' (hacer) + sustantivo crea muchas expresiones: 'fa caldo' (hace calor), 'fa freddo' (hace frío), 'fa paura' (da miedo), 'fa schifo' (da asco), 'fa piacere' (da placer/alegría). Este patrón es muy productivo — aprende el sustantivo y ya tienes la expresión.",
    practice:[
      "Describe tu mascota favorita o la que te gustaría tener",
      "Aprende los sonidos italianos de los animales: el perro dice 'bau bau', el gato 'miao'",
      "Practica: fauna italiana típica — lupo (lobo), orso (oso), aquila (águila), cinghiale (jabalí)"
    ]
  },
  { day:24,
    title:"Historia y tradiciones",
    titleNative:"Storia e tradizioni",
    focus:"Italia tiene una historia que abarca milenios — desde la Roma antigua hasta el Renacimiento y la unificación. El vocabulario histórico es muy accesible por la base latina compartida.",
    vocab:[
      {it:"la storia", es:"la historia", ipa:"la STO-rya"},
      {it:"l'Impero Romano", es:"el Imperio Romano", ipa:"lim-PE-ro ro-MA-no"},
      {it:"il castello", es:"el castillo", ipa:"il kas-TEL-lo"},
      {it:"la tradizione", es:"la tradición", ipa:"la tra-di-TSYO-ne"},
      {it:"la festa", es:"la fiesta / el festival", ipa:"la FES-ta"},
      {it:"il Carnevale", es:"el Carnaval", ipa:"il kar-ne-VA-le"},
      {it:"il Ferragosto", es:"el Ferragosto (vacaciones de agosto)", ipa:"il fer-ra-GOS-to"},
      {it:"il presepe", es:"el belén / el nacimiento navideño", ipa:"il pre-ZE-pe"},
      {it:"il Palio", es:"el Palio de Siena (carrera histórica de caballos)", ipa:"il PA-lyo"},
      {it:"il santo patrono", es:"el santo patrón", ipa:"il SAN-to pa-TRO-no"}
    ],
    phrases:[
      {it:"Quando è la festa del paese?", es:"¿Cuándo es la fiesta del pueblo?", ipa:"KWAN-do E la FES-ta del pa-E-ze"},
      {it:"Il Carnevale di Venezia è famoso.", es:"El Carnaval de Venecia es famoso.", ipa:"il kar-ne-VA-le di ve-NE-tsya E fa-MO-zo"},
      {it:"Questo castello risale al Medioevo.", es:"Este castillo data de la Edad Media.", ipa:"KWES-to kas-TEL-lo ri-ZA-le al me-dyo-E-vo"},
      {it:"È un'antica tradizione italiana.", es:"Es una antigua tradición italiana.", ipa:"E u-NAN-ti-ka tra-di-TSYO-ne i-ta-LYA-na"},
      {it:"Andiamo a vedere il presepe.", es:"Vamos a ver el belén.", ipa:"an-DYA-mo a ve-DE-re il pre-ZE-pe"},
      {it:"L'Italia ha una storia straordinaria.", es:"Italia tiene una historia extraordinaria.", ipa:"li-TA-lya A U-na STO-rya stra-or-di-NA-rya"}
    ],
    grammar:"Los meses en italiano: gennaio (enero), febbraio (febrero), marzo, aprile, maggio (mayo), giugno (junio), luglio (julio), agosto, settembre, ottobre, novembre, dicembre. Se escriben en minúscula, igual que en español. Nota: luglio (julio) y giugno (junio) — ¡no los confundas!",
    practice:[
      "Aprende las principales fiestas italianas y su origen histórico",
      "Compara una tradición italiana con una de tu país hispanohablante",
      "Practica: '___ risale al ___' (data de / se remonta a)"
    ]
  },
  { day:25,
    title:"Música y entretenimiento",
    titleNative:"Musica e intrattenimento",
    focus:"Italia dio al mundo la ópera, el bel canto y buena parte del vocabulario musical universal. Aprende a hablar de cultura y entretenimiento como un italiano.",
    vocab:[
      {it:"la musica", es:"la música", ipa:"la MU-zi-ka"},
      {it:"la canzone", es:"la canción", ipa:"la kan-DTSZO-ne"},
      {it:"il concerto", es:"el concierto", ipa:"il kon-CHER-to"},
      {it:"il cantante", es:"el/la cantante", ipa:"il kan-TAN-te"},
      {it:"il teatro", es:"el teatro", ipa:"il te-A-tro"},
      {it:"il cinema", es:"el cine", ipa:"il CHI-ne-ma"},
      {it:"il palcoscenico", es:"el escenario", ipa:"il pal-ko-SHE-ni-ko"},
      {it:"il biglietto", es:"la entrada", ipa:"il bi-LYET-to"},
      {it:"l'applauso", es:"el aplauso", ipa:"lap-PLAU-zo"},
      {it:"il festival", es:"el festival", ipa:"il fes-ti-VAL"}
    ],
    phrases:[
      {it:"Ti piace la musica italiana?", es:"¿Te gusta la música italiana?", ipa:"ti PYA-che la MU-zi-ka i-ta-LYA-na"},
      {it:"Andiamo al cinema stasera?", es:"¿Vamos al cine esta noche?", ipa:"an-DYA-mo al CHI-ne-ma sta-SE-ra"},
      {it:"Ho i biglietti per l'opera.", es:"Tengo las entradas para la ópera.", ipa:"O i bi-LYET-ti per LO-pe-ra"},
      {it:"Che spettacolo magnifico!", es:"¡Qué espectáculo tan magnífico!", ipa:"ke spet-TA-ko-lo ma-NYI-fi-ko"},
      {it:"La Scala è il teatro più famoso d'Italia.", es:"La Scala es el teatro más famoso de Italia.", ipa:"la SKA-la E il te-A-tro pyU fa-MO-zo di-TA-lya"},
      {it:"Qual è il tuo cantante preferito?", es:"¿Cuál es tu cantante favorito?", ipa:"kwal E il TWO kan-TAN-te pre-fe-RI-to"}
    ],
    grammar:"El vocabulario musical internacional viene en gran parte del italiano: piano, forte, allegro, andante, crescendo, soprano, tenor, contralto, aria, libretto, opera, tempo, vibrato, staccato, fermata. Si estudias música, ¡ya tienes una base sólida en italiano sin saberlo!",
    practice:[
      "Escucha una canción italiana y trata de entender algunas palabras",
      "Aprende los géneros: opera, canzone napoletana, musica pop italiana",
      "Practica hacer planes para salir: '¿Andiamo al ___ stasera?'"
    ]
  },
  { day:26,
    title:"Negocios y finanzas",
    titleNative:"Affari e finanze",
    focus:"El italiano empresarial es importante si trabajas con Italia — el tercer motor económico de Europa, con industrias líderes en moda, diseño, automoción y gastronomía.",
    vocab:[
      {it:"l'affare", es:"el negocio / el trato", ipa:"laf-FA-re"},
      {it:"il cliente", es:"el/la cliente", ipa:"il klyen-TE"},
      {it:"la fattura", es:"la factura", ipa:"la fat-TU-ra"},
      {it:"il budget", es:"el presupuesto", ipa:"il BAD-jet"},
      {it:"l'investimento", es:"la inversión", ipa:"lin-ves-ti-MEN-to"},
      {it:"la banca", es:"el banco", ipa:"la BAN-ka"},
      {it:"il bonifico", es:"la transferencia bancaria", ipa:"il bo-NI-fi-ko"},
      {it:"il guadagno", es:"la ganancia / el beneficio", ipa:"il gwa-DA-nyo"},
      {it:"la perdita", es:"la pérdida", ipa:"la PER-di-ta"},
      {it:"il mercato", es:"el mercado (económico)", ipa:"il mer-KA-to"}
    ],
    phrases:[
      {it:"Possiamo fissare una riunione?", es:"¿Podemos fijar una reunión?", ipa:"pos-SYA-mo fis-SA-re u-na ryu-NYO-ne"},
      {it:"Le mando la fattura per email.", es:"Le envío la factura por email.", ipa:"le MAN-do la fat-TU-ra per I-meil"},
      {it:"Qual è il vostro prezzo migliore?", es:"¿Cuál es su mejor precio?", ipa:"kwal E il VOS-tro PRET-tso mi-LYO-re"},
      {it:"Dobbiamo rispettare il budget.", es:"Debemos respetar el presupuesto.", ipa:"dob-BYA-mo ris-pet-TA-re il BAD-jet"},
      {it:"È un affare!", es:"¡Es una ganga! / ¡Es un buen trato!", ipa:"E un af-FA-re"},
      {it:"Firmiamo il contratto?", es:"¿Firmamos el contrato?", ipa:"fir-MYA-mo il kon-TRAT-to"}
    ],
    grammar:"'Dobbiamo' = 'debemos' (nosotros de 'dovere'). Conjugación completa: devo (debo), devi (debes), deve (debe), dobbiamo (debemos), dovete (debéis), devono (deben). Siempre + infinitivo: 'Dobbiamo parlare' (debemos hablar), igual al español 'deber + infinitivo'.",
    practice:[
      "Practica redactar un breve email formal en italiano a un cliente",
      "Aprende a presentar un precio y negociar: 'Possiamo discutere il prezzo?'",
      "Memoriza: 'In bocca al lupo!' (¡Mucha suerte!) — respuesta obligatoria: 'Crepi!'"
    ]
  },
  { day:27,
    title:"Educación",
    titleNative:"L'istruzione",
    focus:"Bolonia alberga la universidad más antigua de Occidente (1088). El sistema educativo italiano tiene tradición milenaria. El vocabulario educativo tiene una enorme base latina compartida con el español.",
    vocab:[
      {it:"la scuola", es:"la escuela", ipa:"la SKWO-la"},
      {it:"l'università", es:"la universidad", ipa:"lu-ni-ver-si-TA"},
      {it:"il professore / la professoressa", es:"el/la profesor/a", ipa:"il pro-fes-SO-re / la pro-fes-so-RES-sa"},
      {it:"lo studente / la studentessa", es:"el/la estudiante", ipa:"lo stu-DEN-te / la stu-den-TES-sa"},
      {it:"il voto", es:"la nota / la calificación", ipa:"il VO-to"},
      {it:"la laurea", es:"la licenciatura", ipa:"la LAU-re-a"},
      {it:"la tesi", es:"la tesis", ipa:"la TE-zi"},
      {it:"il corso", es:"el curso", ipa:"il KOR-so"},
      {it:"la borsa di studio", es:"la beca", ipa:"la BOR-sa di STU-dyo"},
      {it:"gli esami", es:"los exámenes", ipa:"lye ZA-mi"}
    ],
    phrases:[
      {it:"Dove studi?", es:"¿Dónde estudias?", ipa:"DO-ve STU-di"},
      {it:"Studio medicina all'università.", es:"Estudio medicina en la universidad.", ipa:"STU-dyo me-di-CHI-na al-lu-ni-ver-si-TA"},
      {it:"Ho superato l'esame!", es:"¡He aprobado el examen!", ipa:"O su-pe-RA-to le-ZA-me"},
      {it:"Ho preso trenta e lode.", es:"Saqué matrícula de honor. (nota máxima)", ipa:"O PRE-zo TREN-ta e LO-de"},
      {it:"Sto scrivendo la tesi.", es:"Estoy escribiendo la tesis.", ipa:"STO skri-VEN-do la TE-zi"},
      {it:"In bocca al lupo per l'esame!", es:"¡Mucha suerte en el examen!", ipa:"in BOK-ka al LU-po per le-ZA-me"}
    ],
    grammar:"Notas universitarias en Italia: 18 (mínimo para aprobar) a 30 (máximo), 30 e lode = matrícula de honor. En la escuela: de 1 a 10, siendo 6 el aprobado. 'Ho preso trenta e lode' = la nota más alta posible. 'Bocciato' (suspenso), 'promosso' (aprobado), 'rimandato' (con recuperación).",
    practice:[
      "Habla de tu historial educativo en italiano",
      "Aprende a dar la enhorabuena: 'Complimenti! / Bravissimo!' — muy usado",
      "Practica describir tu área de estudio o especialización"
    ]
  },
  { day:28,
    title:"Medioambiente",
    titleNative:"L'ambiente",
    focus:"La sostenibilidad es un tema central en la Italia contemporánea. El vocabulario ecológico tiene bases latinas muy familiares y es cada vez más importante en conversaciones cotidianas.",
    vocab:[
      {it:"l'ambiente", es:"el medioambiente", ipa:"lam-BYEN-te"},
      {it:"il cambiamento climatico", es:"el cambio climático", ipa:"il kam-bya-MEN-to kli-MA-ti-ko"},
      {it:"la raccolta differenziata", es:"el reciclaje selectivo", ipa:"la rak-KOL-ta dif-fe-ren-TSYA-ta"},
      {it:"riciclare", es:"reciclar", ipa:"ri-chi-KLA-re"},
      {it:"le energie rinnovabili", es:"las energías renovables", ipa:"le e-NER-jye rin-no-VA-bi-li"},
      {it:"l'inquinamento", es:"la contaminación", ipa:"lin-kwi-na-MEN-to"},
      {it:"la sostenibilità", es:"la sostenibilidad", ipa:"la sos-te-ni-bi-li-TA"},
      {it:"il rifiuto", es:"la basura / el residuo", ipa:"il ri-FYU-to"},
      {it:"la biodiversità", es:"la biodiversidad", ipa:"la byo-di-ver-si-TA"},
      {it:"il pannello solare", es:"el panel solar", ipa:"il pan-NEL-lo so-LA-re"}
    ],
    phrases:[
      {it:"Dobbiamo proteggere l'ambiente.", es:"Debemos proteger el medioambiente.", ipa:"dob-BYA-mo pro-TED-je-re lam-BYEN-te"},
      {it:"Faccio la raccolta differenziata.", es:"Yo reciclo de forma selectiva.", ipa:"FAT-cho la rak-KOL-ta dif-fe-ren-TSYA-ta"},
      {it:"Il cambiamento climatico è urgente.", es:"El cambio climático es urgente.", ipa:"il kam-bya-MEN-to kli-MA-ti-ko E ur-JEN-te"},
      {it:"Preferisco i prodotti biologici.", es:"Prefiero los productos ecológicos.", ipa:"pre-FE-ri-sko i pro-DOT-ti byo-LO-ji-chi"},
      {it:"Andiamo in bicicletta invece della macchina.", es:"Vamos en bici en vez del coche.", ipa:"an-DYA-mo in bi-chi-KLET-ta in-VE-che DEL-la MAK-ki-na"},
      {it:"L'Italia punta sulle rinnovabili.", es:"Italia apuesta por las renovables.", ipa:"li-TA-lya PUN-ta sul-le rin-no-VA-bi-li"}
    ],
    grammar:"'Preferisco' = 'prefiero' del verbo 'preferire'. Verbos en -ire con infijo -isc-: preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono. Otros: capire (entender), finire (terminar), pulire (limpiar). El infijo -isc- no aparece en las formas de nosotros/vosotros.",
    practice:[
      "Habla de tus hábitos ecológicos en italiano",
      "Aprende el sistema de reciclaje italiano: los colores de contenedores varían por ciudad",
      "Compara la política ambiental de Italia con la de tu país"
    ]
  },
  { day:29,
    title:"Conversación avanzada",
    titleNative:"Conversazione avanzata",
    focus:"Hoy ponemos en práctica todo. Los conectores discursivos son el secreto de la fluidez — convierten frases aisladas en conversación real. ¡Estás a un día de completar tu curso!",
    vocab:[
      {it:"però", es:"pero / sin embargo", ipa:"pe-RO"},
      {it:"quindi", es:"entonces / por lo tanto", ipa:"KWIN-di"},
      {it:"comunque", es:"de todas formas", ipa:"ko-MUN-kwe"},
      {it:"infatti", es:"en efecto / de hecho", ipa:"in-FAT-ti"},
      {it:"purtroppo", es:"desgraciadamente / lamentablemente", ipa:"pur-TROP-po"},
      {it:"per fortuna", es:"por suerte / afortunadamente", ipa:"per for-TU-na"},
      {it:"nel frattempo", es:"mientras tanto", ipa:"nel frat-TEM-po"},
      {it:"a proposito", es:"a propósito / por cierto", ipa:"a pro-PO-zi-to"},
      {it:"in ogni caso", es:"en cualquier caso", ipa:"in O-nyi KA-zo"},
      {it:"in conclusione", es:"en conclusión", ipa:"in kon-klu-ZYO-ne"}
    ],
    phrases:[
      {it:"Non capisco bene, può ripetere?", es:"No entiendo bien, ¿puede repetir?", ipa:"non ka-PIS-ko BE-ne, PWO ri-pe-TE-re"},
      {it:"Potrebbe parlare più lentamente?", es:"¿Podría hablar más despacio?", ipa:"po-TREB-be par-LA-re pyU len-ta-MEN-te"},
      {it:"Come si dice ___ in italiano?", es:"¿Cómo se dice ___ en italiano?", ipa:"KO-me si DI-che in i-ta-LYA-no"},
      {it:"Ho capito, grazie.", es:"He entendido, gracias.", ipa:"O ka-PI-to, GRA-tsye"},
      {it:"Sto imparando l'italiano.", es:"Estoy aprendiendo italiano.", ipa:"STO im-pa-RAN-do li-ta-LYA-no"},
      {it:"Il mio italiano migliora ogni giorno.", es:"Mi italiano mejora cada día.", ipa:"il MYO i-ta-LYA-no mi-LYO-ra O-nyi JOR-no"}
    ],
    grammar:"Los conectores discursivos son el secreto de la fluidez: 'però' (pero), 'quindi' (entonces), 'infatti' (de hecho), 'comunque' (de todas formas), 'purtroppo' (lamentablemente). Conectando frases simples con estos, tu italiano suena inmediatamente más natural. Es el mismo salto que en español al dejar de hablar en frases aisladas.",
    practice:[
      "Mantén una conversación de 5 minutos sobre un tema libre usando conectores",
      "Practica pedir aclaración cuando no entiendes — fundamental en inmersión real",
      "Grábate hablando en italiano 2 minutos y compara con la grabación del día 1"
    ]
  },
  { day:30,
    title:"¡Felicidades! — 30 días de italiano",
    titleNative:"Congratulazioni! — 30 giorni di italiano",
    focus:"¡Lo has conseguido! En 30 días has construido una base sólida en italiano. Como hispanohablante, tu ventaja es enorme — compartes el 80% del vocabulario y casi toda la gramática básica. Ahora el camino es la inmersión.",
    vocab:[
      {it:"Congratulazioni!", es:"¡Enhorabuena! / ¡Felicidades!", ipa:"kon-gra-tu-la-TSYO-ni"},
      {it:"il progresso", es:"el progreso", ipa:"il pro-GRES-so"},
      {it:"la fluidità", es:"la fluidez", ipa:"la flwi-di-TA"},
      {it:"l'obiettivo", es:"el objetivo", ipa:"lob-yet-TI-vo"},
      {it:"la perseveranza", es:"la perseverancia", ipa:"la per-se-ve-RAN-tsa"},
      {it:"il successo", es:"el éxito", ipa:"il sut-CHES-so"},
      {it:"continuare", es:"continuar", ipa:"kon-ti-NU-a-re"},
      {it:"migliorare", es:"mejorar", ipa:"mi-lyo-RA-re"},
      {it:"la lingua", es:"la lengua / el idioma", ipa:"la LIN-gwa"},
      {it:"il futuro", es:"el futuro", ipa:"il fu-TU-ro"}
    ],
    phrases:[
      {it:"Ho completato il corso!", es:"¡He completado el curso!", ipa:"O kom-ple-TA-to il KOR-so"},
      {it:"Posso comunicare in italiano.", es:"Puedo comunicarme en italiano.", ipa:"POS-so ko-mu-ni-KA-re in i-ta-LYA-no"},
      {it:"Il mio viaggio linguistico continua.", es:"Mi viaje lingüístico continúa.", ipa:"il MYO VYAD-jo lin-GWIS-ti-ko kon-TI-nwa"},
      {it:"Voglio visitare l'Italia presto.", es:"Quiero visitar Italia pronto.", ipa:"VO-lyo vi-zi-TA-re li-TA-lya PRES-to"},
      {it:"Sono orgoglioso/a del mio progresso.", es:"Estoy orgulloso/a de mi progreso.", ipa:"SO-no or-go-LYO-zo/a del MYO pro-GRES-so"},
      {it:"Arrivederci e in bocca al lupo!", es:"¡Hasta luego y mucha suerte!", ipa:"ar-ri-ve-DER-chi e in BOK-ka al LU-po"}
    ],
    grammar:"Tu mayor ventaja como hispanohablante: el español e italiano comparten el 80% del vocabulario, la gramática de género/número, la concordancia adjetival, los verbos modales y la musicalidad mediterránea. El siguiente paso: inmersión total — películas italianas (Cinema Paradiso, La vita è bella, Il postino), podcasts en italiano, música. ¡Hai fatto un lavoro straordinario!",
    practice:[
      "Escribe una carta corta en italiano describiendo lo que aprendiste en 30 días",
      "Planifica un viaje real a Italia haciendo todas las reservas en italiano",
      "Comprométete a ver una película italiana esta semana sin subtítulos en español"
    ]
  }
];

var CONVERSATIONS_ES_IT = [
  { title:"En el bar",
    scene:"Entras a un bar en Roma y pides el desayuno al estilo italiano.",
    lines:[
      {who:"them", it:"Buongiorno! Cosa prende?", en:"¡Buenos días! ¿Qué va a tomar?"},
      {who:"you",  it:"Buongiorno. Un caffè macchiato e un cornetto alla crema, per favore.", en:"Buenos días. Un café manchado y un croissant de crema, por favor."},
      {who:"them", it:"Al banco o al tavolo?", en:"¿En la barra o en la mesa?"},
      {who:"you",  it:"Al banco, grazie. È la tradizione italiana!", en:"En la barra, gracias. ¡Es la tradición italiana!"},
      {who:"them", it:"Esatto! Sono due euro.", en:"¡Exacto! Son dos euros."},
      {who:"you",  it:"Ecco. Grazie mille.", en:"Aquí tiene. Muchísimas gracias."},
      {who:"them", it:"Prego! Buona giornata.", en:"¡De nada! Que tenga buen día."}
    ]},
  { title:"En el hotel",
    scene:"Llegas a tu hotel en Florencia con una reserva.",
    lines:[
      {who:"you",  it:"Buona sera, ho una prenotazione a nome González.", en:"Buenas tardes, tengo una reserva a nombre de González."},
      {who:"them", it:"Benvenuta, signora González. Due notti, camera singola?", en:"Bienvenida, señora González. ¿Dos noches, habitación individual?"},
      {who:"you",  it:"Sì, esatto. La colazione è inclusa?", en:"Sí, exacto. ¿El desayuno está incluido?"},
      {who:"them", it:"Sì, dalle sette alle dieci. Ecco la chiave, camera 305.", en:"Sí, de siete a diez. Aquí tiene la llave, habitación 305."},
      {who:"you",  it:"Grazie. E la password del wifi?", en:"Gracias. ¿Y la contraseña del wifi?"},
      {who:"them", it:"È scritta sul retro della chiave. Buon soggiorno!", en:"Está escrita en el reverso de la llave. ¡Que disfrute su estancia!"}
    ]},
  { title:"Pidiendo direcciones",
    scene:"Estás perdido en Venecia buscando la Plaza San Marcos.",
    lines:[
      {who:"you",  it:"Scusi, sto cercando Piazza San Marco. È lontana?", en:"Perdone, estoy buscando la Plaza de San Marcos. ¿Está lejos?"},
      {who:"them", it:"No, è vicina. Segua le frecce gialle.", en:"No, está cerca. Siga las flechas amarillas."},
      {who:"you",  it:"Le frecce gialle, capito. E quanto tempo ci vuole a piedi?", en:"Las flechas amarillas, entendido. ¿Y cuánto tiempo se tarda a pie?"},
      {who:"them", it:"Cinque minuti, non di più. Venezia è piccola!", en:"Cinco minutos, no más. ¡Venecia es pequeña!"},
      {who:"you",  it:"Perfetto. Grazie mille, molto gentile.", en:"Perfecto. Muchísimas gracias, muy amable."},
      {who:"them", it:"Prego! Goditi la città.", en:"¡De nada! Disfruta la ciudad."}
    ]},
  { title:"En el restaurante",
    scene:"Cenas en una trattoria en Nápoles.",
    lines:[
      {who:"you",  it:"Buona sera. Avete un tavolo per due persone?", en:"Buenas noches. ¿Tienen mesa para dos personas?"},
      {who:"them", it:"Certo! Accomodatevi. Ecco il menu.", en:"¡Por supuesto! Siéntense. Aquí tienen el menú."},
      {who:"you",  it:"Cosa consiglia? Siamo a Napoli — dobbiamo mangiare la pizza vera!", en:"¿Qué nos recomienda? Estamos en Nápoles — ¡tenemos que comer la pizza de verdad!"},
      {who:"them", it:"La pizza Margherita è la nostra specialità. Fatta nel forno a legna.", en:"La pizza Margarita es nuestra especialidad. Hecha en horno de leña."},
      {who:"you",  it:"Due Margherite allora, e una bottiglia di vino rosso locale.", en:"Dos Margaritas entonces, y una botella de vino tinto local."},
      {who:"them", it:"Ottima scelta! Subito.", en:"¡Excelente elección! Ahora mismo."},
      {who:"you",  it:"Il conto, per favore. Era deliziosa!", en:"La cuenta, por favor. ¡Estaba deliciosa!"},
      {who:"them", it:"Grazie! Ventotto euro in tutto.", en:"¡Gracias! Veintiocho euros en total."}
    ]},
  { title:"De compras",
    scene:"Buscas recuerdos en una tienda de Florencia.",
    lines:[
      {who:"them", it:"Buongiorno! Posso aiutarla?", en:"¡Buenos días! ¿Le puedo ayudar?"},
      {who:"you",  it:"Sì, grazie. Cerco qualcosa tipico fiorentino.", en:"Sí, gracias. Busco algo típico florentino."},
      {who:"them", it:"Abbiamo cuoio artigianale, ceramiche e profumi toscani.", en:"Tenemos cuero artesanal, cerámicas y perfumes toscanos."},
      {who:"you",  it:"Quanto costa quel portafoglio di cuoio?", en:"¿Cuánto cuesta esa cartera de cuero?"},
      {who:"them", it:"Quello è cinquanta euro. È fatto a mano a Firenze.", en:"Esa cuesta cincuenta euros. Está hecha a mano en Florencia."},
      {who:"you",  it:"Lo prendo. Può fare uno sconto?", en:"Me la llevo. ¿Puede hacer un descuento?"},
      {who:"them", it:"Le faccio quarantacinque. Solo per lei!", en:"Le hago cuarenta y cinco. ¡Solo para usted!"},
      {who:"you",  it:"Affare fatto! Pago con carta.", en:"¡Trato hecho! Pago con tarjeta."}
    ]},
  { title:"En la farmacia",
    scene:"Tienes dolor de estómago en Italia.",
    lines:[
      {who:"you",  it:"Buongiorno, ho un forte mal di stomaco.", en:"Buenos días, tengo un fuerte dolor de estómago."},
      {who:"them", it:"Mi dispiace. Ha mangiato qualcosa di strano?", en:"Lo siento. ¿Ha comido algo raro?"},
      {who:"you",  it:"Forse. Ho mangiato pesce ieri sera.", en:"Quizás. Comí pescado anoche."},
      {who:"them", it:"Potrebbe essere una piccola intossicazione. Le do del carbone vegetale.", en:"Podría ser una pequeña intoxicación. Le doy carbón activado."},
      {who:"you",  it:"Quante compresse prendo?", en:"¿Cuántas pastillas tomo?"},
      {who:"them", it:"Due adesso e due tra sei ore. Se non migliora, vada dal medico.", en:"Dos ahora y dos dentro de seis horas. Si no mejora, vaya al médico."},
      {who:"you",  it:"Grazie, quanto le devo?", en:"Gracias, ¿cuánto le debo?"},
      {who:"them", it:"Sei euro. Guarisca presto!", en:"Seis euros. ¡Que se mejore pronto!"}
    ]},
  { title:"Conversación con un italiano",
    scene:"Charla en el tren entre Roma y Nápoles.",
    lines:[
      {who:"them", it:"È la prima volta in Italia?", en:"¿Es la primera vez en Italia?"},
      {who:"you",  it:"Sì, è la mia prima volta. Sono spagnolo, di Barcellona.", en:"Sí, es mi primera vez. Soy español, de Barcelona."},
      {who:"them", it:"Barcellona! Bellissima città. E parla già bene l'italiano.", en:"¡Barcelona! Bellísima ciudad. Y ya habla bien el italiano."},
      {who:"you",  it:"Grazie — spagnolo e italiano sono molto simili, mi aiuta tanto.", en:"Gracias — el español y el italiano son muy similares, me ayuda mucho."},
      {who:"them", it:"Sì, le due lingue sono cugine! Come trova l'Italia?", en:"¡Sí, las dos lenguas son primas! ¿Qué le parece Italia?"},
      {who:"you",  it:"Fantastica! Il cibo, la storia, la gente — tutto è meraviglioso.", en:"¡Fantástica! La comida, la historia, la gente — todo es maravilloso."},
      {who:"them", it:"È il nostro paese, siamo felici che le piaccia!", en:"Es nuestro país, ¡nos alegra que le guste!"}
    ]}
];
