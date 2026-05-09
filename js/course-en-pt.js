// Brazilian Portuguese — 30-Day Course
// COURSE_PT + CONVERSATIONS_PT

const COURSE_PT = [
  {
    day: 1,
    title: "Greetings & Essentials",
    titleNative: "Cumprimentos & Essenciais",
    vocab: [
      { pt: "olá", en: "hello", ipa: "ˈɔ.la", phonetic: "OH-lah" },
      { pt: "oi", en: "hi (casual)", ipa: "oj", phonetic: "oy" },
      { pt: "bom dia", en: "good morning", ipa: "bõ ˈdʒi.a", phonetic: "bohn JEE-ah" },
      { pt: "boa tarde", en: "good afternoon", ipa: "ˈbo.a ˈtaʁ.dʒi", phonetic: "BOH-ah TAR-jee" },
      { pt: "boa noite", en: "good evening / good night", ipa: "ˈbo.a ˈnoj.tʃi", phonetic: "BOH-ah NOY-chee" },
      { pt: "obrigado / obrigada", en: "thank you (m/f)", ipa: "obɾiˈgadu / obɾiˈgada", phonetic: "oh-bree-GAH-doo / oh-bree-GAH-dah" },
      { pt: "por favor", en: "please", ipa: "poʁ faˈvoʁ", phonetic: "por fah-VOR" },
      { pt: "com licença", en: "excuse me", ipa: "kõ liˈsẽ.sa", phonetic: "kon lee-SEN-sah" },
      { pt: "desculpa", en: "sorry", ipa: "dʒisˈkuw.pa", phonetic: "jees-KOOL-pah" },
      { pt: "tchau", en: "bye", ipa: "tʃaw", phonetic: "chow" }
    ],
    phrases: [
      { pt: "Tudo bem?", en: "How are you? (lit. all well?)" },
      { pt: "Tudo bem, obrigado.", en: "All good, thanks." },
      { pt: "Qual é o seu nome?", en: "What is your name?" },
      { pt: "Meu nome é ___.", en: "My name is ___." },
      { pt: "Muito prazer.", en: "Nice to meet you." }
    ],
    grammar: "Brazilian Portuguese uses 'você' (you) far more than 'tu'. When someone asks 'Tudo bem?' reply with 'Tudo bem!' or 'Tudo bom!' — it's the standard exchange, like English 'fine, thanks'.",
    tip: "Brazilians are warm and tactile — greetings often involve a kiss on one cheek (women) or a handshake/hug (men). 'Oi' is extremely common and perfectly polite, even in semi-formal settings."
  },
  {
    day: 2,
    title: "Numbers & Money",
    titleNative: "Números & Dinheiro",
    vocab: [
      { pt: "um / uma", en: "one (m/f)", ipa: "ũ / ˈu.ma", phonetic: "oon / OO-mah" },
      { pt: "dois / duas", en: "two (m/f)", ipa: "dojs / ˈdu.as", phonetic: "doys / DOO-as" },
      { pt: "três", en: "three", ipa: "tɾes", phonetic: "trays" },
      { pt: "cinco", en: "five", ipa: "ˈsĩ.ku", phonetic: "SEEN-koo" },
      { pt: "dez", en: "ten", ipa: "des", phonetic: "dess" },
      { pt: "vinte", en: "twenty", ipa: "ˈvĩ.tʃi", phonetic: "VEEN-chee" },
      { pt: "cem", en: "one hundred", ipa: "sẽ", phonetic: "seng" },
      { pt: "real / reais", en: "Brazilian real (currency)", ipa: "ʁeˈaw / ʁeˈajʃ", phonetic: "reh-OW / reh-ICE" },
      { pt: "caro", en: "expensive", ipa: "ˈka.ɾu", phonetic: "KAH-roo" },
      { pt: "barato", en: "cheap", ipa: "baˈɾa.tu", phonetic: "bah-RAH-too" }
    ],
    phrases: [
      { pt: "Quanto custa?", en: "How much does it cost?" },
      { pt: "Está caro.", en: "It's expensive." },
      { pt: "Você aceita cartão?", en: "Do you accept card?" },
      { pt: "Pode fazer mais barato?", en: "Can you make it cheaper?" },
      { pt: "O troco, por favor.", en: "The change, please." }
    ],
    grammar: "Numbers agree with gender: 'um livro' (one book, masc.) vs 'uma mesa' (one table, fem.). The currency is 'real' (singular) and 'reais' (plural). Prices are said as: 'vinte reais' (twenty reais).",
    tip: "Brazil uses a comma as the decimal separator — R$19,90 is 19 reais and 90 centavos. PIX (instant bank transfer) is everywhere; many vendors prefer it to card or cash."
  },
  {
    day: 3,
    title: "Getting Around",
    titleNative: "Locomoção",
    vocab: [
      { pt: "onde", en: "where", ipa: "ˈõ.dʒi", phonetic: "ON-jee" },
      { pt: "aqui", en: "here", ipa: "aˈki", phonetic: "ah-KEY" },
      { pt: "ali / lá", en: "there", ipa: "aˈli / la", phonetic: "ah-LEE / lah" },
      { pt: "esquerda", en: "left", ipa: "esˈkeʁ.da", phonetic: "es-KER-dah" },
      { pt: "direita", en: "right", ipa: "dʒiˈɾej.ta", phonetic: "jee-RAY-tah" },
      { pt: "rua", en: "street", ipa: "ˈʁu.a", phonetic: "HOO-ah" },
      { pt: "praia", en: "beach", ipa: "ˈpɾaj.a", phonetic: "PRAH-yah" },
      { pt: "perto", en: "near", ipa: "ˈpeʁ.tu", phonetic: "PEHR-too" },
      { pt: "longe", en: "far", ipa: "ˈlõ.ʒi", phonetic: "LON-zhee" },
      { pt: "táxi", en: "taxi", ipa: "ˈtak.si", phonetic: "TAHK-see" }
    ],
    phrases: [
      { pt: "Onde fica ___?", en: "Where is ___?" },
      { pt: "Como chego lá?", en: "How do I get there?" },
      { pt: "Vire à esquerda / direita.", en: "Turn left / right." },
      { pt: "É longe daqui?", en: "Is it far from here?" },
      { pt: "Me leva para ___, por favor.", en: "Take me to ___, please." }
    ],
    grammar: "'Ficar' is used for locations — 'Onde fica o banco?' (Where is the bank?). Literally 'where does the bank stay?' It's more natural than 'estar' for fixed places.",
    tip: "Uber and 99 (local ride app) are ubiquitous in Brazilian cities. Most drivers appreciate if you confirm the destination in Portuguese — just say the address and 'é aqui' when you arrive."
  },
  {
    day: 4,
    title: "Café & Breakfast",
    titleNative: "Café & Café da Manhã",
    vocab: [
      { pt: "café", en: "coffee", ipa: "kaˈfɛ", phonetic: "kah-FEH" },
      { pt: "pão de queijo", en: "cheese bread (iconic)", ipa: "pɐ̃w dʒi ˈkej.ʒu", phonetic: "pow jee KAY-zhoo" },
      { pt: "suco", en: "juice", ipa: "ˈsu.ku", phonetic: "SOO-koo" },
      { pt: "leite", en: "milk", ipa: "ˈlej.tʃi", phonetic: "LAY-chee" },
      { pt: "açúcar", en: "sugar", ipa: "aˈsu.kaʁ", phonetic: "ah-SOO-kar" },
      { pt: "tapioca", en: "tapioca crepe", ipa: "tapjˈɔ.ka", phonetic: "tah-pee-OH-kah" },
      { pt: "fruta", en: "fruit", ipa: "ˈfɾu.ta", phonetic: "FROO-tah" },
      { pt: "sem", en: "without", ipa: "sẽ", phonetic: "seng" },
      { pt: "gelado", en: "iced / cold", ipa: "ʒeˈla.du", phonetic: "zheh-LAH-doo" },
      { pt: "garçom", en: "waiter", ipa: "gaʁˈsõ", phonetic: "gar-SONG" }
    ],
    phrases: [
      { pt: "Um café, por favor.", en: "A coffee, please." },
      { pt: "Sem açúcar, por favor.", en: "Without sugar, please." },
      { pt: "Tem pão de queijo?", en: "Do you have cheese bread?" },
      { pt: "A conta, por favor.", en: "The bill, please." },
      { pt: "Café com leite, quente.", en: "Coffee with milk, hot." }
    ],
    grammar: "Brazilian Portuguese drops the article before infinitives less formally: 'Quero café' (I want coffee) is fine without 'um'. Brazilians take coffee very seriously — it's almost always served strong and small.",
    tip: "Pão de queijo is a cultural institution — small, chewy cheese bread balls. Tapioca crepes are a northeast staple now found everywhere. Both are naturally gluten-free and absolutely worth ordering."
  },
  {
    day: 5,
    title: "At the Restaurant",
    titleNative: "No Restaurante",
    vocab: [
      { pt: "cardápio", en: "menu", ipa: "kaʁˈda.pju", phonetic: "kar-DAH-pyoo" },
      { pt: "prato", en: "dish / plate", ipa: "ˈpɾa.tu", phonetic: "PRAH-too" },
      { pt: "churrasco", en: "Brazilian BBQ", ipa: "ʃuˈʁas.ku", phonetic: "shoo-HAS-koo" },
      { pt: "feijão", en: "black beans", ipa: "fejˈʒɐ̃w", phonetic: "fay-ZHOW" },
      { pt: "arroz", en: "rice", ipa: "aˈʁos", phonetic: "ah-HOCE" },
      { pt: "frango", en: "chicken", ipa: "ˈfɾɐ̃.gu", phonetic: "FRANG-goo" },
      { pt: "carne", en: "meat / beef", ipa: "ˈkaʁ.ni", phonetic: "KAR-nee" },
      { pt: "picante", en: "spicy", ipa: "piˈkɐ̃.tʃi", phonetic: "pee-KAN-chee" },
      { pt: "bem-passado", en: "well-done (meat)", ipa: "bẽ paˈsa.du", phonetic: "beng pah-SAH-doo" },
      { pt: "mal-passado", en: "rare (meat)", ipa: "maw paˈsa.du", phonetic: "mow pah-SAH-doo" }
    ],
    phrases: [
      { pt: "Uma mesa para dois, por favor.", en: "A table for two, please." },
      { pt: "O que você recomenda?", en: "What do you recommend?" },
      { pt: "Sou vegetariano/a.", en: "I'm vegetarian (m/f)." },
      { pt: "Está delicioso!", en: "It's delicious!" },
      { pt: "Pode separar a conta?", en: "Can you split the bill?" }
    ],
    grammar: "'Pode' (can / is it possible) is your most useful restaurant word. 'Pode trazer...?' (Can you bring...?) is polite and works for any request. Brazilians rarely split bills — one person often pays and the others Venmo/PIX them back.",
    tip: "Rodízio restaurants serve unlimited grilled meat — waiters come to your table with skewers. Green card = keep it coming. Red card = stop. At a churrascaria, pace yourself — there are 15+ cuts and you will absolutely overdo it."
  },
  {
    day: 6,
    title: "Shopping",
    titleNative: "Compras",
    vocab: [
      { pt: "loja", en: "shop / store", ipa: "ˈlɔ.ʒa", phonetic: "LOH-zhah" },
      { pt: "mercado", en: "market / supermarket", ipa: "meʁˈka.du", phonetic: "mer-KAH-doo" },
      { pt: "tamanho", en: "size", ipa: "taˈmɐ̃.ɲu", phonetic: "tah-MAHN-yoo" },
      { pt: "cor", en: "color", ipa: "koʁ", phonetic: "kor" },
      { pt: "desconto", en: "discount", ipa: "dʒisˈkõ.tu", phonetic: "jees-KON-too" },
      { pt: "troco", en: "change (money)", ipa: "ˈtɾo.ku", phonetic: "TROH-koo" },
      { pt: "recibo", en: "receipt", ipa: "ʁeˈsi.bu", phonetic: "heh-SEE-boo" },
      { pt: "vitrine", en: "shop window / display", ipa: "viˈtɾi.ni", phonetic: "vee-TREE-nee" },
      { pt: "promoção", en: "sale / promotion", ipa: "pɾomoˈsɐ̃w", phonetic: "proh-moh-SOW" },
      { pt: "embrulhar", en: "to wrap (as a gift)", ipa: "ẽbɾuˈʎaʁ", phonetic: "em-broo-LYAR" }
    ],
    phrases: [
      { pt: "Posso experimentar?", en: "Can I try it on?" },
      { pt: "Tem em outro tamanho?", en: "Do you have it in another size?" },
      { pt: "Tem desconto?", en: "Is there a discount?" },
      { pt: "Vou levar.", en: "I'll take it." },
      { pt: "Só estou olhando.", en: "I'm just looking." }
    ],
    grammar: "'Posso' (can I / may I) + infinitive is your shopping Swiss Army knife: 'Posso ver?' (Can I see?), 'Posso provar?' (Can I try?). It's polite and universally understood.",
    tip: "Brazilian shopping malls (shoppings) are social hubs — air-conditioned, food courts, and movies all in one. Haggling is expected at street markets (feiras) but not in formal stores. Always check the price before you touch things at high-end boutiques."
  },
  {
    day: 7,
    title: "Accommodation",
    titleNative: "Hospedagem",
    vocab: [
      { pt: "hotel", en: "hotel", ipa: "oˈtɛw", phonetic: "oh-TEL" },
      { pt: "pousada", en: "guesthouse / inn", ipa: "powˈza.da", phonetic: "po-ZAH-dah" },
      { pt: "quarto", en: "room", ipa: "ˈkwaʁ.tu", phonetic: "KWAR-too" },
      { pt: "reserva", en: "reservation", ipa: "ʁeˈzeʁ.va", phonetic: "heh-ZER-vah" },
      { pt: "check-in", en: "check-in", ipa: "ˈtʃɛk.ĩ", phonetic: "CHEK-een" },
      { pt: "check-out", en: "check-out", ipa: "ˈtʃɛk.awt", phonetic: "CHEK-owt" },
      { pt: "ar-condicionado", en: "air conditioning", ipa: "aʁ kõdʒisjoˈna.du", phonetic: "ar kon-jee-see-oh-NAH-doo" },
      { pt: "wifi", en: "wifi", ipa: "ˈwaj.fi", phonetic: "WY-fee" },
      { pt: "toalha", en: "towel", ipa: "toˈa.ʎa", phonetic: "toh-AH-lyah" },
      { pt: "café da manhã incluído", en: "breakfast included", ipa: "kaˈfɛ da maˈɲɐ̃ ĩkluˈi.du", phonetic: "kah-FEH dah mahn-YAHN een-kloo-EE-doo" }
    ],
    phrases: [
      { pt: "Tenho uma reserva.", en: "I have a reservation." },
      { pt: "Tem quarto disponível?", en: "Is there a room available?" },
      { pt: "A que horas é o check-out?", en: "What time is check-out?" },
      { pt: "O ar-condicionado não está funcionando.", en: "The AC isn't working." },
      { pt: "Pode me dar mais toalhas?", en: "Can you give me more towels?" }
    ],
    grammar: "'Não está funcionando' (it's not working) uses 'estar' for temporary states. This is one of the key ser vs. estar distinctions — estado temporário (temporary state) = estar. Say it clearly and hotel staff will handle the rest.",
    tip: "Pousadas are Brazil's version of B&Bs — often family-run, charming, and cheaper than hotels. In coastal towns they're the preferred option. Always confirm if breakfast (café da manhã) is included — it often is and it's usually excellent."
  },
  {
    day: 8,
    title: "Asking for Help",
    titleNative: "Pedindo Ajuda",
    vocab: [
      { pt: "ajuda", en: "help", ipa: "aˈʒu.da", phonetic: "ah-ZHOO-dah" },
      { pt: "socorro!", en: "help! (emergency)", ipa: "soˈko.ʁu", phonetic: "soh-KOH-roo" },
      { pt: "policia", en: "police", ipa: "poˈli.sja", phonetic: "poh-LEE-syah" },
      { pt: "hospital", en: "hospital", ipa: "ospiˈtaw", phonetic: "os-pee-TOW" },
      { pt: "perigo", en: "danger", ipa: "peˈɾi.gu", phonetic: "peh-REE-goo" },
      { pt: "perdido", en: "lost", ipa: "peʁˈdʒi.du", phonetic: "per-JEE-doo" },
      { pt: "roubado", en: "stolen / robbed", ipa: "ʁowˈba.du", phonetic: "hoh-BAH-doo" },
      { pt: "embaixada", en: "embassy", ipa: "ẽbajˈʃa.da", phonetic: "em-by-SHAH-dah" },
      { pt: "farmácia", en: "pharmacy", ipa: "faʁˈma.sja", phonetic: "far-MAH-syah" },
      { pt: "emergência", en: "emergency", ipa: "emeʁˈʒẽ.sja", phonetic: "eh-mer-ZHEN-syah" }
    ],
    phrases: [
      { pt: "Preciso de ajuda.", en: "I need help." },
      { pt: "Estou perdido/a.", en: "I'm lost (m/f)." },
      { pt: "Me roubaram.", en: "I was robbed." },
      { pt: "Chame a polícia!", en: "Call the police!" },
      { pt: "Onde fica o hospital mais próximo?", en: "Where is the nearest hospital?" }
    ],
    grammar: "'Me roubaram' is passive construction without specifying who — literally 'they robbed me.' Very common in Brazilian Portuguese for reporting crimes or incidents. No need to say who did it.",
    tip: "Brazil's emergency number is 190 (police), 192 (ambulance), 193 (fire). SAMU is the national ambulance service. Keep your passport copy separate from the original and note your embassy address before you travel."
  },
  {
    day: 9,
    title: "Time & Schedules",
    titleNative: "Tempo & Horários",
    vocab: [
      { pt: "hora", en: "hour / time", ipa: "ˈɔ.ɾa", phonetic: "OH-rah" },
      { pt: "hoje", en: "today", ipa: "ˈɔ.ʒi", phonetic: "OH-zhee" },
      { pt: "amanhã", en: "tomorrow", ipa: "amɐˈɲɐ̃", phonetic: "ah-mahn-YAN" },
      { pt: "ontem", en: "yesterday", ipa: "ˈõ.tẽ", phonetic: "ON-teng" },
      { pt: "semana", en: "week", ipa: "seˈmɐ.na", phonetic: "seh-MAH-nah" },
      { pt: "mês", en: "month", ipa: "mes", phonetic: "mess" },
      { pt: "cedo", en: "early", ipa: "ˈse.du", phonetic: "SAY-doo" },
      { pt: "tarde", en: "late", ipa: "ˈtaʁ.dʒi", phonetic: "TAR-jee" },
      { pt: "agora", en: "now", ipa: "aˈgɔ.ɾa", phonetic: "ah-GOH-rah" },
      { pt: "já", en: "already / right now", ipa: "ʒa", phonetic: "zhah" }
    ],
    phrases: [
      { pt: "Que horas são?", en: "What time is it?" },
      { pt: "São duas e meia.", en: "It's two thirty." },
      { pt: "A que horas abre?", en: "What time does it open?" },
      { pt: "Chego em cinco minutos.", en: "I'll be there in five minutes." },
      { pt: "Estou atrasado/a.", en: "I'm late (m/f)." }
    ],
    grammar: "Time in Portuguese: 'São duas horas' (It's two o'clock). For 1 o'clock use 'É uma hora' — singular. Half hour is 'e meia' and quarter is 'e quinze'. The 24-hour clock is standard in formal contexts.",
    tip: "'Já' is one of the most useful Brazilian Portuguese words. 'Já vou' means 'I'm coming right now.' 'Já' can mean 'already,' 'right now,' or 'soon' depending on context — Brazilians use it constantly."
  },
  {
    day: 10,
    title: "Weather & Seasons",
    titleNative: "Clima & Estações",
    vocab: [
      { pt: "calor", en: "heat / hot weather", ipa: "kaˈloʁ", phonetic: "kah-LOR" },
      { pt: "frio", en: "cold", ipa: "ˈfɾi.u", phonetic: "FREE-oo" },
      { pt: "chuva", en: "rain", ipa: "ˈʃu.va", phonetic: "SHOO-vah" },
      { pt: "sol", en: "sun", ipa: "sow", phonetic: "sol" },
      { pt: "nublado", en: "cloudy", ipa: "nuˈbla.du", phonetic: "noo-BLAH-doo" },
      { pt: "verão", en: "summer", ipa: "veˈɾɐ̃w", phonetic: "veh-ROW" },
      { pt: "inverno", en: "winter", ipa: "ĩˈveʁ.nu", phonetic: "een-VER-noo" },
      { pt: "úmido", en: "humid", ipa: "ˈu.mi.du", phonetic: "OO-mee-doo" },
      { pt: "temporal", en: "storm / downpour", ipa: "tẽpoˈɾaw", phonetic: "ten-poh-ROW" },
      { pt: "grau", en: "degree (temperature)", ipa: "gɾaw", phonetic: "graw" }
    ],
    phrases: [
      { pt: "Que calor!", en: "It's so hot!" },
      { pt: "Vai chover hoje?", en: "Is it going to rain today?" },
      { pt: "Estou morrendo de calor.", en: "I'm dying of heat." },
      { pt: "Leve um guarda-chuva.", en: "Bring an umbrella." },
      { pt: "O tempo está lindo.", en: "The weather is beautiful." }
    ],
    grammar: "'Estou com calor/frio' (I'm hot/cold) uses 'com' (with) — literally 'I'm with heat/cold.' This is more idiomatic than 'Estou quente' (which has other connotations). Similarly, 'Estou com fome' (I'm hungry), 'Estou com sede' (I'm thirsty).",
    tip: "Brazil is in the Southern Hemisphere — summer is December–March, winter June–September. Rio and São Paulo can get genuinely cold in June-July. The northeast (Fortaleza, Natal, Recife) is tropical year-round. Afternoon rainstorms in summer are intense but brief."
  },
  {
    day: 11,
    title: "Family & People",
    titleNative: "Família & Pessoas",
    vocab: [
      { pt: "família", en: "family", ipa: "faˈmi.lja", phonetic: "fah-MEE-lyah" },
      { pt: "mãe", en: "mother", ipa: "mɐ̃j", phonetic: "mang" },
      { pt: "pai", en: "father", ipa: "paj", phonetic: "pie" },
      { pt: "irmão / irmã", en: "brother / sister", ipa: "iʁˈmɐ̃w / iʁˈmɐ̃", phonetic: "eer-MOW / eer-MAH" },
      { pt: "filho / filha", en: "son / daughter", ipa: "ˈfi.ʎu / ˈfi.ʎa", phonetic: "FEE-lyoo / FEE-lyah" },
      { pt: "avô / avó", en: "grandfather / grandmother", ipa: "aˈvo / aˈvɔ", phonetic: "ah-VOH / ah-VAW" },
      { pt: "amigo / amiga", en: "friend (m/f)", ipa: "aˈmi.gu / aˈmi.ga", phonetic: "ah-MEE-goo / ah-MEE-gah" },
      { pt: "namorado / namorada", en: "boyfriend / girlfriend", ipa: "namoˈɾa.du / namoˈɾa.da", phonetic: "nah-moh-RAH-doo / nah-moh-RAH-dah" },
      { pt: "vizinho", en: "neighbor", ipa: "viˈzi.ɲu", phonetic: "vee-ZEE-nyoo" },
      { pt: "colega", en: "colleague / classmate", ipa: "koˈle.ga", phonetic: "koh-LEH-gah" }
    ],
    phrases: [
      { pt: "Você tem irmãos?", en: "Do you have siblings?" },
      { pt: "Tenho dois filhos.", en: "I have two children." },
      { pt: "Minha família é grande.", en: "My family is big." },
      { pt: "Ele é meu melhor amigo.", en: "He is my best friend." },
      { pt: "Somos casados.", en: "We are married." }
    ],
    grammar: "Possessives agree with what's owned: 'meu pai' (my father, masc.), 'minha mãe' (my mother, fem.). Brazilians often drop the article before possessives in speech — 'meu irmão' not 'o meu irmão' — though both are correct.",
    tip: "Brazilian families are tight-knit and social. Being invited to someone's home is an honor — bring something (wine, dessert, flowers). Family gatherings often stretch all day with lots of food. Asking about someone's family early in conversation is normal and warm, not intrusive."
  },
  {
    day: 12,
    title: "Food & Drink",
    titleNative: "Comida & Bebida",
    vocab: [
      { pt: "feijoada", en: "black bean & pork stew (national dish)", ipa: "fejˈʒwa.da", phonetic: "fay-ZHWAH-dah" },
      { pt: "caipirinha", en: "cachaça lime cocktail", ipa: "kajpiˈɾi.ɲa", phonetic: "ky-pee-REE-nyah" },
      { pt: "açaí", en: "açaí berry bowl", ipa: "asaˈi", phonetic: "ah-sah-EE" },
      { pt: "chope", en: "draft beer", ipa: "ˈʃɔ.pi", phonetic: "SHAW-pee" },
      { pt: "guaraná", en: "guaraná soda", ipa: "gwaɾaˈna", phonetic: "gwah-rah-NAH" },
      { pt: "moqueca", en: "fish/seafood stew", ipa: "moˈke.ka", phonetic: "moh-KEH-kah" },
      { pt: "brigadeiro", en: "chocolate truffle (dessert)", ipa: "bɾigaˈdej.ɾu", phonetic: "bree-gah-DAY-roo" },
      { pt: "coxinha", en: "fried chicken croquette", ipa: "koˈʃi.ɲa", phonetic: "koh-SHEE-nyah" },
      { pt: "vitamina", en: "fruit smoothie (Brazilian term)", ipa: "vitamiˈna", phonetic: "vee-tah-MEE-nah" },
      { pt: "água de coco", en: "coconut water", ipa: "ˈa.gwa dʒi ˈko.ku", phonetic: "AH-gwah jee KOH-koo" }
    ],
    phrases: [
      { pt: "Estou com fome.", en: "I'm hungry." },
      { pt: "Estou com sede.", en: "I'm thirsty." },
      { pt: "Que saudade de comer isso.", en: "I really miss eating this." },
      { pt: "Mais um chope, por favor.", en: "One more draft beer, please." },
      { pt: "O açaí aqui é muito bom.", en: "The açaí here is very good." }
    ],
    grammar: "'Com fome' and 'com sede' (hungry and thirsty) use 'com' — a quirk of Portuguese. Same with 'com medo' (scared), 'com pressa' (in a hurry), 'com sono' (sleepy). Learn the full set.",
    tip: "Feijoada is traditionally served on Saturdays at lunch — huge, heavy, glorious. Caipirinha is the national cocktail; never order it with vodka in polite company (that's a caipiroska). Açaí in Brazil is served as a thick, savory-sweet bowl, not a drink."
  },
  {
    day: 13,
    title: "At the Beach",
    titleNative: "Na Praia",
    vocab: [
      { pt: "praia", en: "beach", ipa: "ˈpɾaj.a", phonetic: "PRAH-yah" },
      { pt: "areia", en: "sand", ipa: "aˈɾej.a", phonetic: "ah-RAY-ah" },
      { pt: "mar", en: "sea", ipa: "maʁ", phonetic: "mar" },
      { pt: "onda", en: "wave", ipa: "ˈõ.da", phonetic: "ON-dah" },
      { pt: "protetor solar", en: "sunscreen", ipa: "pɾoteˈtoʁ soˈlaʁ", phonetic: "pro-teh-TOR soh-LAR" },
      { pt: "guarda-sol", en: "beach umbrella", ipa: "ˈgwaʁ.da sol", phonetic: "GWAR-dah sol" },
      { pt: "cadeira de praia", en: "beach chair", ipa: "kaˈdej.ɾa dʒi ˈpɾaj.a", phonetic: "kah-DAY-rah jee PRAH-yah" },
      { pt: "quentinha", en: "hot beachside snack", ipa: "kẽˈtʃi.ɲa", phonetic: "ken-CHEE-nyah" },
      { pt: "salva-vidas", en: "lifeguard", ipa: "ˈsaw.va ˈvi.das", phonetic: "SOW-vah VEE-das" },
      { pt: "sunga / biquíni", en: "men's swim brief / bikini", ipa: "ˈsũ.ga / biˈki.ni", phonetic: "SOON-gah / bee-KEE-nee" }
    ],
    phrases: [
      { pt: "A água está boa?", en: "Is the water good (nice)?" },
      { pt: "Tem perigo de corrente?", en: "Is there a dangerous current?" },
      { pt: "Me passa o protetor solar?", en: "Can you pass the sunscreen?" },
      { pt: "Vamos nadar!", en: "Let's swim!" },
      { pt: "Que praia linda!", en: "What a beautiful beach!" }
    ],
    grammar: "'Vamos + infinitive' is your 'let's ___' structure. 'Vamos nadar' (let's swim), 'Vamos comer' (let's eat), 'Vamos embora' (let's go / let's get out of here). Extremely common and versatile.",
    tip: "Brazilian beach culture is serious. Vendors walk the sand selling snacks, drinks, coconuts, and sunglasses. Mate tea (cold, sweet) is a Rio beach institution. Topless is rare in Brazil despite the reputation — bikinis are small but the norm is more modest than you'd expect."
  },
  {
    day: 14,
    title: "Transportation",
    titleNative: "Transporte",
    vocab: [
      { pt: "ônibus", en: "bus", ipa: "ˈo.ni.bus", phonetic: "OH-nee-boos" },
      { pt: "metrô", en: "metro / subway", ipa: "meˈtɾo", phonetic: "meh-TROH" },
      { pt: "avião", en: "airplane", ipa: "avjˈɐ̃w", phonetic: "ah-vee-OW" },
      { pt: "aeroporto", en: "airport", ipa: "aɛɾoˈpoʁ.tu", phonetic: "ah-eh-roh-POR-too" },
      { pt: "passagem", en: "ticket (transport)", ipa: "paˈsa.ʒẽ", phonetic: "pah-SAH-zheng" },
      { pt: "horário", en: "schedule / timetable", ipa: "oˈɾa.ɾju", phonetic: "oh-RAH-ryoo" },
      { pt: "embarque", en: "boarding / departure gate", ipa: "ẽˈbaʁ.ki", phonetic: "em-BAR-kee" },
      { pt: "atraso", en: "delay", ipa: "aˈtɾa.zu", phonetic: "ah-TRAH-zoo" },
      { pt: "bagagem", en: "luggage", ipa: "baˈga.ʒẽ", phonetic: "bah-GAH-zheng" },
      { pt: "janela / corredor", en: "window / aisle (seat)", ipa: "ʒaˈne.la / koˈʁe.doʁ", phonetic: "zhah-NEH-lah / koh-HEH-dor" }
    ],
    phrases: [
      { pt: "Onde fica o metrô?", en: "Where is the metro?" },
      { pt: "Uma passagem para ___, por favor.", en: "One ticket to ___, please." },
      { pt: "O voo está atrasado?", en: "Is the flight delayed?" },
      { pt: "Qual é o portão de embarque?", en: "What is the boarding gate?" },
      { pt: "Posso levar isso na cabine?", en: "Can I take this on board?" }
    ],
    grammar: "'Qual é ___?' (What is ___?) is your question template. 'Qual é o seu nome?' 'Qual é o preço?' 'Qual é o portão?' — versatile and polite. Don't use 'O que é' for selections/identifications.",
    tip: "Domestic flights in Brazil are common — the country is huge. LATAM and Gol are the main carriers. São Paulo has two major airports: Guarulhos (GRU, international) and Congonhas (CGH, domestic). Interestingly, many Brazilians prefer buses for long hauls — the leito (sleeper bus) is surprisingly comfortable."
  },
  {
    day: 15,
    title: "Health & Emergencies",
    titleNative: "Saúde & Emergências",
    vocab: [
      { pt: "médico", en: "doctor", ipa: "ˈmɛ.dʒi.ku", phonetic: "MEH-jee-koo" },
      { pt: "enfermeiro/a", en: "nurse (m/f)", ipa: "ẽfeʁˈmej.ɾu / ɾa", phonetic: "en-fer-MAY-roo / rah" },
      { pt: "dor", en: "pain / ache", ipa: "doʁ", phonetic: "dor" },
      { pt: "febre", en: "fever", ipa: "ˈfe.bɾi", phonetic: "FEH-bree" },
      { pt: "remédio", en: "medicine", ipa: "ʁeˈmɛ.dʒju", phonetic: "heh-MEH-jyoo" },
      { pt: "alergia", en: "allergy", ipa: "aleʁˈʒi.a", phonetic: "ah-ler-ZHEE-ah" },
      { pt: "receita", en: "prescription", ipa: "ʁeˈsej.ta", phonetic: "heh-SAY-tah" },
      { pt: "plano de saúde", en: "health insurance", ipa: "ˈplɐ.nu dʒi saˈu.dʒi", phonetic: "PLAH-noo jee sah-OO-jee" },
      { pt: "pronto-socorro", en: "emergency room", ipa: "ˈpɾõ.tu soˈko.ʁu", phonetic: "PRON-too soh-KOH-roo" },
      { pt: "me dói", en: "it hurts me", ipa: "mi ˈdoj", phonetic: "mee DOY" }
    ],
    phrases: [
      { pt: "Preciso de um médico.", en: "I need a doctor." },
      { pt: "Estou com dor de cabeça.", en: "I have a headache." },
      { pt: "Sou alérgico/a a ___.", en: "I'm allergic to ___ (m/f)." },
      { pt: "Aqui está a minha receita.", en: "Here is my prescription." },
      { pt: "Preciso ir ao pronto-socorro.", en: "I need to go to the emergency room." }
    ],
    grammar: "Body pain: 'Estou com dor de + body part.' 'Dor de cabeça' (headache), 'dor de barriga' (stomachache), 'dor de garganta' (sore throat), 'dor de dente' (toothache). Or point and say 'Dói aqui' (it hurts here).",
    tip: "Brazil's public health system (SUS) is free but often overwhelmed. Private clinics (clínicas particulares) and UPAs (urgent care equivalents) are faster for non-emergencies. Always carry your travel insurance card. Yellow fever vaccination is required for some regions — check before you go."
  },
  {
    day: 16,
    title: "Nightlife & Entertainment",
    titleNative: "Vida Noturna & Entretenimento",
    vocab: [
      { pt: "balada", en: "nightclub / party", ipa: "baˈla.da", phonetic: "bah-LAH-dah" },
      { pt: "show", en: "live show / concert", ipa: "ʃow", phonetic: "show" },
      { pt: "pagode", en: "samba sub-genre / party", ipa: "paˈgɔ.dʒi", phonetic: "pah-GOH-jee" },
      { pt: "forró", en: "northeastern dance music", ipa: "foˈʁo", phonetic: "foh-HOH" },
      { pt: "entrada", en: "cover charge / entry", ipa: "ẽˈtɾa.da", phonetic: "en-TRAH-dah" },
      { pt: "mesa", en: "table (at a venue)", ipa: "ˈme.za", phonetic: "MEH-zah" },
      { pt: "fila", en: "line / queue", ipa: "ˈfi.la", phonetic: "FEE-lah" },
      { pt: "cardápio de drinks", en: "drinks menu", ipa: "kaʁˈda.pju dʒi dɾĩks", phonetic: "kar-DAH-pyoo jee drinks" },
      { pt: "sair", en: "to go out", ipa: "saˈiʁ", phonetic: "sah-EER" },
      { pt: "animado", en: "lively / fun", ipa: "animˈa.du", phonetic: "ah-nee-MAH-doo" }
    ],
    phrases: [
      { pt: "Vamos sair hoje à noite?", en: "Are we going out tonight?" },
      { pt: "Qual é a entrada?", en: "What's the cover charge?" },
      { pt: "A balada só começa à meia-noite.", en: "The club doesn't start until midnight." },
      { pt: "Tem show ao vivo?", en: "Is there live music?" },
      { pt: "Esse lugar é muito animado!", en: "This place is really lively!" }
    ],
    grammar: "Brazilians use 'só' (only/just) as an intensifier constantly: 'só começa à meia-noite' (only starts at midnight). Combined with the fact that Brazilian nightlife genuinely doesn't start until 11pm–midnight, adjust your expectations accordingly.",
    tip: "Pagode (relaxed samba party) and forró (partner dance from the northeast) are far more authentically Brazilian than tourist sambas. Finding a local pagode on a Saturday is the real experience. Dress codes are relaxed but Brazilians generally dress well — leave the flip-flops at the hotel."
  },
  {
    day: 17,
    title: "At the Market",
    titleNative: "No Mercado",
    vocab: [
      { pt: "feira", en: "street market / fair", ipa: "ˈfej.ɾa", phonetic: "FAY-rah" },
      { pt: "fruta", en: "fruit", ipa: "ˈfɾu.ta", phonetic: "FROO-tah" },
      { pt: "verdura", en: "vegetable", ipa: "veʁˈdu.ɾa", phonetic: "ver-DOO-rah" },
      { pt: "manga", en: "mango", ipa: "ˈmɐ̃.ga", phonetic: "MAHN-gah" },
      { pt: "abacaxi", en: "pineapple", ipa: "abakʃi", phonetic: "ah-bah-kah-SHEE" },
      { pt: "maracujá", en: "passion fruit", ipa: "maɾakuˈʒa", phonetic: "mah-rah-koo-ZHAH" },
      { pt: "quilo", en: "kilogram", ipa: "ˈki.lu", phonetic: "KEE-loo" },
      { pt: "dúzia", en: "dozen", ipa: "ˈdu.zja", phonetic: "DOO-zyah" },
      { pt: "fresco", en: "fresh", ipa: "ˈfɾes.ku", phonetic: "FRES-koo" },
      { pt: "maduro", en: "ripe", ipa: "maˈdu.ɾu", phonetic: "mah-DOO-roo" }
    ],
    phrases: [
      { pt: "Quanto é o quilo?", en: "How much per kilo?" },
      { pt: "Me dá dois quilos de manga.", en: "Give me two kilos of mango." },
      { pt: "Está maduro?", en: "Is it ripe?" },
      { pt: "É fresco, chegou hoje.", en: "It's fresh, it arrived today." },
      { pt: "Tem desconto na dúzia?", en: "Is there a discount for a dozen?" }
    ],
    grammar: "'Me dá ___' (give me ___) is the standard market command — direct but not rude. More formally 'Me dê ___' or 'Pode me dar ___?' In casual settings, 'me dá' is perfectly normal and expected.",
    tip: "Brazilian feiras are weekly neighborhood markets — every bairro has one. Fruits you won't find at home: caju (cashew fruit, not just the nut), pitanga, jabuticaba (grows directly on the trunk), cajá. Ask to taste before you buy — vendors usually welcome it."
  },
  {
    day: 18,
    title: "Describing Things",
    titleNative: "Descrevendo Coisas",
    vocab: [
      { pt: "grande", en: "big / large", ipa: "ˈgɾɐ̃.dʒi", phonetic: "GRAN-jee" },
      { pt: "pequeno", en: "small", ipa: "peˈke.nu", phonetic: "peh-KEH-noo" },
      { pt: "bonito", en: "beautiful / nice", ipa: "boˈni.tu", phonetic: "boh-NEE-too" },
      { pt: "feio", en: "ugly", ipa: "ˈfej.u", phonetic: "FAY-oo" },
      { pt: "rápido", en: "fast", ipa: "ˈʁa.pi.du", phonetic: "HAH-pee-doo" },
      { pt: "devagar", en: "slow / slowly", ipa: "dʒivaˈgaʁ", phonetic: "jee-vah-GAR" },
      { pt: "novo", en: "new", ipa: "ˈno.vu", phonetic: "NOH-voo" },
      { pt: "velho", en: "old", ipa: "ˈve.ʎu", phonetic: "VEH-lyoo" },
      { pt: "cheio", en: "full", ipa: "ˈʃej.u", phonetic: "SHAY-oo" },
      { pt: "vazio", en: "empty", ipa: "vaˈzi.u", phonetic: "vah-ZEE-oo" }
    ],
    phrases: [
      { pt: "Fala mais devagar, por favor.", en: "Speak more slowly, please." },
      { pt: "É muito grande para mim.", en: "It's too big for me." },
      { pt: "Tem algo menor?", en: "Do you have something smaller?" },
      { pt: "Como se chama isso em português?", en: "What's this called in Portuguese?" },
      { pt: "Que coisa linda!", en: "What a beautiful thing!" }
    ],
    grammar: "Adjectives in Portuguese agree in gender and number: 'bonito' (masc. sing.), 'bonita' (fem. sing.), 'bonitos' (masc. pl.), 'bonitas' (fem. pl.). Most adjectives follow the noun: 'um carro novo' (a new car), though some precede it.",
    tip: "'Fala mais devagar' (speak more slowly) is possibly the most useful phrase for language learners. Brazilians speak quickly and swallow syllables — don't be shy about asking them to slow down. Most will happily oblige and appreciate the effort to speak Portuguese."
  },
  {
    day: 19,
    title: "Feelings & Opinions",
    titleNative: "Sentimentos & Opiniões",
    vocab: [
      { pt: "feliz", en: "happy", ipa: "feˈliʃ", phonetic: "feh-LEESS" },
      { pt: "triste", en: "sad", ipa: "ˈtɾis.tʃi", phonetic: "TREES-chee" },
      { pt: "cansado", en: "tired", ipa: "kɐ̃ˈza.du", phonetic: "kan-ZAH-doo" },
      { pt: "animado", en: "excited / pumped up", ipa: "animˈa.du", phonetic: "ah-nee-MAH-doo" },
      { pt: "com medo", en: "scared", ipa: "kõ ˈme.du", phonetic: "kon MEH-doo" },
      { pt: "com raiva", en: "angry", ipa: "kõ ˈʁaj.va", phonetic: "kon HY-vah" },
      { pt: "acho que", en: "I think that", ipa: "ˈa.ʃu ki", phonetic: "AH-shoo kee" },
      { pt: "concordo", en: "I agree", ipa: "kõˈkoʁ.du", phonetic: "kon-KOR-doo" },
      { pt: "discordo", en: "I disagree", ipa: "dʒisˈkoʁ.du", phonetic: "jees-KOR-doo" },
      { pt: "depende", en: "it depends", ipa: "deˈpẽ.dʒi", phonetic: "deh-PEN-jee" }
    ],
    phrases: [
      { pt: "Estou muito cansado/a.", en: "I'm very tired (m/f)." },
      { pt: "Acho que sim / não.", en: "I think so / I don't think so." },
      { pt: "Que pena!", en: "What a shame! / That's too bad!" },
      { pt: "Que ótimo!", en: "How great!" },
      { pt: "Na minha opinião...", en: "In my opinion..." }
    ],
    grammar: "'Acho que' (I think that) is essential for expressing opinions without sounding too assertive. 'Acho que é caro' (I think it's expensive). 'Não acho' (I don't think so). Very common in everyday conversation.",
    tip: "'Saudade' is Brazil's most famous untranslatable word — a longing, nostalgic yearning for something or someone you love. 'Estou com saudade de você' (I miss you, deeply). Brazilians use it constantly and genuinely. Learn it and use it — it will make people smile."
  },
  {
    day: 20,
    title: "Making Friends",
    titleNative: "Fazendo Amigos",
    vocab: [
      { pt: "legal", en: "cool / awesome (slang)", ipa: "leˈgaw", phonetic: "leh-GOW" },
      { pt: "gente", en: "people / hey (address)", ipa: "ˈʒẽ.tʃi", phonetic: "ZHEN-chee" },
      { pt: "cara", en: "dude / man", ipa: "ˈka.ɾa", phonetic: "KAH-rah" },
      { pt: "curtir", en: "to enjoy / to like", ipa: "kuʁˈtʃiʁ", phonetic: "koor-CHEER" },
      { pt: "bate-papo", en: "chat / casual conversation", ipa: "ˈba.tʃi ˈpa.pu", phonetic: "BAH-chee PAH-poo" },
      { pt: "saudade", en: "longing / missing someone", ipa: "sawˈda.dʒi", phonetic: "sow-DAH-jee" },
      { pt: "bacana", en: "cool / neat", ipa: "baˈkɐ.na", phonetic: "bah-KAH-nah" },
      { pt: "rolar", en: "to happen / 'is it on?'", ipa: "ʁoˈlaʁ", phonetic: "hoh-LAR" },
      { pt: "galera", en: "the crew / the group", ipa: "gaˈle.ɾa", phonetic: "gah-LEH-rah" },
      { pt: "trampo", en: "work / job (slang)", ipa: "ˈtɾɐ̃.pu", phonetic: "TRAM-poo" }
    ],
    phrases: [
      { pt: "Você é daqui?", en: "Are you from here?" },
      { pt: "De onde você é?", en: "Where are you from?" },
      { pt: "O que você curte fazer?", en: "What do you like to do?" },
      { pt: "Vamos trocar número?", en: "Should we exchange numbers?" },
      { pt: "Vai rolar festa hoje?", en: "Is there a party happening tonight?" }
    ],
    grammar: "'Rolar' literally means 'to roll' but colloquially means 'to happen' or 'to go down.' 'Vai rolar?' = Is it happening? Is it on? 'Rolou' = it happened. This slang is everywhere in casual Brazilian speech.",
    tip: "Brazilians are among the most naturally sociable people in the world — striking up conversation with strangers is normal and welcome. 'Cara' (literally 'face') is used like 'dude' or 'man' regardless of gender in casual speech. 'Legal!' is the all-purpose 'cool!' approval."
  },
  {
    day: 21,
    title: "Brazilian Culture",
    titleNative: "Cultura Brasileira",
    vocab: [
      { pt: "carnaval", en: "carnival", ipa: "kaʁnaˈvaw", phonetic: "kar-nah-VOW" },
      { pt: "samba", en: "samba", ipa: "ˈsɐ̃.ba", phonetic: "SAHM-bah" },
      { pt: "capoeira", en: "Afro-Brazilian martial art/dance", ipa: "kapoˈej.ɾa", phonetic: "kah-poh-AY-rah" },
      { pt: "favela", en: "urban informal settlement", ipa: "faˈve.la", phonetic: "fah-VEH-lah" },
      { pt: "jogo bonito", en: "the beautiful game (football)", ipa: "ˈʒo.gu boˈni.tu", phonetic: "ZHOH-goo boh-NEE-too" },
      { pt: "torcida", en: "fans / supporters (sports)", ipa: "toʁˈsi.da", phonetic: "tor-SEE-dah" },
      { pt: "axé", en: "Bahian music / positive energy", ipa: "aˈʃe", phonetic: "ah-SHEH" },
      { pt: "baiano", en: "person from Bahia", ipa: "baˈjɐ.nu", phonetic: "bah-YAH-noo" },
      { pt: "carioca", en: "person from Rio de Janeiro", ipa: "kaɾjˈɔ.ka", phonetic: "kah-ree-OH-kah" },
      { pt: "paulistano", en: "person from São Paulo", ipa: "pawlisˈtɐ.nu", phonetic: "pow-lees-TAH-noo" }
    ],
    phrases: [
      { pt: "Você gosta de futebol?", en: "Do you like football?" },
      { pt: "Qual é o seu time?", en: "What's your team?" },
      { pt: "Nunca perco o carnaval.", en: "I never miss carnival." },
      { pt: "A capoeira é uma arte.", en: "Capoeira is an art." },
      { pt: "Brasil tem uma cultura incrível.", en: "Brazil has an incredible culture." }
    ],
    grammar: "Regional identity is strong. Asking 'Você é carioca?' (Are you from Rio?) before assuming is respectful. Each major city has its own identity — Cariocas (Rio) are seen as relaxed, Paulistanos (São Paulo) as hustlers. Baianos from Bahia are known for warmth and celebration.",
    tip: "Football (futebol) is a religion. Picking a team opinion is a social act — ask before you assume. The Maracanã stadium in Rio is a pilgrimage site. Carnival is in February–March but rehearsals (ensaios) at samba schools run for months — those are often more authentic and accessible to visitors."
  },
  {
    day: 22,
    title: "Sports & Activities",
    titleNative: "Esportes & Atividades",
    vocab: [
      { pt: "futebol", en: "football / soccer", ipa: "futʃiˈbɔw", phonetic: "foo-chee-BOL" },
      { pt: "vôlei de praia", en: "beach volleyball", ipa: "ˈvɔ.lej dʒi ˈpɾaj.a", phonetic: "VOH-lay jee PRAH-yah" },
      { pt: "surf", en: "surfing", ipa: "seʁfi", phonetic: "SER-fee" },
      { pt: "trilha", en: "hiking trail", ipa: "ˈtɾi.ʎa", phonetic: "TREE-lyah" },
      { pt: "academia", en: "gym", ipa: "akadeˈmi.a", phonetic: "ah-kah-deh-MEE-ah" },
      { pt: "jogo", en: "game / match", ipa: "ˈʒo.gu", phonetic: "ZHOH-goo" },
      { pt: "gol!", en: "goal!", ipa: "gɔw", phonetic: "gol" },
      { pt: "campeão", en: "champion", ipa: "kɐ̃pjˈɐ̃w", phonetic: "kam-pee-OW" },
      { pt: "esporte", en: "sport", ipa: "esˈpoʁ.tʃi", phonetic: "es-POR-chee" },
      { pt: "corrida", en: "running / race", ipa: "koˈʁi.da", phonetic: "koh-HEE-dah" }
    ],
    phrases: [
      { pt: "Você pratica algum esporte?", en: "Do you play any sports?" },
      { pt: "Vamos jogar futebol na praia.", en: "Let's play football on the beach." },
      { pt: "Tem trilha por aqui?", en: "Are there hiking trails around here?" },
      { pt: "Onde posso alugar uma prancha?", en: "Where can I rent a surfboard?" },
      { pt: "Qual time vai ganhar?", en: "Which team is going to win?" }
    ],
    grammar: "'Jogar' (to play a sport/game) vs 'tocar' (to play an instrument) — these are not interchangeable. 'Jogar futebol,' 'jogar basquete,' but 'tocar violão' (play guitar), 'tocar piano.' A common mistake for English speakers.",
    tip: "Brazil is a sports nation beyond football. Beach volleyball, jiu-jitsu (Brazil invented the modern form), and surfing are all genuinely world-class there. Footvolley (football played over a volleyball net, no hands) on Copacabana beach is one of the most impressive athletic sights you'll see."
  },
  {
    day: 23,
    title: "Technology & Communication",
    titleNative: "Tecnologia & Comunicação",
    vocab: [
      { pt: "celular", en: "mobile phone", ipa: "seluˈlaʁ", phonetic: "seh-loo-LAR" },
      { pt: "carregador", en: "charger", ipa: "kaʁegaˈdoʁ", phonetic: "kah-heh-gah-DOR" },
      { pt: "bateria", en: "battery", ipa: "bateˈɾi.a", phonetic: "bah-teh-REE-ah" },
      { pt: "mensagem", en: "message", ipa: "mẽˈsa.ʒẽ", phonetic: "men-SAH-zheng" },
      { pt: "ligar", en: "to call / to turn on", ipa: "liˈgaʁ", phonetic: "lee-GAR" },
      { pt: "WhatsApp", en: "WhatsApp (used like a verb)", ipa: "wats.ˈap", phonetic: "wahts-AHP" },
      { pt: "senha", en: "password", ipa: "ˈse.ɲa", phonetic: "SEN-yah" },
      { pt: "aplicativo", en: "app", ipa: "aplikaˈtʃi.vu", phonetic: "ah-plee-kah-CHEE-voo" },
      { pt: "internet", en: "internet", ipa: "ĩteʁˈnɛtʃi", phonetic: "een-ter-NEH-chee" },
      { pt: "sinal", en: "signal", ipa: "siˈnaw", phonetic: "see-NOW" }
    ],
    phrases: [
      { pt: "Qual é a senha do wifi?", en: "What is the wifi password?" },
      { pt: "Meu celular está sem bateria.", en: "My phone is out of battery." },
      { pt: "Me manda no WhatsApp.", en: "Send it to me on WhatsApp." },
      { pt: "Estou sem sinal.", en: "I have no signal." },
      { pt: "Pode me ligar mais tarde?", en: "Can you call me later?" }
    ],
    grammar: "WhatsApp has become a verb in Brazil — 'Me manda no WhatsApp' or 'Te mando um WhatsApp.' This is completely normal Brazilian Portuguese. Technology words are often borrowed directly from English: 'app,' 'selfie,' 'delete,' 'post.'",
    tip: "WhatsApp is the primary communication tool in Brazil — not SMS, not iMessage. Nearly everyone uses it for personal, professional, and business communication. If someone asks 'qual é o seu número?' they mean WhatsApp. Groups (grupos) for families, friends, and work are universal."
  },
  {
    day: 24,
    title: "At the Pharmacy",
    titleNative: "Na Farmácia",
    vocab: [
      { pt: "farmácia", en: "pharmacy", ipa: "faʁˈma.sja", phonetic: "far-MAH-syah" },
      { pt: "comprimido", en: "tablet / pill", ipa: "kõpɾiˈmi.du", phonetic: "kom-pree-MEE-doo" },
      { pt: "pomada", en: "cream / ointment", ipa: "poˈma.da", phonetic: "poh-MAH-dah" },
      { pt: "curativo", en: "bandage / plaster", ipa: "kuɾaˈtʃi.vu", phonetic: "koo-rah-CHEE-voo" },
      { pt: "analgésico", en: "painkiller", ipa: "analˈʒɛ.zi.ku", phonetic: "ah-nal-ZHEH-zee-koo" },
      { pt: "antibiótico", en: "antibiotic", ipa: "ɐ̃tibiˈɔ.tʃi.ku", phonetic: "an-chee-bee-OH-chee-koo" },
      { pt: "protetor solar", en: "sunscreen", ipa: "pɾoteˈtoʁ soˈlaʁ", phonetic: "pro-teh-TOR soh-LAR" },
      { pt: "repelente", en: "insect repellent", ipa: "ʁepeˈlẽ.tʃi", phonetic: "heh-peh-LEN-chee" },
      { pt: "antialérgico", en: "antihistamine", ipa: "ɐ̃tjaleʁˈʒi.ku", phonetic: "an-chee-ah-LER-zhee-koo" },
      { pt: "receita médica", en: "medical prescription", ipa: "ʁeˈsej.ta ˈmɛ.dʒi.ka", phonetic: "heh-SAY-tah MEH-jee-kah" }
    ],
    phrases: [
      { pt: "Tem algo para dor de cabeça?", en: "Do you have something for a headache?" },
      { pt: "Preciso de um repelente forte.", en: "I need a strong repellent." },
      { pt: "É necessário receita?", en: "Do I need a prescription?" },
      { pt: "Quantas vezes por dia?", en: "How many times a day?" },
      { pt: "Pode me recomendar algo?", en: "Can you recommend something?" }
    ],
    grammar: "'Tem algo para ___?' (Do you have something for ___?) is your pharmacy shortcut. Combine with body part or symptom: 'Tem algo para febre?' (for fever), 'para tosse?' (for cough), 'para queimadura de sol?' (for sunburn).",
    tip: "Brazilian pharmacies (farmácias) are very well-stocked and pharmacists can recommend treatments for minor issues. Repelente is essential — dengue and zika are real concerns in some areas. The main brands: Repelex, Off, SkinSoSoft. FPS 50 or higher sunscreen is a must in tropical Brazil."
  },
  {
    day: 25,
    title: "Giving Directions",
    titleNative: "Dando Direções",
    vocab: [
      { pt: "siga em frente", en: "go straight ahead", ipa: "ˈsi.ga ẽ ˈfɾẽ.tʃi", phonetic: "SEE-gah em FREN-chee" },
      { pt: "vire à esquerda", en: "turn left", ipa: "ˈvi.ɾi a esˈkeʁ.da", phonetic: "VEE-ree ah es-KER-dah" },
      { pt: "vire à direita", en: "turn right", ipa: "ˈvi.ɾi a dʒiˈɾej.ta", phonetic: "VEE-ree ah jee-RAY-tah" },
      { pt: "semáforo", en: "traffic light", ipa: "seˈma.fo.ɾu", phonetic: "seh-MAH-foh-roo" },
      { pt: "esquina", en: "corner / intersection", ipa: "esˈki.na", phonetic: "es-KEE-nah" },
      { pt: "quadra", en: "block (city)", ipa: "ˈkwa.dɾa", phonetic: "KWAH-drah" },
      { pt: "cruzamento", en: "crossroads", ipa: "kɾuzaˈmẽ.tu", phonetic: "kroo-zah-MEN-too" },
      { pt: "passarela", en: "footbridge / overpass", ipa: "pasaˈɾe.la", phonetic: "pah-sah-REH-lah" },
      { pt: "entrada", en: "entrance", ipa: "ẽˈtɾa.da", phonetic: "en-TRAH-dah" },
      { pt: "saída", en: "exit", ipa: "saˈi.da", phonetic: "sah-EE-dah" }
    ],
    phrases: [
      { pt: "Como chego à praia?", en: "How do I get to the beach?" },
      { pt: "Siga em frente até o semáforo.", en: "Go straight until the traffic light." },
      { pt: "Vire à esquerda na esquina.", en: "Turn left at the corner." },
      { pt: "Fica a duas quadras daqui.", en: "It's two blocks from here." },
      { pt: "Você pode me mostrar no mapa?", en: "Can you show me on the map?" }
    ],
    grammar: "'Até' (until / up to) is key for directions: 'Siga até o semáforo' (go until the traffic light), 'Siga até a praça' (go to the square). Combined with 'em frente' (straight ahead) and 'à esquerda/direita,' you can navigate most situations.",
    tip: "Google Maps works well in Brazil. But asking locals ('Pode me ajudar? Estou procurando...') often gets you better results — Brazilians love to help and will often walk you partway there. Accept the kindness."
  },
  {
    day: 26,
    title: "Making Plans",
    titleNative: "Fazendo Planos",
    vocab: [
      { pt: "plano", en: "plan", ipa: "ˈplɐ.nu", phonetic: "PLAH-noo" },
      { pt: "combinar", en: "to arrange / agree on", ipa: "kõbiˈnaʁ", phonetic: "kom-bee-NAR" },
      { pt: "encontro", en: "meeting / date", ipa: "ẽˈkõ.tɾu", phonetic: "en-KON-troo" },
      { pt: "confirmar", en: "to confirm", ipa: "kõfiʁˈmaʁ", phonetic: "kon-feer-MAR" },
      { pt: "cancelar", en: "to cancel", ipa: "kɐ̃seˈlaʁ", phonetic: "kan-seh-LAR" },
      { pt: "marcar", en: "to schedule / book", ipa: "maʁˈkaʁ", phonetic: "mar-KAR" },
      { pt: "disponível", en: "available", ipa: "dʒispoˈni.vew", phonetic: "jees-poh-NEE-vel" },
      { pt: "semana que vem", en: "next week", ipa: "seˈmɐ.na ki vẽ", phonetic: "seh-MAH-nah kee veng" },
      { pt: "fim de semana", en: "weekend", ipa: "fĩ dʒi seˈmɐ.na", phonetic: "feen jee seh-MAH-nah" },
      { pt: "a combinação", en: "the plan / the arrangement", ipa: "a kõbinaˈsɐ̃w", phonetic: "ah kom-bee-nah-SOW" }
    ],
    phrases: [
      { pt: "O que você vai fazer no fim de semana?", en: "What are you doing this weekend?" },
      { pt: "Vamos marcar de nos encontrar?", en: "Shall we arrange to meet up?" },
      { pt: "Que tal sábado às três?", en: "How about Saturday at 3?" },
      { pt: "Pode ser. Confirmo mais tarde.", en: "That could work. I'll confirm later." },
      { pt: "Infelizmente tive que cancelar.", en: "Unfortunately I had to cancel." }
    ],
    grammar: "'Que tal ___?' (How about ___?) is your go-to for suggesting plans. 'Que tal amanhã?' 'Que tal a gente ir ao cinema?' Combine with a time or activity for a complete suggestion. Very casual and widely used.",
    tip: "Brazilian time culture: 'a combinação' doesn't always mean punctuality. Social events typically start 30–60 minutes after the stated time. Business meetings are more punctual in São Paulo, more relaxed in Rio. 'Estou a caminho' (I'm on my way) often means 'I'm about to leave my house.'"
  },
  {
    day: 27,
    title: "At the Airport",
    titleNative: "No Aeroporto",
    vocab: [
      { pt: "passaporte", en: "passport", ipa: "pasaˈpoʁ.tʃi", phonetic: "pah-sah-POR-chee" },
      { pt: "visto", en: "visa", ipa: "ˈvis.tu", phonetic: "VEES-too" },
      { pt: "alfândega", en: "customs", ipa: "awˈfɐ̃.de.ga", phonetic: "ow-FAN-deh-gah" },
      { pt: "imigração", en: "immigration", ipa: "imigraˈsɐ̃w", phonetic: "ee-mee-grah-SOW" },
      { pt: "cartão de embarque", en: "boarding pass", ipa: "kaʁˈtɐ̃w dʒi ẽˈbaʁ.ki", phonetic: "kar-TOW jee em-BAR-kee" },
      { pt: "mala", en: "suitcase", ipa: "ˈma.la", phonetic: "MAH-lah" },
      { pt: "despachar bagagem", en: "to check luggage", ipa: "dʒispaˈʃaʁ baˈga.ʒẽ", phonetic: "jees-pah-SHAR bah-GAH-zheng" },
      { pt: "balcão de check-in", en: "check-in counter", ipa: "bawˈkɐ̃w dʒi ˈtʃɛk.ĩ", phonetic: "bal-COW jee CHEK-een" },
      { pt: "portão", en: "gate", ipa: "poʁˈtɐ̃w", phonetic: "por-TOW" },
      { pt: "conexão", en: "connection (flight)", ipa: "konɛkˈsɐ̃w", phonetic: "koh-nek-SOW" }
    ],
    phrases: [
      { pt: "Onde fica o check-in da ___?", en: "Where is the ___ check-in counter?" },
      { pt: "Quero despachar uma mala.", en: "I want to check one bag." },
      { pt: "Tenho conexão em São Paulo.", en: "I have a connection in São Paulo." },
      { pt: "Minha mala não chegou.", en: "My bag didn't arrive." },
      { pt: "Perdi meu passaporte.", en: "I lost my passport." }
    ],
    grammar: "'Não chegou' (didn't arrive) uses the simple past (pretérito perfeito) — one of the most essential tenses. Form: verb stem + endings. 'Chegar' → 'chegou' (he/she/it arrived). 'Perdi' = I lost (from perder).",
    tip: "Guarulhos (GRU) is one of South America's busiest airports — allow extra time for connections and immigration. Brazilian immigration for first-time visitors can be thorough. Have your accommodation address ready. The tax-free shop (duty-free) on arrival is surprisingly good for cachaça."
  },
  {
    day: 28,
    title: "Celebrations & Holidays",
    titleNative: "Celebrações & Feriados",
    vocab: [
      { pt: "feriado", en: "public holiday", ipa: "feɾjˈa.du", phonetic: "feh-ree-AH-doo" },
      { pt: "festa", en: "party / celebration", ipa: "ˈfes.ta", phonetic: "FES-tah" },
      { pt: "aniversário", en: "birthday / anniversary", ipa: "aniveʁˈsa.ɾju", phonetic: "ah-nee-ver-SAH-ryoo" },
      { pt: "feliz aniversário", en: "happy birthday", ipa: "feˈliʃ aniveʁˈsa.ɾju", phonetic: "feh-LEESS ah-nee-ver-SAH-ryoo" },
      { pt: "Natal", en: "Christmas", ipa: "naˈtaw", phonetic: "nah-TOW" },
      { pt: "Ano Novo", en: "New Year", ipa: "ˈɐ.nu ˈno.vu", phonetic: "AH-noo NOH-voo" },
      { pt: "parabéns", en: "congratulations / happy birthday", ipa: "paɾaˈbẽjs", phonetic: "pah-rah-BENS" },
      { pt: "brindar", en: "to toast (glasses)", ipa: "bɾĩˈdaʁ", phonetic: "breen-DAR" },
      { pt: "saúde!", en: "cheers! (toast)", ipa: "saˈu.dʒi", phonetic: "sah-OO-jee" },
      { pt: "presente", en: "gift / present", ipa: "pɾeˈzẽ.tʃi", phonetic: "preh-ZEN-chee" }
    ],
    phrases: [
      { pt: "Parabéns pelo seu aniversário!", en: "Happy birthday!" },
      { pt: "Saúde! Feliz Ano Novo!", en: "Cheers! Happy New Year!" },
      { pt: "O que você quer de presente?", en: "What do you want as a gift?" },
      { pt: "Vai ter festa amanhã?", en: "Is there a party tomorrow?" },
      { pt: "Vamos brindar!", en: "Let's toast!" }
    ],
    grammar: "In Brazil, 'Parabéns' is sung to the same melody as 'Happy Birthday' — the Portuguese version. 'Saúde' (literally 'health') is the all-purpose toast. For New Year's at Copacabana beach, Brazilians wear white for luck — a tradition worth knowing.",
    tip: "Carnaval (February/March) and Réveillon (New Year's) are Brazil's biggest celebrations. Réveillon on Copacabana beach is one of the world's great free spectacles — millions in white watching fireworks. For Carnaval, book accommodation 6–12 months ahead. Blocos (street parties) are free and more fun than the Sambadrome for first-timers."
  },
  {
    day: 29,
    title: "Advanced Phrases",
    titleNative: "Frases Avançadas",
    vocab: [
      { pt: "embora", en: "although / let's go", ipa: "ẽˈbo.ɾa", phonetic: "em-BOH-rah" },
      { pt: "mesmo assim", en: "even so / nevertheless", ipa: "ˈmez.mu aˈsĩ", phonetic: "MEZ-moo ah-SEEN" },
      { pt: "aliás", en: "by the way / actually", ipa: "aˈljas", phonetic: "ah-LYAS" },
      { pt: "enfim", en: "anyway / in short", ipa: "ẽˈfĩ", phonetic: "en-FEEN" },
      { pt: "ainda", en: "still / yet", ipa: "aˈĩ.da", phonetic: "ah-EEN-dah" },
      { pt: "afinal", en: "after all / in the end", ipa: "afiˈnaw", phonetic: "ah-fee-NOW" },
      { pt: "portanto", en: "therefore / so", ipa: "poʁˈtɐ̃.tu", phonetic: "por-TAN-too" },
      { pt: "inclusive", en: "including / even", ipa: "ĩkluˈzi.vi", phonetic: "een-kloo-ZEE-vee" },
      { pt: "de qualquer forma", en: "either way / regardless", ipa: "dʒi kwawˈkeʁ ˈfoʁ.ma", phonetic: "jee kwow-KER FOR-mah" },
      { pt: "tanto faz", en: "it doesn't matter / whatever", ipa: "ˈtɐ̃.tu fas", phonetic: "TAN-too fahs" }
    ],
    phrases: [
      { pt: "Vamos embora!", en: "Let's go! / Let's get out of here!" },
      { pt: "Mesmo assim, obrigado.", en: "Even so, thank you." },
      { pt: "Aliás, esqueci de dizer...", en: "By the way, I forgot to say..." },
      { pt: "Afinal, o que aconteceu?", en: "So what happened in the end?" },
      { pt: "Tanto faz, pode escolher você.", en: "Doesn't matter, you can choose." }
    ],
    grammar: "Discourse markers are what separate basic from fluent. 'Aliás' signals an addition or correction, 'enfim' wraps up a thought, 'afinal' draws a conclusion. Starting to use these naturally will make your Portuguese sound dramatically more fluent.",
    tip: "'Tanto faz' (literally 'so much it makes') is one of the most Brazilian expressions — said when you genuinely don't have a preference, or sometimes passive-aggressively when you do. Context matters. 'Vamos embora' (let's go) is used constantly — 'embora' alone as a command means the same."
  },
  {
    day: 30,
    title: "Real Conversation",
    titleNative: "Conversa Real",
    vocab: [
      { pt: "fluente", en: "fluent", ipa: "fluˈẽ.tʃi", phonetic: "floo-EN-chee" },
      { pt: "sotaque", en: "accent", ipa: "soˈta.ki", phonetic: "soh-TAH-kee" },
      { pt: "gíria", en: "slang", ipa: "ˈʒi.ɾja", phonetic: "ZHEE-ryah" },
      { pt: "malandro", en: "streetwise / charming rogue", ipa: "maˈlɐ̃.dɾu", phonetic: "mah-LAN-droo" },
      { pt: "jeito", en: "way / knack (uniquely Brazilian)", ipa: "ˈʒej.tu", phonetic: "ZHAY-too" },
      { pt: "jeitinho brasileiro", en: "the Brazilian way of getting things done", ipa: "ʒejˈtʃi.ɲu bɾaziˈlej.ɾu", phonetic: "zhay-CHEEN-yoo brah-zee-LAY-roo" },
      { pt: "saudade", en: "longing (untranslatable)", ipa: "sawˈda.dʒi", phonetic: "sow-DAH-jee" },
      { pt: "gostoso", en: "delicious / attractive (slang)", ipa: "gosˈto.zu", phonetic: "gos-TOH-zoo" },
      { pt: "incrível", en: "incredible / amazing", ipa: "ĩˈkɾi.vew", phonetic: "een-KREE-vel" },
      { pt: "valeu", en: "thanks / cool (slang)", ipa: "vaˈlew", phonetic: "vah-LEW" }
    ],
    phrases: [
      { pt: "Meu português ainda não é perfeito.", en: "My Portuguese isn't perfect yet." },
      { pt: "Estou aprendendo, pode me corrigir.", en: "I'm learning, you can correct me." },
      { pt: "Você fala muito bem!", en: "You speak very well!" },
      { pt: "Aprendi muito nesse mês.", en: "I learned a lot this month." },
      { pt: "Valeu por tudo!", en: "Thanks for everything!" }
    ],
    grammar: "You've covered 30 days. You now have greetings, navigation, food, transport, culture, emergencies, slang, and discourse markers. The key to Brazilian Portuguese fluency from here: watch Brazilian TV (Globo, Netflix Brazil), listen to pagode/forró/MPB, and talk to Brazilians on HelloTalk.",
    tip: "The 'jeitinho brasileiro' — the uniquely Brazilian knack for improvising solutions and navigating around obstacles with charm — is both a cultural superpower and a worldview. In 30 days you've started to earn your own jeitinho. Valeu, and boa sorte! 🇧🇷"
  }
];

