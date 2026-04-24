function resolveFullName(row) {
  const full = row.fullName || row.fuldtNavn || row.navn || row.kontaktlaerer || row.kontaktlaererNavn;
  if (full && String(full).trim()) return String(full).trim();
  const fn = row.fornavn || row.firstName || "";
  const en = row.efternavn || row.lastName || "";
  return `${fn} ${en}`.trim();
}

/* Udtalelser v3.5 – statisk GitHub Pages app (ingen libs)
   localStorage prefix: udt_
*/
(() => {
  'use strict';

// --- Embedded fallbacks for file:// usage (avoids CORS blocked fetch) ---
const EMBEDDED_FILE_OVERRIDES = {"sang":{"schema":"hu-elevudtalelser-snippets-override@1","scope":"sang","author":"","createdAt":"2025-12-29","payload":{"sang":{"items":{"S1":{"label":"Sang – niveau 1","text":"{{FORNAVN}} har bidraget til fællessang på allerbedste vis. Med sangglæde, engagement og nysgerrighed har {{FORNAVN}} været en drivkraft i timerne og en inspiration for andre, så de har oplevet det fællesskab, som fællessang kan give."},"S2":{"label":"Sang – niveau 2","text":"{{FORNAVN}} har med godt humør bidraget til fællessang og kor og har derigennem vist sangglæde og åbenhed og fået kendskab til nye sange. {{FORNAVN}} har oplevet det fællesskab, som fællessang kan give."},"S3":{"label":"Sang – niveau 3","text":"{{FORNAVN}} har deltaget i fællessang og kor og har derigennem fået kendskab til nye sange og har oplevet det fællesskab, som fællessang kan give."}},"order":["S1","S2","S3"]}}},"gym":{"schema":"hu-elevudtalelser-snippets-override@1","scope":"gym","author":"","createdAt":"2025-12-29","payload":{"gym":{"variants":{"G1":{"label":"Meget engageret","text":"{{FORNAVN}} har udvist stor interesse for fællesgymnastik, opvisningerne og skolens fællesskab heri. {{FORNAVN}} har udvist stor glæde ved at være en del af, og inddrage andre i fællesskabet og har gennem sin energiske deltagelse i timerne og opvisningerne vist stort engagement, hvilket har virket som en stor drivkraft og motivator for skolens andre elever."},"G2":{"label":"Stabil deltagelse","text":"{{FORNAVN}} har udvist interesse for fællesgymnastik, opvisningerne og for at lære og dygtiggøre sig. {{FORNAVN}} har gennem sin deltagelse i timerne og opvisningerne bidraget positivt og meget aktivt til det store fællesskab."},"G3":{"label":"Varierende deltagelse","text":"{{FORNAVN}} har deltaget aktivt i fællesgymnastik og opvisninger. {{FORNAVN}} har lært alle skolens obligatoriske serier, hvilket har bidraget positivt til opvisningerne og fællesskabet."}},"variantOrder":["G1","G2","G3"],"roles":{"FANEBÆRER":{"label":"Fanebærer","text":"{{FORNAVN}} har været udtaget som en af skolens fanebærere til de fælles gymnastikopvisninger. Et hverv {(HAN_HUN)} fuldt ud har opfyldt, både ansvarsfuldt og respektfuldt. {{FORNAVN}} har som fanebærer repræsenteret skolen og dens værdier på fornemmeste vis."},"REDSKAB":{"label":"Redskabshold","text":"{{FORNAVN}} har været en del af redskabsholdet, som {(HAN_HUN)} frivilligt har meldt sig til. {(HAN_HUN_CAP)} har været en stor hjælp og ydet en kæmpe indsats for at lykkes med skolens opvisninger. {{FORNAVN}} har i den forbindelse vist stort initiativ og ansvar, samt evnen til at løse praktiske problemstillinger på egen hånd."},"DGI":{"label":"DGI-instruktør","text":"{{FORNAVN}} har deltaget aktivt i skolens frivillige samarbejde med Haubro IF, hvor {(HAN_HUN)} har trænet gymnastikholdet for skolebørnene, sideløbende med at {(HAN_HUN)} har taget DGI’s gymnastikuddannelse på skolen. {{FORNAVN}} har vist interesse og engagement for det frivillige foreningsarbejde, {(HAN_HUN)} har ydet en stor indsats i foreningens arbejde og taget det fornødne ansvar."}},"roleOrder":["FANEBÆRER","REDSKAB","DGI"]}}},"elevraad":{"schema":"hu-elevudtalelser-snippets-override@1","scope":"elevraad","author":"","createdAt":"2025-12-29","payload":{"elevraad":{"label":"Elevrådsrepræsentant","text":"{{ELEV_FORNAVN}} har været en del af elevrådet på Himmerlands Efterskole, hvor elevrådet blandt andet har stået for ugentlige fællesmøder for elever og lærere. Derudover har elevrådsarbejdet omfattet en række forskellige opgaver i løbet af året med ansvar for at sætte aktiviteter i gang i fællesskabets ånd. I den forbindelse har {{ELEV_FORNAVN}} vist engagement og vilje til at påtage sig og gennemføre forskellige opgaver og aktiviteter."}}},"templates":{"schema":"hu-elevudtalelser-snippets-override@1","scope":"templates","author":"MM","createdAt":"2026-01-04","payload":{"templates":{"forstanderNavn":"Stinne Krogh Poulsen","schoolText":"På Himmerlands Efterskole arbejder vi med både faglighed, fællesskab og personlig udvikling.\nUdtalelsen er skrevet med udgangspunkt i elevens hverdag og deltagelse gennem skoleåret.","template":"Udtalelse vedrørende {{ELEV_FULDE_NAVN}}\n\n{{ELEV_FORNAVN}} {{ELEV_EFTERNAVN}} har været elev på Himmerlands Efterskole i perioden fra {{PERIODE_FRA}} til {{PERIODE_TIL}} i {{ELEV_KLASSE}}.\n\nHimmerlands Efterskole er en traditionsrig efterskole, som prioriterer fællesskabet og faglig fordybelse højt. Elevernes hverdag er præget af frie rammer og mange muligheder. Vi møder eleverne med tillid, positive forventninger og faglige udfordringer. I løbet af et efterskoleår på Himmerlands Efterskole er oplevelserne mange og udfordringerne ligeså. Det gælder i hverdagens almindelige undervisning, som fordeler sig over boglige fag, fællesfag og profilfag. Det gælder også alle de dage, hvor hverdagen ændres til fordel for temauger, studieture mm. \n\n{{ELEV_UDVIKLING_AFSNIT}}\n{{ELEVRAAD_AFSNIT}}\n{{ROLLE_AFSNIT}}\n\nSom en del af et efterskoleår på Himmerlands Efterskole deltager eleverne ugentligt i fællessang og fællesgymnastik. Begge fag udgør en del af efterskolelivet, hvor eleverne oplever nye sider af sig selv, flytter grænser og oplever, at deres bidrag til fællesskabet har betydning. I løbet af året optræder eleverne med fælleskor og gymnastikopvisninger.\n{{SANG_GYM_AFSNIT}}\n\nPå en efterskole er der mange praktiske opgaver. {{PRAKTISK_AFSNIT}}\n{{ELEV_FORNAVN}} har på Himmerlands Efterskole været en del af en kontaktgruppe på {{KONTAKTGRUPPE_ANTAL}} elever. I kontaktgruppen kender vi {{HAM_HENDE}} som {{KONTAKTGRUPPE_BESKRIVELSE}}.\n\nVi har været rigtig glade for at have {{ELEV_FORNAVN}} som elev på skolen og ønsker {{HAM_HENDE}} held og lykke fremover.\n\n\n\n{{KONTAKTLÆRER_1_NAVN}} & {{KONTAKTLÆRER_2_NAVN}}     {{FORSTANDER_NAVN}}\nKontaktlærere                                                           Forstander\n"}}}};
const EMBEDDED_DEMO_STUDENTS_CSV = `Fornavn,Efternavn,Unilogin,Køn,Klasse,Kontaktlærer1,Kontaktlærer2,Initialer for k-lærer1,Initialer for k-lærer2
Yrsa,Dahl,u10000,k,9A,Qha Kbæk,Lel Rlund,QK,LR
Zara,Zacho,u10001,k,10B,Tsa Ahavn,Vbo Nberg,TA,VN
Clara,Gram,u10002,k,9B,Sro Pson,Hwa Dvang,SP,HD
Åse,Rasmussen,u10003,k,10A,Mol Uskov,Kio Bberg,MU,KB
Ægir,Østergaard,u10004,m,9B,Zka Rborg,Fel Wson,ZR,FW
Ægir,Knudsen,u10005,m,9A,Jmi Llund,Nlu Pfelt,JL,NP
Viggo,Iversen,u10006,m,9A,Gro Xlund,Cmi Bholm,GX,CB
Silas,Jensen,u10007,m,10C,Osa Yson,Dwa Sholm,OY,DS
Birk,Vestergaard,u10008,m,9B,Qci Kbæk,Lda Rfred,QK,LR
Ida,Olsen,u10009,k,10C,Tfa Afelt,Vlu Nson,TA,VN
Zara,Iversen,u10010,k,10C,Sti Pvang,Hfa Drød,SP,HD
Øyvind,Holm,u10011,m,9B,Mmi Uborg,Kul Bzorn,MU,KB
Silas,Holm,u10012,m,10C,Zyo Rdal,Fha Wdal,ZR,FW
Karla,Mikkelsen,u10013,k,9C,Jgi Lskov,Nwa Peng,JL,NP
Gro,Uldall,u10014,k,10A,Gul Xkrog,Cel Bborg,GX,CB
Elin,Holm,u10015,k,10C,Oxe Yskov,Dno Sskov,OY,DS
Maja,Larsen,u10016,k,9B,Qqu Kmark,Lci Rdal,QK,LR
David,Enevold,u10017,m,10C,Tza Awulff,Vno Ntoft,TA,VN
Clara,Mikkelsen,u10018,k,10A,Squ Pborg,Hro Dberg,SP,HD
Zara,Zacho,u10019,k,9A,Myo Uvang,Kka Blund,MU,KB
Jonas,Nielsen,u10020,m,9B,Zal Rborg,Fqu Wsen,ZR,FW
Rosa,Dahl,u10021,k,10C,Jul Lnæs,Nti Pson,JL,NP
Elin,Larsen,u10022,k,9B,Gti Xeng,Cpa Bberg,GX,CB
David,Larsen,u10023,m,9C,Obo Ybæk,Dsa Sholm,OY,DS
Clara,Zacho,u10024,k,10A,Qyo Krød,Lyo Rgaard,QK,LR
Elin,Vestergaard,u10025,k,10A,Tio Anæs,Vti Nhavn,TA,VN
Gro,Rasmussen,u10026,k,10C,Swa Pby,Hmi Dwulff,SP,HD
Yrsa,Larsen,u10027,k,10A,Mda Ubæk,Kha Bholm,MU,KB
Karla,Andersen,u10028,k,10B,Zsa Rbæk,Fal Wholm,ZR,FW
Åse,Uldall,u10029,k,9A,Jci Ldal,Nka Pholm,JL,NP
Rosa,Holm,u10030,k,9C,Ggi Xrød,Cel Bskov,GX,CB
Tilde,Petersen,u10031,k,9B,Oza Yhavn,Dgi Slund,OY,DS
David,Vestergaard,u10032,m,10A,Qno Khavn,Lol Rdal,QK,LR
Zara,Uldall,u10033,k,10C,Tbo Afred,Vxe Neng,TA,VN
David,Holm,u10034,m,9B,Sro Pkrog,Hel Dhavn,SP,HD
Frej,Iversen,u10035,k,10A,Mci Ukrog,Kza Brød,MU,KB
David,Bach,u10036,m,10C,Zci Rbæk,Ffa Whavn,ZR,FW
Pelle,Petersen,u10037,m,9B,Jbo Lsen,Nmi Pberg,JL,NP
Maja,Iversen,u10038,k,10A,Gno Xzorn,Cxe Brød,GX,CB
Zara,Wulff,u10039,k,10A,Ogi Yby,Dgi Sdal,OY,DS
Tilde,Zacho,u10040,k,10B,Qxe Keng,Lbo Rdal,QK,LR
Tilde,Petersen,u10041,k,10B,Tbo Anæs,Vci Nsen,TA,VN
Clara,Thomsen,u10042,k,9A,Smi Plund,Hsa Dbæk,SP,HD
Tilde,Thomsen,u10043,k,9A,Mno Uwulff,Ksa Bskov,MU,KB
Rosa,Knudsen,u10044,k,9C,Zvi Rzorn,Fka Wbæk,ZR,FW
Ida,Mikkelsen,u10045,k,9B,Jol Leng,Nyo Pholm,JL,NP
Asta,Olsen,u10046,k,10B,Gci Xrød,Cgi Bnæs,GX,CB
Ida,Enevold,u10047,k,9C,Oha Yfelt,Djo Ssen,OY,DS
Oline,Æbelø,u10048,k,10B,Qti Kvang,Lqu Rberg,QK,LR
Zara,Æbelø,u10049,k,10B,Tvi Alund,Vel Nborg,TA,VN
David,Dahl,u10050,m,10C,Sio Pby,Hti Dson,SP,HD
Åse,Knudsen,u10051,k,9B,Mqu Umark,Kio Bdal,MU,KB
Clara,Uldall,u10052,k,10A,Zbo Rberg,Fka Wgaard,ZR,FW
Yrsa,Iversen,u10053,k,9B,Jro Lzorn,Nno Prød,JL,NP
Asta,Dahl,u10054,k,9A,Gro Xdal,Clu Bskov,GX,CB
Silas,Enevold,u10055,m,10A,Obo Yby,Dlu Sdal,OY,DS
Lauge,Gram,u10056,m,10C,Qvi Klund,Llu Rrød,QK,LR
Noah,Thomsen,u10057,m,10C,Tha Asen,Vza Nsen,TA,VN
Noah,Andersen,u10058,m,9B,Sza Phavn,Hza Dwulff,SP,HD
Øyvind,Østergaard,u10059,m,9B,Mfa Uzorn,Kda Bfred,MU,KB
Birk,Petersen,u10060,m,9B,Zol Rfelt,Fjo Wbæk,ZR,FW
Hjalte,Andersen,u10061,m,10C,Jmi Leng,Nio Pholm,JL,NP
Ægir,Iversen,u10062,m,9C,Gvi Xrød,Cka Bberg,GX,CB
David,Iversen,u10063,m,9B,Obo Ylund,Dti Shavn,OY,DS
Lauge,Zacho,u10064,m,9C,Qti Knæs,Lda Rfred,QK,LR
Tilde,Gram,u10065,k,9C,Twa Ahavn,Val Nnæs,TA,VN
Silas,Vestergaard,u10066,m,10C,Slu Phavn,Hci Dwulff,SP,HD
Karla,Thomsen,u10067,k,9C,Mxe Uby,Kqu Bby,MU,KB
Zara,Nielsen,u10068,k,9C,Zwa Rby,Fro Wgaard,ZR,FW
Gro,Nielsen,u10069,k,10C,Jvi Lsen,Nti Pskov,JL,NP
Jonas,Mikkelsen,u10070,m,10B,Gjo Xby,Cgi Bhavn,GX,CB
Tilde,Thomsen,u10071,k,10C,Ool Ykrog,Dol Swulff,OY,DS
Gro,Qvist,u10072,k,10A,Qvi Kholm,Ljo Rnæs,QK,LR
Zara,Uldall,u10073,k,10B,Tci Abæk,Vvi Nby,TA,VN
Hjalte,Østergaard,u10074,m,9B,Sal Pdal,Hha Dmark,SP,HD
Viggo,Åkesson,u10075,m,9A,Mno Uvang,Ksa Bson,MU,KB
Åse,Wulff,u10076,k,10A,Zmi Rbæk,Fel Wvang,ZR,FW
Åse,Andersen,u10077,k,9A,Jha Lsen,Nza Pzorn,JL,NP
Rosa,Olsen,u10078,k,9A,Gda Xkrog,Cel Bkrog,GX,CB
Zara,Qvist,u10079,k,10B,Oyo Ykrog,Dti Snæs,OY,DS
Noah,Æbelø,u10080,m,10B,Qfa Kmark,Lol Rborg,QK,LR
Ægir,Holm,u10081,m,10C,Tyo Anæs,Vpa Nvang,TA,VN
Hjalte,Iversen,u10082,m,10A,Swa Pby,Hha Dborg,SP,HD
Karla,Knudsen,u10083,k,10B,Mel Ugaard,Kha Bfred,MU,KB
Åse,Enevold,u10084,k,10C,Zci Rhavn,Fno Weng,ZR,FW
Silas,Olsen,u10085,m,10A,Jgi Lhavn,Nmi Pskov,JL,NP
Åse,Andersen,u10086,k,10B,Gpa Xberg,Clu Bby,GX,CB
Ægir,Mikkelsen,u10087,m,10A,Opa Ybæk,Dio Shavn,OY,DS
Pelle,Andersen,u10088,m,10A,Qvi Kwulff,Lza Rfred,QK,LR
Øyvind,Faber,u10089,m,10A,Tti Arød,Val Nfred,TA,VN
Tilde,Sørensen,u10090,k,10C,Sci Pvang,Hno Dgaard,SP,HD
Oline,Faber,u10091,k,9A,Mmi Ueng,Kgi Bkrog,MU,KB
Karla,Knudsen,u10092,k,10A,Zyo Rhavn,Fio Wholm,ZR,FW
Pelle,Andersen,u10093,m,10C,Jlu Lbæk,Nul Pholm,JL,NP
Ægir,Uldall,u10094,m,9A,Gha Xson,Cal Btoft,GX,CB
Elin,Holm,u10095,k,9B,Ovi Ylund,Dsa Sson,OY,DS
Oline,Wulff,u10096,k,9C,Qfa Ktoft,Lti Rzorn,QK,LR
David,Åkesson,u10097,m,9B,Tda Askov,Val Nby,TA,VN
Tilde,Vestergaard,u10098,k,10A,Swa Pson,Hci Dskov,SP,HD
Åse,Æbelø,u10099,k,10C,Mda Uzorn,Kyo Bby,MU,KB
Zara,Thomsen,u10100,k,9A,Zlu Rrød,Fno Wwulff,ZR,FW
Lauge,Carlsen,u10101,m,10B,Jal Lhavn,Npa Plund,JL,NP
Noah,Larsen,u10102,m,10C,Gwa Xgaard,Cno Bsen,GX,CB
Øyvind,Qvist,u10103,m,10C,Oti Yrød,Dyo Smark,OY,DS
Oline,Nielsen,u10104,k,10C,Qka Kbæk,Lci Rborg,QK,LR
Oline,Holm,u10105,k,10A,Tka Aberg,Vpa Neng,TA,VN
Frej,Petersen,u10106,k,9B,Sza Pborg,Hka Dborg,SP,HD
Viggo,Wulff,u10107,m,9C,Mqu Uson,Kci Bbæk,MU,KB
Øyvind,Nielsen,u10108,m,10A,Zwa Rmark,Ful Wzorn,ZR,FW
Pelle,Olsen,u10109,m,9A,Jjo Lbæk,Nmi Pzorn,JL,NP
Hjalte,Jensen,u10110,m,10C,Gpa Xrød,Cqu Bfelt,GX,CB
Noah,Zacho,u10111,m,10B,Olu Yzorn,Dol Sborg,OY,DS
Jonas,Iversen,u10112,m,9B,Qxe Kson,Lka Rlund,QK,LR
Øyvind,Rasmussen,u10113,m,10C,Tgi Ason,Vxe Nmark,TA,VN
Ida,Zacho,u10114,k,10B,Sda Pson,Hjo Dbæk,SP,HD
Lauge,Faber,u10115,m,9C,Mwa Urød,Kel Bborg,MU,KB
Birk,Bach,u10116,m,10B,Zwa Rgaard,Ful Wmark,ZR,FW
David,Andersen,u10117,m,10B,Jpa Lmark,Nol Peng,JL,NP
Frej,Bach,u10118,k,9C,Gda Xholm,Cmi Bmark,GX,CB
Clara,Sørensen,u10119,k,10C,Oel Ygaard,Dza Sskov,OY,DS
Jonas,Carlsen,u10120,m,9B,Qro Khavn,Lti Rtoft,QK,LR
Viggo,Holm,u10121,m,10B,Tol Akrog,Vjo Nskov,TA,VN
Noah,Jensen,u10122,m,10B,Sti Plund,Hyo Dson,SP,HD
Yrsa,Gram,u10123,k,9C,Mfa Ubæk,Kfa Brød,MU,KB
Clara,Faber,u10124,k,9A,Zol Rzorn,Fti Wmark,ZR,FW
Jonas,Bach,u10125,m,9B,Jwa Lby,Nwa Pkrog,JL,NP
Clara,Vestergaard,u10126,k,9B,Gza Xvang,Csa Bwulff,GX,CB
Gro,Nielsen,u10127,k,9A,Oul Ygaard,Dio Sgaard,OY,DS
Clara,Bach,u10128,k,9B,Qti Kskov,Ljo Rkrog,QK,LR
David,Olsen,u10129,m,10C,Twa Afred,Vio Nnæs,TA,VN
Silas,Petersen,u10130,m,10A,Sti Pdal,Hno Deng,SP,HD
Viggo,Iversen,u10131,m,9A,Mha Uwulff,Ksa Bskov,MU,KB
Asta,Åkesson,u10132,k,10C,Zsa Rdal,Fyo Wsen,ZR,FW
Pelle,Qvist,u10133,m,10C,Jio Lsen,Nsa Phavn,JL,NP
Yrsa,Æbelø,u10134,k,10A,Gpa Xfelt,Cno Beng,GX,CB
Karla,Vestergaard,u10135,k,9A,Oka Yhavn,Dwa Smark,OY,DS
Jonas,Vestergaard,u10136,m,10A,Qol Kholm,Lka Rborg,QK,LR
Karla,Dahl,u10137,k,10A,Tvi Arød,Vol Nhavn,TA,VN
Birk,Gram,u10138,m,10B,Sti Pmark,Hul Dkrog,SP,HD
Ægir,Bach,u10139,m,9B,Mro Ugaard,Kjo Bkrog,MU,KB
Åse,Petersen,u10140,k,9A,Zul Rtoft,Fza Wbæk,ZR,FW
Åse,Faber,u10141,k,9C,Jro Lhavn,Nci Pbæk,JL,NP
David,Olsen,u10142,m,9A,Gpa Xzorn,Cjo Bnæs,GX,CB
Åse,Iversen,u10143,k,10A,Opa Ybæk,Dol Srød,OY,DS
Elin,Mikkelsen,u10144,k,9B,Qci Kborg,Lyo Rhavn,QK,LR
Karla,Østergaard,u10145,k,10B,Tal Aby,Vxe Nby,TA,VN
Tilde,Sørensen,u10146,k,10C,Sel Pkrog,Hro Dmark,SP,HD
Lauge,Knudsen,u10147,m,10B,Mol Ueng,Kgi Bzorn,MU,KB
Hjalte,Sørensen,u10148,m,10A,Zyo Rhavn,Fbo Weng,ZR,FW
Øyvind,Petersen,u10149,m,10C,Jmi Lwulff,Nza Pvang,JL,NP
Elin,Petersen,u10150,k,9A,Gqu Xskov,Cka Blund,GX,CB
Oline,Dahl,u10151,k,10B,Oal Ygaard,Dno Svang,OY,DS`;


  const PRINT_HEADER_LOGO_DATAURL = "data:image/jpeg;base64,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";
// Used for cache-busting verification in the UI.
  // If a browser still shows an older build id, it's caching an old app.js.
  const BUILD_ID = '';

  const LS_PREFIX = 'udt_';

  // ---------- Print logo override ----------
  // Priority:
  // 1) Local *test* logo (stored in localStorage) for quick preview before committing to repo
  // 2) Repo override file (/overrides/print_logo.png or .svg)
  // 3) Hardcoded fallback (PRINT_HEADER_LOGO_DATAURL)
  const PRINT_LOGO_LOCAL_KEY = LS_PREFIX + 'print_logo_local_v1';
  const PRINT_LOGO_REMOTE_CANDIDATES = [
    './overrides/print_logo.png',
    './overrides/print_logo.svg',
    '/overrides/print_logo.png',
    '/overrides/print_logo.svg'
  ];
  let PRINT_LOGO_REMOTE_CACHE = null; // dataURL or null



  /* ---------- Multi-tab single-writer lock ----------
     Goal: Only one tab can write to localStorage at a time.
     - First tab gets edit access.
     - Other tabs become view-only and see a banner.
     - They can click "Overtag redigering" to take over.
  */
  const TAB_ID_KEY = LS_PREFIX + 'tab_id';
  const LOCK_KEY   = LS_PREFIX + 'tab_lock';
  const LOCK_TTL_MS = 8000;      // lock considered stale after this
  const HEARTBEAT_MS = 2000;     // owner refresh interval

  const getTabId = () => {
    try{
      const fromSession = sessionStorage.getItem(TAB_ID_KEY);
      if (fromSession) return fromSession;
      const id = Math.random().toString(16).slice(2) + '-' + Date.now().toString(16);
      sessionStorage.setItem(TAB_ID_KEY, id);
      return id;
    }catch(_){
      return 'tab-' + Date.now();
    }
  };
  const TAB_ID = getTabId();

  let isWriterTab = false;
  let heartbeatTimer = null;

  const readLock = () => {
    try{
      const raw = localStorage.getItem(LOCK_KEY);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (!obj || typeof obj !== 'object') return null;
      return { id: String(obj.id||''), ts: Number(obj.ts||0) };
    }catch(_){ return null; }
  };

  const writeLock = (force = false) => {
    // force=true used by "Overtag redigering"
    try{
      const current = readLock();
      const stale = !current || (Date.now() - current.ts) > LOCK_TTL_MS;
      if (force || !current || stale || current.id === TAB_ID){
        localStorage.setItem(LOCK_KEY, JSON.stringify({ id: TAB_ID, ts: Date.now() }));
        return true;
      }
    }catch(_){}
    return false;
  };

  // Patch localStorage writes so non-writer tabs cannot persist changes.
  const _lsSetItem = Storage.prototype.setItem;
  const _lsRemoveItem = Storage.prototype.removeItem;
  const _lsClear = Storage.prototype.clear;

  Storage.prototype.setItem = function(k, v){
    if (!isWriterTab && String(k) !== LOCK_KEY) return;
    return _lsSetItem.call(this, k, v);
  };
  Storage.prototype.removeItem = function(k){
    if (!isWriterTab && String(k) !== LOCK_KEY) return;
    return _lsRemoveItem.call(this, k);
  };
  Storage.prototype.clear = function(){
    if (!isWriterTab) return;
    return _lsClear.call(this);
  };

  const ensureLockBanner = () => {
    let el = document.getElementById('udtTabLockBanner');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'udtTabLockBanner';
    el.className = 'udt-lock-banner no-print';
    el.innerHTML = `
      <div class="udt-lock-text">
        <strong>Appen er åben i en anden fane</strong>
        <span class="udt-lock-sub">Denne fane er i visning-tilstand.</span>
      </div>
      <button type="button" class="btn small" id="udtTakeoverBtn" title="Overtag redigering (hvis den anden fane er lukket eller du vil overtage)">
        Overtag redigering
      </button>
    `.trim();

    const header = document.querySelector('header.topbar');
    if (header && header.parentNode){
      header.parentNode.insertBefore(el, header.nextSibling);
    }else{
      document.body.insertBefore(el, document.body.firstChild);
    }

    el.querySelector('#udtTakeoverBtn')?.addEventListener('click', () => {
      // Take over lock, then sync latest state from localStorage before enabling edits
      writeLock(true);
      evaluateTabLock(true);
      try { syncFromLocalStorageAndRender(); } catch(_) {}
    });

    return el;
  };

  const setControlsDisabled = (disabled) => {
    // Disable form controls in view-only tabs to avoid "false edits"
    const ctrls = document.querySelectorAll('main.app input, main.app textarea, main.app select');
    ctrls.forEach(ctrl => {
      const prev = ctrl.getAttribute('data-udt-prev-disabled');
      if (disabled){
        if (prev === null) ctrl.setAttribute('data-udt-prev-disabled', ctrl.disabled ? '1' : '0');
        ctrl.disabled = true;
      }else{
        if (prev !== null){
          ctrl.disabled = (prev === '1');
          ctrl.removeAttribute('data-udt-prev-disabled');
        }
      }
    });
  };

  const applyWriterState = (writer) => {
    const was = isWriterTab;
    isWriterTab = !!writer;

    // Banner
    const banner = ensureLockBanner();
    banner.style.display = isWriterTab ? 'none' : 'flex';

    // Disable / enable controls
    document.body.classList.toggle('udt-readonly', !isWriterTab);
    setControlsDisabled(!isWriterTab);

    // Heartbeat
    if (isWriterTab){
      if (!heartbeatTimer){
        heartbeatTimer = setInterval(() => {
          try{ localStorage.setItem(LOCK_KEY, JSON.stringify({ id: TAB_ID, ts: Date.now() })); }catch(_){}
        }, HEARTBEAT_MS);
      }
    }else{
      if (heartbeatTimer){
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
    }

    // If we just became writer, also refresh to re-enable UI states correctly
    if (!was && isWriterTab){
      try{ setTimeout(() => setControlsDisabled(false), 0); }catch(_){}
    }
  };


  const syncFromLocalStorageAndRender = () => {
    // Ensure any derived/cached structures are rebuilt from latest localStorage,
    // then re-render UI. This avoids stale in-memory state after "Overtag redigering".
    try { rebuildAliasMapFromStudents(getStudents()); } catch(_) {}
    try { renderAll(); } catch(_) {}
  };

  const evaluateTabLock = (fromTakeover = false) => {
    const lock = readLock();
    const stale = !lock || (Date.now() - lock.ts) > LOCK_TTL_MS;

    if (!lock || stale || lock.id === TAB_ID){
      // Acquire / refresh
      const ok = writeLock(fromTakeover);
      applyWriterState(!!ok);
      return;
    }
    // Someone else owns it
    applyWriterState(false);
  };

  // Listen for other tabs: lock changes + data changes
  window.addEventListener('storage', (e) => {
    if (!e || !e.key) return;
    const k = String(e.key);

    if (k === LOCK_KEY){
      evaluateTabLock(false);
      return;
    }

    // Keep view-only tabs in sync with latest data written by the writer tab
    if (!isWriterTab && k.startsWith(LS_PREFIX)){
      try { syncFromLocalStorageAndRender(); } catch(_) {}
    }
  });
// Acquire lock ASAP (before first render)
  evaluateTabLock(false);

  // Release lock on close (best-effort)
  window.addEventListener('beforeunload', () => {
    try{
      const lock = readLock();
      if (lock && lock.id === TAB_ID) localStorage.removeItem(LOCK_KEY);
    }catch(_){}
  });

  /* ---------- end tab lock ---------- */

  const KEYS = {
    settings: LS_PREFIX + 'settings',
    students:  LS_PREFIX + 'students',
    templates: LS_PREFIX + 'templates',
    templatesImported: LS_PREFIX + 'templates_imported',
    marksSang: LS_PREFIX + 'marks_sang',
    marksGym:  LS_PREFIX + 'marks_gym',
    marksElev: LS_PREFIX + 'marks_elevraad',
	  marksType: LS_PREFIX + 'marks_type',
    textPrefix: LS_PREFIX + 'text_' // + unilogin
  };

  // Post-import hint used to avoid landing on an empty K-elever view when a backup
  // doesn't contain a chosen K-lærer.
  // Stored as JSON: { showInfo: true, suggestedIni?: "AB" }
  const KEY_POST_IMPORT_TEACHER_HINT = LS_PREFIX + 'post_import_teacher_hint';

	// Backwards-compat alias used by some older event handlers
	// Backwards-compat alias (older builds referenced KEY_MARKS_TYPE directly)
	const KEY_MARKS_TYPE = KEYS.marksType;

  const TEACHER_ALIAS_MAP = {}; // v1.0: no hardcoded teacher directory (persondata-safe)


  let SNIPPETS = {
    sang: {
      "S1": {
        "title": "Sang – niveau 1",
        "text_m": "{{FORNAVN}} har bidraget til fællessang på allerbedste vis. Med sangglæde, engagement og nysgerrighed har {{FORNAVN}} været en drivkraft i timerne og en inspiration for andre, så de har oplevet det fællesskab, som fællessang kan give.",
        "text_k": "{{FORNAVN}} har bidraget til fællessang på allerbedste vis. Med sangglæde, engagement og nysgerrighed har {{FORNAVN}} været en drivkraft i timerne og en inspiration for andre, så de har oplevet det fællesskab, som fællessang kan give."
      },
      "S2": {
        "title": "Sang – niveau 2",
        "text_m": "{{FORNAVN}} har med godt humør bidraget til fællessang og kor og har derigennem vist sangglæde og åbenhed og fået kendskab til nye sange. {{FORNAVN}} har oplevet det fællesskab, som fællessang kan give.",
        "text_k": "{{FORNAVN}} har med godt humør bidraget til fællessang og kor og har derigennem vist sangglæde og åbenhed og fået kendskab til nye sange. {{FORNAVN}} har oplevet det fællesskab, som fællessang kan give."
      },
      "S3": {
        "title": "Sang – niveau 3",
        "text_m": "{{FORNAVN}} har deltaget i fællessang og kor og har derigennem fået kendskab til nye sange og har oplevet det fællesskab, som fællessang kan give.",
        "text_k": "{{FORNAVN}} har deltaget i fællessang og kor og har derigennem fået kendskab til nye sange og har oplevet det fællesskab, som fællessang kan give."
      }
    },
    gym:  {
  "G1": {
    "title": "Meget engageret",
    "text_m": "{{FORNAVN}} har udvist stor interesse for fællesgymnastik, opvisningerne og skolens fællesskab heri. {{FORNAVN}} har udvist stor glæde ved at være en del af, og inddrage andre i fællesskabet og har gennem sin energiske deltagelse i timerne og opvisningerne vist stort engagement, hvilket har virket som en stor drivkraft og motivator for skolens andre elever.",
    "text_k": "{{FORNAVN}} har udvist stor interesse for fællesgymnastik, opvisningerne og skolens fællesskab heri. {{FORNAVN}} har udvist stor glæde ved at være en del af, og inddrage andre i fællesskabet og har gennem sin energiske deltagelse i timerne og opvisningerne vist stort engagement, hvilket har virket som en stor drivkraft og motivator for skolens andre elever."
  },
  "G2": {
    "title": "Stabil deltagelse",
    "text_m": "{{FORNAVN}} har udvist interesse for fællesgymnastik, opvisningerne og for at lære og dygtiggøre sig. {{FORNAVN}} har gennem sin deltagelse i timerne og opvisningerne bidraget positivt og meget aktivt til det store fællesskab.",
    "text_k": "{{FORNAVN}} har udvist interesse for fællesgymnastik, opvisningerne og for at lære og dygtiggøre sig. {{FORNAVN}} har gennem sin deltagelse i timerne og opvisningerne bidraget positivt og meget aktivt til det store fællesskab."
  },
  "G3": {
    "title": "Varierende deltagelse",
    "text_m": "{{FORNAVN}} har deltaget aktivt i fællesgymnastik og opvisninger. {{FORNAVN}} har lært alle skolens obligatoriske serier, hvilket har bidraget positivt til opvisningerne og fællesskabet.",
    "text_k": "{{FORNAVN}} har deltaget aktivt i fællesgymnastik og opvisninger. {{FORNAVN}} har lært alle skolens obligatoriske serier, hvilket har bidraget positivt til opvisningerne og fællesskabet."
  }
},
    roller: {
  "FANEBÆRER": {
    "title": "Fanebærer",
    "text_m": "{{FORNAVN}} har været udtaget som en af skolens fanebærere til de fælles gymnastikopvisninger. Et hverv {(HAN_HUN)} fuldt ud har opfyldt, både ansvarsfuldt og respektfuldt. {{FORNAVN}} har som fanebærer repræsenteret skolen og dens værdier på fornemmeste vis.",
    "text_k": "{{FORNAVN}} har været udtaget som en af skolens fanebærere til de fælles gymnastikopvisninger. Et hverv {(HAN_HUN)} fuldt ud har opfyldt, både ansvarsfuldt og respektfuldt. {{FORNAVN}} har som fanebærer repræsenteret skolen og dens værdier på fornemmeste vis."
  },
  "REDSKAB": {
    "title": "Redskabshold",
    "text_m": "{{FORNAVN}} har været en del af redskabsholdet, som {(HAN_HUN)} frivilligt har meldt sig til. {(HAN_HUN_CAP)} har været en stor hjælp og ydet en kæmpe indsats for at lykkes med skolens opvisninger. {{FORNAVN}} har i den forbindelse vist stort initiativ og ansvar, samt evnen til at løse praktiske problemstillinger på egen hånd.",
    "text_k": "{{FORNAVN}} har været en del af redskabsholdet, som {(HAN_HUN)} frivilligt har meldt sig til. {(HAN_HUN_CAP)} har været en stor hjælp og ydet en kæmpe indsats for at lykkes med skolens opvisninger. {{FORNAVN}} har i den forbindelse vist stort initiativ og ansvar, samt evnen til at løse praktiske problemstillinger på egen hånd."
  },
  "DGI": {
    "title": "DGI-instruktør",
    "text_m": "{{FORNAVN}} har deltaget aktivt i skolens frivillige samarbejde med Haubro IF, hvor {(HAN_HUN)} har trænet gymnastikholdet for skolebørnene, sideløbende med at {(HAN_HUN)} har taget DGI’s gymnastikuddannelse på skolen. {{FORNAVN}} har vist interesse og engagement for det frivillige foreningsarbejde, {(HAN_HUN)} har ydet en stor indsats i foreningens arbejde og taget det fornødne ansvar.",
    "text_k": "{{FORNAVN}} har deltaget aktivt i skolens frivillige samarbejde med Haubro IF, hvor {(HAN_HUN)} har trænet gymnastikholdet for skolebørnene, sideløbende med at {(HAN_HUN)} har taget DGI’s gymnastikuddannelse på skolen. {{FORNAVN}} har vist interesse og engagement for det frivillige foreningsarbejde, {(HAN_HUN)} har ydet en stor indsats i foreningens arbejde og taget det fornødne ansvar."
  }
},
    elevraad: {
      YES: {
        title: "Elevrådsrepræsentant",
        text_m: "{{ELEV_FORNAVN}} har været en del af elevrådet på Himmerlands Efterskole, hvor elevrådet blandt andet har stået for ugentlige fællesmøder for elever og lærere. Derudover har elevrådsarbejdet omfattet en række forskellige opgaver i løbet af året med ansvar for at sætte aktiviteter i gang i fællesskabets ånd. I den forbindelse har {{ELEV_FORNAVN}} vist engagement og vilje til at påtage sig og gennemføre forskellige opgaver og aktiviteter.",
        text_k: "{{ELEV_FORNAVN}} har været en del af elevrådet på Himmerlands Efterskole, hvor elevrådet blandt andet har stået for ugentlige fællesmøder for elever og lærere. Derudover har elevrådsarbejdet omfattet en række forskellige opgaver i løbet af året med ansvar for at sætte aktiviteter i gang i fællesskabets ånd. I den forbindelse har {{ELEV_FORNAVN}} vist engagement og vilje til at påtage sig og gennemføre forskellige opgaver og aktiviteter."
      }
    },
    kontaktgruppeDefault: "I kontaktgruppen har vi arbejdet med trivsel, ansvar og fællesskab.",
    afslutningDefault: "Vi ønsker eleven alt det bedste fremover."
  };

  // Backwards compatibility: some code paths still reference DEFAULT_ALIAS_MAP.
  // Keep it as an alias of TEACHER_ALIAS_MAP.
  const DEFAULT_ALIAS_MAP = {}; // v1.0: no defaults


    const SNIPPETS_DEFAULT = JSON.parse(JSON.stringify(SNIPPETS));

const DEFAULT_SCHOOL_TEXT = `På Himmerlands Efterskole arbejder vi med både faglighed, fællesskab og personlig udvikling.
Udtalelsen er skrevet med udgangspunkt i elevens hverdag og deltagelse gennem skoleåret.`;

  const DEFAULT_TEMPLATE = "Udtalelse vedrørende {{ELEV_FULDE_NAVN}}\n\n{{ELEV_FORNAVN}} {{ELEV_EFTERNAVN}} har været elev på Himmerlands Efterskole i perioden fra {{PERIODE_FRA}} til {{PERIODE_TIL}} i {{ELEV_KLASSE}}.\n\nHimmerlands Efterskole er en traditionsrig efterskole, som prioriterer fællesskabet og faglig fordybelse højt. Elevernes hverdag er præget af frie rammer og mange muligheder. Vi møder eleverne med tillid, positive forventninger og faglige udfordringer. I løbet af et efterskoleår på Himmerlands Efterskole er oplevelserne mange og udfordringerne ligeså. Det gælder i hverdagens almindelige undervisning, som fordeler sig over boglige fag, fællesfag og profilfag. Det gælder også alle de dage, hvor hverdagen ændres til fordel for temauger, studieture mm. \n\n{{ELEV_UDVIKLING_AFSNIT}}\n{{ELEVRAAD_AFSNIT}}\n{{ROLLE_AFSNIT}}\n\nSom en del af et efterskoleår på Himmerlands Efterskole deltager eleverne ugentligt i fællessang og fællesgymnastik. Begge fag udgør en del af efterskolelivet, hvor eleverne oplever nye sider af sig selv, flytter grænser og oplever, at deres bidrag til fællesskabet har betydning. I løbet af året optræder eleverne med fælleskor og gymnastikopvisninger.\n{{SANG_GYM_AFSNIT}}\n\nPå en efterskole er der mange praktiske opgaver. {{PRAKTISK_AFSNIT}}\n{{ELEV_FORNAVN}} har på Himmerlands Efterskole været en del af en kontaktgruppe på {{KONTAKTGRUPPE_ANTAL}} elever. I kontaktgruppen kender vi {{HAM_HENDE}} som {{KONTAKTGRUPPE_BESKRIVELSE}}.\n\nVi har været rigtig glade for at have {{ELEV_FORNAVN}} som elev på skolen og ønsker {{HAM_HENDE}} held og lykke fremover.\n\n\n\n{{KONTAKTLÆRER_1_NAVN}} & {{KONTAKTLÆRER_2_NAVN}}     {{FORSTANDER_NAVN}}\nKontaktlærere                                                           Forstander\n";

  // ---------- storage ----------
  function lsGet(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      if (v === null || v === undefined) return fallback;
      return JSON.parse(v);
    } catch {
      return fallback;
    }
  }
  function lsSet(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

  // Compatibility alias used by some UI handlers
  function saveLS(key, value) { return lsSet(key, value); }

  function lsDelPrefix(prefix) {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) keys.push(k);
    }
    keys.forEach(k => localStorage.removeItem(k));
  }

  
// ---------- snippet overrides (deling mellem lærere) ----------
const SNIPPETS_LEGACY_KEY = 'udt_snippets_override_v1';
const SNIPPETS_IMPORTED_KEY = 'udt_snippets_imported_v1';
const SNIPPETS_DRAFT_KEY = 'udt_snippets_draft_v1';
const OVERRIDE_SCHEMA = 'hu-elevudtalelser-snippets-override@1';
// --- Remote overrides from GitHub Pages (optional) -------------------------
// If files exist in /overrides/, they are merged on top of defaults.
// Missing files are ignored silently.
const REMOTE_OVERRIDE_FILES = {
  sang: './overrides/sang_override.json',
  gym: './overrides/gym_override.json',
  elevraad: './overrides/elevraad_override.json',
  templates: './overrides/templates_override.json',
};
let REMOTE_OVERRIDES = { sang: null, gym: null, elevraad: null, templates: null };

// Meta flags: used to avoid overwriting deliberate local edits when refreshing overrides.
// If a user edits templates/snippets locally, we should not auto-overwrite on tab changes.
const META_KEYS = {
  templatesDirty: 'udt_templatesDirty_v1',
  snippetsDirty: 'udt_snippetsDirty_v1',
  remoteOverridesFetchedAt: 'udt_remoteOverridesFetchedAt_v1',
};

function isTemplatesDirty(){ return !!lsGet(META_KEYS.templatesDirty, false); }
function setTemplatesDirty(v){ lsSet(META_KEYS.templatesDirty, !!v); }
function hasTemplatesDirtyMeta(){ try { return localStorage.getItem(META_KEYS.templatesDirty) !== null; } catch(_) { return true; } }
function isSnippetsDirty(){ return !!lsGet(META_KEYS.snippetsDirty, false); }
function setSnippetsDirty(v){ lsSet(META_KEYS.snippetsDirty, !!v); }

function stampOverridesFetched(){ lsSet(META_KEYS.remoteOverridesFetchedAt, Date.now()); }
function overridesFetchedAt(){ return lsGet(META_KEYS.remoteOverridesFetchedAt, 0) || 0; }


function cacheBust(url){
  const v = Date.now();
  return url + (url.includes('?') ? '&' : '?') + 'v=' + v;
}
async function fetchJsonIfExists(url){
  try{
    const res = await fetch(cacheBust(url), { cache: 'no-store' });
    if (!res.ok) return null; // 404 etc.
    return await res.json();
  }catch(_e){
    return null;
  }
}
function unwrapOverridePack(pack){
  if (!pack) return null;
  // Accept either full package {schema,scope,payload} or raw payload object
  if (pack.payload) return pack.payload;
  return pack;
}

// Convert JSON-escaped newlines (\n) into real newlines so templates render correctly.
// This makes overrides robust whether they store real newlines or \n sequences.
function normalizeOverrideText(s){
  if (typeof s !== 'string') return s;
  // If the string contains literal "\n", turn it into a newline.
  // Also handle "\r\n" -> "\n" -> newline.
  return s
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n");
}
function normalizeOverrideDeep(obj){
  if (!obj) return obj;
  if (typeof obj === 'string') return normalizeOverrideText(obj);
  if (Array.isArray(obj)) return obj.map(normalizeOverrideDeep);
  if (typeof obj === 'object') {
    const out = {};
    Object.keys(obj).forEach(k => { out[k] = normalizeOverrideDeep(obj[k]); });
    return out;
  }
  return obj;
}


async function loadRemoteOverrides(){
  if (location && location.protocol === 'file:' && EMBEDDED_FILE_OVERRIDES) {
    const pack = EMBEDDED_FILE_OVERRIDES;
    const tplPack = unwrapOverridePack(pack.templates);
    const tplObj = (tplPack && tplPack.templates) ? tplPack.templates : tplPack;
    REMOTE_OVERRIDES = {
      sang: normalizeOverrideDeep(unwrapOverridePack(pack.sang)),
      gym: normalizeOverrideDeep(unwrapOverridePack(pack.gym)),
      elevraad: normalizeOverrideDeep(unwrapOverridePack(pack.elevraad)),
      templates: normalizeOverrideDeep(tplObj),
    };
    stampOverridesFetched();
    return;
  }
  const [sang, gym, elevraad, templates] = await Promise.all([
    fetchJsonIfExists(REMOTE_OVERRIDE_FILES.sang),
    fetchJsonIfExists(REMOTE_OVERRIDE_FILES.gym),
    fetchJsonIfExists(REMOTE_OVERRIDE_FILES.elevraad),
    fetchJsonIfExists(REMOTE_OVERRIDE_FILES.templates),
  ]);
  // NOTE: templates_override.json is a packed object: { templates: { schoolText, template, ... } }
  // We want the inner "templates" object to be the merge target.
  const tplPack = unwrapOverridePack(templates);
  const tplObj = (tplPack && tplPack.templates) ? tplPack.templates : tplPack;
  const tplObjNorm = normalizeOverrideDeep(tplObj);

  REMOTE_OVERRIDES = {
    sang: normalizeOverrideDeep(unwrapOverridePack(sang)),
    gym: normalizeOverrideDeep(unwrapOverridePack(gym)),
    elevraad: normalizeOverrideDeep(unwrapOverridePack(elevraad)),
    templates: tplObjNorm,
  };
  stampOverridesFetched();
}


function getSnippetImported() {
  return lsGet(SNIPPETS_IMPORTED_KEY, {}) || {};
}
function setSnippetImported(o) {
  lsSet(SNIPPETS_IMPORTED_KEY, o || {});
}
function getSnippetDraft() {
  // Backward compatibility: migrate legacy key -> draft
  const draft = lsGet(SNIPPETS_DRAFT_KEY, null);
  if (draft) return draft || {};
  const legacy = lsGet(SNIPPETS_LEGACY_KEY, null);
  if (legacy) {
    lsSet(SNIPPETS_DRAFT_KEY, legacy);
    try { localStorage.removeItem(SNIPPETS_LEGACY_KEY); } catch {}
    return legacy || {};
  }
  return {};
}
function setSnippetDraft(o) {
  lsSet(SNIPPETS_DRAFT_KEY, o || {});
}

function clearLocalSnippetScope(scope){
  const d = getSnippetDraft();
  const i = getSnippetImported();
  if (scope && typeof scope === 'string') {
    delete d[scope];
    delete i[scope];
  }
  setSnippetDraft(d);
  setSnippetImported(i);
  // If nothing local remains, allow auto-refresh again
  if (Object.keys(d).length === 0 && Object.keys(i).length === 0) setSnippetsDirty(false);
}
function applySnippetOverrides() {
  const remote = REMOTE_OVERRIDES || {};
  const imported = getSnippetImported();
  const draft = getSnippetDraft();

  // start fra defaults (deep clone)
  SNIPPETS = JSON.parse(JSON.stringify(SNIPPETS_DEFAULT));

  function applyPack(pack){
    if(!pack) return;

    // If a full override package was stored, unwrap payload
    if (pack.payload) pack = pack.payload;

    // --- Sang
    const sang = pack.sang && (pack.sang.items ? pack.sang : pack.sang.sang); // accept nested
    if (sang && sang.items) {
      Object.keys(sang.items).forEach(k => {
        const it = sang.items[k] || {};
        if (!SNIPPETS.sang[k]) SNIPPETS.sang[k] = { title: k, text_m: '', text_k: '' };
        if (typeof it.label === 'string' && it.label.trim()) SNIPPETS.sang[k].title = it.label.trim();
        if (typeof it.text === 'string') { SNIPPETS.sang[k].text_m = it.text; SNIPPETS.sang[k].text_k = it.text; }
        // allow direct text_m/text_k too
        if (typeof it.text_m === 'string') SNIPPETS.sang[k].text_m = it.text_m;
        if (typeof it.text_k === 'string') SNIPPETS.sang[k].text_k = it.text_k;
      });
    } else if (pack.snippets && pack.snippets.sang) {
      Object.keys(pack.snippets.sang).forEach(k => {
        const it = pack.snippets.sang[k] || {};
        if (!SNIPPETS.sang[k]) SNIPPETS.sang[k] = { title: k, text_m: '', text_k: '' };
        if (typeof it.label === 'string') SNIPPETS.sang[k].title = it.label;
        if (typeof it.text === 'string') { SNIPPETS.sang[k].text_m = it.text; SNIPPETS.sang[k].text_k = it.text; }
      });
    }

    // --- Gym (varianter + roller)
    const gym = pack.gym && (pack.gym.variants || pack.gym.roles) ? pack.gym : (pack.gym && pack.gym.gym ? pack.gym.gym : null);
    if (gym && gym.variants) {
      Object.keys(gym.variants).forEach(k => {
        const it = gym.variants[k] || {};
        if (!SNIPPETS.gym[k]) SNIPPETS.gym[k] = { title: k, text_m: '', text_k: '' };
        if (typeof it.label === 'string' && it.label.trim()) SNIPPETS.gym[k].title = it.label.trim();
        if (typeof it.text === 'string') { SNIPPETS.gym[k].text_m = it.text; SNIPPETS.gym[k].text_k = it.text; }
        if (typeof it.text_m === 'string') SNIPPETS.gym[k].text_m = it.text_m;
        if (typeof it.text_k === 'string') SNIPPETS.gym[k].text_k = it.text_k;
      });
    }
    if (gym && gym.roles) {
      Object.keys(gym.roles).forEach(k => {
        const it = gym.roles[k] || {};
        if (!SNIPPETS.roller[k]) SNIPPETS.roller[k] = { title: k, text_m: '', text_k: '' };
        if (typeof it.label === 'string' && it.label.trim()) SNIPPETS.roller[k].title = it.label.trim();
        if (typeof it.text === 'string') { SNIPPETS.roller[k].text_m = it.text; SNIPPETS.roller[k].text_k = it.text; }
        if (typeof it.text_m === 'string') SNIPPETS.roller[k].text_m = it.text_m;
        if (typeof it.text_k === 'string') SNIPPETS.roller[k].text_k = it.text_k;
      });
    }
    // --- Roller (separat scope)
    const roller = pack.roller && (pack.roller.roles ? pack.roller : (pack.roller.roller ? pack.roller.roller : null));
    if (roller && roller.roles) {
      Object.keys(roller.roles).forEach(k => {
        const it = roller.roles[k] || {};
        if (!SNIPPETS.roller[k]) SNIPPETS.roller[k] = { title: k, text_m: '', text_k: '' };
        // Rollenavne er faste, men vi accepterer tekstfelterne.
        if (typeof it.text === 'string') { SNIPPETS.roller[k].text_m = it.text; SNIPPETS.roller[k].text_k = it.text; }
        if (typeof it.text_m === 'string') SNIPPETS.roller[k].text_m = it.text_m;
        if (typeof it.text_k === 'string') SNIPPETS.roller[k].text_k = it.text_k;
      });
    }



    // --- Elevråd (YES)
    const er = pack.elevraad && (typeof pack.elevraad.text === 'string') ? pack.elevraad : (pack.elevraad && pack.elevraad.elevraad ? pack.elevraad.elevraad : null);
    if (er && typeof er.text === 'string') {
      if (!SNIPPETS.elevraad.YES) SNIPPETS.elevraad.YES = { title: 'Elevrådsrepræsentant', text_m: '', text_k: '' };
      SNIPPETS.elevraad.YES.text_m = er.text;
      SNIPPETS.elevraad.YES.text_k = er.text;
      if (typeof er.label === 'string' && er.label.trim()) SNIPPETS.elevraad.YES.title = er.label.trim();
    }
  }

  // 1) Remote (GitHub /overrides/)
  applyPack(remote.sang);
  applyPack(remote.gym);
  applyPack(remote.elevraad);

  // 2) Imported overrides (explicitly imported JSON)
  applyPack(imported);

  // 3) Draft overrides (local work-in-progress; MUST win on refresh)
  applyPack(draft);
}

function downloadJson(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Some browsers need a short delay before revoking
  setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch(e){} }, 250);
}

