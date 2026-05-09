// course-en-ja.js — English → Japanese (30-day travel course)

const COURSE_JA = [
  {
    day: 1,
    title: "Greetings & First Words",
    titleNative: "あいさつと最初の言葉",
    vocab: [
      { ja: "こんにちは", en: "hello / good afternoon", ipa: "konnichiwa", phonetic: "kon-NEE-chee-wah" },
      { ja: "おはようございます", en: "good morning (polite)", ipa: "ohajou gozaimasu", phonetic: "oh-hah-YOH go-zah-ee-mahs" },
      { ja: "こんばんは", en: "good evening", ipa: "konbanwa", phonetic: "kon-BAN-wah" },
      { ja: "さようなら", en: "goodbye (formal)", ipa: "sajonara", phonetic: "sah-YOH-nah-rah" },
      { ja: "じゃあね", en: "bye (casual)", ipa: "dʑaːne", phonetic: "JAH-neh" },
      { ja: "ありがとうございます", en: "thank you (polite)", ipa: "ariɡatoː gozaimasu", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs" },
      { ja: "すみません", en: "excuse me / sorry", ipa: "sumimasen", phonetic: "soo-mee-MAH-sen" },
      { ja: "はい / いいえ", en: "yes / no", ipa: "hai / iie", phonetic: "hah-ee / ee-EH" }
    ],
    phrases: [
      { ja: "はじめまして。", en: "Nice to meet you.", phonetic: "hah-jee-meh-MASH-teh" },
      { ja: "よろしくおねがいします。", en: "Please treat me kindly. (standard greeting)", phonetic: "yo-ROSH-ee-koo oh-neh-gah-ee-shmahs" },
      { ja: "わたしは [name] です。", en: "I am [name].", phonetic: "wah-TAH-shee wah [name] dehs" },
      { ja: "おげんきですか？", en: "How are you?", phonetic: "oh-GEN-kee dehs-kah" },
      { ja: "げんきです。", en: "I'm well.", phonetic: "GEN-kee dehs" }
    ],
    grammar: "です (desu) is your best friend — it ends most polite sentences and means roughly 'is/am/are.' Don't worry about pronouncing the final 'u' fully; it's nearly silent: 'dehs' not 'dess-oo.'",
    culture: "Bowing replaces handshakes. A small nod is a casual hello; a 15° bow is standard polite; 30°+ shows real respect or apology. You don't need to perfect it — any attempt is appreciated."
  },
  {
    day: 2,
    title: "Numbers & Time",
    titleNative: "数字と時間",
    vocab: [
      { ja: "いち、に、さん", en: "one, two, three", ipa: "ichi, ni, san", phonetic: "EE-chee, nee, sahn" },
      { ja: "し／よん、ご、ろく", en: "four, five, six", ipa: "shi/jon, go, roku", phonetic: "shee/yon, go, ROH-koo" },
      { ja: "なな／しち、はち、きゅう、じゅう", en: "seven, eight, nine, ten", ipa: "nana/shichi, hachi, kyuː, dʑuː", phonetic: "nah-nah, hah-chee, kyoo, joo" },
      { ja: "ひゃく / せん", en: "hundred / thousand", ipa: "çaku / sen", phonetic: "hyah-koo / sen" },
      { ja: "なんじ？", en: "what time?", ipa: "nandʑi", phonetic: "nan-JEE" },
      { ja: "〜じ", en: "o'clock (e.g. さんじ = 3 o'clock)", ipa: "dʑi", phonetic: "jee" },
      { ja: "ごぜん / ごご", en: "AM / PM", ipa: "gozen / gogo", phonetic: "go-zen / go-go" },
      { ja: "いま〜じです。", en: "It is [X] o'clock now.", ipa: "ima", phonetic: "ee-mah" }
    ],
    phrases: [
      { ja: "いまなんじですか？", en: "What time is it now?", phonetic: "ee-mah nan-JEE dehs-kah" },
      { ja: "ごぜんくじです。", en: "It's 9 AM.", phonetic: "go-zen koo-JEE dehs" },
      { ja: "なんにちですか？", en: "What's today's date?", phonetic: "nan-NEE-chee dehs-kah" },
      { ja: "いくらですか？", en: "How much is it?", phonetic: "ee-KOO-rah dehs-kah" },
      { ja: "〜をふたつください。", en: "Two of [X], please.", phonetic: "[X] oh foo-TAH-tsoo koo-dah-sah-ee" }
    ],
    grammar: "Japanese counters: the word for 'two' changes depending on what you're counting. For general small quantities, use ひとつ (one), ふたつ (two), みっつ (three) — these work for most physical objects.",
    culture: "Shops display prices in numerals, so you'll recognize them. Japan still uses cash widely — especially at smaller ramen shops, temples, and rural spots. Carry ¥1000–¥5000 notes."
  },
  {
    day: 3,
    title: "At the Airport",
    titleNative: "空港で",
    vocab: [
      { ja: "くうこう", en: "airport", ipa: "kuːkoː", phonetic: "KOO-koh" },
      { ja: "パスポート", en: "passport", ipa: "pasupoːto", phonetic: "pah-soo-POH-toh" },
      { ja: "にゅうこく", en: "immigration / entry", ipa: "njuːkoku", phonetic: "nyoo-KOH-koo" },
      { ja: "にもつ", en: "luggage / baggage", ipa: "nimotsu", phonetic: "nee-MOH-tsoo" },
      { ja: "ぜいかん", en: "customs", ipa: "zeːkan", phonetic: "zeh-ee-KAHN" },
      { ja: "のりかえ", en: "transfer / connection", ipa: "norikae", phonetic: "no-ree-KAH-eh" },
      { ja: "でぐち / いりぐち", en: "exit / entrance", ipa: "deɡuchi / iriɡuchi", phonetic: "deh-GOO-chee / ee-ree-GOO-chee" },
      { ja: "えきのバス", en: "airport bus", ipa: "eki no basu", phonetic: "eh-kee no bah-soo" }
    ],
    phrases: [
      { ja: "かんこうです。", en: "I'm here for sightseeing.", phonetic: "kan-KOH dehs" },
      { ja: "〜はどこですか？", en: "Where is [X]?", phonetic: "[X] wah DOH-koh dehs-kah" },
      { ja: "えきはどこですか？", en: "Where is the train station?", phonetic: "eh-kee wah DOH-koh dehs-kah" },
      { ja: "タクシーのりばはどこですか？", en: "Where is the taxi stand?", phonetic: "tah-koo-SHEE no-ree-bah wah DOH-koh dehs-kah" },
      { ja: "スーツケースをひとつあずけたいです。", en: "I'd like to check one suitcase.", phonetic: "soo-tsoo-KEH-soo oh hee-toh-tsoo ah-zoo-KEH-tah-ee dehs" }
    ],
    grammar: "〜はどこですか？ (wa doko desu ka) = 'Where is [X]?' is one of your most powerful travel phrases. Slot in any place word: トイレ (toilet), ホテル (hotel), バス停 (bus stop).",
    culture: "Narita and Haneda both have excellent English signage. But learning the kanji for 出口 (exit) and 入口 (entrance) will make you faster than reading the English translations."
  },
  {
    day: 4,
    title: "Trains & IC Cards",
    titleNative: "電車とICカード",
    vocab: [
      { ja: "でんしゃ", en: "train", ipa: "densha", phonetic: "DEN-shah" },
      { ja: "えき", en: "station", ipa: "eki", phonetic: "EH-kee" },
      { ja: "ICカード", en: "IC card (prepaid train card)", ipa: "aishii kaːdo", phonetic: "eye-shee KAH-doh" },
      { ja: "かいさつ", en: "ticket gate / turnstile", ipa: "kaisatsu", phonetic: "kai-SAH-tsoo" },
      { ja: "しんかんせん", en: "bullet train", ipa: "shinkansen", phonetic: "shin-KAN-sen" },
      { ja: "〜いきのでんしゃ", en: "train going to [X]", ipa: "iki no densha", phonetic: "ee-kee no DEN-shah" },
      { ja: "じゅうでん / チャージ", en: "recharge (IC card)", ipa: "tʃaːdʑi", phonetic: "CHAH-jee" },
      { ja: "のりかえ", en: "transfer (between lines)", ipa: "norikae", phonetic: "no-ree-KAH-eh" }
    ],
    phrases: [
      { ja: "〜まであといくらですか？", en: "How much to [X]?", phonetic: "[X] mah-deh ah-TOH ee-KOO-rah dehs-kah" },
      { ja: "このでんしゃは〜にとまりますか？", en: "Does this train stop at [X]?", phonetic: "ko-no DEN-shah wah [X] nee toh-mah-ree-mahs-kah" },
      { ja: "つぎはなんえきですか？", en: "What's the next station?", phonetic: "tsoo-gee wah nan-EH-kee dehs-kah" },
      { ja: "チャージをおねがいします。", en: "I'd like to recharge my card.", phonetic: "CHAH-jee oh oh-neh-gah-ee-shmahs" },
      { ja: "しゅうてんはどこですか？", en: "Where is the last stop?", phonetic: "shoo-TEN wah DOH-koh dehs-kah" }
    ],
    grammar: "まで (made) = 'to / until.' Attach to a destination: 東京まで (Tōkyō made) = 'to Tokyo.' Super useful for tickets and directions.",
    culture: "Get a Suica or Pasmo IC card at any major station — it works on trains, buses, and even at convenience stores. Top it up with cash. This is the single best thing you can do on day one in Japan."
  },
  {
    day: 5,
    title: "Hotel Check-In",
    scene: "A business hotel in Shinjuku — you've survived the airport and the trains and now just want your room.",
    titleNative: "ホテルのチェックイン",
    vocab: [
      { ja: "ホテル", en: "hotel", ipa: "hoteru", phonetic: "hoh-TEH-roo" },
      { ja: "よやく", en: "reservation", ipa: "jojaku", phonetic: "yo-YAH-koo" },
      { ja: "チェックイン / チェックアウト", en: "check-in / check-out", ipa: "chekkuin / chekkuauto", phonetic: "CHEK-koo-een / CHEK-koo-ah-oo-toh" },
      { ja: "へや", en: "room", ipa: "heja", phonetic: "HEH-yah" },
      { ja: "かぎ", en: "key", ipa: "kaɡi", phonetic: "kah-GEE" },
      { ja: "〜かい", en: "floor (e.g. 3かい = 3rd floor)", ipa: "kai", phonetic: "kai" },
      { ja: "タオル", en: "towel", ipa: "taoɾu", phonetic: "tah-OH-roo" },
      { ja: "おふろ / シャワー", en: "bath / shower", ipa: "ofuɾo / shawaː", phonetic: "oh-FOO-roh / SHAH-wah" }
    ],
    phrases: [
      { ja: "よやくしています。[name]です。", phonetic: "yo-YAH-koo shee-teh-ee-mahs. [name] dehs", en: "I have a reservation. I'm [name].", phonetic: "yo-YAH-koo shee-teh-ee-mahs. [name] dehs." },
      { ja: "なんじにチェックアウトですか？", en: "What time is check-out?", phonetic: "nan-JEE nee CHEK-koo-ah-oo-toh dehs-kah" },
      { ja: "もうふをもうひとつもらえますか？", en: "Could I have one more blanket?", phonetic: "moh-foo oh moh-hee-TOH-tsoo mo-rah-eh-mahs-kah" },
      { ja: "Wi-Fiのパスワードはなんですか？", en: "What's the Wi-Fi password?", phonetic: "wai-fai no pah-soo-WAH-doh wah nan-dehs-kah" },
      { ja: "ちかくのコンビニはどこですか？", en: "Where's the nearest convenience store?", phonetic: "chee-KAH-koo no kon-BEE-nee wah DOH-koh dehs-kah" }
    ],
    grammar: "もらえますか (moraemasu ka) = 'Can I receive / Could I have?' It's a polite way to request anything. もらえますか on its own (with a gesture) goes a long way.",
    culture: "Many Japanese hotels, especially business hotels, have slippers and a yukata (cotton robe) in the room. Use the slippers inside — shoes off at the entrance is always the rule."
  },
  {
    day: 6,
    title: "Convenience Store (Konbini)",
    titleNative: "コンビニ",
    vocab: [
      { ja: "コンビニ", en: "convenience store", ipa: "konbini", phonetic: "kon-BEE-nee" },
      { ja: "おにぎり", en: "rice ball", ipa: "oniɡiri", phonetic: "oh-nee-GEE-ree" },
      { ja: "べんとう", en: "boxed meal / bento", ipa: "bentoː", phonetic: "ben-TOH" },
      { ja: "あたためますか？", en: "Shall I heat it up? (staff asks this)", ipa: "atatamemasu ka", phonetic: "ah-tah-tah-meh-mahs-kah" },
      { ja: "はし", en: "chopsticks", ipa: "hashi", phonetic: "hah-SHEE" },
      { ja: "レジぶくろ", en: "shopping bag (at register)", ipa: "reʑi bukuro", phonetic: "reh-jee boo-KOO-roh" },
      { ja: "ポイントカード", en: "points card (loyalty card)", ipa: "pointo kaːdo", phonetic: "POY-n-toh KAH-doh" },
      { ja: "げんきん / カード", en: "cash / card payment", ipa: "ɡenkin / kaːdo", phonetic: "gen-KEEN / KAH-doh" }
    ],
    phrases: [
      { ja: "はい、おねがいします。", en: "Yes please. (to any staff question)", phonetic: "hah-ee, oh-neh-gah-ee-shmahs" },
      { ja: "いいです。/だいじょうぶです。", en: "No thank you. / It's fine.", phonetic: "ee-eh dehs / dah-ee-joh-boo dehs" },
      { ja: "カードでもいいですか？", phonetic: "KAH-doh deh moh ee dehs-kah", en: "Is card payment okay?", phonetic: "KAH-doh deh moh ee-eh dehs-kah" },
      { ja: "レシートをください。", en: "Please give me a receipt.", phonetic: "reh-SHEE-toh oh koo-dah-sah-ee" },
      { ja: "ポイントカードはないです。", en: "I don't have a points card.", phonetic: "POY-n-toh KAH-doh wah nah-ee dehs" }
    ],
    grammar: "ください (kudasai) = 'please give me.' Attach to any item: コーヒーをください (koohii o kudasai) = 'Coffee, please.' It's your go-to ordering word.",
    culture: "Japanese convenience stores (7-Eleven, FamilyMart, Lawson) are legitimately excellent. Fresh food restocked twice daily. ATMs in 7-Eleven accept foreign cards. Coffee machines are genuinely good. You will live in them."
  },
  {
    day: 7,
    title: "Ordering Food",
    titleNative: "食事の注文",
    vocab: [
      { ja: "メニュー", en: "menu", ipa: "menjuː", phonetic: "meh-NYOO" },
      { ja: "ちゅうもん", en: "order", ipa: "tʃuːmon", phonetic: "CHOO-mon" },
      { ja: "おすすめ", en: "recommendation", ipa: "osusume", phonetic: "oh-soo-SOO-meh" },
      { ja: "からい / あまい", en: "spicy / sweet", ipa: "karai / amai", phonetic: "kah-RYE / ah-MY" },
      { ja: "アレルギー", en: "allergy", ipa: "areruɡiː", phonetic: "ah-reh-roo-GEE" },
      { ja: "〜なし", en: "without [X] (e.g. ねぎなし = no green onion)", ipa: "nashi", phonetic: "nah-SHEE" },
      { ja: "おかわり", en: "refill / second helping", ipa: "okawari", phonetic: "oh-kah-WAH-ree" },
      { ja: "おかんじょう", en: "the bill / check", ipa: "okandʑoː", phonetic: "oh-kan-JOH" }
    ],
    phrases: [
      { ja: "〜をひとつください。", en: "One [X], please.", phonetic: "[X] oh hee-TOH-tsoo koo-dah-sah-ee" },
      { ja: "おすすめはなんですか？", en: "What do you recommend?", phonetic: "oh-soo-SOO-meh wah nan-dehs-kah" },
      { ja: "これとおなじものをください。", en: "I'll have the same as this.", phonetic: "ko-reh toh oh-nah-jee mo-no oh koo-dah-sah-ee" },
      { ja: "すみません、おかんじょうをおねがいします。", en: "Excuse me, the bill please.", phonetic: "soo-mee-MAH-sen, oh-kan-JOH oh oh-neh-gah-ee-shmahs" },
      { ja: "〜アレルギーがあります。", en: "I have a [X] allergy.", phonetic: "[X] ah-reh-roo-GEE gah ah-ree-mahs" }
    ],
    grammar: "〜なし (nashi) = 'without.' ねぎなし = no spring onion. タマネギなし = no onion. Just say the ingredient + なし and most kitchens will understand.",
    culture: "Many restaurants have plastic food displays or photo menus — point freely, no shame. Tipping is not done in Japan and can actually cause confusion or mild offense. The service is just that good by default."
  },
  {
    day: 8,
    title: "Sushi Bar",
    titleNative: "すし屋で",
    vocab: [
      { ja: "すし", en: "sushi", ipa: "sushi", phonetic: "SOO-shee" },
      { ja: "にぎり", en: "hand-pressed sushi (rice + topping)", ipa: "niɡiri", phonetic: "nee-GEE-ree" },
      { ja: "まぐろ", en: "tuna", ipa: "maɡuro", phonetic: "mah-GOO-roh" },
      { ja: "さけ", en: "salmon", ipa: "sake", phonetic: "sah-KEH" },
      { ja: "えび", en: "shrimp / prawn", ipa: "ebi", phonetic: "eh-BEE" },
      { ja: "たまご", en: "egg (tamago nigiri)", ipa: "tamaɡo", phonetic: "tah-mah-GOH" },
      { ja: "おあいそ", en: "the bill (sushi-bar term)", ipa: "oaiso", phonetic: "oh-ah-EE-soh" },
      { ja: "あがり", en: "hot green tea (sushi bar term for お茶)", ipa: "aɡari", phonetic: "ah-GAH-ree" }
    ],
    phrases: [
      { ja: "おまかせでおねがいします。", en: "Chef's choice, please.", phonetic: "oh-mah-KAH-seh deh oh-neh-gah-ee-shmahs" },
      { ja: "〜をにかんください。", en: "Two pieces of [X], please.", phonetic: "[X] oh nee-KAN koo-dah-sah-ee" },
      { ja: "しょうゆはありますか？", en: "Do you have soy sauce?", phonetic: "shoh-YOO wah ah-ree-mahs-kah" },
      { ja: "このネタはなんですか？", en: "What is this topping?", phonetic: "ko-no NEH-tah wah nan-dehs-kah" },
      { ja: "とてもおいしいです！", en: "This is very delicious!", phonetic: "toh-TEH-moh oh-ee-SHEE dehs" }
    ],
    grammar: "おまかせ (omakase) = 'I leave it to you.' At any sushi bar, saying おまかせでおねがいします hands the meal over to the chef — a beautiful option if you trust them (you should).",
    culture: "At a conveyor-belt (回転寿司, kaiten-zushi) restaurant, plates are color-coded by price. Grab what you want; staff tally your stack at the end. The wasabi is often under the fish — don't add more unless it's served on the side."
  },
  {
    day: 9,
    title: "Ramen Shop",
    titleNative: "ラーメン屋で",
    vocab: [
      { ja: "ラーメン", en: "ramen (noodle soup)", ipa: "raːmen", phonetic: "RAH-men" },
      { ja: "しょうゆ / しお / みそ / とんこつ", en: "soy / salt / miso / pork bone broth", ipa: "shoːju / shio / miso / tonkotsu", phonetic: "shoh-YOO / SHEE-oh / MEE-soh / ton-KOT-soo" },
      { ja: "かたさ", en: "noodle firmness", ipa: "katasa", phonetic: "kah-TAH-sah" },
      { ja: "かため / やわらかめ", en: "firm / soft (noodles)", ipa: "katame / jawarakame", phonetic: "kah-TAH-meh / yah-wah-RAH-kah-meh" },
      { ja: "こってり / あっさり", en: "rich/heavy broth / light broth", ipa: "kotteri / assari", phonetic: "kot-TEH-ree / ahs-SAH-ree" },
      { ja: "ちゃーしゅー", en: "chashu (braised pork)", ipa: "tʃaːʃuː", phonetic: "CHAH-shoo" },
      { ja: "たまご", en: "soft-boiled egg (topping)", ipa: "tamaɡo", phonetic: "tah-mah-GOH" },
      { ja: "けん食券", en: "meal ticket (vending machine)", ipa: "shokken", phonetic: "SHOK-ken" }
    ],
    phrases: [
      { ja: "しょうゆラーメンをひとつください。", en: "One soy sauce ramen, please.", phonetic: "shoh-YOO RAH-men oh hee-TOH-tsoo koo-dah-sah-ee" },
      { ja: "めんのかたさはかためでおねがいします。", en: "Firm noodles, please.", phonetic: "men no kah-TAH-sah wah kah-TAH-meh deh oh-neh-gah-ee-shmahs" },
      { ja: "からさはふつうでおねがいします。", en: "Regular spice level, please.", phonetic: "kah-RAH-sah wah foo-TSOO deh oh-neh-gah-ee-shmahs" },
      { ja: "かえだまをください。", en: "Extra noodles, please.", phonetic: "kah-eh-DAH-mah oh koo-dah-sah-ee" },
      { ja: "おいしかったです！", en: "That was delicious!", phonetic: "oh-ee-SHEE-kaht-tah dehs" }
    ],
    grammar: "〜でおねがいします (de onegai shimasu) = 'please make it [X]' or 'please do it [X] way.' Use to specify how you want something prepared: firm, mild, extra, etc.",
    culture: "Many ramen shops use a vending machine at the entrance. Buy your ticket (食券) before sitting. Some have English buttons; if not, look at photos. Slurping is not just acceptable — it's how you show appreciation."
  },
  {
    day: 10,
    title: "Asking Directions",
    titleNative: "道を聞く",
    vocab: [
      { ja: "みち", en: "road / way / direction", ipa: "michi", phonetic: "mee-CHEE" },
      { ja: "まっすぐ", en: "straight ahead", ipa: "massuɡu", phonetic: "mahs-SOO-goo" },
      { ja: "みぎ / ひだり", en: "right / left", ipa: "miɡi / hidari", phonetic: "mee-GEE / hee-DAH-ree" },
      { ja: "まがる", en: "to turn", ipa: "maɡaru", phonetic: "mah-GAH-roo" },
      { ja: "しんごう", en: "traffic light", ipa: "shiŋɡoː", phonetic: "shin-GOH" },
      { ja: "かど", en: "corner", ipa: "kado", phonetic: "kah-DOH" },
      { ja: "ちかい / とおい", en: "near / far", ipa: "chikai / toːi", phonetic: "chee-KAH-ee / TOH-ee" },
      { ja: "〜ふんあるいて", en: "[X] minutes on foot", ipa: "fun aruite", phonetic: "foon ah-ROO-ee-teh" }
    ],
    phrases: [
      { ja: "〜はどこですか？", en: "Where is [X]?", phonetic: "[X] wah DOH-koh dehs-kah" },
      { ja: "ここはどこですか？", en: "Where am I? (literally: where is here?)", phonetic: "ko-ko wah DOH-koh dehs-kah" },
      { ja: "まっすぐいって、みぎにまがってください。", en: "Go straight, then turn right.", phonetic: "mahs-SOO-goo ee-teh, mee-GEE nee mah-gaht-teh koo-dah-sah-ee" },
      { ja: "ちずをかいてもらえますか？", en: "Could you draw me a map?", phonetic: "chee-ZOO oh kai-teh mo-rah-eh-mahs-kah" },
      { ja: "Googleマップでみせてもらえますか？", en: "Could you show me on Google Maps?", phonetic: "Google mahhpu deh mee-seh-teh mo-rah-eh-mahs-kah" }
    ],
    grammar: "〜て、〜てください (te, te kudasai) links instructions: いって、まがってください = 'Go and then turn.' The て form chains actions sequentially — an incredibly useful structure.",
    culture: "Japanese people are extremely helpful to lost tourists. If someone seems unsure, they may actually walk you to your destination. Bowing slightly when you ask and again when you receive help is always appreciated."
  },
  {
    day: 11,
    title: "Shopping",
    titleNative: "買い物",
    vocab: [
      { ja: "みせ / ショップ", en: "shop / store", ipa: "mise / shoppu", phonetic: "mee-SEH / SHOP-poo" },
      { ja: "いくら", en: "how much", ipa: "ikura", phonetic: "ee-KOO-rah" },
      { ja: "たかい / やすい", en: "expensive / cheap", ipa: "takai / jasui", phonetic: "tah-KAH-ee / yah-SOO-ee" },
      { ja: "サイズ", en: "size", ipa: "saizu", phonetic: "SIGH-zoo" },
      { ja: "いろ", en: "color", ipa: "iro", phonetic: "ee-ROH" },
      { ja: "べつのいろ", en: "a different color", ipa: "betsu no iro", phonetic: "bet-SOO no ee-ROH" },
      { ja: "きにいりました", en: "I like it / I'll take it", ipa: "ki ni irimashita", phonetic: "kee-nee-ee-ree-MASH-tah" },
      { ja: "まけてもらえますか？", en: "Can you give me a discount?", ipa: "makete moraemasu ka", phonetic: "mah-KEH-teh mo-rah-eh-mahs-kah" }
    ],
    phrases: [
      { ja: "これをください。", en: "I'll take this.", phonetic: "ko-reh oh koo-dah-sah-ee" },
      { ja: "べつのサイズはありますか？", en: "Do you have a different size?", phonetic: "bet-SOO no SIGH-zoo wah ah-ree-mahs-kah" },
      { ja: "みるだけです。", en: "I'm just looking.", phonetic: "mee-roo DAH-keh dehs" },
      { ja: "プレゼントようにつつんでもらえますか？", en: "Could you gift wrap it?", phonetic: "poo-reh-ZEN-toh yoh nee tsoo-tsoon-deh mo-rah-eh-mahs-kah" },
      { ja: "めんぜいはできますか？", en: "Is tax-free available?", phonetic: "men-ZEH wah deh-kee-mahs-kah" }
    ],
    grammar: "だけ (dake) = 'only / just.' みるだけ = 'just looking.' すこしだけ = 'just a little.' It softens requests and expectations cleanly.",
    culture: "Japan has tax-free shopping (免税) for tourists on purchases over ¥5,000 at participating stores. Bring your passport. Department stores wrap gifts extraordinarily well — the wrapping itself is considered part of the gift."
  },
  {
    day: 12,
    title: "Temples & Shrines",
    titleNative: "お寺と神社",
    vocab: [
      { ja: "おてら", en: "Buddhist temple", ipa: "otera", phonetic: "oh-TEH-rah" },
      { ja: "じんじゃ", en: "Shinto shrine", ipa: "dʑindʑa", phonetic: "jin-JAH" },
      { ja: "とりい", en: "shrine gate (torii)", ipa: "torii", phonetic: "toh-REE-ee" },
      { ja: "おまいり", en: "prayer / worship visit", ipa: "omairi", phonetic: "oh-MY-ree" },
      { ja: "おみくじ", en: "fortune slip", ipa: "omikudʑi", phonetic: "oh-mee-KOO-jee" },
      { ja: "おさいせん", en: "offering box / coin offering", ipa: "osaisen", phonetic: "oh-sah-ee-SEN" },
      { ja: "てみずや", en: "purification water basin", ipa: "temizuja", phonetic: "teh-mee-ZOO-yah" },
      { ja: "しゃしんをとっていいですか？", en: "May I take a photo?", ipa: "shashin o totte ii desu ka", phonetic: "shah-SHIN oh tot-teh ee dehs-kah" }
    ],
    phrases: [
      { ja: "なんじからなんじまでですか？", en: "What are the opening hours?", phonetic: "nan-JEE kah-rah nan-JEE mah-deh dehs-kah" },
      { ja: "にゅうじょうりょうはいくらですか？", en: "How much is the entrance fee?", phonetic: "nyoo-JOH-ryoh wah ee-KOO-rah dehs-kah" },
      { ja: "しゃしんをとっていいですか？", en: "May I take a photo here?", phonetic: "shah-SHIN oh tot-teh ee dehs-kah" },
      { ja: "ここはどんなおてらですか？", en: "What kind of temple is this?", phonetic: "ko-ko wah don-nah oh-TEH-rah dehs-kah" },
      { ja: "おみやげをかいたいです。", en: "I'd like to buy a souvenir.", phonetic: "oh-mee-YAH-geh oh kai-tah-ee dehs" }
    ],
    grammar: "〜ていいですか (te ii desu ka) = 'Is it okay to [do X]?' Extremely useful for checking permissions politely: のんでいいですか？ = 'Is it okay to drink here?'",
    culture: "At a shrine, toss a coin into the offering box, bow twice, clap twice, make a wish, then bow once more. At temples, no clapping. Dress modestly. The two are often confused — Shinto shrines have torii gates; Buddhist temples often have incense."
  },
  {
    day: 13,
    title: "At a Department Store",
    titleNative: "デパートで",
    vocab: [
      { ja: "デパート", en: "department store", ipa: "depaːto", phonetic: "deh-PAH-toh" },
      { ja: "ちかしょく", en: "basement food hall (depachika)", ipa: "chikashoku", phonetic: "chee-kah-SHOH-koo" },
      { ja: "うりば", en: "sales floor / department", ipa: "uriba", phonetic: "oo-ree-BAH" },
      { ja: "エレベーター / エスカレーター", en: "elevator / escalator", ipa: "erebeːtaː / esukareːtaː", phonetic: "eh-reh-BEH-tah / ehs-kah-REH-tah" },
      { ja: "ふく", en: "clothing", ipa: "fuku", phonetic: "FOO-koo" },
      { ja: "ほうせき", en: "jewelry", ipa: "hoːseki", phonetic: "hoh-SEH-kee" },
      { ja: "わりびき", en: "discount / sale", ipa: "waribiki", phonetic: "wah-ree-BEE-kee" },
      { ja: "レシート", en: "receipt", ipa: "reshiːto", phonetic: "reh-SHEE-toh" }
    ],
    phrases: [
      { ja: "〜うりばはなんかいですか？", en: "What floor is the [X] department?", phonetic: "[X] oo-ree-BAH wah nan-KAH-ee dehs-kah" },
      { ja: "これをかえりてもいいですか？", en: "May I return this?", phonetic: "ko-reh oh kah-eh-ree-teh moh ee dehs-kah" },
      { ja: "このフロアのインフォメーションはどこですか？", en: "Where is information on this floor?", phonetic: "ko-no foo-ROH-ah no een-foh-meh-SHON wah DOH-koh dehs-kah" },
      { ja: "セールはいつまでですか？", en: "When does the sale end?", phonetic: "SEH-roo wah ee-tsoo-mah-deh dehs-kah" },
      { ja: "ほかのいろはありますか？", en: "Do you have another color?", phonetic: "hoh-KAH no ee-ROH wah ah-ree-mahs-kah" }
    ],
    grammar: "何階 (nankai) = 'what floor?' The counter 〜かい (kai) works for all floors. Store directories are usually bilingual in Tokyo — but knowing 地下 (chika = basement) gets you to the best food.",
    culture: "Japanese depachika (basement food halls) are world-class. Think perfectly packaged wagashi sweets, ready-made bento, fresh sashimi, and artisan chocolates. Buy omiyage (souvenirs) here — they're beautifully presented and expected when you return home."
  },
  {
    day: 14,
    title: "Emergencies & Getting Help",
    titleNative: "緊急時と助けを求める",
    vocab: [
      { ja: "たすけて！", en: "Help!", ipa: "tasukete", phonetic: "tah-soo-KEH-teh" },
      { ja: "きゅうきゅうしゃ", en: "ambulance", ipa: "kjuːkjuːsha", phonetic: "kyoo-KYOO-shah" },
      { ja: "けいさつ", en: "police", ipa: "keːsatsu", phonetic: "keh-ee-SAH-tsoo" },
      { ja: "びょういん", en: "hospital", ipa: "bjoːin", phonetic: "byoh-EEN" },
      { ja: "くすりや / やっきょく", en: "pharmacy / drugstore", ipa: "kusurija / jakkjoku", phonetic: "koo-soo-REE-yah / yahk-KYO-koo" },
      { ja: "いたい", en: "it hurts / painful", ipa: "itai", phonetic: "ee-TYE" },
      { ja: "なくした", en: "I lost [X] / it's lost", ipa: "nakushita", phonetic: "nah-koo-SHEE-tah" },
      { ja: "パスポートをなくしました。", en: "I've lost my passport.", ipa: "pasupoːto o nakushimashita", phonetic: "pah-soo-POH-toh oh nah-koo-shee-MASH-tah" }
    ],
    phrases: [
      { ja: "119番におねがいします。", en: "Please call 119. (ambulance/fire)", phonetic: "hyah-koo-joo-KYOO-ban oh oh-neh-gah-ee-shmahs" },
      { ja: "110番におねがいします。", en: "Please call 110. (police)", phonetic: "hyah-koo-JOO-ban oh oh-neh-gah-ee-shmahs" },
      { ja: "えいごをはなせるひとはいますか？", en: "Is there someone who speaks English?", phonetic: "eh-ee-goh oh hah-nah-seh-roo hee-toh wah ee-mahs-kah" },
      { ja: "ここがいたいです。", en: "It hurts here.", phonetic: "ko-ko gah ee-TYE dehs" },
      { ja: "たいしかんはどこですか？", en: "Where is the embassy?", phonetic: "tie-SHEE-kahn wah DOH-koh dehs-kah" }
    ],
    grammar: "〜をなくしました (o nakushimashita) = 'I've lost [X].' Swap in: さいふ (wallet), スマホ (smartphone), かぎ (key). Police boxes (交番, koban) are everywhere in Japan and officers are unfailingly helpful.",
    culture: "Japan is one of the safest countries in the world. Lost wallets are routinely handed in. If you lose something on a train, contact the lost and found at the last station on the line — recovery rates are remarkably high."
  },
  {
    day: 15,
    title: "Weather & Seasons",
    titleNative: "天気と季節",
    vocab: [
      { ja: "てんき", en: "weather", ipa: "tenki", phonetic: "TEN-kee" },
      { ja: "あつい / さむい", en: "hot / cold", ipa: "atsui / samui", phonetic: "ah-TSOO-ee / sah-MOO-ee" },
      { ja: "あめ / ゆき", en: "rain / snow", ipa: "ame / juki", phonetic: "ah-MEH / yoo-KEE" },
      { ja: "はれ / くもり", en: "sunny / cloudy", ipa: "hare / kumori", phonetic: "hah-REH / koo-MOH-ree" },
      { ja: "たいふう", en: "typhoon", ipa: "taiɸuː", phonetic: "tie-FOO" },
      { ja: "はる / なつ / あき / ふゆ", en: "spring / summer / autumn / winter", ipa: "haru / natsu / aki / ɸuju", phonetic: "hah-ROO / nah-TSOO / ah-KEE / foo-YOO" },
      { ja: "かさ", en: "umbrella", ipa: "kasa", phonetic: "kah-SAH" },
      { ja: "むしあつい", en: "hot and humid", ipa: "mushiatsui", phonetic: "moo-shee-AH-tsoo-ee" }
    ],
    phrases: [
      { ja: "きょうのてんきはどうですか？", en: "What's the weather like today?", phonetic: "kyoh no ten-KEE wah DOH dehs-kah" },
      { ja: "あめがふりそうです。", en: "It looks like it's going to rain.", phonetic: "ah-MEH gah foo-ree-SOH dehs" },
      { ja: "かさをかしてもらえますか？", en: "Could I borrow an umbrella?", phonetic: "kah-SAH oh kah-shee-teh mo-rah-eh-mahs-kah" },
      { ja: "たいふうはいつきますか？", en: "When will the typhoon arrive?", phonetic: "tie-FOO wah ee-TSOO kee-mahs-kah" },
      { ja: "さくらはまださいていますか？", en: "Are the cherry blossoms still in bloom?", phonetic: "sah-KOO-rah wah mah-dah sah-ee-teh-ee-mahs-kah" }
    ],
    grammar: "〜そうです (sō desu) = 'it seems / it looks like.' あめがふりそう = 'looks like rain.' さむそう = 'looks cold.' This form is widely useful for describing apparent conditions.",
    culture: "Japan's rainy season (梅雨, tsuyu) runs June–July. Late July through August is scorching and humid — plan around this. Cherry blossoms (late March–April) and autumn foliage (late October–November) are the peak travel seasons."
  },
  {
    day: 16,
    title: "Polite Phrases & Social Japanese",
    titleNative: "丁寧な言葉遣い",
    vocab: [
      { ja: "おねがいします", en: "please / I request (polite)", ipa: "oneɡai shimasu", phonetic: "oh-neh-gah-ee-shmahs" },
      { ja: "どうぞ", en: "please (offering) / go ahead / here you go", ipa: "doːzo", phonetic: "DOH-zoh" },
      { ja: "どうも", en: "thanks (casual) / indeed", ipa: "doːmo", phonetic: "DOH-moh" },
      { ja: "もうしわけございません", en: "I'm terribly sorry (very formal)", ipa: "moːshiwake ɡozaimasen", phonetic: "moh-shee-WAH-keh go-zah-ee-mah-sen" },
      { ja: "おじゃまします", en: "excuse me for intruding (entering someone's home/space)", ipa: "odʑama shimasu", phonetic: "oh-jah-mah-shmahs" },
      { ja: "いただきます", en: "said before eating (gratitude for food)", ipa: "itadakimasu", phonetic: "ee-tah-dah-kee-MAHS" },
      { ja: "ごちそうさまでした", en: "said after eating (the meal was a feast)", ipa: "ɡochisōsamadeshita", phonetic: "go-chee-SOH-sah-mah-desh-tah" },
      { ja: "きをつけて", en: "take care / be careful", ipa: "ki o tsukete", phonetic: "kee oh tsoo-KEH-teh" }
    ],
    phrases: [
      { ja: "いただきます！", en: "Let's eat! (before meals)", phonetic: "ee-tah-dah-kee-MAHS" },
      { ja: "ごちそうさまでした！", en: "Thank you for the meal! (after meals)", phonetic: "go-chee-SOH-sah-mah-desh-tah" },
      { ja: "おさきにしつれいします。", en: "Excuse me for leaving before you.", phonetic: "oh-sah-kee nee shee-tsoo-REH-ee-shmahs" },
      { ja: "ほんとうにありがとうございました。", en: "Thank you so very much.", phonetic: "hon-TOH nee ah-ree-GAH-toh go-zah-ee-mash-tah" },
      { ja: "またいつかおあいしましょう。", en: "Let's meet again sometime.", phonetic: "mah-tah ee-tsoo-kah oh-ah-ee-shee-mah-SHOH" }
    ],
    grammar: "いただきます / ごちそうさまでした are not optional — they're social rituals. Saying them marks you as someone who understands Japanese culture, and people genuinely appreciate it.",
    culture: "Japanese social etiquette is layered. The key: never be loud in public transport, queue properly, don't eat while walking (except at festivals), and never put rubbish in someone else's bin without permission."
  },
  {
    day: 17,
    title: "Onsen & Ryokan",
    titleNative: "温泉と旅館",
    vocab: [
      { ja: "おんせん", en: "hot spring / hot spring bath", ipa: "onsen", phonetic: "ON-sen" },
      { ja: "りょかん", en: "traditional Japanese inn", ipa: "rjokan", phonetic: "ryoh-KAHN" },
      { ja: "ゆかた", en: "cotton kimono (provided at ryokan)", ipa: "jukata", phonetic: "yoo-KAH-tah" },
      { ja: "だいよくじょう", en: "communal bath area", ipa: "daiɣokuʑoː", phonetic: "dah-ee-YOH-koo-joh" },
      { ja: "かいせき", en: "kaiseki (multi-course traditional dinner)", ipa: "kaiseki", phonetic: "kai-SEH-kee" },
      { ja: "たたみ", en: "tatami (straw mat floor)", ipa: "tatami", phonetic: "tah-TAH-mee" },
      { ja: "いれずみ / タトゥー", en: "tattoo (note: often prohibited at onsen)", ipa: "irezumi / tatouː", phonetic: "ee-reh-ZOO-mee / tah-TOO" },
      { ja: "もみじ", en: "autumn maple leaves", ipa: "momidʑi", phonetic: "mo-mee-JEE" }
    ],
    phrases: [
      { ja: "タトゥーがあってもはいれますか？", en: "Can I enter with a tattoo?", phonetic: "tah-TOO gah aht-teh moh hah-ee-reh-mahs-kah" },
      { ja: "おんせんのりようじかんはなんじですか？", en: "What are the onsen hours?", phonetic: "ON-sen no ree-YOH-jee-kahn wah nan-JEE dehs-kah" },
      { ja: "ゆかたのつかいかたをおしえてもらえますか？", phonetic: "yoo-KAH-tah no tsoo-kah-ee-KAH-tah oh oh-shee-eh-teh mo-rah-eh-mahs-kah", en: "Could you show me how to wear the yukata?", phonetic: "yoo-KAH-tah no tsoo-kah-ee-KAH-tah oh oh-shee-eh-teh mo-rah-eh-mahs-kah" },
      { ja: "かいせきのじかんはなんじですか？", en: "What time is kaiseki dinner?", phonetic: "kai-SEH-kee no jee-KAHN wah nan-JEE dehs-kah" },
      { ja: "ここはとてもきもちいいです。", en: "This feels wonderful.", phonetic: "ko-ko wah toh-TEH-moh kee-moh-chee-ee-ee dehs" }
    ],
    grammar: "〜かたをおしえてください (kata o oshiete kudasai) = 'Please teach me how to [do X].' Useful beyond yukata: かえりかた (how to get back), つかいかた (how to use).",
    culture: "Onsen etiquette: wash thoroughly at the shower station before entering the communal bath. No swimsuits — you go in naked. Tattoos are banned at most onsen; a few are now tattoo-friendly, so check ahead."
  },
  {
    day: 18,
    title: "Making Reservations",
    titleNative: "予約する",
    vocab: [
      { ja: "よやく", en: "reservation / booking", ipa: "jojaku", phonetic: "yo-YAH-koo" },
      { ja: "〜にん", en: "[X] people (counter for persons)", ipa: "nin", phonetic: "neen" },
      { ja: "〜はく", en: "[X] nights (counter for overnight stays)", ipa: "haku", phonetic: "hah-koo" },
      { ja: "きつえんせき / きんえんせき", en: "smoking / non-smoking seat", ipa: "kitsuen seki / kinʔen seki", phonetic: "kee-tsoo-EN-seh-kee / keen-EN-seh-kee" },
      { ja: "まどぎわ / つうろがわ", en: "window seat / aisle seat", ipa: "madoɡiwa / tsuːroɡawa", phonetic: "mah-doh-GEE-wah / tsoo-ROH-gah-wah" },
      { ja: "かくにん", en: "confirmation", ipa: "kakunin", phonetic: "kah-koo-NEEN" },
      { ja: "キャンセル", en: "cancellation", ipa: "kjanseru", phonetic: "KYAN-seh-roo" },
      { ja: "まんしつ", en: "fully booked / full", ipa: "manshitsu", phonetic: "man-SHEE-tsoo" }
    ],
    phrases: [
      { ja: "〜にんでよやくしたいのですが。", en: "I'd like to make a reservation for [X] people.", phonetic: "[X] neen deh yo-YAH-koo shee-tah-ee no dehs-gah" },
      { ja: "〜がつ〜にちに〜はくおねがいします。", en: "I'd like [X] nights from [month/date].", phonetic: "[month]-gah-tsoo [date]-nee-chee nee [X] hah-koo oh-neh-gah-ee-shmahs" },
      { ja: "きんえんせきでおねがいします。", en: "Non-smoking, please.", phonetic: "keen-EN-seh-kee deh oh-neh-gah-ee-shmahs" },
      { ja: "よやくをかくにんしたいです。", en: "I'd like to confirm my reservation.", phonetic: "yo-YAH-koo oh kah-koo-neen-shee-tah-ee dehs" },
      { ja: "よやくをキャンセルしたいのですが。", en: "I'd like to cancel my reservation.", phonetic: "yo-YAH-koo oh KYAN-seh-roo shee-tah-ee no dehs-gah" }
    ],
    grammar: "〜のですが (no desu ga) softens a request — it implies 'the situation is that I want to...' and sounds more naturally polite than stating a desire directly. Use it whenever you're asking for something.",
    culture: "Book popular restaurants and ryokans well in advance. Some ramen shops and sushi counters only take reservations via Japanese-language phone or Tabelog — use Google Translate's camera or ask hotel staff to help."
  },
  {
    day: 19,
    title: "Izakaya (Japanese Pub)",
    titleNative: "居酒屋で",
    vocab: [
      { ja: "いざかや", en: "izakaya (Japanese pub/tavern)", ipa: "izakaja", phonetic: "ee-zah-KAH-yah" },
      { ja: "なまびーる", en: "draft beer", ipa: "namabiru", phonetic: "nah-mah-BEE-roo" },
      { ja: "にほんしゅ / さけ", en: "Japanese sake (rice wine)", ipa: "nihonshu / sake", phonetic: "nee-hon-SHOO / sah-KEH" },
      { ja: "しょうちゅう", en: "shochu (distilled spirit)", ipa: "shoːtʃuː", phonetic: "shoh-CHOO" },
      { ja: "おつまみ", en: "bar snacks / nibbles", ipa: "otsumami", phonetic: "oh-tsoo-MAH-mee" },
      { ja: "やきとり", en: "grilled skewers", ipa: "jakitori", phonetic: "yah-kee-TOH-ree" },
      { ja: "かんぱい！", phonetic: "KAHM-pai", en: "Cheers!", ipa: "kampai", phonetic: "KAHM-pai" },
      { ja: "のみほうだい", en: "all-you-can-drink", ipa: "nomihōdai", phonetic: "no-mee-HOH-dah-ee" }
    ],
    phrases: [
      { ja: "とりあえず、なまをひとつ！", en: "For starters, one draft beer!", phonetic: "toh-ree-ah-EH-zoo, nah-mah oh hee-TOH-tsoo" },
      { ja: "かんぱい！", en: "Cheers!", phonetic: "KAHM-pai" },
      { ja: "おすすめのおつまみはなんですか？", en: "What snacks do you recommend?", phonetic: "oh-soo-SOO-meh no oh-tsoo-MAH-mee wah nan-dehs-kah" },
      { ja: "もういっぱいください。", en: "One more drink, please.", phonetic: "moh-ee-PAI koo-dah-sah-ee" },
      { ja: "わりかんにしましょう。", en: "Let's split the bill.", phonetic: "wah-ree-KAN nee shee-mah-SHOH" }
    ],
    grammar: "とりあえず (toriaezu) = 'for now / to start.' One of the most useful casual Japanese words. Japanese diners almost always order beer first with とりあえずビール (toriaezu biiru) while deciding on food.",
    culture: "Izakaya culture is central to Japanese social life. You order many small dishes to share over several hours. The mandatory お通し (otōshi) is a small appetizer you'll be charged for automatically — it's the cover charge in food form."
  },
  {
    day: 20,
    title: "Getting Around: Bus & Taxi",
    titleNative: "バスとタクシー",
    vocab: [
      { ja: "バス", en: "bus", ipa: "basu", phonetic: "bah-SOO" },
      { ja: "バスてい", en: "bus stop", ipa: "basutei", phonetic: "bah-soo-TEH" },
      { ja: "タクシー", en: "taxi", ipa: "takushiː", phonetic: "tah-koo-SHEE" },
      { ja: "うんてんしゅ", en: "driver", ipa: "untenshu", phonetic: "oon-TEN-shoo" },
      { ja: "メーター", en: "meter (taxi)", ipa: "meːtaː", phonetic: "MEH-tah" },
      { ja: "〜までいくらですか？", en: "How much to [X]?", ipa: "made ikura desu ka", phonetic: "[X] mah-deh ee-KOO-rah dehs-kah" },
      { ja: "とめてください。", en: "Please stop here.", ipa: "tomete kudasai", phonetic: "toh-MEH-teh koo-dah-sah-ee" },
      { ja: "じどうドア", en: "automatic door (taxi doors open/close automatically)", ipa: "dʑidoː doa", phonetic: "jee-DOH doh-ah" }
    ],
    phrases: [
      { ja: "〜までおねがいします。", en: "To [X], please.", phonetic: "[X] mah-deh oh-neh-gah-ee-shmahs" },
      { ja: "このじゅうしょにいってください。", en: "Please take me to this address.", phonetic: "ko-no JOO-shoh nee ee-teh koo-dah-sah-ee" },
      { ja: "ちかくでとめてください。", en: "Please stop nearby.", phonetic: "chee-KAH-koo deh toh-MEH-teh koo-dah-sah-ee" },
      { ja: "いそいでいます。", en: "I'm in a hurry.", phonetic: "ee-soh-ee-deh ee-mahs" },
      { ja: "タクシーをよんでもらえますか？", en: "Could you call a taxi for me?", phonetic: "tah-koo-SHEE oh yon-deh mo-rah-eh-mahs-kah" }
    ],
    grammar: "Taxi doors in Japan open and close automatically — do NOT touch them. Sit, say 〜までおねがいします, show the address on your phone if needed. It's one of the smoothest taxi experiences in the world.",
    culture: "Japanese taxis are immaculate, driven by uniformed drivers with white gloves. They're expensive but reliable. Uber exists in some cities but taxis are still dominant. Night buses between cities are a great budget option."
  },
  {
    day: 21,
    title: "Japanese Food Deep Dive",
    titleNative: "日本食をもっと深く",
    vocab: [
      { ja: "てんぷら", en: "tempura (light battered & fried)", ipa: "tempura", phonetic: "TEM-poo-rah" },
      { ja: "そば / うどん", en: "soba (buckwheat) / udon (thick wheat) noodles", ipa: "soba / udon", phonetic: "soh-BAH / oo-DON" },
      { ja: "おでん", en: "oden (slow-cooked stew, konbini staple)", ipa: "oden", phonetic: "oh-DEN" },
      { ja: "たこやき", en: "takoyaki (octopus balls, Osaka)", ipa: "takoɰaki", phonetic: "tah-koh-YAH-kee" },
      { ja: "わさび", en: "wasabi", ipa: "wasabi", phonetic: "wah-SAH-bee" },
      { ja: "だし", en: "dashi (Japanese stock — the base of everything)", ipa: "dashi", phonetic: "DAH-shee" },
      { ja: "おこのみやき", en: "okonomiyaki (savory pancake)", ipa: "okonomiɰaki", phonetic: "oh-ko-no-mee-YAH-kee" },
      { ja: "なっとう", en: "natto (fermented soybeans — an acquired taste)", ipa: "nattoː", phonetic: "naht-TOH" }
    ],
    phrases: [
      { ja: "わさびはすこしだけにしてください。", en: "Just a little wasabi, please.", phonetic: "wah-SAH-bee wah soo-KOH-shee dah-keh nee shee-teh koo-dah-sah-ee" },
      { ja: "これはなにでできていますか？", en: "What is this made of?", phonetic: "ko-reh wah nah-nee deh deh-kee-teh ee-mahs-kah" },
      { ja: "ベジタリアンメニューはありますか？", en: "Do you have a vegetarian menu?", phonetic: "beh-jee-TAH-ree-an meh-NYOO wah ah-ree-mahs-kah" },
      { ja: "だしはにくとさかなどちらですか？", en: "Is the dashi from meat or fish?", phonetic: "DAH-shee wah nee-koo toh sah-KAH-nah, doh-CHEE-rah dehs-kah" },
      { ja: "にほんりょうりがとてもすきです。", en: "I love Japanese food.", phonetic: "nee-hon-RYO-ree gah toh-TEH-moh soo-kee dehs" }
    ],
    grammar: "どちら (dochira) = 'which one (of two)?' A polite way to ask between two options. More formal than どっち (docchi) — use どちら in shops, restaurants, and with strangers.",
    culture: "Vegetarians have a tough time in Japan — dashi (fish stock) hides in almost everything, including seemingly veggie dishes like miso soup and pickles. Learn to ask clearly: だしはにくとさかな、どちらですか？"
  },
  {
    day: 22,
    title: "Colors, Sizes & Adjectives",
    titleNative: "色、サイズ、形容詞",
    vocab: [
      { ja: "あかい / あおい", en: "red / blue", ipa: "akai / aoi", phonetic: "ah-KAH-ee / ah-OH-ee" },
      { ja: "しろい / くろい", en: "white / black", ipa: "shiroi / kuroi", phonetic: "shee-ROH-ee / koo-ROH-ee" },
      { ja: "きいろい / みどりいろ", en: "yellow / green", ipa: "kiːroi / midoriiro", phonetic: "kee-ee-ROH-ee / mee-doh-REE-ee-roh" },
      { ja: "おおきい / ちいさい", en: "big / small", ipa: "oːkiː / tʃiːsai", phonetic: "oh-oh-KEE / chee-ee-SIGH" },
      { ja: "ながい / みじかい", en: "long / short", ipa: "naɡai / midʑikai", phonetic: "nah-GYE / mee-jee-KYE" },
      { ja: "あたらしい / ふるい", en: "new / old", ipa: "atarashiː / furui", phonetic: "ah-tah-RAH-shee / foo-ROO-ee" },
      { ja: "きれい", en: "beautiful / clean", ipa: "kireː", phonetic: "kee-REH" },
      { ja: "かわいい", en: "cute / adorable", ipa: "kawaiː", phonetic: "kah-WHY-ee" }
    ],
    phrases: [
      { ja: "もっとおおきいのはありますか？", en: "Do you have a bigger one?", phonetic: "mot-TOH oh-oh-KEE no wah ah-ree-mahs-kah" },
      { ja: "このいろがすきです。", en: "I like this color.", phonetic: "ko-no ee-ROH gah soo-kee dehs" },
      { ja: "もっとあかるいいろはありますか？", en: "Do you have a brighter color?", phonetic: "mot-TOH ah-kah-ROO-ee ee-ROH wah ah-ree-mahs-kah" },
      { ja: "かわいい！", en: "So cute!", phonetic: "kah-WHY-ee" },
      { ja: "きれいなけしきですね。", en: "What a beautiful view.", phonetic: "kee-REH nah keh-SHEE-kee dehs-neh" }
    ],
    grammar: "ですね (desu ne) = 'isn't it' / 'right?' — a softening tag that invites agreement. Sprinkle it into observations: きれいですね、さむいですね、おいしいですね. It sounds natural and warm.",
    culture: "かわいい (kawaii) is one of the most prominent aesthetic concepts in Japanese culture — it extends far beyond 'cute' to encompass a whole design philosophy. Expect it everywhere from stationery to train station mascots."
  },
  {
    day: 23,
    title: "Street Food & Markets",
    titleNative: "屋台と市場",
    vocab: [
      { ja: "やたい", en: "food stall / street stall", ipa: "jatai", phonetic: "yah-TYE" },
      { ja: "まつり", en: "festival", ipa: "matsuri", phonetic: "mah-TSOO-ree" },
      { ja: "やきそば", en: "fried noodles", ipa: "jakisoba", phonetic: "yah-kee-SOH-bah" },
      { ja: "かきごおり", en: "shaved ice", ipa: "kakiɡoːri", phonetic: "kah-kee-GOH-ree" },
      { ja: "いか / たこ", en: "squid / octopus", ipa: "ika / tako", phonetic: "ee-KAH / tah-KOH" },
      { ja: "つきじ", en: "Tsukiji (famous Tokyo market area)", ipa: "tsukidʑi", phonetic: "tsoo-KEE-jee" },
      { ja: "しちりんやき", en: "charcoal grill (portable, at festivals)", ipa: "shichirin jaki", phonetic: "shee-chee-REEN yah-kee" },
      { ja: "ぶらぶらする", en: "to stroll around / browse", ipa: "burabura suru", phonetic: "boo-rah-BOO-rah soo-roo" }
    ],
    phrases: [
      { ja: "〜をひとつください。", en: "One [X], please.", phonetic: "[X] oh hee-TOH-tsoo koo-dah-sah-ee" },
      { ja: "これはなんですか？", en: "What is this?", phonetic: "ko-reh wah nan-dehs-kah" },
      { ja: "ためしにたべてもいいですか？", en: "May I try a sample?", phonetic: "tah-MEH-shee nee tah-beh-teh moh ee dehs-kah" },
      { ja: "まつりはいつまでですか？", en: "When does the festival end?", phonetic: "mah-TSOO-ree wah ee-TSOO mah-deh dehs-kah" },
      { ja: "ぶらぶらしています。", en: "I'm just strolling around.", phonetic: "boo-rah-BOO-rah shee-teh-ee-mahs" }
    ],
    grammar: "〜てもいいですか (te mo ii desu ka) = 'Is it okay if I [do X]?' You've seen this before — it's genuinely the most important permission-asking phrase in Japanese. Learn it once, use it forever.",
    culture: "Japanese festivals (matsuri) happen year-round across the country. Summer festivals (夏祭り) feature fireworks, yukata, and incredible street food. Check local event calendars — stumbling into a neighborhood festival is one of the best Japan experiences."
  },
  {
    day: 24,
    title: "Polite Requests & Keigo Basics",
    titleNative: "丁寧な依頼と敬語の基本",
    vocab: [
      { ja: "けいご", en: "keigo (formal/honorific language)", ipa: "keːɡo", phonetic: "keh-ee-GOH" },
      { ja: "〜ていただけますか", en: "Could you please [do X]? (very polite)", ipa: "te itadakemasu ka", phonetic: "teh ee-tah-dah-keh-mahs-kah" },
      { ja: "〜していただけませんか", en: "Would it be possible to [do X]? (even more polite)", ipa: "shite itadakemasen ka", phonetic: "shee-teh ee-tah-dah-keh-mah-SEN-kah" },
      { ja: "おてすうですが", en: "I know this is a bother, but... (softener)", ipa: "otesuu desu ga", phonetic: "oh-teh-SOO dehs gah" },
      { ja: "よかったら", en: "if you'd like / if it's okay with you", ipa: "jokatara", phonetic: "yo-KAHT-tah-rah" },
      { ja: "ごりょうしょう", en: "understanding / consideration (formal)", ipa: "ɡorjoːshoː", phonetic: "go-ryoh-SHOH" },
      { ja: "おさきに", en: "before you / ahead of you (polite)", ipa: "osaki ni", phonetic: "oh-sah-KEE nee" },
      { ja: "どうかよろしく", en: "please (warm, earnest request)", ipa: "doːka joroshiku", phonetic: "DOH-kah yo-ROSH-ee-koo" }
    ],
    phrases: [
      { ja: "おてすうですが、〜していただけますか？", en: "I'm sorry to trouble you, but could you please [X]?", phonetic: "oh-teh-SOO dehs gah, [X] shee-teh ee-tah-dah-keh-mahs-kah" },
      { ja: "よかったら、いっしょにどうですか？", en: "If you'd like, how about joining us?", phonetic: "yo-KAHT-tah-rah, ees-shoh nee DOH dehs-kah" },
      { ja: "ごめいわくをおかけしてすみません。", en: "I'm sorry for the inconvenience.", phonetic: "go-meh-ee-WAH-koo oh oh-kah-keh-shee-teh soo-mee-mah-SEN" },
      { ja: "どうぞよろしくおねがいいたします。", en: "I humbly ask for your continued support.", phonetic: "DOH-zoh yo-ROSH-ee-koo oh-neh-gah-ee ee-tah-shmahs" },
      { ja: "おかまいなく。", en: "Please don't worry about me / Don't bother.", phonetic: "oh-kah-MY-nah-koo" }
    ],
    grammar: "〜ていただけますか is more polite than もらえますか — same meaning but one level up. In business or formal settings, this form shows you understand the social register. You won't need it often, but knowing it earns immediate respect.",
    culture: "Keigo (polite speech) has multiple levels. You'll never be expected to master it as a tourist, but showing any awareness of it impresses Japanese people greatly. Even just ending sentences with です and ます instead of plain form goes a long way."
  },
  {
    day: 25,
    title: "Entertainment & Nightlife",
    titleNative: "エンターテイメントと夜の街",
    vocab: [
      { ja: "カラオケ", en: "karaoke", ipa: "karaoke", phonetic: "kah-rah-OH-keh" },
      { ja: "パチンコ", en: "pachinko (pinball-style gambling)", ipa: "pachinkco", phonetic: "pah-CHIN-koh" },
      { ja: "ゲームセンター", en: "game center / arcade", ipa: "ɡeːmusentaː", phonetic: "GEH-moo-SEN-tah" },
      { ja: "ライブハウス", en: "live music venue", ipa: "raibuhausu", phonetic: "RYE-boo-HOW-soo" },
      { ja: "バー / クラブ", en: "bar / club", ipa: "baː / kurabu", phonetic: "BAH / koo-RAH-boo" },
      { ja: "はやい / おそい", en: "early / late", ipa: "hajai / osoi", phonetic: "hah-YAH-ee / oh-SOH-ee" },
      { ja: "でんしゃのさいしゅうびん", en: "last train", ipa: "densha no saishūbin", phonetic: "DEN-shah no sai-SHOO-bin" },
      { ja: "オールナイト", en: "all night / overnight", ipa: "oːrunaito", phonetic: "OH-roo-NYE-toh" }
    ],
    phrases: [
      { ja: "カラオケにいきましょう！", en: "Let's go to karaoke!", phonetic: "kah-rah-OH-keh nee ee-kee-mah-SHOH" },
      { ja: "でんしゃのさいしゅうびんはなんじですか？", en: "What time is the last train?", phonetic: "DEN-shah no sai-SHOO-bin wah nan-JEE dehs-kah" },
      { ja: "いちじかんいくらですか？", en: "How much per hour?", phonetic: "ee-chee-JEE-kahn ee-KOO-rah dehs-kah" },
      { ja: "マイクをかしてください。", en: "Please lend me the microphone.", phonetic: "MY-koo oh kah-shee-teh koo-dah-sah-ee" },
      { ja: "つぎのきょくをいれてください。", en: "Please put in the next song.", phonetic: "tsoo-gee no KYOH-koo oh ee-reh-teh koo-dah-sah-ee" }
    ],
    grammar: "〜ましょう (mashou) = 'Let's [do X]!' It's the invitation/suggestion form. いきましょう = 'Let's go!' たべましょう = 'Let's eat!' のみましょう = 'Let's drink!' Use it freely.",
    culture: "Japanese karaoke is private rooms, not a public stage — you book a room with friends and sing without an audience. Last train times matter enormously in Japan; miss it and you're either in a manga café till dawn or paying ¥5,000+ for a taxi."
  },
  {
    day: 26,
    title: "Health & Pharmacy",
    titleNative: "健康と薬局",
    vocab: [
      { ja: "やっきょく", en: "pharmacy", ipa: "jakkjoku", phonetic: "yahk-KYO-koo" },
      { ja: "くすり", en: "medicine", ipa: "kusuri", phonetic: "koo-SOO-ree" },
      { ja: "かぜ", en: "cold (illness)", ipa: "kaze", phonetic: "kah-ZEH" },
      { ja: "ねつ", en: "fever", ipa: "netsu", phonetic: "neh-TSOO" },
      { ja: "いたみどめ", en: "painkiller", ipa: "itamidome", phonetic: "ee-tah-mee-DOH-meh" },
      { ja: "こうねつざい", en: "fever reducer", ipa: "koːnetsu zai", phonetic: "koh-NEH-tsoo-zigh" },
      { ja: "ばんそうこう", en: "bandage / plaster", ipa: "bansoukou", phonetic: "ban-SOH-koh" },
      { ja: "ほけんしょう", en: "health insurance card", ipa: "hokenʃoː", phonetic: "hoh-KEN-shoh" }
    ],
    phrases: [
      { ja: "かぜぐすりをください。", en: "Cold medicine, please.", phonetic: "kah-ZEH-goo-soo-ree oh koo-dah-sah-ee" },
      { ja: "ここがいたいです。", en: "It hurts here.", phonetic: "ko-ko gah ee-TYE dehs" },
      { ja: "このくすりはいつのみますか？", en: "When do I take this medicine?", phonetic: "ko-no koo-SOO-ree wah ee-TSOO no-mee-mahs-kah" },
      { ja: "たべものアレルギーがあります。", en: "I have food allergies.", phonetic: "tah-beh-mo-no ah-reh-roo-GEE gah ah-ree-mahs" },
      { ja: "びょういんにいきたいです。", en: "I'd like to go to a hospital.", phonetic: "byoh-EEN nee ee-kee-tah-ee dehs" }
    ],
    grammar: "〜がいたいです (ga itai desu) = '[body part] hurts.' Point to the spot and say this — even without the body part word, the gesture + いたいです communicates everything needed.",
    culture: "Japanese pharmacies sell excellent over-the-counter medication, including some not available elsewhere (like the very effective かぜ薬 Pabron Gold). Doctors and hospitals are accessible — show your travel insurance documents and you'll be seen quickly."
  },
  {
    day: 27,
    title: "Money & Banking",
    titleNative: "お金と銀行",
    vocab: [
      { ja: "えん", en: "yen (¥)", ipa: "en", phonetic: "EN" },
      { ja: "こうりょうきん", en: "fee / charge", ipa: "koːrjoːkin", phonetic: "koh-ryoh-KEEN" },
      { ja: "ATM", en: "ATM (most 7-Eleven ATMs accept foreign cards)", ipa: "etiemu", phonetic: "eh-TEH-eh-moo" },
      { ja: "りょうがえ", en: "currency exchange", ipa: "rjoːɡae", phonetic: "ryoh-GAH-eh" },
      { ja: "レート", en: "exchange rate", ipa: "reːto", phonetic: "REH-toh" },
      { ja: "おつり", en: "change (money back)", ipa: "otsuri", phonetic: "oh-TSOO-ree" },
      { ja: "けいひ", en: "expenses / cost", ipa: "keːhi", phonetic: "keh-ee-HEE" },
      { ja: "クレジットカード", en: "credit card", ipa: "kuredʑittо kaːdo", phonetic: "koo-reh-JEE-toh KAH-doh" }
    ],
    phrases: [
      { ja: "りょうがえをおねがいします。", en: "I'd like to exchange currency.", phonetic: "ryoh-GAH-eh oh oh-neh-gah-ee-shmahs" },
      { ja: "レートはいくらですか？", en: "What's the exchange rate?", phonetic: "REH-toh wah ee-KOO-rah dehs-kah" },
      { ja: "クレジットカードはつかえますか？", en: "Can I use a credit card?", phonetic: "koo-reh-JEE-toh KAH-doh wah tsoo-kah-eh-mahs-kah" },
      { ja: "げんきんはひつようですか？", en: "Is cash necessary?", phonetic: "gen-KEEN wah hee-TSOO-yoh dehs-kah" },
      { ja: "おつりをください。", en: "Please give me my change.", phonetic: "oh-TSOO-ree oh koo-dah-sah-ee" }
    ],
    grammar: "つかえますか (tsukaemasu ka) = 'Can I use [X]?' A vital phrase for checking if cards, ICs, coupons, or anything is accepted: このクーポンはつかえますか？ = 'Can I use this coupon?'",
    culture: "Japan is still largely cash-based outside cities. 7-Eleven ATMs and Japan Post ATMs accept Visa/Mastercard with English menus. Stock up on cash when you find a working ATM — smaller towns, temples, and local restaurants often don't take cards."
  },
  {
    day: 28,
    title: "Making Friends",
    titleNative: "友達を作る",
    vocab: [
      { ja: "ともだち", en: "friend", ipa: "tomodachi", phonetic: "toh-moh-DAH-chee" },
      { ja: "どこからきましたか？", en: "Where are you from?", ipa: "doko kara kimashita ka", phonetic: "doh-KOH kah-rah kee-mash-tah-kah" },
      { ja: "〜からきました。", en: "I'm from [X].", ipa: "kara kimashita", phonetic: "kah-rah kee-MASH-tah" },
      { ja: "なにがすきですか？", en: "What do you like?", ipa: "nani ɡa suki desu ka", phonetic: "nah-nee gah soo-kee dehs-kah" },
      { ja: "にほんがだいすきです。", en: "I love Japan.", ipa: "nihon ɡa daisuki desu", phonetic: "nee-HON gah die-SOO-kee dehs" },
      { ja: "れんらくさきをおしえてもらえますか？", en: "Could you give me your contact info?", ipa: "renrakusaki o oshiete moraemasu ka", phonetic: "ren-RAH-koo-sah-kee oh oh-shee-eh-teh mo-rah-eh-mahs-kah" },
      { ja: "またあいましょう！", en: "Let's meet again!", ipa: "mata aimashou", phonetic: "mah-tah ah-ee-mah-SHOH" },
      { ja: "たのしかった！", en: "That was fun!", ipa: "tanoshikatta", phonetic: "tah-noh-shee-KAHT-tah" }
    ],
    phrases: [
      { ja: "にほんごをべんきょうしています。", en: "I'm studying Japanese.", phonetic: "nee-HON-goh oh ben-KYOH shee-teh-ee-mahs" },
      { ja: "にほんははじめてです。", en: "It's my first time in Japan.", phonetic: "nee-HON wah hah-jee-MEH-teh dehs" },
      { ja: "おすすめのばしょはどこですか？", en: "What places do you recommend?", phonetic: "oh-soo-SOO-meh no bah-SHOH wah DOH-koh dehs-kah" },
      { ja: "いっしょにしゃしんをとっていいですか？", en: "May I take a photo with you?", phonetic: "ees-SHOH nee shah-SHIN oh tot-teh ee dehs-kah" },
      { ja: "たのしかった！またね！", en: "That was fun! See you!", phonetic: "tah-noh-shee-KAHT-tah! mah-tah-NEH" }
    ],
    grammar: "〜ています (te imasu) = '[currently] doing [X].' べんきょうしています = 'I'm studying.' にんぎょうをさがしています = 'I'm looking for a souvenir.' Use it for ongoing actions.",
    culture: "Japanese people can seem reserved at first but are extraordinarily warm once the ice breaks. Mentioning you're studying Japanese unlocks immediate goodwill. Language exchange partners (会話パートナー) are easy to find via apps like HelloTalk or Tandem."
  },
  {
    day: 29,
    title: "Kyoto & Traditional Japan",
    titleNative: "京都と伝統的な日本",
    vocab: [
      { ja: "きょうと", en: "Kyoto", ipa: "kjoːto", phonetic: "KYOH-toh" },
      { ja: "げいしゃ / まいこ", en: "geisha / maiko (apprentice geisha)", ipa: "ɡeːsha / maiko", phonetic: "GEH-shah / MY-koh" },
      { ja: "ちゃどう / さどう", en: "tea ceremony", ipa: "sadoː", phonetic: "sah-DOH" },
      { ja: "きもの", en: "kimono", ipa: "kimono", phonetic: "kee-MOH-noh" },
      { ja: "まちや", en: "traditional Kyoto townhouse", ipa: "machija", phonetic: "mah-CHEE-yah" },
      { ja: "ふしみいなり", en: "Fushimi Inari (famous torii gate shrine)", ipa: "fushimi inari", phonetic: "foo-SHEE-mee ee-NAH-ree" },
      { ja: "こけ", en: "moss (Kyoto gardens are famous for it)", ipa: "koke", phonetic: "koh-KEH" },
      { ja: "ぎおんまつり", en: "Gion Festival (July, Kyoto's largest)", ipa: "ɡion matsuri", phonetic: "GEE-on mah-TSOO-ree" }
    ],
    phrases: [
      { ja: "ちゃどうたいけんはできますか？", en: "Can I do a tea ceremony experience?", phonetic: "sah-DOH tie-KEN wah deh-kee-mahs-kah" },
      { ja: "きものレンタルをしたいのですが。", en: "I'd like to rent a kimono.", phonetic: "kee-MOH-noh REN-tah-roo oh shee-tah-ee no dehs-gah" },
      { ja: "ふしみいなりのひがえりはできますか？", en: "Can I do Fushimi Inari as a day trip?", phonetic: "foo-SHEE-mee ee-NAH-ree no hee-gah-EH-ree wah deh-kee-mahs-kah" },
      { ja: "げいこさんにあうにはどうしたらいいですか？", en: "How can I see a geiko (Kyoto term for geisha)?", phonetic: "geh-ee-KOH sahn nee ah-oo nee wah DOH shee-tah-rah ee dehs-kah" },
      { ja: "このにわはとてもしずかですね。", en: "This garden is very peaceful.", phonetic: "ko-no nee-WAH wah toh-TEH-moh shee-ZOO-kah dehs-neh" }
    ],
    grammar: "〜たいけん (taiken) = 'experience.' Attach to activities: ちゃどうたいけん = 'tea ceremony experience.' すもうたいけん = 'sumo experience.' It's the word tour companies build their entire business on.",
    culture: "In Gion (Kyoto's geisha district), photographing geiko and maiko without permission is now prohibited — and was always rude. If you see one, admire from a respectful distance. The early morning walk to Fushimi Inari before the crowds is one of the best Japan experiences."
  },
  {
    day: 30,
    title: "Departure & Final Phrases",
    titleNative: "出発と最後のフレーズ",
    vocab: [
      { ja: "しゅっぱつ", en: "departure", ipa: "shuppatsɯ", phonetic: "SHOOP-pah-tsoo" },
      { ja: "とうじょうけん", en: "boarding pass", ipa: "toːdʑoːken", phonetic: "toh-JOH-ken" },
      { ja: "てにもつ", en: "carry-on luggage", ipa: "tenimotsɯ", phonetic: "teh-nee-MOH-tsoo" },
      { ja: "でんりょうせいげん", en: "liquid restriction", ipa: "denrjoːseːɡen", phonetic: "den-ryoh-SEH-gen" },
      { ja: "とうじょうぐち", en: "boarding gate", ipa: "toːdʑoːɡɯchi", phonetic: "toh-JOH-goo-chee" },
      { ja: "〜のたびはさいこうでした。", en: "The trip to [X] was the best.", ipa: "no tabi wa saikō deshita", phonetic: "[X] no tah-BEE wah sigh-KOH desh-tah" },
      { ja: "またきます。", en: "I'll come again.", ipa: "mata kimasu", phonetic: "mah-tah kee-MAHS" },
      { ja: "おせわになりました。", en: "Thank you for everything (literally: I was in your care).", ipa: "osewa ni narimashita", phonetic: "oh-seh-WAH nee nah-ree-MASH-tah" }
    ],
    phrases: [
      { ja: "とうじょうけんをみせてください。", en: "Please show your boarding pass.", phonetic: "toh-JOH-ken oh mee-seh-teh koo-dah-sah-ee" },
      { ja: "とうじょうぐちはどこですか？", en: "Where is the boarding gate?", phonetic: "toh-JOH-goo-chee wah DOH-koh dehs-kah" },
      { ja: "にほんはさいこうでした。またきます！", en: "Japan was incredible. I'll be back!", phonetic: "nee-HON wah sigh-KOH desh-tah. mah-tah kee-MAHS" },
      { ja: "おせわになりました。ありがとうございました。", en: "Thank you for everything. (warm farewell)", phonetic: "oh-seh-WAH nee nah-ree-MASH-tah. ah-ree-GAH-toh go-zah-ee-mash-tah" },
      { ja: "またいつかかならずかえってきます。", en: "I'll definitely come back someday.", phonetic: "mah-tah ee-TSOO-kah kah-NAH-rah-zoo kah-EH-teh-kee-mahs" }
    ],
    grammar: "またきます (mata kimasu) — 'I'll come again' — might be the three most appreciated words you can say as you leave Japan. Use おせわになりました to your hotel staff, your host, anyone who helped you. It packs enormous warmth.",
    culture: "Japan has a way of changing people. The food, the order, the kindness of strangers, the beauty of the ordinary. Most people who visit once say またかならずかえってきます — and mean it."
  }
];

const CONVERSATIONS_JA = [
  {
    title: "Shinkansen Ticket",
    scene: "Tokyo Station's crowded ticketing hall — you're at the JR counter buying your first shinkansen ticket.",
    titleNative: "新幹線の切符",
    lines: [
      { who: "you", ja: "すみません、とうきょうまでのしんかんせんのきっぷをかいたいのですが。", phonetic: "soo-mee-MAH-sen, toh-KYOH mah-deh no shin-KAN-sen no kip-POO oh kai-TAH-ee no dehs-gah", en: "Excuse me, I'd like to buy a shinkansen ticket to Tokyo." },
      { who: "them", ja: "はい。なんにちのなんじごろのしゅっぱつですか？", phonetic: "hah-ee. nan-NEE-chee no nan-JEE go-roh no SHOOP-pah-tsoo dehs-kah", en: "Of course. What date and around what time would you like to depart?" },
      { who: "you", ja: "あしたのごぜんじゅうじごろをおねがいします。", phonetic: "ah-SHEE-tah no go-zen JOO-jee go-roh oh oh-neh-gah-ee-shmahs", en: "Around 10 AM tomorrow, please." },
      { who: "them", ja: "のぞみでよろしいですか？", phonetic: "noh-ZOH-mee deh yo-ROSH-ee dehs-kah", en: "Is the Nozomi (fastest) okay?" },
      { who: "you", ja: "はい。まどぎわのせきでおねがいします。", phonetic: "hah-ee. mah-doh-GEE-wah no seh-KEE deh oh-neh-gah-ee-shmahs", en: "Yes. A window seat, please." },
      { who: "them", ja: "おひとりさまで、じゅうにえんごひゃくえんになります。", phonetic: "oh-hee-toh-ree-SAH-mah deh, JOO-nee-en go-HYAH-koo-en nee nah-ree-mahs", en: "For one person, that comes to ¥12,500." },
      { who: "you", ja: "カードでもいいですか？", en: "Is card payment okay?" },
      { who: "them", ja: "はい、こちらへどうぞ。", phonetic: "hah-ee, koh-CHEE-rah heh DOH-zoh", en: "Yes, right this way." }
    ]
  },
  {
    title: "At a Ramen Shop",
    scene: "A bustling ramen shop in Fukuoka — the smell of tonkotsu broth hits you before you even open the door.",
    titleNative: "ラーメン屋で",
    lines: [
      { who: "them", ja: "いらっしゃいませ！なんめいさまですか？", phonetic: "ee-RASH-shye-mah-seh! nan-MEH-ee sah-mah dehs-kah", phonetic: "ee-RASH-shye-mah-seh! nan-MEH-ee sah-mah dehs-kah", en: "Welcome! How many people?" },
      { who: "you", ja: "ひとりです。", phonetic: "hee-TOH-ree dehs", en: "Just one." },
      { who: "them", ja: "しょうゆ、しお、みそ、とんこつ、どれになさいますか？", phonetic: "shoh-YOO, shee-OH, mee-SOH, ton-KOT-soo, doh-REH nee nah-sah-ee-mahs-kah", en: "Which broth: soy, salt, miso, or tonkotsu?" },
      { who: "you", ja: "とんこつをおねがいします。めんのかたさはかためで。", phonetic: "ton-KOT-soo oh oh-neh-gah-ee-shmahs. men no kah-TAH-sah wah kah-TAH-meh deh", en: "Tonkotsu please. Firm noodles." },
      { who: "them", ja: "トッピングはいかがですか？たまご、ちゃーしゅー、きくらげ、ねぎ。", phonetic: "top-PING-goo wah ee-KAH-gah dehs-kah? tah-mah-GOH, CHAH-shoo, kee-koo-RAH-geh, neh-GEE", en: "Any toppings? Egg, chashu pork, wood ear mushroom, green onion." },
      { who: "you", ja: "たまごをふたつとちゃーしゅーをおねがいします。", phonetic: "tah-mah-GOH oh foo-TAH-tsoo toh CHAH-shoo oh oh-neh-gah-ee-shmahs", en: "Two eggs and chashu, please." },
      { who: "them", ja: "かしこまりました。すこしおまちください。", phonetic: "kah-shee-koh-mah-ree-MASH-tah. soo-KOH-shee oh-MAH-chee koo-dah-sah-ee", en: "Understood. Please wait a moment." },
      { who: "you", ja: "ありがとうございます。（食後）ごちそうさまでした！", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. go-chee-SOH-sah-mah-desh-tah", en: "Thank you. (after eating) That was a feast!" }
    ]
  },
  {
    title: "Lost in Shibuya",
    scene: "Outside Shibuya Station — you've just emerged from the maze of exits and have no idea which way to go.",
    titleNative: "渋谷で迷子",
    lines: [
      { who: "you", ja: "すみません、スクランブルこうさてんはどこですか？", phonetic: "soo-mee-MAH-sen, soo-koo-RAN-boo-roo koh-sah-TEN wah DOH-koh dehs-kah", en: "Excuse me, where is the Scramble Crossing?" },
      { who: "them", ja: "ここからすぐですよ。このみちをまっすぐいってください。", phonetic: "ko-ko kah-rah soo-GOO dehs-yo. ko-no mee-CHEE oh mahs-SOO-goo ee-teh koo-dah-sah-ee", en: "It's very close from here. Go straight down this street." },
      { who: "you", ja: "どのくらいかかりますか？", phonetic: "doh-no koo-RYE kah-kah-ree-mahs-kah", en: "How long will it take?" },
      { who: "them", ja: "あるいてごふんもかからないとおもいますよ。", phonetic: "ah-ROO-ee-teh go-FOON moh kah-kah-RAH-nah-ee toh oh-moh-ee-mahs-yo", en: "I think it's less than five minutes on foot." },
      { who: "you", ja: "みぎにまがりますか？", phonetic: "mee-GEE nee mah-gah-ree-mahs-kah", en: "Do I turn right?" },
      { who: "them", ja: "いいえ、まっすぐです。おおきいこうさてんがみえたら、そこです。", phonetic: "ee-EH, mahs-SOO-goo dehs. oh-oh-KEE koh-sah-TEN gah mee-eh-TAH-rah, so-ko dehs", en: "No, straight ahead. When you see the big intersection, that's it." },
      { who: "you", ja: "ありがとうございます。たすかりました！", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. tah-soo-kah-ree-MASH-tah", en: "Thank you so much! You saved me!" },
      { who: "them", ja: "いいえ、いってらっしゃい！", phonetic: "ee-EH, ee-teh-RASH-shye", en: "Not at all, enjoy your visit!" }
    ]
  },
  {
    title: "Convenience Store Run",
    scene: "A 7-Eleven at 11 PM — your dinner, breakfast, and entire evening plans are riding on what's left on the shelves.",
    titleNative: "コンビニで",
    lines: [
      { who: "them", ja: "いらっしゃいませ！", phonetic: "ee-RASH-shye-mah-seh", en: "Welcome!" },
      { who: "you", ja: "このおべんとうをあたためてもらえますか？", phonetic: "ko-no oh-ben-TOH oh ah-tah-tah-meh-teh mo-rah-eh-mahs-kah", en: "Could you heat up this bento?" },
      { who: "them", ja: "はい。おはしはおつけしますか？", phonetic: "hah-ee. oh-HAH-shee wah oh-tsoo-keh-shee-mahs-kah", en: "Of course. Would you like chopsticks?" },
      { who: "you", ja: "はい、おねがいします。それとこのコーヒーも。", phonetic: "hah-ee, oh-neh-gah-ee-shmahs. so-reh-toh ko-no KOH-hee moh", en: "Yes please. And this coffee too." },
      { who: "them", ja: "ポイントカードはおもちですか？", phonetic: "POY-n-toh KAH-doh wah oh-MOH-chee dehs-kah", en: "Do you have a points card?" },
      { who: "you", ja: "いいえ、もっていません。", phonetic: "ee-EH, mot-teh ee-mah-SEN", en: "No, I don't have one." },
      { who: "them", ja: "ぜんぶでごひゃくさんじゅうえんになります。", phonetic: "zen-BOO deh go-HYAH-koo san-JOO-en nee nah-ree-mahs", en: "That comes to ¥530 in total." },
      { who: "you", ja: "Suicaでおねがいします。", phonetic: "Suica deh oh-neh-gah-ee-shmahs", en: "Suica card, please." }
    ]
  },
  {
    title: "Hotel Check-In",
    scene: "A business hotel in Shinjuku — you've survived the airport and the trains and now just want your room.",
    titleNative: "ホテルのチェックイン",
    lines: [
      { who: "you", ja: "こんにちは。よやくしています。[name]です。", phonetic: "kon-NEE-chee-wah. yo-YAH-koo shee-teh-ee-mahs. [name] dehs", en: "Hello. I have a reservation. I'm [name]." },
      { who: "them", ja: "いらっしゃいませ。パスポートをみせていただけますか？", phonetic: "ee-RASH-shye-mah-seh. pah-soo-POH-toh oh mee-seh-teh ee-tah-dah-keh-mahs-kah", en: "Welcome. Could I see your passport?" },
      { who: "you", ja: "はい、どうぞ。", phonetic: "hah-ee, DOH-zoh", en: "Here you go." },
      { who: "them", ja: "ありがとうございます。ツインルームで三泊ですね。", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. tsoo-EEN roo-MOO deh san-PAH-koo dehs-neh", en: "Thank you. Twin room for three nights, correct?" },
      { who: "you", ja: "はい、そうです。チェックアウトはなんじですか？", phonetic: "hah-ee, soh dehs. CHEK-koo-ah-oo-toh wah nan-JEE dehs-kah", en: "Yes, that's right. What time is check-out?" },
      { who: "them", ja: "じゅうじです。あさしょくはこちらのレストランでごよういしております。", phonetic: "JOO-jee dehs. ah-SAH-shoh-koo wah ko-CHEE-rah no res-TOH-ran deh go-yo-ee shee-teh oh-ree-mahs", en: "It's 10 AM. Breakfast is available at our restaurant here." },
      { who: "you", ja: "ありがとうございます。Wi-Fiのパスワードはなんですか？", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. wai-fai no pah-soo-WAH-doh wah nan-dehs-kah", en: "Thank you. What's the Wi-Fi password?" },
      { who: "them", ja: "こちらのカードにかいてあります。なにかおわかりのことがあればなんなりと。", phonetic: "ko-CHEE-rah no KAH-doh nee kai-teh ah-ree-mahs. nah-nee-kah oh-wah-KAH-ree no ko-toh gah ah-reh-bah nan-nah-ree-toh", en: "It's written on this card. Please don't hesitate to ask if anything is unclear." }
    ]
  },
  {
    title: "Izakaya Night Out",
    scene: "A lively izakaya in Osaka — the kind where the menu is hand-scrawled on the walls and the beer arrives cold.",
    titleNative: "居酒屋の夜",
    lines: [
      { who: "them", ja: "いらっしゃいませ！なんめいさまですか？", en: "Welcome! How many?" },
      { who: "you", ja: "よにんです。よやくはしていませんが、せきはありますか？", phonetic: "yo-NEEN dehs. yo-YAH-koo wah shee-teh-ee-mah-SEN gah, seh-KEE wah ah-ree-mahs-kah", en: "Four people. We don't have a reservation — do you have seats?" },
      { who: "them", ja: "はい、こちらへどうぞ。おのみものからいかがですか？", phonetic: "hah-ee, ko-CHEE-rah heh DOH-zoh. oh-noh-mee-MOH-no kah-rah ee-KAH-gah dehs-kah", en: "Yes, right this way. Shall we start with drinks?" },
      { who: "you", ja: "とりあえず、なまをよんつおねがいします。", phonetic: "toh-ree-ah-EH-zoo, nah-MAH oh yon-TSOO oh-neh-gah-ee-shmahs", en: "For starters, four draft beers please." },
      { who: "them", ja: "おつまみはいかがですか？やきとりがおすすめです。", phonetic: "oh-tsoo-MAH-mee wah ee-KAH-gah dehs-kah? yah-kee-TOH-ree gah oh-soo-SOO-meh dehs", en: "How about some snacks? We recommend the yakitori skewers." },
      { who: "you", ja: "じゃあ、やきとりのもりあわせとたこわさびをください。", phonetic: "jah, yah-kee-TOH-ree no moh-ree-ah-WAH-seh toh tah-koh-wah-SAH-bee oh koo-dah-sah-ee", en: "Then an assorted yakitori platter and takoyaki wasabi, please." },
      { who: "them", ja: "かしこまりました！かんぱいのおてつだいはいかがですか？", phonetic: "kah-shee-koh-mah-ree-MASH-tah! KAN-pai no oh-teh-tsoo-DAH-ee wah ee-KAH-gah dehs-kah", en: "Certainly! Can we help get you going with a toast?" },
      { who: "you", ja: "かんぱい！", en: "Cheers!" }
    ]
  },
  {
    title: "Onsen Ryokan Arrival",
    scene: "A traditional ryokan in Hakone — you've arrived with Mount Fuji framed in the window and a yukata waiting on the futon.",
    titleNative: "温泉旅館に到着",
    lines: [
      { who: "them", ja: "いらっしゃいませ。おこしやすぅ。（Kyoto welcome）", phonetic: "ee-RASH-shye-mah-seh. oh-koh-shee-YAH-soo", en: "Welcome. We're glad you came." },
      { who: "you", ja: "よやくしています。[name]です。", en: "I have a reservation. I'm [name]." },
      { who: "them", ja: "おまちしておりました。おにもつをおもちします。", phonetic: "oh-MAH-chee shee-teh oh-ree-MASH-tah. oh-nee-MOH-tsoo oh oh-MOH-chee shee-mahs", en: "We've been expecting you. Let me take your luggage." },
      { who: "you", ja: "ありがとうございます。おんせんはなんじからですか？", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. ON-sen wah nan-JEE kah-rah dehs-kah", en: "Thank you. What time does the onsen open?" },
      { who: "them", ja: "ごぜんろくじからごぜんじゅういちじ、ごごさんじからしんよなかじゅうにじまでです。", phonetic: "go-zen ROH-koo-jee kah-rah go-zen JOO-ee-chee-jee, go-go san-JEE kah-rah shin-yo-NAH-kah JOO-nee-jee mah-deh dehs", en: "6 AM to 11 AM, and 3 PM to midnight." },
      { who: "you", ja: "ゆかたのつかいかたをおしえてもらえますか？", en: "Could you show me how to wear the yukata?" },
      { who: "them", ja: "もちろんです。おへやでごせつめいします。かいせきのおしょくじはごごろくじでよろしいですか？", phonetic: "moh-CHEE-ron dehs. oh-HEH-yah deh go-seh-tsoo-MEH shee-mahs. KAI-seh-kee no oh-SHOH-koo-jee wah go-go ROH-koo-jee deh yo-ROSH-ee dehs-kah", en: "Of course. I'll explain in your room. Is 6 PM for the kaiseki dinner alright?" },
      { who: "you", ja: "はい、ぴったりです。ありがとうございます。", phonetic: "hah-ee, peet-TAH-ree dehs. ah-ree-GAH-toh go-zah-ee-mahs", en: "Yes, perfect. Thank you very much." }
    ]
  },
  {
    title: "Airport Departure",
    scene: "Narita Airport, Terminal 1 — your flight home is in three hours and you're already planning your next trip.",
    titleNative: "空港での出発",
    lines: [
      { who: "them", ja: "パスポートとよやくかくにんしょをみせてください。", phonetic: "pah-soo-POH-toh toh yo-YAH-koo kah-koo-NEEN-shoh oh mee-seh-teh koo-dah-sah-ee", en: "Please show me your passport and booking confirmation." },
      { who: "you", ja: "はい、こちらです。スーツケースをひとつあずけたいです。", phonetic: "hah-ee, ko-CHEE-rah dehs. SOO-tsoo-KEH-soo oh hee-TOH-tsoo ah-zoo-KEH-tah-ee dehs", en: "Here you are. I'd like to check one suitcase." },
      { who: "them", ja: "かしこまりました。このにもつはじゅうろっキロです。せいげんないです。", phonetic: "kah-shee-koh-mah-ree-MASH-tah. ko-no nee-MOH-tsoo wah JOO-rok kee-ROH dehs. seh-EE-gen nah-ee dehs", en: "Understood. This bag is 16 kg. Within the limit." },
      { who: "you", ja: "よかった。まどぎわのせきにできますか？", phonetic: "yo-KAHT-tah. mah-doh-GEE-wah no seh-KEE nee deh-kee-mahs-kah", en: "Great. Can I have a window seat?" },
      { who: "them", ja: "しょうしょうおまちください...はい、22Aのまどぎわおとりできました。", phonetic: "shoh-SHOH oh-MAH-chee koo-dah-sah-ee... hah-ee, nee-JOO-nee-EH no mah-doh-GEE-wah oh-TOH-ree deh-kee-MASH-tah", en: "One moment... Yes, I've got you window seat 22A." },
      { who: "you", ja: "ありがとうございます。とうじょうぐちはどこですか？", phonetic: "ah-ree-GAH-toh go-zah-ee-mahs. toh-JOH-goo-chee wah DOH-koh dehs-kah", en: "Thank you. Where is the boarding gate?" },
      { who: "them", ja: "セキュリティをとおって、64番ゲートです。とうじょうかいしはごぜんじゅうじです。", phonetic: "seh-KYOO-ree-tee oh toht-teh, ROK-joo-YON-ban GEH-toh dehs. toh-JOH kah-ee-SHEE wah go-zen JOO-jee dehs", en: "Through security and it's Gate 64. Boarding starts at 10 AM." },
      { who: "you", ja: "にほんはさいこうでした。またかならずきます。", phonetic: "nee-HON wah sigh-KOH desh-tah. mah-tah kah-NAH-rah-zoo kee-mahs", en: "Japan was incredible. I'll definitely be back." }
    ]
  }
];