const CONVERSATIONS_PT = [
  {
    title: "Ordering at a Café",
    scene: "A bakery in São Paulo — the coffee is strong, the pão de queijo is fresh, and you're next in line.",
    lines: [
      { who: "them", pt: "Bom dia! O que vai querer?", en: "Good morning! What would you like?" },
      { who: "you", pt: "Bom dia! Um café com leite e dois pães de queijo, por favor.", en: "Good morning! A coffee with milk and two cheese breads, please." },
      { who: "them", pt: "Quente ou gelado?", en: "Hot or iced?" },
      { who: "you", pt: "Quente, por favor. Sem açúcar.", en: "Hot, please. Without sugar." },
      { who: "them", pt: "Mais alguma coisa?", en: "Anything else?" },
      { who: "you", pt: "Tem tapioca?", en: "Do you have tapioca?" },
      { who: "them", pt: "Tem sim. Com queijo ou frango?", en: "Yes we do. With cheese or chicken?" },
      { who: "you", pt: "Com queijo, por favor. Quanto fica?", en: "With cheese, please. How much is that?" },
      { who: "them", pt: "Fica vinte e oito reais.", en: "That'll be twenty-eight reais." },
      { who: "you", pt: "Pode ser no cartão?", en: "Can I pay by card?" },
      { who: "them", pt: "Pode sim!", en: "Of course!" }
    ]
  },
  {
    title: "Checking into a Pousada",
    scene: "A beachside pousada in Florianópolis — you've arrived after a long bus ride.",
    lines: [
      { who: "you", pt: "Boa tarde. Tenho uma reserva no nome de ___.", en: "Good afternoon. I have a reservation under the name ___." },
      { who: "them", pt: "Deixa eu ver... Sim, encontrei. Um quarto casal para três noites.", en: "Let me check... Yes, found it. A double room for three nights." },
      { who: "you", pt: "Isso mesmo. O café da manhã está incluído?", en: "That's right. Is breakfast included?" },
      { who: "them", pt: "Está sim, das sete ao meio-dia.", en: "Yes it is, from seven to noon." },
      { who: "you", pt: "Ótimo. O quarto tem ar-condicionado?", en: "Great. Does the room have AC?" },
      { who: "them", pt: "Tem sim, e fica de frente para o mar.", en: "Yes it does, and it faces the sea." },
      { who: "you", pt: "Perfeito! Qual é a senha do wifi?", en: "Perfect! What's the wifi password?" },
      { who: "them", pt: "É 'pousada2024', tudo minúsculo.", en: "It's 'pousada2024', all lowercase." },
      { who: "you", pt: "Obrigado! Pode chamar às oito para o café?", en: "Thanks! Can you wake me at eight for breakfast?" },
      { who: "them", pt: "Claro! Bom descanso.", en: "Of course! Rest well." }
    ]
  },
  {
    title: "At the Churrascaria",
    scene: "A rodízio restaurant in Rio — the waiters are circling with skewers and you need to manage this situation.",
    lines: [
      { who: "them", pt: "Boa noite! Bem-vindos ao rodízio. Pode virar o cartão para verde.", en: "Good evening! Welcome to the rodízio. You can flip your card to green." },
      { who: "you", pt: "Obrigado! O que você recomenda começar?", en: "Thank you! What do you recommend starting with?" },
      { who: "them", pt: "A picanha é a nossa especialidade. E a costela também.", en: "The picanha is our specialty. And the short rib too." },
      { who: "you", pt: "Perfeito. Pode trazer a picanha mal-passada?", en: "Perfect. Can you bring the picanha rare?" },
      { who: "them", pt: "Com certeza! E a entrada das saladas fica ali.", en: "Of course! And the salad bar is over there." },
      { who: "you", pt: "Tem opção vegetariana?", en: "Is there a vegetarian option?" },
      { who: "them", pt: "Temos legumes grelhados e saladas frescas.", en: "We have grilled vegetables and fresh salads." },
      { who: "you", pt: "Já estou satisfeito. Vou virar para vermelho.", en: "I'm already full. I'll flip to red." },
      { who: "them", pt: "A sobremesa está incluída também!", en: "Dessert is included too!" },
      { who: "you", pt: "Ai, não resisto. Tem brigadeiro?", en: "Oh, I can't resist. Do you have brigadeiro?" }
    ]
  },
  {
    title: "Getting Directions in Rio",
    scene: "You're near Ipanema and need to find the nearest metro station.",
    lines: [
      { who: "you", pt: "Com licença! Pode me ajudar? Estou procurando o metrô.", en: "Excuse me! Can you help me? I'm looking for the metro." },
      { who: "them", pt: "Claro! Qual estação você precisa?", en: "Of course! Which station do you need?" },
      { who: "you", pt: "A estação mais perto. Vou para o centro.", en: "The nearest station. I'm going to the city centre." },
      { who: "them", pt: "Então é a General Osório. Siga em frente por duas quadras.", en: "Then it's General Osório. Go straight for two blocks." },
      { who: "you", pt: "E depois?", en: "And then?" },
      { who: "them", pt: "Vire à direita na esquina do banco. A entrada fica no lado esquerdo.", en: "Turn right at the bank corner. The entrance is on the left side." },
      { who: "you", pt: "É longe?", en: "Is it far?" },
      { who: "them", pt: "Não, cinco minutinhos a pé.", en: "No, about five minutes walking." },
      { who: "you", pt: "Perfeito, muito obrigado!", en: "Perfect, thank you very much!" },
      { who: "them", pt: "Imagina! Bom passeio.", en: "No problem! Have a good trip." }
    ]
  },
  {
    title: "At the Feira (Street Market)",
    scene: "A Saturday morning at the local feira — mangoes, passion fruit, and a vendor who enjoys a negotiation.",
    lines: [
      { who: "them", pt: "Bom dia! O que vai querer?", en: "Good morning! What would you like?" },
      { who: "you", pt: "Boa dia! Quanto é o quilo da manga?", en: "Good morning! How much is the mango per kilo?" },
      { who: "them", pt: "Tá a seis reais o quilo. Tá ótima, colhida hoje.", en: "It's six reais a kilo. Excellent quality, picked today." },
      { who: "you", pt: "Me dá dois quilos de manga. E esse maracujá, quanto é?", en: "Give me two kilos of mango. And this passion fruit, how much?" },
      { who: "them", pt: "A dúzia de maracujá tá a oito reais.", en: "A dozen passion fruits is eight reais." },
      { who: "you", pt: "Pode fazer dez na dúzia?", en: "Can you do ten for the dozen?" },
      { who: "them", pt: "Hm... Levo de oito mesmo, é preço justo.", en: "Hmm... I'll stick to eight, it's a fair price." },
      { who: "you", pt: "Tá bom! Me dá então. Pode colocar tudo junto?", en: "Alright! I'll take it. Can you put it all together?" },
      { who: "them", pt: "Pode. Fica vinte reais no total.", en: "Sure. That's twenty reais total." },
      { who: "you", pt: "Aqui, vinte. Obrigado, tá muito bonita a fruta.", en: "Here, twenty. Thank you, the fruit looks beautiful." },
      { who: "them", pt: "Imagina! Volte sempre.", en: "Any time! Come back soon." }
    ]
  },
  {
    title: "At the Pharmacy",
    scene: "You've been in the sun too long at Copacabana and you need help.",
    lines: [
      { who: "you", pt: "Boa tarde. Preciso de ajuda.", en: "Good afternoon. I need help." },
      { who: "them", pt: "Pois não, o que aconteceu?", en: "Of course, what happened?" },
      { who: "you", pt: "Fiquei muito tempo no sol. Estou com queimadura e dor de cabeça.", en: "I spent too long in the sun. I have a sunburn and a headache." },
      { who: "them", pt: "Entendi. Tem alergia a algum medicamento?", en: "I see. Are you allergic to any medication?" },
      { who: "you", pt: "Não, nenhuma.", en: "No, none." },
      { who: "them", pt: "Então posso recomendar essa pomada para a queimadura e um analgésico.", en: "Then I can recommend this cream for the sunburn and a painkiller." },
      { who: "you", pt: "E para o estômago? Não me sinto bem.", en: "And for my stomach? I'm not feeling well." },
      { who: "them", pt: "Pode ser desidratação. Tome bastante água de coco.", en: "It could be dehydration. Drink plenty of coconut water." },
      { who: "you", pt: "Faz sentido. Quanto fica tudo?", en: "That makes sense. How much is everything?" },
      { who: "them", pt: "Trinta e dois reais. Melhoras!", en: "Thirty-two reais. Get well soon!" },
      { who: "you", pt: "Obrigado! Vou usar mais protetor solar.", en: "Thank you! I'll use more sunscreen." }
    ]
  },
  {
    title: "Making Plans with a Local",
    scene: "You met someone at a beach bar in Salvador and they're suggesting a night out.",
    lines: [
      { who: "them", pt: "Oi! De onde você é? Não parece ser daqui.", en: "Hey! Where are you from? You don't seem to be from here." },
      { who: "you", pt: "Sou americano/a. Estou aqui de férias por duas semanas.", en: "I'm American. I'm here on vacation for two weeks." },
      { who: "them", pt: "Que legal! Você já foi ao Pelourinho?", en: "How cool! Have you been to Pelourinho?" },
      { who: "you", pt: "Ainda não. Vale a pena ir?", en: "Not yet. Is it worth going?" },
      { who: "them", pt: "Vale muito! Tem show de axé toda sexta-feira. Quer ir comigo hoje?", en: "Absolutely! There's an axé concert every Friday. Want to come with me tonight?" },
      { who: "you", pt: "Adoraria! A que horas começa?", en: "I'd love to! What time does it start?" },
      { who: "them", pt: "Por volta de dez, mas a gente sai às nove.", en: "Around ten, but we'll head out at nine." },
      { who: "you", pt: "Combinado! Onde nos encontramos?", en: "Deal! Where shall we meet?" },
      { who: "them", pt: "Aqui mesmo, nesse bar. Te mando um WhatsApp antes.", en: "Right here, at this bar. I'll WhatsApp you before." },
      { who: "you", pt: "Ótimo! Me passa o número.", en: "Great! Give me your number." }
    ]
  },
  {
    title: "At the Airport — Returning Home",
    scene: "Guarulhos Airport, São Paulo — your bags are packed and your heart is a little heavy.",
    lines: [
      { who: "them", pt: "Bom dia! Passaporte e cartão de embarque, por favor.", en: "Good morning! Passport and boarding pass, please." },
      { who: "you", pt: "Aqui está. Quero despachar uma mala.", en: "Here you go. I'd like to check one bag." },
      { who: "them", pt: "Muito bem. Tem itens frágeis ou líquidos na mala?", en: "Very well. Do you have fragile or liquid items in the bag?" },
      { who: "you", pt: "Tenho uma garrafa de cachaça. Está embalada.", en: "I have a bottle of cachaça. It's wrapped." },
      { who: "them", pt: "Tudo certo. Sua mala está vinte e dois quilos.", en: "All good. Your bag is twenty-two kilos." },
      { who: "you", pt: "Ótimo. Prefiro assento na janela, se possível.", en: "Great. I prefer a window seat if possible." },
      { who: "them", pt: "Vou ver... Tenho a 24A disponível. Está bem?", en: "Let me check... I have 24A available. Is that okay?" },
      { who: "you", pt: "Perfeito, obrigado! O portão de embarque é qual?", en: "Perfect, thank you! Which gate is it?" },
      { who: "them", pt: "Portão C12. Embarque começa às dez e meia.", en: "Gate C12. Boarding starts at ten thirty." },
      { who: "you", pt: "Obrigado. Que país incrível. Vou ter muita saudade.", en: "Thank you. What an incredible country. I'm going to miss it a lot." },
      { who: "them", pt: "Volte sempre! Boa viagem!", en: "Come back anytime! Safe travels!" }
    ]
  }
];