function exportLocalBackup() {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith(LS_PREFIX)) continue;
    data[k] = localStorage.getItem(k);
  }
  if (!Object.keys(data).length) {
    alert('Der var ingen lokale data at tage backup af endnu.');
    return;
  }
  // Filename: "<INITIALER>_UdtalelsesBackup.json" (so backups are easy to share across K-lærere)
  let ini = '';
  try {
    const s = getSettings();
    const raw = ((s.me || s.meResolved || '') + '').trim();
    ini = toInitials(raw);
  } catch(_) {}
  const fn = `${(ini || 'XX')}_UdtalelsesBackup.json`;
  downloadJson(fn, {
    schema: 'elevudtalelser_backup_v1',
    prefix: LS_PREFIX,
    createdAt: new Date().toISOString(),
    data
  });
}

function getMyKStudents() {
  const s = getSettings();
  const studs = getStudents();
  const meIni = toInitials((s.me || '') + '');
  if (!studs.length || !meIni) return [];
  return sortedStudents(studs)
    .filter(st => toInitials(st.kontaktlaerer1_ini) === meIni || toInitials(st.kontaktlaerer2_ini) === meIni);
}


// --- Print: force single-student print to always fit on ONE A4 page by scaling down.
// Strategy: compute available content height (A4 minus margins = 261mm) in px,
// compare to rendered preview height at scale=1, and set CSS var --printScale.
function applyOnePagePrintScale() {
  const preview = document.getElementById('preview');
  if (!preview) return;
  // Reset
  document.documentElement.style.setProperty('--printScale', '1');
  // Only relevant when preview has content
  const txt = (preview.textContent || '').trim();

  // Title extraction (first line) — no regex
  const rawPrint = String(txt || '').replaceAll('\r', '');
  const nl = rawPrint.indexOf('\n');
  let titleLine = '';
  let bodyText = rawPrint;
  if (nl >= 0) {
    titleLine = rawPrint.slice(0, nl).trim();
    bodyText = rawPrint.slice(nl + 1);
    while (bodyText.startsWith('\n')) bodyText = bodyText.slice(1);
  } else {
    titleLine = rawPrint.trim();
    bodyText = '';
  }
  if (!txt) return;

  // Create a mm-to-px probe (hidden)
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed; left:-9999px; top:-9999px; width:1mm; height:261mm; visibility:hidden; pointer-events:none;';
  document.body.appendChild(probe);
  const availPx = probe.getBoundingClientRect().height;
  probe.remove();

  // Measure needed height at scale=1
  // Use scrollHeight so we capture full content.
  const neededPx = preview.scrollHeight;
  if (!availPx || !neededPx) return;

  if (neededPx > availPx) {
    const s = Math.max(0.10, Math.min(1, availPx / neededPx));
    document.documentElement.style.setProperty('--printScale', String(s));
  }
}



// --- Print logo helpers ---
function getLocalPrintLogoDataUrl() {
  try { return localStorage.getItem(PRINT_LOGO_LOCAL_KEY) || ''; } catch { return ''; }
}
function setLocalPrintLogoDataUrl(dataUrl) {
  try { localStorage.setItem(PRINT_LOGO_LOCAL_KEY, String(dataUrl || '')); } catch {}
}
function clearLocalPrintLogoDataUrl() {
  try { localStorage.removeItem(PRINT_LOGO_LOCAL_KEY); } catch {}
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    try {
      const fr = new FileReader();
      fr.onload = () => resolve(String(fr.result || ''));
      fr.onerror = () => reject(fr.error || new Error('FileReader fejl'));
      fr.readAsDataURL(blob);
    } catch (e) { reject(e); }
  });
}

async function tryFetchAsDataUrl(url) {
  const r = await fetch(url, { cache: 'no-store' });
  if (!r || !r.ok) throw new Error('HTTP ' + (r ? r.status : ''));
  const blob = await r.blob();
  return await blobToDataUrl(blob);
}

async function resolvePrintLogoDataUrl() {
  const local = getLocalPrintLogoDataUrl();
  if (local) return local;

  if (PRINT_LOGO_REMOTE_CACHE) return PRINT_LOGO_REMOTE_CACHE;

  for (const url of PRINT_LOGO_REMOTE_CANDIDATES) {
    try {
      const dataUrl = await tryFetchAsDataUrl(url);
      if (dataUrl) {
        PRINT_LOGO_REMOTE_CACHE = dataUrl;
        return dataUrl;
      }
    } catch (_) {}
  }
  return PRINT_HEADER_LOGO_DATAURL;
}

function syncPrintLogoTestUI() {
  const img = document.getElementById('printLogoPreview');
  const status = document.getElementById('printLogoStatus');
  const btnPick = document.getElementById('btnPickPrintLogo');
  const btnClear = document.getElementById('btnClearPrintLogo');
  if (!img || !status || !btnClear || !btnPick) return;

  const local = getLocalPrintLogoDataUrl();
  if (local) {
    img.src = local;
    img.style.display = 'block';
    status.textContent = 'Test-logo er aktivt (kun i denne browser).';
    btnPick.style.display = 'none';
    btnClear.style.display = '';
    btnClear.disabled = false;
  } else {
    img.removeAttribute('src');
    img.style.display = 'none';
    status.textContent = 'Intet test-logo valgt.';
    btnPick.style.display = '';
    btnClear.style.display = 'none';
    btnClear.disabled = true;
  }
}


