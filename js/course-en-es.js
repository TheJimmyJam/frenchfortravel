// Spanish course data — 30 days
// loaded by learn.html before app.js
// Note: field name "fr" = source language word (Spanish here), "en" = English

// ============================================================
// COURSE DATA — 30 days of Spanish
// ============================================================
const COURSE_ES = [
  { day:1, title:"Greetings & Courtesy", titleNative:"Saludos y Cortesía", focus:"The first words you'll say in Spain.",
    vocab:[
      {fr:"Hola", ipa:"oh-lah", en:"Hello / Hi"},
      {fr:"Buenos días", ipa:"bweh-nos dee-ahs", en:"Good morning"},
      {fr:"Buenas tardes", ipa:"bweh-nahs tar-des", en:"Good afternoon"},
      {fr:"Buenas noches", ipa:"bweh-nahs noh-ches", en:"Good evening / night"},
      {fr:"Adiós", ipa:"ah-dyohs", en:"Goodbye"},
      {fr:"Hasta luego", ipa:"ahs-tah lweh-goh", en:"See you later"},
      {fr:"Por favor", ipa:"por fah-bor", en:"Please"},
      {fr:"Gracias", ipa:"grah-syahs", en:"Thank you"},
      {fr:"De nada", ipa:"deh nah-dah", en:"You're welcome"},
      {fr:"Perdón", ipa:"pair-dohn", en:"Sorry / Excuse me"}
    ],
    phrases:[
      {fr:"¡Hola! ¿Cómo está usted?", ipa:"oh-lah koh-moh es-tah oos-ted", en:"Hello! How are you? (formal)"},
      {fr:"Muy bien, gracias.", ipa:"mwee byehn grah-syahs", en:"Very well, thank you."},
      {fr:"Buenos días, señor.", ipa:"bweh-nos dee-ahs sehn-yor", en:"Good morning, sir."},
      {fr:"Buenas noches, hasta mañana.", ipa:"bweh-nahs noh-ches ahs-tah mah-nyah-nah", en:"Good night, see you tomorrow."},
      {fr:"Muchas gracias, de nada.", ipa:"moo-chahs grah-syahs deh nah-dah", en:"Thank you very much, you're welcome."},
      {fr:"Por favor, señora.", ipa:"por fah-bor sehn-yoh-rah", en:"Please, ma'am."},
      {fr:"Perdón, disculpe.", ipa:"pair-dohn dees-kool-peh", en:"Sorry, excuse me."},
      {fr:"¡Hasta luego! ¡Buen día!", ipa:"ahs-tah lweh-goh bwehn dee-ah", en:"See you later! Have a good day!"}
    ],
    grammar:"Spain uses both 'tú' (informal) and 'usted' (formal). With strangers, shop staff, and older people, use 'usted'. With peers and younger people, 'tú' is fine. In Latin America, 'usted' is used more broadly.",
    practice:["Walk into any shop and say 'Buenos días' or 'Buenas' before anything else.","Say 'Muchas gracias, hasta luego' when leaving any business."]
  },
  { day:2, title:"Yes, No & Reactions", titleNative:"Sí, No y Reacciones", focus:"How to respond and react.",
    vocab:[
      {fr:"Sí", ipa:"see", en:"Yes"},
      {fr:"No", ipa:"noh", en:"No"},
      {fr:"Quizás", ipa:"kee-sahs", en:"Maybe"},
      {fr:"De acuerdo", ipa:"deh ah-kwair-doh", en:"OK / Agreed"},
      {fr:"Claro", ipa:"klah-roh", en:"Of course / Sure"},
      {fr:"Entiendo", ipa:"en-tyehn-doh", en:"I understand"},
      {fr:"No entiendo", ipa:"noh en-tyehn-doh", en:"I don't understand"},
      {fr:"¿Habla inglés?", ipa:"ah-blah een-glehs", en:"Do you speak English?"},
      {fr:"Un poco", ipa:"oon poh-koh", en:"A little"},
      {fr:"Para nada", ipa:"pah-rah nah-dah", en:"Not at all"}
    ],
    phrases:[
      {fr:"Lo siento, no hablo español.", ipa:"loh syehn-toh noh ah-bloh es-pah-nyol", en:"I'm sorry, I don't speak Spanish."},
      {fr:"¿Puede repetir, por favor?", ipa:"pweh-deh reh-peh-teer por fah-bor", en:"Can you repeat, please?"},
      {fr:"¿Habla inglés?", ipa:"ah-blah een-glehs", en:"Do you speak English?"},
      {fr:"Más despacio, por favor.", ipa:"mahs des-pah-syoh por fah-bor", en:"More slowly, please."},
      {fr:"¡Sí, claro!", ipa:"see klah-roh", en:"Yes, of course!"},
      {fr:"No, gracias.", ipa:"noh grah-syahs", en:"No, thank you."},
      {fr:"De acuerdo, sin problema.", ipa:"deh ah-kwair-doh seen proh-bleh-mah", en:"OK, no problem."},
      {fr:"No entiendo. ¿Puede ayudarme?", ipa:"noh en-tyehn-doh pweh-deh ah-yoo-dar-meh", en:"I don't understand. Can you help me?"}
    ],
    grammar:"Spanish uses double negation: 'No entiendo nada' (I don't understand anything — literally 'Not I understand nothing'). Both 'no' words are required. 'No hablo español' needs that first 'no' before the verb.",
    practice:["Practice your safety net: '¿Habla inglés? No hablo español bien.'","Say 'No entiendo, más despacio por favor' out loud three times."]
  },
  { day:3, title:"Introductions", titleNative:"Presentarse", focus:"Tell people who you are.",
    vocab:[
      {fr:"Me llamo", ipa:"meh yah-moh", en:"My name is"},
      {fr:"Soy", ipa:"soy", en:"I am"},
      {fr:"americano / americana", ipa:"ah-meh-ree-kah-noh / nah", en:"American (m/f)"},
      {fr:"de Dallas", ipa:"deh dah-lahs", en:"from Dallas"},
      {fr:"¿Y usted?", ipa:"ee oos-ted", en:"And you? (formal)"},
      {fr:"Mucho gusto", ipa:"moo-choh goos-toh", en:"Nice to meet you"},
      {fr:"un amigo", ipa:"oon ah-mee-goh", en:"a friend (m)"},
      {fr:"una amiga", ipa:"oo-nah ah-mee-gah", en:"a friend (f)"},
      {fr:"¿Cómo se llama?", ipa:"koh-moh seh yah-mah", en:"What's your name? (formal)"},
      {fr:"Encantado / Encantada", ipa:"en-kahn-tah-doh / dah", en:"Delighted to meet you (m/f)"}
    ],
    phrases:[
      {fr:"Hola, me llamo Jimmy.", ipa:"oh-lah meh yah-moh jimmy", en:"Hello, my name is Jimmy."},
      {fr:"Soy americano, de Dallas.", ipa:"soy ah-meh-ree-kah-noh deh dah-lahs", en:"I'm American, from Dallas."},
      {fr:"Encantado de conocerle.", ipa:"en-kahn-tah-doh deh koh-noh-sair-leh", en:"Pleased to meet you."},
      {fr:"¿Cómo se llama usted?", ipa:"koh-moh seh yah-mah oos-ted", en:"What is your name? (formal)"},
      {fr:"¿De dónde es usted?", ipa:"deh dohn-deh es oos-ted", en:"Where are you from?"},
      {fr:"Estoy de vacaciones en Madrid.", ipa:"es-toy deh bah-kah-syoh-nes en mah-drid", en:"I'm on holiday in Madrid."},
      {fr:"Le presento a mi amigo.", ipa:"leh preh-sehn-toh ah mee ah-mee-goh", en:"This is my friend. (formal)"},
      {fr:"Es un placer conocerle.", ipa:"es oon plah-sair koh-noh-sair-leh", en:"It's a pleasure to meet you."}
    ],
    grammar:"'Soy' vs 'Estoy': Both mean 'I am' but they're different verbs. 'Soy americano' (permanent — I AM American). 'Estoy en Madrid' (temporary — I'm IN Madrid right now). This ser vs estar distinction is one of Spanish's most important rules.",
    practice:["Introduce yourself in Spanish five times out loud.","Practice the full exchange: name, nationality, city, nice to meet you."]
  },
  { day:4, title:"Numbers 0–20", titleNative:"Números 0–20", focus:"You'll need these for prices, addresses, and times.",
    vocab:[
      {fr:"cero", ipa:"seh-roh", en:"0"},
      {fr:"uno", ipa:"oo-noh", en:"1"},
      {fr:"dos", ipa:"dohs", en:"2"},
      {fr:"tres", ipa:"trehs", en:"3"},
      {fr:"cuatro", ipa:"kwah-troh", en:"4"},
      {fr:"cinco", ipa:"seen-koh", en:"5"},
      {fr:"seis", ipa:"says", en:"6"},
      {fr:"siete", ipa:"syeh-teh", en:"7"},
      {fr:"ocho", ipa:"oh-choh", en:"8"},
      {fr:"nueve", ipa:"nweh-beh", en:"9"},
      {fr:"diez", ipa:"dyehs", en:"10"},
      {fr:"once", ipa:"ohn-seh", en:"11"},
      {fr:"doce", ipa:"doh-seh", en:"12"},
      {fr:"trece", ipa:"treh-seh", en:"13"},
      {fr:"catorce", ipa:"kah-tor-seh", en:"14"},
      {fr:"quince", ipa:"keen-seh", en:"15"},
      {fr:"dieciséis", ipa:"dyeh-see-says", en:"16"},
      {fr:"diecisiete", ipa:"dyeh-see-syeh-teh", en:"17"},
      {fr:"dieciocho", ipa:"dyeh-see-oh-choh", en:"18"},
      {fr:"diecinueve", ipa:"dyeh-see-nweh-beh", en:"19"},
      {fr:"veinte", ipa:"bayn-teh", en:"20"}
    ],
    phrases:[
      {fr:"¿Cuánto cuesta?", ipa:"kwahn-toh kwes-tah", en:"How much does it cost?"},
      {fr:"Son diez euros.", ipa:"sohn dyehs eh-oo-rohs", en:"It's ten euros."},
      {fr:"Necesito cinco billetes.", ipa:"neh-seh-see-toh seen-koh bee-yeh-tes", en:"I need five tickets."},
      {fr:"Es el número siete.", ipa:"es el noo-meh-roh syeh-teh", en:"It's number seven."},
      {fr:"Una mesa para tres, por favor.", ipa:"oo-nah meh-sah pah-rah trehs por fah-bor", en:"A table for three, please."},
      {fr:"Habitación número nueve.", ipa:"ah-bee-tah-syohn noo-meh-roh nweh-beh", en:"Room number nine."},
      {fr:"Son las ocho.", ipa:"sohn lahs oh-choh", en:"It's eight o'clock."},
      {fr:"Quince minutos a pie.", ipa:"keen-seh mee-noo-tohs ah pyeh", en:"Fifteen minutes on foot."}
    ],
    grammar:"'Uno' changes to 'un' before masculine nouns (un café) and 'una' before feminine nouns (una mesa). 16-19 are one word in modern Spanish: dieciséis, diecisiete, dieciocho, diecinueve.",
    practice:["Count 0–20 out loud three times.","Practice prices: 'cinco euros', 'doce euros', 'dieciocho euros'."]
  },
  { day:5, title:"Numbers 20–100", titleNative:"Números 20–100", focus:"Higher numbers for prices and addresses.",
    vocab:[
      {fr:"veinte", ipa:"bayn-teh", en:"20"},
      {fr:"veintiuno", ipa:"bayn-tyoo-noh", en:"21"},
      {fr:"veintidós", ipa:"bayn-tee-dohs", en:"22"},
      {fr:"treinta", ipa:"trayn-tah", en:"30"},
      {fr:"cuarenta", ipa:"kwah-rehn-tah", en:"40"},
      {fr:"cincuenta", ipa:"seen-kwehn-tah", en:"50"},
      {fr:"sesenta", ipa:"seh-sehn-tah", en:"60"},
      {fr:"setenta", ipa:"seh-tehn-tah", en:"70"},
      {fr:"ochenta", ipa:"oh-chehn-tah", en:"80"},
      {fr:"noventa", ipa:"noh-behn-tah", en:"90"},
      {fr:"cien", ipa:"syehn", en:"100"},
      {fr:"mil", ipa:"meel", en:"1,000"},
      {fr:"euro / euros", ipa:"eh-oo-roh", en:"euro / euros"},
      {fr:"céntimo", ipa:"sehn-tee-moh", en:"cent"}
    ],
    phrases:[
      {fr:"Treinta y cinco euros, por favor.", ipa:"trayn-tah ee seen-koh eh-oo-rohs por fah-bor", en:"Thirty-five euros, please."},
      {fr:"¿Cuánto cuesta en total?", ipa:"kwahn-toh kwes-tah en toh-tahl", en:"How much is it in total?"},
      {fr:"Son ochenta euros.", ipa:"sohn oh-chehn-tah eh-oo-rohs", en:"It's eighty euros."},
      {fr:"Tengo cincuenta euros.", ipa:"tehn-goh seen-kwehn-tah eh-oo-rohs", en:"I have fifty euros."},
      {fr:"El precio es setenta.", ipa:"el preh-syoh es seh-tehn-tah", en:"The price is seventy."},
      {fr:"¿Tiene algo por menos de cien euros?", ipa:"tyeh-neh ahl-goh por meh-nohs deh syehn eh-oo-rohs", en:"Do you have something under a hundred euros?"},
      {fr:"Es demasiado caro.", ipa:"es deh-mah-syah-doh kah-roh", en:"It's too expensive."},
      {fr:"Quédese con el cambio.", ipa:"keh-deh-seh kon el kahm-byoh", en:"Keep the change."}
    ],
    grammar:"'Cien' = exactly 100. 'Ciento' = 100-something (ciento veinte = 120). Numbers 21-29 are one word (veintiuno, veintidós) but 31+ use 'y': treinta y uno. The 'y' (and) goes between tens and units.",
    practice:["Say these prices: 25€, 47€, 72€, 88€, 95€.","Read a Spanish street address number out loud."]
  },
  { day:6, title:"Days, Months & Time", titleNative:"Días, Meses y el Tiempo", focus:"Schedules, reservations, plans.",
    vocab:[
      {fr:"lunes", ipa:"loo-nes", en:"Monday"},
      {fr:"martes", ipa:"mar-tes", en:"Tuesday"},
      {fr:"miércoles", ipa:"myair-koh-les", en:"Wednesday"},
      {fr:"jueves", ipa:"hweh-bes", en:"Thursday"},
      {fr:"viernes", ipa:"byair-nes", en:"Friday"},
      {fr:"sábado", ipa:"sah-bah-doh", en:"Saturday"},
      {fr:"domingo", ipa:"doh-meen-goh", en:"Sunday"},
      {fr:"hoy", ipa:"oy", en:"today"},
      {fr:"mañana", ipa:"mah-nyah-nah", en:"tomorrow"},
      {fr:"ayer", ipa:"ah-yair", en:"yesterday"},
      {fr:"esta mañana", ipa:"es-tah mah-nyah-nah", en:"this morning"},
      {fr:"esta noche", ipa:"es-tah noh-cheh", en:"tonight"},
      {fr:"ahora", ipa:"ah-oh-rah", en:"now"},
      {fr:"más tarde", ipa:"mahs tar-deh", en:"later"}
    ],
    phrases:[
      {fr:"¿Qué día es hoy?", ipa:"keh dee-ah es oy", en:"What day is it today?"},
      {fr:"Hoy es martes.", ipa:"oy es mar-tes", en:"Today is Tuesday."},
      {fr:"El museo cierra los lunes.", ipa:"el moo-seh-oh syair-rah lohs loo-nes", en:"The museum is closed on Mondays."},
      {fr:"Salimos el viernes por la mañana.", ipa:"sah-lee-mohs el byair-nes por lah mah-nyah-nah", en:"We leave Friday morning."},
      {fr:"La reserva es para el sábado por la noche.", ipa:"lah reh-sair-bah es pah-rah el sah-bah-doh por lah noh-cheh", en:"The reservation is for Saturday night."},
      {fr:"¿A qué hora abre el domingo?", ipa:"ah keh oh-rah ah-breh el doh-meen-goh", en:"What time does it open on Sunday?"},
      {fr:"Nos vemos mañana por la mañana.", ipa:"nohs beh-mohs mah-nyah-nah por lah mah-nyah-nah", en:"We'll see each other tomorrow morning."},
      {fr:"Esta tarde vamos al Prado.", ipa:"es-tah tar-deh bah-mohs ahl prah-doh", en:"This afternoon we're going to the Prado."}
    ],
    grammar:"Days and months are NOT capitalized in Spanish. 'Mañana' means both 'tomorrow' AND 'morning' — context tells you which: 'mañana' alone = tomorrow; 'por la mañana' = in the morning.",
    practice:["Say what day it is today in Spanish.","Plan a week: 'El lunes voy al Prado, el martes voy a...'"]
  },
  { day:7, title:"Week 1 Review", titleNative:"Repaso Semana 1 + Mini-conversación", focus:"Pull it all together.",
    vocab:[
      {fr:"¿Cómo está usted?", ipa:"koh-moh es-tah oos-ted", en:"How are you? (formal)"},
      {fr:"Muy bien, ¿y usted?", ipa:"mwee byehn ee oos-ted", en:"Very well, and you?"},
      {fr:"Buen día", ipa:"bwehn dee-ah", en:"Good day"},
      {fr:"Buenas noches", ipa:"bweh-nahs noh-ches", en:"Good night"},
      {fr:"Hasta pronto", ipa:"ahs-tah prohn-toh", en:"See you soon"},
      {fr:"Hasta mañana", ipa:"ahs-tah mah-nyah-nah", en:"See you tomorrow"},
      {fr:"Bienvenido", ipa:"byehn-beh-nee-doh", en:"Welcome"},
      {fr:"Hasta luego", ipa:"ahs-tah lweh-goh", en:"See you later"}
    ],
    phrases:[
      {fr:"Buenos días, señora. ¿Cómo está?", ipa:"bweh-nos dee-ahs sehn-yoh-rah koh-moh es-tah", en:"Good morning, ma'am. How are you?"},
      {fr:"Muy bien, gracias. ¿Y usted?", ipa:"mwee byehn grah-syahs ee oos-ted", en:"Very well, thanks. And you?"},
      {fr:"¡Buen día! ¡Hasta luego!", ipa:"bwehn dee-ah ahs-tah lweh-goh", en:"Good day! See you later!"},
      {fr:"Encantado, me llamo Jimmy.", ipa:"en-kahn-tah-doh meh yah-moh jimmy", en:"Pleased to meet you, I'm Jimmy."},
      {fr:"Soy americano, de Dallas.", ipa:"soy ah-meh-ree-kah-noh deh dah-lahs", en:"I'm American, from Dallas."},
      {fr:"¿Es correcto aquí?", ipa:"es koh-rek-toh ah-kee", en:"Is this the right place?"},
      {fr:"¡Hasta pronto! ¡Buenas noches!", ipa:"ahs-tah prohn-toh bweh-nahs noh-ches", en:"See you soon! Good night!"},
      {fr:"Gracias por todo, señor.", ipa:"grah-syahs por toh-doh sehn-yor", en:"Thank you for everything, sir."}
    ],
    grammar:"Use 'señor' (sir), 'señora' (ma'am) when addressing strangers. In Spain, people often move to first names quickly. In Latin America, titles are used more consistently throughout a conversation.",
    practice:["Imagine a morning: greet a baker, buy bread, leave. Say it all in Spanish.","Try the full mini-dialogue with imaginary people three times."]
  },
  { day:8, title:"At the Café — Drinks", titleNative:"En el Café — Bebidas", focus:"Order coffee, water, wine like a local.",
    vocab:[
      {fr:"un café", ipa:"oon kah-feh", en:"an espresso"},
      {fr:"un café con leche", ipa:"oon kah-feh kon leh-cheh", en:"coffee with lots of milk"},
      {fr:"un cortado", ipa:"oon kor-tah-doh", en:"espresso with a splash of milk"},
      {fr:"un té", ipa:"oon teh", en:"a tea"},
      {fr:"un chocolate caliente", ipa:"oon choh-koh-lah-teh kah-lyehn-teh", en:"a hot chocolate"},
      {fr:"un agua", ipa:"oon ah-gwah", en:"a water"},
      {fr:"un agua con gas", ipa:"oon ah-gwah kon gahs", en:"a sparkling water"},
      {fr:"una copa de vino", ipa:"oo-nah koh-pah deh bee-noh", en:"a glass of wine"},
      {fr:"tinto / blanco / rosado", ipa:"teen-toh / blahn-koh / roh-sah-doh", en:"red / white / rosé"},
      {fr:"una cerveza", ipa:"oo-nah sair-beh-sah", en:"a beer"},
      {fr:"un zumo de naranja", ipa:"oon soo-moh deh nah-rahn-hah", en:"an orange juice"},
      {fr:"con / sin", ipa:"kon / seen", en:"with / without"}
    ],
    phrases:[
      {fr:"Un café, por favor.", ipa:"oon kah-feh por fah-bor", en:"An espresso, please."},
      {fr:"Quisiera una copa de vino tinto.", ipa:"kee-syeh-rah oo-nah koh-pah deh bee-noh teen-toh", en:"I'd like a glass of red wine."},
      {fr:"Una jarra de agua, por favor.", ipa:"oo-nah hah-rah deh ah-gwah por fah-bor", en:"A jug of water, please."},
      {fr:"Un café con leche y dos cruasanes.", ipa:"oon kah-feh kon leh-cheh ee dohs kroo-ah-sah-nes", en:"A café con leche and two croissants."},
      {fr:"¿Tienen té verde?", ipa:"tyeh-nen teh bair-deh", en:"Do you have green tea?"},
      {fr:"Una copa de rosado, por favor.", ipa:"oo-nah koh-pah deh roh-sah-doh por fah-bor", en:"A glass of rosé, please."},
      {fr:"Sin azúcar, por favor.", ipa:"seen ah-soo-kar por fah-bor", en:"Without sugar, please."},
      {fr:"Otra cerveza, gracias.", ipa:"oh-trah sair-beh-sah grah-syahs", en:"Another beer, thank you."}
    ],
    grammar:"'Un café' in Spain = espresso. 'Café con leche' is half espresso, half hot milk — the morning staple. A 'cortado' is espresso with a small splash of milk. Agua del grifo (tap water) is fine to drink in most of Spain.",
    practice:["Order three different drinks out loud.","Practice: 'Una jarra de agua del grifo, por favor' — saves you from paying for bottled water."]
  },
  { day:9, title:"At the Café — Food", titleNative:"En el Café — Comida", focus:"Bread, pastries, simple café fare.",
    vocab:[
      {fr:"un cruasán", ipa:"oon kroo-ah-sahn", en:"a croissant"},
      {fr:"una tostada", ipa:"oo-nah tohs-tah-dah", en:"toast with olive oil"},
      {fr:"un bocadillo", ipa:"oon boh-kah-dee-yoh", en:"a baguette sandwich"},
      {fr:"una tortilla española", ipa:"oo-nah tor-tee-yah es-pah-nyoh-lah", en:"Spanish omelette (potato)"},
      {fr:"una ensalada", ipa:"oo-nah en-sah-lah-dah", en:"a salad"},
      {fr:"una sopa", ipa:"oo-nah soh-pah", en:"a soup"},
      {fr:"unas patatas fritas", ipa:"oo-nahs pah-tah-tahs free-tahs", en:"fries / chips"},
      {fr:"una tapa", ipa:"oo-nah tah-pah", en:"a small bite / appetizer"},
      {fr:"una ración", ipa:"oo-nah rah-syohn", en:"a larger shareable portion"},
      {fr:"el queso", ipa:"el keh-soh", en:"cheese"},
      {fr:"el jamón", ipa:"el hah-mohn", en:"ham"},
      {fr:"el pan", ipa:"el pahn", en:"bread"}
    ],
    phrases:[
      {fr:"Quisiera una tostada y un café.", ipa:"kee-syeh-rah oo-nah tohs-tah-dah ee oon kah-feh", en:"I'd like toast and a coffee."},
      {fr:"¿Tienen bocadillos?", ipa:"tyeh-nen boh-kah-dee-yohs", en:"Do you have sandwiches?"},
      {fr:"Una ración de tortilla, por favor.", ipa:"oo-nah rah-syohn deh tor-tee-yah por fah-bor", en:"A portion of omelette, please."},
      {fr:"¿Cuál es el especial del día?", ipa:"kwahl es el es-peh-syahl del dee-ah", en:"What's today's special?"},
      {fr:"Voy a tomar el bocadillo de jamón.", ipa:"boy ah toh-mar el boh-kah-dee-yoh deh hah-mohn", en:"I'll have the ham sandwich."},
      {fr:"Con aceite de oliva, por favor.", ipa:"kon ah-say-teh deh oh-lee-bah por fah-bor", en:"With olive oil, please."},
      {fr:"¿Está buena la tortilla aquí?", ipa:"es-tah bweh-nah lah tor-tee-yah ah-kee", en:"Is the omelette good here?"},
      {fr:"Para llevar, por favor.", ipa:"pah-rah yeh-bar por fah-bor", en:"To go, please."}
    ],
    grammar:"'Tostada' in Spain = toasted bread rubbed with tomato and olive oil — not butter. Tapas are small free bites at the bar in some regions (Granada still does this). A 'ración' is a larger shareable portion — order several to share.",
    practice:["Order a Spanish breakfast: tostada con aceite, zumo de naranja, café con leche.","Try: 'Una ración de jamón y una cerveza.'"]
  },
  { day:10, title:"At the Restaurant", titleNative:"En el Restaurante", focus:"The full restaurant flow.",
    vocab:[
      {fr:"una mesa para dos", ipa:"oo-nah meh-sah pah-rah dohs", en:"a table for two"},
      {fr:"la carta", ipa:"lah kar-tah", en:"the menu"},
      {fr:"el menú del día", ipa:"el meh-noo del dee-ah", en:"the fixed-price daily menu"},
      {fr:"el primer plato", ipa:"el pree-mair plah-toh", en:"the first course"},
      {fr:"el segundo plato", ipa:"el seh-goon-doh plah-toh", en:"the main course"},
      {fr:"el postre", ipa:"el pohs-treh", en:"dessert"},
      {fr:"Quisiera", ipa:"kee-syeh-rah", en:"I'd like"},
      {fr:"Voy a tomar", ipa:"boy ah toh-mar", en:"I'll have"},
      {fr:"la cuenta", ipa:"lah kwehn-tah", en:"the bill"},
      {fr:"con tarjeta", ipa:"kon tar-heh-tah", en:"by card"},
      {fr:"en efectivo", ipa:"en eh-fek-tee-boh", en:"in cash"},
      {fr:"la propina", ipa:"lah proh-pee-nah", en:"the tip"}
    ],
    phrases:[
      {fr:"Buenas noches, una mesa para dos, por favor.", ipa:"bweh-nahs noh-ches oo-nah meh-sah pah-rah dohs por fah-bor", en:"Good evening, a table for two, please."},
      {fr:"La cuenta, por favor.", ipa:"lah kwehn-tah por fah-bor", en:"The bill, please."},
      {fr:"¿Se puede pagar con tarjeta?", ipa:"seh pweh-deh pah-gar kon tar-heh-tah", en:"Can we pay by card?"},
      {fr:"¿Nos trae la carta, por favor?", ipa:"nohs trah-eh lah kar-tah por fah-bor", en:"Could you bring us the menu, please?"},
      {fr:"Voy a tomar el menú del día.", ipa:"boy ah toh-mar el meh-noo del dee-ah", en:"I'll have the set menu."},
      {fr:"¿Tiene opciones sin gluten?", ipa:"tyeh-neh op-syoh-nes seen gloo-ten", en:"Do you have gluten-free options?"},
      {fr:"¿Está incluido el servicio?", ipa:"es-tah een-kloo-ee-doh el sair-bee-syoh", en:"Is service included?"},
      {fr:"Tenemos una reserva a nombre de Cannon.", ipa:"teh-neh-mohs oo-nah reh-sair-bah ah nohm-breh deh kah-nohn", en:"We have a reservation under Cannon."}
    ],
    grammar:"The 'menú del día' is Spain's greatest gift to travelers — a 3-course lunch with drink for €10-15, available weekdays at most restaurants. Dinner starts at 9pm or later — going at 7pm marks you as a tourist immediately.",
    practice:["Practice the full sequence: greet, ask for table, get menu, order, ask for bill.","Memorize: 'La cuenta, por favor' — your most-used phrase."]
  },
  { day:11, title:"Common Foods", titleNative:"Comida Común", focus:"Recognize what's on the menu.",
    vocab:[
      {fr:"el pollo", ipa:"el poh-yoh", en:"chicken"},
      {fr:"la ternera", ipa:"lah tair-neh-rah", en:"beef / veal"},
      {fr:"el cerdo", ipa:"el sair-doh", en:"pork"},
      {fr:"el pescado", ipa:"el pes-kah-doh", en:"fish"},
      {fr:"el salmón", ipa:"el sahl-mohn", en:"salmon"},
      {fr:"el cordero", ipa:"el kor-deh-roh", en:"lamb"},
      {fr:"el pato", ipa:"el pah-toh", en:"duck"},
      {fr:"las verduras", ipa:"lahs bair-doo-rahs", en:"vegetables"},
      {fr:"las patatas", ipa:"lahs pah-tah-tahs", en:"potatoes"},
      {fr:"el arroz", ipa:"el ah-rohs", en:"rice"},
      {fr:"los huevos", ipa:"lohs weh-bohs", en:"eggs"},
      {fr:"la mantequilla", ipa:"lah mahn-teh-kee-yah", en:"butter"},
      {fr:"la sal / la pimienta", ipa:"lah sahl / lah pee-myehn-tah", en:"salt / pepper"}
    ],
    phrases:[
      {fr:"¿Qué recomienda usted?", ipa:"keh reh-koh-myehn-dah oos-ted", en:"What do you recommend?"},
      {fr:"Voy a tomar el pollo.", ipa:"boy ah toh-mar el poh-yoh", en:"I'll have the chicken."},
      {fr:"¿Está fresco el salmón hoy?", ipa:"es-tah fres-koh el sahl-mohn oy", en:"Is the salmon fresh today?"},
      {fr:"Quisiera el pato, por favor.", ipa:"kee-syeh-rah el pah-toh por fah-bor", en:"I'd like the duck, please."},
      {fr:"Sin cerdo para mí, gracias.", ipa:"seen sair-doh pah-rah mee grah-syahs", en:"No pork for me, thanks."},
      {fr:"¿Con verduras o con patatas?", ipa:"kon bair-doo-rahs oh kon pah-tah-tahs", en:"With vegetables or potatoes?"},
      {fr:"Sal y pimienta, por favor.", ipa:"sahl ee pee-myehn-tah por fah-bor", en:"Salt and pepper, please."},
      {fr:"¿Cómo está cocinado el cerdo?", ipa:"koh-moh es-tah koh-see-nah-doh el sair-doh", en:"How is the pork cooked?"}
    ],
    grammar:"Spain is serious about ham — 'jamón ibérico' (black-footed pigs) and 'jamón serrano' (cured mountain ham) are everywhere. 'Paella' is from Valencia — the Madrid version is often tourist-grade. Go for cocido madrileño in Madrid instead.",
    practice:["Find a Spanish restaurant menu online and identify 5 dishes.","Practice ordering each protein: 'Voy a tomar el pollo / el salmón...'"]
  },
  { day:12, title:"Dietary Preferences & Allergies", titleNative:"Preferencias y Alergias", focus:"Allergies, vegetarian, gluten-free.",
    vocab:[
      {fr:"vegetariano / vegetariana", ipa:"beh-heh-tah-ryah-noh / nah", en:"vegetarian (m/f)"},
      {fr:"vegano / vegana", ipa:"beh-gah-noh / nah", en:"vegan (m/f)"},
      {fr:"sin gluten", ipa:"seen gloo-ten", en:"gluten-free"},
      {fr:"sin lactosa", ipa:"seen lahk-toh-sah", en:"lactose-free"},
      {fr:"alérgico a", ipa:"ah-lair-hee-koh ah", en:"allergic to"},
      {fr:"los frutos secos", ipa:"lohs froo-tohs seh-kohs", en:"nuts"},
      {fr:"el marisco", ipa:"el mah-rees-koh", en:"shellfish / seafood"},
      {fr:"poco hecho", ipa:"poh-koh eh-choh", en:"rare"},
      {fr:"al punto", ipa:"ahl poon-toh", en:"medium"},
      {fr:"bien hecho", ipa:"byehn eh-choh", en:"well done"}
    ],
    phrases:[
      {fr:"Soy vegetariano.", ipa:"soy beh-heh-tah-ryah-noh", en:"I'm vegetarian."},
      {fr:"Soy alérgico a los frutos secos.", ipa:"soy ah-lair-hee-koh ah lohs froo-tohs seh-kohs", en:"I'm allergic to nuts."},
      {fr:"Al punto, por favor.", ipa:"ahl poon-toh por fah-bor", en:"Medium, please."},
      {fr:"¿Tiene gluten este plato?", ipa:"tyeh-neh gloo-ten es-teh plah-toh", en:"Does this dish contain gluten?"},
      {fr:"No como cerdo.", ipa:"noh koh-moh sair-doh", en:"I don't eat pork."},
      {fr:"¿Tienen opciones veganas?", ipa:"tyeh-nen op-syoh-nes beh-gah-nahs", en:"Do you have vegan options?"},
      {fr:"Poco hecho, por favor.", ipa:"poh-koh eh-choh por fah-bor", en:"Rare, please."},
      {fr:"Sin lactosa, si es posible.", ipa:"seen lahk-toh-sah see es poh-see-bleh", en:"Lactose-free, if possible."}
    ],
    grammar:"Being vegetarian/vegan in Spain is challenging — jamón is in everything. Always ask '¿Tiene carne?' (Does it have meat?). 'Caldo de carne' (meat broth) is used in many 'vegetarian' soups. Always double-check.",
    practice:["Imagine a real dietary need and say it in Spanish.","Order a steak three ways: poco hecho, al punto, bien hecho."]
  },
  { day:13, title:"Paying & Tipping", titleNative:"Pagar y la Propina", focus:"Wrap up the meal smoothly.",
    vocab:[
      {fr:"la cuenta", ipa:"lah kwehn-tah", en:"the bill"},
      {fr:"pagar por separado", ipa:"pah-gar por seh-pah-rah-doh", en:"pay separately"},
      {fr:"¿Aceptan tarjetas?", ipa:"ah-sep-tahn tar-heh-tahs", en:"Do you accept cards?"},
      {fr:"el cambio", ipa:"el kahm-byoh", en:"the change"},
      {fr:"invito yo", ipa:"een-bee-toh yoh", en:"it's on me"},
      {fr:"dividir en dos", ipa:"dee-bee-deer en dohs", en:"split in two"},
      {fr:"el servicio", ipa:"el sair-bee-syoh", en:"service charge"},
      {fr:"en efectivo", ipa:"en eh-fek-tee-boh", en:"in cash"}
    ],
    phrases:[
      {fr:"¿Nos trae la cuenta, por favor?", ipa:"nohs trah-eh lah kwehn-tah por fah-bor", en:"Could you bring the bill, please?"},
      {fr:"¿Pagamos por separado?", ipa:"pah-gah-mohs por seh-pah-rah-doh", en:"Are we paying separately?"},
      {fr:"¿Aceptan tarjetas de crédito?", ipa:"ah-sep-tahn tar-heh-tahs deh kreh-dee-toh", en:"Do you accept credit cards?"},
      {fr:"Quédese con el cambio.", ipa:"keh-deh-seh kon el kahm-byoh", en:"Keep the change."},
      {fr:"Invito yo esta vez.", ipa:"een-bee-toh yoh es-tah bes", en:"It's on me this time."},
      {fr:"¿Pueden dividirlo en dos?", ipa:"pweh-den dee-bee-deer-loh en dohs", en:"Can you split it in two?"},
      {fr:"¿Está incluido el servicio?", ipa:"es-tah een-kloo-ee-doh el sair-bee-syoh", en:"Is service included?"},
      {fr:"Pago en efectivo.", ipa:"pah-goh en eh-fek-tee-boh", en:"I'm paying in cash."}
    ],
    grammar:"Tipping in Spain: service is usually included. Leaving a euro or two for coffee, 5% for a meal is appreciated but never expected. Never feel obligated to tip 15-20% — that's an American custom that will confuse people.",
    practice:["Practice asking for the bill, then paying.","Say 'Quédese con el cambio' as a small tip gesture."]
  },
  { day:14, title:"Week 2 Review — Café Day", titleNative:"Repaso Semana 2 — Día de Café", focus:"Live a full café day in Spanish.",
    vocab:[
      {fr:"el desayuno", ipa:"el deh-sah-yoo-noh", en:"breakfast"},
      {fr:"el almuerzo", ipa:"el ahl-mwair-soh", en:"lunch"},
      {fr:"la merienda", ipa:"lah meh-ryehn-dah", en:"afternoon snack"},
      {fr:"la cena", ipa:"lah seh-nah", en:"dinner"},
      {fr:"el aperitivo", ipa:"el ah-peh-ree-tee-boh", en:"aperitif"},
      {fr:"la sobremesa", ipa:"lah soh-breh-meh-sah", en:"after-meal conversation (uniquely Spanish)"},
      {fr:"la terraza", ipa:"lah teh-rah-sah", en:"outdoor terrace"},
      {fr:"para llevar", ipa:"pah-rah yeh-bar", en:"to go"},
      {fr:"para aquí", ipa:"pah-rah ah-kee", en:"to eat in"}
    ],
    phrases:[
      {fr:"Estaba delicioso, gracias.", ipa:"es-tah-bah deh-lee-syoh-soh grah-syahs", en:"That was delicious, thank you."},
      {fr:"¿Podemos sentarnos en la terraza?", ipa:"poh-deh-mohs sen-tar-nohs en lah teh-rah-sah", en:"Can we sit on the terrace?"},
      {fr:"¿A qué hora es el desayuno?", ipa:"ah keh oh-rah es el deh-sah-yoo-noh", en:"What time is breakfast?"},
      {fr:"Un aperitivo antes de la cena.", ipa:"oon ah-peh-ree-tee-boh ahn-tes deh lah seh-nah", en:"An aperitif before dinner."},
      {fr:"Quisiera lo mismo.", ipa:"kee-syeh-rah loh mees-moh", en:"I'd like the same thing."},
      {fr:"¿Es una especialidad de la casa?", ipa:"es oo-nah es-peh-syah-lee-dahd deh lah kah-sah", en:"Is it a house specialty?"},
      {fr:"¡Buen provecho!", ipa:"bwehn proh-beh-choh", en:"Enjoy your meal!"},
      {fr:"¿Para llevar o para aquí?", ipa:"pah-rah yeh-bar oh pah-rah ah-kee", en:"To go or to eat in?"}
    ],
    grammar:"'La sobremesa' has no English equivalent — it's the time spent chatting at the table after a meal. In Spain, lunch can last 2-3 hours. Restaurants don't rush you. Dinner starts at 9pm — going at 7pm marks you instantly as a tourist.",
    practice:["Walk through a day in Spanish: morning café, lunch, evening tapas.","Try all week 2 vocab in flashcard mode."]
  },
  { day:15, title:"Hotel Check-In", titleNative:"En el Hotel — Llegada", focus:"Check in and get settled.",
    vocab:[
      {fr:"el hotel", ipa:"el oh-tel", en:"the hotel"},
      {fr:"la recepción", ipa:"lah reh-sep-syohn", en:"the front desk"},
      {fr:"la reserva", ipa:"lah reh-sair-bah", en:"the reservation"},
      {fr:"la habitación", ipa:"lah ah-bee-tah-syohn", en:"the room"},
      {fr:"el equipaje", ipa:"el eh-kee-pah-heh", en:"the luggage"},
      {fr:"el ascensor", ipa:"el ah-sehn-sor", en:"the elevator / lift"},
      {fr:"la planta baja", ipa:"lah plahn-tah bah-hah", en:"ground floor"},
      {fr:"el primer piso", ipa:"el pree-mair pee-soh", en:"1st floor (US 2nd)"},
      {fr:"la llave", ipa:"lah yah-beh", en:"the key"},
      {fr:"el pasaporte", ipa:"el pah-sah-por-teh", en:"the passport"}
    ],
    phrases:[
      {fr:"Tengo una reserva a nombre de Cannon.", ipa:"tehn-goh oo-nah reh-sair-bah ah nohm-breh deh kah-nohn", en:"I have a reservation under Cannon."},
      {fr:"¿Cuál es la contraseña del wifi?", ipa:"kwahl es lah kon-trah-seh-nyah del wee-fee", en:"What's the wifi password?"},
      {fr:"¿A qué hora es el desayuno?", ipa:"ah keh oh-rah es el deh-sah-yoo-noh", en:"What time is breakfast?"},
      {fr:"¿En qué planta está mi habitación?", ipa:"en keh plahn-tah es-tah mee ah-bee-tah-syohn", en:"What floor is my room on?"},
      {fr:"¿Pueden llamar a un taxi?", ipa:"pweh-den yah-mar ah oon tahk-see", en:"Can you call a taxi?"},
      {fr:"¿Hay caja fuerte en la habitación?", ipa:"ay kah-hah fwair-teh en lah ah-bee-tah-syohn", en:"Is there a safe in the room?"},
      {fr:"¿A qué hora es el check-out?", ipa:"ah keh oh-rah es el chek-owt", en:"What time is check-out?"},
      {fr:"¿Pueden guardar mi equipaje?", ipa:"pweh-den gwahr-dar mee eh-kee-pah-heh", en:"Can you hold my luggage?"}
    ],
    grammar:"Same floor confusion as France: 'planta baja' = ground floor (US 1st). 'Primer piso' = 1st floor (US 2nd). Room 305 on the 'tercer piso' is the US 4th floor. Spain and Europe use the same system.",
    practice:["Role-play arriving at your hotel — say your name, check in, ask about wifi.","Ask three things at the front desk: breakfast time, wifi, luggage storage."]
  },
  { day:16, title:"Hotel Room", titleNative:"En el Hotel — La Habitación", focus:"What you need in your room.",
    vocab:[
      {fr:"el baño", ipa:"el bah-nyoh", en:"bathroom"},
      {fr:"la ducha", ipa:"lah doo-chah", en:"shower"},
      {fr:"la cama", ipa:"lah kah-mah", en:"bed"},
      {fr:"las sábanas", ipa:"lahs sah-bah-nahs", en:"sheets"},
      {fr:"las toallas", ipa:"lahs toh-ah-yahs", en:"towels"},
      {fr:"la almohada", ipa:"lah ahl-moh-ah-dah", en:"pillow"},
      {fr:"el aire acondicionado", ipa:"el ay-reh ah-kon-dee-syoh-nah-doh", en:"air conditioning"},
      {fr:"la calefacción", ipa:"lah kah-leh-fak-syohn", en:"heating"},
      {fr:"el wifi", ipa:"el wee-fee", en:"wifi"},
      {fr:"la caja fuerte", ipa:"lah kah-hah fwair-teh", en:"the safe"}
    ],
    phrases:[
      {fr:"El aire acondicionado no funciona.", ipa:"el ay-reh ah-kon-dee-syoh-nah-doh noh foon-syoh-nah", en:"The AC isn't working."},
      {fr:"No hay toallas.", ipa:"noh ay toh-ah-yahs", en:"There are no towels."},
      {fr:"¿Me puede traer otra almohada?", ipa:"meh pweh-deh trah-air oh-trah ahl-moh-ah-dah", en:"Can you bring me another pillow?"},
      {fr:"La ducha está fría.", ipa:"lah doo-chah es-tah free-ah", en:"The shower is cold."},
      {fr:"La puerta no cierra con llave.", ipa:"lah pwair-tah noh syair-rah kon yah-beh", en:"The door doesn't lock."},
      {fr:"Falta papel higiénico.", ipa:"fahl-tah pah-pel ee-hyeh-nee-koh", en:"There's no toilet paper."},
      {fr:"¿Pueden traerme sábanas limpias?", ipa:"pweh-den trah-air-meh sah-bah-nahs leem-pyahs", en:"Can you bring me clean sheets?"},
      {fr:"Hay mucho ruido en la calle.", ipa:"ay moo-choh rrwee-doh en lah kah-yeh", en:"There's a lot of noise from the street."}
    ],
    grammar:"To ask for something politely: '¿Me puede traer...?' (Can you bring me...?) or '¿Podría traerme...?' (Could you bring me...?). Both work — the second is slightly more formal. Always add 'por favor'.",
    practice:["Imagine three problems with your room. Say each one in Spanish.","Practice: '¿Me puede traer [item], por favor?' for towels, pillows, water."]
  },
  { day:17, title:"Asking for Directions", titleNative:"Pedir Direcciones", focus:"Find anywhere in Spain.",
    vocab:[
      {fr:"¿Dónde está...?", ipa:"dohn-deh es-tah", en:"Where is...?"},
      {fr:"a la derecha", ipa:"ah lah deh-reh-chah", en:"to the right"},
      {fr:"a la izquierda", ipa:"ah lah ees-kyair-dah", en:"to the left"},
      {fr:"todo recto", ipa:"toh-doh rek-toh", en:"straight ahead"},
      {fr:"la calle", ipa:"lah kah-yeh", en:"the street"},
      {fr:"la plaza", ipa:"lah plah-sah", en:"the square / plaza"},
      {fr:"el semáforo", ipa:"el seh-mah-foh-roh", en:"the traffic light"},
      {fr:"la esquina", ipa:"lah es-kee-nah", en:"the corner"},
      {fr:"cerca", ipa:"sair-kah", en:"close / nearby"},
      {fr:"lejos", ipa:"leh-hohs", en:"far"}
    ],
    phrases:[
      {fr:"Perdone, ¿dónde está el metro?", ipa:"pair-doh-neh dohn-deh es-tah el meh-troh", en:"Excuse me, where is the metro?"},
      {fr:"¿Está lejos de aquí?", ipa:"es-tah leh-hohs deh ah-kee", en:"Is it far from here?"},
      {fr:"Gire a la derecha y luego todo recto.", ipa:"hee-reh ah lah deh-reh-chah ee lweh-goh toh-doh rek-toh", en:"Turn right and then straight ahead."},
      {fr:"¿Dónde está el Museo del Prado?", ipa:"dohn-deh es-tah el moo-seh-oh del prah-doh", en:"Where is the Prado Museum?"},
      {fr:"¿A cuántos minutos a pie?", ipa:"ah kwahn-tohs mee-noo-tohs ah pyeh", en:"How many minutes on foot?"},
      {fr:"Estoy perdido.", ipa:"es-toy pair-dee-doh", en:"I'm lost."},
      {fr:"Siga todo recto hasta la esquina.", ipa:"see-gah toh-doh rek-toh ahs-tah lah es-kee-nah", en:"Continue straight to the corner."},
      {fr:"Tome la primera a la izquierda.", ipa:"toh-meh lah pree-meh-rah ah lah ees-kyair-dah", en:"Take the first left."}
    ],
    grammar:"Always start with 'Perdone' (formal) before asking for directions. In Spain, strangers are genuinely helpful — they'll sometimes walk you partway there. Be ready for detailed answers.",
    practice:["Ask for: the metro, the Prado, a pharmacy, a bathroom.","Imagine the answers: 'a la derecha, a la izquierda, todo recto'."]
  },
  { day:18, title:"Metro & Transport", titleNative:"El Metro y el Transporte", focus:"Get around the city underground.",
    vocab:[
      {fr:"el metro", ipa:"el meh-troh", en:"the metro / subway"},
      {fr:"el autobús", ipa:"el ow-toh-boos", en:"the bus"},
      {fr:"el billete", ipa:"el bee-yeh-teh", en:"the ticket"},
      {fr:"el abono", ipa:"el ah-boh-noh", en:"the travel pass"},
      {fr:"la línea", ipa:"lah lee-neh-ah", en:"the line"},
      {fr:"la dirección", ipa:"lah dee-rek-syohn", en:"the direction / destination"},
      {fr:"el andén", ipa:"el ahn-den", en:"the platform"},
      {fr:"transbordo", ipa:"trans-bor-doh", en:"transfer / connection"},
      {fr:"la parada", ipa:"lah pah-rah-dah", en:"the stop"},
      {fr:"la estación", ipa:"lah es-tah-syohn", en:"the station"}
    ],
    phrases:[
      {fr:"Un billete sencillo, por favor.", ipa:"oon bee-yeh-teh sehn-see-yoh por fah-bor", en:"A single ticket, please."},
      {fr:"¿Qué línea va al Prado?", ipa:"keh lee-neh-ah bah ahl prah-doh", en:"Which line goes to the Prado?"},
      {fr:"Dirección Aeropuerto.", ipa:"dee-rek-syohn ah-eh-roh-pwair-toh", en:"Direction Airport."},
      {fr:"Un billete de diez viajes, por favor.", ipa:"oon bee-yeh-teh deh dyehs byah-hes por fah-bor", en:"A ten-trip card, please."},
      {fr:"¿Cuál es la parada para el Retiro?", ipa:"kwahl es lah pah-rah-dah pah-rah el reh-tee-roh", en:"Which stop for El Retiro?"},
      {fr:"¿Este metro va a Sol?", ipa:"es-teh meh-troh bah ah sohl", en:"Does this metro go to Sol?"},
      {fr:"¿A qué hora sale el próximo metro?", ipa:"ah keh oh-rah sah-leh el prohk-see-moh meh-troh", en:"What time does the next metro leave?"},
      {fr:"Hay que hacer transbordo en Nuevos Ministerios.", ipa:"ay keh ah-sair trans-bor-doh en nweh-bohs mee-nis-teh-ryohs", en:"You need to transfer at Nuevos Ministerios."}
    ],
    grammar:"Madrid's metro is color-coded and very easy. Sol is the central hub — almost every line passes through it. Buy a 'billete de 10 viajes' for savings. The airport line (L8) needs a supplement — add it when buying your ticket.",
    practice:["Look up the metro line for the Prado and say it out loud.","Practice: 'Perdone, ¿cómo llego a [station]?'"]
  },
  { day:19, title:"Taxis & Trains", titleNative:"Taxis y Trenes", focus:"Beyond the metro.",
    vocab:[
      {fr:"un taxi", ipa:"oon tahk-see", en:"a taxi"},
      {fr:"el AVE", ipa:"el ah-beh-eh", en:"high-speed train (Spain)"},
      {fr:"la RENFE", ipa:"lah ren-feh", en:"Spanish national rail"},
      {fr:"el aeropuerto", ipa:"el ah-eh-roh-pwair-toh", en:"the airport"},
      {fr:"la salida", ipa:"lah sah-lee-dah", en:"departure"},
      {fr:"la llegada", ipa:"lah yeh-gah-dah", en:"arrival"},
      {fr:"el andén", ipa:"el ahn-den", en:"the platform"},
      {fr:"primera clase", ipa:"pree-meh-rah klah-seh", en:"first class"},
      {fr:"segunda clase", ipa:"seh-goon-dah klah-seh", en:"second class"},
      {fr:"el revisor", ipa:"el reh-bee-sor", en:"the ticket inspector"}
    ],
    phrases:[
      {fr:"Al aeropuerto de Barajas, por favor.", ipa:"ahl ah-eh-roh-pwair-toh deh bah-rah-hahs por fah-bor", en:"To Barajas airport, please."},
      {fr:"¿Cuánto cuesta?", ipa:"kwahn-toh kwes-tah", en:"How much does it cost?"},
      {fr:"¿Puede esperarme?", ipa:"pweh-deh es-peh-rar-meh", en:"Can you wait for me?"},
      {fr:"En el número 25 de la calle Mayor.", ipa:"en el noo-meh-roh bayn-tee-seen-koh deh lah kah-yeh mah-yor", en:"At 25 calle Mayor."},
      {fr:"Pare aquí, por favor.", ipa:"pah-reh ah-kee por fah-bor", en:"Stop here, please."},
      {fr:"Un billete de ida a Barcelona.", ipa:"oon bee-yeh-teh deh ee-dah ah bar-seh-loh-nah", en:"A one-way ticket to Barcelona."},
      {fr:"¿A qué hora sale el tren?", ipa:"ah keh oh-rah sah-leh el tren", en:"What time does the train leave?"},
      {fr:"¿Hay algún Uber por aquí?", ipa:"ay ahl-goon yoo-bair por ah-kee", en:"Is there Uber around here?"}
    ],
    grammar:"Spain's AVE (high-speed train) is excellent — Madrid to Barcelona in 2.5 hours. Book on Renfe.com. Official taxis in Madrid are white; in Barcelona, black and yellow. Never take unmarked rides — always use the official taxi rank.",
    practice:["Practice giving an address: 'Al número 25 de la Gran Vía, por favor.'","Tell the driver to stop, then to wait."]
  },
  { day:20, title:"Time & Schedules", titleNative:"La Hora y los Horarios", focus:"What time things happen.",
    vocab:[
      {fr:"la hora", ipa:"lah oh-rah", en:"the time / hour"},
      {fr:"¿Qué hora es?", ipa:"keh oh-rah es", en:"What time is it?"},
      {fr:"Son las tres", ipa:"sohn lahs tres", en:"It's three o'clock"},
      {fr:"y media", ipa:"ee meh-dyah", en:"half past"},
      {fr:"y cuarto", ipa:"ee kwar-toh", en:"quarter past"},
      {fr:"menos cuarto", ipa:"meh-nohs kwar-toh", en:"quarter to"},
      {fr:"el mediodía", ipa:"el meh-dyoh-dee-ah", en:"noon"},
      {fr:"la medianoche", ipa:"lah meh-dyah-noh-cheh", en:"midnight"},
      {fr:"abierto / cerrado", ipa:"ah-byair-toh / seh-rah-doh", en:"open / closed"},
      {fr:"el horario", ipa:"el oh-rah-ryoh", en:"the schedule / timetable"}
    ],
    phrases:[
      {fr:"¿Qué hora es, por favor?", ipa:"keh oh-rah es por fah-bor", en:"What time is it, please?"},
      {fr:"Son las tres y media.", ipa:"sohn lahs tres ee meh-dyah", en:"It's half past three."},
      {fr:"¿A qué hora abren?", ipa:"ah keh oh-rah ah-bren", en:"What time do you open?"},
      {fr:"El museo cierra a las ocho.", ipa:"el moo-seh-oh syair-rah ah lahs oh-choh", en:"The museum closes at eight."},
      {fr:"Nuestra reserva es a las nueve.", ipa:"nwes-trah reh-sair-bah es ah lahs nweh-beh", en:"Our reservation is at nine."},
      {fr:"Tiene diez minutos.", ipa:"tyeh-neh dyehs mee-noo-tohs", en:"You have ten minutes."},
      {fr:"Es la una y cuarto.", ipa:"es lah oo-nah ee kwar-toh", en:"It's quarter past one."},
      {fr:"¿A qué hora es el último tren?", ipa:"ah keh oh-rah es el ool-tee-moh tren", en:"What time is the last train?"}
    ],
    grammar:"Spain runs late. Lunch: 2-4pm. Dinner: 9-11pm. Shops close 2-5pm for siesta (less common in big cities now). Museums often close Mondays. Plan around the Spanish schedule or you'll find a lot of closed doors.",
    practice:["Tell the time right now in Spanish.","Practice: '¿A qué hora abre/cierra [place]?'"]
  },
  { day:21, title:"Week 3 Review — Travel Day", titleNative:"Repaso Semana 3 — Día de Viaje", focus:"Run through a full travel scenario.",
    vocab:[
      {fr:"perdido/a", ipa:"pair-dee-doh / dah", en:"lost"},
      {fr:"buscar", ipa:"boos-kar", en:"to look for"},
      {fr:"el mapa", ipa:"el mah-pah", en:"the map"},
      {fr:"la oficina de turismo", ipa:"lah oh-fee-see-nah deh too-rees-moh", en:"the tourist office"},
      {fr:"cambiar dinero", ipa:"kahm-byar dee-neh-roh", en:"to exchange money"},
      {fr:"el hospital", ipa:"el ohs-pee-tahl", en:"the hospital"},
      {fr:"la farmacia", ipa:"lah far-mah-syah", en:"the pharmacy"},
      {fr:"la embajada", ipa:"lah em-bah-hah-dah", en:"the embassy"},
      {fr:"el cajero automático", ipa:"el kah-heh-roh ow-toh-mah-tee-koh", en:"the ATM"}
    ],
    phrases:[
      {fr:"Perdone, estoy perdido. Busco el Prado.", ipa:"pair-doh-neh es-toy pair-dee-doh boos-koh el prah-doh", en:"Excuse me, I'm lost. I'm looking for the Prado."},
      {fr:"¿A cuántos minutos a pie?", ipa:"ah kwahn-tohs mee-noo-tohs ah pyeh", en:"How many minutes on foot?"},
      {fr:"Tengo una reserva esta noche.", ipa:"tehn-goh oo-nah reh-sair-bah es-tah noh-cheh", en:"I have a reservation tonight."},
      {fr:"¿Cuál es el mejor restaurante cerca?", ipa:"kwahl es el meh-hor res-tow-rahn-teh sair-kah", en:"What's the best restaurant nearby?"},
      {fr:"¿Pueden llamar a un taxi?", ipa:"pweh-den yah-mar ah oon tahk-see", en:"Can you call a taxi?"},
      {fr:"¿Dónde puedo comprar una tarjeta SIM?", ipa:"dohn-deh pweh-doh kohm-prar oo-nah tar-heh-tah seem", en:"Where can I buy a SIM card?"},
      {fr:"El vuelo sale a las nueve mañana.", ipa:"el bweh-loh sah-leh ah lahs nweh-beh mah-nyah-nah", en:"The flight leaves at 9am tomorrow."},
      {fr:"Quisiera cambiar dólares, por favor.", ipa:"kee-syeh-rah kahm-byar doh-lah-res por fah-bor", en:"I'd like to exchange dollars, please."}
    ],
    grammar:"'Perdone' is your magic opener everywhere in Spain. Even 'Perdone, ¿habla inglés?' gets you much further than launching into English. Spaniards are warm to tourists who try.",
    practice:["Imagine you're lost near La Sagrada Família and ask for help.","Run through: arrive at hotel, check in, ask for breakfast, ask for directions."]
  },
  { day:22, title:"Shopping", titleNative:"De Compras", focus:"Boutiques, markets, souvenirs.",
    vocab:[
      {fr:"una tienda", ipa:"oo-nah tyehn-dah", en:"a store"},
      {fr:"una boutique", ipa:"oo-nah boo-teek", en:"a boutique"},
      {fr:"el mercado", ipa:"el mair-kah-doh", en:"the market"},
      {fr:"las rebajas", ipa:"lahs reh-bah-hahs", en:"the sales"},
      {fr:"un descuento", ipa:"oon des-kwehn-toh", en:"a discount"},
      {fr:"el precio", ipa:"el preh-syoh", en:"the price"},
      {fr:"el escaparate", ipa:"el es-kah-pah-rah-teh", en:"the shop window"},
      {fr:"probarse", ipa:"proh-bar-seh", en:"to try on"},
      {fr:"¿Cuánto vale?", ipa:"kwahn-toh bah-leh", en:"How much is it?"},
      {fr:"la caja", ipa:"lah kah-hah", en:"the cash register / checkout"}
    ],
    phrases:[
      {fr:"Solo estoy mirando, gracias.", ipa:"soh-loh es-toy mee-rahn-doh grah-syahs", en:"I'm just looking, thank you."},
      {fr:"¿Me lo puedo probar?", ipa:"meh loh pweh-doh proh-bar", en:"Can I try it on?"},
      {fr:"Es demasiado caro para mí.", ipa:"es deh-mah-syah-doh kah-roh pah-rah mee", en:"It's too expensive for me."},
      {fr:"¿Cuánto vale este artículo?", ipa:"kwahn-toh bah-leh es-teh ar-tee-koo-loh", en:"How much is this item?"},
      {fr:"¿Aceptan tarjetas?", ipa:"ah-sep-tahn tar-heh-tahs", en:"Do you accept cards?"},
      {fr:"Lo voy a pensar.", ipa:"loh boy ah pen-sar", en:"I'll think about it."},
      {fr:"¿Tiene algo más barato?", ipa:"tyeh-neh ahl-goh mahs bah-rah-toh", en:"Do you have something cheaper?"},
      {fr:"¿Dónde están los probadores?", ipa:"dohn-deh es-tahn lohs proh-bah-doh-res", en:"Where are the fitting rooms?"}
    ],
    grammar:"Same greeting rule applies in shops — say 'Buenas' when you walk in. El Corte Inglés is Spain's big department store chain — has everything, accepts cards, and is great in emergencies. Mercados are cash-heavy.",
    practice:["Pretend you're in a Madrid boutique. Greet, browse, ask a price, decline politely.","'Solo estoy mirando, gracias' is your default polite refusal."]
  },
  { day:23, title:"Sizes, Colors & Trying On", titleNative:"Tallas, Colores y Probarse", focus:"Pick out the right thing.",
    vocab:[
      {fr:"la talla", ipa:"lah tah-yah", en:"the size"},
      {fr:"pequeño / mediano / grande", ipa:"peh-kehn-yoh / meh-dyah-noh / grahn-deh", en:"small / medium / large"},
      {fr:"rojo", ipa:"rroh-hoh", en:"red"},
      {fr:"azul", ipa:"ah-sool", en:"blue"},
      {fr:"verde", ipa:"bair-deh", en:"green"},
      {fr:"negro", ipa:"neh-groh", en:"black"},
      {fr:"blanco", ipa:"blahn-koh", en:"white"},
      {fr:"amarillo", ipa:"ah-mah-ree-yoh", en:"yellow"},
      {fr:"gris", ipa:"grees", en:"grey"},
      {fr:"el probador", ipa:"el proh-bah-dor", en:"the fitting room"}
    ],
    phrases:[
      {fr:"¿Tiene la talla M?", ipa:"tyeh-neh lah tah-yah em", en:"Do you have size M?"},
      {fr:"¿Lo tiene en azul?", ipa:"loh tyeh-neh en ah-sool", en:"Do you have it in blue?"},
      {fr:"Me lo quedo.", ipa:"meh loh keh-doh", en:"I'll take it."},
      {fr:"Me queda grande.", ipa:"meh keh-dah grahn-deh", en:"It's too big for me."},
      {fr:"¿Lo tiene en rojo?", ipa:"loh tyeh-neh en rroh-hoh", en:"Do you have this in red?"},
      {fr:"¿Dónde están los probadores?", ipa:"dohn-deh es-tahn lohs proh-bah-doh-res", en:"Where are the fitting rooms?"},
      {fr:"Me queda perfecto, me lo llevo.", ipa:"meh keh-dah pair-fek-toh meh loh yeh-boh", en:"It fits perfectly, I'll take it."},
      {fr:"¿Tiene una talla más grande?", ipa:"tyeh-neh oo-nah tah-yah mahs grahn-deh", en:"Do you have one size up?"}
    ],
    grammar:"Spanish clothing sizes use the European system (36, 38, 40...) same as France. Just say your letter size (S/M/L). 'Me queda' means 'it fits me' — very useful in fitting rooms. 'Me lo quedo' = I'll take it.",
    practice:["Practice: '¿Lo tiene en [color]?' for 5 different colors.","Imagine trying on a jacket: ask for size, color, fitting room."]
  },
  { day:24, title:"Casual Conversation", titleNative:"Conversación Casual", focus:"Chat with locals naturally.",
    vocab:[
      {fr:"¿Cómo está?", ipa:"koh-moh es-tah", en:"How are you? (formal)"},
      {fr:"¿De dónde es?", ipa:"deh dohn-deh es", en:"Where are you from?"},
      {fr:"Me gusta", ipa:"meh goos-tah", en:"I like"},
      {fr:"Me encanta", ipa:"meh en-kahn-tah", en:"I love"},
      {fr:"Qué interesante", ipa:"keh een-teh-reh-sahn-teh", en:"How interesting"},
      {fr:"¿Verdad?", ipa:"bair-dahd", en:"Right? / Isn't it?"},
      {fr:"¡Qué bueno!", ipa:"keh bweh-noh", en:"How great!"},
      {fr:"la primera vez", ipa:"lah pree-meh-rah bes", en:"the first time"}
    ],
    phrases:[
      {fr:"Estoy de vacaciones por una semana.", ipa:"es-toy deh bah-kah-syoh-nes por oo-nah seh-mah-nah", en:"I'm on vacation for a week."},
      {fr:"Es mi primera vez en Madrid.", ipa:"es mee pree-meh-rah bes en mah-drid", en:"It's my first time in Madrid."},
      {fr:"Me encanta la comida española.", ipa:"meh en-kahn-tah lah koh-mee-dah es-pah-nyoh-lah", en:"I love Spanish food."},
      {fr:"Hoy hace muy buen tiempo, ¿verdad?", ipa:"oy ah-seh mwee bwehn tyehm-poh bair-dahd", en:"Nice weather today, isn't it?"},
      {fr:"Madrid es una ciudad preciosa.", ipa:"mah-drid es oo-nah syoo-dahd preh-syoh-sah", en:"Madrid is a beautiful city."},
      {fr:"¿Conoce algún buen restaurante?", ipa:"koh-noh-seh ahl-goon bwehn res-tow-rahn-teh", en:"Do you know a good restaurant?"},
      {fr:"Regresamos a los Estados Unidos el domingo.", ipa:"reh-greh-sah-mohs ah lohs es-tah-dohs oo-nee-dohs el doh-meen-goh", en:"We go back to the US on Sunday."},
      {fr:"Me siento muy bien aquí.", ipa:"meh syehn-toh mwee byehn ah-kee", en:"I feel really good here."}
    ],
    grammar:"'Me gusta' literally means 'it pleases me'. 'Me gusta el vino' = 'The wine pleases me' = I like wine. Use 'me gustan' for plural things: 'Me gustan las tapas'. 'Me encanta' is stronger — I love it.",
    practice:["Imagine chatting with your hotel concierge — answer small talk in Spanish.","Practice: 'Me gusta/encanta [thing]' for 5 different things."]
  },
  { day:25, title:"Emergencies & Health", titleNative:"Emergencias y Salud", focus:"What you hope you won't need.",
    vocab:[
      {fr:"¡Socorro!", ipa:"soh-koh-rroh", en:"Help!"},
      {fr:"la policía", ipa:"lah poh-lee-see-ah", en:"the police"},
      {fr:"una ambulancia", ipa:"oo-nah ahm-boo-lahn-syah", en:"an ambulance"},
      {fr:"el médico", ipa:"el meh-dee-koh", en:"the doctor"},
      {fr:"la farmacia", ipa:"lah far-mah-syah", en:"the pharmacy"},
      {fr:"me duele", ipa:"meh dweh-leh", en:"it hurts / I have pain in"},
      {fr:"he perdido", ipa:"eh pair-dee-doh", en:"I have lost"},
      {fr:"me han robado", ipa:"meh ahn rroh-bah-doh", en:"I've been robbed"},
      {fr:"el hospital", ipa:"el ohs-pee-tahl", en:"the hospital"},
      {fr:"el seguro", ipa:"el seh-goo-roh", en:"insurance"}
    ],
    phrases:[
      {fr:"Necesito un médico.", ipa:"neh-seh-see-toh oon meh-dee-koh", en:"I need a doctor."},
      {fr:"¿Dónde está la farmacia más cercana?", ipa:"dohn-deh es-tah lah far-mah-syah mahs sair-kah-nah", en:"Where's the nearest pharmacy?"},
      {fr:"He perdido mi pasaporte.", ipa:"eh pair-dee-doh mee pah-sah-por-teh", en:"I've lost my passport."},
      {fr:"Llame a una ambulancia, por favor.", ipa:"yah-meh ah oo-nah ahm-boo-lahn-syah por fah-bor", en:"Call an ambulance, please."},
      {fr:"Me duele la cabeza.", ipa:"meh dweh-leh lah kah-beh-sah", en:"I have a headache."},
      {fr:"Me han robado el bolso.", ipa:"meh ahn rroh-bah-doh el bohl-soh", en:"My bag has been stolen."},
      {fr:"Necesito ir a urgencias.", ipa:"neh-seh-see-toh eer ah oor-hen-syahs", en:"I need to go to the emergency room."},
      {fr:"¿Dónde está la comisaría?", ipa:"dohn-deh es-tah lah koh-mee-sah-ree-ah", en:"Where is the police station?"}
    ],
    grammar:"Emergency number in Spain: 112 (general), 061 (medical). Farmacias (green cross) can handle many minor issues without a prescription. They're your first stop for headaches, stomach issues, minor cuts.",
    practice:["Practice: 'Me duele [body part]' for 3 body parts.","Memorize: 'He perdido mi pasaporte' — hopefully you'll never need it."]
  },
  { day:26, title:"Compliments & Reactions", titleNative:"Cumplidos y Reacciones", focus:"Show appreciation like a local.",
    vocab:[
      {fr:"magnífico", ipa:"mahg-nee-fee-koh", en:"magnificent"},
      {fr:"delicioso", ipa:"deh-lee-syoh-soh", en:"delicious"},
      {fr:"muy bueno", ipa:"mwee bweh-noh", en:"very good"},
      {fr:"me encanta", ipa:"meh en-kahn-tah", en:"I love it"},
      {fr:"increíble", ipa:"een-kreh-ee-bleh", en:"incredible"},
      {fr:"perfecto", ipa:"pair-fek-toh", en:"perfect"},
      {fr:"enhorabuena", ipa:"en-oh-rah-bweh-nah", en:"congratulations"},
      {fr:"¡Salud!", ipa:"sah-lood", en:"Cheers! / Bless you!"},
      {fr:"buen provecho", ipa:"bwehn proh-beh-choh", en:"enjoy your meal"},
      {fr:"qué amable", ipa:"keh ah-mah-bleh", en:"how kind"}
    ],
    phrases:[
      {fr:"¡La comida estaba magnífica!", ipa:"lah koh-mee-dah es-tah-bah mahg-nee-fee-kah", en:"The food was magnificent!"},
      {fr:"Esto está realmente delicioso.", ipa:"es-toh es-tah rreh-ahl-men-teh deh-lee-syoh-soh", en:"This is really delicious."},
      {fr:"Es usted muy amable.", ipa:"es oos-ted mwee ah-mah-bleh", en:"You're very kind."},
      {fr:"¡Qué ciudad tan bonita!", ipa:"keh syoo-dahd tahn boh-nee-tah", en:"What a beautiful city!"},
      {fr:"Ha sido perfecto, muchísimas gracias.", ipa:"ah see-doh pair-fek-toh moo-chee-see-mahs grah-syahs", en:"It was perfect, thank you so much."},
      {fr:"¡Buen provecho!", ipa:"bwehn proh-beh-choh", en:"Enjoy your meal!"},
      {fr:"Estoy muy impresionado.", ipa:"es-toy mwee eem-preh-syoh-nah-doh", en:"I'm very impressed."},
      {fr:"Es exactamente lo que quería.", ipa:"es ek-sahk-tah-men-teh loh keh keh-ree-ah", en:"It's exactly what I wanted."}
    ],
    grammar:"'¡Buen provecho!' when food arrives — same as French 'Bon appétit'. '¡Salud!' for cheers when toasting, but also 'bless you' when someone sneezes. '¡Enhorabuena!' is congratulations for birthdays, achievements, everything.",
    practice:["Practice complimenting a meal three different ways.","Try: 'Ha sido perfecto, muchísimas gracias' as you leave a restaurant."]
  },
  { day:27, title:"Past & Future", titleNative:"Pasado y Futuro", focus:"Talk about yesterday and tomorrow.",
    vocab:[
      {fr:"ayer", ipa:"ah-yair", en:"yesterday"},
      {fr:"hoy", ipa:"oy", en:"today"},
      {fr:"mañana", ipa:"mah-nyah-nah", en:"tomorrow"},
      {fr:"fui / visité", ipa:"fwee / bee-see-teh", en:"I went / I visited"},
      {fr:"comí", ipa:"koh-mee", en:"I ate"},
      {fr:"vi", ipa:"bee", en:"I saw"},
      {fr:"voy a ir", ipa:"boy ah eer", en:"I'm going to go"},
      {fr:"voy a visitar", ipa:"boy ah bee-see-tar", en:"I'm going to visit"},
      {fr:"anoche", ipa:"ah-noh-cheh", en:"last night"},
      {fr:"la semana pasada", ipa:"lah seh-mah-nah pah-sah-dah", en:"last week"},
      {fr:"la semana que viene", ipa:"lah seh-mah-nah keh byeh-neh", en:"next week"}
    ],
    phrases:[
      {fr:"Ayer visité el Prado.", ipa:"ah-yair bee-see-teh el prah-doh", en:"Yesterday I visited the Prado."},
      {fr:"Mañana voy a ir a Toledo.", ipa:"mah-nyah-nah boy ah eer ah toh-leh-doh", en:"Tomorrow I'm going to Toledo."},
      {fr:"La semana pasada comí en un restaurante increíble.", ipa:"lah seh-mah-nah pah-sah-dah koh-mee en oon res-tow-rahn-teh een-kreh-ee-bleh", en:"Last week I ate at an incredible restaurant."},
      {fr:"El sábado vuelvo a los Estados Unidos.", ipa:"el sah-bah-doh bwel-boh ah lohs es-tah-dohs oo-nee-dohs", en:"On Saturday I go back to the US."},
      {fr:"Me encantó la visita de ayer.", ipa:"meh en-kahn-toh lah bee-see-tah deh ah-yair", en:"I loved yesterday's visit."},
      {fr:"Esta noche vamos al flamenco.", ipa:"es-tah noh-cheh bah-mohs ahl flah-men-koh", en:"Tonight we're going to a flamenco show."},
      {fr:"Hemos planeado una excursión mañana.", ipa:"eh-mohs plah-neh-ah-doh oo-nah eks-koor-syohn mah-nyah-nah", en:"We've planned an excursion tomorrow."},
      {fr:"La semana que viene vuelvo.", ipa:"lah seh-mah-nah keh byeh-neh bwel-boh", en:"Next week I'll come back."}
    ],
    grammar:"Past shortcut: add '-é' or '-í' (I did): visité, comí, bebí. Future shortcut: 'voy a + verb': 'voy a comer'. These two patterns cover 90% of what you need as a traveler.",
    practice:["Tell what you did 'yesterday' using visité, comí, or vi.","Tell what you'll do tomorrow using 'voy a + 3 verbs'."]
  },
  { day:28, title:"Saying Goodbye", titleNative:"Despedirse Bien", focus:"Wrap conversations gracefully.",
    vocab:[
      {fr:"adiós", ipa:"ah-dyohs", en:"goodbye"},
      {fr:"hasta luego", ipa:"ahs-tah lweh-goh", en:"see you later"},
      {fr:"hasta pronto", ipa:"ahs-tah prohn-toh", en:"see you soon"},
      {fr:"hasta mañana", ipa:"ahs-tah mah-nyah-nah", en:"see you tomorrow"},
      {fr:"nos vemos", ipa:"nohs beh-mohs", en:"we'll see each other"},
      {fr:"que tenga buen día", ipa:"keh tehn-gah bwehn dee-ah", en:"have a good day"},
      {fr:"buen viaje", ipa:"bwehn byah-heh", en:"safe travels"},
      {fr:"cuídese", ipa:"kwee-deh-seh", en:"take care (formal)"},
      {fr:"un placer", ipa:"oon plah-sair", en:"a pleasure"},
      {fr:"encantado/a", ipa:"en-kahn-tah-doh / dah", en:"delighted (m/f)"}
    ],
    phrases:[
      {fr:"Gracias por todo, ¡que tenga buen día!", ipa:"grah-syahs por toh-doh keh tehn-gah bwehn dee-ah", en:"Thanks for everything, have a good day!"},
      {fr:"¡Adiós! ¡Hasta pronto!", ipa:"ah-dyohs ahs-tah prohn-toh", en:"Goodbye! See you soon!"},
      {fr:"Ha sido un placer conocerle.", ipa:"ah see-doh oon plah-sair koh-noh-sair-leh", en:"It's been a pleasure meeting you."},
      {fr:"¡Buen fin de semana!", ipa:"bwehn feen deh seh-mah-nah", en:"Have a good weekend!"},
      {fr:"¡Hasta la próxima!", ipa:"ahs-tah lah prohk-see-mah", en:"Until next time!"},
      {fr:"Cuídese mucho.", ipa:"kwee-deh-seh moo-choh", en:"Take good care of yourself."},
      {fr:"Volveré el año que viene.", ipa:"bohl-beh-reh el ah-nyoh keh byeh-neh", en:"I'll come back next year."},
      {fr:"Buenas noches y gracias de nuevo.", ipa:"bweh-nahs noh-ches ee grah-syahs deh nweh-boh", en:"Good night and thank you again."}
    ],
    grammar:"Don't just say 'adiós' — pair it with 'que tenga buen día' or 'buen fin de semana'. 'Hasta luego' is casual and very common. 'Cuídese' (formal) vs 'cuídate' (informal) — use the right one.",
    practice:["End your imagined conversations with: greet → request → thank → goodbye.","Practice 5 different goodbyes for 5 different situations."]
  },
  { day:29, title:"Putting It All Together", titleNative:"Juntándolo Todo", focus:"A real Spain day in Spanish.",
    vocab:[
      {fr:"un museo", ipa:"oon moo-seh-oh", en:"a museum"},
      {fr:"una entrada", ipa:"oo-nah en-trah-dah", en:"a ticket (for entry)"},
      {fr:"la visita guiada", ipa:"lah bee-see-tah gee-ah-dah", en:"the guided tour"},
      {fr:"la foto", ipa:"lah foh-toh", en:"the photo"},
      {fr:"el recuerdo", ipa:"el rreh-kwair-doh", en:"the souvenir"},
      {fr:"la tienda de regalos", ipa:"lah tyehn-dah deh rreh-gah-lohs", en:"the gift shop"},
      {fr:"la cola", ipa:"lah koh-lah", en:"the queue / line"},
      {fr:"la reserva online", ipa:"lah rreh-sair-bah ohn-leen", en:"the online booking"},
      {fr:"el código QR", ipa:"el koh-dee-goh koo-err", en:"the QR code"}
    ],
    phrases:[
      {fr:"Dos entradas para el museo, por favor.", ipa:"dohs en-trah-dahs pah-rah el moo-seh-oh por fah-bor", en:"Two tickets for the museum, please."},
      {fr:"¿Se pueden hacer fotos?", ipa:"seh pweh-den ah-sair foh-tohs", en:"Can we take photos?"},
      {fr:"¿Pueden hacernos una foto?", ipa:"pweh-den ah-sair-nohs oo-nah foh-toh", en:"Can you take a photo of us?"},
      {fr:"¿La tienda de regalos está por aquí?", ipa:"lah tyehn-dah deh rreh-gah-lohs es-tah por ah-kee", en:"Is the gift shop this way?"},
      {fr:"¿Está abierto los domingos?", ipa:"es-tah ah-byair-toh lohs doh-meen-gohs", en:"Is it open on Sundays?"},
      {fr:"¿Dónde está la entrada principal?", ipa:"dohn-deh es-tah lah en-trah-dah preen-see-pahl", en:"Where is the main entrance?"},
      {fr:"¿Hay guardarropa?", ipa:"ay gwar-dah-rroh-pah", en:"Is there a coat check?"},
      {fr:"¿Tienen audioguía en inglés?", ipa:"tyeh-nen ow-dyoh-gee-ah en een-glehs", en:"Do you have an audio guide in English?"}
    ],
    grammar:"You now have all the building blocks. Mix your verbs (voy a, quisiera, tengo) with nouns (entrada, mesa, taxi) and the polite frame (perdone, por favor, gracias) — and you can handle almost any real situation.",
    practice:["Plan a full Spain day in Spanish: breakfast → museum → lunch → market → dinner.","Quiz yourself on every phrase you've learned this week."]
  },
  { day:30, title:"Final Tips & Review", titleNative:"Consejos Finales y Repaso", focus:"The intangibles that matter.",
    vocab:[
      {fr:"los españoles", ipa:"lohs es-pah-nyoh-les", en:"Spaniards"},
      {fr:"la siesta", ipa:"lah syehs-tah", en:"the afternoon rest"},
      {fr:"el flamenco", ipa:"el flah-men-koh", en:"flamenco (art form)"},
      {fr:"la fiesta", ipa:"lah fyehs-tah", en:"the party / festival"},
      {fr:"la sobremesa", ipa:"lah soh-breh-meh-sah", en:"post-meal conversation"},
      {fr:"el tuteo", ipa:"el too-teh-oh", en:"using tú (informal address)"},
      {fr:"el horario español", ipa:"el oh-rah-ryoh es-pah-nyohl", en:"the Spanish schedule"},
      {fr:"el Camino", ipa:"el kah-mee-noh", en:"the Camino de Santiago"},
      {fr:"el voseo", ipa:"el boh-seh-oh", en:"using vos (Latin American)"},
      {fr:"¡Olé!", ipa:"oh-leh", en:"expression of approval / bravo"}
    ],
    phrases:[
      {fr:"Le pido disculpas por mi español.", ipa:"leh pee-doh dees-kool-pahs por mee es-pah-nyohl", en:"I apologize for my Spanish."},
      {fr:"Es usted muy paciente, gracias.", ipa:"es oos-ted mwee pah-syehn-teh grah-syahs", en:"You're very patient, thank you."},
      {fr:"Estoy aprendiendo, lo intento.", ipa:"es-toy ah-pren-dyehn-doh loh een-tehn-toh", en:"I'm learning, I'm trying."},
      {fr:"Buenos días, quisiera hablar en español.", ipa:"bweh-nos dee-ahs kee-syeh-rah ah-blar en es-pah-nyohl", en:"Good morning, I'd like to speak Spanish."},
      {fr:"Gracias por su paciencia.", ipa:"grah-syahs por soo pah-syehn-syah", en:"Thank you for your patience."},
      {fr:"Mi español no es perfecto.", ipa:"mee es-pah-nyohl noh es pair-fek-toh", en:"My Spanish isn't perfect."},
      {fr:"Estoy en proceso de aprendizaje.", ipa:"es-toy en proh-seh-soh deh ah-pren-dee-sah-heh", en:"I'm in the process of learning."},
      {fr:"España me ha dado ganas de seguir.", ipa:"es-pah-nyah meh ah dah-doh gah-nahs deh seh-geer", en:"Spain gave me the desire to keep going."}
    ],
    grammar:"The single biggest Spain tip: ALWAYS open with 'Buenos días' or 'Buenas'. Even 'Perdone, ¿habla inglés?' with a smile is miles better than launching straight into English. Most Spaniards warm up immediately when you make the effort.",
    practice:["Walk through your entire Spain arrival in Spanish (mental rehearsal).","Quiz yourself on Days 1-30 vocab. Note what's still shaky."]
  }
];

