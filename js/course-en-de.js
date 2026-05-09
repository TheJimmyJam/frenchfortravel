// German course data — 30 days
// loaded by learn.html before app.js
// Note: field name "fr" = source language word (German here), "en" = English

// ============================================================
// COURSE DATA — 30 days of German
// ============================================================
const COURSE_DE = [
  { day:1, title:"Greetings & Politeness", titleNative:"Begrüßungen & Höflichkeit", focus:"The first words you'll say in Germany.",
    vocab:[
      {fr:"Hallo", ipa:"hah-loh", en:"Hello / Hi"},
      {fr:"Guten Morgen", ipa:"goo-ten mor-gen", en:"Good morning"},
      {fr:"Guten Tag", ipa:"goo-ten tahk", en:"Good day / Hello (formal)"},
      {fr:"Guten Abend", ipa:"goo-ten ah-bent", en:"Good evening"},
      {fr:"Tschüss", ipa:"chyoos", en:"Bye (casual)"},
      {fr:"Auf Wiedersehen", ipa:"owf vee-der-zayn", en:"Goodbye (formal)"},
      {fr:"Bitte", ipa:"bit-teh", en:"Please / You're welcome"},
      {fr:"Danke", ipa:"dahn-keh", en:"Thank you"},
      {fr:"Entschuldigung", ipa:"ent-shool-dee-goong", en:"Excuse me / Sorry"},
      {fr:"Bitte sehr", ipa:"bit-teh zayr", en:"You're very welcome"}
    ],
    phrases:[
      {fr:"Guten Morgen! Wie geht es Ihnen?", ipa:"goo-ten mor-gen vee gayt es ee-nen", en:"Good morning! How are you? (formal)"},
      {fr:"Gut, danke. Und Ihnen?", ipa:"goot dahn-keh oont ee-nen", en:"Well, thanks. And you?"},
      {fr:"Guten Tag, bitte schön.", ipa:"goo-ten tahk bit-teh shern", en:"Good day, how can I help you?"},
      {fr:"Auf Wiedersehen, bis morgen!", ipa:"owf vee-der-zayn bis mor-gen", en:"Goodbye, see you tomorrow!"},
      {fr:"Danke schön, bitte sehr.", ipa:"dahn-keh shern bit-teh zayr", en:"Thank you, you're welcome."},
      {fr:"Entschuldigung, hallo!", ipa:"ent-shool-dee-goong hah-loh", en:"Excuse me, hello!"},
      {fr:"Tschüss, bis später!", ipa:"chyoos bis shpay-ter", en:"Bye, see you later!"},
      {fr:"Danke, guten Abend.", ipa:"dahn-keh goo-ten ah-bent", en:"Thanks, good evening."}
    ],
    grammar:"German has formal (Sie) and informal (du) forms of address. With strangers, shopkeepers, or anyone older: always use 'Sie'. With friends and kids: use 'du'. Getting this wrong is noticed — stick to Sie until invited otherwise.",
    practice:["Say 'Guten Morgen' every morning this week — out loud.","Practice 'Entschuldigung' — it's your most useful single word in Germany."]
  },
  { day:2, title:"Yes, No & Basic Responses", titleNative:"Ja, Nein & Grundantworten", focus:"How to respond and keep a conversation moving.",
    vocab:[
      {fr:"Ja", ipa:"yah", en:"Yes"},
      {fr:"Nein", ipa:"nine", en:"No"},
      {fr:"Vielleicht", ipa:"fee-licht", en:"Maybe"},
      {fr:"Okay / In Ordnung", ipa:"oh-kay / in ord-noong", en:"OK / Alright"},
      {fr:"Natürlich", ipa:"nah-toor-lich", en:"Of course"},
      {fr:"Ich verstehe", ipa:"ich fer-shtay-eh", en:"I understand"},
      {fr:"Ich verstehe nicht", ipa:"ich fer-shtay-eh nicht", en:"I don't understand"},
      {fr:"Sprechen Sie Englisch?", ipa:"shprech-en zee eng-lish", en:"Do you speak English?"},
      {fr:"Ein bisschen", ipa:"ine bis-shen", en:"A little"},
      {fr:"Überhaupt nicht", ipa:"oo-ber-howpt nicht", en:"Not at all"}
    ],
    phrases:[
      {fr:"Entschuldigung, ich spreche kein Deutsch.", ipa:"ent-shool-dee-goong ich shprech-eh kine doytch", en:"Sorry, I don't speak German."},
      {fr:"Können Sie das wiederholen?", ipa:"kern-en zee das vee-der-hoh-len", en:"Can you repeat that?"},
      {fr:"Sprechen Sie Englisch?", ipa:"shprech-en zee eng-lish", en:"Do you speak English?"},
      {fr:"Bitte sprechen Sie langsamer.", ipa:"bit-teh shprech-en zee lahng-zah-mer", en:"Please speak more slowly."},
      {fr:"Ja, natürlich!", ipa:"yah nah-toor-lich", en:"Yes, of course!"},
      {fr:"Nein, danke.", ipa:"nine dahn-keh", en:"No, thank you."},
      {fr:"Okay, kein Problem.", ipa:"oh-kay kine pro-blaym", en:"OK, no problem."},
      {fr:"Ich verstehe nicht, Entschuldigung.", ipa:"ich fer-shtay-eh nicht ent-shool-dee-goong", en:"I don't understand, sorry."}
    ],
    grammar:"Negation in German uses 'nicht' (not) or 'kein' (no/not a). 'Ich spreche Deutsch' → 'Ich spreche KEIN Deutsch' (no German / none). 'Ich verstehe' → 'Ich verstehe NICHT' (I don't understand). Kein negates nouns; nicht negates verbs and adjectives.",
    practice:["Practice 'Können Sie das wiederholen?' — your lifeline when lost.","Say 'Ich verstehe nicht' three times out loud until it flows."]
  },
  { day:3, title:"Introducing Yourself", titleNative:"Sich Vorstellen", focus:"Tell people who you are.",
    vocab:[
      {fr:"Ich heiße", ipa:"ich high-seh", en:"My name is"},
      {fr:"Ich bin", ipa:"ich bin", en:"I am"},
      {fr:"Amerikaner / Amerikanerin", ipa:"ah-meh-ree-kah-ner / -in", en:"American (m/f)"},
      {fr:"aus Dallas", ipa:"owss dah-lass", en:"from Dallas"},
      {fr:"Und Sie?", ipa:"oont zee", en:"And you? (formal)"},
      {fr:"Freut mich", ipa:"froyt mich", en:"Nice to meet you"},
      {fr:"ein Freund / eine Freundin", ipa:"ine froynt / ine-eh froyn-din", en:"a friend (m/f)"},
      {fr:"Wie heißen Sie?", ipa:"vee high-sen zee", en:"What is your name?"},
      {fr:"Woher kommen Sie?", ipa:"voh-hayr kom-en zee", en:"Where are you from?"},
      {fr:"Das ist...", ipa:"das ist", en:"This is..."}
    ],
    phrases:[
      {fr:"Guten Tag, ich heiße Jimmy.", ipa:"goo-ten tahk ich high-seh jimmy", en:"Good day, my name is Jimmy."},
      {fr:"Ich bin Amerikaner, aus Dallas.", ipa:"ich bin ah-meh-ree-kah-ner owss dah-lass", en:"I'm American, from Dallas."},
      {fr:"Freut mich, Sie kennenzulernen.", ipa:"froyt mich zee ken-en-tsoo-lair-nen", en:"Pleased to meet you."},
      {fr:"Wie heißen Sie?", ipa:"vee high-sen zee", en:"What is your name?"},
      {fr:"Woher kommen Sie?", ipa:"voh-hayr kom-en zee", en:"Where are you from?"},
      {fr:"Ich bin im Urlaub in Berlin.", ipa:"ich bin im oor-lowb in bair-leen", en:"I'm on vacation in Berlin."},
      {fr:"Das ist mein Freund.", ipa:"das ist mine froynt", en:"This is my friend."},
      {fr:"Ich komme aus den USA.", ipa:"ich kom-eh owss dayn oo-es-ah", en:"I come from the USA."}
    ],
    grammar:"German nouns have grammatical gender: der (masc), die (fem), das (neuter). 'Freund' (male friend) uses 'ein Freund', 'Freundin' (female friend) uses 'eine Freundin'. Don't panic about getting gender perfect — just communicate and you'll absorb it over time.",
    practice:["Write out your intro: 'Ich heiße [name], ich bin Amerikaner, aus Dallas.'","Say it out loud five times until it's automatic."]
  },
  { day:4, title:"Numbers 1–20", titleNative:"Zahlen 1–20", focus:"Count, pay, and tell time.",
    vocab:[
      {fr:"eins, zwei, drei", ipa:"ines tsvy dry", en:"one, two, three"},
      {fr:"vier, fünf, sechs", ipa:"feer foonf zex", en:"four, five, six"},
      {fr:"sieben, acht, neun", ipa:"zee-ben akht noyn", en:"seven, eight, nine"},
      {fr:"zehn, elf, zwölf", ipa:"tsayn elf tsverlf", en:"ten, eleven, twelve"},
      {fr:"dreizehn, vierzehn, fünfzehn", ipa:"dry-tsayn feer-tsayn foonf-tsayn", en:"thirteen, fourteen, fifteen"},
      {fr:"sechzehn, siebzehn, achtzehn", ipa:"zech-tsayn zeep-tsayn acht-tsayn", en:"sixteen, seventeen, eighteen"},
      {fr:"neunzehn, zwanzig", ipa:"noyn-tsayn tsvan-tsig", en:"nineteen, twenty"},
      {fr:"Wie viel kostet das?", ipa:"vee feel kos-tet das", en:"How much does that cost?"},
      {fr:"Das macht...", ipa:"das makht", en:"That comes to..."},
      {fr:"Euro / Cent", ipa:"oy-roh / sent", en:"Euro / Cent"}
    ],
    phrases:[
      {fr:"Wie viel kostet das?", ipa:"vee feel kos-tet das", en:"How much does that cost?"},
      {fr:"Das macht zehn Euro.", ipa:"das makht tsayn oy-roh", en:"That comes to ten euros."},
      {fr:"Ich hätte gern zwei Kaffee.", ipa:"ich het-eh gairn tsvy kah-feh", en:"I'd like two coffees."},
      {fr:"Tisch für drei Personen, bitte.", ipa:"tish foor dry pair-zoh-nen bit-teh", en:"Table for three, please."},
      {fr:"Zimmer Nummer acht.", ipa:"tsim-er noom-er akht", en:"Room number eight."},
      {fr:"Fünf Euro, bitte.", ipa:"foonf oy-roh bit-teh", en:"Five euros, please."},
      {fr:"Auf Wiedersehen — bis Seite zwanzig!", ipa:"owf vee-der-zayn bis zy-teh tsvan-tsig", en:"Goodbye — see you on page twenty!"},
      {fr:"Ich brauche zwei Fahrkarten.", ipa:"ich brow-kheh tsvy fahr-kar-ten", en:"I need two tickets."}
    ],
    grammar:"German number compound rules: 21 = einundzwanzig (one-and-twenty), 32 = zweiunddreißig. The ones digit comes first, joined with 'und'. 'Dreißig' (30) is irregular — not dreißzig. 100 = hundert, 1000 = tausend.",
    practice:["Count from 1 to 20 out loud, twice.","Drill: how do you say your hotel room number? Your table size?"]
  },
  { day:5, title:"Food & Ordering", titleNative:"Essen & Bestellen", focus:"Order food and drinks like a local.",
    vocab:[
      {fr:"das Frühstück", ipa:"das froo-shtook", en:"breakfast"},
      {fr:"das Mittagessen", ipa:"das mit-tahk-es-sen", en:"lunch"},
      {fr:"das Abendessen", ipa:"das ah-bent-es-sen", en:"dinner"},
      {fr:"der Kaffee", ipa:"dair kah-feh", en:"coffee"},
      {fr:"das Bier", ipa:"das beer", en:"beer"},
      {fr:"das Wasser", ipa:"das vas-er", en:"water"},
      {fr:"die Speisekarte", ipa:"dee shpy-zeh-kar-teh", en:"the menu"},
      {fr:"Ich hätte gern...", ipa:"ich het-eh gairn", en:"I'd like..."},
      {fr:"lecker", ipa:"lek-er", en:"delicious / tasty"},
      {fr:"die Rechnung", ipa:"dee rech-noong", en:"the bill"}
    ],
    phrases:[
      {fr:"Einen Kaffee, bitte.", ipa:"ine-en kah-feh bit-teh", en:"A coffee, please."},
      {fr:"Die Speisekarte, bitte.", ipa:"dee shpy-zeh-kar-teh bit-teh", en:"The menu, please."},
      {fr:"Ich hätte gern das Schnitzel.", ipa:"ich het-eh gairn das shnit-sel", en:"I'd like the schnitzel."},
      {fr:"Was empfehlen Sie?", ipa:"vas emp-fay-len zee", en:"What do you recommend?"},
      {fr:"Das war sehr lecker!", ipa:"das vahr zayr lek-er", en:"That was very delicious!"},
      {fr:"Die Rechnung, bitte.", ipa:"dee rech-noong bit-teh", en:"The bill, please."},
      {fr:"Zahlen, bitte!", ipa:"tsah-len bit-teh", en:"To pay, please!"},
      {fr:"Ein Bier und ein Wasser, bitte.", ipa:"ine beer oont ine vas-er bit-teh", en:"A beer and a water, please."}
    ],
    grammar:"'Ich hätte gern' is your go-to ordering phrase — it's polite and universally understood. Literally 'I would have gladly.' You can drop any noun after it: 'Ich hätte gern einen Kaffee' (a coffee). The article changes by gender: einen (masc), eine (fem), ein (neuter).",
    practice:["Mentally walk through ordering breakfast in German.","Practice 'Zahlen, bitte!' — it's how you flag your waiter for the check."]
  },
  { day:6, title:"Getting Around", titleNative:"Sich Zurechtfinden", focus:"Navigate cities, stations, and streets.",
    vocab:[
      {fr:"der Bahnhof", ipa:"dair bahn-hohf", en:"train station"},
      {fr:"die U-Bahn", ipa:"dee oo-bahn", en:"subway / metro"},
      {fr:"der Bus", ipa:"dair boos", en:"bus"},
      {fr:"links / rechts", ipa:"links / rechts", en:"left / right"},
      {fr:"geradeaus", ipa:"geh-rah-deh-owss", en:"straight ahead"},
      {fr:"Wo ist...?", ipa:"voh ist", en:"Where is...?"},
      {fr:"Wie weit ist es?", ipa:"vee vyt ist es", en:"How far is it?"},
      {fr:"die Straße", ipa:"dee shtrah-seh", en:"the street"},
      {fr:"der Ausgang", ipa:"dair owss-gang", en:"the exit"},
      {fr:"der Eingang", ipa:"dair ine-gang", en:"the entrance"}
    ],
    phrases:[
      {fr:"Wo ist der Bahnhof?", ipa:"voh ist dair bahn-hohf", en:"Where is the train station?"},
      {fr:"Wie komme ich zum Hotel?", ipa:"vee kom-eh ich tsoom hoh-tel", en:"How do I get to the hotel?"},
      {fr:"Biegen Sie links ab.", ipa:"bee-gen zee links ahp", en:"Turn left."},
      {fr:"Geradeaus bis zur Ampel.", ipa:"geh-rah-deh-owss bis tsoor am-pel", en:"Straight ahead to the traffic light."},
      {fr:"Wie weit ist es zu Fuß?", ipa:"vee vyt ist es tsoo foos", en:"How far is it on foot?"},
      {fr:"Gibt es hier eine U-Bahn?", ipa:"gipt es heer ine-eh oo-bahn", en:"Is there a subway here?"},
      {fr:"Wo ist der Ausgang?", ipa:"voh ist dair owss-gang", en:"Where is the exit?"},
      {fr:"Ich suche die Friedrichstraße.", ipa:"ich zoo-kheh dee freed-rich-shtrah-seh", en:"I'm looking for Friedrichstraße."}
    ],
    grammar:"German directions use reflexive phrasing: 'Wie komme ich...' (How do I get...). 'Zum' = zu + dem (to the, masc/neuter). 'Zur' = zu + der (to the, fem). So: 'zum Bahnhof' (to the station, masc) vs. 'zur Ampel' (to the light, fem).",
    practice:["Learn 'Wo ist...?' cold — it works for anything.","Practice: 'Biegen Sie links ab, dann geradeaus' (Turn left, then straight ahead)."]
  },
  { day:7, title:"Shopping", titleNative:"Einkaufen", focus:"Buy things without panic.",
    vocab:[
      {fr:"der Laden / das Geschäft", ipa:"dair lah-den / das geh-sheft", en:"the shop / store"},
      {fr:"Ich suche...", ipa:"ich zoo-kheh", en:"I'm looking for..."},
      {fr:"Haben Sie...?", ipa:"hah-ben zee", en:"Do you have...?"},
      {fr:"die Größe", ipa:"dee grer-seh", en:"the size"},
      {fr:"zu groß / zu klein", ipa:"tsoo grohss / tsoo kline", en:"too big / too small"},
      {fr:"der Preis", ipa:"dair pryce", en:"the price"},
      {fr:"teuer / günstig", ipa:"toy-er / goons-tig", en:"expensive / cheap"},
      {fr:"Ich nehme das.", ipa:"ich nay-meh das", en:"I'll take it."},
      {fr:"Kann ich das anprobieren?", ipa:"kan ich das an-pro-beer-en", en:"Can I try this on?"},
      {fr:"die Umkleidekabine", ipa:"dee oom-kly-deh-kah-bee-neh", en:"the fitting room"}
    ],
    phrases:[
      {fr:"Haben Sie das in Größe M?", ipa:"hah-ben zee das in grer-seh em", en:"Do you have this in size M?"},
      {fr:"Kann ich das anprobieren?", ipa:"kan ich das an-pro-beer-en", en:"Can I try this on?"},
      {fr:"Wie viel kostet das?", ipa:"vee feel kos-tet das", en:"How much is this?"},
      {fr:"Das ist mir zu teuer.", ipa:"das ist meer tsoo toy-er", en:"That's too expensive for me."},
      {fr:"Haben Sie etwas Günstigeres?", ipa:"hah-ben zee et-vas goons-tig-er-es", en:"Do you have something cheaper?"},
      {fr:"Ich nehme das.", ipa:"ich nay-meh das", en:"I'll take it."},
      {fr:"Ich schaue mich nur um.", ipa:"ich show-eh mich noor oom", en:"I'm just looking around."},
      {fr:"Wo ist die Umkleidekabine?", ipa:"voh ist dee oom-kly-deh-kah-bee-neh", en:"Where is the fitting room?"}
    ],
    grammar:"'Ich schaue mich nur um' (I'm just looking around) is your pressure-free opener in any shop. Note the reflexive pronoun 'mich' — German uses these constantly. You don't need to master them now; just learn these phrases as complete units.",
    practice:["Say 'Ich schaue mich nur um' out loud — your no-pressure shop opener.","Practice: 'Haben Sie das in...?' — insert any size, color, or style you want."]
  },
  { day:8, title:"Time & Days", titleNative:"Zeit & Wochentage", focus:"Tell and ask the time, plan your week.",
    vocab:[
      {fr:"Wie spät ist es?", ipa:"vee shpayt ist es", en:"What time is it?"},
      {fr:"Es ist... Uhr", ipa:"es ist ... oor", en:"It's ... o'clock"},
      {fr:"Montag / Dienstag", ipa:"mohn-tahk / deens-tahk", en:"Monday / Tuesday"},
      {fr:"Mittwoch / Donnerstag", ipa:"mit-vokh / don-ers-tahk", en:"Wednesday / Thursday"},
      {fr:"Freitag / Samstag", ipa:"fry-tahk / zahm-stahk", en:"Friday / Saturday"},
      {fr:"Sonntag", ipa:"zon-tahk", en:"Sunday"},
      {fr:"heute / morgen / gestern", ipa:"hoy-teh / mor-gen / ges-tern", en:"today / tomorrow / yesterday"},
      {fr:"früh / spät", ipa:"froo / shpayt", en:"early / late"},
      {fr:"die Woche", ipa:"dee vokh-eh", en:"the week"},
      {fr:"das Wochenende", ipa:"das vokh-en-en-deh", en:"the weekend"}
    ],
    phrases:[
      {fr:"Wie spät ist es?", ipa:"vee shpayt ist es", en:"What time is it?"},
      {fr:"Es ist halb drei.", ipa:"es ist halp dry", en:"It's half past two. (2:30)"},
      {fr:"Um wie viel Uhr öffnet das?", ipa:"oom vee feel oor erf-net das", en:"What time does that open?"},
      {fr:"Der Zug fährt um neun Uhr ab.", ipa:"dair tsoog fairt oom noyn oor ahp", en:"The train leaves at nine."},
      {fr:"Wir treffen uns am Freitag.", ipa:"veer tref-fen oons am fry-tahk", en:"We're meeting on Friday."},
      {fr:"Heute Abend bin ich frei.", ipa:"hoy-teh ah-bent bin ich fry", en:"I'm free this evening."},
      {fr:"Gute Nacht, bis morgen!", ipa:"goo-teh nakht bis mor-gen", en:"Good night, see you tomorrow!"},
      {fr:"Das Wochenende beginnt am Freitag.", ipa:"das vokh-en-en-deh beh-gint am fry-tahk", en:"The weekend starts on Friday."}
    ],
    grammar:"German time has a quirk: 'halb drei' means 2:30, not 3:30 — it's 'half of three' (halfway to three). So halb vier = 3:30, halb acht = 7:30. Viertel vor = quarter to. Viertel nach = quarter past.",
    practice:["Learn 'halb' time — it's backwards from English and trips everyone up.","Drill the days of the week until Mittwoch (Wednesday) doesn't slow you down."]
  },
  { day:9, title:"At the Hotel", titleNative:"Im Hotel", focus:"Check in, ask questions, get what you need.",
    vocab:[
      {fr:"die Reservierung", ipa:"dee reh-zer-vee-roong", en:"the reservation"},
      {fr:"das Zimmer", ipa:"das tsim-er", en:"the room"},
      {fr:"der Schlüssel", ipa:"dair shloos-sel", en:"the key"},
      {fr:"das Frühstück", ipa:"das froo-shtook", en:"breakfast"},
      {fr:"der Aufzug", ipa:"dair owf-tsook", en:"the elevator"},
      {fr:"das WLAN", ipa:"das vay-lahn", en:"WiFi"},
      {fr:"das Passwort", ipa:"das pas-vort", en:"the password"},
      {fr:"einchecken / auschecken", ipa:"ine-chek-en / owss-chek-en", en:"check in / check out"},
      {fr:"die Etage", ipa:"dee eh-tah-zheh", en:"the floor / level"},
      {fr:"stören", ipa:"shter-en", en:"to disturb"}
    ],
    phrases:[
      {fr:"Ich habe eine Reservierung auf den Namen Cannon.", ipa:"ich hah-beh ine-eh reh-zer-vee-roong owf dayn nah-men cannon", en:"I have a reservation under the name Cannon."},
      {fr:"Um wie viel Uhr ist das Frühstück?", ipa:"oom vee feel oor ist das froo-shtook", en:"What time is breakfast?"},
      {fr:"Wo ist der Aufzug?", ipa:"voh ist dair owf-tsook", en:"Where is the elevator?"},
      {fr:"Was ist das WLAN-Passwort?", ipa:"vas ist das vay-lahn-pas-vort", en:"What is the WiFi password?"},
      {fr:"Ich möchte auschecken.", ipa:"ich merch-teh owss-chek-en", en:"I'd like to check out."},
      {fr:"Kann ich das Zimmer wechseln?", ipa:"kan ich das tsim-er vek-seln", en:"Can I change rooms?"},
      {fr:"Bitte nicht stören.", ipa:"bit-teh nicht shter-en", en:"Do not disturb."},
      {fr:"Das Zimmer ist sehr schön.", ipa:"das tsim-er ist zayr shern", en:"The room is very nice."}
    ],
    grammar:"'Möchten' (would like) is your polite request engine. 'Ich möchte' + infinitive = super-polite. 'Ich möchte auschecken' (I'd like to check out). 'Ich möchte bestellen' (I'd like to order). Learn this construction and you can request nearly anything.",
    practice:["Say your hotel intro: 'Ich habe eine Reservierung auf den Namen [your name].'","Practice 'Was ist das WLAN-Passwort?' — you'll need it immediately."]
  },
  { day:10, title:"Emergencies & Health", titleNative:"Notfälle & Gesundheit", focus:"Handling the unexpected.",
    vocab:[
      {fr:"Hilfe!", ipa:"hil-feh", en:"Help!"},
      {fr:"Notruf", ipa:"noht-roof", en:"emergency call"},
      {fr:"die Polizei", ipa:"dee poh-lee-tsy", en:"the police"},
      {fr:"der Arzt / die Ärztin", ipa:"dair artst / dee airtz-tin", en:"the doctor (m/f)"},
      {fr:"das Krankenhaus", ipa:"das kran-ken-howss", en:"the hospital"},
      {fr:"die Apotheke", ipa:"dee ah-poh-tay-keh", en:"the pharmacy"},
      {fr:"Ich bin verletzt.", ipa:"ich bin fer-letst", en:"I am injured."},
      {fr:"Mir ist schlecht.", ipa:"meer ist shlecht", en:"I feel sick."},
      {fr:"Kopfschmerzen", ipa:"kopf-shmair-tsen", en:"headache"},
      {fr:"Ich brauche einen Arzt.", ipa:"ich brow-kheh ine-en artst", en:"I need a doctor."}
    ],
    phrases:[
      {fr:"Hilfe! Rufen Sie die Polizei!", ipa:"hil-feh roo-fen zee dee poh-lee-tsy", en:"Help! Call the police!"},
      {fr:"Ich brauche einen Arzt.", ipa:"ich brow-kheh ine-en artst", en:"I need a doctor."},
      {fr:"Wo ist die nächste Apotheke?", ipa:"voh ist dee naych-steh ah-poh-tay-keh", en:"Where is the nearest pharmacy?"},
      {fr:"Mir ist schlecht.", ipa:"meer ist shlecht", en:"I feel sick."},
      {fr:"Ich habe Kopfschmerzen.", ipa:"ich hah-beh kopf-shmair-tsen", en:"I have a headache."},
      {fr:"Bitte rufen Sie einen Krankenwagen.", ipa:"bit-teh roo-fen zee ine-en kran-ken-vah-gen", en:"Please call an ambulance."},
      {fr:"Wo ist das Krankenhaus?", ipa:"voh ist das kran-ken-howss", en:"Where is the hospital?"},
      {fr:"Ich habe mein Portemonnaie verloren.", ipa:"ich hah-beh mine por-teh-moh-nay fer-loh-ren", en:"I've lost my wallet."}
    ],
    grammar:"Emergency numbers in Germany: 110 (Police), 112 (Fire/Ambulance — also works across all EU). 'Notruf 112' is pan-European. Save it in your phone before you travel.",
    practice:["Memorize: 110 = Polizei, 112 = Feuerwehr/Krankenwagen.","Say 'Ich brauche einen Arzt' and 'Wo ist die Apotheke?' until automatic."]
  },
  { day:11, title:"Weather & Small Talk", titleNative:"Wetter & Smalltalk", focus:"Make conversation beyond transactions.",
    vocab:[
      {fr:"das Wetter", ipa:"das vet-er", en:"the weather"},
      {fr:"Es regnet.", ipa:"es rayg-net", en:"It's raining."},
      {fr:"Es ist sonnig.", ipa:"es ist zon-nig", en:"It's sunny."},
      {fr:"kalt / warm / heiß", ipa:"kalt / varm / hice", en:"cold / warm / hot"},
      {fr:"der Regen", ipa:"dair ray-gen", en:"the rain"},
      {fr:"der Schnee", ipa:"dair shnay", en:"the snow"},
      {fr:"bewölkt", ipa:"beh-verlkt", en:"cloudy"},
      {fr:"Wie ist das Wetter heute?", ipa:"vee ist das vet-er hoy-teh", en:"What's the weather like today?"},
      {fr:"typisch", ipa:"too-pish", en:"typical"},
      {fr:"Schönes Wetter!", ipa:"shern-es vet-er", en:"Nice weather!"}
    ],
    phrases:[
      {fr:"Wie ist das Wetter heute?", ipa:"vee ist das vet-er hoy-teh", en:"What's the weather like today?"},
      {fr:"Es ist sehr kalt heute.", ipa:"es ist zayr kalt hoy-teh", en:"It's very cold today."},
      {fr:"Typisch Berlin!", ipa:"too-pish bair-leen", en:"Typical Berlin!"},
      {fr:"Schönes Wetter für einen Spaziergang.", ipa:"shern-es vet-er foor ine-en shpah-tseer-gang", en:"Nice weather for a walk."},
      {fr:"Ich mag den Regen nicht.", ipa:"ich mahk dayn ray-gen nicht", en:"I don't like the rain."},
      {fr:"Wird es morgen besser?", ipa:"virt es mor-gen bes-er", en:"Will it be better tomorrow?"},
      {fr:"Das Wetter in Dallas ist viel heißer!", ipa:"das vet-er in dah-lass ist feel high-ser", en:"The weather in Dallas is much hotter!"},
      {fr:"Zum Glück habe ich einen Schirm.", ipa:"tsoom glook hah-beh ich ine-en shirm", en:"Luckily I have an umbrella."}
    ],
    grammar:"Weather phrases use impersonal 'Es' (it): 'Es regnet' (it rains), 'Es schneit' (it snows), 'Es ist kalt' (it is cold). This is the same pattern in English — no subject required. Easiest grammar day of the course.",
    practice:["Weather is the universal German conversation starter — Germans talk about it constantly.","Learn 'Typisch [city name]!' — locals love it when foreigners use local phrases."]
  },
  { day:12, title:"Directions & Transport", titleNative:"Wegbeschreibung & Verkehr", focus:"Get from A to B confidently.",
    vocab:[
      {fr:"der Zug", ipa:"dair tsook", en:"the train"},
      {fr:"die Fahrkarte", ipa:"dee fahr-kar-teh", en:"the ticket"},
      {fr:"der Gleis", ipa:"dair glice", en:"the platform / track"},
      {fr:"abfahren / ankommen", ipa:"ahp-fah-ren / an-kom-en", en:"to depart / to arrive"},
      {fr:"verpassen", ipa:"fer-pas-en", en:"to miss (a train)"},
      {fr:"umsteigen", ipa:"oom-shty-gen", en:"to transfer / change trains"},
      {fr:"die Haltestelle", ipa:"dee hal-teh-shtel-eh", en:"the stop (bus/tram)"},
      {fr:"das Ticket", ipa:"das tik-et", en:"the ticket"},
      {fr:"einfach / hin und zurück", ipa:"ine-fakh / hin oont tsoo-rook", en:"one-way / round trip"},
      {fr:"der Taxistand", ipa:"dair tak-see-shtant", en:"the taxi stand"}
    ],
    phrases:[
      {fr:"Wann fährt der nächste Zug nach München?", ipa:"van fairt dair naych-steh tsook nakh moon-khen", en:"When does the next train to Munich leave?"},
      {fr:"Einmal nach Berlin, bitte.", ipa:"ine-mahl nakh bair-leen bit-teh", en:"One ticket to Berlin, please."},
      {fr:"Einfach oder hin und zurück?", ipa:"ine-fakh oh-der hin oont tsoo-rook", en:"One-way or round trip?"},
      {fr:"Muss ich umsteigen?", ipa:"moos ich oom-shty-gen", en:"Do I need to change trains?"},
      {fr:"Von welchem Gleis fährt der Zug ab?", ipa:"fon vel-khem glice fairt dair tsook ahp", en:"Which platform does the train leave from?"},
      {fr:"Ich habe meinen Zug verpasst.", ipa:"ich hah-beh mine-en tsook fer-past", en:"I missed my train."},
      {fr:"Wo ist die nächste Haltestelle?", ipa:"voh ist dee naych-steh hal-teh-shtel-eh", en:"Where is the nearest stop?"},
      {fr:"Bitte ein Taxi zum Flughafen.", ipa:"bit-teh ine tak-see tsoom flook-hah-fen", en:"A taxi to the airport, please."}
    ],
    grammar:"German verbs in questions invert: 'Fährt der Zug?' (Does the train go?) vs. 'Der Zug fährt' (The train goes). This inversion is the standard question form — verb comes second in statements, first in yes/no questions.",
    practice:["Practice 'Wann fährt der nächste Zug nach...?' — plug in any city.","'Muss ich umsteigen?' is the most useful train question you'll ask."]
  },
  { day:13, title:"At a Restaurant", titleNative:"Im Restaurant", focus:"The full restaurant experience in German.",
    vocab:[
      {fr:"der Kellner / die Kellnerin", ipa:"dair kel-ner / dee kel-ner-in", en:"the waiter / waitress"},
      {fr:"das Gericht", ipa:"das geh-richt", en:"the dish"},
      {fr:"die Vorspeise", ipa:"dee for-shpy-zeh", en:"the starter"},
      {fr:"das Hauptgericht", ipa:"das howpt-geh-richt", en:"the main course"},
      {fr:"die Nachspeise", ipa:"dee nakh-shpy-zeh", en:"the dessert"},
      {fr:"gut durch / medium", ipa:"goot doorkh / may-dyoom", en:"well done / medium"},
      {fr:"ohne / mit", ipa:"oh-neh / mit", en:"without / with"},
      {fr:"vegetarisch", ipa:"veh-geh-tah-rish", en:"vegetarian"},
      {fr:"allergisch gegen", ipa:"ah-lair-gish gay-gen", en:"allergic to"},
      {fr:"Es hat mir sehr geschmeckt.", ipa:"es hat meer zayr geh-shmekt", en:"I really enjoyed it."}
    ],
    phrases:[
      {fr:"Einen Tisch für zwei, bitte.", ipa:"ine-en tish foor tsvy bit-teh", en:"A table for two, please."},
      {fr:"Was empfehlen Sie heute?", ipa:"vas emp-fay-len zee hoy-teh", en:"What do you recommend today?"},
      {fr:"Ich bin Vegetarier. Haben Sie etwas ohne Fleisch?", ipa:"ich bin veh-geh-tah-ree-er hah-ben zee et-vas oh-neh flysh", en:"I'm vegetarian. Do you have something without meat?"},
      {fr:"Ich bin allergisch gegen Nüsse.", ipa:"ich bin ah-lair-gish gay-gen noos-seh", en:"I'm allergic to nuts."},
      {fr:"Das Schnitzel, bitte — medium.", ipa:"das shnit-sel bit-teh may-dyoom", en:"The schnitzel, please — medium."},
      {fr:"Noch ein Bier, bitte.", ipa:"nokh ine beer bit-teh", en:"Another beer, please."},
      {fr:"Es hat mir sehr geschmeckt!", ipa:"es hat meer zayr geh-shmekt", en:"I really enjoyed the food!"},
      {fr:"Die Rechnung, bitte.", ipa:"dee rech-noong bit-teh", en:"The bill, please."}
    ],
    grammar:"In Germany, splitting the bill ('getrennt zahlen') is completely normal and expected. Just say 'Getrennt, bitte' when you want to pay separately. Also: tips are appreciated but not mandatory — 10% is generous, rounding up is common.",
    practice:["Learn 'Es hat mir sehr geschmeckt' — German hosts love hearing it.","Practice the full restaurant flow: arrive → order → eat → compliment → pay."]
  },
  { day:14, title:"Family & People", titleNative:"Familie & Menschen", focus:"Talk about the people in your life.",
    vocab:[
      {fr:"die Familie", ipa:"dee fah-mee-lee-eh", en:"the family"},
      {fr:"der Mann / die Frau", ipa:"dair man / dee frow", en:"the husband / wife"},
      {fr:"der Sohn / die Tochter", ipa:"dair zohn / dee tokh-ter", en:"the son / daughter"},
      {fr:"der Bruder / die Schwester", ipa:"dair broo-der / dee shves-ter", en:"the brother / sister"},
      {fr:"die Eltern", ipa:"dee el-tern", en:"the parents"},
      {fr:"der Freund / die Freundin", ipa:"dair froynt / dee froyn-din", en:"boyfriend / girlfriend"},
      {fr:"jung / alt", ipa:"yoong / alt", en:"young / old"},
      {fr:"verheiratet / ledig", ipa:"fer-hy-rah-tet / lay-dig", en:"married / single"},
      {fr:"Kinder", ipa:"kin-der", en:"children / kids"},
      {fr:"Ich habe... Kinder.", ipa:"ich hah-beh kin-der", en:"I have ... children."}
    ],
    phrases:[
      {fr:"Haben Sie Kinder?", ipa:"hah-ben zee kin-der", en:"Do you have children?"},
      {fr:"Ich bin verheiratet.", ipa:"ich bin fer-hy-rah-tet", en:"I'm married."},
      {fr:"Das ist meine Frau.", ipa:"das ist my-neh frow", en:"This is my wife."},
      {fr:"Mein Sohn ist fünf Jahre alt.", ipa:"mine zohn ist foonf yah-reh alt", en:"My son is five years old."},
      {fr:"Ich habe zwei Geschwister.", ipa:"ich hah-beh tsvy geh-shvis-ter", en:"I have two siblings."},
      {fr:"Meine Familie ist in Texas.", ipa:"my-neh fah-mee-lee-eh ist in tek-sass", en:"My family is in Texas."},
      {fr:"Wie alt sind Ihre Kinder?", ipa:"vee alt zint ee-reh kin-der", en:"How old are your children?"},
      {fr:"Ich bin ledig.", ipa:"ich bin lay-dig", en:"I'm single."}
    ],
    grammar:"Possessives in German: mein (my, masc/neuter), meine (my, fem/plural). 'Mein Sohn' (my son, masc). 'Meine Frau' (my wife, fem). 'Meine Kinder' (my children, plural). The pattern: add -e for feminine and plural.",
    practice:["Describe your family in 3 sentences in German.","Practice: 'Das ist mein/meine [family member]' for each person you might introduce."]
  },
  { day:15, title:"Midpoint Review: Real Conversations", titleNative:"Halbzeit: Echte Gespräche", focus:"Pull everything together. You've got this.",
    vocab:[
      {fr:"Wie lange bleiben Sie?", ipa:"vee lang-eh bly-ben zee", en:"How long are you staying?"},
      {fr:"Ich bleibe eine Woche.", ipa:"ich bly-beh ine-eh vokh-eh", en:"I'm staying one week."},
      {fr:"Es gefällt mir hier sehr.", ipa:"es geh-felt meer heer zayr", en:"I really like it here."},
      {fr:"Was gibt es hier zu sehen?", ipa:"vas gipt es heer tsoo zay-en", en:"What is there to see here?"},
      {fr:"Ich empfehle...", ipa:"ich emp-fay-leh", en:"I recommend..."},
      {fr:"Das ist wunderschön.", ipa:"das ist voon-der-shern", en:"That's beautiful."},
      {fr:"Ich lerne gerade Deutsch.", ipa:"ich lair-neh geh-rah-deh doytch", en:"I'm currently learning German."},
      {fr:"Ihr Deutsch ist sehr gut!", ipa:"eer doytch ist zayr goot", en:"Your German is very good!"},
      {fr:"Danke, ich übe noch.", ipa:"dahn-keh ich oo-beh nokh", en:"Thanks, I'm still practicing."},
      {fr:"Das macht Spaß!", ipa:"das makht shpas", en:"That's fun! / I'm enjoying it!"}
    ],
    phrases:[
      {fr:"Wie lange sind Sie schon hier?", ipa:"vee lang-eh zint zee shohn heer", en:"How long have you been here?"},
      {fr:"Seit einer Woche.", ipa:"zyt ine-er vokh-eh", en:"For a week."},
      {fr:"Es gefällt mir sehr gut in Berlin.", ipa:"es geh-felt meer zayr goot in bair-leen", en:"I like Berlin very much."},
      {fr:"Was empfehlen Sie für Touristen?", ipa:"vas emp-fay-len zee foor too-ris-ten", en:"What do you recommend for tourists?"},
      {fr:"Ich lerne Deutsch — bitte haben Sie Geduld.", ipa:"ich lair-neh doytch bit-teh hah-ben zee geh-doolt", en:"I'm learning German — please be patient."},
      {fr:"Danke, das ist sehr nett von Ihnen.", ipa:"dahn-keh das ist zayr net fon ee-nen", en:"Thanks, that's very kind of you."},
      {fr:"Das macht wirklich Spaß!", ipa:"das makht veer-lich shpas", en:"This is really fun!"},
      {fr:"Ich bin sehr glücklich hier zu sein.", ipa:"ich bin zayr glook-lich heer tsoo zyne", en:"I'm very happy to be here."}
    ],
    grammar:"'Gefallen' (to like, to please) is a key German verb. 'Es gefällt mir' = It pleases me = I like it. 'Berlin gefällt mir sehr' = I like Berlin a lot. It's the opposite construction from English — the thing liked is the subject.",
    practice:["Use everything from Days 1–14 in a mental walk-through of a day in Germany.","Can you introduce yourself, order food, ask for directions, and pay? That's fluency enough."]
  },
  { day:16, title:"Colors & Descriptions", titleNative:"Farben & Beschreibungen", focus:"Describe what you see around you.",
    vocab:[
      {fr:"rot / blau / grün", ipa:"roht / blow / groon", en:"red / blue / green"},
      {fr:"gelb / orange / lila", ipa:"gelp / oh-rahn-zheh / lee-lah", en:"yellow / orange / purple"},
      {fr:"weiß / schwarz / grau", ipa:"vice / shvarts / grow", en:"white / black / grey"},
      {fr:"groß / klein", ipa:"grohss / kline", en:"big / small"},
      {fr:"lang / kurz", ipa:"lang / koorts", en:"long / short"},
      {fr:"neu / alt", ipa:"noy / alt", en:"new / old"},
      {fr:"schön / hässlich", ipa:"shern / hes-lich", en:"beautiful / ugly"},
      {fr:"hell / dunkel", ipa:"hel / doong-kel", en:"light / dark"},
      {fr:"rund / eckig", ipa:"roont / ek-ig", en:"round / angular"},
      {fr:"Das sieht... aus.", ipa:"das zeet ... owss", en:"That looks..."}
    ],
    phrases:[
      {fr:"Haben Sie das in Rot?", ipa:"hah-ben zee das in roht", en:"Do you have that in red?"},
      {fr:"Das ist ein schönes Gebäude.", ipa:"das ist ine shern-es geh-boy-deh", en:"That's a beautiful building."},
      {fr:"Das Auto ist schwarz und groß.", ipa:"das ow-toh ist shvarts oont grohss", en:"The car is black and big."},
      {fr:"Ich suche etwas Kleineres.", ipa:"ich zoo-kheh et-vas kline-er-es", en:"I'm looking for something smaller."},
      {fr:"Das sieht sehr modern aus.", ipa:"das zeet zayr moh-dairn owss", en:"That looks very modern."},
      {fr:"Die Altstadt ist wunderschön.", ipa:"dee alt-shtatt ist voon-der-shern", en:"The old town is beautiful."},
      {fr:"Ich mag das rote Hemd.", ipa:"ich mahk das roh-teh hemd", en:"I like the red shirt."},
      {fr:"Haben Sie ein helleres Blau?", ipa:"hah-ben zee ine hel-er-es blow", en:"Do you have a lighter blue?"}
    ],
    grammar:"Adjectives before nouns change their endings in German (adjective declension). This is complex, so don't memorize it now. Instead, learn colors after 'in': 'in Rot', 'in Blau' — this avoids declension entirely and works perfectly in shops.",
    practice:["Look around the room: describe 5 objects using German colors and adjectives.","'Haben Sie das in [color]?' — practice swapping colors for all your shopping needs."]
  },
  { day:17, title:"Likes, Dislikes & Opinions", titleNative:"Mögen, Nicht mögen & Meinungen", focus:"Express what you think and feel.",
    vocab:[
      {fr:"Ich mag...", ipa:"ich mahk", en:"I like..."},
      {fr:"Ich mag... nicht.", ipa:"ich mahk ... nicht", en:"I don't like..."},
      {fr:"Ich liebe...", ipa:"ich lee-beh", en:"I love..."},
      {fr:"Ich finde das...", ipa:"ich fin-deh das", en:"I find that..."},
      {fr:"interessant / langweilig", ipa:"in-teh-reh-sant / lang-vy-lig", en:"interesting / boring"},
      {fr:"toll / schrecklich", ipa:"tol / shreck-lich", en:"great / terrible"},
      {fr:"Meiner Meinung nach...", ipa:"my-ner my-noong nakh", en:"In my opinion..."},
      {fr:"Ich stimme zu / nicht zu.", ipa:"ich shtim-eh tsoo / nicht tsoo", en:"I agree / disagree."},
      {fr:"Wirklich?", ipa:"veer-lich", en:"Really?"},
      {fr:"Das ist mir egal.", ipa:"das ist meer eh-gahl", en:"I don't mind. / It's all the same to me."}
    ],
    phrases:[
      {fr:"Ich liebe deutsches Bier!", ipa:"ich lee-beh doyt-shes beer", en:"I love German beer!"},
      {fr:"Ich mag keine Schlangen.", ipa:"ich mahk kine-eh shlang-en", en:"I don't like queues."},
      {fr:"Das finde ich sehr interessant.", ipa:"das fin-deh ich zayr in-teh-reh-sant", en:"I find that very interesting."},
      {fr:"Meiner Meinung nach ist Berlin die beste Stadt.", ipa:"my-ner my-noong nakh ist bair-leen dee bes-teh shtat", en:"In my opinion Berlin is the best city."},
      {fr:"Ich stimme völlig zu.", ipa:"ich shtim-eh fer-lig tsoo", en:"I completely agree."},
      {fr:"Das finde ich schrecklich, ehrlich gesagt.", ipa:"das fin-deh ich shreck-lich air-lich geh-zahkt", en:"I find that terrible, honestly."},
      {fr:"Das ist mir eigentlich egal.", ipa:"das ist meer eye-gent-lich eh-gahl", en:"It's really all the same to me."},
      {fr:"Das klingt toll!", ipa:"das klingt tol", en:"That sounds great!"}
    ],
    grammar:"'Ich mag' + noun = I like [it]. 'Ich liebe' is stronger — use for things you genuinely love. To say you don't like something: 'Ich mag [noun] nicht.' To say you like no such thing: 'Ich mag kein[e] [noun].' Kein follows the same gender pattern as ein.",
    practice:["List 5 things you love and 5 you dislike in German.","Practice 'Meiner Meinung nach...' — it sounds impressively fluent and is easy to use."]
  },
  { day:18, title:"Work & Daily Life", titleNative:"Arbeit & Alltag", focus:"Talk about what you do.",
    vocab:[
      {fr:"Was machen Sie beruflich?", ipa:"vas makh-en zee beh-roof-lich", en:"What do you do for work?"},
      {fr:"Ich arbeite als...", ipa:"ich ar-by-teh als", en:"I work as..."},
      {fr:"das Büro", ipa:"das boo-roh", en:"the office"},
      {fr:"der Chef / die Chefin", ipa:"dair shef / dee shef-in", en:"the boss (m/f)"},
      {fr:"die Besprechung", ipa:"dee beh-shrech-oong", en:"the meeting"},
      {fr:"das Projekt", ipa:"das proh-yekt", en:"the project"},
      {fr:"anrufen", ipa:"an-roo-fen", en:"to call (phone)"},
      {fr:"schicken", ipa:"shik-en", en:"to send"},
      {fr:"die E-Mail", ipa:"dee ee-mail", en:"the email"},
      {fr:"Feierabend!", ipa:"fy-er-ah-bent", en:"End of the workday! / Knock off time!"}
    ],
    phrases:[
      {fr:"Ich bin selbständig.", ipa:"ich bin zelp-shten-dig", en:"I'm self-employed."},
      {fr:"Ich arbeite in der Technologiebranche.", ipa:"ich ar-by-teh in dair tek-no-loh-gee-branch-eh", en:"I work in the tech industry."},
      {fr:"Ich habe heute viele Besprechungen.", ipa:"ich hah-beh hoy-teh fee-leh beh-shrech-oong-en", en:"I have many meetings today."},
      {fr:"Können Sie mir eine E-Mail schicken?", ipa:"kern-en zee meer ine-eh ee-mail shik-en", en:"Can you send me an email?"},
      {fr:"Ich bin im Moment sehr beschäftigt.", ipa:"ich bin im moh-ment zayr beh-shef-tigt", en:"I'm very busy at the moment."},
      {fr:"Feierabend! Was machen wir heute Abend?", ipa:"fy-er-ah-bent vas makh-en veer hoy-teh ah-bent", en:"Done for the day! What are we doing tonight?"},
      {fr:"Ich rufe Sie morgen an.", ipa:"ich roo-feh zee mor-gen an", en:"I'll call you tomorrow."},
      {fr:"Schicken Sie mir bitte das Dokument.", ipa:"shik-en zee meer bit-teh das doh-koo-ment", en:"Please send me the document."}
    ],
    grammar:"'Feierabend' is one of Germany's great words — the official end of the workday, with the connotation of freedom and enjoyment. Germans take it seriously. Don't call a colleague after Feierabend. Learning a culture's untranslatable words teaches you its values.",
    practice:["Describe your job in one German sentence: 'Ich arbeite als...'","Learn 'Feierabend!' — it will endear you to every German you say it to."]
  },
  { day:19, title:"Hobbies & Free Time", titleNative:"Hobbys & Freizeit", focus:"Talk about what you enjoy.",
    vocab:[
      {fr:"das Hobby", ipa:"das hob-ee", en:"the hobby"},
      {fr:"reisen", ipa:"ry-zen", en:"to travel"},
      {fr:"kochen", ipa:"kokh-en", en:"to cook"},
      {fr:"lesen", ipa:"lay-zen", en:"to read"},
      {fr:"Sport treiben", ipa:"shport try-ben", en:"to do sports"},
      {fr:"Musik hören", ipa:"moo-zeek her-en", en:"to listen to music"},
      {fr:"ins Kino gehen", ipa:"ins kee-noh gay-en", en:"to go to the cinema"},
      {fr:"spazieren gehen", ipa:"shpah-tseer-en gay-en", en:"to go for a walk"},
      {fr:"Was machen Sie in Ihrer Freizeit?", ipa:"vas makh-en zee in ee-rer fry-tsyt", en:"What do you do in your free time?"},
      {fr:"Ich interessiere mich für...", ipa:"ich in-teh-reh-see-reh mich foor", en:"I'm interested in..."}
    ],
    phrases:[
      {fr:"Was machen Sie gern in Ihrer Freizeit?", ipa:"vas makh-en zee gairn in ee-rer fry-tsyt", en:"What do you like doing in your free time?"},
      {fr:"Ich reise sehr gern.", ipa:"ich ry-zeh zayr gairn", en:"I love traveling."},
      {fr:"Ich koche gern — besonders BBQ.", ipa:"ich kokh-eh gairn beh-zon-ders bay-bay-kyoo", en:"I like to cook — especially BBQ."},
      {fr:"Ich interessiere mich für Musik.", ipa:"ich in-teh-reh-see-reh mich foor moo-zeek", en:"I'm interested in music."},
      {fr:"Gehen wir heute Abend ins Kino?", ipa:"gay-en veer hoy-teh ah-bent ins kee-noh", en:"Shall we go to the cinema tonight?"},
      {fr:"Ich treibe dreimal die Woche Sport.", ipa:"ich try-beh dry-mahl dee vokh-eh shport", en:"I do sports three times a week."},
      {fr:"Spazieren gehen ist mein Lieblingshobby.", ipa:"shpah-tseer-en gay-en ist mine leeb-lings-hob-ee", en:"Walking is my favorite hobby."},
      {fr:"Was ist Ihr Lieblingsfilm?", ipa:"vas ist eer leeb-lings-film", en:"What is your favorite film?"}
    ],
    grammar:"'Gern' (gladly/like to) attaches to verbs to show you enjoy something: 'Ich reise gern' = I like to travel. 'Ich koche gern' = I like to cook. It's one of the most natural German expressions — more conversational than 'ich mag reisen'.",
    practice:["Describe two hobbies in German using 'Ich [verb] gern.'","Practice 'Ich interessiere mich für...' — it works for any topic."]
  },
  { day:20, title:"Asking for Help", titleNative:"Um Hilfe bitten", focus:"Get assistance in any situation.",
    vocab:[
      {fr:"Können Sie mir helfen?", ipa:"kern-en zee meer hel-fen", en:"Can you help me?"},
      {fr:"Ich brauche Hilfe.", ipa:"ich brow-kheh hil-feh", en:"I need help."},
      {fr:"Ich bin verloren.", ipa:"ich bin fer-loh-ren", en:"I'm lost."},
      {fr:"Ich habe... verloren.", ipa:"ich hah-beh ... fer-loh-ren", en:"I've lost my..."},
      {fr:"Wo finde ich...?", ipa:"voh fin-deh ich", en:"Where can I find...?"},
      {fr:"Ist das weit von hier?", ipa:"ist das vyt fon heer", en:"Is that far from here?"},
      {fr:"Können Sie das aufschreiben?", ipa:"kern-en zee das owf-shry-ben", en:"Can you write that down?"},
      {fr:"Ich verstehe Sie nicht.", ipa:"ich fer-shtay-eh zee nicht", en:"I don't understand you."},
      {fr:"Sprechen Sie bitte lauter.", ipa:"shprech-en zee bit-teh low-ter", en:"Please speak louder."},
      {fr:"Vielen Dank für Ihre Hilfe.", ipa:"fee-len dank foor ee-reh hil-feh", en:"Many thanks for your help."}
    ],
    phrases:[
      {fr:"Entschuldigung, können Sie mir helfen?", ipa:"ent-shool-dee-goong kern-en zee meer hel-fen", en:"Excuse me, can you help me?"},
      {fr:"Ich habe mein Portemonnaie verloren.", ipa:"ich hah-beh mine por-teh-moh-nay fer-loh-ren", en:"I've lost my wallet."},
      {fr:"Ich bin verloren. Wo bin ich?", ipa:"ich bin fer-loh-ren voh bin ich", en:"I'm lost. Where am I?"},
      {fr:"Können Sie das bitte aufschreiben?", ipa:"kern-en zee das bit-teh owf-shry-ben", en:"Can you please write that down?"},
      {fr:"Ich verstehe nicht. Bitte nochmal.", ipa:"ich fer-shtay-eh nicht bit-teh nokh-mahl", en:"I don't understand. Once more, please."},
      {fr:"Wo finde ich eine Bank?", ipa:"voh fin-deh ich ine-eh bank", en:"Where can I find a bank?"},
      {fr:"Ist das Polizeirevier weit?", ipa:"ist das poh-lee-tsy-reh-feer vyt", en:"Is the police station far?"},
      {fr:"Vielen Dank, das war sehr hilfreich.", ipa:"fee-len dank das vahr zayr hilf-rych", en:"Many thanks, that was very helpful."}
    ],
    grammar:"'Vielen Dank' (many thanks) is more emphatic than just 'Danke'. 'Danke schön' is polite. 'Vielen Dank' is grateful. 'Tausend Dank' (a thousand thanks) is heartfelt. Matching the level of thanks to the situation shows cultural awareness.",
    practice:["Write out your personal 'help script': lost, lost wallet, need a doctor.","Practice 'Können Sie das aufschreiben?' — when pronunciation fails, writing works."]
  },
  { day:21, title:"Making Plans", titleNative:"Pläne machen", focus:"Invite, agree, and organize social plans.",
    vocab:[
      {fr:"Wollen wir...?", ipa:"vol-en veer", en:"Shall we...?"},
      {fr:"Haben Sie Zeit?", ipa:"hah-ben zee tsyt", en:"Do you have time?"},
      {fr:"Ich würde gern...", ipa:"ich voor-deh gairn", en:"I would like to..."},
      {fr:"Was hältst du davon?", ipa:"vas helst doo dah-fon", en:"What do you think? (casual)"},
      {fr:"Gute Idee!", ipa:"goo-teh ee-day-eh", en:"Good idea!"},
      {fr:"Ich kann leider nicht.", ipa:"ich kan ly-der nicht", en:"Unfortunately I can't."},
      {fr:"Das passt mir gut.", ipa:"das past meer goot", en:"That works for me."},
      {fr:"Um wie viel Uhr?", ipa:"oom vee feel oor", en:"At what time?"},
      {fr:"Wo treffen wir uns?", ipa:"voh tref-en veer oons", en:"Where shall we meet?"},
      {fr:"Ich freue mich darauf!", ipa:"ich froy-eh mich dah-rowf", en:"I'm looking forward to it!"}
    ],
    phrases:[
      {fr:"Wollen wir heute Abend essen gehen?", ipa:"vol-en veer hoy-teh ah-bent es-en gay-en", en:"Shall we go eat tonight?"},
      {fr:"Haben Sie am Freitag Zeit?", ipa:"hah-ben zee am fry-tahk tsyt", en:"Do you have time on Friday?"},
      {fr:"Ich würde gern das Brandenburger Tor sehen.", ipa:"ich voor-deh gairn das bran-den-boor-ger tohr zay-en", en:"I'd like to see the Brandenburg Gate."},
      {fr:"Gute Idee! Um wie viel Uhr?", ipa:"goo-teh ee-day-eh oom vee feel oor", en:"Good idea! At what time?"},
      {fr:"Sagen wir sieben Uhr?", ipa:"zah-gen veer zee-ben oor", en:"Shall we say 7 o'clock?"},
      {fr:"Das passt mir sehr gut.", ipa:"das past meer zayr goot", en:"That works great for me."},
      {fr:"Wo treffen wir uns?", ipa:"voh tref-en veer oons", en:"Where shall we meet?"},
      {fr:"Ich freue mich sehr darauf!", ipa:"ich froy-eh mich zayr dah-rowf", en:"I'm really looking forward to it!"}
    ],
    grammar:"'Wollen wir...?' (shall we...?) is your go-to for making plans. 'Würde gern' (would like to) is the polite, conditional form — more formal than 'will' (want). In social situations, 'würde gern' is always the safer choice.",
    practice:["Invite someone to dinner in German using 'Wollen wir...?'","Practice confirming plans: time, place, and 'Ich freue mich darauf!'"]
  },
  { day:22, title:"German Culture & Customs", titleNative:"Kultur & Sitten", focus:"Understand what Germans actually expect.",
    vocab:[
      {fr:"pünktlich", ipa:"poonkt-lich", en:"punctual / on time"},
      {fr:"die Direktheit", ipa:"dee dee-rekt-hyt", en:"directness"},
      {fr:"das Recycling", ipa:"das reh-sy-kling", en:"recycling"},
      {fr:"die Mülltrennung", ipa:"dee mool-tren-noong", en:"waste separation"},
      {fr:"der Bäcker", ipa:"dair bek-er", en:"the bakery"},
      {fr:"das Pfand", ipa:"das pfant", en:"bottle deposit"},
      {fr:"Sonntagsruhe", ipa:"zon-tahks-roo-eh", en:"Sunday quiet (no noise/shopping)"},
      {fr:"die Hausordnung", ipa:"dee howss-ord-noong", en:"house rules"},
      {fr:"Prosit / Prost!", ipa:"proh-zeet / prohst", en:"Cheers!"},
      {fr:"Mahlzeit!", ipa:"mahl-tsyt", en:"Enjoy your meal! / Bon appétit!"}
    ],
    phrases:[
      {fr:"In Deutschland ist Pünktlichkeit sehr wichtig.", ipa:"in doytch-lant ist poonkt-lich-kyt zayr wich-tig", en:"In Germany punctuality is very important."},
      {fr:"Wo kommt der Gelbe Sack hin?", ipa:"voh komt dair gel-beh zak hin", en:"Where does the yellow recycling bag go?"},
      {fr:"Prost! Auf Ihr Wohl!", ipa:"prohst owf eer vohl", en:"Cheers! To your health!"},
      {fr:"Mahlzeit! Guten Appetit!", ipa:"mahl-tsyt goo-ten ah-peh-teet", en:"Enjoy your meal!"},
      {fr:"Sonntagsruhe — also kein Rasenmähen.", ipa:"zon-tahks-roo-eh al-zoh kine rah-zen-may-en", en:"Sunday quiet — so no mowing the lawn."},
      {fr:"Das Pfand bekommt man zurück.", ipa:"das pfant beh-komt man tsoo-rook", en:"You get the bottle deposit back."},
      {fr:"Deutschen schätzen direkte Kommunikation.", ipa:"doyt-shen shet-tsen dee-rek-teh kom-moo-nee-kah-tsyon", en:"Germans value direct communication."},
      {fr:"Kein Problem — so ist das hier eben.", ipa:"kine pro-blaym zoh ist das heer ay-ben", en:"No problem — that's just how it is here."}
    ],
    grammar:"'Mahlzeit' is fascinating — it literally means 'mealtime' but Germans say it as a greeting mid-morning or afternoon, not just at meals. It's evolved into a general 'take a break' or even slightly sarcastic acknowledgment. Context is everything.",
    practice:["Learn Sonntagsruhe — breaking it (playing loud music, drilling) is genuinely offensive.","Remember: directness in Germany is respect, not rudeness. They mean well."]
  },
  { day:23, title:"Technology & Modern Life", titleNative:"Technologie & Modernes Leben", focus:"Navigate digital Germany.",
    vocab:[
      {fr:"das Smartphone", ipa:"das smartphone", en:"the smartphone"},
      {fr:"die App", ipa:"dee app", en:"the app"},
      {fr:"laden / aufladen", ipa:"lah-den / owf-lah-den", en:"to load / to charge"},
      {fr:"das Internet", ipa:"das in-ter-net", en:"the internet"},
      {fr:"die Verbindung", ipa:"dee fer-bin-doong", en:"the connection"},
      {fr:"bezahlen", ipa:"beh-tsah-len", en:"to pay"},
      {fr:"bar / per Karte", ipa:"bahr / pair kar-teh", en:"cash / by card"},
      {fr:"die PIN", ipa:"dee pin", en:"the PIN"},
      {fr:"der Akku ist leer.", ipa:"dair ah-koo ist layr", en:"The battery is dead."},
      {fr:"ein Ladekabel", ipa:"ine lah-deh-kah-bel", en:"a charging cable"}
    ],
    phrases:[
      {fr:"Haben Sie WLAN hier?", ipa:"hah-ben zee vay-lahn heer", en:"Do you have WiFi here?"},
      {fr:"Kann ich bar bezahlen?", ipa:"kan ich bahr beh-tsah-len", en:"Can I pay cash?"},
      {fr:"Nehmen Sie Kreditkarten?", ipa:"nay-men zee kreh-deet-kar-ten", en:"Do you accept credit cards?"},
      {fr:"Mein Akku ist fast leer.", ipa:"mine ah-koo ist fast layr", en:"My battery is almost dead."},
      {fr:"Haben Sie ein Ladekabel für ein iPhone?", ipa:"hah-ben zee ine lah-deh-kah-bel foor ine eye-phone", en:"Do you have a charging cable for an iPhone?"},
      {fr:"Die Verbindung ist sehr schlecht.", ipa:"dee fer-bin-doong ist zayr shlecht", en:"The connection is very bad."},
      {fr:"Ich bezahle mit Karte.", ipa:"ich beh-tsah-leh mit kar-teh", en:"I'm paying by card."},
      {fr:"Wo kann ich mein Handy aufladen?", ipa:"voh kan ich mine han-dee owf-lah-den", en:"Where can I charge my phone?"}
    ],
    grammar:"Germany has long had a cash-first culture — 'Nur Barzahlung' (cash only) signs are still common, though cards are more accepted now. Always have euro cash as backup. ATMs are 'Geldautomat' — knowing this word saves you when you need one fast.",
    practice:["'Nehmen Sie Kreditkarten?' — ask before you order if you're only carrying a card.","Learn 'Geldautomat' — you'll need an ATM at some point."]
  },
  { day:24, title:"Sightseeing & Culture", titleNative:"Sightseeing & Kultur", focus:"Make the most of museums, landmarks, and tours.",
    vocab:[
      {fr:"das Museum", ipa:"das moo-zay-oom", en:"the museum"},
      {fr:"die Sehenswürdigkeit", ipa:"dee zay-ens-voor-dig-kyt", en:"the attraction / sight"},
      {fr:"die Führung", ipa:"dee foo-roong", en:"the guided tour"},
      {fr:"der Eintritt", ipa:"dair ine-trit", en:"the entrance fee"},
      {fr:"kostenlos", ipa:"kos-ten-lohs", en:"free of charge"},
      {fr:"geöffnet / geschlossen", ipa:"geh-erf-net / geh-shlos-en", en:"open / closed"},
      {fr:"das Denkmal", ipa:"das denk-mahl", en:"the monument / memorial"},
      {fr:"fotografieren", ipa:"foh-toh-grah-fee-ren", en:"to take photos"},
      {fr:"das Souvenir", ipa:"das zoo-veh-neer", en:"the souvenir"},
      {fr:"beeindruckend!", ipa:"beh-ine-drook-end", en:"impressive!"}
    ],
    phrases:[
      {fr:"Was kostet der Eintritt?", ipa:"vas kos-tet dair ine-trit", en:"What is the entrance fee?"},
      {fr:"Gibt es eine Führung auf Englisch?", ipa:"gipt es ine-eh foo-roong owf eng-lish", en:"Is there a guided tour in English?"},
      {fr:"Darf ich hier fotografieren?", ipa:"darf ich heer foh-toh-grah-fee-ren", en:"Am I allowed to take photos here?"},
      {fr:"Wann schließt das Museum?", ipa:"van shleest das moo-zay-oom", en:"When does the museum close?"},
      {fr:"Das Brandenburger Tor ist beeindruckend.", ipa:"das bran-den-boor-ger tohr ist beh-ine-drook-end", en:"The Brandenburg Gate is impressive."},
      {fr:"Gibt es kostenlose Eintrittstage?", ipa:"gipt es kos-ten-loh-seh ine-trits-tah-geh", en:"Are there free admission days?"},
      {fr:"Ich suche ein Souvenir für meine Familie.", ipa:"ich zoo-kheh ine zoo-veh-neer foor my-neh fah-mee-lee-eh", en:"I'm looking for a souvenir for my family."},
      {fr:"Berlin hat so viel Geschichte.", ipa:"bair-leen hat zoh feel geh-shich-teh", en:"Berlin has so much history."}
    ],
    grammar:"'Darf ich...?' (May I...?) is your permission-asking phrase. 'Kann ich...?' (Can I...?) is ability. Germans are precise about this distinction: 'Darf ich rauchen?' (Am I permitted to smoke?) vs. 'Kann ich rauchen?' (Am I physically able to smoke?). Use 'darf' when you're asking if something is allowed.",
    practice:["'Darf ich hier fotografieren?' — use it before pointing a camera anywhere significant.","Research one Berlin or Munich sight and write its name and what you'd say when you got there."]
  },
  { day:25, title:"Complaints & Problems", titleNative:"Beschwerden & Probleme", focus:"Speak up when things go wrong.",
    vocab:[
      {fr:"das Problem", ipa:"das pro-blaym", en:"the problem"},
      {fr:"das stimmt nicht.", ipa:"das shtimt nicht", en:"that's not right."},
      {fr:"kaputt", ipa:"kah-poot", en:"broken"},
      {fr:"schmutzig", ipa:"shmoo-tsig", en:"dirty"},
      {fr:"zu laut", ipa:"tsoo lowt", en:"too loud"},
      {fr:"Ich möchte mich beschweren.", ipa:"ich merch-teh mich beh-shvay-ren", en:"I'd like to make a complaint."},
      {fr:"Können Sie das reparieren?", ipa:"kern-en zee das reh-pah-reer-en", en:"Can you fix that?"},
      {fr:"Ich verlange eine Erstattung.", ipa:"ich fer-lang-eh ine-eh er-shtat-toong", en:"I'm requesting a refund."},
      {fr:"Das war nicht das, was ich bestellt habe.", ipa:"das vahr nicht das vas ich beh-shtelt hah-beh", en:"That was not what I ordered."},
      {fr:"Bitte sprechen Sie mit dem Manager.", ipa:"bit-teh shprech-en zee mit daym mah-nah-ger", en:"Please speak with the manager."}
    ],
    phrases:[
      {fr:"Entschuldigung, das ist nicht richtig.", ipa:"ent-shool-dee-goong das ist nicht rich-tig", en:"Excuse me, this isn't right."},
      {fr:"Das Zimmer ist nicht sauber.", ipa:"das tsim-er ist nicht zow-ber", en:"The room is not clean."},
      {fr:"Die Heizung ist kaputt.", ipa:"dee hy-tsoong ist kah-poot", en:"The heating is broken."},
      {fr:"Das war nicht das, was ich bestellt habe.", ipa:"das vahr nicht das vas ich beh-shtelt hah-beh", en:"That was not what I ordered."},
      {fr:"Es ist viel zu laut hier.", ipa:"es ist feel tsoo lowt heer", en:"It's far too loud here."},
      {fr:"Ich möchte eine Erstattung.", ipa:"ich merch-teh ine-eh er-shtat-toong", en:"I'd like a refund."},
      {fr:"Können Sie mir einen anderen Tisch geben?", ipa:"kern-en zee meer ine-en an-der-en tish gay-ben", en:"Can you give me a different table?"},
      {fr:"Bitte lösen Sie dieses Problem.", ipa:"bit-teh ler-zen zee dee-zes pro-blaym", en:"Please resolve this problem."}
    ],
    grammar:"Germans don't consider complaints rude — they're direct and expect you to be too. Start with 'Entschuldigung' to soften it, then state the issue clearly. No need to over-apologize or be indirect. Clear and polite beats flustered and vague every time.",
    practice:["Write out a hotel complaint in German: room too loud, heating broken, needs fixing.","Practice 'Das stimmt nicht' — it's firm but not aggressive."]
  },
  { day:26, title:"Food Culture & German Cuisine", titleNative:"Esskultur & Deutsche Küche", focus:"Order like you know your way around a German kitchen.",
    vocab:[
      {fr:"das Schnitzel", ipa:"das shnit-sel", en:"breaded cutlet"},
      {fr:"die Bratwurst", ipa:"dee braht-voorst", en:"grilled sausage"},
      {fr:"das Sauerkraut", ipa:"das zow-er-krowt", en:"fermented cabbage"},
      {fr:"der Braten", ipa:"dair brah-ten", en:"the roast"},
      {fr:"der Aufschnitt", ipa:"dair owf-shnit", en:"cold cuts / deli meats"},
      {fr:"das Brot", ipa:"das broht", en:"bread"},
      {fr:"die Brezn / Brezel", ipa:"dee brets-n / bray-tsel", en:"pretzel"},
      {fr:"der Eintopf", ipa:"dair ine-topf", en:"stew / one-pot"},
      {fr:"süß / salzig / sauer", ipa:"zoos / zal-tsig / zow-er", en:"sweet / salty / sour"},
      {fr:"hausgemacht", ipa:"howss-geh-makht", en:"homemade"}
    ],
    phrases:[
      {fr:"Was ist das Tagesgericht?", ipa:"vas ist das tah-ges-geh-richt", en:"What is the dish of the day?"},
      {fr:"Ist das hausgemacht?", ipa:"ist das howss-geh-makht", en:"Is that homemade?"},
      {fr:"Eine Bratwurst mit Senf, bitte.", ipa:"ine-eh braht-voorst mit zenf bit-teh", en:"One bratwurst with mustard, please."},
      {fr:"Das Brot in Deutschland ist fantastisch.", ipa:"das broht in doytch-lant ist fan-tas-tish", en:"The bread in Germany is fantastic."},
      {fr:"Ich hätte gern ein dunkles Bier.", ipa:"ich het-eh gairn ine doong-kles beer", en:"I'd like a dark beer."},
      {fr:"Zum Wohl! Guten Appetit!", ipa:"tsoom vohl goo-ten ah-peh-teet", en:"Cheers! Enjoy your meal!"},
      {fr:"Kann ich mehr Brot haben?", ipa:"kan ich mayr broht hah-ben", en:"Can I have more bread?"},
      {fr:"Das ist das beste Schnitzel, das ich je gegessen habe.", ipa:"das ist das bes-teh shnit-sel das ich yeh geh-ges-en hah-beh", en:"That is the best schnitzel I've ever eaten."}
    ],
    grammar:"German has over 300 types of bread — 'Brot' is a national obsession and even UNESCO-recognized. When in doubt, order what the table next to you has. 'Was ist das?' + pointing is internationally understood.",
    practice:["Learn 'hausgemacht' — asking if food is homemade flatters any cook.","Practice the full bratwurst order: 'Eine Bratwurst mit Senf, bitte' — you'll use it."]
  },
  { day:27, title:"Sports & Events", titleNative:"Sport & Veranstaltungen", focus:"Talk about football, events, and things to do.",
    vocab:[
      {fr:"das Fußball", ipa:"das foos-bal", en:"football / soccer"},
      {fr:"das Spiel", ipa:"das shpeel", en:"the game / match"},
      {fr:"der Verein", ipa:"dair fer-ine", en:"the club / team"},
      {fr:"das Ticket", ipa:"das tik-et", en:"the ticket"},
      {fr:"das Stadion", ipa:"das shtah-dyohn", en:"the stadium"},
      {fr:"das Konzert", ipa:"das kon-tsairt", en:"the concert"},
      {fr:"der Markt", ipa:"dair markt", en:"the market"},
      {fr:"das Festival", ipa:"das fes-tee-val", en:"the festival"},
      {fr:"Wann beginnt das Spiel?", ipa:"van beh-gint das shpeel", en:"When does the match start?"},
      {fr:"Wo kann ich Tickets kaufen?", ipa:"voh kan ich tik-ets kow-fen", en:"Where can I buy tickets?"}
    ],
    phrases:[
      {fr:"Wo kann ich Tickets für das Spiel kaufen?", ipa:"voh kan ich tik-ets foor das shpeel kow-fen", en:"Where can I buy tickets for the match?"},
      {fr:"Ich bin ein großer Fußballfan.", ipa:"ich bin ine groh-ser foos-bal-fan", en:"I'm a big football fan."},
      {fr:"Welcher Verein ist der beste?", ipa:"vel-cher fer-ine ist dair bes-teh", en:"Which team is the best?"},
      {fr:"Wann beginnt das Konzert?", ipa:"van beh-gint das kon-tsairt", en:"When does the concert start?"},
      {fr:"Gibt es heute einen Weihnachtsmarkt?", ipa:"gipt es hoy-teh ine-en vy-nakhts-markt", en:"Is there a Christmas market today?"},
      {fr:"Das war ein tolles Spiel!", ipa:"das vahr ine tol-es shpeel", en:"That was a great match!"},
      {fr:"In Deutschland ist Fußball eine Religion.", ipa:"in doytch-lant ist foos-bal ine-eh reh-lee-gyohn", en:"In Germany football is a religion."},
      {fr:"Ich hätte gern zwei Karten für das Festival.", ipa:"ich het-eh gairn tsvy kar-ten foor das fes-tee-val", en:"I'd like two tickets for the festival."}
    ],
    grammar:"'Gibt es...?' (Is there...?) is endlessly useful. 'Gibt es heute...?' (Is there today...?). 'Gibt es hier...?' (Is there here...?). Learn this as a universal question frame — plug in anything you're looking for.",
    practice:["Try: 'Gibt es heute [event] hier in der Nähe?' (Is there [event] nearby today?)","Look up the German football clubs — knowing Bayern vs. BVB earns instant credibility."]
  },
  { day:28, title:"Expressing Feelings", titleNative:"Gefühle ausdrücken", focus:"Say how you actually feel.",
    vocab:[
      {fr:"Ich bin müde.", ipa:"ich bin moo-deh", en:"I'm tired."},
      {fr:"Ich bin glücklich.", ipa:"ich bin glook-lich", en:"I'm happy."},
      {fr:"Ich bin aufgeregt.", ipa:"ich bin owf-geh-raygt", en:"I'm excited."},
      {fr:"Ich bin traurig.", ipa:"ich bin trow-rig", en:"I'm sad."},
      {fr:"Ich bin wütend.", ipa:"ich bin voo-tend", en:"I'm angry."},
      {fr:"Ich bin nervös.", ipa:"ich bin nair-vers", en:"I'm nervous."},
      {fr:"Ich fühle mich wohl.", ipa:"ich foo-leh mich vohl", en:"I feel good / comfortable."},
      {fr:"Das freut mich!", ipa:"das froyt mich", en:"I'm glad about that!"},
      {fr:"Das tut mir leid.", ipa:"das toot meer lyt", en:"I'm sorry about that."},
      {fr:"Ich vermisse...", ipa:"ich fer-mis-eh", en:"I miss..."}
    ],
    phrases:[
      {fr:"Ich bin so aufgeregt über die Reise!", ipa:"ich bin zoh owf-geh-raygt oo-ber dee ry-zeh", en:"I'm so excited about the trip!"},
      {fr:"Das tut mir wirklich leid.", ipa:"das toot meer veer-lich lyt", en:"I'm truly sorry about that."},
      {fr:"Ich fühle mich hier sehr wohl.", ipa:"ich foo-leh mich heer zayr vohl", en:"I feel very comfortable here."},
      {fr:"Das freut mich sehr!", ipa:"das froyt mich zayr", en:"I'm really glad about that!"},
      {fr:"Ich vermisse meine Familie.", ipa:"ich fer-mis-eh my-neh fah-mee-lee-eh", en:"I miss my family."},
      {fr:"Ich bin erschöpft nach dem langen Tag.", ipa:"ich bin er-sherpft nakh daym lang-en tahk", en:"I'm exhausted after the long day."},
      {fr:"Diese Stadt macht mich glücklich.", ipa:"dee-seh shtat makht mich glook-lich", en:"This city makes me happy."},
      {fr:"Es ist alles in Ordnung.", ipa:"es ist al-es in ord-noong", en:"Everything is fine."}
    ],
    grammar:"'Das tut mir leid' (that does me sorrow) is genuine sympathy. 'Es tut mir leid' when you caused the issue. 'Das tut mir leid' when you're reacting to someone else's bad news. Germans appreciate the distinction — it shows you're actually listening.",
    practice:["Describe how you feel today in three German sentences.","Learn 'Ich fühle mich wohl' — it's the most useful positive feeling phrase."]
  },
  { day:29, title:"Advanced Survival Phrases", titleNative:"Fortgeschrittene Überlebensphrasen", focus:"Sound like you've been at this a while.",
    vocab:[
      {fr:"Wie bitte?", ipa:"vee bit-teh", en:"Pardon? / Come again?"},
      {fr:"Das habe ich nicht mitbekommen.", ipa:"das hah-beh ich nicht mit-beh-kom-en", en:"I didn't catch that."},
      {fr:"Ich meine...", ipa:"ich my-neh", en:"I mean..."},
      {fr:"Eigentlich...", ipa:"eye-gent-lich", en:"Actually..."},
      {fr:"Naja...", ipa:"nah-yah", en:"Well... / Sort of..."},
      {fr:"Irgendwie...", ipa:"ir-gend-vee", en:"Somehow..."},
      {fr:"Im Großen und Ganzen", ipa:"im groh-sen oont gant-sen", en:"On the whole / All in all"},
      {fr:"Sozusagen", ipa:"zoh-tsoo-zah-gen", en:"So to speak"},
      {fr:"Ach so!", ipa:"akh zoh", en:"I see! / Ah, right!"},
      {fr:"Na ja, geht so.", ipa:"nah yah gayt zoh", en:"Meh, it's okay. / So-so."}
    ],
    phrases:[
      {fr:"Wie bitte? Ich habe das nicht verstanden.", ipa:"vee bit-teh ich hah-beh das nicht fer-shtan-den", en:"Pardon? I didn't understand that."},
      {fr:"Ach so! Jetzt verstehe ich.", ipa:"akh zoh yetst fer-shtay-eh ich", en:"I see! Now I understand."},
      {fr:"Na ja, geht so — es war nicht schlecht.", ipa:"nah yah gayt zoh es vahr nicht shlecht", en:"So-so — it wasn't bad."},
      {fr:"Im Großen und Ganzen war es toll.", ipa:"im groh-sen oont gant-sen vahr es tol", en:"On the whole it was great."},
      {fr:"Ich meine, eigentlich ist das ganz normal.", ipa:"ich my-neh eye-gent-lich ist das gants nor-mahl", en:"I mean, actually that's quite normal."},
      {fr:"Das ist, sozusagen, typisch deutsch.", ipa:"das ist zoh-tsoo-zah-gen too-pish doytch", en:"That is, so to speak, typically German."},
      {fr:"Irgendwie verstehe ich das nicht ganz.", ipa:"ir-gend-vee fer-shtay-eh ich das nicht gants", en:"Somehow I don't quite understand that."},
      {fr:"Naja, man kann nicht alles haben.", ipa:"nah-yah man kan nicht al-es hah-ben", en:"Well, you can't have everything."}
    ],
    grammar:"'Ach so!' is one of the most authentically German sounds — use it when something clicks. 'Naja' and 'Irgendwie' are filler words that immediately make you sound less like a textbook. Sprinkle them in and Germans will do a double-take at how natural you sound.",
    practice:["Work 'Ach so!' into every conversation where something makes sense.","Use 'Naja' once today when someone asks how something was."]
  },
  { day:30, title:"Final Day: Germany, Here You Come", titleNative:"Letzter Tag: Deutschland, hier komme ich!", focus:"You've put in the work. Time to use it.",
    vocab:[
      {fr:"Herzlichen Glückwunsch!", ipa:"hairts-lichen glook-voontsh", en:"Congratulations!"},
      {fr:"Ich habe Deutsch gelernt.", ipa:"ich hah-beh doytch geh-layrnt", en:"I have learned German."},
      {fr:"Ich übe weiter.", ipa:"ich oo-beh vy-ter", en:"I'll keep practicing."},
      {fr:"Auf nach Deutschland!", ipa:"owf nakh doytch-lant", en:"Off to Germany!"},
      {fr:"das Abenteuer", ipa:"das ah-ben-toy-er", en:"the adventure"},
      {fr:"die Erinnerung", ipa:"dee er-in-er-oong", en:"the memory"},
      {fr:"unvergesslich", ipa:"oon-fer-ges-lich", en:"unforgettable"},
      {fr:"Ich bin bereit.", ipa:"ich bin beh-ryt", en:"I am ready."},
      {fr:"Das war es wert.", ipa:"das vahr es vairt", en:"It was worth it."},
      {fr:"Bis zum nächsten Mal!", ipa:"bis tsoom naych-sten mahl", en:"Until next time!"}
    ],
    phrases:[
      {fr:"Herzlichen Glückwunsch — Sie haben es geschafft!", ipa:"hairts-lichen glook-voontsh zee hah-ben es geh-shafft", en:"Congratulations — you did it!"},
      {fr:"Ich habe dreißig Tage Deutsch gelernt.", ipa:"ich hah-beh dry-sig tah-geh doytch geh-layrnt", en:"I learned German for thirty days."},
      {fr:"Jetzt bin ich bereit für Deutschland.", ipa:"yetst bin ich beh-ryt foor doytch-lant", en:"Now I'm ready for Germany."},
      {fr:"Das Lernen macht mir wirklich Spaß.", ipa:"das lair-nen makht meer veer-lich shpas", en:"Learning is really fun for me."},
      {fr:"Ich werde weiter üben.", ipa:"ich vaird-eh vy-ter oo-ben", en:"I will keep practicing."},
      {fr:"Deutschland wird ein unvergessliches Abenteuer.", ipa:"doytch-lant virt ine oon-fer-ges-liches ah-ben-toy-er", en:"Germany will be an unforgettable adventure."},
      {fr:"Das war es definitiv wert!", ipa:"das vahr es deh-fee-nee-teef vairt", en:"It was definitely worth it!"},
      {fr:"Auf nach Deutschland — ich bin bereit!", ipa:"owf nakh doytch-lant ich bin beh-ryt", en:"Off to Germany — I'm ready!"}
    ],
    grammar:"You've covered greetings, ordering, navigation, hotels, emergencies, shopping, culture, feelings, and more. The single biggest Paris tip applied to Germany: ALWAYS open with 'Guten Tag' or 'Hallo'. Then 'Sprechen Sie Englisch?' if you need it. Germans respect the effort enormously. Go enjoy it.",
    practice:["Do a full mental walkthrough of a day in Berlin — arrival to dinner.","Write three sentences about why you started learning German. In German."]
  }
];

