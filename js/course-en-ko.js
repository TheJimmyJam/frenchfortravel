// Korean course data — 30 days
// loaded by learn.html before app.js
// Note: field "fr" = Korean (Hangul), "ipa" = romanization/pronunciation, "en" = English

const COURSE_KO = [
  { day:1, title:"Greetings & Politeness", titleNative:"인사와 예절", focus:"The first words you'll say in Korea.",
    vocab:[
      {fr:"안녕하세요", ipa:"an-nyeong-ha-se-yo", en:"Hello (polite)"},
      {fr:"안녕", ipa:"an-nyeong", en:"Hi / Bye (casual)"},
      {fr:"감사합니다", ipa:"gam-sa-ham-ni-da", en:"Thank you (formal)"},
      {fr:"고마워요", ipa:"go-ma-wo-yo", en:"Thank you (casual)"},
      {fr:"죄송합니다", ipa:"joe-song-ham-ni-da", en:"I'm sorry (formal)"},
      {fr:"괜찮아요", ipa:"gwaen-chan-a-yo", en:"It's okay / No problem"},
      {fr:"네", ipa:"ne", en:"Yes"},
      {fr:"아니요", ipa:"a-ni-yo", en:"No"},
      {fr:"안녕히 가세요", ipa:"an-nyeong-hi ga-se-yo", en:"Goodbye (to person leaving)"},
      {fr:"안녕히 계세요", ipa:"an-nyeong-hi gye-se-yo", en:"Goodbye (you are leaving)"}
    ],
    phrases:[
      {fr:"안녕하세요! 처음 뵙겠습니다.", ipa:"an-nyeong-ha-se-yo! cheo-eum boep-get-seum-ni-da", en:"Hello! Nice to meet you (first time)."},
      {fr:"감사합니다, 괜찮아요.", ipa:"gam-sa-ham-ni-da, gwaen-chan-a-yo", en:"Thank you, it's okay."},
      {fr:"죄송합니다, 실례합니다.", ipa:"joe-song-ham-ni-da, sil-lye-ham-ni-da", en:"I'm sorry, excuse me."},
      {fr:"네, 고마워요!", ipa:"ne, go-ma-wo-yo", en:"Yes, thank you!"},
      {fr:"아니요, 괜찮아요.", ipa:"a-ni-yo, gwaen-chan-a-yo", en:"No, it's fine."},
      {fr:"안녕히 가세요, 감사합니다!", ipa:"an-nyeong-hi ga-se-yo, gam-sa-ham-ni-da", en:"Goodbye, thank you!"},
      {fr:"잠깐만요!", ipa:"jam-kkan-man-yo", en:"Just a moment, please!"},
      {fr:"천천히 말해 주세요.", ipa:"cheon-cheon-hi mal-hae ju-se-yo", en:"Please speak slowly."}
    ],
    grammar:"Korean has formal and casual speech levels. 'yo' (요) at the end makes speech polite — always use it with strangers, shopkeepers, or anyone you just met. Drop 'yo' only with close friends. When in doubt: add 요.",
    practice:["Say '안녕하세요' every time you would normally say hello today.", "Practice bowing slightly when you say it — context matters in Korean culture."]
  },
  { day:2, title:"Basic Responses & Survival Phrases", titleNative:"기본 응답", focus:"Get through any awkward moment.",
    vocab:[
      {fr:"모르겠어요", ipa:"mo-reu-get-eo-yo", en:"I don't know"},
      {fr:"이해해요", ipa:"i-hae-hae-yo", en:"I understand"},
      {fr:"이해 못 해요", ipa:"i-hae mot hae-yo", en:"I don't understand"},
      {fr:"영어 하세요?", ipa:"yeong-eo ha-se-yo", en:"Do you speak English?"},
      {fr:"조금요", ipa:"jo-geum-yo", en:"A little"},
      {fr:"다시 말해 주세요", ipa:"da-si mal-hae ju-se-yo", en:"Please say that again"},
      {fr:"천천히", ipa:"cheon-cheon-hi", en:"Slowly"},
      {fr:"도와주세요", ipa:"do-wa-ju-se-yo", en:"Please help me"},
      {fr:"물론이죠", ipa:"mul-lon-i-jyo", en:"Of course"},
      {fr:"잠깐만요", ipa:"jam-kkan-man-yo", en:"Just a moment"}
    ],
    phrases:[
      {fr:"죄송해요, 한국어를 잘 못 해요.", ipa:"joe-song-hae-yo, han-gug-eo-reul jal mot hae-yo", en:"Sorry, I don't speak Korean well."},
      {fr:"영어 하세요?", ipa:"yeong-eo ha-se-yo", en:"Do you speak English?"},
      {fr:"다시 한번 말해 주세요.", ipa:"da-si han-beon mal-hae ju-se-yo", en:"Please say it one more time."},
      {fr:"천천히 말해 주세요.", ipa:"cheon-cheon-hi mal-hae ju-se-yo", en:"Please speak slowly."},
      {fr:"이해 못 했어요, 죄송해요.", ipa:"i-hae mot haet-eo-yo, joe-song-hae-yo", en:"I didn't understand, sorry."},
      {fr:"도와주세요! 감사합니다.", ipa:"do-wa-ju-se-yo! gam-sa-ham-ni-da", en:"Please help me! Thank you."},
      {fr:"조금 알아요.", ipa:"jo-geum al-a-yo", en:"I know a little."},
      {fr:"괜찮아요, 물론이죠!", ipa:"gwaen-chan-a-yo, mul-lon-i-jyo", en:"It's fine, of course!"}
    ],
    grammar:"Korean sentence order is Subject → Object → Verb. 'I coffee drink' not 'I drink coffee.' The verb always comes last. This feels weird at first but becomes natural fast.",
    practice:["Memorize '도와주세요' — it's your emergency phrase.", "Practice '다시 말해 주세요' until you can say it without thinking."]
  },
  { day:3, title:"Introducing Yourself", titleNative:"자기소개", focus:"Tell people who you are.",
    vocab:[
      {fr:"저는", ipa:"jeo-neun", en:"I am / As for me (formal)"},
      {fr:"이름이 뭐예요?", ipa:"i-reum-i mwo-ye-yo", en:"What is your name?"},
      {fr:"제 이름은 ~이에요", ipa:"je i-reum-eun ~i-e-yo", en:"My name is ~"},
      {fr:"어디서 왔어요?", ipa:"eo-di-seo wat-eo-yo", en:"Where are you from?"},
      {fr:"미국 사람이에요", ipa:"mi-guk sa-ram-i-e-yo", en:"I am American"},
      {fr:"반가워요", ipa:"ban-ga-wo-yo", en:"Nice to meet you"},
      {fr:"몇 살이에요?", ipa:"myeot sal-i-e-yo", en:"How old are you?"},
      {fr:"직업이 뭐예요?", ipa:"jig-eob-i mwo-ye-yo", en:"What is your job?"},
      {fr:"여행자예요", ipa:"yeo-haeng-ja-ye-yo", en:"I am a traveler"},
      {fr:"달라스에서 왔어요", ipa:"dal-la-seu-e-seo wat-eo-yo", en:"I came from Dallas"}
    ],
    phrases:[
      {fr:"안녕하세요, 저는 지미예요.", ipa:"an-nyeong-ha-se-yo, jeo-neun ji-mi-ye-yo", en:"Hello, I am Jimmy."},
      {fr:"미국에서 왔어요. 달라스요.", ipa:"mi-gug-e-seo wat-eo-yo. dal-la-seu-yo", en:"I came from America. Dallas."},
      {fr:"반가워요! 처음 뵙겠습니다.", ipa:"ban-ga-wo-yo! cheo-eum boep-get-seum-ni-da", en:"Nice to meet you! (first meeting)"},
      {fr:"이름이 뭐예요?", ipa:"i-reum-i mwo-ye-yo", en:"What is your name?"},
      {fr:"직업이 뭐예요? 저는 여행자예요.", ipa:"jig-eob-i mwo-ye-yo? jeo-neun yeo-haeng-ja-ye-yo", en:"What do you do? I'm a traveler."},
      {fr:"한국어를 공부하고 있어요.", ipa:"han-gug-eo-reul gong-bu-ha-go it-eo-yo", en:"I am studying Korean."},
      {fr:"서울이 너무 좋아요!", ipa:"seo-ul-i neo-mu jo-a-yo", en:"I love Seoul so much!"},
      {fr:"한국 음식이 정말 맛있어요.", ipa:"han-guk eum-sig-i jeong-mal mas-it-eo-yo", en:"Korean food is really delicious."}
    ],
    grammar:"Korean uses particles after nouns to show their role. 은/는 (topic), 이/가 (subject), 을/를 (object). '저는' = 'as for me.' You don't need to master this — just recognize the pattern.",
    practice:["Write out your self-intro: name, country, city.", "Say it out loud 3 times until it flows naturally."]
  },
  { day:4, title:"Numbers 1–10 & Counting", titleNative:"숫자 1-10", focus:"Two number systems — learn the native Korean first.",
    vocab:[
      {fr:"하나", ipa:"ha-na", en:"One (native Korean)"},
      {fr:"둘", ipa:"dul", en:"Two (native Korean)"},
      {fr:"셋", ipa:"set", en:"Three (native Korean)"},
      {fr:"넷", ipa:"net", en:"Four (native Korean)"},
      {fr:"다섯", ipa:"da-seot", en:"Five (native Korean)"},
      {fr:"여섯", ipa:"yeo-seot", en:"Six (native Korean)"},
      {fr:"일곱", ipa:"il-gop", en:"Seven (native Korean)"},
      {fr:"여덟", ipa:"yeo-deol", en:"Eight (native Korean)"},
      {fr:"아홉", ipa:"a-hop", en:"Nine (native Korean)"},
      {fr:"열", ipa:"yeol", en:"Ten (native Korean)"}
    ],
    phrases:[
      {fr:"한 개 주세요.", ipa:"han gae ju-se-yo", en:"Please give me one (item)."},
      {fr:"두 개 주세요.", ipa:"du gae ju-se-yo", en:"Please give me two."},
      {fr:"세 명이에요.", ipa:"se myeong-i-e-yo", en:"There are three people."},
      {fr:"몇 개예요?", ipa:"myeot gae-ye-yo", en:"How many are there?"},
      {fr:"다섯 개 있어요.", ipa:"da-seot gae it-eo-yo", en:"There are five of them."},
      {fr:"열 번 말해요.", ipa:"yeol beon mal-hae-yo", en:"Say it ten times."},
      {fr:"하나, 둘, 셋!", ipa:"ha-na, dul, set", en:"One, two, three! (countdown)"},
      {fr:"몇 명이에요?", ipa:"myeot myeong-i-e-yo", en:"How many people?"}
    ],
    grammar:"Korean has TWO number systems: native Korean (하나, 둘, 셋...) for counting objects, ages, and hours; Sino-Korean (일, 이, 삼...) for money, dates, minutes, and floors. Today = native Korean. Tomorrow = Sino-Korean.",
    practice:["Count from 1–10 in native Korean out loud, twice.", "Use 하나/둘/셋 to count objects around you right now."]
  },
  { day:5, title:"Sino-Korean Numbers & Money", titleNative:"한자 숫자와 돈", focus:"The number system you use for prices.",
    vocab:[
      {fr:"일", ipa:"il", en:"One (Sino-Korean)"},
      {fr:"이", ipa:"i", en:"Two (Sino-Korean)"},
      {fr:"삼", ipa:"sam", en:"Three (Sino-Korean)"},
      {fr:"사", ipa:"sa", en:"Four (Sino-Korean)"},
      {fr:"오", ipa:"o", en:"Five (Sino-Korean)"},
      {fr:"육", ipa:"yuk", en:"Six (Sino-Korean)"},
      {fr:"칠", ipa:"chil", en:"Seven (Sino-Korean)"},
      {fr:"팔", ipa:"pal", en:"Eight (Sino-Korean)"},
      {fr:"구", ipa:"gu", en:"Nine (Sino-Korean)"},
      {fr:"십", ipa:"sip", en:"Ten (Sino-Korean) / 백=100 / 천=1,000 / 만=10,000"}
    ],
    phrases:[
      {fr:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much is it?"},
      {fr:"오천 원이에요.", ipa:"o-cheon won-i-e-yo", en:"It's 5,000 won."},
      {fr:"이만 원이에요.", ipa:"i-man won-i-e-yo", en:"It's 20,000 won."},
      {fr:"너무 비싸요.", ipa:"neo-mu bi-ssa-yo", en:"It's too expensive."},
      {fr:"깎아 주세요.", ipa:"kkak-ka ju-se-yo", en:"Please give me a discount."},
      {fr:"카드 되요?", ipa:"ka-deu doe-yo", en:"Do you accept cards?"},
      {fr:"영수증 주세요.", ipa:"yeong-su-jeung ju-se-yo", en:"Please give me a receipt."},
      {fr:"잔돈 주세요.", ipa:"jan-don ju-se-yo", en:"Please give me change."}
    ],
    grammar:"Korean currency is Won (원). Prices are large numbers — 1,000원 ≈ $0.75 USD. 만 (10,000) is a key unit. '이만 원' = 20,000 won. Always use Sino-Korean numbers for prices.",
    practice:["Practice saying prices: 오천 원, 일만 원, 삼만 원.", "Ask '얼마예요?' out loud — you'll use this constantly."]
  },
  { day:6, title:"Time, Days & Dates", titleNative:"시간과 날짜", focus:"Tell time and plan your day.",
    vocab:[
      {fr:"지금 몇 시예요?", ipa:"ji-geum myeot si-ye-yo", en:"What time is it now?"},
      {fr:"오전", ipa:"o-jeon", en:"AM / Morning"},
      {fr:"오후", ipa:"o-hu", en:"PM / Afternoon"},
      {fr:"월요일", ipa:"wol-yo-il", en:"Monday"},
      {fr:"화요일", ipa:"hwa-yo-il", en:"Tuesday"},
      {fr:"수요일", ipa:"su-yo-il", en:"Wednesday"},
      {fr:"목요일", ipa:"mok-yo-il", en:"Thursday"},
      {fr:"금요일", ipa:"geum-yo-il", en:"Friday"},
      {fr:"토요일", ipa:"to-yo-il", en:"Saturday"},
      {fr:"일요일", ipa:"il-yo-il", en:"Sunday"}
    ],
    phrases:[
      {fr:"지금 몇 시예요? 두 시예요.", ipa:"ji-geum myeot si-ye-yo? du si-ye-yo", en:"What time is it? It's 2 o'clock."},
      {fr:"오전 열 시에 만나요.", ipa:"o-jeon yeol si-e man-na-yo", en:"Let's meet at 10 AM."},
      {fr:"오늘이 무슨 요일이에요?", ipa:"o-neul-i mu-seun yo-il-i-e-yo", en:"What day of the week is today?"},
      {fr:"금요일이에요.", ipa:"geum-yo-il-i-e-yo", en:"It's Friday."},
      {fr:"내일 봐요!", ipa:"nae-il bwa-yo", en:"See you tomorrow!"},
      {fr:"오늘 몇 월 며칠이에요?", ipa:"o-neul myeot wol myeo-chil-i-e-yo", en:"What is today's date?"},
      {fr:"주말에 뭐 해요?", ipa:"ju-mal-e mwo hae-yo", en:"What are you doing on the weekend?"},
      {fr:"토요일에 만나요.", ipa:"to-yo-il-e man-na-yo", en:"Let's meet on Saturday."}
    ],
    grammar:"Hours use native Korean numbers: 한 시 (1 o'clock), 두 시 (2 o'clock). Minutes use Sino-Korean: 삼십 분 (30 minutes). So 2:30 = 두 시 삼십 분. Yes, Korea uses both systems at once.",
    practice:["Say today's day of the week in Korean.", "Practice saying the current time out loud."]
  },
  { day:7, title:"Colors & Descriptive Words", titleNative:"색깔과 묘사", focus:"Describe what you see.",
    vocab:[
      {fr:"빨간색", ipa:"ppal-gan-saek", en:"Red"},
      {fr:"파란색", ipa:"pa-ran-saek", en:"Blue"},
      {fr:"노란색", ipa:"no-ran-saek", en:"Yellow"},
      {fr:"초록색", ipa:"cho-rok-saek", en:"Green"},
      {fr:"하얀색", ipa:"ha-yan-saek", en:"White"},
      {fr:"검은색", ipa:"geom-eun-saek", en:"Black"},
      {fr:"예뻐요", ipa:"ye-ppeo-yo", en:"It's pretty / beautiful"},
      {fr:"커요", ipa:"keo-yo", en:"It's big"},
      {fr:"작아요", ipa:"jak-a-yo", en:"It's small"},
      {fr:"맛있어요", ipa:"mas-it-eo-yo", en:"It's delicious"}
    ],
    phrases:[
      {fr:"이 색이 뭐예요?", ipa:"i saek-i mwo-ye-yo", en:"What color is this?"},
      {fr:"빨간색 주세요.", ipa:"ppal-gan-saek ju-se-yo", en:"Please give me the red one."},
      {fr:"너무 예뻐요!", ipa:"neo-mu ye-ppeo-yo", en:"So beautiful / pretty!"},
      {fr:"이거 너무 커요.", ipa:"i-geo neo-mu keo-yo", en:"This is too big."},
      {fr:"더 작은 거 있어요?", ipa:"deo jak-eun geo it-eo-yo", en:"Do you have a smaller one?"},
      {fr:"맛있어요! 정말 맛있어요.", ipa:"mas-it-eo-yo! jeong-mal mas-it-eo-yo", en:"Delicious! Really delicious."},
      {fr:"이게 뭐예요?", ipa:"i-ge mwo-ye-yo", en:"What is this?"},
      {fr:"정말 멋있어요!", ipa:"jeong-mal meot-it-eo-yo", en:"Really cool / awesome!"}
    ],
    grammar:"Korean adjectives act like verbs — they conjugate! '예쁘다' becomes '예뻐요' in polite speech. You don't say 'the food is delicious' with separate words — '맛있어요' IS the whole sentence.",
    practice:["Look around and name 5 colors in Korean.", "Practice '맛있어요' — you'll say this constantly in Korea."]
  },
  { day:8, title:"At the Café", titleNative:"카페에서", focus:"Korea's café culture is world-class — you'll be here a lot.",
    vocab:[
      {fr:"커피", ipa:"keo-pi", en:"Coffee"},
      {fr:"아메리카노", ipa:"a-me-ri-ka-no", en:"Americano (most popular in Korea)"},
      {fr:"카페라떼", ipa:"ka-pe-ra-tte", en:"Café latte"},
      {fr:"녹차", ipa:"nok-cha", en:"Green tea"},
      {fr:"차가운", ipa:"cha-ga-un", en:"Cold / iced"},
      {fr:"따뜻한", ipa:"tta-tteut-han", en:"Hot / warm"},
      {fr:"테이크아웃", ipa:"te-i-keu-a-ut", en:"Takeout"},
      {fr:"여기서 마실게요", ipa:"yeo-gi-seo ma-sil-ge-yo", en:"I'll drink here"},
      {fr:"사이즈", ipa:"sa-i-jeu", en:"Size"},
      {fr:"설탕", ipa:"seol-tang", en:"Sugar"}
    ],
    phrases:[
      {fr:"아메리카노 한 잔 주세요.", ipa:"a-me-ri-ka-no han jan ju-se-yo", en:"One Americano, please."},
      {fr:"아이스로 주세요.", ipa:"a-i-seu-ro ju-se-yo", en:"Iced, please."},
      {fr:"따뜻하게 주세요.", ipa:"tta-tteut-ha-ge ju-se-yo", en:"Hot, please."},
      {fr:"테이크아웃이요.", ipa:"te-i-keu-a-ut-i-yo", en:"Takeout, please."},
      {fr:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much?"},
      {fr:"카드 되요?", ipa:"ka-deu doe-yo", en:"Do you take cards?"},
      {fr:"영수증 주세요.", ipa:"yeong-su-jeung ju-se-yo", en:"Receipt please."},
      {fr:"와이파이 비밀번호가 뭐예요?", ipa:"wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo", en:"What's the WiFi password?"}
    ],
    grammar:"아이스 (iced) and 핫 (hot) are English loanwords used constantly. Korean has thousands of English-origin words — called 외래어 (waeraeeo). Spotting them makes ordering much easier.",
    practice:["Order your usual coffee drink in Korean out loud.", "Memorize '와이파이 비밀번호가 뭐예요?' — essential for any Korean café."]
  },
  { day:9, title:"Ordering Food", titleNative:"음식 주문하기", focus:"Navigate Korean restaurants like a local.",
    vocab:[
      {fr:"메뉴 주세요", ipa:"me-nyu ju-se-yo", en:"Menu please"},
      {fr:"주문할게요", ipa:"ju-mun-hal-ge-yo", en:"I'd like to order"},
      {fr:"이거 주세요", ipa:"i-geo ju-se-yo", en:"I'll have this (pointing)"},
      {fr:"맵지 않게 해 주세요", ipa:"maep-ji an-ke hae ju-se-yo", en:"Please make it not spicy"},
      {fr:"맵게 해 주세요", ipa:"maep-ge hae ju-se-yo", en:"Please make it spicy"},
      {fr:"채식주의자예요", ipa:"chae-sik-ju-ui-ja-ye-yo", en:"I am vegetarian"},
      {fr:"물 주세요", ipa:"mul ju-se-yo", en:"Water please"},
      {fr:"리필 되요?", ipa:"ri-pil doe-yo", en:"Is refill available?"},
      {fr:"계산해 주세요", ipa:"gye-san-hae ju-se-yo", en:"Check please"},
      {fr:"포장해 주세요", ipa:"po-jang-hae ju-se-yo", en:"Please pack it to go"}
    ],
    phrases:[
      {fr:"여기요! 주문할게요.", ipa:"yeo-gi-yo! ju-mun-hal-ge-yo", en:"Excuse me! I'd like to order."},
      {fr:"비빔밥 하나 주세요.", ipa:"bi-bim-bap ha-na ju-se-yo", en:"One bibimbap please."},
      {fr:"이거 맛있어요?", ipa:"i-geo mas-it-eo-yo", en:"Is this delicious?"},
      {fr:"인기 있는 게 뭐예요?", ipa:"in-gi it-neun ge mwo-ye-yo", en:"What's popular here?"},
      {fr:"맵지 않게 해 주세요.", ipa:"maep-ji an-ke hae ju-se-yo", en:"Please make it not spicy."},
      {fr:"정말 맛있어요! 잘 먹었습니다.", ipa:"jeong-mal mas-it-eo-yo! jal meok-eot-seum-ni-da", en:"So delicious! Thank you for the meal."},
      {fr:"계산해 주세요.", ipa:"gye-san-hae ju-se-yo", en:"Bill please."},
      {fr:"같이 계산해 주세요.", ipa:"gat-i gye-san-hae ju-se-yo", en:"Together on one bill please."}
    ],
    grammar:"'여기요!' (yeo-gi-yo) literally means 'here!' — it's how you call a server in Korea. Shouting it is normal and expected. '잘 먹겠습니다' (before eating) and '잘 먹었습니다' (after) are set phrases showing gratitude for food.",
    practice:["Practice '여기요! 주문할게요.' with the right intonation.", "Memorize '잘 먹었습니다' — Koreans appreciate foreigners who know this."]
  },
  { day:10, title:"Shopping", titleNative:"쇼핑", focus:"Markets, malls, and K-pop merch stores.",
    vocab:[
      {fr:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much is it?"},
      {fr:"비싸요", ipa:"bi-ssa-yo", en:"It's expensive"},
      {fr:"싸요", ipa:"ssa-yo", en:"It's cheap"},
      {fr:"할인 되요?", ipa:"hal-in doe-yo", en:"Is there a discount?"},
      {fr:"이거 입어봐도 되요?", ipa:"i-geo ib-eo-bwa-do doe-yo", en:"Can I try this on?"},
      {fr:"다른 색 있어요?", ipa:"da-reun saek it-eo-yo", en:"Do you have another color?"},
      {fr:"사이즈가 뭐예요?", ipa:"sa-i-jeu-ga mwo-ye-yo", en:"What size is this?"},
      {fr:"포장해 주세요", ipa:"po-jang-hae ju-se-yo", en:"Please wrap/package it"},
      {fr:"선물이에요", ipa:"seon-mul-i-e-yo", en:"It's a gift"},
      {fr:"영수증 주세요", ipa:"yeong-su-jeung ju-se-yo", en:"Receipt please"}
    ],
    phrases:[
      {fr:"이거 얼마예요?", ipa:"i-geo eol-ma-ye-yo", en:"How much is this?"},
      {fr:"너무 비싸요. 깎아 주세요.", ipa:"neo-mu bi-ssa-yo. kkak-ka ju-se-yo", en:"Too expensive. Please give a discount."},
      {fr:"이거 살게요.", ipa:"i-geo sal-ge-yo", en:"I'll buy this."},
      {fr:"다른 거 보여 주세요.", ipa:"da-reun geo bo-yeo ju-se-yo", en:"Show me another one."},
      {fr:"카드로 계산할게요.", ipa:"ka-deu-ro gye-san-hal-ge-yo", en:"I'll pay by card."},
      {fr:"선물 포장해 주세요.", ipa:"seon-mul po-jang-hae ju-se-yo", en:"Please gift wrap it."},
      {fr:"환불 되요?", ipa:"hwan-bul doe-yo", en:"Can I get a refund?"},
      {fr:"교환 되요?", ipa:"gyo-hwan doe-yo", en:"Can I exchange it?"}
    ],
    grammar:"Koreans often show prices on a calculator rather than say them — prices can be large numbers. Watch for the unit 만 (10,000 won). An item that costs '삼만 원' = 30,000 won ≈ $22 USD.",
    practice:["Practice the price negotiation phrases — useful at Namdaemun Market.", "Say '이거 살게요' out loud — decisive buyers get good service."]
  },
  { day:11, title:"Directions & Getting Around", titleNative:"길 찾기", focus:"Navigate Seoul's streets.",
    vocab:[
      {fr:"어디예요?", ipa:"eo-di-ye-yo", en:"Where is it?"},
      {fr:"~에 어떻게 가요?", ipa:"~e eo-tteo-ke ga-yo", en:"How do I get to ~?"},
      {fr:"왼쪽", ipa:"oen-jjok", en:"Left"},
      {fr:"오른쪽", ipa:"o-reun-jjok", en:"Right"},
      {fr:"직진", ipa:"jik-jin", en:"Straight ahead"},
      {fr:"여기", ipa:"yeo-gi", en:"Here"},
      {fr:"저기", ipa:"jeo-gi", en:"Over there"},
      {fr:"가까워요", ipa:"ga-kka-wo-yo", en:"It's close"},
      {fr:"멀어요", ipa:"meol-eo-yo", en:"It's far"},
      {fr:"지도 보여 주세요", ipa:"ji-do bo-yeo ju-se-yo", en:"Please show me the map"}
    ],
    phrases:[
      {fr:"경복궁이 어디예요?", ipa:"gyeong-bok-gung-i eo-di-ye-yo", en:"Where is Gyeongbokgung Palace?"},
      {fr:"지하철역이 어디예요?", ipa:"ji-ha-cheol-yeok-i eo-di-ye-yo", en:"Where is the subway station?"},
      {fr:"여기서 얼마나 걸려요?", ipa:"yeo-gi-seo eol-ma-na geol-lyeo-yo", en:"How long does it take from here?"},
      {fr:"걸어서 갈 수 있어요?", ipa:"geol-eo-seo gal su it-eo-yo", en:"Can I walk there?"},
      {fr:"오른쪽으로 가세요.", ipa:"o-reun-jjok-eu-ro ga-se-yo", en:"Go to the right."},
      {fr:"저기서 왼쪽으로 도세요.", ipa:"jeo-gi-seo oen-jjok-eu-ro do-se-yo", en:"Turn left over there."},
      {fr:"길을 잃었어요.", ipa:"gil-eul il-eot-eo-yo", en:"I'm lost."},
      {fr:"지도 앱으로 찾아볼게요.", ipa:"ji-do aeb-eu-ro chat-a-bol-ge-yo", en:"I'll look it up on the maps app."}
    ],
    grammar:"Korean addresses go from largest to smallest: country → city → district → street → building number. The opposite of English. GPS apps work great in Korea — Naver Maps or Kakao Maps beat Google in accuracy.",
    practice:["Look up your hotel or a landmark and ask for directions in Korean.", "Practice left/right: 왼쪽, 오른쪽 — say them while physically pointing."]
  },
  { day:12, title:"Seoul Subway & Transportation", titleNative:"지하철과 교통", focus:"Seoul's subway is one of the world's best.",
    vocab:[
      {fr:"지하철", ipa:"ji-ha-cheol", en:"Subway"},
      {fr:"버스", ipa:"beo-seu", en:"Bus"},
      {fr:"택시", ipa:"taek-si", en:"Taxi"},
      {fr:"기차", ipa:"gi-cha", en:"Train (KTX)"},
      {fr:"~행", ipa:"~haeng", en:"Bound for ~ (direction)"},
      {fr:"다음 역", ipa:"da-eum yeok", en:"Next station"},
      {fr:"환승", ipa:"hwan-seung", en:"Transfer"},
      {fr:"교통카드", ipa:"gyo-tong-ka-deu", en:"Transit card (T-money)"},
      {fr:"출구", ipa:"chul-gu", en:"Exit"},
      {fr:"승강장", ipa:"seung-gang-jang", en:"Platform"}
    ],
    phrases:[
      {fr:"명동역 어디예요?", ipa:"myeong-dong-yeok eo-di-ye-yo", en:"Where is Myeongdong Station?"},
      {fr:"이 지하철 강남역 가요?", ipa:"i ji-ha-cheol gang-nam-yeok ga-yo", en:"Does this subway go to Gangnam?"},
      {fr:"몇 번 출구예요?", ipa:"myeot beon chul-gu-ye-yo", en:"Which exit number?"},
      {fr:"어디서 환승해요?", ipa:"eo-di-seo hwan-seung-hae-yo", en:"Where do I transfer?"},
      {fr:"티머니 어디서 충전해요?", ipa:"ti-meo-ni eo-di-seo chung-jeon-hae-yo", en:"Where can I top up my T-money?"},
      {fr:"강남까지 얼마예요?", ipa:"gang-nam-kka-ji eol-ma-ye-yo", en:"How much is it to Gangnam?"},
      {fr:"여기 세워 주세요.", ipa:"yeo-gi se-wo ju-se-yo", en:"Please stop here. (taxi)"},
      {fr:"공항 가주세요.", ipa:"gong-hang ga-ju-se-yo", en:"Please go to the airport."}
    ],
    grammar:"Seoul's subway announces stations in Korean, English, Chinese, and Japanese. Still, knowing Korean station names helps. The T-money card works on subway, bus, and even some taxis — buy one at any convenience store.",
    practice:["Memorize '몇 번 출구예요?' — exit numbers are crucial in Seoul.", "Practice '여기 세워 주세요' for taxis — it works every time."]
  },
  { day:13, title:"At the Hotel", titleNative:"호텔에서", focus:"Check in, check out, get what you need.",
    vocab:[
      {fr:"체크인", ipa:"che-keu-in", en:"Check in"},
      {fr:"체크아웃", ipa:"che-keu-a-ut", en:"Check out"},
      {fr:"예약", ipa:"ye-yak", en:"Reservation"},
      {fr:"방", ipa:"bang", en:"Room"},
      {fr:"열쇠 / 카드키", ipa:"yeol-soe / ka-deu-ki", en:"Key / Key card"},
      {fr:"짐", ipa:"jim", en:"Luggage"},
      {fr:"와이파이", ipa:"wa-i-pa-i", en:"WiFi"},
      {fr:"엘리베이터", ipa:"el-li-be-i-teo", en:"Elevator"},
      {fr:"수건", ipa:"su-geon", en:"Towel"},
      {fr:"아침 식사", ipa:"a-chim sik-sa", en:"Breakfast"}
    ],
    phrases:[
      {fr:"체크인하고 싶어요.", ipa:"che-keu-in-ha-go sip-eo-yo", en:"I'd like to check in."},
      {fr:"예약했어요. 이름은 지미예요.", ipa:"ye-yak-haet-eo-yo. i-reum-eun ji-mi-ye-yo", en:"I have a reservation. My name is Jimmy."},
      {fr:"와이파이 비밀번호가 뭐예요?", ipa:"wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo", en:"What's the WiFi password?"},
      {fr:"수건 더 주세요.", ipa:"su-geon deo ju-se-yo", en:"Please give me more towels."},
      {fr:"방이 너무 추워요.", ipa:"bang-i neo-mu chu-wo-yo", en:"The room is too cold."},
      {fr:"열쇠가 안 돼요.", ipa:"yeol-soe-ga an dwae-yo", en:"The key doesn't work."},
      {fr:"체크아웃은 몇 시예요?", ipa:"che-keu-a-ut-eun myeot si-ye-yo", en:"What time is checkout?"},
      {fr:"짐 맡겨도 될까요?", ipa:"jim mat-gyeo-do doel-kka-yo", en:"Can I leave my luggage here?"}
    ],
    grammar:"Korean hotels range from luxury 5-stars to jjimjilbang (찜질방 — heated bathhouse/sleeping floor). 모텔 (motel) is budget but clean. 게스트하우스 (guesthouse) is social. Know your 숙박 (accommodation) options.",
    practice:["Practice the check-in phrases as if arriving at a hotel.", "Learn '와이파이 비밀번호가 뭐예요?' — first thing anyone asks anywhere."]
  },
  { day:14, title:"Health & Emergencies", titleNative:"건강과 응급상황", focus:"Stay safe — phrases you hope you never need.",
    vocab:[
      {fr:"도와주세요!", ipa:"do-wa-ju-se-yo", en:"Help me!"},
      {fr:"병원", ipa:"byeong-won", en:"Hospital"},
      {fr:"약국", ipa:"yak-guk", en:"Pharmacy"},
      {fr:"아파요", ipa:"a-pa-yo", en:"I'm sick / It hurts"},
      {fr:"여기가 아파요", ipa:"yeo-gi-ga a-pa-yo", en:"It hurts here"},
      {fr:"두통이 있어요", ipa:"du-tong-i it-eo-yo", en:"I have a headache"},
      {fr:"열이 있어요", ipa:"yeol-i it-eo-yo", en:"I have a fever"},
      {fr:"알레르기가 있어요", ipa:"al-le-reu-gi-ga it-eo-yo", en:"I have an allergy"},
      {fr:"119", ipa:"il-il-gu", en:"Emergency number (Korea)"},
      {fr:"경찰", ipa:"gyeong-chal", en:"Police"}
    ],
    phrases:[
      {fr:"도와주세요! 응급상황이에요!", ipa:"do-wa-ju-se-yo! eung-geup-sang-hwang-i-e-yo", en:"Help me! This is an emergency!"},
      {fr:"병원에 가야 해요.", ipa:"byeong-won-e ga-ya hae-yo", en:"I need to go to the hospital."},
      {fr:"약국이 어디예요?", ipa:"yak-guk-i eo-di-ye-yo", en:"Where is the pharmacy?"},
      {fr:"두통약 있어요?", ipa:"du-tong-yak it-eo-yo", en:"Do you have headache medicine?"},
      {fr:"견과류 알레르기가 있어요.", ipa:"gyeon-gwa-ryu al-le-reu-gi-ga it-eo-yo", en:"I have a nut allergy."},
      {fr:"119에 전화해 주세요.", ipa:"il-il-gu-e jeon-hwa-hae ju-se-yo", en:"Please call 119 (emergency)."},
      {fr:"여권을 잃어버렸어요.", ipa:"yeo-gwon-eul il-eo-beo-ryeot-eo-yo", en:"I lost my passport."},
      {fr:"대사관이 어디예요?", ipa:"dae-sa-gwan-i eo-di-ye-yo", en:"Where is the embassy?"}
    ],
    grammar:"Korea's emergency number is 119 (fire/ambulance) and 112 (police). Most major hospital ERs in Seoul have English interpreters. T-Map and Naver Maps can route you to the nearest 응급실 (emergency room) fast.",
    practice:["Save 119 and 112 in your phone before you travel.", "Practice '도와주세요!' loudly — don't be shy in a real emergency."]
  },
  { day:15, title:"Family & Relationships", titleNative:"가족과 관계", focus:"Talk about the people in your life.",
    vocab:[
      {fr:"가족", ipa:"ga-jok", en:"Family"},
      {fr:"부모님", ipa:"bu-mo-nim", en:"Parents"},
      {fr:"아버지", ipa:"a-beo-ji", en:"Father"},
      {fr:"어머니", ipa:"eo-meo-ni", en:"Mother"},
      {fr:"형 / 오빠", ipa:"hyeong / op-pa", en:"Older brother (said by male/female)"},
      {fr:"누나 / 언니", ipa:"nu-na / eon-ni", en:"Older sister (said by male/female)"},
      {fr:"남자친구", ipa:"nam-ja-chin-gu", en:"Boyfriend"},
      {fr:"여자친구", ipa:"yeo-ja-chin-gu", en:"Girlfriend"},
      {fr:"결혼했어요?", ipa:"gyeol-hon-haet-eo-yo", en:"Are you married?"},
      {fr:"친구", ipa:"chin-gu", en:"Friend"}
    ],
    phrases:[
      {fr:"가족이 몇 명이에요?", ipa:"ga-jok-i myeot myeong-i-e-yo", en:"How many people are in your family?"},
      {fr:"형제자매가 있어요?", ipa:"hyeong-je-ja-mae-ga it-eo-yo", en:"Do you have siblings?"},
      {fr:"남자친구/여자친구 있어요?", ipa:"nam-ja-chin-gu/yeo-ja-chin-gu it-eo-yo", en:"Do you have a boyfriend/girlfriend?"},
      {fr:"결혼했어요.", ipa:"gyeol-hon-haet-eo-yo", en:"I am married."},
      {fr:"혼자예요.", ipa:"hon-ja-ye-yo", en:"I'm alone / single."},
      {fr:"제 친구예요.", ipa:"je chin-gu-ye-yo", en:"This is my friend."},
      {fr:"부모님이 보고 싶어요.", ipa:"bu-mo-nim-i bo-go sip-eo-yo", en:"I miss my parents."},
      {fr:"한국에 아는 사람 없어요.", ipa:"han-gug-e a-neun sa-ram eop-eo-yo", en:"I don't know anyone in Korea."}
    ],
    grammar:"Korean kinship terms are complex — how you address someone depends on YOUR gender, not theirs. 오빠 (oppa) is an older brother if YOU are female. This is why K-drama fans know the word — female fans call male idols '오빠'.",
    practice:["Describe your family in 2–3 sentences using Korean.", "Learn 오빠/언니/형/누나 — these come up constantly in K-content."]
  },
  { day:16, title:"Weather & Seasons", titleNative:"날씨와 계절", focus:"Korea has dramatic seasons.",
    vocab:[
      {fr:"날씨가 어때요?", ipa:"nal-ssi-ga eo-ttae-yo", en:"How is the weather?"},
      {fr:"더워요", ipa:"deo-wo-yo", en:"It's hot"},
      {fr:"추워요", ipa:"chu-wo-yo", en:"It's cold"},
      {fr:"비가 와요", ipa:"bi-ga wa-yo", en:"It's raining"},
      {fr:"눈이 와요", ipa:"nun-i wa-yo", en:"It's snowing"},
      {fr:"맑아요", ipa:"mal-ga-yo", en:"It's clear/sunny"},
      {fr:"봄 / 여름 / 가을 / 겨울", ipa:"bom / yeo-reum / ga-eul / gyeo-ul", en:"Spring / Summer / Fall / Winter"},
      {fr:"미세먼지", ipa:"mi-se-meon-ji", en:"Fine dust / air pollution"},
      {fr:"태풍", ipa:"tae-pung", en:"Typhoon"},
      {fr:"습해요", ipa:"seup-hae-yo", en:"It's humid"}
    ],
    phrases:[
      {fr:"오늘 날씨가 어때요?", ipa:"o-neul nal-ssi-ga eo-ttae-yo", en:"How is the weather today?"},
      {fr:"너무 더워요! 에어컨 있어요?", ipa:"neo-mu deo-wo-yo! e-eo-keon it-eo-yo", en:"So hot! Is there air conditioning?"},
      {fr:"비가 많이 와요.", ipa:"bi-ga man-i wa-yo", en:"It's raining a lot."},
      {fr:"오늘 미세먼지 심해요.", ipa:"o-neul mi-se-meon-ji sim-hae-yo", en:"The fine dust is bad today."},
      {fr:"마스크 써야 해요?", ipa:"ma-seu-keu sseo-ya hae-yo", en:"Do I need to wear a mask?"},
      {fr:"한국 가을이 정말 예뻐요!", ipa:"han-guk ga-eul-i jeong-mal ye-ppeo-yo", en:"Korean autumn is really beautiful!"},
      {fr:"내일 눈이 온대요.", ipa:"nae-il nun-i on-dae-yo", en:"They say it will snow tomorrow."},
      {fr:"우산 있어요?", ipa:"u-san it-eo-yo", en:"Do you have an umbrella?"}
    ],
    grammar:"미세먼지 (fine dust) is a major topic in Korea — pollution from China creates bad air quality days. Locals check apps daily. The Air Korea app (에어코리아) is the go-to. On bad days, everyone wears masks.",
    practice:["Check today's weather and describe it in Korean.", "Learn 미세먼지 — locals will bring it up in conversation."]
  },
  { day:17, title:"Emotions & Feelings", titleNative:"감정과 기분", focus:"Express yourself beyond just 'good'.",
    vocab:[
      {fr:"좋아요", ipa:"jo-a-yo", en:"I like it / It's good"},
      {fr:"싫어요", ipa:"sil-eo-yo", en:"I don't like it"},
      {fr:"행복해요", ipa:"haeng-bok-hae-yo", en:"I'm happy"},
      {fr:"슬퍼요", ipa:"seul-peo-yo", en:"I'm sad"},
      {fr:"피곤해요", ipa:"pi-gon-hae-yo", en:"I'm tired"},
      {fr:"배고파요", ipa:"bae-go-pa-yo", en:"I'm hungry"},
      {fr:"배불러요", ipa:"bae-bul-leo-yo", en:"I'm full"},
      {fr:"설레요", ipa:"seol-le-yo", en:"I'm excited/flutter feeling"},
      {fr:"그리워요", ipa:"geu-ri-wo-yo", en:"I miss (something/someone)"},
      {fr:"무서워요", ipa:"mu-seo-wo-yo", en:"I'm scared"}
    ],
    phrases:[
      {fr:"지금 기분이 어때요?", ipa:"ji-geum gi-bun-i eo-ttae-yo", en:"How are you feeling right now?"},
      {fr:"너무 피곤해요, 자고 싶어요.", ipa:"neo-mu pi-gon-hae-yo, ja-go sip-eo-yo", en:"I'm so tired, I want to sleep."},
      {fr:"배고파요! 밥 먹어요.", ipa:"bae-go-pa-yo! bap meok-eo-yo", en:"I'm hungry! Let's eat."},
      {fr:"한국에 와서 정말 행복해요.", ipa:"han-gug-e wa-seo jeong-mal haeng-bok-hae-yo", en:"I'm really happy to be in Korea."},
      {fr:"설레요! 처음이에요.", ipa:"seol-le-yo! cheo-eum-i-e-yo", en:"I'm so excited! It's my first time."},
      {fr:"집이 그리워요.", ipa:"jib-i geu-ri-wo-yo", en:"I miss home."},
      {fr:"이거 너무 좋아요!", ipa:"i-geo neo-mu jo-a-yo", en:"I love this so much!"},
      {fr:"별로예요.", ipa:"byeol-lo-ye-yo", en:"It's not great / I don't really like it."}
    ],
    grammar:"설레다 (seolleda) is an untranslatable Korean emotion — the fluttery excitement mixed with anticipation you feel before something good. K-pop fans know this feeling. There's no exact English equivalent.",
    practice:["Describe your current mood using today's vocab.", "설레요 is a great phrase — use it when something excites you in Korea."]
  },
  { day:18, title:"Activities & Hobbies", titleNative:"활동과 취미", focus:"What do you do for fun?",
    vocab:[
      {fr:"취미가 뭐예요?", ipa:"chwi-mi-ga mwo-ye-yo", en:"What is your hobby?"},
      {fr:"음악 듣기", ipa:"eum-ak deut-gi", en:"Listening to music"},
      {fr:"영화 보기", ipa:"yeong-hwa bo-gi", en:"Watching movies"},
      {fr:"여행하기", ipa:"yeo-haeng-ha-gi", en:"Traveling"},
      {fr:"요리하기", ipa:"yo-ri-ha-gi", en:"Cooking"},
      {fr:"운동하기", ipa:"un-dong-ha-gi", en:"Working out / exercising"},
      {fr:"사진 찍기", ipa:"sa-jin jjik-gi", en:"Taking photos"},
      {fr:"게임하기", ipa:"ge-im-ha-gi", en:"Playing games"},
      {fr:"독서", ipa:"dok-seo", en:"Reading"},
      {fr:"노래방", ipa:"no-rae-bang", en:"Karaoke room (private booth)"}
    ],
    phrases:[
      {fr:"취미가 뭐예요? 저는 여행을 좋아해요.", ipa:"chwi-mi-ga mwo-ye-yo? jeo-neun yeo-haeng-eul jo-a-hae-yo", en:"What's your hobby? I like traveling."},
      {fr:"노래방 가고 싶어요!", ipa:"no-rae-bang ga-go sip-eo-yo", en:"I want to go to norebang!"},
      {fr:"K-팝 좋아해요?", ipa:"ke-i-pap jo-a-hae-yo", en:"Do you like K-pop?"},
      {fr:"같이 운동해요!", ipa:"gat-i un-dong-hae-yo", en:"Let's work out together!"},
      {fr:"한국 드라마를 많이 봐요.", ipa:"han-guk deu-ra-ma-reul man-i bwa-yo", en:"I watch a lot of Korean dramas."},
      {fr:"사진 찍어도 돼요?", ipa:"sa-jin jjig-eo-do dwae-yo", en:"May I take a photo?"},
      {fr:"여기서 뭐가 재미있어요?", ipa:"yeo-gi-seo mwo-ga jae-mi-it-eo-yo", en:"What's fun to do here?"},
      {fr:"치맥 어때요?", ipa:"chi-maek eo-ttae-yo", en:"How about chimaek? (fried chicken + beer)"}
    ],
    grammar:"노래방 (norebang) is private karaoke — you rent a booth with your group. Not a bar. You order food and drinks to the room. It's a staple of Korean social life — refusing norebang is like refusing pizza in New York.",
    practice:["Say your hobbies in Korean — at least 2.", "Learn '사진 찍어도 돼요?' — you'll want lots of photos."]
  },
  { day:19, title:"K-Pop & Korean Culture", titleNative:"K-팝과 한국 문화", focus:"The vocabulary that put Korea on the global map.",
    vocab:[
      {fr:"아이돌", ipa:"a-i-dol", en:"Idol (K-pop star)"},
      {fr:"팬", ipa:"paen", en:"Fan"},
      {fr:"콘서트", ipa:"kon-seo-teu", en:"Concert"},
      {fr:"앨범", ipa:"ael-beum", en:"Album"},
      {fr:"데뷔", ipa:"de-bwi", en:"Debut"},
      {fr:"화이팅!", ipa:"hwa-i-ting", en:"Fighting! / You can do it! (encouragement)"},
      {fr:"대박!", ipa:"dae-bak", en:"Jackpot! / Awesome! / No way!"},
      {fr:"헐!", ipa:"heol", en:"Oh my gosh! / What!"},
      {fr:"귀여워요", ipa:"gwi-yeo-wo-yo", en:"It's cute"},
      {fr:"멋있어요", ipa:"meot-it-eo-yo", en:"It's cool / handsome"}
    ],
    phrases:[
      {fr:"어떤 그룹 좋아해요?", ipa:"eo-tteon geu-rup jo-a-hae-yo", en:"Which group do you like?"},
      {fr:"방탄소년단 팬이에요?", ipa:"bang-tan-so-nyeon-dan paen-i-e-yo", en:"Are you a BTS fan?"},
      {fr:"이번 앨범 너무 좋아요!", ipa:"i-beon ael-beum neo-mu jo-a-yo", en:"This album is so good!"},
      {fr:"대박! 진짜요?", ipa:"dae-bak! jin-jja-yo", en:"No way! Really?"},
      {fr:"화이팅! 할 수 있어요!", ipa:"hwa-i-ting! hal su it-eo-yo", en:"You can do it!"},
      {fr:"너무 귀여워요!", ipa:"neo-mu gwi-yeo-wo-yo", en:"So cute!"},
      {fr:"한국 드라마가 너무 재미있어요.", ipa:"han-guk deu-ra-ma-ga neo-mu jae-mi-it-eo-yo", en:"Korean dramas are so interesting."},
      {fr:"오빠!!! 사랑해요!", ipa:"op-pa!!! sa-rang-hae-yo", en:"Oppa!!! I love you! (classic fan phrase)"}
    ],
    grammar:"화이팅 (hwaiting) is borrowed from English 'fighting' but used as encouragement — like 'go for it!' or 'you've got this!' You'll hear it before exams, competitions, or any challenge. It's warm and sincere, not aggressive.",
    practice:["Use 대박! today for something that surprises or impresses you.", "화이팅 is contagious — practice saying it with energy."]
  },
  { day:20, title:"Korean Food Culture", titleNative:"한국 음식 문화", focus:"The dishes, the culture, the must-eats.",
    vocab:[
      {fr:"비빔밥", ipa:"bi-bim-bap", en:"Bibimbap (mixed rice bowl)"},
      {fr:"삼겹살", ipa:"sam-gyeop-sal", en:"Pork belly BBQ"},
      {fr:"김치", ipa:"gim-chi", en:"Kimchi"},
      {fr:"냉면", ipa:"naeng-myeon", en:"Cold noodles"},
      {fr:"떡볶이", ipa:"tteok-bo-kki", en:"Spicy rice cakes"},
      {fr:"치킨", ipa:"chi-kin", en:"Korean fried chicken"},
      {fr:"소주", ipa:"so-ju", en:"Soju (Korean rice liquor)"},
      {fr:"막걸리", ipa:"mak-geol-li", en:"Makgeolli (rice wine)"},
      {fr:"한 잔 해요", ipa:"han jan hae-yo", en:"Let's have a drink"},
      {fr:"건배!", ipa:"geon-bae", en:"Cheers!"}
    ],
    phrases:[
      {fr:"삼겹살 2인분 주세요.", ipa:"sam-gyeop-sal i-in-bun ju-se-yo", en:"Pork belly for 2 people, please."},
      {fr:"여기 인기 메뉴가 뭐예요?", ipa:"yeo-gi in-gi me-nyu-ga mwo-ye-yo", en:"What's the popular dish here?"},
      {fr:"소주 한 병 주세요.", ipa:"so-ju han byeong ju-se-yo", en:"One bottle of soju please."},
      {fr:"건배! 원샷!", ipa:"geon-bae! won-syat", en:"Cheers! Bottoms up!"},
      {fr:"이거 이름이 뭐예요?", ipa:"i-geo i-reum-i mwo-ye-yo", en:"What is this called?"},
      {fr:"너무 매워요!", ipa:"neo-mu mae-wo-yo", en:"This is too spicy!"},
      {fr:"맛있어요! 한 번 더 주세요!", ipa:"mas-it-eo-yo! han beon deo ju-se-yo", en:"Delicious! One more please!"},
      {fr:"치맥 최고야!", ipa:"chi-maek choe-go-ya", en:"Chimaek is the best! (fried chicken + beer)"}
    ],
    grammar:"In Korean BBQ culture, the grill is at your table and often the server grills the meat for you. You don't tip in Korea — it's actually considered rude. Instead, say '잘 먹겠습니다' before and '잘 먹었습니다' after — that's your gratitude.",
    practice:["Learn the names of 3 Korean dishes you want to try.", "Practice '잘 먹겠습니다' and '잘 먹었습니다' — these impress locals every time."]
  },
  { day:21, title:"At the Convenience Store", titleNative:"편의점에서", focus:"편의점 (pyeonuijeom) — Korea's 24/7 lifeline.",
    vocab:[
      {fr:"편의점", ipa:"pyeon-ui-jeom", en:"Convenience store (CU, GS25, 7-Eleven)"},
      {fr:"계산대", ipa:"gye-san-dae", en:"Checkout counter"},
      {fr:"봉투", ipa:"bong-tu", en:"Bag"},
      {fr:"영수증", ipa:"yeong-su-jeung", en:"Receipt"},
      {fr:"전자레인지", ipa:"jeon-ja-re-in-ji", en:"Microwave"},
      {fr:"뜨겁게 해 주세요", ipa:"tteu-geop-ge hae ju-se-yo", en:"Please heat it up"},
      {fr:"삼각김밥", ipa:"sam-gak-gim-bap", en:"Triangle kimbap (onigiri)"},
      {fr:"컵라면", ipa:"keop-la-myeon", en:"Cup noodles"},
      {fr:"캐셔", ipa:"kae-syeo", en:"Cashier"},
      {fr:"포인트 카드", ipa:"po-in-teu ka-deu", en:"Points card"}
    ],
    phrases:[
      {fr:"이거 전자레인지에 돌려 주세요.", ipa:"i-geo jeon-ja-re-in-ji-e dol-lyeo ju-se-yo", en:"Please microwave this for me."},
      {fr:"봉투 필요해요?", ipa:"bong-tu pil-yo-hae-yo", en:"Do you need a bag?"},
      {fr:"아니요, 괜찮아요.", ipa:"a-ni-yo, gwaen-chan-a-yo", en:"No, it's fine."},
      {fr:"포인트 카드 있어요?", ipa:"po-in-teu ka-deu it-eo-yo", en:"Do you have a points card?"},
      {fr:"같이 계산해 주세요.", ipa:"gat-i gye-san-hae ju-se-yo", en:"Ring it all up together please."},
      {fr:"삼각김밥 어디 있어요?", ipa:"sam-gak-gim-bap eo-di it-eo-yo", en:"Where are the triangle kimbap?"},
      {fr:"컵라면에 뜨거운 물 어디예요?", ipa:"keop-la-myeon-e tteu-geo-un mul eo-di-ye-yo", en:"Where is the hot water for cup noodles?"},
      {fr:"이거 맛있어요?", ipa:"i-geo mas-it-eo-yo", en:"Is this good?"}
    ],
    grammar:"Korean 편의점 is on another level — you can eat full meals (heated at the counter), buy concert tickets, pay bills, send packages, and print documents. They're open 24/7. The staff will microwave your food if you ask. Culture note: you eat AT the store on bar stools, not just take it away.",
    practice:["Next convenience store trip, try to do the whole transaction in Korean.", "삼각김밥 is cheap, everywhere, and delicious — learn to ask for it."]
  },
  { day:22, title:"Nightlife & Entertainment", titleNative:"밤문화와 엔터테인먼트", focus:"Seoul after dark is world class.",
    vocab:[
      {fr:"클럽", ipa:"keul-leob", en:"Club"},
      {fr:"바", ipa:"ba", en:"Bar"},
      {fr:"노래방", ipa:"no-rae-bang", en:"Karaoke room"},
      {fr:"PC방", ipa:"pi-si-bang", en:"PC café / gaming room"},
      {fr:"찜질방", ipa:"jjim-jil-bang", en:"Korean spa / heated sauna floor"},
      {fr:"영화관", ipa:"yeong-hwa-gwan", en:"Movie theater"},
      {fr:"재미있어요", ipa:"jae-mi-it-eo-yo", en:"It's fun"},
      {fr:"신나요", ipa:"sin-na-yo", en:"It's exciting"},
      {fr:"다음에 또 와요", ipa:"da-eum-e tto wa-yo", en:"Come again next time"},
      {fr:"오늘 너무 재미있었어요", ipa:"o-neul neo-mu jae-mi-it-eot-eo-yo", en:"Today was so much fun"}
    ],
    phrases:[
      {fr:"노래방 같이 가요!", ipa:"no-rae-bang gat-i ga-yo", en:"Let's go to norebang together!"},
      {fr:"이 노래 알아요?", ipa:"i no-rae al-a-yo", en:"Do you know this song?"},
      {fr:"한 곡 더 해요!", ipa:"han gok deo hae-yo", en:"One more song!"},
      {fr:"찜질방 가 봤어요?", ipa:"jjim-jil-bang ga bwat-eo-yo", en:"Have you been to a jjimjilbang?"},
      {fr:"홍대 vs 이태원 어디가 좋아요?", ipa:"hong-dae beo-seu i-tae-won eo-di-ga jo-a-yo", en:"Hongdae vs Itaewon — which do you like?"},
      {fr:"오늘 너무 재미있었어요!", ipa:"o-neul neo-mu jae-mi-it-eot-eo-yo", en:"Tonight was so much fun!"},
      {fr:"또 만나요!", ipa:"tto man-na-yo", en:"Let's meet again!"},
      {fr:"카톡 아이디가 뭐예요?", ipa:"ka-tok a-i-di-ga mwo-ye-yo", en:"What's your KakaoTalk ID?"}
    ],
    grammar:"KakaoTalk (카카오톡, 카톡) is Korea's dominant messaging app — like WhatsApp for Koreans. Everyone uses it. Asking for someone's KakaoTalk ID is the Korean equivalent of asking for a number.",
    practice:["Save '카톡 아이디가 뭐예요?' — you'll make friends in Korea.", "노래방 is non-negotiable — at least try it once."]
  },
  { day:23, title:"Nature & Outdoors", titleNative:"자연과 야외", focus:"Korea's national parks and scenic spots.",
    vocab:[
      {fr:"산", ipa:"san", en:"Mountain"},
      {fr:"바다", ipa:"ba-da", en:"Sea / Ocean"},
      {fr:"강", ipa:"gang", en:"River"},
      {fr:"공원", ipa:"gong-won", en:"Park"},
      {fr:"등산", ipa:"deung-san", en:"Hiking"},
      {fr:"해변", ipa:"hae-byeon", en:"Beach"},
      {fr:"섬", ipa:"seom", en:"Island"},
      {fr:"폭포", ipa:"pok-po", en:"Waterfall"},
      {fr:"경치가 좋아요", ipa:"gyeong-chi-ga jo-a-yo", en:"The scenery is beautiful"},
      {fr:"사진 찍어요", ipa:"sa-jin jjig-eo-yo", en:"Let's take a photo"}
    ],
    phrases:[
      {fr:"등산 좋아해요?", ipa:"deung-san jo-a-hae-yo", en:"Do you like hiking?"},
      {fr:"이 산이 얼마나 높아요?", ipa:"i san-i eol-ma-na no-pa-yo", en:"How tall is this mountain?"},
      {fr:"경치가 정말 아름다워요!", ipa:"gyeong-chi-ga jeong-mal a-reum-da-wo-yo", en:"The scenery is truly beautiful!"},
      {fr:"제주도에 가 봤어요?", ipa:"je-ju-do-e ga bwat-eo-yo", en:"Have you been to Jeju Island?"},
      {fr:"한라산에 올라가고 싶어요.", ipa:"hal-la-san-e ol-la-ga-go sip-eo-yo", en:"I want to climb Hallasan."},
      {fr:"여기서 수영해도 돼요?", ipa:"yeo-gi-seo su-yeong-hae-do dwae-yo", en:"Can I swim here?"},
      {fr:"해 지는 거 봐요!", ipa:"hae ji-neun geo bwa-yo", en:"Let's watch the sunset!"},
      {fr:"여기 너무 예뻐요!", ipa:"yeo-gi neo-mu ye-ppeo-yo", en:"This place is so beautiful!"}
    ],
    grammar:"Korea is 70% mountains — hiking (등산) is a national pastime. Koreans of all ages hike, often in full gear. Popular mountains: Bukhansan (Seoul), Seoraksan (northeast), Hallasan (Jeju). Trails are well-marked and often have grandmas passing you at speed.",
    practice:["Learn '경치가 정말 아름다워요!' for any scenic moment.", "제주도 (Jeju Island) is Korea's Hawaii — worth knowing the name."]
  },
  { day:24, title:"Work & Daily Life", titleNative:"일과 일상생활", focus:"Everyday adult life in Korean.",
    vocab:[
      {fr:"직장", ipa:"jik-jang", en:"Workplace"},
      {fr:"회의", ipa:"hoe-ui", en:"Meeting"},
      {fr:"이메일", ipa:"i-me-il", en:"Email"},
      {fr:"바빠요", ipa:"ba-ppa-yo", en:"I'm busy"},
      {fr:"야근", ipa:"ya-geun", en:"Overtime / working late"},
      {fr:"월급", ipa:"wol-geup", en:"Monthly salary"},
      {fr:"휴가", ipa:"hyu-ga", en:"Vacation / day off"},
      {fr:"퇴근", ipa:"toe-geun", en:"Getting off work"},
      {fr:"출근", ipa:"chul-geun", en:"Going to work"},
      {fr:"회식", ipa:"hoe-sik", en:"Company dinner / team meal out"}
    ],
    phrases:[
      {fr:"오늘 바빠요? 회의 있어요.", ipa:"o-neul ba-ppa-yo? hoe-ui it-eo-yo", en:"Are you busy today? I have a meeting."},
      {fr:"몇 시에 퇴근해요?", ipa:"myeot si-e toe-geun-hae-yo", en:"What time do you get off work?"},
      {fr:"야근해요, 늦을 것 같아요.", ipa:"ya-geun-hae-yo, neut-eul geot gat-a-yo", en:"I'm working late, might be slow."},
      {fr:"이번 주에 휴가 있어요.", ipa:"i-beon ju-e hyu-ga it-eo-yo", en:"I have a day off this week."},
      {fr:"회식 같이 가요!", ipa:"hoe-sik gat-i ga-yo", en:"Let's go to the work dinner!"},
      {fr:"한국 회사 문화가 어때요?", ipa:"han-guk hoe-sa mun-hwa-ga eo-ttae-yo", en:"How is Korean company culture?"},
      {fr:"힘내요! 화이팅!", ipa:"him-nae-yo! hwa-i-ting", en:"Hang in there! Fighting!"},
      {fr:"수고했어요.", ipa:"su-go-haet-eo-yo", en:"Good work / You've worked hard."}
    ],
    grammar:"수고했어요 (sugohaesoyo) is said at the end of any shared effort — finishing a task, leaving work, wrapping up a meal. It means 'you worked hard' and is a deeply Korean way of acknowledging effort. Say it whenever you wrap up anything.",
    practice:["수고했어요 — practice saying this with warmth at the end of today.", "야근 (overtime) is a major concept in Korean work culture — worth knowing."]
  },
  { day:25, title:"Learning & Studying Korean", titleNative:"한국어 공부", focus:"Meta-phrases for your language learning journey.",
    vocab:[
      {fr:"한국어", ipa:"han-gug-eo", en:"The Korean language"},
      {fr:"공부하다", ipa:"gong-bu-ha-da", en:"To study"},
      {fr:"연습하다", ipa:"yeon-seup-ha-da", en:"To practice"},
      {fr:"어렵다", ipa:"eo-ryeop-da", en:"Difficult"},
      {fr:"쉬워요", ipa:"swi-wo-yo", en:"It's easy"},
      {fr:"한글", ipa:"han-geul", en:"The Korean alphabet"},
      {fr:"발음", ipa:"bal-eum", en:"Pronunciation"},
      {fr:"단어", ipa:"dan-eo", en:"Vocabulary word"},
      {fr:"문법", ipa:"mun-beop", en:"Grammar"},
      {fr:"언어 교환", ipa:"eon-eo gyo-hwan", en:"Language exchange"}
    ],
    phrases:[
      {fr:"한국어 공부 중이에요.", ipa:"han-gug-eo gong-bu jung-i-e-yo", en:"I am studying Korean."},
      {fr:"한국어가 어렵지만 재미있어요.", ipa:"han-gug-eo-ga eo-ryeop-ji-man jae-mi-it-eo-yo", en:"Korean is hard but interesting."},
      {fr:"한글 읽을 수 있어요.", ipa:"han-geul ilg-eul su it-eo-yo", en:"I can read Hangul."},
      {fr:"언어 교환 할 사람 있어요?", ipa:"eon-eo gyo-hwan hal sa-ram it-eo-yo", en:"Is there someone to do language exchange?"},
      {fr:"이 단어가 무슨 뜻이에요?", ipa:"i dan-eo-ga mu-seun tteus-i-e-yo", en:"What does this word mean?"},
      {fr:"맞아요? 제가 맞게 말했어요?", ipa:"maj-a-yo? je-ga mat-ge mal-haet-eo-yo", en:"Is that right? Did I say it correctly?"},
      {fr:"한국어로 뭐라고 해요?", ipa:"han-gug-eo-ro mwo-ra-go hae-yo", en:"How do you say that in Korean?"},
      {fr:"가르쳐 주세요.", ipa:"ga-reu-chyeo ju-se-yo", en:"Please teach me."}
    ],
    grammar:"Hangul (한글) was invented in 1443 by King Sejong and is considered one of the most scientific writing systems ever created. It's fully phonetic and can be learned in a few hours. Most Korean words you've seen in this course are written in Hangul.",
    practice:["Learn to read Hangul — seriously, 2 hours and you're reading menus.", "Tell a Korean '한국어 공부 중이에요' — they will be delighted."]
  },
  { day:26, title:"Korean Temple Stays & Culture", titleNative:"문화 체험", focus:"Deeper experiences beyond Seoul.",
    vocab:[
      {fr:"절 / 사찰", ipa:"jeol / sa-chal", en:"Buddhist temple"},
      {fr:"궁", ipa:"gung", en:"Palace (경복궁, 창덕궁...)"},
      {fr:"한복", ipa:"han-bok", en:"Traditional Korean clothing"},
      {fr:"입어 봐도 돼요?", ipa:"ib-eo bwa-do dwae-yo", en:"May I try it on?"},
      {fr:"전통", ipa:"jeon-tong", en:"Traditional"},
      {fr:"현대", ipa:"hyeon-dae", en:"Modern / contemporary"},
      {fr:"문화재", ipa:"mun-hwa-jae", en:"Cultural heritage site"},
      {fr:"입장료", ipa:"ip-jang-nyo", en:"Admission fee"},
      {fr:"관람 시간", ipa:"gwal-lam si-gan", en:"Viewing hours"},
      {fr:"해설사", ipa:"hae-seol-sa", en:"Tour guide"}
    ],
    phrases:[
      {fr:"경복궁 입장료가 얼마예요?", ipa:"gyeong-bok-gung ip-jang-nyo-ga eol-ma-ye-yo", en:"What is the admission to Gyeongbokgung?"},
      {fr:"한복 입어 보고 싶어요!", ipa:"han-bok ib-eo bo-go sip-eo-yo", en:"I want to try wearing hanbok!"},
      {fr:"영어 해설 있어요?", ipa:"yeong-eo hae-seol it-eo-yo", en:"Is there an English explanation / guide?"},
      {fr:"오늘 몇 시까지 해요?", ipa:"o-neul myeot si-kka-ji hae-yo", en:"Until what time is it open today?"},
      {fr:"이게 얼마나 오래됐어요?", ipa:"i-ge eol-ma-na o-rae-dwaet-eo-yo", en:"How old is this?"},
      {fr:"여기서 사진 찍어도 돼요?", ipa:"yeo-gi-seo sa-jin jjig-eo-do dwae-yo", en:"May I take photos here?"},
      {fr:"진짜 아름다워요.", ipa:"jin-jja a-reum-da-wo-yo", en:"Truly beautiful."},
      {fr:"한국 역사가 정말 흥미로워요.", ipa:"han-guk yeok-sa-ga jeong-mal heung-mi-ro-wo-yo", en:"Korean history is really fascinating."}
    ],
    grammar:"경복궁 is the main royal palace in Seoul — massive, free with K-ETA, and you can rent hanbok to wear inside. Wearing hanbok gets you FREE admission to most royal palaces. Worth it for the photos and experience.",
    practice:["Learn '한복 입어 보고 싶어요!' — rentals are everywhere near the palaces.", "경복궁 is a must-do; knowing the name helps with navigation."]
  },
  { day:27, title:"Celebrations & Special Occasions", titleNative:"축하와 특별한 날", focus:"Join the celebration.",
    vocab:[
      {fr:"생일 축하해요!", ipa:"saeng-il chuk-ha-hae-yo", en:"Happy birthday!"},
      {fr:"새해 복 많이 받으세요!", ipa:"sae-hae bok man-i bat-eu-se-yo", en:"Happy New Year! (receive much luck)"},
      {fr:"결혼 축하해요!", ipa:"gyeol-hon chuk-ha-hae-yo", en:"Congratulations on your wedding!"},
      {fr:"축하해요!", ipa:"chuk-ha-hae-yo", en:"Congratulations!"},
      {fr:"건배!", ipa:"geon-bae", en:"Cheers!"},
      {fr:"추석", ipa:"chu-seok", en:"Korean Thanksgiving (harvest festival)"},
      {fr:"설날", ipa:"seol-lal", en:"Korean Lunar New Year"},
      {fr:"선물", ipa:"seon-mul", en:"Gift"},
      {fr:"파티", ipa:"pa-ti", en:"Party"},
      {fr:"즐거운 시간 보내요", ipa:"jeul-geo-un si-gan bo-nae-yo", en:"Have a great time"}
    ],
    phrases:[
      {fr:"생일 축하해요! 선물이에요.", ipa:"saeng-il chuk-ha-hae-yo! seon-mul-i-e-yo", en:"Happy birthday! This is a gift."},
      {fr:"건배! 모두의 건강을 위해!", ipa:"geon-bae! mo-du-ui geon-gang-eul wi-hae", en:"Cheers! To everyone's health!"},
      {fr:"오늘 생일이에요?", ipa:"o-neul saeng-il-i-e-yo", en:"Is today your birthday?"},
      {fr:"한국에서 추석 보내 봤어요?", ipa:"han-gug-e-seo chu-seok bo-nae bwat-eo-yo", en:"Have you spent Chuseok in Korea?"},
      {fr:"설날에 뭐 해요?", ipa:"seol-lal-e mwo hae-yo", en:"What do you do on Seollal?"},
      {fr:"정말 즐거운 시간이었어요!", ipa:"jeong-mal jeul-geo-un si-gan-i-eot-eo-yo", en:"It was a really great time!"},
      {fr:"또 봐요, 행복하세요!", ipa:"tto bwa-yo, haeng-bok-ha-se-yo", en:"See you again, be happy!"},
      {fr:"좋은 하루 되세요!", ipa:"jo-eun ha-ru doe-se-yo", en:"Have a good day!"}
    ],
    grammar:"During Chuseok and Seollal, Korea goes into a massive family migration — expect highways jammed and some shops closed. These are the two biggest holidays. 세배 (sebae) is a deep bow done to elders on Seollal; children receive 세뱃돈 (cash in envelopes) in return.",
    practice:["'좋은 하루 되세요!' is a warm send-off — use it anytime.", "건배 is just the start — learn 원샷 (bottoms up) for when it escalates."]
  },
  { day:28, title:"Compliments & Making Friends", titleNative:"칭찬과 친해지기", focus:"How to win Koreans over.",
    vocab:[
      {fr:"한국어 잘 하세요!", ipa:"han-gug-eo jal ha-se-yo", en:"Your Korean is great!"},
      {fr:"잘생겼어요", ipa:"jal-saeng-gyeot-eo-yo", en:"You are handsome"},
      {fr:"예뻐요", ipa:"ye-ppeo-yo", en:"You are pretty / beautiful"},
      {fr:"친절해요", ipa:"chin-jeol-hae-yo", en:"You are kind"},
      {fr:"재미있는 사람이에요", ipa:"jae-mi-it-neun sa-ram-i-e-yo", en:"You are a fun person"},
      {fr:"진짜요?", ipa:"jin-jja-yo", en:"Really? / Seriously?"},
      {fr:"아니에요~", ipa:"a-ni-e-yo~", en:"No no~ (humble response to compliment)"},
      {fr:"친구 해요", ipa:"chin-gu hae-yo", en:"Let's be friends"},
      {fr:"또 만나요", ipa:"tto man-na-yo", en:"Let's meet again"},
      {fr:"연락해요", ipa:"yeol-lak-hae-yo", en:"Let's keep in touch"}
    ],
    phrases:[
      {fr:"한국어 진짜 잘 하세요!", ipa:"han-gug-eo jin-jja jal ha-se-yo", en:"Your Korean is seriously good!"},
      {fr:"아니에요~ 아직 많이 부족해요.", ipa:"a-ni-e-yo~ a-jik man-i bu-jok-hae-yo", en:"No no~ I still have a long way to go."},
      {fr:"친절하게 도와주셔서 감사해요.", ipa:"chin-jeol-ha-ge do-wa-ju-syeo-seo gam-sa-hae-yo", en:"Thank you for helping me so kindly."},
      {fr:"한국 사람들이 정말 친절해요.", ipa:"han-guk sa-ram-deul-i jeong-mal chin-jeol-hae-yo", en:"Korean people are really kind."},
      {fr:"친구 해요! 카톡 아이디 주세요.", ipa:"chin-gu hae-yo! ka-tok a-i-di ju-se-yo", en:"Let's be friends! Give me your KakaoTalk ID."},
      {fr:"오늘 덕분에 정말 좋았어요.", ipa:"o-neul deok-bun-e jeong-mal jo-at-eo-yo", en:"Today was really great thanks to you."},
      {fr:"또 봐요! 연락해요!", ipa:"tto bwa-yo! yeol-lak-hae-yo", en:"See you! Let's stay in touch!"},
      {fr:"한국이 너무 좋아요. 꼭 다시 올게요.", ipa:"han-gug-i neo-mu jo-a-yo. kkok da-si ol-ge-yo", en:"I love Korea so much. I'll definitely come back."}
    ],
    grammar:"When Koreans compliment your Korean, the humble response is '아니에요~ 아직 멀었어요' (No no, I still have far to go). Accepting a compliment directly can seem arrogant. The tilde in '아니에요~' represents a lilting, modest tone.",
    practice:["'한국이 너무 좋아요. 꼭 다시 올게요.' — mean it, say it.", "Practice the humble compliment response '아니에요~' with a slight smile."]
  },
  { day:29, title:"Advanced Phrases & Korean Slang", titleNative:"고급 표현과 슬랭", focus:"Sound like you've been here a while.",
    vocab:[
      {fr:"대박", ipa:"dae-bak", en:"Jackpot / Awesome / No way"},
      {fr:"헐", ipa:"heol", en:"Oh my / Whoa (shock/disbelief)"},
      {fr:"완전", ipa:"wan-jeon", en:"Totally / Completely (intensifier)"},
      {fr:"진짜", ipa:"jin-jja", en:"Really / For real"},
      {fr:"아 진짜요?", ipa:"a jin-jja-yo", en:"Oh really? (surprised reaction)"},
      {fr:"대충", ipa:"dae-chung", en:"Roughly / Casually / Kind of"},
      {fr:"어쩔 수 없어요", ipa:"eo-jjeol su eop-eo-yo", en:"There's nothing I can do / It can't be helped"},
      {fr:"눈치", ipa:"nun-chi", en:"Social awareness / reading the room"},
      {fr:"빨리빨리", ipa:"ppal-li ppal-li", en:"Hurry hurry / Fast fast (Korean culture concept)"},
      {fr:"정 (情)", ipa:"jeong", en:"Deep affection/attachment that develops over time"}
    ],
    phrases:[
      {fr:"완전 대박이에요!", ipa:"wan-jeon dae-bak-i-e-yo", en:"That is totally awesome!"},
      {fr:"헐, 진짜요?", ipa:"heol, jin-jja-yo", en:"Oh my, really?"},
      {fr:"어쩔 수 없죠, 뭐.", ipa:"eo-jjeol su eop-jyo, mwo", en:"Nothing to be done about it, I guess."},
      {fr:"눈치 있는 사람이에요.", ipa:"nun-chi it-neun sa-ram-i-e-yo", en:"You are a socially aware person."},
      {fr:"빨리빨리 가요!", ipa:"ppal-li ppal-li ga-yo", en:"Let's go, hurry hurry!"},
      {fr:"진짜 한국 같아요!", ipa:"jin-jja han-guk gat-a-yo", en:"This is so typically Korean!"},
      {fr:"정이 들었어요.", ipa:"jeong-i deul-eot-eo-yo", en:"I've grown attached / I've developed jeong for this."},
      {fr:"이제 한국 사람 다 됐네요!", ipa:"i-je han-guk sa-ram da dwaet-ne-yo", en:"You've basically become Korean now!"}
    ],
    grammar:"눈치 (nunchi) is a Korean concept: the subtle art of reading the room and responding accordingly. High nunchi = socially intelligent. 정 (jeong) is the deep bond that forms between people over shared experiences — it's why Koreans feel intense loyalty to places, teams, and people they've spent time with.",
    practice:["Drop 대박 naturally in a reaction today.", "Reflect on 정 — you might already feel it for Korean food."]
  },
  { day:30, title:"Review & Real Conversations", titleNative:"복습과 실전 대화", focus:"30 days in. Now put it all together.",
    vocab:[
      {fr:"저는 한국어를 조금 해요", ipa:"jeo-neun han-gug-eo-reul jo-geum hae-yo", en:"I speak a little Korean"},
      {fr:"한국에 처음 왔어요", ipa:"han-gug-e cheo-eum wat-eo-yo", en:"It's my first time in Korea"},
      {fr:"한국이 너무 좋아요", ipa:"han-gug-i neo-mu jo-a-yo", en:"I love Korea so much"},
      {fr:"다시 꼭 올게요", ipa:"da-si kkok ol-ge-yo", en:"I will definitely come back"},
      {fr:"감사합니다, 덕분이에요", ipa:"gam-sa-ham-ni-da, deok-bun-i-e-yo", en:"Thank you, it's thanks to you"},
      {fr:"한국어 더 열심히 공부할게요", ipa:"han-gug-eo deo yeol-sim-hi gong-bu-hal-ge-yo", en:"I'll study Korean harder"},
      {fr:"잘 부탁드립니다", ipa:"jal bu-tak-deu-rim-ni-da", en:"I look forward to working with you / Please take care of me"},
      {fr:"수고하셨습니다", ipa:"su-go-ha-syeot-seum-ni-da", en:"Thank you for your hard work (formal)"},
      {fr:"좋은 여행 되세요", ipa:"jo-eun yeo-haeng doe-se-yo", en:"Have a great trip"},
      {fr:"꼭 다시 봐요", ipa:"kkok da-si bwa-yo", en:"Let's definitely meet again"}
    ],
    phrases:[
      {fr:"30일 동안 한국어를 공부했어요!", ipa:"sam-sip-il dong-an han-gug-eo-reul gong-bu-haet-eo-yo", en:"I've studied Korean for 30 days!"},
      {fr:"조금씩 늘고 있어요.", ipa:"jo-geum-ssik neul-go it-eo-yo", en:"It's improving little by little."},
      {fr:"한국어가 어렵지만 포기하지 않을게요.", ipa:"han-gug-eo-ga eo-ryeop-ji-man po-gi-ha-ji an-eul-ge-yo", en:"Korean is hard but I won't give up."},
      {fr:"한국 사람들이 너무 친절해서 감사해요.", ipa:"han-guk sa-ram-deul-i neo-mu chin-jeol-hae-seo gam-sa-hae-yo", en:"Thank you because Korean people are so kind."},
      {fr:"다음엔 더 잘 할 수 있어요. 화이팅!", ipa:"da-eum-en deo jal hal su it-eo-yo. hwa-i-ting", en:"Next time I can do better. Fighting!"},
      {fr:"한국어 공부가 재미있어요!", ipa:"han-gug-eo gong-bu-ga jae-mi-it-eo-yo", en:"Studying Korean is fun!"},
      {fr:"꼭 다시 한국에 올게요!", ipa:"kkok da-si han-gug-e ol-ge-yo", en:"I will definitely come back to Korea!"},
      {fr:"감사합니다, 수고하셨습니다!", ipa:"gam-sa-ham-ni-da, su-go-ha-syeot-seum-ni-da", en:"Thank you, and thank you for your hard work!"}
    ],
    grammar:"You've covered greetings, numbers, food, transport, shopping, culture, K-pop, slang, and real conversation. The next step: learn Hangul (한글) — it takes 2-3 hours and unlocks everything. Then get on HelloTalk or Tandem and find a language exchange partner.",
    practice:["Write a 5-sentence self-intro in Korean from memory.", "화이팅! You finished 30 days. 대박이에요!"]
  }
];

// ============================================================
// CONVERSATIONS — 8 real scenarios in Korea
// ============================================================
const CONVERSATIONS_KO = [
  {
    id: "cafe",
    title: "At a Korean Café",
    icon: "☕",
    setting: "A trendy Seoul café. Ordering your drink, asking for WiFi, paying by card.",
    lines: [
      { speaker: "You",    ko: "안녕하세요! 아이스 아메리카노 한 잔 주세요.", phonetic: "an-nyeong-ha-se-yo! a-i-seu a-me-ri-ka-no han jan ju-se-yo", en: "Hello! One iced Americano please." },
      { speaker: "Staff",  ko: "사이즈는요? 라지, 미디엄, 스몰 있어요.", phonetic: "sa-i-jeu-neun-yo? la-ji, mi-di-eom, seu-mol it-eo-yo", en: "What size? We have large, medium, small." },
      { speaker: "You",    ko: "라지로 주세요. 여기서 마실게요.", phonetic: "la-ji-ro ju-se-yo. yeo-gi-seo ma-sil-ge-yo", en: "Large please. I'll drink it here." },
      { speaker: "Staff",  ko: "이름이 뭐예요?", phonetic: "i-reum-i mwo-ye-yo", en: "What's your name?" },
      { speaker: "You",    ko: "지미요. 카드 돼요?", phonetic: "ji-mi-yo. ka-deu dwae-yo", en: "Jimmy. Do you take card?" },
      { speaker: "Staff",  ko: "네, 물론이죠. 오천오백 원이에요.", phonetic: "ne, mul-lon-i-jyo. o-cheon-o-baek won-i-e-yo", en: "Yes of course. That's 5,500 won." },
      { speaker: "You",    ko: "와이파이 비밀번호가 뭐예요?", phonetic: "wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo", en: "What's the WiFi password?" },
      { speaker: "Staff",  ko: "영수증에 적혀 있어요. 여기요!", phonetic: "yeong-su-jeung-e jeok-hyeo it-eo-yo. yeo-gi-yo", en: "It's written on the receipt. Here!" }
    ]
  },
  {
    id: "restaurant",
    title: "Korean BBQ Restaurant",
    icon: "🥩",
    setting: "A samgyeopsal (pork belly BBQ) restaurant. Ordering, customizing, paying.",
    lines: [
      { speaker: "You",    ko: "여기요! 삼겹살 이인분이랑 된장찌개 하나 주세요.", phonetic: "yeo-gi-yo! sam-gyeop-sal i-in-bun-i-rang doen-jang-jji-gae ha-na ju-se-yo", en: "Excuse me! Pork belly for 2 and one doenjang jjigae please." },
      { speaker: "Staff",  ko: "소주도 드릴까요?", phonetic: "so-ju-do deu-ril-kka-yo", en: "Would you like soju too?" },
      { speaker: "You",    ko: "네, 소주 두 병이요. 그리고 물도 주세요.", phonetic: "ne, so-ju du byeong-i-yo. geu-ri-go mul-do ju-se-yo", en: "Yes, two bottles of soju. And water please." },
      { speaker: "Staff",  ko: "맵게 드실 수 있어요?", phonetic: "maep-ge deu-sil su it-eo-yo", en: "Can you eat spicy food?" },
      { speaker: "You",    ko: "조금요. 너무 맵지 않게 해 주세요.", phonetic: "jo-geum-yo. neo-mu maep-ji an-ke hae ju-se-yo", en: "A little. Please don't make it too spicy." },
      { speaker: "Staff",  ko: "알겠습니다! 잠깐만요.", phonetic: "al-get-seum-ni-da! jam-kkan-man-yo", en: "Understood! Just a moment." },
      { speaker: "You",    ko: "잘 먹겠습니다! 건배!", phonetic: "jal meok-get-seum-ni-da! geon-bae", en: "Let's eat! Cheers!" },
      { speaker: "You",    ko: "정말 맛있어요! 계산해 주세요.", phonetic: "jeong-mal mas-it-eo-yo! gye-san-hae ju-se-yo", en: "So delicious! Check please." }
    ]
  },
  {
    id: "subway",
    title: "Seoul Subway",
    icon: "🚇",
    setting: "Navigating Seoul's subway to get to Myeongdong. Asking a local for help.",
    lines: [
      { speaker: "You",    ko: "실례합니다! 명동역 어떻게 가요?", phonetic: "sil-lye-ham-ni-da! myeong-dong-yeok eo-tteo-ke ga-yo", en: "Excuse me! How do I get to Myeongdong station?" },
      { speaker: "Local",  ko: "여기서 4호선 타세요. 세 정거장이에요.", phonetic: "yeo-gi-seo sa-ho-seon ta-se-yo. se jeong-geo-jang-i-e-yo", en: "Take Line 4 here. It's three stops." },
      { speaker: "You",    ko: "몇 번 출구로 나가요?", phonetic: "myeot beon chul-gu-ro na-ga-yo", en: "Which exit number do I use?" },
      { speaker: "Local",  ko: "6번 출구로 나가세요. 바로 명동이에요.", phonetic: "yuk-beon chul-gu-ro na-ga-se-yo. ba-ro myeong-dong-i-e-yo", en: "Use exit 6. That's right at Myeongdong." },
      { speaker: "You",    ko: "티머니 카드 어디서 충전해요?", phonetic: "ti-meo-ni ka-deu eo-di-seo chung-jeon-hae-yo", en: "Where can I top up my T-money card?" },
      { speaker: "Local",  ko: "저기 편의점에서 충전할 수 있어요.", phonetic: "jeo-gi pyeon-ui-jeom-e-seo chung-jeon-hal su it-eo-yo", en: "You can top it up at the convenience store over there." },
      { speaker: "You",    ko: "감사합니다! 정말 친절하세요.", phonetic: "gam-sa-ham-ni-da! jeong-mal chin-jeol-ha-se-yo", en: "Thank you! You're so kind." },
      { speaker: "Local",  ko: "천만에요! 즐거운 여행 하세요!", phonetic: "cheon-man-e-yo! jeul-geo-un yeo-haeng ha-se-yo", en: "Not at all! Have a great trip!" }
    ]
  },
  {
    id: "kpop-store",
    title: "K-Pop Merch Store",
    icon: "🎤",
    setting: "Shopping for K-pop merchandise in a store near Hybe or SM Entertainment.",
    lines: [
      { speaker: "You",    ko: "이거 얼마예요?", phonetic: "i-geo eol-ma-ye-yo", en: "How much is this?" },
      { speaker: "Staff",  ko: "그건 삼만오천 원이에요. 공식 굿즈예요.", phonetic: "geu-geon sam-man-o-cheon won-i-e-yo. gong-sik gut-jeu-ye-yo", en: "That's 35,000 won. It's official merch." },
      { speaker: "You",    ko: "포토카드도 있어요?", phonetic: "po-to-ka-deu-do it-eo-yo", en: "Do you have photo cards too?" },
      { speaker: "Staff",  ko: "네! 이번 컴백 포토카드 새로 들어왔어요.", phonetic: "ne! i-beon keom-baek po-to-ka-deu sae-ro deul-eo-wat-eo-yo", en: "Yes! New photo cards from this comeback just arrived." },
      { speaker: "You",    ko: "대박! 이거 두 개 살게요.", phonetic: "dae-bak! i-geo du gae sal-ge-yo", en: "Awesome! I'll take two of these." },
      { speaker: "Staff",  ko: "선물 포장 해드릴까요?", phonetic: "seon-mul po-jang hae-deu-ril-kka-yo", en: "Shall I gift wrap it for you?" },
      { speaker: "You",    ko: "네, 부탁드려요! 카드로 계산할게요.", phonetic: "ne, bu-tak-deu-ryeo-yo! ka-deu-ro gye-san-hal-ge-yo", en: "Yes please! I'll pay by card." },
      { speaker: "Staff",  ko: "감사합니다! 즐거운 시간 보내세요.", phonetic: "gam-sa-ham-ni-da! jeul-geo-un si-gan bo-nae-se-yo", en: "Thank you! Have a great time." }
    ]
  },
  {
    id: "hotel",
    title: "Hotel Check-In",
    icon: "🏨",
    setting: "Checking into a Seoul hotel, dealing with a key issue, storing luggage.",
    lines: [
      { speaker: "You",    ko: "안녕하세요! 체크인 하고 싶어요. 예약했어요.", phonetic: "an-nyeong-ha-se-yo! che-keu-in ha-go sip-eo-yo. ye-yak-haet-eo-yo", en: "Hello! I'd like to check in. I have a reservation." },
      { speaker: "Staff",  ko: "성함이 어떻게 되세요?", phonetic: "seong-ham-i eo-tteo-ke doe-se-yo", en: "What is your name please?" },
      { speaker: "You",    ko: "지미 캐넌이에요.", phonetic: "ji-mi kae-neo-ni-e-yo", en: "Jimmy Cannon." },
      { speaker: "Staff",  ko: "여권 보여 주실 수 있어요?", phonetic: "yeo-gwon bo-yeo ju-sil su it-eo-yo", en: "Could you show me your passport?" },
      { speaker: "You",    ko: "여기요. 와이파이 비밀번호도 알려 주세요.", phonetic: "yeo-gi-yo. wa-i-pa-i bi-mil-beon-ho-do al-lyeo ju-se-yo", en: "Here. Please tell me the WiFi password too." },
      { speaker: "Staff",  ko: "영수증에 있어요. 방은 15층이에요.", phonetic: "yeong-su-jeung-e it-eo-yo. bang-eun sip-o-cheung-i-e-yo", en: "It's on the receipt. Your room is on the 15th floor." },
      { speaker: "You",    ko: "카드키가 안 돼요. 도와주세요.", phonetic: "ka-deu-ki-ga an dwae-yo. do-wa-ju-se-yo", en: "The key card doesn't work. Please help." },
      { speaker: "Staff",  ko: "죄송합니다! 바로 바꿔드릴게요.", phonetic: "joe-song-ham-ni-da! ba-ro ba-kkwo-deu-ril-ge-yo", en: "I'm sorry! I'll replace it right away." }
    ]
  },
  {
    id: "convenience",
    title: "Late Night at the 편의점",
    icon: "🏪",
    setting: "Buying food at a 24hr convenience store, getting it heated, eating at the counter.",
    lines: [
      { speaker: "You",    ko: "삼각김밥이랑 컵라면 있어요?", phonetic: "sam-gak-gim-bab-i-rang keop-la-myeon it-eo-yo", en: "Do you have triangle kimbap and cup noodles?" },
      { speaker: "Staff",  ko: "네! 저기 냉장고에 있어요.", phonetic: "ne! jeo-gi naeng-jang-go-e it-eo-yo", en: "Yes! They're in the fridge over there." },
      { speaker: "You",    ko: "이거 전자레인지에 돌려 주세요.", phonetic: "i-geo jeon-ja-re-in-ji-e dol-lyeo ju-se-yo", en: "Please microwave this for me." },
      { speaker: "Staff",  ko: "얼마나 돌려드릴까요?", phonetic: "eol-ma-na dol-lyeo-deu-ril-kka-yo", en: "How long shall I microwave it?" },
      { speaker: "You",    ko: "1분이면 돼요. 그리고 뜨거운 물도 주세요.", phonetic: "il-bun-i-myeon dwae-yo. geu-ri-go tteu-geo-un mul-do ju-se-yo", en: "1 minute is fine. And hot water please." },
      { speaker: "Staff",  ko: "저기 온수기 있어요. 직접 받으시면 돼요.", phonetic: "jeo-gi on-su-gi it-eo-yo. jik-jeop bat-eu-si-myeon dwae-yo", en: "The hot water machine is over there. You can get it yourself." },
      { speaker: "You",    ko: "봉투 필요 없어요. 여기서 먹을게요.", phonetic: "bong-tu pil-yo eop-eo-yo. yeo-gi-seo meok-eul-ge-yo", en: "No bag needed. I'll eat here." },
      { speaker: "Staff",  ko: "맛있게 드세요!", phonetic: "mas-it-ge deu-se-yo", en: "Enjoy your meal!" }
    ]
  },
  {
    id: "directions",
    title: "Lost in Hongdae",
    icon: "🗺️",
    setting: "You're lost near Hongdae (university/nightlife district). Asking for help.",
    lines: [
      { speaker: "You",    ko: "저 길을 잃었어요. 도와주세요!", phonetic: "jeo gil-eul il-eot-eo-yo. do-wa-ju-se-yo", en: "I'm lost. Please help me!" },
      { speaker: "Local",  ko: "어디 가려고요?", phonetic: "eo-di ga-ryeo-go-yo", en: "Where are you trying to go?" },
      { speaker: "You",    ko: "홍대 클럽거리 찾고 있어요.", phonetic: "hong-dae keul-leob-geo-ri chat-go it-eo-yo", en: "I'm looking for the Hongdae club street." },
      { speaker: "Local",  ko: "아! 여기서 걸어서 5분이에요. 따라오세요.", phonetic: "a! yeo-gi-seo geol-eo-seo o-bun-i-e-yo. tta-ra-o-se-yo", en: "Oh! It's 5 minutes walking from here. Follow me." },
      { speaker: "You",    ko: "진짜요? 감사합니다! 이 근처 맛집 알아요?", phonetic: "jin-jja-yo? gam-sa-ham-ni-da! i geun-cheo mat-jip al-a-yo", en: "Really? Thank you! Do you know any good restaurants nearby?" },
      { speaker: "Local",  ko: "저기 노란 간판 보여요? 거기 떡볶이 엄청 맛있어요.", phonetic: "jeo-gi no-ran gan-pan bo-yeo-yo? geo-gi tteok-bo-kki eom-cheong mas-it-eo-yo", en: "See that yellow sign? The tteokbokki there is incredibly good." },
      { speaker: "You",    ko: "오늘 진짜 감사해요. 한국 사람들이 너무 친절해요!", phonetic: "o-neul jin-jja gam-sa-hae-yo. han-guk sa-ram-deul-i neo-mu chin-jeol-hae-yo", en: "I'm truly thankful today. Korean people are so kind!" },
      { speaker: "Local",  ko: "별말씀을요! 즐거운 밤 보내세요~", phonetic: "byeol-mal-sseum-eul-yo! jeul-geo-un bam bo-nae-se-yo~", en: "Not at all! Have a great night~" }
    ]
  },
  {
    id: "norebang",
    title: "Norebang (Private Karaoke)",
    icon: "🎵",
    setting: "Booking a norebang room, ordering food, singing with new Korean friends.",
    lines: [
      { speaker: "You",    ko: "노래방 방 있어요? 두 명이에요.", phonetic: "no-rae-bang bang it-eo-yo? du myeong-i-e-yo", en: "Do you have a norebang room? There are two of us." },
      { speaker: "Staff",  ko: "1시간에 이만 원이에요. 음료 포함이에요.", phonetic: "han si-gan-e i-man won-i-e-yo. eum-nyo po-ham-i-e-yo", en: "20,000 won for one hour. Drinks are included." },
      { speaker: "You",    ko: "두 시간 할게요. 이거 노래 있어요?", phonetic: "du si-gan hal-ge-yo. i-geo no-rae it-eo-yo", en: "We'll do two hours. Do you have this song?" },
      { speaker: "Staff",  ko: "번호로 치세요. 신곡도 다 있어요.", phonetic: "beon-ho-ro chi-se-yo. sin-gok-do da it-eo-yo", en: "Enter the number. We have all the new songs too." },
      { speaker: "Friend", ko: "완전 잘 부르세요! 한국 노래 알아요?", phonetic: "wan-jeon jal bu-reu-se-yo! han-guk no-rae al-a-yo", en: "You sing so well! Do you know Korean songs?" },
      { speaker: "You",    ko: "BTS 노래 조금 알아요. 같이 불러요!", phonetic: "bi-ti-es no-rae jo-geum al-a-yo. gat-i bul-leo-yo", en: "I know a few BTS songs. Let's sing together!" },
      { speaker: "Friend", ko: "대박! 한 번 더! 화이팅!", phonetic: "dae-bak! han beon deo! hwa-i-ting", en: "Awesome! One more! Fighting!" },
      { speaker: "You",    ko: "오늘 너무 재미있었어요! 또 와요!", phonetic: "o-neul neo-mu jae-mi-it-eot-eo-yo! tto wa-yo", en: "Tonight was so much fun! Let's come again!" }
    ]
  }
];
