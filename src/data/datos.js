// Dataset sedes
let sedesMP = [
   {
    nombresede: 'Cartuja-Sevilla',
    direccion1 : 'PCT Cartuja C/Leonardo da Vinci, 15',
    direccion2 : '41092 Sevilla, España',
    telefono1 : '0034 954 630 562 ',
    telefono2 : '',
    fax : '',
    logoname : 'CENTRAL/FÁBRICAS',
    imagensede:'cartuja.jpg'
  },
  {
    nombresede: 'Calonge-Sevilla',
    direccion1 : 'Pol. Ind. Calonge, C/Metalurgia, 5',
    direccion2 : '41007 Sevilla, España',
    telefono1 : '0034 955 635 830',
    telefono2 : '',
    fax : '0',
    logoname : 'CENTRAL/FÁBRICAS',
    imagensede:'calonge.jpg'
  },
  {
    nombresede: 'Malpica-Zaragoza',
    direccion1 : 'Pol. Ind. Malpica, Calle D, parcela 99-100 (Muelle 61)',
    direccion2 : '50016 Zaragoza, España',
    telefono1 : '0034 976 654 540',
    telefono2 : '',
    fax : '',
    logoname : 'CENTRAL/FÁBRICAS',
    imagensede:'malpica.jpg'
  },
  {
    nombresede: 'Austria DTC',
    direccion1 : 'Triesterstraße 14',
    direccion2 : '2351 Wr. Neudorf, Austria',
    telefono1 : '0043 (0)2236 865626',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'austria.jpg'
  },
  {
    nombresede: 'France DTC',
    direccion1 : '4 Allée du Carré',
    direccion2 : '92230 Gennevilliers, France',
    telefono1 : '0033(0) 1 41 47 42 30',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'france.jpg'
  },
  {
    nombresede: 'The Netherlands DTC',
    direccion1 : 'Sternstraat 37A',
    direccion2 : '1771AN Wieringerwerf, The Netherlands',
    telefono1 : '0031 (0) 227 600 400',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'holland.jpg'
  }
  ,
  {
    nombresede: 'Poland DTC',
    direccion1 : 'UL, Koscielna, 21',
    direccion2 : '60-536 Poznan, Poland',
    telefono1 : '0048 618 455 900',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'poland.jpg'
  }
  ,
  {
    nombresede: 'Russia DTC',
    direccion1 : 'Krasnobogatyrskaya ul., 2',
    direccion2 : '107564 Moscow, Russia',
    telefono1 : '007 903 720 95 01',
    telefono2 : '007 495 720 95 01',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'russia.jpg'
  }
  ,
  {
    nombresede: 'Sweden DTC',
    direccion1 : 'Flottiljvägen 20',
    direccion2 : '392 41 Kalmar, Sweden',
    telefono1 : '0046 (0)76 776 84 06',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'sweden.jpg'
  }
  ,
  {
    nombresede: 'Czech Republic DTC',
    direccion1 : 'Pražská 18/1279',
    direccion2 : '10200 Praha, Czech Republic',
    telefono1 : '00420 2672 19304',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'czech.jpg'
  }
  ,
  {
    nombresede: 'España-Madrid DTC',
    direccion1 : 'Avda. de las Américas, 3. Nave B8',
    direccion2 : '28823 Coslada, Madrid',
    telefono1 : '0034 916 720 403',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'mpmadrid.jpg'
  }
  ,
  {
    nombresede: 'España-Cataluña DTC',
    direccion1 : 'C/ Mossen Josep Pons 1, 2ª planta, oficina 11',
    direccion2 : '08228 Terrassa, Barcelona',
    telefono1 : '0034 937 317 333',
    telefono2 : '0034 902 197 277',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'mpbarcelona.jpg'
  }
  ,
  {
    nombresede: 'España-Levante DTC',
    direccion1 : 'Pol. Nº1 de Catarroja C/Proyecto, 32, Nave 2C',
    direccion2 : '46470 Cataroja, Valencia',
    telefono1 : '0034 954 630 562',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'esplevante.jpg'
  }
  ,
  {
    nombresede: 'Argelia DTC',
    direccion1 : 'Argelia',
    direccion2 : '',
    telefono1 : '00213 550028392',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'argelia.jpg'
  }
  ,
  {
    nombresede: 'Lebanon DTC',
    direccion1 : 'Beirut',
    direccion2 : '',
    telefono1 : '00213 550028392',
    telefono2 : '',
    fax : '',
    logoname : 'MP DISTRIBUTION DTC',
    imagensede:'libano.jpg'
  }
  ,
  {
    nombresede: 'MP ALTOR DRANCY',
    direccion1 : '37 Rue Voltaire',
    direccion2 : '93700 Drancy',
    telefono1 : '0033 01 48 310 610',
    telefono2 : '',
    fax : '',
    logoname : 'MP ALTOR',
    imagensede:'altordrancy.jpg'
  }
  ,
  {
    nombresede: 'MP ALTOR ST JACQUES SUR DARNETAL',
    direccion1 : 'ZA de la briqueterie. Voie C – n°340.',
    direccion2 : '76160 ST JACQUES SUR DARNETAL',
    telefono1 : '0033 01 48 310 610',
    telefono2 : '',
    fax : '',
    logoname : 'MP ALTOR',
    imagensede:'altordarnetal.jpg'
  }
  ,
  {
    nombresede: 'MP ARVOR headquarters',
    direccion1 : '6 Rue du Pasteur Crespin',
    direccion2 : '22000 Saint-Brieuc, Francia',
    telefono1 : '0033 02 96 424 753',
    telefono2 : '',
    fax : '0033 148 310 630',
    logoname : 'MP ARVOR',
    imagensede:'arvor.jpg'
  },
  {
    nombresede: 'MP LIFTEN AMERSFOORT',
    direccion1 : 'AMERSFOORT Algolweg 13,',
    direccion2 : '3821 BG, The Netherlands',
    telefono1 : '0031 033 - 456 66 31',
    telefono2 : '',
    fax : '0031 033 - 456 66 31',
    logoname : 'MP LIFTEN_NL',
    imagensede:'devenco.jpg'
  },
  {
    nombresede: 'MP PROLIFT POZNAN',
    direccion1 : 'ul. Kościelna 21',
    direccion2 : '60-536 Poznan, Poland',
    telefono1 : '0048 61 845 59 00',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftpoznan.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT WARSZAWA',
    direccion1 : 'ul. Poleczki 40',
    direccion2 : '02-822, Warszawa, Poland',
    telefono1 : '0048 22 647 07 01',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftwarszawa.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT WROCŁAW',
    direccion1 : '',
    direccion2 : '',
    telefono1 : '0048 601 162 504',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftbreslavia.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT KRAKÓW',
    direccion1 : '',
    direccion2 : '',
    telefono1 : '0048 505 332 391',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftcracovia.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT GDAŃSK',
    direccion1 : '',
    direccion2 : '',
    telefono1 : '0048 505 332 391',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftgdansk.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT LUBLIN',
    direccion1 : '',
    direccion2 : '',
    telefono1 : '0048 505 332 391',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftlublin.jpg'
  }
  ,
  {
    nombresede: 'MP PROLIFT BIAŁYSTOK',
    direccion1 : '',
    direccion2 : '',
    telefono1 : '0048 505 332 391',
    telefono2 : '',
    fax : '',
    logoname : 'MP PROLIFT',
    imagensede:'proliftbialistok.jpg'
  }
  ,
  {
    nombresede: 'MP ASCENSORES CÁDIZ',
    direccion1 : 'C/. Doctor Pariente, 14',
    direccion2 : '11500 El Puerto de Santa María, Cádiz',
    telefono1 : '0034 956 54 78 08',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpcadiz.jpg'
  }
  ,
  {
    nombresede: 'MP ASCENSORES CÓRDOBA',
    direccion1 : 'C/. José María Martorell, 34',
    direccion2 : '14005 Córdoba',
    telefono1 : '0034 957 454 134',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpcordoba.jpg'
  }
   ,
  {
    nombresede: 'MP ASCENSORES MADRID',
    direccion1 : 'Avda de Las Américas Nun 3-Nave B-8',
    direccion2 : '28823 Coslada, Madrid',
    telefono1 : '0034 917 024 377',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpmadrid.jpg'
  },
  {
    nombresede: 'MP ASCENSORES SEVILLA',
    direccion1 : 'Pol. Ind. Calonge, C/Metalurgia, 5',
    direccion2 : '41007 Sevilla, España',
    telefono1 : '0034 954 933 944',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpsevilla.jpg'
  },
  {
    nombresede: 'MP ASCENSORES JAEN',
    direccion1 : 'C/. Senda de los huertos, 2 A local',
    direccion2 : '23002 Jaen',
    telefono1 : '0034 953 231 321',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpjaen.jpg'
  },
  {
    nombresede: 'MP ASCENSORES HUELVA',
    direccion1 : 'C/. Escultor León Ortega, 6',
    direccion2 : '21002 Huelva',
    telefono1 : '0034 959 326 400',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mphuelva.jpg'
  },
  {
    nombresede: 'MP ASCENSORES BARCELONA',
    direccion1 : 'C/. Mossen Josep Pons 1, 2ª planta, oficina 11',
    direccion2 : '08228. Les Fonts de Terrassa, Barcelona',
    telefono1 : '0034 902 197 277',
    telefono2 : '',
    fax : '',
    logoname : 'MP SIM ESPAÑA',
    imagensede:'mpbarcelona.jpg'
  }
  ,
  {
    nombresede: 'MP HISS KALMAR',
    direccion1 : 'Flottiljvägen 20',
    direccion2 : '392 41 Kalmar',
    telefono1 : '+46 (0) 480- 31 44 77',
    telefono2 : '',
    fax : '',
    logoname : 'MP HISS',
    imagensede:'hisskalmar.jpg'
  }
  ,
  {
    nombresede: 'MP HISS STOCKHOLM',
    direccion1 : 'Kistagången 12 ',
    direccion2 : '16440 Kista',
    telefono1 : '+46 (0) 480- 31 44 77',
    telefono2 : '',
    fax : '',
    logoname : 'MP HISS',
    imagensede:'hissstockholm.jpg'
  }
  ,
  {
    nombresede: 'MP HISS KARLSKRONA',
    direccion1 : 'Kollonivägen 65',
    direccion2 : '371 54 Karlskrona',
    telefono1 : '+46 (0) 480- 31 44 77',
    telefono2 : '',
    fax : '',
    logoname : 'MP HISS',
    imagensede:'hisskarlskrona.jpg'
  }
    ,
  {
    nombresede: 'MP CZECH BRNO',
    direccion1 : 'Křižíkova 70b',
    direccion2 : '612 00 Brno',
    telefono1 : '00420 549 249 420',
    telefono2 : '',
    fax : '',
    logoname : 'MP LIFTS CZ',
    imagensede:'czechbrno.jpg'
  }
   ,
  {
    nombresede: 'MP CZECH PRAHA',
    direccion1 : 'Pražská 18/1279',
    direccion2 : '102 00 Praha',
    telefono1 : '00420 267 219 304',
    telefono2 : '',
    fax : '',
    logoname : 'MP LIFTS CZ',
    imagensede:'czechpraha.jpg'
  }
  ,
  {
    nombresede: 'MP ATL',
    direccion1 : '5 av Lionel Terray',
    direccion2 : '69330 Meyzieu',
    telefono1 : '0033 04 78 177 015',
    telefono2 : '',
    fax : '',
    logoname : 'MP ATL',
    imagensede:'atl.jpg'
  }
  ,
  {
    nombresede: 'MP SGA',
    direccion1 : '301 Ch du littoral',
    direccion2 : '13016 Marseille',
    telefono1 : '0033 04 91 510 817',
    telefono2 : '',
    fax : '',
    logoname : 'MP SGA',
    imagensede:'sga.jpg'
  }
    ,
  {
    nombresede: 'MP LIFTEN WOMMELGEM',
    direccion1 : 'Koralenhoeve 15c',
    direccion2 : '2160 Wommelgem',
    telefono1 : '0032 036 00 17 16',
    telefono2 : '',
    fax : '',
    logoname : 'MP LIFTEN_BE',
    imagensede:'belgica.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA SEDIUL CENTRAL',
    direccion1 : 'Calea Giulesti nr. 8D',
    direccion2 : '060274 București',
    telefono1 : '0040 312 07 01',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'ifmasede.jpg'
  }
    ,
  {
    nombresede: 'MP IFMA BUCUREȘTI',
    direccion1 : 'Șos. Giulești nr. 6-8, sect. 6',
    direccion2 : '060274 București',
    telefono1 : '0040 213 176 246',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'bucarest.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA CONSTANȚA',
    direccion1 : 'Str. Soveja nr. 64 A bloc O4',
    direccion2 : '900462 Constanța',
    telefono1 : '0040 241 632 123',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'constanza.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA TIMIȘOARA',
    direccion1 : 'Str. A. Demetriade, nr.1-3, sc.B, et.2 ap.2, cam.29',
    direccion2 : '300310 Timișoara',
    telefono1 : '0040 256 282 734',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'timisoara.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA BRAȘOV',
    direccion1 : 'Str. Aurora nr. 18',
    direccion2 : '500331 Brașov',
    telefono1 : '0040 744 779 710',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'brasov.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA BRĂILA',
    direccion1 : 'Str. Al. I. Cuza nr. 188',
    direccion2 : '810048 Brăila',
    telefono1 : '0040 239 617 474',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'braila.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA IAȘI',
    direccion1 : 'Str. Minervei nr. 1 Iași',
    direccion2 : '700694 Iași',
    telefono1 : '0040 232 316 290',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'iasi.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA ROMAN',
    direccion1 : 'B-dul.Roman Mușat, nr.26, Hotel Roman',
    direccion2 : '611002 Roman',
    telefono1 : '0040 233 742 063',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'roman.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA TG. JIU',
    direccion1 : 'Str. 23 August, nr.59 A, et 2, bir.4',
    direccion2 : '611002 Târgu jiu',
    telefono1 : '0040 253 228 148',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'jiu.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA TG. MUREȘ',
    direccion1 : 'Str Budai Nagy Antal nr. 18/C3',
    direccion2 : '540004 Târgu mures',
    telefono1 : '0040 365 734 789',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'mures.jpg'
  }
  ,
  {
    nombresede: 'MP IFMA ORADEA',
    direccion1 : 'Str. Principatelor Unite nr.36',
    direccion2 : 'Ladislau Totka ',
    telefono1 : '0040 756 038 700',
    telefono2 : '',
    fax : '',
    logoname : 'MP IFMA',
    imagensede:'oradea.jpg'
  }
];
// Dataset logos
let logosMP = [
  {
    id:1,
    name : 'CENTRAL/FÁBRICAS',
    path : 'CENTRAL-FABRICAS',
    emaildomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuege.com'
    },
    webdomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuege.com',
    },
    defaultlang:'en'
  },
  {
    id:2,
    name : 'MP DISTRIBUTION DTC',
    path : 'MP-DISTRIBUTION-DTC',
    emaildomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuege.com'
    },
    webdomain : {
      es : 'mpascensores.com',
      en : 'mplifts.com',
      fr : 'mpascenseurs.com',
      de : 'mpaufzuege.com',
    },
    defaultlang:'en'
  },
  {
    id:3,
    name : 'MP ALTOR',
    path : 'MP-ALTOR',
    emaildomain : {
      fr : 'mpaltor.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    },
    defaultlang:'fr'
  },
  {
    id:4,
    name : 'MP ARVOR',
    path : 'MP-ARVOR',
    emaildomain: {
      fr : 'mpascenseurs.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    },
    defaultlang:'fr'
  },
  {
    id:5,
    name : 'MP LIFTEN_NL',
    path : 'MP-LIFTEN_NL',
    emaildomain : {
      nl : 'mpliften.nl',
    },
    webdomain: {
      nl : 'mpliften.nl'
    },
    defaultlang:'nl'
  },
  {
    id:6,
    name : 'MP PROLIFT',
    path : 'MP-PROLIFT',
    emaildomain : {
      pl : 'mplifts.com',
    },
    webdomain: {
      pl : 'mplifts.pl'
    },
    defaultlang:'pl'
  },
  {
    id:7,
    name : 'MP SIM ESPAÑA',
    path : 'MP-SIM-ESP',
    emaildomain : {
      es : 'mpascensores.es',
    },
    webdomain: {
      es : 'mpascensores.es'
    },
    defaultlang:'es'
  }
  ,
  {
    id:8,
    name : 'MP HISS',
    path : 'MP-HISS',
    emaildomain : {
      se : 'mpsweden.se',
    },
    webdomain: {
      se : 'mphiss.se'
    },
    defaultlang:'se'
  }
  ,
  {
    id:9,
    name : 'MP LIFTS CZ',
    path : 'MP',
    emaildomain : {
      cz : 'mplifts.com',
    },
    webdomain: {
      cz : 'mplifts.cz'
    },
    defaultlang:'cz'
  }
  ,
  {
    id:10,
    name : 'MP ATL',
    path : 'MP-ATL',
    emaildomain : {
      fr : 'mp-atl.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    },
    defaultlang:'fr'
  }
    ,
  {
    id:11,
    name : 'MP SGA',
    path : 'MP-SGA',
    emaildomain : {
      fr : 'mpascenseurs.com',
    },
    webdomain : {
      fr : 'mpascenseurs.fr'
    },
    defaultlang:'fr'
  }
  ,
  {
    id:12,
    name : 'MP LIFTEN_BE',
    path : 'MP-LIFTEN_BE',
    emaildomain : {
      be : 'mpliften.com',
    },
    webdomain: {
      be : 'mpliften.be'
    },
    defaultlang:'be'
  }
  ,
  {
    id:13,
    name : 'MP IFMA',
    path : 'MP-IFMA',
    emaildomain : {
      ro : 'mpifma.ro',
    },
    webdomain: {
      ro : 'mpifma.ro'
    },
    defaultlang:'ro'
  }
];


export {sedesMP,logosMP};