async function openPrintWindowForStudents(students, settings, title) {
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

  const opts = arguments.length > 3 ? (arguments[3] || {}) : {};
  const list = opts.preserveOrder ? (Array.isArray(students) ? students : []) : sortedStudents(Array.isArray(students) ? students : []);

  // Header date (month + year) should match 'Dato måned/år (auto)' from Indstillinger → Periode
  let headerDateText = '';
  try {
    if (typeof computePeriod === 'function') {
      const p = computePeriod(settings && settings.schoolYearEnd);
      headerDateText = (p && p.dateMonthYear) ? String(p.dateMonthYear) : '';
    }
  } catch(e) {}
  if (!headerDateText) {
    const _d = new Date();
    const _monthYear = _d.toLocaleDateString('da-DK', { month: 'long', year: 'numeric' });
    headerDateText = _monthYear ? (_monthYear.charAt(0).toUpperCase() + _monthYear.slice(1)) : '';
  }

  const logoSrc = await resolvePrintLogoDataUrl();
  const pagesHtml = list.map(st => {
    const txt = buildStatement(st, settings);
    // Title extraction (first line) — no regex
    const rawPrint = String(txt || '').replaceAll('\r', '');
    const nl = rawPrint.indexOf('\n');
    let titleLine = '';
    let bodyText = rawPrint;
    if (nl >= 0) {
      titleLine = rawPrint.slice(0, nl).trim();
      bodyText = rawPrint.slice(nl + 1);
      while (bodyText.startsWith('\n')) bodyText = bodyText.slice(1);
    } else {
      titleLine = rawPrint.trim();
      bodyText = '';
    }

    // Signature block: keep forstander-navn fast over "Forstander" (undgå at navne skubber hinanden)
    let signatureHtml = '';
    let bodyForPre = bodyText;
    try {
      const lines = String(bodyText || '').split('\n');
      let sigIdx = -1;
      for (let i = lines.length - 1; i >= 0; i--) {
        const ln = lines[i] || '';
        if (ln.includes('Kontaktlærere') && ln.includes('Forstander')) { sigIdx = i; break; }
      }
      if (sigIdx > 0) {
        // Fjern signaturlinjerne fra pre-teksten (navne + labels)
        let cutStart = sigIdx - 1;
        while (cutStart > 0 && !String(lines[cutStart - 1] || '').trim()) cutStart--;
        const kept = lines.slice(0, cutStart);
        while (kept.length && !String(kept[kept.length - 1] || '').trim()) kept.pop();
        bodyForPre = kept.join('\n');

        const kontaktNavn = [st.kontaktlaerer1, st.kontaktlaerer2]
          .filter(x => (x || '').toString().trim())
          .map(x => (x || '').toString().trim())
          .join(' & ');

        const forstanderNavn = ((settings && settings.forstanderName) ? settings.forstanderName : '').toString().trim();

        signatureHtml = `
          <div class="signatures">
            <div class="sig-col sig-left">
              <div class="sig-name">${escapeHtml(kontaktNavn)}</div>
              <div class="sig-label">Kontaktlærere</div>
            </div>
            <div class="sig-col sig-right">
              <div class="sig-name">${escapeHtml(forstanderNavn)}</div>
              <div class="sig-label">Forstander</div>
            </div>
          </div>`;
      }
    } catch(e) {}

    return `
      <div class="page">
        <div class="content">
          <div class="printHeaderTop"><div class="printHeaderDate">${escapeHtml(headerDateText)}</div></div>
          <div class="printHeaderLogo"><img src="${logoSrc}" alt="Himmerlands Efterskole" /></div>
          <div class="printTitle">${escapeHtml(titleLine)}</div>
          <pre class="statement">${escapeHtml(bodyForPre)}</pre>${signatureHtml}
        </div>
      </div>`;
  }).join('');

  // Single vs multi print: multi-print uses per-page absolute footer to avoid overlapping fixed elements
  const printModeClass = (list.length > 1) ? 'print-multi' : 'print-single';

const docTitle = escapeHtml(title || 'Print');

  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${docTitle}</title>
  <style>
    @page { size: A4; margin: 12mm 14mm; }
    html, body { margin: 0; padding: 0; background: #fff; }
    .page{
      page-break-after: always;
    }
    .content{ width: 100%; }
    .statement {
      margin: 0;
      white-space: pre-wrap;
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      font-size: 10.5pt;
      line-height: 1.45;
      transform: none;
      transform-origin: top left;
    }
  
    /* iOS/iPadOS Safari: disable scaling transforms to avoid alternating blank pages */
    @supports (-webkit-touch-callout: none) {
      .page { --s: 1 !important; }
      .statement { transform: none !important; width: auto !important; }
    }

    /* Header logo */
    .printHeader{
      display:flex;
      justify-content:center;
      align-items:center;
      margin: 0mm 0 6mm 0;
    }
    .printTitle{
      text-align: center;
      font-family: Arial, sans-serif;
      font-size: 12pt;
      font-weight: 700;
      margin: 0 0 6mm 0;
    }

    .printHeader img{
      height: 22mm;
      width: auto;
      display:block;
    }


    /* Header: date (top-right) + logo (center) */
    .printHeaderTop{
      display:flex;
      justify-content:flex-end;
      align-items:flex-start;
      margin: 2mm 0 0 0;
      font-size: 10pt;
      color: #222;
    }
    .printHeaderDate{ white-space: nowrap; }
    .printHeaderLogo{
      display:flex;
      justify-content:center;
      align-items:center;
      margin: 8mm 0 8mm 0;
    }
    .printHeaderLogo img{
      height: 22mm;
      width: auto;
      display:block;
    }


    .page:last-child{
      break-after: auto;
      page-break-after: auto;
    }
    .content{
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    pre.statement{
      white-space: pre-wrap;
      margin: 0;
      overflow: hidden;
    }

    /* Signatur: to faste kolonner (Kontaktlærere / Forstander) */
    .signatures{
      display:grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 18mm;
      margin-top: 18px;
      width: 100%;
      font-family: Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.25;
    }
 
    @media print{
      .printToolbar{ display:none !important; }
      body{ background:#fff !important; }
      .page{ page-break-after: always; break-after: page; }
      .page:last-child{ page-break-after: auto; break-after: auto; }
      .content{ position: relative; min-height: 263mm; overflow: visible; display: flex; flex-direction: column; }
      pre.statement{ padding-bottom: 0; overflow: visible; }
      .signatures{ margin-top: auto; padding-top: 14mm; }
    }

    .printToolbar{
      position: sticky; top: 0; z-index: 10;
      display:flex; justify-content:center; gap:10px;
      padding:10px; background:#111827; color:#fff;
      font-family: Arial, sans-serif;
    }
    .printToolbar button{
      border:1px solid #555; border-radius:8px; padding:8px 12px;
      background:#fff; color:#111; font-weight:700;
    }

    /* Giv Kontaktlærere mere plads end Forstander (2 navne vs 1) */
    .sig-col{ break-inside: avoid; page-break-inside: avoid; min-width: 0; }
    .sig-left{ text-align: center; }
    .sig-right{ text-align: center; }
    .sig-name{ display:block; }
    .sig-label{ display:block; margin-top: 2px; }
    .sig-left .sig-label{ text-align: center; }


</style>
</head>
<body class="${printModeClass}">
<div class="printToolbar">
  <button type="button" onclick="window.print()">🖨️ Print / PDF</button>
  <button type="button" onclick="window.close(); if(!window.closed){ history.back(); }">↩ Tilbage til appen</button>
</div>
${pagesHtml}
<script>
(function(){
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel' && navigator.maxTouchPoints>1);
  window.addEventListener('load', () => {
    // Give fonts/images a moment, then open print dialog.
    setTimeout(() => { try { window.focus(); window.print(); } catch(e) {} }, 400);
  });
})();
</script>
</body>
</html>`;

  const win = window.open('', '_blank');
  if (!win) {
    alert('Kunne ikke åbne print-vindue (pop-up blokeret).');
    return;
  }
  win.document.open();
  win.document.write(html);
  win.document.close();
}

async function printAllKStudents() {
  // Keep overrides fresh for printing unless the user is actively editing templates.
  try {
    await loadRemoteOverrides();
    applyTemplatesFromOverridesToLocal({ preserveLocks: true });
  } catch (_) {}

  const studs = getStudents();
  const kGroups = buildKGroups(studs);

  // K-mode: print "mine" K-elever
  // ALL-mode: print den aktive K-gruppe (som UI'et viser)
  const isAll = state.viewMode === 'ALL';
  const list = isAll
    ? ((kGroups[state.kGroupIndex] && kGroups[state.kGroupIndex].students) ? kGroups[state.kGroupIndex].students.slice() : [])
    : getMyKStudents();

  if (!list.length) {
    alert(isAll
      ? 'Der er ingen elever i denne K-gruppe at printe.'
      : 'Der er ingen K-elever at printe (tjek elevliste og initialer).'
    );
    return;
  }

  const title = isAll ? 'Udtalelser v3.5 – print K-gruppe' : 'Udtalelser v3.5 – print K-elever';
  const sorted = sortedStudents(list);
  await openPrintWindowForStudents(sorted, getSettings(), title);
}

async function printAllKGroups() {
  // Keep overrides fresh for printing unless the user is actively editing templates.
  try {
    await loadRemoteOverrides();
    applyTemplatesFromOverridesToLocal({ preserveLocks: true });
  } catch(_) {}

  const studs = getStudents();
  if (!studs.length) {
    alert('Der er ingen elevliste indlæst endnu.');
    return;
  }

  const kGroups = buildKGroups(studs);

// Sortering i 2 niveauer:
// 1) K-grupper efter K-lærer1 (initialer) – derefter K-lærer2 – derefter nøgle
// 2) Elever i hver gruppe alfabetisk efter fornavn (da-DK)
const coll = new Intl.Collator('da', { sensitivity: 'base' });

kGroups.sort((g1, g2) => {
  const a0 = (g1.students && g1.students[0]) ? g1.students[0] : {};
  const b0 = (g2.students && g2.students[0]) ? g2.students[0] : {};
  const aK1 = toInitials(a0.kontaktlaerer1_ini || '');
  const bK1 = toInitials(b0.kontaktlaerer1_ini || '');
  const c1 = coll.compare(aK1, bK1);
  if (c1) return c1;

  const aK2 = toInitials(a0.kontaktlaerer2_ini || '');
  const bK2 = toInitials(b0.kontaktlaerer2_ini || '');
  const c2 = coll.compare(aK2, bK2);
  if (c2) return c2;

  return coll.compare(String(g1.key || ''), String(g2.key || ''));
});

for (const g of kGroups) {
  (g.students || []).sort((x, y) => {
    const c = coll.compare((x.fornavn || '').trim(), (y.fornavn || '').trim());
    if (c) return c;
    // tie-break: efternavn
    return coll.compare((x.efternavn || '').trim(), (y.efternavn || '').trim());
  });
}

const all = [];

// Flatten i gruppe-rækkefølge (stabilt og forudsigeligt)
kGroups.forEach(g => {
  (g.students || []).forEach(s => all.push(s));
});

  if (!all.length) {
    alert('Der var ingen elever i K-grupperne at printe.');
    return;
  }

  const title = 'Udtalelser v3.5 – print alle K-grupper';
  // Brug samme printmotor som enkelt-elev / k-gruppe, så header (logo + dato) altid kommer med.
  // preserveOrder=true så vi ikke mister gruppe-ordenen ved intern sortering.
  await openPrintWindowForStudents(all, getSettings(), title, { preserveOrder: true });
}

async function printAllStudents() {
  // Keep overrides fresh for printing unless the user is actively editing templates.
  try {
    await loadRemoteOverrides();
    applyTemplatesFromOverridesToLocal({ preserveLocks: true });
  } catch(_) {}

  const studs = getStudents();
  if (!studs.length) {
    alert('Der er ingen elevliste indlæst endnu.');
    return;
  }

  const coll = new Intl.Collator('da', { sensitivity: 'base' });
  const all = studs.slice().sort((a, b) => {
    const c = coll.compare((a.fornavn || '').trim(), (b.fornavn || '').trim());
    if (c) return c;
    return coll.compare((a.efternavn || '').trim(), (b.efternavn || '').trim());
  });

  const title = 'Udtalelser v3.5 – print alle elever';
  await openPrintWindowForStudents(all, getSettings(), title, { preserveOrder: true });
}



function importLocalBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const obj = JSON.parse(String(reader.result || '{}'));
      if (!obj || typeof obj !== 'object' || !obj.data) throw new Error('Ugyldig backupfil.');
      const prefix = obj.prefix || LS_PREFIX;

      // Helper: try to extract teacher initials from filename (AB-backup.json, EB_backup_2026.json, ...)
      const guessIniFromFilename = (name) => {
        const base = String(name || '').trim();
        if (!base) return '';
        const m = base.match(/^\s*([A-Za-zÆØÅæøå]{1,4})[\-_]/);
        return m ? String(m[1] || '').toUpperCase() : '';
      };

      // SAFE IMPORT (merge) so you can import colleagues' backups without losing your own work.
      // Policy:
      // - We never delete existing data.
      // - For text keys (udt_text_<unilogin>): merge per field (only fill blanks).
      // - For non-text keys: import only if missing locally.
      const textKeyPrefix = prefix + 'text_';
      let mergedText = 0, addedText = 0, skippedText = 0;
      let addedOther = 0, skippedOther = 0;

      // Special-case: "aktiv K-lærer" is allowed to be restored from backup if it is missing locally.
      // We still avoid clobbering other colleague settings.
      let restoredTeacher = false;
      const tryRestoreTeacherFromIncomingSettings = (incomingRaw) => {
        try {
          const inc = JSON.parse(String(incomingRaw || '{}')) || {};
          const incomingMe = ((inc.me || inc.activeTeacher || '') + '').trim();
          if (!incomingMe) return false;
          const cur = getSettings();
          const curMe = ((cur.me || '') + '').trim();
          if (curMe) return false; // don't override an already chosen teacher
          cur.me = incomingMe.toUpperCase();
          cur.meResolved = cur.me;
          cur.meResolvedConfirmed = cur.me;
          if ((inc.meFullName || '') && !cur.meFullName) cur.meFullName = String(inc.meFullName || '').trim();
          setSettings(cur);
          return true;
        } catch (_) {
          return false;
        }
      };

      // Clear any previous post-import hint before we start.
      try { localStorage.removeItem(KEY_POST_IMPORT_TEACHER_HINT); } catch (_) {}

      Object.entries(obj.data).forEach(([k, v]) => {
        if (typeof k !== 'string' || !k.startsWith(prefix)) return;
        const incomingRaw = String(v ?? '');

        // Settings: keep safe-by-default, but allow restoring missing K-lærer identity.
        if (k === KEYS.settings) {
          if (tryRestoreTeacherFromIncomingSettings(incomingRaw)) {
            restoredTeacher = true;
          }
          skippedOther++;
          return;
        }

        if (k.startsWith(textKeyPrefix)) {
          const existingRaw = localStorage.getItem(k);
          if (!existingRaw) {
            localStorage.setItem(k, incomingRaw);
            addedText++;
            return;
          }
          // Merge JSON fields if possible
          try {
            const ex = JSON.parse(existingRaw || '{}') || {};
            const inc = JSON.parse(incomingRaw || '{}') || {};
            const fields = ['elevudvikling','praktisk','kgruppe'];
            let changed = false;
            fields.forEach(f => {
              const exVal = ((ex[f] ?? '') + '').trim();
              const incVal = ((inc[f] ?? '') + '').trim();
              if (!exVal && incVal) { ex[f] = inc[f]; changed = true; }
            });
            // If we had no local lastEditedBy, keep incoming for visibility.
            if (!((ex.lastEditedBy || '') + '').trim() && ((inc.lastEditedBy || '') + '').trim()) {
              ex.lastEditedBy = inc.lastEditedBy;
              changed = true;
            }
            if (changed) {
              localStorage.setItem(k, JSON.stringify(ex));
              mergedText++;
            } else {
              skippedText++;
            }
          } catch (_) {
            // Fallback: keep existing (safe)
            skippedText++;
          }
          return;
        }

        // Non-text keys: import only if missing, to avoid clobbering your setup.
        if (localStorage.getItem(k) == null) {
          localStorage.setItem(k, incomingRaw);
          addedOther++;
        } else {
          skippedOther++;
        }
      });

      alert(
        `Backup importeret (sikkert)\n\n` +
        `Tekster: +${addedText} nye, +${mergedText} udfyldt (tomt→fyldt), ${skippedText} uændret\n` +
        `Andet: +${addedOther} nye nøgler, ${skippedOther} uændret\n\n` +
        `Tip: Import af kollegers backup udfylder primært tomme felter – det overskriver ikke din tekst.`
      );

      // Post-import navigation rules:
      // - If we have an active teacher after import: go directly to K-elever (normal/fast case)
      // - Otherwise: go to Indstillinger → Generelt and show a small info text.
      //   If the filename looks like "AB-backup.json", prefill "AB" and open the dropdown.
      try {
        const meNow = ((getSettings().me || '') + '').trim();
        if (!meNow) {
          const suggested = guessIniFromFilename(file && file.name);
          const hint = { showInfo: true };
          if (suggested) hint.suggestedIni = suggested;
          localStorage.setItem(KEY_POST_IMPORT_TEACHER_HINT, JSON.stringify(hint));
        } else {
          localStorage.removeItem(KEY_POST_IMPORT_TEACHER_HINT);
        }
      } catch (_) {}

      location.reload();
    } catch (err) {
      alert(err?.message || 'Kunne ikke indlæse backup.');
    }
  };
  reader.readAsText(file);
}


function buildOverridePackage(scope) {
  const today = new Date().toISOString().slice(0,10);
  const s = getSettings();
  const author = (s && s.me) ? String(s.me) : '';
  const pkg = { schema: OVERRIDE_SCHEMA, scope, author, createdAt: today, payload: {} };

  if (scope === 'sang') {
    const items = {};
    ['S1','S2','S3'].forEach(k => {
      const label = ($('sangLabel_'+k)?.value || '').trim() || k;
      const text = ($('sangText_'+k)?.value || '').trim();
      items[k] = { label, text };
    });
    pkg.payload.sang = { items, order: ['S1','S2','S3'] };
  }

  if (scope === 'gym') {
    const variants = {};
    ['G1','G2','G3'].forEach(k => {
      const label = ($('gymLabel_'+k)?.value || '').trim() || k;
      const text = ($('gymText_'+k)?.value || '').trim();
      variants[k] = { label, text };
    });
    pkg.payload.gym = { variants, variantOrder: ['G1','G2','G3'] };
  }

  if (scope === 'roller') {
    const roles = {};
    const roleRows = Array.from(document.querySelectorAll('[data-role-key]'));
    roleRows.forEach(row => {
      const key = row.getAttribute('data-role-key');
      const text = (row.querySelector('.roleText')?.value || '').trim();
      if (key) roles[key] = { label: key, text };
    });
    pkg.payload.roller = { roles, roleOrder: Object.keys(roles) };
  }

  if (scope === 'elevraad') {
    const text = ($('elevraadText')?.value || '').trim();
    pkg.payload.elevraad = { label: 'Elevråd', text };
  }

  if (scope === 'templates') {
    const t = getTemplates();
    const s2 = getSettings();
    pkg.payload.templates = {
      forstanderNavn: (s2.forstanderName || '').trim(),
      schoolText: String(t.schoolText ?? DEFAULT_SCHOOL_TEXT),
      template: String(t.template ?? DEFAULT_TEMPLATE)
    };
  }

  return pkg;
}

function importOverridePackage(expectedScope, obj) {
  if (!obj || obj.schema !== OVERRIDE_SCHEMA) throw new Error('Forkert fil: schema matcher ikke.');
  if (!obj.scope) throw new Error('Forkert fil: mangler scope.');
  if (obj.scope !== expectedScope && obj.scope !== 'all') throw new Error('Forkert fil: scope matcher ikke.');

  const overrides = getSnippetImported();
  const p = obj.payload || {};

  if (obj.scope === 'all' || obj.scope === 'sang') {
    if (p.sang && p.sang.items) overrides.sang = p.sang;
  }
  if (obj.scope === 'all' || obj.scope === 'gym') {
    if (p.gym) {
      const prev = overrides.gym || {};
      overrides.gym = Object.assign({}, prev, p.gym);
      // Backward compat: ældre gym-pakker kan indeholde roller.
      if (p.gym.roles) {
        const prevR = overrides.roller || {};
        overrides.roller = {
          roles: Object.assign({}, prevR.roles || {}, p.gym.roles),
          roleOrder: p.gym.roleOrder || prevR.roleOrder || Object.keys(p.gym.roles)
        };
      }
    }
  }
  if (obj.scope === 'all' || obj.scope === 'roller') {
    if (p.roller && p.roller.roles) {
      const prevR = overrides.roller || {};
      overrides.roller = {
        roles: Object.assign({}, prevR.roles || {}, p.roller.roles),
        roleOrder: p.roller.roleOrder || prevR.roleOrder || Object.keys(p.roller.roles)
      };
    }
  }

  if (obj.scope === 'all' || obj.scope === 'elevraad') {
    if (p.elevraad) overrides.elevraad = p.elevraad;
  }

  // Mark local snippet edits so auto-refresh does not overwrite them.
  if (obj.scope === 'all' || obj.scope === 'sang' || obj.scope === 'gym' || obj.scope === 'roller' || obj.scope === 'elevraad') {
    setSnippetsDirty(true);
  }

  if (expectedScope === 'templates' || obj.scope === 'templates' || obj.scope === 'all') {
    // Templates er ikke snippets-overrides, men indstillinger/templates.
    if (p.templates) {
      // Store imported templates separately, so a local draft is not overwritten on refresh.
      const tImp = lsGet(KEYS.templatesImported, {});
      if (typeof p.templates.schoolText === 'string') tImp.schoolText = p.templates.schoolText;
      if (typeof p.templates.template === 'string') tImp.template = p.templates.template;
      if (typeof p.templates.forstanderName === 'string') tImp.forstanderName = p.templates.forstanderName;
      // Backwards compatibility
      if (typeof p.templates.forstanderNavn === 'string') tImp.forstanderName = p.templates.forstanderNavn;
      lsSet(KEYS.templatesImported, tImp);

      setTemplatesDirty(true);
    }
  }

  setSnippetImported(overrides);
  setSnippetsDirty(true);
  applySnippetOverrides();
}

// ---------- normalize ----------
  function normalizeName(input) {
  if (!input) return "";
  return input
    .toString()
    .trim()
    // Handle common mojibake when a UTF-8 CSV has been decoded as latin1/Win-1252
    // (e.g. "KontaktlÃ¦rer" instead of "Kontaktlærer").
    .replace(/Ã¦/g, 'æ')
    .replace(/Ã¸/g, 'ø')
    .replace(/Ã¥/g, 'å')
    .replace(/Ã†/g, 'Æ')
    .replace(/Ã˜/g, 'Ø')
    .replace(/Ã…/g, 'Å')
    .toLowerCase()
    .replace(/\./g, " ")
    // Danish letters are not decomposed by NFD, so transliterate explicitly
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqStrings(arr) {
  const out = [];
  const seen = new Set();
  for (const v of arr || []) {
    const raw = (v || "").toString().trim();
    if (!raw) continue;
    const k = normalizeName(raw);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(raw);
  }
  return out;
}

function getAllTeacherNamesFromStudents() {
  const studs = (window.__STATE__ && window.__STATE__.students) ? window.__STATE__.students : [];
  const names = [];
  for (const st of studs) {
    if (st && st.kontaktlaerer1) names.push(st.kontaktlaerer1);
    if (st && st.kontaktlaerer2) names.push(st.kontaktlaerer2);
  }
  return uniqStrings(names).sort((a,b) => normalizeName(a).localeCompare(normalizeName(b)));
}

function resolveTeacherMatch(raw) {
  const s = getSettings();
  const input = (raw ?? "").toString().trim();
  if (!input) return { raw: "", resolved: "" };

  // Merge alias maps, but let DEFAULT_ALIAS_MAP win to avoid stale/wrong mappings in localStorage.
  const aliasMap = { ...(s && s.aliasMap ? s.aliasMap : {}), ...DEFAULT_ALIAS_MAP };
  const key = normalizeName(input).replace(/\s+/g, "");
  if (aliasMap && aliasMap[key]) {
    return { raw: input, resolved: aliasMap[key] };
  }

  const all = getAllTeacherNamesFromStudents();
  const nIn = normalizeName(input);
  const exact = all.find(n => normalizeName(n) === nIn);
  if (exact) return { raw: input, resolved: exact };

  // Partial match: allow "Måns" -> "Måns Patrik Mårtensson" etc.
  const partial = all.filter(n => normalizeName(n).includes(nIn));
  if (partial.length === 1) return { raw: input, resolved: partial[0] };

  return { raw: input, resolved: input };
}

function resolveTeacherName(raw) {
  return resolveTeacherMatch(raw).resolved;
}

function toInitials(raw) {
  // v1.0: generic initials, no name-based special cases (persondata-safe)
  const s = (raw ?? "").toString().trim();
  if (!s) return "";
  const up = s.toUpperCase();

  // If it already looks like initials (1–4 letters), keep it
  if (/^[A-ZÆØÅ]{1,4}$/.test(up)) return up;

  // Otherwise: first letter of first word + first letter of last word
  const parts = up.split(/[^A-ZÆØÅ]+/).filter(Boolean);
  if (!parts.length) return "";
  const first = parts[0][0] || "";
  const last = parts[parts.length - 1][0] || "";
  return (first + last).toUpperCase();
}

function cleanInitials(raw){
  // CSV'er og brugere kan skrive initialer med tegn som punktum, mellemrum osv.
  // Vi stripper alt andet end bogstaver og accepterer 1–4 bogstaver som "gyldige" initialer.
  const s = (raw ?? '').toString().trim().toUpperCase();
  const cleaned = s.replace(/[^A-ZÆØÅ]+/g, '');
  return cleaned;
}

function isValidInitials(raw){
  const cleaned = cleanInitials(raw);
  return /^[A-ZÆØÅ]{1,4}$/.test(cleaned);
}

function normalizedInitials(overrideRaw, fullNameRaw){
  // Rules (per "Accepterede kolonner"):
  // - If Initialer for k-lærer1/2 is provided AND looks like real initials (1-4 letters), use it.
  // - Otherwise auto-generate from the full name.
  const o = (overrideRaw ?? '').toString().trim();
  if (isValidInitials(o)) return cleanInitials(o);
  return toInitials(fullNameRaw);
}


function reverseResolveTeacherInitials(nameOrInitials) {
  // Try to map full name -> initials based on known alias map (if present in settings).
  const s = getSettings();
  // Merge, but let defaults win to avoid stale/wrong mappings.
  const m = { ...(s.aliasMap || {}), ...DEFAULT_ALIAS_MAP };
  const key = ((nameOrInitials||'')+'').trim().toLowerCase();
  for (const [ini, full] of Object.entries(m)) {
    if (((full||'')+'').trim().toLowerCase() === key) return (ini||'').toUpperCase();
  }
  return '';
}

function groupKeyFromTeachers(k1Raw, k2Raw) {
  const a = toInitials(k1Raw);
  const b = toInitials(k2Raw);
  const parts = [a,b].filter(Boolean).sort((x,y)=>x.localeCompare(y,'da'));
  return parts.length ? parts.join('/') : '—';
}

function buildKGroups(students) {
  const groups = new Map();
  for (const st of students) {
    const key = groupKeyFromTeachers(st.kontaktlaerer1_ini||'', st.kontaktlaerer2_ini||'');
    if (!groups.has(key)) groups.set(key, {key, students: []});
    groups.get(key).students.push(st);
  }
  // Sort students in each group (efternavn, fornavn)
  const coll = new Intl.Collator('da', {sensitivity:'base'});
  for (const g of groups.values()) {
    g.students.sort((x,y)=> {
      const a = (x.efternavn||'').trim(); const b=(y.efternavn||'').trim();
      const c = coll.compare(a,b);
      if (c) return c;
      return coll.compare((x.fornavn||'').trim(), (y.fornavn||'').trim());
    });
  }
  // Sort groups by key, but put '—' last
  const arr = Array.from(groups.values()).sort((g1,g2)=>{
    if (g1.key==='—' && g2.key!=='—') return 1;
    if (g2.key==='—' && g1.key!=='—') return -1;
    return coll.compare(g1.key,g2.key);
  });
  return arr;
}

function computeMissingKTeacher(students) {
  const miss = [];
  for (const st of students) {
    const k1 = ((st.kontaktlaerer1_ini||'')+'').trim();
    const k2 = ((st.kontaktlaerer2_ini||'')+'').trim();
    if (!k1 && !k2) miss.push(st);
  }
  return miss;
}

function updateTeacherDatalist() {
  // K-lærer-pickeren bygges primært ud fra elevlisten:
  // - Initialer findes i kontaktlærer1/2_ini
  // - Fulde navne (hvis til stede) findes i kontaktlærer1/2
  // Derudover kan brugerens aliasMap supplere med fulde navne.
  const input = document.getElementById('meInput');
  const menu  = document.getElementById('teacherPickerMenu');
  const btn   = document.getElementById('teacherPickerBtn');
  const wrap  = document.getElementById('teacherPicker');
  const clear = document.getElementById('meInputClear');
  if (!input || !menu || !btn || !wrap) return;
  try { menu.tabIndex = -1; } catch(_) {}

  const studs = getStudents();
  if (!studs.length) {
    input.value = '';
    input.disabled = true;
    btn.disabled = true;
    if (clear) clear.hidden = true;
    menu.innerHTML = `<div class="pickerEmpty">Indlæs elevliste først (students.csv).</div>`;
    wrap.classList.remove('open');
    menu.hidden = true;
    return;
  }

  input.disabled = false;
  btn.disabled = false;

  // Build initials -> full name map (prefer names seen in students.csv)
  const nameByIni = new Map();          // ini -> bestName
  const freqByIni = new Map();          // ini -> Map(name->count)
  const bump = (ini, full) => {
    const I = (ini || '').toString().trim().toUpperCase();
    const F = (full || '').toString().trim();
    if (!I) return;
    if (!freqByIni.has(I)) freqByIni.set(I, new Map());
    if (F) {
      const m = freqByIni.get(I);
      m.set(F, (m.get(F) || 0) + 1);
    }
  };

  for (const st of studs) {
    // Vær defensiv: hvis der ligger ældre/fejl-importerede values i localStorage,
    // så genberegner vi initialer ud fra fulde navne, med mindre der ligger en
    // gyldig override (1-4 bogstaver).
    bump(normalizedInitials(st.kontaktlaerer1_ini, st.kontaktlaerer1), st.kontaktlaerer1);
    bump(normalizedInitials(st.kontaktlaerer2_ini, st.kontaktlaerer2), st.kontaktlaerer2);
  }

  // Choose most frequent name per initials
  for (const [ini, m] of freqByIni.entries()) {
    let best = '';
    let bestN = 0;
    for (const [nm, n] of m.entries()) {
      if (n > bestN) { bestN = n; best = nm; }
    }
    if (best) nameByIni.set(ini, best);
  }

  // Merge aliasMap (ini -> full name)
  try {
    const s = getSettings();
    const alias = { ...(s.aliasMap || {}), ...(DEFAULT_ALIAS_MAP || {}) };
    Object.keys(alias || {}).forEach(k => {
      const I = (k || '').toString().trim().toUpperCase();
      const F = (alias[k] || '').toString().trim();
      // aliasMap indeholder også navne-keys (fx "andreasbechpedersen").
      // I pickeren vil vi KUN bruge rigtige initialer (1-4 bogstaver).
      if (!I || !F) return;
      if (!isValidInitials(I)) return;
      if (!nameByIni.has(I)) nameByIni.set(I, F);
    });
  } catch(_) {}

  // Build items
  const coll = new Intl.Collator('da', { sensitivity: 'base' });
  const allInitials = Array.from(new Set([
    ...Array.from(freqByIni.keys()),
    ...Array.from(nameByIni.keys())
  ])).sort((a,b)=>coll.compare(a,b));

  const items = allInitials.map(ini => {
    const full = nameByIni.get(ini) || '';
    const first = (full.split(/\s+/).filter(Boolean)[0] || '').toLowerCase();
    const last  = (full.split(/\s+/).filter(Boolean).slice(-1)[0] || '').toLowerCase();
    return {
      ini,
      full,
      first,
      last,
      label: full ? `${ini} (${full})` : ini
    };
  });

  let activeIndex = 0;
  let filteredItems = items.slice();

  function setActive(idx){
    const opts = Array.from(menu.querySelectorAll('[role="option"]'));
    if (!opts.length) return;
    activeIndex = Math.max(0, Math.min(idx, opts.length-1));
    opts.forEach((el,i)=>el.classList.toggle('active', i===activeIndex));
    const el = opts[activeIndex];
    if (el) el.scrollIntoView({ block: 'nearest' });
    // aria-activedescendant (optional)
    try { input.setAttribute('aria-activedescendant', el.id || ''); } catch(_) {}
  }

  function norm(s){ return normalizeName((s||'').toString()); }

  function matches(it, qRaw){
    const q = (qRaw || '').toString().trim();
    if (!q) return true;

    const qUpper = q.toUpperCase();
    const qNorm  = norm(q);
    const iniOk = it.ini.startsWith(qUpper);

    // If user types a short token (often initials), prioritize initials and name-begins.
    const parts = qNorm.split(/\s+/).filter(Boolean);
    const fullNorm = norm(it.full || '');
    const firstOk = it.first && it.first.startsWith(parts[0] || '');
    const lastOk  = it.last  && it.last.startsWith(parts[0] || '');

    if (parts.length === 1) {
      // Accept:
      // - initials prefix
      // - first or last name prefix
      // - or full name contains token (fallback)
      return iniOk || firstOk || lastOk || (fullNorm && fullNorm.includes(parts[0]));
    }

    // Multiple tokens: require all tokens to be present in full name OR initials prefix for first token
    if (iniOk) return true;
    if (!fullNorm) return false;
    return parts.every(t => fullNorm.includes(t));
  }

  function renderMenu(){
    const q = (input.value || '');
    filteredItems = items.filter(it => matches(it, q));

    menu.innerHTML = '';
    if (!filteredItems.length){
      menu.innerHTML = `<div class="pickerEmpty">Ingen match</div>`;
      return;
    }

    filteredItems.slice(0, 40).forEach((it, i) => {
      const row = document.createElement('div');
      row.className = 'tpItem';
      row.setAttribute('role','option');
      row.dataset.value = it.ini;
      row.dataset.full = it.full || '';
      row.id = `teacherOpt_${it.ini}_${i}`;
      row.innerHTML = `<span class="tpLeft">${it.ini}</span><span class="tpRight">${it.full ? '('+it.full+')' : ''}</span>`;
      row.addEventListener('mousedown', (e) => {
        // mousedown so selection happens before blur
        e.preventDefault();
        commit(it);
        closeMenu();
      });
      menu.appendChild(row);
    });
    setActive(0);
  }

  function openMenu(){
    menu.hidden = false;
    wrap.classList.add('open');
    renderMenu();
  }
  function closeMenu(){
    wrap.classList.remove('open');
    menu.hidden = true;
  }

  function commit(it){
    const ini = (it && it.ini) ? it.ini : ((it||'')+'').trim().toUpperCase();
    if (!ini) return;

    const s2 = getSettings();
    // Gem altid initialer som "me" (bruges til match mod elevernes k-lærer1/2-initialer)
    s2.me = ini;
    s2.meResolved = ini;
    s2.meResolvedConfirmed = ini;

    // Gem fulde navn separat (bruges kun til visning i UI)
    s2.meFullName = (it && it.full) ? (it.full + '').trim() : '';
    setSettings(s2);

    // If we came here right after a backup import that lacked a chosen teacher,
    // this selection completes the flow.
    try { localStorage.removeItem(KEY_POST_IMPORT_TEACHER_HINT); } catch (_) {}

    input.value = ini; // feltet holdes kort; listen viser fulde navne
    if (clear) clear.hidden = false;
    renderStatus();

    // Send user direkte til K-elever (som ønsket)
    try { state.viewMode = 'K'; setTab('k'); } catch(_) {}
  }


  // Button / clear
  btn.onclick = (e) => { e.preventDefault(); wrap.classList.contains('open') ? closeMenu() : openMenu(); input.focus(); };
  input.onfocus = () => openMenu();
  input.oninput = () => { if (!wrap.classList.contains('open')) openMenu(); else renderMenu(); };

  if (clear) {
    clear.onclick = (e) => {
      e.preventDefault();
      const s2 = getSettings(); s2.me = ''; s2.meResolved = ''; s2.meResolvedConfirmed = ''; s2.meFullName = ''; setSettings(s2);
      input.value = '';
      clear.hidden = true;
      closeMenu();
      renderStatus();
    };
    clear.hidden = !(getSettings().me || '').trim();
  }

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) closeMenu();
  });

  const handlePickerKeydown = (e) => {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key === 'ArrowDown' || e.key === 'Down' || e.keyCode === 40) {
      if (!wrap.classList.contains('open')) openMenu();
      e.preventDefault();
      setActive(activeIndex + 1);
      return;
    }
    if (e.key === 'ArrowUp' || e.key === 'Up' || e.keyCode === 38) {
      if (!wrap.classList.contains('open')) openMenu();
      e.preventDefault();
      setActive(activeIndex - 1);
      return;
    }
    if (e.key === 'Enter') {
      const el = menu.querySelectorAll('[role="option"]')[activeIndex];
      if (el && el.dataset.value) {
        e.preventDefault();
        const ini = el.dataset.value;
        const full = el.dataset.full || '';
        commit({ ini, full });
        closeMenu();
      }
    }
  };

  input.addEventListener('keydown', handlePickerKeydown);
  btn.addEventListener('keydown', handlePickerKeydown);
  menu.addEventListener('keydown', handlePickerKeydown);
}

function initMarksSearchPicker(){
  const input = document.getElementById('marksSearch');
  const menu  = document.getElementById('marksSearchMenu');
  const btn   = document.getElementById('marksSearchBtn');
  const wrap  = document.getElementById('marksSearchPicker');
  const clear = document.getElementById('marksSearchClear');
  if (!input || !menu || !btn || !wrap) return;

  let items = [];
  let activeIndex = 0;

  function setActive(idx){
    const opts = Array.from(menu.querySelectorAll('[role="option"]'));
    if (!opts.length) return;
    activeIndex = Math.max(0, Math.min(idx, opts.length-1));
    opts.forEach((el,i)=>el.classList.toggle('active', i===activeIndex));
    const el = opts[activeIndex];
    if (el) el.scrollIntoView({ block: 'nearest' });
  }

  function computeItems(){
    const studs = getStudents();
    const coll = new Intl.Collator('da', {sensitivity:'base'});
    items = studs.slice().sort((a,b)=>coll.compare((a.efternavn||'')+' '+(a.fornavn||''),(b.efternavn||'')+' '+(b.fornavn||''))).map(st=>{
      const full = `${(st.fornavn||'').trim()} ${(st.efternavn||'').trim()}`.trim();
      return { full, unilogin: (st.unilogin||'').trim(), kgrp: groupKeyFromTeachers(st.kontaktlaerer1_ini||'', st.kontaktlaerer2_ini||'') };
    });
  }

  function renderMenu(){
    if (!items.length) computeItems();
    const q = (input.value || '').toString().trim().toLowerCase();
    const filtered = !q ? items : items.filter(it => (it.full||'').toLowerCase().includes(q));
    menu.innerHTML = '';
    if (!filtered.length){
      menu.innerHTML = `<div class="pickerEmpty">Ingen match</div>`;
      return;
    }
    filtered.slice(0, 24).forEach((it) => {
      const row = document.createElement('div');
      row.className = 'tpItem';
      row.setAttribute('role','option');
      row.dataset.value = it.unilogin || it.full;
      row.setAttribute('data-full', it.full || '');
      row.innerHTML = `<div class="tpLeft">${escapeHtml(it.full)}</div><div class="tpRight">${escapeHtml(it.kgrp||'')}</div>`;
      row.addEventListener('mousedown', (e) => {
        e.preventDefault();
        commit(it.full);
        closeMenu();
      });
      menu.appendChild(row);
    });
    setActive(0);
  }

  function openMenu(){
    menu.hidden = false;
    wrap.classList.add('open');
    computeItems();
    renderMenu();
  }

  function closeMenu(){
    wrap.classList.remove('open');
    menu.hidden = true;
  }

  function commit(name){
    input.value = name;
    // keep plain search filter in state; renderMarksTable reads input value on render
    renderMarksTable();
    if (clear) clear.hidden = !input.value;
  }

  btn.onclick = (e) => { e.preventDefault(); wrap.classList.contains('open') ? closeMenu() : openMenu(); input.focus(); };
  input.onfocus = () => openMenu();
  input.oninput = () => { if (!wrap.classList.contains('open')) openMenu(); else renderMenu(); };

  if (clear){
    clear.onclick = (e)=>{ e.preventDefault(); input.value=''; clear.hidden=true; closeMenu(); renderMarksTable(); };
    clear.hidden = !input.value;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!wrap.classList.contains('open')) openMenu();
      e.preventDefault();
      setActive(activeIndex + (e.key === 'ArrowDown' ? 1 : -1));
      return;
    }
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return; }
    if (e.key === 'Enter') {
      const el = menu.querySelectorAll('[role="option"]')[activeIndex];
      if (el){ e.preventDefault(); commit((el.getAttribute('data-full') || el.dataset.full || el.textContent || '').trim()); closeMenu(); }
    }
  });

  document.addEventListener('click', (e)=>{ if (!wrap.contains(e.target)) closeMenu(); });
  closeMenu();
}


function normalizePlaceholderKey(key) {
  if (!key) return "";
  return key
    .toString()
    .trim()
    .toUpperCase()
    .replace(/Æ/g, "AE")
    .replace(/Ø/g, "OE")
    .replace(/Å/g, "AA")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}



  function callName(rawFirstName) {
    // HU-data: hvis fornavn-feltet indeholder ekstra efternavn, brug kun første ord.
    // Behold bindestreg-navne (fx Anne-Sofie) uændret.
    const s = (rawFirstName ?? '').toString().trim();
    if (!s) return '';
    const parts = s.split(/\s+/).filter(Boolean);
    return parts.length ? parts[0] : s;
  }
  function normalizeHeader(input) { return normalizeName(input).replace(/[^a-z0-9]+/g, ""); }

  // ---------- util ----------
  function escapeAttr(s) { return (s ?? '').toString()
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/\r?\n/g,'&#10;'); }
  function $(id){ return document.getElementById(id); }

// Focus + open K-lærer picker (waits for DOM + picker init)
function focusTeacherPickerAutoOpen(opts){
  const maxMs = (opts && opts.maxMs) ? opts.maxMs : 1200;
  const t0 = Date.now();
  (function tick(){
    const input = document.getElementById('meInput');
    const btn = document.getElementById('teacherPickerBtn');
    // We prefer clicking the button because it reliably opens the menu and focuses input
    if (input && btn && !input.disabled && !btn.disabled) {
      try { btn.click(); } catch(_) {}
      try { input.focus(); } catch(_) {}
      return;
    }
    if (Date.now() - t0 < maxMs) {
      requestAnimationFrame(tick);
    }
  })();
}


  // Hold "Faglærer-arbejde" type tabs in sync with the underlying select.
  // This must live in the same scope as renderMarksTable().
  function syncMarksTypeTabs(){
    const wrap = $("marksTypeTabs");
    const sel  = $("marksType");
    if(!wrap || !sel) return;
  // Compare using normalized tokens (e.g. "Elevråd" == "elevraad").
  const val = normalizeHeader(sel.value || "sang");
  wrap.querySelectorAll("button[data-type]").forEach(btn => {
    const t = normalizeHeader(btn.getAttribute("data-type") || "");
    const on = (t && t === val);
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });
  }

const on = (id, ev, fn, opts) => { const el = document.getElementById(id); if (el) el.addEventListener(ev, fn, opts); };
  // ---------- CSV ----------
  function detectDelimiter(firstLine) {
    const candidates = [';', ',', '\t'];
    let best = ',', bestCount = -1;
    for (const d of candidates) {
      const needle = d === '\t' ? '\t' : d;
      const count = (firstLine.split(needle).length - 1);
      if (count > bestCount) { bestCount = count; best = d; }
    }
    return best;
  }
  function parseCsvLine(line, delim) {
    const out = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i+1] === '"') { cur += '"'; i++; continue; }
        inQuotes = !inQuotes;
        continue;
      }
      if (!inQuotes && (delim === '\t' ? ch === '\t' : ch === delim)) {
        out.push(cur); cur = ''; continue;
      }
      cur += ch;
    }
    out.push(cur);
    return out;
  }
  function parseCsv(text) {
    const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    while (lines.length && !lines[lines.length-1].trim()) lines.pop();
    if (lines.length === 0) return { headers: [], rows: [] };

    const delim = detectDelimiter(lines[0]);
    const headers = parseCsvLine(lines[0], delim).map(h => h.trim());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const parts = parseCsvLine(lines[i], delim);
      const row = {};
      for (let c = 0; c < headers.length; c++) row[headers[c]] = (parts[c] ?? '').trim();
      rows.push(row);
    }
    return { headers, rows, delim };
  }
  function toCsv(rows, headers) {
    const esc = (v) => {
      const s = (v ?? '').toString();
      if (/[",\n\r;]/.test(s)) return '"' + s.replace(/"/g,'""') + '"';
      return s;
    };
    const head = headers.join(',');
    const body = rows.map(r => headers.map(h => esc(r[h])).join(',')).join('\n');
    return head + '\n' + body + '\n';
  }
  
// --- Marks export helpers (human-friendly file names) ---
function _dateStampYYYYMMDD() {
  const d = new Date();
  const yyyy = String(d.getFullYear());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
function marksExportLabel(type) {
  if (type === 'sang') return 'Sangkarakterer';
  if (type === 'gym')  return 'Gymnastikkarakterer & roller';
  if (type === 'elevraad') return 'Elevrådsrepræsentanter';
  return 'Markeringer';
}
function marksExportFilename(type) {
  const stamp = _dateStampYYYYMMDD();
  // Keep filenames ASCII-friendly for Windows/Drive etc.
  if (type === 'sang') return `Sangkarakterer_${stamp}.csv`;
  if (type === 'gym')  return `Gymnastikkarakterer_og_roller_Fanebaerer_Redskabshold_DGI-instruktoer_${stamp}.csv`;
  if (type === 'elevraad') return `Elevraadsrepraesentanter_${stamp}.csv`;
  return `Markeringer_${stamp}.csv`;
}
// ---------------------------------------------------------

function downloadText(filename, text) {
    const blob = new Blob([text], {type:'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ---------- app state ----------
  const state = {
    tab: 'set',
    viewMode: 'K', // 'K' | 'ALL' (K-elever vs Alle elever)
    kGroupIndex: 0,

    settingsSubtab: 'general',
    selectedUnilogin: null,
    studentInputUrls: {},
    // The current visible K-elev list (after any filters). Used for prev/next navigation in Redigér.
    visibleKElevIds: [],
    kMeDraft: ''
  };

  // Restore last UI selection (settings subtab etc.) from localStorage
  loadUIStateInto(state);

function defaultSettings() {
    return {
      contactGroupCount: "",
      forstanderName: "Stinne Krogh Poulsen",
      forstanderLocked: true,
      me: "",
      meResolved: "",
      schoolYearEnd: new Date().getFullYear()
    };
  }
  function defaultTemplates() {
    return {
      schoolText: DEFAULT_SCHOOL_TEXT,
      schoolTextLocked: true,
      template: DEFAULT_TEMPLATE,
      templateLocked: true
    };
  }

  function getSettings(){ return Object.assign(defaultSettings(), lsGet(KEYS.settings, {})); }
  function setSettings(s){ lsSet(KEYS.settings, s); }

  // UI-state (tabs etc.) is stored inside settings.ui so it survives reloads
  function loadUIStateInto(stateObj){
    const s = getSettings();
    const ui = (s && s.ui) ? s.ui : {};
    if (typeof ui.settingsSubtab === 'string' && ui.settingsSubtab) stateObj.settingsSubtab = ui.settingsSubtab;
    if (typeof ui.marksType === 'string' && ui.marksType) stateObj.marksType = ui.marksType;
  }

  function saveUIStateFrom(stateObj){
    const s = getSettings();
    s.ui = s.ui || {};
    s.ui.settingsSubtab = stateObj.settingsSubtab;
    s.ui.marksType = stateObj.marksType;
    setSettings(s);
  }

  // Back-compat: older code calls saveState()
  function saveState(){ saveUIStateFrom(state); }
  function getTemplates(){ return Object.assign(defaultTemplates(), (REMOTE_OVERRIDES.templates && (REMOTE_OVERRIDES.templates.templates || REMOTE_OVERRIDES.templates)) || {}, lsGet(KEYS.templatesImported, {}), lsGet(KEYS.templates, {})); }

function getRemoteTemplatesOnly(){
  return (REMOTE_OVERRIDES && REMOTE_OVERRIDES.templates) ? (REMOTE_OVERRIDES.templates.templates || REMOTE_OVERRIDES.templates) : null;
}

function normalizeGender(value) {
  const s = String(value ?? '').trim().toLowerCase();
  if (!s) return '';
  // Common Danish + English variants
  if (['m', 'mand', 'dreng', 'male', 'boy', 'han'].includes(s)) return 'm';
  if (['k', 'kvinde', 'pige', 'female', 'girl', 'hun', 'f', 'w'].includes(s)) return 'k';
  // Heuristics
  if (s.startsWith('m')) return 'm';
  if (s.startsWith('k')) return 'k';
  if (s.startsWith('f')) return 'k';
  return '';
}


function applyRemoteTemplatesToLocal(opts){
  opts = opts || {};
  const remote = getRemoteTemplatesOnly();
  if(!remote) return false;

  const curLocal = lsGet(KEYS.templates, {});
  const curT = getTemplates();
  const locks = {
    schoolTextLocked: curT.schoolTextLocked,
    templateLocked: curT.templateLocked,
    forstanderNameLocked: curT.forstanderNameLocked,
  };

  const nextLocal = Object.assign({}, curLocal);
  // Copy only known template fields from remote (preserve other local keys)
  ['schoolText','template','forstanderName'].forEach(k => {
    if(remote[k] != null) nextLocal[k] = remote[k];
  });
  if(opts && opts.preserveLocks !== false){
    Object.assign(nextLocal, locks);
  }

  // Clear any imported templates (leader pack) when syncing from authoritative overrides
  lsDel(KEYS.templatesImported);
  lsSet(KEYS.templates, nextLocal);
  setTemplatesDirty(false);
  return true;
}

function clearLocalTemplates(){
  lsDel(KEYS.templatesImported);
  lsDel(KEYS.templates);
  setTemplatesDirty(false);
}

function applyTemplatesFromOverridesToLocal(opts={}){
  const { preserveLocks = true, force = false } = opts;
  // Safety: never overwrite user edits unless explicitly forced.
  if(!force && isTemplatesDirty()) return false;
  const remoteT = getRemoteTemplatesOnly();
  if(!remoteT) return false;

  const localNow = lsGet(KEYS.templates, {});
  const next = {};

  // Bring over override-controlled fields
  ['forstanderName','schoolText','template'].forEach(k=>{
    if(remoteT[k] !== undefined) next[k] = remoteT[k];
  });

  // Preserve lock flags (so “leder” can lock text fields without being overwritten)
  if(preserveLocks){
    ['forstanderNameLocked','schoolTextLocked','templateLocked'].forEach(k=>{
      if(localNow[k] !== undefined) next[k] = localNow[k];
    });
  }

  // Write into localStorage so the app works consistently offline (after first load)
  lsSet(KEYS.templates, next);
  setTemplatesDirty(false);
  return true;
}

async function refreshOverridesAndApplyTemplatesIfSafe(force=false){
  if(isTemplatesDirty()) return false;
  await loadRemoteOverrides();
  return applyTemplatesFromOverridesToLocal({ preserveLocks: true });
}
  function setTemplates(t){ lsSet(KEYS.templates, t); }
  function getStudents(){ const s = lsGet(KEYS.students, []); window.__ALL_STUDENTS__ = s || []; return s; }

  function getSelectedStudent(){
    const u = state.selectedUnilogin;
    if(!u) return null;
    const studs = getStudents() || [];
    return (studs || []).find(s => s && s.unilogin === u) || null;
  }

  
function rebuildAliasMapFromStudents(studs){
  const s = getSettings();
  // Start from existing aliasMap, but drop any old initials-keys.
  // Initials are derived from the current student list and may include overrides.
  const alias = { ...(s.aliasMap || {}) };
  try {
    Object.keys(alias).forEach(k => {
      const keyUp = (k || '').toString().trim().toUpperCase();
      if (!keyUp) return;
      if (/^[A-ZÆØÅ]{1,4}$/.test(keyUp)) delete alias[k];
      if (/^[A-ZÆØÅ]{1,4}\/[A-ZÆØÅ]{1,4}$/.test(keyUp)) delete alias[k];
    });
  } catch(_) {}
  const add = (ini, full) => {
    if (!ini || !full) return;
    const k = (ini||'').toString().trim().toLowerCase();
    if (k) alias[k] = full;
    const nk = normalizeName(full).replace(/\s+/g,'');
    if (nk) alias[nk] = full;
  };
  // IMPORTANT:
  // Brug de initialer, der allerede er beregnet ved import (kontaktlaererX_ini).
  // De kan indeholde eksplicitte overrides fra CSV ("Initialer for k-lærer1/2").
  // Hvis vi i stedet danner initialer ud fra navnet her, ender vi med at "genopfinde"
  // auto-initialer (fx Andreas Bech Pedersen -> AP), selv om CSV'en siger AB.
  (studs || []).forEach(st => {
    if (!st) return;

    const pairs = [
      { full: (st.kontaktlaerer1||'').toString().trim(), ini: (st.kontaktlaerer1_ini||'').toString().trim() },
      { full: (st.kontaktlaerer2||'').toString().trim(), ini: (st.kontaktlaerer2_ini||'').toString().trim() }
    ];

    for (const p of pairs){
      if (!p.full) continue;
      // Hvis "fulde" feltet faktisk er initialer (sjældent), gem det som sig selv.
      if (/^[A-ZÆØÅ]{1,4}(\/[A-ZÆØÅ]{1,4})?$/.test(p.full.toUpperCase())) {
        add(p.full.toUpperCase(), p.full);
        continue;
      }
      const ini = isValidInitials(p.ini) ? cleanInitials(p.ini) : toInitials(p.full);
      if (ini) add(ini, p.full);
    }
  });
  setSettings({ ...s, aliasMap: alias });
}

function setStudents(studs){ lsSet(KEYS.students, studs); rebuildAliasMapFromStudents(studs); window.__ALL_STUDENTS__ = studs || []; rebuildAliasMapFromStudents(studs); }
  function getMarks(kindKey){ return lsGet(kindKey, {}); }
  function setMarks(kindKey, m){ lsSet(kindKey, m); try{ updateImportStatsUI(); }catch(_){} }
  function getTextFor(unilogin){
    return lsGet(KEYS.textPrefix + unilogin, { elevudvikling:'', praktisk:'', kgruppe:'', lastSavedTs:null, studentInputMeta:null });
  }
  function setTextFor(unilogin, obj){ lsSet(KEYS.textPrefix + unilogin, obj); }

  function computePeriod(schoolYearEnd) {
    const endYear = Number(schoolYearEnd) || (new Date().getFullYear());
    return { from: `August ${endYear - 1}`, to: `Juni ${endYear}`, dateMonthYear: `Juni ${endYear}` };
  }

  function genderGroup(genderRaw) {
    const g = normalizeName(genderRaw);
    if (g === 'k' || g.includes('pige') || g.includes('female')) return 0;
    if (g === 'm' || g.includes('dreng') || /\bmale\b/.test(g)) return 1;
    return 2;
  }

  function pronouns(genderRaw) {
    const g = normalizeName(genderRaw);

    const isFemale = (g === 'k' || g === 'f' || g === 'p' || g.includes('pige') || g.includes('kvinde') || g.includes('female'));
    const isMale = (g === 'm' || g === 'd' || g.includes('dreng') || g.includes('mand') || /\bmale\b/.test(g));

    const cap1 = (s) => {
      const str = String(s || '');
      return str ? (str.charAt(0).toUpperCase() + str.slice(1)) : str;
    };

    const pack = (hanHun, hamHende, hansHendes) => ({
      HAN_HUN: hanHun,
      HAM_HENDE: hamHende,
      HANS_HENDES: hansHendes,
      SIG_HAM_HENDE: 'sig',
      HAN_HUN_CAP: cap1(hanHun),
      HAM_HENDE_CAP: cap1(hamHende),
      HANS_HENDES_CAP: cap1(hansHendes),
    });

    if (isFemale && !isMale) return pack('hun', 'hende', 'hendes');
    if (isMale && !isFemale) return pack('han', 'ham', 'hans');
    // Ukendt/neutral
    return pack('han/hun', 'ham/hende', 'hans/hendes');
  }


  function sortedStudents(all) {
    // Sortér alfabetisk efter fornavn (primært), derefter efternavn.
    return all.slice().sort((a,b) =>
      (a.fornavn||'').localeCompare(b.fornavn||'', 'da') ||
      (a.efternavn||'').localeCompare(b.efternavn||'', 'da')
    );
  }

  // ---------- templating ----------
  function snippetTextByGender(snObj, genderRaw) {
    const g = normalizeName(genderRaw);
    const isMale = (g === 'm' || g.includes('dreng') || /\bmale\b/.test(g));
    const txt = isMale ? (snObj.text_m || '') : (snObj.text_k || snObj.text_m || '');
    return txt;
  }
  function applyPlaceholders(text, placeholderMap) {
  if (!text) return "";
  const s = String(text);

  // Replaces both {KEY} and {{KEY}} (allows æ/ø/å).
  // Lookup strategy:
  // 1) exact uppercased key
  // 2) normalized key (æ/ø/å -> AE/OE/AA + diacritics stripped)
  // 3) raw key as-is
  return s.replace(/\{\{\s*([^{}]+?)\s*\}\}|\{\(\s*([^){}]+?)\s*\)\}|\{\s*([^{}]+?)\s*\}/g, (m, k1, k2, k3) => {
    const rawKey = (k1 || k2 || k3 || "").trim();
    if (!rawKey) return "";
    const keyUpper = rawKey.toUpperCase();
    const keyNorm = normalizePlaceholderKey(rawKey);

    const v =
      (placeholderMap && (placeholderMap[keyUpper] ?? placeholderMap[keyNorm] ?? placeholderMap[rawKey])) ?? "";

    return (v === null || v === undefined) ? "" : String(v);
  });
}
  function cleanSpacing(text) {
    return (text || '')
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function buildStatement(student, settings) {
    const tpls = getTemplates();
    const period = computePeriod(settings.schoolYearEnd);

    const free = getTextFor(student.unilogin);
    const marksSang = getMarks(KEYS.marksSang)[student.unilogin] || {};
    const marksGym  = getMarks(KEYS.marksGym)[student.unilogin] || {};
    const marksER   = getMarks(KEYS.marksElev)[student.unilogin] || {};

    let sangAfsnit = '';
    if (marksSang.sang_variant && SNIPPETS.sang[marksSang.sang_variant]) {
      sangAfsnit = snippetTextByGender(SNIPPETS.sang[marksSang.sang_variant], student.koen);
    }

    let gymAfsnit = '';
    if (marksGym.gym_variant && SNIPPETS.gym[marksGym.gym_variant]) {
      gymAfsnit = snippetTextByGender(SNIPPETS.gym[marksGym.gym_variant], student.koen);
    }

    const roleTexts = [];
const rolesObj = (SNIPPETS && SNIPPETS.roller) ? SNIPPETS.roller : {};
const roleCodes = Object.keys(rolesObj);

// ny model: array af valgte roller gemt som marksER.gym_roles
// Roller kommer normalt fra gymnastik-faglærerens marks (marksGym).
// Vi har dog set ældre / blandede backups, hvor gym_roles kan ligge andre steder.
// Derfor: prøv marksGym først, fallback til marksER.
const selectedArr =
  (marksGym && Array.isArray(marksGym.gym_roles)) ? marksGym.gym_roles
  : (marksER && Array.isArray(marksER.gym_roles)) ? marksER.gym_roles
  : [];
const selected = new Set(selectedArr.map(s => String(s || '').trim()).filter(Boolean));

roleCodes.forEach(code => {
  const isOn =
    selected.has(code) ||               // ny måde
    (marksGym && marksGym[code] === true); // fallback (hvis gamle booleans findes)

  if (isOn && rolesObj[code]) {
    roleTexts.push(snippetTextByGender(rolesObj[code], student.koen));
  }
});

let rolleAfsnit = roleTexts.filter(Boolean).join('\n\n');

   let elevraadAfsnit = "";
const erObj = (SNIPPETS && SNIPPETS.elevraad) ? SNIPPETS.elevraad : {};
const erKeys = Object.keys(erObj);

// ny model: valgt variant gemt som marksER.elevraad_variant
const chosen =
  (marksER && typeof marksER.elevraad_variant === "string" && marksER.elevraad_variant.trim())
    ? marksER.elevraad_variant.trim()
    : ((marksER && marksER.elevraad && erKeys[0]) ? erKeys[0] : "");

if (chosen && erObj[chosen]) {
  elevraadAfsnit = snippetTextByGender(erObj[chosen], student.koen);
}

    const fullName = `${student.fornavn} ${student.efternavn}`.trim();
    const firstName = callName(student.fornavn);
    const pr = pronouns(student.koen);
    const snMap = {
      "ELEV_FORNAVN": (student.fornavn||'').trim(),
      "ELEV_NAVN": fullName,
      "FORNAVN": (student.fornavn||'').trim(),
      "NAVN": fullName,
      "HAN_HUN": pr.HAN_HUN,
      "HAM_HENDE": pr.HAM_HENDE,
      "HANS_HENDES": pr.HANS_HENDES,
      "HAN_HUN_CAP": pr.HAN_HUN_CAP,
      "HAM_HENDE_CAP": pr.HAM_HENDE_CAP,
      "HANS_HENDES_CAP": pr.HANS_HENDES_CAP
    };
    sangAfsnit = applyPlaceholders(sangAfsnit, snMap);
    gymAfsnit = applyPlaceholders(gymAfsnit, snMap);
    elevraadAfsnit = applyPlaceholders(elevraadAfsnit, snMap);
    rolleAfsnit = applyPlaceholders(rolleAfsnit, snMap);

    const kontakt = [student.kontaktlaerer1, student.kontaktlaerer2].filter(x => (x||'').trim()).join(' / ');

    // Kontaktgruppe-antal skal være antal elever i den *aktive* K-lærers kontaktgruppe.
    // Brug aldrig "alle elever" som fallback her, da det giver forkerte tal i udtalelser.
    function computeActiveContactGroupCount() {
      try {
        const studsAll = (window.__ALL_STUDENTS__ && Array.isArray(window.__ALL_STUDENTS__)) ? window.__ALL_STUDENTS__ : [];
        if (!studsAll.length) return '';
        const meRaw = (settings.meResolved || settings.me || '').toString();
        const meNorm = normalizeName(meRaw);
        if (!meNorm) return '';
        const cnt = studsAll.filter(st =>
          normalizeName(toInitials(st.kontaktlaerer1_ini || '')) === meNorm ||
          normalizeName(toInitials(st.kontaktlaerer2_ini || '')) === meNorm
        ).length;
        return String(cnt);
      } catch (e) {
        return '';
      }
    }

    const activeContactGroupCount = computeActiveContactGroupCount() || String(settings.contactGroupCount || '');

    const placeholderMap = {
      "ELEV_NAVN": fullName,
      "ELEV_FORNAVN": firstName,
      "HAN_HUN": pr.HAN_HUN,
      "HAM_HENDE": pr.HAM_HENDE,
      "HANS_HENDES": pr.HANS_HENDES,
      "HAN_HUN_CAP": pr.HAN_HUN_CAP,
      "HAM_HENDE_CAP": pr.HAM_HENDE_CAP,
      "HANS_HENDES_CAP": pr.HANS_HENDES_CAP,
      "ELEV_EFTERNAVN": (student.efternavn || '').trim(),
      "ELEV_KLASSE": formatClassLabel(student.klasse),
      "PERIODE_FRA": period.from,
      "PERIODE_TIL": period.to,
      "DATO_MAANED_AAR": period.dateMonthYear,

      "SKOLENS_STANDARDTEKST": tpls.schoolText || '',
      "SANG_AFSNIT": sangAfsnit,
      "GYM_AFSNIT": gymAfsnit,
      "SANG_GYM_AFSNIT": [sangAfsnit, gymAfsnit].filter(Boolean).join("\n\n"),
      "ELEVRAAD_AFSNIT": elevraadAfsnit,
      "ROLLE_AFSNIT": rolleAfsnit,

      "ELEVUDVIKLING_AFSNIT": (free.elevudvikling || ''),
      "PRAKTISK_AFSNIT": (free.praktisk || ''),
      "KONTAKTGRUPPE_AFSNIT": (free.kgruppe || SNIPPETS.kontaktgruppeDefault),

      "AFSLUTNING_AFSNIT": SNIPPETS.afslutningDefault,

      "KONTAKTLAERERE": kontakt,
      "FORSTANDER": settings.forstanderName || '',
// Synonymer til skabeloner/snippets (forskellige placeholder-navne)
"ELEV_FULDE_NAVN": fullName,
"ELEV_FULD_E_NAVN": fullName,
"ELEV_UDVIKLING_AFSNIT": (free.elevudvikling || ''),
"ELEV_UDVIKLING_FRI": (free.elevudvikling || ''),
"PRAKTISK_FRI": (free.praktisk || ''),
"KGRUPPE_FRI": (free.kgruppe || ''),
"KONTAKTGRUPPE_ANTAL": activeContactGroupCount,
"KONTAKTGRUPPE_BESKRIVELSE": (free.kgruppe || SNIPPETS.kontaktgruppeDefault || ''),
"KONTAKTLAERER_1_NAVN": ((student.kontaktlaerer1 || '') + '').trim(),
"KONTAKTLAERER_2_NAVN": ((student.kontaktlaerer2 || '') + '').trim(),
      "KONTAKTLÆRER_1_NAVN": ((student.kontaktlaerer1 || '') + '').trim(),
      "KONTAKTLÆRER_2_NAVN": ((student.kontaktlaerer2 || '') + '').trim(),
"FORSTANDER_NAVN": settings.forstanderName || '',

      "HAN_HUN": pr.HAN_HUN,
      "HAM_HENDE": pr.HAM_HENDE,
      "HANS_HENDES": pr.HANS_HENDES,
      "HAN_HUN_CAP": pr.HAN_HUN_CAP,
      "HAM_HENDE_CAP": pr.HAM_HENDE_CAP,
      "HANS_HENDES_CAP": pr.HANS_HENDES_CAP,

      /* legacy placeholders */
      "NAVN": fullName,
      "FORNAVN": firstName,
      "KLASSE": (student.klasse || '').trim(),
      "ELEVUDVIKLING_FRI": (free.elevudvikling || ''),
      "PRAKTISK_FRI": (free.praktisk || ''),
      "KGRUPPE_FRI": (free.kgruppe || SNIPPETS.kontaktgruppeDefault),
      "SANG_SNIPPET": sangAfsnit,
      "GYM_SNIPPET": gymAfsnit,
      "ELEVRAAD_SNIPPET": elevraadAfsnit,
      "ROLLE_SNIPPETS": rolleAfsnit,
      "ELEVRAAD_AFSNIT": (elevraadAfsnit || ""),
      "ROLLE_AFSNIT": (rolleAfsnit || ""),
      "MARKS_AFSNIT": [sangAfsnit, gymAfsnit, elevraadAfsnit, rolleAfsnit].filter(Boolean).join('\n\n'),

      "SANG_GYM_AFSNIT": ""
    };

    let out = tpls.template || DEFAULT_TEMPLATE;
    // If the active template has separate placeholders for elevråd/roller,
    // keep SANG_GYM_AFSNIT limited to sang+gym to avoid duplicates.
    const hasElevraadSlot = (out.indexOf("{{ELEVRAAD_AFSNIT}}") !== -1);
    const hasRolleSlot = (out.indexOf("{{ROLLE_AFSNIT}}") !== -1);
    placeholderMap.SANG_GYM_AFSNIT = [sangAfsnit, gymAfsnit]
      .concat((!hasElevraadSlot ? [elevraadAfsnit] : []))
      .concat((!hasRolleSlot ? [rolleAfsnit] : []))
      .filter(Boolean).join('\n\n');
    out = applyPlaceholders(out, placeholderMap);
    return cleanSpacing(out);
  }

  async function readFileText(file) { return await file.text(); }

  // ---------- student CSV mapping ----------
  const STUDENT_COLMAP = {
    fornavn: new Set(["fornavn","firstname","givenname"]),
    efternavn: new Set(["efternavn","lastname","surname","familyname"]),
    unilogin: new Set(["unilogin","unicbrugernavn","unicusername","unic"]),
    koen: new Set(["køn","koen","gender", "kon"]),
    klasse: new Set(["klasse","class","hold"]),
    kontakt1: new Set(["kontaktlærer1","kontaktlaerer1","relationerkontaktlaerernavn","relationerkontaktlærernavn","kontaktlærer","kontaktlaerer"]),
    kontakt2: new Set(["kontaktlærer2","kontaktlaerer2","relationerandenkontaktlaerernavn","relationerandenkontaktlærernavn","andenkontaktlærer","andenkontaktlaerer"])
    ,ini1: new Set(["initialerforklaerer1","initialerforklærer1","kontaktlaerer1initialer","kontaktlærer1initialer"])
    ,ini2: new Set(["initialerforklaerer2","initialerforklærer2","kontaktlaerer2initialer","kontaktlærer2initialer"])
  };
  function mapStudentHeaders(headers) {
    const mapped = {};
    for (const h of headers) {
      const key = normalizeHeader(h);
      for (const [field,set] of Object.entries(STUDENT_COLMAP)) {
        if (set.has(key)) mapped[field] = h;
      }
    }

    // Fuzzy fallbacks (Excel/Uni-C variants with odd dashes/spaces etc.)
    // We ONLY use these if the strict map did not find a column.
    const findBy = (pred) => {
      for (const h of headers) {
        const k = normalizeHeader(h);
        if (pred(k)) return h;
      }
      return null;
    };

    if (!mapped.ini1) {
      const h = findBy(k => k.includes('initialer') && k.includes('laerer') && k.includes('1'));
      if (h) mapped.ini1 = h;
    }
    if (!mapped.ini2) {
      const h = findBy(k => k.includes('initialer') && k.includes('laerer') && k.includes('2'));
      if (h) mapped.ini2 = h;
    }

    return mapped;
  }

  function buildTeacherOverrideMap(rows, map){
    // Build canonical teacher overrides from CSV columns:
    // - Kontaktlærer1 paired with "Initialer for k-lærer1"
    // - Kontaktlærer2 paired with "Initialer for k-lærer2"
    // Any valid override (1-4 letters after cleaning) wins for that full name, regardless of later position.
    const out = new Map(); // normFullName -> cleanedInitials
    const add = (fullRaw, iniRaw) => {
      const full = (fullRaw ?? '').toString().trim();
      if (!full) return;
      const norm = normalizeName(full);
      if (!norm) return;
      const cleaned = cleanInitials(iniRaw);
      if (!isValidInitials(cleaned)) return;
      // Keep first seen override unless a later one differs; if differs, prefer the shorter/cleaner one.
      if (!out.has(norm)) out.set(norm, cleaned);
      else {
        const prev = out.get(norm);
        if (prev !== cleaned) {
          // Prefer the one that looks more like typical initials (2-3 letters), else keep existing.
          const score = (s) => (s.length===2?3:(s.length===3?2:(s.length===1?1:0)));
          if (score(cleaned) > score(prev)) out.set(norm, cleaned);
        }
      }
    };

    for (const row of (rows || [])){
      if (!row) continue;
      const k1 = (row[map.kontakt1] ?? '').toString().trim();
      const i1 = (row[map.ini1] ?? '').toString().trim();
      add(k1, i1);
      const k2 = (row[map.kontakt2] ?? '').toString().trim();
      const i2 = (row[map.ini2] ?? '').toString().trim();
      add(k2, i2);
    }
    return out;
  }
  function normalizeStudentRow(row, map, teacherOverrides) {
    const get = (field) => (row[map[field]] ?? '').trim();

    // Rens fornavn-felt: nogle elever har et "ekstra efternavn" i fornavn-kolonnen.
    // Regel: hvis fornavn har flere ord og IKKE indeholder bindestreg, så bruges første ord som kaldnavn,
    // og resten flyttes over i efternavn (foran eksisterende efternavn).
    const fornavnRaw = get('fornavn');
    let efternavnRaw = get('efternavn');

    let fornavn = fornavnRaw;
    if (fornavnRaw && !fornavnRaw.includes('-')) {
      const parts = fornavnRaw.split(/\s+/).filter(Boolean);
      if (parts.length > 1) {
        fornavn = parts[0];
        const extraSurname = parts.slice(1).join(' ');
        efternavnRaw = (extraSurname + ' ' + (efternavnRaw || '')).trim();
      }
    }

    const efternavn = efternavnRaw;
    const unilogin = get('unilogin') || (normalizeName((fornavn + ' ' + efternavn)).replace(/\s/g, '') + '_missing');
    const koen = normalizeGender(get('koen'));
const klasse = get('klasse');
    const ini1 = (get('ini1') || '').trim();
    const ini2 = (get('ini2') || '').trim();
    const kontakt1_navn = get('kontakt1');
    const kontakt2_navn = get('kontakt2');

    // Initialer-regel (per "Accepterede kolonner"):
    // - Hvis "Initialer for k-lærerX" er udfyldt og ligner rigtige initialer (1-4 bogstaver), brug dem.
    // - Ellers dannes initialer automatisk ud fra kontaktlærerens navn.
    // Tomme felter ignoreres senere i UI.
    const ov1 = teacherOverrides && kontakt1_navn ? teacherOverrides.get(normalizeName(kontakt1_navn)) : '';
    const ov2 = teacherOverrides && kontakt2_navn ? teacherOverrides.get(normalizeName(kontakt2_navn)) : '';
    const k1 = ov1 ? ov1 : normalizedInitials(ini1, kontakt1_navn);
    const k2 = ov2 ? ov2 : normalizedInitials(ini2, kontakt2_navn);
    const navn = ((fornavn || '') + ' ' + (efternavn || '')).trim();
    return { fornavn, efternavn, navn, unilogin, koen, klasse, kontaktlaerer1: kontakt1_navn, kontaktlaerer2: kontakt2_navn, kontaktlaerer1_ini: k1, kontaktlaerer2_ini: k2 };
  }

  // ---------- Canonicalize K-lærer initials across dataset ----------
  // In nogle CSV'er kan samme kontaktlærer optræde med både auto-initialer
  // (fx Andreas Bech Pedersen -> AP) og et eksplicit override (fx AB).
  // Vi ønsker én entydig initial pr. fulde navn i hele datasættet.
  // Heuristik:
  //   - Hvis et fulde navn har mindst én initial som afviger fra autoInitials(fullName),
  //     betragtes den/de som overrides, og den mest hyppige override vælges som canonical.
  //   - Ellers vælges den mest hyppige initial (typisk auto).
  // Resultat: alle elever får samme *_ini for samme fulde navn.
  function canonicalizeTeacherInitials(students){
    const studs = Array.isArray(students) ? students : [];
    if (!studs.length) return studs;

    // Collect stats per full name
    const statsByName = new Map(); // normName -> { fullName, auto, counts: Map(ini->count) }
    const bump = (fullNameRaw, iniRaw) => {
      const full = (fullNameRaw || '').toString().trim();
      if (!full) return;
      const norm = normalizeName(full);
      if (!norm) return;
      const ini = (iniRaw || '').toString().trim().toUpperCase();
      if (!ini) return;
      if (!statsByName.has(norm)) statsByName.set(norm, { fullName: full, auto: toInitials(full), counts: new Map() });
      const s = statsByName.get(norm);
      // keep prettiest full name (longest) if variations exist
      if (full.length > (s.fullName||'').length) s.fullName = full;
      s.counts.set(ini, (s.counts.get(ini) || 0) + 1);
    };

    for (const st of studs){
      if (!st) continue;
      bump(st.kontaktlaerer1, st.kontaktlaerer1_ini);
      bump(st.kontaktlaerer2, st.kontaktlaerer2_ini);
    }

    // Choose canonical initials per name
    const canonicalByName = new Map(); // normName -> canonicalIni
    for (const [norm, info] of statsByName.entries()){
      const auto = (info.auto || '').toUpperCase();
      let best = '';
      let bestCount = -1;

      // Prefer overrides that differ from auto
      for (const [ini, cnt] of info.counts.entries()){
        if (auto && ini === auto) continue;
        if (cnt > bestCount){ best = ini; bestCount = cnt; }
      }

      // If no differing overrides, fall back to most frequent overall
      if (!best){
        for (const [ini, cnt] of info.counts.entries()){
          if (cnt > bestCount){ best = ini; bestCount = cnt; }
        }
      }

      if (best) canonicalByName.set(norm, best);
    }

    // Apply canonical initials
    for (const st of studs){
      if (!st) continue;
      const n1 = normalizeName((st.kontaktlaerer1 || '').toString().trim());
      const n2 = normalizeName((st.kontaktlaerer2 || '').toString().trim());
      if (n1 && canonicalByName.has(n1)) st.kontaktlaerer1_ini = canonicalByName.get(n1);
      if (n2 && canonicalByName.has(n2)) st.kontaktlaerer2_ini = canonicalByName.get(n2);
    }

    return studs;
  }

  // ---------- UI rendering ----------
  function setTab(tab) {
    let students = getStudents();
    if (!students.length && Array.isArray(window.__ALL_STUDENTS__)) students = window.__ALL_STUDENTS__;
    if (!students.length && tab !== 'set') tab = 'set';

    // Redigér kræver valgt elev. Hvis ingen er valgt, send brugeren til K-elever.
    if (tab === 'edit' && !state.selectedUnilogin) tab = 'k';

    state.tab = tab;
    if (tab === 'k') updateTabLabels();

    if (tab === 'set') setSettingsSubtab('general');

    ['k','edit','set'].forEach(t => {
      const btn = $('tab-' + (t==='set'?'set':t));
      if (btn) btn.classList.toggle('active', tab === t);
      const view = $('view-' + (t==='set'?'set':t));
      if (view) view.classList.toggle('active', tab === t);
    });

    renderAll();
  }

function setSettingsSubtab(sub) {
    state.settingsSubtab = sub || 'general';
    const btns = document.querySelectorAll('#settingsSubtabs .subtab');
    btns.forEach(b => b.classList.toggle('active', b.dataset.subtab === state.settingsSubtab));
    const panes = document.querySelectorAll('#view-set .settingsSubtab');
    panes.forEach(p => p.classList.toggle('active', p.dataset.subtab === state.settingsSubtab));

    // Persistér valg af underfane og sørg for at UI'et re-rendres
    // (ellers bliver fx faglærer-tabellen ikke bygget).
    saveState();
  // Undgå recursion: opdater kun UI lokalt
  updateTeacherDatalist();
  renderMarksTable(); // hvis export-pane er synligt
}

function updateTabLabels(){
  const kBtn = $('tab-k');
  if(!kBtn) return;
  const span = kBtn.querySelector('span');

  // Tab label (kort) og stor titel (mere informativ)
  const tabTitle = (state.viewMode === 'ALL') ? 'Alle K-grupper' : 'K-elever';
  if (span) span.textContent = tabTitle;
  kBtn.title = tabTitle;

  const h = $('kTitle');
  if (h) {
    if (state.viewMode === 'ALL') {
      h.textContent = 'Alle K-grupper';
    } else {
      const s = getSettings();
      const meRaw = ((s.me || '') + '').trim();
      const meIni = toInitials(meRaw);
      h.textContent = meIni ? `${meIni}'s K-elever` : 'K-elever';
    }
  }
}


  function updateTabVisibility() {
    const editBtn = $('tab-edit');
    if (!editBtn) return;
    // Skjul Redigér, hvis ingen elev er valgt.
    editBtn.style.display = state.selectedUnilogin ? '' : 'none';
  }

  function renderAll() {
    updateTeacherDatalist();
    updateTabVisibility();
    initMarksSearchPicker();
    renderStatus();
    if (state.tab === 'set') renderSettings();
    if (state.tab === 'k') renderKList();
    if (state.tab === 'edit') renderEdit();
  }

  function renderStatus() {
    const s = getSettings();
    const studs = getStudents();
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);

    const me = '';
    const build = '';
    $('statusText').textContent = studs.length ? `Elever: ${studs.length}` : `Ingen elevliste indlæst`;
}

  
function updateImportStatsUI() {
  const statsCard = document.getElementById('importStatsCard');
  if (!statsCard) return;

  const s = getSettings();
  const studs = getStudents();
  const meRaw = (s.me || '').toString().trim();
  const meIni = toInitials(meRaw);
  const meNorm = normalizeName((s.meResolved || s.me || '').toString());

  // Determine active K-gruppe students (by initials match)
  const total = (studs.length && meNorm)
    ? studs.filter(st =>
        normalizeName(toInitials(st.kontaktlaerer1_ini)) === meNorm ||
        normalizeName(toInitials(st.kontaktlaerer2_ini)) === meNorm
      )
    : [];

  const nTot = total.length;

  const setVal = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const setList = (id, arr) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!arr.length) { el.innerHTML = '<span class="muted">Ingen</span>'; return; }
    el.innerHTML = arr.map(escapeHtml).join('<span class="muted">, </span>');
  };

  // Compute "done" and missing lists (per student: any mark in that category?)
  const missing = { sang: [], gym: [], elevraad: [] };
  const markedER = [];

  const isTruthy = (v) => {
    if (v === true) return true;
    if (v === 1) return true;
    if (typeof v === 'string') return v.trim().length > 0;
    if (typeof v === 'number') return v !== 0 && !Number.isNaN(v);
    return false;
  };
  const hasAnyTruthyValue = (obj) => {
    if (!obj || typeof obj !== 'object') return false;
    return Object.keys(obj).some(k => isTruthy(obj[k]));
  };

  const marksS = getMarks(KEYS.marksSang);
  const marksG = getMarks(KEYS.marksGym);
  const marksE = getMarks(KEYS.marksElev);

  let doneS = 0, doneG = 0, doneE = 0;

  total.forEach(st => {
    const u = st.unilogin;
    const full = `${st.fornavn||''} ${st.efternavn||''}`.trim() || (u||'');
    const sM = marksS[u] || {};
    const gM = marksG[u] || {};
    const eM = marksE[u] || {};

    const hasS = !!(sM.sang_variant || sM.variant || sM.sang || sM.S1 || sM.S2 || sM.S3 || hasAnyTruthyValue(sM));
    const hasG = !!(gM.gym_variant || gM.variant || gM.gym || gM.G1 || gM.G2 || gM.G3 ||
                    Object.keys(gM||{}).some(k => (k||'').toUpperCase().startsWith('R') && isTruthy(gM[k])) ||
                    hasAnyTruthyValue(gM));
    // Elevråd kan være bool/variant/streng – og kan importeres under forskellige nøgler.
    const hasE = !!(eM.elevraad_variant || eM.variant || eM.elevraad || eM.E1 || eM.YES || hasAnyTruthyValue(eM));

    if (hasS) doneS++; else missing.sang.push(full);
    if (hasG) doneG++; else missing.gym.push(full);
    if (hasE) { doneE++; markedER.push(full); } else missing.elevraad.push(full);
  });

  // Hint
  const hint = document.getElementById('importStatsHint');
  if (hint) {
    if (!meNorm || !studs.length) hint.textContent = 'Vælg K-lærer og indlæs elevliste for at se status.';
    else hint.textContent = `Status for ${meIni || 'aktiv'}'s K-gruppe (${nTot} elev${nTot===1?'':'er'}):`;
  }

  // Markerede elevrådsrepræsentanter (typisk få)
  const erMarkedEl = document.getElementById('importERMarked');
  if (erMarkedEl) {
    erMarkedEl.textContent = markedER.length ? `Markeret: ${markedER.join(', ')}` : 'Ingen markeret';
  }

  // Values + "mangler" hint
  setVal('importStatsSang', `${doneS}/${nTot}`);
  setVal('importStatsGym', `${doneG}/${nTot}`);
  setVal('importStatsElevraad', `${doneE}/${nTot}`);
  setVal('importMissSang', nTot ? `(mangler ${missing.sang.length})` : '');
  setVal('importMissGym',  nTot ? `(mangler ${missing.gym.length})` : '');
  setVal('importMissER',   nTot ? `(mangler ${missing.elevraad.length})` : '');

  setList('importMissingSang', missing.sang);
  setList('importMissingGym',  missing.gym);
  setList('importMissingElevraad', missing.elevraad);

  // Colored dots (ok/warn/bad)
  const dotClass = (done, tot) => {
    if (!tot) return 'none';
    if (done === 0) return 'bad';
    const pct = done / tot;
    if (pct >= 0.9) return 'ok';
    return 'warn';
  };
  const setDot = (id, cls) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('ok','warn','bad','none');
    el.classList.add(cls);
  };
  setDot('dotSang', dotClass(doneS, nTot));
  setDot('dotGym',  dotClass(doneG, nTot));
  setDot('dotER',   dotClass(doneE, nTot));

  // Wire toggles once (Sang/Gym)
  const wireToggle = (btnId, boxId) => {
    const btn = document.getElementById(btnId);
    const box = document.getElementById(boxId);
    if (!btn || !box) return;
    if (btn.dataset.wired === '1') return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', () => {
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'block' : 'none';
      btn.textContent = isHidden ? 'Skjul manglende' : 'Vis manglende';
    });
  };
  wireToggle('btnToggleMissingSang', 'importMissingSang');
  wireToggle('btnToggleMissingGym',  'importMissingGym');


  // Disable controls if no data
  const setDisabled = (btnId) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = !nTot;
    btn.style.opacity = nTot ? '1' : '.5';
  };
  setDisabled('btnToggleMissingSang');
  setDisabled('btnToggleMissingGym');
  // (Elevråd har ingen "vis manglende" knap i UI – men hold logikken robust)
}