// ============================================================
// CONVERSATION SCENARIOS
// ============================================================
const CONVERSATIONS_DE = [
  { title:"Ordering at a Café", scene:"You walk into a Berlin café and order breakfast.",
    lines:[
      {who:"them", fr:"Guten Morgen!", en:"Good morning!"},
      {who:"you", fr:"Guten Morgen. Einen Kaffee und ein Croissant, bitte.", en:"Good morning. A coffee and a croissant, please."},
      {who:"them", fr:"Für hier oder zum Mitnehmen?", en:"To eat in or to take away?"},
      {who:"you", fr:"Für hier, danke.", en:"To eat in, thanks."},
      {who:"them", fr:"Sehr gern. Das macht fünf Euro achtzig.", en:"Of course. That's five eighty."},
      {who:"you", fr:"Hier bitte. Danke schön.", en:"Here you go. Thank you."},
      {who:"them", fr:"Danke! Guten Appetit und einen schönen Tag!", en:"Thanks! Enjoy your meal and have a nice day!"},
      {who:"you", fr:"Danke, gleichfalls! Auf Wiedersehen!", en:"Thanks, you too! Goodbye!"}
    ]},
  { title:"Hotel Check-In", scene:"You arrive at your hotel in Berlin with a reservation.",
    lines:[
      {who:"you", fr:"Guten Tag, ich habe eine Reservierung auf den Namen Cannon.", en:"Good day, I have a reservation under the name Cannon."},
      {who:"them", fr:"Guten Tag, Herr Cannon. Ja — zwei Nächte, Doppelzimmer.", en:"Good day, Mr. Cannon. Yes — two nights, double room."},
      {who:"you", fr:"Perfekt. Um wie viel Uhr ist das Frühstück?", en:"Perfect. What time is breakfast?"},
      {who:"them", fr:"Von sieben bis zehn Uhr, im Erdgeschoss.", en:"From 7 to 10, on the ground floor."},
      {who:"you", fr:"Und was ist das WLAN-Passwort?", en:"And what is the WiFi password?"},
      {who:"them", fr:"Das steht auf Ihrer Zimmerkarte. Hier ist Ihr Schlüssel — Zimmer 204.", en:"It's on your room card. Here is your key — room 204."},
      {who:"you", fr:"Vielen Dank. Guten Abend.", en:"Many thanks. Good evening."}
    ]},
  { title:"Asking for Directions", scene:"You're near the Brandenburg Gate and looking for Museum Island.",
    lines:[
      {who:"you", fr:"Entschuldigung, guten Tag. Ich suche die Museumsinsel.", en:"Excuse me, good day. I'm looking for Museum Island."},
      {who:"them", fr:"Guten Tag. Das ist nicht weit. Gehen Sie geradeaus, dann rechts am Fluss.", en:"Good day. It's not far. Go straight, then right along the river."},
      {who:"you", fr:"Geradeaus und dann rechts am Fluss. Richtig?", en:"Straight and then right along the river. Correct?"},
      {who:"them", fr:"Genau. Sie sehen dann die Brücke — die Museumsinsel ist gleich dahinter.", en:"Exactly. You'll see the bridge — Museum Island is right behind it."},
      {who:"you", fr:"Wie weit ist es zu Fuß?", en:"How far is it on foot?"},
      {who:"them", fr:"Ungefähr fünfzehn Minuten.", en:"About fifteen minutes."},
      {who:"you", fr:"Wunderbar, vielen Dank!", en:"Wonderful, many thanks!"}
    ]},
  { title:"At the Restaurant", scene:"Dinner at a Berlin restaurant — the full experience.",
    lines:[
      {who:"you", fr:"Guten Abend, einen Tisch für zwei, bitte.", en:"Good evening, a table for two, please."},
      {who:"them", fr:"Guten Abend. Haben Sie reserviert?", en:"Good evening. Do you have a reservation?"},
      {who:"you", fr:"Nein, leider nicht. Haben Sie noch einen Tisch frei?", en:"No, unfortunately not. Do you have a free table?"},
      {who:"them", fr:"Ja, kommen Sie bitte mit. Hier ist die Speisekarte.", en:"Yes, please follow me. Here is the menu."},
      {who:"you", fr:"Danke. Was empfehlen Sie heute?", en:"Thanks. What do you recommend today?"},
      {who:"them", fr:"Das Schnitzel ist heute sehr gut.", en:"The schnitzel is very good today."},
      {who:"you", fr:"Sehr schön. Ich nehme das Schnitzel und ein Bier, bitte.", en:"Very good. I'll take the schnitzel and a beer, please."},
      {who:"you", fr:"Die Rechnung, bitte. Es hat mir sehr geschmeckt.", en:"The bill, please. I really enjoyed the food."},
      {who:"them", fr:"Das freut mich! Zahlen Sie getrennt oder zusammen?", en:"I'm glad! Paying separately or together?"},
      {who:"you", fr:"Zusammen, bitte. Und danke schön.", en:"Together, please. And thank you."}
    ]},
  { title:"Buying Train Tickets", scene:"You're at the Hauptbahnhof buying a ticket to Munich.",
    lines:[
      {who:"you", fr:"Guten Tag. Einmal nach München, bitte.", en:"Good day. One ticket to Munich, please."},
      {who:"them", fr:"Guten Tag. Einfach oder hin und zurück?", en:"Good day. One-way or round trip?"},
      {who:"you", fr:"Einfach, bitte. Für heute Nachmittag.", en:"One-way, please. For this afternoon."},
      {who:"them", fr:"Der nächste Zug fährt um 14:30 Uhr ab, Gleis sieben.", en:"The next train leaves at 14:30, platform seven."},
      {who:"you", fr:"Muss ich umsteigen?", en:"Do I need to change trains?"},
      {who:"them", fr:"Nein, das ist ein Direktzug. Fahrzeit etwa vier Stunden.", en:"No, it's a direct train. Journey time about four hours."},
      {who:"you", fr:"Perfekt. Was kostet das?", en:"Perfect. How much does that cost?"},
      {who:"them", fr:"Neunundvierzig Euro, bitte.", en:"Forty-nine euros, please."},
      {who:"you", fr:"Hier bitte. Vielen Dank!", en:"Here you go. Many thanks!"}
    ]},
  { title:"At the Pharmacy", scene:"You have a headache and need something from the Apotheke.",
    lines:[
      {who:"you", fr:"Guten Tag. Ich habe Kopfschmerzen. Haben Sie etwas dagegen?", en:"Good day. I have a headache. Do you have something for it?"},
      {who:"them", fr:"Guten Tag. Ja, Ibuprofen oder Aspirin wären geeignet. Haben Sie eine Allergie?", en:"Good day. Yes, ibuprofen or aspirin would work. Do you have any allergy?"},
      {who:"you", fr:"Nein, keine Allergien.", en:"No, no allergies."},
      {who:"them", fr:"Dann empfehle ich Ibuprofen 400mg. Eine Packung?", en:"Then I recommend ibuprofen 400mg. One pack?"},
      {who:"you", fr:"Ja, bitte. Was kostet das?", en:"Yes, please. How much is that?"},
      {who:"them", fr:"Vier Euro neunzig.", en:"Four ninety."},
      {who:"you", fr:"Danke sehr. Gute Besserung — brauche ich das wohl selbst!", en:"Thank you very much. Get well soon — I think I need that myself!"},
      {who:"them", fr:"Ha! Gute Besserung Ihnen!", en:"Ha! Get well soon to you!"}
    ]},
  { title:"Small Talk with a Local", scene:"Friendly conversation at a biergarten.",
    lines:[
      {who:"them", fr:"Sind Sie im Urlaub hier?", en:"Are you here on vacation?"},
      {who:"you", fr:"Ja, ich bin seit drei Tagen hier. Es gefällt mir sehr.", en:"Yes, I've been here three days. I like it a lot."},
      {who:"them", fr:"Woher kommen Sie?", en:"Where are you from?"},
      {who:"you", fr:"Aus Dallas, Texas. Zum ersten Mal in Deutschland.", en:"From Dallas, Texas. First time in Germany."},
      {who:"them", fr:"Willkommen! Wie finden Sie es?", en:"Welcome! How are you finding it?"},
      {who:"you", fr:"Fantastisch. Das Essen, das Bier, die Leute — alles toll.", en:"Fantastic. The food, the beer, the people — everything great."},
      {who:"them", fr:"Ihr Deutsch ist sehr gut!", en:"Your German is very good!"},
      {who:"you", fr:"Danke! Ich lerne noch — ich übe jeden Tag.", en:"Thanks! I'm still learning — I practice every day."},
      {who:"them", fr:"Das merkt man. Prost!", en:"It shows. Cheers!"},
      {who:"you", fr:"Prost! Auf Deutschland!", en:"Cheers! To Germany!"}
    ]},
  { title:"At the Christmas Market", scene:"You're at a Weihnachtsmarkt in December.",
    lines:[
      {who:"you", fr:"Einen Glühwein, bitte.", en:"A mulled wine, please."},
      {who:"them", fr:"Mit oder ohne Schuss?", en:"With or without a shot of rum?"},
      {who:"you", fr:"Mit Schuss, bitte. Was empfehlen Sie noch?", en:"With a shot, please. What else do you recommend?"},
      {who:"them", fr:"Die Bratwurst ist heute frisch. Und der Lebkuchen ist hausgemacht.", en:"The bratwurst is fresh today. And the gingerbread is homemade."},
      {who:"you", fr:"Einen Glühwein und eine Bratwurst dann, bitte.", en:"A mulled wine and a bratwurst then, please."},
      {who:"them", fr:"Das macht sieben Euro fünfzig. Und das Pfand für den Becher — zwei Euro.", en:"That's seven fifty. And the cup deposit — two euros."},
      {who:"you", fr:"Hier sind zehn Euro. Danke. Frohe Weihnachten!", en:"Here's ten euros. Thanks. Merry Christmas!"},
      {who:"them", fr:"Frohe Weihnachten! Genießen Sie den Markt!", en:"Merry Christmas! Enjoy the market!"}
    ]}
];
