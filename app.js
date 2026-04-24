function resolveFullName(row) {
  const full = row.fullName || row.fuldtNavn || row.navn || row.kontaktlaerer || row.kontaktlaererNavn;
  if (full && String(full).trim()) return String(full).trim();
  const fn = row.fornavn || row.firstName || "";
  const en = row.efternavn || row.lastName || "";
  return `${fn} ${en}`.trim();
}

/* Udtalelser v2.0 – statisk GitHub Pages app (ingen libs)
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


  const PRINT_HEADER_LOGO_DATAURL = 'data:image/png;base64,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';
// Used for cache-busting verification in the UI.
  // If a browser still shows an older build id, it's caching an old app.js.
  const BUILD_ID = 'v3.0-2026-04-24-print-overlay';

  const LS_PREFIX = 'udt_';

  // ---------- Print logo override ----------
  // Priority:
  // 1) Local *test* logo (stored in localStorage) for quick preview before committing to repo
  // 2) Repo override file (/overrides/print_logo.png or .svg)
  // 3) Hardcoded fallback (PRINT_HEADER_LOGO_DATAURL)
  const PRINT_LOGO_LOCAL_KEY = LS_PREFIX + 'print_logo_local_v1';
  const PRINT_LOGO_REMOTE_CANDIDATES = [
    './overrides/print_logo.png',
    './overrides/print_logo.jpeg',
    './overrides/print_logo.jpg',
    './overrides/print_logo.svg',
    '/overrides/print_logo.png',
    '/overrides/print_logo.jpeg',
    '/overrides/print_logo.jpg',
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




// v3.0: Print-preview i samme app i stedet for ny fane/vindue.
// Det løser især desktop/PWA-problemet, hvor man ellers ikke kan komme tilbage til appen.
function openPrintPreviewOverlay(printHtml, title) {
  const overlay = document.getElementById('printOverlay');
  const frame = document.getElementById('printFrame');
  const closeBtn = document.getElementById('btnClosePrintOverlay');
  const printAgainBtn = document.getElementById('btnPrintOverlayAgain');
  const titleEl = document.getElementById('printOverlayTitle');

  // Fallback til ny fane hvis overlay ikke findes (fx gammel index.html i cache).
  if (!overlay || !frame) {
    const win = window.open('', '_blank');
    if (!win) {
      alert('Kunne ikke åbne print-preview. Prøv at genindlæse siden.');
      return;
    }
    win.document.open();
    win.document.write(printHtml);
    win.document.close();
    return;
  }

  if (titleEl) titleEl.textContent = title || 'Print-preview';
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('printOverlayOpen');

  const closeOverlay = () => {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('printOverlayOpen');
    try { frame.removeAttribute('srcdoc'); } catch(_) {}
  };

  const printFrame = () => {
    try {
      const w = frame.contentWindow;
      if (!w) return;
      w.focus();
      w.print();
    } catch(e) {
      alert('Kunne ikke starte print fra previewet. Prøv “Print igen” eller genindlæs siden.');
    }
  };

  if (closeBtn && !closeBtn.__wiredPrintOverlay) {
    closeBtn.__wiredPrintOverlay = true;
    closeBtn.addEventListener('click', closeOverlay);
  }
  if (printAgainBtn && !printAgainBtn.__wiredPrintOverlay) {
    printAgainBtn.__wiredPrintOverlay = true;
    printAgainBtn.addEventListener('click', printFrame);
  }

  // Escape lukker også overlayet.
  if (!overlay.__wiredEsc) {
    overlay.__wiredEsc = true;
    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && !overlay.hidden) closeOverlay();
    });
  }

  // srcdoc fungerer stabilt i moderne Safari/Chrome/Edge og holder alt i samme app.
  frame.onload = () => {
    setTimeout(printFrame, 900);
  };
  frame.srcdoc = printHtml;
}

async function openPrintWindowForStudents(students, settings, title) {
  // v3.0: iPad-stabil printmotor.
  // I stedet for at bede Safari printe HTML-tekst, tegnes hver udtalelse som et A4-billede.
  // Det fjerner de blanke sider og sikrer, at logoet kommer med i PDF'en.
  const escapeHtml = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  const opts = arguments.length > 3 ? (arguments[3] || {}) : {};
  const list = opts.preserveOrder ? (Array.isArray(students) ? students : []) : sortedStudents(Array.isArray(students) ? students : []);

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

  const loadImg = (src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

  const logoImg = await loadImg(PRINT_HEADER_LOGO_DATAURL);

  function splitStatementForPrint(st) {
    const txt = buildStatement(st, settings);
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

    // Fjern gammel rå signatur fra template-output. Vi tegner signaturen selv.
    try {
      const lines = String(bodyText || '').split('\n');
      const reOldNameLine = /(kontaktlærer|kontaktlaerer|kontaktgruppelærer|kontaktgruppelaerer|forstander|\{\{FORSTANDER_NAVN\}\})/i;
      let cutStart = -1;
      for (let i = Math.max(0, lines.length - 8); i < lines.length; i++) {
        const ln = String(lines[i] || '').trim();
        if (reOldNameLine.test(ln)) { cutStart = i; break; }
      }
      if (cutStart >= 0) {
        while (cutStart > 0 && !String(lines[cutStart - 1] || '').trim()) cutStart--;
        const kept = lines.slice(0, cutStart);
        while (kept.length && !String(kept[kept.length - 1] || '').trim()) kept.pop();
        bodyText = kept.join('\n');
      }
    } catch(e) {}
    return { titleLine, bodyText };
  }

  function wrapLine(ctx, text, maxWidth) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    if (!words.length) return [''];
    const lines = [];
    let line = '';
    for (const word of words) {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width <= maxWidth || !line) {
        line = test;
      } else {
        lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function wrapParagraphs(ctx, text, maxWidth) {
    const paragraphs = String(text || '').replaceAll('\r','').split('\n');
    const out = [];
    for (const p of paragraphs) {
      if (!p.trim()) {
        out.push({ text: '', blank: true });
      } else {
        for (const line of wrapLine(ctx, p, maxWidth)) out.push({ text: line, blank: false });
      }
    }
    return out;
  }

  function drawCenteredText(ctx, text, x, y, maxWidth, lineHeight) {
    const lines = wrapLine(ctx, text, maxWidth);
    for (const line of lines) {
      ctx.fillText(line, x, y);
      y += lineHeight;
    }
    return y;
  }

  function renderStudentPageToDataUrl(st) {
    // A4 ratio. Høj opløsning, men ikke så høj at iPad'en kvæles ved K-gruppe-print.
    const W = 1240;
    const H = 1754;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';

    const marginX = 92;
    const topY = 55;
    const maxWidth = W - marginX * 2;

    // Dato
    ctx.font = '28px Georgia, Times New Roman, serif';
    ctx.textAlign = 'right';
    ctx.fillText(headerDateText, W - 70, 50);

    // Logo
    if (logoImg) {
      const size = 130;
      ctx.drawImage(logoImg, (W - size) / 2, 140, size, size);
    } else {
      ctx.font = 'bold 24px Arial, Helvetica, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Himmerlands Efterskole', W / 2, 185);
    }

    const parts = splitStatementForPrint(st);

    // Titel
    ctx.font = 'bold 30px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    let y = 330;
    y = drawCenteredText(ctx, parts.titleLine, W / 2, y, maxWidth, 38);
    y += 32;

    // Body – autonedskalering, så siden ikke bliver blank/overløber.
    let fontSize = 24;
    let lineHeight = 34;
    let wrapped = [];
    const sigHeight = 115;
    const bottomLimit = H - 170 - sigHeight;
    for (; fontSize >= 18; fontSize -= 1) {
      lineHeight = Math.round(fontSize * 1.42);
      ctx.font = `${fontSize}px Arial, Helvetica, sans-serif`;
      wrapped = wrapParagraphs(ctx, parts.bodyText, maxWidth);
      let testY = y;
      for (const item of wrapped) testY += item.blank ? Math.round(lineHeight * 0.75) : lineHeight;
      if (testY <= bottomLimit) break;
    }

    ctx.font = `${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#000';
    for (const item of wrapped) {
      if (item.blank) {
        y += Math.round(lineHeight * 0.75);
      } else {
        ctx.fillText(item.text, marginX, y);
        y += lineHeight;
      }
    }

    y += 28;

    const kontaktNavn = [st.kontaktlaerer1, st.kontaktlaerer2]
      .filter(x => (x || '').toString().trim())
      .map(x => (x || '').toString().trim())
      .join(' & ');
    const forstanderNavn = ((settings && (settings.forstanderName || settings.forstanderNavn)) || 'Stinne Krogh Poulsen').toString().trim() || 'Stinne Krogh Poulsen';

    // Signaturer
    ctx.font = `${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.textAlign = 'center';
    const leftX = W * 0.33;
    const rightX = W * 0.79;
    const sigY = Math.min(y, H - 250);
    ctx.fillText(kontaktNavn, leftX, sigY);
    ctx.fillText(forstanderNavn, rightX, sigY);
    ctx.fillText('Kontaktlærere', leftX, sigY + lineHeight);
    ctx.fillText('Forstander', rightX, sigY + lineHeight);

    return canvas.toDataURL('image/jpeg', 0.92);
  }

  const pageImages = list.map(renderStudentPageToDataUrl);
  const pagesHtml = pageImages.map((src, idx) => `
    <section class="imagePage">
      <img src="${src}" alt="Udtalelse side ${idx + 1}">
    </section>`).join('');

  const docTitle = escapeHtml(title || 'Print');
  const html = `<!doctype html>
<html lang="da">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${docTitle}</title>
<style>
  @page { size: A4 portrait; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #fff; }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .imagePage {
    width: 210mm;
    height: 296.5mm;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    page-break-after: always;
    break-after: page;
    background: #fff;
  }
  .imagePage:last-child { page-break-after: auto; break-after: auto; }
  .imagePage img {
    display: block;
    width: 210mm;
    height: 296.5mm;
    object-fit: contain;
    margin: 0;
    padding: 0;
    border: 0;
  }
  @media screen {
    body { background: #ddd; padding: 18px 0; }
    .imagePage { box-shadow: 0 0 0 1px #ccc, 0 8px 28px rgba(0,0,0,.20); margin-bottom: 18px; }
  }
  @media print {
    html, body { width: 210mm; height: auto; overflow: visible; }
    body { padding: 0 !important; background: #fff !important; }
    .imagePage { margin: 0 !important; box-shadow: none !important; }
  }
</style>
</head>
<body>
${pagesHtml}
</body>
</html>`;

  openPrintPreviewOverlay(html, title || 'Print-preview');
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

  const title = isAll ? 'Udtalelser v3.0 – print K-gruppe' : 'Udtalelser v3.0 – print K-elever';
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

  const title = 'Udtalelser v3.0 – print alle K-grupper';
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

  const title = 'Udtalelser v3.0 – print alle elever';
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
    return cleanSpacing(ensureCurrentSchoolName(out));
  }

  function ensureCurrentSchoolName(text) {
    return String(text || '').replaceAll('Himmerlands Ungdomsskole', 'Himmerlands Efterskole');
  }

  async function readFileText(file) { return await file.text(); }

  // v2: Excel/XLSX-import til elevlisten.
  // Vi konverterer første regneark til CSV og genbruger den eksisterende, velafprøvede CSV-mapping.
  function isExcelStudentFile(file) {
    const name = String((file && file.name) || '').toLowerCase();
    return name.endsWith('.xlsx') || name.endsWith('.xls');
  }

  async function readStudentListAsCsvText(file) {
    if (!isExcelStudentFile(file)) return await readFileText(file);
    if (typeof XLSX === 'undefined') {
      throw new Error('Excel-import kræver XLSX-biblioteket. Åbn appen online, eller gem filen som CSV og prøv igen.');
    }
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: 'array' });
    const sheetName = workbook.SheetNames && workbook.SheetNames[0];
    if (!sheetName) throw new Error('Excel-filen indeholder ikke et læsbart ark.');
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_csv(sheet, { FS: ',', RS: '\n', blankrows: false });
  }

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
    disableWithHint('btnPrintAllStudents', !hasStudents, 'Indlæs først elevliste (Excel/CSV), før du kan printe.');
    disableWithHint('btnPrintAllGroups', !hasStudents, 'Indlæs først elevliste (Excel/CSV), før du kan printe.');

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

    on('studentsFile','change', async (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      let text = '';
      try {
        text = await readStudentListAsCsvText(f);
      } catch (err) {
        alert((err && err.message) ? err.message : 'Kunne ikke læse elevlisten.');
        return;
      }
      const parsed = parseCsv(text);
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
        statusEl.textContent = parts.length ? `✅ Elevliste indlæst fra ${f.name}. ${parts.join(' ')}` : `✅ Elevliste indlæst fra ${f.name}.`;
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
  btn.title = 'Klik for at indlæse en ny Excel/CSV og overskrive den nuværende elevliste';
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

/* v3.0: fjern rå signaturlinje fra template, når printmotoren selv laver signaturblok */
function cleanupDuplicateSignatureTextForPrint(html){
  try{
    return String(html || '')
      .replace(/(?:\s|&nbsp;)*Rasmus Damsgaard\s*&amp;\s*Måns Patrik Mårtensson(?:\s|&nbsp;)+Stinne Krogh Poulsen(?:\s|&nbsp;)*Kontaktlærere(?:\s|&nbsp;)+Forstander(?:\s|&nbsp;)*/gi, '')
      .replace(/(?:\s|&nbsp;)*Rasmus Damsgaard\s*&\s*Måns Patrik Mårtensson(?:\s|&nbsp;)+Stinne Krogh Poulsen(?:\s|&nbsp;)*Kontaktlærere(?:\s|&nbsp;)+Forstander(?:\s|&nbsp;)*/gi, '');
  }catch(e){ return html; }
}

