// Korean course data — 30 days
// loaded by learn.html before app.js
// Note: field "fr" = Korean (Hangul), "ipa" = romanization/pronunciation, "en" = English

const COURSE_KO = [
  { day:1, title:"Greetings & Politeness", titleNative:"인사와 예절", focus:"The first words you'll say in Korea.",
    vocab:[
      {ko:"안녕하세요", ipa:"an-nyeong-ha-se-yo", en:"Hello (polite)"},
      {ko:"안녕", ipa:"an-nyeong", en:"Hi / Bye (casual)"},
      {ko:"감사합니다", ipa:"gam-sa-ham-ni-da", en:"Thank you (formal)"},
      {ko:"고마워요", ipa:"go-ma-wo-yo", en:"Thank you (casual)"},
      {ko:"죄송합니다", ipa:"joe-song-ham-ni-da", en:"I'm sorry (formal)"},
      {ko:"괜찮아요", ipa:"gwaen-chan-a-yo", en:"It's okay / No problem"},
      {ko:"네", ipa:"ne", en:"Yes"},
      {ko:"아니요", ipa:"a-ni-yo", en:"No"},
      {ko:"안녕히 가세요", ipa:"an-nyeong-hi ga-se-yo", en:"Goodbye (to person leaving)"},
      {ko:"안녕히 계세요", ipa:"an-nyeong-hi gye-se-yo", en:"Goodbye (you are leaving)"}
    ],
    phrases:[
      {ko:"안녕하세요! 처음 뵙겠습니다.", ipa:"an-nyeong-ha-se-yo! cheo-eum boep-get-seum-ni-da", en:"Hello! Nice to meet you (first time)."},
      {ko:"감사합니다, 괜찮아요.", ipa:"gam-sa-ham-ni-da, gwaen-chan-a-yo", en:"Thank you, it's okay."},
      {ko:"죄송합니다, 실례합니다.", ipa:"joe-song-ham-ni-da, sil-lye-ham-ni-da", en:"I'm sorry, excuse me."},
      {ko:"네, 고마워요!", ipa:"ne, go-ma-wo-yo", en:"Yes, thank you!"},
      {ko:"아니요, 괜찮아요.", ipa:"a-ni-yo, gwaen-chan-a-yo", en:"No, it's fine."},
      {ko:"안녕히 가세요, 감사합니다!", ipa:"an-nyeong-hi ga-se-yo, gam-sa-ham-ni-da", en:"Goodbye, thank you!"},
      {ko:"잠깐만요!", ipa:"jam-kkan-man-yo", en:"Just a moment, please!"},
      {ko:"천천히 말해 주세요.", ipa:"cheon-cheon-hi mal-hae ju-se-yo", en:"Please speak slowly."}
    ],
    grammar:"Korean has formal and casual speech levels. 'yo' (요) at the end makes speech polite — always use it with strangers, shopkeepers, or anyone you just met. Drop 'yo' only with close friends. When in doubt: add 요.",
    practice:["Say '안녕하세요' every time you would normally say hello today.", "Practice bowing slightly when you say it — context matters in Korean culture."]
  },
  { day:2, title:"Basic Responses & Survival Phrases", titleNative:"기본 응답", focus:"Get through any awkward moment.",
    vocab:[
      {ko:"모르겠어요", ipa:"mo-reu-get-eo-yo", en:"I don't know"},
      {ko:"이해해요", ipa:"i-hae-hae-yo", en:"I understand"},
      {ko:"이해 못 해요", ipa:"i-hae mot hae-yo", en:"I don't understand"},
      {ko:"영어 하세요?", ipa:"yeong-eo ha-se-yo", en:"Do you speak English?"},
      {ko:"조금요", ipa:"jo-geum-yo", en:"A little"},
      {ko:"다시 말해 주세요", ipa:"da-si mal-hae ju-se-yo", en:"Please say that again"},
      {ko:"천천히", ipa:"cheon-cheon-hi", en:"Slowly"},
      {ko:"도와주세요", ipa:"do-wa-ju-se-yo", en:"Please help me"},
      {ko:"물론이죠", ipa:"mul-lon-i-jyo", en:"Of course"},
      {ko:"잠깐만요", ipa:"jam-kkan-man-yo", en:"Just a moment"}
    ],
    phrases:[
      {ko:"죄송해요, 한국어를 잘 못 해요.", ipa:"joe-song-hae-yo, han-gug-eo-reul jal mot hae-yo", en:"Sorry, I don't speak Korean well."},
      {ko:"영어 하세요?", ipa:"yeong-eo ha-se-yo", en:"Do you speak English?"},
      {ko:"다시 한번 말해 주세요.", ipa:"da-si han-beon mal-hae ju-se-yo", en:"Please say it one more time."},
      {ko:"천천히 말해 주세요.", ipa:"cheon-cheon-hi mal-hae ju-se-yo", en:"Please speak slowly."},
      {ko:"이해 못 했어요, 죄송해요.", ipa:"i-hae mot haet-eo-yo, joe-song-hae-yo", en:"I didn't understand, sorry."},
      {ko:"도와주세요! 감사합니다.", ipa:"do-wa-ju-se-yo! gam-sa-ham-ni-da", en:"Please help me! Thank you."},
      {ko:"조금 알아요.", ipa:"jo-geum al-a-yo", en:"I know a little."},
      {ko:"괜찮아요, 물론이죠!", ipa:"gwaen-chan-a-yo, mul-lon-i-jyo", en:"It's fine, of course!"}
    ],
    grammar:"Korean sentence order is Subject → Object → Verb. 'I coffee drink' not 'I drink coffee.' The verb always comes last. This feels weird at first but becomes natural fast.",
    practice:["Memorize '도와주세요' — it's your emergency phrase.", "Practice '다시 말해 주세요' until you can say it without thinking."]
  },
  { day:3, title:"Introducing Yourself", titleNative:"자기소개", focus:"Tell people who you are.",
    vocab:[
      {ko:"저는", ipa:"jeo-neun", en:"I am / As for me (formal)"},
      {ko:"이름이 뭐예요?", ipa:"i-reum-i mwo-ye-yo", en:"What is your name?"},
      {ko:"제 이름은 ~이에요", ipa:"je i-reum-eun ~i-e-yo", en:"My name is ~"},
      {ko:"어디서 왔어요?", ipa:"eo-di-seo wat-eo-yo", en:"Where are you from?"},
      {ko:"미국 사람이에요", ipa:"mi-guk sa-ram-i-e-yo", en:"I am American"},
      {ko:"반가워요", ipa:"ban-ga-wo-yo", en:"Nice to meet you"},
      {ko:"몇 살이에요?", ipa:"myeot sal-i-e-yo", en:"How old are you?"},
      {ko:"직업이 뭐예요?", ipa:"jig-eob-i mwo-ye-yo", en:"What is your job?"},
      {ko:"여행자예요", ipa:"yeo-haeng-ja-ye-yo", en:"I am a traveler"},
      {ko:"달라스에서 왔어요", ipa:"dal-la-seu-e-seo wat-eo-yo", en:"I came from Dallas"}
    ],
    phrases:[
      {ko:"안녕하세요, 저는 지미예요.", ipa:"an-nyeong-ha-se-yo, jeo-neun ji-mi-ye-yo", en:"Hello, I am Jimmy."},
      {ko:"미국에서 왔어요. 달라스요.", ipa:"mi-gug-e-seo wat-eo-yo. dal-la-seu-yo", en:"I came from America. Dallas."},
      {ko:"반가워요! 처음 뵙겠습니다.", ipa:"ban-ga-wo-yo! cheo-eum boep-get-seum-ni-da", en:"Nice to meet you! (first meeting)"},
      {ko:"이름이 뭐예요?", ipa:"i-reum-i mwo-ye-yo", en:"What is your name?"},
      {ko:"직업이 뭐예요? 저는 여행자예요.", ipa:"jig-eob-i mwo-ye-yo? jeo-neun yeo-haeng-ja-ye-yo", en:"What do you do? I'm a traveler."},
      {ko:"한국어를 공부하고 있어요.", ipa:"han-gug-eo-reul gong-bu-ha-go it-eo-yo", en:"I am studying Korean."},
      {ko:"서울이 너무 좋아요!", ipa:"seo-ul-i neo-mu jo-a-yo", en:"I love Seoul so much!"},
      {ko:"한국 음식이 정말 맛있어요.", ipa:"han-guk eum-sig-i jeong-mal mas-it-eo-yo", en:"Korean food is really delicious."}
    ],
    grammar:"Korean uses particles after nouns to show their role. 은/는 (topic), 이/가 (subject), 을/를 (object). '저는' = 'as for me.' You don't need to master this — just recognize the pattern.",
    practice:["Write out your self-intro: name, country, city.", "Say it out loud 3 times until it flows naturally."]
  },
  { day:4, title:"Numbers 1–10 & Counting", titleNative:"숫자 1-10", focus:"Two number systems — learn the native Korean first.",
    vocab:[
      {ko:"하나", ipa:"ha-na", en:"One (native Korean)"},
      {ko:"둘", ipa:"dul", en:"Two (native Korean)"},
      {ko:"셋", ipa:"set", en:"Three (native Korean)"},
      {ko:"넷", ipa:"net", en:"Four (native Korean)"},
      {ko:"다섯", ipa:"da-seot", en:"Five (native Korean)"},
      {ko:"여섯", ipa:"yeo-seot", en:"Six (native Korean)"},
      {ko:"일곱", ipa:"il-gop", en:"Seven (native Korean)"},
      {ko:"여덟", ipa:"yeo-deol", en:"Eight (native Korean)"},
      {ko:"아홉", ipa:"a-hop", en:"Nine (native Korean)"},
      {ko:"열", ipa:"yeol", en:"Ten (native Korean)"}
    ],
    phrases:[
      {ko:"한 개 주세요.", ipa:"han gae ju-se-yo", en:"Please give me one (item)."},
      {ko:"두 개 주세요.", ipa:"du gae ju-se-yo", en:"Please give me two."},
      {ko:"세 명이에요.", ipa:"se myeong-i-e-yo", en:"There are three people."},
      {ko:"몇 개예요?", ipa:"myeot gae-ye-yo", en:"How many are there?"},
      {ko:"다섯 개 있어요.", ipa:"da-seot gae it-eo-yo", en:"There are five of them."},
      {ko:"열 번 말해요.", ipa:"yeol beon mal-hae-yo", en:"Say it ten times."},
      {ko:"하나, 둘, 셋!", ipa:"ha-na, dul, set", en:"One, two, three! (countdown)"},
      {ko:"몇 명이에요?", ipa:"myeot myeong-i-e-yo", en:"How many people?"}
    ],
    grammar:"Korean has TWO number systems: native Korean (하나, 둘, 셋...) for counting objects, ages, and hours; Sino-Korean (일, 이, 삼...) for money, dates, minutes, and floors. Today = native Korean. Tomorrow = Sino-Korean.",
    practice:["Count from 1–10 in native Korean out loud, twice.", "Use 하나/둘/셋 to count objects around you right now."]
  },
  { day:5, title:"Sino-Korean Numbers & Money", titleNative:"한자 숫자와 돈", focus:"The number system you use for prices.",
    vocab:[
      {ko:"일", ipa:"il", en:"One (Sino-Korean)"},
      {ko:"이", ipa:"i", en:"Two (Sino-Korean)"},
      {ko:"삼", ipa:"sam", en:"Three (Sino-Korean)"},
      {ko:"사", ipa:"sa", en:"Four (Sino-Korean)"},
      {ko:"오", ipa:"o", en:"Five (Sino-Korean)"},
      {ko:"육", ipa:"yuk", en:"Six (Sino-Korean)"},
      {ko:"칠", ipa:"chil", en:"Seven (Sino-Korean)"},
      {ko:"팔", ipa:"pal", en:"Eight (Sino-Korean)"},
      {ko:"구", ipa:"gu", en:"Nine (Sino-Korean)"},
      {ko:"십", ipa:"sip", en:"Ten (Sino-Korean) / 백=100 / 천=1,000 / 만=10,000"}
    ],
    phrases:[
      {ko:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much is it?"},
      {ko:"오천 원이에요.", ipa:"o-cheon won-i-e-yo", en:"It's 5,000 won."},
      {ko:"이만 원이에요.", ipa:"i-man won-i-e-yo", en:"It's 20,000 won."},
      {ko:"너무 비싸요.", ipa:"neo-mu bi-ssa-yo", en:"It's too expensive."},
      {ko:"깎아 주세요.", ipa:"kkak-ka ju-se-yo", en:"Please give me a discount."},
      {ko:"카드 되요?", ipa:"ka-deu doe-yo", en:"Do you accept cards?"},
      {ko:"영수증 주세요.", ipa:"yeong-su-jeung ju-se-yo", en:"Please give me a receipt."},
      {ko:"잔돈 주세요.", ipa:"jan-don ju-se-yo", en:"Please give me change."}
    ],
    grammar:"Korean currency is Won (원). Prices are large numbers — 1,000원 ≈ $0.75 USD. 만 (10,000) is a key unit. '이만 원' = 20,000 won. Always use Sino-Korean numbers for prices.",
    practice:["Practice saying prices: 오천 원, 일만 원, 삼만 원.", "Ask '얼마예요?' out loud — you'll use this constantly."]
  },
  { day:6, title:"Time, Days & Dates", titleNative:"시간과 날짜", focus:"Tell time and plan your day.",
    vocab:[
      {ko:"지금 몇 시예요?", ipa:"ji-geum myeot si-ye-yo", en:"What time is it now?"},
      {ko:"오전", ipa:"o-jeon", en:"AM / Morning"},
      {ko:"오후", ipa:"o-hu", en:"PM / Afternoon"},
      {ko:"월요일", ipa:"wol-yo-il", en:"Monday"},
      {ko:"화요일", ipa:"hwa-yo-il", en:"Tuesday"},
      {ko:"수요일", ipa:"su-yo-il", en:"Wednesday"},
      {ko:"목요일", ipa:"mok-yo-il", en:"Thursday"},
      {ko:"금요일", ipa:"geum-yo-il", en:"Friday"},
      {ko:"토요일", ipa:"to-yo-il", en:"Saturday"},
      {ko:"일요일", ipa:"il-yo-il", en:"Sunday"}
    ],
    phrases:[
      {ko:"지금 몇 시예요? 두 시예요.", ipa:"ji-geum myeot si-ye-yo? du si-ye-yo", en:"What time is it? It's 2 o'clock."},
      {ko:"오전 열 시에 만나요.", ipa:"o-jeon yeol si-e man-na-yo", en:"Let's meet at 10 AM."},
      {ko:"오늘이 무슨 요일이에요?", ipa:"o-neul-i mu-seun yo-il-i-e-yo", en:"What day of the week is today?"},
      {ko:"금요일이에요.", ipa:"geum-yo-il-i-e-yo", en:"It's Friday."},
      {ko:"내일 봐요!", ipa:"nae-il bwa-yo", en:"See you tomorrow!"},
      {ko:"오늘 몇 월 며칠이에요?", ipa:"o-neul myeot wol myeo-chil-i-e-yo", en:"What is today's date?"},
      {ko:"주말에 뭐 해요?", ipa:"ju-mal-e mwo hae-yo", en:"What are you doing on the weekend?"},
      {ko:"토요일에 만나요.", ipa:"to-yo-il-e man-na-yo", en:"Let's meet on Saturday."}
    ],
    grammar:"Hours use native Korean numbers: 한 시 (1 o'clock), 두 시 (2 o'clock). Minutes use Sino-Korean: 삼십 분 (30 minutes). So 2:30 = 두 시 삼십 분. Yes, Korea uses both systems at once.",
    practice:["Say today's day of the week in Korean.", "Practice saying the current time out loud."]
  },
  { day:7, title:"Colors & Descriptive Words", titleNative:"색깔과 묘사", focus:"Describe what you see.",
    vocab:[
      {ko:"빨간색", ipa:"ppal-gan-saek", en:"Red"},
      {ko:"파란색", ipa:"pa-ran-saek", en:"Blue"},
      {ko:"노란색", ipa:"no-ran-saek", en:"Yellow"},
      {ko:"초록색", ipa:"cho-rok-saek", en:"Green"},
      {ko:"하얀색", ipa:"ha-yan-saek", en:"White"},
      {ko:"검은색", ipa:"geom-eun-saek", en:"Black"},
      {ko:"예뻐요", ipa:"ye-ppeo-yo", en:"It's pretty / beautiful"},
      {ko:"커요", ipa:"keo-yo", en:"It's big"},
      {ko:"작아요", ipa:"jak-a-yo", en:"It's small"},
      {ko:"맛있어요", ipa:"mas-it-eo-yo", en:"It's delicious"}
    ],
    phrases:[
      {ko:"이 색이 뭐예요?", ipa:"i saek-i mwo-ye-yo", en:"What color is this?"},
      {ko:"빨간색 주세요.", ipa:"ppal-gan-saek ju-se-yo", en:"Please give me the red one."},
      {ko:"너무 예뻐요!", ipa:"neo-mu ye-ppeo-yo", en:"So beautiful / pretty!"},
      {ko:"이거 너무 커요.", ipa:"i-geo neo-mu keo-yo", en:"This is too big."},
      {ko:"더 작은 거 있어요?", ipa:"deo jak-eun geo it-eo-yo", en:"Do you have a smaller one?"},
      {ko:"맛있어요! 정말 맛있어요.", ipa:"mas-it-eo-yo! jeong-mal mas-it-eo-yo", en:"Delicious! Really delicious."},
      {ko:"이게 뭐예요?", ipa:"i-ge mwo-ye-yo", en:"What is this?"},
      {ko:"정말 멋있어요!", ipa:"jeong-mal meot-it-eo-yo", en:"Really cool / awesome!"}
    ],
    grammar:"Korean adjectives act like verbs — they conjugate! '예쁘다' becomes '예뻐요' in polite speech. You don't say 'the food is delicious' with separate words — '맛있어요' IS the whole sentence.",
    practice:["Look around and name 5 colors in Korean.", "Practice '맛있어요' — you'll say this constantly in Korea."]
  },
  { day:8, title:"At the Café", titleNative:"카페에서", focus:"Korea's café culture is world-class — you'll be here a lot.",
    vocab:[
      {ko:"커피", ipa:"keo-pi", en:"Coffee"},
      {ko:"아메리카노", ipa:"a-me-ri-ka-no", en:"Americano (most popular in Korea)"},
      {ko:"카페라떼", ipa:"ka-pe-ra-tte", en:"Café latte"},
      {ko:"녹차", ipa:"nok-cha", en:"Green tea"},
      {ko:"차가운", ipa:"cha-ga-un", en:"Cold / iced"},
      {ko:"따뜻한", ipa:"tta-tteut-han", en:"Hot / warm"},
      {ko:"테이크아웃", ipa:"te-i-keu-a-ut", en:"Takeout"},
      {ko:"여기서 마실게요", ipa:"yeo-gi-seo ma-sil-ge-yo", en:"I'll drink here"},
      {ko:"사이즈", ipa:"sa-i-jeu", en:"Size"},
      {ko:"설탕", ipa:"seol-tang", en:"Sugar"}
    ],
    phrases:[
      {ko:"아메리카노 한 잔 주세요.", ipa:"a-me-ri-ka-no han jan ju-se-yo", en:"One Americano, please."},
      {ko:"아이스로 주세요.", ipa:"a-i-seu-ro ju-se-yo", en:"Iced, please."},
      {ko:"따뜻하게 주세요.", ipa:"tta-tteut-ha-ge ju-se-yo", en:"Hot, please."},
      {ko:"테이크아웃이요.", ipa:"te-i-keu-a-ut-i-yo", en:"Takeout, please."},
      {ko:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much?"},
      {ko:"카드 되요?", ipa:"ka-deu doe-yo", en:"Do you take cards?"},
      {ko:"영수증 주세요.", ipa:"yeong-su-jeung ju-se-yo", en:"Receipt please."},
      {ko:"와이파이 비밀번호가 뭐예요?", ipa:"wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo", en:"What's the WiFi password?"}
    ],
    grammar:"아이스 (iced) and 핫 (hot) are English loanwords used constantly. Korean has thousands of English-origin words — called 외래어 (waeraeeo). Spotting them makes ordering much easier.",
    practice:["Order your usual coffee drink in Korean out loud.", "Memorize '와이파이 비밀번호가 뭐예요?' — essential for any Korean café."]
  },
  { day:9, title:"Ordering Food", titleNative:"음식 주문하기", focus:"Navigate Korean restaurants like a local.",
    vocab:[
      {ko:"메뉴 주세요", ipa:"me-nyu ju-se-yo", en:"Menu please"},
      {ko:"주문할게요", ipa:"ju-mun-hal-ge-yo", en:"I'd like to order"},
      {ko:"이거 주세요", ipa:"i-geo ju-se-yo", en:"I'll have this (pointing)"},
      {ko:"맵지 않게 해 주세요", ipa:"maep-ji an-ke hae ju-se-yo", en:"Please make it not spicy"},
      {ko:"맵게 해 주세요", ipa:"maep-ge hae ju-se-yo", en:"Please make it spicy"},
      {ko:"채식주의자예요", ipa:"chae-sik-ju-ui-ja-ye-yo", en:"I am vegetarian"},
      {ko:"물 주세요", ipa:"mul ju-se-yo", en:"Water please"},
      {ko:"리필 되요?", ipa:"ri-pil doe-yo", en:"Is refill available?"},
      {ko:"계산해 주세요", ipa:"gye-san-hae ju-se-yo", en:"Check please"},
      {ko:"포장해 주세요", ipa:"po-jang-hae ju-se-yo", en:"Please pack it to go"}
    ],
    phrases:[
      {ko:"여기요! 주문할게요.", ipa:"yeo-gi-yo! ju-mun-hal-ge-yo", en:"Excuse me! I'd like to order."},
      {ko:"비빔밥 하나 주세요.", ipa:"bi-bim-bap ha-na ju-se-yo", en:"One bibimbap please."},
      {ko:"이거 맛있어요?", ipa:"i-geo mas-it-eo-yo", en:"Is this delicious?"},
      {ko:"인기 있는 게 뭐예요?", ipa:"in-gi it-neun ge mwo-ye-yo", en:"What's popular here?"},
      {ko:"맵지 않게 해 주세요.", ipa:"maep-ji an-ke hae ju-se-yo", en:"Please make it not spicy."},
      {ko:"정말 맛있어요! 잘 먹었습니다.", ipa:"jeong-mal mas-it-eo-yo! jal meok-eot-seum-ni-da", en:"So delicious! Thank you for the meal."},
      {ko:"계산해 주세요.", ipa:"gye-san-hae ju-se-yo", en:"Bill please."},
      {ko:"같이 계산해 주세요.", ipa:"gat-i gye-san-hae ju-se-yo", en:"Together on one bill please."}
    ],
    grammar:"'여기요!' (yeo-gi-yo) literally means 'here!' — it's how you call a server in Korea. Shouting it is normal and expected. '잘 먹겠습니다' (before eating) and '잘 먹었습니다' (after) are set phrases showing gratitude for food.",
    practice:["Practice '여기요! 주문할게요.' with the right intonation.", "Memorize '잘 먹었습니다' — Koreans appreciate foreigners who know this."]
  },
  { day:10, title:"Shopping", titleNative:"쇼핑", focus:"Markets, malls, and K-pop merch stores.",
    vocab:[
      {ko:"얼마예요?", ipa:"eol-ma-ye-yo", en:"How much is it?"},
      {ko:"비싸요", ipa:"bi-ssa-yo", en:"It's expensive"},
      {ko:"싸요", ipa:"ssa-yo", en:"It's cheap"},
      {ko:"할인 되요?", ipa:"hal-in doe-yo", en:"Is there a discount?"},
      {ko:"이거 입어봐도 되요?", ipa:"i-geo ib-eo-bwa-do doe-yo", en:"Can I try this on?"},
      {ko:"다른 색 있어요?", ipa:"da-reun saek it-eo-yo", en:"Do you have another color?"},
      {ko:"사이즈가 뭐예요?", ipa:"sa-i-jeu-ga mwo-ye-yo", en:"What size is this?"},
      {ko:"포장해 주세요", ipa:"po-jang-hae ju-se-yo", en:"Please wrap/package it"},
      {ko:"선물이에요", ipa:"seon-mul-i-e-yo", en:"It's a gift"},
      {ko:"영수증 주세요", ipa:"yeong-su-jeung ju-se-yo", en:"Receipt please"}
    ],
    phrases:[
      {ko:"이거 얼마예요?", ipa:"i-geo eol-ma-ye-yo", en:"How much is this?"},
      {ko:"너무 비싸요. 깎아 주세요.", ipa:"neo-mu bi-ssa-yo. kkak-ka ju-se-yo", en:"Too expensive. Please give a discount."},
      {ko:"이거 살게요.", ipa:"i-geo sal-ge-yo", en:"I'll buy this."},
      {ko:"다른 거 보여 주세요.", ipa:"da-reun geo bo-yeo ju-se-yo", en:"Show me another one."},
      {ko:"카드로 계산할게요.", ipa:"ka-deu-ro gye-san-hal-ge-yo", en:"I'll pay by card."},
      {ko:"선물 포장해 주세요.", ipa:"seon-mul po-jang-hae ju-se-yo", en:"Please gift wrap it."},
      {ko:"환불 되요?", ipa:"hwan-bul doe-yo", en:"Can I get a refund?"},
      {ko:"교환 되요?", ipa:"gyo-hwan doe-yo", en:"Can I exchange it?"}
    ],
    grammar:"Koreans often show prices on a calculator rather than say them — prices can be large numbers. Watch for the unit 만 (10,000 won). An item that costs '삼만 원' = 30,000 won ≈ $22 USD.",
    practice:["Practice the price negotiation phrases — useful at Namdaemun Market.", "Say '이거 살게요' out loud — decisive buyers get good service."]
  },
  { day:11, title:"Directions & Getting Around", titleNative:"길 찾기", focus:"Navigate Seoul's streets.",
    vocab:[
      {ko:"어디예요?", ipa:"eo-di-ye-yo", en:"Where is it?"},
      {ko:"~에 어떻게 가요?", ipa:"~e eo-tteo-ke ga-yo", en:"How do I get to ~?"},
      {ko:"왼쪽", ipa:"oen-jjok", en:"Left"},
      {ko:"오른쪽", ipa:"o-reun-jjok", en:"Right"},
      {ko:"직진", ipa:"jik-jin", en:"Straight ahead"},
      {ko:"여기", ipa:"yeo-gi", en:"Here"},
      {ko:"저기", ipa:"jeo-gi", en:"Over there"},
      {ko:"가까워요", ipa:"ga-kka-wo-yo", en:"It's close"},
      {ko:"멀어요", ipa:"meol-eo-yo", en:"It's far"},
      {ko:"지도 보여 주세요", ipa:"ji-do bo-yeo ju-se-yo", en:"Please show me the map"}
    ],
    phrases:[
      {ko:"경복궁이 어디예요?", ipa:"gyeong-bok-gung-i eo-di-ye-yo", en:"Where is Gyeongbokgung Palace?"},
      {ko:"지하철역이 어디예요?", ipa:"ji-ha-cheol-yeok-i eo-di-ye-yo", en:"Where is the subway station?"},
      {ko:"여기서 얼마나 걸려요?", ipa:"yeo-gi-seo eol-ma-na geol-lyeo-yo", en:"How long does it take from here?"},
      {ko:"걸어서 갈 수 있어요?", ipa:"geol-eo-seo gal su it-eo-yo", en:"Can I walk there?"},
      {ko:"오른쪽으로 가세요.", ipa:"o-reun-jjok-eu-ro ga-se-yo", en:"Go to the right."},
      {ko:"저기서 왼쪽으로 도세요.", ipa:"jeo-gi-seo oen-jjok-eu-ro do-se-yo", en:"Turn left over there."},
      {ko:"길을 잃었어요.", ipa:"gil-eul il-eot-eo-yo", en:"I'm lost."},
      {ko:"지도 앱으로 찾아볼게요.", ipa:"ji-do aeb-eu-ro chat-a-bol-ge-yo", en:"I'll look it up on the maps app."}
    ],
    grammar:"Korean addresses go from largest to smallest: country → city → district → street → building number. The opposite of English. GPS apps work great in Korea — Naver Maps or Kakao Maps beat Google in accuracy.",
    practice:["Look up your hotel or a landmark and ask for directions in Korean.", "Practice left/right: 왼쪽, 오른쪽 — say them while physically pointing."]
  },
  { day:12, title:"Seoul Subway & Transportation", titleNative:"지하철과 교통", focus:"Seoul's subway is one of the world's best.",
    vocab:[
      {ko:"지하철", ipa:"ji-ha-cheol", en:"Subway"},
      {ko:"버스", ipa:"beo-seu", en:"Bus"},
      {ko:"택시", ipa:"taek-si", en:"Taxi"},
      {ko:"기차", ipa:"gi-cha", en:"Train (KTX)"},
      {ko:"~행", ipa:"~haeng", en:"Bound for ~ (direction)"},
      {ko:"다음 역", ipa:"da-eum yeok", en:"Next station"},
      {ko:"환승", ipa:"hwan-seung", en:"Transfer"},
      {ko:"교통카드", ipa:"gyo-tong-ka-deu", en:"Transit card (T-money)"},
      {ko:"출구", ipa:"chul-gu", en:"Exit"},
      {ko:"승강장", ipa:"seung-gang-jang", en:"Platform"}
    ],
    phrases:[
      {ko:"명동역 어디예요?", ipa:"myeong-dong-yeok eo-di-ye-yo", en:"Where is Myeongdong Station?"},
      {ko:"이 지하철 강남역 가요?", ipa:"i ji-ha-cheol gang-nam-yeok ga-yo", en:"Does this subway go to Gangnam?"},
      {ko:"몇 번 출구예요?", ipa:"myeot beon chul-gu-ye-yo", en:"Which exit number?"},
      {ko:"어디서 환승해요?", ipa:"eo-di-seo hwan-seung-hae-yo", en:"Where do I transfer?"},
      {ko:"티머니 어디서 충전해요?", ipa:"ti-meo-ni eo-di-seo chung-jeon-hae-yo", en:"Where can I top up my T-money?"},
      {ko:"강남까지 얼마예요?", ipa:"gang-nam-kka-ji eol-ma-ye-yo", en:"How much is it to Gangnam?"},
      {ko:"여기 세워 주세요.", ipa:"yeo-gi se-wo ju-se-yo", en:"Please stop here. (taxi)"},
      {ko:"공항 가주세요.", ipa:"gong-hang ga-ju-se-yo", en:"Please go to the airport."}
    ],
    grammar:"Seoul's subway announces stations in Korean, English, Chinese, and Japanese. Still, knowing Korean station names helps. The T-money card works on subway, bus, and even some taxis — buy one at any convenience store.",
    practice:["Memorize '몇 번 출구예요?' — exit numbers are crucial in Seoul.", "Practice '여기 세워 주세요' for taxis — it works every time."]
  },
  { day:13, title:"At the Hotel", titleNative:"호텔에서", focus:"Check in, check out, get what you need.",
    vocab:[
      {ko:"체크인", ipa:"che-keu-in", en:"Check in"},
      {ko:"체크아웃", ipa:"che-keu-a-ut", en:"Check out"},
      {ko:"예약", ipa:"ye-yak", en:"Reservation"},
      {ko:"방", ipa:"bang", en:"Room"},
      {ko:"열쇠 / 카드키", ipa:"yeol-soe / ka-deu-ki", en:"Key / Key card"},
      {ko:"짐", ipa:"jim", en:"Luggage"},
      {ko:"와이파이", ipa:"wa-i-pa-i", en:"WiFi"},
      {ko:"엘리베이터", ipa:"el-li-be-i-teo", en:"Elevator"},
      {ko:"수건", ipa:"su-geon", en:"Towel"},
      {ko:"아침 식사", ipa:"a-chim sik-sa", en:"Breakfast"}
    ],
    phrases:[
      {ko:"체크인하고 싶어요.", ipa:"che-keu-in-ha-go sip-eo-yo", en:"I'd like to check in."},
      {ko:"예약했어요. 이름은 지미예요.", ipa:"ye-yak-haet-eo-yo. i-reum-eun ji-mi-ye-yo", en:"I have a reservation. My name is Jimmy."},
      {ko:"와이파이 비밀번호가 뭐예요?", ipa:"wa-i-pa-i bi-mil-beon-ho-ga mwo-ye-yo", en:"What's the WiFi password?"},
      {ko:"수건 더 주세요.", ipa:"su-geon deo ju-se-yo", en:"Please give me more towels."},
      {ko:"방이 너무 추워요.", ipa:"bang-i neo-mu chu-wo-yo", en:"The room is too cold."},
      {ko:"열쇠가 안 돼요.", ipa:"yeol-soe-ga an dwae-yo", en:"The key doesn't work."},
      {ko:"체크아웃은 몇 시예요?", ipa:"che-keu-a-ut-eun myeot si-ye-yo", en:"What time is checkout?"},
      {ko:"짐 맡겨도 될까요?", ipa:"jim mat-gyeo-do doel-kka-yo", en:"Can I leave my luggage here?"}
    ],
    grammar:"Korean hotels range from luxury 5-stars to jjimjilbang (찜질방 — heated bathhouse/sleeping floor). 모텔 (motel) is budget but clean. 게스트하우스 (guesthouse) is social. Know your 숙박 (accommodation) options.",
    practice:["Practice the check-in phrases as if arriving at a hotel.", "Learn '와이파이 비밀번호가 뭐예요?' — first thing anyone asks anywhere."]
  },
  { day:14, title:"Health & Emergencies", titleNative:"건강과 응급상황", focus:"Stay safe — phrases you hope you never need.",
    vocab:[
      {ko:"도와주세요!", ipa:"do-wa-ju-se-yo", en:"Help me!"},
      {ko:"병원", ipa:"byeong-won", en:"Hospital"},
      {ko:"약국", ipa:"yak-guk", en:"Pharmacy"},
      {ko:"아파요", ipa:"a-pa-yo", en:"I'm sick / It hurts"},
      {ko:"여기가 아파요", ipa:"yeo-gi-ga a-pa-yo", en:"It hurts here"},
      {ko:"두통이 있어요", ipa:"du-tong-i it-eo-yo", en:"I have a headache"},
      {ko:"열이 있어요", ipa:"yeol-i it-eo-yo", en:"I have a fever"},
      {ko:"알레르기가 있어요", ipa:"al-le-reu-gi-ga it-eo-yo", en:"I have an allergy"},
      {ko:"119", ipa:"il-il-gu", en:"Emergency number (Korea)"},
      {ko:"경찰", ipa:"gyeong-chal", en:"Police"}
    ],
    phrases:[
      {ko:"도와주세요! 응급상황이에요!", ipa:"do-wa-ju-se-yo! eung-geup-sang-hwang-i-e-yo", en:"Help me! This is an emergency!"},
      {ko:"병원에 가야 해요.", ipa:"byeong-won-e ga-ya hae-yo", en:"I need to go to the hospital."},
      {ko:"약국이 어디예요?", ipa:"yak-guk-i eo-di-ye-yo", en:"Where is the pharmacy?"},
      {ko:"두통약 있어요?", ipa:"du-tong-yak it-eo-yo", en:"Do you have headache medicine?"},
      {ko:"견과류 알레르기가 있어요.", ipa:"gyeon-gwa-ryu al-le-reu-gi-ga it-eo-yo", en:"I have a nut allergy."},
      {ko:"119에 전화해 주세요.", ipa:"il-il-gu-e jeon-hwa-hae ju-se-yo", en:"Please call 119 (emergency)."},
      {ko:"여권을 잃어버렸어요.", ipa:"yeo-gwon-eul il-eo-beo-ryeot-eo-yo", en:"I lost my passport."},
      {ko:"대사관이 어디예요?", ipa:"dae-sa-gwan-i eo-di-ye-yo", en:"Where is the embassy?"}
    ],
    grammar:"Korea's emergency number is 119 (fire/ambulance) and 112 (police). Most major hospital ERs in Seoul have English interpreters. T-Map and Naver Maps can route you to the nearest 응급실 (emergency room) fast.",
    practice:["Save 119 and 112 in your phone before you travel.", "Practice '도와주세요!' loudly — don't be shy in a real emergency."]
  },
  { day:15, title:"Family & Relationships", titleNative:"가족과 관계", focus:"Talk about the people in your life.",
    vocab:[
      {ko:"가족", ipa:"ga-jok", en:"Family"},
      {ko:"부모님", ipa:"bu-mo-nim", en:"Parents"},
      {ko:"아버지", ipa:"a-beo-ji", en:"Father"},
      {ko:"어머니", ipa:"eo-meo-ni", en:"Mother"},
      {ko:"형 / 오빠", ipa:"hyeong / op-pa", en:"Older brother (said by male/female)"},
      {ko:"누나 / 언니", ipa:"nu-na / eon-ni", en:"Older sister (said by male/female)"},
      {ko:"남자친구", ipa:"nam-ja-chin-gu", en:"Boyfriend"},
      {ko:"여자친구", ipa:"yeo-ja-chin-gu", en:"Girlfriend"},
      {ko:"결혼했어요?", ipa:"gyeol-hon-haet-eo-yo", en:"Are you married?"},
      {ko:"친구", ipa:"chin-gu", en:"Friend"}
    ],
    phrases:[
      {ko:"가족이 몇 명이에요?", ipa:"ga-jok-i myeot myeong-i-e-yo", en:"How many people are in your family?"},
      {ko:"형제자매가 있어요?", ipa:"hyeong-je-ja-mae-ga it-eo-yo", en:"Do you have siblings?"},
      {ko:"남자친구/여자친구 있어요?", ipa:"nam-ja-chin-gu/yeo-ja-chin-gu it-eo-yo", en:"Do you have a boyfriend/girlfriend?"},
      {ko:"결혼했어요.", ipa:"gyeol-hon-haet-eo-yo", en:"I am married."},
      {ko:"혼자예요.", ipa:"hon-ja-ye-yo", en:"I'm alone / single."},
      {ko:"제 친구예요.", ipa:"je chin-gu-ye-yo", en:"This is my friend."},
      {ko:"부모님이 보고 싶어요.", ipa:"bu-mo-nim-i bo-go sip-eo-yo", en:"I miss my parents."},
      {ko:"한국에 아는 사람 없어요.", ipa:"han-gug-e a-neun sa-ram eop-eo-yo", en:"I don't know anyone in Korea."}
    ],
    grammar:"Korean kinship terms are complex — how you address someone depends on YOUR gender, not theirs. 오빠 (oppa) is an older brother if YOU are female. This is why K-drama fans know the word — female fans call male idols '오빠'.",
    practice:["Describe your family in 2–3 sentences using Korean.", "Learn 오빠/언니/형/누나 — these come up constantly in K-content."]
  },
  { day:16, title:"Weather & Seasons", titleNative:"날씨와 계절", focus:"Korea has dramatic seasons.",
    vocab:[
      {ko:"날씨가 어때요?", ipa:"nal-ssi-ga eo-ttae-yo", en:"How is the weather?"},
      {ko:"더워요", ipa:"deo-wo-yo", en:"It's hot"},
      {ko:"추워요", ipa:"chu-wo-yo", en:"It's cold"},
      {ko:"비가 와요", ipa:"bi-ga wa-yo", en:"It's raining"},
      {ko:"눈이 와요", ipa:"nun-i wa-yo", en:"It's snowing"},
      {ko:"맑아요", ipa:"mal-ga-yo", en:"It's clear/sunny"},
      {ko:"봄 / 여름 / 가을 / 겨울", ipa:"bom / yeo-reum / ga-eul / gyeo-ul", en:"Spring / Summer / Fall / Winter"},
      {ko:"미세먼지", ipa:"mi-se-meon-ji", en:"Fine dust / air pollution"},
      {ko:"태풍", ipa:"tae-pung", en:"Typhoon"},
      {ko:"습해요", ipa:"seup-hae-yo", en:"It's humid"}
    ],
    phrases:[
      {ko:"오늘 날씨가 어때요?", ipa:"o-neul nal-ssi-ga eo-ttae-yo", en:"How is the weather today?"},
      {ko:"너무 더워요! 에어컨 있어요?", ipa:"neo-mu deo-wo-yo! e-eo-keon it-eo-yo", en:"So hot! Is there air conditioning?"},
      {ko:"비가 많이 와요.", ipa:"bi-ga man-i wa-yo", en:"It's raining a lot."},
      {ko:"오늘 미세먼지 심해요.", ipa:"o-neul mi-se-meon-ji sim-hae-yo", en:"The fine dust is bad today."},
      {ko:"마스크 써야 해요?", ipa:"ma-seu-keu sseo-ya hae-yo", en:"Do I need to wear a mask?"},
      {ko:"한국 가을이 정말 예뻐요!", ipa:"han-guk ga-eul-i jeong-mal ye-ppeo-yo", en:"Korean autumn is really beautiful!"},
      {ko:"내일 눈이 온대요.", ipa:"nae-il nun-i on-dae-yo", en:"They say it will snow tomorrow."},
      {ko:"우산 있어요?", ipa:"u-san it-eo-yo", en:"Do you have an umbrella?"}
    ],
    grammar:"미세먼지 (fine dust) is a major topic in Korea — pollution from China creates bad air quality days. Locals check apps daily. The Air Korea app (에어코리아) is the go-to. On bad days, everyone wears masks.",
    practice:["Check today's weather and describe it in Korean.", "Learn 미세먼지 — locals will bring it up in conversation."]
  },
  { day:17, title:"Emotions & Feelings", titleNative:"감정과 기분", focus:"Express yourself beyond just 'good'.",
    vocab:[
      {ko:"좋아요", ipa:"jo-a-yo", en:"I like it / It's good"},
      {ko:"싫어요", ipa:"sil-eo-yo", en:"I don't like it"},
      {ko:"행복해요", ipa:"haeng-bok-hae-yo", en:"I'm happy"},
      {ko:"슬퍼요", ipa:"seul-peo-yo", en:"I'm sad"},
      {ko:"피곤해요", ipa:"pi-gon-hae-yo", en:"I'm tired"},
      {ko:"배고파요", ipa:"bae-go-pa-yo", en:"I'm hungry"},
      {ko:"배불러요", ipa:"bae-bul-leo-yo", en:"I'm full"},
      {ko:"설레요", ipa:"seol-le-yo", en:"I'm excited/flutter feeling"},
      {ko:"그리워요", ipa:"geu-ri-wo-yo", en:"I miss (something/someone)"},
      {ko:"무서워요", ipa:"mu-seo-wo-yo", en:"I'm scared"}
    ],
    phrases:[
      {ko:"지금 기분이 어때요?", ipa:"ji-geum gi-bun-i eo-ttae-yo", en:"How are you feeling right now?"},
      {ko:"너무 피곤해요, 자고 싶어요.", ipa:"neo-mu pi-gon-hae-yo, ja-go sip-eo-yo", en:"I'm so tired, I want to sleep."},
      {ko:"배고파요! 밥 먹어요.", ipa:"bae-go-pa-yo! bap meok-eo-yo", en:"I'm hungry! Let's eat."},
      {ko:"한국에 와서 정말 행복해요.", ipa:"han-gug-e wa-seo jeong-mal haeng-bok-hae-yo", en:"I'm really happy to be in Korea."},
      {ko:"설레요! 처음이에요.", ipa:"seol-le-yo! cheo-eum-i-e-yo", en:"I'm so excited! It's my first time."},
      {ko:"집이 그리워요.", ipa:"jib-i geu-ri-wo-yo", en:"I miss home."},
      {ko:"이거 너무 좋아요!", ipa:"i-geo neo-mu jo-a-yo", en:"I love this so much!"},
      {ko:"별로예요.", ipa:"byeol-lo-ye-yo", en:"It's not great / I don't really like it."}
    ],
    grammar:"설레다 (seolleda) is an untranslatable Korean emotion — the fluttery excitement mixed with anticipation you feel before something good. K-pop fans know this feeling. There's no exact English equivalent.",
    practice:["Describe your current mood using today's vocab.", "설레요 is a great phrase — use it when something excites you in Korea."]
  },
  { day:18, title:"Activities & Hobbies", titleNative:"활동과 취미", focus:"What do you do for fun?",
    vocab:[
      {ko:"취미가 뭐예요?", ipa:"chwi-mi-ga mwo-ye-yo", en:"What is your hobby?"},
      {ko:"음악 듣기", ipa:"eum-ak deut-gi", en:"Listening to music"},
      {ko:"영화 보기", ipa:"yeong-hwa bo-gi", en:"Watching movies"},
      {ko:"여행하기", ipa:"yeo-haeng-ha-gi", en:"Traveling"},
      {ko:"요리하기", ipa:"yo-ri-ha-gi", en:"Cooking"},
      {ko:"운동하기", ipa:"un-dong-ha-gi", en:"Working out / exercising"},
      {ko:"사진 찍기", ipa:"sa-jin jjik-gi", en:"Taking photos"},
      {ko:"게임하기", ipa:"ge-im-ha-gi", en:"Playing games"},
      {ko:"독서", ipa:"dok-seo", en:"Reading"},
      {ko:"노래방", ipa:"no-rae-bang", en:"Karaoke room (private booth)"}
    ],
    phrases:[
      {ko:"취미가 뭐예요? 저는 여행을 좋아해요.", ipa:"chwi-mi-ga mwo-ye-yo? jeo-neun yeo-haeng-eul jo-a-hae-yo", en:"What's your hobby? I like traveling."},
      {ko:"노래방 가고 싶어요!", ipa:"no-rae-bang ga-go sip-eo-yo", en:"I want to go to norebang!"},
      {ko:"K-팝 좋아해요?", ipa:"ke-i-pap jo-a-hae-yo", en:"Do you like K-pop?"},
      {ko:"같이 운동해요!", ipa:"gat-i un-dong-hae-yo", en:"Let's work out together!"},
      {ko:"한국 드라마를 많이 봐요.", ipa:"han-guk deu-ra-ma-reul man-i bwa-yo", en:"I watch a lot of Korean dramas."},
      {ko:"사진 찍어도 돼요?", ipa:"sa-jin jjig-eo-do dwae-yo", en:"May I take a photo?"},
      {ko:"여기서 뭐가 재미있어요?", ipa:"yeo-gi-seo mwo-ga jae-mi-it-eo-yo", en:"What's fun to do here?"},
      {ko:"치맥 어때요?", ipa:"chi-maek eo-ttae-yo", en:"How about chimaek? (fried chicken + beer)"}
    ],
    grammar:"노래방 (norebang) is private karaoke — you rent a booth with your group. Not a bar. You order food and drinks to the room. It's a staple of Korean social life — refusing norebang is like refusing pizza in New York.",
    practice:["Say your hobbies in Korean — at least 2.", "Learn '사진 찍어도 돼요?' — you'll want lots of photos."]
  },
  { day:19, title:"K-Pop & Korean Culture", titleNative:"K-팝과 한국 문화", focus:"The vocabulary that put Korea on the global map.",
    vocab:[
      {ko:"아이돌", ipa:"a-i-dol", en:"Idol (K-pop star)"},
      {ko:"팬", ipa:"paen", en:"Fan"},
      {ko:"콘서트", ipa:"kon-seo-teu", en:"Concert"},
      {ko:"앨범", ipa:"ael-beum", en:"Album"},
      {ko:"데뷔", ipa:"de-bwi", en:"Debut"},
      {ko:"화이팅!", ipa:"hwa-i-ting", en:"Fighting! / You can do it! (encouragement)"},
      {ko:"대박!", ipa:"dae-bak", en:"Jackpot! / Awesome! / No way!"},
      {ko:"헐!", ipa:"heol", en:"Oh my gosh! / What!"},
      {ko:"귀여워요", ipa:"gwi-yeo-wo-yo", en:"It's cute"},
      {ko:"멋있어요", ipa:"meot-it-eo-yo", en:"It's cool / handsome"}
    ],
    phrases:[
      {ko:"어떤 그룹 좋아해요?", ipa:"eo-tteon geu-rup jo-a-hae-yo", en:"Which group do you like?"},
      {ko:"방탄소년단 팬이에요?", ipa:"bang-tan-so-nyeon-dan paen-i-e-yo", en:"Are you a BTS fan?"},
      {ko:"이번 앨범 너무 좋아요!", ipa:"i-beon ael-beum neo-mu jo-a-yo", en:"This album is so good!"},
      {ko:"대박! 진짜요?", ipa:"dae-bak! jin-jja-yo", en:"No way! Really?"},
      {ko:"화이팅! 할 수 있어요!", ipa:"hwa-i-ting! hal su it-eo-yo", en:"You can do it!"},
      {ko:"너무 귀여워요!", ipa:"neo-mu gwi-yeo-wo-yo", en:"So cute!"},
      {ko:"한국 드라마가 너무 재미있어요.", ipa:"han-guk deu-ra-ma-ga neo-mu jae-mi-it-eo-yo", en:"Korean dramas are so interesting."},
      {ko:"오빠!!! 사랑해요!", ipa:"op-pa!!! sa-rang-hae-yo", en:"Oppa!!! I love you! (classic fan phrase)"}
    ],
    grammar:"화이팅 (hwaiting) is borrowed from English 'fighting' but used as encouragement — like 'go for it!' or 'you've got this!' You'll hear it before exams, competitions, or any challenge. It's warm and sincere, not aggressive.",
    practice:["Use 대박! today for something that surprises or impresses you.", "화이팅 is contagious — practice saying it with energy."]
  },
  { day:20, title:"Korean Food Culture", titleNative:"한국 음식 문화", focus:"The dishes, the culture, the must-eats.",
    vocab:[
      {ko:"비빔밥", ipa:"bi-bim-bap", en:"Bibimbap (mixed rice bowl)"},
      {ko:"삼겹살", ipa:"sam-gyeop-sal", en:"Pork belly BBQ"},
      {ko:"김치", ipa:"gim-chi", en:"Kimchi"},
      {ko:"냉면", ipa:"naeng-myeon", en:"Cold noodles"},
      {ko:"떡볶이", ipa:"tteok-bo-kki", en:"Spicy rice cakes"},
      {ko:"치킨", ipa:"chi-kin", en:"Korean fried chicken"},
      {ko:"소주", ipa:"so-ju", en:"Soju (Korean rice liquor)"},
      {ko:"막걸리", ipa:"mak-geol-li", en:"Makgeolli (rice wine)"},
      {ko:"한 잔 해요", ipa:"han jan hae-yo", en:"Let's have a drink"},
      {ko:"건배!", ipa:"geon-bae", en:"Cheers!"}
    ],
    phrases:[
      {ko:"삼겹살 2인분 주세요.", ipa:"sam-gyeop-sal i-in-bun ju-se-yo", en:"Pork belly for 2 people, please."},
      {ko:"여기 인기 메뉴가 뭐예요?", ipa:"yeo-gi in-gi me-nyu-ga mwo-ye-yo", en:"What's the popular dish here?"},
      {ko:"소주 한 병 주세요.", ipa:"so-ju han byeong ju-se-yo", en:"One bottle of soju please."},
      {ko:"건배! 원샷!", ipa:"geon-bae! won-syat", en:"Cheers! Bottoms up!"},
      {ko:"이거 이름이 뭐예요?", ipa:"i-geo i-reum-i mwo-ye-yo", en:"What is this called?"},
      {ko:"너무 매워요!", ipa:"neo-mu mae-wo-yo", en:"This is too spicy!"},
      {ko:"맛있어요! 한 번 더 주세요!", ipa:"mas-it-eo-yo! han beon deo ju-se-yo", en:"Delicious! One more please!"},
      {ko:"치맥 최고야!", ipa:"chi-maek choe-go-ya", en:"Chimaek is the best! (fried chicken + beer)"}
    ],
    grammar:"In Korean BBQ culture, the grill is at your table and often the server grills the meat for you. You don't tip in Korea — it's actually considered rude. Instead, say '잘 먹겠습니다' before and '잘 먹었습니다' after — that's your gratitude.",
    practice:["Learn the names of 3 Korean dishes you want to try.", "Practice '잘 먹겠습니다' and '잘 먹었습니다' — these impress locals every time."]
  },
  { day:21, title:"At the Convenience Store", titleNative:"편의점에서", focus:"편의점 (pyeonuijeom) — Korea's 24/7 lifeline.",
    vocab:[
      {ko:"편의점", ipa:"pyeon-ui-jeom", en:"Convenience store (CU, GS25, 7-Eleven)"},
      {ko:"계산대", ipa:"gye-san-dae", en:"Checkout counter"},
      {ko:"봉투", ipa:"bong-tu", en:"Bag"},
      {ko:"영수증", ipa:"yeong-su-jeung", en:"Receipt"},
      {ko:"전자레인지", ipa:"jeon-ja-re-in-ji", en:"Microwave"},
      {ko:"뜨겁게 해 주세요", ipa:"tteu-geop-ge hae ju-se-yo", en:"Please heat it up"},
      {ko:"삼각김밥", ipa:"sam-gak-gim-bap", en:"Triangle kimbap (onigiri)"},
      {ko:"컵라면", ipa:"keop-la-myeon", en:"Cup noodles"},
      {ko:"캐셔", ipa:"kae-syeo", en:"Cashier"},
      {ko:"포인트 카드", ipa:"po-in-teu ka-deu", en:"Points card"}
    ],
    phrases:[
      {ko:"이거 전자레인지에 돌려 주세요.", ipa:"i-geo jeon-ja-re-in-ji-e dol-lyeo ju-se-yo", en:"Please microwave this for me."},
      {ko:"봉투 필요해요?", ipa:"bong-tu pil-yo-hae-yo", en:"Do you need a bag?"},
      {ko:"아니요, 괜찮아요.", ipa:"a-ni-yo, gwaen-chan-a-yo", en:"No, it's fine."},
      {ko:"포인트 카드 있어요?", ipa:"po-in-teu ka-deu it-eo-yo", en:"Do you have a points card?"},
      {ko:"같이 계산해 주세요.", ipa:"gat-i gye-san-hae ju-se-yo", en:"Ring it all up together please."},
      {ko:"삼각김밥 어디 있어요?", ipa:"sam-gak-gim-bap eo-di it-eo-yo", en:"Where are the triangle kimbap?"},
      {ko:"컵라면에 뜨거운 물 어디예요?", ipa:"keop-la-myeon-e tteu-geo-un mul eo-di-ye-yo", en:"Where is the hot water for cup noodles?"},
      {ko:"이거 맛있어요?", ipa:"i-geo mas-it-eo-yo", en:"Is this good?"}
    ],
    grammar:"Korean 편의점 is on another level — you can eat full meals (heated at the counter), buy concert tickets, pay bills, send packages, and print documents. They're open 24/7. The staff will microwave your food if you ask. Culture note: you eat AT the store on bar stools, not just take it away.",
    practice:["Next convenience store trip, try to do the whole transaction in Korean.", "삼각김밥 is cheap, everywhere, and delicious — learn to ask for it."]
  },
  { day:22, title:"Nightlife & Entertainment", titleNative:"밤문화와 엔터테인먼트", focus:"Seoul after dark is world class.",
    vocab:[
      {ko:"클럽", ipa:"keul-leob", en:"Club"},
      {ko:"바", ipa:"ba", en:"Bar"},
      {ko:"노래방", ipa:"no-rae-bang", en:"Karaoke room"},
      {ko:"PC방", ipa:"pi-si-bang", en:"PC café / gaming room"},
      {ko:"찜질방", ipa:"jjim-jil-bang", en:"Korean spa / heated sauna floor"},
      {ko:"영화관", ipa:"yeong-hwa-gwan", en:"Movie theater"},
      {ko:"재미있어요", ipa:"jae-mi-it-eo-yo", en:"It's fun"},
      {ko:"신나요", ipa:"sin-na-yo", en:"It's exciting"},
      {ko:"다음에 또 와요", ipa:"da-eum-e tto wa-yo", en:"Come again next time"},
      {ko:"오늘 너무 재미있었어요", ipa:"o-neul neo-mu jae-mi-it-eot-eo-yo", en:"Today was so much fun"}
    ],
    phrases:[
      {ko:"노래방 같이 가요!", ipa:"no-rae-bang gat-i ga-yo", en:"Let's go to norebang together!"},
      {ko:"이 노래 알아요?", ipa:"i no-rae al-a-yo", en:"Do you know this song?"},
      {ko:"한 곡 더 해요!", ipa:"han gok deo hae-yo", en:"One more song!"},
      {ko:"찜질방 가 봤어요?", ipa:"jjim-jil-bang ga bwat-eo-yo", en:"Have you been to a jjimjilbang?"},
      {ko:"홍대 vs 이태원 어디가 좋아요?", ipa:"hong-dae beo-seu i-tae-won eo-di-ga jo-a-yo", en:"Hongdae vs Itaewon — which do you like?"},
      {ko:"오늘 너무 재미있었어요!", ipa:"o-neul neo-mu jae-mi-it-eot-eo-yo", en:"Tonight was so much fun!"},
      {ko:"또 만나요!", ipa:"tto man-na-yo", en:"Let's meet again!"},
      {ko:"카톡 아이디가 뭐예요?", ipa:"ka-tok a-i-di-ga mwo-ye-yo", en:"What's your KakaoTalk ID?"}
    ],
    grammar:"KakaoTalk (카카오톡, 카톡) is Korea's dominant messaging app — like WhatsApp for Koreans. Everyone uses it. Asking for someone's KakaoTalk ID is the Korean equivalent of asking for a number.",
    practice:["Save '카톡 아이디가 뭐예요?' — you'll make friends in Korea.", "노래방 is non-negotiable — at least try it once."]
  },
  { day:23, title:"Nature & Outdoors", titleNative:"자연과 야외", focus:"Korea's national parks and scenic spots.",
    vocab:[
      {ko:"산", ipa:"san", en:"Mountain"},
      {ko:"바다", ipa:"ba-da", en:"Sea / Ocean"},
      {ko:"강", ipa:"gang", en:"River"},
      {ko:"공원", ipa:"gong-won", en:"Park"},
      {ko:"등산", ipa:"deung-san", en:"Hiking"},
      {ko:"해변", ipa:"hae-byeon", en:"Beach"},
      {ko:"섬", ipa:"seom", en:"Island"},
      {ko:"폭포", ipa:"pok-po", en:"Waterfall"},
      {ko:"경치가 좋아요", ipa:"gyeong-chi-ga jo-a-yo", en:"The scenery is beautiful"},
      {ko:"사진 찍어요", ipa:"sa-jin jjig-eo-yo", en:"Let's take a photo"}
    ],
    phrases:[
      {ko:"등산 좋아해요?", ipa:"deung-san jo-a-hae-yo", en:"Do you like hiking?"},
      {ko:"이 산이 얼마나 높아요?", ipa:"i san-i eol-ma-na no-pa-yo", en:"How tall is this mountain?"},
      {ko:"경치가 정말 아름다워요!", ipa:"gyeong-chi-ga jeong-mal a-reum-da-wo-yo", en:"The scenery is truly beautiful!"},
      {ko:"제주도에 가 봤어요?", ipa:"je-ju-do-e ga bwat-eo-yo", en:"Have you been to Jeju Island?"},
      {ko:"한라산에 올라가고 싶어요.", ipa:"hal-la-san-e ol-la-ga-go sip-eo-yo", en:"I want to climb Hallasan."},
      {ko:"여기서 수영해도 돼요?", ipa:"yeo-gi-seo su-yeong-hae-do dwae-yo", en:"Can I swim here?"},
      {ko:"해 지는 거 봐요!", ipa:"hae ji-neun geo bwa-yo", en:"Let's watch the sunset!"},
      {ko:"여기 너무 예뻐요!", ipa:"yeo-gi neo-mu ye-ppeo-yo", en:"This place is so beautiful!"}
    ],
    grammar:"Korea is 70% mountains — hiking (등산) is a national pastime. Koreans of all ages hike, often in full gear. Popular mountains: Bukhansan (Seoul), Seoraksan (northeast), Hallasan (Jeju). Trails are well-marked and often have grandmas passing you at speed.",
    practice:["Learn '경치가 정말 아름다워요!' for any scenic moment.", "제주도 (Jeju Island) is Korea's Hawaii — worth knowing the name."]
  },
  { day:24, title:"Work & Daily Life", titleNative:"일과 일상생활", focus:"Everyday adult life in Korean.",
    vocab:[
      {ko:"직장", ipa:"jik-jang", en:"Workplace"},
      {ko:"회의", ipa:"hoe-ui", en:"Meeting"},
      {ko:"이메일", ipa:"i-me-il", en:"Email"},
      {ko:"바빠요", ipa:"ba-ppa-yo", en:"I'm busy"},
      {ko:"야근", ipa:"ya-geun", en:"Overtime / working late"},
      {ko:"월급", ipa:"wol-geup", en:"Monthly salary"},
      {ko:"휴가", ipa:"hyu-ga", en:"Vacation / day off"},
      {ko:"퇴근", ipa:"toe-geun", en:"Getting off work"},
      {ko:"출근", ipa:"chul-geun", en:"Going to work"},
      {ko:"회식", ipa:"hoe-sik", en:"Company dinner / team meal out"}
    ],
    phrases:[
      {ko:"오늘 바빠요? 회의 있어요.", ipa:"o-neul ba-ppa-yo? hoe-ui it-eo-yo", en:"Are you busy today? I have a meeting."},
      {ko:"몇 시에 퇴근해요?", ipa:"myeot si-e toe-geun-hae-yo", en:"What time do you get off work?"},
      {ko:"야근해요, 늦을 것 같아요.", ipa:"ya-geun-hae-yo, neut-eul geot gat-a-yo", en:"I'm working late, might be slow."},
      {ko:"이번 주에 휴가 있어요.", ipa:"i-beon ju-e hyu-ga it-eo-yo", en:"I have a day off this week."},
      {ko:"회식 같이 가요!", ipa:"hoe-sik gat-i ga-yo", en:"Let's go to the work dinner!"},
      {ko:"한국 회사 문화가 어때요?", ipa:"han-guk hoe-sa mun-hwa-ga eo-ttae-yo", en:"How is Korean company culture?"},
      {ko:"힘내요! 화이팅!", ipa:"him-nae-yo! hwa-i-ting", en:"Hang in there! Fighting!"},
      {ko:"수고했어요.", ipa:"su-go-haet-eo-yo", en:"Good work / You've worked hard."}
    ],
    grammar:"수고했어요 (sugohaesoyo) is said at the end of any shared effort — finishing a task, leaving work, wrapping up a meal. It means 'you worked hard' and is a deeply Korean way of acknowledging effort. Say it whenever you wrap up anything.",
    practice:["수고했어요 — practice saying this with warmth at the end of today.", "야근 (overtime) is a major concept in Korean work culture — worth knowing."]
  },
  { day:25, title:"Learning & Studying Korean", titleNative:"한국어 공부", focus:"Meta-phrases for your language learning journey.",
    vocab:[
      {ko:"한국어", ipa:"han-gug-eo", en:"The Korean language"},
      {ko:"공부하다", ipa:"gong-bu-ha-da", en:"To study"},
      {ko:"연습하다", ipa:"yeon-seup-ha-da", en:"To practice"},
      {ko:"어렵다", ipa:"eo-ryeop-da", en:"Difficult"},
      {ko:"쉬워요", ipa:"swi-wo-yo", en:"It's easy"},
      {ko:"한글", ipa:"han-geul", en:"The Korean alphabet"},
      {ko:"발음", ipa:"bal-eum", en:"Pronunciation"},
      {ko:"단어", ipa:"dan-eo", en:"Vocabulary word"},
      {ko:"문법", ipa:"mun-beop", en:"Grammar"},
      {ko:"언어 교환", ipa:"eon-eo gyo-hwan", en:"Language exchange"}
    ],
    phrases:[
      {ko:"한국어 공부 중이에요.", ipa:"han-gug-eo gong-bu jung-i-e-yo", en:"I am studying Korean."},
      {ko:"한국어가 어렵지만 재미있어요.", ipa:"han-gug-eo-ga eo-ryeop-ji-man jae-mi-it-eo-yo", en:"Korean is hard but interesting."},
      {ko:"한글 읽을 수 있어요.", ipa:"han-geul ilg-eul su it-eo-yo", en:"I can read Hangul."},
      {ko:"언어 교환 할 사람 있어요?", ipa:"eon-eo gyo-hwan hal sa-ram it-eo-yo", en:"Is there someone to do language exchange?"},
      {ko:"이 단어가 무슨 뜻이에요?", ipa:"i dan-eo-ga mu-seun tteus-i-e-yo", en:"What does this word mean?"},
      {ko:"맞아요? 제가 맞게 말했어요?", ipa:"maj-a-yo? je-ga mat-ge mal-haet-eo-yo", en:"Is that right? Did I say it correctly?"},
      {ko:"한국어로 뭐라고 해요?", ipa:"han-gug-eo-ro mwo-ra-go hae-yo", en:"How do you say that in Korean?"},
      {ko:"가르쳐 주세요.", ipa:"ga-reu-chyeo ju-se-yo", en:"Please teach me."}
    ],
    grammar:"Hangul (한글) was invented in 1443 by King Sejong and is considered one of the most scientific writing systems ever created. It's fully phonetic and can be learned in a few hours. Most Korean words you've seen in this course are written in Hangul.",
    practice:["Learn to read Hangul — seriously, 2 hours and you're reading menus.", "Tell a Korean '한국어 공부 중이에요' — they will be delighted."]
  },
  { day:26, title:"Korean Temple Stays & Culture", titleNative:"문화 체험", focus:"Deeper experiences beyond Seoul.",
    vocab:[
      {ko:"절 / 사찰", ipa:"jeol / sa-chal", en:"Buddhist temple"},
      {ko:"궁", ipa:"gung", en:"Palace (경복궁, 창덕궁...)"},
      {ko:"한복", ipa:"han-bok", en:"Traditional Korean clothing"},
      {ko:"입어 봐도 돼요?", ipa:"ib-eo bwa-do dwae-yo", en:"May I try it on?"},
      {ko:"전통", ipa:"jeon-tong", en:"Traditional"},
      {ko:"현대", ipa:"hyeon-dae", en:"Modern / contemporary"},
      {ko:"문화재", ipa:"mun-hwa-jae", en:"Cultural heritage site"},
      {ko:"입장료", ipa:"ip-jang-nyo", en:"Admission fee"},
      {ko:"관람 시간", ipa:"gwal-lam si-gan", en:"Viewing hours"},
      {ko:"해설사", ipa:"hae-seol-sa", en:"Tour guide"}
    ],
    phrases:[
      {ko:"경복궁 입장료가 얼마예요?", ipa:"gyeong-bok-gung ip-jang-nyo-ga eol-ma-ye-yo", en:"What is the admission to Gyeongbokgung?"},
      {ko:"한복 입어 보고 싶어요!", ipa:"han-bok ib-eo bo-go sip-eo-yo", en:"I want to try wearing hanbok!"},
      {ko:"영어 해설 있어요?", ipa:"yeong-eo hae-seol it-eo-yo", en:"Is there an English explanation / guide?"},
      {ko:"오늘 몇 시까지 해요?", ipa:"o-neul myeot si-kka-ji hae-yo", en:"Until what time is it open today?"},
      {ko:"이게 얼마나 오래됐어요?", ipa:"i-ge eol-ma-na o-rae-dwaet-eo-yo", en:"How old is this?"},
      {ko:"여기서 사진 찍어도 돼요?", ipa:"yeo-gi-seo sa-jin jjig-eo-do dwae-yo", en:"May I take photos here?"},
      {ko:"진짜 아름다워요.", ipa:"jin-jja a-reum-da-wo-yo", en:"Truly beautiful."},
      {ko:"한국 역사가 정말 흥미로워요.", ipa:"han-guk yeok-sa-ga jeong-mal heung-mi-ro-wo-yo", en:"Korean history is really fascinating."}
    ],
    grammar:"경복궁 is the main royal palace in Seoul — massive, free with K-ETA, and you can rent hanbok to wear inside. Wearing hanbok gets you FREE admission to most royal palaces. Worth it for the photos and experience.",
    practice:["Learn '한복 입어 보고 싶어요!' — rentals are everywhere near the palaces.", "경복궁 is a must-do; knowing the name helps with navigation."]
  },
  { day:27, title:"Celebrations & Special Occasions", titleNative:"축하와 특별한 날", focus:"Join the celebration.",
    vocab:[
      {ko:"생일 축하해요!", ipa:"saeng-il chuk-ha-hae-yo", en:"Happy birthday!"},
      {ko:"새해 복 많이 받으세요!", ipa:"sae-hae bok man-i bat-eu-se-yo", en:"Happy New Year! (receive much luck)"},
      {ko:"결혼 축하해요!", ipa:"gyeol-hon chuk-ha-hae-yo", en:"Congratulations on your wedding!"},
      {ko:"축하해요!", ipa:"chuk-ha-hae-yo", en:"Congratulations!"},
      {ko:"건배!", ipa:"geon-bae", en:"Cheers!"},
      {ko:"추석", ipa:"chu-seok", en:"Korean Thanksgiving (harvest festival)"},
      {ko:"설날", ipa:"seol-lal", en:"Korean Lunar New Year"},
      {ko:"선물", ipa:"seon-mul", en:"Gift"},
      {ko:"파티", ipa:"pa-ti", en:"Party"},
      {ko:"즐거운 시간 보내요", ipa:"jeul-geo-un si-gan bo-nae-yo", en:"Have a great time"}
    ],
    phrases:[
      {ko:"생일 축하해요! 선물이에요.", ipa:"saeng-il chuk-ha-hae-yo! seon-mul-i-e-yo", en:"Happy birthday! This is a gift."},
      {ko:"건배! 모두의 건강을 위해!", ipa:"geon-bae! mo-du-ui geon-gang-eul wi-hae", en:"Cheers! To everyone's health!"},
      {ko:"오늘 생일이에요?", ipa:"o-neul saeng-il-i-e-yo", en:"Is today your birthday?"},
      {ko:"한국에서 추석 보내 봤어요?", ipa:"han-gug-e-seo chu-seok bo-nae bwat-eo-yo", en:"Have you spent Chuseok in Korea?"},
      {ko:"설날에 뭐 해요?", ipa:"seol-lal-e mwo hae-yo", en:"What do you do on Seollal?"},
      {ko:"정말 즐거운 시간이었어요!", ipa:"jeong-mal jeul-geo-un si-gan-i-eot-eo-yo", en:"It was a really great time!"},
      {ko:"또 봐요, 행복하세요!", ipa:"tto bwa-yo, haeng-bok-ha-se-yo", en:"See you again, be happy!"},
      {ko:"좋은 하루 되세요!", ipa:"jo-eun ha-ru doe-se-yo", en:"Have a good day!"}
    ],
    grammar:"During Chuseok and Seollal, Korea goes into a massive family migration — expect highways jammed and some shops closed. These are the two biggest holidays. 세배 (sebae) is a deep bow done to elders on Seollal; children receive 세뱃돈 (cash in envelopes) in return.",
    practice:["'좋은 하루 되세요!' is a warm send-off — use it anytime.", "건배 is just the start — learn 원샷 (bottoms up) for when it escalates."]
  },
  { day:28, title:"Compliments & Making Friends", titleNative:"칭찬과 친해지기", focus:"How to win Koreans over.",
    vocab:[
      {ko:"한국어 잘 하세요!", ipa:"han-gug-eo jal ha-se-yo", en:"Your Korean is great!"},
      {ko:"잘생겼어요", ipa:"jal-saeng-gyeot-eo-yo", en:"You are handsome"},
      {ko:"예뻐요", ipa:"ye-ppeo-yo", en:"You are pretty / beautiful"},
      {ko:"친절해요", ipa:"chin-jeol-hae-yo", en:"You are kind"},
      {ko:"재미있는 사람이에요", ipa:"jae-mi-it-neun sa-ram-i-e-yo", en:"You are a fun person"},
      {ko:"진짜요?", ipa:"jin-jja-yo", en:"Really? / Seriously?"},
      {ko:"아니에요~", ipa:"a-ni-e-yo~", en:"No no~ (humble response to compliment)"},
      {ko:"친구 해요", ipa:"chin-gu hae-yo", en:"Let's be friends"},
      {ko:"또 만나요", ipa:"tto man-na-yo", en:"Let's meet again"},
      {ko:"연락해요", ipa:"yeol-lak-hae-yo", en:"Let's keep in touch"}
    ],
    phrases:[
      {ko:"한국어 진짜 잘 하세요!", ipa:"han-gug-eo jin-jja jal ha-se-yo", en:"Your Korean is seriously good!"},
      {ko:"아니에요~ 아직 많이 부족해요.", ipa:"a-ni-e-yo~ a-jik man-i bu-jok-hae-yo", en:"No no~ I still have a long way to go."},
      {ko:"친절하게 도와주셔서 감사해요.", ipa:"chin-jeol-ha-ge do-wa-ju-syeo-seo gam-sa-hae-yo", en:"Thank you for helping me so kindly."},
      {ko:"한국 사람들이 정말 친절해요.", ipa:"han-guk sa-ram-deul-i jeong-mal chin-jeol-hae-yo", en:"Korean people are really kind."},
      {ko:"친구 해요! 카톡 아이디 주세요.", ipa:"chin-gu hae-yo! ka-tok a-i-di ju-se-yo", en:"Let's be friends! Give me your KakaoTalk ID."},
      {ko:"오늘 덕분에 정말 좋았어요.", ipa:"o-neul deok-bun-e jeong-mal jo-at-eo-yo", en:"Today was really great thanks to you."},
      {ko:"또 봐요! 연락해요!", ipa:"tto bwa-yo! yeol-lak-hae-yo", en:"See you! Let's stay in touch!"},
      {ko:"한국이 너무 좋아요. 꼭 다시 올게요.", ipa:"han-gug-i neo-mu jo-a-yo. kkok da-si ol-ge-yo", en:"I love Korea so much. I'll definitely come back."}
    ],
    grammar:"When Koreans compliment your Korean, the humble response is '아니에요~ 아직 멀었어요' (No no, I still have far to go). Accepting a compliment directly can seem arrogant. The tilde in '아니에요~' represents a lilting, modest tone.",
    practice:["'한국이 너무 좋아요. 꼭 다시 올게요.' — mean it, say it.", "Practice the humble compliment response '아니에요~' with a slight smile."]
  },
  { day:29, title:"Advanced Phrases & Korean Slang", titleNative:"고급 표현과 슬랭", focus:"Sound like you've been here a while.",
    vocab:[
      {ko:"대박", ipa:"dae-bak", en:"Jackpot / Awesome / No way"},
      {ko:"헐", ipa:"heol", en:"Oh my / Whoa (shock/disbelief)"},
      {ko:"완전", ipa:"wan-jeon", en:"Totally / Completely (intensifier)"},
      {ko:"진짜", ipa:"jin-jja", en:"Really / For real"},
      {ko:"아 진짜요?", ipa:"a jin-jja-yo", en:"Oh really? (surprised reaction)"},
      {ko:"대충", ipa:"dae-chung", en:"Roughly / Casually / Kind of"},
      {ko:"어쩔 수 없어요", ipa:"eo-jjeol su eop-eo-yo", en:"There's nothing I can do / It can't be helped"},
      {ko:"눈치", ipa:"nun-chi", en:"Social awareness / reading the room"},
      {ko:"빨리빨리", ipa:"ppal-li ppal-li", en:"Hurry hurry / Fast fast (Korean culture concept)"},
      {ko:"정 (情)", ipa:"jeong", en:"Deep affection/attachment that develops over time"}
    ],
    phrases:[
      {ko:"완전 대박이에요!", ipa:"wan-jeon dae-bak-i-e-yo", en:"That is totally awesome!"},
      {ko:"헐, 진짜요?", ipa:"heol, jin-jja-yo", en:"Oh my, really?"},
      {ko:"어쩔 수 없죠, 뭐.", ipa:"eo-jjeol su eop-jyo, mwo", en:"Nothing to be done about it, I guess."},
      {ko:"눈치 있는 사람이에요.", ipa:"nun-chi it-neun sa-ram-i-e-yo", en:"You are a socially aware person."},
      {ko:"빨리빨리 가요!", ipa:"ppal-li ppal-li ga-yo", en:"Let's go, hurry hurry!"},
      {ko:"진짜 한국 같아요!", ipa:"jin-jja han-guk gat-a-yo", en:"This is so typically Korean!"},
      {ko:"정이 들었어요.", ipa:"jeong-i deul-eot-eo-yo", en:"I've grown attached / I've developed jeong for this."},
      {ko:"이제 한국 사람 다 됐네요!", ipa:"i-je han-guk sa-ram da dwaet-ne-yo", en:"You've basically become Korean now!"}
    ],
    grammar:"눈치 (nunchi) is a Korean concept: the subtle art of reading the room and responding accordingly. High nunchi = socially intelligent. 정 (jeong) is the deep bond that forms between people over shared experiences — it's why Koreans feel intense loyalty to places, teams, and people they've spent time with.",
    practice:["Drop 대박 naturally in a reaction today.", "Reflect on 정 — you might already feel it for Korean food."]
  },
  { day:30, title:"Review & Real Conversations", titleNative:"복습과 실전 대화", focus:"30 days in. Now put it all together.",
    vocab:[
      {ko:"저는 한국어를 조금 해요", ipa:"jeo-neun han-gug-eo-reul jo-geum hae-yo", en:"I speak a little Korean"},
      {ko:"한국에 처음 왔어요", ipa:"han-gug-e cheo-eum wat-eo-yo", en:"It's my first time in Korea"},
      {ko:"한국이 너무 좋아요", ipa:"han-gug-i neo-mu jo-a-yo", en:"I love Korea so much"},
      {ko:"다시 꼭 올게요", ipa:"da-si kkok ol-ge-yo", en:"I will definitely come back"},
      {ko:"감사합니다, 덕분이에요", ipa:"gam-sa-ham-ni-da, deok-bun-i-e-yo", en:"Thank you, it's thanks to you"},
      {ko:"한국어 더 열심히 공부할게요", ipa:"han-gug-eo deo yeol-sim-hi gong-bu-hal-ge-yo", en:"I'll study Korean harder"},
      {ko:"잘 부탁드립니다", ipa:"jal bu-tak-deu-rim-ni-da", en:"I look forward to working with you / Please take care of me"},
      {ko:"수고하셨습니다", ipa:"su-go-ha-syeot-seum-ni-da", en:"Thank you for your hard work (formal)"},
      {ko:"좋은 여행 되세요", ipa:"jo-eun yeo-haeng doe-se-yo", en:"Have a great trip"},
      {ko:"꼭 다시 봐요", ipa:"kkok da-si bwa-yo", en:"Let's definitely meet again"}
    ],
    phrases:[
      {ko:"30일 동안 한국어를 공부했어요!", ipa:"sam-sip-il dong-an han-gug-eo-reul gong-bu-haet-eo-yo", en:"I've studied Korean for 30 days!"},
      {ko:"조금씩 늘고 있어요.", ipa:"jo-geum-ssik neul-go it-eo-yo", en:"It's improving little by little."},
      {ko:"한국어가 어렵지만 포기하지 않을게요.", ipa:"han-gug-eo-ga eo-ryeop-ji-man po-gi-ha-ji an-eul-ge-yo", en:"Korean is hard but I won't give up."},
      {ko:"한국 사람들이 너무 친절해서 감사해요.", ipa:"han-guk sa-ram-deul-i neo-mu chin-jeol-hae-seo gam-sa-hae-yo", en:"Thank you because Korean people are so kind."},
      {ko:"다음엔 더 잘 할 수 있어요. 화이팅!", ipa:"da-eum-en deo jal hal su it-eo-yo. hwa-i-ting", en:"Next time I can do better. Fighting!"},
      {ko:"한국어 공부가 재미있어요!", ipa:"han-gug-eo gong-bu-ga jae-mi-it-eo-yo", en:"Studying Korean is fun!"},
      {ko:"꼭 다시 한국에 올게요!", ipa:"kkok da-si han-gug-e ol-ge-yo", en:"I will definitely come back to Korea!"},
      {ko:"감사합니다, 수고하셨습니다!", ipa:"gam-sa-ham-ni-da, su-go-ha-syeot-seum-ni-da", en:"Thank you, and thank you for your hard work!"}
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