// ============================================================
// CONVERSATION SCENARIOS — Spanish
// ============================================================
const CONVERSATIONS_ES = [
  { title:"Pidiendo en un Café", scene:"You walk into a café in Madrid and order breakfast.",
    lines:[
      {who:"them", fr:"¡Buenos días!", en:"Good morning!"},
      {who:"you", fr:"Buenos días. Un café con leche y una tostada, por favor.", en:"Good morning. A café con leche and toast, please."},
      {who:"them", fr:"¿Para aquí o para llevar?", en:"To eat in or to take away?"},
      {who:"you", fr:"Para aquí, gracias.", en:"To eat in, thanks."},
      {who:"them", fr:"Muy bien. Son cinco euros cincuenta.", en:"Very good. That's five fifty."},
      {who:"you", fr:"Aquí tiene. Gracias.", en:"Here you go. Thank you."},
      {who:"them", fr:"Gracias a usted. ¡Que tenga buen día!", en:"Thank you. Have a good day!"},
      {who:"you", fr:"¡Igualmente! ¡Hasta luego!", en:"Likewise! See you later!"}
    ]},
  { title:"Check-In en el Hotel", scene:"You arrive at your hotel in Madrid with a reservation.",
    lines:[
      {who:"you", fr:"Buenas tardes, tengo una reserva a nombre de Cannon.", en:"Good afternoon, I have a reservation under Cannon."},
      {who:"them", fr:"Buenas tardes, señor. Cannon... sí, dos noches, habitación doble.", en:"Good afternoon, sir. Cannon... yes, two nights, double room."},
      {who:"you", fr:"Perfecto. ¿A qué hora es el desayuno?", en:"Perfect. What time is breakfast?"},
      {who:"them", fr:"De siete a diez, en la planta baja.", en:"From 7 to 10, on the ground floor."},
      {who:"you", fr:"¿Y la contraseña del wifi?", en:"And the wifi password?"},
      {who:"them", fr:"Está en la tarjeta de la habitación. Aquí tiene su llave, habitación 305 en el tercer piso.", en:"It's on your room card. Here's your key, room 305 on the third floor."},
      {who:"you", fr:"Muchas gracias. Buenas noches.", en:"Thank you very much. Good night."}
    ]},
  { title:"Pidiendo Direcciones", scene:"You're lost near the city center looking for the Prado.",
    lines:[
      {who:"you", fr:"Perdone, buenos días. Busco el Museo del Prado.", en:"Excuse me, good morning. I'm looking for the Prado Museum."},
      {who:"them", fr:"Buenos días. No está lejos. Siga todo recto y gire a la derecha en el semáforo.", en:"Good morning. It's not far. Go straight and turn right at the traffic light."},
      {who:"you", fr:"Todo recto y luego a la derecha. ¿Es eso?", en:"Straight and then right. Is that right?"},
      {who:"them", fr:"Exacto. Después verá el parque. El Prado está justo al lado.", en:"Exactly. Then you'll see the park. The Prado is right next to it."},
      {who:"you", fr:"Muchas gracias. ¿A cuántos minutos a pie?", en:"Thank you so much. How many minutes on foot?"},
      {who:"them", fr:"Unos diez minutos.", en:"About ten minutes."},
      {who:"you", fr:"Perfecto, gracias. ¡Que tenga buen día!", en:"Perfect, thanks. Have a good day!"}
    ]},
  { title:"En el Restaurante", scene:"Dinner at a Madrid restaurant — the full flow.",
    lines:[
      {who:"you", fr:"Buenas noches, una mesa para dos, por favor.", en:"Good evening, a table for two, please."},
      {who:"them", fr:"Buenas noches. ¿Tienen reserva?", en:"Good evening. Do you have a reservation?"},
      {who:"you", fr:"No, lo siento. ¿Tienen mesa?", en:"No, sorry. Do you have a table?"},
      {who:"them", fr:"Sí, síganme. Aquí tienen la carta.", en:"Yes, follow me. Here's the menu."},
      {who:"you", fr:"Gracias. ¿Qué nos recomienda?", en:"Thanks. What do you recommend?"},
      {who:"them", fr:"El cochinillo asado está excelente esta noche.", en:"The roast suckling pig is excellent tonight."},
      {who:"you", fr:"Perfecto. Voy a tomar el cochinillo y una copa de vino tinto.", en:"Perfect. I'll have the suckling pig and a glass of red wine."},
      {who:"you", fr:"La cuenta, por favor.", en:"The bill, please. (later)"},
      {who:"them", fr:"Aquí tiene. ¿Pagan con tarjeta?", en:"Here you go. Are you paying by card?"},
      {who:"you", fr:"Sí, con tarjeta. Gracias, estaba delicioso.", en:"Yes, by card. Thanks, it was delicious."}
    ]},
  { title:"Comprando Billetes de Metro", scene:"You're at a Madrid metro station.",
    lines:[
      {who:"you", fr:"Buenas, quisiera un billete de diez viajes.", en:"Hello, I'd like a ten-trip card."},
      {who:"them", fr:"Muy bien. Son doce euros veinte.", en:"Very good. That's 12.20."},
      {who:"you", fr:"¿Qué línea va al Museo del Prado?", en:"Which line goes to the Prado?"},
      {who:"them", fr:"La línea 2, dirección Las Rosas, bájese en Banco de España.", en:"Line 2, direction Las Rosas, get off at Banco de España."},
      {who:"you", fr:"¿Cuántas paradas son?", en:"How many stops is it?"},
      {who:"them", fr:"Tres paradas.", en:"Three stops."},
      {who:"you", fr:"Perfecto. Muchas gracias, buen día.", en:"Perfect. Thank you, good day."}
    ]},
  { title:"En una Boutique", scene:"You're shopping for clothing in a Madrid boutique.",
    lines:[
      {who:"them", fr:"Buenas tardes, ¿le puedo ayudar?", en:"Good afternoon, can I help you?"},
      {who:"you", fr:"Buenas tardes, solo estoy mirando, gracias.", en:"Good afternoon, I'm just looking, thanks."},
      {who:"you", fr:"De hecho, ¿tienen este jersey en talla M?", en:"Actually, do you have this sweater in size M?"},
      {who:"them", fr:"Sí, en azul marino o en negro.", en:"Yes, in navy blue or black."},
      {who:"you", fr:"En negro, por favor. ¿Me lo puedo probar?", en:"In black, please. Can I try it on?"},
      {who:"them", fr:"Por supuesto, el probador está al fondo.", en:"Of course, the fitting room is at the back."},
      {who:"you", fr:"Me queda bien. ¿Cuánto vale?", en:"It fits well. How much is it?"},
      {who:"them", fr:"Sesenta euros.", en:"Sixty euros."},
      {who:"you", fr:"Me lo quedo.", en:"I'll take it."}
    ]},
  { title:"En la Farmacia", scene:"You have a headache and need something for it.",
    lines:[
      {who:"you", fr:"Buenos días, me duele la cabeza. ¿Tiene algo?", en:"Good morning, I have a headache. Do you have something?"},
      {who:"them", fr:"Buenos días. El paracetamol le irá bien. ¿Una caja?", en:"Good morning. Paracetamol will work. One box?"},
      {who:"you", fr:"Sí, por favor. ¿Cuánto es?", en:"Yes, please. How much is it?"},
      {who:"them", fr:"Tres euros con veinte.", en:"Three euros twenty."},
      {who:"you", fr:"Aquí tiene. Muchas gracias.", en:"Here. Thank you very much."},
      {who:"them", fr:"Que se mejore. Buen día.", en:"Get well. Good day."}
    ]},
  { title:"Conversación con un Local", scene:"Friendly chat at a bar in Madrid.",
    lines:[
      {who:"them", fr:"¿Está de vacaciones?", en:"Are you on vacation?"},
      {who:"you", fr:"Sí, estoy aquí por una semana.", en:"Yes, I'm here for a week."},
      {who:"them", fr:"¿De dónde es?", en:"Where are you from?"},
      {who:"you", fr:"Soy de Dallas, Texas.", en:"I'm from Dallas, Texas."},
      {who:"them", fr:"¡Texas! ¿Es su primera vez en Madrid?", en:"Texas! Is it your first time in Madrid?"},
      {who:"you", fr:"Sí, y me encanta. Todo es magnífico.", en:"Yes, and I love it. Everything is magnificent."},
      {who:"them", fr:"¡Habla muy bien español!", en:"You speak Spanish very well!"},
      {who:"you", fr:"Gracias, pero estoy aprendiendo. ¡Lo intento!", en:"Thanks, but I'm learning. I'm trying!"}
    ]}
];