function renderSettings() {
    const s = getSettings();
    const t = getTemplates();
    const studs = getStudents();
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);


    // Ensure correct subtab visibility
    if (typeof setSettingsSubtab === 'function') setSettingsSubtab(state.settingsSubtab);

    $('forstanderName').value = s.forstanderName || '';
    $('forstanderName').readOnly = !!s.forstanderLocked;
    $('btnToggleForstander').textContent = s.forstanderLocked ? '✏️' : '🔒';

    $('meInput').value = s.me || '';

    // Discreet guidance when a teacher hasn't been chosen yet (e.g. right after importing a backup)
    try {
      const info = document.getElementById('teacherInfoAfterImport');
      if (info) {
        const hasTeacher = ((s.me || '') + '').trim();
        info.style.display = hasTeacher ? 'none' : 'block';
      }
    } catch (_) {}
    $('schoolYearEnd').value = s.schoolYearEnd || '';

    const p = computePeriod(s.schoolYearEnd);
    $('periodFrom').value = p.from;
    $('dateMonthYear').value = p.dateMonthYear;

    $('schoolText').value = t.schoolText ?? DEFAULT_SCHOOL_TEXT;
    $('schoolText').readOnly = !!t.schoolTextLocked;
    $('btnToggleSchoolText').textContent = t.schoolTextLocked ? '✏️ Redigér' : '🔒 Lås';

    $('templateText').value = t.template ?? DEFAULT_TEMPLATE;
    $('templateText').readOnly = !!t.templateLocked;
    $('btnToggleTemplate').textContent = t.templateLocked ? '✏️ Redigér' : '🔒 Lås';

    $('studentsStatus').textContent = studs.length ? `✅ Elevliste indlæst: ${studs.length} elever` : `Upload elevliste først.`;
    $('studentsStatus').style.color = studs.length ? 'var(--accent)' : 'var(--muted)';
    const warnEl = $('studentsWarn');
    if (warnEl) {
      const miss = computeMissingKTeacher(studs);
      if (miss.length) {
        const ex = miss.slice(0,3).map(st => `${escapeHtml(st.fornavn||'')} ${escapeHtml(st.efternavn||'')}`.trim()).filter(Boolean);
        warnEl.style.display = 'block';
        warnEl.innerHTML = `⚠️ <b>Tjek manglende data i CSV</b><div class="small muted" style="margin-top:.25rem">${miss.length} elev(er) mangler K-lærere (Kontaktlærer1/2).${ex.length? '<br>Fx: '+ex.join(', '):''}</div>`;
      } else {
        warnEl.style.display = 'none';
        warnEl.textContent = '';
      }
    }


    // Hvis vi er på Eksport, så render/refresh også flueben-tabellen her,
    // så den ikke "hænger" på en gammel status efter import af students.csv.
    if (state.settingsSubtab === 'export') {
      try { renderMarksTable(); } catch (e) { /* no-op */ }
    }

    const meNorm = normalizeName((s.meResolved || s.me || '').toString());
    if (studs.length && meNorm) {
      const count = studs.filter(st => normalizeName(toInitials(st.kontaktlaerer1_ini)) === meNorm || normalizeName(toInitials(st.kontaktlaerer2_ini)) === meNorm).length;
      $('contactCount').value = String(count);
      // persist contact group count for placeholders
      const s0 = getSettings();
      if (String(s0.contactGroupCount||'') !== String(count)) { s0.contactGroupCount = String(count); setSettings(s0); }
    } else {
      $('contactCount').value = '';
      const s0 = getSettings();
      if (s0.contactGroupCount) { s0.contactGroupCount = ''; setSettings(s0); }
    }

        // ---- Import-status for faglærer-vurderinger (Sang/Gymnastik/Elevråd) ----
    updateImportStatsUI();

