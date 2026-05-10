// Italian → Spanish Native Lesson Plan
// Italiano come lingua di istruzione, spagnolo come obiettivo
// vocab: { es: "parola spagnola", it: "traduzione italiana", ipa: "fonetica per italofoni" }
// Fonetica: j/ge/gi = H aspirata forte; ñ = gn italiana; ll = gli/y; rr = r vibrante forte;
//           v = b/v; h sempre muta; z = s (America Latina) o th inglese (Spagna);
//           c+e/i = s (LatAm) o th (Spagna); qu+e/i = k

var COURSE_IT_ES = [
  { day:1,
    title:"Saluti e cortesia",
    titleNative:"Saludos y cortesía",
    focus:"L'italiano e lo spagnolo condividono l'80% del vocabolario — il tuo vantaggio enorme! Le principali differenze riguardano la pronuncia. La 'j' spagnola è una 'h' fortemente aspirata (come la 'ch' tedesca di 'Bach'), e la 'h' è sempre muta. Oggi impariamo i saluti essenziali.",
    vocab:[
      {es:"Hola", it:"Ciao / Salve", ipa:"O-la"},
      {es:"Buenos días", it:"Buongiorno", ipa:"bwe-nos DI-as"},
      {es:"Buenas tardes", it:"Buon pomeriggio / Buonasera", ipa:"bwe-nas TAR-des"},
      {es:"Buenas noches", it:"Buonanotte", ipa:"bwe-nas NO-ches"},
      {es:"Adiós", it:"Arrivederci / Addio", ipa:"a-DYOS"},
      {es:"Por favor", it:"Per favore", ipa:"por fa-BOR"},
      {es:"Gracias", it:"Grazie", ipa:"GRA-syas"},
      {es:"De nada", it:"Prego / Non c'è di che", ipa:"de NA-da"},
      {es:"Lo siento", it:"Mi dispiace", ipa:"lo SYEN-to"},
      {es:"Perdón / Disculpe", it:"Scusi / Mi scusi", ipa:"per-DON / dis-KUL-pe"}
    ],
    phrases:[
      {es:"Buenos días, ¿cómo está usted?", it:"Buongiorno, come sta?", ipa:"bwe-nos DI-as, KO-mo es-TA us-TED"},
      {es:"¿Cómo se llama usted?", it:"Come si chiama?", ipa:"KO-mo se LYA-ma us-TED"},
      {es:"Me llamo Marco.", it:"Mi chiamo Marco.", ipa:"me LYA-mo MAR-ko"},
      {es:"Mucho gusto.", it:"Piacere.", ipa:"MU-cho GUS-to"},
      {es:"¿Cómo estás? (informal)", it:"Come stai?", ipa:"KO-mo es-TAS"},
      {es:"¡Todo bien, gracias!", it:"Tutto bene, grazie!", ipa:"TO-do BYEN, GRA-syas"}
    ],
    grammar:"In spagnolo esistono due forme per 'voi/tu': 'tú' (informale, per amici e famiglia) e 'usted' (formale, si coniuga come la terza persona singolare). 'Hola' funziona in tutti i contesti — non ha l'equivalente limitazione del nostro 'ciao'. La 'h' in spagnolo è SEMPRE muta: 'hola' = 'ola', 'hotel' = 'otel'.",
    practice:[
      "Saluta qualcuno con 'Buenos días' e chiedi '¿Cómo está usted?' (formale)",
      "Presentati: 'Me llamo ___. ¿Y usted?'",
      "Pratica 'Gracias' e 'De nada' in uno scambio immaginario"
    ]
  },
  { day:2,
    title:"Numeri dall'1 al 20",
    titleNative:"Números del 1 al 20",
    focus:"I numeri spagnoli sono quasi identici all'italiano — li riconoscerai quasi tutti. Attenzione a 'dieciséis' (16), 'diecisiete' (17), 'dieciocho' (18), 'diecinueve' (19): sono forme compatte simili all'italiano 'diciassette'. E ricorda: in spagnolo non ci sono consonanti doppie come in italiano.",
    vocab:[
      {es:"uno / una", it:"uno / una", ipa:"U-no / U-na"},
      {es:"dos", it:"due", ipa:"DOS"},
      {es:"tres", it:"tre", ipa:"TRES"},
      {es:"cuatro", it:"quattro", ipa:"KWA-tro"},
      {es:"cinco", it:"cinque", ipa:"SIN-ko"},
      {es:"seis", it:"sei", ipa:"SEIS"},
      {es:"siete", it:"sette", ipa:"SYE-te"},
      {es:"ocho", it:"otto", ipa:"O-cho"},
      {es:"nueve", it:"nove", ipa:"NWE-be"},
      {es:"diez", it:"dieci", ipa:"DYES"}
    ],
    phrases:[
      {es:"once / doce / trece", it:"undici / dodici / tredici", ipa:"ON-se / DO-se / TRE-se"},
      {es:"catorce / quince", it:"quattordici / quindici", ipa:"ka-TOR-se / KIN-se"},
      {es:"dieciséis / diecisiete", it:"sedici / diciassette", ipa:"dye-si-SEIS / dye-si-SYE-te"},
      {es:"dieciocho / diecinueve", it:"diciotto / diciannove", ipa:"dye-si-O-cho / dye-si-NWE-be"},
      {es:"veinte", it:"venti", ipa:"BEIN-te"},
      {es:"¿Cuántos años tienes?", it:"Quanti anni hai?", ipa:"KWAN-tos A-nyos TYE-nes"}
    ],
    grammar:"In spagnolo 'v' e 'b' si pronunciano quasi uguali — in molte varietà, 'v' suona come una 'b' dolce (fricativa bilabiale). Quindi 'nueve' si pronuncia 'NWE-be'. Per gli italofoni: non preoccuparti della distinzione v/b — i madrelingua stessi li pronunciano in modo simile. La 'z' in America Latina = 's'; in Spagna = 'th' inglese di 'think'.",
    practice:[
      "Conta da 1 a 20 in spagnolo ad alta voce",
      "Di la tua età: 'Tengo ___ años'",
      "Pratica i numeri composti 11-19: struttura simile all'italiano ma più compatta"
    ]
  },
  { day:3,
    title:"Colori e descrizioni",
    titleNative:"Colores y descripciones",
    focus:"I colori spagnoli sono quasi identici all'italiano — li riconoscerai tutti. Anche in spagnolo gli aggettivi concordano in genere e numero con il sostantivo. La 'j' in 'rojo' si pronuncia come una 'h' fortemente aspirata.",
    vocab:[
      {es:"rojo / roja", it:"rosso / rossa", ipa:"RO-ho / RO-ha"},
      {es:"azul", it:"azzurro / blu (invariabile)", ipa:"a-SUL"},
      {es:"verde", it:"verde", ipa:"BER-de"},
      {es:"amarillo / amarilla", it:"giallo / gialla", ipa:"a-ma-RI-lyo / a-ma-RI-lya"},
      {es:"blanco / blanca", it:"bianco / bianca", ipa:"BLAN-ko / BLAN-ka"},
      {es:"negro / negra", it:"nero / nera", ipa:"NE-gro / NE-gra"},
      {es:"naranja", it:"arancione (invariabile)", ipa:"na-RAN-ha"},
      {es:"morado / violeta", it:"viola / morado", ipa:"mo-RA-do / byo-LE-ta"},
      {es:"gris", it:"grigio (invariabile nel suffisso)", ipa:"GRIS"},
      {es:"marrón / café", it:"marrone / caffè", ipa:"ma-RRON / ka-FE"}
    ],
    phrases:[
      {es:"¿De qué color es?", it:"Di che colore è?", ipa:"de ke ko-LOR ES"},
      {es:"El coche es rojo.", it:"La macchina è rossa.", ipa:"el KO-che es RO-ho"},
      {es:"Me gusta el azul.", it:"Mi piace il blu.", ipa:"me GUS-ta el a-SUL"},
      {es:"Tengo el pelo negro.", it:"Ho i capelli neri.", ipa:"TEN-go el PE-lo NE-gro"},
      {es:"¡Qué bonito!", it:"Che bello!", ipa:"ke bo-NI-to"},
      {es:"¿Es grande o pequeño?", it:"È grande o piccolo?", ipa:"es GRAN-de o pe-KE-nyo"}
    ],
    grammar:"La 'j' spagnola (come in 'rojo') si pronuncia come una 'h' molto aspirata, simile alla 'ch' tedesca di 'Bach' o alla 'g' italiana di alcuni dialetti del Sud. Nei nostri IPA la segnaliamo con 'H'. Questa è la differenza fonetica più importante per l'italofono: 'jota' = H, non 'yo' né 'j' francese.",
    practice:[
      "Descrivi 5 oggetti della tua stanza usando i colori in spagnolo",
      "Pratica 'rojo', 'naranja', 'amarillo' — con la 'j' e la 'll' correttamente",
      "Di il colore dei tuoi vestiti oggi: 'Mi camisa es ___'"
    ]
  },
  { day:4,
    title:"La famiglia",
    titleNative:"La familia",
    focus:"Il vocabolario familiare spagnolo è quasi identico all'italiano. La differenza principale: in spagnolo 'll' si pronuncia come 'y' (in America Latina) o come 'gli' italiano (in Spagna). 'Familia' con una sola 'l' — non 'famiglia'!",
    vocab:[
      {es:"la madre / la mamá", it:"la madre / la mamma", ipa:"la MA-dre / la ma-MA"},
      {es:"el padre / el papá", it:"il padre / il papà", ipa:"el PA-dre / el pa-PA"},
      {es:"el hermano", it:"il fratello", ipa:"el er-MA-no"},
      {es:"la hermana", it:"la sorella", ipa:"la er-MA-na"},
      {es:"el hijo / la hija", it:"il figlio / la figlia", ipa:"el I-ho / la I-ha"},
      {es:"el abuelo / la abuela", it:"il nonno / la nonna", ipa:"el a-bwe-LO / la a-bwe-LA"},
      {es:"el tío / la tía", it:"lo zio / la zia", ipa:"el TI-o / la TI-a"},
      {es:"el primo / la prima", it:"il cugino / la cugina", ipa:"el PRI-mo / la PRI-ma"},
      {es:"el marido / el esposo", it:"il marito", ipa:"el ma-RI-do / el es-PO-so"},
      {es:"la esposa / la mujer", it:"la moglie", ipa:"la es-PO-sa / la mu-HER"}
    ],
    phrases:[
      {es:"Tengo dos hermanos y una hermana.", it:"Ho due fratelli e una sorella.", ipa:"TEN-go dos er-MA-nos i u-na er-MA-na"},
      {es:"Mi madre se llama Ana.", it:"Mia madre si chiama Ana.", ipa:"mi MA-dre se LYA-ma A-na"},
      {es:"¿Estás casado/a?", it:"Sei sposato/a?", ipa:"es-TAS ka-SA-do/a"},
      {es:"Tengo una familia grande.", it:"Ho una famiglia grande.", ipa:"TEN-go u-na fa-MI-lya GRAN-de"},
      {es:"Mis padres viven en Madrid.", it:"I miei genitori vivono a Madrid.", ipa:"mis PA-dres BI-ben en ma-DRID"},
      {es:"¿Cuántos hermanos tienes?", it:"Quanti fratelli hai?", ipa:"KWAN-tos er-MA-nos TYE-nes"}
    ],
    grammar:"'Hijo' e 'hija' (figlio/figlia) hanno la 'h' muta e la 'j' aspirata: si pronunciano 'I-ho' e 'I-ha'. 'Hermano' (fratello) si pronuncia 'er-MA-no' — la 'h' è sempre silenziosa. 'Se llama' (si chiama) ha 'll' che in America Latina suona 'y': 'se YA-ma'. In Spagna suona 'gli': 'se LYA-ma'.",
    practice:[
      "Descrivi la tua famiglia: 'En mi familia somos ___'",
      "Pratica i possessivi: mi (mio/mia), tu (tuo/tua), su (suo/sua)",
      "Presenta un familiare: 'Este es mi hermano, se llama ___'"
    ]
  },
  { day:5,
    title:"Cibo e bevande",
    titleNative:"Comida y bebida",
    focus:"Il vocabolario gastronomico spagnolo ha molte somiglianze con l'italiano. Alcune parole sono quasi identiche, altre no. Impara le essenziali per mangiare bene in qualsiasi paese di lingua spagnola.",
    vocab:[
      {es:"el pan", it:"il pane", ipa:"el PAN"},
      {es:"la pasta", it:"la pasta", ipa:"la PAS-ta"},
      {es:"la pizza", it:"la pizza", ipa:"la PI-tsa"},
      {es:"el queso", it:"il formaggio", ipa:"el KE-so"},
      {es:"la carne", it:"la carne", ipa:"la KAR-ne"},
      {es:"el pescado", it:"il pesce", ipa:"el pes-KA-do"},
      {es:"las verduras", it:"le verdure", ipa:"las ber-DU-ras"},
      {es:"el agua", it:"l'acqua", ipa:"el A-gwa"},
      {es:"el vino", it:"il vino", ipa:"el BI-no"},
      {es:"el café", it:"il caffè", ipa:"el ka-FE"}
    ],
    phrases:[
      {es:"Quisiera un café, por favor.", it:"Vorrei un caffè, per favore.", ipa:"ki-SYE-ra un ka-FE, por fa-BOR"},
      {es:"La cuenta, por favor.", it:"Il conto, per favore.", ipa:"la KWEN-ta, por fa-BOR"},
      {es:"¡Está delicioso!", it:"È delizioso!", ipa:"es-TA de-li-SYO-so"},
      {es:"Tengo hambre. / Tengo sed.", it:"Ho fame. / Ho sete.", ipa:"TEN-go AM-bre / TEN-go SED"},
      {es:"Soy vegetariano/a.", it:"Sono vegetariano/a.", ipa:"SOI be-he-ta-RYA-no/a"},
      {es:"¿Qué es esto?", it:"Che cos'è questo?", ipa:"ke es ES-to"}
    ],
    grammar:"'Quisiera' (vorrei) è il condizionale di 'querer' — equivale esattamente al nostro 'vorrei'. È la forma più educata per ordinare. 'Tengo hambre/sed' usa 'tener' (avere) come l'italiano 'ho fame/sete'. Il verbo 'tener' (tenere/avere) è molto più usato in spagnolo che in italiano — impara le sue forme: tengo, tienes, tiene, tenemos, tenéis, tienen.",
    practice:[
      "Ordina la tua bevanda preferita: 'Quisiera ___'",
      "Pratica: 'Tengo hambre' (ho fame) e 'Tengo sed' (ho sete)",
      "Di 3 cose che ti piacciono della cucina spagnola/latina usando 'Me gusta ___'"
    ]
  },
  { day:6,
    title:"Al ristorante",
    titleNative:"En el restaurante",
    focus:"Mangiare in un ristorante di lingua spagnola varia molto tra Spagna e America Latina. Impara a navigare il menù e gestire l'esperienza completa. 'Quisiera' è la tua parola magica per fare ordinazioni educate.",
    vocab:[
      {es:"el restaurante", it:"il ristorante", ipa:"el res-tau-RAN-te"},
      {es:"el camarero / la camarera", it:"il cameriere / la cameriera", ipa:"el ka-ma-RE-ro / la ka-ma-RE-ra"},
      {es:"el menú / la carta", it:"il menù", ipa:"el me-NU / la KAR-ta"},
      {es:"el entrante / el aperitivo", it:"l'antipasto", ipa:"el en-TRAN-te"},
      {es:"el plato principal", it:"il piatto principale", ipa:"el PLA-to prin-si-PAL"},
      {es:"el postre", it:"il dolce", ipa:"el POS-tre"},
      {es:"la reserva", it:"la prenotazione", ipa:"la re-SER-ba"},
      {es:"la propina", it:"la mancia", ipa:"la pro-PI-na"},
      {es:"la cuenta", it:"il conto", ipa:"la KWEN-ta"},
      {es:"la mesa", it:"il tavolo", ipa:"la ME-sa"}
    ],
    phrases:[
      {es:"Tengo una reserva a nombre de ___.", it:"Ho una prenotazione a nome di ___.", ipa:"TEN-go u-na re-SER-ba a NOM-bre de"},
      {es:"Una mesa para dos, por favor.", it:"Un tavolo per due, per favore.", ipa:"u-na ME-sa PA-ra DOS, por fa-BOR"},
      {es:"¿Qué me recomienda?", it:"Cosa mi consiglia?", ipa:"ke me re-ko-MYEN-da"},
      {es:"Quisiera el pollo, por favor.", it:"Vorrei il pollo, per favore.", ipa:"ki-SYE-ra el PO-lyo, por fa-BOR"},
      {es:"¿Está incluido el servicio?", it:"È incluso il servizio?", ipa:"es-TA in-klwi-DO el ser-BI-syo"},
      {es:"¿Podemos pagar por separado?", it:"Possiamo pagare separati?", ipa:"po-DE-mos pa-GAR por se-pa-RA-do"}
    ],
    grammar:"In molti paesi latinoamericani il cameriere si chiama 'mesero' (non 'camarero'). Per chiamarlo: in Spagna 'Oiga' o 'Por favor'; in America Latina '¡Joven!' (giovane) o '¡Señor!'. La propina (mancia) non è sempre inclusa — in America Latina si lascia il 10-15%, in Spagna non è obbligatoria.",
    practice:[
      "Simula di ordinare un pasto completo: entrante, piatto principale, dessert, bevanda",
      "Pratica: '¿Qué me recomienda?' — la domanda più utile al ristorante",
      "Impara: 'Sin gluten' (senza glutine), 'Sin lactosa' (senza lattosio)"
    ]
  },
  { day:7,
    title:"Il mercato e gli acquisti",
    titleNative:"El mercado y las compras",
    focus:"I mercati spagnoli e latinoamericani sono esperienze culturali imperdibili. In America Latina si usa 'un kilo', 'medio kilo' — simile all'italiano. Impara a fare acquisti come un locale.",
    vocab:[
      {es:"el mercado", it:"il mercato", ipa:"el mer-KA-do"},
      {es:"la tienda", it:"il negozio / il negozio", ipa:"la TYEN-da"},
      {es:"¿Cuánto cuesta?", it:"Quanto costa?", ipa:"KWAN-to KWES-ta"},
      {es:"caro / barato", it:"caro / economico", ipa:"KA-ro / ba-RA-to"},
      {es:"el kilo", it:"il chilo", ipa:"el KI-lo"},
      {es:"medio kilo", it:"mezzo chilo", ipa:"ME-dyo KI-lo"},
      {es:"la talla", it:"la taglia", ipa:"la TA-lya"},
      {es:"las rebajas / los descuentos", it:"i saldi", ipa:"las re-BA-has / los des-KWEN-tos"},
      {es:"el cambio", it:"il resto", ipa:"el KAM-byo"},
      {es:"el recibo", it:"lo scontrino / la ricevuta", ipa:"el re-SI-bo"}
    ],
    phrases:[
      {es:"¿Cuánto cuesta esto?", it:"Quanto costa questo?", ipa:"KWAN-to KWES-ta ES-to"},
      {es:"Es demasiado caro.", it:"È troppo caro.", ipa:"es de-ma-SYA-do KA-ro"},
      {es:"Quisiera medio kilo de tomates.", it:"Vorrei mezzo chilo di pomodori.", ipa:"ki-SYE-ra ME-dyo KI-lo de to-MA-tes"},
      {es:"¿Tienen esto en talla mediana?", it:"Avete questo in taglia media?", ipa:"TYE-nen ES-to en TA-lya me-DYA-na"},
      {es:"¿Puedo pagar con tarjeta?", it:"Posso pagare con carta?", ipa:"PWE-do pa-GAR kon tar-HE-ta"},
      {es:"¿Me da el recibo?", it:"Mi fa lo scontrino?", ipa:"me DA el re-SI-bo"}
    ],
    grammar:"'Tarjeta' (carta/tessera) ha la 'j' aspirata: tar-HE-ta. 'Rebajas' (saldi) ha due 'j' aspirate: re-BA-has. Ricorda: ogni 'j' spagnola = 'H' fortemente aspirata. Anche la 'g' prima di 'e' o 'i' si pronuncia come 'H': 'gente' = 'HEN-te', 'girar' = 'hi-RAR'. Stesso suono della 'j'.",
    practice:[
      "Pratica fare acquisti al mercato: chiedere il prezzo e quantità",
      "Di i prezzi in spagnolo: 3,50€ = 'tres euros con cincuenta'",
      "Simula di comprare vestiti: chiedere la taglia e provare"
    ]
  },
  { day:8,
    title:"La città e l'orientamento",
    titleNative:"La ciudad y orientación",
    focus:"Navigare le città di lingua spagnola richiede vocabolario specifico. Alcune grandi città come Buenos Aires, Città del Messico o Madrid hanno sistemi urbani complessi. Impara a chiedere e dare indicazioni.",
    vocab:[
      {es:"la calle", it:"la strada / la via", ipa:"la KA-lye"},
      {es:"la plaza", it:"la piazza", ipa:"la PLA-sa"},
      {es:"el centro histórico", it:"il centro storico", ipa:"el SEN-tro is-TO-ri-ko"},
      {es:"la iglesia", it:"la chiesa", ipa:"la i-GLE-sya"},
      {es:"el museo", it:"il museo", ipa:"el mu-SE-o"},
      {es:"la estación", it:"la stazione", ipa:"la es-ta-SYON"},
      {es:"a la derecha / a la izquierda", it:"a destra / a sinistra", ipa:"a la de-RE-cha / a la is-KYER-da"},
      {es:"todo recto", it:"sempre dritto", ipa:"TO-do REK-to"},
      {es:"cerca / lejos", it:"vicino / lontano", ipa:"SER-ka / LE-hos"},
      {es:"el semáforo", it:"il semaforo", ipa:"el se-MA-fo-ro"}
    ],
    phrases:[
      {es:"¿Dónde está la estación?", it:"Dov'è la stazione?", ipa:"DON-de es-TA la es-ta-SYON"},
      {es:"¿Cómo llego al museo?", it:"Come arrivo al museo?", ipa:"KO-mo LYE-go al mu-SE-o"},
      {es:"¿Está lejos de aquí?", it:"È lontano da qui?", ipa:"es-TA LE-hos de a-KI"},
      {es:"Gire a la derecha en el semáforo.", it:"Giri a destra al semaforo.", ipa:"HI-re a la de-RE-cha en el se-MA-fo-ro"},
      {es:"Estoy perdido/a.", it:"Sono perso/a.", ipa:"es-TOI per-DI-do/a"},
      {es:"¿Me puede ayudar?", it:"Mi può aiutare?", ipa:"me PWE-de a-yu-DAR"}
    ],
    grammar:"'¿Dónde está?' = 'dov'è?' — la domanda più utile di qualsiasi città. In spagnolo 'donde' porta l'accento quando è interrogativo: '¿Dónde?' (dove?). 'Izquierda' (sinistra) è una delle parole più difficili per l'italofono: is-KYER-da. La 'z' = 's' in America Latina. La 'qu' = 'k' sempre.",
    practice:[
      "Pratica chiedere indicazioni per l'hotel, la stazione e il museo",
      "Memorizza: 'a la derecha' (destra) e 'a la izquierda' (sinistra) — essenziali",
      "Impara: 'Perdone, ¿dónde está…?' — la frase più importante del viaggiatore"
    ]
  },
  { day:9,
    title:"I trasporti",
    titleNative:"Los transportes",
    focus:"Il sistema di trasporti nei paesi di lingua spagnola varia molto. In Spagna ci sono treni AVE ad alta velocità; in America Latina predominano autobus e metro. Impara il vocabolario essenziale.",
    vocab:[
      {es:"el tren", it:"il treno", ipa:"el TREN"},
      {es:"el autobús / el colectivo", it:"l'autobus", ipa:"el au-to-BUS / el ko-lek-TI-bo"},
      {es:"el metro / el subte", it:"la metropolitana", ipa:"el ME-tro / el SUB-te"},
      {es:"el taxi", it:"il taxi", ipa:"el TAK-si"},
      {es:"el billete / el boleto", it:"il biglietto", ipa:"el bi-LYE-te / el bo-LE-to"},
      {es:"el andén", it:"il binario / la banchina", ipa:"el an-DEN"},
      {es:"la salida", it:"la partenza / l'uscita", ipa:"la sa-LI-da"},
      {es:"la llegada", it:"l'arrivo", ipa:"la lye-GA-da"},
      {es:"con retraso", it:"in ritardo", ipa:"kon re-TRA-so"},
      {es:"el aeropuerto", it:"l'aeroporto", ipa:"el a-e-ro-PWER-to"}
    ],
    phrases:[
      {es:"Un billete para Madrid, por favor.", it:"Un biglietto per Madrid, per favore.", ipa:"un bi-LYE-te PA-ra ma-DRID, por fa-BOR"},
      {es:"¿A qué hora sale el tren?", it:"A che ora parte il treno?", ipa:"a ke O-ra SA-le el TREN"},
      {es:"El tren lleva retraso.", it:"Il treno è in ritardo.", ipa:"el TREN LYE-ba re-TRA-so"},
      {es:"¿Dónde se compran los billetes?", it:"Dove si comprano i biglietti?", ipa:"DON-de se KOM-pran los bi-LYE-tes"},
      {es:"¿Tengo que cambiar de tren?", it:"Devo cambiare treno?", ipa:"TEN-go ke kam-BYAR de TREN"},
      {es:"Pare aquí, por favor.", it:"Mi fermi qui, grazie.", ipa:"PA-re a-KI, por fa-BOR"}
    ],
    grammar:"'Tengo que + infinitivo' = 'devo + infinitivo': 'Tengo que cambiar' (devo cambiare), 'Tengo que pagar' (devo pagare). 'Tener que' esprime obbligo come il nostro 'dovere'. Vocabolario variabile: 'billete' (Spagna) = 'boleto' (America Latina); 'autobús' (Spagna) = 'colectivo/bus/camión' (America Latina). Impara entrambe le versioni!",
    practice:[
      "Pratica comprare un biglietto del treno per la tua città spagnola preferita",
      "Impara: 'Ida' (andata), 'Ida y vuelta' (andata e ritorno) — indispensabili alla biglietteria",
      "Pratica chiedere orari: '¿A qué hora sale/llega el tren a ___?'"
    ]
  },
  { day:10,
    title:"L'albergo e l'alloggio",
    titleNative:"El hotel y el alojamiento",
    focus:"Alloggiare in un paese di lingua spagnola richiede vocabolario specifico. Molte parole sono simili all'italiano, ma alcune sono diverse. Impara a gestire check-in, richieste e problemi.",
    vocab:[
      {es:"el hotel", it:"l'hotel / l'albergo", ipa:"el o-TEL"},
      {es:"la habitación", it:"la camera / la stanza", ipa:"la a-bi-ta-SYON"},
      {es:"la recepción", it:"la reception", ipa:"la re-sep-SYON"},
      {es:"el desayuno", it:"la colazione", ipa:"el de-sa-YU-no"},
      {es:"la toalla", it:"l'asciugamano", ipa:"la to-A-lya"},
      {es:"la almohada", it:"il cuscino", ipa:"la al-mo-A-da"},
      {es:"la calefacción", it:"il riscaldamento", ipa:"la ka-le-fak-SYON"},
      {es:"el aire acondicionado", it:"l'aria condizionata", ipa:"el A-i-re a-kon-di-syo-NA-do"},
      {es:"el aparcamiento / el estacionamiento", it:"il parcheggio", ipa:"el a-par-ka-MYEN-to"},
      {es:"la llave", it:"la chiave", ipa:"la LYA-be"}
    ],
    phrases:[
      {es:"Tengo una reserva.", it:"Ho una prenotazione.", ipa:"TEN-go u-na re-SER-ba"},
      {es:"Quisiera una habitación doble.", it:"Vorrei una camera doppia.", ipa:"ki-SYE-ra u-na a-bi-ta-SYON DO-ble"},
      {es:"¿Está incluido el desayuno?", it:"È inclusa la colazione?", ipa:"es-TA in-klwi-DO el de-sa-YU-no"},
      {es:"¿Hay Wi-Fi?", it:"C'è il Wi-Fi?", ipa:"AI WI-fi"},
      {es:"¿Puedo tener más toallas?", it:"Posso avere più asciugamani?", ipa:"PWE-do te-NER mas to-A-lyas"},
      {es:"¿A qué hora es el check-out?", it:"A che ora è il check-out?", ipa:"a ke O-ra es el CHEK-aut"}
    ],
    grammar:"'¿Hay?' = 'c'è?/ci sono?' — una delle parole più utili in spagnolo. 'Hay' (si pronuncia 'AI') vale sia per singolare che per plurale: '¿Hay Wi-Fi?' (c'è il Wi-Fi?), '¿Hay toallas?' (ci sono asciugamani?). A differenza dell'italiano, non cambia tra singolare e plurale. Tipi di camera: 'individual' (singola), 'doble' (doppia), 'suite' (suite).",
    practice:[
      "Simula il check-in in un hotel di lingua spagnola",
      "Pratica chiedere cose in camera: asciugamani, cuscini, sapone",
      "Impara le varianti: 'cuarto' (Mexico), 'pieza' (Cile) = camera/stanza"
    ]
  },
  { day:11,
    title:"Il tempo e il clima",
    titleNative:"El tiempo y el clima",
    focus:"Il clima nei paesi di lingua spagnola varia enormemente — dalle nevicate di Madrid ai tropici dell'America Centrale. Il vocabolario meteorologico ha molti cognati con l'italiano.",
    vocab:[
      {es:"el sol / soleado", it:"il sole / soleggiato", ipa:"el SOL / so-le-A-do"},
      {es:"la lluvia", it:"la pioggia", ipa:"la LYU-bya"},
      {es:"la nieve", it:"la neve", ipa:"la NYE-be"},
      {es:"el viento", it:"il vento", ipa:"el BYEN-to"},
      {es:"la niebla", it:"la nebbia", ipa:"la NYE-bla"},
      {es:"nublado", it:"nuvoloso", ipa:"nu-BLA-do"},
      {es:"calor / frío", it:"caldo / freddo", ipa:"ka-LOR / FRI-o"},
      {es:"la temperatura", it:"la temperatura", ipa:"la tem-pe-ra-TU-ra"},
      {es:"el pronóstico del tiempo", it:"la previsione del tempo", ipa:"el pro-NOS-ti-ko del TYEM-po"},
      {es:"la tormenta", it:"il temporale / la tempesta", ipa:"la tor-MEN-ta"}
    ],
    phrases:[
      {es:"¿Qué tiempo hace hoy?", it:"Che tempo fa oggi?", ipa:"ke TYEM-po A-se OI"},
      {es:"Hace mucho calor.", it:"Fa molto caldo.", ipa:"A-se MU-cho ka-LOR"},
      {es:"Está lloviendo.", it:"Sta piovendo.", ipa:"es-TA lyo-BYEN-do"},
      {es:"Nieva en la montaña.", it:"Nevica in montagna.", ipa:"NYE-ba en la mon-TA-nya"},
      {es:"¿Cuántos grados hay?", it:"Quanti gradi ci sono?", ipa:"KWAN-tos GRA-dos AI"},
      {es:"Llevaré un paraguas.", it:"Porterò un ombrello.", ipa:"lye-ba-RE un pa-RA-gwas"}
    ],
    grammar:"'Hace calor/frío' usa 'hacer' come l'italiano 'fare': 'hace calor' = 'fa caldo'. Per precipitazioni: 'Llueve' (piove) o 'Está lloviendo' (sta piovendo) — entrambe corrette. 'Está lloviendo' usa il gerundio, più comune in America Latina. Le stagioni: primavera, verano (estate), otoño (autunno), invierno (inverno). Attenzione: 'verano' ≠ 'verão' portoghese!",
    practice:[
      "Descrivi il tempo di oggi in spagnolo",
      "Pratica: 'Hay veinte grados' (ci sono venti gradi) — temperatura con 'hay'",
      "Impara le stagioni spagnole: ricorda che in America Latina sono invertite rispetto all'Europa!"
    ]
  },
  { day:12,
    title:"Abbigliamento e moda",
    titleNative:"Ropa y moda",
    focus:"La moda spagnola e latinoamericana è vivace e variegata. Il vocabolario dell'abbigliamento ha molti cognati con l'italiano e alcune differenze regionali interessanti.",
    vocab:[
      {es:"la camisa / la blusa", it:"la camicia / la camicetta", ipa:"la ka-MI-sa / la BLU-sa"},
      {es:"los pantalones", it:"i pantaloni", ipa:"los pan-ta-LO-nes"},
      {es:"la falda", it:"la gonna", ipa:"la FAL-da"},
      {es:"el vestido", it:"il vestito / l'abito", ipa:"el bes-TI-do"},
      {es:"los zapatos", it:"le scarpe", ipa:"los sa-PA-tos"},
      {es:"el abrigo", it:"il cappotto", ipa:"el a-BRI-go"},
      {es:"la chaqueta", it:"la giacca", ipa:"la cha-KE-ta"},
      {es:"los jeans / los vaqueros", it:"i jeans", ipa:"los JINS / los ba-KE-ros"},
      {es:"el cinturón", it:"la cintura", ipa:"el sin-tu-RON"},
      {es:"los guantes", it:"i guanti", ipa:"los GWAN-tes"}
    ],
    phrases:[
      {es:"¿Puedo probármelo?", it:"Posso provarlo?", ipa:"PWE-do pro-BAR-me-lo"},
      {es:"¿Qué talla usa?", it:"Che taglia porta?", ipa:"ke TA-lya U-sa"},
      {es:"Es demasiado grande/pequeño.", it:"È troppo grande/piccolo.", ipa:"es de-ma-SYA-do GRAN-de / pe-KE-nyo"},
      {es:"¿Lo tienen en otro color?", it:"Lo avete in un altro colore?", ipa:"lo TYEN-en en O-tro ko-LOR"},
      {es:"¿Me queda bien?", it:"Mi sta bene?", ipa:"me KE-da BYEN"},
      {es:"Me lo llevo.", it:"Lo prendo.", ipa:"me lo LYE-bo"}
    ],
    grammar:"'¿Me queda bien?' = 'mi sta bene?' — usa 'quedar' (stare/rimanere) per descrivere come sta un indumento. 'Quedar' in spagnolo ha molti usi: 'quedar con alguien' (vedere qualcuno), 'quedar bien' (stare bene/fare bella figura), 'quedar de acuerdo' (mettersi d'accordo). Molto più versatile del nostro 'stare'.",
    practice:[
      "Pratica la sequenza completa: entrare, chiedere la taglia, provarsi, decidere",
      "Di cosa indossi oggi: 'Hoy llevo ___ y ___'",
      "Impara le marche spagnole: Zara, Mango, El Corte Inglés, Massimo Dutti"
    ]
  },
  { day:13,
    title:"Il corpo e la salute",
    titleNative:"El cuerpo y la salud",
    focus:"Saper descrivere sintomi all'estero è fondamentale. Il vocabolario medico spagnolo ha una base latina molto simile all'italiano — riconoscerai quasi tutto. Impara anche i numeri di emergenza.",
    vocab:[
      {es:"la cabeza", it:"la testa", ipa:"la ka-BE-sa"},
      {es:"el dolor de cabeza", it:"il mal di testa", ipa:"el do-LOR de ka-BE-sa"},
      {es:"la espalda", it:"la schiena", ipa:"la es-PAL-da"},
      {es:"el estómago", it:"lo stomaco", ipa:"el es-TO-ma-go"},
      {es:"la fiebre", it:"la febbre", ipa:"la FYE-bre"},
      {es:"el resfriado", it:"il raffreddore", ipa:"el res-frya-DO"},
      {es:"la farmacia", it:"la farmacia", ipa:"la far-MA-sya"},
      {es:"el médico", it:"il medico", ipa:"el ME-di-ko"},
      {es:"la receta", it:"la ricetta medica", ipa:"la re-SE-ta"},
      {es:"el hospital", it:"l'ospedale", ipa:"el os-pi-TAL"}
    ],
    phrases:[
      {es:"Me duele la cabeza.", it:"Mi fa male la testa.", ipa:"me DWE-le la ka-BE-sa"},
      {es:"Tengo fiebre.", it:"Ho la febbre.", ipa:"TEN-go FYE-bre"},
      {es:"Necesito un médico.", it:"Ho bisogno di un medico.", ipa:"ne-se-SI-to un ME-di-ko"},
      {es:"¿Dónde está la farmacia más cercana?", it:"Dov'è la farmacia più vicina?", ipa:"DON-de es-TA la far-MA-sya mas ser-KA-na"},
      {es:"Soy alérgico/a a ___.", it:"Sono allergico/a a ___.", ipa:"SOI a-LER-hi-ko/a a"},
      {es:"¡Llame a una ambulancia!", it:"Chiami un'ambulanza!", ipa:"LYA-me a u-na am-bu-LAN-sya"}
    ],
    grammar:"'Me duele ___' = 'mi fa male ___'. Per il plurale: 'Me duelen los pies' (mi fanno male i piedi). Funziona come il nostro 'fare male': il verbo concorda con la parte del corpo. 'Necesito' (ho bisogno di / devo) = da 'necesitar'. Numeri di emergenza spagnoli: 112 (emergenza generale UE), 061 (ambulanza Spagna). In America Latina varia per paese.",
    practice:[
      "Pratica descrivere sintomi comuni in spagnolo",
      "Impara: 'Necesito...' (ho bisogno di...) — essenziale in qualsiasi emergenza",
      "Pratica: 'Soy alérgico/a a la penicilina' (sono allergico alla penicillina)"
    ]
  },
  { day:14,
    title:"Il lavoro e le professioni",
    titleNative:"El trabajo y las profesiones",
    focus:"Il vocabolario professionale spagnolo ha una base latina molto simile all'italiano. Parlare del proprio lavoro è una delle prime conversazioni con gli ispanofoni.",
    vocab:[
      {es:"el trabajo", it:"il lavoro", ipa:"el tra-BA-ho"},
      {es:"la empresa", it:"l'azienda / l'impresa", ipa:"la em-PRE-sa"},
      {es:"el/la colega", it:"il/la collega", ipa:"el/la ko-LE-ga"},
      {es:"el jefe / la jefa", it:"il capo / la capa", ipa:"el HE-fe / la HE-fa"},
      {es:"la reunión", it:"la riunione", ipa:"la re-u-NYON"},
      {es:"el contrato", it:"il contratto", ipa:"el kon-TRA-to"},
      {es:"el sueldo / el salario", it:"lo stipendio / il salario", ipa:"el SWEL-do / el sa-LA-ryo"},
      {es:"el médico", it:"il medico", ipa:"el ME-di-ko"},
      {es:"el abogado", it:"l'avvocato", ipa:"el a-bo-GA-do"},
      {es:"el/la maestro/a / el/la profesor/a", it:"l'insegnante / il professore", ipa:"el ma-ES-tro / el pro-fe-SOR"}
    ],
    phrases:[
      {es:"¿A qué te dedicas?", it:"Che lavoro fai?", ipa:"a ke te de-DI-kas"},
      {es:"Soy ingeniero/a.", it:"Sono ingegnere.", ipa:"SOI in-he-NYE-ro/a"},
      {es:"Trabajo en un banco.", it:"Lavoro in una banca.", ipa:"tra-BA-ho en un BAN-ko"},
      {es:"Estoy desempleado/a.", it:"Sono disoccupato/a.", ipa:"es-TOI des-em-ple-A-do/a"},
      {es:"Tengo una reunión importante.", it:"Ho una riunione importante.", ipa:"TEN-go u-na re-u-NYON im-por-TAN-te"},
      {es:"Estoy teletrabajando.", it:"Sono in smart working.", ipa:"es-TOI te-le-tra-ba-HAN-do"}
    ],
    grammar:"Per dire la propria professione in spagnolo, generalmente NON si usa l'articolo: 'Soy médico' (sono medico), 'Soy ingeniero'. Come in italiano. 'Trabajo' (lavoro) da 'trabajar' — verbo regolare in -ar: trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan. I verbi in -ar sono il gruppo più grande e regolare dello spagnolo.",
    practice:[
      "Presenta la tua professione e azienda in spagnolo",
      "Pratica: 'Trabajo como ___ en ___' (lavoro come ___ in ___)",
      "Impara 5 professioni del tuo settore in spagnolo"
    ]
  },
  { day:15,
    title:"La tecnologia",
    titleNative:"La tecnología",
    focus:"Il vocabolario tecnologico è molto internazionale — la maggior parte dei termini sono anglicismi usati ugualmente in italiano e spagnolo. Impara le varianti proprie dello spagnolo.",
    vocab:[
      {es:"el teléfono / el smartphone", it:"il telefono / lo smartphone", ipa:"el te-LE-fo-no"},
      {es:"el ordenador / el computador", it:"il computer / il portatile", ipa:"el or-de-na-DOR / el kom-pu-ta-DOR"},
      {es:"la red / internet", it:"la rete / internet", ipa:"la RED"},
      {es:"la contraseña", it:"la password", ipa:"la kon-tra-SE-nya"},
      {es:"la aplicación / la app", it:"l'applicazione / l'app", ipa:"la a-pli-ka-SYON"},
      {es:"el cargador", it:"il caricatore", ipa:"el kar-ga-DOR"},
      {es:"la batería", it:"la batteria", ipa:"la ba-te-RI-a"},
      {es:"descargar", it:"scaricare", ipa:"des-kar-GAR"},
      {es:"compartir", it:"condividere", ipa:"kom-par-TIR"},
      {es:"las redes sociales", it:"i social media", ipa:"las RE-des so-SYA-les"}
    ],
    phrases:[
      {es:"Mi batería está descargada.", it:"La mia batteria è scarica.", ipa:"mi ba-te-RI-a es-TA des-kar-GA-da"},
      {es:"¿Tienes el cargador?", it:"Hai il caricatore?", ipa:"TYE-nes el kar-ga-DOR"},
      {es:"¿Puedes enviarlo por WhatsApp?", it:"Puoi mandarlo per WhatsApp?", ipa:"PWE-des en-BYAR-lo por WATS-ap"},
      {es:"La conexión es lenta.", it:"La connessione è lenta.", ipa:"la ko-nek-SYON es LEN-ta"},
      {es:"¿Cuál es la contraseña del Wi-Fi?", it:"Qual è la password del Wi-Fi?", ipa:"kwal es la kon-tra-SE-nya del WI-fi"},
      {es:"¿Cómo se dice en español?", it:"Come si dice in spagnolo?", ipa:"KO-mo se DI-se en es-pa-NYOL"}
    ],
    grammar:"'Ordenador' (Spagna) = 'computador/computadora' (America Latina) = computer. 'Contraseña' = password — letteralmente 'parola di contro-segno'. '¿Puedes?' = 'puoi?' da 'poder': puedo, puedes, puede, podemos, podéis, pueden. 'Poder + infinitivo' funziona esattamente come 'potere + infinitivo' in italiano.",
    practice:[
      "Pratica descrivere un problema tecnologico in spagnolo",
      "Impara la domanda del Wi-Fi: '¿Cuál es la contraseña del Wi-Fi?' — indispensabile",
      "Di quali app usi di più e come si chiamano in spagnolo"
    ]
  },
  { day:16,
    title:"Natura e paesaggi",
    titleNative:"Naturaleza y paisajes",
    focus:"Il mondo di lingua spagnola abbraccia paesaggi straordinari: le Ande, l'Amazzonia, i Caraibi, la Patagonia, le pianure della Castiglia. Il vocabolario naturale ha radici latine molto familiari.",
    vocab:[
      {es:"la montaña", it:"la montagna", ipa:"la mon-TA-nya"},
      {es:"el mar", it:"il mare", ipa:"el MAR"},
      {es:"el lago", it:"il lago", ipa:"el LA-go"},
      {es:"el río", it:"il fiume", ipa:"el RRI-o"},
      {es:"el bosque", it:"il bosco / la foresta", ipa:"el BOS-ke"},
      {es:"la playa", it:"la spiaggia", ipa:"la PLA-ya"},
      {es:"el volcán", it:"il vulcano", ipa:"el bol-KAN"},
      {es:"la colina", it:"la collina", ipa:"la ko-LI-na"},
      {es:"el atardecer", it:"il tramonto", ipa:"el a-tar-de-SER"},
      {es:"el campo", it:"la campagna", ipa:"el KAM-po"}
    ],
    phrases:[
      {es:"¡Qué bello paisaje!", it:"Che bel paesaggio!", ipa:"ke BE-lyo pai-SA-he"},
      {es:"Quiero hacer una excursión.", it:"Voglio fare un'escursione.", ipa:"KYE-ro a-SER u-na eks-kur-SYON"},
      {es:"El mar está tranquilo hoy.", it:"Il mare è calmo oggi.", ipa:"el MAR es-TA tran-KI-lo OI"},
      {es:"Es un área protegida.", it:"È un'area protetta.", ipa:"es un A-re-a pro-te-HI-da"},
      {es:"Vamos al lago mañana.", it:"Andiamo al lago domani.", ipa:"BA-mos al LA-go ma-NYA-na"},
      {es:"El atardecer sobre los Andes es magnífico.", it:"Il tramonto sulle Ande è magnifico.", ipa:"el a-tar-de-SER SO-bre los AN-des es ma-NI-fi-ko"}
    ],
    grammar:"'Quiero + infinitivo' = 'voglio + infinitivo': 'Quiero ir' (voglio andare), 'Quiero ver' (voglio vedere). Per essere più educati: 'Quisiera' (vorrei) = condizionale. La stessa differenza dell'italiano 'voglio' vs 'vorrei'. 'Río' (fiume) — la 'r' iniziale di parola si pronuncia sempre vibrante forte, come 'rr' interna: RRI-o.",
    practice:[
      "Descrivi il paesaggio della tua regione nativa in spagnolo",
      "Impara i grandi accidenti geografici del mondo ispanofono: Ande, Amazzonia, Patagonia, Caraibi",
      "Pratica: 'Quiero visitar ___' (voglio visitare ___)"
    ]
  },
  { day:17,
    title:"Arte e cultura",
    titleNative:"Arte y cultura",
    focus:"Il mondo di lingua spagnola ha prodotto arte e cultura di portata mondiale: Velázquez, Goya, Picasso, García Márquez, Borges, Frida Kahlo. Il vocabolario artistico è molto accessibile.",
    vocab:[
      {es:"el cuadro / la pintura", it:"il dipinto / il quadro", ipa:"el KWA-dro / la pin-TU-ra"},
      {es:"la escultura", it:"la scultura", ipa:"la es-kul-TU-ra"},
      {es:"el museo", it:"il museo", ipa:"el mu-SE-o"},
      {es:"la catedral", it:"la cattedrale", ipa:"la ka-te-DRAL"},
      {es:"el Renacimiento", it:"il Rinascimento", ipa:"el re-na-si-MYEN-to"},
      {es:"la obra maestra", it:"il capolavoro", ipa:"la O-bra ma-ES-tra"},
      {es:"el pintor / la pintora", it:"il pittore / la pittrice", ipa:"el pin-TOR / la pin-TO-ra"},
      {es:"la ópera", it:"l'opera lirica", ipa:"la O-pe-ra"},
      {es:"el patrimonio", it:"il patrimonio", ipa:"el pa-tri-MO-nyo"},
      {es:"la entrada", it:"il biglietto d'ingresso", ipa:"la en-TRA-da"}
    ],
    phrases:[
      {es:"¿Cuánto cuesta la entrada?", it:"Quanto costa il biglietto?", ipa:"KWAN-to KWES-ta la en-TRA-da"},
      {es:"Quisiera una entrada con descuento.", it:"Vorrei un biglietto ridotto.", ipa:"ki-SYE-ra u-na en-TRA-da kon des-KWEN-to"},
      {es:"¿Quién pintó este cuadro?", it:"Chi ha dipinto questo quadro?", ipa:"kyen pin-TO es-te KWA-dro"},
      {es:"Está prohibido tocar las obras.", it:"È vietato toccare le opere.", ipa:"es-TA pro-i-BI-do to-KAR las O-bras"},
      {es:"¿Puedo hacer fotos?", it:"Posso fare fotografie?", ipa:"PWE-do a-SER FO-tos"},
      {es:"Este cuadro es del siglo XVII.", it:"Questo dipinto è del Seicento.", ipa:"ES-te KWA-dro es del SI-glo dyes-i-SYE-te"}
    ],
    grammar:"I secoli in spagnolo si usano con numeri romani o ordinali: 'el siglo XV' (il Quattrocento), 'el siglo XVI' (il Cinquecento). Il sistema è più semplice dell'italiano Quattrocento/Cinquecento. Grandi artisti ispanofoni: Diego Velázquez, Francisco Goya, Pablo Picasso (spagnoli); Diego Rivera, Frida Kahlo (messicani).",
    practice:[
      "Visita virtualmente un museo spagnolo o latinoamericano e pratica il vocabolario",
      "Impara i nomi in spagnolo di artisti famosi del mondo ispanofono",
      "Pratica chiedere informazioni al museo: orari, prezzi, audioguide"
    ]
  },
  { day:18,
    title:"Sport e tempo libero",
    titleNative:"Deportes y tiempo libre",
    focus:"Il calcio (fútbol) è una passione in tutto il mondo di lingua spagnola. Ma ci sono anche molti altri sport. Il vocabolario sportivo ha molti internazionalismi e cognati con l'italiano.",
    vocab:[
      {es:"el fútbol", it:"il calcio", ipa:"el FUT-bol"},
      {es:"el partido", it:"la partita", ipa:"el par-TI-do"},
      {es:"el equipo", it:"la squadra", ipa:"el e-KI-po"},
      {es:"el entrenamiento", it:"l'allenamento", ipa:"el en-tre-na-MYEN-to"},
      {es:"el gimnasio", it:"la palestra", ipa:"el him-NA-syo"},
      {es:"nadar", it:"nuotare", ipa:"na-DAR"},
      {es:"correr", it:"correre", ipa:"ko-RRER"},
      {es:"la bicicleta", it:"la bicicletta", ipa:"la bi-si-KLE-ta"},
      {es:"el/la aficionado/a / el/la hincha", it:"il tifoso / la tifosa", ipa:"el a-fi-syo-NA-do / el IN-cha"},
      {es:"ganar / perder", it:"vincere / perdere", ipa:"ga-NAR / per-DER"}
    ],
    phrases:[
      {es:"¿Viste el partido de ayer?", it:"Hai visto la partita ieri?", ipa:"BIS-te el par-TI-do de a-YER"},
      {es:"¿De qué equipo eres?", it:"Di che squadra sei?", ipa:"de ke e-KI-po E-res"},
      {es:"¡Vamos al estadio!", it:"Andiamo allo stadio!", ipa:"BA-mos al es-TA-dyo"},
      {es:"Hago jogging cada mañana.", it:"Faccio jogging ogni mattina.", ipa:"A-go JO-ging KA-da ma-NYA-na"},
      {es:"Me gusta nadar en el mar.", it:"Mi piace nuotare in mare.", ipa:"me GUS-ta na-DAR en el MAR"},
      {es:"¡Hemos ganado!", it:"Abbiamo vinto!", ipa:"E-mos ga-NA-do"}
    ],
    grammar:"'Me gusta' = 'mi piace'. Funziona identicamente: 'Me gusta nadar' (mi piace nuotare), 'Me gusta el fútbol' (mi piace il calcio), 'Me gustan los deportes' (mi piacciono gli sport). La differenza è solo nel plurale: 'me gusta' (singolare) → 'me gustan' (plurale). Grandi club spagnoli: Real Madrid, FC Barcelona, Atlético de Madrid.",
    practice:[
      "Di quali sport ti piacciono usando 'Me gusta ___' o 'Me gustan ___'",
      "Impara il nome dei grandi club di calcio del mondo ispanofono",
      "Pratica parlare dei tuoi hobby e tempo libero in spagnolo"
    ]
  },
  { day:19,
    title:"Viaggi e turismo",
    titleNative:"Viajes y turismo",
    focus:"Il mondo di lingua spagnola comprende 21 paesi su 4 continenti — ogni destinazione ha le sue peculiarità. Impara a pianificare viaggi e muoverti come un viaggiatore esperto.",
    vocab:[
      {es:"el viaje", it:"il viaggio", ipa:"el BYA-he"},
      {es:"las vacaciones", it:"le vacanze", ipa:"las ba-ka-SYO-nes"},
      {es:"el pasaporte", it:"il passaporto", ipa:"el pa-sa-POR-te"},
      {es:"la maleta", it:"la valigia", ipa:"la ma-LE-ta"},
      {es:"la guía turística", it:"la guida turistica", ipa:"la GI-a tu-RIS-ti-ka"},
      {es:"el mapa", it:"la mappa / la cartina", ipa:"el MA-pa"},
      {es:"la fotografía / la foto", it:"la fotografia", ipa:"la fo-to-gra-FI-a"},
      {es:"el recuerdo / el souvenir", it:"il souvenir / il ricordo", ipa:"el re-KWER-do"},
      {es:"el seguro de viaje", it:"l'assicurazione di viaggio", ipa:"el se-GU-ro de BYA-he"},
      {es:"la excursión", it:"l'escursione / la gita", ipa:"la eks-kur-SYON"}
    ],
    phrases:[
      {es:"Es mi primera vez en España.", it:"È la mia prima volta in Spagna.", ipa:"es mi pri-ME-ra BES en es-PA-nya"},
      {es:"¿Qué hay que ver aquí?", it:"Cosa c'è da vedere qui?", ipa:"ke AI ke BER a-KI"},
      {es:"¿Puedo hacer una foto?", it:"Posso fare una fotografia?", ipa:"PWE-do a-SER u-na FO-to"},
      {es:"¿Cuánto dura la excursión?", it:"Quanto dura l'escursione?", ipa:"KWAN-to DU-ra la eks-kur-SYON"},
      {es:"Busco un hotel barato.", it:"Cerco un hotel economico.", ipa:"BUS-ko un o-TEL ba-RA-to"},
      {es:"¿Cuándo cierra el museo?", it:"Quando chiude il museo?", ipa:"KWAN-do SYE-rra el mu-SE-o"}
    ],
    grammar:"'Busco' = 'cerco' (da 'buscar'). Non confondere con 'cerca' (vicino a). '¿Qué hay que ver?' = 'cosa c'è da vedere?' — letteralmente 'cosa c'è che vedere'. 'Hay que + infinitivo' = 'bisogna + infinitivo' = esprime necessità impersonale. Paesi di lingua spagnola imperdibili: México, Argentina, Colombia, Perú, Cuba, Repubblica Dominicana, Spagna.",
    practice:[
      "Pianifica in spagnolo un itinerario di 3 giorni in una città hispanofona a tua scelta",
      "Pratica chiedere orari: '¿A qué hora abre/cierra ___?'",
      "Impara le capitali dei 21 paesi di lingua spagnola — almeno le 10 principali"
    ]
  },
  { day:20,
    title:"Amore e relazioni",
    titleNative:"Amor y relaciones",
    focus:"Lo spagnolo è una lingua calda ed espressiva nelle relazioni. Gli ispanofoni sono generalmente affettuosi e diretti. Impara il vocabolario per creare connessioni autentiche.",
    vocab:[
      {es:"el amor", it:"l'amore", ipa:"el a-MOR"},
      {es:"la amistad", it:"l'amicizia", ipa:"la a-mis-TAD"},
      {es:"el novio / la novia", it:"il fidanzato / la fidanzata", ipa:"el NO-byo / la NO-bya"},
      {es:"el esposo / la esposa", it:"il marito / la moglie", ipa:"el es-PO-so / la es-PO-sa"},
      {es:"enamorarse", it:"innamorarsi", ipa:"e-na-mo-RAR-se"},
      {es:"casarse", it:"sposarsi", ipa:"ka-SAR-se"},
      {es:"Te quiero.", it:"Ti voglio bene. (amici/famiglia)", ipa:"te KYE-ro"},
      {es:"Te amo.", it:"Ti amo. (amore romantico)", ipa:"te A-mo"},
      {es:"Te echo de menos.", it:"Mi manchi.", ipa:"te E-cho de ME-nos"},
      {es:"Eres muy guapo/a.", it:"Sei molto bello/a.", ipa:"E-res mui GWA-po/a"}
    ],
    phrases:[
      {es:"Te quiero mucho.", it:"Ti voglio molto bene.", ipa:"te KYE-ro MU-cho"},
      {es:"Eres la persona más bella que he visto.", it:"Sei la persona più bella che abbia mai visto.", ipa:"E-res la per-SO-na mas BE-lya ke e BIS-to"},
      {es:"¿Puedo invitarte a algo?", it:"Posso offrirti qualcosa?", ipa:"PWE-do in-bi-TAR-te a AL-go"},
      {es:"¿Quieres salir conmigo?", it:"Vuoi uscire con me?", ipa:"KYE-res sa-LIR kon-MI-go"},
      {es:"Eres muy simpático/a.", it:"Sei molto simpatico/a.", ipa:"E-res mui sim-PA-ti-ko/a"},
      {es:"Estoy feliz de conocerte.", it:"Sono felice di conoscerti.", ipa:"es-TOI fe-LIS de ko-no-SER-te"}
    ],
    grammar:"'Te quiero' vs 'Te amo': come in italiano, la distinzione esiste. 'Te quiero' si usa per famiglia e amici cari (= 'ti voglio bene'). 'Te amo' è riservato all'amore romantico profondo. In America Latina 'te quiero' è più usato anche in contesti romantici. 'Guapo/a' (bello/a in aspetto) — 'guapo' in italiano arcaico significa coraggioso, non bello!",
    practice:[
      "Pratica fare complimenti sinceri in spagnolo",
      "Impara a presentare il tuo partner o migliore amico/a",
      "Pratica: 'Te echo de menos' — un'espressione molto affettuosa"
    ]
  },
  { day:21,
    title:"Emozioni e sentimenti",
    titleNative:"Emociones y sentimientos",
    focus:"Gli ispanofoni sono generalmente molto espressivi. Il vocabolario emotivo ha moltissimi cognati con l'italiano. Impara anche le esclamazioni più tipiche dello spagnolo.",
    vocab:[
      {es:"feliz / contento/a", it:"felice / contento/a", ipa:"fe-LIS / kon-TEN-to"},
      {es:"triste", it:"triste", ipa:"TRIS-te"},
      {es:"enojado/a / enfadado/a", it:"arrabbiato/a", ipa:"e-no-HA-do / en-fa-DA-do"},
      {es:"sorprendido/a", it:"sorpreso/a", ipa:"sor-pren-DI-do"},
      {es:"cansado/a", it:"stanco/a", ipa:"kan-SA-do"},
      {es:"preocupado/a", it:"preoccupato/a", ipa:"pre-o-ku-PA-do"},
      {es:"aburrido/a", it:"annoiato/a", ipa:"a-bu-RRI-do"},
      {es:"emocionado/a", it:"emozionato/a", ipa:"e-mo-syo-NA-do"},
      {es:"nervioso/a", it:"nervoso/a", ipa:"ner-BYO-so"},
      {es:"entusiasmado/a", it:"entusiasta", ipa:"en-tu-syas-MA-do"}
    ],
    phrases:[
      {es:"¿Cómo te sientes?", it:"Come ti senti?", ipa:"KO-mo te SYEN-tes"},
      {es:"Hoy me siento muy feliz.", it:"Oggi mi sento molto felice.", ipa:"OI me SYEN-to mui fe-LIS"},
      {es:"Estoy estresado/a del trabajo.", it:"Sono stressato/a dal lavoro.", ipa:"es-TOI es-tre-SA-do del tra-BA-ho"},
      {es:"No me apetece.", it:"Non mi va.", ipa:"no me a-pe-TE-se"},
      {es:"¡Qué bonita sorpresa!", it:"Che bella sorpresa!", ipa:"ke bo-NI-ta sor-PRE-sa"},
      {es:"¡Qué lástima!", it:"Che peccato!", ipa:"ke LAS-ti-ma"}
    ],
    grammar:"'Me siento ___' = 'mi sento ___'. Esclamazioni spagnole essenziali: '¡Qué bueno!' (che bello!), '¡Qué lástima!' (che peccato!), '¡Qué suerte!' (che fortuna!), '¡Ánimo!' (coraggio! / dai!), '¡Claro!' (certo!), '¡Órale!' (messicano per dai!/vabbè!/esatto!). Impara anche '¡Ay!' — esclamazione universale per dolore e sorpresa.",
    practice:[
      "Descrivi come ti senti oggi in spagnolo",
      "Pratica reagire a buone e cattive notizie con le esclamazioni giuste",
      "Impara le principali esclamazioni regionali: '¡Órale!' (Mexico), '¡Che!' (Argentina)"
    ]
  },
  { day:22,
    title:"Casa e abitazione",
    titleNative:"La casa y el hogar",
    focus:"Il vocabolario domestico spagnolo è molto simile all'italiano. Parlare della propria casa è fondamentale per inviti e conversazioni quotidiane. Ci sono alcune differenze regionali interessanti.",
    vocab:[
      {es:"la casa", it:"la casa", ipa:"la KA-sa"},
      {es:"el apartamento / el piso", it:"l'appartamento", ipa:"el a-par-ta-MEN-to / el PI-so"},
      {es:"la cocina", it:"la cucina", ipa:"la ko-SI-na"},
      {es:"el salón / la sala de estar", it:"il salotto / il soggiorno", ipa:"el sa-LON / la SA-la de es-TAR"},
      {es:"el dormitorio / la habitación", it:"la camera da letto", ipa:"el dor-mi-TO-ryo"},
      {es:"el baño", it:"il bagno", ipa:"el BA-nyo"},
      {es:"el balcón", it:"il balcone", ipa:"el bal-KON"},
      {es:"el sofá", it:"il divano", ipa:"el so-FA"},
      {es:"la ventana", it:"la finestra", ipa:"la ben-TA-na"},
      {es:"el alquiler", it:"l'affitto", ipa:"el al-ki-LER"}
    ],
    phrases:[
      {es:"Vivo en un apartamento en el tercer piso.", it:"Abito in un appartamento al terzo piano.", ipa:"BI-bo en un a-par-ta-MEN-to en el ter-SER PI-so"},
      {es:"Tengo un balcón con vista al mar.", it:"Ho un balcone con vista sul mare.", ipa:"TEN-go un bal-KON kon BIS-ta al MAR"},
      {es:"Mi alquiler es caro.", it:"Il mio affitto è caro.", ipa:"mi al-ki-LER es KA-ro"},
      {es:"Tengo que limpiar.", it:"Devo fare le pulizie.", ipa:"TEN-go ke lim-PYAR"},
      {es:"¿Vienes a mi casa?", it:"Vieni a casa mia?", ipa:"BYE-nes a mi KA-sa"},
      {es:"Mi barrio es tranquilo.", it:"Il mio quartiere è tranquillo.", ipa:"mi BA-rryo es tran-KI-lo"}
    ],
    grammar:"I numeri ordinali spagnoli per i piani: primero (1°), segundo (2°), tercero (3°), cuarto (4°), quinto (5°). La planta baja (piano terra) = pianterreno. In Spagna 'el primer piso' = nostro 'primo piano' (sopra il pianterreno). Variante americana: 'el primer piso' spesso coincide con il pianterreno. Chiedi sempre per evitare confusione!",
    practice:[
      "Descrivi la tua casa o appartamento in spagnolo",
      "Pratica: 'Vivo en ___ en un apartamento en el ___ piso'",
      "Impara il vocabolario degli elettrodomestici da cucina in spagnolo"
    ]
  },
  { day:23,
    title:"Gli animali",
    titleNative:"Los animales",
    focus:"Il vocabolario animale ha radici latine molto trasparenti per l'italofono. Molti nomi di animali in spagnolo sono quasi identici all'italiano.",
    vocab:[
      {es:"el perro", it:"il cane", ipa:"el PE-rro"},
      {es:"el gato", it:"il gatto", ipa:"el GA-to"},
      {es:"el pájaro / el ave", it:"l'uccello", ipa:"el PA-ha-ro / el A-be"},
      {es:"el pez", it:"il pesce", ipa:"el PES"},
      {es:"el caballo", it:"il cavallo", ipa:"el ka-BA-lyo"},
      {es:"la vaca", it:"la mucca / la vacca", ipa:"la BA-ka"},
      {es:"el cerdo / el puerco", it:"il maiale", ipa:"el SER-do / el PWER-ko"},
      {es:"la oveja", it:"la pecora", ipa:"la o-BE-ha"},
      {es:"el águila", it:"l'aquila", ipa:"el A-gi-la"},
      {es:"el lobo", it:"il lupo", ipa:"el LO-bo"}
    ],
    phrases:[
      {es:"Tengo un perro llamado Fido.", it:"Ho un cane di nome Fido.", ipa:"TEN-go un PE-rro lya-MA-do FI-do"},
      {es:"¡Tu gato es adorable!", it:"Il tuo gatto è adorabile!", ipa:"tu GA-to es a-do-RA-ble"},
      {es:"¿Puedo traer a mi perro?", it:"Posso portare il mio cane?", ipa:"PWE-do tra-ER a mi PE-rro"},
      {es:"Soy alérgico/a a los gatos.", it:"Sono allergico/a ai gatti.", ipa:"SOI a-LER-hi-ko/a a los GA-tos"},
      {es:"El lobo da miedo.", it:"Il lupo fa paura.", ipa:"el LO-bo DA MYED-o"},
      {es:"¡Qué animal tan mono!", it:"Che animale carino!", ipa:"ke a-ni-MAL tan MO-no"}
    ],
    grammar:"'Mono' in spagnolo significa sia 'scimmia' che (colloquialmente) 'carino/grazioso' — un false friend interessante! 'Dar miedo' = 'fare paura' — 'dar' + sostantivo forma molte espressioni: 'dar asco' (fare schifo), 'dar pena' (fare pena), 'dar igual' (fare lo stesso). Stesso pattern dell'italiano 'fare' + sostantivo.",
    practice:[
      "Descrivi il tuo animale preferito o quello che vorresti avere",
      "Impara i versi degli animali in spagnolo: il cane dice 'guau guau', il gatto 'miau'",
      "Pratica: fauna latinoamericana — jaguar, condor, llama, caiman, tapir"
    ]
  },
  { day:24,
    title:"Storia e tradizioni",
    titleNative:"Historia y tradiciones",
    focus:"Il mondo di lingua spagnola ha una storia ricchissima — dalle civiltà precolombiane all'Impero spagnolo, dalle guerre d'indipendenza al Novecento. Il vocabolario storico è molto accessibile.",
    vocab:[
      {es:"la historia", it:"la storia", ipa:"la is-TO-rya"},
      {es:"el Imperio español", it:"l'Impero spagnolo", ipa:"el im-PE-ryo es-pa-NYOL"},
      {es:"el castillo", it:"il castello", ipa:"el kas-TI-lyo"},
      {es:"la tradición", it:"la tradizione", ipa:"la tra-di-SYON"},
      {es:"la fiesta", it:"la festa", ipa:"la FYES-ta"},
      {es:"el Carnaval", it:"il Carnevale", ipa:"el kar-na-BAL"},
      {es:"la Navidad", it:"il Natale", ipa:"la na-bi-DAD"},
      {es:"el belén / el nacimiento", it:"il presepe", ipa:"el be-LEN / el na-si-MYEN-to"},
      {es:"el santo patrón", it:"il santo patrono", ipa:"el SAN-to pa-TRON"},
      {es:"la Semana Santa", it:"la Settimana Santa", ipa:"la se-MA-na SAN-ta"}
    ],
    phrases:[
      {es:"¿Cuándo es la fiesta del pueblo?", it:"Quando è la festa del paese?", ipa:"KWAN-do es la FYES-ta del PWE-blo"},
      {es:"El Carnaval de Río es famoso.", it:"Il Carnevale di Rio è famoso.", ipa:"el kar-na-BAL de RRI-o es fa-MO-so"},
      {es:"Este castillo data de la Edad Media.", it:"Questo castello risale al Medioevo.", ipa:"ES-te kas-TI-lyo DA-ta de la e-DAD ME-dya"},
      {es:"Es una antigua tradición.", it:"È un'antica tradizione.", ipa:"es u-na an-TI-gwa tra-di-SYON"},
      {es:"Vamos a ver el nacimiento.", it:"Andiamo a vedere il presepe.", ipa:"BA-mos a BER el na-si-MYEN-to"},
      {es:"España tiene una historia fascinante.", it:"La Spagna ha una storia affascinante.", ipa:"es-PA-nya TYE-ne u-na is-TO-rya fas-si-NAN-te"}
    ],
    grammar:"I mesi in spagnolo: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Si scrivono in minuscolo come in italiano. Nota: 'julio' (luglio) e 'junio' (giugno) — non confonderli! La Semana Santa (Settimana Santa) è la celebrazione più importante in Spagna — con processioni spettacolari a Siviglia e Málaga.",
    practice:[
      "Impara le principali feste dei paesi di lingua spagnola e la loro origine",
      "Confronta una tradizione spagnola o latinoamericana con una italiana",
      "Pratica: '___ data del siglo ___' (data del secolo ___)"
    ]
  },
  { day:25,
    title:"Musica e intrattenimento",
    titleNative:"Música y entretenimiento",
    focus:"Il mondo di lingua spagnola ha dato alla musica mondiale flamenco, salsa, tango, reggaeton, bossa nova e molto altro. La scena musicale ispanofona è una delle più vitali al mondo.",
    vocab:[
      {es:"la música", it:"la musica", ipa:"la MU-si-ka"},
      {es:"la canción", it:"la canzone", ipa:"la kan-SYON"},
      {es:"el concierto", it:"il concerto", ipa:"el kon-SYER-to"},
      {es:"el/la cantante", it:"il/la cantante", ipa:"el/la kan-TAN-te"},
      {es:"el teatro", it:"il teatro", ipa:"el te-A-tro"},
      {es:"el cine", it:"il cinema", ipa:"el SI-ne"},
      {es:"el escenario", it:"il palcoscenico", ipa:"el es-se-NA-ryo"},
      {es:"la entrada", it:"il biglietto", ipa:"la en-TRA-da"},
      {es:"el aplauso", it:"l'applauso", ipa:"el a-PLAU-so"},
      {es:"el festival", it:"il festival", ipa:"el fes-ti-BAL"}
    ],
    phrases:[
      {es:"¿Te gusta la música española?", it:"Ti piace la musica spagnola?", ipa:"te GUS-ta la MU-si-ka es-pa-NYOLA"},
      {es:"¿Vamos al cine esta noche?", it:"Andiamo al cinema stasera?", ipa:"BA-mos al SI-ne ES-ta NO-che"},
      {es:"Tengo entradas para el flamenco.", it:"Ho i biglietti per il flamenco.", ipa:"TEN-go en-TRA-das PA-ra el fla-MEN-ko"},
      {es:"¡Qué espectáculo tan magnífico!", it:"Che spettacolo magnifico!", ipa:"ke es-pek-TA-ku-lo tan ma-NI-fi-ko"},
      {es:"El Teatro Real es el más famoso de España.", it:"Il Teatro Real è il più famoso di Spagna.", ipa:"el te-A-tro REAL es el mas fa-MO-so de es-PA-nya"},
      {es:"¿Cuál es tu cantante favorito?", it:"Qual è il tuo cantante preferito?", ipa:"kwal es tu kan-TAN-te fa-bo-RI-to"}
    ],
    grammar:"I generi musicali del mondo ispanofono: flamenco (Spagna), tango (Argentina/Uruguay), salsa (Colombia/Porto Rico), cumbia (Colombia), reggaeton (Porto Rico), mariachi (Messico), bachata (Repubblica Dominicana). Cantanti famosi: Shakira, J Balvin, Rosalía, Bad Bunny, Enrique Iglesias, Alejandro Sanz.",
    practice:[
      "Ascolta una canzone spagnola o latinoamericana e cerca di capire alcune parole",
      "Impara i principali generi musicali ispanofoni e la loro origine geografica",
      "Pratica: '¿Vamos a ___?' per proporre attività serali"
    ]
  },
  { day:26,
    title:"Affari e finanze",
    titleNative:"Negocios y finanzas",
    focus:"Lo spagnolo è la seconda lingua del mondo degli affari. Con 500 milioni di parlanti in 21 paesi, le opportunità economiche sono enormi. Il vocabolario aziendale è molto simile all'italiano.",
    vocab:[
      {es:"el negocio", it:"il negozio / l'affare", ipa:"el ne-GO-syo"},
      {es:"el/la cliente", it:"il/la cliente", ipa:"el/la klyen-TE"},
      {es:"la factura", it:"la fattura", ipa:"la fak-TU-ra"},
      {es:"el presupuesto", it:"il preventivo / il budget", ipa:"el pre-su-PWES-to"},
      {es:"la inversión", it:"l'investimento", ipa:"la in-ber-SYON"},
      {es:"el banco", it:"la banca", ipa:"el BAN-ko"},
      {es:"la transferencia bancaria", it:"il bonifico bancario", ipa:"la trans-fe-REN-sya ban-KA-rya"},
      {es:"la ganancia / el beneficio", it:"il guadagno / il profitto", ipa:"la ga-NAN-sya / el be-ne-FI-syo"},
      {es:"la pérdida", it:"la perdita", ipa:"la PER-di-da"},
      {es:"el mercado", it:"il mercato", ipa:"el mer-KA-do"}
    ],
    phrases:[
      {es:"¿Podemos fijar una reunión?", it:"Possiamo fissare una riunione?", ipa:"po-DE-mos fi-HAR u-na re-u-NYON"},
      {es:"Le envío la factura por email.", it:"Le mando la fattura per email.", ipa:"le en-BI-o la fak-TU-ra por I-meil"},
      {es:"¿Cuál es su mejor precio?", it:"Qual è il vostro prezzo migliore?", ipa:"kwal es su me-HOR PRE-syo"},
      {es:"Debemos respetar el presupuesto.", it:"Dobbiamo rispettare il budget.", ipa:"de-BE-mos res-pe-TAR el pre-su-PWES-to"},
      {es:"¡Es una ganga!", it:"È un affare!", ipa:"es u-na GAN-ga"},
      {es:"¿Firmamos el contrato?", it:"Firmiamo il contratto?", ipa:"fir-MA-mos el kon-TRA-to"}
    ],
    grammar:"'Debemos + infinitivo' = 'dobbiamo + infinitivo': 'Debemos hablar' (dobbiamo parlare). Da 'deber': debo, debes, debe, debemos, debéis, deben. Come il nostro 'dovere'. '¡Es una ganga!' = 'è un affare!' (nel senso di prezzo conveniente). In spagnolo 'negocio' può significare sia 'affare' che 'negozio/attività commerciale'.",
    practice:[
      "Pratica scrivere una breve email formale in spagnolo a un cliente",
      "Impara a presentare un prezzo e negoziare: '¿Podemos hablar del precio?'",
      "Memorizza: '¡Mucho éxito!' (in bocca al lupo / buona fortuna per gli affari)"
    ]
  },
  { day:27,
    title:"L'istruzione",
    titleNative:"La educación",
    focus:"I sistemi educativi nei paesi di lingua spagnola variano molto. Il vocabolario scolastico ha una base latina enorme condivisa con l'italiano. Le università latinoamericane sono tra le più grandi del mondo.",
    vocab:[
      {es:"la escuela", it:"la scuola", ipa:"la es-KWE-la"},
      {es:"la universidad", it:"l'università", ipa:"la u-ni-ber-si-DAD"},
      {es:"el/la profesor/a", it:"il professore / la professoressa", ipa:"el pro-fe-SOR / la pro-fe-SO-ra"},
      {es:"el/la estudiante", it:"lo studente / la studentessa", ipa:"el es-tu-DYAN-te"},
      {es:"la nota / la calificación", it:"il voto", ipa:"la NO-ta / la ka-li-fi-ka-SYON"},
      {es:"la licenciatura", it:"la laurea triennale", ipa:"la li-sen-sya-TU-ra"},
      {es:"la tesis", it:"la tesi", ipa:"la TE-sis"},
      {es:"el curso", it:"il corso", ipa:"el KUR-so"},
      {es:"la beca", it:"la borsa di studio", ipa:"la BE-ka"},
      {es:"los exámenes", it:"gli esami", ipa:"los ek-SA-me-nes"}
    ],
    phrases:[
      {es:"¿Dónde estudias?", it:"Dove studi?", ipa:"DON-de es-TU-dyas"},
      {es:"Estudio medicina en la universidad.", it:"Studio medicina all'università.", ipa:"es-TU-dyo me-di-SI-na en la u-ni-ber-si-DAD"},
      {es:"¡He aprobado el examen!", it:"Ho superato l'esame!", ipa:"e a-pro-BA-do el ek-SA-men"},
      {es:"Saqué un sobresaliente.", it:"Ho preso il massimo dei voti.", ipa:"sa-KE un so-bre-sa-LYEN-te"},
      {es:"Estoy escribiendo la tesis.", it:"Sto scrivendo la tesi.", ipa:"es-TOI es-kri-BYEN-do la TE-sis"},
      {es:"¡Mucha suerte en el examen!", it:"In bocca al lupo per l'esame!", ipa:"MU-cha SWER-te en el ek-SA-men"}
    ],
    grammar:"Calificazioni spagnole: 'suspenso' (insufficiente, 0-4), 'aprobado' (sufficiente, 5), 'notable' (distinto, 6-7), 'sobresaliente' (massimo, 8-10), 'matrícula de honor' (lode). Scale diverse tra paesi: in Argentina si usa da 1 a 10 (6 = sufficiente), in Messico 6-10 (6 = sufficiente). 'Bocciato' = 'reprobado'.",
    practice:[
      "Parla del tuo percorso di studi in spagnolo",
      "Impara a fare i complimenti per i risultati: '¡Enhorabuena!' / '¡Felicidades!'",
      "Pratica descrivere il tuo campo di studi o specializzazione"
    ]
  },
  { day:28,
    title:"L'ambiente",
    titleNative:"El medioambiente",
    focus:"La sostenibilità è un tema centrale nel mondo ispanofono. Il vocabolario ecologico ha basi latine molto familiari ed è sempre più presente nelle conversazioni quotidiane.",
    vocab:[
      {es:"el medioambiente", it:"l'ambiente", ipa:"el me-dyo-am-BYEN-te"},
      {es:"el cambio climático", it:"il cambiamento climatico", ipa:"el KAM-byo kli-MA-ti-ko"},
      {es:"el reciclaje", it:"il riciclaggio", ipa:"el re-si-KLA-he"},
      {es:"reciclar", it:"riciclare", ipa:"re-si-KLAR"},
      {es:"las energías renovables", it:"le energie rinnovabili", ipa:"las e-ner-HI-as re-no-BA-bles"},
      {es:"la contaminación", it:"l'inquinamento", ipa:"la kon-ta-mi-na-SYON"},
      {es:"la sostenibilidad", it:"la sostenibilità", ipa:"la sos-te-ni-bi-li-DAD"},
      {es:"la basura", it:"la spazzatura / il rifiuto", ipa:"la ba-SU-ra"},
      {es:"la biodiversidad", it:"la biodiversità", ipa:"la byo-di-ber-si-DAD"},
      {es:"el panel solar", it:"il pannello solare", ipa:"el pa-NEL so-LAR"}
    ],
    phrases:[
      {es:"Debemos proteger el medioambiente.", it:"Dobbiamo proteggere l'ambiente.", ipa:"de-BE-mos pro-te-HER el me-dyo-am-BYEN-te"},
      {es:"Yo reciclo todos los días.", it:"Riciclo ogni giorno.", ipa:"yo re-SI-klo TO-dos los DI-as"},
      {es:"El cambio climático es urgente.", it:"Il cambiamento climatico è urgente.", ipa:"el KAM-byo kli-MA-ti-ko es ur-HEN-te"},
      {es:"Prefiero los productos ecológicos.", it:"Preferisco i prodotti ecologici.", ipa:"pre-FYERO los pro-DUK-tos e-ko-LO-hi-kos"},
      {es:"Voy en bici en vez del coche.", it:"Vado in bicicletta invece della macchina.", ipa:"BOI en BI-si en BES del KO-che"},
      {es:"España apuesta por las renovables.", it:"La Spagna punta sulle rinnovabili.", ipa:"es-PA-nya a-PWES-ta por las re-no-BA-bles"}
    ],
    grammar:"'Prefiero' = 'preferisco' — da 'preferir' (verbo irregolare in -ir con alternanza e→ie: prefiero, prefieres, prefiere, preferimos, preferís, prefieren). Questa alternanza vocalica (e→ie, o→ue) è caratteristica dello spagnolo e non esiste in italiano. Esempi: querer→quiero, poder→puedo, entender→entiendo.",
    practice:[
      "Parla delle tue abitudini ecologiche in spagnolo",
      "Impara il vocabolario del riciclaggio spagnolo: cartón, plástico, vidrio, orgánico",
      "Confronta la politica ambientale di Spagna/America Latina con quella italiana"
    ]
  },
  { day:29,
    title:"Conversazione avanzata",
    titleNative:"Conversación avanzada",
    focus:"Oggi mettiamo tutto in pratica. I connettori discorsivi sono il segreto della fluidità — trasformano frasi isolate in vera conversazione. Sei quasi alla fine del tuo corso!",
    vocab:[
      {es:"pero / sin embargo", it:"ma / però / tuttavia", ipa:"PE-ro / sin em-BAR-go"},
      {es:"entonces / por lo tanto", it:"quindi / allora", ipa:"en-TON-ses / por lo TAN-to"},
      {es:"de todas formas", it:"comunque / in ogni caso", ipa:"de TO-das FOR-mas"},
      {es:"de hecho / en efecto", it:"infatti / in effetti", ipa:"de E-cho / en e-FEK-to"},
      {es:"desafortunadamente", it:"purtroppo / sfortunatamente", ipa:"des-a-for-tu-na-DA-men-te"},
      {es:"por suerte / afortunadamente", it:"per fortuna / fortunatamente", ipa:"por SWER-te"},
      {es:"mientras tanto", it:"nel frattempo", ipa:"MYEN-tras TAN-to"},
      {es:"a propósito / por cierto", it:"a proposito / tra l'altro", ipa:"a pro-PO-si-to / por SYER-to"},
      {es:"en cualquier caso", it:"in ogni caso / comunque", ipa:"en kwal-KYER KA-so"},
      {es:"en conclusión", it:"in conclusione", ipa:"en kon-klu-SYON"}
    ],
    phrases:[
      {es:"No entiendo bien, ¿puede repetir?", it:"Non capisco bene, può ripetere?", ipa:"no en-TYEN-do BYEN, PWE-de re-pe-TIR"},
      {es:"¿Podría hablar más despacio?", it:"Potrebbe parlare più lentamente?", ipa:"po-DRI-a a-BLAR mas des-PA-syo"},
      {es:"¿Cómo se dice ___ en español?", it:"Come si dice ___ in spagnolo?", ipa:"KO-mo se DI-se en es-pa-NYOL"},
      {es:"He entendido, gracias.", it:"Ho capito, grazie.", ipa:"e en-ten-DI-do, GRA-syas"},
      {es:"Estoy aprendiendo español.", it:"Sto imparando lo spagnolo.", ipa:"es-TOI a-pren-DYEN-do es-pa-NYOL"},
      {es:"Mi español mejora cada día.", it:"Il mio spagnolo migliora ogni giorno.", ipa:"mi es-pa-NYOL me-HO-ra KA-da DI-a"}
    ],
    grammar:"I connettori discorsivi sono il segreto della fluidità: 'pero' (ma), 'entonces' (quindi), 'de hecho' (in effetti), 'sin embargo' (tuttavia), 'desafortunadamente' (purtroppo). Collegando frasi semplici con questi connettori, il tuo spagnolo suona immediatamente più naturale. È lo stesso salto che fai in italiano quando smetti di parlare a frasi isolate.",
    practice:[
      "Mantieni una conversazione di 5 minuti su un argomento libero usando i connettori",
      "Pratica chiedere chiarimento quando non capisci — fondamentale nell'immersione reale",
      "Registrati mentre parli spagnolo per 2 minuti e confronta con il giorno 1"
    ]
  },
  { day:30,
    title:"Congratulazioni! — 30 giorni di spagnolo",
    titleNative:"¡Felicidades! — 30 días de español",
    focus:"Ce l'hai fatta! In 30 giorni hai costruito una base solida in spagnolo. Come italofono, il tuo vantaggio è enorme — condividi con lo spagnolo l'80% del vocabolario e quasi tutta la grammatica di base. Ora la strada è l'immersione.",
    vocab:[
      {es:"¡Felicidades! / ¡Enhorabuena!", it:"Congratulazioni! / Complimenti!", ipa:"fe-li-si-DA-des / en-o-ra-BWE-na"},
      {es:"el progreso", it:"il progresso", ipa:"el pro-GRE-so"},
      {es:"la fluidez", it:"la fluidità", ipa:"la flwi-DES"},
      {es:"el objetivo", it:"l'obiettivo", ipa:"el ob-he-TI-bo"},
      {es:"la perseverancia", it:"la perseveranza", ipa:"la per-se-be-RAN-sya"},
      {es:"el éxito", it:"il successo", ipa:"el EK-si-to"},
      {es:"continuar", it:"continuare", ipa:"kon-ti-NWAR"},
      {es:"mejorar", it:"migliorare", ipa:"me-ho-RAR"},
      {es:"el idioma / la lengua", it:"l'idioma / la lingua", ipa:"el i-DYO-ma / la LEN-gwa"},
      {es:"el futuro", it:"il futuro", ipa:"el fu-TU-ro"}
    ],
    phrases:[
      {es:"¡He completado el curso!", it:"Ho completato il corso!", ipa:"e kom-ple-TA-do el KUR-so"},
      {es:"Puedo comunicarme en español.", it:"Posso comunicare in spagnolo.", ipa:"PWE-do ko-mu-ni-KAR-me en es-pa-NYOL"},
      {es:"Mi viaje lingüístico continúa.", it:"Il mio viaggio linguistico continua.", ipa:"mi BYA-he lin-GWIS-ti-ko kon-TI-nwa"},
      {es:"Quiero visitar España pronto.", it:"Voglio visitare la Spagna presto.", ipa:"KYE-ro bi-si-TAR es-PA-nya PRON-to"},
      {es:"Estoy orgulloso/a de mi progreso.", it:"Sono orgoglioso/a del mio progresso.", ipa:"es-TOI or-gu-LYO-so de mi pro-GRE-so"},
      {es:"¡Hasta luego y mucha suerte!", it:"Arrivederci e in bocca al lupo!", ipa:"AS-ta LWE-go i MU-cha SWER-te"}
    ],
    grammar:"Il tuo vantaggio da italofono è enorme: l'italiano e lo spagnolo condividono l'80% del vocabolario, la grammatica di genere e numero, la concordanza aggettivale, i verbi modali e la musicalità mediterranea. Il passo successivo: immersione totale — serie TV spagnole e latinoamericane (La Casa de Papel, Narcos, Club de Cuervos), musica, podcast in spagnolo. ¡Has hecho un trabajo extraordinario!",
    practice:[
      "Scrivi una lettera in spagnolo descrivendo cosa hai imparato in 30 giorni",
      "Pianifica un viaggio reale in un paese di lingua spagnola facendo tutte le prenotazioni in spagnolo",
      "Impegnati a guardare una serie TV in spagnolo questa settimana senza sottotitoli in italiano"
    ]
  }
];

var CONVERSATIONS_IT_ES = [];
