// Spanish → Portuguese (Brazilian) Native Lesson Plan
// Español como idioma de instrucción, portugués brasileño como objetivo
// vocab: { pt: "palavra em português", es: "traducción al español", ipa: "fonética para hispanohablantes" }
// Fonética: ão/ã = vocal nasal "aun/an"; nh = "ñ"; lh = "ll/gli"; ç = "s"; x = "sh" (inicial); d+e/i = "dj"; t+e/i = "tch"; r inicial/rr = "h" fuerte; vogais átonas: e→i, o→u

var COURSE_ES_PT = [
  { day:1,
    title:"Saludos y cortesía",
    titleNative:"Cumprimentos e cortesia",
    focus:"El español y el portugués brasileño comparten el 89% del vocabulario escrito — ¡son las lenguas más cercanas de este curso! La gran diferencia es la pronunciación: el portugués tiene vocales nasales (como en francés), la 'd' antes de 'e/i' suena 'dj', y la 'r' inicial suena 'h'. Hoy dominamos los saludos esenciales.",
    vocab:[
      {pt:"Olá", es:"Hola", ipa:"o-LA"},
      {pt:"Oi", es:"Hola (informal, muy común)", ipa:"OI"},
      {pt:"Bom dia", es:"Buenos días", ipa:"bon DJI-a"},
      {pt:"Boa tarde", es:"Buenas tardes", ipa:"boa TAR-dji"},
      {pt:"Boa noite", es:"Buenas noches", ipa:"boa NOI-tchi"},
      {pt:"Tchau", es:"Adiós (informal)", ipa:"CHAU"},
      {pt:"Até logo", es:"Hasta luego", ipa:"a-TE LO-gu"},
      {pt:"Por favor", es:"Por favor", ipa:"por fa-VOR"},
      {pt:"Obrigado / Obrigada", es:"Gracias (hombre / mujer)", ipa:"o-bri-GA-du / o-bri-GA-da"},
      {pt:"De nada", es:"De nada", ipa:"dji NA-da"}
    ],
    phrases:[
      {pt:"Tudo bem?", es:"¿Todo bien? / ¿Cómo estás?", ipa:"TU-du ben"},
      {pt:"Tudo bem, obrigado!", es:"¡Todo bien, gracias!", ipa:"TU-du ben, o-bri-GA-du"},
      {pt:"Como você se chama?", es:"¿Cómo te llamas?", ipa:"KO-mu vo-SE shi SHA-ma"},
      {pt:"Meu nome é João.", es:"Mi nombre es João.", ipa:"meu NO-mi e ZHWAUN"},
      {pt:"Muito prazer!", es:"¡Mucho gusto!", ipa:"MUI-tu pra-ZER"},
      {pt:"Com licença.", es:"Con permiso / Perdón.", ipa:"kon li-SEN-sa"}
    ],
    grammar:"El portugués brasileño tiene dos particularidades clave: (1) La 'r' al inicio de palabra o 'rr' suena como 'h' en inglés — fuerte y gutural, diferente a la 'r' española. (2) 'Você' es el pronombre de segunda persona más usado en Brasil (equivale a 'usted' en forma pero a 'tú' en uso). A diferencia del español, el portugués tiene 'obrigado/obrigada' — la forma depende del género del hablante, no de la persona a quien le agradeces.",
    practice:[
      "Practica la 'r' inicial: 'rua' (calle) = 'HU-a', 'rio' (río) = 'HI-u', 'rosa' = 'HO-za'",
      "Di 'Tudo bem?' a alguien y responde 'Tudo bem, obrigado/a!'",
      "Presenta tu nombre: 'Meu nome é ___'"
    ]
  },
  { day:2,
    title:"Números del 1 al 20",
    titleNative:"Números de 1 a 20",
    focus:"Los números en portugués se parecen mucho al español — casi todos los reconocerás al instante. Las diferencias principales: 'dois/duas' tiene forma masculina y femenina, 'onze' (11) al 'quinze' (15) son muy parecidos, y los números del 16-19 tienen estructura compuesta. Presta atención a 'sete' (siete) — la 'e' final suena 'i'.",
    vocab:[
      {pt:"um / uma", es:"uno / una", ipa:"UN / U-ma"},
      {pt:"dois / duas", es:"dos (masc. / fem.)", ipa:"DOIS / DU-as"},
      {pt:"três", es:"tres", ipa:"TRES"},
      {pt:"quatro", es:"cuatro", ipa:"KWA-tru"},
      {pt:"cinco", es:"cinco", ipa:"SIN-ku"},
      {pt:"seis", es:"seis", ipa:"SEIS"},
      {pt:"sete", es:"siete", ipa:"SE-tchi"},
      {pt:"oito", es:"ocho", ipa:"OI-tu"},
      {pt:"nove", es:"nueve", ipa:"NO-vi"},
      {pt:"dez", es:"diez", ipa:"DES"}
    ],
    phrases:[
      {pt:"onze / doze / treze", es:"once / doce / trece", ipa:"ON-zi / DO-zi / TRE-zi"},
      {pt:"quatorze / quinze", es:"catorce / quince", ipa:"kwa-TOR-zi / KIN-zi"},
      {pt:"dezesseis / dezessete", es:"dieciséis / diecisiete", ipa:"de-ze-SEIS / de-ze-SE-tchi"},
      {pt:"dezoito / dezenove", es:"dieciocho / diecinueve", ipa:"de-ZOI-tu / de-ze-NO-vi"},
      {pt:"vinte", es:"veinte", ipa:"VIN-tchi"},
      {pt:"Quantos anos você tem?", es:"¿Cuántos años tienes?", ipa:"KWAN-tus A-nus vo-SE ten"}
    ],
    grammar:"En portugués, las vocales átonas (sin acento) se reducen: la 'e' final suena 'i' y la 'o' final suena 'u'. Esto es fundamental: 'sete' = 'SE-tchi', 'treze' = 'TRE-zi', 'nove' = 'NO-vi'. Parece extraño al principio, pero es el patrón más importante del portugués brasileño. ¡Una vez que lo interiorices, todo encaja!",
    practice:[
      "Cuenta del 1 al 20 prestando atención a las vocales finales reducidas",
      "Di tu edad en portugués: 'Tenho ___ anos' (tengo ___ años)",
      "Practica los números del 11-19: ¿Qué tienen en común con el español?"
    ]
  },
  { day:3,
    title:"Colores y descripciones",
    titleNative:"Cores e descrições",
    focus:"Los colores en portugués son prácticamente iguales al español — tu ventaja es enorme. Fíjate en 'azul' (idéntico), 'vermelho' (rojo, muy diferente), y 'roxo' (morado — ¡falso amigo de 'rojo'!). Como en español, los adjetivos concuerdan en género y número con el sustantivo.",
    vocab:[
      {pt:"vermelho / vermelha", es:"rojo / roja", ipa:"ver-ME-lhu / ver-ME-lha"},
      {pt:"azul", es:"azul", ipa:"a-ZUL"},
      {pt:"verde", es:"verde", ipa:"VER-dji"},
      {pt:"amarelo / amarela", es:"amarillo / amarilla", ipa:"a-ma-RE-lu / a-ma-RE-la"},
      {pt:"branco / branca", es:"blanco / blanca", ipa:"BRAN-ku / BRAN-ka"},
      {pt:"preto / preta", es:"negro / negra", ipa:"PRE-tu / PRE-ta"},
      {pt:"laranja", es:"naranja", ipa:"la-RAN-zha"},
      {pt:"roxo / roxa", es:"morado / morada (¡no rojo!)", ipa:"HO-shu / HO-sha"},
      {pt:"cinza", es:"gris", ipa:"SIN-za"},
      {pt:"marrom", es:"marrón", ipa:"ma-RROM"}
    ],
    phrases:[
      {pt:"De que cor é isso?", es:"¿De qué color es esto?", ipa:"dji ki KOR e IS-su"},
      {pt:"É azul.", es:"Es azul.", ipa:"E a-ZUL"},
      {pt:"Tenho cabelo preto.", es:"Tengo el pelo negro.", ipa:"TE-nhu ka-BE-lu PRE-tu"},
      {pt:"Meus olhos são castanhos.", es:"Mis ojos son castaños.", ipa:"meus O-lhus saun kas-TA-nhus"},
      {pt:"Qual é a sua cor favorita?", es:"¿Cuál es tu color favorito?", ipa:"KWAU e a SU-a KOR fa-vo-HI-ta"},
      {pt:"Roxo não é vermelho!", es:"¡Morado no es rojo!", ipa:"HO-shu naun e ver-ME-lhu"}
    ],
    grammar:"¡Cuidado con los falsos amigos! 'Roxo' significa MORADO, no rojo. El rojo es 'vermelho'. Otro falso amigo frecuente: 'borracha' en portugués = goma de borrar / caucho, no una persona que bebe mucho. La 'lh' (como en 'olhos', 'vermelho') suena parecida a la 'll' castellana o a la 'gli' italiana — es un sonido lateral palatal.",
    practice:[
      "Describe los colores de tres objetos que tienes cerca",
      "Practica el falso amigo: roxo ≠ rojo — ¿cómo dirías 'camisa roja'?",
      "Di el color de tus ojos y pelo usando 'Tenho olhos ___ e cabelo ___'"
    ]
  },
  { day:4,
    title:"La familia",
    titleNative:"A família",
    focus:"El vocabulario familiar en portugués es muy similar al español. Las diferencias clave: 'irmão/irmã' (hermano/hermana) con su tilde nasal, 'avô/avó' (abuelo/abuela — ¡el acento distingue el género!), y 'sobrinho/sobrinha' (sobrino/sobrina). El artículo 'a' se usa muchísimo antes de nombres propios en Brasil.",
    vocab:[
      {pt:"a mãe", es:"la madre", ipa:"a MAUN"},
      {pt:"o pai", es:"el padre", ipa:"u PAI"},
      {pt:"o irmão / a irmã", es:"el hermano / la hermana", ipa:"u ir-MAUN / a ir-MA"},
      {pt:"o filho / a filha", es:"el hijo / la hija", ipa:"u FI-lhu / a FI-lha"},
      {pt:"o avô / a avó", es:"el abuelo / la abuela", ipa:"u a-VO / a a-VO"},
      {pt:"o marido", es:"el marido / el esposo", ipa:"u ma-HI-du"},
      {pt:"a esposa", es:"la esposa", ipa:"a es-PO-za"},
      {pt:"o tio / a tia", es:"el tío / la tía", ipa:"u TI-u / a TI-a"},
      {pt:"o sobrinho / a sobrinha", es:"el sobrino / la sobrina", ipa:"u so-BRI-nhu / a so-BRI-nha"},
      {pt:"o primo / a prima", es:"el primo / la prima", ipa:"u PRI-mu / a PRI-ma"}
    ],
    phrases:[
      {pt:"Tenho dois irmãos.", es:"Tengo dos hermanos.", ipa:"TE-nhu DOIS ir-MAUNS"},
      {pt:"Minha mãe se chama Ana.", es:"Mi madre se llama Ana.", ipa:"MI-nha MAUN si SHA-ma A-na"},
      {pt:"Você tem filhos?", es:"¿Tienes hijos?", ipa:"vo-SE ten FI-lhus"},
      {pt:"Somos uma família grande.", es:"Somos una familia grande.", ipa:"SO-mus U-ma fa-MI-lya GRAN-dji"},
      {pt:"Meu pai é médico.", es:"Mi padre es médico.", ipa:"meu PAI e ME-dji-ku"},
      {pt:"Eu amo a minha família.", es:"Amo a mi familia.", ipa:"eu A-mu a MI-nha fa-MI-lya"}
    ],
    grammar:"'Meu/minha' (mi) y 'nosso/nossa' (nuestro/a) funcionan igual que en español. La diferencia principal: en Brasil, es muy común usar el artículo antes de nombres propios: 'A Ana chegou' (Ana llegó), 'O João mora aqui' (Juan vive aquí). También: 'avô' (abuelo, acento circunflejo = o cerrada) vs 'avó' (abuela, acento agudo = o abierta) — ¡el acento distingue el género!",
    practice:[
      "Describe tu familia usando 'Tenho ___ irmãos/filhos/primos'",
      "Presenta a tres miembros de tu familia: 'Meu/minha ___ se chama ___ e é ___'",
      "Practica la diferencia: avô (abuelo) vs avó (abuela)"
    ]
  },
  { day:5,
    title:"Comida y bebida",
    titleNative:"Comida e bebida",
    focus:"La cocina brasileña es deliciosa y el vocabulario tiene mucho en común con el español. Cuidado con 'presunto' (jamón, no presunto), 'frango' (pollo, no fango), y 'polvo' (pulpo, no polvo). La diversidad culinaria de Brasil — con influencias indígenas, africanas y portuguesas — hace este vocabulario especialmente rico.",
    vocab:[
      {pt:"o arroz", es:"el arroz", ipa:"u a-RROS"},
      {pt:"o feijão", es:"el frijol / la alubia", ipa:"u fei-ZHAUN"},
      {pt:"o frango", es:"el pollo", ipa:"u FRAN-gu"},
      {pt:"a carne", es:"la carne", ipa:"a KAR-ni"},
      {pt:"o pão", es:"el pan", ipa:"u PAUN"},
      {pt:"o queijo", es:"el queso", ipa:"u KEI-zhu"},
      {pt:"a fruta", es:"la fruta", ipa:"a FRU-ta"},
      {pt:"a verdura", es:"la verdura", ipa:"a ver-DU-ra"},
      {pt:"a água", es:"el agua", ipa:"a A-gwa"},
      {pt:"o suco", es:"el jugo / zumo", ipa:"u SU-ku"}
    ],
    phrases:[
      {pt:"Estou com fome.", es:"Tengo hambre.", ipa:"es-TO kon FO-mi"},
      {pt:"Estou com sede.", es:"Tengo sed.", ipa:"es-TO kon SE-dji"},
      {pt:"Que delícia!", es:"¡Qué rico / delicioso!", ipa:"ki de-LI-sya"},
      {pt:"Não como carne.", es:"No como carne.", ipa:"naun KO-mu KAR-ni"},
      {pt:"Tem opção vegetariana?", es:"¿Hay opción vegetariana?", ipa:"ten op-SAUN ve-zhe-ta-HYA-na"},
      {pt:"Arroz com feijão é a base da culinária brasileira.", es:"El arroz con frijoles es la base de la cocina brasileña.", ipa:"a-RROS kon fei-ZHAUN e a BA-zi da ku-li-NA-rya bra-zi-LEI-ra"}
    ],
    grammar:"'Estou com fome/sede' (tengo hambre/sed) — en portugués se usa 'estar con' en vez de 'tener'. Otro patrón: 'Estou com calor/frio/sono' (tengo calor/frío/sueño). La vocal nasal 'ão' (como en 'feijão', 'pão') es el sonido más característico del portugués — combina una vocal 'a' con un sonido nasal al final, parecido al francés 'bon' pero más abierto.",
    practice:[
      "Practica la vocal nasal: pão, feijão, irmão, limão, frango — ¿cuáles tienen 'ão'?",
      "Di tres comidas que te gustan: 'Eu adoro ___'",
      "Usa 'estou com fome/sede' en una frase completa"
    ]
  },
  { day:6,
    title:"En el restaurante",
    titleNative:"No restaurante",
    focus:"Pedir comida en portugués es fácil para el hispanohablante — el vocabulario es muy parecido. El sistema de servicio en Brasil tiene particularidades: el 'garçom' (mesero) traerá la cuenta solo cuando la pidas, y el 'couvert' (cubierto) a veces se cobra por separado. Aprende a pedir, preguntar el precio y pagar.",
    vocab:[
      {pt:"o cardápio / o menu", es:"la carta / el menú", ipa:"u kar-DA-pyu / u me-NU"},
      {pt:"o garçom / a garçonete", es:"el mesero / la mesera", ipa:"u gar-SON / a gar-so-NE-tchi"},
      {pt:"a conta", es:"la cuenta", ipa:"a KON-ta"},
      {pt:"a gorjeta", es:"la propina", ipa:"a gor-ZHE-ta"},
      {pt:"a entrada", es:"el entrante / el aperitivo", ipa:"a en-TRA-da"},
      {pt:"o prato principal", es:"el plato principal", ipa:"u PRA-tu prin-si-PAL"},
      {pt:"a sobremesa", es:"el postre", ipa:"a so-bri-ME-za"},
      {pt:"a bebida", es:"la bebida", ipa:"a be-BI-da"},
      {pt:"sem / com", es:"sin / con", ipa:"sen / kon"},
      {pt:"à vontade", es:"a voluntad / libre consumo", ipa:"a von-TA-dji"}
    ],
    phrases:[
      {pt:"Uma mesa para dois, por favor.", es:"Una mesa para dos, por favor.", ipa:"U-ma ME-za PA-ra DOIS, por fa-VOR"},
      {pt:"Posso ver o cardápio?", es:"¿Puedo ver la carta?", ipa:"POS-su ver u kar-DA-pyu"},
      {pt:"Quero um suco de laranja.", es:"Quiero un jugo de naranja.", ipa:"KE-ru un SU-ku dji la-RAN-zha"},
      {pt:"O que você recomenda?", es:"¿Qué recomiendas?", ipa:"u ki vo-SE re-ko-MEN-da"},
      {pt:"A conta, por favor.", es:"La cuenta, por favor.", ipa:"a KON-ta, por fa-VOR"},
      {pt:"Está delicioso!", es:"¡Está delicioso!", ipa:"es-TA de-li-SYOS-zu"}
    ],
    grammar:"'Quero' (quiero) viene del verbo 'querer' — igual que en español. En Brasil se usa más 'Quero' que 'Eu gostaria' (quisiera) para pedir en restaurantes, es perfectamente educado. El 'ç' siempre suena 's' — nunca 'k' o 'th'. La 'j' y 'g+e/i' en portugués suenan como la 'zh' del francés 'bonjour' — más suave que la 'j' española.",
    practice:[
      "Simula pedir una comida completa: entrada, plato principal y bebida",
      "Practica la 'g' suave: garçom, gorjeta, general — suena 'zh', no 'j' española",
      "Di el precio de algo imaginario: 'Custa vinte reais' (cuesta veinte reales)"
    ]
  },
  { day:7,
    title:"De compras",
    titleNative:"Fazendo compras",
    focus:"De compras en Brasil es una experiencia rica — desde o mercado (mercado) hasta o shopping (centro comercial, sí, usan la palabra inglesa). El vocabulario de compras es muy accesible para hispanohablantes. Aprende a preguntar precios, tallas y a regatear en la feria.",
    vocab:[
      {pt:"a loja", es:"la tienda", ipa:"a LO-zha"},
      {pt:"o mercado", es:"el mercado", ipa:"u mer-KA-du"},
      {pt:"o preço", es:"el precio", ipa:"u PRE-su"},
      {pt:"caro / barato", es:"caro / barato", ipa:"KA-ru / ba-RA-tu"},
      {pt:"o desconto", es:"el descuento", ipa:"u des-KON-tu"},
      {pt:"o tamanho", es:"la talla / el tamaño", ipa:"u ta-MA-nhu"},
      {pt:"o troco", es:"el cambio / el vuelto", ipa:"u TRO-ku"},
      {pt:"a sacola", es:"la bolsa", ipa:"a sa-KO-la"},
      {pt:"pagar", es:"pagar", ipa:"pa-GAR"},
      {pt:"o cartão de crédito", es:"la tarjeta de crédito", ipa:"u kar-TAUN dji KRE-dji-tu"}
    ],
    phrases:[
      {pt:"Quanto custa isso?", es:"¿Cuánto cuesta esto?", ipa:"KWAN-tu KUS-ta I-su"},
      {pt:"Está muito caro.", es:"Está muy caro.", ipa:"es-TA MUI-tu KA-ru"},
      {pt:"Tem um tamanho maior?", es:"¿Tiene una talla más grande?", ipa:"ten un ta-MA-nhu ma-IOR"},
      {pt:"Posso experimentar?", es:"¿Puedo probármelo?", ipa:"POS-su es-pe-ri-men-TAR"},
      {pt:"Aceita cartão?", es:"¿Acepta tarjeta?", ipa:"a-SEI-ta kar-TAUN"},
      {pt:"Vou levar esse.", es:"Me llevo este.", ipa:"vo le-VAR E-si"}
    ],
    grammar:"'Vou + infinitivo' es el futuro más común en Brasil — equivale a 'voy a + infinitivo': 'Vou comprar' (voy a comprar), 'Vou levar' (me voy a llevar). Es exactamente la misma estructura que el español coloquial. 'Quanto custa?' vs '¿Cuánto cuesta?' — casi idénticos. La 'lh' en 'tamanho' suena como la 'll' en castellano clásico.",
    practice:[
      "Practica regatear: '¿Pode fazer um desconto?' (¿Puede hacer un descuento?)",
      "Usa 'Vou + infinitivo' para decir qué vas a comprar",
      "Pregunta por tres artículos diferentes: 'Quanto custa ___?'"
    ]
  },
  { day:8,
    title:"La ciudad y las direcciones",
    titleNative:"A cidade e as direções",
    focus:"Orientarte en una ciudad brasileña requiere conocer el vocabulario básico de lugares y la forma de dar instrucciones. Los brasileños son muy amables para dar direcciones, aunque a veces usan referencias informales ('perto do mercado' — cerca del mercado). Aprende a pedir y entender instrucciones.",
    vocab:[
      {pt:"a rua", es:"la calle", ipa:"a HU-a"},
      {pt:"a avenida", es:"la avenida", ipa:"a a-ve-NI-da"},
      {pt:"o bairro", es:"el barrio", ipa:"u BAI-rru"},
      {pt:"a esquina", es:"la esquina", ipa:"a es-KI-na"},
      {pt:"o semáforo", es:"el semáforo", ipa:"u se-MA-fo-ru"},
      {pt:"à direita / à esquerda", es:"a la derecha / a la izquierda", ipa:"a dji-REI-ta / a es-KER-da"},
      {pt:"em frente a", es:"enfrente a / frente a", ipa:"en FREN-tchi a"},
      {pt:"perto / longe", es:"cerca / lejos", ipa:"PER-tu / LON-zhi"},
      {pt:"a quadra", es:"la cuadra / la manzana", ipa:"a KWA-dra"},
      {pt:"o centro", es:"el centro", ipa:"u SEN-tru"}
    ],
    phrases:[
      {pt:"Como chego ao centro?", es:"¿Cómo llego al centro?", ipa:"KO-mu SHE-gu au SEN-tru"},
      {pt:"Fica longe daqui?", es:"¿Queda lejos de aquí?", ipa:"FI-ka LON-zhi da-KI"},
      {pt:"Vire à direita na esquina.", es:"Gire a la derecha en la esquina.", ipa:"VI-ri a dji-REI-ta na es-KI-na"},
      {pt:"Siga em frente.", es:"Siga recto / Todo recto.", ipa:"SI-ga en FREN-tchi"},
      {pt:"Estou perdido/a.", es:"Estoy perdido/a.", ipa:"es-TO per-DJI-du/da"},
      {pt:"Pode me ajudar?", es:"¿Puede ayudarme?", ipa:"PO-dji mi a-zhu-DAR"}
    ],
    grammar:"'Chegar ao/à' (llegar al/a la) — 'ao' es la contracción de 'a + o' y 'à' de 'a + a'. Esta contracción es obligatoria en portugués: 'Vou ao mercado' (voy al mercado), 'Vou à escola' (voy a la escuela). La 'r' en 'rua' suena 'H' fuerte — es la 'r' inicial, siempre gutural en portugués brasileño.",
    practice:[
      "Da instrucciones desde tu casa hasta el supermercado más cercano en portugués",
      "Practica las contracciones: ao (a+o), à (a+a), do (de+o), da (de+a)",
      "Pregunta cómo llegar a tres lugares diferentes en la ciudad"
    ]
  },
  { day:9,
    title:"Transporte",
    titleNative:"Transporte",
    focus:"Brasil es un país enorme y el transporte es parte central de la vida cotidiana. El vocabulario de transporte tiene mucho en común con el español. Aprende a moverte en 'ônibus' (autobús), 'metrô', y a pedir un 'Uber' (¡que existe en toda Brasil!). El 'trem' (tren) es menos común fuera de São Paulo y Río.",
    vocab:[
      {pt:"o ônibus", es:"el autobús", ipa:"u O-ni-bus"},
      {pt:"o metrô", es:"el metro", ipa:"u me-TRO"},
      {pt:"o táxi / o Uber", es:"el taxi / el Uber", ipa:"u TAK-si / u U-ber"},
      {pt:"o avião", es:"el avión", ipa:"u a-vya-UN"},
      {pt:"a estação", es:"la estación", ipa:"a es-ta-SAUN"},
      {pt:"a passagem", es:"el billete / el pasaje", ipa:"a pa-SA-zhem"},
      {pt:"a parada", es:"la parada", ipa:"a pa-RA-da"},
      {pt:"o horário", es:"el horario", ipa:"u o-RA-ryu"},
      {pt:"o aeroporto", es:"el aeropuerto", ipa:"u a-e-ro-POR-tu"},
      {pt:"o motorista", es:"el conductor / el chófer", ipa:"u mo-to-HIS-ta"}
    ],
    phrases:[
      {pt:"Onde fica a estação de metrô?", es:"¿Dónde está la estación de metro?", ipa:"ON-dji FI-ka a es-ta-SAUN dji me-TRO"},
      {pt:"Quanto custa a passagem?", es:"¿Cuánto cuesta el billete?", ipa:"KWAN-tu KUS-ta a pa-SA-zhem"},
      {pt:"Este ônibus vai ao centro?", es:"¿Este autobús va al centro?", ipa:"ES-tchi O-ni-bus VAI au SEN-tru"},
      {pt:"A que horas sai o avião?", es:"¿A qué hora sale el avión?", ipa:"a ki O-ras SAI u a-vya-UN"},
      {pt:"Preciso de um táxi.", es:"Necesito un taxi.", ipa:"pre-SI-zu dji un TAK-si"},
      {pt:"Por favor, me leve ao aeroporto.", es:"Por favor, lléveme al aeropuerto.", ipa:"por fa-VOR, mi LE-vi au a-e-ro-POR-tu"}
    ],
    grammar:"'Preciso de' (necesito) = 'precisar de' + sustantivo. Es muy usado: 'Preciso de ajuda' (necesito ayuda), 'Preciso de dinheiro' (necesito dinero). La preposición 'de' aparece más en portugués que en español — 'precisar de' vs simplemente 'necesitar'. 'Ônibus' con tilde en la 'ô' indica una 'o' cerrada.",
    practice:[
      "Planifica un trayecto en portugués: '¿Qué transporte necesito para ir de ___ a ___?'",
      "Practica 'Preciso de ___' con cinco cosas diferentes",
      "Pregunta horarios: 'A que horas sai/chega o ___?'"
    ]
  },
  { day:10,
    title:"Alojamiento y hotel",
    titleNative:"Acomodação e hotel",
    focus:"Buscar alojamiento en Brasil es sencillo para el hispanohablante. El vocabulario del hotel es muy similar — 'quarto' (habitación), 'reserva' (reserva), 'recepção' (recepción). Brasil tiene desde pousadas rurales hasta hotéis de lujo en las grandes ciudades. Aprende a reservar, check-in y resolver problemas.",
    vocab:[
      {pt:"o hotel", es:"el hotel", ipa:"u o-TEL"},
      {pt:"o quarto", es:"la habitación", ipa:"u KWAR-tu"},
      {pt:"a reserva", es:"la reserva", ipa:"a he-ZER-va"},
      {pt:"a recepção", es:"la recepción", ipa:"a he-sep-SAUN"},
      {pt:"o café da manhã", es:"el desayuno", ipa:"u ka-FE da ma-NHA"},
      {pt:"a chave", es:"la llave", ipa:"a SHA-vi"},
      {pt:"o ar-condicionado", es:"el aire acondicionado", ipa:"u ar kon-dji-syo-NA-du"},
      {pt:"a piscina", es:"la piscina", ipa:"a pi-SI-na"},
      {pt:"o andar / o piso", es:"el piso / la planta", ipa:"u an-DAR / u PI-zu"},
      {pt:"a diária", es:"la tarifa por noche", ipa:"a djya-RYA"}
    ],
    phrases:[
      {pt:"Tenho uma reserva.", es:"Tengo una reserva.", ipa:"TE-nhu U-ma he-ZER-va"},
      {pt:"Quero fazer o check-in.", es:"Quiero hacer el check-in.", ipa:"KE-ru fa-ZER u SHEK-in"},
      {pt:"O quarto tem ar-condicionado?", es:"¿La habitación tiene aire acondicionado?", ipa:"u KWAR-tu ten ar kon-dji-syo-NA-du"},
      {pt:"O café da manhã está incluído?", es:"¿El desayuno está incluido?", ipa:"u ka-FE da ma-NHA es-TA in-klu-I-du"},
      {pt:"Há algum problema com o quarto.", es:"Hay algún problema con la habitación.", ipa:"a au-GUN pro-BLE-ma kon u KWAR-tu"},
      {pt:"Pode me dar mais toalhas?", es:"¿Puede darme más toallas?", ipa:"PO-dji mi dar MAIS twa-LHAS"}
    ],
    grammar:"'Há' (hay, existe) es la tercera persona singular de 'haver' y equivale exactamente al 'hay' del español: 'Há um problema' (hay un problema), 'Não há quartos' (no hay habitaciones). La 'h' en portugués SIEMPRE es muda, igual que en español. La 'mh' en 'manhã' es una 'm' nasal — no se pronuncia la 'h'.",
    practice:[
      "Simula el proceso de check-in completo: desde la llegada hasta conseguir la llave",
      "Pregunta por las facilidades del hotel: piscina, restaurante, estacionamiento",
      "Practica resolver un problema: '¿El AC no funciona, qué dices?'"
    ]
  },
  { day:11,
    title:"El tiempo y el clima",
    titleNative:"O tempo e o clima",
    focus:"Brasil tiene una enorme diversidad climática: el trópico húmedo de la Amazonia, las playas del nordeste siempre cálidas, el sur con sus cuatro estaciones. El vocabulario del clima es casi idéntico al español. Atención: 'tempo' en portugués significa TIEMPO (clima), no tempo musical — ese es 'ritmo'.",
    vocab:[
      {pt:"o sol", es:"el sol", ipa:"u SOL"},
      {pt:"a chuva", es:"la lluvia", ipa:"a SHU-va"},
      {pt:"o vento", es:"el viento", ipa:"u VEN-tu"},
      {pt:"a nuvem", es:"la nube", ipa:"a NU-ven"},
      {pt:"a temperatura", es:"la temperatura", ipa:"a tem-pe-ra-TU-ra"},
      {pt:"quente / frio", es:"caliente / frío", ipa:"KEN-tchi / FRI-u"},
      {pt:"úmido / seco", es:"húmedo / seco", ipa:"U-mi-du / SE-ku"},
      {pt:"a tempestade", es:"la tormenta", ipa:"a ten-pes-TA-dji"},
      {pt:"o verão / o inverno", es:"el verano / el invierno", ipa:"u ve-RAUN / u in-VER-nu"},
      {pt:"a previsão do tempo", es:"el pronóstico del tiempo", ipa:"a pre-vi-ZAUN du TEM-pu"}
    ],
    phrases:[
      {pt:"Que tempo faz hoje?", es:"¿Qué tiempo hace hoy?", ipa:"ki TEM-pu fas O-zhi"},
      {pt:"Está muito calor.", es:"Hace mucho calor.", ipa:"es-TA MUI-tu ka-LOR"},
      {pt:"Vai chover.", es:"Va a llover.", ipa:"VAI sho-VER"},
      {pt:"O verão no Brasil é muito quente.", es:"El verano en Brasil es muy caluroso.", ipa:"u ve-RAUN nu bra-ZIL e MUI-tu KEN-tchi"},
      {pt:"Precisa de guarda-chuva hoje.", es:"Necesitas paraguas hoy.", ipa:"pre-SI-za dji GWAR-da-SHU-va O-zhi"},
      {pt:"Adoro quando chove.", es:"Me encanta cuando llueve.", ipa:"a-DO-ru KWAN-du SHO-vi"}
    ],
    grammar:"'Está + adjetivo' para hablar del tiempo en expresiones como 'Está calor/frio' — en este caso 'estar' funciona donde en español usaríamos 'hacer': 'Está muito calor' (hace mucho calor). La 'ch' en portugués suena siempre 'sh' como en 'chuva', 'chave', 'tchau' — igual que la 'sh' del inglés 'shop'.",
    practice:[
      "Describe el clima de hoy en tu ciudad en portugués",
      "Practica la 'ch'='sh': chuva, chave, tchau, chocolate — ¿notas el patrón?",
      "Di tu estación favorita y explica por qué: 'Adoro o/a ___ porque ___'"
    ]
  },
  { day:12,
    title:"La ropa",
    titleNative:"A roupa",
    focus:"El vocabulario de la ropa en portugués tiene bastantes palabras similares al español, pero también algunas sorpresas. 'Camisa' existe igual, pero 'calça' (pantalón) y 'sapato' (zapato) son diferentes. El clima tropical de Brasil también influye en el vocabulario — mucho vocabulario de ropa de playa y ropa ligera.",
    vocab:[
      {pt:"a camisa", es:"la camisa", ipa:"a ka-MI-za"},
      {pt:"a calça", es:"el pantalón", ipa:"a KAL-sa"},
      {pt:"o vestido", es:"el vestido", ipa:"u ves-TJI-du"},
      {pt:"o sapato", es:"el zapato", ipa:"u sa-PA-tu"},
      {pt:"a sandália", es:"la sandalia", ipa:"a san-DA-lya"},
      {pt:"o casaco", es:"el abrigo / la chaqueta", ipa:"u ka-ZA-ku"},
      {pt:"a camiseta", es:"la camiseta / la playera", ipa:"a ka-mi-ZE-ta"},
      {pt:"o shorts / o bermuda", es:"los pantalones cortos", ipa:"u SHORTS / u ber-MU-da"},
      {pt:"a bolsa", es:"el bolso / la cartera", ipa:"a BOL-sa"},
      {pt:"o cinto", es:"el cinturón", ipa:"u SIN-tu"}
    ],
    phrases:[
      {pt:"Que tamanho você usa?", es:"¿Qué talla usas?", ipa:"ki ta-MA-nhu vo-SE U-za"},
      {pt:"Estou procurando uma calça preta.", es:"Estoy buscando un pantalón negro.", ipa:"es-TO pro-ku-RAN-du U-ma KAL-sa PRE-ta"},
      {pt:"Esta camiseta não me cabe.", es:"Esta camiseta no me queda bien.", ipa:"ES-ta ka-mi-ZE-ta naun mi KA-bi"},
      {pt:"Tem uma cor diferente?", es:"¿Tiene un color diferente?", ipa:"ten U-ma KOR dji-fe-REN-tchi"},
      {pt:"Posso experimentar essa?", es:"¿Puedo probarme esa?", ipa:"POS-su es-pe-ri-men-TAR E-sa"},
      {pt:"Está na moda.", es:"Está de moda.", ipa:"es-TA na MO-da"}
    ],
    grammar:"'Caber' (caber/quedar bien) — 'não me cabe' (no me queda). 'Procurar' en portugués significa BUSCAR, no procurar. Es uno de los falsos amigos más comunes: 'Estou procurando' = 'estoy buscando', no 'estoy procurando'. 'Usar' también significa llevar puesto/usar ropa: 'Uso camisa azul' (llevo puesta / uso una camisa azul).",
    practice:[
      "Describe lo que llevas puesto hoy en portugués",
      "Falso amigo clave: 'procurar' = buscar, no procurar — usa en una frase",
      "Pregunta por ropa en una tienda: talla, color y precio"
    ]
  },
  { day:13,
    title:"Salud y cuerpo",
    titleNative:"Saúde e corpo",
    focus:"Conocer el vocabulario de salud es esencial en cualquier idioma. En Brasil el sistema público de salud se llama SUS (Sistema Único de Saúde). El vocabulario médico es muy similar al español por las raíces latinas compartidas. Aprende a describir síntomas y buscar ayuda médica.",
    vocab:[
      {pt:"a cabeça", es:"la cabeza", ipa:"a ka-BE-sa"},
      {pt:"o braço", es:"el brazo", ipa:"u BRA-su"},
      {pt:"a perna", es:"la pierna", ipa:"a PER-na"},
      {pt:"o estômago", es:"el estómago", ipa:"u es-TO-ma-gu"},
      {pt:"a dor", es:"el dolor", ipa:"a DOR"},
      {pt:"a febre", es:"la fiebre", ipa:"a FE-bri"},
      {pt:"o médico / a médica", es:"el médico / la médica", ipa:"u ME-dji-ku / a ME-dji-ka"},
      {pt:"o remédio", es:"el medicamento / la medicina", ipa:"u he-ME-dju"},
      {pt:"o hospital", es:"el hospital", ipa:"u os-pi-TAL"},
      {pt:"a farmácia", es:"la farmacia", ipa:"a far-MA-sya"}
    ],
    phrases:[
      {pt:"Estou me sentindo mal.", es:"Me siento mal.", ipa:"es-TO mi sen-CHIN-du MAL"},
      {pt:"Tenho dor de cabeça.", es:"Tengo dolor de cabeza.", ipa:"TE-nhu DOR dji ka-BE-sa"},
      {pt:"Preciso de um médico.", es:"Necesito un médico.", ipa:"pre-SI-zu dji un ME-dji-ku"},
      {pt:"Onde fica a farmácia mais próxima?", es:"¿Dónde está la farmacia más cercana?", ipa:"ON-dji FI-ka a far-MA-sya MAIS PRO-ksi-ma"},
      {pt:"Sou alérgico/a a ___.", es:"Soy alérgico/a a ___.", ipa:"so a-LER-zhi-ku/ka a ___"},
      {pt:"Chama uma ambulância!", es:"¡Llama una ambulancia!", ipa:"SHA-ma U-ma am-bu-LAN-sya"}
    ],
    grammar:"'Sentir-se' (sentirse) es un verbo reflexivo igual que en español. La diferencia: en Brasil el pronombre reflexivo va después del verbo en muchos contextos: 'Estou me sentindo' (me estoy sintiendo). 'Remédio' (medicamento) — diferente al español 'remedio' que es más general. 'Próximo' = cercano, próximo — igual que en español.",
    practice:[
      "Describe tres síntomas usando 'Tenho dor de ___' y 'Estou com ___'",
      "Practica pedir ayuda: '¿Cómo dices «necesito un médico» en una emergencia?'",
      "¿Cuáles son las partes del cuerpo que ya conoces por el español?"
    ]
  },
  { day:14,
    title:"Trabajo y profesiones",
    titleNative:"Trabalho e profissões",
    focus:"El mundo laboral tiene vocabulario muy similar en español y portugués. 'Trabalho' (trabajo) es diferente al español — viene de 'tripalium', el mismo origen que el español 'trabajo'. Las profesiones son casi todas reconocibles. Aprende a hablar de tu trabajo, preguntar por el de otros y las expresiones del mundo laboral.",
    vocab:[
      {pt:"o trabalho", es:"el trabajo", ipa:"u tra-BA-lhu"},
      {pt:"o emprego", es:"el empleo", ipa:"u em-PRE-gu"},
      {pt:"a empresa", es:"la empresa", ipa:"a em-PRE-za"},
      {pt:"o escritório", es:"la oficina", ipa:"u es-kri-TO-ryu"},
      {pt:"o chefe / a chefe", es:"el/la jefe/a", ipa:"u/a SHE-fi"},
      {pt:"o salário", es:"el salario", ipa:"u sa-LA-ryu"},
      {pt:"a reunião", es:"la reunión", ipa:"a heu-nyi-AUN"},
      {pt:"trabalhar", es:"trabajar", ipa:"tra-ba-LHAR"},
      {pt:"contratar", es:"contratar", ipa:"kon-tra-TAR"},
      {pt:"o colega", es:"el/la colega / el/la compañero/a de trabajo", ipa:"u ko-LE-ga"}
    ],
    phrases:[
      {pt:"Em que você trabalha?", es:"¿En qué trabajas?", ipa:"en ki vo-SE tra-BA-lha"},
      {pt:"Sou professor/a.", es:"Soy profesor/a.", ipa:"so pro-fe-SOR/a"},
      {pt:"Trabalho em uma empresa de tecnologia.", es:"Trabajo en una empresa de tecnología.", ipa:"tra-BA-lhu en U-ma em-PRE-za dji tek-no-lo-ZHI-a"},
      {pt:"Estou procurando emprego.", es:"Estoy buscando trabajo.", ipa:"es-TO pro-ku-RAN-du em-PRE-gu"},
      {pt:"Tenho uma reunião às três.", es:"Tengo una reunión a las tres.", ipa:"TE-nhu U-ma heu-nyi-AUN as TRES"},
      {pt:"Você gosta do seu trabalho?", es:"¿Te gusta tu trabajo?", ipa:"vo-SE GOS-ta du SEU tra-BA-lhu"}
    ],
    grammar:"'Seu/sua' (tu/su) — en Brasil se usa mucho 'seu/sua' para la segunda persona (de 'você'): 'Seu trabalho' (tu trabajo), 'Sua família' (tu familia). La distinción entre 'tu' y 'você' varía por región — en Rio se usa más 'tu', en São Paulo casi siempre 'você'. 'Às' = 'a las' (contracción de 'a + as').",
    practice:[
      "Di tu profesión o la profesión que te gustaría tener",
      "Practica: '¿Qué diferencias hay entre tu trabajo en español y en portugués?'",
      "Usa 'às' para decir a qué hora tienes reuniones/clases"
    ]
  },
  { day:15,
    title:"Tecnología y redes sociales",
    titleNative:"Tecnologia e redes sociais",
    focus:"El vocabulario tecnológico es el más fácil para hispanohablantes — la mayoría son anglicismos idénticos en ambos idiomas: 'internet', 'email', 'selfie', 'streaming'. Brasil es uno de los países más activos en redes sociales del mundo. Aprende las expresiones específicas del portugués digital.",
    vocab:[
      {pt:"o celular", es:"el celular / el móvil", ipa:"u se-lu-LAR"},
      {pt:"o aplicativo / o app", es:"la aplicación / la app", ipa:"u a-pli-ka-TJI-vu / u AP"},
      {pt:"a rede social", es:"la red social", ipa:"a HE-dji so-SYAL"},
      {pt:"curtir", es:"dar like / dar me gusta", ipa:"kur-TCHIR"},
      {pt:"compartilhar", es:"compartir / compartir en redes", ipa:"kom-par-tchi-LHAR"},
      {pt:"o carregador", es:"el cargador", ipa:"u ka-he-ga-DOR"},
      {pt:"a senha", es:"la contraseña / el PIN", ipa:"a SE-nha"},
      {pt:"o wi-fi", es:"el wi-fi", ipa:"u WAI-fai"},
      {pt:"baixar", es:"descargar / bajar", ipa:"bai-SHAR"},
      {pt:"o vídeo", es:"el vídeo", ipa:"u VI-dju"}
    ],
    phrases:[
      {pt:"Qual é a senha do wi-fi?", es:"¿Cuál es la contraseña del wi-fi?", ipa:"KWAU e a SE-nha du WAI-fai"},
      {pt:"Meu celular está sem bateria.", es:"Mi móvil está sin batería.", ipa:"meu se-lu-LAR es-TA sen ba-te-HI-a"},
      {pt:"Você tem Instagram?", es:"¿Tienes Instagram?", ipa:"vo-SE ten ins-ta-GRAM"},
      {pt:"Vou te mandar no WhatsApp.", es:"Te mando por WhatsApp.", ipa:"vo tchi man-DAR nu WATS-ap"},
      {pt:"Posso usar seu carregador?", es:"¿Puedo usar tu cargador?", ipa:"POS-su u-ZAR seu ka-he-ga-DOR"},
      {pt:"O sinal está ruim aqui.", es:"La señal está mala aquí.", ipa:"u si-NAL es-TA HUIN a-KI"}
    ],
    grammar:"'Curtir' (dar like) viene de 'curtir' que originalmente significa 'disfrutar/apreciar' — ¡es la misma palabra! El WhatsApp es omnipresente en Brasil — muchas comunicaciones laborales y personales van por ahí. 'Ruim' (malo, de mala calidad) — diferente a 'mau' que es más 'malvado'. Pronunciación: 'ruim' = HUIN (la 'r' es inicial, suena 'h').",
    practice:[
      "Pide la contraseña del wi-fi usando la frase del día",
      "Practica: ¿Cómo dirías 'sube una foto a Instagram' en portugués?",
      "¿Qué apps conoces que tengan nombres iguales en español y portugués?"
    ]
  },
  { day:16,
    title:"La naturaleza",
    titleNative:"A natureza",
    focus:"Brasil tiene una naturaleza incomparable: la Amazonia, el Pantanal, las cataratas de Iguazú, las playas del nordeste. El vocabulario de naturaleza es muy similar al español con algunas diferencias llamativas. 'Floresta' (bosque/selva) es la palabra clave — y en Brasil, la floresta amazónica es el pulmón del mundo.",
    vocab:[
      {pt:"a floresta", es:"el bosque / la selva", ipa:"a flo-RES-ta"},
      {pt:"a praia", es:"la playa", ipa:"a PRAI-a"},
      {pt:"o rio", es:"el río", ipa:"u HI-u"},
      {pt:"a cachoeira", es:"la cascada / la catarata", ipa:"a ka-sho-EI-ra"},
      {pt:"a montanha", es:"la montaña", ipa:"a mon-TA-nha"},
      {pt:"o oceano", es:"el océano", ipa:"u o-sya-nu"},
      {pt:"a areia", es:"la arena", ipa:"a a-REI-a"},
      {pt:"o pôr do sol", es:"el atardecer / la puesta de sol", ipa:"u POR du SOL"},
      {pt:"a selva", es:"la selva (específicamente tropical)", ipa:"a SEL-va"},
      {pt:"a fauna e a flora", es:"la fauna y la flora", ipa:"a FAU-na i a FLO-ra"}
    ],
    phrases:[
      {pt:"A Amazônia é a maior floresta tropical do mundo.", es:"La Amazonia es la mayor selva tropical del mundo.", ipa:"a a-ma-ZO-nya e a ma-IOR flo-RES-ta tro-pi-KAL du MUN-du"},
      {pt:"Vamos à praia amanhã?", es:"¿Vamos a la playa mañana?", ipa:"VA-mus a PRAI-a a-ma-NHA"},
      {pt:"O Rio Amazonas é imenso.", es:"El río Amazonas es enorme.", ipa:"u HI-u a-ma-ZO-nas e i-MEN-su"},
      {pt:"Adoro o pôr do sol na praia.", es:"Me encanta el atardecer en la playa.", ipa:"a-DO-ru u POR du SOL na PRAI-a"},
      {pt:"Precisamos proteger a natureza.", es:"Necesitamos proteger la naturaleza.", ipa:"pre-si-ZA-mus pro-te-ZHER a na-tu-RE-za"},
      {pt:"Que vista linda!", es:"¡Qué vista tan bonita!", ipa:"ki VIS-ta LIN-da"}
    ],
    grammar:"'Linda' en portugués = BONITA, hermosa — ¡no Linda como nombre propio! 'Que vista linda!' (¡qué vista tan bonita!). 'Amanhã' (mañana — el día siguiente) tiene tilde nasal en la 'ã' final. La 'nh' en 'montanha', 'amanhã', 'manhã' suena exactamente como la 'ñ' española — es tu punto de referencia perfecto.",
    practice:[
      "Describe el paisaje natural de tu país o región favorita en portugués",
      "Practica 'nh' = 'ñ': montanha, amanhã, manhã, banho — ¿lo sientes igual?",
      "Usa 'Adoro' y 'Preciso' en frases sobre la naturaleza"
    ]
  },
  { day:17,
    title:"Arte y cultura",
    titleNative:"Arte e cultura",
    focus:"La cultura brasileña es extraordinaria: el carnaval, la bossa nova, el samba, el cinema novo. El vocabulario cultural tiene mucho en común con el español por las raíces latinas. Brasil tiene una de las culturas más vibrantes y originales del mundo — aprende a hablar de ella.",
    vocab:[
      {pt:"a música", es:"la música", ipa:"a MU-zi-ka"},
      {pt:"a pintura", es:"la pintura", ipa:"a pin-TU-ra"},
      {pt:"o museu", es:"el museo", ipa:"u mu-ZEU"},
      {pt:"o teatro", es:"el teatro", ipa:"u tchi-A-tru"},
      {pt:"o cinema", es:"el cine", ipa:"u si-NE-ma"},
      {pt:"a dança", es:"el baile / la danza", ipa:"a DAN-sa"},
      {pt:"o carnaval", es:"el carnaval", ipa:"u kar-na-VAL"},
      {pt:"a capoeira", es:"la capoeira", ipa:"a ka-po-EI-ra"},
      {pt:"a literatura", es:"la literatura", ipa:"a li-te-ra-TU-ra"},
      {pt:"o artista", es:"el/la artista", ipa:"u ar-TCHIS-ta"}
    ],
    phrases:[
      {pt:"O carnaval do Rio é famoso no mundo inteiro.", es:"El carnaval de Río es famoso en todo el mundo.", ipa:"u kar-na-VAL du HI-u e fa-MO-zu nu MUN-du in-TEI-ru"},
      {pt:"Você gosta de samba?", es:"¿Te gusta el samba?", ipa:"vo-SE GOS-ta dji SAM-ba"},
      {pt:"Vamos ao museu hoje?", es:"¿Vamos al museo hoy?", ipa:"VA-mus au mu-ZEU O-zhi"},
      {pt:"A bossa nova é a música da alma brasileira.", es:"La bossa nova es la música del alma brasileña.", ipa:"a BO-sa NO-va e a MU-zi-ka da AL-ma bra-zi-LEI-ra"},
      {pt:"Gosto muito de cinema brasileiro.", es:"Me gusta mucho el cine brasileño.", ipa:"GOS-tu MUI-tu dji si-NE-ma bra-zi-LEI-ru"},
      {pt:"Que artista incrível!", es:"¡Qué artista increíble!", ipa:"ki ar-TCHIS-ta in-KRI-vel"}
    ],
    grammar:"'Gostar de' (gustar de) — el verbo 'gustar' en portugués funciona diferente al español. En portugués se usa 'Eu gosto de música' (Me gusta la música) — sujeto + gostar + de + cosa. Al contrario que en español donde el objeto es el sujeto gramatical. Mais: 'Gosto muito de' (me gusta mucho) es de uso diario.",
    practice:[
      "Di tres cosas culturales brasileñas que te interesan usando 'Gosto de ___'",
      "Contrasta 'gostar de' en portugués vs 'gustar' en español",
      "Describe tu tipo de música favorita: '¿Qué músico o grupo te gusta?'"
    ]
  },
  { day:18,
    title:"Deportes y actividades",
    titleNative:"Esportes e atividades",
    focus:"Brasil es una potencia deportiva mundial — el futebol es una religión, pero también dominan en vôlei (voleibol), MMA y atletismo. El vocabulario deportivo tiene muchos anglicismos y palabras similares al español. Aprende a hablar de deportes, aficiones y actividad física.",
    vocab:[
      {pt:"o futebol", es:"el fútbol", ipa:"u fu-tchi-BOL"},
      {pt:"o vôlei", es:"el voleibol", ipa:"u VO-lei"},
      {pt:"a natação", es:"la natación", ipa:"a na-ta-SAUN"},
      {pt:"correr", es:"correr", ipa:"ko-RRER"},
      {pt:"jogar", es:"jugar", ipa:"zho-GAR"},
      {pt:"o time / a equipe", es:"el equipo", ipa:"u TCHIMI / a e-KI-pi"},
      {pt:"o treino", es:"el entrenamiento", ipa:"u TREI-nu"},
      {pt:"ganhar / perder", es:"ganar / perder", ipa:"ga-NHAR / per-DER"},
      {pt:"a academia", es:"el gimnasio", ipa:"a a-ka-de-MYA"},
      {pt:"o campeonato", es:"el campeonato", ipa:"u kam-pio-NA-tu"}
    ],
    phrases:[
      {pt:"Você torce para qual time?", es:"¿A qué equipo le vas? / ¿Por quién pides?", ipa:"vo-SE TOR-si PA-ra KWAU TCHIMI"},
      {pt:"Vamos assistir ao jogo?", es:"¿Vamos a ver el partido?", ipa:"VA-mus a-sis-TCHIR au ZHO-gu"},
      {pt:"O Brasil ganhou!", es:"¡Brasil ganó!", ipa:"u bra-ZIL ga-NHOU"},
      {pt:"Pratico esportes todos os dias.", es:"Practico deportes todos los días.", ipa:"PRA-tchi-ku es-POR-tchis TO-dus us DJI-as"},
      {pt:"Você joga futebol?", es:"¿Juegas al fútbol?", ipa:"vo-SE ZHO-ga fu-tchi-BOL"},
      {pt:"Fui à academia hoje de manhã.", es:"Fui al gimnasio esta mañana.", ipa:"fui a a-ka-de-MYA O-zhi dji ma-NHA"}
    ],
    grammar:"'Assistir a' (ver/asistir a) — 'assistir ao jogo' = ver el partido, asistir al partido. 'Assistir' en portugués puede significar 'ver' (una peli, un partido) además de 'asistir'. 'Torcer para' (animar a, apoyar a un equipo) — literalmente 'retorcer por'. 'Ganhar' = ganar, pero también recibir/obtener: 'Ganhei um presente' (recibí un regalo).",
    practice:[
      "Di qué deportes practicas o te gustan usando 'Jogo/Pratico ___'",
      "Habla de un partido importante: quién ganó, cuándo fue",
      "Pregunta a alguien por su equipo favorito: '¿Você torce para qual time?'"
    ]
  },
  { day:19,
    title:"Viajes y turismo",
    titleNative:"Viagens e turismo",
    focus:"Brasil es un destino turístico increíble y los brasileños también son grandes viajeros. El vocabulario de viajes tiene mucho en común con el español. Aprende a planificar un viaje, reservar actividades y hablar de experiencias de viaje — en portugués, los viajes se llaman 'viagens' (plural de 'viagem').",
    vocab:[
      {pt:"a viagem", es:"el viaje", ipa:"a vya-ZHEM"},
      {pt:"o passaporte", es:"el pasaporte", ipa:"u pa-sa-POR-tchi"},
      {pt:"a mala", es:"la maleta", ipa:"a MA-la"},
      {pt:"o turista", es:"el/la turista", ipa:"u tu-HIS-ta"},
      {pt:"a excursão", es:"la excursión", ipa:"a es-kur-SAUN"},
      {pt:"o guia turístico", es:"el guía turístico", ipa:"u GI-a tu-HIS-tchi-ku"},
      {pt:"a fotografia", es:"la fotografía", ipa:"a fo-to-gra-FI-a"},
      {pt:"a lembrança / o souvenir", es:"el recuerdo / el souvenir", ipa:"a len-BRAN-sa / u su-ve-NIR"},
      {pt:"viajar", es:"viajar", ipa:"vya-ZHAR"},
      {pt:"conhecer", es:"conocer", ipa:"ko-nhe-SER"}
    ],
    phrases:[
      {pt:"Sonho em viajar para o Brasil.", es:"Sueño con viajar a Brasil.", ipa:"SO-nhu en vya-ZHAR PA-ra u bra-ZIL"},
      {pt:"Qual é o melhor lugar para visitar?", es:"¿Cuál es el mejor lugar para visitar?", ipa:"KWAU e u me-LHOR lu-GAR PA-ra vi-zi-TAR"},
      {pt:"Preciso renovar meu passaporte.", es:"Necesito renovar mi pasaporte.", ipa:"pre-SI-zu he-no-VAR meu pa-sa-POR-tchi"},
      {pt:"Que país você mais quer conhecer?", es:"¿Qué país quieres conocer más?", ipa:"ki pa-IS vo-SE MAIS ker ko-nhe-SER"},
      {pt:"Tirei muitas fotos da viagem.", es:"Saqué muchas fotos del viaje.", ipa:"tchi-REI MUI-tas FO-tus da vya-ZHEM"},
      {pt:"Foi a melhor viagem da minha vida!", es:"¡Fue el mejor viaje de mi vida!", ipa:"foi a me-LHOR vya-ZHEM da MI-nha VI-da"}
    ],
    grammar:"'Sonhar em + infinitivo' (soñar con + infinitivo) — la preposición es 'em', no 'con': 'Sonho em conhecer o Brasil' (sueño con conocer Brasil). 'Conhecer' = conocer (personas/lugares por primera vez); 'saber' = saber (información, hechos) — igual que en español. 'Tirei fotos' (saqué fotos) — 'tirar fotos' es la expresión estándar en Brasil.",
    practice:[
      "Describe el viaje de tus sueños usando 'Sonho em viajar para ___'",
      "Practica la diferencia: 'conhecer' (conocer por primera vez) vs 'saber' (saber datos)",
      "¿Qué llevarías en tu maleta para un viaje a Brasil? Di cinco cosas"
    ]
  },
  { day:20,
    title:"El amor y las relaciones",
    titleNative:"O amor e os relacionamentos",
    focus:"El vocabulario del amor en portugués es especialmente rico — Brasil tiene fama de ser uno de los países más románticos del mundo. 'Saudade' es la palabra más famosa del portugués: ese sentimiento de nostalgia y añoranza que no tiene traducción exacta. Aprende a expresar sentimientos y hablar de relaciones.",
    vocab:[
      {pt:"o amor", es:"el amor", ipa:"u a-MOR"},
      {pt:"a saudade", es:"la morriña / la añoranza (intraducible)", ipa:"a sau-DA-dji"},
      {pt:"namorado / namorada", es:"novio / novia", ipa:"na-mo-RA-du / na-mo-RA-da"},
      {pt:"se apaixonar", es:"enamorarse", ipa:"si a-pai-sho-NAR"},
      {pt:"beijar", es:"besar", ipa:"bei-ZHAR"},
      {pt:"o casamento", es:"la boda / el matrimonio", ipa:"u ka-za-MEN-tu"},
      {pt:"o coração", es:"el corazón", ipa:"u ko-ra-SAUN"},
      {pt:"a amizade", es:"la amistad", ipa:"a a-mi-ZA-dji"},
      {pt:"carinhoso / carinhosa", es:"cariñoso / cariñosa", ipa:"ka-ri-NHOS-zu / ka-ri-NHOS-za"},
      {pt:"a paixão", es:"la pasión", ipa:"a pai-SHAUN"}
    ],
    phrases:[
      {pt:"Eu te amo.", es:"Te amo.", ipa:"EU tchi A-mu"},
      {pt:"Estou apaixonado/a por você.", es:"Estoy enamorado/a de ti.", ipa:"es-TO a-pai-sho-NA-du/da por vo-SE"},
      {pt:"Tenho saudade de você.", es:"Te echo de menos. / Te extraño.", ipa:"TE-nhu sau-DA-dji dji vo-SE"},
      {pt:"Você quer sair comigo?", es:"¿Quieres salir conmigo?", ipa:"vo-SE ker sa-IR ko-MI-gu"},
      {pt:"Você é a pessoa mais especial da minha vida.", es:"Eres la persona más especial de mi vida.", ipa:"vo-SE e a pe-SO-a MAIS es-pe-SYAL da MI-nha VI-da"},
      {pt:"Que romance!", es:"¡Qué romanticismo!", ipa:"ki ho-MAN-si"}
    ],
    grammar:"'Saudade' es la palabra más untranslatable del portugués — ese sentimiento melancólico de añorar algo o alguien que está ausente, que quizás no regrese o que pertenece al pasado. 'Tenho saudade de você' (te echo de menos). 'Namorado/a' = novio/novia — más específico que en español. 'Casar com' (casarse con) — la preposición es 'com': 'Casei com ela' (me casé con ella).",
    practice:[
      "Practica decir 'Tenho saudade de ___' con diferentes personas o lugares",
      "Describe a tu pareja ideal usando adjetivos del día",
      "¿Cómo dirías 'te quiero' vs 'te amo' en portugués? (Eu gosto de você vs Eu te amo)"
    ]
  },
  { day:21,
    title:"Emociones y estados de ánimo",
    titleNative:"Emoções e estados de ânimo",
    focus:"Expresar emociones en portugués es muy similar al español — las estructuras son casi idénticas. La diferencia clave: en portugués se usa más 'estar' para estados emocionales temporales y 'ser' para características permanentes, igual que en español. Aprende a hablar de cómo te sientes con fluidez.",
    vocab:[
      {pt:"feliz", es:"feliz", ipa:"fe-LIS"},
      {pt:"triste", es:"triste", ipa:"TRIS-tchi"},
      {pt:"animado / animada", es:"animado / emocionado", ipa:"a-ni-MA-du / a-ni-MA-da"},
      {pt:"cansado / cansada", es:"cansado / cansada", ipa:"kan-ZA-du / kan-ZA-da"},
      {pt:"nervoso / nervosa", es:"nervioso / nerviosa", ipa:"ner-VO-zu / ner-VO-za"},
      {pt:"com raiva", es:"enojado / con rabia", ipa:"kon RRAI-va"},
      {pt:"com medo", es:"asustado / con miedo", ipa:"kon ME-du"},
      {pt:"surpreso / surpresa", es:"sorprendido / sorprendida", ipa:"sur-PRE-zu / sur-PRE-za"},
      {pt:"orgulhoso / orgulhosa", es:"orgulloso / orgullosa", ipa:"or-gu-LHOS-zu / or-gu-LHOS-za"},
      {pt:"saudoso / saudosa", es:"nostálgico / que siente saudade", ipa:"sau-DO-zu / sau-DO-za"}
    ],
    phrases:[
      {pt:"Estou muito feliz hoje!", es:"¡Estoy muy feliz hoy!", ipa:"es-TO MUI-tu fe-LIS O-zhi"},
      {pt:"Por que você está triste?", es:"¿Por qué estás triste?", ipa:"por ki vo-SE es-TA TRIS-tchi"},
      {pt:"Estou com medo do escuro.", es:"Tengo miedo a la oscuridad.", ipa:"es-TO kon ME-du du es-KU-ru"},
      {pt:"Fiquei surpreso com a notícia.", es:"Me sorprendió la noticia.", ipa:"fi-KEI sur-PRE-zu kon a no-TCHIS-ya"},
      {pt:"Me sinto orgulhoso/a de você.", es:"Me siento orgulloso/a de ti.", ipa:"mi SIN-tu or-gu-LHOS-zu/za dji vo-SE"},
      {pt:"Tudo vai ficar bem.", es:"Todo va a salir bien.", ipa:"TU-du VAI fi-KAR ben"}
    ],
    grammar:"'Com raiva', 'com medo', 'com fome', 'com sede' — la estructura portuguesa de 'estar con + emoción/sensación física' equivale al español 'tener': 'Estou com medo' = tengo miedo, 'Estou com fome' = tengo hambre. Es uno de los patrones más frecuentes y más diferentes al español. 'Ficar' (quedarse/ponerse) se usa mucho para cambios de estado: 'Fiquei surpreso' (me quedé sorprendido / me sorprendí).",
    practice:[
      "Describe cómo te sientes hoy y por qué en portugués",
      "Practica el patrón 'Estou com ___' con cinco emociones/sensaciones",
      "Usa 'ficar' para describir un cambio emocional: 'Fiquei ___ quando ___'"
    ]
  },
  { day:22,
    title:"El hogar",
    titleNative:"A casa",
    focus:"El vocabulario del hogar es muy similar en español y portugués. Las diferencias más importantes: 'banheiro' (baño) en Brasil (los portugueses dicen 'casa de banho'), 'cozinha' (cocina), y 'sala de estar' (sala de estar — idéntico). El hogar es el lugar donde más vocabulario cotidiano se practica.",
    vocab:[
      {pt:"a cozinha", es:"la cocina", ipa:"a ko-ZI-nha"},
      {pt:"o banheiro", es:"el baño", ipa:"u ba-NHEI-ru"},
      {pt:"a sala de estar", es:"la sala de estar", ipa:"a SA-la dji es-TAR"},
      {pt:"o quarto", es:"el dormitorio / la habitación", ipa:"u KWAR-tu"},
      {pt:"a varanda", es:"la terraza / el balcón", ipa:"a va-RAN-da"},
      {pt:"a geladeira", es:"la nevera / el refrigerador", ipa:"a zhe-la-DEI-ra"},
      {pt:"o fogão", es:"la cocina / el hornillo", ipa:"u fo-GAUN"},
      {pt:"a pia", es:"el fregadero / el lavabo", ipa:"a PI-a"},
      {pt:"a janela", es:"la ventana", ipa:"a zha-NE-la"},
      {pt:"o sofá", es:"el sofá", ipa:"u so-FA"}
    ],
    phrases:[
      {pt:"Onde fica o banheiro?", es:"¿Dónde está el baño?", ipa:"ON-dji FI-ka u ba-NHEI-ru"},
      {pt:"A minha cozinha é pequena mas funcional.", es:"Mi cocina es pequeña pero funcional.", ipa:"a MI-nha ko-ZI-nha e pe-KE-na MAS fun-syo-NAL"},
      {pt:"Posso usar a geladeira?", es:"¿Puedo usar la nevera?", ipa:"POS-su u-ZAR a zhe-la-DEI-ra"},
      {pt:"Vou limpar a casa no fim de semana.", es:"Voy a limpiar la casa el fin de semana.", ipa:"vo lim-PAR a KA-za nu fin dji se-MA-na"},
      {pt:"Moro num apartamento.", es:"Vivo en un apartamento.", ipa:"MO-ru nun a-par-ta-MEN-tu"},
      {pt:"A vista da minha varanda é linda.", es:"La vista de mi terraza es preciosa.", ipa:"a VIS-ta da MI-nha va-RAN-da e LIN-da"}
    ],
    grammar:"'Moro em / moro num' (vivo en) — 'num' es contracción de 'em + um': 'Moro num apartamento' (vivo en un apartamento). 'Limpar' (limpiar) — casi idéntico. 'Fim de semana' (fin de semana) — igual que en español. La 'j' en 'janela' suena 'zh' (suave, como el francés 'j') — no como la 'j' española fuerte.",
    practice:[
      "Describe tu casa o apartamento ideal usando el vocabulario del día",
      "Practica 'num/numa' (em + um/uma): 'Moro num ___, tenho uma ___'",
      "Di qué harás en casa este fin de semana: 'Vou ___ no fim de semana'"
    ]
  },
  { day:23,
    title:"Los animales",
    titleNative:"Os animais",
    focus:"El vocabulario de animales tiene muchas coincidencias con el español. Brasil tiene una de las biodiversidades más ricas del mundo — aprende los nombres de los animales emblemáticos: la 'onça' (jaguar/puma), o 'tucano' (tucán), el 'boto' (delfín de río rosado). Muchos animales tienen nombres similares al español.",
    vocab:[
      {pt:"o cachorro / o cão", es:"el perro", ipa:"u ka-SHO-rru / u KAUN"},
      {pt:"o gato", es:"el gato", ipa:"u GA-tu"},
      {pt:"o pássaro", es:"el pájaro", ipa:"u PA-sa-ru"},
      {pt:"o peixe", es:"el pez / el pescado", ipa:"u PEI-shi"},
      {pt:"a onça", es:"el jaguar / la onza", ipa:"a ON-sa"},
      {pt:"o tucano", es:"el tucán", ipa:"u tu-KA-nu"},
      {pt:"o macaco", es:"el mono / el macaco", ipa:"u ma-KA-ku"},
      {pt:"a cobra", es:"la serpiente / la cobra", ipa:"a KO-bra"},
      {pt:"o boto", es:"el delfín rosado del río", ipa:"u BO-tu"},
      {pt:"a aranha", es:"la araña", ipa:"a a-RA-nha"}
    ],
    phrases:[
      {pt:"Você tem algum animal de estimação?", es:"¿Tienes algún animal de compañía?", ipa:"vo-SE ten al-GUN a-ni-MAL dji es-tchi-ma-SAUN"},
      {pt:"Tenho um cachorro que se chama Rex.", es:"Tengo un perro que se llama Rex.", ipa:"TE-nhu un ka-SHO-rru ki si SHA-ma RREKS"},
      {pt:"O tucano é uma das aves mais coloridas do Brasil.", es:"El tucán es una de las aves más coloridas de Brasil.", ipa:"u tu-KA-nu e U-ma das A-vis MAIS ko-lo-HI-das du bra-ZIL"},
      {pt:"Tenho medo de aranhas.", es:"Tengo miedo a las arañas.", ipa:"TE-nhu ME-du dji a-RA-nhas"},
      {pt:"O boto vive no Rio Amazonas.", es:"El delfín rosado vive en el río Amazonas.", ipa:"u BO-tu VI-vi nu HI-u a-ma-ZO-nas"},
      {pt:"Que animal lindo!", es:"¡Qué animal tan bonito!", ipa:"ki a-ni-MAL LIN-du"}
    ],
    grammar:"'Animal de estimação' (animal de compañía / mascota) — literalmente 'animal de estima/cariño'. 'Cachorro' en Brasil = PERRO (no cachorro/cría). En Portugal 'cachorro' puede significar cachorro de perro, pero en Brasil siempre es el perro adulto. 'Macaco' = mono — igual que en algunas variedades del español latinoamericano.",
    practice:[
      "Describe tu animal favorito o tu mascota en portugués",
      "Falso amigo: 'cachorro' en Brasil = perro — ¿cómo dirías 'tengo un cachorro'?",
      "Nombra cinco animales de Brasil que conozcas"
    ]
  },
  { day:24,
    title:"Historia y tradiciones",
    titleNative:"História e tradições",
    focus:"Brasil tiene una historia fascinante: la llegada de los portugueses en 1500, la esclavitud africana, la independencia en 1822 y la República. Las tradiciones populares mezclan las culturas indígena, africana y europea. El vocabulario histórico es muy similar al español — las raíces latinas compartidas son tu aliado.",
    vocab:[
      {pt:"a história", es:"la historia", ipa:"a is-TO-rya"},
      {pt:"a independência", es:"la independencia", ipa:"a in-de-pen-DEN-sya"},
      {pt:"a escravidão", es:"la esclavitud", ipa:"a es-kra-vi-DAUN"},
      {pt:"a cultura indígena", es:"la cultura indígena", ipa:"a kul-TU-ra in-DJI-zhe-na"},
      {pt:"a tradição", es:"la tradición", ipa:"a tra-dji-SAUN"},
      {pt:"o folclore", es:"el folclore", ipa:"u fol-KLO-ri"},
      {pt:"a festa junina", es:"la fiesta junina (fiestas de junio)", ipa:"a FES-ta zhu-NI-na"},
      {pt:"a capoeira", es:"la capoeira", ipa:"a ka-po-EI-ra"},
      {pt:"o candomblé", es:"el candomblé", ipa:"u kan-dom-BLE"},
      {pt:"a miscigenação", es:"la mestización / la mezcla de razas", ipa:"a mis-si-zhe-na-SAUN"}
    ],
    phrases:[
      {pt:"O Brasil foi colonizado por Portugal em 1500.", es:"Brasil fue colonizado por Portugal en 1500.", ipa:"u bra-ZIL foi ko-lo-ni-ZA-du por por-tu-GAL en 1500"},
      {pt:"A capoeira é uma luta e uma dança ao mesmo tempo.", es:"La capoeira es una lucha y una danza al mismo tiempo.", ipa:"a ka-po-EI-ra e U-ma LU-ta e U-ma DAN-sa au MES-mu TEM-pu"},
      {pt:"A festa junina celebra os santos do mês de junho.", es:"La fiesta junina celebra a los santos del mes de junio.", ipa:"a FES-ta zhu-NI-na se-LE-bra us SAN-tus du mes dji ZHU-nhu"},
      {pt:"O Brasil tem a maior floresta tropical do mundo.", es:"Brasil tiene la mayor selva tropical del mundo.", ipa:"u bra-ZIL ten a ma-IOR flo-RES-ta tro-pi-KAL du MUN-du"},
      {pt:"Nossa cultura é uma mistura única.", es:"Nuestra cultura es una mezcla única.", ipa:"NO-sa kul-TU-ra e U-ma mis-TU-ra U-ni-ka"},
      {pt:"A história do Brasil é rica e complexa.", es:"La historia de Brasil es rica y compleja.", ipa:"a is-TO-rya du bra-ZIL e HI-ka i kom-PLEK-sa"}
    ],
    grammar:"'Foi' es el pretérito de 'ser/ir' — igual que en español 'fue'. 'O Brasil foi colonizado' (Brasil fue colonizado). El pretérito perfecto simple en portugués (chamado pretérito perfeito) equivale al español pretérito indefinido: 'fui, foi, fomos, foram'. En Brasil se usa poco el pretérito compuesto ('tenho feito') comparado con el simple ('fiz').",
    practice:[
      "Cuenta un evento histórico importante de tu país en portugués",
      "Practica el pretérito: 'fui', 'foi', 'falei', 'comeu' — úsalos en frases",
      "¿Qué tradiciones brasileñas te parecen más interesantes y por qué?"
    ]
  },
  { day:25,
    title:"La música",
    titleNative:"A música",
    focus:"Brasil es una potencia musical mundial: samba, bossa nova, forró, axé, funk carioca, MPB (Música Popular Brasileira). El vocabulario musical es similar al español con algunos términos únicos. Hablar de música es una forma perfecta de conectar con brasileños — es un tema de pasión nacional.",
    vocab:[
      {pt:"a letra", es:"la letra (de una canción)", ipa:"a LE-tra"},
      {pt:"a melodia", es:"la melodía", ipa:"a me-lo-DJI-a"},
      {pt:"o ritmo", es:"el ritmo", ipa:"u RRHI-tmu"},
      {pt:"o cantor / a cantora", es:"el cantante / la cantante", ipa:"u kan-TOR / a kan-TO-ra"},
      {pt:"a banda", es:"la banda / el grupo musical", ipa:"a BAN-da"},
      {pt:"o show", es:"el concierto / el show", ipa:"u SHOW"},
      {pt:"o instrumento", es:"el instrumento", ipa:"u ins-tru-MEN-tu"},
      {pt:"o violão", es:"la guitarra (acústica)", ipa:"u vyo-LAUN"},
      {pt:"tocar", es:"tocar (un instrumento)", ipa:"to-KAR"},
      {pt:"cantar", es:"cantar", ipa:"kan-TAR"}
    ],
    phrases:[
      {pt:"Que música você está ouvindo?", es:"¿Qué música estás escuchando?", ipa:"ki MU-zi-ka vo-SE es-TA ou-VIN-du"},
      {pt:"Adoro bossa nova — é música para a alma.", es:"Me encanta la bossa nova — es música para el alma.", ipa:"a-DO-ru BO-sa NO-va — e MU-zi-ka PA-ra a AL-ma"},
      {pt:"Você toca algum instrumento?", es:"¿Tocas algún instrumento?", ipa:"vo-SE TO-ka al-GUN ins-tru-MEN-tu"},
      {pt:"Vamos ao show hoje à noite?", es:"¿Vamos al concierto esta noche?", ipa:"VA-mus au SHOW O-zhi a NOI-tchi"},
      {pt:"A letra desta música é muito bonita.", es:"La letra de esta canción es muy bonita.", ipa:"a LE-tra DES-ta MU-zi-ka e MUI-tu bo-NI-ta"},
      {pt:"O samba é o ritmo do coração brasileiro.", es:"El samba es el ritmo del corazón brasileño.", ipa:"u SAM-ba e u RRHI-tmu du ko-ra-SAUN bra-zi-LEI-ru"}
    ],
    grammar:"'Ouvir' (escuchar/oír) — 'estou ouvindo' (estoy escuchando). El gerundio en Brasil se forma con -ndo: 'ouvindo', 'cantando', 'tocando'. A diferencia del portugués europeo, Brasil usa el gerundio (-ndo) donde Portugal usa el infinitivo precedido de 'a': Brasil dice 'estou ouvindo', Portugal 'estou a ouvir'. 'Violão' = guitarra acústica (de seis cuerdas); 'guitarra' en portugués = guitarra eléctrica.",
    practice:[
      "Di cuál es tu género musical favorito y por qué: 'Adoro ___ porque ___'",
      "Practica el gerundio: estou ouvindo, estou cantando, estou tocando",
      "¿Conoces algún artista brasileño? Di algo sobre su música"
    ]
  },
  { day:26,
    title:"Negocios y trabajo profesional",
    titleNative:"Negócios e trabalho profissional",
    focus:"El mundo empresarial en Brasil tiene su propio vocabulario. Muchos términos son anglicismos (meeting, briefing, feedback) o muy similares al español. Brasil es la mayor economía de América Latina — hacer negocios en portugués abre enormes oportunidades. Aprende el vocabulario esencial del mundo corporativo.",
    vocab:[
      {pt:"a reunião", es:"la reunión", ipa:"a heu-nyi-AUN"},
      {pt:"o contrato", es:"el contrato", ipa:"u kon-TRA-tu"},
      {pt:"o cliente", es:"el cliente", ipa:"u kli-EN-tchi"},
      {pt:"a proposta", es:"la propuesta", ipa:"a pro-POS-ta"},
      {pt:"o prazo", es:"el plazo / el deadline", ipa:"u PRA-zu"},
      {pt:"o orçamento", es:"el presupuesto", ipa:"u or-sa-MEN-tu"},
      {pt:"a parceria", es:"la asociación / la colaboración", ipa:"a par-se-HI-a"},
      {pt:"negociar", es:"negociar", ipa:"ne-go-syAR"},
      {pt:"assinar", es:"firmar", ipa:"a-si-NAR"},
      {pt:"o lucro", es:"el beneficio / el lucro", ipa:"u LU-kru"}
    ],
    phrases:[
      {pt:"Preciso de uma reunião urgente.", es:"Necesito una reunión urgente.", ipa:"pre-SI-zu dji U-ma heu-nyi-AUN ur-ZHEN-tchi"},
      {pt:"Qual é o prazo para esta proposta?", es:"¿Cuál es el plazo para esta propuesta?", ipa:"KWAU e u PRA-zu PA-ra ES-ta pro-POS-ta"},
      {pt:"Podemos assinar o contrato hoje?", es:"¿Podemos firmar el contrato hoy?", ipa:"po-DE-mus a-si-NAR u kon-TRA-tu O-zhi"},
      {pt:"O orçamento está dentro do esperado.", es:"El presupuesto está dentro de lo previsto.", ipa:"u or-sa-MEN-tu es-TA DEN-tru du es-pe-RA-du"},
      {pt:"Vamos agendar uma call para amanhã?", es:"¿Agendamos una llamada para mañana?", ipa:"VA-mus a-zhen-DAR U-ma KOL PA-ra a-ma-NHA"},
      {pt:"Estamos interessados na parceria.", es:"Estamos interesados en la asociación.", ipa:"es-TA-mus in-te-re-SA-dus na par-se-HI-a"}
    ],
    grammar:"'Agendar' (agendar/programar) — muy usado en Brasil para programar reuniones, citas. 'Dentro do esperado' (dentro de lo previsto/esperado) — 'dentro de' funciona igual que en español. La cortesía empresarial en Brasil es más cálida e informal que en muchos países — es normal usar el nombre de pila desde el primer contacto.",
    practice:[
      "Redacta un email breve en portugués solicitando una reunión",
      "Practica negociar: '¿Puede el plazo ser más flexible? ¿Cuál es el presupuesto máximo?'",
      "Di cuál es tu área profesional y qué tipo de reuniones tienes"
    ]
  },
  { day:27,
    title:"Educación y aprendizaje",
    titleNative:"Educação e aprendizado",
    focus:"El sistema educativo brasileño tiene sus particularidades — desde a escola pública hasta as universidades federais gratuitas. El vocabulario educativo es muy parecido al español. Brasil invierte mucho en educación superior y las universidades públicas (USP, UNICAMP, UFRJ) son de primer nivel mundial.",
    vocab:[
      {pt:"a escola", es:"la escuela", ipa:"a es-KO-la"},
      {pt:"a universidade", es:"la universidad", ipa:"a u-ni-ver-si-DA-dji"},
      {pt:"o professor / a professora", es:"el profesor / la profesora", ipa:"u pro-fe-SOR / a pro-fe-SO-ra"},
      {pt:"o aluno / a aluna", es:"el alumno / la alumna", ipa:"u a-LU-nu / a a-LU-na"},
      {pt:"a aula", es:"la clase", ipa:"a AU-la"},
      {pt:"a prova", es:"el examen", ipa:"a PRO-va"},
      {pt:"a nota", es:"la nota / la calificación", ipa:"a NO-ta"},
      {pt:"a biblioteca", es:"la biblioteca", ipa:"a bi-bli-yo-TE-ka"},
      {pt:"estudar", es:"estudiar", ipa:"es-tu-DAR"},
      {pt:"aprender", es:"aprender", ipa:"a-pren-DER"}
    ],
    phrases:[
      {pt:"Estudo português há seis meses.", es:"Estudio portugués desde hace seis meses.", ipa:"ES-tu-du por-tu-GES a SEIS ME-zis"},
      {pt:"Qual é a sua matéria favorita?", es:"¿Cuál es tu asignatura favorita?", ipa:"KWAU e a SU-a ma-TE-rya fa-vo-HI-ta"},
      {pt:"A prova é na próxima semana.", es:"El examen es la próxima semana.", ipa:"a PRO-va e na PRO-ksi-ma se-MA-na"},
      {pt:"Preciso estudar mais.", es:"Necesito estudiar más.", ipa:"pre-SI-zu es-tu-DAR MAIS"},
      {pt:"Você faz algum curso online?", es:"¿Haces algún curso online?", ipa:"vo-SE fas al-GUN KUR-su on-LAI-ni"},
      {pt:"Aprender idiomas abre muitas portas.", es:"Aprender idiomas abre muchas puertas.", ipa:"a-pren-DER i-DYO-mas A-bri MUI-tas POR-tas"}
    ],
    grammar:"'Estudo português há seis meses' (estudio portugués desde hace seis meses) — 'há' aquí funciona como 'hace' temporal: 'há dois anos' (hace dos años). Esta estructura indica duración desde el pasado hasta ahora. Compara: 'Faz quanto tempo que você estuda português?' (¿Desde hace cuánto tiempo estudias portugués?). 'Aula' = clase (no 'aula' como espacio físico, que en portugués también se usa).",
    practice:[
      "Di cuánto tiempo llevas estudiando algo: 'Estudo ___ há ___ meses/anos'",
      "¿Cuál es tu materia o asignatura favorita? ¿Por qué?",
      "Practica 'há' temporal: 'Moro aqui há ___ anos', 'Trabalho lá há ___'"
    ]
  },
  { day:28,
    title:"Medio ambiente",
    titleNative:"Meio ambiente",
    focus:"Brasil tiene una responsabilidad ambiental enorme — alberga el 60% de la Amazonia. El vocabulario medioambiental es muy similar al español por las raíces latinas. El tema es de debate nacional y global — aprende a hablar de conservación, cambio climático y sostenibilidad en portugués.",
    vocab:[
      {pt:"o meio ambiente", es:"el medio ambiente", ipa:"u MEI-u am-BIEN-tchi"},
      {pt:"a floresta amazônica", es:"la selva amazónica", ipa:"a flo-RES-ta a-ma-ZO-ni-ka"},
      {pt:"o desmatamento", es:"la deforestación", ipa:"u dez-ma-ta-MEN-tu"},
      {pt:"a sustentabilidade", es:"la sostenibilidad", ipa:"a sus-ten-ta-bi-li-DA-dji"},
      {pt:"reciclar", es:"reciclar", ipa:"he-si-KLAR"},
      {pt:"a poluição", es:"la contaminación / la polución", ipa:"a po-lui-SAUN"},
      {pt:"as energias renováveis", es:"las energías renovables", ipa:"as e-ner-ZHI-as he-no-VA-veis"},
      {pt:"o aquecimento global", es:"el calentamiento global", ipa:"u a-ke-si-MEN-tu glo-BAL"},
      {pt:"preservar", es:"preservar", ipa:"pre-zer-VAR"},
      {pt:"a biodiversidade", es:"la biodiversidad", ipa:"a bi-yo-di-ver-si-DA-dji"}
    ],
    phrases:[
      {pt:"Precisamos proteger a floresta amazônica.", es:"Necesitamos proteger la selva amazónica.", ipa:"pre-si-ZA-mus pro-te-ZHER a flo-RES-ta a-ma-ZO-ni-ka"},
      {pt:"O desmatamento é uma ameaça global.", es:"La deforestación es una amenaza global.", ipa:"u dez-ma-ta-MEN-tu e U-ma a-mea-SA glo-BAL"},
      {pt:"Você recicla em casa?", es:"¿Reciclas en casa?", ipa:"vo-SE he-SI-kla en KA-za"},
      {pt:"O Brasil tem grande potencial em energias renováveis.", es:"Brasil tiene gran potencial en energías renovables.", ipa:"u bra-ZIL ten GRAN-dji po-ten-SYAL en e-ner-ZHI-as he-no-VA-veis"},
      {pt:"Precisamos agir agora pelo clima.", es:"Necesitamos actuar ahora por el clima.", ipa:"pre-si-ZA-mus a-ZHIR a-GO-ra PE-lu KLI-ma"},
      {pt:"A natureza não tem preço.", es:"La naturaleza no tiene precio.", ipa:"a na-tu-RE-za naun ten PRE-su"}
    ],
    grammar:"'Precisamos' (necesitamos) = 'nós precisamos' — la primera persona del plural sin pronombre. En portugués es muy común omitir el pronombre sujeto: 'Precisamos agir' (necesitamos actuar). 'Agir' (actuar/obrar) — diferente a 'actuar' en español. 'Ameaça' (amenaza) — derivado de 'ameaçar' (amenazar), similar al español.",
    practice:[
      "Expresa tu opinión sobre el medio ambiente: '¿Qué crees que es el mayor problema ambiental?'",
      "Usa 'precisamos + infinitivo' para hacer tres afirmaciones sobre el medio ambiente",
      "¿Qué haces tú para cuidar el medio ambiente? Dilo en portugués"
    ]
  },
  { day:29,
    title:"Conversación avanzada",
    titleNative:"Conversação avançada",
    focus:"Hoy consolidamos todo lo aprendido con patrones de conversación fluida. Los brasileños hablan rápido, reducen vocales y usan muchas expresiones coloquiales. Aprende las frases de 'pegamento' que mantienen una conversación viva — los conectores, expresiones de opinión y recursos para cuando no entiendes.",
    vocab:[
      {pt:"aliás", es:"por cierto / además", ipa:"a-LYAS"},
      {pt:"aliás / além disso", es:"además de eso", ipa:"a-LEM DJI-su"},
      {pt:"portanto", es:"por lo tanto", ipa:"por-TAN-tu"},
      {pt:"no entanto", es:"sin embargo", ipa:"nu en-TAN-tu"},
      {pt:"por sinal", es:"a propósito / por cierto", ipa:"por si-NAL"},
      {pt:"na verdade", es:"en realidad / de hecho", ipa:"na ver-DA-dji"},
      {pt:"ao contrário", es:"al contrario", ipa:"au kon-TRA-ryu"},
      {pt:"ou seja", es:"o sea / es decir", ipa:"ou SE-zha"},
      {pt:"dependendo", es:"dependiendo", ipa:"de-pen-DEN-du"},
      {pt:"em todo caso", es:"en todo caso", ipa:"en TO-du KA-zu"}
    ],
    phrases:[
      {pt:"Não entendi. Pode repetir, por favor?", es:"No entendí. ¿Puede repetir, por favor?", ipa:"naun en-ten-DJI. PO-dji he-pe-TCHIR por fa-VOR"},
      {pt:"Pode falar mais devagar?", es:"¿Puede hablar más despacio?", ipa:"PO-dji fa-LAR MAIS de-va-GAR"},
      {pt:"Como se diz ___ em português?", es:"¿Cómo se dice ___ en portugués?", ipa:"KO-mu si DJIS ___ en por-tu-GES"},
      {pt:"O que você quis dizer com isso?", es:"¿Qué quisiste decir con eso?", ipa:"u ki vo-SE KWIS dji-ZER kon I-su"},
      {pt:"Na minha opinião, o português não é tão difícil para quem fala espanhol.", es:"En mi opinión, el portugués no es tan difícil para quien habla español.", ipa:"na MI-nha o-pee-NIAUN, u por-tu-GES naun e TAUN dji-FI-sil PA-ra ken FA-la es-pa-NHOL"},
      {pt:"Concordo / Discordo totalmente.", es:"Estoy totalmente de acuerdo / en desacuerdo.", ipa:"kon-KOR-du / djis-KOR-du to-tal-MEN-tchi"}
    ],
    grammar:"'Quis dizer' (quiso decir/quisiste decir) — 'quis' es el pretérito de 'querer'. El pretérito irregular portugués es similar al español: quis (quise), fez (hizo), disse (dijo), veio (vino), trouxe (trajo). 'Tão' = tan (intensificador): 'tão bonito' (tan bonito), 'não é tão difícil' (no es tan difícil). La negación doble es posible en portugués: 'não sei não' (no lo sé, énfasis).",
    practice:[
      "Mantén una conversación de 5 minutos sobre un tema libre usando conectores",
      "Practica pedir aclaración cuando no entiendes — esencial en inmersión real",
      "Debate: ¿Es el portugués fácil o difícil para hispanohablantes? Argumenta en portugués"
    ]
  },
  { day:30,
    title:"¡Felicidades! — 30 días de portugués",
    titleNative:"Parabéns! — 30 dias de português",
    focus:"¡Lo lograste! En 30 días has construido una base sólida en portugués brasileño. Como hispanohablante, tienes la mayor ventaja posible — español y portugués son las lenguas más cercanas de este curso, con el 89% del vocabulario escrito en común. Ahora el camino es la inmersión total.",
    vocab:[
      {pt:"Parabéns!", es:"¡Felicidades! / ¡Enhorabuena!", ipa:"pa-ra-BENS"},
      {pt:"o progresso", es:"el progreso", ipa:"u pro-GRE-su"},
      {pt:"a fluência", es:"la fluidez", ipa:"a flu-EN-sya"},
      {pt:"o objetivo", es:"el objetivo", ipa:"u ob-zhe-TJI-vu"},
      {pt:"a conquista", es:"la conquista / el logro", ipa:"a kon-KWIS-ta"},
      {pt:"continuar", es:"continuar", ipa:"kon-tchi-nu-AR"},
      {pt:"melhorar", es:"mejorar", ipa:"me-lho-RAR"},
      {pt:"a confiança", es:"la confianza", ipa:"a kon-FYAN-sa"},
      {pt:"o futuro", es:"el futuro", ipa:"u fu-TU-ru"},
      {pt:"a saudade do Brasil", es:"la añoranza de Brasil", ipa:"a sau-DA-dji du bra-ZIL"}
    ],
    phrases:[
      {pt:"Completei o curso!", es:"¡Completé el curso!", ipa:"kom-ple-TEI u KUR-su"},
      {pt:"Posso me comunicar em português.", es:"Puedo comunicarme en portugués.", ipa:"POS-su mi ko-mu-ni-KAR en por-tu-GES"},
      {pt:"Minha jornada linguística continua.", es:"Mi viaje lingüístico continúa.", ipa:"MI-nha zhor-NA-da lin-GWIS-tchi-ka kon-TCHI-nu-a"},
      {pt:"Quero visitar o Brasil em breve.", es:"Quiero visitar Brasil pronto.", ipa:"KE-ru vi-zi-TAR u bra-ZIL en BRE-vi"},
      {pt:"Estou orgulhoso/a do meu progresso.", es:"Estoy orgulloso/a de mi progreso.", ipa:"es-TO or-gu-LHOS-zu/za du meu pro-GRE-su"},
      {pt:"Até logo e obrigado/a por tudo!", es:"¡Hasta luego y gracias por todo!", ipa:"a-TE LO-gu i o-bri-GA-du/da por TU-du"}
    ],
    grammar:"Tu mayor ventaja como hispanohablante: español y portugués comparten el 89% del vocabulario escrito, la estructura gramatical de género y número, los verbos ser/estar, los tiempos verbales y la musicalidad latina. Los retos que superaste: las vocales nasales (ão, ã, em), la reducción vocálica (e→i, o→u átonas), la 'd' palatalizada, y la 'r' gutural. El siguiente paso: inmersión — Netflix Brasil, música brasileña (Spotify tiene listas enormes), podcasts como 'Português com Letícia'. ¡Você conseguiu!",
    practice:[
      "Escribe una carta breve en portugués describiendo lo que aprendiste en 30 días",
      "Planifica un viaje real a Brasil — ¿a qué ciudad irías y por qué?",
      "Comprométete a ver una película o serie brasileña esta semana: 'La Casa de Papel Brasil', '3%', 'Carandiru'"
    ]
  }
];

var CONVERSATIONS_ES_PT = [];