renderSnippetsEditor();
    renderMarksTable();
  }

  
function renderSnippetsEditor() {
  // Hvis UI ikke findes (ældre HTML), gør intet
  if (!$('sangText_S1')) return;

  // Sikr vi viser de aktuelle (merged) værdier
  const sangKeys = ['S1','S2','S3'];
  sangKeys.forEach(k => {
    const it = SNIPPETS.sang[k] || { title: k, text_m: '', text_k: '' };
    $('sangLabel_'+k).value = it.title || k;
    $('sangText_'+k).value = (it.text_m || it.text_k || '');
  });

  const gymKeys = ['G1','G2','G3'];
  gymKeys.forEach(k => {
    const it = SNIPPETS.gym[k] || { title: k, text_m: '', text_k: '' };
    $('gymLabel_'+k).value = it.title || k;
    $('gymText_'+k).value = (it.text_m || it.text_k || '');
  });

  // Elevråd
  const er = (SNIPPETS.elevraad && SNIPPETS.elevraad.YES) ? SNIPPETS.elevraad.YES : { text_m: '', text_k: '' };
  $('elevraadText').value = (er.text_m || er.text_k || '');

  // Roller
  const list = document.getElementById('rolesList') || document.getElementById('gymRolesList');
  if (!list) return;
  if (!list.dataset._boundInput) {
    list.dataset._boundInput = '1';
    list.addEventListener('input', (e) => {
      const t = e.target;
      if (t && t.classList && t.classList.contains('roleText')) commitSnippetsFromUI('roller');
    });
  }
  list.innerHTML = '';
  Object.keys(SNIPPETS.roller || {}).forEach(key => {
    const it = SNIPPETS.roller[key];
    const row = document.createElement('div');
    row.className = 'roleRow';
    row.setAttribute('data-role-key', key);
    row.innerHTML = `
      <div class="row gap wrap" style="align-items:center">
        <div class="field" style="min-width:220px;flex:1">
          <label>Rolle-navn</label>
          <input class="roleLabel" type="text" value="${escapeHtml(it.title || key)}" readonly disabled>
        </div>
        <div class="field" style="flex:2;min-width:280px">
          <label>Tekst</label>
          <textarea class="roleText" rows="3">${escapeHtml((it.text_m || it.text_k || ''))}</textarea>
        </div>
        
      </div>
    `;
    list.appendChild(row);
  });
    // Sync optional local print-logo test UI
    try { syncPrintLogoTestUI(); } catch (_) {}

}

function escapeHtml(s) {
  return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


// ---------- Teacher shortcut (header) ----------
function goToGeneralSettingsForTeacher(){
  try {
    setTab('set');
    setSettingsSubtab('general');
  } catch(_) {}
  // Focus + open K-lærer picker
  focusTeacherPickerAutoOpen();
}

function renderTeacherShortcutButton(hostEl, who){
  if (!hostEl) return;
  const title = "Skift K-lærer (Indstillinger → Generelt)";
  const label = (who || '—') + '';
  hostEl.classList.add('teacherRightHost');
  if (hostEl.parentElement) hostEl.parentElement.classList.add('teacherRightWrap');
  hostEl.innerHTML = '';
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'teacherShortcutBtn';
  btn.title = title;
  btn.setAttribute('aria-label', title);
  btn.innerHTML = `<span class="teacherShortcutIcon">✏️</span><span class="teacherShortcutName">${escapeHtml(label)}</span>`;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    goToGeneralSettingsForTeacher();
  });
  hostEl.appendChild(btn);
}
// ----------------------------------------------


function commitSnippetsFromUI(scope) {
  const overrides = getSnippetImported();

  if (scope === 'sang') {
    const items = {};
    ['S1','S2','S3'].forEach(k => {
      items[k] = {
        label: ($('sangLabel_'+k).value || '').trim() || k,
        text: ($('sangText_'+k).value || '').trim()
      };
    });
    overrides.sang = { items, order: ['S1','S2','S3'] };
  }

  if (scope === 'gym') {
    const variants = {};
    ['G1','G2','G3'].forEach(k => {
      variants[k] = {
        label: ($('gymLabel_'+k).value || '').trim() || k,
        text: ($('gymText_'+k).value || '').trim()
      };
    });
    overrides.gym = { variants, variantOrder: ['G1','G2','G3'] };
  }

  if (scope === 'roller') {
    const roles = {};
    Array.from(document.querySelectorAll('[data-role-key]')).forEach(row => {
      const key = row.getAttribute('data-role-key');
      if (!key) return;
      roles[key] = { label: key, text: (row.querySelector('.roleText')?.value || '').trim() };
    });
    overrides.roller = { roles, roleOrder: Object.keys(roles) };
  }

  if (scope === 'elevraad') {
    overrides.elevraad = { label: 'Elevråd', text: ($('elevraadText').value || '').trim() };
  }

  setSnippetImported(overrides);
  applySnippetOverrides();
  // opdater visninger
  if (state.tab === 'edit') renderEdit();
  renderMarksTable();
}

function renderKList() {
    const s = getSettings();
    const studs = getStudents();
    // Faglærer-markeringer (til små indikatorer på elevkort)
    const marksS = getMarks(KEYS.marksSang);
    const marksG = getMarks(KEYS.marksGym);
    const marksE = getMarks(KEYS.marksElev);
    const isTruthy = (v) => {
      if (v === true) return true;
      if (v === 1) return true;
      if (typeof v === 'string') return v.trim().length > 0;
      return false;
    };
    const hasAnyTruthyValue = (obj) => {
      if (!obj || typeof obj !== 'object') return false;
      return Object.values(obj).some(isTruthy);
    };
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);

    // K-lærer-identitet er initialer (persondata-sikkert). Filtrér på elevernes k-lærer-initialer.
    const meRaw = ((s.me || '') + '').trim();
    const meIni = toInitials(meRaw);
    const meResolvedRaw = meIni || meRaw;
    const minePreview = isAll
      ? studs.slice()
      : (meIni
        ? studs.filter(st => toInitials(st.kontaktlaerer1_ini) === meIni || toInitials(st.kontaktlaerer2_ini) === meIni)
        : []);
    const kBox = $('kMessage');
    const kMsg = $('kMsgHost');
    if (kBox) kBox.classList.remove('compact');
    const kList = $('kList');

    // If "Initialer" is not confirmed yet, show an inline input that commits on ENTER.
    // User may type initials OR full name; we only update settings when ENTER is pressed.
    if (!(((s.me || '') + '').trim())) {
      state.visibleKElevIds = [];
      if (kList) kList.innerHTML = '';

      const draft = (state.kMeDraft || '').trim();

      if (kMsg) {
        kMsg.innerHTML = `<div class="row between alignCenter" style="gap:1rem; flex-wrap:wrap;">
        <div class="row alignCenter" style="gap:.7rem; flex-wrap:wrap;">
          <div><b>${minePreview.length} match:</b> <span class="pill">${escapeHtml(meResolvedRaw || s.me || '')}</span></div>
          <div class="muted small">
            Kontaktlærer1/2 matcher initialer.
            <span id="kStatusLine" class="muted"></span>
          </div>
        </div>
        <div class="muted small" id="kProgLine"></div>
      </div>`;
      }

      const inp = $('kMeInline');
      const hint = $('kMeInlineHint');

      if (hint) hint.textContent = 'Tryk Enter for at vise dine K-elever.';

      if (inp) {
        // Restore focus/caret nicely
        try { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); } catch {}
        inp.addEventListener('input', (e) => {
          state.kMeDraft = (e.target.value || '');
        }, { passive: true });

        inp.addEventListener('keydown', (e) => {
          if (e.key !== 'Enter') return;
          e.preventDefault();

          const raw = ((inp.value || '') + '').trim();
          if (!raw) {
            if (hint) hint.textContent = 'Skriv noget først (initialer eller navn).';
            return;
          }

          const match = resolveTeacherMatch(raw);
          const resolved = match.resolved || raw;

          const s2 = getSettings();
          s2.me = raw;
          s2.meResolved = resolved;
          setSettings(s2);

          state.kMeDraft = '';

          renderStatus();
          renderKList();
        });

        // Allow Esc to clear draft
        inp.addEventListener('keydown', (e) => {
          if (e.key !== 'Escape') return;
          state.kMeDraft = '';
          inp.value = '';
          if (hint) hint.textContent = 'Tryk Enter for at vise dine K-elever.';
        });
      }
      return;
    }

    // Confirmed teacher name present -> show list.
    const meResolvedConfirmed = ((s.meResolvedConfirmed || '') + '').trim();
    const kHeaderInfo = $("kHeaderInfo");
    const meNorm = normalizeName(meResolvedConfirmed || meResolvedRaw);

    // --- ALL-mode navigation (K-grupper) ---
    // In ALL mode we show one K-gruppe at a time with ◀︎ / ▶︎ navigation.
    // In K mode we hide the nav-row and keep the existing header/print placement.
    (function syncAllNav(){
      const navRow = $("kAllNavRow");
      const navLabel = $("kAllNavLabel");
      const navRight = $("kAllNavRight");
      const titleActions = $("kTitleActions");
      const btnPrint = $("btnPrintAllK");
      const btnPrev = $("btnPrevGroup");
      const btnNext = $("btnNextGroup");

      if (!navRow || !navLabel || !navRight || !titleActions || !btnPrint || !btnPrev || !btnNext) return;

      // Print button lives in the title row in both modes.
// Label differs so users can tell what will be printed.
try {
  if (isAll) {
    const totalGroups = kGroups.length || 0;
    const gi = Math.max(0, Math.min(state.kGroupIndex || 0, Math.max(0, totalGroups - 1)));
    const g = kGroups[gi];
    const key = g ? g.key : '—';
    btnPrint.textContent = `🖨️ Print ${key} · K-gruppe ${gi+1}/${totalGroups}`;
    btnPrint.title = 'Udskriv den aktive K-gruppe som én samlet udskrift';
  } else {
	    const sNow = getSettings();
	    const meIniNow = toInitials(((sNow.meResolvedConfirmed || sNow.meResolved || sNow.me || '') + '').trim()) || '—';
	    const visibleCount = (typeof getVisibleKElevIds === 'function') ? (getVisibleKElevIds().length || 0) : 0;
	    btnPrint.textContent = `🖨️ Print ${meIniNow}'s ${visibleCount} K-elever`;
	    btnPrint.title = 'Udskriv dine K-elever som én samlet udskrift';
  }
  if (btnPrint.parentElement !== titleActions) titleActions.appendChild(btnPrint);
} catch(_) {}

// Default: hidden
      navRow.style.display = isAll ? '' : 'none';

      if (!isAll) return;

      const totalGroups = kGroups.length || 0;
      const gi = Math.max(0, Math.min(state.kGroupIndex || 0, Math.max(0, totalGroups - 1)));
      state.kGroupIndex = gi;

      // Progress = how many students have *any* text (U/P/K)
      const totalStudents = studs.length || 0;
      let edited = 0;
      for (const st of studs) {
        const t = getTextFor(st.unilogin);
        const hasAny = !!((t.elevudvikling||'').trim() || (t.praktisk||'').trim() || (t.kgruppe||'').trim());
        if (hasAny) edited++;
      }

      // Center-label bliver sat senere (efter vi har beregnet udfyldt-status for den aktive gruppe)
      navLabel.textContent = '';

      // Arrow labels show the *target* group (like student prev/next in Redigér)
const prevKey = (gi > 0 && kGroups[gi-1]) ? (kGroups[gi-1].key || '—') : '';
const nextKey = (gi < totalGroups - 1 && kGroups[gi+1]) ? (kGroups[gi+1].key || '—') : '';

if (gi > 0) {
  btnPrev.style.visibility = 'visible';
  btnPrev.textContent = `◀ ${prevKey}`;
} else {
  btnPrev.style.visibility = 'hidden';
  btnPrev.textContent = '◀';
}

if (gi < totalGroups - 1) {
  btnNext.style.visibility = 'visible';
  btnNext.textContent = `${nextKey} ▶`;
} else {
  btnNext.style.visibility = 'hidden';
  btnNext.textContent = '▶';
}

      if (!btnPrev.__wired) {
        btnPrev.__wired = true;
        btnPrev.addEventListener('click', () => {
          if (state.kGroupIndex > 0) state.kGroupIndex -= 1;
          renderKList();
        });
      }
      if (!btnNext.__wired) {
        btnNext.__wired = true;
        btnNext.addEventListener('click', () => {
          if (state.kGroupIndex < kGroups.length - 1) state.kGroupIndex += 1;
          renderKList();
        });
      }
    })();

    // If we landed here directly (e.g. reload with confirmed name), the dashed box
    // may still be empty because it's normally populated in the "not confirmed" branch.
    // Ensure the status/progress lines exist so we don't show an empty placeholder.
    if (kMsg && (!$("kStatusLine") || !$("kProgLine"))) {
      kMsg.innerHTML = `
	        <div class="k-row" style="align-items:center; gap:10px;">
	          <div id="kStatusLine" class="muted small"></div>
	        </div>
        <div id="kProgLine" class="muted small" style="margin-top:6px;"></div>
      `;
    }

    // Build list
    // - K mode: show only my K-elever
    // - ALL mode: show current K-gruppe (state.kGroupIndex)
    const mineList = isAll
      ? ((kGroups[state.kGroupIndex] && kGroups[state.kGroupIndex].students) ? kGroups[state.kGroupIndex].students.slice() : [])
      : sortedStudents(studs).filter(st => normalizeName(toInitials(st.kontaktlaerer1_ini)) === meNorm || normalizeName(toInitials(st.kontaktlaerer2_ini)) === meNorm);
    // Sortér altid alfabetisk efter fornavn i den viste liste
    mineList.sort((a,b)=>(a.fornavn||'').localeCompare(b.fornavn||'', 'da') || (a.efternavn||'').localeCompare(b.efternavn||'', 'da'));


