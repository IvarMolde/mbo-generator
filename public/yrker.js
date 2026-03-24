// yrker.js – alle 100 yrker fordelt på bransjer

const BRANSJER = {

"Helse": [
  {id:"sykepleier",tittel:"Sykepleier",oppgaver:"stelle pasienter, gi medisin, dokumentere, samarbeide med leger",fagord:"pasient, medisin, sprøyte, journal, vakt, turnus, rapport",grammatikk:"preteritum av uregelmessige verb"},
  {id:"helsefagarbeider",tittel:"Helsefagarbeider",oppgaver:"personlig stell, måltidshjelp, aktivitet for beboere, rapportere",fagord:"beboer, sykehjem, stell, ADL, turnus, rapport, pårørende",grammatikk:"V2-regelen og inversjon"},
  {id:"hjelpepleier",tittel:"Hjelpepleier",oppgaver:"hjelpe med daglige gjøremål, gi omsorg, observere helsetilstand",fagord:"bruker, omsorg, velferd, pleieplan, hjemmetjeneste, avlastning",grammatikk:"modalverb: må, skal, kan, bør"},
  {id:"omsorgsarbeider",tittel:"Omsorgsarbeider",oppgaver:"daglig omsorg, aktiviteter, matlaging for eldre eller funksjonshemmede",fagord:"tjenestemottaker, funksjonshemming, livsglede, aktivitetsplan",grammatikk:"presens perfektum"},
  {id:"legesekretaer",tittel:"Legesekretær",oppgaver:"ta imot pasienter, timebestilling, journalarbeid, telefonhenvendelser",fagord:"time, journal, epikrisen, resept, henvisning, legekontor",grammatikk:"høflighetsformer og formelt språk"},
  {id:"apotek_tekniker",tittel:"Apotektekniker",oppgaver:"ekspedere resepter, rådgi kunder, fylle medisin, kassejobb",fagord:"resept, legemiddel, virkestoff, dosering, bivirkning",grammatikk:"sammensatte ord"},
  {id:"ambulansefaget",tittel:"Ambulansearbeider",oppgaver:"yte akutthjelp, transportere pasienter, samarbeide med sykehus",fagord:"akutt, puls, blodtrykk, ambulanse, hjertestart, pasientstatus",grammatikk:"instruksjonssetninger med imperativ"},
  {id:"tannhelse",tittel:"Tannhelsesekretær",oppgaver:"ta imot pasienter, assistere tannlege, sterilisere utstyr, timebok",fagord:"behandlingsstol, instrument, sterilisering, tannkart, tannlege",grammatikk:"preposisjoner i tid og sted"},
  {id:"psykisk_helse",tittel:"Miljøarbeider",oppgaver:"støtte brukere i dagligliv, aktiviteter, samtale, miljøterapi",fagord:"bruker, mestring, psykisk helse, miljøterapi, dagsenter",grammatikk:"leddsetninger med fordi, når, hvis"},
  {id:"fysioterapi_assistent",tittel:"Fysioterapiassistent",oppgaver:"assistere fysioterapeut, øvelser med pasienter, rengjøre utstyr",fagord:"øvelse, rehabilitering, muskel, ledd, treningsprogram",grammatikk:"adjektivbøying"},
  {id:"fotterapeut",tittel:"Fotterapeut",oppgaver:"behandle fotsykdommer, neglestell, sårstell, rådgi pasienter",fagord:"negl, hud, sår, behandling, fotbad, verktøy, hygiene",grammatikk:"faglig rådgivning og instruksjoner"},
  {id:"sykehusbetjent",tittel:"Sykehusbetjent",oppgaver:"transportere pasienter, rydde, hente og bringe utstyr og mat",fagord:"sykehus, seng, rullestol, heis, avdeling, portør",grammatikk:"retningsbeskrivelse og romlige preposisjoner"},
  {id:"veterinaerassistent",tittel:"Veterinærassistent",oppgaver:"assistere veterinær, stelle dyr, rengjøre, ta imot dyreeiere",fagord:"dyr, behandling, vaksine, undersøkelse, sterilisering",grammatikk:"fagbegreper og instruksjoner"},
  {id:"kiropraktor_assistent",tittel:"Kiropraktorassistent",oppgaver:"ta imot pasienter, timebestilling, rydde, assistere behandler",fagord:"time, behandling, rygg, nakke, journal, resepsjon",grammatikk:"høflighetsformer og tidsuttrykk"},
  {id:"optometrist_assistent",tittel:"Optometristassistent",oppgaver:"assistere optometrist, klargjøre utstyr, ta imot kunder, kasse",fagord:"synstest, linse, brilleinnfatning, styrke, sjekk, optikk",grammatikk:"spørsmål og svar i faglig kontekst"},
],

"Oppvekst": [
  {id:"barnehageassistent",tittel:"Barnehageassistent",oppgaver:"leke med barn, lede aktiviteter, måltider, utetid, foreldrekontakt",fagord:"avdeling, pedagog, læringsmål, barnehageloven, foreldresamtale",grammatikk:"V2-regelen"},
  {id:"barne_ungdomsarbeider",tittel:"Barne- og ungdomsarbeider",oppgaver:"fritidsaktiviteter, lekselesing, omsorg, grensesetting, samarbeid",fagord:"SFO, fritidsklubben, grensesetting, mestring, trivsel",grammatikk:"imperativ for instruksjoner og regler"},
  {id:"skoleassistent",tittel:"Skoleassistent",oppgaver:"støtte elever, assistere lærer, leksehjelp, tilrettelegge",fagord:"spesialundervisning, IOP, tilpasning, elev, klasserom",grammatikk:"spørresetninger"},
  {id:"dagmamma",tittel:"Dagmamma",oppgaver:"ta vare på barn, lek, måltider, søvn, kommunisere med foreldre",fagord:"tilsyn, godkjenning, barnegruppe, lekemiljø, dagsrytme",grammatikk:"tall og klokkeslett"},
  {id:"fritidsleder",tittel:"Fritidsleder",oppgaver:"planlegge aktiviteter, lede grupper, konflikthåndtering, rapportere",fagord:"fritidsklubb, ungdom, aktivitetsprogram, konflikthåndtering",grammatikk:"fremtid med skal og kommer til å"},
],

"Renhold/Eiendom": [
  {id:"renholder",tittel:"Renholder",oppgaver:"vaske gulv, toaletter, vinduer, tømme søppel, bruke maskiner",fagord:"mopp, støvsuger, desinfeksjon, renholdsplan, kjemikalier, HMS",grammatikk:"instruksjonssetninger og rekkefølgeadverb"},
  {id:"renholdsleder",tittel:"Renholdsleder",oppgaver:"lede team, kvalitetskontroll, planlegge renhold, bestille forbruksvarer",fagord:"renholdsplan, kvalitetskontroll, forbruksvarer, HMS-krav",grammatikk:"kommandoer og delegering"},
  {id:"vinduspusser",tittel:"Vinduspusser",oppgaver:"vaske vinduer, fasader, bruke tau og stigmateriell, HMS",fagord:"stigmateriell, sikkerhetssele, abseil, fasaderengjøring",grammatikk:"HMS-instruksjoner og sikkerhetsregler"},
  {id:"vaktmester",tittel:"Vaktmester",oppgaver:"vedlikehold av bygg, småreperasjoner, snømåking, HMS-kontroll",fagord:"vedlikeholdsplan, avvik, borettslag, rapportering, verktøy",grammatikk:"substantiv – bestemt og ubestemt form"},
  {id:"eiendomsmegler_assistent",tittel:"Eiendomsmeglerassistent",oppgaver:"klargjøre visning, dokumenthåndtering, kundekontakt, annonsering",fagord:"visning, takst, budgivning, prospekt, tinglysing, fellesgjeld",grammatikk:"formelle e-poster og skriftlig kommunikasjon"},
],

"Transport/Logistikk": [
  {id:"bussjaafor",tittel:"Bussjåfør",oppgaver:"kjøre ruter, betjene passasjerer, billettering, rapportere avvik",fagord:"rutetabell, stoppested, billett, depot, forsinkelse",grammatikk:"klokkeslett og tidsuttrykk"},
  {id:"taxisjaafor",tittel:"Taxisjåfør",oppgaver:"kjøre kunder, bruke GPS, fakturere, kundeservice",fagord:"taksameter, bestilling, turlogg, kjørebok, app, kvittering",grammatikk:"ordenstall og adresser"},
  {id:"truckforer",tittel:"Truckfører",oppgaver:"kjøre truck, håndtere gods, registrere varer, lagerstyring",fagord:"truck, pall, strekkkode, lagringsadresse, godsmottak",grammatikk:"sikkerhetsinstruksjoner og pliktsetninger"},
  {id:"lagerarbeider",tittel:"Lagerarbeider",oppgaver:"plukke ordrer, pakke, varemottak, inventar, truck",fagord:"plukkordre, strekkkode, pall, forsendelse, inventar",grammatikk:"tall og mengdeuttrykk"},
  {id:"postbud",tittel:"Postbud",oppgaver:"sortere post, levere pakker, bruke håndterminal, hente signaturer",fagord:"rute, håndterminal, signatur, postnummer, pakke",grammatikk:"preposisjoner i retningsbeskrivelse"},
  {id:"sjaafor_lastebil",tittel:"Lastebilsjåfør",oppgaver:"kjøre godstransport, losse, laste, kjøre- og hviletidsregler",fagord:"fraktbrev, kjøre- og hviletid, ADR, vektkontroll",grammatikk:"pliktsetninger og forskriftsbasert språk"},
  {id:"pakkedistributor",tittel:"Pakkedistributør",oppgaver:"sortere og levere pakker, håndtere reklamasjoner, bruke app",fagord:"pakkesentral, rute, avviksregistrering, sporingsnummer",grammatikk:"leddsetninger med hvis og når"},
  {id:"speditør",tittel:"Speditørmedarbeider",oppgaver:"tollklarering, booking, fraktdokumenter, kundeoppfølging",fagord:"frakt, toll, manifest, fortolling, leveringstid",grammatikk:"skriftlig kommunikasjon og fagterminologi"},
  {id:"anleggsmaskinforer",tittel:"Anleggsmaskinoperatør",oppgaver:"betjene gravemaskin, bulldoser, veihøvler, sikkerhet",fagord:"gravemaskin, spett, masse, anleggsplass, sikring",grammatikk:"romlige preposisjoner"},
  {id:"jernbane",tittel:"Togassistent",oppgaver:"kontrollere billetter, guide passasjerer, sikkerhet, informasjon",fagord:"perrongen, avgang, forsinkelse, billettautomat, togvogn",grammatikk:"formell henvendelse til kunder"},
],

"Servering/Mat": [
  {id:"kokk",tittel:"Kokk",oppgaver:"tilberede mat, oppskrifter, menyplanlegging, HACCP, kjøkkenledelse",fagord:"oppskrift, ingrediens, allergi, HACCP, kjølerom, porsjonering",grammatikk:"imperativ i oppskrifter"},
  {id:"kjokkenassistent",tittel:"Kjøkkenassistent",oppgaver:"vaske, skjære, tilberede enkle retter, rydde, varemottak",fagord:"gryte, skjærefjøl, næringsinnhold, avfall, kjølerom, hygiene",grammatikk:"ordrekkefølge i setninger"},
  {id:"kantinearbeider",tittel:"Kantinearbeider",oppgaver:"tilberede og servere mat, kasse, rydde, matsvinn, allergen",fagord:"meny, porsjon, kassesystem, matsvinn, allergen, buffet",grammatikk:"spørsmål i servicesammenheng"},
  {id:"serveringsfaget",tittel:"Servitør",oppgaver:"ta imot gjester, servere mat og drikke, ta bestilling, rengjøre",fagord:"bestilling, meny, bon, bordbooking, tips, allergier",grammatikk:"høflighetsformer og servicefraser"},
  {id:"baker",tittel:"Baker",oppgaver:"blande deig, bake brød og bakverk, produksjonsplan, hygiene",fagord:"deig, gjær, stekovn, hevning, mel, søtningsstoff",grammatikk:"mengde og mål"},
  {id:"paaservering",tittel:"Påfyllingsmedarbeider",oppgaver:"fylle hyller, dato-kontroll, rydde, kundehjelp, motta varer",fagord:"holdbarhet, FIFO, hylle, varemottak, planogram, strekkkode",grammatikk:"V2-regelen med tidsadverbial"},
  {id:"cateringmedarbeider",tittel:"Cateringmedarbeider",oppgaver:"tilberede og levere mat til arrangementer, rigge, rydde",fagord:"arrangement, buffetoppsett, transport, allergener, cateringplan",grammatikk:"fremtid og planlegging"},
  {id:"hurtigmat",tittel:"Hurtigmatmedarbeider",oppgaver:"ta bestillinger, tilberede mat, kasse, rengjøre, kundeservice",fagord:"bestilling, kassesystem, mattrygghetsregler, meny, avfall",grammatikk:"tall, priser og penger"},
],

"Handel/Service": [
  {id:"butikkmedarbeider",tittel:"Butikkmedarbeider",oppgaver:"kasse, varepåfylling, kundeservice, rydde hyller, prising",fagord:"kasse, kvittering, kunde, rabatt, reklamasjon, varetelling",grammatikk:"høflighetsfraser i kundeservice"},
  {id:"kassemedarbeider",tittel:"Kassemedarbeider",oppgaver:"skanne varer, ta betaling, gi igjen, pakke varer, kundeservice",fagord:"kasseapparat, strekkode, betalingsterminal, kvittering, retur",grammatikk:"tall og regnestykker verbalt"},
  {id:"blomsterdekorator",tittel:"Blomsterdekoratør",oppgaver:"lage buketter, dekorasjoner, kundeservice, kasse, stell av blomster",fagord:"blomsterart, dekorasjon, bukettbinding, vase, stell",grammatikk:"adjektiv og beskrivende språk"},
  {id:"optiker_assistent",tittel:"Optikerassistent",oppgaver:"ta imot kunder, justere briller, bestille linser, kasse",fagord:"synskorreksjon, brilleinnfatning, linse, synstest, optiker",grammatikk:"fagspesifikke substantiv"},
  {id:"bil_selger",tittel:"Bilselger",oppgaver:"presentere produkter, tilby prøvekjøring, forhandle, kontrakt",fagord:"prøvekjøring, leasingavtale, finansiering, merke, modell",grammatikk:"overtalende og argumenterende språk"},
  {id:"sport_friluft",tittel:"Sportsbutikkmedarbeider",oppgaver:"rådgi kunder, kasse, lagerstyring, produktkunnskap, sesonger",fagord:"utstyr, friluftsliv, sesonger, veiledning, produktgaranti",grammatikk:"komparativ og superlativ"},
  {id:"apotek_assistent",tittel:"Apotekassistent",oppgaver:"ekspedere resepter, veilede kunder, kasse, lagerarbeid",fagord:"legemiddel, resept, generika, virkestoff, dosering",grammatikk:"formell rådgivning og fagspråk"},
  {id:"resepsjonist",tittel:"Resepsjonist",oppgaver:"ta imot gjester, telefon, e-post, booking, arkivering, nøkler",fagord:"gjest, innsjekk, booking, telefonsentral, kalender, faktura",grammatikk:"formell kommunikasjon og e-postskrivning"},
  {id:"reisebyra",tittel:"Reisebyråmedarbeider",oppgaver:"booke reiser, informere kunder, reklamasjon, fakturering",fagord:"itinerar, charter, visum, forsikring, reisebetingelser",grammatikk:"betingelsessetninger"},
  {id:"netthandel",tittel:"Netthandelmedarbeider",oppgaver:"behandle bestillinger, pakke, kundekontakt via chat, retur",fagord:"bestilling, retur, sporingsnummer, pakking, lager, nettbutikk",grammatikk:"skriftlig kundekommunikasjon"},
  {id:"bilpleier",tittel:"Bilpleier",oppgaver:"vaske og polere biler, klargjøre biler, kundeservice",fagord:"polish, voks, innvendig rengjøring, motor, felg, lakk",grammatikk:"fremgangsmåte og rekkefølge"},
  {id:"hundepasser",tittel:"Hundepasser",oppgaver:"passe hunder, lufte, mate, stell, kommunisere med eiere",fagord:"hund, fôr, luftetur, bur, pels, veterinær, eier",grammatikk:"rutine og dagsrytme"},
  {id:"reiseleder",tittel:"Reiseleder",oppgaver:"lede reisegrupper, informere, løse problemer, arrangere aktiviteter",fagord:"reiseprogram, fly, hotell, ruteplan, forsinkelse, nødnummer",grammatikk:"informere og veilede"},
  {id:"bolighandel",tittel:"Eiendomsvisningsassistent",oppgaver:"klargjøre bolig, ta imot interessenter, svare spørsmål",fagord:"visning, planløsning, fellesgjeld, takst, kvadratmeter, bud",grammatikk:"beskrivende setninger"},
],

"Bygg/Industri": [
  {id:"snekker",tittel:"Snekker",oppgaver:"bygge, montere, reparere, lese tegninger, bruke verktøy",fagord:"sag, bor, skrue, planke, tegning, stillas, vernesko",grammatikk:"instruksjoner og rekkefølge"},
  {id:"elektriker",tittel:"Elektriker",oppgaver:"installere strøm, trekke kabler, feilsøke, dokumentere",fagord:"kabel, sikringsskap, jordfeil, spenning, autorisasjon, NEK400",grammatikk:"fagbegreper og sammensatte ord"},
  {id:"rorlegger",tittel:"Rørlegger",oppgaver:"installere og reparere rør, vann og avløp, varmeanlegg",fagord:"rør, ventil, avløp, varmtvann, trykk, lodding",grammatikk:"faglig rapportskriving"},
  {id:"maler",tittel:"Maler",oppgaver:"male vegger og tak, sparkel, tape, overflatebehandling",fagord:"sparkelmasse, primer, rull, pensel, malingtype, overflate",grammatikk:"adjektiv i farge og tilstand"},
  {id:"flislegger",tittel:"Flislegger",oppgaver:"legge flis på gulv og vegger, blande lim, fuging",fagord:"flislim, fuge, nivå, drill, vater, gulvvarme, mønster",grammatikk:"mål og størrelser"},
  {id:"sveiser",tittel:"Sveiser",oppgaver:"sveise metall, slipe, kontrollere sveis, bruke verneutstyr",fagord:"sveisemaskin, verneglass, elektrode, grunnmetall, slagg",grammatikk:"HMS-setninger og sikkerhetskrav"},
  {id:"industrimekaniker",tittel:"Industrimekaniker",oppgaver:"montere, vedlikeholde, feilsøke maskiner, dokumentere",fagord:"komponent, hydraulikk, pneumatikk, feilsøking, toleranse",grammatikk:"teknisk rapportskriving – passiv form"},
  {id:"betongarbeider",tittel:"Betongarbeider",oppgaver:"støpe betong, forskalingsarbeid, armering, vedlikeholde former",fagord:"betong, forskalingsplanker, armering, herdetid, støp",grammatikk:"faglig kommunikasjon og instruksjoner"},
  {id:"isolasjonsfaget",tittel:"Isolasjonsarbeider",oppgaver:"isolere vegger, tak, rør, bruke verneutstyr mot mineralull",fagord:"isolasjon, mineralull, dampsperre, U-verdi, vindsperre",grammatikk:"plikter og sikkerhetskrav"},
  {id:"anleggsarbeider",tittel:"Anleggsarbeider",oppgaver:"graving, legging av rør og kabler, veiarbeid, HMS",fagord:"gravemaskin, kabeltrase, fundament, sprengning, rigg",grammatikk:"presens og preteritum av sterke verb"},
  {id:"stillas",tittel:"Stillasarbeider",oppgaver:"montere og demontere stillas, fallsikring, bæreevne",fagord:"stillas, fallsikring, sertifikat, lastkapasitet, rekkverk",grammatikk:"instruksjoner i passiv form"},
  {id:"gulvlegger",tittel:"Gulvlegger",oppgaver:"legge parkett, laminat, vinyl, klargjøre underlag",fagord:"parkett, laminat, vindsperre, underlagsmatte, ekspansjonsspalte",grammatikk:"mål, mengde og presisjonsspråk"},
  {id:"industriarbeider",tittel:"Industriarbeider",oppgaver:"betjene maskiner, montere, kvalitetskontroll, rapportere avvik",fagord:"produksjonslinje, skift, kvalitetskontroll, verneutstyr",grammatikk:"skift og tider"},
  {id:"naeringsmiddelarbeider",tittel:"Næringsmiddelarbeider",oppgaver:"produsere mat, hygieneregler, pakking, stempeldato, HACCP",fagord:"HACCP, hygiene, emballasje, holdbarhet, produksjonsplan",grammatikk:"hygieneinstruksjoner og rutiner"},
  {id:"bilmekfaget",tittel:"Bilmekaniker",oppgaver:"diagnostisere feil, reparere kjøretøy, service, dokumentere",fagord:"motor, feilkode, serviceskjema, bremseskiver, olje",grammatikk:"fagrapporter og feilbeskrivelse"},
  {id:"cncoperator",tittel:"CNC-operatør",oppgaver:"programmere og betjene CNC-maskiner, kontrollere toleranser",fagord:"CNC, koordinat, toleranse, G-kode, kalibrering",grammatikk:"nøyaktighetsspråk og tekniske termer"},
  {id:"lakkeringsarbeider",tittel:"Lakkeringsarbeider",oppgaver:"lakke overflater, klargjøre, verneutstyr, kvalitetskontroll",fagord:"lakk, primer, spray, åndedrettsvern, herdeboks",grammatikk:"HMS-setninger med alltid og aldri"},
  {id:"tekstilarbeider",tittel:"Tekstilarbeider",oppgaver:"sy, klippe stoff, kvalitetskontroll, pakke produkter",fagord:"symaskin, mønster, stofftype, størrelse, søm, avklipp",grammatikk:"størrelser og mål"},
  {id:"trykkeriarbeider",tittel:"Trykkeriarbeider",oppgaver:"betjene trykkerimaskiner, etterbehandling, kvalitetskontroll",fagord:"trykkeplate, fargeregistrering, opplag, fernis, kassering",grammatikk:"tekniske begreper som adjektiver"},
  {id:"plaststoepefaget",tittel:"Plastarbeider",oppgaver:"betjene sprøytestøpemaskiner, kontrollere produkter, rapportere",fagord:"sprøytestøp, granulat, støpeform, toleranse, avkjøling",grammatikk:"tall og desimaler"},
],

"Administrasjon": [
  {id:"kontormedarbeider",tittel:"Kontormedarbeider",oppgaver:"e-post, arkivering, møteplanlegging, fakturering, rapporter",fagord:"agenda, møteinnkalling, referat, arkiv, faktura, kalender",grammatikk:"formelt skriftspråk og e-poststruktur"},
  {id:"hr_assistent",tittel:"HR-assistent",oppgaver:"ansettelse, lønnsadministrasjon, kurs, trivselstiltak, permisjoner",fagord:"arbeidskontrakt, lønn, permisjon, rekruttering, onboarding",grammatikk:"formelle brev og juridisk språk"},
  {id:"regnskapsmedarbeider",tittel:"Regnskapsmedarbeider",oppgaver:"bilagsregistrering, avstemming, fakturering, momsoppgave",fagord:"bilag, faktura, kontering, MVA, balanse, resultatregnskap",grammatikk:"tall og finansspråk"},
  {id:"it_support",tittel:"IT-støttemedarbeider",oppgaver:"hjelpe brukere, installere programvare, feilsøke, dokumentere",fagord:"brukernavn, passord, nettverk, feilsøking, ticket, programvare",grammatikk:"instruksjoner og feilbeskrivelse"},
  {id:"kundeservice",tittel:"Kundeservicemedarbeider",oppgaver:"ta imot klager, løse problemer, svare telefon og chat, registrere",fagord:"henvendelse, reklamasjon, tilbakemelding, kompensasjon",grammatikk:"unnskyldninger og løsningsorientert språk"},
  {id:"innkjop",tittel:"Innkjøpsassistent",oppgaver:"bestille varer, følge opp leverandører, sjekke pris og kvalitet",fagord:"leverandør, bestilling, pristilbud, levering, reklamasjon",grammatikk:"forretningsbrev og forhandlingsspråk"},
  {id:"personalassistent",tittel:"Personalassistent",oppgaver:"hjelpe ansatte, lønnslipper, fravær, tilrettelegging, kurs",fagord:"lønnslipp, fravær, sykmelding, tilrettelegging, internkurs",grammatikk:"skriftlig kommunikasjon internt"},
  {id:"lageradministrasjon",tittel:"Lageradministrator",oppgaver:"lagerstyring, bestilling, inventar, dokumentasjon, leverandørkontakt",fagord:"lagerstatus, reorder-punkt, inventarliste, ERP-system",grammatikk:"tall og statistikkspråk"},
  {id:"grafisk_assistent",tittel:"Grafisk assistent",oppgaver:"lage enkle grafiske elementer, trykksaker, sosiale medier",fagord:"design, logo, layout, fil, trykk, sosiale medier, mal",grammatikk:"faglig e-post og prosjektbeskrivelse"},
  {id:"tolk_assistent",tittel:"Tolkassistent",oppgaver:"hjelpe med tolking, kulturformidling, møtestøtte, dokumenthjelp",fagord:"tolk, oversette, kultur, kommunikasjon, møte, forstå",grammatikk:"nøytralt og nøyaktig gjengi informasjon"},
],

"Sikkerhet": [
  {id:"vekter",tittel:"Vekter",oppgaver:"overvåke, adgangskontroll, skrive rapport, patruljere, håndtere hendelser",fagord:"adgangskontroll, rapport, patrulje, hendelse, vaktinstruks",grammatikk:"rapportskriving – nøytralt og saklig språk"},
  {id:"ordensvakt",tittel:"Ordensvakt",oppgaver:"opprettholde orden på arrangementer, konflikthåndtering, førstehjelp",fagord:"arrangement, atferdsregler, konflikthåndtering, innstengning",grammatikk:"instruksjoner i stressede situasjoner"},
  {id:"brannkonstabel",tittel:"Brannkonstabel",oppgaver:"slukke branner, redning, forebyggende arbeid, øvelser, rapport",fagord:"brannslange, sprinkler, røykdykking, HMS, redningsutstyr",grammatikk:"nødprosedyrer og rapportspråk"},
  {id:"tollbetjent",tittel:"Tollbetjentassistent",oppgaver:"kontrollere pass og varer, tolldeklerasjon, registrere, kommunisere",fagord:"tolldeklerasjon, innreise, moms, kvoter, beslagleggelse",grammatikk:"lovspråk og myndighetsformuleringer"},
],

"Skjønnhet/Kultur/Sport": [
  {id:"frisor",tittel:"Frisør",oppgaver:"klippe, farge, vaske hår, ta imot kunder, rengjøre, kassejobb",fagord:"saks, farge, sjampo, balsam, behandling, hygiene, time",grammatikk:"kundedialog og konsultasjonsspråk"},
  {id:"hudpleier",tittel:"Hudpleier",oppgaver:"ansiktsbehandlinger, massasje, hårfjerning, produktrådgivning",fagord:"hudtype, behandling, krem, peeling, rensing, SPF",grammatikk:"faglig rådgivning og beskrivende adjektiv"},
  {id:"trener",tittel:"Treningsinstruktør",oppgaver:"lede treningsøkter, motivere, tilpasse program, sikkerhet",fagord:"økt, repetisjon, sett, muskelgruppe, teknikk, treningsprogram",grammatikk:"imperativ i instruksjoner"},
  {id:"librarian",tittel:"Bibliotekassistent",oppgaver:"hjelpe lånere, registrere bøker, hyllestyring, arrangementer",fagord:"låner, bibliotekkatalog, ISBN, deponering, lånekort",grammatikk:"høflighetsfraser og informasjonsspørsmål"},
  {id:"museumsvakt",tittel:"Museumsvakt",oppgaver:"ta imot besøkende, informere, passe på utstillinger, kasse",fagord:"utstilling, omvisning, gjenstand, magasin, billett, monter",grammatikk:"presens historisk og beskrivende fortelling"},
],

"Natur/Landbruk": [
  {id:"gartner",tittel:"Gartner",oppgaver:"plante, klippe, beskjære, vedlikeholde uterom, bruke maskiner",fagord:"gressklipper, plantekasse, gjødsel, jord, sesong, grøntplan",grammatikk:"årstider og sesongbeskrivelse"},
  {id:"parkarbeider",tittel:"Parkarbeider",oppgaver:"vedlikeholde parker, plante blomster, rydde løv, snømåking",fagord:"park, blomsterbed, beplantningsplan, skjøtsel, kompost",grammatikk:"verb som beskriver arbeidsbevegelser"},
  {id:"gardsarbeider",tittel:"Gårdsarbeider",oppgaver:"stelle dyr, melke, gjødsle, høste, reparere, HMS på gård",fagord:"husdyr, fôr, gjødsel, høstesesong, driftsbygning, melkerobot",grammatikk:"rutine og dagsrytme"},
  {id:"akvakultur",tittel:"Akvakulturarbeider",oppgaver:"fôring av fisk, overvåking, utstyrsstell, avlusning, rapportering",fagord:"merd, fôring, biomasse, vekst, lusebehandling",grammatikk:"tall og målingsdata"},
],

};

// Gjør tilgjengelig globalt
window.BRANSJER = BRANSJER;
