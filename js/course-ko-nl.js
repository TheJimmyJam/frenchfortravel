```js
// Korean → Dutch Native Lesson Plan
// 한국어 als instructietaal, Nederlands als doeltaal
// vocab: { nl: "Dutch word", ko: "한국어 translation", ipa: "Dutch phonetics for Korean speakers" }

var COURSE_KO_NL = [
  {
    day: 1,
    title: "인사와 공손한 표현",
    titleNative: "Begroetingen en beleefdheid",
    focus: "암스테르담에서는 영어가 잘 통하지만, 먼저 네덜란드어로 인사하면 훨씬 따뜻한 첫인상을 줄 수 있습니다. 짧은 인사말만 익혀도 카페, 호텔, 상점에서 여행자답지 않게 자연스럽게 시작할 수 있습니다.",
    vocab: [
      { nl: "hallo", ko: "안녕하세요", ipa: "HA-lo" },
      { nl: "goedemorgen", ko: "좋은 아침", ipa: "후-더-MOR-헌" },
      { nl: "goedemiddag", ko: "좋은 오후", ipa: "후-더-mi-DACH" },
      { nl: "goedenavond", ko: "좋은 저녁", ipa: "후-던-AH-font" },
      { nl: "dag", ko: "안녕/좋은 하루", ipa: "다흐" },
      { nl: "alsjeblieft", ko: "부탁해요/여기요", ipa: "ALS-yuh-bleeft" },
      { nl: "alstublieft", ko: "부탁드립니다/여기 있습니다", ipa: "ALS-tu-bleeft" },
      { nl: "dank je", ko: "고마워", ipa: "당크 여" },
      { nl: "dank u", ko: "감사합니다", ipa: "당크 위" },
      { nl: "sorry", ko: "죄송해요", ipa: "SO-ri" }
    ],
    phrases: [
      { nl: "Hallo, goedemorgen.", ko: "안녕하세요, 좋은 아침입니다.", ipa: "HA-lo, 후-더-MOR-헌" },
      { nl: "Dag, hoe gaat het?", ko: "안녕하세요, 어떻게 지내세요?", ipa: "다흐, 후 하트 헛" },
      { nl: "Dank u wel.", ko: "정말 감사합니다.", ipa: "당크 위 벨" },
      { nl: "Alsjeblieft, één koffie.", ko: "커피 한 잔 주세요.", ipa: "ALS-yuh-bleeft, 에인 KO-fi" },
      { nl: "Sorry, ik spreek weinig Nederlands.", ko: "죄송해요, 저는 네덜란드어를 조금만 해요.", ipa: "SO-ri, 익 스프레이크 VAY-n흐 NAY-der-lants" },
      { nl: "Tot ziens!", ko: "다음에 봐요!/안녕히 가세요.", ipa: "톳 zeens" }
    ],
    grammar: "네덜란드어에는 친근한 말투의 je/jij와 공손한 u가 있습니다. 여행 중에는 모르는 직원이나 나이 많은 사람에게 u를 쓰면 안전하고 예의 바릅니다. 다만 네덜란드 사람들은 비교적 격식이 적어서, 상대가 영어로 바꾸더라도 짧게 “Ik oefen Nederlands”라고 말하면 계속 네덜란드어로 도와주는 경우가 많습니다.",
    practice: [
      "호텔 로비에 들어간다고 상상하고 네덜란드어로 인사한 뒤 감사 표현을 말해 보세요.",
      "dank je와 dank u를 각각 어떤 상황에서 쓸지 한국어로 설명해 보세요."
    ]
  },
  {
    day: 2,
    title: "예, 아니요와 기본 반응",
    titleNative: "Ja, nee en basisreacties",
    focus: "여행 중에는 긴 문장보다 짧은 반응을 빠르게 알아듣는 것이 더 중요할 때가 많습니다. 주문 확인, 길 안내, 계산대에서 자주 듣고 말하는 기본 반응을 익힙니다.",
    vocab: [
      { nl: "ja", ko: "네", ipa: "야" },
      { nl: "nee", ko: "아니요", ipa: "네이" },
      { nl: "oké", ko: "오케이", ipa: "오-KAY" },
      { nl: "goed", ko: "좋은/괜찮은", ipa: "후트" },
      { nl: "niet", ko: "아니다/않다", ipa: "니트" },
      { nl: "misschien", ko: "아마도", ipa: "mis-SHEEN" },
      { nl: "natuurlijk", ko: "물론", ipa: "na-TUUR-lək" },
      { nl: "zeker", ko: "확실히/물론", ipa: "ZAY-ker" },
      { nl: "prima", ko: "좋아요/괜찮아요", ipa: "PREE-ma" },
      { nl: "geen probleem", ko: "문제없어요", ipa: "헤인 pro-BLAYM" }
    ],
    phrases: [
      { nl: "Ja, graag.", ko: "네, 부탁해요.", ipa: "야, 흐라흐" },
      { nl: "Nee, dank u.", ko: "아니요, 괜찮습니다.", ipa: "네이, 당크 위" },
      { nl: "Oké, prima.", ko: "네, 좋아요.", ipa: "오-KAY, PREE-ma" },
      { nl: "Dat is goed.", ko: "그거 좋습니다.", ipa: "닷 이스 후트" },
      { nl: "Geen probleem.", ko: "문제없어요.", ipa: "헤인 pro-BLAYM" },
      { nl: "Misschien later.", ko: "아마 나중에요.", ipa: "mis-SHEEN LAH-ter" }
    ],
    grammar: "네덜란드어의 nee는 영어 no보다 조금 더 길게 ‘네이’처럼 들립니다. 부정은 보통 niet를 문장 뒤쪽에 붙여 만듭니다. 예를 들어 “Ik spreek Nederlands”는 “저는 네덜란드어를 합니다”, “Ik spreek niet veel Nederlands”는 “저는 네덜란드어를 많이 하지는 못합니다”가 됩니다.",
    practice: [
      "카페 직원이 물어본다고 생각하고 ja, graag / nee, dank u를 번갈아 말해 보세요.",
      "niet를 넣어 ‘저는 네덜란드어를 많이 하지 못합니다’를 말해 보세요."
    ]
  },
  {
    day: 3,
    title: "자기소개하기",
    titleNative: "Jezelf voorstellen",
    focus: "현지 투어나 작은 바, 호스텔에서 짧게 자기소개를 할 수 있으면 대화가 열립니다. 이름, 출신, 언어 능력을 간단히 말하는 법을 배웁니다.",
    vocab: [
      { nl: "ik", ko: "나/저", ipa: "익" },
      { nl: "jij", ko: "너", ipa: "예이" },
      { nl: "u", ko: "당신/선생님", ipa: "위" },
      { nl: "ben", ko: "~입니다", ipa: "벤" },
      { nl: "heet", ko: "이름이 ~이다", ipa: "헤이트" },
      { nl: "naam", ko: "이름", ipa: "남" },
      { nl: "kom", ko: "오다", ipa: "콤" },
      { nl: "uit", ko: "~에서", ipa: "아윗" },
      { nl: "Korea", ko: "한국", ipa: "ko-RAY-a" },
      { nl: "Nederlands", ko: "네덜란드어", ipa: "NAY-der-lants" }
    ],
    phrases: [
      { nl: "Ik heet Minji.", ko: "제 이름은 민지입니다.", ipa: "익 헤이트 MIN-ji" },
      { nl: "Mijn naam is Jisoo.", ko: "제 이름은 지수입니다.", ipa: "마인 남 이스 JI-soo" },
      { nl: "Ik kom uit Korea.", ko: "저는 한국에서 왔습니다.", ipa: "익 콤 아윗 ko-RAY-a" },
      { nl: "Ik ben toerist.", ko: "저는 관광객입니다.", ipa: "익 벤 too-RIST" },
      { nl: "Ik leer Nederlands.", ko: "저는 네덜란드어를 배우고 있어요.", ipa: "익 레이르 NAY-der-lants" },
      { nl: "Spreekt u Engels?", ko: "영어 하세요?", ipa: "스프레이크트 위 ENG-els" },
      { nl: "Ik spreek Koreaans.", ko: "저는 한국어를 합니다.", ipa: "익 스프레이크 ko-RAY-ans" }
    ],
    grammar: "네덜란드어에서 “저는 ~입니다”는 Ik ben입니다. 이름을 말할 때는 Ik heet + 이름 또는 Mijn naam is + 이름을 씁니다. 한국어처럼 조사를 붙이지 않고 단어 순서로 의미를 만들기 때문에, 처음에는 문장 틀을 통째로 외우는 것이 가장 빠릅니다.",
    practice: [
      "자신의 이름과 출신을 넣어 Ik heet…, Ik kom uit Korea를 말해 보세요.",
      "상대에게 영어를 하는지 공손하게 묻는 문장을 세 번 말해 보세요."
    ]
  },
  {
    day: 4,
    title: "숫자 0부터 20까지",
    titleNative: "Getallen van 0 tot 20",
    focus: "네덜란드에서 숫자는 주문, 가격, 방 번호, 트램 승강장 등 거의 매 순간 필요합니다. 0부터 20까지는 암기해 두면 여행 피로가 크게 줄어듭니다.",
    vocab: [
      { nl: "nul", ko: "0", ipa: "뉠" },
      { nl: "één", ko: "1", ipa: "에인" },
      { nl: "twee", ko: "2", ipa: "트웨이" },
      { nl: "drie", ko: "3", ipa: "드리" },
      { nl: "vier", ko: "4", ipa: "피르" },
      { nl: "vijf", ko: "5", ipa: "파이프" },
      { nl: "zes", ko: "6", ipa: "제스" },
      { nl: "zeven", ko: "7", ipa: "ZAY-번" },
      { nl: "acht", ko: "8", ipa: "아흐트" },
      { nl: "negen", ko: "9", ipa: "NAY-헌" }
    ],
    phrases: [
      { nl: "Ik wil één koffie.", ko: "커피 한 잔 원해요.", ipa: "익 빌 에인 KO-fi" },
      { nl: "Twee tickets, alstublieft.", ko: "표 두 장 주세요.", ipa: "트웨이 TI-kets, ALS-tu-bleeft" },
      { nl: "Kamer drie.", ko: "3번 방입니다.", ipa: "KAH-mer 드리" },
      { nl: "Tram vijf.", ko: "5번 트램입니다.", ipa: "트람 파이프" },
      { nl: "Acht euro.", ko: "8유로입니다.", ipa: "아흐트 OY-ro" },
      { nl: "Negen minuten.", ko: "9분입니다.", ipa: "NAY-헌 mi-NU-ten" }
    ],
    grammar: "네덜란드어 숫자에는 한국어처럼 고유어/한자어 구분이 없습니다. één은 강세가 있을 때 길게 ‘에인’처럼 말하고, twee의 w는 약하게 이어집니다. g/ch가 들어간 acht는 목을 긁는 듯한 ‘흐’ 소리가 핵심입니다.",
    practice: [
      "0부터 9까지 손가락을 보며 네덜란드어로 세어 보세요.",
      "카페에서 커피 1잔, 티켓 2장을 주문하는 문장을 만들어 보세요."
    ]
  },
  {
    day: 5,
    title: "숫자 20부터 100까지",
    titleNative: "Getallen van 20 tot 100",
    focus: "가격과 주소를 알아듣기 위해서는 20 이상 숫자가 꼭 필요합니다. 네덜란드어는 21을 ‘하나와 스물’처럼 말하므로 한국어 화자에게는 순서가 낯설 수 있습니다.",
    vocab: [
      { nl: "tien", ko: "10", ipa: "틴" },
      { nl: "elf", ko: "11", ipa: "엘프" },
      { nl: "twaalf", ko: "12", ipa: "트왈프" },
      { nl: "dertien", ko: "13", ipa: "DER-틴" },
      { nl: "veertien", ko: "14", ipa: "VEER-틴" },
      { nl: "vijftien", ko: "15", ipa: "VIJF-틴" },
      { nl: "twintig", ko: "20", ipa: "TWIN-t흐" },
      { nl: "dertig", ko: "30", ipa: "DER-t흐" },
      { nl: "vijftig", ko: "50", ipa: "VIJF-t흐" },
      { nl: "honderd", ko: "100", ipa: "HON-dert" }
    ],
    phrases: [
      { nl: "Het kost twintig euro.", ko: "그것은 20유로입니다.", ipa: "헛 코스트 TWIN-t흐 OY-ro" },
      { nl: "Ik ben dertig jaar.", ko: "저는 30살입니다.", ipa: "익 벤 DER-t흐 야르" },
      { nl: "Vijftig procent korting.", ko: "50퍼센트 할인입니다.", ipa: "VIJF-t흐 pro-SENT KOR-ting" },
      { nl: "Nummer eenentwintig.", ko: "21번입니다.", ipa: "NU-mer AY-넌-TWIN-t흐" },
      { nl: "Dat is honderd euro.", ko: "그것은 100유로입니다.", ipa: "닷 이스 HON-dert OY-ro" },
      { nl: "Hoeveel kost dit?", ko: "이거 얼마예요?", ipa: "후-FAYL 코스트 딧" }
    ],
    grammar: "21은 eenentwintig, 즉 ‘하나-그리고-스물’ 구조입니다. 35는 vijfendertig처럼 일의 자리 + en + 십의 자리로 말합니다. 처음에는 계산하지 말고 자주 쓰는 20, 30, 50, 100과 가격 문장을 통째로 익히세요.",
    practice: [
      "21, 35, 50, 100을 네덜란드어로 말해 보세요.",
      "상점에서 ‘이거 얼마예요?’와 ‘20유로입니다’를 역할극으로 연습하세요."
    ]
  },
  {
    day: 6,
    title: "요일, 월, 시간 표현",
    titleNative: "Dagen, maanden en tijdwoorden",
    focus: "박물관 예약, 레스토랑 예약, 열차 시간표를 볼 때 날짜 표현이 필요합니다. 오늘, 내일, 주말 같은 단어만 알아도 일정 관리가 쉬워집니다.",
    vocab: [
      { nl: "vandaag", ko: "오늘", ipa: "fan-DAACH" },
      { nl: "morgen", ko: "내일/아침", ipa: "MOR-헌" },
      { nl: "gisteren", ko: "어제", ipa: "HIS-ter-en" },
      { nl: "week", ko: "주", ipa: "베이크" },
      { nl: "maandag", ko: "월요일", ipa: "MAN-dach" },
      { nl: "vrijdag", ko: "금요일", ipa: "VRAI-dach" },
      { nl: "zaterdag", ko: "토요일", ipa: "ZAH-ter-dach" },
      { nl: "zondag", ko: "일요일", ipa: "ZON-dach" },
      { nl: "maand", ko: "월/달", ipa: "만트" },
      { nl: "tijd", ko: "시간", ipa: "타이트" }
    ],
    phrases: [
      { nl: "Vandaag is maandag.", ko: "오늘은 월요일입니다.", ipa: "fan-DAACH 이스 MAN-dach" },
      { nl: "Morgen ga ik naar Amsterdam.", ko: "내일 저는 암스테르담에 갑니다.", ipa: "MOR-헌 하 익 나르 AM-ster-dam" },
      { nl: "Ik heb tijd.", ko: "저는 시간이 있어요.", ipa: "익 헵 타이트" },
      { nl: "Ik heb geen tijd.", ko: "저는 시간이 없어요.", ipa: "익 헵 헤인 타이트" },
      { nl: "Tot morgen.", ko: "내일 봐요.", ipa: "톳 MOR-헌" },
      { nl: "In het weekend.", ko: "주말에요.", ipa: "인 헛 WEEK-ent" }
    ],
    grammar: "morgen은 문맥에 따라 ‘내일’도 되고 ‘아침’도 됩니다. 네덜란드어 날짜 표현은 보통 전치사 op를 써서 op maandag처럼 말합니다. 여행에서는 완벽한 문법보다 날짜와 시간 단어를 또렷하게 말하는 것이 더 중요합니다.",
    practice: [
      "오늘 요일을 넣어 Vandaag is… 문장을 만들어 보세요.",
      "내일 암스테르담에 간다는 문장을 세 번 말해 보세요."
    ]
  },
  {
    day: 7,
    title: "1주차 복습과 미니 대화",
    titleNative: "Week 1 herhaling en minigesprek",
    focus: "첫 주에는 인사, 반응, 자기소개, 숫자, 날짜를 배웠습니다. 이제 실제 여행 첫 만남처럼 짧은 대화를 이어 붙여 봅니다.",
    vocab: [
      { nl: "herhaling", ko: "복습", ipa: "hayr-HAH-ling" },
      { nl: "gesprek", ko: "대화", ipa: "허-SPREK" },
      { nl: "vraag", ko: "질문", ipa: "프라흐" },
      { nl: "antwoord", ko: "대답", ipa: "ANT-voort" },
      { nl: "langzaam", ko: "천천히", ipa: "LANG-잠" },
      { nl: "nog eens", ko: "한 번 더", ipa: "노흐 에인스" },
      { nl: "begrijp", ko: "이해하다", ipa: "버-HRAIP" },
      { nl: "spreken", ko: "말하다", ipa: "SPRAY-ken" },
      { nl: "luisteren", ko: "듣다", ipa: "LUIS-ter-en" },
      { nl: "oefenen", ko: "연습하다", ipa: "OO-fen-en" }
    ],
    phrases: [
      { nl: "Kunt u dat herhalen?", ko: "그것을 반복해 주실 수 있나요?", ipa: "쿤트 위 닷 hayr-HAH-len" },
      { nl: "Spreek langzaam, alstublieft.", ko: "천천히 말해 주세요.", ipa: "스프레이크 LANG-잠, ALS-tu-bleeft" },
      { nl: "Ik begrijp het niet.", ko: "이해하지 못했어요.", ipa: "익 버-HRAIP 헛 니트" },
      { nl: "Nog eens, alstublieft.", ko: "한 번 더 부탁드립니다.", ipa: "노흐 에인스, ALS-tu-bleeft" },
      { nl: "Mijn Nederlands is niet goed.", ko: "제 네덜란드어는 좋지 않아요.", ipa: "마인 NAY-der-lants 이스 니트 후트" },
      { nl: "Maar ik oefen.", ko: "하지만 연습 중이에요.", ipa: "마르 익 OO-fen" }
    ],
    grammar: "네덜란드 사람들은 영어로 빠르게 전환하는 경우가 많습니다. 계속 네덜란드어를 연습하고 싶다면 “Maar ik oefen” 또는 “Ik wil Nederlands oefenen”처럼 부드럽게 말하세요. 이해하지 못했을 때는 고개만 끄덕이지 말고 herhalen, langzaam 같은 단어를 사용하면 훨씬 안전합니다.",
    practice: [
      "인사 → 이름 → 출신 → 네덜란드어 연습 중이라는 4문장 자기소개를 만들어 보세요.",
      "상대가 너무 빨리 말한다고 상상하고 천천히 반복해 달라고 요청해 보세요."
    ]
  },
  {
    day: 8,
    title: "카페에서 — 음료",
    titleNative: "In het café — drankjes",
    focus: "암스테르담 카페 문화에서는 커피와 간단한 음료 주문이 자주 일어납니다. 메뉴판을 읽고 원하는 음료를 간단히 주문하는 법을 익힙니다.",
    vocab: [
      { nl: "koffie", ko: "커피", ipa: "KO-fi" },
      { nl: "thee", ko: "차", ipa: "테이" },
      { nl: "water", ko: "물", ipa: "VAH-ter" },
      { nl: "melk", ko: "우유", ipa: "멜크" },
      { nl: "bier", ko: "맥주", ipa: "비르" },
      { nl: "wijn", ko: "와인", ipa: "바인" },
      { nl: "sap", ko: "주스", ipa: "삽" },
      { nl: "cola", ko: "콜라", ipa: "KO-la" },
      { nl: "warm", ko: "따뜻한", ipa: "바름" },
      { nl: "koud", ko: "차가운", ipa: "카우트" }
    ],
    phrases: [
      { nl: "Een koffie, alstublieft.", ko: "커피 한 잔 주세요.", ipa: "에인 KO-fi, ALS-tu-bleeft" },
      { nl: "Heeft u thee?", ko: "차 있나요?", ipa: "헤이프트 위 테이" },
      { nl: "Ik wil water zonder gas.", ko: "탄산 없는 물 원해요.", ipa: "익 빌 VAH-ter ZON-der 하스" },
      { nl: "Met melk, graag.", ko: "우유 넣어서 부탁해요.", ipa: "멧 멜크, 흐라흐" },
      { nl: "Een koud biertje, graag.", ko: "차가운 맥주 한 잔 주세요.", ipa: "에인 카우트 BEER-tyuh, 흐라흐" },
      { nl: "Voor hier of om mee te nemen?", ko: "여기서 드시나요, 가지고 가시나요?", ipa: "포르 히르 오프 옴 메이 터 NAY-men" }
    ],
    grammar: "주문할 때는 Een koffie, graag처럼 명사 앞에 een을 붙이면 충분합니다. 네덜란드에서는 물을 주문할 때 탄산수인지 아닌지 물을 수 있으므로 zonder gas(탄산 없이), met gas(탄산 있음)를 알아두세요. 한국어처럼 존댓말을 길게 만들 필요는 없고, alstublieft나 graag를 붙이면 공손합니다.",
    practice: [
      "카페에서 커피, 차, 물을 각각 한 잔 주문해 보세요.",
      "탄산 없는 물을 원한다고 네덜란드어로 말해 보세요."
    ]
  },
  {
    day: 9,
    title: "카페에서 — 음식",
    titleNative: "In het café — eten",
    focus: "간단한 점심이나 간식 주문에는 샌드위치, 빵, 케이크 같은 단어가 자주 나옵니다. 네덜란드식 카페에서 메뉴를 읽고 고를 수 있게 됩니다.",
    vocab: [
      { nl: "eten", ko: "음식/먹다", ipa: "AY-ten" },
      { nl: "brood", ko: "빵", ipa: "브로트" },
      { nl: "kaas", ko: "치즈", ipa: "카스" },
      { nl: "ham", ko: "햄", ipa: "함" },
      { nl: "ei", ko: "달걀", ipa: "아이" },
      { nl: "soep", ko: "수프", ipa: "숩" },
      { nl: "salade", ko: "샐러드", ipa: "sa-LAH-duh" },
      { nl: "taart", ko: "케이크/타르트", ipa: "타르트" },
      { nl: "stroopwafel", ko: "스트룹와플", ipa: "STROPE-vah-fel" },
      { nl: "lekker", ko: "맛있는", ipa: "LEK-ker" }
    ],
    phrases: [
      { nl: "Ik wil een broodje kaas.", ko: "치즈 샌드위치 하나 원해요.", ipa: "익 빌 에인 BROT-yuh 카스" },
      { nl: "Heeft u soep?", ko: "수프 있나요?", ipa: "헤이프트 위 숩" },
      { nl: "Dat ziet er lekker uit.", ko: "그거 맛있어 보여요.", ipa: "닷 지트 에르 LEK-ker 아윗" },
      { nl: "Een stuk taart, graag.", ko: "케이크 한 조각 주세요.", ipa: "에인 스튁 타르트, 흐라흐" },
      { nl: "Is dit met ei?", ko: "이거 달걀이 들어가나요?", ipa: "이스 딧 멧 아이" },
      { nl: "Ik neem dit.", ko: "이걸로 할게요.", ipa: "익 네임 딧" }
    ],
    grammar: "네덜란드어의 broodje는 작은 빵 또는 샌드위치처럼 쓰입니다. Ik neem dit는 직역하면 ‘이것을 가져갑니다’지만, 주문할 때는 ‘이걸로 할게요’라는 자연스러운 표현입니다. 메뉴를 가리키며 말하면 문법이 조금 틀려도 충분히 통합니다.",
    practice: [
      "치즈 샌드위치와 케이크 한 조각을 주문하는 문장을 만들어 보세요.",
      "메뉴를 보고 ‘이거 달걀이 들어가나요?’라고 묻는 연습을 하세요."
    ]
  },
  {
    day: 10,
    title: "레스토랑에서 주문하기",
    titleNative: "Bestellen in een restaurant",
    focus: "레스토랑에서는 예약, 메뉴 요청, 주문, 추천 요청이 필요합니다. 암스테르담의 붐비는 식당에서도 침착하게 말할 수 있는 기본 문장을 익힙니다.",
    vocab: [
      { nl: "restaurant", ko: "레스토랑", ipa: "res-to-RANT" },
      { nl: "menu", ko: "메뉴", ipa: "MAY-nu" },
      { nl: "tafel", ko: "테이블", ipa: "TAH-fel" },
      { nl: "reservering", ko: "예약", ipa: "ray-zer-VAY-ring" },
      { nl: "bestellen", ko: "주문하다", ipa: "be-STEL-len" },
      { nl: "gerecht", ko: "요리", ipa: "허-RECHT" },
      { nl: "aanraden", ko: "추천하다", ipa: "AN-rah-den" },
      { nl: "vooraf", ko: "전채", ipa: "VOOR-af" },
      { nl: "hoofdgerecht", ko: "메인 요리", ipa: "HOFT-허-recht" },
      { nl: "dessert", ko: "디저트", ipa: "de-SAIR" }
    ],
    phrases: [
      { nl: "Ik heb een reservering.", ko: "예약했습니다.", ipa: "익 헵 에인 ray-zer-VAY-ring" },
      { nl: "Een tafel voor twee, alstublieft.", ko: "두 명 자리 부탁드립니다.", ipa: "에인 TAH-fel 포르 트웨이, ALS-tu-bleeft" },
      { nl: "Mag ik het menu?", ko: "메뉴를 받을 수 있을까요?", ipa: "마흐 익 헛 MAY-nu" },
      { nl: "Wat raadt u aan?", ko: "무엇을 추천하시나요?", ipa: "밧 라트 위 안" },
      { nl: "Ik wil dit gerecht.", ko: "이 요리를 원해요.", ipa: "익 빌 딧 허-RECHT" },
      { nl: "We willen bestellen.", ko: "주문하고 싶습니다.", ipa: "버 WIL-len be-STEL-len" }
    ],
    grammar: "Mag ik…?는 ‘제가 …해도 될까요?’라는 매우 유용한 표현입니다. Mag ik het menu?처럼 쓰면 정중하고 간단합니다. 네덜란드에서는 직원이 친근하고 직접적으로 말할 수 있으니, 너무 차갑게 느껴져도 무례한 것이 아니라 일반적인 소통 방식일 수 있습니다.",
    practice: [
      "두 명 자리와 메뉴를 요청하는 문장을 이어서 말해 보세요.",
      "직원에게 추천을 부탁하고, 추천 요리를 주문하는 역할극을 해 보세요."
    ]
  },
  {
    day: 11,
    title: "자주 먹는 음식",
    titleNative: "Veelvoorkomend eten",
    focus: "네덜란드 메뉴에는 감자튀김, 생선, 팬케이크, 치즈가 자주 등장합니다. 낯선 메뉴에서도 핵심 재료를 알아보는 연습을 합니다.",
    vocab: [
      { nl: "aardappel", ko: "감자", ipa: "AAR-da-pel" },
      { nl: "patat", ko: "감자튀김", ipa: "pa-TAT" },
      { nl: "vis", ko: "생선", ipa: "비스" },
      { nl: "kip", ko: "닭고기", ipa: "킵" },
      { nl: "vlees", ko: "고기", ipa: "플레이스" },
      { nl: "groente", ko: "채소", ipa: "HROON-tuh" },
      { nl: "pannenkoek", ko: "팬케이크", ipa: "PAN-nen-kook" },
      { nl: "kaasplank", ko: "치즈 플레이트", ipa: "KAS-plank" },
      { nl: "appel", ko: "사과", ipa: "A-pel" },
      { nl: "saus", ko: "소스", ipa: "사우스" }
    ],
    phrases: [
      { nl: "Ik hou van kaas.", ko: "저는 치즈를 좋아해요.", ipa: "익 하우 판 카스" },
      { nl: "Zonder saus, graag.", ko: "소스 없이 부탁해요.", ipa: "ZON-der 사우스, 흐라흐" },
      { nl: "Met extra groente.", ko: "채소를 더 넣어서요.", ipa: "멧 EX-tra HROON-tuh" },
      { nl: "Is de vis vers?", ko: "생선이 신선한가요?", ipa: "이스 더 비스 페르스" },
      { nl: "Ik eet geen vlees.", ko: "저는 고기를 먹지 않아요.", ipa: "익 에이트 헤인 플레이스" },
      { nl: "Patat met mayo, graag.", ko: "마요네즈 감자튀김 주세요.", ipa: "pa-TAT 멧 MAH-yo, 흐라흐" }
    ],
    grammar: "geen은 ‘없다/아니다’의 느낌으로 명사 앞에 옵니다. Ik eet geen vlees는 ‘나는 고기를 먹지 않는다’라는 말입니다. 소스를 빼거나 추가할 때는 zonder(없이), met(함께)를 쓰면 됩니다.",
    practice: [
      "고기를 먹지 않는다고 말하고 채소를 더 요청해 보세요.",
      "감자튀김을 마요네즈와 함께 주문하는 문장을 말해 보세요."
    ]
  },
  {
    day: 12,
    title: "식단 제한과 알레르기",
    titleNative: "Dieetwensen en allergieën",
    focus: "알레르기와 식단 제한은 정확히 말해야 하는 안전 문제입니다. 영어가 통하더라도 핵심 단어는 네덜란드어로 알아두면 메뉴 확인이 더 쉽습니다.",
    vocab: [
      { nl: "allergie", ko: "알레르기", ipa: "a-ler-GEE" },
      { nl: "noten", ko: "견과류", ipa: "NO-ten" },
      { nl: "pinda", ko: "땅콩", ipa: "PIN-da" },
      { nl: "melk", ko: "우유", ipa: "멜크" },
      { nl: "gluten", ko: "글루텐", ipa: "GLU-ten" },
      { nl: "vegetarisch", ko: "채식의", ipa: "vay-hey-TAH-ris" },
      { nl: "veganistisch", ko: "비건의", ipa: "vay-ha-NIS-tis" },
      { nl: "zonder", ko: "~없이", ipa: "ZON-der" },
      { nl: "gevaarlijk", ko: "위험한", ipa: "허-VAAR-lək" },
      { nl: "ingrediënten", ko: "재료", ipa: "in-gray-dee-EN-ten" }
    ],
    phrases: [
      { nl: "Ik heb een allergie.", ko: "저는 알레르기가 있습니다.", ipa: "익 헵 에인 a-ler-GEE" },
      { nl: "Ik ben allergisch voor noten.", ko: "저는 견과류 알레르기가 있어요.", ipa: "익 벤 a-LER-his 포르 NO-ten" },
      { nl: "Is dit zonder gluten?", ko: "이거 글루텐 없나요?", ipa: "이스 딧 ZON-der GLU-ten" },
      { nl: "Ik eet vegetarisch.", ko: "저는 채식으로 먹습니다.", ipa: "익 에이트 vay-hey-TAH-ris" },
      { nl: "Kunt u de ingrediënten controleren?", ko: "재료를 확인해 주실 수 있나요?", ipa: "쿤트 위 더 in-gray-dee-EN-ten kon-tro-LAY-ren" },
      { nl: "Dat is gevaarlijk voor mij.", ko: "그것은 저에게 위험합니다.", ipa: "닷 이스 허-VAAR-lək 포르 마이" }
    ],
    grammar: "알레르기는 농담이나 연습 상황이 아니라 정확도가 중요합니다. 네덜란드 사람이 영어로 바꾸면 안전을 위해 영어를 사용해도 좋습니다. 그래도 “Ik ben allergisch voor…” 구조를 외워두면 직원이 바로 심각성을 이해합니다.",
    practice: [
      "자신에게 해당하는 알레르기 단어를 넣어 Ik ben allergisch voor… 문장을 만들어 보세요.",
      "직원에게 재료 확인을 부탁하는 문장을 큰소리로 말해 보세요."
    ]
  },
  {
    day: 13,
    title: "계산과 팁",
    titleNative: "Betalen en fooi",
    focus: "네덜란드는 카드 결제가 흔하고 팁 문화가 미국보다 훨씬 낮습니다. 계산서 요청, 카드 결제, 팁 관련 표현을 익힙니다.",
    vocab: [
      { nl: "rekening", ko: "계산서", ipa: "RAY-ken-ing" },
      { nl: "betalen", ko: "결제하다", ipa: "be-TAH-len" },
      { nl: "kaart", ko: "카드", ipa: "카르트" },
      { nl: "contant", ko: "현금", ipa: "kon-TANT" },
      { nl: "fooi", ko: "팁", ipa: "포이" },
      { nl: "bon", ko: "영수증", ipa: "본" },
      { nl: "samen", ko: "같이", ipa: "SAH-men" },
      { nl: "apart", ko: "따로", ipa: "a-PART" },
      { nl: "pinpas", ko: "체크카드", ipa: "PIN-pas" },
      { nl: "bedrag", ko: "금액", ipa: "be-DRACH" }
    ],
    phrases: [
      { nl: "De rekening, alstublieft.", ko: "계산서 부탁드립니다.", ipa: "더 RAY-ken-ing, ALS-tu-bleeft" },
      { nl: "Kan ik met kaart betalen?", ko: "카드로 결제할 수 있나요?", ipa: "칸 익 멧 카르트 be-TAH-len" },
      { nl: "Apart betalen, graag.", ko: "따로 계산할게요.", ipa: "a-PART be-TAH-len, 흐라흐" },
      { nl: "Samen betalen.", ko: "같이 계산할게요.", ipa: "SAH-men be-TAH-len" },
      { nl: "Mag ik de bon?", ko: "영수증 받을 수 있을까요?", ipa: "마흐 익 더 본" },
      { nl: "Laat maar zo.", ko: "거스름돈은 괜찮아요.", ipa: "라트 마르 조" }
    ],
    grammar: "네덜란드에서는 큰 팁이 필수는 아닙니다. 서비스가 좋으면 반올림하거나 소액을 남기는 정도가 자연스럽습니다. 계산할 때 apart와 samen만 정확히 말해도 직원이 바로 이해합니다.",
    practice: [
      "카드로 결제할 수 있는지 묻고 영수증을 요청해 보세요.",
      "친구와 따로 계산하는 상황을 네덜란드어로 연습해 보세요."
    ]
  },
  {
    day: 14,
    title: "2주차 복습 — 카페 데이",
    titleNative: "Week 2 herhaling — cafédag",
    focus: "이번 주에는 음료, 음식, 레스토랑, 알레르기, 결제를 배웠습니다. 실제 카페 하루처럼 입장부터 계산까지 이어서 말해 봅니다.",
    vocab: [
      { nl: "café", ko: "카페", ipa: "ka-FAY" },
      { nl: "ober", ko: "웨이터", ipa: "O-ber" },
      { nl: "serveerster", ko: "웨이트리스", ipa: "ser-VEER-ster" },
      { nl: "bestelling", ko: "주문", ipa: "be-STEL-ling" },
      { nl: "drankje", ko: "음료", ipa: "DRANK-yuh" },
      { nl: "lunch", ko: "점심", ipa: "런치" },
      { nl: "keuze", ko: "선택", ipa: "KOY-zuh" },
      { nl: "klaar", ko: "준비된/끝난", ipa: "클라르" },
      { nl: "lekker", ko: "맛있는", ipa: "LEK-ker" },
      { nl: "terras", ko: "야외 좌석", ipa: "te-RAS" }
    ],
    phrases: [
      { nl: "Heeft u een tafel op het terras?", ko: "야외 좌석이 있나요?", ipa: "헤이프트 위 에인 TAH-fel 옵 헛 te-RAS" },
      { nl: "Ik wil graag lunchen.", ko: "점심을 먹고 싶어요.", ipa: "익 빌 흐라흐 LUN-chen" },
      { nl: "Wat is uw keuze?", ko: "무엇을 선택하시겠어요?", ipa: "밧 이스 위 KOY-zuh" },
      { nl: "Mijn bestelling is klaar.", ko: "제 주문이 준비됐어요.", ipa: "마인 be-STEL-ling 이스 클라르" },
      { nl: "Het was lekker.", ko: "맛있었습니다.", ipa: "헛 바스 LEK-ker" },
      { nl: "We willen betalen.", ko: "계산하고 싶습니다.", ipa: "버 WIL-len be-TAH-len" }
    ],
    grammar: "카페에서는 완전한 문장보다 핵심 단어 + graag가 자연스럽습니다. “Koffie graag”, “Broodje kaas graag”처럼 말해도 충분합니다. 하지만 알레르기나 결제 방식처럼 중요한 정보는 완전한 문장으로 분명히 말하세요.",
    practice: [
      "야외 좌석 요청 → 점심 주문 → 계산 요청까지 3단계 대화를 만들어 보세요.",
      "카페 직원이 영어로 바꾸었을 때 ‘네덜란드어를 연습하고 싶어요’라고 말해 보세요."
    ]
  },
  {
    day: 15,
    title: "호텔 체크인",
    titleNative: "Inchecken in het hotel",
    focus: "호텔에서는 예약 확인, 여권, 방 번호, 체크인 시간을 빠르게 처리해야 합니다. 기본 문장만 준비해도 도착 직후 긴장을 줄일 수 있습니다.",
    vocab: [
      { nl: "hotel", ko: "호텔", ipa: "ho-TEL" },
      { nl: "inchecken", ko: "체크인하다", ipa: "IN-chek-ken" },
      { nl: "reservering", ko: "예약", ipa: "ray-zer-VAY-ring" },
      { nl: "paspoort", ko: "여권", ipa: "PAS-poort" },
      { nl: "kamer", ko: "방", ipa: "KAH-mer" },
      { nl: "sleutel", ko: "열쇠", ipa: "SLAY-tel" },
      { nl: "lift", ko: "엘리베이터", ipa: "리프트" },
      { nl: "ontbijt", ko: "아침식사", ipa: "ONT-bait" },
      { nl: "nacht", ko: "밤/1박", ipa: "나흐트" },
      { nl: "bagage", ko: "짐", ipa: "ba-GAH-zhuh" }
    ],
    phrases: [
      { nl: "Ik wil inchecken.", ko: "체크인하고 싶습니다.", ipa: "익 빌 IN-chek-ken" },
      { nl: "Ik heb een reservering op naam van Kim.", ko: "Kim 이름으로 예약했습니다.", ipa: "익 헵 에인 ray-zer-VAY-ring 옵 남 판 킴" },
      { nl: "Hier is mijn paspoort.", ko: "여기 제 여권입니다.", ipa: "히르 이스 마인 PAS-poort" },
      { nl: "Waar is de lift?", ko: "엘리베이터는 어디인가요?", ipa: "바르 이스 더 리프트" },
      { nl: "Is ontbijt inbegrepen?", ko: "아침식사가 포함되어 있나요?", ipa: "이스 ONT-bait in-be-HRAY-pen" },
      { nl: "Kan ik mijn bagage hier laten?", ko: "짐을 여기 맡길 수 있나요?", ipa: "칸 익 마인 ba-GAH-zhuh 히르 LAH-ten" }
    ],
    grammar: "op naam van은 ‘~의 이름으로’라는 뜻으로 예약 확인에 매우 유용합니다. mijn은 ‘나의’이고, mijn paspoort, mijn bagage처럼 씁니다. 호텔 직원은 영어로 바꾸기 쉽지만, 체크인 문장은 반복되는 구조라 네덜란드어로 연습하기 좋습니다.",
    practice: [
      "자신의 성을 넣어 예약 확인 문장을 만들어 보세요.",
      "아침식사 포함 여부와 짐 보관 가능 여부를 묻는 문장을 말해 보세요."
    ]
  },
  {
    day: 16,
    title: "호텔 방 단어와 문제 말하기",
    titleNative: "Hotelkamerwoorden en problemen",
    focus: "방에 문제가 있을 때는 짧고 정확하게 말해야 합니다. 난방, 물, 소음, 수건처럼 실제로 필요한 단어를 익힙니다.",
    vocab: [
      { nl: "bed", ko: "침대", ipa: "벳" },
      { nl: "badkamer", ko: "욕실", ipa: "BAT-kah-mer" },
      { nl: "douche", ko: "샤워", ipa: "DOO-shuh" },
      { nl: "handdoek", ko: "수건", ipa: "HAND-dook" },
      { nl: "raam", ko: "창문", ipa: "람" },
      { nl: "verwarming", ko: "난방", ipa: "fer-WAR-ming" },
      { nl: "airco", ko: "에어컨", ipa: "AIR-ko" },
      { nl: "lawaai", ko: "소음", ipa: "la-WAI" },
      { nl: "probleem", ko: "문제", ipa: "pro-BLAYM" },
      { nl: "kapot", ko: "고장 난", ipa: "ka-POT" }
    ],
    phrases: [
      { nl: "De douche is kapot.", ko: "샤워기가 고장 났어요.", ipa: "더 DOO-shuh 이스 ka-POT" },
      { nl: "Ik heb geen handdoek.", ko: "수건이 없어요.", ipa: "익 헵 헤인 HAND-dook" },
      { nl: "De kamer is koud.", ko: "방이 추워요.", ipa: "더 KAH-mer 이스 카우트" },
      { nl: "Er is veel lawaai.", ko: "소음이 많아요.", ipa: "에르 이스 페일 la-WAI" },
      { nl: "Kunt u helpen?", ko: "도와주실 수 있나요?", ipa: "쿤트 위 HEL-pen" },
      { nl: "Mag ik een andere kamer?", ko: "다른 방을 받을 수 있을까요?", ipa: "마흐 익 에인 AN-der-uh KAH-mer" }
    ],
    grammar: "문제를 말할 때는 De/Het + 물건 + is kapot 구조가 편합니다. geen은 ‘없다’의 의미로 Ik heb geen handdoek처럼 씁니다. 불만을 말할 때도 네덜란드식 직접 표현은 자연스럽지만, alstublieft나 kunt u helpen을 붙이면 부드럽습니다.",
    practice: [
      "샤워기가 고장 났고 수건이 없다고 말해 보세요.",
      "방이 춥다고 말한 뒤 도움을 요청해 보세요."
    ]
  },
  {
    day: 17,
    title: "길 묻기",
    titleNative: "De weg vragen",
    focus: "암스테르담 골목과 운하는 방향 감각을 헷갈리게 만들 수 있습니다. 박물관, 역, 화장실, 광장을 찾는 표현을 익힙니다.",
    vocab: [
      { nl: "waar", ko: "어디", ipa: "바르" },
      { nl: "links", ko: "왼쪽", ipa: "링크스" },
      { nl: "rechts", ko: "오른쪽", ipa: "레흐츠" },
      { nl: "rechtdoor", ko: "직진", ipa: "RECHT-door" },
      { nl: "straat", ko: "거리", ipa: "스트라트" },
      { nl: "plein", ko: "광장", ipa: "플라인" },
      { nl: "brug", ko: "다리", ipa: "브뤼흐" },
      { nl: "station", ko: "역", ipa: "sta-SHON" },
      { nl: "museum", ko: "박물관", ipa: "mu-ZAY-um" },
      { nl: "toilet", ko: "화장실", ipa: "twa-LET" }
    ],
    phrases: [
      { nl: "Waar is het station?", ko: "역은 어디인가요?", ipa: "바르 이스 헛 sta-SHON" },
      { nl: "Hoe kom ik bij het museum?", ko: "박물관에 어떻게 가나요?", ipa: "후 콤 익 바이 헛 mu-ZAY-um" },
      { nl: "Ga links.", ko: "왼쪽으로 가세요.", ipa: "하 링크스" },
      { nl: "Ga rechts.", ko: "오른쪽으로 가세요.", ipa: "하 레흐츠" },
      { nl: "Ga rechtdoor.", ko: "직진하세요.", ipa: "하 RECHT-door" },
      { nl: "Is het ver?", ko: "먼가요?", ipa: "이스 헛 페르" }
    ],
    grammar: "Waar is…?는 장소를 찾을 때 가장 쉬운 구조입니다. Hoe kom ik bij…?는 ‘~에 어떻게 가나요?’라는 표현으로 도보 길 안내에 좋습니다. rechts와 rechtdoor에는 목 뒤쪽의 ch 소리가 들어가니 ‘레흐츠’, ‘레흐트도르’처럼 거칠게 연습하세요.",
    practice: [
      "역, 박물관, 화장실이 어디인지 각각 물어보세요.",
      "왼쪽, 오른쪽, 직진을 손짓과 함께 말해 보세요."
    ]
  },
  {
    day: 18,
    title: "트램, 기차와 대중교통",
    titleNative: "Tram, trein en openbaar vervoer",
    focus: "네덜란드는 대중교통이 편리하지만 카드, 플랫폼, 환승 단어가 중요합니다. 트램과 기차를 탈 때 꼭 필요한 표현을 익힙니다.",
    vocab: [
      { nl: "tram", ko: "트램", ipa: "트람" },
      { nl: "trein", ko: "기차", ipa: "트라인" },
      { nl: "bus", ko: "버스", ipa: "뷔스" },
      { nl: "metro", ko: "지하철", ipa: "MAY-tro" },
      { nl: "kaartje", ko: "표", ipa: "KAART-yuh" },
      { nl: "halte", ko: "정류장", ipa: "HAL-tuh" },
      { nl: "spoor", ko: "플랫폼/선로", ipa: "스포르" },
      { nl: "overstappen", ko: "환승하다", ipa: "O-ver-stap-pen" },
      { nl: "vertrek", ko: "출발", ipa: "fer-TREK" },
      { nl: "aankomst", ko: "도착", ipa: "AN-komst" }
    ],
    phrases: [
      { nl: "Waar is de tramhalte?", ko: "트램 정류장은 어디인가요?", ipa: "바르 이스 더 TRAM-hal-tuh" },
      { nl: "Ik wil een kaartje naar Rotterdam.", ko: "로테르담행 표를 원해요.", ipa: "익 빌 에인 KAART-yuh 나르 ROT-ter-dam" },
      { nl: "Welk spoor?", ko: "몇 번 플랫폼인가요?", ipa: "벨크 스포르" },
      { nl: "Moet ik overstappen?", ko: "환승해야 하나요?", ipa: "무트 익 O-ver-stap-pen" },
      { nl: "Wanneer vertrekt de trein?", ko: "기차는 언제 출발하나요?", ipa: "van-NEER fer-TREKT 더 트라인" },
      { nl: "Deze tram gaat naar het centrum.", ko: "이 트램은 시내로 갑니다.", ipa: "DAY-zuh 트람 하트 나르 헛 SEN-trum" }
    ],
    grammar: "naar는 ‘~로/에게’라는 뜻으로 목적지를 말할 때 씁니다. naar Amsterdam, naar het centrum처럼 붙이면 됩니다. 네덜란드 대중교통에서는 OV-chipkaart나 앱 결제가 흔하므로, 표보다 카드 체크인/체크아웃 개념도 함께 기억하세요.",
    practice: [
      "로테르담행 표를 요청하고 플랫폼을 묻는 문장을 연습하세요.",
      "트램이 시내로 가는지 묻는 문장을 만들어 보세요."
    ]
  },
  {
    day: 19,
    title: "자전거 단어 — 네덜란드 필수",
    titleNative: "Fietswoorden — essentieel in Nederland",
    focus: "네덜란드는 자전거 중심 인프라가 매우 발달한 나라입니다. 자전거 도로, 벨, 대여, 조심하라는 표현을 모르면 실제 거리에서 위험할 수 있습니다.",
    vocab: [
      { nl: "fiets", ko: "자전거", ipa: "피츠" },
      { nl: "fietspad", ko: "자전거 도로", ipa: "FEETS-pat" },
      { nl: "bel", ko: "벨", ipa: "벨" },
      { nl: "slot", ko: "자물쇠", ipa: "슬롯" },
      { nl: "rem", ko: "브레이크", ipa: "렘" },
      { nl: "band", ko: "타이어", ipa: "반트" },
      { nl: "huren", ko: "대여하다", ipa: "HU-ren" },
      { nl: "helm", ko: "헬멧", ipa: "헬름" },
      { nl: "voorzichtig", ko: "조심스러운", ipa: "voor-ZICH-t흐" },
      { nl: "uitkijken", ko: "조심하다", ipa: "아윗-KAI-ken" }
    ],
    phrases: [
      { nl: "Waar kan ik een fiets huren?", ko: "어디에서 자전거를 빌릴 수 있나요?", ipa: "바르 칸 익 에인 피츠 HU-ren" },
      { nl: "Is dit het fietspad?", ko: "이것이 자전거 도로인가요?", ipa: "이스 딧 헛 FEETS-pat" },
      { nl: "Pas op!", ko: "조심하세요!", ipa: "파스 옵" },
      { nl: "Kijk uit!", ko: "조심해요!", ipa: "카익 아윗" },
      { nl: "Mijn fiets is op slot.", ko: "제 자전거는 잠겨 있어요.", ipa: "마인 피츠 이스 옵 슬롯" },
      { nl: "De band is lek.", ko: "타이어가 펑크 났어요.", ipa: "더 반트 이스 렉" }
    ],
    grammar: "Amsterdam에서는 자전거 도로에 서 있으면 정말 위험할 수 있습니다. fietspad 표지와 빨간 도로를 잘 보고, 누군가 bel을 울리거나 “Pas op!”이라고 하면 즉시 비켜야 합니다. 자전거를 빌릴 때 huren을 쓰고, 고장 설명에는 De band is lek 같은 짧은 문장이 가장 실용적입니다.",
    practice: [
      "자전거를 어디서 빌릴 수 있는지 묻는 문장을 말해 보세요.",
      "자전거 도로인지 확인하고, ‘조심하세요!’를 빠르게 외쳐 보세요."
    ]
  },
  {
    day: 20,
    title: "시간 말하기와 일정",
    titleNative: "Tijd zeggen en schema’s",
    focus: "기차 출발, 박물관 예약, 체크아웃 시간에는 시각 표현이 꼭 필요합니다. 정각, 반, 몇 분 전후 표현의 기초를 배웁니다.",
    vocab: [
      { nl: "uur", ko: "시/시간", ipa: "위르" },
      { nl: "minuut", ko: "분", ipa: "mi-NUUT" },
      { nl: "half", ko: "반", ipa: "할프" },
      { nl: "kwart", ko: "15분/쿼터", ipa: "크바르트" },
      { nl: "vroeg", ko: "이른", ipa: "프루흐" },
      { nl: "laat", ko: "늦은", ipa: "라트" },
      { nl: "nu", ko: "지금", ipa: "뉘" },
      { nl: "straks", ko: "이따가", ipa: "스트락스" },
      { nl: "schema", ko: "일정표", ipa: "SKAY-ma" },
      { nl: "afspraak", ko: "약속", ipa: "AF-sprahk" }
    ],
    phrases: [
      { nl: "Hoe laat is het?", ko: "몇 시인가요?", ipa: "후 라트 이스 헛" },
      { nl: "Het is drie uur.", ko: "3시입니다.", ipa: "헛 이스 드리 위르" },
      { nl: "Het is half vier.", ko: "3시 반입니다.", ipa: "헛 이스 할프 피르" },
      { nl: "Om tien uur.", ko: "10시에요.", ipa: "옴 틴 위르" },
      { nl: "Ik ben te laat.", ko: "제가 늦었어요.", ipa: "익 벤 터 라트" },
      { nl: "De afspraak is om twee uur.", ko: "약속은 2시입니다.", ipa: "더 AF-sprahk 이스 옴 트웨이 위르" }
    ],
    grammar: "네덜란드어의 half vier는 직역하면 ‘4시의 반’이지만 실제 의미는 3시 30분입니다. 한국어 화자에게 가장 헷갈리는 부분이므로 통째로 외우세요. 정확한 예약 시간은 om + 시간으로 말합니다.",
    practice: [
      "현재 시간을 Het is…로 말해 보세요.",
      "2시 약속과 3시 반 출발을 네덜란드어로 말해 보세요."
    ]
  },
  {
    day: 21,
    title: "3주차 복습 — 여행하는 날",
    titleNative: "Week 3 herhaling — reisdag",
    focus: "호텔, 길 찾기, 교통, 자전거, 시간 표현을 연결해 실제 이동 하루를 연습합니다. 암스테르담에서 박물관과 역을 찾아가는 상황을 상상합니다.",
    vocab: [
      { nl: "reis", ko: "여행", ipa: "라이스" },
      { nl: "route", ko: "경로", ipa: "ROO-tuh" },
      { nl: "centrum", ko: "시내", ipa: "SEN-trum" },
      { nl: "kaart", ko: "지도/카드", ipa: "카르트" },
      { nl: "ingang", ko: "입구", ipa: "IN-hang" },
      { nl: "uitgang", ko: "출구", ipa: "아윗-hang" },
      { nl: "dichtbij", ko: "가까운", ipa: "DICHT-bai" },
      { nl: "ver weg", ko: "멀리", ipa: "페르 베흐" },
      { nl: "veilig", ko: "안전한", ipa: "VAY-l흐" },
      { nl: "druk", ko: "붐비는", ipa: "드뤽" }
    ],
    phrases: [
      { nl: "Ik reis naar Amsterdam.", ko: "저는 암스테르담으로 여행합니다.", ipa: "익 라이스 나르 AM-ster-dam" },
      { nl: "Welke route is sneller?", ko: "어떤 경로가 더 빠른가요?", ipa: "WEL-kuh ROO-tuh 이스 SNEL-ler" },
      { nl: "Is het dichtbij?", ko: "가까운가요?", ipa: "이스 헛 DICHT-bai" },
      { nl: "Waar is de ingang?", ko: "입구는 어디인가요?", ipa: "바르 이스 더 IN-hang" },
      { nl: "De uitgang is rechts.", ko: "출구는 오른쪽입니다.", ipa: "더 아윗-hang 이스 레흐츠" },
      { nl: "Het is druk vandaag.", ko: "오늘은 붐비네요.", ipa: "헛 이스 드뤽 fan-DAACH" }
    ],
    grammar: "ingang은 입구, uitgang은 출구입니다. 둘 다 g 소리가 들어가서 목 뒤쪽을 살짝 긁는 느낌이 납니다. 길 안내를 받을 때 모든 단어를 이해하지 못해도 links, rechts, rechtdoor, ingang, uitgang만 잡으면 됩니다.",
    practice: [
      "호텔에서 나와 트램을 타고 박물관 입구를 찾는 5문장 여행 대화를 만들어 보세요.",
      "입구와 출구가 어디인지 각각 물어보세요."
    ]
  },
  {
    day: 22,
    title: "쇼핑 기본 표현",
    titleNative: "Winkelen basis",
    focus: "시장, 기념품점, 의류 매장에서 가격과 결제를 묻는 표현이 필요합니다. 짧고 직접적인 네덜란드식 쇼핑 문장을 익힙니다.",
    vocab: [
      { nl: "winkel", ko: "상점", ipa: "WIN-kel" },
      { nl: "markt", ko: "시장", ipa: "마르크트" },
      { nl: "prijs", ko: "가격", ipa: "프라이스" },
      { nl: "duur", ko: "비싼", ipa: "뒤르" },
      { nl: "goedkoop", ko: "싼", ipa: "후트-코프" },
      { nl: "kopen", ko: "사다", ipa: "KO-pen" },
      { nl: "verkopen", ko: "팔다", ipa: "fer-KO-pen" },
      { nl: "cadeau", ko: "선물", ipa: "ka-DO" },
      { nl: "tas", ko: "가방", ipa: "타스" },
      { nl: "maat", ko: "사이즈", ipa: "마트" }
    ],
    phrases: [
      { nl: "Hoeveel kost dit?", ko: "이거 얼마예요?", ipa: "후-FAYL 코스트 딧" },
      { nl: "Dat is te duur.", ko: "그건 너무 비싸요.", ipa: "닷 이스 터 뒤르" },
      { nl: "Heeft u iets goedkoper?", ko: "더 싼 것이 있나요?", ipa: "헤이프트 위 이츠 후트-KO-per" },
      { nl: "Ik wil dit kopen.", ko: "이것을 사고 싶어요.", ipa: "익 빌 딧 KO-pen" },
      { nl: "Het is een cadeau.", ko: "선물입니다.", ipa: "헛 이스 에인 ka-DO" },
      { nl: "Heeft u een tas?", ko: "가방 있나요?", ipa: "헤이프트 위 에인 타스" }
    ],
    grammar: "네덜란드 쇼핑 대화는 비교적 직접적입니다. “Dat is te duur”라고 말해도 한국어보다 덜 무례하게 들릴 수 있지만, 부드럽게 하려면 “voor mij”를 붙여 ‘저에게는 비싸요’라고 말할 수 있습니다. 가격 질문은 Day 5의 숫자와 함께 반복하세요.",
    practice: [
      "기념품 가격을 묻고 너무 비싸다고 말해 보세요.",
      "선물용이라고 말하고 가방이 있는지 물어보세요."
    ]
  },
  {
    day: 23,
    title: "사이즈, 색상, 입어보기",
    titleNative: "Maten, kleuren en passen",
    focus: "옷을 살 때는 사이즈와 색상을 묻고 입어볼 수 있어야 합니다. 네덜란드 의류 매장에서 바로 쓸 수 있는 표현을 배웁니다.",
    vocab: [
      { nl: "maat", ko: "사이즈", ipa: "마트" },
      { nl: "klein", ko: "작은", ipa: "클라인" },
      { nl: "groot", ko: "큰", ipa: "흐로트" },
      { nl: "kleur", ko: "색", ipa: "클뢰르" },
      { nl: "zwart", ko: "검은색", ipa: "즈바르트" },
      { nl: "wit", ko: "흰색", ipa: "빗" },
      { nl: "blauw", ko: "파란색", ipa: "블라우" },
      { nl: "rood", ko: "빨간색", ipa: "로트" },
      { nl: "passen", ko: "입어보다/맞다", ipa: "PAS-sen" },
      { nl: "paskamer", ko: "탈의실", ipa: "PAS-kah-mer" }
    ],
    phrases: [
      { nl: "Heeft u deze in maat M?", ko: "이거 M 사이즈 있나요?", ipa: "헤이프트 위 DAY-zuh 인 마트 엠" },
      { nl: "Mag ik dit passen?", ko: "이거 입어봐도 될까요?", ipa: "마흐 익 딧 PAS-sen" },
      { nl: "Waar is de paskamer?", ko: "탈의실은 어디인가요?", ipa: "바르 이스 더 PAS-kah-mer" },
      { nl: "Het is te klein.", ko: "너무 작아요.", ipa: "헛 이스 터 클라인" },
      { nl: "Het is te groot.", ko: "너무 커요.", ipa: "헛 이스 터 흐로트" },
      { nl: "Heeft u een andere kleur?", ko: "다른 색상이 있나요?", ipa: "헤이프트 위 에인 AN-der-uh 클뢰르" }
    ],
    grammar: "deze는 ‘이것/이 제품’처럼 가까운 물건을 가리킬 때 씁니다. 옷을 입어볼 때는 Mag ik dit passen?이 가장 간단하고 자연스럽습니다. ui 소리가 들어간 kleur는 한국어에 없는 소리라 ‘클뢰르’처럼 입술을 둥글게 하며 연습하세요.",
    practice: [
      "다른 색상과 M 사이즈가 있는지 묻는 문장을 말해 보세요.",
      "옷이 너무 작거나 크다고 말하는 연습을 하세요."
    ]
  },
  {
    day: 24,
    title: "가벼운 대화",
    titleNative: "Smalltalk",
    focus: "네덜란드 사람들은 사적인 질문보다 날씨, 여행, 도시 이야기를 가볍게 나누는 편이 편합니다. 짧은 small talk로 자연스럽게 대화를 시작해 봅니다.",
    vocab: [
      { nl: "weer", ko: "날씨", ipa: "베이르" },
      { nl: "mooi", ko: "아름다운/좋은", ipa: "모이" },
      { nl: "regen", ko: "비", ipa: "RAY-헌" },
      { nl: "zon", ko: "해", ipa: "존" },
      { nl: "koud", ko: "추운", ipa: "카우트" },
      { nl: "warm", ko: "따뜻한", ipa: "바름" },
      { nl: "stad", ko: "도시", ipa: "스타트" },
      { nl: "druk", ko: "붐비는", ipa: "드뤽" },
      { nl: "gezellig", ko: "아늑하고 즐거운", ipa: "허-ZEL-l흐" },
      { nl: "interessant", ko: "흥미로운", ipa: "in-te-re-SANT" }
    ],
    phrases: [
      { nl: "Mooi weer vandaag.", ko: "오늘 날씨 좋네요.", ipa: "모이 베이르 fan-DAACH" },
      { nl: "Het regent veel.", ko: "비가 많이 오네요.", ipa: "헛 RAY-헌트 페일" },
      { nl: "Amsterdam is mooi.", ko: "암스테르담은 아름다워요.", ipa: "AM-ster-dam 이스 모이" },
      { nl: "Het is hier gezellig.", ko: "여기는 분위기가 좋아요.", ipa: "헛 이스 히르 허-ZEL-l흐" },
      { nl: "Waar komt u vandaan?", ko: "어디에서 오셨나요?", ipa: "바르 콤트 위 fan-DAAN" },
      { nl: "Ik vind dit interessant.", ko: "이거 흥미롭네요.", ipa: "익 빈트 딧 in-te-re-SANT" }
    ],
    grammar: "gezellig은 네덜란드 문화의 핵심 단어로, ‘아늑하고 편안하고 즐거운 분위기’를 한 번에 담습니다. 한국어로 정확히 하나의 단어가 없으므로 카페, 집, 거리 분위기를 칭찬할 때 통째로 쓰세요. 사적인 질문을 너무 빨리 하기보다는 날씨와 장소부터 시작하면 자연스럽습니다.",
    practice: [
      "날씨가 좋다고 말하고 암스테르담을 칭찬해 보세요.",
      "gezellig를 사용해 카페 분위기를 칭찬하는 문장을 만들어 보세요."
    ]
  },
  {
    day: 25,
    title: "응급 상황과 건강",
    titleNative: "Noodgevallen en gezondheid",
    focus: "응급 상황에서는 영어가 통하더라도 네덜란드어 핵심어를 알아듣는 것이 중요합니다. 도움 요청, 병원, 약국, 통증 표현을 익힙니다.",
    vocab: [
      { nl: "help", ko: "도와주세요", ipa: "헬프" },
      { nl: "noodgeval", ko: "응급 상황", ipa: "NOOD-허-fal" },
      { nl: "politie", ko: "경찰", ipa: "po-lee-TEE" },
      { nl: "dokter", ko: "의사", ipa: "DOK-ter" },
      { nl: "ziekenhuis", ko: "병원", ipa: "ZEE-ken-haus" },
      { nl: "apotheek", ko: "약국", ipa: "a-po-TAYK" },
      { nl: "pijn", ko: "통증", ipa: "파인" },
      { nl: "ziek", ko: "아픈", ipa: "지크" },
      { nl: "duizelig", ko: "어지러운", ipa: "DAU-zuh-l흐" },
      { nl: "ambulance", ko: "구급차", ipa: "am-bu-LANS" }
    ],
    phrases: [
      { nl: "Help, alstublieft!", ko: "도와주세요!", ipa: "헬프, ALS-tu-bleeft" },
      { nl: "Ik heb pijn.", ko: "통증이 있어요.", ipa: "익 헵 파인" },
      { nl: "Ik ben ziek.", ko: "저는 아파요.", ipa: "익 벤 지크" },
      { nl: "Waar is de apotheek?", ko: "약국은 어디인가요?", ipa: "바르 이스 더 a-po-TAYK" },
      { nl: "Bel een ambulance!", ko: "구급차를 불러 주세요!", ipa: "벨 에인 am-bu-LANS" },
      { nl: "Ik heb een dokter nodig.", ko: "의사가 필요해요.", ipa: "익 헵 에인 DOK-ter NO-d흐" }
    ],
    grammar: "위급할 때는 문법보다 큰 소리로 핵심 단어를 말하는 것이 중요합니다. nodig는 ‘필요한’이라는 뜻으로 Ik heb een dokter nodig처럼 씁니다. 증상이 복잡하거나 위험하면 네덜란드어 연습을 고집하지 말고 바로 영어로 정확히 설명하세요.",
    practice: [
      "약국이 어디인지 묻고 의사가 필요하다고 말해 보세요.",
      "응급 상황에서 도움과 구급차를 요청하는 문장을 빠르게 말해 보세요."
    ]
  },
  {
    day: 26,
    title: "칭찬과 반응",
    titleNative: "Complimenten en reacties",
    focus: "여행 중 좋은 음식, 친절한 서비스, 멋진 장소를 칭찬하면 현지인과의 분위기가 좋아집니다. 짧지만 진심이 담긴 반응을 익힙니다.",
    vocab: [
      { nl: "mooi", ko: "아름다운", ipa: "모이" },
      { nl: "lekker", ko: "맛있는", ipa: "LEK-ker" },
      { nl: "goed", ko: "좋은", ipa: "후트" },
      { nl: "geweldig", ko: "훌륭한", ipa: "허-WEL-d흐" },
      { nl: "vriendelijk", ko: "친절한", ipa: "VREEN-dələk" },
      { nl: "moeilijk", ko: "어려운", ipa: "MOOY-lək" },
      { nl: "makkelijk", ko: "쉬운", ipa: "MAK-kələk" },
      { nl: "leuk", ko: "재미있는/좋은", ipa: "뢰크" },
      { nl: "bedankt", ko: "고마워요", ipa: "be-DANKT" },
      { nl: "graag gedaan", ko: "천만에요", ipa: "흐라흐 허-DAN" }
    ],
    phrases: [
      { nl: "Het eten is lekker.", ko: "음식이 맛있어요.", ipa: "헛 AY-ten 이스 LEK-ker" },
      { nl: "Amsterdam is mooi.", ko: "암스테르담은 아름다워요.", ipa: "AM-ster-dam 이스 모이" },
      { nl: "U bent vriendelijk.", ko: "친절하시네요.", ipa: "위 벤트 VREEN-dələk" },
      { nl: "Dat is geweldig.", ko: "그거 훌륭하네요.", ipa: "닷 이스 허-WEL-d흐" },
      { nl: "Nederlands is moeilijk.", ko: "네덜란드어는 어려워요.", ipa: "NAY-der-lants 이스 MOOY-lək" },
      { nl: "Maar het is leuk.", ko: "하지만 재미있어요.", ipa: "마르 헛 이스 뢰크" }
    ],
    grammar: "형용사는 짧은 문장으로 바로 칭찬에 쓸 수 있습니다. Het is leuk, Dat is mooi처럼 말하면 됩니다. 네덜란드 사람들은 과장된 칭찬보다 솔직하고 구체적인 칭찬을 좋아하는 편이므로, 음식, 장소, 도움을 직접 언급하세요.",
    practice: [
      "음식, 도시, 직원의 친절함을 각각 칭찬해 보세요.",
      "네덜란드어가 어렵지만 재미있다고 말해 보세요."
    ]
  },
  {
    day: 27,
    title: "과거와 미래의 기본",
    titleNative: "Basis van verleden en toekomst",
    focus: "여행 이야기를 하려면 어제 무엇을 했고 내일 무엇을 할지 말할 수 있어야 합니다. 복잡한 시제보다 자주 쓰는 동사와 시간 단어로 시작합니다.",
    vocab: [
      { nl: "was", ko: "~이었다", ipa: "바스" },
      { nl: "had", ko: "가지고 있었다", ipa: "핫" },
      { nl: "ging", ko: "갔다", ipa: "힝" },
      { nl: "zag", ko: "보았다", ipa: "자흐" },
      { nl: "morgen", ko: "내일", ipa: "MOR-헌" },
      { nl: "gisteren", ko: "어제", ipa: "HIS-ter-en" },
      { nl: "gaan", ko: "가다", ipa: "한" },
      { nl: "zien", ko: "보다", ipa: "진" },
      { nl: "doen", ko: "하다", ipa: "둔" },
      { nl: "later", ko: "나중에", ipa: "LAH-ter" }
    ],
    phrases: [
      { nl: "Gisteren was leuk.", ko: "어제는 재미있었어요.", ipa: "HIS-ter-en 바스 뢰크" },
      { nl: "Ik ging naar het museum.", ko: "저는 박물관에 갔어요.", ipa: "익 힝 나르 헛 mu-ZAY-um" },
      { nl: "Ik zag de grachten.", ko: "저는 운하를 봤어요.", ipa: "익 자흐 더 HRACH-ten" },
      { nl: "Morgen ga ik fietsen.", ko: "내일 자전거를 탈 거예요.", ipa: "MOR-헌 하 익 FEET-sen" },
      { nl: "Later ga ik eten.", ko: "나중에 먹으러 갈 거예요.", ipa: "LAH-ter 하 익 AY-ten" },
      { nl: "Wat ga je doen?", ko: "무엇을 할 거야?", ipa: "밧 하 여 둔" }
    ],
    grammar: "미래는 gaan + 동사로 쉽게 만들 수 있습니다. Morgen ga ik fietsen은 ‘내일 자전거를 탈 거예요’입니다. 과거형은 동사마다 바뀌지만, 여행 초급 단계에서는 was, ging, zag 같은 자주 쓰는 형태만 먼저 외우면 충분합니다.",
    practice: [
      "어제 박물관에 갔다고 말하고 내일 자전거를 탈 거라고 말해 보세요.",
      "친구에게 내일 무엇을 할 것인지 물어보세요."
    ]
  },
  {
    day: 28,
    title: "잘 헤어지기",
    titleNative: "Goed afscheid nemen",
    focus: "좋은 작별 인사는 여행의 마지막 인상을 결정합니다. 카페, 호텔, 새로 만난 사람에게 자연스럽게 인사하고 감사하는 표현을 배웁니다.",
    vocab: [
      { nl: "doei", ko: "안녕", ipa: "두이" },
      { nl: "tot ziens", ko: "안녕히 가세요/또 봐요", ipa: "톳 zeens" },
      { nl: "tot morgen", ko: "내일 봐요", ipa: "톳 MOR-헌" },
      { nl: "tot straks", ko: "이따 봐요", ipa: "톳 스트락스" },
      { nl: "bedankt", ko: "고마워요", ipa: "be-DANKT" },
      { nl: "fijne dag", ko: "좋은 하루", ipa: "FAI-nuh 다흐" },
      { nl: "fijne avond", ko: "좋은 저녁", ipa: "FAI-nuh AH-font" },
      { nl: "reis", ko: "여행", ipa: "라이스" },
      { nl: "succes", ko: "행운을 빌어요", ipa: "suk-SES" },
      { nl: "contact", ko: "연락", ipa: "kon-TAKT" }
    ],
    phrases: [
      { nl: "Doei, tot ziens!", ko: "안녕, 또 봐요!", ipa: "두이, 톳 zeens" },
      { nl: "Bedankt voor alles.", ko: "모든 것에 감사합니다.", ipa: "be-DANKT 포르 AL-les" },
      { nl: "Fijne dag!", ko: "좋은 하루 보내세요!", ipa: "FAI-nuh 다흐" },
      { nl: "Fijne avond!", ko: "좋은 저녁 보내세요!", ipa: "FAI-nuh AH-font" },
      { nl: "Tot de volgende keer.", ko: "다음에 또 봐요.", ipa: "톳 더 VOL-헌-duh 케이르" },
      { nl: "Ik blijf in contact.", ko: "계속 연락할게요.", ipa: "익 블라이프 인 kon-TAKT" }
    ],
    grammar: "tot은 ‘~까지’라는 뜻이지만 인사에서는 ‘~때 다시 보자’의 느낌입니다. tot morgen, tot straks, tot ziens를 상황별로 쓰세요. doei는 친근한 작별 인사이고, 호텔이나 식당에서는 Fijne dag를 붙이면 매우 자연스럽습니다.",
    practice: [
      "호텔 직원에게 감사하고 좋은 하루를 빌어주는 문장을 말해 보세요.",
      "친구에게 다음에 또 보자고 말해 보세요."
    ]
  },
  {
    day: 29,
    title: "모두 연결하기",
    titleNative: "Alles samenbrengen",
    focus: "이제 여행 상황을 하나의 흐름으로 연결합니다. 도착, 카페, 길 찾기, 교통, 쇼핑, 작별까지 하루 전체를 네덜란드어로 구성합니다.",
    vocab: [
      { nl: "aankomen", ko: "도착하다", ipa: "AN-ko-men" },
      { nl: "beginnen", ko: "시작하다", ipa: "be-HIN-nen" },
      { nl: "vragen", ko: "묻다", ipa: "VRAH-헌" },
      { nl: "bestellen", ko: "주문하다", ipa: "be-STEL-len" },
      { nl: "betalen", ko: "계산하다", ipa: "be-TAH-len" },
      { nl: "zoeken", ko: "찾다", ipa: "ZOO-ken" },
      { nl: "vinden", ko: "찾아내다/생각하다", ipa: "VIN-den" },
      { nl: "lopen", ko: "걷다", ipa: "LO-pen" },
      { nl: "wachten", ko: "기다리다", ipa: "WACH-ten" },
      { nl: "eindigen", ko: "끝나다", ipa: "AIND-디-헌" }
    ],
    phrases: [
      { nl: "Ik kom aan in Amsterdam.", ko: "저는 암스테르담에 도착합니다.", ipa: "익 콤 안 인 AM-ster-dam" },
      { nl: "Ik zoek mijn hotel.", ko: "저는 제 호텔을 찾고 있어요.", ipa: "익 주크 마인 ho-TEL" },
      { nl: "Daarna bestel ik koffie.", ko: "그다음 커피를 주문해요.", ipa: "다르-NA be-STEL 익 KO-fi" },
      { nl: "Ik vraag de weg.", ko: "저는 길을 물어요.", ipa: "익 프라흐 더 베흐" },
      { nl: "Ik betaal met kaart.", ko: "저는 카드로 결제해요.", ipa: "익 be-TAAL 멧 카르트" },
      { nl: "Mijn dag eindigt goed.", ko: "제 하루는 잘 끝나요.", ipa: "마인 다흐 AIN-d흐트 후트" }
    ],
    grammar: "네덜란드어 문장 기본 순서는 주어 + 동사 + 나머지입니다. Ik zoek mijn hotel, Ik betaal met kaart처럼 짧게 유지하면 실수가 줄어듭니다. 하루 흐름을 말할 때 daarna(그다음)를 넣으면 문장들이 자연스럽게 연결됩니다.",
    practice: [
      "암스테르담 도착부터 카페 주문까지 4문장으로 말해 보세요.",
      "호텔 찾기, 길 묻기, 카드 결제를 포함한 하루 일기를 네덜란드어로 만들어 보세요."
    ]
  },
  {
    day: 30,
    title: "네덜란드 현지 팁과 최종 복습",
    titleNative: "Nederlandse tips en eindherhaling",
    focus: "마지막 날은 언어뿐 아니라 네덜란드식 문화 감각을 정리합니다. 커피 문화, 직접적인 말투, 낮은 팁 문화, OV-chipkaart, 한국어 화자가 헷갈릴 표현을 함께 복습합니다.",
    vocab: [
      { nl: "stroopwafel", ko: "스트룹와플", ipa: "STROPE-vah-fel" },
      { nl: "koffie", ko: "커피", ipa: "KO-fi" },
      { nl: "direct", ko: "직접적인", ipa: "di-REKT" },
      { nl: "fooi", ko: "팁", ipa: "포이" },
      { nl: "OV-chipkaart", ko: "대중교통 카드", ipa: "오-페이 CHIP-kart" },
      { nl: "gezellig", ko: "아늑하고 즐거운", ipa: "허-ZEL-l흐" },
      { nl: "gratis", ko: "무료", ipa: "HRAH-tis" },
      { nl: "winkel", ko: "상점", ipa: "WIN-kel" },
      { nl: "slim", ko: "똑똑한", ipa: "슬림" },
      { nl: "brutaal", ko: "무례한/건방진", ipa: "bru-TAAL" }
    ],
    phrases: [
      { nl: "Een stroopwafel bij de koffie, graag.", ko: "커피와 함께 스트룹와플 하나 주세요.", ipa: "에인 STROPE-vah-fel 바이 더 KO-fi, 흐라흐" },
      { nl: "Nederlanders zijn direct.", ko: "네덜란드 사람들은 직접적으로 말합니다.", ipa: "NAY-der-lan-ders 자인 di-REKT" },
      { nl: "Fooi is niet verplicht.", ko: "팁은 필수가 아닙니다.", ipa: "포이 이스 니트 fer-PLICHT" },
      { nl: "Kan ik mijn OV-chipkaart gebruiken?", ko: "제 OV-chipkaart를 사용할 수 있나요?", ipa: "칸 익 마인 오-페이 CHIP-kart 허-BRUI-ken" },
      { nl: "Dat klinkt gezellig.", ko: "그거 분위기 좋게 들리네요.", ipa: "닷 클링크트 허-ZEL-l흐" },
      { nl: "Ik blijf Nederlands oefenen.", ko: "저는 계속 네덜란드어를 연습할 거예요.", ipa: "익 블라이프 NAY-der-lants OO-fen-en" }
    ],
    grammar: "네덜란드에서는 커피와 stroopwafel 조합이 흔하고, 계산 시 팁은 낮거나 선택적입니다. 네덜란드식 direct함은 한국어 화자에게 차갑게 느껴질 수 있지만 보통 솔직함의 표현입니다. OV-chipkaart는 대중교통 카드이며, false friends로 slim은 ‘날씬한’이 아니라 ‘똑똑한’, brutaal은 ‘용감한’이 아니라 ‘무례한/건방진’에 가깝다는 점을 기억하세요.",
    practice: [
      "커피와 스트룹와플을 주문하고 카드 사용 가능 여부를 묻는 문장을 말해 보세요.",
      "네덜란드 직접 화법, 낮은 팁 문화, OV-chipkaart, false friends 두 개를 한국어로 설명해 보세요."
    ]
  }
];
```