const prog = mineList.reduce((acc, st) => {
      const f = getTextFor(st.unilogin);
      acc.u += (f.elevudvikling||'').trim()?1:0;
      acc.p += (f.praktisk||'').trim()?1:0;
      acc.k += (f.kgruppe||'').trim()?1:0;
      return acc;
    }, {u:0,p:0,k:0});

    const progEl = $("kProgLine");
    if (progEl) {
      const core = `Udvikling: ${prog.u} af ${mineList.length} · Praktisk: ${prog.p} af ${mineList.length} · K-gruppe: ${prog.k} af ${mineList.length}`;
      const txt = `${core}`;
      // I ALL-visning viser vi KUN "core" i midten (uden "Udfyldt indtil nu"), så linjen ikke bliver for høj.
      progEl.textContent = txt;
      progEl.style.display = isAll ? 'none' : '';
      // I K-visning centrerer vi linjen i den stiplede boks.
      progEl.style.textAlign = isAll ? '' : 'center';
      const navLabel = $("kAllNavLabel");
      if (isAll && navLabel) navLabel.textContent = core;
    }

    const statusEl = $("kStatusLine");
    if (statusEl) statusEl.textContent = "";
    if (kHeaderInfo) {
      const fullName = ((s.meFullName || '') + '').trim();
      const ini = ((meResolvedConfirmed || meRaw || '') + '').trim();
      const who = (fullName || ini || '—');
      // Mindre dobbeltinfo: kun blyant + navn/initialer
      renderTeacherShortcutButton(kHeaderInfo, who);
    }

    if (kList) {
      kList.innerHTML = mineList.map((st, idx) => {
        const full = `${st.fornavn || ''} ${st.efternavn || ''}`.trim();
        const free = getTextFor(st.unilogin);
        const hasU = !!(free.elevudvikling || '').trim();
        const hasP = !!(free.praktisk || '').trim();
        const hasK = !!(free.kgruppe || '').trim();
        const hasUPK = !!(hasU && hasP && hasK);

        // ALL-mode status: U · P · K → initials (last editor)
        const lastBy = ((free.lastEditedBy || '') + '').trim();
        const letters = [hasU ? 'U' : '', hasP ? 'P' : '', hasK ? 'K' : ''].filter(Boolean).join(' · ');
        // Status on cards: show only filled letters, and (when available) last editor initials.
        // We show this in BOTH views so imported colleague-edits remain visible in K-visning.
        const statusRight = letters
          ? `${letters}${lastBy ? ` → ${escapeHtml(lastBy)}` : ''}`
          : '';

        // Indikér om der ER importeret/markeret Sang/Gym/Elevråd for eleven
        const u = st.unilogin || '';
        const mS = marksS[u] || {};
        const mG = marksG[u] || {};
        const mE = marksE[u] || {};
        const hasS = isTruthy(mS.sang_variant) || isTruthy(mS.variant) || mS.S1 === true || mS.S2 === true || mS.S3 === true || hasAnyTruthyValue(mS);
        const hasG = !!(mG.gym_variant || mG.variant || mG.gym || mG.G1 || mG.G2 || mG.G3);
        const hasE = isTruthy(mE.elevraad_variant) || isTruthy(mE.variant) || isTruthy(mE.elevraad) || hasAnyTruthyValue(mE);
        const isComplete = !!(hasUPK && hasS && hasG);
        const hasAnyProgress = !!(hasU || hasP || hasK || hasS || hasG || hasE);
        const isWip = !!(hasAnyProgress && !isComplete);
        const markLabels = [hasS ? 'Sang' : '', hasG ? 'Gym' : '', hasE ? 'Elevråd' : ''].filter(Boolean);
        const marksLine = markLabels.length ? ` · ${markLabels.join(' · ')}` : '';

        return `
          <div class="card clickable ${((idx === state.kActiveIndex) ? "kbActive " : "")}${isComplete ? "complete" : (isWip ? "wip" : "")}" data-unilogin="${escapeAttr(st.unilogin)}">
            <div class="cardTopRow">
              <div class="cardTitle"><b>${escapeHtml(full)}</b></div>
              ${isComplete ? `<span class="dot done" title="Færdig: U, P og K er udfyldt."></span>` : (isWip ? `<span class="dot wip" title="Undervejs: der er indhold, men ikke alt er færdigt endnu."></span>` : ``)}
              <div class="cardFlags muted small">${statusRight}</div>
            </div>
            <div class="cardSub muted small">${escapeHtml(formatClassLabel(st.klasse || '') + marksLine)}</div>
          </div>
        `;
      }).join('');

      kList.querySelectorAll('[data-unilogin]').forEach(el => {
        el.addEventListener('click', () => {
          state.selectedUnilogin = el.getAttribute('data-unilogin');
          setTab('edit');
          renderAll();
          });
      });
    }
}

function setEditEnabled(enabled) {
    ['txtElevudv','txtPraktisk','txtKgruppe','fileStudentInput','btnPickStudentPdf','btnOpenStudentInput','btnClearStudentInput','btnPrint']
      .forEach(id => { const el = $(id); if (el) el.disabled = !enabled; });
  }
  function formatClassLabel(raw) {
  const k = ((raw || '') + '').trim();
  if (!k) return '';
  // Accept "9", "10", "9.", "10." etc.
  const m = k.match(/^(\d{1,2})\.?$/);
  if (m) return `${m[1]}. klasse`;
  return k;
}

function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString('da-DK', {hour:'2-digit', minute:'2-digit'});
  }
  function formatDateTime(ts) {
    const d = new Date(ts);
    return d.toLocaleString('da-DK', {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'});
  }



  // Completion ratios shown in folded section headers (e.g. 6/10)
  // Targets are char-count goals; tweak here if you want different expectations.
  const SECTION_TARGETS = { elevudv: 600, praktisk: 350, kgruppe: 350 };

  function ratio10(text, target) {
    const n = (text || '').trim().length;
    if (!target || target <= 0) return { score: 0, n };
    const score = Math.max(0, Math.min(10, Math.round((n / target) * 10)));
    return { score, n };
  }

  function updateEditRatios() {
    const nE = ($('txtElevudv')?.value || '').trim().length;
    const nP = ($('txtPraktisk')?.value || '').trim().length;
    const nK = ($('txtKgruppe')?.value || '').trim().length;

    const elE = $('ratioElevudv'); if (elE) elE.textContent = nE ? `antal tegn: ${nE}` : '';
    const elP = $('ratioPraktisk'); if (elP) elP.textContent = nP ? `antal tegn: ${nP}` : '';
    const elK = $('ratioKgruppe'); if (elK) elK.textContent = nK ? `antal tegn: ${nK}` : '';
  }

  function maybeOpenEditSection() {
    const sec = state.openEditSection;
    if (!sec) return;
    const map = {
      elevudv: { details: 'secElevudv', textarea: 'txtElevudv' },
      praktisk: { details: 'secPraktisk', textarea: 'txtPraktisk' },
      kgruppe: { details: 'secKgruppe', textarea: 'txtKgruppe' }
    };
    const m = map[sec];
    if (m) {
      const d = $(m.details);
      if (d) d.open = true;
      const ta = $(m.textarea);
      if (ta) ta.focus();
    }
    state.openEditSection = null;
  }

  function getVisibleKElevIds() {
    if (state.visibleKElevIds && state.visibleKElevIds.length) return state.visibleKElevIds.slice();
    const s = getSettings();
    const studs = getStudents();
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);

    // In ALL-mode we navigate within the currently selected K-gruppe.
    if (isAll) {
      const g = kGroups[state.kGroupIndex];
      if (!g || !g.students) return [];
      return g.students.map(st => st.unilogin);
    }

    const meNorm = normalizeName((s.meResolved || s.me || '').toString());
    if (!studs.length || !meNorm) return [];
    return sortedStudents(studs)
      .filter(st => normalizeName(toInitials(st.kontaktlaerer1_ini)) === meNorm || normalizeName(toInitials(st.kontaktlaerer2_ini)) === meNorm)
      .map(st => st.unilogin);
  }

  function gotoAdjacentStudent(dir) {
    const ids = getVisibleKElevIds();
    if (!ids.length || !state.selectedUnilogin) return;
    const i = ids.indexOf(state.selectedUnilogin);
    if (i === -1) return;
    const nextIndex = i + (dir === 'next' ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= ids.length) return;
    state.selectedUnilogin = ids[nextIndex];
    state.openEditSection = null;
    // Ensure edit tab stays visible
    updateTabVisibility();
    renderEdit();
  }

  function renderEdit() {
    const studs = getStudents();
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);

    const msg = $('editMessage');
    const hint = $('editHint');
    const navRow = $('editNavRow');
    const pill = $('editStudentPill');
    const bPrev = $('btnPrevStudent'); const bNext = $('btnNextStudent');
    const editHeaderInfo = $('editHeaderInfo');
    if (editHeaderInfo) {
      const s = getSettings();
      const fullName = ((s.meFullName || '') + '').trim();
      const meResolvedConfirmed = ((s.meResolvedConfirmed || '') + '').trim();
      const meRaw = ((s.me || '') + '').trim();
      const meIni = toInitials(meRaw);
      const who = (fullName || meResolvedConfirmed || meIni || meRaw || '—');
      renderTeacherShortcutButton(editHeaderInfo, who);
    }

    if (!studs.length) {
      if (navRow) navRow.style.display = 'none';
      if (hint) hint.innerHTML = `<b>Upload elevliste først</b><br><span class="muted">Gå til Indstillinger → Elevliste (CSV).</span>`;
      pill.textContent = 'Ingen elev valgt';
      setEditEnabled(false);
      $('preview').textContent = '';
      if (bPrev) bPrev.style.display = 'none';
      if (bNext) bNext.style.display = 'none';
      return;
    }
    if (!state.selectedUnilogin) {
      if (navRow) navRow.style.display = 'none';
      if (hint) hint.innerHTML = `<b>Vælg en elev</b><br><span class="muted">Gå til fanen K-elever og klik på en elev.</span>`;
      pill.textContent = 'Ingen elev valgt';
      setEditEnabled(false);
      $('preview').textContent = '';
      if (bPrev) bPrev.style.display = 'none';
      if (bNext) bNext.style.display = 'none';
      return;
    }

    const st = studs.find(x => x.unilogin === state.selectedUnilogin);
    if (!st) {
      if (navRow) navRow.style.display = 'none';
      if (hint) hint.innerHTML = `<b>Kunne ikke finde eleven</b><br><span class="muted">Vælg eleven igen under K-elever.</span>`;
      pill.textContent = 'Ingen elev valgt';
      setEditEnabled(false);
      $('preview').textContent = '';
      if (bPrev) bPrev.style.display = 'none';
      if (bNext) bNext.style.display = 'none';
      return;
    }

    if (navRow) navRow.style.display = '';
    if (hint) hint.innerHTML = '';
    const full = `${st.fornavn} ${st.efternavn}`.trim();

	    // Update "Print elev" button label to include the active student's first name.
	    const btnPrintOne = $('btnPrint');
	    if (btnPrintOne) {
	      const fn = (st.fornavn || '').trim();
	      btnPrintOne.textContent = fn ? `🖨️ Print ${fn}` : '🖨️ Print elev';
	      btnPrintOne.title = fn ? `Udskriv udtalelsen for ${fn}` : 'Udskriv udtalelsen for den aktive elev';
	    }
    // Move the full active student name into the nav row center (bigger), to free vertical space.
    if (pill) { pill.style.display = 'none'; }
    const centerSlot = navRow ? navRow.querySelector('.navSlot.center') : null;
    if (centerSlot) {
      centerSlot.innerHTML = `<div class="navActiveName">${escapeHtml(full)}</div>` + (st.klasse ? `<div class="navActiveMeta muted small">${escapeHtml(formatClassLabel(st.klasse))}</div>` : ``);
    }

    
    const firstNameById = (id) => {
      const s = studs.find(x => x.unilogin === id);
      return s ? (s.fornavn || '').trim() : '';
    };
// Prev/Next buttons
    const ids = getVisibleKElevIds();
    const idx = ids.indexOf(st.unilogin);
    if (bPrev) {
      const prevId = (idx > 0) ? ids[idx-1] : null;
      if (!prevId) {
        bPrev.style.display = 'none';
      } else {
        bPrev.style.display = '';
        const prevName = firstNameById(prevId) || '';
        bPrev.textContent = prevName ? `◀ ${prevName}` : '◀ Forrige';
      }
    }
    if (bNext) {
      const nextId = (idx !== -1 && idx < ids.length-1) ? ids[idx+1] : null;
      if (!nextId) {
        bNext.style.display = 'none';
      } else {
        bNext.style.display = '';
        const nextName = firstNameById(nextId) || '';
        bNext.textContent = nextName ? `${nextName} ▶` : 'Næste ▶';
      }
    }

    setEditEnabled(true);

    const t = getTextFor(st.unilogin);
    $('txtElevudv').value = t.elevudvikling || '';
    $('txtPraktisk').value = t.praktisk || '';
    $('txtKgruppe').value = t.kgruppe || '';
    // A: Auto-fokus i Udvikling når Redigér åbnes via tastatur (Enter fra K-elever).
    if (state && state.__editOpenedByKeyboard) {
      state.__editOpenedByKeyboard = false;
      // Sørg for at sektionen er åben (Model 1: fold ikke andre sammen).
      const d = $('secElevudv'); if (d) d.open = true;
      setTimeout(() => {
        const el = $('txtElevudv');
        if (el) {
          try { el.focus(); } catch(_) {}
          try { const v = el.value || ''; el.setSelectionRange(v.length, v.length); } catch(_) {}
        }
      }, 0);
    }

    // Keep layout stable: the pill is always present, but hidden when empty.
    const as = $('autosavePill');
    if (as) {
      if (t.lastSavedTs) {
        as.textContent = `Sidst gemt: ${formatTime(t.lastSavedTs)}`;
        as.style.visibility = 'visible';
      } else {
        as.textContent = 'Sidst gemt:';
        as.style.visibility = 'hidden';
      }
    }

    updateEditRatios();
    maybeOpenEditSection();

    const hasInputUrl = !!(state.selectedUnilogin && state.studentInputUrls[state.selectedUnilogin]);
    const meta = t.studentInputMeta || null;
    const hasMeta = !!(meta && meta.filename);
    const metaIsPdf = !!(hasMeta && meta.filename.toLowerCase().endsWith('.pdf'));

    // Meta line: show filename, and if preview can't be restored after reload, explain briefly.
    if (hasMeta) {
      if (!hasInputUrl && metaIsPdf) {
        $('studentInputMeta').textContent = `PDF valgt tidligere: ${meta.filename} — vælg PDF igen for at vise den her.`;
      } else {
        $('studentInputMeta').textContent = `${meta.filename}`;
      }
    } else {
      $('studentInputMeta').textContent = '';
    }

    const btnPick = $('btnPickStudentPdf');
    const btnOpen = $('btnOpenStudentInput');
    const btnClear = $('btnClearStudentInput');

    // PDF-knapper: Som ønsket
    // - Ingen PDF valgt: vis kun "Vælg PDF…"
    // - PDF valgt og kan åbnes (har URL): vis "Åbn i nyt vindue" + "Fjern"
    const hasReadyPdf = !!hasInputUrl;

    if (btnPick) {
      btnPick.textContent = 'Vælg PDF…';
      btnPick.style.display = hasReadyPdf ? 'none' : '';
      btnPick.disabled = false;
    }
    if (btnOpen) {
      btnOpen.textContent = 'Åbn i nyt vindue';
      btnOpen.style.display = hasReadyPdf ? '' : 'none';
      btnOpen.disabled = !hasReadyPdf;
    }
    if (btnClear) {
      btnClear.textContent = 'Fjern';
      btnClear.style.display = hasReadyPdf ? '' : 'none';
      btnClear.disabled = !hasReadyPdf;
    }

    // PDF preview (session only)
    const pWrap = $('studentInputPreviewWrap');
    const pFrame = $('studentInputPreview');
    const isPdf = !!(hasInputUrl && metaIsPdf);
    if (pWrap && pFrame) {
      if (isPdf) {
        pWrap.style.display = '';
        pFrame.src = state.studentInputUrls[state.selectedUnilogin];
      } else {
        pWrap.style.display = 'none';
        pFrame.removeAttribute('src');
      }
    }
$('preview').textContent = buildStatement(st, getSettings());
  }

  function renderMarksTable() {
    const studs = getStudents();
    const wrap = $('marksTableWrap');
    const typeEl = $('marksType');
    const searchEl = $('marksSearch');
    const legendEl = $('marksLegend');

    // Robust wiring: marksTableWrap is created/removed when switching subtabs.
    // So we wire click + keyboard navigation here (when the DOM exists),
    // instead of relying on a one-time init.
    function wireMarksGridOnce() {
      if (!wrap) return;

      // Click / toggle
      if (!wrap.__wiredClick) {
        wrap.__wiredClick = true;
        wrap.addEventListener('click', (e) => {
          const btn = e.target && (e.target.closest ? e.target.closest('button.tickbox[data-u][data-k]') : null);
          if (!btn) return;
          // Keep interaction local + predictable
          e.preventDefault();
          e.stopPropagation();

          const u = btn.getAttribute('data-u');
          const k = btn.getAttribute('data-k');
          if (!u || !k) return;

          const rowId = btn.getAttribute('data-row') || u;
          const colIdx = Number(btn.getAttribute('data-col') || 0);
          state.marksFocus = { row: rowId, col: colIdx };
          state.__marksHadFocus = true;

          const type = (state.marksType || (typeEl && typeEl.value) || 'sang');
          const storageKey = (type === 'gym' || type === 'roller') ? KEYS.marksGym : (type === 'elevraad' ? KEYS.marksElev : KEYS.marksSang);
          const marks = getMarks(storageKey);
          marks[u] = marks[u] || {};

          if (k.startsWith('role:')) {
            const roleKey = k.slice(5);
            const arr = Array.isArray(marks[u].gym_roles) ? marks[u].gym_roles : [];
            const has = arr.includes(roleKey);
            if (has) arr.splice(arr.indexOf(roleKey), 1);
            else arr.push(roleKey);
            marks[u].gym_roles = arr;
          } else {
            const field = (type === 'gym') ? 'gym_variant' : (type === 'elevraad' ? 'elevraad_variant' : 'sang_variant');
            const cur = (marks[u][field] || '');
            marks[u][field] = (cur === k) ? '' : k;
          }

          setMarks(storageKey, marks);
          try { updateImportStatsUI(); } catch (_) {}
          if (state.tab === 'k') { try { renderKList(); } catch (_) {} }

          // Re-render table; focus is restored via restoreMarksGridFocus() below.
          renderMarksTable();
        }, true);
      }

      // Keyboard navigation (arrows + Enter/Space + PageUp/PageDown + Esc)
      
    }

    // Keep keyboard focus stable in the marks grid across re-renders
    
    // Tastatur: kun når fokus står på en tickbox-knap.
    // Regler:
    // - Enter/Space: trigger .click() (ingen state-ændring her)
    // - Piletaster: flyt fokus (ingen state-ændring)
    // - Esc: blur (så globale genveje virker igen)
    function attachMarksTickKeyboard(){
      if (!wrap) return;
      const esc = (v) => String(v || '').replace(/\\/g,'\\\\').replace(/"/g,'\\"');
      const getRowOrder = () => {
        const trs = Array.from(wrap.querySelectorAll('tbody tr'));
        return trs.map(tr => {
          const b = tr.querySelector('button.tickbox[data-row][data-col]');
          return b ? (b.getAttribute('data-row') || '') : '';
        }).filter(Boolean);
      };
      const clampToRow = (rowId, col) => {
        const btns = Array.from(wrap.querySelectorAll(`button.tickbox[data-row="${esc(rowId)}"][data-col]`));
        if (!btns.length) return null;
        const exact = btns.find(b => Number(b.getAttribute('data-col')||0) === col);
        if (exact) return exact;
        const cols = btns.map(b => Number(b.getAttribute('data-col')||0)).sort((a,b)=>a-b);
        const min = cols[0], max = cols[cols.length-1];
        const c = Math.max(min, Math.min(max, col));
        return btns.find(b => Number(b.getAttribute('data-col')||0) === c) || btns[0];
      };
      const focusBtn = (b) => {
        if (!b) return;
        try {
          state.marksFocus = { row: b.getAttribute('data-row') || b.getAttribute('data-u') || '', col: Number(b.getAttribute('data-col')||0) };
          state.__marksHadFocus = true;
        } catch(_) {}
        try { b.focus({ preventScroll: true }); } catch(_) { try { b.focus(); } catch(__) {} }
      };

      const onKey = (e) => {
        const btn = e.currentTarget;
        const key = e.key;

        if (key === 'Escape' || key === 'Esc') {
          e.preventDefault(); e.stopPropagation();
          try { btn.blur(); } catch(_) {}
          return;
        }

        if (key === 'Enter' || key === ' ') {
          e.preventDefault(); e.stopPropagation();
          // eneste toggle
          btn.click();
          return;
        }

        if (!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(key)) return;

        e.preventDefault(); e.stopPropagation();

        const rowId = btn.getAttribute('data-row') || btn.getAttribute('data-u') || '';
        const col = Number(btn.getAttribute('data-col') || 0);

        if (key === 'ArrowLeft' || key === 'ArrowRight') {
          const nextCol = col + (key === 'ArrowRight' ? 1 : -1);
          focusBtn(clampToRow(rowId, nextCol));
          return;
        }

        const order = getRowOrder();
        const idx = order.indexOf(rowId);
        if (idx === -1) return;
        const nextIdx = idx + (key === 'ArrowDown' ? 1 : -1);
        if (nextIdx < 0 || nextIdx >= order.length) return;
        const nextRow = order[nextIdx];
        focusBtn(clampToRow(nextRow, col));
      };

      const buttons = Array.from(wrap.querySelectorAll('button.tickbox[data-u][data-k]'));
      buttons.forEach(b => {
        if (b.__huTickKbWired) return;
        b.__huTickKbWired = true;
        b.addEventListener('keydown', onKey);
      });
    }

function restoreMarksGridFocus(){
      // Fokus gendannes kun hvis brugeren allerede har arbejdet i grid'et.
      if (!state.__marksHadFocus) return;
      const f = state.marksFocus;
      if (!f || !wrap) return;
      // Defer until DOM has been painted
      requestAnimationFrame(() => {
        try {
          const row = String(f.row || '');
          const col = String(f.col || 0);
          // Escape for CSS attribute selector (minimal)
          const esc = (v) => v.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
          const sel = `button.tickbox[data-row="${esc(row)}"][data-col="${esc(col)}"]`;
          const btn = wrap.querySelector(sel);
          if (btn && typeof btn.focus === 'function') btn.focus({ preventScroll: true });
        } catch (_) {}
      });
    }

    // Make sure interactions are wired whenever the export subtab is visible.
    wireMarksGridOnce();

    const pickTextForStudent = (snippet, st) => {
      if (!snippet) return '';
      const pr = pronouns(st.koen || st.gender || st.sex || '');
      const isFemale = pr && pr.HAN_HUN === 'hun';
      return (isFemale ? (snippet.text_k || snippet.text_m || '') : (snippet.text_m || snippet.text_k || ''));
    };
    const placeholderMapFor = (st) => {
      const full = `${st.fornavn||''} ${st.efternavn||''}`.trim();
      const first = (st.fornavn||'').trim() || full.split(' ')[0] || '';
      const pr = pronouns(st.koen || st.gender || st.sex || '');
      return {
        "FORNAVN": first,
        "ELEV_FORNAVN": first,
        "ELEV_NAVN": full,
        "ELEV_FULDE_NAVN": full,
        "HAN_HUN": pr.HAN_HUN,
        "HAM_HENDE": pr.HAM_HENDE,
        "HANS_HENDES": pr.HANS_HENDES,
        "HAN_HUN_CAP": pr.HAN_HUN_CAP,
        "HAM_HENDE_CAP": pr.HAM_HENDE_CAP,
        "HANS_HENDES_CAP": pr.HANS_HENDES_CAP,
        "SIG_HAM_HENDE": pr.SIG_HAM_HENDE
      };
    };
    const previewFor = (st, rawText) => {
      let txt = (rawText || '').trim();
      if (!txt) return '';
      // Support legacy placeholder style: {(HAN_HUN)} etc. -> {HAN_HUN}
      txt = txt.replace(/\{\(\s*([^{}()]+?)\s*\)\}/g, '{$1}')
               .replace(/\{\{\(\s*([^{}()]+?)\s*\)\}\}/g, '{{$1}}');
      // Apply placeholders (same engine as the print-template)
      let out = applyPlaceholders(txt, placeholderMapFor(st)).trim();
      // Make preview readable (only for tooltip): insert line breaks after sentence ends.
      out = out.replace(/([.!?])\s+/g, '$1\n\n');
      // Avoid extreme whitespace
      out = out.replace(/[\t\r]+/g, ' ').trim();
      return out;
    }; // (ellers føles knapperne 'døde').
    const hasStudents = !!(studs && studs.length);
    const disableWithHint = (id, disabled, hint) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.disabled = !!disabled;
      // Preserve original title when enabled.
      if (!el.dataset._origTitle) el.dataset._origTitle = el.getAttribute('title') || '';
      el.setAttribute('title', disabled ? (hint || 'Indlæs først elevliste (students.csv).') : el.dataset._origTitle);
      el.classList.toggle('disabled', !!disabled);
    };
    // Export/print depends on students. Backup should stay available.
    disableWithHint('btnExportMarks', !hasStudents, 'Indlæs først elevliste (students.csv), før du kan eksportere.');
    disableWithHint('btnPrintAllStudents', !hasStudents, 'Indlæs først elevliste (students.csv), før du kan printe.');
    disableWithHint('btnPrintAllGroups', !hasStudents, 'Indlæs først elevliste (students.csv), før du kan printe.');

    // Sticky kolonneheader i eksport-tabellen (marks)
    if (!document.getElementById('marksStickyCss')) {
      const st = document.createElement('style');
      st.id = 'marksStickyCss';
      st.textContent = `
        #marksTableWrap { overflow:auto; max-height:70vh; }
        #marksTableWrap table { border-collapse: separate; border-spacing: 0; }
        #marksTableWrap thead th { position: sticky; top: 0; z-index: 5; background: rgba(14,18,24,0.98); }
      `;
      document.head.appendChild(st);
    }


    // Keep kGroups cached for K-grp labels
    const kGroups = buildKGroups(studs);
    window.__kGroupsCache = kGroups;

    // Tabs for marks type (Sang/Gymnastik/Elevråd)
    const tabs = $('marksTypeTabs');
    if (tabs && typeEl){
      tabs.querySelectorAll('button.tab').forEach(btn=>{
        btn.onclick = ()=>{
          const t = btn.dataset.type;
          if (t && typeEl.value !== t){
            typeEl.value = t;
            renderMarksTable();
          }
        };
      });
      tabs.querySelectorAll('button.tab').forEach(btn=>{
        btn.classList.toggle('active', btn.dataset.type === (typeEl.value || 'sang'));
      });
    }

    const type = (typeEl && typeEl.value) ? typeEl.value : 'sang';

    const storageKey = (type === 'sang') ? KEYS.marksSang : (type === 'gym' || type === 'roller') ? KEYS.marksGym : KEYS.marksElev;
    const q = normalizeName((searchEl && searchEl.value) ? searchEl.value : '').trim();

    if (!studs || !studs.length){
      wrap.innerHTML = `<div class="muted small">Indlæs først elevliste (students.csv).</div>`;
      legendEl.textContent = '';
      return;
    }



    let list = sortedStudents(studs).filter(st => {
      if (!q) return true;
      const fn = normalizeName(st.fornavn || '');
      const en = normalizeName(st.efternavn || '');
      const full = normalizeName(`${st.fornavn} ${st.efternavn}`);
      // Mere forudsigelig filtrering: start på fornavn/efternavn (og evt. fuldt navn)
      return fn.startsWith(q) || en.startsWith(q) || full.startsWith(q);
    });

    // --- Sortering (3-state) på K-grp / Klasse ---
    if (!state.marksSort) state.marksSort = { key: null, dir: 0 };

    const kgrpLabel = (st) => {
      // Always show initials-based group key (e.g. AB/EB), even if CSV stores full teacher names.
      const a = (st.kontaktlaerer1_ini || '').toString().trim();
      const b = (st.kontaktlaerer2_ini || '').toString().trim();
      return groupKeyFromTeachers(a, b);
    };

    function klasseSortKey(v){
      const s = (v || '').toString().trim().toUpperCase();
      const m = s.match(/^(\d+)\s*([A-ZÆØÅ]*)$/);
      if (!m) return { t: 1, s };
      return { t: 0, n: parseInt(m[1],10) || 0, suf: m[2] || '' };
    }

    // Anvend sortering hvis aktiv
    if (state.marksSort && state.marksSort.key && state.marksSort.dir) {
      const dir = state.marksSort.dir;
      const key = state.marksSort.key;
      const cmp = (a,b) => {
        if (key === 'kgrp') {
          return kgrpLabel(a).localeCompare(kgrpLabel(b), 'da');
        }
        if (key === 'klasse') {
          const ka = klasseSortKey(a.klasse);
          const kb = klasseSortKey(b.klasse);
          if (ka.t !== kb.t) return ka.t - kb.t;
          if (ka.t === 0) {
            if (ka.n !== kb.n) return ka.n - kb.n;
            return (ka.suf || '').localeCompare((kb.suf || ''), 'da');
          }
          return (ka.s || '').localeCompare((kb.s || ''), 'da');
        }
        return 0;
      };
      list = [...list].sort((a,b) => dir * cmp(a,b));
    }

    function renderTick(unilogin, key, on, tooltip, colIndex){
      const pressed = on ? 'true' : 'false';
      const cls = 'tickbox' + (on ? ' on' : '');
      // data-u/data-k bruges af click-handleren på marks-tabellen
      return `<td class="cb"><button type="button" class="${cls}" data-u="${escapeAttr(unilogin)}" data-k="${escapeAttr(key)}" aria-pressed="${pressed}" data-tip="${escapeAttr(tooltip||'')}" data-row="${escapeAttr(unilogin)}" data-col="${(colIndex==null?0:colIndex)}" tabindex="0"><span class="check">✓</span></button></td>`;
    }

    
    // --- Custom hover tooltip (multi-line). We don't use the browser title-tooltip because it can't wrap nicely.
    let _hoverTipEl = null;
    function ensureHoverTipEl(){
      if (_hoverTipEl) return _hoverTipEl;
      const el = document.createElement('div');
      el.className = 'hoverTip';
      el.style.display = 'none';
      document.body.appendChild(el);
      _hoverTipEl = el;
      return el;
    }
    function showHoverTip(text, x, y){
      if (!text) return;
      const el = ensureHoverTipEl();
      el.textContent = text;
      el.style.display = 'block';
      // position with clamping
      const pad = 12;
      const rect = el.getBoundingClientRect();
      let left = x + pad;
      let top  = y + pad;
      const maxLeft = window.innerWidth - rect.width - 8;
      const maxTop  = window.innerHeight - rect.height - 8;
      if (left > maxLeft) left = Math.max(8, x - rect.width - pad);
      if (top  > maxTop)  top  = Math.max(8, y - rect.height - pad);
      el.style.left = left + 'px';
      el.style.top  = top  + 'px';
    }
    function hideHoverTip(){
      if (!_hoverTipEl) return;
      _hoverTipEl.style.display = 'none';
    }
    function bindMarksHoverTips(container){
      if (!container || container.dataset._hoverTipsBound) return;
      container.dataset._hoverTipsBound = '1';

      let currentBtn = null;

      container.addEventListener('mousemove', (e) => {
        if (!currentBtn) return;
        const tip = currentBtn.getAttribute('data-tip') || '';
        if (!tip) return;
        showHoverTip(tip, e.clientX, e.clientY);
      });

      container.addEventListener('mouseleave', () => {
        currentBtn = null;
        hideHoverTip();
      });

      container.addEventListener('mouseover', (e) => {
        const btn = e.target && e.target.closest ? e.target.closest('button[data-tip]') : null;
        if (!btn) return;
        const tip = btn.getAttribute('data-tip') || '';
        if (!tip) return;
        currentBtn = btn;
        showHoverTip(tip, e.clientX, e.clientY);
      });

      container.addEventListener('mouseout', (e) => {
        const btn = e.target && e.target.closest ? e.target.closest('button[data-tip]') : null;
        if (!btn) return;
        if (btn === currentBtn) {
          currentBtn = null;
          hideHoverTip();
        }
      });
    }

function tooltipTextFor(st, scope, key){
      try {
        let snip = null;
        if (scope === 'roller') snip = (SNIPPETS.roller || {})[key];
        else snip = (SNIPPETS[scope] || {})[key];
        if (!snip) return '';
        const p = pronouns(st.koen || st.køn || st.gender || '');
        const base = (p.HAN_HUN === 'hun' && snip.text_k) ? snip.text_k : (snip.text_m || snip.text_k || '');
        const filled = applyPlaceholders(base, Object.assign({ FORNAVN: st.fornavn || '' }, p));
        const flat = String(filled || '').trim().replace(/\s+/g,' ');
        if (!flat) return '';
        const pretty = flat.replace(/([.!?])\s+/g, '$1\n\n');
        const title = String(snip.title || key).trim();
        return (title ? (title + '\n\n') : '') + pretty;
      } catch(e) {
        return '';
      }
    }




    // Inline search i kolonneheaderen ("Navn").
    // Vi bruger en separat input (marksSearchInline) og spejler værdien til
    // den eksisterende skjulte marksSearch-input, så resten af logikken er intakt.
    function attachInlineMarksSearch(){
      const inline = document.getElementById('marksSearchInline');
      const clear  = document.getElementById('marksSearchInlineClear');
      if (!inline) return;

      // sync current value
      inline.value = (searchEl && searchEl.value) ? searchEl.value : '';
      if (clear) clear.hidden = !inline.value;

      const rerenderWithFocus = () => {
        // preserve caret
        const pos = inline.selectionStart ?? inline.value.length;
        setTimeout(() => {
          const ii = document.getElementById('marksSearchInline');
          if (!ii) return;
          try {
            ii.focus();
            ii.setSelectionRange(pos, pos);
          } catch(_){ /* no-op */ }
        }, 0);
      };

      inline.oninput = () => {
        if (searchEl) searchEl.value = inline.value;
        if (clear) clear.hidden = !inline.value;
        renderMarksTable();
        rerenderWithFocus();
      };

      if (clear) {
        clear.onclick = (e) => {
          e.preventDefault();
          inline.value = '';
          if (searchEl) searchEl.value = '';
          clear.hidden = true;
          renderMarksTable();
          rerenderWithFocus();
        };
      }
    }


    function attachMarksSortButtons(){
      const btnK = document.getElementById('marksSortKgrp');
      const btnC = document.getElementById('marksSortKlasse');
      const toggle = (key) => {
        if (!state.marksSort) state.marksSort = { key: null, dir: 0 };
        if (state.marksSort.key !== key) {
          state.marksSort.key = key;
          state.marksSort.dir = 1;
        } else {
          // cycle: none -> asc -> desc -> none
          if (!state.marksSort.dir) state.marksSort.dir = 1;
          else if (state.marksSort.dir === 1) state.marksSort.dir = -1;
          else state.marksSort.dir = 0;
        }
        renderMarksTable();
      };
      if (btnK) btnK.onclick = (e) => { e.preventDefault(); toggle('kgrp'); };
      if (btnC) btnC.onclick = (e) => { e.preventDefault(); toggle('klasse'); };
    }


    const nameTh = `
      <th class="nameTh">
        <div class="thName compact">
          <div class="thControl">
            <input id="marksSearchInline" type="text" placeholder="Søg navn…" title="Find elever ved at skrive hele eller dele af navnet" aria-label="Filtrer navn" autocomplete="off" />
            <button class="clearBtn" id="marksSearchInlineClear" title="Ryd" aria-label="Ryd" hidden>×</button>
          </div>
        </div>
      </th>`;

    const sortIcon = (key) => {
      if (!state.marksSort) state.marksSort = { key: null, dir: 0 };
      if (state.marksSort.key !== key || !state.marksSort.dir) return '';
      return state.marksSort.dir === 1 ? '↑' : '↓';
    };
    const thKgrp = `<th class="sortTh"><button type="button" class="sortBtn" id="marksSortKgrp" title="Sortér elever efter kontaktgruppe">K-grp<span class="sortIcon">${sortIcon('kgrp')}</span></button></th>`;
    const thKlasse = `<th class="sortTh"><button type="button" class="sortBtn" id="marksSortKlasse" title="Sortér elever efter klasse">Klasse<span class="sortIcon">${sortIcon('klasse')}</span></button></th>`;

    if (type === 'sang') {
      const marks = getMarks(KEYS.marksSang);
      $('marksLegend').textContent = '';
      const cols = ['S1','S2','S3'].filter(k => (SNIPPETS.sang||{})[k]);

      wrap.innerHTML = `
        <table>
          <thead>
            <tr>
              ${nameTh}${thKgrp}${thKlasse}
              ${cols.map((c,i) => `<th class="cb" title="${escapeAttr((SNIPPETS.sang[c]||{}).title||'')}"><span class="muted small">Niveau ${i+1}</span></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${list.map(st => {
              const m = marks[st.unilogin] || {};
              const full = `${st.fornavn||''} ${st.efternavn||''}`.trim();
              return `<tr>
                <td>${escapeHtml(full)}</td>
                <td class="muted small">${escapeHtml(kgrpLabel(st))}</td>
                <td class="muted small">${escapeHtml(st.klasse||'')}</td>
                ${cols.map((c,ci) => renderTick(st.unilogin, c, ((m.sang_variant||'')===c), previewFor(st, pickTextForStudent(SNIPPETS.sang[c], st)), ci)).join('')}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `;
      attachInlineMarksSearch();
      attachMarksSortButtons();
      bindMarksHoverTips(wrap);
      attachMarksTickKeyboard();
      restoreMarksGridFocus();
      return;
    }

    if (type === 'gym') {
      const marks = getMarks(KEYS.marksGym);
      $('marksLegend').textContent = '';
      const cols = ['G1','G2','G3'].filter(k => (SNIPPETS.gym||{})[k]);

      wrap.innerHTML = `
        <table>
          <thead>
            <tr>
              ${nameTh}${thKgrp}${thKlasse}
              ${cols.map((c,i) => `<th class="cb" title="${escapeAttr((SNIPPETS.gym[c]||{}).title||'')}"><span class="muted small">${['Engageret','Stabil','Varierende'][i]||escapeHtml((SNIPPETS.gym[c]||{}).title||c)}</span></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${list.map(st => {
              const m = marks[st.unilogin] || {};
              const full = `${st.fornavn||''} ${st.efternavn||''}`.trim();
              return `<tr>
                <td>${escapeHtml(full)}</td>
                <td class="muted small">${escapeHtml(kgrpLabel(st))}</td>
                <td class="muted small">${escapeHtml(st.klasse||'')}</td>
                ${cols.map((c,ci) => renderTick(st.unilogin, c, ((m.gym_variant||'')===c), previewFor(st, pickTextForStudent(SNIPPETS.gym[c], st)), ci)).join('')}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `;
      attachInlineMarksSearch();
      attachMarksSortButtons();
      bindMarksHoverTips(wrap);
      attachMarksTickKeyboard();
      restoreMarksGridFocus();
      return;
    }

    if (type === 'roller') {
      const marks = getMarks(KEYS.marksGym);
      $('marksLegend').textContent = '';
      const roleCodes = Object.keys(SNIPPETS.roller || {});

      wrap.innerHTML = `
        <table>
          <thead>
            <tr>
              ${nameTh}${thKgrp}${thKlasse}
              ${roleCodes.map(r => `<th class="cb" title="${escapeAttr((SNIPPETS.roller[r]||{}).hint||'')}"><span class="muted small">${escapeHtml((SNIPPETS.roller[r]||{}).title||r)}</span></th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${list.map(st => {
              const m = marks[st.unilogin] || {};
              const full = `${st.fornavn||''} ${st.efternavn||''}`.trim();
              const roles = Array.isArray(m.gym_roles) ? m.gym_roles : [];
              return `<tr>
                <td>${escapeHtml(full)}</td>
                <td class="muted small">${escapeHtml(kgrpLabel(st))}</td>
                <td class="muted small">${escapeHtml(st.klasse||'')}</td>
                ${roleCodes.map((r,ci) => renderTick(st.unilogin, 'role:'+r, roles.includes(r), previewFor(st, pickTextForStudent(SNIPPETS.roller[r], st)), ci)).join('')}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      `;
      attachInlineMarksSearch();
      attachMarksSortButtons();
      bindMarksHoverTips(wrap);
      attachMarksTickKeyboard();
      restoreMarksGridFocus();
      return;
    }

    // elevraad
    const marks = getMarks(KEYS.marksElev);
    $('marksLegend').textContent = '';
    const cols = Object.keys(SNIPPETS.elevraad || {});

    wrap.innerHTML = `
      <table>
        <thead>
          <tr>
            ${nameTh}${thKgrp}${thKlasse}
            ${cols.map((c,i) => `<th class="cb" title="${escapeAttr((SNIPPETS.elevraad[c]||{}).title||'')}"><span class="muted small">${cols.length===1?'Elevråd':'Valg '+(i+1)}</span></th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${list.map(st => {
            const m = marks[st.unilogin] || {};
            const full = `${st.fornavn||''} ${st.efternavn||''}`.trim();
            return `<tr>
              <td>${escapeHtml(full)}</td>
              <td class="muted small">${escapeHtml(kgrpLabel(st))}</td>
              <td class="muted small">${escapeHtml(st.klasse||'')}</td>
              ${cols.map((c,ci) => renderTick(st.unilogin, c, ((m.elevraad_variant||'')===c), previewFor(st, pickTextForStudent(SNIPPETS.elevraad[c], st)), ci)).join('')}
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    `;
    attachInlineMarksSearch();
    attachMarksSortButtons();
    bindMarksHoverTips(wrap);
    attachMarksTickKeyboard();
    restoreMarksGridFocus();
    return;
}

  async function importMarksFile(e, kind) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const text = await readFileText(f);
    const parsed = parseCsv(text);

    const colUnilogin = parsed.headers.find(h => ['unilogin','unicbrugernavn','unicusername','unic'].includes(normalizeHeader(h)));
    if (!colUnilogin) { alert('CSV mangler kolonne: Unilogin'); return; }

    let imported = 0;
    if (kind === 'sang') {
      const colVar = parsed.headers.find(h => ['sangvariant','sang_variant','sang'].includes(normalizeHeader(h)));
      const map = getMarks(KEYS.marksSang);
      parsed.rows.forEach(r => {
        const u = (r[colUnilogin] || '').trim(); if (!u) return;
        map[u] = map[u] || {};
        map[u].sang_variant = (r[colVar] || '').trim();
        imported++;
      });
      setMarks(KEYS.marksSang, map);
    }
    if (kind === 'gym') {
      const colVar = parsed.headers.find(h => ['gymvariant','gym_variant','gym'].includes(normalizeHeader(h)));
      const roleCodes = Object.keys(SNIPPETS.roller);
      const map = getMarks(KEYS.marksGym);
      parsed.rows.forEach(r => {
        const u = (r[colUnilogin] || '').trim(); if (!u) return;
        map[u] = map[u] || {};
        map[u].gym_variant = (r[colVar] || '').trim();
        roleCodes.forEach(rc => {
          const col = parsed.headers.find(h => normalizeHeader(h) === normalizeHeader(rc));
          if (col) {
            const val = String(r[col]||'').trim();
            map[u][rc] = (val === '1' || normalizeName(val)==='true' || normalizeName(val)==='ja');
          }
        });
        imported++;
      });
      setMarks(KEYS.marksGym, map);
    }
    if (kind === 'elevraad') {
      const colER = parsed.headers.find(h => ['elevraad','elevråd'].includes(normalizeHeader(h)));
      const map = getMarks(KEYS.marksElev);
      parsed.rows.forEach(r => {
        const u = (r[colUnilogin] || '').trim(); if (!u) return;
        map[u] = map[u] || {};
        const val = String(r[colER]||'').trim();
        map[u].elevraad = (val === '1' || normalizeName(val)==='true' || normalizeName(val)==='ja');
        imported++;
      });
      setMarks(KEYS.marksElev, map);
    }

    $('importStatus').textContent = `✅ Importeret ${imported} rækker fra ${f.name}`;
    if (state.tab === 'set') renderMarksTable();
    if (state.tab === 'edit') renderEdit();
  }

  // ---------- events ----------
  function wireEvents() {
    on('tab-k','click', () => { if (state.tab === 'k') { state.viewMode = (state.viewMode === 'ALL') ? 'K' : 'ALL'; renderStatus(); renderKList(); updateTabLabels(); } else { setTab('k'); } });
    on('kTitleBtn','click', () => { state.viewMode = (state.viewMode === 'ALL') ? 'K' : 'ALL'; updateTabLabels(); renderStatus(); renderKList(); });
    // Redigér-tab er skjult når ingen elev er valgt, men vær robust hvis nogen alligevel klikker.
  on('tab-edit','click', async () => {
    // Ensure latest overrides are loaded and applied (unless the user has local edits)
    await loadRemoteOverrides();
    applyTemplatesFromOverridesToLocal({ force: false, preserveLocks: true });
    // Snippets are applied in-memory; clearLocalSnippetScope is not used here.
    applySnippetOverrides();
    setTab('edit');
  });
    on('tab-set','click', () => setTab('set'));

    // Indstillinger: subtabs
    const st = document.getElementById('settingsSubtabs');
    if (st) {
      st.addEventListener('click', (e) => {
        const b = e.target && e.target.closest && e.target.closest('button[data-subtab]');
        if (!b) return;
        setSettingsSubtab(b.dataset.subtab);
      });
    }

    const navEdit = (delta) => {
      // Guard: if buttons are disabled, ignore.
      const btn = delta < 0 ? $('btnPrevStudent') : $('btnNextStudent');
      if (btn && btn.disabled) return;
      const dir = delta < 0 ? 'prev' : 'next';
      gotoAdjacentStudent(dir);
    };
    const bPrev = $('btnPrevStudent');
    const bNext = $('btnNextStudent');
    if (bPrev) bPrev.addEventListener('click', () => navEdit(-1));
    if (bNext) bNext.addEventListener('click', () => navEdit(+1));

    on('btnReload','click', () => location.reload());

    on('btnReset','click', () => {
      if (!confirm('Ryd alle lokale data i denne browser?')) return;
      lsDelPrefix(LS_PREFIX);
      location.reload();
    });

    // Print-logo: lokalt test-logo (gemmes i localStorage, kan ryddes igen)
    const pickLogoBtn = document.getElementById('btnPickPrintLogo');
    const clearLogoBtn = document.getElementById('btnClearPrintLogo');
    const logoInput = document.getElementById('filePrintLogo');
    if (pickLogoBtn && logoInput) {
      pickLogoBtn.addEventListener('click', () => logoInput.click());
      logoInput.addEventListener('change', (e) => {
        const f = e && e.target && e.target.files ? e.target.files[0] : null;
        if (!f) return;
        // Basic guard: only images
        if (!String(f.type || '').startsWith('image/')) {
          alert('Vælg venligst en billedfil (PNG eller SVG).');
          return;
        }
        const fr = new FileReader();
        fr.onload = () => {
          const dataUrl = String(fr.result || '');
          if (!dataUrl) return;
          setLocalPrintLogoDataUrl(dataUrl);
          syncPrintLogoTestUI();
          // reset input so same file can be chosen again
          try { logoInput.value = ''; } catch(_) {}
        };
        fr.readAsDataURL(f);
      });
    }
    if (clearLogoBtn) {
      clearLogoBtn.addEventListener('click', () => {
        clearLocalPrintLogoDataUrl();
        syncPrintLogoTestUI();
      });
    }


async function loadDemoStudentsCsv() {
  if (location && location.protocol === 'file:' && EMBEDDED_DEMO_STUDENTS_CSV) {
    const csvText = EMBEDDED_DEMO_STUDENTS_CSV;
    // When running from file://, fetch() is blocked by CORS for local files.
    // Use the same CSV->students pipeline as normal import, but with the embedded CSV.
    const parsed = parseCsv(csvText);
    const map = mapStudentHeaders(parsed.headers);
    const required = ['fornavn','efternavn','klasse'];
    if (!required.every(r => map[r])) {
      alert('Kunne ikke finde de nødvendige kolonner (fornavn, efternavn, klasse) i demo_students.csv.');
      return;
    }
    const teacherOverrides = buildTeacherOverrideMap(parsed.rows, map);
    const studentsRaw = parsed.rows.map(r => normalizeStudentRow(r, map, teacherOverrides));
    const students = canonicalizeTeacherInitials(studentsRaw);
    setStudents(students);
    renderSettings();
    renderStatus();
    if (state.tab === 'k') renderKList();
    if (state.tab === 'edit') renderEdit();
    if (state.tab === 'set') renderMarksTable();
	    // Some builds don't include a toast helper. Don't crash demo-load because of it.
	    if (typeof showToast === 'function') {
	      showToast('Demo indlæst (embedded).', 'ok');
	    } else {
	      console.log('Demo indlæst (embedded).');
	      const statusEl = document.getElementById('importStatus');
	      if (statusEl) statusEl.textContent = '✅ Demo indlæst.';
	    }
    return;
  }
  const candidates = [
    'demo_students.csv',
    '/demo_students.csv',
    '../demo_students.csv'
  ];

  let text = null;
  let usedUrl = null;

  for (const url of candidates) {
    try {
      const r = await fetch(url, { cache: 'no-store' });
      if (r && r.ok) { text = await r.text(); usedUrl = url; break; }
    } catch (e) {}
  }

  if (!text) throw new Error('Kunne ikke hente demo_students.csv (prøvede: ' + candidates.join(', ') + ')');

  const parsed = parseCsv(text);
  const map = mapStudentHeaders(parsed.headers);
  const required = ['fornavn','efternavn','klasse'];
  if (!required.every(r => map[r])) {
    alert('Kunne ikke finde de nødvendige kolonner (fornavn, efternavn, klasse) i demo_students.csv.');
    return;
  }

      const teacherOverrides = buildTeacherOverrideMap(parsed.rows, map);
  const studentsRaw = parsed.rows.map(r => normalizeStudentRow(r, map, teacherOverrides));
  const students = canonicalizeTeacherInitials(studentsRaw);
  setStudents(students);

  renderSettings(); renderStatus();
  if (state.tab === 'k') renderKList();
  if (state.tab === 'edit') renderEdit();

  // Navigate to settings -> Generelt (vælg K-lærer)
  try {
    setTab('set');
    const btnGen = document.getElementById('settingsTab-general');
    if (btnGen) btnGen.click();
    focusTeacherPickerAutoOpen();
      } catch (_) {}

  console.log('Demo indlæst fra:', usedUrl);
}


on('btnLoadDemo','click', async () => {
  const ok = confirm('Indlæs demo? Dette rydder ALLE lokale data og kan ikke fortrydes.');
  if (!ok) return;

  // Wipe all app local data, then load demo CSV directly (no page reload)
  try {
    lsDelPrefix(LS_PREFIX);
    await loadDemoStudentsCsv();

    // After import, bring user to Generelt (like normal import flow)
    try {
      setTab('set');
      const btnGen = document.getElementById('settingsTab-general');
      if (btnGen) btnGen.click();
      focusTeacherPickerAutoOpen();
      } catch (_) {}
  } catch (e) {
    console.error(e);
    alert('Kunne ikke indlæse demo_students.csv. Se console for detaljer.');
  }
});
on('btnToggleForstander','click', () => {
      const s = getSettings();
      s.forstanderLocked = !s.forstanderLocked;
      setSettings(s);
      renderSettings();
    });
    on('forstanderName','input', () => {
      const s = getSettings();
      s.forstanderName = $('forstanderName').value;
      setSettings(s);
      renderStatus();
      if (state.tab === 'edit') renderEdit();
    });

    on('meInput','input', () => {
      // Do not commit identity on every keystroke; commit happens on ENTER (see teacher picker).
      const raw = $('meInput').value;
      const s = getSettings();
      s.meDraft = raw;
      setSettings(s);
      renderStatus();
    });
on('schoolYearEnd','input', () => {
      const s = getSettings();
      s.schoolYearEnd = Number($('schoolYearEnd').value || s.schoolYearEnd);
      setSettings(s);
      renderSettings();
      if (state.tab === 'edit') renderEdit();
    });

    on('btnToggleSchoolText','click', () => {
      const t = getTemplates();
      t.schoolTextLocked = !t.schoolTextLocked;
      setTemplates(t);
      renderSettings();
    });
    on('btnRestoreSchoolText','click', () => {
      // "Opdater" = hent nyeste overrides og læg dem i localStorage (med mindre brugeren har lokale edits)
      (async () => {
        await loadRemoteOverrides();
        applyTemplatesFromOverridesToLocal({ force: true, preserveLocks: true });
        renderSettings();
        if (state.tab === 'edit') renderEdit();
      })();
    });
    on('schoolText','input', () => {
      const t = getTemplates();
      t.schoolText = $('schoolText').value;
      setTemplates(t);
      setTemplatesDirty(true);
      if (state.tab === 'edit') renderEdit();
    });

    on('btnToggleTemplate','click', () => {
      const t = getTemplates();
      t.templateLocked = !t.templateLocked;
      setTemplates(t);
      renderSettings();
    });
    on('btnRestoreTemplate','click', () => {
      (async () => {
        await loadRemoteOverrides();
        applyTemplatesFromOverridesToLocal({ force: true, preserveLocks: true });
        renderSettings();
        if (state.tab === 'edit') renderEdit();
      })();
    });
    on('templateText','input', () => {
      const t = getTemplates();
      t.template = $('templateText').value;
      setTemplates(t);
      setTemplatesDirty(true);
      if (state.tab === 'edit') renderEdit();
    });

    // Del / importér skabeloner (leder)
    if (document.getElementById('btnExportTemplates')) {
      on('btnExportTemplates','click', () => {
        const pkg = buildOverridePackage('templates');
        downloadJson('templates_override.json', pkg);
      });
      if (document.getElementById('btnImportTemplates') && document.getElementById('fileImportTemplates')) {
        on('btnImportTemplates','click', () => $('fileImportTemplates').click());
        on('fileImportTemplates','change', async (e) => {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        const txt = await f.text();
        const obj = JSON.parse(txt);
        importOverridePackage('templates', obj);
        renderSettings();
        if (state.tab === 'edit') renderEdit();
        e.target.value = '';
        });
      }
    }

// --- Faglærer-tekster (snippets) ---
const sangInputs = ['S1','S2','S3'].flatMap(k => ['sangLabel_'+k, 'sangText_'+k]);
sangInputs.forEach(id => {
  if (!document.getElementById(id)) return;
  $(id).addEventListener('input', () => commitSnippetsFromUI('sang'));
});

const gymInputs = ['G1','G2','G3'].flatMap(k => ['gymLabel_'+k, 'gymText_'+k]);
gymInputs.forEach(id => {
  if (!document.getElementById(id)) return;
  $(id).addEventListener('input', () => commitSnippetsFromUI('gym'));
});

if (document.getElementById('elevraadText')) {
  on('elevraadText','input', () => commitSnippetsFromUI('elevraad'));
  syncMarksTypeTabs();

}

if (document.getElementById('btnDownloadSang')) {
  on('btnDownloadSang','click', () => {
    const pkg = buildOverridePackage('sang');
    downloadJson('snippets_sang_override.json', pkg);
  });
  if (document.getElementById('btnImportSang') && document.getElementById('fileImportSang')) {
    on('btnImportSang','click', () => $('fileImportSang').click());
    on('fileImportSang','change', async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const txt = await f.text();
    const obj = JSON.parse(txt);
    importOverridePackage('sang', obj);
    renderSettings();
    e.target.value = '';
    });
  }
  on('btnRestoreSang','click', async () => {
    await loadRemoteOverrides();
    clearLocalSnippetScope('sang');
    applySnippetOverrides();
    renderSettings();
    if (state.tab === 'edit') renderEdit();
  });
}

if (document.getElementById('btnDownloadGym')) {
  on('btnDownloadGym','click', () => {
    const pkg = buildOverridePackage('gym');
    downloadJson('snippets_gym_override.json', pkg);
  });
  if (document.getElementById('btnImportGym') && document.getElementById('fileImportGym')) {
    on('btnImportGym','click', () => $('fileImportGym').click());
    on('fileImportGym','change', async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const txt = await f.text();
      const obj = JSON.parse(txt);
      importOverridePackage('gym', obj);
      renderSettings();
      e.target.value = '';
    });
  }
  if (document.getElementById('btnRestoreGym')) {
    on('btnRestoreGym','click', async () => {
      await loadRemoteOverrides();
      clearLocalSnippetScope('gym');
      applySnippetOverrides();
      renderSettings();
      if (state.tab === 'edit') renderEdit();
    });
  }
}

if (document.getElementById('btnDownloadRoller')) {
  on('btnDownloadRoller','click', () => {
    const pkg = buildOverridePackage('roller');
    downloadJson('snippets_roller_override.json', pkg);
  });
  if (document.getElementById('btnImportRoller') && document.getElementById('fileImportRoller')) {
    on('btnImportRoller','click', () => $('fileImportRoller').click());
    on('fileImportRoller','change', async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const txt = await f.text();
      const obj = JSON.parse(txt);
      importOverridePackage('roller', obj);
      renderSettings();
      e.target.value = '';
    });
  }
  if (document.getElementById('btnRestoreRoller')) {
    on('btnRestoreRoller','click', async () => {
      await loadRemoteOverrides();
      clearLocalSnippetScope('roller');
      applySnippetOverrides();
      renderSettings();
      if (state.tab === 'edit') renderEdit();
    });
  }
}

if (document.getElementById('btnDownloadElevraad')) {
  on('btnDownloadElevraad','click', () => {
    const pkg = buildOverridePackage('elevraad');
    downloadJson('snippets_elevraad_override.json', pkg);
  });
  if (document.getElementById('btnImportElevraadSnippets') && document.getElementById('fileImportElevraadSnippets')) {
    on('btnImportElevraadSnippets','click', () => $('fileImportElevraadSnippets').click());
    on('fileImportElevraadSnippets','change', async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const txt = await f.text();
    const obj = JSON.parse(txt);
    importOverridePackage('elevraad', obj);
    renderSettings();
    e.target.value = '';
    });
  }
  on('btnRestoreElevraad','click', async () => {
    await loadRemoteOverrides();
    clearLocalSnippetScope('elevraad');
    applySnippetOverrides();
    renderSettings();
    if (state.tab === 'edit') renderEdit();
  });
}



    async function readStudentsFileAsParsed(file) {
      const name = (file && file.name ? file.name : '').toLowerCase();
      const isExcel = name.endsWith('.xlsx') || name.endsWith('.xls');
      if (!isExcel) {
        const text = await readFileText(file);
        return parseCsv(text);
      }
      if (typeof XLSX === 'undefined') {
        alert('Excel-import kræver SheetJS/XLSX. Åbn appen online, eller tjek internetforbindelsen, og prøv igen.');
        throw new Error('XLSX library not loaded');
      }
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const firstSheetName = workbook.SheetNames && workbook.SheetNames[0];
      if (!firstSheetName) throw new Error('Excel-filen indeholder ingen ark.');
      const sheet = workbook.Sheets[firstSheetName];
      const rows = XLSX.utils.sheet_to_json(sheet, { defval: '', raw: false });
      if (!rows || !rows.length) throw new Error('Excel-arket indeholder ingen rækker.');
      const headerSet = new Set();
      rows.forEach(r => Object.keys(r || {}).forEach(k => headerSet.add(k)));
      return { headers: Array.from(headerSet), rows };
    }

    on('studentsFile','change', async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      let parsed;
      try { parsed = await readStudentsFileAsParsed(f); }
      catch(err) { console.error(err); alert(err && err.message ? err.message : 'Kunne ikke læse elevlisten.'); return; }
      const map = mapStudentHeaders(parsed.headers);
      const required = ['fornavn','efternavn','klasse'];
      const ok = required.every(r => map[r]);
      if (!ok) { alert('Kunne ikke finde de nødvendige kolonner (fornavn, efternavn, klasse).'); return; }

      // IMPORTANT:
      // We must honor per-row explicit initials overrides from the CSV columns
      // "Initialer for k-lærer1" / "Initialer for k-lærer2".
      // These overrides are tied to the corresponding contact teacher column
      // (Kontaktlærer1/Kontaktlærer2) and should become the canonical initials
      // for that full name across the entire dataset.
      const teacherOverrides = buildTeacherOverrideMap(parsed.rows, map);

      // Skip completely empty rows (no student name). Count skipped for feedback.
      let skippedEmpty = 0;
      let missingTeachers = 0;
      const missingTeacherNames = [];
      const validRows = [];
      for (const r of parsed.rows) {
        const fn = (r[map.fornavn] ?? '').toString().trim();
        const en = (r[map.efternavn] ?? '').toString().trim();
        if (!fn && !en) { skippedEmpty++; continue; }

        const k1 = (map.kontaktlaerer1 ? (r[map.kontaktlaerer1] ?? '') : '').toString().trim();
        const k2 = (map.kontaktlaerer2 ? (r[map.kontaktlaerer2] ?? '') : '').toString().trim();
        if (!k1 && !k2) {
          missingTeachers++;
          const nm = `${fn} ${en}`.trim() || '(ukendt elev)';
          if (missingTeacherNames.length < 12) missingTeacherNames.push(nm);
        }
        validRows.push(r);
      }

      const studentsRaw = validRows.map(r => normalizeStudentRow(r, map, teacherOverrides));
      const students = canonicalizeTeacherInitials(studentsRaw);
      setStudents(students);
      // Feedback in Import tab
      const statusEl = $('importStatus');
      if (statusEl) {
        const parts = [];
        if (skippedEmpty) parts.push(`Sprunget over ${skippedEmpty} tomme rækker.`);
        if (missingTeachers) {
          const list = missingTeacherNames.length ? ` (fx: ${missingTeacherNames.join(', ')})` : '';
          parts.push(`⚠️ ${missingTeachers} elever mangler kontaktlærer${list}.`);
        }
        statusEl.textContent = parts.length ? `✅ Elevliste indlæst fra ${f.name || 'fil'}. ${parts.join(' ')}` : `✅ Elevliste indlæst fra ${f.name || 'fil'}.`;
      }


      renderSettings(); renderStatus();
      if (state.tab === 'k') renderKList();
      setTab('set');
    });

    on('marksType','change', () => renderMarksTable());
// Tabs (Sang/Gymnastik/Elevråd) should behave like changing the select.
    on('marksTypeTabs','click', (e) => {
      const btn = e.target && e.target.closest && e.target.closest('button[data-type]');
      if(!btn) return;
      const sel = $('marksType');
      if(!sel) return;
      const type = btn.getAttribute('data-type');
      if(!type) return;
      sel.value = type;
			  saveLS(KEYS.marksType, type);
      renderMarksTable();
    });

    on('btnExportMarks','click', () => {
      const type = $('marksType').value;
      const studs = getStudents();
    const isAll = state.viewMode === 'ALL';
    // Build k-grupper (teacher pairs) once; later UI uses this.
    const kGroups = buildKGroups(studs);
    state.__kGroups = kGroups;
    if (state.kGroupIndex < 0) state.kGroupIndex = 0;
    if (state.kGroupIndex > Math.max(0, kGroups.length-1)) state.kGroupIndex = Math.max(0, kGroups.length-1);

      if (!studs.length) return;
      const sorted = sortedStudents(studs);

      if (type === 'sang') {
        const marks = getMarks(KEYS.marksSang);
        const rows = sorted.map(st => {
          const full = `${st.fornavn} ${st.efternavn}`.trim();
          const m = marks[st.unilogin] || {};
          return { Unilogin: st.unilogin, Navn: full, Sang_variant: m.sang_variant || '' };
        });
        downloadText('sang_vurderinger.csv', toCsv(rows, ['Unilogin','Navn','Sang_variant']));
      }
      if (type === 'gym') {
        const marks = getMarks(KEYS.marksGym);
        const roleCodes = Object.keys(SNIPPETS.roller);
        const headers = ['Unilogin','Navn','Gym_variant', ...roleCodes];
        const rows = sorted.map(st => {
          const full = `${st.fornavn} ${st.efternavn}`.trim();
          const m = marks[st.unilogin] || {};
          const row = { Unilogin: st.unilogin, Navn: full, Gym_variant: m.gym_variant || '' };
          roleCodes.forEach(rc => row[rc] = m[rc] ? 1 : 0);
          return row;
        });
        downloadText('gym_rolle_vurderinger.csv', toCsv(rows, headers));
      }
      if (type === 'elevraad') {
        const marks = getMarks(KEYS.marksElev);
        const rows = sorted.map(st => {
          const full = `${st.fornavn} ${st.efternavn}`.trim();
          const m = marks[st.unilogin] || {};
          return { Unilogin: st.unilogin, Navn: full, Elevraad: m.elevraad ? 1 : 0 };
        });
        downloadText('elevraad_vurderinger.csv', toCsv(rows, ['Unilogin','Navn','Elevraad']));
      }
    });

    on('importSang','change', (e) => importMarksFile(e, 'sang'));
    on('importGym','change', (e) => importMarksFile(e, 'gym'));
    on('importElevraad','change', (e) => importMarksFile(e, 'elevraad'));

    ['txtElevudv','txtPraktisk','txtKgruppe'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', () => {
        if (!state.selectedUnilogin) return;
        const obj = getTextFor(state.selectedUnilogin);
        obj.elevudvikling = $('txtElevudv').value;
        obj.praktisk = $('txtPraktisk').value;
        obj.kgruppe = $('txtKgruppe').value;
        obj.lastSavedTs = Date.now();
        // Track last editor (initials) for ALL-mode status badges.
        // We store a single "lastEditedBy" for the whole student card (simple + robust).
        try {
          const sNow = getSettings();
          const rawMe = ((sNow.me || sNow.meResolved || '') + '').trim();
          const ini = toInitials(rawMe || (sNow.meResolved || ''));
          if (ini) obj.lastEditedBy = ini;
        } catch(_) {}
        setTextFor(state.selectedUnilogin, obj);

        const as = $('autosavePill');
        if (as) {
          as.textContent = `Sidst gemt: ${formatTime(obj.lastSavedTs)}`;
          as.style.visibility = 'visible';
        }
        const st = getStudents().find(x => x.unilogin === state.selectedUnilogin);
        if (st) $('preview').textContent = buildStatement(st, getSettings());
        updateEditRatios();
      });
    });

    on('btnPickStudentPdf','click', () => {
      if (!state.selectedUnilogin) return;
      $('fileStudentInput').click();
    });

    on('btnOpenStudentInput','click', () => {
      const url = state.selectedUnilogin ? state.studentInputUrls[state.selectedUnilogin] : null;
      if (!url) return;
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win) alert('Popup blev blokeret af browseren. Tillad popups for siden og prøv igen.');
    });

    on('fileStudentInput','change', (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f || !state.selectedUnilogin) return;

      const isPdf = (f.type === 'application/pdf') || (f.name && f.name.toLowerCase().endsWith('.pdf'));
      if (!isPdf) {
        alert('Vælg venligst en PDF-fil.');
        $('fileStudentInput').value = '';
        return;
      }


      // Revoke previous object URL for this student (session only)
      const prevUrl = state.studentInputUrls[state.selectedUnilogin];
      if (prevUrl) { try { URL.revokeObjectURL(prevUrl); } catch(_) {} }

      const url = URL.createObjectURL(f);
      state.studentInputUrls[state.selectedUnilogin] = url;

      const obj = getTextFor(state.selectedUnilogin);
      obj.studentInputMeta = { filename: f.name, ts: Date.now(), mime: f.type || '' };
      setTextFor(state.selectedUnilogin, obj);

      renderEdit();
    });
    on('btnClearStudentInput','click', () => {
      if (!state.selectedUnilogin) return;
      const obj = getTextFor(state.selectedUnilogin);
      obj.studentInputMeta = null;
      setTextFor(state.selectedUnilogin, obj);

      const prevUrl = state.studentInputUrls[state.selectedUnilogin];
      if (prevUrl) { try { URL.revokeObjectURL(prevUrl); } catch(_) {} }
      delete state.studentInputUrls[state.selectedUnilogin];

      const pWrap = $('studentInputPreviewWrap');
      const pFrame = $('studentInputPreview');
      if (pWrap && pFrame) {
        pWrap.style.display = 'none';
        pFrame.removeAttribute('src');
      }

      $('fileStudentInput').value = '';
      renderEdit();
    });

    on('btnPrint','click', async () => {
      // Keep overrides fresh for printing unless the user is actively editing templates.
      try {
        await loadRemoteOverrides();
        applyTemplatesFromOverridesToLocal({ preserveLocks: true });
      } catch(_) {}

      const st = getSelectedStudent();
      if (!st) return;

      const settings = getSettings();
      const title = (`Udtalelse - ${(st.fornavn || '').trim()} ${(st.efternavn || '').trim()}`).trim() || 'Udtalelse';
      await openPrintWindowForStudents([st], settings, title);
    });
  
    // --- Faglærer-markeringer (Eksport) ---
    // Tabs (Sang/Gymnastik/Elevråd)
    const marksTabs = document.getElementById('marksTypeTabs');
    if (marksTabs && !marksTabs.__wired) {
      marksTabs.__wired = true;
      marksTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-type]');
        if (!btn) return;
        state.marksType = btn.dataset.type || 'sang';
        saveLS(KEYS.marksType, state.marksType);
        syncMarksTypeTabs();
        renderMarksTable();
      });
    }

    // Søg elev i marks-tabellen
    const marksFind = document.getElementById('marksFind');
    if (marksFind && !marksFind.__wired) {
      marksFind.__wired = true;
      marksFind.addEventListener('input', () => {
        state.marksQuery = (marksFind.value || '').trim();
        saveLS(KEYS.marksQuery, state.marksQuery);
        renderMarksTable();
      });
    }

        // Eksportér CSV
    const btnExport = document.getElementById('btnExportMarksCSV');
  // Update button text/tooltip every render
  if (btnExport) {
    const t = (state.marksType || 'sang');
    btnExport.textContent = `Eksportér ${marksExportLabel(t)}`;
    btnExport.title = `Downloader: ${marksExportFilename(t)}`;
  }

  if (btnExport && !btnExport.__wired) {
      btnExport.__wired = true;
      btnExport.addEventListener('click', () => {
        const type = (state.marksType || 'sang');
        const storageKey = (type === 'gym' || type === 'roller') ? KEYS.marksGym : (type === 'elevraad' ? KEYS.marksElev : KEYS.marksSang);
        const studs = getStudents() || [];
        if (!studs.length) { alert('Upload elevliste først.'); return; }
        const marks = getMarks(storageKey) || {};

        const baseCols = ['UniLogin','Navn','Klasse'];
        let extraCols = [];
        if (type === 'sang') extraCols = Object.keys(SNIPPETS.sang || {});
        else if (type === 'elevraad') extraCols = Object.keys(SNIPPETS.elevraad || {});
        else if (type === 'gym') extraCols = [...Object.keys(SNIPPETS.gym || {}), ...Object.keys(SNIPPETS.roller || {}).map(r => `role:${r}`)];

        const header = [...baseCols, ...extraCols];

        const rows = studs.map(s => {
          const u = s.unilogin || '';
          const m = marks[u] || {};
          const out = {};
          out['UniLogin'] = u;
          out['Navn'] = s.navn || s.fulde_navn || '';
          out['Klasse'] = s.klasse || '';

          if (type === 'sang') {
            const v = m.sang_variant || '';
            for (const c of Object.keys(SNIPPETS.sang || {})) out[c] = (v === c) ? '1' : '';
          } else if (type === 'elevraad') {
            const v = m.elevraad_variant || '';
            for (const c of Object.keys(SNIPPETS.elevraad || {})) out[c] = (v === c) ? '1' : '';
          } else if (type === 'gym') {
            const v = m.gym_variant || '';
            for (const c of Object.keys(SNIPPETS.gym || {})) out[c] = (v === c) ? '1' : '';
            const roles = Array.isArray(m.gym_roles) ? m.gym_roles : [];
            for (const r of Object.keys(SNIPPETS.roller || {})) out[`role:${r}`] = roles.includes(r) ? '1' : '';
          }

          return header.map(h => out[h] ?? '');
        });

        const esc = (x) => {
          const s = String(x ?? '');
          return /[",\n;]/.test(s) ? `"${s.replace(/"/g,'""')}"` : s;
        };
        const csv = [header.join(';'), ...rows.map(r => r.map(esc).join(';'))].join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
        const a = document.createElement('a');
        const date = new Date();
        const stamp = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
        a.download = `${type}_marks_${stamp}.csv`;
        a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
      });
    }

}

  async function init() {

// Demo: load demo_students.csv if requested (after wipe)
try {
} catch (e) {
  console.error(e);
  alert('Kunne ikke indlæse demo_students.csv. Se console for detaljer.');
}

    wireEvents();

    // Globale genvejstaster (baseline): Ctrl+Alt + bogstav
    // Vi klikker på eksisterende UI-knapper (id'er), så navigationen følger appens normale flow.
    if (!window.__huShortcutsWired) {
      window.__huShortcutsWired = true;

      const isTypingTarget = (el) => {
        if (!el) return false;
        const tag = (el.tagName || '').toUpperCase();
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
        if (el.isContentEditable) return true;
        return false;
      };

  // TRIN 2: Tastatur-aktivt elevkort (state-baseret markør, ikke DOM-fokus)
  function updateKActiveCardUI() {
    try {
      const kList = $("kList");
      if (!kList) return;
      const cards = Array.from(kList.querySelectorAll('[data-unilogin]'));
      if (!cards.length) return;

      let idx = Number.isFinite(state.kActiveIndex) ? state.kActiveIndex : 0;
      idx = Math.max(0, Math.min(idx, cards.length - 1));
      state.kActiveIndex = idx;

      cards.forEach((el, i) => {
        if (i === idx) el.classList.add("kbActive");
        else el.classList.remove("kbActive");
      });

      try { cards[idx].scrollIntoView({ block: "nearest" }); } catch(_) {}
    } catch(_) {}
  }


      const clickById = (id) => {
        try {
          const el = document.getElementById(id);
          if (el && !el.disabled) el.click();
        } catch (_) {}
      };

      const goSettingsSubtab = (subtabId) => {
        clickById('tab-set');
        clickById(subtabId);
      };

      document.addEventListener('keydown', (e) => {
        // ESC: slip fokus fra tekstfelter, så genveje virker igen
        if (e.key === 'Escape') {
          const ae = document.activeElement;
          if (isTypingTarget(ae)) {
            try { ae.blur(); } catch(_) {}
            return;
          }
        }

        // Ctrl+P / Cmd+P: print det samme som den primære print-knap i den aktuelle fane.
        // - K-elever / Alle K-grupper: print aktiv K-gruppe (matcher knappen i view'et)
        // - Redigér: print elev (PDF med logo)
        // - Indstillinger/Hjælp: lad browserens standard print ske
        const isCtrlOrCmd = !!(e.ctrlKey || e.metaKey);
        const keyLower = ((e.key || '') + '').toLowerCase();
        if (isCtrlOrCmd && !e.altKey && keyLower === 'p') {
          if (state && state.tab === 'k') {
            e.preventDefault();
            // Bruger samme printmotor som knappen på K-elever-siden.
            // NB: I viewMode=ALL printer den stadig kun den aktive K-gruppe.
            printAllKStudents();
            return;
          }
          if (state && state.tab === 'edit') {
            e.preventDefault();
            // Genbrug samme handler som "🖨️ Print <elev>"-knappen.
            clickById('btnPrint');
            return;
          }
          // I andre visninger: lad browserens standard print ske.
        }


        // A+B (Redigér):
        // A: Hvis Redigér åbnes via tastatur (Enter fra K-elever), fokuseres Udvikling-feltet (done i renderEdit).
        // B: Tab / Shift+Tab cykler mellem de tre tekstfelter i Redigér (kun når fokus allerede er i et af felterne).
        if (!e.ctrlKey && !e.altKey && !e.metaKey && state && state.tab === 'edit') {
          const k = e.key;
          if (k === 'Tab') {
            const ae = document.activeElement;
            const id = ae && ae.id;
            const order = ['txtElevudv','txtPraktisk','txtKgruppe'];
            const pos = order.indexOf(id);
            if (pos !== -1) {
              e.preventDefault();
              const nextPos = e.shiftKey ? (pos + order.length - 1) % order.length : (pos + 1) % order.length;
              const nextId = order[nextPos];
              // Fold ud hvis sektionen er lukket, men fold ikke andre sammen (Model 1).
              if (nextId === 'txtElevudv') { const d = $('secElevudv'); if (d) d.open = true; }
              if (nextId === 'txtPraktisk') { const d = $('secPraktisk'); if (d) d.open = true; }
              if (nextId === 'txtKgruppe') { const d = $('secKgruppe'); if (d) d.open = true; }
              // Fokusér (læg cursor sidst) efter eventuel fold-ud.
              setTimeout(() => {
                const el = $(nextId);
                if (el) {
                  try { el.focus(); } catch(_) {}
                  try { const v = el.value || ''; el.setSelectionRange(v.length, v.length); } catch(_) {}
                }
              }, 0);
              return;
            }
          }
        }

        // TRIN 1: ← / → til K-grupper (kun i "Alle K-grupper"-tilstand)
        // - Kun aktiv når fokus ikke er i input/textarea/contenteditable
        // - Kun i K-fanen og kun når viewMode === 'ALL'
        // - preventDefault() for at undgå browser-scroll/hop
        // - Ingen øvrige taster (Op/Ned/Enter) håndteres her endnu
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          const k = e.key;
          if (k === 'ArrowLeft' || k === 'ArrowRight') {
            const typing = isTypingTarget(e.target);
            if (!typing && state && state.tab === 'k' && state.viewMode === 'ALL') {
              const studsNow = getStudents();
              const groups = (state.__kGroups && Array.isArray(state.__kGroups)) ? state.__kGroups : buildKGroups(studsNow);
              const n = (groups && groups.length) ? groups.length : 0;
              if (n > 0) {
                e.preventDefault();
                const gi = Math.max(0, Math.min(state.kGroupIndex || 0, n - 1));
                if (k === 'ArrowLeft' && gi > 0) state.kGroupIndex = gi - 1;
                if (k === 'ArrowRight' && gi < n - 1) state.kGroupIndex = gi + 1;
                renderKList();
                return;
              }
            }
          }
        }

        

// TRIN 1B: ← / → i Redigér (forrige/næste elev)
// - Kun når fokus ikke er i input/textarea/contenteditable
// - Matcher navigationstankegangen fra "Alle K-grupper"
if (!e.ctrlKey && !e.altKey && !e.metaKey) {
  const k = e.key;
  if (k === 'ArrowLeft' || k === 'ArrowRight') {
    const typing = isTypingTarget(e.target);
    if (!typing && state && state.tab === 'edit') {
      e.preventDefault();
      gotoAdjacentStudent(k === 'ArrowRight' ? 'next' : 'prev');
      return;
    }
  }
}

        // TRIN 2: ↑ / ↓ over elevkort (state-indeks, ikke DOM-fokus)
        // - Kun når fokus ikke er i input/textarea/contenteditable
        // - Kun i K-fanen
        // - Ingen Enter her
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          const k = e.key;
          const code = e.code;
          if (k === 'ArrowUp' || k === 'ArrowDown' || code === 'ArrowUp' || code === 'ArrowDown') {
            const typing = isTypingTarget(e.target);
            if (!typing && state && state.tab === 'k') {
              e.preventDefault();
              const kList = $("kList");
              const n = kList ? kList.querySelectorAll('[data-unilogin]').length : 0;
              if (n > 0) {
                let idx = Number.isFinite(state.kActiveIndex) ? state.kActiveIndex : 0;
                idx = Math.max(0, Math.min(idx, n - 1));
                if (k === 'ArrowUp' || code === 'ArrowUp') idx = Math.max(0, idx - 1);
                if (k === 'ArrowDown' || code === 'ArrowDown') idx = Math.min(n - 1, idx + 1);
                state.kActiveIndex = idx;
                updateKActiveCardUI();
                return;
              }
            }
          }
        }

        // TRIN 3: Enter = åbn aktiv elev (samme handling som klik på elevkort)
        // - Kun når fokus ikke er i input/textarea/contenteditable
        // - Kun i K-fanen
        if (!e.ctrlKey && !e.altKey && !e.metaKey) {
          const k = e.key;
          const code = e.code;
          if (k === 'Enter' || code === 'Enter' || code === 'NumpadEnter') {
            const typing = isTypingTarget(e.target);
            if (!typing && state && state.tab === 'k') {
              const kList = $("kList");
              const cards = kList ? Array.from(kList.querySelectorAll('[data-unilogin]')) : [];
              const n = cards.length;
              if (n > 0) {
                e.preventDefault();
                let idx = Number.isFinite(state.kActiveIndex) ? state.kActiveIndex : 0;
                idx = Math.max(0, Math.min(idx, n - 1));
                state.kActiveIndex = idx;
                const u = (cards[idx] && cards[idx].getAttribute('data-unilogin')) || '';
                if (u) {
                  state.selectedUnilogin = u;
                  state.__editOpenedByKeyboard = true;
                  setTab('edit');
                  renderAll();
                  return;
                }
              }
            }
          }
        }

const modOk = (e.ctrlKey && e.altKey);
        if (!modOk) return;

        const keyRaw = (e.key || '');
        const key0 = (keyRaw + '').toLowerCase();
        // På dansk tastatur kan Ctrl+Alt+E være AltGr+E (= '€')
        const key = (key0 === '€') ? 'e' : key0;
        const typing = isTypingTarget(e.target);
        // Kapr ikke genveje mens man skriver – undtagelse: Backup må gerne være global.
        if (typing && key !== 'b') return;

        if (key === 'k') { e.preventDefault(); clickById('tab-k'); return; }
        if (key === 'r') { e.preventDefault(); clickById('tab-edit'); return; }
        if (key === 's') { e.preventDefault(); clickById('tab-set'); return; }
        if (key === 'z') { e.preventDefault(); clickById('tab-set'); return; }
        if (key === 'x') { e.preventDefault(); clickById('tab-set'); requestAnimationFrame(() => { clickById('settingsTab-general'); requestAnimationFrame(() => { try { const inp = document.getElementById('meInput'); if (inp) { inp.focus(); try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch(_) {} } } catch(_) {} }); }); return; }


        if (key === 'i') { e.preventDefault(); goSettingsSubtab('settingsTab-data'); return; }
        if (key === 'e') { e.preventDefault(); goSettingsSubtab('settingsTab-export'); return; }
        if (key === 't') { e.preventDefault(); goSettingsSubtab('settingsTab-texts'); return; }
        if (key === 'h') { e.preventDefault(); goSettingsSubtab('settingsTab-help'); return; }

        if (key === 'b') { e.preventDefault(); clickById('btnBackupDownload'); return; }
      }, true);
    }

    // Print scaling (single-student print)
    if (!window.__printScaleWired) {
      window.__printScaleWired = true;
      window.addEventListener('beforeprint', () => { try { applyOnePagePrintScale(); } catch(_) {} });
      window.addEventListener('afterprint', () => {
        try { document.documentElement.style.setProperty('--printScale', '1'); } catch(_) {}
      });
    }

    // Meta-safety: older versions could have templates stored in localStorage
    // without tracking whether the user edited them. If that's the case, we
    // assume "edited" to avoid auto-overwriting.
    const hadTemplatesBefore = localStorage.getItem(KEYS.templates) !== null;
    const hadTemplatesDirtyMeta = hasTemplatesDirtyMeta();

    await loadRemoteOverrides();
    if (!localStorage.getItem(KEYS.settings)) setSettings(defaultSettings());
    if (!localStorage.getItem(KEYS.templates)) setTemplates(defaultTemplates());
    if (!hadTemplatesDirtyMeta) setTemplatesDirty(hadTemplatesBefore);
    // Keep overrides authoritative unless the user has explicitly edited templates locally.
    applyTemplatesFromOverridesToLocal({ preserveLocks: true, force: false });
    applySnippetOverrides();

    const s = getSettings();
    if (s.me && !s.meResolved) {
      s.meResolved = toInitials(s.me);
      setSettings(s);
    }
    // Top: Hjælp-knap
    const topHelpBtn = $("tab-help-top");
    if (topHelpBtn) topHelpBtn.addEventListener("click", () => {
      setTab("set");
      setSettingsSubtab("help");
      renderAll();
    });

    // Logo/brand: hvis setup ikke er gjort endnu, hop til Import
    const brandHome = $("brandHome");
    if (brandHome) brandHome.addEventListener("click", () => {
      // Always go to Import (tooltip must match behavior)
      setTab("set");
      setSettingsSubtab("data");
      renderAll();
    });

    // K-elever: Print alle
    const btnPrintAllK = $("btnPrintAllK");
    if (btnPrintAllK) btnPrintAllK.addEventListener("click", printAllKStudents);

        // Indstillinger → Eksport: Print alle elever (alfabetisk efter fornavn)
    const btnPrintAllStudents = $("btnPrintAllStudents");
    if (btnPrintAllStudents) btnPrintAllStudents.addEventListener("click", printAllStudents);

// Indstillinger → Eksport: Print alle K-grupper (alle elever)
    const btnPrintAllGroups = $("btnPrintAllGroups");
    if (btnPrintAllGroups) btnPrintAllGroups.addEventListener("click", printAllKGroups);

    // Hjælp-links (hop til relevante faner)
    document.body.addEventListener("click", (ev) => {
      const a = ev.target.closest && ev.target.closest(".helpLink");
      if (!a) return;
      ev.preventDefault();
      const goto = String(a.getAttribute("data-goto") || "");
      if (!goto) return;
      if (goto === "k") { setTab("k"); renderAll(); return; }
      if (goto === "edit") { setTab("edit"); renderAll(); return; }
      if (goto.startsWith("set:")) {
        const sub = goto.split(":")[1] || "general";
        setTab("set");
        setSettingsSubtab(sub);
        renderAll();
        return;
      }
    });

    // Backup
    const btnBackupDownload = $("btnBackupDownload");
    if (btnBackupDownload) btnBackupDownload.addEventListener("click", exportLocalBackup);
    const backupFileInput = $("backupFileInput");
    if (backupFileInput) backupFileInput.addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      importLocalBackup(f);
      e.target.value = "";
    });

    // Start-fane-logik:
    // - Ingen elevliste → Indstillinger → Hjælp
    // - Elevliste + valgt K-lærer → K-elever
    // - Elevliste + ingen K-lærer → Indstillinger → Generelt (ingen tom K-elever-visning)
    const hasStudents = getStudents().length > 0;
    const meNow = ((getSettings().me || '') + '').trim();
    let postImportHint = null;
    try { postImportHint = JSON.parse(localStorage.getItem(KEY_POST_IMPORT_TEACHER_HINT) || 'null'); } catch (_) { postImportHint = null; }

    if (!hasStudents) {
      setTab('set');
      setSettingsSubtab('help');
    } else if (meNow) {
      setTab('k');
    } else {
      setTab('set');
      setSettingsSubtab('general');
    }

    renderAll();

    // After render: if a backup import requested a teacher selection, show a discreet hint,
    // optionally prefill initials from filename, and open the dropdown.
    if (hasStudents && !meNow) {
      try {
        const infoEl = document.getElementById('teacherInfoAfterImport');
        if (infoEl) infoEl.style.display = 'block';
      } catch (_) {}

      if (postImportHint && postImportHint.suggestedIni) {
        const ini = String(postImportHint.suggestedIni || '').trim().toUpperCase();
        if (ini) {
          const meInput = document.getElementById('meInput');
          if (meInput) {
            meInput.value = ini;
            // Trigger filtering without committing (commit happens on click/ENTER)
            try { meInput.dispatchEvent(new Event('input', { bubbles: true })); } catch (_) {}
          }
        }
      }

      // Focus will open the picker (input.onfocus opens the menu)
      try {
        const meInput = document.getElementById('meInput');
        if (meInput) meInput.focus();
      } catch (_) {}
    }
}
  init().catch(console.error);
})();
function updateCsvButton(count) {
  const btn = document.getElementById('btnImportStudents');
  if (!btn) return;
  btn.classList.add('success');
  btn.textContent = `Elevliste indlæst: ${count} elever`;
  btn.title = 'Klik for at indlæse en ny CSV og overskrive den nuværende elevliste';
}


/* === EXPORT / IMPORT SKABELONER === */
function exportTemplates() {
  const data = {
    forstanderNavn,
    standardTekst,
    udtalelsesSkabelon
  };

  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "udtalelses-skabeloner.json";
  a.click();
}

function handleImportTemplates(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      forstanderNavn = data.forstanderNavn ?? "";
      standardTekst = data.standardTekst ?? "";
      udtalelsesSkabelon = data.udtalelsesSkabelon ?? "";
      saveToLocalStorage();
      renderAll();
      setTemplatesImportedState();
    } catch (e) {
      alert("Ugyldig skabelon-fil");
    }
  };
  reader.readAsText(file);
}


document.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("exportTemplatesBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportTemplates);

  const importBtn = document.getElementById("importTemplatesBtn");
  const importInput = document.getElementById("importTemplatesInput");

  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", e => {
      if (e.target.files[0]) handleImportTemplates(e.target.files[0]);
    });
  }
});


function setTemplatesImportedState() {
  const btn = document.getElementById("importTemplatesBtn");
  if (!btn) return;
  btn.classList.add("btn-imported");
  btn.textContent = "Skabeloner importeret";
  btn.title = "Klik for at overskrive skabeloner ved ny import";
}



document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t || !t.textContent) return;

  const label = t.textContent.trim();

  if (label === "Download skabeloner") {
    exportTemplates();
  }

  if (label === "Importér skabeloner") {
    let input = document.getElementById("importTemplatesInput");
    if (!input) {
      input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.id = "importTemplatesInput";
      input.style.display = "none";
      document.body.appendChild(input);
      input.addEventListener("change", ev => {
        if (ev.target.files[0]) handleImportTemplates(ev.target.files[0]);
      });
    }
    input.click();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const exportBtn = document.getElementById("btnExportTemplates");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportTemplates);
  }

  let importBtn = document.getElementById("btnImportTemplates");
  let importInput = document.getElementById("importTemplatesInput");

  if (!importInput) {
    importInput = document.createElement("input");
    importInput.type = "file";
    importInput.accept = ".json";
    importInput.id = "importTemplatesInput";
    importInput.hidden = true;
    document.body.appendChild(importInput);
  }

  if (importBtn) {
    importBtn.addEventListener("click", () => importInput.click());
  }

  importInput.addEventListener("change", e => {
    if (e.target.files[0]) {
      handleImportTemplates(e.target.files[0]);
      importBtn?.classList.add("btn-imported");
      importBtn.textContent = "Skabeloner importeret";
      importBtn.title = "Klik for at overskrive skabeloner ved ny import";
    }
  });
});

/* === v1.0.2: K-lærer dropdown uses SAME logic as Find-elev ===
   This does NOT modify the Find-elev implementation.
   It simply reuses the initializer with a different data source.
*/
document.addEventListener("DOMContentLoaded", () => {
  if (typeof initFindElevDropdown !== "function") return;

  const kInput = document.getElementById("kLaererInitialerInput");
  const kList  = document.getElementById("kLaererDropdown");

  if (!kInput || !kList) return;

  // Data adapter: reuse same dropdown logic
  initFindElevDropdown({
    input: kInput,
    list: kList,
    getItems: () => window.kLaerereInitialer || [],
    onSelect: (item) => {
      if (typeof setAktivKontaktlaerer === "function") {
        setAktivKontaktlaerer(item);
      }
    }
  });
});